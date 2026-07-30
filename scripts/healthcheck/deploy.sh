#!/usr/bin/env bash
#
# Ship changes to the health check Lambda.
#
#   ./scripts/healthcheck/deploy.sh
#
set -euo pipefail

: "${AWS_PROFILE:=decentcare-dev}"
export AWS_PROFILE

FUNCTION="${OMNILENS_HEALTHCHECK_FUNCTION:-decentcare-dev-omnilens-healthcheck}"
HERE="$(cd "$(dirname "$0")" && pwd)"
ZIP="$(mktemp -d)/healthcheck.zip"

zip -q -j "$ZIP" "$HERE/lambda_function.py"
aws lambda update-function-code --function-name "$FUNCTION" \
  --zip-file "fileb://$ZIP" --query "{Name:FunctionName,Size:CodeSize}" --output json
aws lambda wait function-updated-v2 --function-name "$FUNCTION"

echo "Deployed. Verifying:"
"$HERE/run-local.sh"
