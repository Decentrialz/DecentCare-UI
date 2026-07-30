#!/usr/bin/env bash
#
# Scaffold a new tenant.
#
#   ./scripts/new-tenant.sh gowd-dental "Gowds Hospital"
#
# Writes tenants/<tenantId>.json with only what differs from _defaults.json, then
# tells you what to do next. Publishing is a separate, deliberate step.
#
set -euo pipefail

TENANT_ID="${1:-}"
SITE_NAME="${2:-}"

if [[ -z "$TENANT_ID" || -z "$SITE_NAME" ]]; then
  echo "usage: $0 <tenantId> \"<Site Name>\"" >&2
  echo "  tenantId becomes a public URL path, so keep it lowercase and hyphenated." >&2
  exit 1
fi

# The id lands in a URL and an S3 key, so constrain it rather than discovering
# the problem at publish time.
if [[ ! "$TENANT_ID" =~ ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$ ]]; then
  echo "error: '$TENANT_ID' must be lowercase alphanumeric with hyphens." >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TENANT_FILE="$ROOT/tenants/$TENANT_ID.json"
CDN_ORIGIN="${OMNILENS_CDN_ORIGIN:-https://cdn.dev.decentcare.ai}"

if [[ -e "$TENANT_FILE" ]]; then
  echo "error: $TENANT_FILE already exists." >&2
  echo "Edit it directly — this script only scaffolds new tenants." >&2
  exit 1
fi

# Both DOM-mutating features start off. They rewrite content on a client's live
# site, and virtual numbers additionally need a number pool provisioned for this
# tenant on the backend, so neither should switch on by default.
cat > "$TENANT_FILE" <<JSON
{
  "site": "$SITE_NAME",
  "virtualNumbers": {
    "enabled": false
  },
  "whatsapp": {
    "enabled": false
  }
}
JSON

echo "Created tenants/$TENANT_ID.json"
echo
echo "Next:"
echo "  1. Publish:  ./scripts/publish-tenant-loaders.sh"
echo "  2. Give the client this one line, to put in their <head>:"
echo
echo "       <script async src=\"$CDN_ORIGIN/t/$TENANT_ID.js\"></script>"
echo
echo "  3. Confirm it is live:  ./scripts/healthcheck/run-local.sh"
echo
echo "Before enabling virtualNumbers for this tenant:"
echo "  - a number pool must exist for '$TENANT_ID' on the tracking backend"
echo "  - check phoneTextSelector / telLinkSelector actually match their markup"
