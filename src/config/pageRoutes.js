import routeMap from "../../pageData/route-map.json";

const routeByLegacyPath = Object.fromEntries(
  routeMap.flatMap((route) => [
    route.legacyPath,
    route.previousPath,
    ...(Array.isArray(route.redirectPaths) ? route.redirectPaths : []),
  ].filter(Boolean).map((source) => [source, route.path]))
);

// These interactive routes do not have a source Markdown page of their own.
const extraRoutes = {
  "/tools": "/tools/canada-immigration-calculators",
  "/tools/free-assessment": "/assessment/free-canada-immigration-assessment",
  "/canada-immigration-calculators": "/tools/canada-immigration-calculators",
  "/crs-calculator-canada": "/tools/crs-calculator-canada",
  "/free-canada-immigration-assessment": "/assessment/free-canada-immigration-assessment",
  "/contact": "/contact-us",
  "/contact/contact-immigration-consultant-brampton": "/contact/book-immigration-consultation-canada",
  "/book": "/contact/book-immigration-consultation-canada",
};

export function currentPagePath(pathname) {
  if (typeof pathname !== "string" || !pathname.startsWith("/")) return pathname;
  return extraRoutes[pathname] || routeByLegacyPath[pathname] || pathname;
}

export default routeByLegacyPath;
