/*
 * Route-level local-search copy for pages that share a broad category.
 *
 * The shared local expansion still handles the common structure, but these
 * entries keep the question, answer and evidence lens specific to the page a
 * reader is actually visiting. The wording avoids promising an outcome and
 * points readers back to the controlling official source.
 */

const localEntry = (config) => config;

export const LOCAL_PAGE_CONTENT = {
  "/canada-immigration-from-uk": localEntry({
    subject: "Canada immigration from the United Kingdom",
    sourceKey: "immigration",
    keyphrase: "Canada immigration consultant for UK residents",
    questions: [
      "What should UK applicants verify before starting a Canada immigration application?",
      "Which UK documents carry the longest lead time in a Canadian application?",
    ],
    answer: "A UK applicant should verify the Canadian route first, then the UK-side evidence behind it. Express Entry needs a designated language test result and an Educational Credential Assessment even for a British passport holder, a work or study route needs the authorisation tied to that specific purpose, and any permanent-residence file needs a UK police certificate from the correct issuing body and a funds history that converts cleanly from GBP to Canadian dollars.",
    detail: "Work backwards from the filing date. Book the language test and the credential assessment in parallel because they are usually the longest items, request the police certificate for the part of the UK you actually lived in, and only book the panel-physician medical when IRCC asks for it. Keep every UK record — employer reference letters, payslips, tenancy and travel history — in a form a Canadian officer can map to the occupation and dates you are claiming.",
    verificationQuestion: "What should you verify before relying on a Canada immigration consultant for UK residents?",
    verificationAnswer: "Before relying on a Canada immigration consultant for UK residents, verify the Canadian route and its current instructions, the language test and credential assessment requirements, the UK police certificate and medical process, the funds evidence in Canadian dollars and the representative's current licence status. Note that UK-side advisers are not authorised to advise on Canadian immigration law — only a Canadian-regulated representative can.",
    lens: "the Canadian route, the UK-side evidence, the funds position and the filing deadline",
    items: [
      "the Canadian route and its current instructions",
      "language test result, validity window and score conversion",
      "Educational Credential Assessment and UK qualification equivalency",
      "UK police certificate, panel-physician medical and GBP-to-CAD funds history",
    ],
  }),
  "/immigrate/provincial-nominee-program-all-provinces-consolidated": localEntry({
    subject: "a province-by-province PNP comparison",
    keyphrase: "PNP consultant in Brampton",
    questions: [
      "How should a Brampton applicant compare PNP Canada options across provinces?",
      "Which evidence should be ready before narrowing a Provincial Nominee Program shortlist?",
    ],
    answer: "A province-by-province PNP comparison should begin with the destination, exact stream, occupation, employer or job offer, language, education, work history, settlement funds, invitation method and federal stage. Living in Brampton does not by itself establish eligibility for an Ontario or another province’s stream; the applicant must show a credible plan that fits the selected province.",
    detail: "Build a short comparison table before choosing a province: record the current intake status, whether the route is Express Entry-linked or base, the evidence required and the applicant’s genuine settlement plan. This makes the all-provinces PNP page useful for narrowing options without treating an old invitation pattern as a current promise.",
    verificationQuestion: "What should you verify before relying on a PNP consultant in Brampton for province selection?",
    verificationAnswer: "Before relying on a PNP consultant in Brampton for province selection, verify the exact province, stream, intake status, occupation or job-offer rule, language and education evidence, settlement intention and the federal step after nomination against the current IRCC Provincial Nominee Program guide and the province’s own instructions.",
    lens: "the destination, stream, invitation method, occupation, employer, settlement plan and federal stage",
    items: ["the province and stream that match the applicant’s actual destination", "the current intake, invitation or expression-of-interest process", "the evidence behind occupation, job offer, language and education claims", "the federal permanent-residence and admissibility step after nomination"],
  }),
  "/immigrate/atlantic-immigration-program": localEntry({
    subject: "the Atlantic Immigration Program employer pathway",
    sourceKey: "immigration",
    keyphrase: "Atlantic Immigration Program consultant in Brampton",
    questions: [
      "How should a Brampton applicant assess an Atlantic Immigration Program offer?",
      "What should an Atlantic immigration file prove before an endorsement request?",
    ],
    answer: "An Atlantic Immigration Program assessment should connect the designated employer, job offer, occupation, work experience, language, education, settlement plan and intended Atlantic destination. A Brampton applicant must evaluate whether the job and settlement story genuinely point to an Atlantic province rather than assuming that a Canadian job offer alone creates eligibility.",
    detail: "Review the employer and offer first, then map the applicant’s language, education, work history and settlement plan to the endorsement and federal stages. Keep the provincial endorsement record separate from the permanent-residence application so missing evidence is found before the file advances.",
    verificationQuestion: "What should you verify before relying on an Atlantic immigration consultant in Brampton?",
    verificationAnswer: "Before relying on an Atlantic immigration consultant in Brampton, verify the designated-employer status, job-offer terms, province, endorsement requirements, language and education records, settlement plan and federal application stage against the current Atlantic Immigration Program instructions.",
    lens: "designated employer status, job offer, Atlantic destination, endorsement, language, education and settlement evidence",
    items: ["the employer’s designation and the role’s location in an Atlantic province", "the offer, occupation, work experience and language evidence", "the settlement plan and family information supplied for endorsement", "the federal permanent-residence file that follows a provincial endorsement"],
  }),
  "/immigrate/agri-food-immigration-pilot": localEntry({
    subject: "the Agri-Food Immigration Pilot evidence plan",
    sourceKey: "immigration",
    keyphrase: "Agri-Food Immigration Pilot consultant in Brampton",
    questions: [
      "What should a Brampton applicant check for the Agri-Food Immigration Pilot?",
      "How can an agri-food immigration file connect the job to the permanent-residence route?",
    ],
    answer: "The Agri-Food Immigration Pilot page should be read through the applicant’s eligible occupation, qualifying employer, work experience, language, education, settlement funds and status history. A Brampton applicant needs evidence that the real work and employer fit the current pilot instructions, not just a job title that sounds agricultural.",
    detail: "Start with the employer and duties, then reconcile the work records, language result, education and settlement evidence with the federal application stage. Keep payroll, contracts, reference letters and status records consistent because the occupation claim must be supported by the work actually performed.",
    verificationQuestion: "What should you verify before relying on an Agri-Food Immigration Pilot consultant in Brampton?",
    verificationAnswer: "Before relying on an Agri-Food Immigration Pilot consultant in Brampton, verify the current eligible occupation, employer and work-experience rules, language and education evidence, settlement funds and federal application requirements against the official IRCC instructions.",
    lens: "the eligible occupation, employer, actual duties, work history, language, education and settlement funds",
    items: ["the current pilot occupation and employer requirements", "contracts, payroll and reference letters that reflect the real duties", "language, education, status and settlement-fund evidence", "the permanent-residence documents required after the qualifying work period"],
  }),
  "/immigrate/rural-and-northern-immigration-pilot": localEntry({
    subject: "the Rural and Northern Immigration Pilot community route",
    sourceKey: "immigration",
    keyphrase: "Rural and Northern Immigration Pilot consultant in Brampton",
    questions: [
      "How should a Brampton applicant review a Rural and Northern Immigration Pilot pathway?",
      "What does a rural community recommendation file need to make clear?",
    ],
    answer: "A Rural and Northern Immigration Pilot review should connect the participating community, employer, job, occupation, language, education, work experience, settlement plan and federal stage. A Brampton applicant should test whether the proposed move is realistic and documented rather than treating a community recommendation as a substitute for permanent-residence eligibility.",
    detail: "Map the job and employer to the participating community’s current process, then prepare evidence for the recommendation and the later federal application. The strongest file explains why the applicant and family can settle in that community and how the employment plan supports that move.",
    verificationQuestion: "What should you verify before relying on a Rural and Northern Immigration Pilot consultant in Brampton?",
    verificationAnswer: "Before relying on a Rural and Northern Immigration Pilot consultant in Brampton, verify the participating community, employer and job rules, recommendation process, language and education evidence, settlement plan and federal requirements against the current program source.",
    lens: "the participating community, employer, job, recommendation process, settlement plan and federal stage",
    items: ["the community’s current participation and recommendation process", "the employer, job, occupation and language evidence", "a credible housing, family and settlement plan for the community", "the federal application and admissibility records that follow a recommendation"],
  }),
  "/immigrate/municipal-nominee-program": localEntry({
    subject: "a Municipal Nominee Program or community-led nomination route",
    sourceKey: "immigration",
    keyphrase: "Municipal Nominee Program consultant in Brampton",
    questions: [
      "How should a Brampton applicant assess a Municipal Nominee Program opportunity?",
      "What local evidence can support a community-led nomination plan?",
    ],
    answer: "A Municipal Nominee Program assessment must identify the participating municipality, local intake, employer or occupation requirement, settlement intention and federal stage. Someone seeking advice in Brampton should understand that a local recommendation or nomination is tied to the municipality’s rules and cannot be treated as a general Canada-wide shortcut.",
    detail: "Check the municipality’s current eligibility and recommendation process before collecting generic PNP documents. The file should make the job, residence plan, community connection, family circumstances and federal admissibility record consistent with the place the applicant intends to call home.",
    verificationQuestion: "What should you verify before relying on a Municipal Nominee Program consultant in Brampton?",
    verificationAnswer: "Before relying on a Municipal Nominee Program consultant in Brampton, verify the participating municipality, local stream, employer or occupation rule, settlement evidence, nomination process and federal permanent-residence requirements against the current official instructions.",
    lens: "the participating municipality, local stream, employer or occupation, settlement evidence and federal stage",
    items: ["the municipality’s current participation and application window", "local employer, occupation and job-offer evidence", "a documented plan to live and work in the municipality", "the federal forms, admissibility records and deadlines after nomination"],
  }),
  "/immigrate/home-child-care-provider-pilot": localEntry({
    subject: "the Home Child Care Provider Pilot pathway",
    sourceKey: "immigration",
    keyphrase: "Home Child Care Provider Pilot consultant in Brampton",
    questions: [
      "What should a Brampton caregiver check before pursuing the Home Child Care Provider Pilot?",
      "How should a caregiver connect the job, work authorization and permanent-residence plan?",
    ],
    answer: "The Home Child Care Provider Pilot requires a careful review of the caregiver’s job, duties, employer, language, education, work experience, work authorization and family plan under the current instructions. A Brampton applicant should separate the employment arrangement from the permanent-residence stage and verify which documents support each claim.",
    detail: "A useful file review checks that the household role, contract, wage, duties and work history tell the same story, then maps the caregiver’s status and family evidence to the applicable application stage. Do not assume that a caregiver job title alone establishes eligibility or work authorization.",
    verificationQuestion: "What should you verify before relying on a Home Child Care Provider Pilot consultant in Brampton?",
    verificationAnswer: "Before relying on a Home Child Care Provider Pilot consultant in Brampton, verify the current caregiver occupation and job rules, employer documents, language and education records, work authorization, family information and permanent-residence stage against the official guide.",
    lens: "the caregiver occupation, household duties, employer, language, education, work authorization and family plan",
    items: ["a contract and duties that reflect the real caregiving role", "employer, wage, work-history and status evidence", "language and education documents required by the current stream", "the family and permanent-residence records needed for the next stage"],
  }),
  "/immigrate/pnp-linked-express-entry": localEntry({
    subject: "PNP-linked Express Entry planning",
    keyphrase: "PNP Express Entry consultant in Brampton",
    questions: [
      "How should a Brampton applicant connect a provincial nomination to Express Entry?",
      "What should be checked before treating a PNP-linked Express Entry profile as ready?",
    ],
    answer: "PNP-linked Express Entry planning has two connected but separate decisions: the province must select the applicant under a stream, and the federal Express Entry profile must meet the relevant program and document requirements. A Brampton applicant should check the nomination stream, CRS inputs, language, education, NOC duties, work history and settlement evidence together.",
    detail: "Record whether the provincial route is aligned with the profile, how the invitation or nomination is issued and which facts must remain current through the federal application. A nomination can change the ranking picture, but it does not remove the need for a complete permanent-residence and admissibility review.",
    verificationQuestion: "What should you verify before relying on a PNP Express Entry consultant in Brampton?",
    verificationAnswer: "Before relying on a PNP Express Entry consultant in Brampton, verify the province and stream, Express Entry program eligibility, CRS inputs, language and education evidence, NOC duties, nomination status and federal permanent-residence requirements against both official sources.",
    lens: "the provincial stream, Express Entry eligibility, CRS inputs, NOC duties, nomination status and federal documents",
    items: ["the province’s stream and invitation or nomination process", "the federal program eligibility behind the Express Entry profile", "language, education, NOC and work records supporting the CRS inputs", "the federal application, admissibility and deadline plan after nomination"],
  }),
  "/immigrate/british-columbia-pnp": localEntry({
    subject: "the British Columbia Provincial Nominee Program",
    keyphrase: "BC PNP consultant in Brampton",
    questions: [
      "What should a Brampton applicant compare in the British Columbia PNP?",
      "How can a BC PNP file show a genuine plan to work and settle in British Columbia?",
    ],
    answer: "A British Columbia PNP review should begin with the current BC stream, job or employer evidence, occupation, language, education, work history, wage and settlement plan. A Brampton applicant should connect the proposed role to British Columbia and keep any provincial nomination process separate from the later federal permanent-residence assessment.",
    detail: "Organize the file around the stream’s current intake and evidence rather than a general PNP checklist. Job duties, employer records, language and education documents should support the same destination and settlement story before an applicant relies on a provincial score or invitation estimate.",
    verificationQuestion: "What should you verify before relying on a BC PNP consultant in Brampton?",
    verificationAnswer: "Before relying on a BC PNP consultant in Brampton, verify the current British Columbia stream, employer and occupation rules, wage and job evidence, language and education records, settlement intention and federal stage against the official provincial and IRCC guides.",
    lens: "the current BC stream, employer, occupation, wage, language, education and British Columbia settlement plan",
    items: ["the BC stream and current intake or invitation process", "job duties, employer, wage and occupation records", "language, education and work-history evidence", "a credible British Columbia settlement plan and federal document record"],
  }),
  "/immigrate/alberta-pnp-aaip": localEntry({
    subject: "the Alberta Advantage Immigration Program",
    keyphrase: "AAIP consultant in Brampton",
    questions: [
      "How should a Brampton applicant review an Alberta Advantage Immigration Program stream?",
      "What evidence should connect an AAIP job offer to Alberta settlement?",
    ],
    answer: "An Alberta Advantage Immigration Program review should identify the current stream, employer and job offer, occupation, language, education, work history, status and intention to live in Alberta. A Brampton applicant should test the real employment and settlement plan against the stream’s current instructions before treating an AAIP pathway as a nomination opportunity.",
    detail: "Start with the Alberta stream and employer, then reconcile the offer, duties, wage, work records and settlement evidence. Keep the provincial application, any Express Entry profile and the federal permanent-residence stage visible as separate checkpoints.",
    verificationQuestion: "What should you verify before relying on an AAIP consultant in Brampton?",
    verificationAnswer: "Before relying on an AAIP consultant in Brampton, verify the Alberta stream, employer and job-offer conditions, occupation, language and education evidence, work history, settlement intention and federal stage against the current AAIP and IRCC instructions.",
    lens: "the Alberta stream, employer, job offer, occupation, language, work history and intention to settle in Alberta",
    items: ["the current AAIP stream, intake and invitation method", "employer, job, wage, duties and occupation evidence", "language, education, work and status records", "the Alberta settlement plan and federal application stage"],
  }),
  "/immigrate/saskatchewan-pnp-sinp": localEntry({
    subject: "the Saskatchewan Immigrant Nominee Program",
    keyphrase: "SINP consultant in Brampton",
    questions: [
      "What should a Brampton applicant check in a Saskatchewan Immigrant Nominee Program plan?",
      "How can a SINP application make the Saskatchewan settlement intention credible?",
    ],
    answer: "A Saskatchewan Immigrant Nominee Program review should match the current stream with the applicant’s occupation, job offer or work history, language, education, status and plan to settle in Saskatchewan. Advice received in Brampton should not turn a broad occupation match into a nomination expectation without checking the stream’s evidence and intake rules.",
    detail: "Build a stream-specific record of the occupation, employer, duties, licensing, language and education evidence, then explain the applicant’s Saskatchewan connection or settlement plan. Confirm the provincial stage and later federal requirements separately so an incomplete nomination file is not mistaken for a permanent-residence approval.",
    verificationQuestion: "What should you verify before relying on a SINP consultant in Brampton?",
    verificationAnswer: "Before relying on a SINP consultant in Brampton, verify the Saskatchewan stream, occupation and employer rules, job-offer or work-history evidence, language and education records, settlement intention and federal stage against the current SINP and IRCC guidance.",
    lens: "the Saskatchewan stream, occupation, employer or work history, language, education and settlement evidence",
    items: ["the current SINP stream and expression-of-interest or intake process", "occupation, licensing, employer, job and work-history records", "language, education, status and family evidence", "the Saskatchewan settlement explanation and federal stage after nomination"],
  }),
  "/immigrate/manitoba-pnp-mpnp": localEntry({
    subject: "the Manitoba Provincial Nominee Program",
    keyphrase: "MPNP consultant in Brampton",
    questions: [
      "How should a Brampton applicant assess a Manitoba Provincial Nominee Program route?",
      "What should a Manitoba nomination file prove about connection and settlement?",
    ],
    answer: "A Manitoba Provincial Nominee Program assessment should connect the current stream with the applicant’s Manitoba connection, occupation, employer or job offer, language, education, work history and settlement plan. A Brampton applicant should understand how the province evaluates the relationship to Manitoba rather than relying on a generic PNP score or checklist.",
    detail: "Separate the Manitoba stream and invitation process from the federal stage, then label each document by the claim it supports. Relationship, work, language, education and settlement records should tell one consistent story about why the applicant can establish in Manitoba.",
    verificationQuestion: "What should you verify before relying on an MPNP consultant in Brampton?",
    verificationAnswer: "Before relying on an MPNP consultant in Brampton, verify the Manitoba stream, connection or employer rule, occupation, language and education evidence, settlement plan and federal permanent-residence stage against the current MPNP and IRCC sources.",
    lens: "the Manitoba stream, connection, employer or job offer, occupation, language, education and settlement plan",
    items: ["the MPNP stream and current invitation process", "Manitoba connection, employer, job and occupation evidence", "language, education, work and family records", "a coherent Manitoba settlement plan and federal admissibility file"],
  }),
  "/immigrate/ontario-pnp-oinp": localEntry({
    subject: "the Ontario Immigrant Nominee Program",
    keyphrase: "OINP consultant in Brampton",
    questions: [
      "How should a Brampton applicant review an Ontario Immigrant Nominee Program stream?",
      "What should an OINP Express Entry profile prove before an invitation or nomination?",
    ],
    answer: "The Ontario Immigrant Nominee Program is assessed through a specific OINP stream, not one national checklist. A Brampton applicant should verify the stream, invitation method, occupation, job offer or human-capital evidence, language, education, work history, status and settlement plan before deciding whether Ontario is the right nomination destination.",
    detail: "For an OINP Express Entry pathway, check the provincial stream and the underlying federal Express Entry eligibility separately. Processing-time estimates, OINP updates and an online status result are useful planning information, but they do not replace the current Ontario instructions or the federal permanent-residence and admissibility review.",
    verificationQuestion: "What should you verify before relying on an OINP consultant in Brampton?",
    verificationAnswer: "Before relying on an OINP consultant in Brampton, verify the Ontario stream, invitation method, occupation, job-offer or human-capital evidence, language and education records, settlement intention, OINP status and the federal stage against the current Ontario and IRCC guides.",
    lens: "the OINP stream, invitation method, occupation, job offer or human-capital evidence, language, education and federal stage",
    items: ["the current Ontario stream, invitation route and intake status", "occupation, job offer, employer and human-capital evidence", "language, education, work, status and settlement records", "the OINP nomination and federal permanent-residence steps"],
  }),
  "/immigrate/nova-scotia-pnp-nsnp": localEntry({
    subject: "the Nova Scotia Nominee Program",
    keyphrase: "NSNP consultant in Brampton",
    questions: [
      "What should a Brampton applicant compare in the Nova Scotia Nominee Program?",
      "How can an NSNP file connect the applicant’s work and Nova Scotia settlement plan?",
    ],
    answer: "A Nova Scotia Nominee Program review should identify the current stream and connect the applicant’s occupation, employer or job offer, language, education, work history, status and intention to settle in Nova Scotia. A Brampton-based consultation can organize the evidence, but the province’s current intake and criteria control the nomination decision.",
    detail: "Check whether the route is invitation-based, employer-supported or linked to another federal profile, then build the evidence around that route. The job, destination, family and settlement explanation should agree before the applicant moves from provincial interest to the federal stage.",
    verificationQuestion: "What should you verify before relying on an NSNP consultant in Brampton?",
    verificationAnswer: "Before relying on an NSNP consultant in Brampton, verify the Nova Scotia stream, intake or invitation method, employer and occupation conditions, language and education records, settlement plan and federal stage against the current NSNP and IRCC instructions.",
    lens: "the Nova Scotia stream, intake method, employer, occupation, language, education and settlement evidence",
    items: ["the current NSNP stream and intake or invitation method", "employer, job, occupation and work-history records", "language, education, status and family evidence", "a realistic Nova Scotia settlement plan and federal application timeline"],
  }),
  "/immigrate/new-brunswick-pnp": localEntry({
    subject: "the New Brunswick Provincial Nominee Program",
    keyphrase: "New Brunswick PNP consultant in Brampton",
    questions: [
      "How should a Brampton applicant assess New Brunswick PNP and Express Entry options?",
      "What should a New Brunswick nomination file prove about work, language and settlement?",
    ],
    answer: "A New Brunswick Provincial Nominee Program review should distinguish the province’s current stream from a federal Express Entry profile and examine the applicant’s occupation, employer or job offer, language, education, work history and settlement plan. A Brampton applicant should verify the province-specific process before relying on a historical New Brunswick draw or invitation pattern.",
    detail: "Organize the evidence around the exact New Brunswick stream and any expression-of-interest or nomination stage. If French-language ability or an Express Entry profile is part of the strategy, keep those claims supported by the relevant test and federal documents rather than assuming one application covers both decisions.",
    verificationQuestion: "What should you verify before relying on a New Brunswick PNP consultant in Brampton?",
    verificationAnswer: "Before relying on a New Brunswick PNP consultant in Brampton, verify the stream, intake or invitation method, occupation, employer or job-offer evidence, language, education, settlement intention and federal stage against the current New Brunswick and IRCC guides.",
    lens: "the New Brunswick stream, invitation method, occupation, employer, language, education and settlement plan",
    items: ["the current New Brunswick stream and expression-of-interest process", "occupation, employer, job-offer and work-history evidence", "English or French language, education and status records", "the New Brunswick settlement plan and federal stage after nomination"],
  }),
  "/immigrate/prince-edward-island-pnp": localEntry({
    subject: "the Prince Edward Island Provincial Nominee Program",
    keyphrase: "PEI PNP consultant in Brampton",
    questions: [
      "What should a Brampton applicant check in a Prince Edward Island PNP plan?",
      "How can a PEI nomination file demonstrate a genuine settlement intention?",
    ],
    answer: "A Prince Edward Island Provincial Nominee Program review should match the current stream with the applicant’s occupation, employer or job offer, language, education, work history, status and intention to live in PEI. A Brampton applicant should assess the province-specific invitation process and settlement evidence instead of treating a general PNP profile as enough.",
    detail: "Record the PEI stream, current intake and evidence assumptions, then reconcile the employment, family and settlement documents with the proposed move. Keep the provincial nomination and federal permanent-residence requirements as separate checkpoints through the file.",
    verificationQuestion: "What should you verify before relying on a PEI PNP consultant in Brampton?",
    verificationAnswer: "Before relying on a PEI PNP consultant in Brampton, verify the Prince Edward Island stream, intake and invitation method, employer or occupation rules, language and education evidence, settlement intention and federal stage against current official instructions.",
    lens: "the PEI stream, intake method, occupation, employer, language, education and settlement intention",
    items: ["the current PEI stream and invitation process", "employer, job, occupation and work-history documents", "language, education, status and family evidence", "a credible PEI settlement plan and federal application record"],
  }),
  "/immigrate/newfoundland-and-labrador-pnp": localEntry({
    subject: "the Newfoundland and Labrador Provincial Nominee Program",
    keyphrase: "Newfoundland and Labrador PNP consultant in Brampton",
    questions: [
      "How should a Brampton applicant review the Newfoundland and Labrador PNP?",
      "What should a Newfoundland and Labrador file show before nomination planning?",
    ],
    answer: "A Newfoundland and Labrador Provincial Nominee Program assessment should connect the current stream with the applicant’s occupation, employer or job offer, language, education, work history, status and plan to establish in the province. Advice from Brampton can help structure the evidence, but the province-specific process and federal stage must be checked separately.",
    detail: "Start with the stream and employer or Express Entry relationship, then create a timeline for the provincial and federal submissions. The applicant’s work, family, funds and settlement explanation should support the proposed move and remain consistent across forms and reference records.",
    verificationQuestion: "What should you verify before relying on a Newfoundland and Labrador PNP consultant in Brampton?",
    verificationAnswer: "Before relying on a Newfoundland and Labrador PNP consultant in Brampton, verify the province’s current stream, intake method, employer and occupation conditions, language and education evidence, settlement plan and federal stage against the official provincial and IRCC sources.",
    lens: "the Newfoundland and Labrador stream, employer, occupation, language, education, work history and settlement plan",
    items: ["the current provincial stream and invitation or application process", "employer, job, occupation and work-history evidence", "language, education, status and family records", "a practical Newfoundland and Labrador settlement plan and federal timeline"],
  }),
  "/immigrate/yukon-nwt-nunavut-nominee-programs": localEntry({
    subject: "the Yukon, Northwest Territories or Nunavut nominee options",
    keyphrase: "territorial nominee program consultant in Brampton",
    questions: [
      "How should a Brampton applicant compare Canada’s territorial nominee programs?",
      "What should a territorial nominee file prove about the job and destination?",
    ],
    answer: "A territorial nominee program comparison must identify whether the route is in Yukon, the Northwest Territories or Nunavut and then check the employer, occupation, job offer, language, education, work history, status and settlement plan for that territory. A Brampton applicant should not combine the territories into one checklist because each program has its own process.",
    detail: "Use the territory’s current employer and stream instructions to build the file, then explain why the applicant and family can genuinely relocate and settle there. Keep the territorial nomination stage distinct from the federal permanent-residence and admissibility review.",
    verificationQuestion: "What should you verify before relying on a territorial nominee program consultant in Brampton?",
    verificationAnswer: "Before relying on a territorial nominee program consultant in Brampton, verify the exact territory and stream, employer and occupation rules, job-offer evidence, language and education records, settlement intention and federal stage against that territory’s current instructions and the IRCC guide.",
    lens: "the exact territory, stream, employer, occupation, job offer, settlement plan and federal stage",
    items: ["the territory and current nominee stream", "employer, job, occupation and work-authorization evidence", "language, education, work, family and settlement records", "the territorial nomination and federal permanent-residence timeline"],
  }),
};

export function getLocalPageContent(path) {
  return LOCAL_PAGE_CONTENT[path] || null;
}

export default LOCAL_PAGE_CONTENT;
