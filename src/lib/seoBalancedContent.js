/*
 * Additive content pass for pages that are materially shorter than the
 * site's normal service-guide pattern. It never replaces authored blocks.
 *
 * The language below follows the terminology used by IRCC's current public
 * guides: Express Entry/CRS, PNP streams, work permits, DLIs/PGWP, family
 * sponsorship, temporary residence, citizenship and inadmissibility.
 */

const BALANCED_WORD_TARGET = 1300;

const ROUTE_RESEARCH_RULES = [
  {
    test: (path) => path === "/canada-immigration-from-uk",
    topic: "Canada immigration from the United Kingdom",
    sentences: [
      "Research for a UK applicant starts with the Canadian route rather than the visa label: Express Entry, a provincial nomination, an International Experience Canada working holiday, an employer-specific work permit, a study permit, family sponsorship or a business route each test different facts.",
      "Language evidence is mandatory for the federal economic programs even for a British passport holder, so a valid designated test result and its conversion to Canadian Language Benchmarks belong in the plan before a profile is created.",
      "UK qualifications are usually evidenced through an Educational Credential Assessment, which states the Canadian equivalency of the credential and feeds the points claimed; it is an academic comparison, not a licence to practise a regulated profession.",
      "Police certificates follow UK geography rather than nationality: England and Wales, Scotland and Northern Ireland each have their own issuing route, and IRCC's United Kingdom page is the controlling instruction for what is accepted.",
      "The immigration medical examination must be completed by an IRCC-designated panel physician in the UK, and the result has a validity window that should be sequenced against the filing date rather than booked as early as possible.",
      "Settlement funds are assessed in Canadian dollars, so GBP balances, joint accounts, recent deposits and exchange movement all need a traceable history and a written explanation where the source is not obvious.",
      "A temporary permit is not a settlement plan: a work or study permit does not convert into permanent residence, so UK applicants should identify which later route the temporary period is building towards before committing to it.",
      "The strongest UK-focused guidance answers which Canadian route fits the profile, which UK documents carry the longest lead time, how the evidence is sequenced, and which official IRCC source controls the current rule.",
    ],
  },
  {
    test: (path) => /express-entry|federal-skilled|canadian-experience|federal-skilled-trades/.test(path),
    topic: "Express Entry Canada",
    sentences: [
      "A useful Express Entry Canada research trail starts with eligibility for the Federal Skilled Worker Program, Canadian Experience Class or Federal Skilled Trades Program, then moves to the profile facts that affect ranking and invitation readiness.",
      "Long-tail questions such as how to qualify for Express Entry, how the CRS score is calculated, what documents are needed after an Invitation to Apply and whether a category-based draw fits the profile should be answered with the same evidence used in the application.",
      "The Comprehensive Ranking System is only meaningful when the underlying language result, education credential, Educational Credential Assessment, skilled work history, spouse factors and additional points are eligible and still valid on the date they are claimed.",
      "Category-based selection is a separate research lens: an eligible candidate must still enter the Express Entry pool, then meet the instructions for the selected language, occupation, education or other category before a category round can become relevant.",
      "NOC research should compare the lead statement and main duties with the work actually performed, because a favourable job title or TEER label does not prove that the claimed experience meets the federal program requirement.",
      "Language-test planning, proof of funds, police certificates, civil-status records and employer reference letters should be mapped to the filing window so a candidate can respond within the application period after an invitation.",
      "A provincial nomination, Canadian work experience, a stronger language result or a corrected NOC may change the strategy, but each improvement must be lawful, documentable and compatible with the applicant's complete history.",
      "The best Express Entry content therefore answers both the score question and the route question: which program applies, which draw type could matter, which evidence is missing and what alternative permanent-residence pathway should remain under review.",
    ],
  },
  {
    test: (path) => /provincial|pnp|atlantic|rural|municipal|agri-food|care-provider|caregiver|territorial|newfoundland|alberta|british-columbia|saskatchewan|manitoba|ontario|nova-scotia|new-brunswick|prince-edward|yukon|northwest|nunavut/.test(path),
    topic: "a Canada Provincial Nominee Program pathway",
    sentences: [
      "Research for a Canada Provincial Nominee Program pathway should begin with the exact province or territory and stream, because a skilled-worker, employer, graduate, regional or entrepreneur stream can apply different criteria to similar applicants.",
      "Long-tail searches such as PNP eligibility in Canada, how to get a provincial nomination, PNP job-offer requirements and Express Entry-linked PNP versus base PNP should be answered with the current stream instructions rather than a national shortcut.",
      "A strong provincial nominee profile connects the occupation and NOC duties, language result, education, work experience, job offer, employer, settlement funds, legal status and genuine intention to live in the nominating province.",
      "An Express Entry-linked nomination requires the applicant to satisfy both the provincial stream and the applicable federal Express Entry program, while a non-Express Entry nomination follows the province's process before the federal permanent-residence stage.",
      "Province-specific research should record the intake status, invitation method, employer conditions, wage or work-location rules, document format and any deadline because an open stream can change before the application is submitted.",
      "For regional and occupation-focused programs, the evidence should explain why the job, community, settlement plan and applicant history fit together instead of relying on a job offer without showing the surrounding facts.",
      "A nomination is not the same as permanent residence: the federal application still requires a complete record and an admissibility assessment, so identity, family, travel, medical and police documents should be prepared early.",
      "The strongest PNP comparison answers which stream is open, which evidence can be supported, whether the route is linked to Express Entry and what happens after the provincial decision, without promising that a past intake will reopen unchanged.",
    ],
  },
  {
    test: (path) => !/study|student|pgwp/.test(path) && /work|lmia|talent|employer|iec/.test(path),
    topic: "a Canada work permit or employer immigration pathway",
    sentences: [
      "Research for a Canada work permit or employer immigration pathway should identify the authorization type first: employer-specific, open, LMIA-based, LMIA-exempt or a program with its own worker and employer conditions.",
      "Long-tail questions such as how to apply for a Canadian work permit, whether an LMIA is required, how to change employers and what happens when a work permit expires should be answered from the applicant's location and current status.",
      "Employer-specific work permit planning should connect the real job duties, NOC, wage, work location, contract, recruitment or exemption record and employer compliance history with the worker's experience and authorization timeline.",
      "A job offer by itself is not a work authorization, and a permit condition may limit the employer, occupation, location or period of work, so the proposed start date and any change in employment should be checked before work begins.",
      "LMIA and employer-service content should distinguish the employer's business need and recruitment evidence from the worker's passport, experience, language, education, status and admissibility records.",
      "Workers already in Canada should separate an extension, restoration, change of conditions, bridging open work permit or new employer route instead of assuming that one application protects every period of work.",
      "International Experience Canada, Global Talent Stream and other specialized routes have their own eligibility and document logic, so a general work-permit checklist should be used only as a starting point.",
      "The strongest work-permit guidance answers what authorization applies, who controls each document, when lawful work can begin or continue and how the temporary route connects—if at all—to a later permanent-residence plan.",
    ],
  },
  {
    test: (path) => /study|student|pgwp/.test(path),
    topic: "a Canada study permit or post-graduation pathway",
    sentences: [
      "Research for a Canada study permit or post-graduation pathway should start with the designated learning institution, the exact program and the application date, because school and program details can affect both the permit decision and later work options.",
      "Long-tail questions such as Canada study permit requirements, proof of funds for international students, the provincial attestation letter, study permit conditions and PGWP eligibility should be answered with the current federal and school information.",
      "A convincing study permit plan connects the letter of acceptance, tuition, living and travel funds, education and employment history, language record, family circumstances and a clear explanation of why the proposed study makes sense.",
      "Applicants should understand the conditions attached to study status, including progress, enrolment, permitted work and the requirement to follow the terms of the permit, before treating part-time work or a future immigration option as guaranteed.",
      "PGWP research belongs in the decision before tuition is paid: the DLI, credential, program length, delivery format, language or field-of-study rules and the timing of the study-permit application can all matter.",
      "A graduation document may support a later work-permit application, but study, post-graduation work and permanent residence are separate decisions with separate eligibility tests and evidence.",
      "The student's timeline should include acceptance, attestation, permit expiry, enrolment, completion, transcript, language evidence and any family member status so an avoidable deadline does not close the next route.",
      "The strongest study-permit content answers both the immediate study question and the post-study question while keeping the current official instructions more authoritative than an old program summary or marketing promise.",
    ],
  },
  {
    test: (path) => /sponsor|family|spousal|partner|parent|child|orphan/.test(path),
    topic: "Canada family sponsorship",
    sentences: [
      "Research for Canada family sponsorship should identify the exact relationship category first: spouse, common-law partner, conjugal partner, dependent child, parent, grandparent or another permitted relative does not use one universal evidence standard.",
      "Long-tail questions such as who can sponsor a spouse in Canada, inland versus outland sponsorship, how to prove a genuine relationship and what an undertaking means should be answered from the current category guide.",
      "A strong family-class record aligns the sponsor's status, relationship history, civil documents, shared residence, communication, visits, finances, family composition, immigration history and the forms submitted by every family member.",
      "Relationship evidence is more useful when it is labelled by time period and question than when it is uploaded as a large unstructured collection of photographs, messages or financial records.",
      "Sponsor eligibility, income or undertaking rules, medical and police requirements, translations and admissibility should be reviewed separately from the relationship question so one strong area does not hide a different problem.",
      "Parents and grandparents research should also distinguish an invitation-based permanent-residence program from the Super Visa, which is a temporary visit option with its own requirements and purpose.",
      "If the applicant is in Canada, sponsorship and temporary status or an open work permit are related planning questions but are not interchangeable permissions, so the status timeline needs its own review.",
      "The strongest sponsorship guidance answers which category fits, what relationship story the record proves, what undertaking applies and what the family must still verify before submission.",
    ],
  },
  {
    test: (path) => /visit|visitor|super-visa|eta|transit|business-visa/.test(path),
    topic: "a Canada visitor visa or temporary-residence document",
    sentences: [
      "Research for a Canada visitor visa or temporary-residence document should begin with the purpose of travel, expected length of stay, passport and nationality, because a visitor visa, eTA, transit visa, business visit and Super Visa are not the same route.",
      "Long-tail questions such as Canada visitor visa requirements, how to prove ties to a home country, what to include in a letter of invitation and whether a parent or grandparent may need a Super Visa should be answered with the current visit instructions.",
      "A credible temporary-residence application connects the itinerary, accommodation, funding, employment, family, residence, travel history and host or business evidence with the applicant's stated plan to follow the conditions of the stay.",
      "Bank statements, an employer letter, proof of residence outside Canada and a clear invitation can answer different questions; none should be treated as a substitute for the complete temporary-visit explanation.",
      "Business visitors should separate meetings, conferences or short activities that do not enter the Canadian labour market from work that requires a work permit or another authorization.",
      "Super Visa research should focus on the parent or grandparent relationship, host eligibility, medical and insurance requirements and the planned length of stay rather than treating it as a longer visitor visa by default.",
      "Previous refusals, long stays, status changes or unexplained travel should be addressed directly because consistency across dates, funds and purpose helps the decision-maker understand the temporary plan.",
      "The strongest visitor guidance answers which document is needed, why the trip is temporary, how it will be funded and what evidence supports departure or compliance at the end of the authorized stay.",
    ],
  },
  {
    test: (path) => /citizenship|pr-card|prtd|residency|adoption/.test(path),
    topic: "a Canadian citizenship or permanent-resident document application",
    sentences: [
      "Research for a Canadian citizenship or permanent-resident document application should begin with the immediate decision: citizenship grant, citizenship certificate, PR card renewal or replacement, PR travel document, resumption, renunciation or an adoption-related process.",
      "Long-tail questions such as Canadian citizenship eligibility, how to calculate physical presence, PR card residency obligation, citizenship certificate by descent and when a permanent resident needs a travel document should be matched to the exact official guide.",
      "A reliable presence record reconciles passports, entry and exit dates, addresses, employment, education, tax information, family changes and immigration status before any calculator result is treated as final.",
      "Citizenship and PR card planning overlap in the travel history but use different tests, forms and evidence, so a person should not assume that a valid PR card proves citizenship eligibility or that renewal resolves a residency concern.",
      "Identity, name changes, family records, adoption documents and status history should be organized chronologically and explained when a document is unavailable, inconsistent or issued in a different name.",
      "A permanent resident who has spent significant time outside Canada should check the residency obligation and travel-document implications before making a renewal, citizenship or return-to-Canada decision.",
      "The application calendar should include the eligibility period, document expiry, travel plans, requests from IRCC and the time needed to obtain records or translations.",
      "The strongest citizenship and PR-document guidance answers which process applies, which dates prove eligibility, which records support the calculation and what concern must be resolved before submission.",
    ],
  },
  {
    test: (path) => /inadmissibility|refusal|appeal|judicial-review|mandamus|removal|detention|misrepresentation|rehabilitation|pardon/.test(path),
    topic: "a Canadian immigration refusal, inadmissibility or appeal matter",
    sentences: [
      "Research for a Canadian immigration refusal, inadmissibility or appeal matter should begin with the decision, reasons, date received, status consequence and deadline rather than the title of the service or a generic refusal checklist.",
      "Long-tail questions such as how to respond to a Canadian immigration refusal, criminal rehabilitation Canada, temporary resident permit eligibility, authorization to return to Canada and judicial review deadlines require the actual decision and record.",
      "A focused review separates criminal, medical, security, financial, misrepresentation, procedural fairness, residency and document concerns because each issue can involve a different remedy, evidence standard and decision-maker.",
      "The original application, refusal letter, officer notes when available, correspondence, evidence and delivery record should be preserved before a new explanation or reapplication is prepared.",
      "A response is stronger when each concern is matched with the original record, a corrected fact, a new document or a legal explanation instead of repeating the same narrative without addressing the reason for the decision.",
      "Temporary Resident Permit, criminal rehabilitation, ARC, appeal, reconsideration, reapplication and judicial review are not interchangeable options; the available route depends on the decision type, facts and time limit.",
      "Removal, detention, reporting or loss of status can make timing especially important, so a person should protect the next deadline before spending time on general online research.",
      "The strongest refusal and inadmissibility guidance answers what happened, what can still be done, which evidence addresses the concern and who has authority to decide the next step.",
    ],
  },
  {
    test: (path) => /business|start-up|startup|entrepreneur|self-employed/.test(path),
    topic: "Canada business immigration and an entrepreneur pathway",
    sentences: [
      "Research for Canada business immigration should identify the exact federal or provincial route before a business plan is written, because a Start-up Visa, entrepreneur nomination, self-employed route and temporary business visit have different purposes.",
      "Long-tail questions such as Canada business immigration requirements, Start-up Visa eligibility, entrepreneur PNP streams, source-of-funds evidence and business visitor versus work authorization should be answered from the current program instructions.",
      "A strong business file connects ownership, management experience, investment or source of funds, proposed role, market research, job creation or settlement plan and the applicant's language, education, family and admissibility record.",
      "A business concept is not the same as an eligible immigration pathway, and commercial projections should not be presented as guaranteed immigration outcomes or as a substitute for the program's formal criteria.",
      "Entrepreneur and provincial research should record the province, intake status, net-worth or investment assumptions, performance conditions, work authorization and federal stage so the full timeline is visible before funds are committed.",
      "Start-up Visa content should distinguish the designated-organization or support requirement from the later permanent-residence application and any separate work-permit planning.",
      "Source-of-funds and ownership records should be traceable, translated where required and consistent with tax, banking, corporate and personal documents across the whole application.",
      "The strongest business-immigration guidance answers which program fits the real activity, what evidence proves the applicant's role and funds, and what conditions remain after approval.",
    ],
  },
];

