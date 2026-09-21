import { getUniqueSeoContentBlocks } from "./seoUniqueContent";
import { getLocalSeoExpansion } from "./seoLocalExpansion";
import { getBalancedSeoContentBlocks } from "./seoBalancedContent";
import { getRegionalLandingLinks } from "./seoRegionalLinks";

/*
 * Additive search content for published pages.
 *
 * The source page records are intentionally left untouched. This layer adds
 * useful, topic-aware copy at render time so existing page content, links and
 * structured data remain intact while thin pages get clearer answers and
 * preparation guidance.
 */

const OFFICIAL_SOURCES = {
  immigration: {
    label: "IRCC immigration hub",
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
    label: "IRCC visitor visa guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html",
  },
  citizenship: {
    label: "IRCC citizenship guide",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html",
  },
  inadmissibility: {
    label: "IRCC inadmissibility guide",
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

const EXCLUDED_PATHS = new Set([
  "/privacy",
  "/terms",
  "/disclaimer",
  "/pay",
  "/contact/pay-immigration-consultation-canada",
]);

const SPECIAL_CONFIGS = {
  "/": {
    topic: "Canada immigration planning",
    source: OFFICIAL_SOURCES.immigration,
    answer: "Canada immigration planning starts by matching your goal with the route, evidence and deadline that actually apply to your situation. Express Entry, PNP, work, study, family, visitor, citizenship and refusal matters each use different criteria, so a useful plan compares options before forms, fees or promises enter the conversation.",
    fit: "Write down whether you want permanent residence, temporary entry, work, study, family reunification, citizenship or help after a refusal. Then record your status, location, work and education history, language results, family details, funds, travel and any deadline.",
    evidence: ["your goal, location and current immigration status", "education, language and employment history", "family, financial, travel and admissibility records", "the current IRCC or provincial page that controls the route"],
    next: "Use the pathway guide and free tools to organize the facts, then compare the estimate with the official source. When the history is complex, a licensed representative can help turn the questions into a prioritized, file-specific plan.",
  },
  "/canada-immigration-from-uk": {
    topic: "Canada immigration from the UK",
    source: OFFICIAL_SOURCES.immigration,
    answer: "Canada immigration from the UK means choosing the Canadian route that matches the profile a UK applicant can actually evidence, then preparing the UK-side documents that route requires. Express Entry, a provincial nomination, an International Experience Canada working holiday, an employer-specific work permit, a study permit and family sponsorship each test different facts, and a British passport does not remove the language-test, credential-assessment, police-certificate or funds requirements.",
    fit: "Start with the outcome you want — permanent residence, a temporary working holiday, work, study or family reunification — and the date you are working towards. Then check the language test, Educational Credential Assessment, UK police certificate, panel-physician medical and funds history that the chosen route will actually ask for.",
    evidence: ["a designated language test result with a valid expiry date", "an Educational Credential Assessment for UK qualifications", "the UK police certificate issued for the part of the UK you lived in", "settlement funds held in your own name and traceable in Canadian dollars"],
    next: "Work backwards from the filing date and run the long-lead items in parallel: language test, credential assessment, police certificate and funds history. Keep employer reference letters, payslips and travel records consistent with the occupation and dates you are claiming, and confirm every requirement against the current IRCC page before you pay a fee or submit.",
  },
  "/immigrate/express-entry": {
    topic: "Express Entry Canada",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "Express Entry Canada is a federal application-management system for eligible skilled workers. A candidate must qualify under at least one participating program, create a profile and receive an invitation before applying for permanent residence. The CRS score ranks profiles, but the draw type and category criteria also matter.",
    fit: "Start by separating program eligibility from ranking. Review the Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program, then check language results, education, work history, family factors, category eligibility and provincial nomination options.",
    evidence: ["language test results and validity dates", "education credentials and an Educational Credential Assessment where required", "employer reference letters that match the claimed NOC duties and dates", "proof of funds, police certificates, travel history and civil-status records where required"],
    next: "Use the CRS estimate as a planning signal, not a promise of an invitation. Compare the profile with the applicable round type, identify the strongest lawful score or eligibility lever, and keep a second pathway under review if the draw environment changes.",
  },
  "/immigrate/federal-skilled-worker": {
    topic: "Federal Skilled Worker Program Canada",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "The Federal Skilled Worker Program is an Express Entry pathway for skilled workers with qualifying foreign work experience. Applicants must meet the program requirements, including the 67-point selection grid, language rules, education evidence and settlement-fund requirements that apply to their situation, before CRS ranking can lead to an invitation.",
    fit: "Check the 67-point grid separately from the CRS score. The review should cover the continuity and duties of skilled work, the language test, the education assessment, age, adaptability, arranged employment and whether proof of funds or an exemption applies.",
    evidence: ["a complete employment timeline with duties, hours, wages and employer details", "valid language results in all four abilities", "an ECA or Canadian credential evidence for the education claimed", "settlement-fund records and a clear explanation of any gaps or changes in status"],
    next: "Build the profile only after the facts can be supported. If the grid is short of the minimum or the CRS outlook is weak, compare language retesting, education, Canadian work, category-based selection and PNP options before spending on a filing strategy.",
  },
  "/immigrate/canadian-experience-class": {
    topic: "Canadian Experience Class Canada",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "The Canadian Experience Class is an Express Entry pathway for people with eligible skilled work experience in Canada. The work must be authorized, paid and supported by evidence that matches the claimed occupation, period and duties. Language thresholds vary by the NOC TEER level, so the job and language details should be reviewed together.",
    fit: "The first question is whether the Canadian work experience is eligible, not simply whether a person has worked in Canada. Check the permit or authorization, qualifying months, employer and duties, TEER level, language result, self-employment or student-work exclusions and the CRS profile.",
    evidence: ["work permits and other authorization records covering the claimed period", "reference letters, pay records and tax documents that corroborate the work", "language results that meet the applicable TEER threshold", "a consistent address, travel, study and employment timeline"],
    next: "Plan the transition before a work permit expires. A candidate can use the CEC guide with the CRS calculator to see whether additional language points, Canadian experience, a provincial route or another Express Entry category needs attention.",
  },
  "/immigrate/federal-skilled-trades": {
    topic: "Federal Skilled Trades Program Canada",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "The Federal Skilled Trades Program is an Express Entry pathway for qualified tradespeople. Eligibility depends on the trade group, recent skilled-trade experience, language results and either a qualifying job offer or a Canadian certificate of qualification. The documents must demonstrate the actual trade duties and the required period of experience.",
    fit: "Confirm the trade group and the evidence route before creating a profile. A job offer and a certificate of qualification are not interchangeable documents, and a provincial or territorial trade authority may control the certification process.",
    evidence: ["employment records showing the trade duties, hours and dates", "language results that meet the program threshold in each ability", "a valid job offer or certificate of qualification when required", "licensing, apprenticeship or provincial trade records where they support the claim"],
    next: "Map the trade experience to the correct NOC and authority, then compare FST with PNP, CEC and employer-supported options. This helps prevent a profile from relying on a job title that does not match the required duties.",
  },
  "/immigrate/provincial-nominee-program-all-provinces-consolidated": {
    topic: "Provincial Nominee Program Canada",
    source: OFFICIAL_SOURCES.pnp,
    answer: "The Provincial Nominee Program lets a province or territory nominate people who meet its own economic, labour-market or settlement criteria and intend to live there. A nomination is not the same as permanent residence: the federal application and admissibility review still follow after the provincial decision.",
    fit: "Compare the province, stream and application route rather than treating PNP as one national program. A stream may assess occupation, job offer, language, education, work experience, settlement funds, ties or an invitation, and those details can change by intake.",
    evidence: ["the exact provincial stream instructions and intake status", "job offer, employer and wage evidence where the stream requires it", "language, education, work and settlement documents", "proof of ties, intention to settle and a complete federal admissibility record"],
    next: "Shortlist streams from the evidence you can genuinely support. Track the province’s official updates, avoid assuming that a past intake will reopen unchanged, and compare Express Entry-linked and non-Express Entry routes before choosing a province.",
  },
  "/work-and-study/canada-work-permit-overview": {
    topic: "Canada work permit",
    source: OFFICIAL_SOURCES.work,
    answer: "A Canada work permit authorizes a foreign national to work under the conditions written on the permit. The main planning distinction is between an employer-specific permit, which is tied to a job or employer, and an open work permit, which may allow work for different employers when the applicant meets the applicable category requirements.",
    fit: "Identify where the applicant is applying from, whether the permit is open or employer-specific, whether an LMIA or other authorization is needed, and what status or deadline controls the application. A job title alone does not establish eligibility.",
    evidence: ["passport, status and previous permit records", "job offer, employment contract, wage and employer documents", "LMIA, exemption or supporting authorization where required", "proof of experience, funds, medical or police documents when requested"],
    next: "Use the work-permit rules to create a document and status timeline. If the person is already in Canada, confirm whether a new application, extension, restoration or change of conditions is required before work begins or changes.",
  },
  "/work-and-study/canada-study-permit": {
    topic: "Canada study permit",
    source: OFFICIAL_SOURCES.study,
    answer: "A Canada study permit is the document that allows most foreign nationals to study at a designated learning institution. A strong application connects the acceptance letter, study plan, finances, travel and status history, and the applicant’s plans after the authorized study period in a consistent explanation supported by documents.",
    fit: "Check the school and program before focusing on the form. Confirm the DLI, program eligibility, attestation requirements, tuition and living funds, passport, medical or police requirements and the facts that explain why the proposed study makes sense for the applicant.",
    evidence: ["letter of acceptance and provincial or territorial attestation evidence where required", "tuition, living-expense and travel-funding records", "education, employment and language history", "a study plan that connects the program to the applicant’s background and future plans"],
    next: "Review the permit conditions before planning work or a later PGWP route. Program, school, location and application-date details can affect future options, so verify the current rules before paying tuition or relying on an older guide.",
  },
  "/work-and-study/post-graduation-work-permit-pgwp": {
    topic: "Post-Graduation Work Permit Canada",
    source: OFFICIAL_SOURCES.study,
    answer: "A Post-Graduation Work Permit may let an eligible international graduate work in Canada after completing a qualifying program. Eligibility depends on the designated learning institution, program, study history, timing, language or field-of-study rules that apply, and the applicant’s status. A study permit does not automatically create PGWP eligibility.",
    fit: "Check PGWP eligibility before choosing a program and again before graduation. The school, credential, program length, delivery method, application date and the graduate’s study-permit compliance can all affect the assessment.",
    evidence: ["school and program details showing the applicable eligibility", "completion letter and transcript", "study permit and enrolment history", "language or field-of-study evidence where the current rules require it"],
    next: "Treat PGWP planning and permanent-residence planning as related but separate decisions. Use the permit’s validity and the graduate’s likely NOC, language and Canadian work experience to map a realistic CEC, PNP or other next route.",
  },
  "/sponsor/family-sponsorship-overview-all-categories": {
    topic: "family sponsorship Canada",
    source: OFFICIAL_SOURCES.family,
    answer: "Family sponsorship Canada allows an eligible sponsor to support certain relatives for permanent residence, subject to the relationship category, sponsor requirements, undertaking and the sponsored person’s admissibility. The correct document set depends on whether the application concerns a spouse, partner, child, parent or another permitted relative.",
    fit: "Start with the relationship category and sponsor eligibility. Then build a timeline of the relationship, status, visits, communication, finances and family changes so the application answers both the legal requirements and any obvious credibility questions.",
    evidence: ["identity and civil-status documents for everyone included", "relationship evidence appropriate to the category", "sponsor status, income or undertaking records where required", "medical, police, immigration-history and translation documents requested by IRCC"],
    next: "Do not combine evidence mechanically. A coherent relationship and family-history record is more useful than a large unlabelled upload, and the sponsor should understand the undertaking and future responsibilities before signing.",
  },
  "/sponsor/spousal-and-partner-sponsorship-overview": {
    topic: "spousal and partner sponsorship Canada",
    source: OFFICIAL_SOURCES.family,
    answer: "Spousal and partner sponsorship Canada is a family-class pathway for an eligible Canadian citizen or permanent resident to sponsor a spouse, common-law partner or qualifying conjugal partner. The relationship must fit the legal category and the evidence should show a genuine, continuing relationship with a timeline that matches the forms.",
    fit: "Confirm whether the relationship is legally a marriage, common-law partnership or conjugal partnership before choosing the forms. Then check sponsor eligibility, the applicant’s status and admissibility, and whether inland or outland processing fits the circumstances.",
    evidence: ["marriage or civil-status records and prior relationship history", "shared residence, finances, communication, visits and family evidence", "identity, immigration, medical and police documents", "a clear explanation for periods of distance, changes in plans or previous applications"],
    next: "Organize relationship proof by time period and explain the context of the relationship. If the applicant is in Canada, review temporary status and work-permit options separately rather than assuming sponsorship itself authorizes work.",
  },
  "/sponsor/parents-and-grandparents-program-pgp": {
    topic: "Parents and Grandparents Program Canada",
    source: OFFICIAL_SOURCES.family,
    answer: "The Parents and Grandparents Program Canada is an invitation-based family sponsorship route when IRCC opens an intake. Potential sponsors must meet the program’s requirements, receive an invitation when applicable, and show the required income and undertaking. A Super Visa is a separate temporary option and should not be treated as the same application.",
    fit: "Check the intake status and invitation process first. Then review sponsor eligibility, family size, income history, co-signing rules and the undertaking period, while keeping a separate plan for parents or grandparents who need temporary visits.",
    evidence: ["invitation and sponsor documents", "income records for the required period", "identity, relationship and civil-status records", "medical, police and admissibility documents for the applicants"],
    next: "Keep the application record ready before an intake opens, but verify the current IRCC instructions because invitation processes, forms, fees and income requirements can change. Compare the Super Visa only after confirming the family’s actual travel and residence needs.",
  },
  "/visit/visitor-visa-trv-and-super-visa-combined": {
    topic: "Canada visitor visa and Super Visa",
    source: OFFICIAL_SOURCES.visitor,
    answer: "A Canada visitor visa and a Super Visa are temporary-residence options, but they serve different purposes. A visitor visa supports a temporary visit, while a Super Visa is designed for eligible parents and grandparents of Canadian citizens or permanent residents and has its own relationship, insurance, medical and financial requirements.",
    fit: "Define the purpose, length and host relationship before selecting the application type. The file should make the travel plan, funding, accommodation, ties outside Canada and intention to comply with the authorized stay easy to understand.",
    evidence: ["passport and travel-history records", "invitation or family relationship evidence where relevant", "bank, employment, residence and family-tie documents", "travel medical insurance and host or income evidence for a Super Visa where required"],
    next: "Use the application type that matches the real purpose of travel. A long invitation letter cannot cure unexplained finances or weak temporary-residence evidence, so check that the documents tell one consistent story.",
  },
  "/citizenship/pr-card-renewal-and-citizenship-combined-overview": {
    topic: "Canadian citizenship and PR card renewal",
    source: OFFICIAL_SOURCES.citizenship,
    answer: "Canadian citizenship and PR card renewal are different applications with different tests. Citizenship planning focuses on eligibility, physical presence and supporting records; PR card renewal focuses on permanent-resident status, the residency obligation and a valid card or travel document need. Travel and status history should be checked before choosing the form.",
    fit: "Create a complete date-based record of presence, travel, addresses, immigration status and family changes. The correct route depends on whether the immediate need is proof of citizenship, a citizenship grant, a PR card, a permanent resident travel document or a residency-obligation response.",
    evidence: ["passport pages, travel records and address history", "PR status and prior card or travel-document records", "tax, education, employment or other presence evidence where relevant", "identity, language, knowledge or citizenship documents required by the chosen application"],
    next: "Calculate eligibility using the current official tool or guide, then reconcile the result with the underlying records. Do not rely on memory for travel dates or assume a card expiry date alone determines permanent-resident status.",
  },
  "/inadmissibility-and-appeals/refusal-and-pfl-response": {
    topic: "Canadian immigration refusal and procedural fairness response",
    source: OFFICIAL_SOURCES.inadmissibility,
    answer: "A Canadian immigration refusal or procedural fairness response requires a close reading of the decision-maker’s concern, the application record and the available deadline. The next remedy may be a response, reconsideration request, reapplication, appeal or judicial review, depending on the decision and the facts. There is no single response that fits every refusal.",
    fit: "Preserve the complete file first: refusal letter, procedural fairness letter, submitted forms, documents, messages and delivery dates. Then separate the stated reason from assumptions, identify what evidence could address it, and check whether a statutory or court deadline is running.",
    evidence: ["the decision or fairness letter and proof of when it was received", "the complete original application and correspondence", "new or overlooked evidence tied to the specific concern", "a chronology showing status, travel, family, employment and previous applications"],
    next: "Do not respond by repeating the original narrative. Match each concern to a fact, document or legal question, and get urgent file-specific advice when a deadline, removal risk, inadmissibility issue or Federal Court remedy may apply.",
  },
  "/about/about-commonwealth-migration": {
    topic: "a licensed Canadian immigration consultant in Brampton",
    source: OFFICIAL_SOURCES.representatives,
    answer: "A licensed Canadian immigration consultant in Brampton can help a client understand possible pathways, prepare evidence and manage an authorized immigration service. Commonwealth Migration is a CICC-regulated practice serving clients in Brampton, across Canada and internationally. The relevant regulator and licence status should always be verified before retaining a paid representative.",
    fit: "A useful first conversation connects the client’s goal, status, work and education history, family circumstances, admissibility, documents and deadline. The aim is a reasoned plan and a clear service scope, not a guarantee of approval.",
    evidence: ["the representative’s current name and licence information", "a written description of the service and responsibilities", "the client’s goal, status and immigration history", "the official program or regulator information used to verify the advice"],
    next: "Read the service scope, ask which decision the review will answer, and verify the representative on the current CICC register. Use the site’s pathway guides as preparation, then bring the questions that require a profile-specific assessment.",
  },
  "/about/canada-immigration-consulting-process": {
    topic: "Canada immigration consulting process",
    source: OFFICIAL_SOURCES.representatives,
    answer: "The Canada immigration consulting process turns an immigration goal into a sequence of decisions: understand the facts, compare the route, build the evidence, quality-check the record and protect the deadline. A licensed representative can explain and perform authorized services, but the immigration decision remains with the relevant Canadian authority.",
    fit: "A focused process starts with the client’s goal, location, status, family, education, work, language, admissibility, documents and deadline. The right route is chosen only after those facts are compared with the current program instructions.",
    evidence: ["a written goal, status and deadline", "a timeline of education, work, travel and family changes", "the forms and evidence required for the selected route", "clear ownership for review, submission and later requests"],
    next: "Use a staged review so missing facts are found before filing. The practical outcome should be a route decision, a prioritized document list, an explanation of risks and a next step that everyone understands.",
  },
  "/about/immigration-office-brampton-ontario": {
    topic: "immigration office Brampton Ontario",
    source: OFFICIAL_SOURCES.representatives,
    answer: "An immigration office in Brampton, Ontario can provide a local place to discuss Canadian immigration while serving clients by phone or video across Canada and internationally. Commonwealth Migration’s Brampton office supports pathway planning, application preparation and complex immigration questions within the scope of authorized services.",
    fit: "Before an appointment, share the goal, current status, location, family details, work and education history, key documents and any refusal or deadline. Confirm whether an in-person, phone or video consultation is the best format for the matter.",
    evidence: ["the office’s current contact details and appointment format", "your immigration goal and exact timing", "status, passport, work, education and family information", "any refusal, procedural fairness or document request that makes the appointment urgent"],
    next: "Use the Brampton office as the starting point for a focused review, then verify the proposed service scope and representative authorization. Clients outside Brampton can still prepare the same timeline and evidence through a scheduled remote consultation.",
  },
  "/tools/canada-immigration-calculators": {
    topic: "Canada immigration calculators",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "Canada immigration calculators are planning tools that turn profile inputs into an estimate, checklist or pathway signal. They can help you find missing information and compare options, but they do not make an official eligibility or immigration decision. Always check the current IRCC or provincial instructions before acting on a result.",
    fit: "Use one tool for one decision: estimate CRS, screen a PNP category, identify a NOC or organize documents. Enter dates and records you can support, save the assumptions, and treat any result as a question list for the next review.",
    evidence: ["current language, education and work information", "valid status, permit and travel dates", "family, funds and nomination details where relevant", "the official source used to confirm any score, rule, fee or deadline"],
    next: "Recalculate after a real change such as a new language result, completed credential or qualifying work period. Do not optimize for a number while overlooking program eligibility, admissibility or document consistency.",
  },
  "/tools/crs-calculator-canada": {
    topic: "CRS calculator Canada",
    source: OFFICIAL_SOURCES.crs,
    answer: "A CRS calculator Canada tool estimates the Comprehensive Ranking System score used to rank eligible Express Entry candidates. The estimate depends on the inputs entered and should be checked against the current IRCC criteria, including age, education, language, work experience, spouse factors, skill transferability and additional points.",
    fit: "Before treating the score as meaningful, confirm that the profile can enter the Express Entry pool under FSW, CEC or FST. Then check the validity of language and education evidence and whether the spouse or accompanying-family answers have been entered correctly.",
    evidence: ["language-test results and dates", "education and ECA details", "foreign and Canadian work history", "spouse, nomination, Canadian study and sibling factors where applicable"],
    next: "Use the number to identify the highest-impact next question: a language retest, education evidence, Canadian experience, category fit or PNP research. Compare the estimate with official criteria and published rounds, never with a guaranteed cutoff.",
  },
  "/tools/noc-finder-canada": {
    topic: "NOC finder Canada",
    source: OFFICIAL_SOURCES.noc,
    answer: "A NOC finder Canada tool helps you identify a likely National Occupational Classification code and TEER category by comparing your actual duties with the official occupation description. The correct code is based on the work performed, not only the job title, employer label or education held by the worker.",
    fit: "Start with the main duties, employment dates, hours, wage and work setting. Compare those facts with the lead statement and most important duties in the official NOC, then check whether the selected code is accepted by the immigration program you are researching.",
    evidence: ["a duty-by-duty description of the real job", "employer reference letters and payroll or tax records", "employment dates, hours, wage and location", "the official NOC description and program-specific experience rule"],
    next: "Keep a short explanation of why the NOC fits and flag any duty mismatch before using it for Express Entry, LMIA or PNP planning. If two codes appear possible, compare the evidence and program consequences instead of selecting the most attractive title.",
  },
  "/tools/pnp-eligibility-canada": {
    topic: "PNP eligibility check Canada",
    source: OFFICIAL_SOURCES.pnp,
    answer: "A PNP eligibility check Canada tool screens profile details against broad provincial nominee categories; it does not issue a nomination. Each province or territory controls its own streams, intakes, invitations and document rules, so a suggested match must be verified on the current official program page.",
    fit: "Use the result to choose which province and stream to research first. The useful inputs are usually occupation, NOC, language, education, work experience, job offer, status, settlement funds and genuine connection or intention to settle.",
    evidence: ["the province and stream’s current eligibility page", "language, education and work records", "job-offer, employer and settlement documents where required", "proof of connection or a credible intention to live in the nominating province"],
    next: "Record the stream name, intake date, invitation method and evidence assumptions behind the result. Recheck the official page before submitting because provincial criteria and available spaces can change without matching another province’s rules.",
  },
  "/tools/document-checklist-canada": {
    topic: "Canada immigration document checklist",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "A Canada immigration document checklist helps organize the records commonly requested for Express Entry, work permits, study permits, sponsorship and visitor applications. It is a preparation aid, not a final personalized document request. The exact checklist depends on the pathway, country, family members, history and instructions attached to the application.",
    fit: "Choose the application type first, then build folders for identity, status, civil records, education, language, work, funds, family and travel. Mark each item as available, requested, translated, uploaded or needing an explanation.",
    evidence: ["identity, passport and civil-status records", "education, language and employment evidence", "funds, travel, police and medical records where requested", "translations, affidavits or explanations for gaps, name changes or unavailable documents"],
    next: "Compare the completed checklist with the current application guide immediately before filing. Keep a complete copy of what was submitted and track later requests, because an officer may ask for evidence not visible on a generic checklist.",
  },
  "/assessment/free-canada-immigration-assessment": {
    topic: "free Canada immigration assessment",
    source: OFFICIAL_SOURCES.representatives,
    answer: "A free Canada immigration assessment is an initial planning conversation that uses your goal, status, history and timeline to identify possible pathways and the next questions to verify. It is not an approval, legal decision or guarantee. A full application review requires the documents and scope appropriate to the matter.",
    fit: "Give the assessment useful facts: where you are, your status, family, education, language, work, funds, travel, prior applications and any refusal or deadline. Clear facts make it easier to identify the route that deserves deeper review.",
    evidence: ["your main immigration goal and target timing", "current status, passport and prior application information", "education, language, work and family details", "any refusal, procedural fairness letter or deadline that changes the urgency"],
    next: "Use the initial review to create a short action list: the pathway to research, the document gap to close, the official source to verify and the decision that requires professional advice. Keep the service scope clear before sharing sensitive records or paying fees.",
  },
  "/blog": {
    topic: "Canadian immigration guides",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "Canadian immigration guides are research starting points for decisions about permanent residence, Express Entry, PNP, work permits, study permits, family sponsorship, visitors and refusals. The most useful guide explains the route in plain language, names the evidence and points to the official source that controls the current rule.",
    fit: "Choose the guide by the decision in front of you, not by a broad promise. Record the facts that could change the answer, check the publication or update date, and compare the explanation with the linked IRCC, provincial or regulatory source.",
    evidence: ["the guide’s exact pathway and eligibility question", "your current status, key dates and previous applications", "the official rule, form, fee or processing page linked from the guide", "a short list of uncertainties to take into a focused review"],
    next: "Use the articles to narrow the question, then move from research to verification. A calculator, article or historical cutoff can help organize your thinking, but the decision-maker applies the current instructions to the evidence in your file.",
  },
  "/contact/book-immigration-consultation-canada": {
    topic: "immigration consultation in Brampton",
    source: OFFICIAL_SOURCES.representatives,
    answer: "An immigration consultation in Brampton connects your Canadian immigration goal with the facts, evidence, deadline and pathway questions that need attention. The consultation should clarify possible routes and next steps; it cannot guarantee an approval because IRCC, a province, the IRB or a court makes the relevant decision.",
    fit: "Prepare the current status, passport details, work and education history, family information, funds, travel history and any previous refusal or deadline. If the matter is urgent, put the exact date in the first message so the timing can be assessed.",
    evidence: ["a one-sentence description of the goal", "current status and important expiry or response dates", "a timeline of education, employment, travel and family changes", "refusal letters, procedural fairness letters or document requests"],
    next: "Bring the questions you need answered rather than every document you own. The strongest consultation outcome is a clear route, a prioritized evidence list, an explanation of risk and an agreed next step that matches the service scope.",
  },
  "/immigration-draws": {
    topic: "Express Entry draw results Canada",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "Express Entry draw results Canada show what happened in a specific IRCC invitation round: the draw type, date, invitation count, CRS cutoff and tie-break information. A past result is useful context, but it does not guarantee the next round because IRCC can change the category, size and selection criteria.",
    fit: "Read the draw type before comparing the CRS number. A candidate must still qualify for the relevant Express Entry program and, for a category-based round, meet the category requirements. The profile’s tie-break position and submission date can also matter when scores are equal.",
    evidence: ["the official round date, type and invitation count", "your current program eligibility and CRS breakdown", "category, language, NOC and work-experience evidence where relevant", "the official tie-break and round notice"],
    next: "Use the tracker to identify a planning range and the score factors worth reviewing. Recheck the live official IRCC round page before making a filing, job, study or settlement decision based on historical results.",
  },
};

const FAMILY_CONFIGS = [
  {
    test: (path) => /provincial|pnp|atlantic|rural|municipal|agri-food|care-provider|caregiver|territorial|newfoundland|alberta|british-columbia|saskatchewan|manitoba|ontario|nova-scotia|new-brunswick|prince-edward|yukon|northwest|nunavut/.test(path),
    topic: "provincial immigration pathway",
    source: OFFICIAL_SOURCES.pnp,
    answer: "A provincial immigration pathway is assessed by the province or territory under its own stream rules and, where applicable, followed by a federal permanent-residence application. The stream’s occupation, job offer, language, education, work experience, settlement and connection requirements should be checked as a complete set.",
    fit: "Name the exact province, stream and application route before relying on a general PNP summary. Province-specific eligibility and intake rules are not interchangeable, and a nomination depends on both the evidence and the applicant’s genuine intention to meet the program conditions.",
    evidence: ["the current stream page, intake status and invitation method", "language, education and relevant work evidence", "job offer, employer, settlement funds or connection records where required", "a federal admissibility and document record ready for the next stage"],
    next: "Compare the stream with Express Entry and other provincial options, then track the official update source. Recheck the criteria immediately before filing because provincial allocations, invitations and forms can change.",
  },
  {
    test: (path) => !/study|student|pgwp/.test(path) && /work|lmia|talent|employer|iec/.test(path),
    topic: "Canadian work and employer immigration pathway",
    source: OFFICIAL_SOURCES.work,
    answer: "A Canadian work or employer immigration pathway connects a worker, job, employer and authorization under a specific set of federal or provincial rules. The correct route depends on the work permit type, the worker’s location and status, the job and employer, and any LMIA, exemption or program-specific requirement.",
    fit: "Separate the worker-side evidence from the employer-side obligations. Confirm the NOC and duties, wage and work location, employer compliance, recruitment or LMIA requirements, status and the date the worker may lawfully begin or change work.",
    evidence: ["passport, status, work authorization and travel history", "employment contract, wage and duty evidence", "employer compliance, LMIA or exemption records where applicable", "language, education, experience, medical or police documents requested by the stream"],
    next: "Build a timeline around authorization and expiry dates. If a worker is changing employers, restoring status or moving from temporary work to permanent residence, verify the separate rules for that next step before acting.",
  },
  {
    test: (path) => /study|student|pgwp/.test(path),
    topic: "Canadian study and post-graduation pathway",
    source: OFFICIAL_SOURCES.study,
    answer: "A Canadian study and post-graduation pathway begins with a qualifying school and permit plan, then depends on compliance, completion and the rules that apply to any later work or permanent-residence option. Study, work and permanent residence are separate decisions even when one may create a future opportunity for the next.",
    fit: "Review the DLI, program, funds, attestation, study plan and status before enrollment. For a later work or PR plan, check the graduate’s program, language, NOC, Canadian experience and the current eligibility date rather than relying on a past policy.",
    evidence: ["acceptance, DLI, program and attestation records", "tuition, living-expense and travel funding", "study permit, enrolment and completion evidence", "language, work, status and family records for the next pathway"],
    next: "Keep a calendar for study-permit conditions, graduation documents and application windows. Use the official study and work sources together so a short-term choice does not accidentally weaken the next stage.",
  },
  {
    test: (path) => /sponsor|family|spousal|partner|parent|child|orphan/.test(path),
    topic: "Canadian family sponsorship pathway",
    source: OFFICIAL_SOURCES.family,
    answer: "A Canadian family sponsorship pathway is built around a permitted relationship category, an eligible sponsor, the undertaking and the sponsored person’s admissibility. The evidence should be tailored to the relationship and explain the family history consistently across forms, civil records, communications, visits and finances.",
    fit: "Confirm the category before gathering documents. Spouses, common-law partners, conjugal partners, parents, grandparents, dependent children and other relatives do not use one universal evidence standard or the same sponsor obligations.",
    evidence: ["relationship, identity and civil-status documents", "sponsor status, income or undertaking records where required", "medical, police and immigration-history evidence", "a chronological explanation of distance, changes, prior relationships or previous applications"],
    next: "Label evidence by the question it answers and preserve a complete copy of the submission. If the relationship, sponsor eligibility or status is unusual, get a file-specific review before choosing inland, outland or a temporary option.",
  },
  {
    test: (path) => /visit|visitor|super-visa|eta|transit|business-visa/.test(path),
    topic: "Canadian temporary-visit application",
    source: OFFICIAL_SOURCES.visitor,
    answer: "A Canadian temporary-visit application must make the purpose, timing, funding, accommodation and compliance plan understandable to the decision-maker. Visitor visas, eTAs, Super Visas, transit documents and business-visitor situations have different requirements, so the document set should match the exact travel purpose.",
    fit: "Define who is travelling, why, for how long and who will pay. Then check passport and visa needs, host or business evidence, ties outside Canada, travel history and any medical, insurance or family requirements for the selected document.",
    evidence: ["passport, travel itinerary and prior travel history", "purpose-of-visit and host, event or business records", "employment, residence, family and financial ties", "insurance, medical, relationship or status records where the route requires them"],
    next: "Make the explanation and documents agree on dates, funds and plans. A temporary-residence file is stronger when it answers the obvious question of why the trip is temporary and how the applicant will follow the conditions of entry.",
  },
  {
    test: (path) => /citizenship|pr-card|prtd|residency|adoption/.test(path),
    topic: "Canadian citizenship or permanent-resident document application",
    source: OFFICIAL_SOURCES.citizenship,
    answer: "A Canadian citizenship or permanent-resident document application depends on a specific status, presence, identity or document test. Citizenship grants, certificates, PR cards, travel documents, resumption, renunciation and adoption-related applications are different processes, so the applicant should match the form to the immediate decision.",
    fit: "Create a date-based record of status, travel, addresses, family and identity documents. Check the current physical-presence, residency-obligation, language, knowledge or proof requirements that apply to the exact application instead of treating every PR or citizenship service as one route.",
    evidence: ["passports, travel records and address history", "PR or citizenship status records", "identity, family and adoption documents where relevant", "tax, education, employment or other evidence that supports presence and history"],
    next: "Verify the official calculator or application guide, reconcile it with the underlying records and keep a complete copy of what was submitted. If a residency or status concern exists, address it before treating a document renewal as routine.",
  },
  {
    test: (path) => /inadmissibility|refusal|appeal|procedural|criminal|rehabilitation|pardon|removal|detention|judicial-review|mandamus|deferral|authorization-to-return|stay-/.test(path),
    topic: "Canadian immigration refusal, inadmissibility or appeal matter",
    source: OFFICIAL_SOURCES.inadmissibility,
    answer: "A Canadian immigration refusal, inadmissibility or appeal matter turns on the decision-maker’s specific concern, the complete record and the remedy available within the applicable deadline. The right response may involve evidence, legal submissions, a reapplication, an appeal or a court process; it cannot be selected from the title of the letter alone.",
    fit: "Preserve every document and record the date of receipt. Identify the decision, the concern, the deadline, the evidence already before the decision-maker and the outcome the person needs, then assess whether the next step is administrative, tribunal-based or court-related.",
    evidence: ["the full decision, letter, order or notice and delivery date", "the original forms, evidence and correspondence", "criminal, medical, financial, travel or family records tied to the concern", "a chronology and a focused explanation that addresses the actual reason for the decision"],
    next: "Avoid a generic reapplication when the refusal reason is still unresolved. Time-sensitive or removal-related matters should be escalated promptly for file-specific advice so a possible remedy is not lost while new documents are gathered.",
  },
  {
    test: (path) => /business|start-up|entrepreneur/.test(path),
    topic: "Canadian business immigration pathway",
    source: OFFICIAL_SOURCES.pnp,
    answer: "A Canadian business immigration pathway links the applicant’s business experience, investment or entrepreneurial plan with a federal or provincial program’s criteria. The business concept alone is not enough: the application must show the applicant’s role, source of funds, experience, market or settlement plan and ability to meet the program conditions.",
    fit: "Separate temporary business travel, work authorization, entrepreneur nomination and permanent residence planning. Confirm the program, province, ownership or investment rules and whether the proposed activity actually fits the immigration category.",
    evidence: ["business ownership, management and financial history", "source-of-funds and investment evidence", "a credible business, market or settlement plan", "personal identity, language, education, admissibility and family records"],
    next: "Test the business plan against the current program and local market requirements before committing funds. Keep a contingency route in view because intake, nomination and federal requirements can change independently.",
  },
];

function normalizePath(path) {
  const value = String(path || "/").split("?")[0].split("#")[0];
  return value.length > 1 ? value.replace(/\/$/, "") : value;
}

function cleanTopic(value) {
  return String(value || "Canadian immigration planning")
    .replace(/\s+/g, " ")
    .replace(/\s*[|·]\s*.*$/, "")
    .replace(/\b20\d{2}\b/g, "")
    .trim();
}

function defaultConfig(page) {
  const path = normalizePath(page?.path);
  const special = SPECIAL_CONFIGS[path];
  if (special) return { ...special };

  const family = FAMILY_CONFIGS.find((config) => config.test(path));
  if (family) return { ...family, topic: cleanTopic(page?.h1) || family.topic };

  return {
    topic: cleanTopic(page?.h1) || "Canadian immigration pathway",
    source: OFFICIAL_SOURCES.expressEntry,
    answer: "This Canadian immigration pathway should be assessed against the current official requirements, the applicant’s personal history and the evidence available to support each claim. A clear application connects the goal, eligibility, documents, timeline and next decision instead of relying on one score or generic checklist.",
    fit: "Begin with the exact program or service, location, status and deadline. Then compare the requirements with the applicant’s education, work, language, family, financial, travel and admissibility facts before choosing forms or paying fees.",
    evidence: ["identity, status and civil records", "education, language and work history", "family, financial and travel records where relevant", "the official guide, form and deadline for the chosen route"],
    next: "Use the guide to narrow the question, confirm the current source and create a prioritized document list. When the history or deadline is complex, a file-specific review can help test the route before submission.",
  };
}

function serializeBlocks(blocks) {
  return blocks.map((block) => {
    if (block.type === "heading") return `${"#".repeat(block.level)} ${block.text}`;
    if (block.type === "list") return block.items.map((item) => `${block.ordered ? "1." : "-"} ${item}`).join("\n");
    return block.text || "";
  }).join("\n\n");
}

/**
 * Return additive blocks designed for direct answers, question headings and
 * practical evidence coverage. The caller decides where the content sits in
 * the page so the existing source order remains unchanged.
 */
export function getSeoContentBlocks(page) {
  const path = normalizePath(page?.path);
  if (!page || EXCLUDED_PATHS.has(path) || path.startsWith("/legal/")) return [];

  const config = defaultConfig(page);
  const topic = config.topic;
  const evidenceList = config.evidence.map((item) => `**${item.charAt(0).toUpperCase()}${item.slice(1)}** — keep the record current and explain any gap or mismatch.`);
  const sharedBlocks = [
    { type: "heading", level: 2, text: `What is ${topic} and who may be a fit?` },
    { type: "paragraph", text: config.answer },
    { type: "heading", level: 2, text: `Which ${topic} requirements should you verify first?` },
    { type: "paragraph", text: config.fit },
    { type: "list", ordered: false, items: evidenceList },
    { type: "heading", level: 2, text: `How should you prepare a stronger ${topic} application?` },
    { type: "paragraph", text: config.next },
    { type: "list", ordered: true, items: [
      "Write down the goal, current status, location and exact deadline.",
      "Compare the relevant eligibility criteria with documents you can support.",
      "Check the current official source for forms, fees, processing times and exceptions.",
      "Keep a complete copy of the evidence and record the next owner and date.",
    ] },
    { type: "heading", level: 2, text: `Where can you verify current ${topic} rules?` },
    { type: "paragraph", text: `Use the [${config.source.label}](${config.source.url}) as the final reference for current requirements. Rules, program openings, fees, forms and processing information can change, so check the source date and compare it with the facts in your file before relying on this guide.` },
  ];
  const additions = [
    ...sharedBlocks,
    ...getUniqueSeoContentBlocks(page),
    ...getLocalSeoExpansion(page),
    // Inbound cross-links so a regional landing page is reachable from body
    // content, not only from the (client-rendered) navigation and sitemap.
    ...getRegionalLandingLinks(page),
  ];
  return [...additions, ...getBalancedSeoContentBlocks(page, additions)];
}

/** Append to Markdown-backed page objects while preserving their source text. */
export function appendSeoContent(page) {
  const additions = getSeoContentBlocks(page);
  if (additions.length === 0) return page;
  if (Array.isArray(page.contentBlocks)) {
    return { ...page, contentBlocks: [...page.contentBlocks, ...additions] };
  }
  return { ...page, content: [page.content, serializeBlocks(additions)].filter(Boolean).join("\n\n") };
}

export default getSeoContentBlocks;
