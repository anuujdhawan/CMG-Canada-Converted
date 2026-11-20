import { MPNP_EOI_GRID } from "./pnp-score-grids";
import { checkField, engineField, evidence, numericOptions, options, select, yesNo } from "./referenceProvincialFields";
import { guideVariant } from "./referenceProvincialCriteria";

const scoringQuestion = (key, label, section, sectionMax, choices) => ({
  key, label, section, sectionMax, options: choices, required: true, kind: "choice",
});

const mapField = (stream) => (key, label, initial, labels, config) => engineField(stream, key, label, initial, labels, config);
const engineFields = (stream) => stream.questions.map((q) => engineField(stream, q.key));
const fieldLevels = (name) => numericOptions([4, 5, 6, 7, 8, 9, 10], { language: name });
const gridOptions = (stream, key) => stream.questions.find((question) => question.key === key).options.map(({ value, label }) => ({ value: String(value), label }));
const labelSection = (label) => label.split(" · ").at(-1);
const titled = (label) => label[0].toUpperCase() + label.slice(1);
const confirmed = options(["yes", "Confirmed"], ["no", "No"], ["unknown", "To be confirmed"]);

const MB_SOURCE = "https://immigratemanitoba.com/immigrate/skilled-worker/swm/eligibility/";
const SK_SOURCE = "https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/assess-your-eligibility";
export const pointsSources = {
  "manitoba-mpnp-calculator": MB_SOURCE,
  "saskatchewan-sinp-calculator": SK_SOURCE,
};

const mbSelfAssessment = {
  key: "swo", mode: "official-grid", maxScore: 100, minimumScore: 60, sourceUrl: MB_SOURCE,
  questions: [
    scoringQuestion("language", "First official language", "Language proficiency", 25, options(["0", "Below CLB/NCLC 4 or no result", 0], ["4", "CLB/NCLC 4", 12], ["5", "CLB/NCLC 5", 14], ["6", "CLB/NCLC 6", 16], ["7", "CLB/NCLC 7", 18], ["8", "CLB 8 or higher", 20])),
    scoringQuestion("secondLanguage", "Second official language", "Language proficiency", 25, options(["no", "No result · no points", 0], ["yes", "CLB/NCLC 5 or higher", 5])),
    scoringQuestion("age", "Age", "Age", 10, options(["under18", "Under 18", 0], ["18", "18", 4], ["19", "19", 6], ["20", "20", 8], ["21to45", "21–45", 10], ["46", "46", 8], ["47", "47", 6], ["48", "48", 4], ["49", "49", 2], ["50plus", "50 or older", 0])),
    scoringQuestion("work", "Full-time work in the past 5 years", "Work experience", 15, options(["0", "Less than 1 year", 0], ["1", "1 year", 8], ["2", "2 years", 10], ["3", "3 years", 12], ["4", "4 years or more", 15])),
    scoringQuestion("education", "Highest completed education", "Education", 25, options(["none", "No post-secondary credential", 0], ["oneYear", "One year or trade credential", 14], ["twoPlus", "Bachelor’s degree · 2+ year credential", 20], ["twoPrograms", "Two credentials of 2+ years each", 23], ["masters", "Master’s or doctorate", 25])),
    scoringQuestion("connection", "Strongest Manitoba connection", "Adaptability", 25, options(["none", "No qualifying connection", 0], ["closeFamily", "Eligible close relative in Manitoba", 20], ["invitation", "Strategic Recruitment Initiative invitation", 20], ["work", "At least 6 months of Manitoba work", 12], ["twoYearStudy", "At least 2 years of Manitoba study", 12], ["oneYearStudy", "One year of Manitoba study", 10], ["friend", "Close friend or distant relative", 10])),
    scoringQuestion("regional", "Regional settlement", "Adaptability", 25, options(["no", "No regional points", 0], ["yes", "Qualifying community outside Winnipeg", 5])),
  ],
  rules: [{ key: "connection", values: ["none"], message: "A qualifying Manitoba connection is required for Skilled Worker Overseas." }],
};

