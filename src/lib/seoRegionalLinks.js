/*
 * Regional landing-page cross-links.
 *
 * Regional landing pages (for example the United Kingdom guide) need *inbound*
 * internal links to be discoverable and to inherit internal link equity. The
 * mega-menu and the mobile menu are only mounted once a visitor opens them, so
 * their links are absent from the server-rendered HTML a crawler receives —
 * a regional page can therefore end up reachable only through the sitemap.
 *
 * This layer appends one short, contextual cross-link to the route pages that
 * are most relevant to each regional audience, so the regional page is linked
 * from real body content on the pages a UK-based searcher actually lands on.
 *
 * Source page records stay untouched: these blocks are composed at render time
 * by the shared SEO content layer (`getSeoContentBlocks`).
 */

const normalizePath = (path = "") => String(path).split("?")[0].split("#")[0].replace(/\/$/, "") || "/";

const REGIONAL_LANDINGS = [
  {
    path: "/canada-immigration-from-uk",
    label: "Canada immigration from the UK",
    audience: "the United Kingdom",
    evidence: "UK police certificates, an IRCC panel physician in the UK and a GBP-to-CAD funds history",
    sources: [
      {
        path: "/immigrate/express-entry",
        route: "an Express Entry profile",
        angle: "how a UK profile scores on the CRS, which of the three federal programs fits a British work history, and how the language test and credential assessment are sequenced",
      },
      {
        path: "/immigrate/federal-skilled-worker",
        route: "a Federal Skilled Worker application",
        angle: "how the 67-point selection grid treats UK education and skilled employment, and what the Educational Credential Assessment changes",
      },
      {
        path: "/immigrate/provincial-nominee-program-all-provinces-consolidated",
        route: "a provincial nomination",
        angle: "how a UK applicant compares provinces when the federal pool is competitive, and how a genuine settlement plan is evidenced",
      },
      {
        path: "/immigrate/business-immigration-and-start-up-visa",
        route: "a business or Start-Up Visa route",
        angle: "how a UK founder evidences ownership, source of funds and designated-organisation support",
      },
      {
        path: "/work-and-study/international-experience-canada-iec",
        route: "an International Experience Canada permit",
        angle: "how young UK citizens use the working holiday category, how the current age range and quota apply, and how the temporary period builds toward Canadian work experience",
      },
      {
        path: "/work-and-study/canada-work-permit-overview",
        route: "a Canadian work permit",
        angle: "which permit a UK professional is most likely to use, and how exemption categories differ from the LMIA stream",
      },
      {
        path: "/work-and-study/canada-study-permit",
        route: "a study permit",
        angle: "how a UK student evidences the study plan, tuition and living funds, and why the provincial attestation now matters",
      },
      {
        path: "/work-and-study/post-graduation-work-permit-pgwp",
        route: "a Post-Graduation Work Permit",
        angle: "how a UK graduate converts a Canadian credential into skilled work experience and a later permanent-residence route",
      },
      {
        path: "/sponsor/spousal-and-partner-sponsorship-overview",
        route: "a spousal or partner sponsorship",
        angle: "how a UK-based couple evidences a genuine relationship, and what the sponsor's undertaking actually commits them to",
      },
      {
        path: "/sponsor/parents-and-grandparents-program-pgp",
        route: "a Parents and Grandparents Program application",
        angle: "how UK-based families approach the program, and when the Super Visa is the more realistic option",
      },
      {
        path: "/tools/crs-calculator-canada",
        route: "a CRS estimate",
        angle: "which CRS inputs a UK applicant can actually support, and where a calculator estimate stops being reliable",
      },
      {
        path: "/assessment/free-canada-immigration-assessment",
        route: "a first assessment",
        angle: "what a UK applicant should prepare before the first review, and which document carries the longest lead time",
      },
    ],
  },
];

/**
 * Return additive blocks that cross-link a route page to its regional guide.
 * Returns an empty array for paths with no regional companion.
 */
export function getRegionalLandingLinks(page) {
  const path = normalizePath(page?.path);
  if (!path) return [];

  const blocks = [];
  for (const landing of REGIONAL_LANDINGS) {
    const source = landing.sources.find((candidate) => candidate.path === path);
    if (!source) continue;
    blocks.push(
      { type: "heading", level: 2, text: `Applying from ${landing.audience}?` },
      {
        type: "paragraph",
        text: `If you are preparing ${source.route} from ${landing.audience}, read the companion guide to this page: [${landing.label}](${landing.path}). It covers ${source.angle}, plus the ${landing.evidence} that this route expects.`,
      },
    );
  }
  return blocks;
}

export default getRegionalLandingLinks;
