import { checkField, criterion, engineField, evidence, number, numericOptions, options, resultStatus, select } from "./referenceProvincialFields";

const jobOptions = (yes) => options(["yes", yes], ["review", "Offer details to confirm"], ["no", "Offer does not meet conditions"]);
const employerOptions = (yes) => options(["yes", yes], ["review", "To be confirmed"], ["no", "Requirements not met"]);
const occupationOptions = options(
  ["0", "TEER 0"], ["1", "TEER 1"], ["2", "TEER 2"],
  ["3", "TEER 3"], ["4", "TEER 4"], ["5", "TEER 5"],
);
const english = numericOptions([3, 4, 5, 6, 7, 8, 9, 10]);
const eligible = (value) => value === "yes";
const ageIn = (value, min, max) => Number(value) >= min && Number(value) <= max;
const sourceNB = "https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program/skilled-worker-stream.html";
const sourceNL = "https://www.gov.nl.ca/immigration/4-skilled-worker-category-eligibility-criteria/";
const sourceNLEE = "https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/provincial-nominee-program/applicants/express-entry-skilled-worker/";

export const criteriaSources = {
  "new-brunswick-pnp-calculator": sourceNB,
  "newfoundland-and-labrador-pnp-calculator": sourceNL,
  "nova-scotia-nsnp-calculator": "https://liveinnovascotia.com/skilled-worker",
  "yukon-nominee-program-calculator": "https://yukon.ca/en/yukon-nominee-program/",
};

export function criteriaFromEngine(stream) {
  return (answers) => stream.questions.map((q) => {
    const value = answers[q.key];
    const selected = q.options?.find((entry) => entry.value === value);
    const short = q.section || q.key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (letter) => letter.toUpperCase());
    return { label: q.label, short, status: resultStatus(value, !selected?.unknown) };
  });
}

