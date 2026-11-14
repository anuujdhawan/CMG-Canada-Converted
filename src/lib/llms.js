import { site } from "@/config/site";
import { RESEARCH_BLOG_POSTS } from "@/data/blog-research";
import { getAllPages } from "@/lib/sitePages";
import { ADDITIONAL_INDEXABLE_PAGES, EXCLUDED_SITEMAP_PATHS } from "@/lib/seoRoutes";

const baseUrl = site.url.replace(/\/$/, "");

const dedicatedPageDetails = new Map([
  ["/canada-immigration-news", ["Canada Immigration News", "Current Canadian immigration news, policy updates and official-source context." ]],
  ["/immigration-draws", ["Canada Immigration Draw Results", "Federal immigration draw results and invitation-round context." ]],
  ["/pnp-draws", ["PNP Draw Results Canada", "Provincial nominee draw results with province, stream, date, score and invitation details." ]],
  ["/assessment/free-canada-immigration-assessment", ["Free Canada Immigration Assessment", "A free profile assessment for people exploring Canadian immigration routes." ]],
  ["/ontario-pr", ["Canada PR through Ontario", "Ontario OINP and Express Entry route guidance for permanent residence planning." ]],
  ["/tools/canada-immigration-calculators", ["Canada Immigration Calculators", "Free calculators and eligibility tools for Canadian immigration planning." ]],
  ["/tools/crs-calculator-canada", ["Canada CRS Calculator", "Estimate a current Comprehensive Ranking System score, including Labour Market Integration points." ]],
  ["/tools/clb-converter-canada", ["CLB and NCLC Converter", "Convert CELPIP, IELTS General Training, PTE Core, TEF Canada and TCF Canada results by ability." ]],
  ["/tools/fsw-67-point-calculator-canada", ["Federal Skilled Worker 67-point Calculator", "Calculate selection-factor points out of 100 and review key Federal Skilled Worker requirements." ]],
  ["/tools/rural-community-immigration-program-canada", ["Rural Community Immigration Program Checker", "Review the permanent rural community pathway’s recommendation, offer, work, language, education and funds requirements." ]],
  ["/tools/pnp-eligibility-canada", ["PNP Pathway Planner", "Choose a region and locate the official provincial program guidance relevant to your profile." ]],
  ["/tools/noc-finder-canada", ["NOC and Occupation Finder", "Search all 516 NOC 2021 unit groups, then verify actual duties in the official occupation profile." ]],
  ["/tools/document-checklist-canada", ["Canada Immigration Document Checklist", "Review common document requirements for Canadian immigration applications." ]],
  ["/contact/book-immigration-consultation-canada", ["Book an Immigration Consultation", "Book an online consultation with a licensed Canadian immigration consultant." ]],
]);

const linkFor = (path) => `${baseUrl}${path === "/" ? "" : path}`;

function clean(value, fallback) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  return normalized || fallback;
}

function addRecord(records, record) {
  if (!record?.path || EXCLUDED_SITEMAP_PATHS.has(record.path) || records.has(record.path)) return;
  records.set(record.path, {
    path: record.path,
    title: clean(record.title, record.path === "/" ? site.name : record.path),
    description: clean(record.description, site.description),
    category: record.category || "Site page",
  });
}

export function getLlmsRecords() {
  const records = new Map();

  for (const page of getAllPages()) {
    if (/\bnoindex\b/i.test(page.seo?.robots || "")) continue;
    addRecord(records, {
      path: page.path,
      title: page.seo?.title || page.h1,
      description: page.seo?.description,
    });
  }

  for (const post of RESEARCH_BLOG_POSTS) {
    addRecord(records, {
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      category: post.category,
    });
  }

  for (const entry of ADDITIONAL_INDEXABLE_PAGES) {
    const details = dedicatedPageDetails.get(entry.path);
    if (details) addRecord(records, { path: entry.path, title: details[0], description: details[1] });
  }

  return [...records.values()].sort((a, b) => a.path.localeCompare(b.path));
}

function bullet(record) {
  return `- [${record.title}](${linkFor(record.path)}): ${record.description}`;
}

