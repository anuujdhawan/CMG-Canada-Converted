const option = (value, label, points = 0, extra = {}) => ({ value, label, points, ...extra });
const choice = (key, label, options, config = {}) => ({ key, label, kind: "choice", required: true, options, ...config });

const sinpQuestions = () => [
  choice("education", "What is your highest completed education or training?", [option("masters", "Master’s or doctorate", 23), option("bachelor", "Bachelor’s or at least a three-year degree", 20), option("trade", "Saskatchewan-equivalent journeyperson trade certification", 20), option("twoYear", "Two-year post-secondary credential", 15), option("oneYear", "Certificate or at least two semesters", 12)], { section: "Labour market", sectionMax: 80, documents: ["Credential and transcript", "ECA for foreign education"] }),
  choice("recentWork", "How many years of related work experience did you gain in the five years before applying?", [option("0", "None"), option("1", "1 year", 2), option("2", "2 years", 4), option("3", "3 years", 6), option("4", "4 years", 8), option("5", "5 years", 10)], { section: "Labour market", sectionMax: 80 }),
  choice("olderWork", "How much related experience did you gain six to ten years before applying?", [option("0", "None or less than one year"), option("2", "2 years", 2), option("3", "3 years", 3), option("4", "4 years", 4), option("5", "5 years", 5)], { section: "Labour market", sectionMax: 80 }),
  choice("firstLanguage", "What is your first official language level across all four abilities?", [option("none", "Below CLB/NCLC 4 or no valid test"), option("4", "CLB/NCLC 4", 12), option("5", "CLB/NCLC 5", 14), option("6", "CLB/NCLC 6", 16), option("7", "CLB/NCLC 7", 18), option("8", "CLB/NCLC 8 or higher", 20)], { section: "Labour market", sectionMax: 80, documents: ["Valid language test report"] }),
  choice("secondLanguage", "What is your second official language level across all four abilities?", [option("none", "Not applicable or below level 4"), option("4", "CLB/NCLC 4", 2), option("5", "CLB/NCLC 5", 4), option("6", "CLB/NCLC 6", 6), option("7", "CLB/NCLC 7", 8), option("8", "CLB/NCLC 8 or higher", 10)], { section: "Labour market", sectionMax: 80 }),
  choice("age", "How old are you when submitting the application?", [option("under18", "Under 18"), option("18to21", "18–21", 8), option("22to34", "22–34", 12), option("35to45", "35–45", 10), option("46to50", "46–50", 8), option("over50", "Over 50")], { section: "Labour market", sectionMax: 80 }),
  choice("family", "Do you or your accompanying spouse have an eligible close family member living in Saskatchewan?", [option("no", "No"), option("yes", "Yes", 20)], { section: "Saskatchewan connection", sectionMax: 30, documents: ["Family relationship and relative residence evidence"] }),
  choice("skWork", "Do you have at least 12 months of work in Saskatchewan in the past five years on a valid work permit?", [option("no", "No"), option("yes", "Yes", 5)], { section: "Saskatchewan connection", sectionMax: 30 }),
  choice("skStudy", "Have you completed at least one full-time academic year at a recognized Saskatchewan post-secondary institution?", [option("no", "No"), option("yes", "Yes", 5)], { section: "Saskatchewan connection", sectionMax: 30 }),
];