export function manitoba() {
  const field = mapField(mbSelfAssessment);
  return {
    title: "Manitoba pathway and scoring",
    description: "Choose a stream, verify the Manitoba connection and select the relevant scoring grid.",
    defaultRoute: "swo",
    routeField: select("route", "Scoring grid", "swo", options(["swo", "SWO self-assessment · 100 points"], ["eoi", "EOI ranking · 1,000 points"])),
    routeLast: true,
    variants: {
      swo: {
        controls: [select("pathway", "MPNP pathway", "overseas", options(["overseas", "Skilled Worker Overseas"]), { highlight: true })],
        section: "Skilled Worker Overseas factors",
        fields: [
          select("age", "Age", "", gridOptions(mbSelfAssessment, "age")), field("education", "Highest education", "twoPlus", { twoPlus: "Bachelor’s degree" }),
          field("work", "Documented recent full-time work", "4", { 4: "4 years · within past 5 years" }), field("language", "First official language", "8", { 8: "CLB 8 · lowest of four" }),
          field("secondLanguage", undefined, "no", { no: "No test result" }), field("connection", "Manitoba connection", "closeFamily"),
          select("support", "Supporter residence and status", "yes", options(["yes", "1+ year in Manitoba · citizen / PR"], ["unknown", "Supporter evidence to confirm"], ["no", "No eligible supporter"])),
          select("funds", "Settlement plan and funds", "yes", evidence),
          select("otherProvince", "Other provincial ties", "no", options(["no", "None declared"], ["yes", "Ties to another province"])),
          select("invitation", "Recruitment invitation", "no", options(["no", "None · review current draw criteria"], ["yes", "Valid invitation to apply"])),
          field("regional", "Qualifying Manitoba regional settlement", "no", {}, { visible: (a) => !["closeFamily", "none", ""].includes(a.connection) || a.regional === "yes" }),
        ],
        stream: mbSelfAssessment,
        mapAnswers: (a) => ({
          ...a,
          connection: a.invitation === "yes" ? "invitation" : ["closeFamily", "friend"].includes(a.connection) && a.support !== "yes" ? "none" : a.connection,
          regional: a.connection === "none" || (["closeFamily", "friend"].includes(a.connection) && a.support !== "yes") ? "no" : a.regional,
        }),
        resultTitle: "Skilled Worker Overseas points", thresholdLabel: "60-point self-assessment threshold",
        callout: ["Manitoba connection", "Check support, past Manitoba work or study, or a direct invitation. Review the current draw conditions and the settlement funds policy for the selected route."],
        note: "The 60-point minimum applies to this self-assessment. A connection to Manitoba is required, and current draws may have additional conditions.",
        guide: ["Separate EOI ranking · up to 1,000", "Switch grids for EOI ranking. That grid uses its own language, age, work, education, adaptability and applicable risk factors."],
      },
      eoi: {
        controls: [select("pathway", "MPNP pathway", "overseas", options(["overseas", "Skilled Worker Overseas"], ["inManitoba", "Skilled Worker in Manitoba"], ["education", "International Education"]))],
        section: "EOI ranking factors", fields: engineFields(MPNP_EOI_GRID), stream: MPNP_EOI_GRID,
        resultTitle: "MPNP EOI ranking score", footerLabel: "Manitoba EOI", footerValue: "Ranking out of 1,000 points", ticks: [0, 250, 500, 750, 1000], min: -200,
        callout: ["Expression of interest", MPNP_EOI_GRID.focus],
      },
    },
  };
}

