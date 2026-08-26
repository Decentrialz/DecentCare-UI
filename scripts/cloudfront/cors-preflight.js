// Answers CORS preflights at the edge for the Omnilens tracking API.
//
// The tracker sends Content-Type: application/json and x-tenant-id, which makes
// every call a non-simple request, so browsers preflight it. The upstream API
// only allow-lists a couple of origins and rejects tenant sites outright, so the
// preflight has to be terminated here instead of reaching the origin.
//
// Deployed to both environments as omnilens-cors-preflight (dev) and
// omnilens-cors-preflight-prod. Update with:
//   aws cloudfront update-function --name <name> --function-code fileb://this
function handler(event) {
  var request = event.request;

  if (request.method === 'OPTIONS') {
    return {
      statusCode: 204,
      statusDescription: 'No Content',
      headers: {
        'access-control-allow-origin': { value: '*' },
        'access-control-allow-methods': { value: 'GET,POST,OPTIONS' },
        'access-control-allow-headers': { value: 'content-type,x-tenant-id' },
        'access-control-max-age': { value: '86400' },
        'cache-control': { value: 'public, max-age=86400' }
      }
    };
  }

  return request;
}