export const SINP_OCCUPATIONS_IN_DEMAND_GRID = {
  key: "occupations-in-demand",
  label: "International Skilled Worker — Occupations In-Demand",
  mode: "official-grid",
  guideVersion: "SINP International Skilled Worker Points Grid — current published grid",
  sourceUrl: "https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/international-skilled-worker-occupations-in-demand",
  scoreName: "SINP points",
  maxScore: 110,
  minimumScore: 60,
  focus: "This pathway uses the published 110-point grid and requires at least 60 points. The occupation list, one-year related work requirement and other eligibility criteria are separate checks.",
  questions: [
    ...sinpQuestions(),
    choice("eligibleOccupation", "Is your intended occupation eligible under the current SINP Occupations In-Demand restrictions?", [option("yes", "Yes, I checked the current restrictions"), option("no", "No"), option("unknown", "I need to check", 0, { unknown: true })], { documents: ["Current occupation eligibility evidence"] }),
    choice("requiredExperience", "Do you have at least one year of recent paid work experience related to your field of education?", [option("yes", "Yes"), option("no", "No"), option("unknown", "I need to check my dates and duties", 0, { unknown: true })], { documents: ["Work reference letters and pay evidence"] }),
  ],
  rules: [
    { key: "firstLanguage", values: ["none"], message: "The pathway requires at least CLB 4 in each language ability.", hard: true },
    { key: "eligibleOccupation", values: ["no"], message: "The selected occupation must meet the current SINP Occupations In-Demand rules.", hard: true },
    { key: "requiredExperience", values: ["no"], message: "The pathway requires at least one year of recent paid work related to your education.", hard: true },
  ],
  documents: ["Language results", "ECA or Canadian education", "Occupation and work evidence", "Settlement funds"],
  improvements: ["Check the current occupation restrictions", "Meet the 60-point threshold", "Document qualifying Saskatchewan connections"],
  tieBreaker: "The minimum score is an eligibility threshold, not an invitation guarantee. Use the latest official selection notice.",
};

export const AAIP_WORKER_GRID = {
  key: "worker",
  label: "AAIP Worker Stream — Expression of Interest",
  mode: "official-grid",
  guideVersion: "AAIP Worker EOI Points Grid — September 28, 2026",
  sourceUrl: "https://www.alberta.ca/system/files/im-worker-stream-expression-of-interest-points-grid.pdf",
  scoreName: "Worker EOI points",
  maxScore: 100,
  minimumScore: null,
  focus: "Calculate the official 100-point Worker EOI grid. Alberta also selects based on labour-market needs, sector priorities, available nominations and application volumes; there is no minimum score or invitation guarantee.",
  questions: [
    choice("education", "What is your highest completed education?", [option("secondary", "Secondary school or lower"), option("diploma", "Diploma or certificate", 4), option("bachelor", "Bachelor’s degree or trade certificate/diploma", 7), option("masters", "Master’s degree", 10), option("doctorate", "Doctorate", 12)], { section: "Human capital · education", sectionMax: 22, documents: ["Credential and transcript", "ECA if applicable"] }),
    choice("educationLocation", "Where did you complete your highest education?", [option("outside", "Outside Canada"), option("otherCanada", "In another Canadian province or territory", 6), option("alberta", "In Alberta", 10)], { section: "Human capital · education", sectionMax: 22 }),
    choice("language", "What is your highest verified CLB/NCLC level in English or French, using the lower of your four abilities?", [option("low", "English below CLB 4 / French below NCLC 4, or no test"), option("en4", "English CLB 4", 5), option("fr4", "French NCLC 4", 3), option("en5", "English CLB 5", 8), option("fr5", "French NCLC 5", 5), option("en6", "English CLB 6 or higher", 10), option("fr6", "French NCLC 6 or higher", 8)], { section: "Human capital · language", sectionMax: 13, documents: ["Valid approved language results"] }),
    choice("bilingual", "Do you have CLB/NCLC 4 or higher in all four abilities in both English and French?", [option("no", "No"), option("yes", "Yes", 3)], { section: "Human capital · language", sectionMax: 13 }),
    choice("totalWork", "How much total paid work experience do you have in Canada and abroad?", [option("under6", "Less than 6 months", 3), option("6to11", "6–11 months", 7), option("12plus", "12 months or more", 11)], { section: "Human capital · work experience", sectionMax: 21 }),
    choice("canadianWork", "Where do you have at least 6 months of Canadian work experience?", [option("none", "No qualifying Canadian experience"), option("other", "In another province or territory", 6), option("alberta", "In Alberta", 10)], { section: "Human capital · work experience", sectionMax: 21 }),
    choice("age", "How old are you?", [option("18to20", "18–20", 3), option("21to34", "21–34", 5), option("35to49", "35–49", 4), option("50plus", "50 or older", 3)], { section: "Human capital · age", sectionMax: 5 }),
    choice("family", "Do you have an eligible parent, child or sibling who is a Canadian citizen or permanent resident living in Alberta?", [option("no", "No"), option("yes", "Yes", 8)], { section: "Human capital · Alberta family connection", sectionMax: 8, documents: ["Relationship and family member status/residence evidence"] }),
    choice("permanentOffer", "Do you have a permanent, full-time Alberta job offer?", [option("no", "No"), option("yes", "Yes", 10)], { section: "Economic factors · job offer", sectionMax: 16, documents: ["Alberta job offer and employer documents"] }),
    choice("priorityOffer", "Does your Alberta job offer qualify for the additional Rural Renewal, Tourism and Hospitality, or Law Enforcement points?", [option("no", "No"), option("yes", "Yes, with the required endorsement or employer qualification", 6)], { section: "Economic factors · job offer", sectionMax: 16, help: "The points grid requires the specific designated-community endorsement or eligible employer membership.", documents: ["Endorsement letter or required sector/employer proof"] }),
    choice("offerLocation", "Where is your Alberta job offer located?", [option("none", "No Alberta job offer"), option("calgaryEdmonton", "Calgary or Edmonton metropolitan area"), option("rural", "Designated Rural Renewal community", 5), option("other", "Another Alberta community outside those metro areas", 5)], { section: "Economic factors · job location", sectionMax: 5 }),
    choice("regulatedOccupation", "Is your offered occupation regulated in Alberta, and do you hold the required Alberta licence or certificate?", [option("no", "No"), option("yes", "Yes", 10)], { section: "Economic factors · regulated occupation", sectionMax: 10, documents: ["Alberta regulator licence or recognized trade certificate"] }),
  ],
  rules: [],
  documents: ["Valid language results", "Education/ECA evidence", "Employer/job offer documents", "Family evidence for claimed points", "Alberta licence or trade certificate if claimed"],
  improvements: ["Confirm eligibility for a specific AAIP worker pathway", "Keep proof for each grid factor", "Track current sector and regional selection priorities"],
};