export function alberta(page) {
  const stream = page.stream;
  const field = mapField(stream);
  const routes = options(["opportunity", "Alberta Opportunity Stream"], ["express-entry", "Alberta Express Entry Stream"], ["rural", "Rural Renewal Stream"], ["tourism", "Tourism and Hospitality Stream"]);
  const education = stream.questions.find((q) => q.key === "education");
  const offerLocations = stream.questions.find((q) => q.key === "offerLocation");
  const controls = [select("permit", "Alberta work permit", "yes", options(["yes", "Valid employer-specific permit"], ["open", "Valid open work permit"], ["outside", "Outside Canada"], ["review", "To be confirmed"]))];
  const routeNotes = {
    opportunity: "Confirm the Alberta Opportunity Stream’s approved status, occupation, language, education and work experience requirements.",
    "express-entry": "Confirm a valid federal Express Entry profile and the current conditions for the Alberta Express Entry Stream.",
    rural: "Confirm a qualifying job offer and endorsement from an Alberta Rural Renewal designated community.",
    tourism: "Confirm work authorization, qualifying occupation and the eligible tourism and hospitality employer requirements.",
  };
  const variant = {
    controls,
    section: "Worker EOI factors",
    fields: [
      select("age", "Age", "", options(["under18", "Under 18 · outside the scoring grid"], ...gridOptions(AAIP_WORKER_GRID, "age").map(({ value, label }) => [value, label]))),
      select("credential", "Education and location", "bachelor:alberta", education.options.flatMap(({ value, label }) => [["alberta", "Alberta"], ["otherCanada", "Other Canada"], ["outside", "Outside Canada"]].map(([location, place]) => ({ value: `${value}:${location}`, label: `${value === "bachelor" ? "Bachelor’s degree" : label} · ${place}` })))),
      select("english", "English · lowest valid band", "7", fieldLevels("CLB")), select("french", "French · lowest valid band", "0", fieldLevels("NCLC")),
      select("months", "Total work experience", "", options(["under6", "Less than 6 months"], ["6to11", "6–11 months"], ["12plus", "12 months or more"])), field("canadianWork", "Canadian work by location", "alberta", { alberta: "Alberta 12 months · elsewhere none" }),
      select("job", "Alberta job offer", "calgaryEdmonton", offerLocations.options.map((item) => ({ ...item, label: item.value === "calgaryEdmonton" ? "Permanent full-time · Calgary" : item.label }))),
      field("family", "Eligible family in Alberta", "no", { no: "None", yes: "Eligible Alberta family member" }),
      field("priorityOffer", "Sector or endorsement bonus", "no", { no: "None" }), field("regulatedOccupation", "Regulated occupation certification", "no", { no: "Not claimed" }),
      select("occupation", "Current occupation eligibility", "yes", options(["yes", "Eligible occupation · TEER 2"], ["unknown", "Occupation to verify"], ["no", "Ineligible occupation"])),
      select("history", "Same-occupation work history", "yes", options(["yes", "12 months in Alberta in past 18"], ["other", "24 months in past 30 across locations"], ["unknown", "Work history to verify"], ["no", "Requirements not met"])),
    ],
    stream,
    mapAnswers: (a) => {
      const [education, educationLocation] = (a.credential ?? "").split(":");
      const english = Number(a.english);
      const french = Number(a.french);
      const englishPoints = english >= 6 ? 10 : english === 5 ? 8 : english === 4 ? 5 : 0;
      const frenchPoints = french >= 6 ? 8 : french === 5 ? 5 : french === 4 ? 3 : 0;
      const language = englishPoints === 0 && frenchPoints === 0 ? "low" : englishPoints >= frenchPoints ? `en${Math.min(6, english)}` : `fr${Math.min(6, french)}`;
      return {
        ...a, education, educationLocation,
        totalWork: a.months,
        permanentOffer: a.job ? (a.job === "none" ? "no" : "yes") : "",
        age: a.age === "under18" ? "" : a.age,
        language: a.english === "" || a.french === "" ? "" : language,
        bilingual: english >= 4 && french >= 4 ? "yes" : "no",
        priorityOffer: a.job === "none" ? "no" : a.priorityOffer,
        offerLocation: a.job,
        regulatedOccupation: a.job === "none" ? "no" : a.regulatedOccupation,
      };
    },
    rows(breakdown) {
      const human = breakdown.filter((row) => row.section.startsWith("Human capital"));
      const economic = breakdown.filter((row) => row.section.startsWith("Economic factors"));
      return [...human.map((row) => ({ ...row, label: row.section.endsWith("connection") ? "Family connection" : titled(labelSection(row.section)) })), {
        label: "Economic factors", points: economic.reduce((total, row) => total + row.points, 0), max: 31,
      }];
    },
    resultTitle: "Estimated Alberta Worker EOI", footerLabel: "Worker EOI", footerValue: "Alberta ranking score",
    note: "EOI language points use the lowest band for each test and the higher-scoring language. The bilingual bonus has a separate minimum.",
    guide: ["Score and stream eligibility", "Offer location, applicable sector or rural endorsement and recognized professional certification affect points. Permit and NOC also determine stream eligibility."],
  };
  return {
    title: "Alberta pathway details", description: "Review your Alberta worker stream and estimate points on the Worker EOI grid.",
    defaultRoute: "opportunity", routeField: select("route", "AAIP worker stream", "opportunity", routes, { highlight: true }),
    variants: Object.fromEntries(routes.map(({ value }) => [value, { ...variant, callout: [value === "opportunity" ? "Opportunity Stream checks" : "Pathway and evidence", routeNotes[value]] }])),
  };
}

