#!/usr/bin/env bash
#
# Run the Omnilens health check on demand and print its findings.
#
#   ./scripts/healthcheck/run-local.sh
#
# Invokes the deployed Lambda rather than running the checks locally, so what you
# see is exactly what the schedule sees. Use scripts/healthcheck/deploy.sh after
# editing lambda_function.py.
#
set -euo pipefail

source "$(cd "$(dirname "$0")/.." && pwd)/_env.sh"

FUNCTION="$OMNILENS_HEALTHCHECK_FUNCTION"
OUT="$(mktemp)"
trap 'rm -f "$OUT"' EXIT

aws lambda invoke --function-name "$FUNCTION" --payload '{}' "$OUT" \
  --query "{Status:StatusCode,Error:FunctionError}" --output json

python3 -m json.tool "$OUT"

# Non-zero exit when something is wrong, so this is usable as a CI gate.
python3 -c "import json,sys; sys.exit(1 if json.load(open('$OUT')).get('failureCount', 1) else 0)"
