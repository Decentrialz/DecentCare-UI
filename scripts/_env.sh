# Sourced by the publish scripts. Selects an environment and exports its config.
#
#   OMNILENS_ENV=prod ./scripts/publish-tenant-loaders.sh
#
# Defaults to dev so an unqualified command can never touch production.
: "${OMNILENS_ENV:=dev}"

_env_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
_env_file="$_env_root/environments/${OMNILENS_ENV}.env"

if [[ ! -f "$_env_file" ]]; then
  echo "error: unknown environment '${OMNILENS_ENV}' (no $_env_file)" >&2
  exit 1
fi

# Values already in the environment win, so a one-off override still works.
while IFS='=' read -r key value; do
  [[ -z "$key" || "$key" == \#* ]] && continue
  [[ -n "${!key:-}" ]] && continue
  export "$key=$value"
done < "$_env_file"

echo "[${OMNILENS_ENV}] profile=${AWS_PROFILE} cdn=${OMNILENS_CDN_ORIGIN} bucket=${OMNILENS_TRACKER_BUCKET}"