const manitobaChoice = (key, label, options, section, sectionMax, config = {}) => choice(key, label, options, { section, sectionMax, ...config });

export const MPNP_EOI_GRID = {
  key: "skilled-worker",
  label: "Skilled Worker / International Education EOI",
  mode: "official-grid",
  guideVersion: "MPNP Expression of Interest grid — current published criteria",
  sourceUrl: "https://immigratemanitoba.com/mpnp/apply/eoi/",
  scoreName: "EOI ranking points",
  maxScore: 1000,
  minimumScore: null,
  focus: "This is the 1,000-point EOI ranking grid for the Skilled Worker and International Education streams. Adaptability is capped at 500 points and risk factors can subtract points. It is separate from the MPNP’s 60/100 assessment grid for some skilled-worker eligibility routes.",
  questions: [
    ...["Speaking", "Listening", "Reading", "Writing"].map((ability) => manitobaChoice("language" + ability, "First official language — " + ability, [option("0", "CLB 3 or lower"), option("4", "CLB 4", 12), option("5", "CLB 5", 17), option("6", "CLB 6", 20), option("7", "CLB 7", 22), option("8plus", "CLB 8 or higher", 25)], "Language proficiency", 125, { documents: ["Valid test results for each claimed ability"] })),
    manitobaChoice("secondLanguage", "Do you have CLB 5 or higher overall in Canada’s second official language, supported by a valid test?", [option("no", "No"), option("yes", "Yes", 25)], "Language proficiency", 125),
    manitobaChoice("age", "How old will you be when you submit your EOI?", [option("under18", "Under 18"), option("18", "18", 20), option("19", "19", 30), option("20", "20", 40), option("21to45", "21–45", 75), option("46", "46", 40), option("47", "47", 30), option("48", "48", 20), option("49", "49", 10), option("50plus", "50 or older")], "Age", 75),
    manitobaChoice("workExperience", "How many completed full years of eligible work experience do you have in the last five years?", [option("under1", "Less than 1 year"), option("1", "1 year", 40), option("2", "2 years", 50), option("3", "3 years", 60), option("4plus", "4 years or more", 75)], "Work experience", 175, { help: "Count full-time periods of at least six months. Do not round up partial years." }),
    manitobaChoice("licensing", "Are you fully recognized by the Manitoba licensing body for your regulated profession or trade?", [option("no", "No"), option("yes", "Yes, all Manitoba licensing/certification steps are complete", 100)], "Work experience", 175, { documents: ["Manitoba regulatory-body recognition"] }),
    manitobaChoice("education", "What is your highest completed education?", [option("none", "No formal post-secondary education"), option("oneYear", "One-year post-secondary program", 70), option("trade", "Trade certificate", 70), option("twoYear", "One two-year post-secondary program", 100), option("threeYear", "One post-secondary program of three years or more", 110), option("twoPrograms", "Two post-secondary programs of at least two years each", 115), option("masters", "Master’s degree or doctorate", 125)], "Education", 125, { documents: ["Credential and transcript", "ECA if applicable"] }),
    manitobaChoice("connection", "Which is your strongest Manitoba connection? Select the highest one that applies.", [option("none", "No qualifying connection"), option("friend", "Close friend or distant relative in Manitoba", 50), option("oneYearStudy", "Completed a one-year post-secondary program in Manitoba", 50), option("work", "At least 6 months of authorized Manitoba work", 100), option("twoYearStudy", "Completed a post-secondary program of at least 2 years in Manitoba", 100), option("closeFamily", "Close relative in Manitoba", 200)], "Adaptability", 500, { documents: ["Manitoba connection evidence"] }),
    manitobaChoice("demand", "Do you have qualifying ongoing Manitoba employment or an invitation under a Strategic Initiative?", [option("none", "Neither"), option("employment", "6+ months with a long-term offer from the same Manitoba employer", 500), option("invitation", "Invitation to Apply under a Strategic Initiative", 500)], "Adaptability", 500),
    manitobaChoice("regional", "Do you have the required documented connection and plan to settle in a Manitoba community outside Winnipeg?", [option("no", "No"), option("yes", "Yes", 50)], "Adaptability", 500, { help: "Regional points are supplemental and must meet the current MPNP rules for a qualifying Manitoba connection." }),
    manitobaChoice("otherProvinceWork", "Have you or your spouse had work experience in another Canadian province?", [option("no", "No"), option("yes", "Yes", -100)], "Risk assessment", 0),
    manitobaChoice("otherProvinceStudy", "Have you or your spouse studied in another Canadian province?", [option("no", "No"), option("yes", "Yes", -100)], "Risk assessment", 0),
    manitobaChoice("otherProvinceFamily", "Do you or your spouse have a close relative in another Canadian province?", [option("no", "No"), option("yes", "Yes")], "Risk assessment", 0),
    manitobaChoice("otherProvinceApplication", "Have you or your spouse made a previous immigration application to another province?", [option("no", "No"), option("yes", "Yes")], "Risk assessment", 0),
  ],
  rules: [{ key: "connection", values: ["none"], message: "The MPNP EOI system requires a qualifying Manitoba connection for the selected pathways.", hard: true }],
  documents: ["Language results", "Education and ECA evidence", "Employment letters", "Manitoba connection documents", "Regional settlement plan, if claimed"],
  improvements: ["Use completed work years without rounding up", "Document the strongest Manitoba connection", "Check the EOI profile against the current MPNP portal"],
};

