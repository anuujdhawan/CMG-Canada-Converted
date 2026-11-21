export const CALCULATOR_NAV_GROUPS = [
  {
    category: "Language & federal",
    items: [
      { slug: "clb-calculator", label: "CLB Calculator", shortLabel: "CLB Calculator", title: "Canadian Language Benchmark Calculator", type: "clb", group: "Language & federal", description: "Convert approved English and French test scores to CLB or NCLC levels across speaking, listening, reading and writing.", sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html", sourceLabel: "IRCC language test equivalencies" },
      { slug: "express-entry-crs-calculator", label: "Express Entry CRS Calculator", shortLabel: "Express Entry CRS Calculator", title: "Express Entry CRS Calculator", type: "crs", group: "Language & federal", description: "Estimate a current Comprehensive Ranking System score using IRCC’s published criteria and the November 2026 Labour Market Integration factor.", sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html", sourceLabel: "IRCC CRS criteria" },
      { slug: "fsw-67-point-calculator", label: "FSW 67-Point Calculator", shortLabel: "FSW 67-Point Calculator", title: "Federal Skilled Worker 67-Point Calculator", type: "fsw", group: "Language & federal", description: "Estimate the Federal Skilled Worker selection-factor score out of 100 and review the separate minimum requirements.", sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html", sourceLabel: "IRCC Federal Skilled Worker Program" },
    ],
  },
  {
    category: "Central & western",
    items: [
      { slug: "ontario-oinp-calculator", label: "Ontario OINP Calculator", shortLabel: "Ontario OINP Calculator", title: "Ontario Immigrant Nominee Program Calculator", type: "pnp", programKey: "ontario", streamKey: "workforce-priority", group: "Central & western", description: "Review Ontario Workforce Priority eligibility and estimate points using its current expression-of-interest grid." },
      { slug: "manitoba-mpnp-calculator", label: "Manitoba MPNP Calculator", shortLabel: "Manitoba MPNP Calculator", title: "Manitoba Provincial Nominee Program Calculator", type: "pnp", programKey: "manitoba", streamKey: "skilled-worker", group: "Central & western", description: "Estimate Manitoba EOI ranking points and review the connection, risk and evidence factors for your pathway." },
      { slug: "alberta-aaip-calculator", label: "Alberta AAIP Calculator", shortLabel: "Alberta AAIP Calculator", title: "Alberta Advantage Immigration Program Calculator", type: "pnp", programKey: "alberta", streamKey: "worker", group: "Central & western", description: "Calculate the published AAIP Worker EOI points grid and review the pathway requirements and selection priorities." },
      { slug: "saskatchewan-sinp-calculator", label: "Saskatchewan SINP Calculator", shortLabel: "Saskatchewan SINP Calculator", title: "Saskatchewan Immigrant Nominee Program Calculator", type: "pnp", programKey: "saskatchewan", streamKey: "express-entry", group: "Central & western", description: "Estimate SINP points and check the current requirements for an International Skilled Worker pathway." },
      { slug: "british-columbia-pnp-calculator", label: "British Columbia PNP Calculator", shortLabel: "British Columbia PNP Calculator", title: "British Columbia Provincial Nominee Program Calculator", type: "pnp", programKey: "bc", streamKey: "skills-immigration", group: "Central & western", description: "Estimate a BC PNP Skills Immigration registration score from the published human-capital and economic factors." },
    ],
  },
  {
    category: "Atlantic",
    items: [
      { slug: "new-brunswick-pnp-calculator", label: "New Brunswick PNP Calculator", shortLabel: "New Brunswick PNP Calculator", title: "New Brunswick Provincial Nominee Program Calculator", type: "pnp", programKey: "newBrunswick", streamKey: "express-entry", group: "Atlantic", description: "Estimate the New Brunswick Express Entry selection score and check the stream’s pathway-specific requirements." },
      { slug: "newfoundland-and-labrador-pnp-calculator", label: "Newfoundland & Labrador PNP Calculator", shortLabel: "Newfoundland & Labrador PNP Calculator", title: "Newfoundland and Labrador PNP Calculator", type: "pnp", programKey: "newfoundland", streamKey: "nlpnp-aip", group: "Atlantic", description: "Review Newfoundland and Labrador’s Skilled Worker and Atlantic Immigration Program criteria, employer evidence and settlement requirements." },
      { slug: "nova-scotia-nsnp-calculator", label: "Nova Scotia NSNP Calculator", shortLabel: "Nova Scotia NSNP Calculator", title: "Nova Scotia Nominee Program Calculator", type: "pnp", programKey: "novaScotia", streamKey: "skilled-worker", group: "Atlantic", description: "Review the Nova Scotia Skilled Worker criteria for the job, candidate, language evidence and employer support." },
      { slug: "prince-edward-island-pnp-calculator", label: "Prince Edward Island PNP Calculator", shortLabel: "Prince Edward Island PNP Calculator", title: "Prince Edward Island PNP Calculator", type: "pnp", programKey: "pei", streamKey: "skilled-worker", group: "Atlantic", description: "Estimate points using the selected PEI Workforce or Express Entry EOI grid, then check its evidence requirements." },
    ],
  },
  {
    category: "Territories & rural",
    items: [
      { slug: "rural-community-immigration-pilot-calculator", label: "Rural Community Pilot Calculator", shortLabel: "Rural Community Pilot Calculator", title: "Rural Community Immigration Pilot Calculator", type: "rcip", group: "Territories & rural", description: "Check the federal rural community pathway requirements, recommendation status and transition dates." },
      { slug: "northwest-territories-ntnp-calculator", label: "Northwest Territories Calculator", shortLabel: "Northwest Territories Calculator", title: "Northwest Territories Nominee Calculator", type: "pnp", programKey: "north", streamKey: "nwt", group: "Territories & rural", description: "Estimate the NWT Employer-Driven EOI score from the official 845-point grid and review employer-supported pathway requirements." },
      { slug: "yukon-nominee-program-calculator", label: "Yukon YNP Calculator", shortLabel: "Yukon YNP Calculator", title: "Yukon Nominee Program Calculator", type: "pnp", programKey: "north", streamKey: "yukon", group: "Territories & rural", description: "Review Yukon employer, worker and 2026 intake-priority factors using current territorial guidance." },
    ],
  },
];

export const CALCULATOR_PAGES = CALCULATOR_NAV_GROUPS.flatMap(({ items }) => items);
export const CALCULATOR_SLUGS = CALCULATOR_PAGES.map(({ slug }) => slug);
export const CALCULATOR_PATHS = CALCULATOR_PAGES.map(({ slug }) => `/tools/${slug}/`);