export function newBrunswick(page) {
  const streamOptions = options(
    ["skilled", "Skilled Worker"],
    ["express-entry", "New Brunswick Express Entry"],
    ["strategic", "Strategic Initiative · official guide"],
  );
  const streamField = select("route", "NBPNP stream", "skilled", streamOptions, { highlight: true });
  const skilledFields = [
    number("age", "Age", "30"),
    select("education", "Education", "yes", employerOptions("High school diploma")),
    select("residence", "Residence in New Brunswick", "9", options(["9", "9 consecutive months"], ["6", "6 consecutive months"], ["0", "Under 6 months"])),
    select("work", "Full-time work with same employer", "9", options(["9", "9 months"], ["6", "6 months"], ["0", "Under 6 months"])),
    select("job", "Current job", "yes", jobOptions("Full-time, non-seasonal")),
    select("occupation", "NOC and qualifications", "yes", employerOptions("TEER 2 · requirements indicated")),
    select("language", "English or French · lowest valid band", "0", english.map((item) => item.value === "0" ? { ...item, label: "Not provided · CLB/NCLC 4 required" } : item), { warningValues: ["0", "3"] }),
    select("operating", "Employer operating in New Brunswick", "review", options(["review", "24+ months · check evidence"], ["yes", "24+ months · evidence confirmed"], ["no", "Under 24 months"])),
    select("employer", "Employer support", "review", employerOptions("Eligible employer supports application")),
    select("intake", "Job sector and current intake", "review", options(["review", "Review current invitation notices"], ["yes", "Current intake conditions checked"], ["no", "Current intake conditions not met"])),
  ];
  const skilledCriteria = (a) => [
    criterion("Age and high school education", "Profile", a, ["age", "education"], (x) => Number(x.age) >= 19 && eligible(x.education)),
    criterion("New Brunswick residence for 6+ months", "Residence", a, ["residence"], (x) => Number(x.residence) >= 6),
    criterion("Full-time non-seasonal work with same employer", "Job", a, ["work", "job", "occupation"], (x) => Number(x.work) >= 6 && eligible(x.job) && eligible(x.occupation)),
    criterion("Valid CLB/NCLC 4+ in all four abilities", "Language", a, ["language"], (x) => Number(x.language) >= 4),
    criterion("Employer support and operating history", "Employer", a, ["operating", "employer"], (x) => eligible(x.operating) && eligible(x.employer)),
  ];
  const express = page.program.streams.find((item) => item.key === "express-entry");
  const expressFields = express.questions.map((q) => engineField(express, q.key));
  return {
    title: "New Brunswick pathway details",
    description: "This example shows the New Brunswick Experience pathway under Skilled Worker.",
    defaultRoute: "skilled",
    routeField: streamField,
    variants: {
      skilled: {
        controls: [select("pathway", "Pathway", "experience", options(["experience", "New Brunswick Experience"], ["graduates", "New Brunswick Graduates"], ["priority", "New Brunswick Priority Occupations"]))],
        section: "Residence, employment and evidence",
        fields: skilledFields,
        resultTitle: "New Brunswick criteria check",
        criteria: skilledCriteria,
        warningDetail: "Language and employer support",
        note: "Check the evidence for your answers and confirm the current pathway and sector rules with Immigration New Brunswick.",
        callout: ["Experience pathway basics", "Check six months of New Brunswick residence and full-time work with the same supporting employer. Review occupation and sector restrictions."],
        guide: ["Other result modes", "Skilled Worker uses criteria. New Brunswick Express Entry has a 67/100 selection minimum. The Strategic Initiative uses a separate selection grid."],
        selectPathway(variant, answers) {
          if (answers.pathway !== "graduates" && answers.pathway !== "priority") return variant;
          const graduate = answers.pathway === "graduates";
          const fields = skilledFields.filter((field) => field.key !== "work" && (graduate ? field.key !== "education" : field.key !== "residence"));
          const extra = graduate
            ? select("graduate", "Eligible New Brunswick study", "", employerOptions("Completed a PGWP-eligible program"))
            : select("recruitment", "Related work and recruitment", "", employerOptions("1+ year and designated recruitment offer"));
          fields.splice(2, 0, extra);
          return {
            ...variant,
            fields,
            callout: graduate
              ? ["New Brunswick Graduates", "Check the program of study, New Brunswick residence and offer requirements in the guide."]
              : ["New Brunswick Priority Occupations", "Check that the offer arose from an eligible recruitment mission and matches a listed priority occupation."],
            criteria: (a) => [
              ...skilledCriteria(a).filter(({ short }) => short === "Language" || short === "Employer"),
              graduate
                ? criterion("Age and eligible New Brunswick study", "Study", a, ["age", "graduate"], (x) => Number(x.age) >= 19 && eligible(x.graduate))
                : criterion("Age and high school education", "Profile", a, ["age", "education"], (x) => Number(x.age) >= 19 && eligible(x.education)),
              graduate
                ? skilledCriteria(a)[1]
                : criterion("Related work and eligible recruitment", "Recruitment", a, ["recruitment"], (x) => eligible(x.recruitment)),
              criterion("Qualifying full-time non-seasonal job", "Job", a, ["job", "occupation"], (x) => eligible(x.job) && eligible(x.occupation)),
            ],
          };
        },
      },
      "express-entry": {
        section: "Express Entry selection factors",
        fields: expressFields,
        stream: express,
        resultTitle: "New Brunswick Express Entry points",
        guide: ["Express Entry requirements", "Confirm your federal profile, the stream-specific pathway and the current application instructions."],
      },
      strategic: guideVariant("Strategic Initiative", "Use the province’s current Strategic Initiative guide for the selection grid and pathway requirements.", "https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html"),
    },
  };
}