const peiLanguageOptions = (includeEmployerForm = false) => [
  option("under4", "Below CLB/NCLC 4 or no test"),
  option("4", "CLB/NCLC 4"),
  option("5", "CLB/NCLC 5", 5),
  option("6", "CLB/NCLC 6", 10),
  option("7", "CLB/NCLC 7", 15),
  option("8", "CLB/NCLC 8", 17),
  option("9", "CLB/NCLC 9 or 10", 20),
  ...(includeEmployerForm ? [option("employerForm", "Skilled Worker: employer signed PEIW-02 confirms language for the job", 20)] : []),
];

function peiAdaptabilityQuestions({ max, includeProperty, includeChildSchool }) {
  const questions = [
    ["closeFamily", "Do you have a close family member who is a Canadian citizen or permanent resident living in PEI for 12+ consecutive months?"],
    ["spouseLanguage", "Does your spouse/partner or dependent child have CLB/NCLC 6+ in English or French?"],
    ...(includeProperty ? [["property", "Have you owned residential property in PEI for 12+ consecutive months?"]] : []),
    ["peiGraduate", "Have you graduated from a recognized PEI post-secondary institution?"],
    ["spouseExperience", "Does your spouse/partner have at least 3 years of work experience in the last 5 years?"],
    ...(includeChildSchool ? [["childSchool", "Has a dependent child been enrolled in a PEI educational institution for 6+ continuous months?"]] : []),
  ];
  return questions.map(([key, label]) => choice(key, label, [option("no", "No"), option("yes", "Yes", 5)], { section: "Adaptability", sectionMax: max, documents: ["Evidence for each claimed adaptability factor"] }));
}