const DEFAULT_RULE = {
  topic: "this Canadian immigration pathway",
  sentences: [
    "Research for this Canadian immigration pathway should begin with the exact program, service or decision and the applicant's location, status, family situation and deadline.",
    "Long-tail questions about eligibility, documents, processing, fees, status and the next application should be answered with the current official instructions rather than a broad summary alone.",
    "A useful page connects the goal, requirements, evidence, timeline and decision-maker so readers can understand which facts could change the route.",
    "The most important keyword is the question the applicant needs answered, supported by the program name, document type, application stage and relevant personal history.",
    "Identity, education, work, language, family, funds, travel and admissibility records should be checked for consistency before a form or calculator result is relied on.",
    "A professional review should clarify the service scope and next decision without promising an approval that only the responsible Canadian authority can make.",
    "The application calendar should protect expiry dates, document requests and response deadlines while leaving room to obtain translations or explanations.",
    "The strongest guidance answers what the route is, who may be a fit, what evidence is missing and which official source should be checked next.",
  ],
};

const COMMON_RESEARCH_SENTENCES = [
  "Use the page to match the search phrase to the exact route, then confirm the person, document, decision-maker and application stage before relying on a general answer.",
  "A dated record of the official instructions, the facts supplied and the evidence available makes later changes easier to spot and keeps the application explanation consistent.",
  "When a rule, intake, fee or deadline is time-sensitive, treat the official source as controlling and use a focused review to resolve the question that a general search cannot answer.",
  "Readers should leave the section knowing which fact to verify, which document supports it and which next action protects the application timeline.",
  "This approach makes the content useful for a direct answer, a comparison search and a real file review without repeating the same phrase unnaturally.",
];

