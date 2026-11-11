import sourcePages from "@/data/cmg-pages.json";
import sourceMenu from "@/data/cmg-menu.json";
import legalPages from "@/data/cmg-legal.json";
import aboutPages from "@/data/about-pages";
import ukPages from "@/data/uk-pages";
import locationPages from "@/data/location-pages";

const normalizePath = (value) => {
  const pathname = String(value || "/").split("?")[0].split("#")[0];
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
};

function normalizeBlocks(blocks = []) {
  const result = [];
  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    const next = blocks[index + 1];
    if (block.type === "paragraph" && /^Q:\s*/i.test(block.text) && next?.type === "paragraph" && /^A:\s*/i.test(next.text)) {
      result.push({
        type: "faq",
        question: block.text.replace(/^Q:\s*/i, "").trim(),
        answer: next.text.replace(/^A:\s*/i, "").trim(),
      });
      index += 1;
      continue;
    }
    result.push(block);
  }
  return result;
}

/**
 * Which file each page record came from. `sitemap.js` turns this into a real
 * `lastmod` (the file's modification date) instead of a frozen placeholder, so
 * newly authored pages advertise a recent date and get picked up sooner.
 * Kept as a bare filename here — this module is imported by client components,
 * so it must never touch `fs`.
 */
const SOURCE_FILES = {
  source: "src/data/cmg-pages.json",
  about: "src/data/about-pages.js",
  uk: "src/data/uk-pages.js",
  locations: "src/data/location-pages.js",
  legal: "src/data/cmg-legal.json",
};