function peiWorkforceStream({ key, label, category, educationScores, ageScores, language = true, employerForm = false, work = true, employmentMax, includeProperty = true, includeChildSchool = false, employmentType = "standard" }) {
  const questions = [
    choice("age", "How old are you?", [option("18to24", "18–24", ageScores[0]), option("25to44", "25–44", ageScores[1]), option("45to49", "45–49", ageScores[2]), option("50plus", "Over 49")], { section: "Age", sectionMax: ageScores[1] }),
  ];
  if (language) {
    questions.push(
      choice("englishLanguage", "What is your English level, using your lowest ability in the valid test?", peiLanguageOptions(employerForm), { section: "Language", sectionMax: 20, help: "PEI uses the lowest result across the four abilities. Current test results must meet validity rules." }),
      choice("frenchLanguage", "What is your French level, using your lowest ability in the valid test?", peiLanguageOptions(false), { section: "Language", sectionMax: 20 }),
    );
  }
  questions.push(choice("education", "What is your highest completed education?", [
    option("secondary", "Secondary school", educationScores.secondary || 0),
    option("diploma", "Post-secondary diploma of at least one year", educationScores.diploma),
    option("bachelor", "Bachelor’s degree with at least three years of study", educationScores.bachelor),
    option("graduate", "Master’s degree or PhD", educationScores.graduate),
  ], { section: "Education", sectionMax: educationScores.max, documents: ["Credential and transcript", "ECA if applicable"] }));
  if (work) {
    questions.push(choice("workExperience", "How much full-time work experience do you have?", [option("upto2", "Up to 2 years"), option("2to4", "More than 2 to under 4 years", 10), option("4to6", "4–6 years", 15), option("over6", "More than 6 years", 20)], { section: "Work experience", sectionMax: 20, help: "Use completed full-time periods and check the current PEI guide where a boundary falls between categories." }));
  }
  if (employmentType === "standard") {
    questions.push(
      choice("workingInPei", "Are you working in a permanent PEI position on a valid work permit?", [option("no", "No"), option("yes", "Yes", 5)], { section: "Employment", sectionMax: employmentMax }),
      choice("offerRelatedEducation", "Do you have a PEI job offer related to your education?", [option("no", "No"), option("yes", "Yes", 10)], { section: "Employment", sectionMax: employmentMax }),
      choice("regulatedQualification", "Has your foreign qualification been verified by the PEI regulated body for your profession?", [option("no", "No"), option("yes", "Yes, this is separate from an ECA", 5)], { section: "Employment", sectionMax: employmentMax }),
      choice("oneYearPeiWork", "Do you have at least 1 year of continuous full-time work experience in PEI?", [option("no", "No"), option("yes", "Yes", 5)], { section: "Employment", sectionMax: employmentMax }),
    );
  } else {
    questions.push(
      choice("offerRelatedExperience", "Do you have a PEI job offer related to your work experience?", [option("no", "No"), option("yes", "Yes", employmentType === "intermediate" ? 5 : 10)], { section: "Employment", sectionMax: employmentMax }),
      ...(employmentType === "intermediate" ? [choice("lmiaWork", "Was your previous work experience gained through an LMIA?", [option("no", "No"), option("yes", "Yes", 5)], { section: "Employment", sectionMax: employmentMax })] : []),
      choice("regulatedQualification", "Has your foreign qualification been verified by the PEI regulated body for your profession?", [option("no", "No"), option("yes", "Yes, this is separate from an ECA", 5)], { section: "Employment", sectionMax: employmentMax }),
    );
  }
  questions.push(...peiAdaptabilityQuestions({ max: category === "graduate" ? 20 : 15, includeProperty, includeChildSchool }));
  return {
    key, label, mode: "official-grid", guideVersion: "PEI Workforce Application Guide — Appendix A",
    sourceUrl: "https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf",
    scoreName: "PEI EOI points", maxScore: 100, minimumScore: null,
    focus: "This is the published 100-point PEI Workforce EOI grid for the selected category. A score does not establish eligibility or guarantee that PEI will invite you to apply.",
    questions, rules: [],
    documents: ["Valid language results or the permitted employer form", "Education documents/ECA", "PEI job offer and work permit evidence", "Proof for each adaptability factor"],
    improvements: ["Verify category-specific eligibility before submitting an EOI", "Keep evidence for each claimed point", "Check PEI invitation priorities and intake status"],
  };
}

