/*
 * Search-focused context that appears immediately before data tables.
 *
 * The table rows stay in the supplied order. These paragraphs answer the
 * question a reader usually has before comparing the data, while adding
 * natural long-tail terms, location context and a current official source.
 */

const OFFICIAL_SOURCES = {
  expressEntry: {
    label: "IRCC Express Entry guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
  },
  crs: {
    label: "IRCC CRS score guidance",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html",
  },
  pnp: {
    label: "IRCC Provincial Nominee Program guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html",
  },
  work: {
    label: "IRCC work permit guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html",
  },
  study: {
    label: "IRCC study permit guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
  },
  family: {
    label: "IRCC family sponsorship guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html",
  },
  visitor: {
    label: "IRCC visit Canada guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html",
  },
  citizenship: {
    label: "IRCC citizenship guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html",
  },
  inadmissibility: {
    label: "IRCC admissibility and enforcement guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/admissibility-enforcement.html",
  },
  noc: {
    label: "Government of Canada NOC page",
    url: "https://noc.esdc.gc.ca/",
  },
  immigration: {
    label: "IRCC immigration programs guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html",
  },
  representatives: {
    label: "Government of Canada authorized representative guidance",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html",
  },
  draws: {
    label: "IRCC Express Entry rounds of invitations",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html",
  },
};