export function newfoundland(page) {
  const aip = page.program.streams.find((stream) => stream.key === "aip");
  const offer = [
    select("offer", "Offer hours and term", "yes", jobOptions("30+ hours/week · 1+ year, extendable")),
    select("employer", "Eligible Newfoundland and Labrador employer", "yes", employerOptions("Employer details supplied")),
    select("jva", "Job Vacancy Assessment (if needed)", "yes", employerOptions("Valid permit for this position").concat(options(["jva", "Employer has valid JVA"]))),
  ];
  const fields = [
    number("age", "Age at application", "32"),
    select("permit", "Permit type and validity", "yes", options(["yes", "Employer-specific · 6 months remaining"], ["other", "Valid permit · 4+ months remaining"], ["review", "Permit validity to confirm"], ["no", "Under 4 months remaining or no valid permit"])),
    select("occupation", "Occupation", "3", options(["0", "TEER 0 · qualifications indicated"], ["1", "TEER 1 · qualifications indicated"], ["2", "TEER 2 · qualifications indicated"], ["3", "TEER 3 · qualifications indicated"], ["4", "TEER 4 · qualifications indicated"], ["5", "TEER 5 · qualifications indicated"], ["review", "Qualifications to confirm"], ["no", "Requirements not met"])),
    ...offer,
    select("language", "Language evidence", "6", numericOptions([3, 4, 5, 6, 7, 8, 9, 10]).map((item) => item.value === "6" ? { ...item, label: "Approved English result · CLB 6" } : item)),
    select("funds", "Settlement funds", "yes", evidence),
    checkField("intent", "Intend to settle in the province"),
    select("wage", "Employer and prevailing wage", "review", options(["yes", "Employer and prevailing wage evidence confirmed"], ["review", "Wage / employer evidence to verify"], ["no", "Offer does not meet prevailing wage"])),
  ];
  return {
    title: "NLPNP pathway details",
    description: "This example uses the Skilled Worker category and a Newfoundland and Labrador job offer.",
    defaultRoute: "skilled",
    routeField: select("route", "NLPNP category", "skilled", options(
      ["skilled", "Skilled Worker"], ["express-entry", "Express Entry Skilled Worker · official grid"], ...(aip ? [["aip", "Atlantic Immigration Program"]] : []),
    ), { highlight: true }),
    variants: {
      skilled: {
        controls: [select("residence", "Current residence", "nl", options(["nl", "Newfoundland and Labrador"], ["canada", "Elsewhere in Canada"], ["outside", "Outside Canada"]))],
        section: "Candidate, employer and settlement details",
        fields,
        resultTitle: "NLPNP criteria check",
        criteria: (a) => [
          criterion("Age and occupational qualifications", "Profile", a, ["age", "occupation"], (x) => ageIn(x.age, 21, 59) && !["no", "review"].includes(x.occupation)),
          criterion(a.residence === "outside" ? "Permit check for current residence" : "Valid permit with 4+ months remaining", "Permit", a, a.residence === "outside" ? ["residence"] : ["permit"], (x) => x.residence === "outside" || ["yes", "other"].includes(x.permit)),
          criterion("Offer terms, employer and prevailing wage", "Offer", a, ["offer", "employer", "jva", "wage"], (x) => eligible(x.offer) && eligible(x.employer) && eligible(x.wage) && ["yes", "jva"].includes(x.jva)),
          criterion("Language evidence for the occupation", "Language", a, ["language", "occupation"], (x) => !["no", "review"].includes(x.occupation) && (Number(x.occupation) < 4 || Number(x.language) >= 4)),
          criterion("Settlement funds and intention to reside", "Funds", a, ["funds", "intent"], (x) => eligible(x.funds) && eligible(x.intent)),
        ],
        warningDetail: "Employer and wage evidence",
        note: "The Skilled Worker category uses eligibility checks. The province assesses EOI submissions and invites applicants to apply.",
        callout: ["Conditions by residence and occupation", "Check permit validity for applicants in Canada and a Job Vacancy Assessment where required. TEER 4–5 needs a valid language test."],
        guide: ["Express Entry Skilled Worker", "This separate category also requires a valid federal profile and at least 67/100 on the NLPNP selection grid."],
      },
      "express-entry": guideVariant("Express Entry Skilled Worker", "Use Annex A of the official guide for the 67/100-point check and review the federal profile, language and job offer requirements.", sourceNLEE),
      ...(aip ? { aip: engineCriteriaVariant(aip, "Atlantic Immigration Program checks") } : {}),
    },
  };
}