const peiExpressEntryQuestions = (withOffer) => {
  const employmentMax = withOffer ? 15 : 10;
  return [
    choice("age", "How old are you?", [option("18to24", "18–24", 7), option("25to29", "25–29", 20), option("30to44", "30–44", 15), option("45to49", "45–49", 10), option("50plus", "Over 49")], { section: "Age", sectionMax: 20 }),
    choice("language", "What is your lowest valid language test level across all four abilities?", [option("under7", "Below CLB/NCLC 7"), option("7", "CLB/NCLC 7", 10), option("8", "CLB/NCLC 8", 15), option("9plus", "CLB/NCLC 9 or 10", 20)], { section: "Language", sectionMax: 20, documents: ["Valid approved language results"] }),
    choice("education", "What is your highest completed education?", [option("secondary", "Secondary school"), option("trade", "Post-secondary trade diploma of at least two years", 10), option("bachelor", "Bachelor’s degree with at least three years of study", 12), option("graduate", "Master’s degree or PhD", 15)], { section: "Education", sectionMax: 15, documents: ["Credential and transcript", "ECA if applicable"] }),
    choice("workExperience", "How much eligible work experience do you have?", [option("under1", "Less than 1 year"), option("1to2", "1–2 years", 5), option("2to4", "More than 2 to under 4 years", 10), option("4to6", "4–6 years", 15), option("over6", "More than 6 years", withOffer ? 15 : 20)], { section: "Work experience", sectionMax: withOffer ? 15 : 20 }),
    ...(withOffer ? [
      choice("workingInPei", "Are you working in PEI on a valid work permit?", [option("no", "No"), option("yes", "Yes", 5)], { section: "Employment", sectionMax: employmentMax }),
      choice("offerRelatedEducation", "Is your PEI job offer related to your education?", [option("no", "No"), option("yes", "Yes", 5)], { section: "Employment", sectionMax: employmentMax }),
    ] : []),
    choice("regulatedQualification", "Has your foreign qualification been verified by the PEI regulated body for your profession?", [option("no", "No"), option("yes", "Yes, this is separate from an ECA", 5)], { section: "Employment", sectionMax: employmentMax }),
    choice("oneYearPeiWork", "Do you have at least 1 year of continuous full-time work experience in PEI?", [option("no", "No"), option("yes", "Yes", 5)], { section: "Employment", sectionMax: employmentMax }),
    ...[
      ["closeFamily", "Do you have a close family member who is a Canadian citizen or permanent resident living in PEI for 12+ consecutive months?"],
      ["spouseLanguage", "Does your spouse/partner or dependent child have CLB/NCLC 6+ in English or French?"],
      ["property", "Have you owned residential property in PEI for 12+ consecutive months?"],
      ["peiGraduate", "Have you graduated from a recognized PEI post-secondary institution?"],
      ["spouseExperience", "Does your spouse/partner have at least 3 years of work experience in the last 5 years?"],
    ].map(([key, label]) => choice(key, label, [option("no", "No"), option("yes", "Yes", 5)], { section: "Adaptability", sectionMax: 15, documents: ["Evidence for each claimed adaptability factor"] })),
  ];
};

