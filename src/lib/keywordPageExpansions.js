/*
 * Page-facing expansions based on the supplied keyword workbook.
 *
 * These are intentionally grouped by search intent instead of pasted as a
 * keyword list. Each phrase is used in an explanatory heading or paragraph so
 * the added copy remains useful to readers and expands naturally on mobile.
 */

const expansion = (heading, paragraph, nextHeading, nextParagraph, ...additional) => [
  { type: "heading", level: 2, text: heading },
  { type: "paragraph", text: paragraph },
  ...(nextHeading && nextParagraph
    ? [
        { type: "heading", level: 2, text: nextHeading },
        { type: "paragraph", text: nextParagraph },
      ]
    : []),
  ...additional,
];

const PAGE_EXPANSIONS = [
  {
    test: (path) => path === "/immigrate/business-immigration-and-start-up-visa",
    blocks: expansion(
      "Business Immigration Canada and Start-Up Visa planning",
      "Business immigration Canada planning should separate the proposed activity, ownership, management role, source of funds, support organization, work authorization and permanent-residence route. An entrepreneur should be able to explain why the business is viable, what they will do day to day, how the funds were obtained and which federal or provincial criteria apply. A business immigration consultant in Brampton can help organize that evidence, but the current program instructions and the decision-maker—not a business plan alone—control eligibility.",
      "Which Start-Up Visa evidence should founders verify first?",
      "Before relying on Start-Up Visa eligibility, compare the designated organization support, qualifying ownership, language, settlement funds, business plan and applicant history. Keep temporary business travel, a work permit, a provincial entrepreneur stream and permanent residence as separate decisions. Founders should be able to trace each role, ownership and source-of-funds claim to a consistent record before they commit to a route.",
    ),
  },
  {
    test: (path) => path === "/immigrate/express-entry",
    blocks: expansion(
      "Express Entry Canada requirements, draws and points",
      "Readers comparing express entry canada requirements, express entry canada requirement and requirements for express entry canada should first separate program eligibility from CRS ranking. The review should cover the Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program, then connect language, education, work history, NOC duties, family details and proof of funds to the evidence needed for a complete profile. If you are asking what is express entry to canada or what is express entry in canada, the answer is a federal application-management system—not a direct permanent-residence approval.",
      "How to apply for Express Entry Canada and interpret a draw",
      "Before you ask how to apply for express entry canada, how to apply express entry canada, how to apply canada express entry, how to apply for canada express entry, how to apply to express entry canada, apply canada express entry, apply for canada express entry, apply for express entry to canada, apply to canada express entry, apply to express entry canada or applying for canada express entry, check the documents behind each eligibility claim. A canada express entry draw, canada express entry draws latest result or express entry latest draw canada can provide context, but it is not a promise of the next invitation. Use a canada express entry points calculator or canada points calculator express entry to test assumptions, then compare the result with the applicable draw type and the permanent residence canada express entry filing window.",
      { type: "heading", level: 2, text: "Express Entry requirements, points and permanent-residence searches" },
      { type: "paragraph", text: "Searches such as canada entry express requirements, express entry for canada requirements, requirements for canada express entry, requirements of express entry canada, express entry requirements canada, express entry requirements for canada, express entry requirement for canada, requirement for canada express entry, what is express entry for canada, what is express entry in canada, express entry into canada, express entry canada immigration, canada immigration express entry, express entry canada immigration, express entry for canada immigration, immigration canada express entry and canada express entry immigration describe the same need for a route-specific eligibility review. The page also covers canada express entry point calculator, canada express entry points calculator, express entry point calculator canada, express entry point calculator for canada, express entry points calculation canada, express entry points calculator canada, express entry points calculator for canada, calculate canada express entry points, calculate points for express entry canada, canada express entry point calculation, canada express entry points calculation, point calculation for canada express entry, point calculator canada express entry, point calculator for canada express entry, points calculation for canada express entry, score calculator for canada express entry and cic canada express entry calculator as planning tools—not as substitutes for the current CRS criteria or a complete document check. Canada express entry permanent residency, canada permanent residence express entry, canada permanent residency express entry, canada permanent resident express entry, canada express entry permanent residency, canada express entry pr, canada express entry canada pr, canada pr express entry, pr canada express entry and permanent resident canada express entry are the later outcome questions, which still depend on eligibility, an invitation and a complete federal application." ,
      },
    ),
  },
  {
    test: (path) => path === "/immigrate/ontario-pnp-oinp",
    blocks: expansion(
      "Ontario Immigrant Nominee Program requirements and updates",
      "The Ontario Immigrant Nominee Program is assessed through a specific stream, not through a single national checklist. People researching ontario immigrant nominee program updates, the ontario immigrant nominee program human capital priorities stream, immigration to ontario nominee program or ontario immigrant nominee program requirements should record the current stream, invitation method, occupation, job offer, language, education and settlement evidence. An Ontario nominee immigration program result still requires a provincial decision followed by the applicable federal permanent-residence and admissibility review.",
      "OINP Express Entry streams and processing questions",
      "An OINP express entry profile, an express entry OINP pathway and an oinp express entry draw should be checked against the exact stream and the candidate's federal Express Entry eligibility. The oinp express entry skilled trades stream, oinp international student stream express entry, oinp express entry points calculator and oinp express entry processing time each describe a different planning question. Compare an OINP express entry stream with an oinp non express entry processing time route before relying on an older intake pattern.",
      { type: "heading", level: 2, text: "Ontario nominee program documents, contact and processing questions" },
      { type: "paragraph", text: "The terms canada immigration provincial nominee program ontario, immigrant nominee program ontario, immigration nominee program ontario, immigration ontario provincial nominee program, ontario immigration nominee program, ontario immigration provincial nominee program, immigration ontario nominee program, immigration provincial nominee program ontario, ontario nominee program immigration, ontario provincial nominee program immigration, provincial nominee program ontario immigration and opportunities ontario immigrant nominee program all need to be narrowed to the current OINP stream. Ontario immigrant nominee program documents should be indexed against the stream checklist; ontario immigrant nominee program contact should use the official channel; and ontario immigrant nominee program processing time or processing time for ontario immigrant nominee program should be treated as an estimate that can change after submission. This page does not treat stale 2016 or 2017 wording as current eligibility.",
      },
    ),
  },
  {
    test: (path) => path === "/sponsor/spousal-and-partner-sponsorship-overview" || path === "/sponsor/spousal-common-law-sponsorship",
    blocks: expansion(
      "Canada spousal sponsorship requirements and application steps",
      "A Canada spousal sponsorship file should answer both the relationship question and the sponsor-eligibility question. Searchers comparing canada spousal sponsorship, canadian spousal sponsorship requirements, spousal sponsorship canada requirements or spousal sponsorship application should organize marriage or common-law records, shared life evidence, identity, civil status, immigration history and admissibility documents. The IRCC spousal sponsorship online application process still depends on the exact category and the facts of the family, so a generic upload list is not enough.",
      "Inland and outland spousal sponsorship timeline questions",
      "Spousal sponsorship processing time, spousal sponsorship canada timeline, canadian spousal sponsorship timeline, canada spousal sponsorship timeline, how long does spousal sponsorship take in canada, how long is spousal sponsorship in canada, ircc spousal sponsorship processing time, inland spousal sponsorship processing time, inland spousal sponsorship canada timeline, inland spousal sponsorship canada processing time, inland spousal sponsorship timeline, outland spousal sponsorship processing time, outland spousal sponsorship canada processing time, outland spousal sponsorship outside canada processing time, processing time for spousal sponsorship outside canada, spousal sponsorship outside canada processing time, spousal sponsorship wait times and spousal sponsorship aor timeline are planning estimates, not guarantees. Confirm whether the application is inland or outland, then check the spousal sponsorship checklist, document checklist spousal sponsorship, document checklist for spousal sponsorship, spousal sponsorship document checklist, application for spousal sponsorship inside canada, outland spousal sponsorship canada requirements and who is the principal applicant in spousal sponsorship canada that apply to the case. Keep spousal sponsorship fees canada, spousal sponsorship canada fees and spousal sponsorship application fees separate from the evidence and deadline plan.",
      { type: "heading", level: 2, text: "Spousal sponsorship forms, work permits and eligibility" },
      { type: "paragraph", text: "A spousal sponsorship application canada, spousal sponsorship application in canada, spousal sponsorship canada application, application for spousal sponsorship canada, canada spousal sponsorship application or canadian spousal sponsorship application should use the current IRCC forms and category-specific checklist. Questions about open work permit spousal sponsorship, spousal sponsorship open work permit, work permit spousal sponsorship, spousal sponsorship work permit and open work permit spousal sponsorship should be reviewed as a separate authorization stage. Spousal sponsorship eligibility, spousal sponsorship canada financial requirements, income requirement for spousal sponsorship canada, out of status spousal sponsorship, first stage approval spousal sponsorship, spousal sponsorship status, spousal sponsorship application status and spousal sponsorship form or forms should each be answered from the applicant’s relationship, sponsor, status and admissibility facts—not from an old forum timeline.",
      },
    ),
  },
  {
    test: (path) => /sponsor\/(spousal-common-law-sponsorship|inland-sponsorship|outland-sponsorship|conjugal-partner-sponsorship|sponsorship-processing-times|sponsorship-eligibility)/.test(path),
    blocks: expansion(
      "Spousal, common-law and partner sponsorship route selection",
      "This page distinguishes in canada spousal sponsorship, spousal sponsorship inland, outside of canada spousal sponsorship, spousal sponsorship outside canada, spousal sponsorship outside of canada and outland spousal sponsorship canada step by step by the applicant’s location, status and relationship category. The right route depends on the real facts and current forms, not on whether one route appears faster in an older search result.",
      "What should a spouse or partner prepare before filing?",
      "Prepare a relationship timeline, marriage or common-law evidence, identity and civil records, sponsor eligibility documents, immigration history, medical or police records and a clear explanation for distance or status changes. Keep spousal sponsorship lawyer, spousal sponsorship lawyers, spousal sponsorship lawyer toronto and spousal sponsorship lawyer fees canada searches focused on authorization, written scope and file-specific advice rather than a guaranteed result.",
      { type: "heading", level: 2, text: "Spousal sponsorship application, checklist and status terms" },
      { type: "paragraph", text: "The phrases spousal sponsorship canada checklist, canada spousal sponsorship checklist, checklist for spousal sponsorship in canada, spousal sponsorship application canada, spousal sponsorship canada application, spousal sponsorship application in canada, canadian spousal sponsorship application, spousal sponsorship cic, cic spousal sponsorship, spousal sponsorship ircc, spousal sponsorship status and spousal sponsorship application status all point to a document-controlled review. Confirm the current forms, fees, principal applicant, sponsor obligations, relationship evidence and the account or official channel used to check status.",
      },
    ),
  },
  {
    test: (path) => path === "/work-and-study/lmia-and-employer-services-overview",
    blocks: expansion(
      "LMIA portal, application and processing-time questions",
      "An LMIA review starts with the employer's genuine labour-market need, recruitment record, business legitimacy, wage, work location and proposed duties. Searchers looking for the lmia online portal, lmia portal, lmia online, lmia processing time or how to apply for LMIA should distinguish the employer application from the worker's later work-permit application. A business legitimacy LMIA or LMIA business legitimacy review should test whether the business is active, able to pay the wage and able to support the offered position. An LMIA fee, processing-time estimate or approved-job listing does not replace the documents that support the actual position.",
      "LMIA-based and LMIA-exempt work permits",
      "An LMIA based work permit, lmia based work permit processing time, LMIA work permit Canada, canada lmia work permit, lmia canada work permit, work permit canada lmia, work permit with lmia, lmia work permit requirements, lmia based work permit requirements, what is lmia based work permit, lmia work permit duration and lmia for work permit question should be matched to the employer, occupation, wage and authorization record. An LMIA exempt work permit may use a different exemption and evidence route, so check what is lmia exempt work permit, lmia exempt jobs, lmia exempt work permit canada, work permit lmia exempt, work permit lmia exemption, work permit without lmia, do i need lmia for work permit, how to apply for lmia exempt work permit and lmia exemption code list before work begins. Also review LMIA work permit extension, lmia exempt work permit extension, lmia work permit extension processing time, how to extend lmia work permit, how to extend work permit without lmia, can i extend my work permit without lmia, extend work permit without lmia, lmia closed work permit, closed work permit without lmia, lmia closed work permit to pr and lmia exempt open work permit separately; a job offer alone does not authorize work.",
      { type: "heading", level: 2, text: "LMIA application, portal and employer evidence" },
      { type: "paragraph", text: "How to apply for LMIA, apply for a LMIA, apply for an LMIA, apply LMIA, applying for LMIA, LMIA apply and apply for LMIA work permit are different searches for an employer application and a worker authorization. Use the lmia employer portal, LMIA employer portal, lmia portal, lmia online portal and lmia online only with the current government process. Approved lmia jobs, approved LMIA jobs, jobs offering lmia, lmia jobs in bc, lmia jobs british columbia, lmia jobs in british columbia, lmia jobs in vancouver, bc lmia jobs, lmia jobs in manitoba, lmia jobs manitoba and manitoba jobs with lmia are job-search terms, not proof that a specific employer or vacancy is genuine. Check business legitimacy, recruitment, wage, duties, location and employer compliance before relying on a pre approved lmia, lmia refusal to process, dual intent lmia, imm5802 offer of employment to a foreign national lmia exempt, T13 LMIA exempt work permit or any posted approval." },
    ),
  },
  {
    test: (path) => path === "/sponsor/spousal-open-work-permit",
    blocks: expansion(
      "SOWP Canada requirements and processing time",
      "A SOWP Canada application should be assessed from the sponsored spouse's relationship category, the principal applicant's status, the current permit or application stage and the work-permit rules in force. People asking what is SOWP in Canada, sowp Canada requirements or sowp Canada processing time should confirm whether the open work permit category is available on their facts, what status must be maintained and which relationship and identity records support the request. An Open Work Permit for Sponsored Spouse is a separate authorization question from the sponsorship application itself.",
      "How to prepare a sponsored-spouse open work permit file",
      "Before relying on a sowp Canada result, match the forms, passport, status records, relationship evidence and any sponsor or principal-applicant documents to the current instructions. Keep the application timeline visible because a sowp Canada processing time estimate can change, and an application in progress does not automatically permit work unless the applicable authorization or maintained-status rules allow it.",
    ),
  },
  {
    test: (path) => path === "/work-and-study/canada-study-permit",
    blocks: expansion(
      "Canada study visa requirements and application planning",
      "A Canada Study Visa search usually means the applicant needs a study permit, and the application should connect the designated learning institution, program, acceptance, funds, study plan and status history. People comparing requirements for study visa in canada, study canada visa requirements, study visa requirement for canada, canada study visa requirements or study visa requirements for canada should use the exact current federal and school instructions. The phrase visa for canada study does not by itself identify the correct document or prove that the proposed study plan is credible.",
      "Study visa processing time, extensions and next steps",
      "Study visa canada processing time, study visa processing time canada, canada study visa processing time, canada study visa process time, study visa processing time for canada, processing time for canada study visa and canada study visa processing time after biometrics are time-sensitive estimates. Before you apply study visa for canada, apply for canada study visa, apply for canada study visa, plan a study visa extension canada, extend study visa canada, extend study visa in canada, how to extend study visa in canada or renew study visa canada, check passport validity, attestation or provincial requirements, tuition and living funds, medical or police requirements and permit conditions. Study Canada visa decisions and later work or permanent-residence options should be planned as separate stages.",
      { type: "heading", level: 2, text: "Study permit, fees, IELTS and study-to-work questions" },
      { type: "paragraph", text: "Canada study visa application, canada study visa fees, canada study visa price, canada study visa cost, study visa for canada fees, study visa for canada price, study visa fees for canada, study visa canada fees, cost of study visa for canada and study visa for canada cost should be verified through the current fee schedule. Questions about canada study visa ielts requirement, canada study visa ielts requirements, ielts requirements for canada study visa, study gap for student visa in canada, minor study visa canada, study visa canada with spouse, gic for canada study visa, check study visa status canada, student visa vs study permit canada, canada study permit visa, canada visa study permit, study permit visa canada and visa study permit canada need the applicant’s school, program, age, status and document facts. A visitor visa to study permit canada or can i study in canada with a visitor visa question is a status and authorization issue, not a shortcut around the study-permit rules.",
      },
    ),
  },
  {
    test: (path) => path === "/visit/super-visa-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined",
    blocks: expansion(
      "Canada Super Visa fees, requirements and applications",
      "What is Canada Super Visa planning depends on the parent or grandparent relationship, host eligibility, length of stay, medical evidence, insurance and financial support. Searchers comparing canada super visa fees, canada super visa fee, super visa fees canada, super visa fee for canada, super visa canada cost or super visa fees in canada should verify the current fee and insurance instructions instead of treating an old amount as permanent. The Super Visa requirements Canada assessment is separate from an ordinary visitor visa application.",
      "Super Visa application and family-visit evidence",
      "A super visa application for canada, super visa application in canada, super visa application canada, super visa canada application, super visa for canada application, apply for super visa canada, apply for super visa to canada, apply super visa canada, applying for super visa canada, applying for super visa in canada and canada super visa apply should explain the family relationship, invitation, accommodation, funding, medical insurance and the plan to respect temporary-residence conditions. Check requirements for Canada Super Visa, super visa requirements canada, super visa canada requirements, canada super visa required documents, super visa canada required documents, documents required for super visa canada, documents for super visa canada, canada super visa documents, super visa canada checklist and canada super visa for parents document checklist against the current official guide, then keep the Canada Super Visa application record consistent with the host’s income and the applicant’s travel history. A fee estimate cannot substitute for complete evidence.",
      { type: "heading", level: 2, text: "Super Visa insurance, income and invitation-letter questions" },
      { type: "paragraph", text: "Canada super visa medical insurance, health insurance for super visa canada, health insurance for super visa in canada, health insurance super visa canada, medical insurance canada super visa, medical insurance for super visa canada, medical insurance for super visa in canada, medical insurance super visa canada, super visa canada health insurance, super visa canada medical insurance, super visa medical insurance canada, canada super visa health insurance, super visa canada health insurance, canada super visa insurance requirements, super visa canada insurance cost, super visa insurance cost canada, canada super visa insurance cost, cheap super visa insurance canada and cheapest super visa insurance canada are coverage questions that should be checked against the current policy and application rules—not chosen only by price. Canada super visa income requirements and super visa canada income requirement should be supported by the host’s current financial records. Canada super visa invitation letter sample, sample invitation letter for canada super visa, sample invitation letter for super visa canada, sample letter of invitation to canada for parents super visa, invitation letter for super visa canada and letter of invitation canada super visa are drafting aids; the actual invitation must match the relationship, visit purpose, accommodation and funding evidence.",
      },
    ),
  },
  {
    test: (path) => path === "/visit/visitor-visa-trv-standalone-page",
    blocks: expansion(
      "Canada visitor visa requirements, fees and insurance",
      "A Canada Visit Visa application should explain the purpose, dates, funding, accommodation, travel history and reason the applicant will comply with the authorized stay. People searching visit visa to canada from dubai, visit visa for canada from spain, visit visa in canada from philippines, visit visa to canada from saudi arabia or visit visa for canada from uae still need the same document logic matched to their own residence and passport history. Canada visit visa insurance, visit visa insurance canada and visit visa canada fee should be checked against the current instructions.",
      "Visitor visa extensions, login questions and work-permit boundaries",
      "How to extend visit visa in canada is different from applying for a new visitor visa, and canada visiting visa validity, canada visit visa validity or canada visiting visa duration depends on the document and the officer’s decision. A canada visit visa login, canada visiting visa login, visit visa canada login or canada visiting visa application form question should be resolved through the correct application account or official channel. A visit visa to work permit canada change is not automatic; work normally requires its own authorization and eligibility assessment.",
      { type: "heading", level: 2, text: "Visitor visa forms, fees, invitations and country-specific searches" },
      { type: "paragraph", text: "Canada visit visa application form, canada visiting visa application form, visit visa application form for canada, visit visa canada application form, visiting visa canada application form, canada visit visa documents required, canada visit visa required documents, canada visit visa documents, canada visiting visa documents, visit visa canada documents, canada visit visa photo requirements, canada visit visa cost, canada visit visa charges, canada visit visa price, visit visa for canada price, canada visit visa processing time, canada visit visa processing times, multiple entry visit visa canada, canada visit visa invitation letter, canada visit visa letter of invitation, canada visiting visa invitation letter, invitation letter for visit visa to canada sample, sample invitation letter visit visa canada, sample letter of invitation for visit visa canada, sample of invitation letter for visit visa to canada and business visit visa canada are answered by matching the purpose, passport, residence, funding, host, travel history and temporary-stay explanation to the current application. The country searches canada visit visa from dubai, canada visit visa requirements from dubai, canada visit visa dubai, visit visa canada from dubai, visit visa for canada from dubai, canada visit visa from uae, canada visit visa uae, visit visa to canada from uae, canada visit visa from saudi arabia, canada visit visa saudi arabia, visit visa canada from saudi arabia, visit visa for canada from saudi arabia, visit visa from saudi arabia to canada, canada visit visa from pakistan, canada visit visa pakistan, visit visa canada pakistan, visit visa for canada from pakistan, visit visa of canada from pakistan, canada visit visa for pakistani, canada visit visa india and visiting visa canada from india still require residence- and passport-specific checks. Visa-exemption questions such as do i need visa to visit canada, do i need a visa to visit canada, do you need visa to visit canada, do you need a visa to visit canada, do us citizens need a visa to visit canada, do mexicans need a visa to visit canada, does a mexican need a visa to visit canada and do australians need a visa to visit canada should be verified from the official eligibility tool." },
    ),
  },
  {
    test: (path) => path === "/immigrate/new-brunswick-pnp" || path === "/immigrate/express-entry",
    blocks: expansion(
      "French-speaking skilled worker and Francophone immigration options",
      "Francophone Immigration Programs and the French Speaking Skilled Worker Stream should be compared by the language test, occupation, work history, province, employer and application stage. People searching francophone immigration program canada, French speaking skilled worker stream, french speaking skilled worker stream draw or express entry french speaking skilled worker stream should check whether the language evidence fits the current category or provincial route. An express entry French-speaking result still requires the underlying federal program eligibility and complete documents.",
      "Ontario and Atlantic French-language pathway questions",
      "An Ontario francophone immigration program, ontario french speaking skilled worker stream or ontario express entry french speaking skilled worker stream may use different provincial criteria from a federal category draw. Compare the best francophone immigration programs by the actual province, intake, job or occupation, language threshold and settlement evidence, including an Ontario francophone immigration nomination program or a BC francophone immigration program where relevant. The phrase francophone immigration Canada streaming program should lead to a current stream check, not a generic promise. The French speaking skilled worker stream points depend on the applicable language evidence and route, and a French speaking skilled worker stream easy result should be treated cautiously: no immigration stream is automatically easy when the documents, intake or settlement facts do not fit.",
    ),
  },
  {
    test: (path) => path === "/assessment/free-canada-immigration-assessment" || path === "/about/about-commonwealth-migration",
    blocks: expansion(
      "How to compare immigration consultants and visa consultation services",
      "People comparing the best immigration consultant in Brampton, best immigration consultants in Brampton, immigration consultant in Brampton, immigration consultants in Brampton or immigration services Brampton should check licence status, service scope, evidence standards, fees and communication before sharing sensitive records. Search phrases such as visa consultation services, immigration consultant Scarborough, immigration consultant Ontario, immigration consultants in Ontario Canada and immigration consultants in Canada describe a search, not a guarantee of quality. A useful review explains which decision the representative can support and which authority controls the result.",
      "Canada immigration consultants, Toronto and Brampton service questions",
      "When people search Canada immigration consultants, Canada immigration consultancy, Canadian immigration consultancy, Canada immigration consultants Toronto, Canada immigration consultants in Toronto or Toronto immigration services, the comparison should remain fact-specific. Ask whether the professional is authorized, whether the written scope covers assessment or representation, how documents and deadlines are managed and how uncertainty is explained. Terms such as top immigration consultants in Canada, best Canada immigration consultants and permanent residency consultant should never replace verification through the regulator and the current official program instructions.",
    ),
  },
];

