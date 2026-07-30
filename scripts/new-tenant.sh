#!/usr/bin/env bash
#
# Scaffold a new tenant.
#
#   ./scripts/new-tenant.sh lux-hospitals "Lux Hospitals" 06a3a49e-b06b-7aad-8000-e5e9a452a5b7
#
# Writes tenants/<slug>.json with only what differs from _defaults.json, then
# tells you what to do next. Publishing is a separate, deliberate step.
#
set -euo pipefail

SLUG="${1:-}"
SITE_NAME="${2:-}"
TENANT_UUID="${3:-}"

if [[ -z "$SLUG" || -z "$SITE_NAME" ]]; then
  echo "usage: $0 <slug> \"<Site Name>\" [tenant-uuid]" >&2
  echo >&2
  echo "  slug         becomes a public URL path; lowercase and hyphenated." >&2
  echo "  tenant-uuid  the backend tenant UUID. Omit it only if the client's" >&2
  echo "               hostnames are registered in tenant-hostnames, in which" >&2
  echo "               case the backend resolves the tenant by domain instead." >&2
  exit 1
fi

# A slug here would be silently accepted by the backend and attribute to nothing.
if [[ -n "$TENANT_UUID" && ! "$TENANT_UUID" =~ ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$ ]]; then
  echo "error: '$TENANT_UUID' is not a UUID. Backend tenant ids are UUIDs." >&2
  exit 1
fi

# The id lands in a URL and an S3 key, so constrain it rather than discovering
# the problem at publish time.
if [[ ! "$SLUG" =~ ^[a-z0-9]([a-z0-9-]*[a-z0-9])?$ ]]; then
  echo "error: '$SLUG' must be lowercase alphanumeric with hyphens." >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TENANT_FILE="$ROOT/tenants/$SLUG.json"
CDN_ORIGIN="${OMNILENS_CDN_ORIGIN:-https://cdn.dev.decentcare.ai}"

if [[ -e "$TENANT_FILE" ]]; then
  echo "error: $TENANT_FILE already exists." >&2
  echo "Edit it directly — this script only scaffolds new tenants." >&2
  exit 1
fi

# Both DOM-mutating features start off. They rewrite content on a client's live
# site, and virtual numbers additionally need a number pool provisioned for this
# tenant on the backend, so neither should switch on by default.
if [[ -n "$TENANT_UUID" ]]; then
  TENANT_LINE="  \"tenantId\": \"$TENANT_UUID\","
else
  TENANT_LINE="  \"_tenantResolution\": \"No tenantId: the backend resolves this tenant from the page hostname. Every hostname the client serves from must be registered via POST /api/v1/tenant-hostnames.\","
fi

cat > "$TENANT_FILE" <<JSON
{
$TENANT_LINE
  "site": "$SITE_NAME",
  "virtualNumbers": {
    "enabled": false
  },
  "whatsapp": {
    "enabled": false
  }
}
JSON

echo "Created tenants/$SLUG.json"
echo
echo "Next:"
echo "  1. Publish:  ./scripts/publish-tenant-loaders.sh"
echo "  2. Give the client this one line, to put in their <head>:"
echo
echo "       <script async src=\"$CDN_ORIGIN/t/$SLUG.js\"></script>"
echo
echo "  3. Confirm it is live:  ./scripts/healthcheck/run-local.sh"
echo
echo "Before enabling virtualNumbers for this tenant:"
echo "  - a number pool must exist for the tenant UUID on the tracking backend"
echo "  - every hostname the client serves from must be registered:"
echo "      POST /api/v1/tenant-hostnames   (assign resolves tenant by hostname,"
echo "      not by tenantId, so this is required even when tenantId is set)"
echo "  - check phoneTextSelector / telLinkSelector match their markup"