// Directional long-tail targets combine relevant terms from the project's
// approximate keyword workbook with editorial questions for uncovered routes.
// Treat them as targeting ideas, not live difficulty measurements.
const PAGE_KEYWORD_CANDIDATES = {
  "/immigrate/express-entry": [
    "Express Entry CRS changes November 2026",
    "Express Entry job offer points without an LMIA",
    "CRS score after the November 2026 changes",
  ],
  "/immigrate/federal-skilled-worker": ["Federal Skilled Worker 67-point calculator"],
  "/immigrate/agri-food-immigration-pilot": [
    "Agri-Food Pilot closed to new applications Canada",
    "Canada PR options for agriculture and food processing workers",
  ],
  "/immigrate/rural-and-northern-immigration-pilot": [
    "Rural and Northern Immigration Pilot closed to new applications",
    "Rural Community Immigration Program Canada 2027",
  ],
  "/immigrate/municipal-nominee-program": [
    "Canada Municipal Nominee Program status",
    "Is the Municipal Nominee Program open in Canada",
  ],
  "/immigrate/business-immigration-and-start-up-visa": [
    "Canada Start-Up Visa paused June 2026",
    "Is Canada accepting new Start-Up Visa applications",
  ],
  "/immigrate/home-child-care-provider-pilot": [
    "Home Child Care Provider Pilot closed to new applications",
    "Home Care Worker Immigration Pilot intake paused",
  ],
  "/immigrate/home-support-worker-pilot": [
    "Home Support Worker Pilot ended June 17 2024",
    "Home Care Worker Immigration Pilot closed to new intake",
  ],
  "/immigrate/ontario-pnp-oinp": [
    "Ontario OINP EOI points calculator",
    "Ontario Workforce Priority TEER 0 to 3 pathway",
    "Ontario Workforce Priority TEER 4 and 5 pathway",
  ],
  "/work-and-study/international-experience-canada-iec": ["Countries with IEC agreements with Canada"],
  "/sponsor/parents-and-grandparents-program-pgp": [
    "Parents and Grandparents Program Canada sponsorship",
    "PGP interest to sponsor form paused 2026",
    "Super Visa while Parents and Grandparents Program is paused",
  ],
  "/sponsor/spousal-and-partner-sponsorship-overview": [
    "Inland vs outland spousal sponsorship Canada",
    "Spousal sponsorship documents checklist Canada",
  ],
  "/sponsor/spousal-common-law-sponsorship": ["Common-law sponsorship evidence in Canada"],
  "/sponsor/sponsorship-eligibility": ["Who can sponsor a spouse or family member in Canada"],
  "/citizenship/pr-card-renewal-standalone-page": ["PR card renewal and residency obligation checklist"],
  "/citizenship/pr-card-replacement": ["How to replace a lost or damaged PR card in Canada"],
  "/visit/visitor-visa-trv-standalone-page": [
    "Canada visitor visa for visiting family",
    "Visitor record to extend a stay in Canada",
  ],
  "/work-and-study/canada-study-permit": ["Can I work while studying in Canada"],
  "/immigrate/canadian-experience-class": [
    "Canadian Experience Class work experience requirements",
    "Can I apply under both CEC and FSW",
  ],
  "/immigrate/federal-skilled-trades": [
    "Federal Skilled Trades Program eligibility Canada",
    "Federal Skilled Trades proof of job offer or certificate",
  ],
  "/immigrate/provincial-nominee-program-all-provinces-consolidated": [
    "Provincial Nominee Program options by province Canada",
    "Express Entry PNP vs non Express Entry PNP",
  ],
  "/work-and-study/canada-work-permit-overview": [
    "Canada work permit options with a job offer",
    "Canada work permit without an LMIA or job offer",
  ],
  "/immigrate/in-canada-refugee-claim": [
    "How to make a refugee claim in Canada",
    "Refugee claim eligibility at a Canadian port of entry",
  ],
  "/inadmissibility-and-appeals/criminal-inadmissibility-overview": [
    "What is criminal inadmissibility to Canada",
    "Criminal rehabilitation vs deemed rehabilitation Canada",
  ],
  "/immigrate/pre-removal-risk-assessment-prra": [
    "Pre-Removal Risk Assessment eligibility in Canada",
    "PRRA new evidence and application deadline",
  ],
  "/immigrate/protected-persons-apply-for-pr": [
    "Apply for permanent residence as a protected person in Canada",
    "Canadian PR after a positive refugee claim or PRRA",
  ],
  "/immigrate/refugee-travel-document": [
    "How to apply for a Canadian Refugee Travel Document",
    "Refugee travel document travel restrictions Canada",
  ],
  "/immigrate/one-year-window-reunification": [
    "One-Year Window family reunification for protected persons",
    "Protected person family reunification deadline Canada",
  ],
  "/immigrate/humanitarian-and-compassionate": [
    "Humanitarian and compassionate application Canada evidence",
    "H&C permanent residence application eligibility Canada",
  ],
  "/immigrate/temporary-resident-to-pr-pathway": [
    "Work permit to permanent residence pathways Canada",
    "Canadian work experience routes to permanent residence",
  ],
  "/work-and-study/global-talent-stream": [
    "Global Talent Stream Category A vs Category B",
    "Global Talent Stream two-week processing target Canada",
  ],
  "/work-and-study/tfwp-employer-compliance": [
    "Temporary Foreign Worker Program employer inspection checklist",
    "How to prepare for an ESDC TFWP inspection",
  ],
  "/immigrate/pnp-linked-express-entry": [
    "Express Entry aligned provincial nomination requirements",
    "How a PNP nomination adds 600 CRS points",
  ],
  "/immigrate/british-columbia-pnp": [
    "BC PNP Skills Immigration requirements and invitations",
    "BC PNP registration score and invitation process",
  ],
  "/immigrate/alberta-pnp-aaip": [
    "Alberta AAIP Worker EOI eligibility and points",
    "Alberta Opportunity Stream requirements for workers",
  ],
  "/immigrate/saskatchewan-pnp-sinp": [
    "SINP Expression of Interest eligibility and score",
    "Saskatchewan PNP occupation and job offer requirements",
  ],
  "/immigrate/manitoba-pnp-mpnp": [
    "Manitoba PNP EOI ranking and invitation process",
    "Manitoba Skilled Worker pathway connection requirements",
  ],
  "/immigrate/nova-scotia-pnp-nsnp": [
    "Nova Scotia PNP four streams and eligibility",
    "Nova Scotia NSNP Expression of Interest selection",
  ],
  "/immigrate/new-brunswick-pnp": [
    "New Brunswick PNP streams and EOI process",
    "NBPNP invitation to apply requirements",
  ],
  "/immigrate/prince-edward-island-pnp": [
    "PEI PNP Expression of Interest selection process",
    "Prince Edward Island PNP invitation requirements",
  ],
  "/immigrate/newfoundland-and-labrador-pnp": [
    "Newfoundland and Labrador immigration EOI process",
    "NLPNP invitation to apply deadline and documents",
  ],
  "/immigrate/yukon-nwt-nunavut-nominee-programs": [
    "Yukon and Northwest Territories nominee program streams",
    "Yukon PNP and NTNP employer application process",
  ],
  "/visit/eta-electronic-travel-authorization": [
    "Canada eTA requirements for visa-exempt travellers",
    "Apply for a new Canadian eTA after passport renewal",
  ],
  "/visit/business-visa": [
    "Canada business visitor activities without a work permit",
    "Business visitor visa vs work permit Canada",
  ],
  "/visit/transit-visa": [
    "Canada airport transit visa requirements",
    "Do I need a transit visa to connect through Canada",
  ],
  "/visit/visitor-record": [
    "Extend visitor status in Canada with a visitor record",
    "Visitor record application before status expires",
  ],
  "/sponsor/conjugal-partner-sponsorship": [
    "Conjugal partner sponsorship eligibility Canada",
    "Evidence for a Canadian conjugal partner sponsorship",
  ],
  "/sponsor/outland-sponsorship": [
    "Outland spousal sponsorship Canada application process",
    "Can my spouse visit Canada during outland sponsorship",
  ],
  "/sponsor/inland-sponsorship": [
    "Inland spousal sponsorship Canada application steps",
    "Can I work while inland sponsorship is processing",
  ],
  "/sponsor/dependent-child-sponsorship": [
    "Dependent child sponsorship age limit Canada",
    "Who qualifies as a dependent child for Canadian PR",
  ],
  "/sponsor/adopted-child-sponsorship": [
    "Sponsor an adopted child for permanent residence in Canada",
    "International adoption immigration requirements Canada",
  ],
  "/sponsor/pgp-invitation-to-apply-canada": [
    "Parents and Grandparents Program 2025 invitation deadline",
    "What to do after a PGP invitation to apply",
  ],
  "/sponsor/super-visa-for-parents": [
    "Super Visa as an option while PGP intake is paused",
    "Super Visa income and insurance requirements for parents",
  ],
  "/sponsor/orphaned-relatives": [
    "Sponsor an orphaned sibling, niece or nephew to Canada",
    "Orphaned relative sponsorship requirements Canada",
  ],
  "/sponsor/minimum-necessary-income": [
    "Parents and Grandparents Program minimum income test",
    "PGP sponsor income documents and tax years",
  ],
  "/sponsor/sponsorship-eligibility": [
    "Who can sponsor a family member for Canadian PR",
    "Canadian family sponsorship eligibility requirements",
  ],
  "/sponsor/sponsorship-processing-times": [
    "Current IRCC family sponsorship processing times by category",
    "How to check a spousal sponsorship application timeline",
  ],
  "/sponsor/sponsorship-appeal": [
    "Appeal a refused spouse sponsorship application Canada",
    "Immigration Appeal Division sponsorship appeal deadline",
  ],
  "/citizenship/adult-grant-of-citizenship": [
    "Canadian citizenship 1095-day physical presence requirement",
    "Adult Canadian citizenship application requirements",
  ],
  "/citizenship/minor-grant-of-citizenship": [
    "Canadian citizenship application for a minor child",
    "Citizenship requirements for a permanent resident child under 18",
  ],
  "/citizenship/citizenship-certificate": [
    "Replace a lost or damaged Canadian citizenship certificate",
    "Apply for proof of Canadian citizenship certificate",
  ],
  "/citizenship/citizenship-resumption": [
    "How to resume Canadian citizenship after renunciation",
    "Canadian citizenship resumption application eligibility",
  ],
  "/citizenship/citizenship-renunciation": [
    "How to renounce Canadian citizenship voluntarily",
    "Canadian citizenship renunciation application requirements",
  ],
  "/citizenship/citizenship-revocation-appeal": [
    "Canadian citizenship revocation process and appeal rights",
    "Respond to a citizenship revocation notice Canada",
  ],
  "/citizenship/pr-card-replacement": [
    "Replace a lost or stolen PR card in Canada",
    "Travel to Canada without a valid PR card",
  ],
  "/citizenship/pr-travel-document-prtd": [
    "Apply for a PR travel document from outside Canada",
    "PRTD residency obligation assessment Canada",
  ],
  "/citizenship/citizenship-through-adoption": [
    "Canadian citizenship for a child adopted abroad",
    "Citizenship by adoption vs PR sponsorship Canada",
  ],
  "/citizenship/pr-through-adoption": [
    "Sponsor an adopted child for Canadian permanent residence",
    "Permanent residence for a child adopted abroad Canada",
  ],
  "/citizenship/proof-of-adoption-record": [
    "Adoption documents required for Canadian immigration",
    "Proof of a legal adoption for Canadian citizenship or PR",
  ],
  "/inadmissibility-and-appeals/criminal-rehabilitation": [
    "Criminal rehabilitation application Canada eligibility",
    "How long after a sentence to apply for Canadian rehabilitation",
  ],
  "/inadmissibility-and-appeals/temporary-resident-permit-trp": [
    "Temporary Resident Permit vs criminal rehabilitation Canada",
    "When can an inadmissible traveller apply for a TRP",
  ],
  "/inadmissibility-and-appeals/record-suspension-pardon": [
    "Record suspension and Canadian immigration inadmissibility",
    "Canadian pardon vs criminal rehabilitation for immigration",
  ],
  "/inadmissibility-and-appeals/deemed-rehabilitation": [
    "Deemed rehabilitation Canada foreign conviction eligibility",
    "How to check if a foreign conviction is deemed rehabilitated",
  ],
  "/inadmissibility-and-appeals/medical-inadmissibility": [
    "Medical inadmissibility excessive demand Canada response",
    "How to respond to an IRCC medical inadmissibility concern",
  ],
  "/inadmissibility-and-appeals/financial-inadmissibility": [
    "Financial inadmissibility Canada proof of funds concern",
    "Respond to an immigration concern about financial support",
  ],
  "/inadmissibility-and-appeals/misrepresentation": [
    "Can an honest mistake be treated as misrepresentation",
    "Can a misrepresentation finding be challenged",
  ],
  "/inadmissibility-and-appeals/admissibility-hearing": [
    "Immigration Division admissibility hearing Canada process",
    "Prepare for an IRB admissibility hearing",
  ],
  "/inadmissibility-and-appeals/detention-review": [
    "Canada immigration detention review hearing timeline",
    "How a bondsperson supports release from immigration detention",
  ],
  "/inadmissibility-and-appeals/removal-order": [
    "Canadian removal order types and consequences",
    "Departure order vs exclusion order vs deportation order Canada",
  ],
  "/inadmissibility-and-appeals/stay-of-removal": [
    "Urgent stay of removal application Canada",
    "How to pause enforcement of a Canadian removal order",
  ],
  "/inadmissibility-and-appeals/deferral-request": [
    "CBSA deferral request for a scheduled removal Canada",
    "Deferral of removal vs stay of removal Canada",
  ],
  "/inadmissibility-and-appeals/arc-authorization-to-return-to-canada": [
    "Authorization to Return to Canada after a deportation order",
    "ARC application requirements after removal from Canada",
  ],
  "/inadmissibility-and-appeals/sponsorship-appeal-iad": [
    "IAD sponsorship appeal 30-day filing deadline",
    "New evidence for a refused family sponsorship appeal",
  ],
  "/inadmissibility-and-appeals/removal-order-appeal": [
    "Appeal a removal order to the Immigration Appeal Division",
    "Who can appeal a Canadian removal order",
  ],
  "/inadmissibility-and-appeals/residency-obligation-appeal": [
    "PR residency obligation appeal 730 days in five years",
    "Humanitarian grounds for a residency obligation appeal",
  ],
  "/inadmissibility-and-appeals/judicial-review-federal-court": [
    "Federal Court judicial review of an immigration decision",
    "Immigration judicial review filing deadline Canada",
  ],
  "/inadmissibility-and-appeals/stay-motion": [
    "Federal Court stay motion to stop removal from Canada",
    "Urgent stay motion while immigration judicial review is pending",
  ],
  "/inadmissibility-and-appeals/mandamus-application": [
    "Mandamus application for delayed IRCC decision Canada",
    "When an immigration processing delay may justify mandamus",
  ],
  "/about/about-commonwealth-migration": [
    "Canadian immigration consultant firm in Brampton Ontario",
    "How to verify a licensed Canadian immigration consultant",
  ],
  "/citizenship/pr-card-renewal-and-citizenship-combined-overview": [
    "Canadian PR card renewal and citizenship application options",
    "PR card renewal residency obligation checklist Canada",
  ],
  "/immigrate/atlantic-immigration-program": [
    "Atlantic Immigration Program eligibility and endorsement",
    "Atlantic Immigration Program job offer requirements Canada",
  ],
  "/inadmissibility-and-appeals/refusal-and-pfl-response": [
    "How to respond to a Canadian immigration refusal",
    "Canada procedural fairness letter response deadline and evidence",
  ],
  "/sponsor/family-sponsorship-overview-all-categories": [
    "Canada family sponsorship options by relationship",
    "Who can I sponsor for permanent residence in Canada",
  ],
  "/sponsor/spousal-open-work-permit": [
    "Spousal sponsorship open work permit Canada eligibility",
    "When a sponsored spouse can apply for an open work permit",
  ],
  "/visit/super-visa-standalone-page": [
    "Canada Super Visa income requirement 2026",
    "Super Visa medical insurance from a foreign insurer Canada",
  ],
  "/visit/visitor-visa-trv-and-super-visa-combined": [
    "Canada visitor visa vs Super Visa for parents",
    "How long parents can stay in Canada on a Super Visa",
  ],
  "/work-and-study/lmia-and-employer-services-overview": [
    "Canada LMIA process for employers and foreign workers",
    "LMIA application documents and employer compliance Canada",
  ],
  "/work-and-study/post-graduation-work-permit-pgwp": [
    "PGWP eligibility after graduating in Canada",
    "Post-graduation work permit language and field of study rules",
  ],
};

