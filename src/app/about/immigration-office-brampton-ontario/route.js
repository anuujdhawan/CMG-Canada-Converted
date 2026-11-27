const destination = "https://commonwealthmigration.ca/locations/brampton";

function redirectToBramptonLocation() {
  return Response.redirect(destination, 301);
}

export function GET() {
  return redirectToBramptonLocation();
}

export function HEAD() {
  return redirectToBramptonLocation();
}