export function saskatchewan(page) {
  const express = page.stream;
  const demand = page.program.streams.find((s) => s.key === "occupations-in-demand");
  const routes = options(["offer", "International Skilled Worker · Employment Offer"], ["express-entry", "Saskatchewan Express Entry"], ["occupations-in-demand", "Occupations In-Demand"]);
  const factors = {
    education: ["Education and training", 23], recentWork: ["Skilled work experience", 15], olderWork: ["Skilled work experience", 15],
    firstLanguage: ["Language ability", 30], secondLanguage: ["Language ability", 30], age: ["Age", 12],
  };
  const factorQuestions = express.questions.filter((q) => factors[q.key]).map((q) => ({ ...q, section: factors[q.key][0], sectionMax: factors[q.key][1] }));
  const stream = {
    ...express, key: "offer", sourceUrl: SK_SOURCE,
    questions: [
      ...factorQuestions,
      scoringQuestion("skOffer", "High-skilled Saskatchewan job offer", "Saskatchewan connection", 30, options(["yes", "Eligible permanent full-time offer", 30], ["no", "No eligible offer", 0], ["unknown", "To be confirmed", 0])),
    ],
    rules: [{ key: "skOffer", values: ["no"], message: "The Employment Offer pathway requires a qualifying job offer." }, { key: "firstLanguage", values: ["none"], message: "The Employment Offer pathway requires CLB 4 or higher." }],
  };
  const field = mapField(stream);
  const scoreVariant = {
    resultTitle: "Estimated SINP points", thresholdLabel: "60-point threshold", ticks: [0, 30, 60, 90, 110],
    note: "The grid has a 60-point minimum. Check the job, related work, language and licensing requirements for your route.",
    liveNote: "A minimum of 60 points applies. Check the selected pathway’s requirements and current intake conditions.",
  };
  return {
    title: "Saskatchewan pathway details", description: "The Employment Offer route uses the 110-point grid. Other streams can have different checks.",
    defaultRoute: "offer", routeField: select("route", "SINP pathway", "offer", routes, { highlight: true, wide: true }),
    variants: {
      offer: {
        ...scoreVariant, stream,
        section: "International Skilled Worker factors",
        fields: [
          select("age", "Age", "", gridOptions(stream, "age")), field("education", "Education or training", "bachelor", { bachelor: "Bachelor’s degree · Canadian equivalency" }),
          field("recentWork", "Related work in past 5 years", "5"), field("olderWork", "Related work 6–10 years ago", "0", { 0: "None claimed" }),
          field("firstLanguage", "First language · lowest valid band", "7", { 7: "CLB 7" }), field("secondLanguage", "Second language · lowest valid band", "none", { none: "No test result" }),
          field("skOffer", "Saskatchewan job offer", "yes", { yes: "Permanent full-time · eligible TEER 2" }),
          select("location", "Location and status", "outside", options(["outside", "Outside Canada"], ["yes", "In Canada with valid status"], ["unknown", "Status to confirm"])),
          select("licence", "Licence or trade certification", "na", options(["na", "Not required for sample occupation"], ["yes", "Required licence or trade certification held"], ["unknown", "To be confirmed"], ["no", "Required credential unavailable"])),
          select("approval", "Employer Position Assessment", "yes", options(["yes", "Valid for offered position"], ["unknown", "To be confirmed"], ["no", "Unavailable"])),
          checkField("intent", "Intend to live in Saskatchewan"),
          select("occupation", "Offer occupation restrictions", "yes", options(["yes", "Eligible for this pathway"], ["unknown", "To be confirmed"], ["no", "Ineligible occupation"])),
        ],
        mapAnswers: (a) => ({ ...a }),
        callout: ["Use the selected pathway", "The Employment Offer route uses a qualifying offer for connection points. Other point-grid routes use eligible Saskatchewan family, work and study connections."],
        guide: ["Stream-dependent scoring", "Employment Offer, Occupations In-Demand and Saskatchewan Express Entry use the assessment grid. Other SINP routes can use criteria checks."],
      },
      "express-entry": { ...scoreVariant, section: "Express Entry factors", fields: engineFields(express), stream: express, callout: ["Express Entry pathway", express.focus] },
      "occupations-in-demand": { ...scoreVariant, section: "Occupations In-Demand factors", fields: engineFields(demand), stream: demand, callout: ["Occupation conditions", demand.focus] },
    },
  };
}