const TOPIC_RULES = [
  {
    test: (path) => /crs-calculator/.test(path),
    topic: "the Canada Express Entry CRS score",
    focus: "CRS points, language results, education, work experience and bonus factors",
    location: "Applicants in Brampton, Mississauga, the Greater Toronto Area and abroad",
    source: OFFICIAL_SOURCES.crs,
  },
  {
    test: (path) => /noc-finder/.test(path),
    topic: "the Canada NOC code and TEER category",
    focus: "NOC duties, TEER classification, job titles and employment evidence",
    location: "workers in Brampton, Mississauga, Ontario and international applicants",
    source: OFFICIAL_SOURCES.noc,
  },
  {
    test: (path) => /british-columbia-pnp/.test(path),
    topic: "the British Columbia PNP and BC PNP pathway",
    focus: "BC PNP stream, Skills Immigration, occupation, job offer and settlement factors",
    location: "people planning to settle in British Columbia, including applicants supported from the GTA",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /alberta-pnp-aaip/.test(path),
    topic: "the Alberta Advantage Immigration Program (AAIP)",
    focus: "AAIP stream, Alberta occupation, job offer, work history and settlement evidence",
    location: "people planning to work or settle in Alberta, including applicants supported from Ontario",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /saskatchewan-pnp-sinp/.test(path),
    topic: "the Saskatchewan Immigrant Nominee Program (SINP)",
    focus: "SINP stream, occupation, language, work experience and Saskatchewan connection",
    location: "people planning to settle in Saskatchewan, including applicants supported from Brampton and Ontario",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /manitoba-pnp-mpnp/.test(path),
    topic: "the Manitoba Provincial Nominee Program (MPNP)",
    focus: "MPNP stream, Manitoba connection, occupation, language and settlement evidence",
    location: "people planning to settle in Manitoba, including applicants supported from the Greater Toronto Area",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /ontario-pnp-oinp/.test(path),
    topic: "the Ontario Immigrant Nominee Program (OINP)",
    focus: "OINP stream, Ontario employer, occupation, education, language and work experience",
    location: "applicants in Brampton, Mississauga, Toronto and across Ontario",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /nova-scotia-pnp-nsnp/.test(path),
    topic: "the Nova Scotia Nominee Program (NSNP)",
    focus: "NSNP stream, Nova Scotia labour needs, occupation, job offer and settlement evidence",
    location: "people planning to settle in Nova Scotia, including applicants supported from Ontario",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /new-brunswick-pnp/.test(path),
    topic: "the New Brunswick Provincial Nominee Program",
    focus: "New Brunswick stream, occupation, language, employer and settlement factors",
    location: "people planning to settle in New Brunswick, including applicants supported from the GTA",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /prince-edward-island-pnp/.test(path),
    topic: "the Prince Edward Island PNP",
    focus: "PEI stream, labour-market fit, occupation, job offer and intention to settle",
    location: "people planning to settle in Prince Edward Island, including applicants supported from Ontario",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /newfoundland-and-labrador-pnp/.test(path),
    topic: "the Newfoundland and Labrador Provincial Nominee Program",
    focus: "Newfoundland and Labrador stream, occupation, employer, language and settlement evidence",
    location: "people planning to settle in Newfoundland and Labrador, including applicants supported from the GTA",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /yukon-nwt-nunavut/.test(path),
    topic: "territorial nominee programs in Yukon, the Northwest Territories and Nunavut",
    focus: "territorial stream, local employer, occupation, work authorization and settlement plan",
    location: "people planning to work or settle in Canada’s northern territories",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /pnp|provincial-nominee|atlantic|rural|municipal|agri-food|care-provider|caregiver/.test(path),
    topic: "a Canada Provincial Nominee Program (PNP) pathway",
    focus: "province-specific eligibility, occupation, job offer, language, settlement and federal requirements",
    location: "applicants in Brampton, Mississauga, Ontario and across Canada comparing provincial routes",
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /immigration-draws/.test(path),
    topic: "Express Entry draw results in Canada",
    focus: "draw type, CRS cutoff, invitation count and tie-break cutoff",
    location: "candidates in Brampton, Mississauga, the Greater Toronto Area and abroad",
    source: OFFICIAL_SOURCES.draws,
  },
  {
    test: (path) => /express-entry/.test(path),
    topic: "Express Entry Canada",
    focus: "Express Entry eligibility, CRS score, category-based draws and invitation planning",
    location: "applicants in Brampton, Mississauga, the Greater Toronto Area and abroad",
    source: OFFICIAL_SOURCES.expressEntry,
  },
  {
    test: (path) => !/study|student|pgwp/.test(path) && /work|lmia|talent|employer|iec/.test(path),
    topic: "a Canada work permit or employer immigration pathway",
    focus: "work permit type, LMIA or exemption, NOC duties, employer compliance and status",
    location: "workers and Canadian employers in Brampton, Mississauga, Ontario and across Canada",
    source: OFFICIAL_SOURCES.work,
  },
  {
    test: (path) => /study|student|pgwp/.test(path),
    topic: "a Canada study permit or post-graduation work permit (PGWP) pathway",
    focus: "DLI, program, study permit, funds, PGWP eligibility and the next work or PR step",
    location: "students in Brampton, Mississauga, Ontario and international applicants planning to study in Canada",
    source: OFFICIAL_SOURCES.study,
  },
  {
    test: (path) => /sponsor|family|spousal|partner|parent|child|orphan/.test(path),
    topic: "Canada family sponsorship",
    focus: "relationship category, sponsor eligibility, undertaking, admissibility and family evidence",
    location: "families in Brampton, Mississauga, the Greater Toronto Area and outside Canada",
    source: OFFICIAL_SOURCES.family,
  },
  {
    test: (path) => /visit|visitor|super-visa|eta|transit|business-visa/.test(path),
    topic: "a Canada visitor visa, Super Visa or temporary visit document",
    focus: "purpose of travel, temporary intent, funds, ties, itinerary and entry document",
    location: "visitors travelling to Canada to see family, attend business activities or explore the country",
    source: OFFICIAL_SOURCES.visitor,
  },
  {
    test: (path) => /citizenship|pr-card|prtd|residency|adoption/.test(path),
    topic: "a Canada citizenship or permanent-resident document application",
    focus: "status, physical presence, identity, residence history and the correct document process",
    location: "permanent residents and families in Brampton, Mississauga, Ontario and across Canada",
    source: OFFICIAL_SOURCES.citizenship,
  },
  {
    test: (path) => /inadmissibility|refusal|appeal|judicial-review|mandamus|removal|detention|misrepresentation|rehabilitation|pardon/.test(path),
    topic: "a Canada immigration refusal, inadmissibility or appeal matter",
    focus: "the decision, deadline, admissibility issue, evidence and available response route",
    location: "people in Brampton, Mississauga, Ontario and anywhere in Canada facing a time-sensitive file",
    source: OFFICIAL_SOURCES.inadmissibility,
  },
  {
    test: (path) => /business|start-up/.test(path),
    topic: "Canada business immigration and the Start-up Visa route",
    focus: "business concept, designated organization, funds, ownership, management and admissibility",
    location: "entrepreneurs in Brampton, Mississauga, the GTA and international founders",
    source: OFFICIAL_SOURCES.immigration,
  },
  {
    test: (path) => /about\//.test(path),
    topic: "a Canada immigration consultant and RCIC-led service",
    focus: "consultant service scope, Brampton location, process stages and Canada-wide support",
    location: "people in Brampton, Mississauga, the Greater Toronto Area and international clients",
    source: OFFICIAL_SOURCES.representatives,
  },
];