function pageKeywordTargets(page) {
  const current = Array.isArray(page.keywords)
    ? page.keywords
    : typeof page.keywords === "string"
      ? page.keywords.split(/[,;]+/)
      : [];

  const primary = String(page.h1 || page.seoTitle || page.title || "")
    .replace(/\s*\|\s*CMG\s*$/i, "")
    .replace(/\s+20\d{2}(?:\s*[–-]\s*20\d{2})?/g, "")
    .replace(/:\s*(?:your complete|a complete|the complete)?\s*(?:20\d{2}\s*)?(?:guide|overview).*$/i, "")
    .replace(/[\s:–—-]+$/, "")
    .trim();
  const questionTargets = (page.contentBlocks || [])
    .flatMap((block) => {
      if (block.type === "faq" && block.question) return [block.question];
      if (block.type === "paragraph" && /^Q:\s*/i.test(block.text || "")) {
        return [block.text.replace(/^Q:\s*/i, "").trim()];
      }
      return [];
    })
    .map((question) => question.replace(/[?!.]+$/, ""))
    .filter(Boolean)
    .slice(0, 2);

  return [...new Set([
    ...current.map((keyword) => String(keyword).trim()).filter(Boolean),
    primary,
    ...(PAGE_KEYWORD_CANDIDATES[page.path] || []),
    ...questionTargets,
  ])];
}