export function novaScotia(page) {
  const aip = page.program.streams.find((stream) => stream.key === "aip");
  return {
    title: "Nova Scotia pathway details",
    description: "The standard Skilled Worker category is shown. Some occupations have separate conditions.",
    defaultRoute: "skilled",
    routeField: select("route", "NSNP stream", "skilled", options(["skilled", "Skilled Worker"], ["aip", "Atlantic Immigration Program"]), { highlight: true }),
    variants: {
      skilled: {
        controls: [select("category", "Applicant category", "standard", options(["standard", "Standard Skilled Worker"], ["special", "Occupation-specific conditions · verify guide"]))],
        section: "Job and candidate details",
        fields: [
          number("age", "Age at application", "32"),
          select("education", "Highest education", "yes", employerOptions("High school diploma or higher")),
          select("offer", "Nova Scotia job offer", "yes", jobOptions("Permanent full-time · Halifax")),
          select("occupation", "Occupation skill level", "3", occupationOptions),
          select("experience", "Related paid work in past 5 years", "2", options(["0", "Under 1 year"], ["1", "1 year · 1,560+ hours"], ["2", "2 years · 1,560+ hours"], ["3", "3+ years"])),
          select("employerWork", "Work with offering employer", "na", options(["na", "Not needed for TEER 0–3"], ["yes", "Six months or more"], ["no", "Under six months"])),
          select("language", "Language proof and lowest band", "5", numericOptions([3, 4, 5, 6, 7, 8, 9, 10]).map((item) => item.value === "5" ? { ...item, label: "Approved test · CLB 5" } : item).concat(options(["native", "English or French is first language"]))),
          select("training", "Occupational training or licence", "yes", employerOptions("Requirements indicated")),
          select("funds", "Settlement funds", "yes", evidence),
          select("recruitment", "Employer recruitment evidence", "review", employerOptions("Recruitment evidence available")),
          select("status", "Status in Canada", "yes", options(["yes", "Valid work permit"], ["pgwp", "Post-graduation work permit"], ["outside", "Outside Canada"], ["review", "Status to verify"], ["no", "No valid status"])),
          select("employer", "Wage and employer details", "review", options(["yes", "Employer and wage evidence available"], ["review", "Evidence to confirm"], ["no", "Requirements not met"])),
        ],
        resultTitle: "Nova Scotia criteria check",
        criteria: (a) => [
          criterion("Age, education and job qualifications", "Profile", a, ["age", "education", "training"], (x) => ageIn(x.age, 21, 55) && eligible(x.education) && eligible(x.training)),
          criterion("Permanent full-time Nova Scotia job offer", "Offer", a, ["offer", "occupation", "status"], (x) => eligible(x.offer) && x.status !== "no" && x.status !== "review" && !(x.status === "pgwp" && x.occupation === "5")),
          criterion("Related paid work experience", "Work", a, ["experience", "occupation"], (x) => Number(x.experience) >= 1 && (Number(x.occupation) < 4 || eligible(x.employerWork))),
          criterion(`Language evidence${a.occupation !== "" ? ` for TEER ${a.occupation}` : ""}`, "Language", a, ["language", "occupation"], (x) => Number(x.occupation) < 4 ? x.language === "native" || Number(x.language) >= 5 : Number(x.language) >= 4),
          criterion("Employer recruitment and support evidence", "Employer", a, ["recruitment", "employer"], (x) => eligible(x.recruitment) && eligible(x.employer)),
        ],
        warningDetail: "Employer recruitment evidence",
        note: "Confirm employer evidence, settlement funds and occupation restrictions in the current Nova Scotia guide.",
        callout: ["Language and work by TEER", "Standard TEER 0–3 uses CLB 5 or permitted first-language evidence. TEER 4–5 needs a test at CLB 4 and six months with the offering employer."],
        guide: ["Criteria view", "Evidence requirements depend on your category. The standard Skilled Worker category checks the job, candidate and employer requirements."],
      },
      aip: engineCriteriaVariant(aip, "Atlantic Immigration Program checks"),
    },
  };
}