const EXCLUDED_PATHS = new Set([
  "/privacy",
  "/terms",
  "/disclaimer",
  "/pay",
  "/contact/pay-immigration-consultation-canada",
]);

function normalizePath(path) {
  const value = String(path || "/").split("?")[0].split("#")[0];
  return value.length > 1 ? value.replace(/\/$/, "") : value;
}

function countWords(value) {
  return String(value || "")
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function blockWords(block) {
  if (block?.type === "table") return (block.rows || []).flat().reduce((total, cell) => total + countWords(cell), 0);
  if (block?.type === "list") return (block.items || []).reduce((total, item) => total + countWords(item), 0);
  return countWords(block?.text || block?.answer || block?.question);
}

function sourceWordCount(page) {
  const heroWords = countWords(page?.hero?.lead);
  const authoredWords = (page?.contentBlocks || []).reduce((total, block) => total + blockWords(block), 0);
  return heroWords + authoredWords;
}

function selectSentences(sentences, wordsNeeded) {
  const selected = [];
  let selectedWords = 0;

  for (const sentence of sentences) {
    selected.push(sentence);
    selectedWords += countWords(sentence);
    if (selectedWords >= wordsNeeded) break;
  }

  return selected;
}

function getResearchRule(page) {
  const path = normalizePath(page?.path);
  return ROUTE_RESEARCH_RULES.find((candidate) => candidate.test(path)) || DEFAULT_RULE;
}

export function getFrameResearchParagraph(page) {
  return getResearchRule(page).sentences.slice(0, 4).join(" ");
}

function getFrameSupportTitle(page) {
  const path = normalizePath(page?.path);

  if (path === "/canada-immigration-from-uk") {
    return "Which Canadian route fits your UK profile, and which UK documents carry the longest lead time?";
  }

  if (path === "/immigrate/express-entry") {
    return "Which Express Entry eligibility and CRS factors should you verify before creating a profile?";
  }

  if (path === "/immigrate/federal-skilled-worker") {
    return "Does your work, language and education history meet the Federal Skilled Worker Program rules?";
  }

  if (path === "/immigrate/canadian-experience-class") {
    return "Does your Canadian skilled work experience meet the Canadian Experience Class requirements?";
  }

  if (path === "/immigrate/federal-skilled-trades") {
    return "Does your trade experience meet the Federal Skilled Trades Program requirements?";
  }

  if (path === "/immigrate/pnp-linked-express-entry") {
    return "How does a provincial nomination change your Express Entry strategy and CRS score?";
  }

  if (path === "/immigrate/provincial-nominee-program-all-provinces-consolidated") {
    return "How do you compare Canada's Provincial Nominee Programs before choosing a stream?";
  }

  if (path === "/immigrate/atlantic-immigration-program") {
    return "Do your job offer, language, education and settlement plans fit the Atlantic Immigration Program?";
  }

  if (path === "/immigrate/agri-food-immigration-pilot") {
    return "Do your occupation, Canadian work experience and job offer fit the Agri-Food Immigration Pilot?";
  }

  if (path === "/immigrate/rural-and-northern-immigration-pilot") {
    return "Does your job and community connection fit the Rural and Northern Immigration Pilot?";
  }

  if (path === "/immigrate/municipal-nominee-program") {
    return "What evidence links your job, employer and community to a Municipal Nominee Program?";
  }

  if (path === "/immigrate/home-child-care-provider-pilot") {
    return "Do your child-care experience and job offer fit the Home Child Care Provider Pilot?";
  }

  if (path === "/immigrate/home-support-worker-pilot") {
    return "Do your care experience and job offer fit the Home Support Worker Pilot?";
  }

  if (path === "/immigrate/yukon-nwt-nunavut-nominee-programs") {
    return "How do Yukon, Northwest Territories and Nunavut nominee streams differ for your profile?";
  }

  const provinceTitles = [
    ["ontario-pnp-oinp", "Which Ontario PNP requirements decide whether your stream is a realistic option?"],
    ["british-columbia-pnp", "Which British Columbia PNP requirements should you verify before registering?"],
    ["alberta-pnp-aaip", "Which Alberta Advantage Immigration Program requirements should you verify before seeking a nomination?"],
    ["saskatchewan-pnp-sinp", "Which Saskatchewan Immigrant Nominee Program requirements fit your occupation and job offer?"],
    ["manitoba-pnp-mpnp", "Which Manitoba Provincial Nominee Program pathway fits your connection and work history?"],
    ["nova-scotia-pnp-nsnp", "Which Nova Scotia Nominee Program requirements should you verify for your stream?"],
    ["new-brunswick-pnp", "Which New Brunswick nominee requirements should you verify before accepting a job offer?"],
    ["prince-edward-island-pnp", "Which Prince Edward Island nominee requirements fit your occupation and settlement plan?"],
    ["newfoundland-and-labrador-pnp", "Which Newfoundland and Labrador nominee requirements fit your job and settlement plan?"],
  ];
  const provinceTitle = provinceTitles.find(([fragment]) => path.includes(fragment));
  if (provinceTitle) return provinceTitle[1];

  if (path === "/work-and-study/canada-work-permit-overview") {
    return "Which Canadian work permit type matches your employer, job and current status?";
  }

  if (path === "/work-and-study/lmia-and-employer-services-overview") {
    return "Does the LMIA and job offer support this Canadian work permit or immigration plan?";
  }

  if (path === "/work-and-study/global-talent-stream") {
    return "Does the employer and occupation meet Global Talent Stream requirements?";
  }

  if (path === "/work-and-study/tfwp-employer-compliance") {
    return "What must a Canadian employer verify to remain compliant under the TFWP?";
  }

  if (path === "/work-and-study/international-experience-canada-iec") {
    return "Do your age, citizenship and participation details fit International Experience Canada?";
  }

  if (path === "/work-and-study/canada-study-permit") {
    return "Does your study plan meet Canada's school, attestation, funds and permit requirements?";
  }

  if (path === "/work-and-study/post-graduation-work-permit-pgwp") {
    return "Will your Canadian program and study history support a Post-Graduation Work Permit?";
  }

  if (path === "/sponsor/family-sponsorship-overview-all-categories") {
    return "Which family sponsorship category matches your relationship and family facts?";
  }

  if (path === "/sponsor/spousal-and-partner-sponsorship-overview") {
    return "Which evidence distinguishes a spouse, common-law or partner sponsorship application?";
  }

  if (path === "/sponsor/spousal-common-law-sponsorship") {
    return "How do you prove a genuine spousal or common-law relationship for sponsorship?";
  }

  if (path.includes("conjugal-partner")) {
    return "Can your relationship meet the evidence requirements for conjugal partner sponsorship?";
  }

  if (path.includes("outland-sponsorship")) {
    return "When is outland spousal sponsorship the better process for your family?";
  }

  if (path.includes("inland-sponsorship")) {
    return "Does inland spousal sponsorship fit your partner's status and plans in Canada?";
  }

  if (path.includes("spousal-open-work-permit")) {
    return "Can the sponsored spouse qualify for an open work permit while in Canada?";
  }

  if (path.includes("dependent-child")) {
    return "Does the child meet the age, relationship and dependency rules for sponsorship?";
  }

  if (path.includes("adopted-child")) {
    return "Do the adoption and immigration records support sponsorship or citizenship for the child?";
  }

  if (path.includes("parents-and-grandparents-program-pgp")) {
    return "Do you meet the Parents and Grandparents Program invitation, income and undertaking requirements?";
  }

  if (path.includes("pgp-invitation-to-apply")) {
    return "What should you do after receiving a Parents and Grandparents Program invitation?";
  }

  if (path.includes("super-visa-for-parents")) {
    return "Does the parent or grandparent meet the Super Visa host, insurance and medical requirements?";
  }

  if (path.includes("orphaned-relatives")) {
    return "Does the relative and family situation qualify for orphaned-relative sponsorship?";
  }

  if (path.includes("minimum-necessary-income")) {
    return "How should you calculate and document income for a family sponsorship undertaking?";
  }

  if (path.includes("sponsorship-eligibility")) {
    return "Can the sponsor and applicant satisfy the eligibility rules for this family application?";
  }

  if (path.includes("sponsorship-processing-times")) {
    return "What can change a family sponsorship timeline after the application is submitted?";
  }

  if (path === "/sponsor/sponsorship-appeal") {
    return "What evidence and deadline matter in a family sponsorship appeal?";
  }

  if (path.includes("sponsorship-appeal-iad")) {
    return "How should you prepare the record and deadline for an IAD sponsorship appeal?";
  }

  if (path === "/visit/visitor-visa-trv-and-super-visa-combined") {
    return "Which Canadian visitor document fits your trip, funds and temporary-intent evidence?";
  }

  if (path === "/visit/visitor-visa-trv-standalone-page") {
    return "Can your purpose, funds and ties support a Canadian visitor visa application?";
  }

  if (path.includes("eta-electronic")) {
    return "Does your passport and travel plan require an eTA rather than a visitor visa?";
  }

  if (path.includes("super-visa-standalone")) {
    return "Does your family visit plan meet the Canadian Super Visa requirements?";
  }

  if (path.includes("business-visa")) {
    return "Is your planned business activity a visitor activity or work that needs authorization?";
  }

  if (path.includes("transit-visa")) {
    return "Do your passport, airport connection and travel dates require a Canadian transit visa?";
  }

  if (path.includes("visitor-record")) {
    return "Should you apply to extend your stay with a visitor record before your status expires?";
  }

  if (path === "/citizenship/pr-card-renewal-and-citizenship-combined-overview") {
    return "Do your travel dates and identity records support PR renewal or a citizenship application?";
  }

  if (path.includes("adult-grant")) {
    return "Do your physical-presence, language and tax records support an adult citizenship grant?";
  }

  if (path.includes("minor-grant")) {
    return "Which parent, status and presence records are needed for a minor citizenship grant?";
  }

  if (path.includes("citizenship-certificate")) {
    return "What birth, parentage and status records prove your Canadian citizenship?";
  }

  if (path.includes("citizenship-resumption")) {
    return "Do your former citizenship records support an application to resume Canadian citizenship?";
  }

  if (path.includes("citizenship-renunciation")) {
    return "Why are you renouncing Canadian citizenship, and what status will you hold afterward?";
  }

  if (path.includes("citizenship-revocation-appeal")) {
    return "What record and deadline matter when appealing a Canadian citizenship revocation?";
  }

  if (path.includes("pr-card-renewal")) {
    return "Do your travel dates satisfy the permanent-resident residency obligation before renewal?";
  }

  if (path.includes("pr-card-replacement")) {
    return "What identity, status and loss or damage evidence is needed to replace a PR card?";
  }

  if (path.includes("pr-travel-document")) {
    return "Can your travel history and residency records support a PR Travel Document application?";
  }

  if (path.includes("citizenship-through-adoption")) {
    return "Do the adoption, parentage and citizenship records support citizenship through adoption?";
  }

  if (path.includes("pr-through-adoption")) {
    return "Which adoption and immigration records are needed for permanent residence?";
  }

  if (path.includes("proof-of-adoption")) {
    return "Which official adoption records will prove the child's identity and legal relationship?";
  }

  if (path === "/inadmissibility-and-appeals/refusal-and-pfl-response") {
    return "What does your Canadian refusal or procedural fairness letter require you to answer next?";
  }

  if (path === "/immigrate/in-canada-refugee-claim") {
    return "Do the facts and evidence support an in-Canada refugee claim?";
  }

  if (path === "/immigrate/pre-removal-risk-assessment-prra") {
    return "Does your removal situation meet the requirements for a Pre-Removal Risk Assessment?";
  }

  if (path === "/immigrate/protected-persons-apply-for-pr") {
    return "What documents are needed to apply for permanent residence as a protected person?";
  }

  if (path === "/immigrate/refugee-travel-document") {
    return "Do you need a Refugee Travel Document for your trip, and is your travel plan safe?";
  }

  if (path === "/immigrate/one-year-window-reunification") {
    return "Can the One-Year Window reunite eligible family members with a protected person?";
  }

  if (path === "/immigrate/humanitarian-and-compassionate") {
    return "Do your establishment, hardship and family factors support an H&C application?";
  }

  if (path === "/immigrate/temporary-resident-to-pr-pathway") {
    return "Does your current status and work history fit a temporary-resident-to-PR pathway?";
  }

  if (path === "/inadmissibility-and-appeals/criminal-inadmissibility-overview") {
    return "What type of criminal inadmissibility concern must be resolved before you apply?";
  }

  if (path.includes("criminal-rehabilitation")) {
    return "Can criminal rehabilitation or deemed rehabilitation address your inadmissibility concern?";
  }

  if (path.includes("temporary-resident-permit")) {
    return "Can a Temporary Resident Permit address your Canadian inadmissibility concern?";
  }

  if (path.includes("record-suspension")) {
    return "Can a record suspension or pardon change the criminal record relevant to your application?";
  }

  if (path.includes("deemed-rehabilitation")) {
    return "Could deemed rehabilitation apply to the offence, dates and jurisdiction in your record?";
  }

  if (path.includes("medical-inadmissibility")) {
    return "What medical finding must be addressed before a Canadian immigration decision?";
  }

  if (path.includes("financial-inadmissibility")) {
    return "What financial evidence can answer a Canadian immigration inadmissibility concern?";
  }

  if (path.includes("misrepresentation")) {
    return "What fact, document or omission is alleged to be misrepresentation in the decision?";
  }

  if (path.includes("admissibility-hearing")) {
    return "How should you prepare for a Canadian admissibility hearing and its allegations?";
  }

  if (path.includes("detention-review")) {
    return "What evidence can address the grounds for detention at a detention review?";
  }

  if (path === "/inadmissibility-and-appeals/removal-order") {
    return "What does the removal order require, and is there a deadline to challenge or defer it?";
  }

  if (path.includes("removal-order-appeal")) {
    return "What grounds and deadline apply to an appeal of a removal order?";
  }

  if (path.includes("stay-of-removal")) {
    return "What evidence supports an urgent request to stay removal from Canada?";
  }

  if (path.includes("stay-motion")) {
    return "What evidence and procedural steps support a Federal Court stay motion?";
  }

  if (path.includes("deferral-request")) {
    return "What new risk or practical barrier could support a request to defer removal?";
  }

  if (path.includes("arc-authorization")) {
    return "What removal history and purpose of travel must an ARC application explain?";
  }

  if (path.includes("residency-obligation-appeal")) {
    return "Which travel, family and establishment facts can support a residency-obligation appeal?";
  }

  if (path.includes("judicial-review")) {
    return "Is judicial review the right response to your Canadian immigration refusal?";
  }

  if (path.includes("mandamus")) {
    return "Has an unreasonable processing delay created a mandamus question in your case?";
  }

  if (path === "/about/about-commonwealth-migration") {
    return "What should you prepare before choosing a Canadian immigration service?";
  }

  if (path.includes("business-immigration-and-start-up")) {
    return "Which Canadian business immigration route fits your role, funds and proposed activity?";
  }

  const topic = String(page?.h1 || getResearchRule(page).topic)
    .replace(/\b20\d{2}\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return `What does ${topic} require before you take the next step?`;
}

export function getFrameSupportParagraph(page) {
  const path = normalizePath(page?.path);

  if (path === "/canada-immigration-from-uk") {
    return "A UK application is realistic when the chosen Canadian route matches the evidence the applicant can produce: a valid language test, an Educational Credential Assessment for UK qualifications, the police certificate for the part of the UK actually lived in, a panel-physician medical when requested and settlement funds traceable in Canadian dollars. A British passport removes the visitor-visa step, not the language, credential, police or funds requirements behind an economic immigration route.";
  }

  if (path === "/immigrate/pnp-linked-express-entry") {
    return "A provincial nomination changes an Express Entry strategy only when the applicant meets both the province's stream requirements and the applicable federal program requirements. Confirm the nomination route, valid profile facts, CRS impact, supporting documents and the federal filing deadline before treating the nomination as a permanent-residence result.";
  }

  if (path === "/immigrate/federal-skilled-worker") {
    return "The Federal Skilled Worker route is realistic when the applicant can prove the required skilled work, language results, education or ECA, selection factors, settlement funds and admissibility history. A qualifying occupation or CRS estimate is not enough by itself; the claimed duties and documents must support the complete federal application.";
  }

  if (path === "/immigrate/canadian-experience-class") {
    return "The Canadian Experience Class depends on eligible skilled work performed in Canada, the required language level, valid status and a record that matches the claimed NOC duties and dates. Check whether the work was authorized and whether the experience fits the program before using it to support an Express Entry profile.";
  }

  if (path === "/immigrate/federal-skilled-trades") {
    return "The Federal Skilled Trades Program requires evidence that the applicant's trade experience, occupation, language results and qualifying job offer or certificate of qualification fit the federal rules. Compare the actual duties, hours, dates and trade credential with the program criteria before relying on a job title alone.";
  }

  if (/express-entry|crs|federal-skilled|canadian-experience/.test(path)) {
    return "Before creating an Express Entry profile, confirm that you qualify for at least one federal program and can prove the language, education, skilled-work and identity facts you will claim. Then test your CRS factors, category eligibility and possible provincial nomination against valid results and the invitation deadline; a score alone does not create eligibility.";
  }

  if (path === "/immigrate/atlantic-immigration-program") {
    return "The Atlantic Immigration Program is a realistic option when a designated Atlantic employer's job offer, the applicant's work and language evidence, education, settlement plan and endorsement stage fit the program. Verify the province, occupation, offer conditions and federal application sequence before treating an employer connection as approval.";
  }

  if (path === "/immigrate/agri-food-immigration-pilot") {
    return "The Agri-Food Immigration Pilot depends on an eligible occupation, qualifying Canadian work experience, a genuine job offer, language and education evidence, and the program's regional or employer conditions. Match the duties and dates to the occupation list and keep the work-permit, permanent-residence and admissibility stages separate.";
  }

  if (path === "/immigrate/rural-and-northern-immigration-pilot") {
    return "A Rural and Northern Immigration Pilot plan must connect an eligible job and employer with the participating community, local recommendation process, work experience, language, education and settlement evidence. Confirm that the community and intake route apply to the facts before relying on a rural job offer as a permanent-residence pathway.";
  }

  if (path === "/immigrate/municipal-nominee-program") {
    return "A Municipal Nominee Program application needs a clear link between the applicant's job, employer, occupation, community connection and the local or federal criteria in force. Verify the nomination authority, intake status, work authorization and settlement evidence before presenting a community opportunity as an immigration approval.";
  }

  if (/home-child-care-provider|home-support-worker/.test(path)) {
    return "A home-care provider pathway depends on the exact pilot or program, the occupation and duties, language and education evidence, qualifying work experience, employer and job-offer terms, and the applicant's status. Confirm the applicable intake and separate work-permit or permanent-residence requirements before relying on a care job alone.";
  }

  if (/provincial|pnp|atlantic|rural|municipal|agri-food|care-provider|caregiver|territorial|newfoundland|alberta|british-columbia|saskatchewan|manitoba|ontario|nova-scotia|new-brunswick|prince-edward|yukon|northwest|nunavut/.test(path)) {
    return "A provincial nominee option is realistic only when the exact province and stream accept the applicant's occupation, job offer, language, education, work history, settlement funds, legal status and genuine intention to live there. Confirm intake status and Express Entry alignment, then keep the provincial decision separate from the later federal permanent-residence and admissibility review.";
  }

  if (!/study|student|pgwp/.test(path) && /work|lmia|talent|employer|iec/.test(path)) {
    return "The correct Canadian work authorization depends on whether the permit is employer-specific or open, whether an LMIA or exemption applies, and whether the worker's employer, duties, location, status and start date match the document. A job offer alone is not a work permit, so confirm the conditions before work begins or changes.";
  }

  if (/study|student|pgwp/.test(path)) {
    return "A Canadian study plan is credible when the designated learning institution, exact program, acceptance or attestation, tuition and living funds, study purpose and permit conditions fit the student's history. PGWP and permanent residence are separate decisions, so future work plans must support—not replace—the current study-permit evidence and compliance record.";
  }

  if (path.includes("sponsorship-appeal-iad")) {
    return "An IAD sponsorship appeal should answer the refusal reasons with the complete application record, relationship evidence, updated family facts and any evidence that addresses the officer's concern. Confirm the notice date, appeal deadline, record-sharing process and hearing requirements before assuming that a new application is the correct response.";
  }

  if (/sponsor|family|spousal|partner|parent|child|orphan/.test(path)) {
    return "The correct family sponsorship route depends on the legal relationship category, sponsor eligibility, undertaking, relationship history, civil records, family composition and admissibility evidence. Spousal, partner, child, parent and grandparent applications use different tests, so match the documents to the exact category instead of relying on a universal family checklist.";
  }

  if (/visit|visitor|super-visa|eta|transit|business-visa/.test(path)) {
    return "The right Canadian visitor document depends on the purpose and length of travel, passport, itinerary, funding, host evidence and ties outside Canada. A visitor visa, eTA, transit visa, business visit and Super Visa are different routes, and the evidence must show a coherent temporary plan and respect for the authorized conditions.";
  }

  if (/citizenship|pr-card|prtd|residency|adoption/.test(path)) {
    return "The correct citizenship or permanent-resident document process depends on the immediate goal and on accurate travel, physical-presence or residency-obligation dates, identity records and status history. A valid PR card does not by itself prove citizenship eligibility, and citizenship planning does not remove the need to resolve travel-document or residency concerns.";
  }

  if (/inadmissibility|refusal|appeal|judicial-review|mandamus|removal|detention|misrepresentation|rehabilitation|pardon/.test(path)) {
    return "The next step in a refusal or inadmissibility matter depends on the decision, reasons, date received, legal deadline, status consequence and evidence that addresses the concern. Criminal rehabilitation, a Temporary Resident Permit, an ARC, appeal, reapplication and judicial review are different remedies, so the actual decision record must guide the choice.";
  }

  if (/business|start-up|startup|entrepreneur|self-employed/.test(path)) {
    return "The suitable Canadian business-immigration route depends on the real business activity, ownership or role, investment and source of funds, support, work authorization and federal or provincial stage. A business plan explains the proposal, but it is not proof of eligibility by itself and commercial projections are not a guaranteed immigration outcome.";
  }

  if (/refugee|protected-person|humanitarian|one-year-window|temporary-resident-to-pr/.test(path)) {
    return "The correct protection or humanitarian route depends on the applicant's status, risk or hardship facts, family circumstances, deadlines and evidence. Match the record to the exact process and decision-maker, preserve the relevant notices and explain why the proposed route fits before relying on a general immigration summary.";
  }

  return "The useful answer for this page depends on the exact program, document, applicant facts, evidence, timeline and decision-maker. Match the question to the official process, preserve records that support the answer and confirm the current instructions before relying on a broad immigration summary.";
}

function getFrameSupportClosing(page) {
  const path = normalizePath(page?.path);

  if (path === "/canada-immigration-from-uk") {
    return "The practical next step is to pick the Canadian route, then run the long-lead UK items in parallel so the language test, credential assessment, police certificate and funds history are all current on the day you file.";
  }

  if (/express-entry|crs|federal-skilled|canadian-experience|pnp-linked/.test(path)) {
    return "The practical next step is to identify the federal program, document the points or experience being claimed and protect the invitation response window.";
  }

  if (/provincial|pnp|atlantic|rural|municipal|agri-food|care-provider|caregiver|territorial|newfoundland|alberta|british-columbia|saskatchewan|manitoba|ontario|nova-scotia|new-brunswick|prince-edward|yukon|northwest|nunavut/.test(path)) {
    return "The practical next step is to name the stream, confirm its current intake and build an evidence list that covers both the nomination and the federal stage.";
  }

  if (/study|student|pgwp/.test(path)) {
    return "The practical next step is to record the school, program, status dates and future work assumptions before paying tuition or relying on a post-study plan.";
  }

  if (/work|lmia|talent|employer|iec/.test(path)) {
    return "The practical next step is to identify who supplies each document and confirm exactly when the worker may begin, change or continue employment.";
  }

  if (/sponsor|family|spousal|partner|parent|child|orphan/.test(path)) {
    return "The practical next step is to label the relationship evidence by time period and verify the sponsor, undertaking, medical, police and translation requirements.";
  }

  if (/visit|visitor|super-visa|eta|transit|business-visa/.test(path)) {
    return "The practical next step is to make the purpose, funding, itinerary and return or compliance plan consistent across every form and supporting record.";
  }

  if (/citizenship|pr-card|prtd|residency|adoption/.test(path)) {
    return "The practical next step is to reconcile travel and identity records before relying on a calculator, document expiry date or application checklist.";
  }

  if (/inadmissibility|refusal|appeal|judicial-review|mandamus|removal|detention|misrepresentation|rehabilitation|pardon/.test(path)) {
    return "The practical next step is to preserve the decision record and calculate the response or appeal deadline before selecting a remedy.";
  }

  if (/business|start-up|startup|entrepreneur|self-employed/.test(path)) {
    return "The practical next step is to separate the commercial plan from the immigration criteria and trace every ownership, funds and role claim to evidence.";
  }

  return "The practical next step is to name the decision, gather the evidence that answers it and verify the current official instructions before filing.";
}

export function getFrameSupportContent(page) {
  const path = normalizePath(page?.path);
  const researchSentences = getResearchRule(page).sentences;
  const content = {
    eyebrow: "CHECK THE NEXT DECISION",
    title: getFrameSupportTitle(page),
    paragraphs: [
      getFrameSupportParagraph(page),
      researchSentences.slice(4, 8).join(" "),
      getFrameSupportClosing(page),
    ].filter(Boolean),
    checks: [
      "Match the page topic to the exact program or document.",
      "Keep the evidence, dates and status history consistent.",
      "Confirm the current official instructions before filing.",
    ],
  };

  if (/express-entry|crs|federal-skilled|canadian-experience/.test(path)) {
    content.checks = [
      "Federal program eligibility before profile creation.",
      "Language, education and NOC evidence that can be proved.",
      "CRS factors, category fit and nomination options.",
      "Documents ready for the invitation filing window.",
    ];
  } else if (/provincial|pnp|atlantic|rural|municipal|agri-food|care-provider|caregiver|territorial|newfoundland|alberta|british-columbia|saskatchewan|manitoba|ontario|nova-scotia|new-brunswick|prince-edward|yukon|northwest|nunavut/.test(path)) {
    content.checks = [
      "The exact province, stream and current intake status.",
      "Occupation, NOC duties, language and education evidence.",
      "Job offer, employer, settlement funds or provincial connection.",
      "Express Entry alignment and the federal stage after nomination.",
    ];
  } else if (!/study|student|pgwp/.test(path) && /work|lmia|talent|employer|iec/.test(path)) {
    content.checks = [
      "Employer-specific or open work authorization.",
      "Real duties, employer, wage, LMIA or exemption evidence.",
      "Current status, permit conditions and start-date risks.",
      "Whether an extension, restoration or new permit is needed.",
    ];
  } else if (/study|student|pgwp/.test(path)) {
    content.checks = [
      "The designated learning institution and exact program.",
      "Acceptance, attestation and tuition or living funds.",
      "Study purpose, permit conditions and enrolment history.",
      "Separate post-graduation work or permanent-residence planning.",
    ];
  } else if (/sponsor|family|spousal|partner|parent|child|orphan/.test(path)) {
    content.checks = [
      "The legal relationship category and sponsor eligibility.",
      "Relationship history, civil records and family composition.",
      "Undertaking, income and admissibility requirements.",
      "Medical, police, translation and immigration-history evidence.",
    ];
  } else if (/visit|visitor|super-visa|eta|transit|business-visa/.test(path)) {
    content.checks = [
      "The purpose, length and document needed for the trip.",
      "Itinerary, accommodation, funds and host evidence.",
      "Employment, family and residence ties outside Canada.",
      "A consistent plan to respect temporary-residence conditions.",
    ];
  } else if (/citizenship|pr-card|prtd|residency|adoption/.test(path)) {
    content.checks = [
      "The exact citizenship or permanent-resident document process.",
      "Physical presence, travel and residency-obligation dates.",
      "Identity, name-change and civil-status records.",
      "Document expiry, translation and application timing.",
    ];
  } else if (/inadmissibility|refusal|appeal|judicial-review|mandamus|removal|detention|misrepresentation|rehabilitation|pardon/.test(path)) {
    content.checks = [
      "The decision, reasons, date received and legal deadline.",
      "The precise inadmissibility or refusal concern.",
      "The remedy that matches the decision and available evidence.",
      "The original application record and officer correspondence.",
    ];
  } else if (/business|start-up|startup|entrepreneur|self-employed/.test(path)) {
    content.checks = [
      "The federal or provincial business immigration route.",
      "Ownership, role, investment and source-of-funds evidence.",
      "Market need, support, work authorization and conditions.",
      "The commercial plan alongside—not instead of—immigration criteria.",
    ];
  }

  return content;
}

export function getBalancedSeoContentBlocks(page, existingSeoBlocks = []) {
  const path = normalizePath(page?.path);
  if (!page || EXCLUDED_PATHS.has(path) || path.startsWith("/legal/")) return [];

  const existingWords = sourceWordCount(page) + existingSeoBlocks.reduce((total, block) => total + blockWords(block), 0);
  const deficit = BALANCED_WORD_TARGET - existingWords;
  if (deficit <= 0) return [];

  const rule = getResearchRule(page);
  const topic = page?.h1 ? String(page.h1).replace(/\b20\d{2}\b/g, "").replace(/\s+/g, " ").trim() : rule.topic;
  const heading = `What should you research before relying on ${topic}?`;
  const headingWords = countWords(heading);
  const selected = selectSentences(
    [...rule.sentences, ...COMMON_RESEARCH_SENTENCES],
    Math.max(deficit - headingWords + 20, 55)
  );
  const splitPoint = Math.max(1, Math.ceil(selected.length / 2));
  const paragraphs = [selected.slice(0, splitPoint), selected.slice(splitPoint)]
    .filter((group) => group.length > 0)
    .map((group) => ({ type: "paragraph", text: group.join(" ") }));

  return [
    { type: "heading", level: 2, text: heading },
    ...paragraphs,
  ];
}

export { BALANCED_WORD_TARGET };

export default getBalancedSeoContentBlocks;