function sourcePageToPage(page, sourceFile = SOURCE_FILES.source) {
  const path = normalizePath(page.path);
  return {
    ...page,
    path,
    h1: page.h1,
    hero: `# ${page.h1}\n\n${page.hero?.lead || page.description || ""}`,
    contentBlocks: normalizeBlocks(page.contentBlocks),
    content: page.contentBlocks
      .map((block) => block.type === "heading"
        ? `${"#".repeat(block.level)} ${block.text}`
        : block.type === "table"
          ? block.rows.map((row) => `| ${row.join(" | ")} |`).join("\n")
          : block.type === "list"
            ? block.items.map((item) => `${block.ordered ? "1." : "-"} ${item}`).join("\n")
            : block.text || "")
      .join("\n\n"),
    seo: {
      title: page.seoTitle || page.title,
      description: page.metaDescription || page.description,
      keywords: pageKeywordTargets(page),
      openGraphTitle: page.openGraphTitle,
      openGraphDescription: page.openGraphDescription,
      canonical: page.url,
      robots: "index, follow",
    },
    meta: {
      lastModified: page.lastModified || null,
      priority: page.priority || 0.7,
      status: page.status || "Content Ready",
      sourceFile,
    },
    headingOutline: page.contentBlocks.filter((block) => block.type === "heading").map((block) => ({ level: block.level, text: block.text })),
    jsonLd: page.jsonLd || [],
  };
}