export const PEI_WORKFORCE_GRIDS = [
  peiWorkforceStream({ key: "skilled-worker", label: "Workforce — Skilled Worker", category: "skilled", ageScores: [7, 15, 10], educationScores: { secondary: 0, diploma: 10, bachelor: 12, graduate: 15, max: 15 }, employerForm: true, employmentMax: 15, includeProperty: true, includeChildSchool: true }),
  peiWorkforceStream({ key: "critical-worker", label: "Workforce — Critical Worker", category: "critical", ageScores: [7, 15, 10], educationScores: { secondary: 10, diploma: 10, bachelor: 12, graduate: 15, max: 15 }, employmentMax: 15, includeProperty: true, includeChildSchool: true }),
  peiWorkforceStream({ key: "international-graduate", label: "Workforce — International Graduate", category: "graduate", ageScores: [10, 25, 15], educationScores: { secondary: 0, diploma: 20, bachelor: 20, graduate: 35, max: 35 }, language: false, work: false, employmentMax: 20, includeProperty: true }),
  peiWorkforceStream({ key: "intermediate-experience", label: "Workforce — Intermediate Experience", category: "intermediate", ageScores: [7, 15, 10], educationScores: { secondary: 15, diploma: 15, bachelor: 15, graduate: 15, max: 15 }, employmentMax: 20, includeProperty: false, employmentType: "intermediate" }),
  peiWorkforceStream({ key: "occupations-in-demand", label: "Workforce — Occupations in Demand", category: "demand", ageScores: [7, 15, 10], educationScores: { secondary: 15, diploma: 15, bachelor: 15, graduate: 15, max: 15 }, employmentMax: 15, includeProperty: false, employmentType: "demand" }),
  {
    key: "express-entry-offer",
    label: "PEI Express Entry — with a job offer",
    mode: "official-grid",
    guideVersion: "PEI Workforce Application Guide — Appendix B",
    sourceUrl: "https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf",
    scoreName: "PEI EOI points", maxScore: 100, minimumScore: null,
    focus: "This is the published 100-point PEI Express Entry EOI grid for candidates with a PEI job offer. A score does not establish federal Express Entry eligibility or guarantee a PEI invitation.",
    questions: peiExpressEntryQuestions(true), rules: [],
    documents: ["Valid Express Entry profile and language results", "PEI job offer and work evidence", "Education/ECA", "Proof for each adaptability factor"],
    improvements: ["Verify both PEI and federal Express Entry requirements", "Keep evidence for each claimed point", "Check current PEI invitation priorities"],
  },
  {
    key: "express-entry-no-offer",
    label: "PEI Express Entry — without a job offer",
    mode: "official-grid",
    guideVersion: "PEI Workforce Application Guide — Appendix B",
    sourceUrl: "https://www.princeedwardisland.ca/sites/default/files/publications/pei_workforce_application_guide.pdf",
    scoreName: "PEI EOI points", maxScore: 100, minimumScore: null,
    focus: "This is the published 100-point PEI Express Entry EOI grid for candidates without a PEI job offer. A score does not establish federal Express Entry eligibility or guarantee a PEI invitation.",
    questions: peiExpressEntryQuestions(false), rules: [],
    documents: ["Valid Express Entry profile and language results", "Education/ECA", "Proof for each adaptability factor"],
    improvements: ["Verify both PEI and federal Express Entry requirements", "Keep evidence for each claimed point", "Check current PEI invitation priorities"],
  },
];