function recordsFor(paths, recordsByPath) {
  return paths.map((path) => recordsByPath.get(path)).filter(Boolean).map(bullet);
}

export function renderLlms({ full = false } = {}) {
  const records = getLlmsRecords();
  const recordsByPath = new Map(records.map((record) => [record.path, record]));

  if (full) {
    return [
      `# ${site.name}`,
      "> Complete machine-readable index of the public, indexable pages on Commonwealth Migration Group's Canadian immigration website.",
      "",
      "## Scope",
      `- Canonical site: ${baseUrl}`,
      `- Public indexable URLs: ${records.length}`,
      "- Excluded from this index: payment confirmation and other noindex destinations.",
      "",
      "## All indexable pages",
      ...records.map(bullet),
      "",
    ].join("\n");
  }

  const startHere = ["/", "/about/about-commonwealth-migration", "/contact/book-immigration-consultation-canada", "/assessment/free-canada-immigration-assessment"];
  const services = [
    "/immigrate/express-entry",
    "/immigrate/ontario-pnp-oinp",
    "/immigrate/provincial-nominee-program-all-provinces-consolidated",
    "/work-and-study/canada-work-permit-overview",
    "/work-and-study/canada-study-permit",
    "/sponsor/family-sponsorship-overview-all-categories",
    "/visit/super-visa-standalone-page",
    "/inadmissibility-and-appeals/refusal-and-pfl-response",
    "/work-and-study/lmia-and-employer-services-overview",
  ];
  const tools = [
    "/tools/canada-immigration-calculators",
    "/tools/crs-calculator-canada",
    "/tools/clb-converter-canada",
    "/tools/fsw-67-point-calculator-canada",
    "/tools/rural-community-immigration-program-canada",
    "/tools/pnp-eligibility-canada",
    "/tools/noc-finder-canada",
    "/tools/document-checklist-canada",
  ];
  const research = ["/canada-immigration-news", "/immigration-draws", "/pnp-draws", "/blog"];

  return [
    `# ${site.name}`,
    `> ${site.description}`,
    "",
    "## Entity and trust",
    `- Legal/business name: ${site.name}`,
    `- Trading name: ${site.tradingName}`,
    `- Location: ${site.address.full}`,
    `- Service area: Brampton, the Greater Toronto Area, Ontario, across Canada and worldwide online.`,
    `- Contact: ${site.email} · ${site.phone}`,
    `- Hours: ${site.hours} (${site.timezone})`,
    `- Licensed representative: ${site.rcic.consultant.nameWithCredential}, ${site.rcic.consultant.role}, licence ${site.rcic.number}.`,
    `- Regulator: [CICC public register](${site.rcic.profileUrl})`,
    "",
    "## Crawler and AI discovery",
    `- [robots.txt](${linkFor("/robots.txt")}): crawler rules and sitemap location.`,
    `- [sitemap.xml](${linkFor("/sitemap.xml")}): canonical indexable URL inventory.`,
    `- [Complete llms-full.txt index](${linkFor("/llms-full.txt")}): every indexable page with a short description.`,
    "",
    "## Start here",
    ...recordsFor(startHere, recordsByPath),
    "",
    "## Services and programs",
    ...recordsFor(services, recordsByPath),
    "",
    "## Tools",
    ...recordsFor(tools, recordsByPath),
    "",
    "## News, draws and research",
    ...recordsFor(research, recordsByPath),
    "",
    "## Editorial and compliance notes",
    `- Information is general guidance, not legal advice or a guarantee of an immigration outcome. See [the disclaimer](${linkFor("/legal/canada-immigration-disclaimer")}).`,
    `- Verify current requirements with [IRCC](https://www.canada.ca/en/immigration-refugees-citizenship.html), [Ontario](https://www.ontario.ca/page/immigration) and the [CICC register](${site.rcic.registerUrl}).`,
    `- The site publishes source-linked guides in the [blog](${linkFor("/blog")}) and updates route content as rules change.`,
    "",
  ].join("\n");
}