// The dedicated About page set is appended so its intent-specific versions
// take precedence over the original source inventory for matching paths.
// The United Kingdom landing page set follows the same rule: it owns its own
// regional route and is statically generated by the shared catch-all route.
const pagesByPath = new Map(
  [
    ...sourcePages.map((page) => [page, SOURCE_FILES.source]),
    ...aboutPages.map((page) => [page, SOURCE_FILES.about]),
    ...ukPages.map((page) => [page, SOURCE_FILES.uk]),
    ...locationPages.map((page) => [page, SOURCE_FILES.locations]),
  ].map(([page, sourceFile]) => [normalizePath(page.path), sourcePageToPage(page, sourceFile)])
);
const legalByPath = new Map(legalPages.map((page) => [normalizePath(page.path), page]));

export function getCmgPage(pathname) {
  return pagesByPath.get(normalizePath(pathname)) || null;
}

export function getCmgPages() {
  return [...pagesByPath.values()];
}

export function getLegalPage(pathname) {
  const page = legalByPath.get(normalizePath(pathname));
  if (!page) return null;
  return {
    path: page.path,
    h1: page.title,
    title: page.title,
    hero: `# ${page.title}\n\nThe official ${page.title.toLowerCase()} for Commonwealth Migration Group Inc.`,
    contentBlocks: [
      { type: "heading", level: 2, text: page.title },
      { type: "legalText", text: page.text },
    ],
    content: page.text,
    seo: {
      title: page.seoTitle || `${page.title} | Commonwealth Migration Canada`,
      description: page.seoDescription || `${page.title} for Commonwealth Migration Group Inc.`,
      keywords: page.keywords || [],
      canonical: page.path,
      robots: "index, follow",
    },
    meta: { lastModified: null, priority: 0.4, status: "Content Ready", sourceFile: SOURCE_FILES.legal },
    headingOutline: [{ level: 2, text: page.title }],
    jsonLd: [],
  };
}

export function getCmgMenu() {
  return sourceMenu;
}

export function getCmgRoutePaths() {
  return [...pagesByPath.keys()];
}

export function getLegalRoutePaths() {
  return [...legalByPath.keys()];
}

export default getCmgPage;