const DEFAULT_CONTEXT = {
  topic: "this Canada immigration pathway",
  focus: "eligibility, evidence, timing and the decision points that shape an application",
  location: "applicants in Brampton, Mississauga, the Greater Toronto Area and across Canada",
  source: OFFICIAL_SOURCES.immigration,
};

function normalizePath(path) {
  const value = String(path || "/").split("?")[0].split("#")[0];
  return value.length > 1 ? value.replace(/\/$/, "") : value;
}

function getTableDescriptor(block) {
  const rows = Array.isArray(block?.rows) ? block.rows : [];
  const firstRow = rows[0] || [];
  const header = firstRow.join(" ").toLowerCase();

  if (rows.length === 1 && firstRow.length >= 3) {
    return { label: "summary of the key figures", eyebrow: "A quick look at the numbers", focus: "headline scores, points, timelines or pathway facts" };
  }
  if (/category|typical crs|who it favours|draw/.test(header)) {
    return { label: "category and draw overview", eyebrow: "How to read the draw details", focus: "category eligibility, draw focus and CRS score context" };
  }
  if (/factor|max points|points/.test(header)) {
    return { label: "CRS points breakdown", eyebrow: "How to read the score breakdown", focus: "the factors that can change an Express Entry score" };
  }
  if (/step|what's required|requirement|process/.test(header)) {
    return { label: "application requirements table", eyebrow: "Before you work through the requirements", focus: "the sequence, documents and decisions needed for the route" };
  }
  if (/fee|cost|amount/.test(header)) {
    return { label: "fees and costs table", eyebrow: "Before you compare the costs", focus: "the government fees, service costs and payment assumptions shown here" };
  }
  if (/province|stream|nominee|program/.test(header)) {
    return { label: "pathway comparison", eyebrow: "Before you compare the pathways", focus: "the differences between programs, streams and applicant profiles" };
  }
  return { label: "eligibility comparison", eyebrow: "A quick explanation before the table", focus: "the criteria and evidence that distinguish the options" };
}

export function getTableSeoContent(page, block, tableIndex = 0) {
  const path = normalizePath(page?.path);
  const context = TOPIC_RULES.find((rule) => rule.test(path)) || DEFAULT_CONTEXT;
  const descriptor = getTableDescriptor(block);
  const pageTitle = String(page?.h1 || context.topic).replace(/[|]/g, "").trim();
  const location = context.location.charAt(0).toLowerCase() + context.location.slice(1);
  const question = tableIndex === 0
    ? `What does this ${descriptor.label} show on the ${pageTitle} page?`
    : `How should readers compare ${descriptor.focus} on the ${pageTitle} page?`;

  return {
    question,
    eyebrow: descriptor.eyebrow,
    paragraphs: [
      `This ${descriptor.label} on the ${pageTitle} page puts ${descriptor.focus} in one place for people researching ${context.topic}. Use it to get your bearings, then compare each row with your own status, history, documents and intended application date. The table is a useful starting point, but the final decision depends on the current rules and the evidence in your file.`,
      tableIndex === 0
        ? "Commonwealth Migration is based in Brampton, Ontario and works with clients across Canada. If you are comparing a Canada immigration pathway from Brampton or looking for an immigration consultant in Brampton, use these figures to prepare focused questions before you start forms or pay a fee."
        : `For ${location}, these figures are a planning aid before you start forms or pay a fee.`,
      `Check the current route instructions, NOC or TEER details, language evidence, family facts and deadline in the ${context.source.label} before relying on a score, timeline or requirement.`,
    ],
    source: context.source,
  };
}

export default getTableSeoContent;