export function britishColumbia(page) {
  const stream = page.stream;
  const field = mapField(stream);
  const experience = stream.questions.find((q) => q.key === "relatedExperience");
  const education = stream.questions.find((q) => q.key === "education");
  const routes = options(["skilled", "Skilled Worker"], ["health", "Health Authority"]);
  return {
    title: "BC Skills Immigration", description: "The province’s Skilled Worker registration grid uses experience, education, language, wage and area.",
    defaultRoute: "skilled", routeField: select("route", "BC PNP stream", "skilled", routes, { highlight: true }),
    variants: {
      skilled: {
        controls: [select("ee", "Express Entry BC option", "no", options(["no", "No · base stream"], ["yes", "Use the Express Entry BC option"]))],
        section: "Skilled Worker registration factors",
        fields: [
          select("experience", "Directly related work experience", "4to5:outside", experience.options.flatMap(({ value, label }) => value === "none" ? [["none:outside", label]] : [
            [`${value}:outside`, value === "4to5" ? "4 years · outside Canada" : `${label} · no Canada bonus`],
            [`${value}:canada`, `${label} · 1+ year in Canada`],
          ]).filter(([value]) => !["under1:canada", "none:canada"].includes(value)).map(([value, label]) => ({ value, label }))),
          field("currentBcEmployer", "Current work for supporting employer", "no"),
          select("credential", "Highest education and location", "bachelor:outside", education.options.flatMap(({ value, label }) =>
            (value === "secondary" ? ["outside"] : ["outside", "canada", "bc"]).map((location) => ({ value: `${value}:${location}`, label: `${label} · ${{ outside: "outside Canada", canada: "Canada outside BC", bc: "British Columbia" }[location]}` })))),
          field("professionalDesignation", "Eligible B.C. designation", "no", { no: "None" }),
          select("english", "English · lowest valid band", "8", fieldLevels("CLB")), select("french", "French · lowest valid band", "0", fieldLevels("NCLC")),
          field("hourlyWage", "Base offered hourly wage", "40.00", {}, { highlight: true, suffix: "CAD / hour" }), field("bcArea", "Primary work area", "area3", { area3: "Victoria · Area 3" }),
          field("regionalBonus", "Regional experience or alumni", "no", { no: "Neither claimed" }),
          select("offer", "Job offer and occupation", "yes", options(["yes", "Indeterminate full-time · TEER 2"], ["eligible", "Other qualifying offer"], ["unknown", "Evidence to confirm"], ["no", "No qualifying offer"])),
          select("income", "B.C. family income requirement", "yes", options(["yes", "Meets applicable minimum"], ["unknown", "To be confirmed"], ["no", "Below applicable minimum"])),
          select("employer", "Employer and qualifications", "yes", options(["yes", "Employer support and qualifications indicated"], ["unknown", "To be confirmed"], ["no", "Requirements not met"])),
        ],
        stream,
        mapAnswers: (a) => {
          const [relatedExperience, country] = (a.experience ?? "").split(":");
          const [education, educationLocation] = (a.credential ?? "").split(":");
          const highest = Math.max(Number(a.english), Number(a.french));
          return {
            ...a, relatedExperience, education, educationLocation,
            canadianExperience: country ? (country === "canada" ? "yes" : "no") : "",
            language: a.english === "" || a.french === "" ? "" : highest >= 9 ? "9plus" : highest >= 4 ? String(highest) : "none",
            bothLanguages: Number(a.english) >= 4 && Number(a.french) >= 4 ? "yes" : "no",
            regionalBonus: a.bcArea === "metro" ? "no" : a.regionalBonus,
          };
        },
        rows: (breakdown) => breakdown.map((row, i) => ({ ...row, label: ["Directly related work experience", "Education", "Language proficiency", "BC hourly wage", "BC area of employment"][i] })),
        resultTitle: "Estimated BC registration score", footerLabel: "Skills Immigration", footerValue: "Registration points", ticks: [0, 50, 100, 150, 200],
        note: "Regional experience or eligible alumni points are conditional on the work area. Claim these only when you meet the criteria and can provide evidence.",
        callout: ["Base wage only", "Use the offered base hourly wage. Eligibility also depends on the offer, employer, occupation, experience and family income."],
        guide: ["Health Authority stream", "Review the direct application criteria for the Health Authority stream. The 200-point registration score applies to Skilled Worker."],
      },
      health: guideVariant("Health Authority stream", "Review eligibility for a direct application and confirm support from a B.C. public health authority.", "https://www.welcomebc.ca/immigrate-to-b-c/skills-immigration"),
    },
  };
}

