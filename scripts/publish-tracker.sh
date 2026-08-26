#!/usr/bin/env bash
#
# Publish public/omnilens-tracker.js to the CDN that tenant sites load it from.
#
#   ./scripts/publish-tracker.sh 78
#
# Objects are written to an immutable, version-scoped path, so publishing never
# changes a version a tenant is already pinned to. Rolling a tenant forward is a
# deliberate one-line edit of its script URL — never a side effect of a deploy.
#
set -euo pipefail

VERSION="${1:-}"
if [[ -z "$VERSION" ]]; then
  echo "usage: $0 <version>   e.g. $0 78" >&2
  exit 1
fi

source "$(cd "$(dirname "$0")" && pwd)/_env.sh"

BUCKET="$OMNILENS_TRACKER_BUCKET"
DISTRIBUTION_ID="$OMNILENS_TRACKER_DISTRIBUTION_ID"
CDN_DOMAIN="$OMNILENS_TRACKER_CDN_DOMAIN"

SRC="$(cd "$(dirname "$0")/.." && pwd)/public/omnilens-tracker.js"
KEY="tracker/v${VERSION}/omnilens-tracker.js"

if [[ ! -f "$SRC" ]]; then
  echo "error: $SRC not found" >&2
  exit 1
fi

if aws s3api head-object --bucket "$BUCKET" --key "$KEY" >/dev/null 2>&1; then
  echo "error: v${VERSION} already published — versions are immutable, use a new one." >&2
  exit 1
fi

echo "Publishing $(wc -c <"$SRC" | tr -d ' ') bytes to s3://${BUCKET}/${KEY}"
aws s3 cp "$SRC" "s3://${BUCKET}/${KEY}" \
  --content-type "application/javascript; charset=utf-8" \
  --cache-control "public, max-age=31536000, immutable"

URL="https://${CDN_DOMAIN}/${KEY}"
echo "Waiting for the edge to serve it..."
for _ in $(seq 1 30); do
  if [[ "$(curl -s -o /dev/null -w '%{http_code}' "$URL")" == "200" ]]; then
    echo "Live: $URL"
    exit 0
  fi
  sleep 5
done

echo "Uploaded, but $URL did not return 200 yet. Distribution ${DISTRIBUTION_ID} may still be deploying." >&2
exit 1
