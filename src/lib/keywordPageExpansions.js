/*
 * Helpful, route-specific sections for pages that need a little more depth.
 *
 * Search research informs the topics covered here, but the search phrases are
 * not printed as a list. Each section answers a real question, uses the route
 * terminology naturally, and gives readers a practical next step.
 */

const section = (heading, text) => [
  { type: "heading", level: 2, text: heading },
  { type: "paragraph", text },
];

const route = (test, ...sections) => ({
  test,
  blocks: sections.flat(),
});

const spousalPath = (path) => /sponsor\/(spousal-and-partner-sponsorship-overview|spousal-common-law-sponsorship|inland-sponsorship|outland-sponsorship|conjugal-partner-sponsorship|sponsorship-processing-times|sponsorship-eligibility)/.test(path);
const visitPath = (path) => path === "/visit/visitor-visa-trv-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined";
const superVisaPath = (path) => path === "/visit/super-visa-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined" || path === "/sponsor/super-visa-for-parents";
const professionalPath = (path) => /about\/(about-commonwealth-migration|immigration-office-brampton-ontario|canada-immigration-consulting-process)/.test(path)
  || path === "/assessment/free-canada-immigration-assessment"
  || path === "/contact/book-immigration-consultation-canada";

const PAGE_EXPANSIONS = [
  route(
    (path) => path === "/immigrate/business-immigration-and-start-up-visa",
    section(
      "Business immigration in Canada: start with the activity and the route",
      "Business immigration in Canada is not one application. The right starting point depends on whether you plan to visit for meetings, operate a business, obtain a work permit, seek a provincial entrepreneur nomination or pursue permanent residence through a federal program. Before preparing a business plan, identify the proposed role, ownership, source of funds, destination and immigration outcome. A clear route comparison helps a founder avoid treating a temporary business visit or a promising idea as proof of eligibility.",
    ),
    section(
      "What should a Start-Up Visa founder verify first?",
      "A Start-Up Visa review should connect the designated-organization support, qualifying ownership, language evidence, settlement funds and founder’s actual business role. Keep the support letter, corporate records, personal history and source-of-funds documents consistent. If Ontario or another province is the intended destination, compare the federal Start-Up Visa with the current provincial entrepreneur options before committing capital, because each route has a different decision-maker and post-approval obligation.",
    ),
  ),
  route(
    (path) => path === "/immigrate/express-entry",
    section(
      "Express Entry Canada: eligibility before CRS points",
      "Express Entry is a federal application-management system, not a direct permanent-residence approval. First confirm whether the Federal Skilled Worker Program, Canadian Experience Class or Federal Skilled Trades Program fits the profile. Then check the language result, education and Educational Credential Assessment, skilled work history, NOC duties, family factors and proof of funds that support the profile. A CRS calculator is useful for planning only when each input can be documented.",
    ),
    section(
      "How should you read an Express Entry draw?",
      "A draw result shows what happened in one invitation round; it does not promise the next cutoff or establish eligibility for a particular applicant. Compare the round type with the candidate’s program eligibility, category factors, score and document readiness. The practical next step is to improve only evidence-based factors—such as a valid language result, corrected NOC analysis or an eligible provincial nomination—and keep an alternative Canada immigration pathway under review.",
    ),
  ),
  route(
    (path) => path === "/immigrate/ontario-pnp-oinp",
    section(
      "OINP requirements depend on the stream",
      "The Ontario Immigrant Nominee Program is a group of streams rather than one national checklist. Start by naming the stream and its current intake or invitation method. Then map the occupation, job offer or human-capital factors, language, education, work history, status and settlement plan to the Ontario instructions. A nomination is a provincial decision; it is followed by the applicable federal permanent-residence and admissibility process.",
    ),
    section(
      "What should you prepare for an OINP application?",
      "Organize documents around the claim the stream is assessing. An employer-supported file needs an accurate offer, duties, wage and employer record; an Express Entry-linked file also needs a valid federal profile; an entrepreneur route needs business, ownership and investment evidence. Use the official OINP account or contact channel for status questions, and treat processing estimates as planning information rather than a deadline guarantee.",
    ),
  ),
  route(
    spousalPath,
    section(
      "Spousal sponsorship in Canada: choose the correct category",
      "A spousal sponsorship application has two core questions: is the sponsor eligible, and does the relationship meet the legal category with credible evidence? Confirm whether the relationship is a marriage, common-law partnership or conjugal partnership before selecting the forms. Then build a timeline that connects civil records, shared life, communication, visits, finances, family history and immigration status. Inland and outland processing are different routes; the better choice depends on the facts, not on an old forum timeline.",
    ),
    section(
      "What should a spouse or partner check before filing?",
      "Use the current IRCC application package, document checklist and fee schedule for the applicant’s location and category. Keep the sponsor’s eligibility and undertaking separate from the relationship evidence, and explain periods of distance, previous relationships, status changes or missing records directly. If an open work permit may be available to a sponsored spouse, treat it as a separate authorization with its own timing and conditions rather than assuming that a sponsorship application automatically permits work.",
    ),
  ),
  route(
    (path) => path === "/work-and-study/lmia-and-employer-services-overview" || path === "/work-and-study/tfwp-employer-compliance",
    section(
      "LMIA and work permits: separate the employer and worker steps",
      "An LMIA is an employer-side assessment of a genuine position and its labour-market context. The employer must be able to support the business, recruitment, wage, duties and work location described in the application. If the LMIA is approved, the worker still needs the appropriate work-permit application and must meet the requirements that apply to their nationality, status and job. An advertised vacancy or an LMIA number is not, by itself, proof that a job or recruiter is genuine.",
    ),
    section(
      "What should an employer verify before offering an LMIA-supported job?",
      "Keep the employment contract, NOC duties, wage, recruitment records, workplace details and payroll capacity aligned from the first review through compliance. A worker should verify the employer, location, duties, permit conditions and who is responsible for each fee before paying anyone or starting work. LMIA-exempt work permits, extensions, changes of employer and restoration are separate questions that should be assessed from the actual permit and status history.",
    ),
  ),
  route(
    (path) => path === "/sponsor/spousal-open-work-permit",
    section(
      "SOWP Canada: an open work permit is a separate decision",
      "A sponsored-spouse open work permit is a work-authorization question, not a replacement for the family-sponsorship application. The review should connect the spouse’s relationship category, the principal applicant’s status, the current application stage, passport and status records with the eligibility rules in force. Before relying on a processing estimate, confirm the correct forms and whether the applicant is allowed to work while the request is pending.",
    ),
    section(
      "How should a SOWP file be organized?",
      "Keep the sponsorship receipt or application evidence, relationship documents, identity records and status history together so the work-permit request can be understood on its own. Check permit conditions before changing employers or beginning work. If the applicant has lost status, filed late or is relying on maintained status, that issue needs its own review instead of being hidden inside a general open-work-permit checklist.",
    ),
  ),
  route(
    (path) => path === "/work-and-study/canada-study-permit",
    section(
      "Canada study permit requirements: connect the school, program and purpose",
      "A Canada study permit application should make sense as a complete plan. Start with the designated learning institution and exact program, then connect the letter of acceptance, attestation where applicable, tuition and living funds, education and employment history, family circumstances and study purpose. A visitor visa is not a general substitute for a study permit, and a future work or permanent-residence option does not remove the need to satisfy the current study requirements.",
    ),
    section(
      "What should international students plan before applying?",
      "Check passport validity, biometrics, medical or police requirements, the current fee schedule and the conditions attached to study status. If a Post-Graduation Work Permit matters to the plan, verify the school, credential, delivery format, program length and rules that apply on the relevant application date before paying a deposit. Study, post-study work and permanent residence are connected planning decisions, but each has its own eligibility test.",
    ),
  ),
  route(
    superVisaPath,
    section(
      "Super Visa Canada: plan the family visit around the host and the parent",
      "The Super Visa is a temporary family-visit route for eligible parents and grandparents. A strong application connects the family relationship, invitation, accommodation, host’s financial evidence, medical examination, required insurance and the visitor’s plan to respect the authorized stay. The Super Visa is different from an ordinary visitor visa and from a parent or grandparent permanent-residence program, so the purpose and evidence should be kept separate.",
    ),
    section(
      "What should families verify before submitting a Super Visa application?",
      "Use the current IRCC instructions and fee schedule, then verify the insurance policy against the required coverage rather than choosing only by price. Check that the invitation, host income, relationship records, travel history and planned length of stay tell the same story. Processing times can change by application and location; they are useful for planning but cannot replace a complete record or guarantee a decision.",
    ),
  ),
  route(
    visitPath,
    section(
      "Canada visitor visa: explain the temporary trip clearly",
      "A Canada visitor visa application should answer four practical questions: why is the person travelling, how will the trip be funded, where will they stay and why will they leave or comply with the authorized stay? The answer should be supported by the itinerary, passport and residence history, employment or study, family ties, bank records, host information and previous travel. The same document logic applies whether the visitor is applying from Brampton, Dubai, India, Pakistan or another place of residence.",
    ),
    section(
      "Which visitor document does the trip actually require?",
      "A visitor visa, eTA, transit document, Super Visa and work permit serve different purposes. Business meetings or conferences may fit a temporary visit, while productive work in Canada can require work authorization. Check the official eligibility tool for the passport and country of residence, and use the current application package for forms, fees, biometrics, invitation evidence and any country-specific document instructions.",
    ),
  ),
  route(
    (path) => path === "/immigrate/new-brunswick-pnp" || /french|francophone/.test(path),
    section(
      "Francophone immigration: language is one part of the route",
      "French-speaking immigration options can involve a federal category, a provincial stream or a community-based pathway. Start with the exact program and province, then verify the designated French-language test, occupation, work history, employer, education and settlement plan. A French result may support a strategy, but it does not by itself create Express Entry eligibility, a provincial nomination or permanent residence.",
    ),
    section(
      "How should applicants compare French-language pathways?",
      "Record whether the route is federal or provincial, whether it is linked to Express Entry, which authority issues an invitation or recommendation and what happens after that decision. Applicants considering New Brunswick or another province should show a credible plan to live and work there. Use the current official stream instructions because language thresholds, intake windows and participating communities can change.",
    ),
  ),
  route(
    professionalPath,
    section(
      "Choosing an immigration consultant in Brampton or Ontario",
      "When comparing an immigration consultant, lawyer or other authorized representative, begin with the exact problem the professional will handle. Check current authorization with the applicable regulator, experience with the pathway, written service scope, professional fees, government costs, privacy practices, communication method and deadline ownership. A useful consultation should clarify the next decision and the evidence needed; it should not promise an approval that only IRCC, a province, the IRB or the Federal Court can decide.",
    ),
    section(
      "What makes a Canada immigration consultation useful?",
      "Bring your current status, family details, education and employment history, travel and refusal history, language results, deadlines and the documents you already have. A careful assessment should distinguish facts from assumptions, identify missing evidence and explain which official source controls the answer. This makes the guidance useful for people in Brampton and across Canada without turning local-search language into an unsupported ranking claim.",
    ),
  ),
];

export function getKeywordPageExpansionBlocks(page) {
  const path = String(page?.path || "").split("?")[0].replace(/\/$/, "") || "/";
  return PAGE_EXPANSIONS.filter((entry) => entry.test(path)).flatMap((entry) => entry.blocks);
}

export default getKeywordPageExpansionBlocks;