const PEI_ADAPTABILITY_LABELS = {
  closeFamily: "Eligible close family in PEI · 12+ months",
  spouseLanguage: "Spouse, partner or child at CLB/NCLC 6+",
  property: "PEI residential property · 12+ months",
  peiGraduate: "Graduated from a PEI institution",
  spouseExperience: "Spouse or partner has eligible work experience",
  childSchool: "Dependent child attended school in PEI",
};

export function princeEdwardIsland(page) {
  const stream = page.stream;
  const field = mapField(stream);
  const adaptability = stream.questions.filter((q) => q.section === "Adaptability");
  const languageKeys = ["englishLanguage", "frenchLanguage"];
  const workforceStream = {
    ...stream,
    questions: stream.questions.map((q) => languageKeys.includes(q.key) ? { ...q, required: false } : q),
  };
  const skilled = {
    controls: [select("offer", "PEI job offer and permit", "yes", options(["yes", "Permanent full-time · TEER 2 · valid permit"], ["outside", "Qualifying offer · applying from outside PEI"], ["unknown", "Offer or permit to confirm"], ["no", "No qualifying offer"]))],
    section: "Workforce EOI scoring factors",
    fields: [
      select("age", "Age", "", gridOptions(stream, "age")), field("education", "Highest completed education", "bachelor", { bachelor: "Bachelor’s degree · 3+ years" }),
      field("englishLanguage", "English · lowest valid band", "8", { 8: "CLB 8" }, { options: stream.questions.find((q) => q.key === "englishLanguage").options.filter((item) => item.value !== "employerForm").map((item) => item.value === "8" ? { ...item, label: "CLB 8" } : item) }),
      field("frenchLanguage", "French · lowest valid band", "under4", { under4: "No test result" }),
      select("languageEvidence", "PEIW-02 language evidence option", "", options(["tests", "Test results used"], ["employer", "Signed qualifying PEIW-02"])), field("workExperience", "Total full-time work experience", "", { "4to6": "4–6 years" }),
      select("recent", "Eligible full-time work in past 5 years", "yes", options(["yes", "2+ years"], ["no", "Under 2 years"], ["unknown", "Evidence to confirm"])), checkField("workingInPei", "Working permanently in PEI on valid permit"),
      checkField("offerRelatedEducation", "Job offer related to education"),
      select("other", "Other employment points", "none", options(["none", "No additional claims"], ["regulated", "Regulated qualification verified"], ["work", "One year of continuous full-time PEI work"], ["both", "Both additional factors"])),
      select("adaptability", "Adaptability factors · select all", ["closeFamily"], adaptability.map((q) => ({ value: q.key, label: PEI_ADAPTABILITY_LABELS[q.key] || q.label })), { multi: true }), select("funds", "Settlement funds", "yes", evidence),
    ],
    stream: workforceStream,
    mapAnswers: (a) => {
      const langQuestion = (key) => stream.questions.find((q) => q.key === key);
      const langPoints = (key) => langQuestion(key).options.find((o) => o.value === a[key])?.points ?? 0;
      const englishStrongest = langPoints("englishLanguage") >= langPoints("frenchLanguage");
      return {
        ...a,
        englishLanguage: a.languageEvidence === "employer" ? "employerForm" : englishStrongest ? a.englishLanguage : "under4",
        frenchLanguage: a.languageEvidence !== "employer" && !englishStrongest ? a.frenchLanguage : "under4",
        regulatedQualification: ["regulated", "both"].includes(a.other) ? "yes" : "no",
        oneYearPeiWork: ["work", "both"].includes(a.other) ? "yes" : "no",
        workingInPei: a.offer === "no" ? "no" : a.workingInPei,
        offerRelatedEducation: a.offer === "no" ? "no" : a.offerRelatedEducation,
        ...Object.fromEntries(adaptability.map((q) => [q.key, a.adaptability?.includes(q.key) ? "yes" : "no"])),
      };
    },
    rows: (breakdown) => ["Age", "Language", "Education", "Work experience", "Employment", "Adaptability"].map((label) => ({ ...breakdown.find((row) => row.section === label), label })),
    resultTitle: "Estimated PEI workforce EOI", footerLabel: "Workforce EOI", footerValue: "Skilled Worker in PEI",
    note: "Employment points depend on current PEI work and whether the job offer relates to your education. Adaptability is capped at 15.",
    callout: ["Category and evidence", "Confirm the required work history, job offer, education, valid status, language evidence and funds for this category."],
    guide: ["Use the selected grid", "PEI Workforce categories have different factor caps and evidence options. PEI Express Entry uses a separate grid with and without a job offer."],
  };
  const alternate = page.program.streams.filter((item) => item.key !== stream.key);
  return {
    title: "PEI workforce profile", description: "Estimate Workforce EOI points using the grid for your selected PEI category.",
    defaultRoute: stream.key, routeField: select("route", "Workforce category", stream.key, options([stream.key, "Skilled Worker in PEI"], ...alternate.map(({ key, label }) => [key, label])), { highlight: true }),
    variants: {
      [stream.key]: skilled,
      ...Object.fromEntries(alternate.map((item) => [item.key, {
        section: "EOI scoring factors", fields: engineFields(item), stream: item,
        resultTitle: item.key.startsWith("express-entry") ? "Estimated PEI Express Entry EOI" : "Estimated PEI workforce EOI",
        footerLabel: "PEI EOI", footerValue: item.label, callout: ["Category and evidence", item.focus],
      }])),
    },
  };
}

