"""
Synthetic health check for the Omnilens tracker delivery and ingest path.

Runs on a schedule and verifies, from outside, the things that actually break:

  * every tenant loader is served and looks like a loader
  * the tracker build each loader points at exists (catches a loader published
    against a tracker version that was never uploaded)
  * vendored third-party assets referenced by loaders resolve
  * CORS preflight is answered at the edge for a tenant origin
  * the ingest path reaches the backend and the backend is processing

Tenants are discovered by listing the bucket, so onboarding a tenant does not
require touching this check.

Publishes Omnilens/HealthCheckFailures to CloudWatch. A non-zero value means at
least one check failed; the reasons are in the log group.
"""

import json
import os
import re
import urllib.error
import urllib.request

import boto3

CDN_ORIGIN = os.environ.get("CDN_ORIGIN", "https://cdn.dev.decentcare.ai")
BUCKET = os.environ.get("TRACKER_BUCKET", "decentcare-dev-omnilens-tracker")
# A representative tenant origin — the preflight must succeed for origins the
# backend itself rejects, which is the whole reason the edge function exists.
PROBE_ORIGIN = os.environ.get("PROBE_ORIGIN", "https://www.drgowds.com")
METRIC_NAMESPACE = "Omnilens"
TIMEOUT = 10

s3 = boto3.client("s3")
cloudwatch = boto3.client("cloudwatch")


def http(method, url, headers=None, body=None):
    """Return (status, headers, body_text). Never raises for HTTP status."""
    request = urllib.request.Request(url, method=method, data=body)
    for key, value in (headers or {}).items():
        request.add_header(key, value)
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
            return response.status, dict(response.headers), response.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as exc:
        return exc.code, dict(exc.headers or {}), exc.read().decode("utf-8", "replace")
    except Exception as exc:  # DNS, TLS, timeout
        return None, {}, f"{type(exc).__name__}: {exc}"


def discover_tenants():
    tenants = []
    paginator = s3.get_paginator("list_objects_v2")
    for page in paginator.paginate(Bucket=BUCKET, Prefix="t/"):
        for obj in page.get("Contents", []):
            match = re.fullmatch(r"t/(.+)\.js", obj["Key"])
            if match:
                tenants.append(match.group(1))
    return sorted(tenants)


def check_tenant(tenant, failures):
    """Loader is served, is a loader, and its referenced assets resolve."""
    url = f"{CDN_ORIGIN}/t/{tenant}.js"
    status, _, body = http("GET", url)

    if status != 200:
        failures.append(f"loader {tenant}: expected 200, got {status}")
        return
    if "OmnilensConfig" not in body:
        failures.append(f"loader {tenant}: response does not set OmnilensConfig")
        return

    # Every absolute asset the loader tells the browser to fetch must resolve.
    # This is what catches a loader published against an unpublished tracker.
    for asset in sorted(set(re.findall(r'"(https://[^"]+\.js)"', body))):
        asset_status, _, _ = http("GET", asset)
        if asset_status != 200:
            failures.append(f"loader {tenant}: asset {asset} returned {asset_status}")


def check_preflight(failures):
    """The edge must answer OPTIONS for origins the backend rejects."""
    status, headers, _ = http(
        "OPTIONS",
        f"{CDN_ORIGIN}/api/v1/collect",
        {
            "Origin": PROBE_ORIGIN,
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "content-type,x-tenant-id",
        },
    )
    if status not in (200, 204):
        failures.append(f"preflight: expected 204, got {status}")
        return

    allow_origin = {k.lower(): v for k, v in headers.items()}.get("access-control-allow-origin")
    if not allow_origin:
        failures.append("preflight: no Access-Control-Allow-Origin header")


def check_ingest(failures):
    """
    Ingest reaches the backend and the backend is processing requests.

    Deliberately sends an invalid payload and expects a validation rejection.
    A validation error proves edge -> origin -> application logic is alive,
    without writing a synthetic event into the warehouse.
    """
    status, _, body = http(
        "POST",
        f"{CDN_ORIGIN}/api/v1/collect",
        {"Content-Type": "application/json", "x-tenant-id": "__healthcheck__"},
        json.dumps({"__healthcheck": True}).encode(),
    )

    if status is None:
        failures.append(f"ingest: request failed ({body[:120]})")
        return
    # 2xx would mean it accepted the probe (path healthy, validation loosened).
    # 4xx validation means healthy too. Anything else means the path is broken.
    if status not in (200, 201, 202, 400, 422):
        failures.append(f"ingest: unexpected status {status} ({body[:120]})")


def lambda_handler(event, context):
    failures = []

    tenants = discover_tenants()
    if not tenants:
        failures.append("no tenant loaders found in the bucket")
    for tenant in tenants:
        check_tenant(tenant, failures)

    check_preflight(failures)
    check_ingest(failures)

    cloudwatch.put_metric_data(
        Namespace=METRIC_NAMESPACE,
        MetricData=[
            {"MetricName": "HealthCheckFailures", "Value": len(failures), "Unit": "Count"},
            {"MetricName": "TenantsChecked", "Value": len(tenants), "Unit": "Count"},
        ],
    )

    result = {"tenants": tenants, "failureCount": len(failures), "failures": failures}
    print(json.dumps(result))
    return result
