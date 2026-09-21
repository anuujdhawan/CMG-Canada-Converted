/*
 * A second, additive content layer for local and answer-focused search intent.
 *
 * The page source and official data tables remain the source of truth. These
 * blocks add Brampton context, route-specific questions, practical evidence
 * prompts and authoritative verification links to the rendered page only.
 */

import { getLocalPageContent } from "./seoLocalPageContent";

const OFFICIAL_SOURCES = {
  immigration: {
    label: "IRCC immigration programs guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html",
  },
  expressEntry: {
    label: "IRCC Express Entry guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
  },
  crs: {
    label: "IRCC CRS criteria",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html",
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
  representatives: {
    label: "Government of Canada authorized representative guidance",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html",
  },
};

const CONSULTATION_LINK = "/contact/book-immigration-consultation-canada";

const ROUTE_RULES = [
  {
    test: (path) => path === "/",
    subject: "Canada immigration planning",
    keyphrase: "Canada immigration consultant in Brampton",
    lens: "the immigration goal, status, pathway options, evidence and deadline that shape the next decision",
    questions: [
      "How can people in Brampton choose a Canada immigration pathway?",
      "What should you compare before starting a Canada immigration application?",
    ],
    answer: "Choosing a Canada immigration pathway starts with the outcome you need and works backwards through status, eligibility, evidence and timing. People in Brampton may compare Express Entry, PNP, work, study, family, visitor, citizenship and refusal-related routes, but the right option depends on the facts that can be supported.",
    detail: "Start with one clear decision: permanent residence, temporary entry, work, study, family reunification or help after a refusal. Then record your current status, location, language, education, work, family, funds, travel and deadline. Use the [IRCC immigration programs guide]({SOURCE}) as the official comparison point, and [book a Brampton immigration consultation](" + CONSULTATION_LINK + ") when the facts are complex.",
    items: ["The outcome and target date", "Current status and personal history", "Education, language, work and family evidence", "The official route and deadline to verify"],
    source: OFFICIAL_SOURCES.immigration,
  },
  {
    test: (path) => path === "/canada-immigration-from-uk",
    subject: "Canada immigration from the United Kingdom",
    keyphrase: "Canada immigration consultant for UK residents",
    lens: "the Canadian route, the UK-side evidence, the funds position and the filing deadline",
    questions: [
      "What should UK applicants verify before starting a Canada immigration application?",
      "How can a UK applicant prepare Canada immigration evidence from outside Canada?",
    ],
    answer: "For a UK applicant, the first question is which Canadian route actually fits the profile: Express Entry, a provincial nomination, an International Experience Canada working holiday, an employer-specific work permit, a study permit, family sponsorship or a business route. The second question is whether the UK-side evidence behind that route is complete and current — language test, credential assessment, police certificate, funds history and travel records.",
    detail: "A useful UK review separates the decision you control from the one you do not. You control the language test, the credential assessment, the police certificate, the medical and the consistency of your documents; you do not control draw cutoffs or processing queues. Map each UK document to the stage it supports, note its validity window, and keep the GBP-to-CAD funds evidence traceable so nothing expires while you wait for something else.",
    items: [
      "The Canadian route that matches the profile you can evidence",
      "Language test result, validity window and score conversion",
      "Educational Credential Assessment and UK qualification equivalency",
      "UK police certificate, medical and funds history",
    ],
    source: OFFICIAL_SOURCES.immigration,
  },
  {
    test: (path) => /tools\/crs-calculator/.test(path),
    subject: "a CRS calculator Canada result",
    keyphrase: "CRS calculator Canada",
    lens: "the estimated score, the program eligibility behind it and the documents needed to support each point",
    questions: [
      "What should Brampton applicants know about a CRS calculator Canada result?",
      "How can a Brampton applicant turn a CRS estimate into a Canada immigration plan?",
    ],
    answer: "A CRS calculator Canada result is a planning estimate for an Express Entry profile, not an invitation or an eligibility decision. For applicants in Brampton, the useful next step is to check whether the education, language, work, family and bonus-point inputs are accurate and supportable before changing a profile or choosing a pathway.",
    detail: "A practical review separates the score from the evidence behind it. Check language-test validity, the Educational Credential Assessment, NOC duties, authorized Canadian work, family answers and any provincial nomination assumption. If the result is uncertain, bring the inputs to a [Brampton immigration consultation](" + CONSULTATION_LINK + ") instead of relying on the highest possible estimate.",
    items: ["The score factors that are confirmed versus estimated", "The Express Entry program that supports the profile", "A lawful improvement that can be documented", "The draw or nomination context that still needs verification"],
    source: OFFICIAL_SOURCES.crs,
  },
  {
    test: (path) => /tools\/noc-finder/.test(path),
    subject: "a Canada NOC code finder result",
    keyphrase: "NOC code finder Canada",
    lens: "the lead statement, main duties, TEER category and employment records that support the occupation selected",
    questions: [
      "How should Brampton workers use a NOC code finder Canada result?",
      "What evidence should support a NOC code chosen for a Canada immigration application?",
    ],
    answer: "A NOC code finder Canada result is a starting point for comparing real job duties with the National Occupational Classification. Brampton workers should check the lead statement and main duties against reference letters, dates, hours and employer records; a familiar job title alone does not prove the correct NOC or TEER category.",
    detail: "The strongest occupation review creates a duty matrix before an Express Entry, LMIA or PNP strategy is selected. Use the [Government of Canada NOC page]({SOURCE}) to confirm the current description, then explain any difference between the workplace role and the closest classification.",
    items: ["Lead statement and main duties", "Dates, hours, wage and employer information", "Reference-letter wording that reflects the real work", "The immigration program’s treatment of the selected NOC"],
    source: OFFICIAL_SOURCES.noc,
  },
  {
    test: (path) => /tools\/pnp-eligibility/.test(path),
    subject: "a PNP eligibility checker Canada result",
    keyphrase: "PNP eligibility checker Canada",
    lens: "the province, stream, occupation, employer, language, settlement and federal requirements behind a possible match",
    questions: [
      "What does a PNP eligibility checker Canada result mean for someone in Brampton?",
      "How should Brampton applicants compare a possible provincial nomination pathway?",
    ],
    answer: "A PNP eligibility checker Canada result identifies a provincial or territorial stream worth researching; it is not a nomination or a promise of permanent residence. From Brampton, applicants should compare the exact province, intake status, occupation, employer, language, settlement and federal requirements before treating a broad match as an application plan.",
    detail: "A focused comparison records whether the route is Express Entry-linked or base, what evidence the stream accepts and whether the applicant can genuinely settle in the nominating province. Check the [IRCC Provincial Nominee Program guide]({SOURCE}) and the province’s current instructions before paying fees or relying on an older intake pattern.",
    items: ["The exact provincial stream and current intake status", "Job offer, employer and NOC conditions", "Language, education, work and settlement evidence", "The federal step required after a nomination"],
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => /tools\/document-checklist/.test(path),
    subject: "a Canada immigration document checklist",
    keyphrase: "Canada immigration document checklist",
    lens: "identity, status, civil, education, language, work, funds, travel, police, medical and relationship evidence",
    questions: [
      "How should Brampton applicants build a Canada immigration document checklist?",
      "What makes an immigration document checklist useful beyond a list of file names?",
    ],
    answer: "A Canada immigration document checklist should be built from the exact application, applicant location, family composition and personal history. For a Brampton applicant, each item should show who provides it, which date range it covers, whether translation or explanation is needed and which eligibility claim it supports.",
    detail: "A good checklist is a control system for the file, not a download folder. Link every request to the current form or instruction, flag gaps caused by name changes or travel and keep a final consistency check before submission. A [Brampton immigration consultation](" + CONSULTATION_LINK + ") can help prioritize a long or unusual document history.",
    items: ["Requested, received, translated and reviewed status", "Dates covered by each record", "Gaps, inconsistencies and written explanations", "The current official checklist for the selected route"],
    source: OFFICIAL_SOURCES.immigration,
  },
  {
    test: (path) => /assessment\/free-canada-immigration-assessment/.test(path),
    subject: "a free Canada immigration assessment",
    keyphrase: "free Canada immigration assessment in Brampton",
    lens: "the applicant’s goal, status, history, possible routes, evidence gaps and immediate deadlines",
    questions: [
      "What can a free Canada immigration assessment in Brampton help you understand?",
      "How should you prepare for a Brampton immigration profile review?",
    ],
    answer: "A free Canada immigration assessment in Brampton can help identify possible pathways, obvious information gaps and the next question to research. It is an initial screen, not an official decision or a guarantee. The more accurate the goal, status, dates, family, work, education and travel history, the more useful the first review becomes.",
    detail: "Prepare a short timeline and bring the fact that could change the route first. The review should clarify what is known, what needs official verification and which documents deserve priority before a full application or paid service is considered. Keep the [IRCC immigration programs guide]({SOURCE}) as the final source for eligibility.",
    items: ["The immigration outcome you want and its target date", "Current status and any expiry or refusal deadline", "Education, language, work, family and travel facts", "The single question that would make the next step clearer"],
    source: OFFICIAL_SOURCES.immigration,
  },
  {
    test: (path) => /contact\/book-immigration-consultation/.test(path),
    subject: "an immigration consultation in Brampton",
    keyphrase: "immigration consultant in Brampton",
    lens: "the route, evidence, deadline, service scope and decision that the consultation needs to clarify",
    questions: [
      "What should you bring to an immigration consultation in Brampton?",
      "How can an immigration consultant in Brampton make the next step clearer?",
    ],
    answer: "Bring the facts that can change the advice: your immigration goal, current status, important dates, family details, education, language, work, funds, travel and previous applications. For a Brampton consultation, a refusal letter, document request or permit expiry should be shared with the date received so the available next steps can be assessed early.",
    detail: "A useful consultation should identify the route under review, the evidence gap that matters most, the deadline to protect and the responsibilities included in the service. It should explain uncertainty rather than promise approval. Use the [Government of Canada authorized representative guidance]({SOURCE}) to verify who may provide paid immigration advice.",
    items: ["The decision you need answered first", "Documents or facts that may change eligibility", "The deadline and consequence of waiting", "The written service scope, fee and next owner"],
    source: OFFICIAL_SOURCES.representatives,
  },
  {
    test: (path) => /immigration-draws/.test(path),
    subject: "Express Entry draw results in Canada",
    keyphrase: "Express Entry draw results Canada",
    lens: "draw type, CRS cutoff, invitation count, tie-break time and the candidate group targeted by the round",
    questions: [
      "How should Brampton candidates read Express Entry draw results Canada?",
      "What can Express Entry draw results tell a Brampton applicant about the next step?",
    ],
    answer: "Express Entry draw results Canada show what happened in a particular invitation round; they do not guarantee the next CRS cutoff or an invitation. Brampton candidates should compare the round type with their own program eligibility, category evidence, CRS inputs and tie-break position before changing a profile or making a costly decision.",
    detail: "Record the official date, round type, invitations, CRS score and tie-break information, then identify which part of your profile is actually changeable. The [IRCC Express Entry guide]({SOURCE}) explains the system, while the live round record provides context rather than a prediction.",
    items: ["Round type and the candidates it targeted", "Your eligible Express Entry program", "CRS assumptions backed by current documents", "The next lawful improvement or alternate pathway"],
    source: OFFICIAL_SOURCES.expressEntry,
  },
  {
    test: (path) => /about\//.test(path),
    subject: "a licensed Canadian immigration consultant in Brampton",
    keyphrase: "licensed immigration consultant in Brampton",
    lens: "authorization, identity, service scope, evidence standards, communication and Canada-wide support",
    questions: [
      "What should you look for in a licensed immigration consultant in Brampton?",
      "How can a Brampton immigration practice support clients across Canada?",
    ],
    answer: "When choosing a licensed immigration consultant in Brampton, verify the representative’s authorization, identity, service scope and contact information before sharing sensitive records or paying. A credible Canada immigration practice explains what it can do, what it cannot control, how evidence is reviewed and which official source governs the advice.",
    detail: "Local support matters because a Brampton client can meet or communicate with the team while still needing a Canada-wide strategy. Look for plain-language explanations, an organized document process and a written retainer that makes fees, responsibilities and deadlines visible. Verify the representative through the [Government of Canada authorized representative guidance]({SOURCE}).",
    items: ["Current regulator and licence information", "Written scope, fees and client responsibilities", "A fact-specific evidence and deadline process", "Clear limits on guarantees and decision-maker control"],
    source: OFFICIAL_SOURCES.representatives,
  },
  {
    test: (path) => /express-entry|federal-skilled|canadian-experience|federal-skilled-trades/.test(path),
    subject: "Express Entry Canada",
    keyphrase: "Express Entry consultant in Brampton",
    lens: "program eligibility, CRS ranking, language evidence, NOC duties, education and invitation readiness",
    questions: [
      "What should Brampton applicants check before choosing Express Entry Canada?",
      "How can an Express Entry consultant in Brampton improve application readiness?",
    ],
    answer: "Express Entry Canada should be planned in two stages: first confirm eligibility for a participating federal program, then assess how the profile may rank in the pool. Applicants in Brampton should connect the CRS estimate with language validity, education evidence, NOC duties, family facts, category eligibility and the documents required after an invitation.",
    detail: "A Brampton-based review can organize the profile around the evidence an officer will actually read, while the federal rules remain the same across Canada. Compare the current [IRCC Express Entry guide]({SOURCE}) with the exact program page, then keep a provincial or employer-supported alternative in view if the score or eligibility assumptions change.",
    items: ["Federal program eligibility before profile creation", "Language, education and NOC evidence", "CRS factors that can be proved lawfully", "A complete-application plan for the invitation window"],
    source: OFFICIAL_SOURCES.expressEntry,
  },
  {
    test: (path) => /pnp|provincial-nominee|atlantic|rural|municipal|agri-food|care-provider|caregiver/.test(path),
    subject: "a Canada Provincial Nominee Program pathway",
    keyphrase: "PNP consultant in Brampton",
    lens: "province, stream, occupation, job offer, language, education, settlement intention and the federal stage",
    questions: [
      "How should Brampton applicants compare a Canada Provincial Nominee Program pathway?",
      "What can a PNP consultant in Brampton help an applicant organize?",
    ],
    answer: "A Canada Provincial Nominee Program pathway is selected by evidence, not by province name alone. From Brampton, compare the exact stream’s occupation, employer, job offer, language, education, work history, settlement intention, intake status and federal process before deciding that a nomination route fits.",
    detail: "The province makes its own selection while the federal government still assesses the permanent-residence application and admissibility. A PNP consultant in Brampton can help organize a stream comparison and document plan, but the [IRCC Provincial Nominee Program guide]({SOURCE}) and the province’s current page remain the controlling references.",
    items: ["Current stream opening and invitation method", "Occupation, employer and job-offer conditions", "Language, education, work and settlement evidence", "Express Entry-linked or base nomination process"],
    source: OFFICIAL_SOURCES.pnp,
  },
  {
    test: (path) => !/study|student|pgwp/.test(path) && /work|lmia|talent|employer|iec/.test(path),
    subject: "a Canada work permit or employer immigration pathway",
    keyphrase: "work permit consultant in Brampton",
    lens: "permit type, employer or LMIA evidence, NOC duties, status, compliance and the next permanent-residence option",
    questions: [
      "What should Brampton workers know before choosing a Canada work permit pathway?",
      "How can a work permit consultant in Brampton help organize an employer file?",
    ],
    answer: "The right Canada work permit or employer immigration pathway depends on the authorization type, applicant status, job, employer, NOC duties and whether an LMIA or exemption applies. Brampton workers and employers should also track expiry dates and permit conditions because a job change or late extension can affect the next option.",
    detail: "A local review can connect the employer’s real vacancy with the worker’s documents, but the work authorization must still meet federal requirements. Check the [IRCC work permit guide]({SOURCE}) for current conditions, then organize the job offer, wage, recruitment, authorization and compliance evidence before filing.",
    items: ["Employer-specific, open or LMIA-exempt route", "Job duties, wage, location and NOC fit", "Status, expiry and lawful-work timeline", "Employer compliance and future PR planning"],
    source: OFFICIAL_SOURCES.work,
  },
  {
    test: (path) => /study|student|pgwp/.test(path),
    subject: "a Canada study permit or PGWP pathway",
    keyphrase: "study permit consultant in Brampton",
    lens: "DLI and program choice, acceptance, funds, study purpose, status compliance and the post-study work plan",
    questions: [
      "What should Brampton students check before choosing a Canada study permit pathway?",
      "How can a study permit consultant in Brampton support a student’s Canada plan?",
    ],
    answer: "A Canada study permit or PGWP pathway should connect the school, program, funds, study history, temporary-residence explanation and future work plan. Brampton students should verify current DLI, attestation, language, program and post-graduation rules before paying tuition or assuming that graduation automatically leads to a work permit.",
    detail: "A study permit consultant in Brampton can help test whether the documents tell one credible story, while the current federal instructions control the result. Review the [IRCC study permit guide]({SOURCE}) and the school details together, then keep tuition, status, completion and work-permit dates in one timeline.",
    items: ["DLI, program and acceptance evidence", "Tuition, living-expense and travel funds", "Study purpose and previous education or work history", "Study-permit compliance and PGWP assumptions"],
    source: OFFICIAL_SOURCES.study,
  },
  {
    test: (path) => /sponsor|family|spousal|partner|parent|child|orphan/.test(path),
    subject: "Canada family sponsorship",
    keyphrase: "family sponsorship consultant in Brampton",
    lens: "relationship category, sponsor eligibility, undertaking, family history, admissibility and relationship evidence",
    questions: [
      "What should Brampton families know before starting Canada family sponsorship?",
      "How can a family sponsorship consultant in Brampton organize a stronger relationship record?",
    ],
    answer: "Canada family sponsorship begins with the exact relationship category and the sponsor’s eligibility. Brampton families should then build one consistent timeline covering identity, civil status, visits, communication, shared life, finances, family composition, admissibility and any previous applications instead of uploading disconnected documents.",
    detail: "A family sponsorship consultant in Brampton can help organize the record around the questions the application must answer, but the category rules and undertaking still come from IRCC. Compare the evidence with the [IRCC family sponsorship guide]({SOURCE}) before choosing forms, payment steps or an inland or outland strategy.",
    items: ["Spouse, partner, child, parent or other category", "Sponsor status, income and undertaking requirements", "Relationship and family-history evidence", "Medical, police, identity and admissibility records"],
    source: OFFICIAL_SOURCES.family,
  },
  {
    test: (path) => /visit|visitor|super-visa|eta|transit|business-visa/.test(path),
    subject: "a Canada visitor visa or Super Visa",
    keyphrase: "visitor visa consultant in Brampton",
    lens: "purpose of travel, length of stay, funds, invitation or host details, ties and compliance with temporary status",
    questions: [
      "What should Brampton families prepare for a Canada visitor visa application?",
      "How can a visitor visa consultant in Brampton clarify temporary-residence evidence?",
    ],
    answer: "A Canada visitor visa or Super Visa application should make the purpose, length and funding of the trip easy to understand. Brampton applicants and hosts should align the invitation, itinerary, accommodation, employment, finances, travel history and ties with the temporary stay described in the application.",
    detail: "A visitor visa consultant in Brampton can help identify gaps in the travel story, but no representative can guarantee entry or approval. Use the [IRCC visit Canada guide]({SOURCE}) to confirm the current document requirements and explain any prior refusal, long stay or status history directly.",
    items: ["Purpose and dates of the proposed visit", "Funds, host, accommodation and itinerary", "Employment, family, property or other ties", "Previous travel, refusals and compliance history"],
    source: OFFICIAL_SOURCES.visitor,
  },
  {
    test: (path) => /citizenship|pr-card|prtd|residency|adoption/.test(path),
    subject: "a Canada citizenship or permanent-resident document application",
    keyphrase: "Canadian citizenship consultant in Brampton",
    lens: "status, physical presence, travel history, identity, residence records and the correct citizenship or PR document process",
    questions: [
      "What should Brampton permanent residents check before a Canada citizenship application?",
      "How can a Canadian citizenship consultant in Brampton help reconcile residence records?",
    ],
    answer: "A Canada citizenship or permanent-resident document application depends on the correct process and a reliable record of status, identity, residence and travel. Brampton applicants should reconcile passports, addresses, tax or employment records and status documents before relying on a calculator, renewal date or citizenship eligibility estimate.",
    detail: "A Canadian citizenship consultant in Brampton can help organize a travel and residence chronology, but the current citizenship or PR document instructions control the assessment. Check the [IRCC citizenship guide]({SOURCE}) and preserve the records behind every date used in the application.",
    items: ["The immediate citizenship, PR card or travel-document need", "Physical-presence and travel-history records", "Identity, address and status documents", "The current application guide and deadline"],
    source: OFFICIAL_SOURCES.citizenship,
  },
  {
    test: (path) => /inadmissibility|refusal|appeal|judicial-review|mandamus|removal|detention|misrepresentation|rehabilitation|pardon/.test(path),
    subject: "a Canadian immigration refusal, inadmissibility or appeal matter",
    keyphrase: "immigration refusal consultant in Brampton",
    lens: "the decision, legal or factual concern, deadline, evidence and remedy available for the specific file",
    questions: [
      "What should Brampton applicants do after a Canadian immigration refusal?",
      "How can an immigration refusal consultant in Brampton help protect the next deadline?",
    ],
    answer: "After a Canadian immigration refusal, inadmissibility finding or appealable decision, start with the exact letter, reasons, date received and available deadline. Brampton applicants should preserve the original record and determine whether the next step is a focused response, reconsideration, reapplication, appeal, rehabilitation, judicial review or another remedy.",
    detail: "An immigration refusal consultant in Brampton can help separate the stated concern from assumptions and organize evidence that answers it. The available remedy depends on the decision and timeline, so verify the current [IRCC admissibility and enforcement guide]({SOURCE}) and obtain file-specific advice before sending a new application.",
    items: ["Decision, reasons and date received", "Deadline, status and enforcement consequence", "Evidence that directly addresses the concern", "Remedy available for this decision type"],
    source: OFFICIAL_SOURCES.inadmissibility,
  },
  {
    test: (path) => /business|start-up|startup|entrepreneur|self-employed/.test(path),
    subject: "Canada business immigration and the Start-up Visa route",
    keyphrase: "business immigration consultant in Brampton",
    lens: "business activity, ownership, management, source of funds, designated organization, work authorization and settlement",
    questions: [
      "What should Brampton entrepreneurs compare in Canada business immigration?",
      "How can a business immigration consultant in Brampton test a founder’s pathway?",
    ],
    answer: "Canada business immigration should be compared by the business activity, ownership or investment structure, management role, source of funds, work authorization and permanent-residence route. Brampton entrepreneurs should also connect the business plan with the province, family, language, admissibility and settlement facts that may affect the application.",
    detail: "A business immigration consultant in Brampton can help turn a broad commercial goal into a documentable plan, but program openings and criteria can change. Use the [IRCC immigration programs guide]({SOURCE}) to verify the current route and make the business case, funds and immigration evidence tell the same story.",
    items: ["Business ownership and management history", "Lawful source and movement of funds", "Business plan, role and market evidence", "Work authorization, family and settlement strategy"],
    source: OFFICIAL_SOURCES.immigration,
  },
  {
    test: (path) => /blog/.test(path),
    subject: "Canada immigration research",
    keyphrase: "Canada immigration information in Brampton",
    lens: "plain-language definitions, current official sources, practical questions and the next decision for the reader",
    questions: [
      "How can people in Brampton use Canada immigration information responsibly?",
      "What makes a Canada immigration guide useful before a consultation?",
    ],
    answer: "Canada immigration information is most useful when it turns a broad search into a precise question. Readers in Brampton can use a guide to learn the program vocabulary, identify likely evidence and find the official rule, then compare that information with their own status, dates, family, work, study and travel history.",
    detail: "Good research explains its scope, uses plain language and makes uncertainty visible. Save the source date, note the question still unanswered and use the [IRCC immigration programs guide]({SOURCE}) to confirm a time-sensitive rule before submitting a form or paying a fee.",
    items: ["The exact pathway and applicant profile covered", "The official source and date behind a rule", "The facts that could change the answer", "The next question for a focused Brampton review"],
    source: OFFICIAL_SOURCES.immigration,
  },
];

const DEFAULT_RULE = {
  subject: "this Canada immigration pathway",
  keyphrase: "immigration consultant in Brampton",
  lens: "eligibility, evidence, timing, local support and the decision points that shape the application",
  questions: [
    "What should Brampton applicants know about this Canada immigration pathway?",
    "How can a Brampton review make the next immigration decision clearer?",
  ],
  answer: "This Canada immigration pathway should be assessed against the applicant’s real goal, current status, personal history, evidence and deadline. People in Brampton can use the page to understand the route, but the final assessment still depends on the current federal or provincial requirements and the documents available to support each claim.",
  detail: "A useful local review identifies the decision that needs to be made first, the evidence gap that could change the route and the deadline that must be protected. Compare the page with the [IRCC immigration programs guide]({SOURCE}), then use a [Brampton immigration consultation](" + CONSULTATION_LINK + ") when the history is unusual or time-sensitive.",
  items: ["Goal, current status and location", "Education, language, work and family history", "Funds, travel, admissibility and previous applications", "Current official instructions and deadline"],
  source: OFFICIAL_SOURCES.immigration,
};

function normalizePath(path) {
  const value = String(path || "/").split("?")[0].split("#")[0];
  return value.length > 1 ? value.replace(/\/$/, "") : value;
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function resolveSource(text, source) {
  return text.replaceAll("{SOURCE}", source.url);
}

export function getLocalSeoExpansion(page) {
  const path = normalizePath(page?.path);
  const rule = ROUTE_RULES.find((candidate) => candidate.test(path)) || DEFAULT_RULE;
  const pageTitle = cleanText(page?.h1) || cleanText(rule.subject);
  const custom = getLocalPageContent(path);
  const source = (custom?.sourceKey && OFFICIAL_SOURCES[custom.sourceKey]) || rule.source || OFFICIAL_SOURCES.immigration;
  const localQuestion = custom?.questions?.[0] || `What should Brampton applicants verify for ${pageTitle}?`;
  const planningQuestion = custom?.questions?.[1] || `How can a Brampton applicant prepare ${pageTitle} evidence?`;
  const answer = custom?.answer || `For ${pageTitle}, start by checking ${rule.lens}. A Brampton applicant should connect those facts to the current route instructions and keep the evidence consistent across forms, records and deadlines. The page can explain the pathway, but the decision-maker applies the current rules to the applicant’s personal facts.`;
  const detail = custom?.detail || `A focused Brampton review of ${pageTitle} should identify the first decision, the evidence gap that could change the route and the deadline that needs protecting. Compare the page with the [${source.label}]({SOURCE}) and keep any consultation focused on the facts that the selected pathway actually tests.`;
  const items = custom?.items || [
    `the exact ${pageTitle.toLowerCase()} route and current intake or application stage`,
    "identity, status, family and personal-history records",
    "education, language, work, funds or travel evidence where relevant",
    "the official instructions, deadline and next owner for the file",
  ];
  const verificationQuestion = custom?.verificationQuestion || `What should you verify before relying on ${rule.keyphrase} for ${pageTitle}?`;
  const verificationAnswer = custom?.verificationAnswer
    ? `${custom.verificationAnswer} Use the [${source.label}]({SOURCE}) as the controlling reference.`
    : `Before relying on ${rule.keyphrase} for ${pageTitle}, check ${rule.lens} against the current [${source.label}]({SOURCE}). Search results and tools can help you frame the question, but they cannot replace the decision-maker’s rules or a complete review of your personal facts.`;

  return [
    { type: "heading", level: 2, text: localQuestion },
    { type: "paragraph", text: resolveSource(answer, source) },
    { type: "heading", level: 2, text: planningQuestion },
    { type: "paragraph", text: resolveSource(detail, source) },
    { type: "list", ordered: false, items: items.map((item) => `**${item}** — compare it with the current route instructions and keep the supporting record together.`) },
    { type: "heading", level: 2, text: verificationQuestion },
    { type: "paragraph", text: resolveSource(verificationAnswer, source) },
  ];
}

export default getLocalSeoExpansion;