export function northwestTerritories(page) {
  const base = page.stream;
  const language = base.questions.find((q) => q.key === "language");
  const abilities = ["Listening", "Reading", "Writing", "Speaking"];
  const bandChoices = language.options.map(({ value, label, points }) => ({ value, label, points: points / 4 }));
  const stream = {
    ...base,
    questions: base.questions.flatMap((q) => q.key === "language" ? abilities.map((ability) => ({ ...q, key: ability, label: `First language · ${ability}`, options: bandChoices })) : [q]),
  };
  const field = mapField(stream);
  const routes = options(["skilled", "Employer-Driven · Skilled Worker"], ["ee", "Employer-Driven · Express Entry"], ["entry", "Employer-Driven · Entry Level / Semi-Skilled"], ["french", "Francophone Stream"]);
  const variant = {
    controls: [select("workLocation", "Offer details", "hay", options(["hay", "Hay River · full-time · TEER 2"], ["other", "Outside Yellowknife · full-time offer"], ["yellowknife", "Yellowknife · full-time offer"], ["no", "No qualifying offer"], ["unknown", "Offer details to verify"]))],
    section: "Human capital, NWT connection and adaptability",
    fields: [
      select("age", "Age at EOI", "", gridOptions(stream, "age")), field("education", "Education and occupation match", "bachelor", { bachelor: "Bachelor’s · ECA · not related to NOC" }),
      select("firstLanguage", "First language · L / R / W / S", "8plus", [...bandChoices.map((item) => ({ ...item, label: item.value === "8plus" ? "English CLB 8 / 8 / 8 / 8" : item.label })), { value: "mixed", label: "Enter individual ability levels" }]),
      field("secondLanguage", "Second official language", "no", { no: "No result · no bilingual points", yes: "CLB/NCLC 5 or higher in all abilities" }),
      ...abilities.map((ability) => field(ability, undefined, "8plus", {}, { visible: (a) => a.firstLanguage === "mixed" })),
      field("work", "Related full-time work in past 10 years", "5plus", { "5plus": "5 years or more" }), field("nwtWork", "Full-time NWT work in past 10 years", "2"),
      select("occupation", "Nominating occupation", "2-3:no", options(["0-1:no", "TEER 0–1 · no listed trade bonus"], ["2-3:no", "TEER 2 · no listed trade bonus"], ["2-3:yes", "TEER 2–3 · listed skilled trade"], ["4-5:no", "TEER 4–5 · no listed trade bonus"], ["4-5:yes", "TEER 4–5 · listed skilled trade"])),
      field("permit", "Work permit type", "yes", { yes: "Valid employer-specific NWT permit", no: "No qualifying employer-specific permit" }),
      field("nwtEducation", "NWT post-secondary credential", "none", { none: "None" }), field("family", "Eligible immediate family in NWT", "no", { no: "None" }),
    ],
    stream,
    mapAnswers: (a) => {
      const [noc, trades] = (a.occupation ?? "").split(":");
      return {
        ...a,
        offer: ["hay", "other", "yellowknife"].includes(a.workLocation) ? "yes" : a.workLocation,
        location: a.workLocation ? (["hay", "other"].includes(a.workLocation) ? "yes" : "no") : "",
        noc: a.workLocation === "no" ? "" : noc, trades: a.workLocation === "no" ? "no" : trades,
        ...Object.fromEntries(abilities.map((ability) => [ability, a.firstLanguage === "mixed" ? a[ability] : a.firstLanguage])),
      };
    },
    rows: (breakdown) => breakdown.filter((row) => row.max > 0).map((row, i) => ({ ...row, label: ["Human capital factors", "NWT labour market connections", "Adaptability to the NWT"][i] })),
    resultTitle: "Estimated NWT EOI points", footerLabel: "Employer-Driven", footerValue: "Territorial ranking score", ticks: [0, 200, 400, 600, 845],
    note: "The total combines human capital, NWT labour-market connection and adaptability points. Claim NWT study and family factors only when you meet the criteria.",
    callout: ["Employer-Driven stream checks", "Review the employer’s offer, candidate work authorization and the criteria for Skilled Worker, Express Entry or Entry Level/Semi-Skilled."],
    guide: ["Separate Francophone criteria", "Use the 845-point grid for Employer-Driven EOIs. The Francophone Stream has separate language and eligibility requirements."],
  };
  return {
    title: "NWT employer-driven profile", description: "Estimate your score on the Employer-Driven EOI grid for the selected stream.",
    defaultRoute: "skilled", routeField: select("route", "NTNP route", "skilled", routes, { highlight: true }),
    variants: {
      skilled: variant, ee: { ...variant, guide: ["NWT Express Entry", "Confirm federal Express Entry eligibility and a valid federal profile before using the Employer-Driven Express Entry route."] },
      entry: { ...variant, guide: ["Entry Level / Semi-Skilled", "This pathway has separate occupation, work history and language eligibility requirements."] },
      french: guideVariant("Francophone Stream", "Confirm the Francophone Stream’s employer and occupation requirements as well as both official language requirements.", "https://www.immigratenwt.ca/francophone-stream"),
    },
  };
}
