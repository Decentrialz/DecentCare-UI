#!/usr/bin/env bash
#
# Build and publish every tenant loader to the CDN.
#
#   ./scripts/publish-tenant-loaders.sh
#
# Loaders are deliberately short-cached and invalidated on publish, so config
# changes reach tenants within a minute or two. The tracker builds they point at
# stay immutable — see scripts/publish-tracker.sh.
#
set -euo pipefail

: "${AWS_PROFILE:=decentcare-dev}"
export AWS_PROFILE

BUCKET="${OMNILENS_TRACKER_BUCKET:-decentcare-dev-omnilens-tracker}"
DISTRIBUTION_ID="${OMNILENS_TRACKER_DISTRIBUTION_ID:-E6V72KSXVI57V}"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/.tenant-build"

node "$ROOT/scripts/build-tenant-loaders.mjs"

# Loaders are the control plane for every tenant site, so they revalidate fast:
# a config change — or a rollback of a bad one — should reach visitors in about a
# minute. stale-while-revalidate keeps that cheap, serving the cached copy while
# the refresh happens in the background, so no visitor waits on it.
aws s3 sync "$OUT_DIR/t/" "s3://${BUCKET}/t/" \
  --delete \
  --content-type "application/javascript; charset=utf-8" \
  --cache-control "public, max-age=60, stale-while-revalidate=300"

echo "Invalidating /t/* ..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/t/*" \
  --query "Invalidation.Id" --output text)

aws cloudfront wait invalidation-completed \
  --distribution-id "$DISTRIBUTION_ID" --id "$INVALIDATION_ID"

echo "Published:"
for f in "$OUT_DIR"/t/*.js; do
  echo "  https://cdn.dev.decentcare.ai/t/$(basename "$f")"
done