export function yukon(page) {
  const intake = select("intake", "EOI intake", "ended", options(
    ["ended", "2026 intake windows ended"], ["review", "Check a later intake notice"],
  ));
  const fields = [
    select("location", "Yukon work location", "whitehorse", options(["whitehorse", "Whitehorse"], ["rural", "Rural Yukon community"])),
    select("occupation", "Offered occupation", "3", occupationOptions),
    select("education", "Minimum education and training", "yes", employerOptions("High school diploma · qualifications indicated")),
    select("work", "Full-time related work", "24", options(["0", "Under 6 months"], ["6", "6–11 months"], ["12", "12–23 months"], ["24", "2 years"], ["36", "3 years or more"])),
    select("language", "Approved test · lowest band", "6", numericOptions([3, 4, 5, 6, 7, 8, 9, 10]).map((item) => item.value === "6" ? { ...item, label: "CLB 6 · valid test" } : item)),
    select("status", "Status and work authorization", "yes", options(["yes", "Valid work permit"], ["outside", "Outside Canada"], ["review", "Status to confirm"], ["no", "No current authorization"])),
    select("offer", "Yukon job offer", "yes", jobOptions("35–40 hours/week · permanent, year-round")),
    select("wage", "Median wage for the position", "yes", employerOptions("Indicated on offer")),
    select("employer", "Employer eligibility and licences", "review", employerOptions("Employer requirements confirmed")),
    select("recruitment", "Recruitment evidence", "review", employerOptions("Recruitment evidence available")),
  ];
  const priority = engineCriteriaVariant(page.stream, "Yukon EOI priority factors");
  return {
    title: "Yukon pathway details",
    description: "The example uses Skilled Worker and the 2026 employer-led intake priorities.",
    defaultRoute: "skilled",
    routeField: select("route", "YNP stream", "skilled", options(["skilled", "Skilled Worker"], ["critical", "Critical Impact Worker"], ["ee", "Express Entry"]), { highlight: true }),
    variants: Object.fromEntries(["skilled", "critical", "ee"].map((route) => {
      const critical = route === "critical";
      return [route, {
        controls: [intake],
        section: "Worker, job and employer evidence",
        fields,
        steps: ["Pathway", "Criteria", "EOI priorities"],
        activeStep: 1,
        priority,
        resultTitle: "Yukon criteria check",
        criteria: (a) => [
          criterion("Education and relevant full-time work", "Profile", a, ["education", "work"], (x) => eligible(x.education) && Number(x.work) >= (critical ? 6 : 12)),
          criterion("Approved language result and status", "Language", a, ["occupation", "language", "status"], (x) => {
            const teer = Number(x.occupation);
            const minimum = critical ? 4 : (teer <= 1 ? 6 : 5);
            return route !== "ee" && (critical ? teer >= 4 : teer < 4)
              && Number(x.language) >= minimum && ["yes", "outside"].includes(x.status);
          }),
          criterion("Permanent, full-time, year-round offer", "Offer", a, ["offer", "wage"], (x) => eligible(x.offer) && eligible(x.wage)),
          criterion("Employer eligibility and recruitment", "Employer", a, ["employer", "recruitment"], (x) => eligible(x.employer) && eligible(x.recruitment)),
        ],
        warningDetail: "Employer and recruitment evidence",
        note: "Yukon ranks employer submissions by the priorities for each intake. Check the published intake dates and current requirements.",
        callout: ["Stream-specific minimums", route === "ee"
          ? "Confirm the language and eligibility requirements for the applicable federal Express Entry program."
          : critical
            ? "Critical Impact Worker requires six months of relevant full-time work and CLB 4 for TEER 4–5."
            : "Skilled Worker requires 12 months of related experience. The language minimum is CLB 6 for TEER 0–1 or CLB 5 for TEER 2–3."],
        guide: ["2026 EOI priorities", "Yukon considers regulated health care, rural work, years lived and worked in Yukon, Yukon University graduation, French ability and qualifying support letters."],
      }];
    })),
  };
}

export function guideVariant(title, message, source) {
  return {
    section: "Guide requirements",
    fields: [select("guideChecked", "Official guide reviewed", "", options(["yes", "I reviewed the requirements"], ["review", "I need to read the requirements"]))],
    resultTitle: title,
    criteria: (a) => [criterion("Review the official program guide", "Guide", a, ["guideChecked"], (x) => eligible(x.guideChecked))],
    callout: [title, message],
    guide: [title, message],
    source,
  };
}

function engineCriteriaVariant(stream, title) {
  return {
    section: "Pathway evidence",
    fields: stream.questions.map((q) => engineField(stream, q.key)),
    resultTitle: title,
    criteria: criteriaFromEngine(stream),
    callout: ["Review the pathway", stream.focus],
  };
}
