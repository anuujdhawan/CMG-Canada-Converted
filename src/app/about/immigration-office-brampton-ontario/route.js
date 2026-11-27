const destination = "/locations/brampton";

function redirectToBramptonLocation(request) {
  return Response.redirect(new URL(destination, request.url), 301);
}

export function GET(request) {
  return redirectToBramptonLocation(request);
}

export function HEAD(request) {
  return redirectToBramptonLocation(request);
}