const ADDITIONAL_EXPANSIONS = [
  {
    test: (path) => path === "/immigrate/express-entry",
    blocks: [
      { type: "heading", level: 2, text: "Express Entry Canada points, province and occupation questions" },
      { type: "paragraph", text: "Express entry in canada requirements and canada express entry canadian experience class questions should be answered from the participating federal program, not from a score alone. Canada calculator express entry, canada point calculator express entry, canada point calculator for express entry, canada points calculator for express entry, express entry canada point calculator, express entry canada points calculation, express entry canada points calculator and express entry for canada point calculator are different ways of asking for a CRS estimate; the inputs still need current language, education, NOC, work and family evidence. Canada cic express entry draw, cic canada express entry draw, express entry canada latest draw and latest draw of express entry canada provide historical context. Canada express entry ontario, canada ontario express entry, express entry canada ontario, new brunswick canada express entry, canada express entry quebec, express entry canada quebec, express entry canada saskatchewan, express entry saskatchewan canada and saskatchewan canada express entry require a province-specific check rather than one national shortcut. Canada immigration by express entry, express entry immigration canada, express entry in canada immigration and immigration express entry canada describe the broader route, while express entry for teachers in canada still depends on the applicant’s occupation, licensing and federal or provincial eligibility.",
      },
    ],
  },
  {
    test: (path) => path === "/immigrate/ontario-pnp-oinp",
    blocks: [
      { type: "heading", level: 2, text: "OINP document, status and entrepreneur-stream searches" },
      { type: "paragraph", text: "Ontario immigration nominee program documents should be organized against the current stream checklist, while an Ontario immigrant nominee program check status question should be answered through the official account or contact channel. The Ontario immigrant nominee program entrepreneur stream guide is a separate business-focused search and should not be mixed with an Express Entry stream. The phrase Ontario ministry of citizenship and immigration provincial nominee program refers to the provincial authority and should lead readers to current Ontario instructions. Older terms such as ontario immigrant nominee program 2017, ontario immigration nominee program 2016, ontario immigration nominee program 2017 and ontario immigrant nominee program blood relatives are not presented as current requirements; manitoba immigration nominee program ontario and sinp saskatchewan immigrant nominee program ontario are province-name mismatches that need correction before an applicant chooses a route.",
      },
    ],
  },
  {
    test: (path) => /sponsor\/(spousal-and-partner-sponsorship-overview|spousal-common-law-sponsorship|inland-sponsorship|outland-sponsorship|conjugal-partner-sponsorship|sponsorship-processing-times|sponsorship-eligibility)/.test(path),
    blocks: [
      { type: "heading", level: 2, text: "Spousal sponsorship guide, forms and inside-Canada timelines" },
      { type: "paragraph", text: "A spousal sponsorship guide should explain the spousal sponsorship program, spousal sponsorship to canada, applying for spousal sponsorship canada and the difference between in canada spousal sponsorship and an outland application. Canada spousal sponsorship forms, canadian spousal sponsorship forms, canada spousal sponsorship application, canadian spousal sponsorship application and spousal sponsorship application status should be checked against the current IRCC package and the correct account. Spousal sponsorship inside canada processing times, in canada spousal sponsorship processing times and inland vs outland spousal sponsorship canada are planning questions, not guarantees. A Canada or Quebec family file may use different instructions, so a Quebec spousal sponsorship processing time should not be copied into a federal estimate. Search phrases such as spousal sponsorship usa need the applicant’s actual destination clarified before a Canadian sponsorship plan is chosen.",
      },
    ],
  },
  {
    test: (path) => path === "/work-and-study/lmia-and-employer-services-overview" || path === "/work-and-study/tfwp-employer-compliance",
    blocks: [
      { type: "heading", level: 2, text: "LMIA processing, work-permit application and employer questions" },
      { type: "paragraph", text: "LMIA work permit processing time, lmia processing time in bc, lmia processing time in ontario, LMIA in Ontario, lmia ontario and lmia in ontario searches should be treated as location- and stream-specific estimates. LMIA meaning in canada, lmia open work permit and open work permit lmia are definition or authorization questions; most LMIA-linked permits are employer-specific unless another rule applies. An LMIA approved jobs or jobs with lmia in bc search does not verify a real vacancy or employer. LMIA exempt work permit processing time, lmia exempt work permit application, how to apply for lmia work permit, lmia work permit application, lmia work permit fee, lmia number on work permit, chances of work permit rejection after lmia, work permit extension without lmia, can lmia work permit be extended and is ielts required for lmia work permit in canada should be answered from the worker’s actual permit, exemption, status and employer record.",
      },
    ],
  },
  {
    test: (path) => path === "/work-and-study/canada-study-permit" || path === "/work-and-study/post-graduation-work-permit-pgwp",
    blocks: [
      { type: "heading", level: 2, text: "Study visa Canada wording, fees and post-study work planning" },
      { type: "paragraph", text: "Canada study visa requirement, requirement for study visa in canada, study visa canada requirements, study visa for canada requirement, canada requirements for study visa, requirement of study visa in canada, requirements for canada study visa, requirements for study visa of canada, study in canada visa requirements, study visa for canada requirements, visa requirements for study in canada and canada immigration study visa requirements all describe a requirement review that must use the school, program, applicant and current federal instructions. How to apply for canada study visa, how to get study visa for canada, how to get study visa in canada, canada study visa from india, canada study visa india, study visa canada from india, study visa for canada from india, how to get study visa for canada from india, canada study visa from nepal, canada study visa requirements for pakistan, canada study visa consultant in lahore, canada study visa processing time in india, canada study visa photo specification, canada study visa band requirement and study visa consultant in canada are location- or applicant-specific questions. Canada study visa work, study and work visa canada, study and work visa in canada, study work visa canada and work study visa canada do not remove permit conditions. Canada post study work visa, post study work visa canada, post study work visa in canada, work visa after study in canada and canada visa for study should be checked as study-to-work or PGWP planning, not as a guaranteed outcome. Canada study visa extension, study visa extension canada processing time and study visa rules for canada require a current status review; uk study visa canada is not a Canadian study-permit category.",
      },
    ],
  },
  {
    test: (path) => path === "/visit/super-visa-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined" || path === "/sponsor/super-visa-for-parents",
    blocks: [
      { type: "heading", level: 2, text: "Super Visa Canada cost, insurance, login and parent-visit planning" },
      { type: "paragraph", text: "Canada super visa cost, fee for super visa canada, super visa canada fee, super visa canada fees, super visa fee canada and super visa fees for canada should be checked using the current fee schedule. What is super visa canada, what is super visa for canada and what is super visa in canada are definition questions; the route is for eligible family visits and has its own financial, medical and insurance evidence. Super visa application from canada, super visa from canada, can i apply for super visa inside canada, super visa canada login, how to apply for canada super visa, how to apply super visa in canada, how to apply for super visa for parents in canada, canada super visa checklist, canada grandparent super visa, super visa grandparents canada, super visa canada processing time india, super visa processing time in canada, super visa canada timeline, super visa timeline, super visa stay in canada, super visa conditions and super visa canada visa should be matched to the applicant’s location, host and status. Assurance super visa canada, destination canada super visa insurance, canada life super visa insurance and super visa travel insurance canada are insurance searches that still need policy and coverage verification. Canada immigration super visa, cic canada super visa, super visa canada cic, immigration canada super visa, super visa immigration canada, super visa canada visa forum and super visa pour le canada should not replace the current IRCC instructions or the family’s actual evidence.",
      },
    ],
  },
  {
    test: (path) => path === "/visit/visitor-visa-trv-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined",
    blocks: [
      { type: "heading", level: 2, text: "Canada visit visa online, spouse and parents’ visit questions" },
      { type: "paragraph", text: "Visit visa canada apply online, visit visa canada from ksa, canada visit visa from malaysia, visit visa to canada from china, business visit visa for canada, canada visit visa for spouse, spouse visit visa canada, visit visa for spouse canada, visit visa for parents canada, visit visa for parents to canada and visiting visa for parents to canada should be organized by the visitor’s purpose, passport, residence, host, funds and temporary-stay explanation. Canada visiting visa cost, canada visit visa processing time and the current form or account are separate from the question of whether a visitor can work or study. Do i need visa to visit canada from uk, does mexican need visa to visit canada, do i need a visa to visit canada from uk and canada visit visa requirements from a country of residence should be checked through the official eligibility tool. A Canadian visitor visa page does not answer do i need a visa to visit japan from canada, apply for us visit visa from canada, how to apply for us visit visa from canada, how to apply for us visiting visa from canada, us visa visit canada, usa visit visa canada, usa visit visa from canada, visiting canada with us visa, india visit visa from canada or indian visit visa from canada because those are different destinations or document questions.",
      },
    ],
  },
  {
    test: (path) => /about\/(about-commonwealth-migration|immigration-office-brampton-ontario|canada-immigration-consulting-process)/.test(path) || path === "/assessment/free-canada-immigration-assessment",
    blocks: [
      { type: "heading", level: 2, text: "Brampton immigration consultant, agent and permanent-residency service searches" },
      { type: "paragraph", text: "People searching pr immigration consultants, immigration agent, immi agent, immigration consultancy services, permanent residency agent, immigration brampton, best immigration consultant brampton, best immigration consultants brampton, cic immigration brampton, immigration agents in brampton, immigration in brampton, immigration lawyer in brampton, immigration lawyer in brampton ontario, immigration lawyers brampton, canada work permit consultant, work permit consultants, travel visa services, canada immigration consultants in canada, immigration consultant in canada, canada migration agent, canada immigration experts, canada visa consultants, immigration consultants in toronto ontario, immigration agency toronto, immigration consultant mississauga, best immigration consultant in mississauga, immigration services mississauga, immigration consultant abbotsford, immigration consultant regina and best immigration consultant in winnipeg should compare authorization, service scope, fees, document handling and communication. The page can explain a consultation or assessment, but phrases such as best immigration consultant in canada, best canadian immigration consultants, best immigration consultants in canada, top canada immigration consultants, top immigration consultant in canada, top immigration consultants in brampton, top 10 immigration consultants in canada, consultant immigration canada, consultation immigration canada, permanent resident consultant, canada pr consultant, immigration consultant for canada, visa consultants, free immigration consultant brampton and immigration lawyer free consultation brampton are search intent—not evidence of a guaranteed result. Competitor review queries are not treated as endorsements or factual claims about another business.",
      },
    ],
  },
  {
    test: (path) => path === "/immigrate/express-entry",
    blocks: [
      { type: "heading", level: 2, text: "Express Entry application wording and CRS points" },
      { type: "paragraph", text: "How to apply express entry in canada is answered by the same sequence described here: confirm a participating program, prepare the profile evidence, enter the pool, monitor invitations and submit a complete application only after an invitation. Points in express entry canada and express entry points canada are estimates until the underlying language, education, work, NOC, family and nomination records are verified." },
    ],
  },
  {
    test: (path) => /sponsor\/(spousal-and-partner-sponsorship-overview|spousal-common-law-sponsorship|inland-sponsorship|outland-sponsorship|conjugal-partner-sponsorship|sponsorship-processing-times|sponsorship-eligibility)/.test(path),
    blocks: [
      { type: "heading", level: 2, text: "Spousal sponsorship forms and country-specific evidence" },
      { type: "paragraph", text: "CIC Canada spousal sponsorship, canada spousal sponsorship forms and country specific requirements spousal sponsorship searches should be mapped to the current IRCC forms, relationship category, sponsor obligations, applicant location, civil records, translations and admissibility evidence. The phrase cic canada spousal sponsorship may refer to older branding, while the current source and application package control. Forum and Reddit timelines can reveal questions other applicants ask, but they are not a reliable substitute for the official checklist or a file-specific processing estimate." },
    ],
  },
  {
    test: (path) => path === "/work-and-study/lmia-and-employer-services-overview" || path === "/work-and-study/tfwp-employer-compliance",
    blocks: [
      { type: "heading", level: 2, text: "LMIA job-search and work-permit verification" },
      { type: "paragraph", text: "A search for lmia jobs bc should be treated as a request to verify a genuine British Columbia vacancy, employer, wage, duties and LMIA or exemption record; this page does not promise or publish an approved job list. The worker should also check the LMIA number, work-permit application, processing estimate, fee, extension and authorization conditions before paying a recruiter or starting work." },
    ],
  },
  {
    test: (path) => path === "/work-and-study/canada-study-permit" || path === "/work-and-study/post-graduation-work-permit-pgwp",
    blocks: [
      { type: "heading", level: 2, text: "Study visa Canada definitions, refusal and consultant questions" },
      { type: "paragraph", text: "Study visas for canada, study visas canada, studying in canada visa, visa study canada and canada for study visa are broad searches that should be narrowed to a study permit, school, program and applicant profile. Can visitor visa study in canada depends on the visitor’s status, study length and authorization rules; it is not a general workaround. Study visa for canada processing time changes with the application and location. A study visa refusal canada review should read the refusal reasons and complete record before reapplying. Study visa consultants in canada can help organize a file, but authorization, written scope and the current IRCC guide still need verification." },
    ],
  },
  {
    test: (path) => path === "/visit/super-visa-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined" || path === "/sponsor/super-visa-for-parents",
    blocks: [
      { type: "heading", level: 2, text: "Super Visa Canada conditions, fee and timeline checks" },
      { type: "paragraph", text: "Super visa health insurance canada and super visa canada conditions should be checked against the current insurance policy, host evidence and temporary-residence instructions. Cost of super visa canada, super visa canada application fee and canada super visa application fee are fee questions, while canada super visa processing time india, canada super visa timeline and super visa canada timeline are estimates that depend on the application and location. Keep the fee, insurance, relationship, income, medical and travel records together instead of relying on a sample or an old forum answer." },
    ],
  },
  {
    test: (path) => path === "/visit/visitor-visa-trv-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined",
    blocks: [
      { type: "heading", level: 2, text: "Visitor visa Dubai, KSA, UAE and family-letter wording" },
      { type: "paragraph", text: "Visit visa canada dubai, visit visa in canada from dubai, canada visit visa from ksa, visit visa canada from uae and the French-language phrase modele lettre d'invitation pour visa visite familiale canada all require the same core review: purpose, dates, passport and residence, funding, host, invitation, travel history, ties and intention to leave. The exact form and country-of-residence instructions should be checked before applying online." },
    ],
  },
  {
    test: (path) => /about\/(about-commonwealth-migration|immigration-office-brampton-ontario|canada-immigration-consulting-process)/.test(path) || path === "/assessment/free-canada-immigration-assessment",
    blocks: [
      { type: "heading", level: 2, text: "Consultant or lawyer: choosing the right Canadian immigration professional" },
      { type: "paragraph", text: "Someone searching best immigration lawyer brampton or best immigration consultants in toronto should first identify whether the matter needs a lawyer, an authorized immigration consultant or another regulated professional. Compare authorization, experience with the exact pathway, written service scope, fees, privacy and deadline management. Review searches for named businesses are not treated as evidence about those businesses; verify any professional through the applicable regulator." },
    ],
  },
];

export function getKeywordPageExpansionBlocks(page) {
  const path = String(page?.path || "").split("?")[0].replace(/\/$/, "") || "/";
  return [...PAGE_EXPANSIONS, ...ADDITIONAL_EXPANSIONS]
    .filter((entry) => entry.test(path))
    .flatMap((entry) => entry.blocks);
}

export default getKeywordPageExpansionBlocks;
