"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, Calculator, CheckCircle2, Info, RotateCcw, ShieldCheck } from "lucide-react";
import { ToolCard, ToolHeader, ToolInput, ToolResetButton, ToolResultCard, ToolSelect } from "./ui/ToolPrimitives";

const LOCATION_GROUPS = [
  {
    label: "Greater Toronto Area",
    locations: [
      { value: "Toronto", label: "Toronto", points: 0, tier: "GTA" },
      { value: "Durham", label: "Durham", points: 5, tier: "GTA" },
      { value: "Halton", label: "Halton", points: 5, tier: "GTA" },
      { value: "Peel", label: "Peel (Brampton and Mississauga)", points: 5, tier: "GTA" },
      { value: "York", label: "York", points: 5, tier: "GTA" },
    ],
  },
  {
    label: "Eastern Ontario",
    locations: [
      { value: "Ottawa", label: "Ottawa", points: 10, tier: "Tier 2" },
      { value: "Frontenac", label: "Frontenac", points: 10, tier: "Tier 2" },
      { value: "Hastings", label: "Hastings", points: 10, tier: "Tier 2" },
      { value: "Peterborough", label: "Peterborough", points: 10, tier: "Tier 2" },
      { value: "Kawartha Lakes", label: "Kawartha Lakes", points: 10, tier: "Tier 3" },
      { value: "Lanark", label: "Lanark", points: 10, tier: "Tier 3" },
      { value: "Leeds and Grenville", label: "Leeds and Grenville", points: 10, tier: "Tier 3" },
      { value: "Lennox and Addington", label: "Lennox and Addington", points: 10, tier: "Tier 3" },
      { value: "Northumberland", label: "Northumberland", points: 10, tier: "Tier 3" },
      { value: "Prescott and Russell", label: "Prescott and Russell", points: 10, tier: "Tier 3" },
      { value: "Prince Edward", label: "Prince Edward", points: 10, tier: "Tier 3" },
      { value: "Renfrew", label: "Renfrew", points: 10, tier: "Tier 3" },
      { value: "Stormont Dundas and Glengarry", label: "Stormont, Dundas and Glengarry", points: 10, tier: "Tier 3" },
    ],
  },
  {
    label: "Central Ontario outside the GTA",
    locations: [
      { value: "Waterloo", label: "Waterloo", points: 10, tier: "Tier 2" },
      { value: "Simcoe", label: "Simcoe", points: 10, tier: "Tier 2" },
      { value: "Wellington", label: "Wellington", points: 10, tier: "Tier 2" },
      { value: "Dufferin", label: "Dufferin", points: 10, tier: "Tier 3" },
      { value: "Grey", label: "Grey", points: 10, tier: "Tier 3" },
    ],
  },
  {
    label: "Southwestern Ontario",
    locations: [
      { value: "Hamilton", label: "Hamilton", points: 10, tier: "Tier 2" },
      { value: "Niagara", label: "Niagara", points: 10, tier: "Tier 2" },
      { value: "Middlesex", label: "Middlesex", points: 10, tier: "Tier 2" },
      { value: "Essex", label: "Essex", points: 10, tier: "Tier 2" },
      { value: "Brant", label: "Brant", points: 10, tier: "Tier 2" },
      { value: "Bruce", label: "Bruce", points: 10, tier: "Tier 3" },
      { value: "Chatham-Kent", label: "Chatham-Kent", points: 10, tier: "Tier 3" },
      { value: "Elgin", label: "Elgin", points: 10, tier: "Tier 3" },
      { value: "Haldimand-Norfolk", label: "Haldimand-Norfolk", points: 10, tier: "Tier 3" },
      { value: "Huron", label: "Huron", points: 10, tier: "Tier 3" },
      { value: "Lambton", label: "Lambton", points: 10, tier: "Tier 3" },
      { value: "Oxford", label: "Oxford", points: 10, tier: "Tier 3" },
      { value: "Perth", label: "Perth", points: 10, tier: "Tier 3" },
    ],
  },
  {
    label: "Northern Ontario",
    locations: [
      { value: "Greater Sudbury", label: "Greater Sudbury", points: 15, tier: "Tier 2" },
      { value: "Thunder Bay", label: "Thunder Bay", points: 15, tier: "Tier 2" },
      { value: "Muskoka", label: "Muskoka", points: 15, tier: "Tier 3" },
      { value: "Haliburton", label: "Haliburton", points: 15, tier: "Tier 3" },
      { value: "Nipissing", label: "Nipissing", points: 15, tier: "Tier 3" },
      { value: "Parry Sound", label: "Parry Sound", points: 15, tier: "Tier 3" },
      { value: "Manitoulin", label: "Manitoulin", points: 15, tier: "Tier 3" },
      { value: "Sudbury District", label: "Sudbury District", points: 15, tier: "Tier 3" },
      { value: "Timiskaming", label: "Timiskaming", points: 15, tier: "Tier 3" },
      { value: "Cochrane", label: "Cochrane", points: 15, tier: "Tier 3" },
      { value: "Algoma", label: "Algoma", points: 15, tier: "Tier 3" },
      { value: "Rainy River", label: "Rainy River", points: 15, tier: "Tier 3" },
      { value: "Kenora", label: "Kenora", points: 15, tier: "Tier 3" },
    ],
  },
];

const ALL_LOCATIONS = LOCATION_GROUPS.flatMap((group) => group.locations);
const INITIAL_ANSWERS = {
  pathway: "",
  location: "",
  teer: "",
  nocCategory: "",
  hourlyWage: "",
  positionMonths: "",
  otherOntarioMonths: "",
  earnings: "",
  status: "",
  education: "",
  educationOrigin: "",
  canadianCredentials: "",
  languageLevel: "",
  languageTestValid: "",
  bothLanguages: "",
  canadaStatus: "",
  ontarioIntent: "",
  skilledTrade: "",
  driverNoc: "",
};

function getLocation(value) {
  return ALL_LOCATIONS.find((location) => location.value === value) || ALL_LOCATIONS.find((location) => location.value === "Peel");
}

function Field({ label, help, children, className = "" }) {
  return <div className={`tool-field grid gap-[0.35rem] ${className}`}>
    <label className="grid gap-[0.35rem] text-[var(--template-ink)] text-[0.78rem] font-extrabold tracking-[-0.01em]">
      <span>{label}</span>
      {children}
    </label>
    {help && <p className="tool-field__hint m-0 text-[var(--template-muted)] text-[0.68rem] leading-[1.4]">{help}</p>}
  </div>;
}

function SelectField({ label, help, value, onChange, options, className = "" }) {
  return <Field label={label} help={help} className={className}>
    <ToolSelect className="mt-2" value={value || ""} onChange={(event) => onChange(event.target.value)}>
      <option value="">Choose an answer</option>
      {options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
    </ToolSelect>
  </Field>;
}

function NumberField({ label, help, value, onChange, min = 0, max, step = 1, prefix, suffix, className = "" }) {
  return <Field label={label} help={help} className={className}>
    <div className="relative mt-2">
      {prefix && <span className="pointer-events-none absolute inset-y-0 left-3 z-[1] flex items-center text-sm font-semibold text-[var(--template-muted)]">{prefix}</span>}
      <ToolInput className={`${prefix ? "pl-8" : ""} ${suffix ? "pr-14" : ""}`} type="number" min={min} max={max} step={step} value={value ?? ""} onChange={(event) => onChange(event.target.value)} />
      {suffix && <span className="pointer-events-none absolute inset-y-0 right-3 z-[1] flex items-center text-xs font-semibold text-[var(--template-muted)]">{suffix}</span>}
    </div>
  </Field>;
}

function FormSection({ title, description, children }) {
  return <section className="rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4 sm:p-5">
    <h3 className="m-0 text-base font-extrabold text-[var(--template-ink)]">{title}</h3>
    {description && <p className="mb-0 mt-1 text-[0.72rem] leading-[1.5] text-[var(--template-muted)]">{description}</p>}
    <div className="mt-4 grid gap-4 sm:grid-cols-2">{children}</div>
  </section>;
}

function choicePoints(value, map) {
  return value && Object.prototype.hasOwnProperty.call(map, value) ? map[value] : 0;
}

function wageScore(value) {
  const wage = Number(value);
  if (!Number.isFinite(wage)) return 0;
  if (wage >= 40) return 15;
  if (wage >= 35) return 12;
  if (wage >= 30) return 10;
  if (wage >= 25) return 8;
  if (wage >= 20) return 5;
  return 0;
}

function experienceScore(positionMonths, otherMonths) {
  const position = Number(positionMonths);
  const other = Number(otherMonths);
  if (position > 24) return 18;
  if (position >= 13) return 15;
  if (position >= 6) return 12;
  if (other > 24) return 12;
  if (other >= 13) return 9;
  if (other >= 6) return 6;
  return 0;
}

function earningsScore(value) {
  return choicePoints(value, { under30: 0, from30: 4, from50: 6, from70: 8, from80: 10 });
}

function educationScore(value) {
  return choicePoints(value, { doctorate: 10, masters: 8, aboveBachelor: 6, bachelor: 6, college: 5, trade: 5, secondary: 0, belowSecondary: 0 });
}

function statusScore(value) {
  return choicePoints(value, { workPermit: 10, studyPermit: 5, other: 0 });
}

function languageScore(value) {
  return choicePoints(value, { clb9: 15, clb8: 12, clb7: 8, clb6: 4, clb5: 0, none: 0 });
}

function clbValue(value) {
  const match = String(value || "").match(/^clb(\d+)$/);
  return match ? Number(match[1]) : 0;
}

function scoreAnswers(answers, location) {
  const physician = answers.pathway === "physician";
  const teerPoints = physician ? 9 : choicePoints(answers.teer, { "teer-0-1": 9, "teer-2-3": 6, "teer-4-5": 0 });
  const broadCategoryPoints = physician ? 10 : choicePoints(answers.nocCategory, { "0": 4, "1": 4, "2": 6, "3": 10, "4": 4, "5": 2, "6": 2, "7": 8, "8": 4, "9": 4 });
  const experience = physician ? experienceScore(answers.practiceMonths, 0) : experienceScore(answers.positionMonths, answers.otherOntarioMonths);
  const selectedEducationScore = educationScore(answers.education);
  const verifiedEducationScore = answers.educationOrigin === "foreign" && answers.ecaValid !== "yes" ? 0 : selectedEducationScore;
  const credentialPoints = choicePoints(answers.canadianCredentials, { multiple: 10, one: 5, none: 0 });
  const languagePoints = answers.languageTestValid === "yes" ? languageScore(answers.languageLevel) : 0;
  const twoLanguagePoints = answers.languageTestValid === "yes" ? (answers.bothLanguages === "yes" ? 10 : answers.bothLanguages === "no" ? 5 : 0) : 0;
  return {
    max: physician ? 117 : 132,
    factors: [
      ["NOC TEER category", teerPoints, 9],
      ["NOC broad occupational category", broadCategoryPoints, 10],
      ["Hourly wage", physician ? null : wageScore(answers.hourlyWage), physician ? null : 15],
      ["Ontario work experience / medical practice", experience, 18],
      ["Canadian earnings history", earningsScore(answers.earnings), 10],
      ["Legal status in Canada", statusScore(answers.status), 10],
      ["Highest education", verifiedEducationScore, 10],
      ["Canadian education credentials", credentialPoints, 10],
      ["Official language ability", languagePoints, 15],
      ["Both official languages", twoLanguagePoints, 10],
      ["Ontario location", location.points, 15],
    ].filter((factor) => factor[1] != null),
  };
}

function getResult(answers, location) {
  const failures = [];
  const warnings = [];
  const physician = answers.pathway === "physician";
  const isTeer03 = answers.pathway === "teer-0-3";
  const isTeer45 = answers.pathway === "teer-4-5";
  const recentGraduate = answers.recentGraduate === "yes";
  const skilledTrade = answers.skilledTrade === "yes";
  const driverNoc = answers.driverNoc === "yes";
  const graduateLanguageExemption = isTeer03 && recentGraduate;

  if (!physician && answers.ontarioIntent === "no") failures.push("You must intend to live and work in Ontario.");
  if (!physician && answers.ontarioIntent !== "yes") warnings.push("Confirm your intention to live and work in Ontario.");
  if (!physician && answers.canadaStatus === "inside-no-status") failures.push("If you apply from inside Canada, you must hold valid temporary resident status.");
  if (!physician && !answers.canadaStatus) warnings.push("Confirm whether you will apply from inside or outside Canada and, if inside, that you have temporary resident status.");
  if (!physician && location.tier !== "GTA" && answers.ruralLocation !== "no") warnings.push("Ontario notes that lower gross-revenue thresholds apply to rural census divisions with fewer than 150,000 people. Confirm whether the work location qualifies and which threshold applies in the current employer guide.");
  if (!physician && answers.languageTestValid === "yes" && answers.languageLevel === "none") failures.push("Select the lowest CLB you can support with the valid language test.");

  if (physician) {
    if (answers.selfEmployed === "no") failures.push("The physician pathway is for physicians who are or will be self-employed.");
    if (!answers.selfEmployed) warnings.push("Confirm that you are or will be self-employed as a physician.");
    if (answers.ohipBilling === "no") failures.push("The physician pathway requires eligibility to bill through OHIP.");
    if (answers.ohipBilling !== "yes") warnings.push("Confirm your OHIP billing eligibility.");
    if (answers.cpsoClass === "none") failures.push("The physician pathway requires CPSO registration in an eligible class and good standing.");
    if (!answers.cpsoClass) warnings.push("Select your CPSO registration class.");
    if (answers.postgraduateOnly === "yes") failures.push("A postgraduate education licence alone does not qualify for the self-employed physician pathway.");
    if (answers.postgraduateOnly !== "no") warnings.push("Confirm you do not hold only a postgraduate education licence.");
  } else {
    if (answers.fullTimePermanent === "no") failures.push("The Ontario job offer must be full-time and permanent.");
    if (answers.fullTimePermanent !== "yes") warnings.push("Confirm the position is full-time and permanent.");
    if (answers.urgent === "no") failures.push("The position must be urgently necessary to the employer’s business.");
    if (answers.urgent !== "yes") warnings.push("Confirm the position is urgently necessary to the employer’s business.");
    if (answers.labourDispute === "yes") failures.push("The job offer cannot affect the employment of a person involved in a labour dispute.");
    if (answers.labourDispute !== "no") warnings.push("Confirm the offer does not affect a labour dispute.");
    if (answers.wageThreshold === "below") failures.push("The offer must meet the applicable regional Job Bank wage level.");
    if (answers.wageThreshold === "low" && !(isTeer03 && recentGraduate)) failures.push("The low-wage exception is limited to qualifying recent Ontario graduates with TEER 0–3 offers.");
    if (!answers.wageThreshold) warnings.push("Confirm the offer meets the applicable median wage, or the eligible recent-graduate low-wage exception.");

    if (isTeer03) {
      let experienceMet = false;
      if (driverNoc) experienceMet = Number(answers.positionMonths) >= 6;
      else if (answers.experienceMethod === "position6") experienceMet = Number(answers.positionMonths) >= 6;
      else if (answers.experienceMethod === "graduate3") experienceMet = recentGraduate && Number(answers.positionMonths) >= 3;
      else if (answers.experienceMethod === "sameNoc2") experienceMet = Number(answers.sameNocYears) >= 2;
      else if (answers.experienceMethod === "licence") experienceMet = answers.licenceValid === "yes" && !driverNoc;
      if (!experienceMet && answers.experienceMethod) failures.push(driverNoc ? "NOC 73300/73301 requires at least 6 months in the job-offer position." : "The selected TEER 0–3 work-experience or licence route is not met.");
      if (!answers.experienceMethod) warnings.push("Select how you meet the TEER 0–3 work-experience or licence rule.");
      const requiredClb = skilledTrade ? 5 : 6;
      if (!graduateLanguageExemption && answers.languageLevel && clbValue(answers.languageLevel) < requiredClb) failures.push(`TEER 0–3 normally requires CLB ${requiredClb} in all four abilities for this occupation.`);
      if (!recentGraduate && !answers.languageLevel) warnings.push("Confirm the required language level in all four abilities, or a recent-graduate exemption.");
      if (answers.education === "belowSecondary" || (answers.education === "secondary" && !skilledTrade)) failures.push("TEER 0–3 generally requires at least one year of post-secondary education unless the listed-trade exception applies.");
    }
    if (isTeer45) {
      if (answers.positionMonths && Number(answers.positionMonths) < 9) failures.push("TEER 4–5 requires at least 9 months of qualifying work in the job-offer position within the last 2 years.");
      if (!answers.positionMonths) warnings.push("Enter your cumulative months in the job-offer position during the last 2 years.");
      if (answers.languageLevel && clbValue(answers.languageLevel) < 4) failures.push("TEER 4–5 requires at least CLB 4 in all four abilities.");
      if (!answers.languageLevel) warnings.push("Confirm CLB 4 or higher in all four abilities.");
      if (answers.education === "belowSecondary") failures.push("Confirm you meet the secondary-school education requirement or equivalent.");
    }
    if (!physician && answers.educationOrigin === "foreign" && answers.ecaValid === "no") failures.push("The selected foreign education does not have a current ECA for the claim entered.");
    if (answers.educationOrigin === "foreign" && !answers.ecaValid) warnings.push("Confirm that your foreign education is supported by an ECA that meets Ontario’s validity rules.");
    if (answers.applicantLocation && answers.applicantLocation !== "ontario-authorized" && answers.recruitment !== "completed" && answers.recruitment !== "not-required") {
      if (answers.recruitment === "not-completed") failures.push("Reasonable domestic recruitment may be required unless you are already authorized to work in Ontario or the employer has a qualifying LMIA.");
      else warnings.push("Check whether domestic recruitment evidence is required for your location and work authorization.");
    }
    if (answers.equity === "other") failures.push("Applicant or family equity is only allowed when it was granted as employee remuneration and totals less than 10% of the business.");
    if (answers.equity === "under10") warnings.push("Confirm the under-10% equity was granted as part of employee remuneration and includes the applicant’s family members’ combined holdings.");
    if (!answers.equity) warnings.push("Confirm whether you or a family member hold equity in the employer’s business.");
    if (driverNoc && answers.cvorSafety === "no") failures.push("NOC 73300/73301 employers need a qualifying CVOR certificate and safety rating.");
    if (driverNoc && !answers.cvorSafety) warnings.push("Confirm the employer has a current CVOR and qualifying safety rating for NOC 73300/73301.");

    if (answers.employerYears && Number(answers.employerYears) < 3) failures.push("The employer must have been actively operating for at least 3 years.");
    if (!answers.employerYears) warnings.push("Enter how many years the employer has actively operated.");
    if (answers.staffAtLocation && Number(answers.staffAtLocation) < (location.tier === "GTA" ? 5 : 3)) failures.push(`The employer needs at least ${location.tier === "GTA" ? 5 : 3} full-time Canadian/PR employees at the relevant location.`);
    if (!answers.staffAtLocation) warnings.push("Enter the number of full-time Canadian/PR employees at the relevant work/report location.");
    const standardRevenueThreshold = location.tier === "GTA" ? 1000000 : location.tier === "Tier 2" ? 500000 : 250000;
    const ruralRevenueReview = location.tier !== "GTA" && answers.ruralLocation !== "no";
    if (answers.revenueMostRecent && Number(answers.revenueMostRecent) < standardRevenueThreshold) {
      if (ruralRevenueReview) warnings.push(`Revenue is below the standard ${location.tier} band. A rural threshold may apply; confirm the exact rule with Ontario before treating this as a failure.`);
      else failures.push(`The employer does not meet the ${location.tier} revenue threshold for ${location.label}.`);
    }
    if (!answers.revenueMostRecent) warnings.push("Enter the employer’s gross revenue for the most recently completed fiscal year.");
    if (location.tier === "Tier 3" && answers.revenuePrevious && Number(answers.revenuePrevious) < 250000) {
      if (ruralRevenueReview) warnings.push("Previous-year revenue is below the standard Tier 3 band. A rural threshold may apply; confirm the exact rule with Ontario before treating this as a failure.");
      else failures.push("Tier 3 locations require at least $250,000 gross revenue in each of the last two completed fiscal years.");
    }
    if (location.tier === "Tier 3" && !answers.revenuePrevious) warnings.push("Tier 3 locations also require $250,000 in the previous completed fiscal year.");
    if (answers.premisesOntario === "no") failures.push("The employer needs business premises in Ontario where you will work.");
    if (answers.premisesOntario !== "yes") warnings.push("Confirm the employer has Ontario premises at the relevant work location.");
    if (answers.compliance === "orders") failures.push("The employer cannot have outstanding orders under the ESA or OHSA.");
    if (answers.compliance !== "clean") warnings.push("Confirm the employer has no outstanding ESA or OHSA orders.");
  }

  if (!physician && answers.languageTestValid === "no" && !graduateLanguageExemption) failures.push("Language test results must be valid and less than two years old when you apply.");
  if (!physician && answers.languageTestValid === "no" && graduateLanguageExemption) warnings.push("Confirm the recent-graduate language-test exemption applies to your credential and pathway.");
  if (!physician && answers.languageTestValid === "" && answers.languageLevel && answers.languageLevel !== "none") warnings.push("Confirm your language test is less than two years old when you apply.");

  return { failures: [...new Set(failures)], warnings: [...new Set(warnings)] };
}

function MissingFields({ missing }) {
  if (!missing.length) return null;
  return <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-3 text-[0.7rem] leading-[1.5] text-[var(--template-ink)]">
    <strong className="font-extrabold">Complete the required selections to finish the estimate.</strong>
    <p className="mb-0 mt-1 text-[var(--template-muted)]">Still needed: {missing.join(", ")}.</p>
  </div>;
}

export default function OinpWorkforceCalculator() {
  const [answers, setAnswers] = useState(INITIAL_ANSWERS);
  const location = getLocation(answers.location);
  const physician = answers.pathway === "physician";
  const score = useMemo(() => scoreAnswers(answers, location), [answers, location]);
  const result = useMemo(() => getResult(answers, location), [answers, location]);
  const minimumFields = physician
    ? ["pathway", "location", "practiceMonths", "selfEmployed", "ohipBilling", "cpsoClass", "postgraduateOnly"]
    : [
        "pathway", "location", "teer", "nocCategory", "hourlyWage", "positionMonths", "fullTimePermanent", "wageThreshold", "urgent", "labourDispute",
        "driverNoc", "applicantLocation", "employerYears", "revenueMostRecent", "staffAtLocation", "premisesOntario", "compliance",
        ...(answers.pathway === "teer-0-3" ? ["experienceMethod", "skilledTrade", "recentGraduate"] : []),
        ...(location.tier !== "GTA" ? ["ruralLocation"] : []),
      ];
  const scoreFields = ["earnings", "status", "education", "educationOrigin", "canadianCredentials", "languageLevel", "bothLanguages", "languageTestValid"];
  const eligibilityFields = physician ? [] : ["ontarioIntent", "canadaStatus"];
  const sharedFields = [...scoreFields, ...eligibilityFields];
  const missingFields = [...sharedFields, ...minimumFields]
    .filter((key) => answers[key] === undefined || answers[key] === "")
    .map((key) => key === "nocCategory" ? "NOC broad category" : key.replace(/([A-Z])/g, " $1").toLowerCase());
  if (answers.educationOrigin === "foreign" && !answers.ecaValid) missingFields.push("ECA status");
  if (!physician && answers.pathway === "teer-0-3" && answers.experienceMethod === "sameNoc2" && !answers.sameNocYears) missingFields.push("same-NOC work experience");
  if (!physician && answers.pathway === "teer-0-3" && answers.experienceMethod === "licence" && !answers.licenceValid) missingFields.push("mandatory licence / authorization");
  if (!physician && location.tier === "Tier 3" && !answers.revenuePrevious) missingFields.push("previous fiscal year revenue");
  if (!physician && answers.applicantLocation && answers.applicantLocation !== "ontario-authorized" && !answers.recruitment) missingFields.push("recruitment/LMIA exception");
  if (!physician && (answers.equity === undefined || answers.equity === "")) missingFields.push("employer equity status");
  if (!physician && answers.driverNoc === "yes" && !answers.cvorSafety) missingFields.push("CVOR and safety rating");
  const hasEnoughInformation = missingFields.length === 0;

  const update = (key, value) => setAnswers((current) => ({ ...current, [key]: value }));
  const reset = () => setAnswers(INITIAL_ANSWERS);
  const currentStatus = !hasEnoughInformation
    ? { label: "Estimate in progress", tone: "amber", Icon: Info }
    : result.failures.length
      ? { label: "Likely not eligible yet", tone: "red", Icon: AlertTriangle }
      : result.warnings.length
        ? { label: "Core requirements look met; check these", tone: "amber", Icon: AlertTriangle }
        : { label: "Core requirements look met", tone: "green", Icon: CheckCircle2 };
  const statusTone = {
    red: "border-red-500/25 bg-red-500/10 text-red-800 dark:text-red-200",
    amber: "border-amber-500/25 bg-amber-500/10 text-amber-900 dark:text-amber-100",
    green: "border-emerald-500/25 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100",
  }[currentStatus.tone];
  const StatusIcon = currentStatus.Icon;

  return <ToolCard id="oinp-calculator" className="oinp-calculator-card scroll-mt-24 overflow-visible" aria-labelledby="oinp-calculator-title">
    <ToolHeader
      icon={Calculator}
      kicker="Ontario Workforce Priority stream"
      title="OINP points calculator"
      titleId="oinp-calculator-title"
      subtitle="Estimate your Expression of Interest (EOI) points and check the main eligibility gates. The initial 47/132 is a sample profile; change the answers to match your own evidence. Your answers stay in this page session and are not saved or sent."
      action={<ToolResetButton onClick={reset}><RotateCcw className="h-3.5 w-3.5" /> Reset</ToolResetButton>}
    />
    <div className="grid items-start gap-5 p-3 sm:p-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,.75fr)]">
      <div className="grid min-w-0 gap-4">
        <FormSection title="1. Choose your pathway" description="Select the route that matches your Ontario job offer or medical practice.">
          <SelectField label="Ontario Workforce Priority pathway" value={answers.pathway} onChange={(value) => update("pathway", value)} options={[
            { value: "teer-0-3", label: "Job offer · TEER 0–3" },
            { value: "teer-4-5", label: "Job offer · TEER 4–5" },
            { value: "physician", label: "Self-employed physician" },
          ]} />
          <Field label="Ontario work / practice location" help={`Regional points: ${location.points}. Employer revenue tier: ${location.tier}.`} className="sm:col-span-2">
            <ToolSelect className="mt-2" value={answers.location} onChange={(event) => update("location", event.target.value)}>
              {LOCATION_GROUPS.map((group) => <optgroup key={group.label} label={group.label}>{group.locations.map((item) => <option key={item.value} value={item.value}>{item.label} · {item.points} regional points · {item.tier}</option>)}</optgroup>)}
            </ToolSelect>
          </Field>
        </FormSection>

        {!physician ? <>
          <FormSection title="2. Job offer and occupation" description="Use the offer’s base hourly wage. Confirm the wage benchmark for the specific occupation and region with Job Bank or Ontario’s current instructions.">
            <SelectField label="NOC TEER category" value={answers.teer} onChange={(value) => update("teer", value)} options={[
              { value: "teer-0-1", label: "TEER 0 or 1" }, { value: "teer-2-3", label: "TEER 2 or 3" }, { value: "teer-4-5", label: "TEER 4 or 5" },
            ]} />
            <SelectField label="First digit of your 5-digit NOC" help="Ontario uses the NOC broad occupational category for this factor." value={answers.nocCategory} onChange={(value) => update("nocCategory", value)} options={Array.from({ length: 10 }, (_, index) => ({ value: String(index), label: `NOC broad category ${index}` }))} />
            <NumberField label="Base hourly wage (CAD)" prefix="$" suffix="per hour" min={0} max={200} step={0.01} value={answers.hourlyWage} onChange={(value) => update("hourlyWage", value)} />
            <SelectField label="Does the offer meet the required regional wage level?" help="Usually the median wage; a qualifying recent Ontario graduate in TEER 0–3 may use the low-wage level. A collective agreement can change how this is assessed." value={answers.wageThreshold} onChange={(value) => update("wageThreshold", value)} options={[
              { value: "median", label: "Yes · median wage or higher" }, { value: "low", label: "Yes · eligible recent-graduate low-wage exception" }, { value: "below", label: "No · below the applicable wage level" },
            ]} />
            <SelectField label="Is this a listed skilled-trade occupation?" value={answers.skilledTrade} onChange={(value) => update("skilledTrade", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />
            <SelectField label="Is the job NOC 73300 or 73301?" help="These truck and bus/transit occupations must meet the 6-month in-position experience rule." value={answers.driverNoc} onChange={(value) => update("driverNoc", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />
            <SelectField label="Is the position full-time and permanent?" help="Full-time means at least 30 paid hours a week and 1,560 hours a year; permanent means no end date." value={answers.fullTimePermanent} onChange={(value) => update("fullTimePermanent", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />
            <SelectField label="Is the position urgently necessary to the employer?" value={answers.urgent} onChange={(value) => update("urgent", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />
            <SelectField label="Would the offer affect a labour dispute?" value={answers.labourDispute} onChange={(value) => update("labourDispute", value)} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes"}]} />
          </FormSection>

          <FormSection title="3. Work experience" description="Enter completed work only. Ontario scoring months and minimum eligibility months are different checks.">
            <NumberField label="Months in this job-offer position" help={answers.pathway === "teer-4-5" ? "Cumulative, paid full-time months in this position within the last 2 years." : "Use months with the same employer, occupation and location where required."} value={answers.positionMonths} onChange={(value) => update("positionMonths", value)} min={0} max={240} suffix="months" />
            {answers.pathway === "teer-0-3" && <>
              <SelectField label="How do you meet the TEER 0–3 work-experience rule?" value={answers.experienceMethod} onChange={(value) => update("experienceMethod", value)} options={[
                { value: "position6", label: "6 months in the job-offer position" }, { value: "graduate3", label: "3 months · qualifying Ontario graduate" }, { value: "sameNoc2", label: "2 years in the same NOC occupation" }, { value: "licence", label: "Mandatory licence / authorization" }, { value: "unmet", label: "I do not meet one of these routes" },
              ]} />
              <SelectField label="Qualifying recent Ontario graduate?" help="Generally an eligible 2-year credential, Ontario College Graduate Certificate, Master’s or PhD completed in Ontario within the last 3 years." value={answers.recentGraduate} onChange={(value) => update("recentGraduate", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />
              {answers.experienceMethod === "sameNoc2" && <NumberField label="Completed years in the same NOC in the last 5 years" value={answers.sameNocYears} onChange={(value) => update("sameNocYears", value)} min={0} max={30} suffix="years" />}
              {answers.experienceMethod === "licence" && <SelectField label="Do you hold the mandatory licence / authorization?" value={answers.licenceValid} onChange={(value) => update("licenceValid", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />}
            </>}
            {Number(answers.positionMonths) < 6 && <NumberField label="Other completed Ontario work experience" help="Used for EOI work-experience points if you have less than 6 months in the job-offer position." value={answers.otherOntarioMonths} onChange={(value) => update("otherOntarioMonths", value)} min={0} max={240} suffix="months" />}
          </FormSection>

          <FormSection title="4. Employer eligibility" description={`For ${location.label}: ${location.tier === "GTA" ? "$1,000,000 revenue in the latest completed fiscal year and 5 full-time Canadian/PR employees" : location.tier === "Tier 2" ? "$500,000 revenue in the latest completed fiscal year and 3 full-time Canadian/PR employees" : "$250,000 revenue in each of the last 2 completed fiscal years and 3 full-time Canadian/PR employees"}. Ontario notes that lower revenue requirements apply to rural census divisions with fewer than 150,000 people; verify any rural adjustment in the current employer guide.`}>
            <NumberField label="Years actively operating" value={answers.employerYears} onChange={(value) => update("employerYears", value)} min={0} max={100} suffix="years" />
            <NumberField label="Gross revenue · most recent fiscal year" prefix="$" value={answers.revenueMostRecent} onChange={(value) => update("revenueMostRecent", value)} min={0} max={1000000000} step={1000} />
            {location.tier === "Tier 3" && <NumberField label="Gross revenue · previous completed fiscal year" prefix="$" help="Tier 3 requires at least $250,000 in each of the last two completed fiscal years." value={answers.revenuePrevious} onChange={(value) => update("revenuePrevious", value)} min={0} max={1000000000} step={1000} />}
            {location.tier !== "GTA" && <SelectField label="Does the work location fall in a rural census division (population under 150,000)?" help="Ontario says lower revenue requirements apply to qualifying rural locations. This tool cannot verify the population or calculate an unpublished rural adjustment." value={answers.ruralLocation} onChange={(value) => update("ruralLocation", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "not-sure", label: "Not sure" }]} />}
            <NumberField label="Full-time Canadian / PR employees at work/report location" value={answers.staffAtLocation} onChange={(value) => update("staffAtLocation", value)} min={0} max={10000} />
            <SelectField label="Does the employer have Ontario premises at the work location?" value={answers.premisesOntario} onChange={(value) => update("premisesOntario", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />
            <SelectField label="Outstanding ESA or OHSA orders?" value={answers.compliance} onChange={(value) => update("compliance", value)} options={[{ value: "clean", label: "No outstanding orders" }, { value: "orders", label: "Yes"}]} />
            <SelectField label="Are you already authorized to work in Ontario?" help="If not, the employer generally needs to show domestic recruitment unless it has a positive LMIA for the same NOC and position." value={answers.applicantLocation} onChange={(value) => update("applicantLocation", value)} options={[
              { value: "ontario-authorized", label: "Yes" }, { value: "other", label: "No"},
            ]} />
            {answers.applicantLocation === "other" && <SelectField label="Domestic recruitment / LMIA evidence" value={answers.recruitment} onChange={(value) => update("recruitment", value)} options={[
              { value: "completed", label: "Reasonable recruitment completed" }, { value: "not-required", label: "Not required · qualifying LMIA exception" }, { value: "not-completed", label: "Not completed / not sure"},
            ]} />}
            <SelectField label="Do you or a family member hold equity in the employer?" help="Equity is allowed only when granted as employee remuneration and the combined total is under 10%." value={answers.equity} onChange={(value) => update("equity", value)} options={[
              { value: "none", label: "No" }, { value: "under10", label: "Yes · under 10% and granted as employee remuneration" }, { value: "other", label: "Yes · 10% or more or not granted as employee remuneration"},
            ]} />
            {answers.driverNoc === "yes" && <SelectField label="Does the employer have a valid CVOR and qualifying safety rating?" value={answers.cvorSafety} onChange={(value) => update("cvorSafety", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />}
          </FormSection>
        </> : <FormSection title="2. Medical practice" description="The physician pathway has separate eligibility requirements and does not use the employer checks for job-offer applicants.">
          <NumberField label="Cumulative Ontario medical practice" value={answers.practiceMonths} onChange={(value) => update("practiceMonths", value)} min={0} max={240} suffix="months" />
          <SelectField label="Are you or will you be self-employed as a physician?" value={answers.selfEmployed} onChange={(value) => update("selfEmployed", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />
          <SelectField label="Are you eligible to bill OHIP for publicly funded health services?" value={answers.ohipBilling} onChange={(value) => update("ohipBilling", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />
          <SelectField label="CPSO registration class and good standing" value={answers.cpsoClass} onChange={(value) => update("cpsoClass", value)} options={[
            { value: "independent", label: "Independent practice · good standing" }, { value: "academic", label: "Academic practice · good standing" }, { value: "provisional", label: "Provisional · good standing" }, { value: "none", label: "None of these / not in good standing"},
          ]} />
          <SelectField label="Do you hold only a postgraduate education licence?" value={answers.postgraduateOnly} onChange={(value) => update("postgraduateOnly", value)} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes"}]} />
        </FormSection>}

        <FormSection title={physician ? "3. Profile and language points" : "5. Profile, education and language"} description={physician ? "These details estimate EOI points. The physician pathway’s eligibility requirements are the OHIP billing and CPSO registration checks above." : "Choose the highest completed credential and the valid results you can document."}>
          <SelectField label="Best Canadian earnings year in the past 5 years" help="Use CRA Notice of Assessment income for the selected year." value={answers.earnings} onChange={(value) => update("earnings", value)} options={[
            { value: "under30", label: "Under $30,000" }, { value: "from30", label: "$30,000–$49,999" }, { value: "from50", label: "$50,000–$69,999" }, { value: "from70", label: "$70,000–$79,999" }, { value: "from80", label: "$80,000 or more" },
          ]} />
          <SelectField label="Current status in Canada" value={answers.status} onChange={(value) => update("status", value)} options={[
            { value: "workPermit", label: "Valid work permit" }, { value: "studyPermit", label: "Valid study permit" }, { value: "other", label: "No work or study permit / outside Canada"},
          ]} />
          {!physician && <SelectField label="Where will you apply from?" help="If applying from inside Canada, you must hold valid temporary resident status. A visitor record can be temporary resident status even though it earns no status points here." value={answers.canadaStatus} onChange={(value) => update("canadaStatus", value)} options={[
            { value: "outside", label: "Outside Canada" }, { value: "inside-valid", label: "Inside Canada with valid temporary resident status" }, { value: "inside-no-status", label: "Inside Canada without valid temporary resident status"},
          ]} />}
          <SelectField label="Highest completed education" value={answers.education} onChange={(value) => update("education", value)} options={[
            { value: "doctorate", label: "Doctorate / professional degree in medicine or similar" }, { value: "masters", label: "Master’s degree" }, { value: "aboveBachelor", label: "University certificate/diploma above bachelor level" }, { value: "bachelor", label: "Bachelor’s degree" }, { value: "college", label: "College / university certificate or diploma (one year or more)" }, { value: "trade", label: "Apprenticeship / trades certificate" }, { value: "secondary", label: "High school / secondary school"}, { value: "belowSecondary", label: "Less than high school / secondary school"},
          ]} />
          <SelectField label="Where was this education completed?" value={answers.educationOrigin} onChange={(value) => update("educationOrigin", value)} options={[{ value: "canada", label: "Canada" }, { value: "foreign", label: "Outside Canada"}]} />
          {answers.educationOrigin === "foreign" && <SelectField label="Do you have the required ECA, issued within Ontario’s validity period?" value={answers.ecaValid} onChange={(value) => update("ecaValid", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No / expired"}]} />}
          <SelectField label="Eligible Canadian education credentials" value={answers.canadianCredentials} onChange={(value) => update("canadianCredentials", value)} options={[
            { value: "none", label: "None" }, { value: "one", label: "One qualifying credential" }, { value: "multiple", label: "More than one qualifying credential"},
          ]} />
          <SelectField label="Lowest CLB across all 4 language abilities" help={physician ? "Use a valid, approved test result to estimate language points; the physician eligibility route has separate requirements." : "Use a valid, approved test result. A qualifying recent Ontario graduate may be exempt from the test for TEER 0–3 eligibility, but a test score is still needed to claim language points."} value={answers.languageLevel} onChange={(value) => update("languageLevel", value)} options={[
            { value: "clb9", label: "CLB 9 or higher" }, { value: "clb8", label: "CLB 8" }, { value: "clb7", label: "CLB 7" }, { value: "clb6", label: "CLB 6" }, { value: "clb5", label: "CLB 5 or lower" }, { value: "none", label: "No valid language result"},
          ]} />
          <SelectField label="Valid approved language test result (< 2 years old)?" value={answers.languageTestValid} onChange={(value) => update("languageTestValid", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
          <SelectField label="Official languages" help="Points: 10 if English and French are both CLB 6+ in all four abilities; otherwise 5." value={answers.bothLanguages} onChange={(value) => update("bothLanguages", value)} options={[{ value: "no", label: "One language, or not both at CLB 6+" }, { value: "yes", label: "Both English and French at CLB 6+"}]} />
          {!physician && <SelectField label="Do you intend to live and work in Ontario?" value={answers.ontarioIntent} onChange={(value) => update("ontarioIntent", value)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No"}]} />}
        </FormSection>
      </div>

      <aside className="xl:sticky xl:top-40 xl:self-start" aria-live="polite">
        <div className="overflow-hidden rounded-[1.1rem] border border-[var(--template-border)] bg-[var(--template-surface)] shadow-[0_18px_46px_color-mix(in_srgb,var(--cmg-template-deep-surface)_12%,transparent)]">
          <ToolResultCard className="relative isolate min-h-0 rounded-none border-0 border-b border-white/15 border-l-4 border-l-[#ffd2d8] bg-[linear-gradient(135deg,#741026_0%,#a8122c_55%,#85142f_100%)] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.12)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_88%_8%,rgba(255,255,255,.16),transparent_38%)] before:content-[''] sm:p-6">
            <div className="relative z-[1]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="m-0 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] !text-white/90">Ontario Workforce Priority</p>
                  <p className="m-0 mt-1 text-sm font-bold !text-white">Estimated EOI score</p>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white shadow-[0_4px_14px_rgba(20,0,5,.16)]">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <p className="m-0 text-5xl font-extrabold tabular-nums tracking-[-0.05em] !text-white">{score.factors.reduce((total, factor) => total + factor[1], 0)}</p>
                <span className="text-base font-semibold tabular-nums !text-white/90">/ {score.max} points</span>
              </div>
              <p className="mb-0 mt-2 max-w-[34ch] text-xs leading-[1.55] !text-white/90">Updates as you change an answer. This estimate is not an invitation cutoff.</p>
            </div>
          </ToolResultCard>
          <div className="grid gap-4 p-4 sm:p-5">
            <div className={`flex items-start gap-2.5 rounded-xl border p-3 text-[0.72rem] font-extrabold leading-[1.45] ${statusTone}`}><StatusIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span>{currentStatus.label}</span></div>
            {!hasEnoughInformation && <MissingFields missing={missingFields.slice(0, 7)} />}
            {hasEnoughInformation && result.failures.length > 0 && <ul className="m-0 grid gap-2 pl-5 text-[0.71rem] leading-[1.5] text-red-800 dark:text-red-200">{result.failures.map((item) => <li key={item}>{item}</li>)}</ul>}
            {hasEnoughInformation && result.warnings.length > 0 && <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-3"><p className="m-0 flex items-start gap-2 text-[0.7rem] font-extrabold text-amber-900 dark:text-amber-100"><AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />Check these details</p><ul className="mb-0 mt-2 grid gap-1.5 pl-5 text-[0.68rem] leading-[1.45] text-[var(--template-muted)]">{result.warnings.map((item) => <li key={item}>{item}</li>)}</ul></div>}
            <div>
              <p className="m-0 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[var(--template-muted)]">Points by factor</p>
              <dl className="mb-0 mt-2 grid gap-1.5">{score.factors.map(([label, points, max]) => <div key={label} className="flex items-start justify-between gap-3 border-b border-[var(--template-border)] pb-1.5 text-[0.67rem]"><dt className="text-[var(--template-muted)]">{label}</dt><dd className="m-0 shrink-0 font-extrabold text-[var(--template-ink)]">{points}<span className="font-semibold text-[var(--template-muted)]"> / {max}</span></dd></div>)}</dl>
            </div>
            <div className="rounded-xl border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-3 text-[0.66rem] leading-[1.5] text-[var(--template-muted)]">
              <p className="m-0 font-extrabold text-[var(--template-ink)]">Location / employer tier · {location.label}</p>
              <p className="mb-0 mt-1">{location.points} regional points · {location.tier} revenue rule · {location.tier === "GTA" ? "$2,000" : "$1,500"} application fee.</p>
            </div>
            <a href="/contact/book-immigration-consultation-canada" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--template-primary)] px-4 text-center text-xs font-extrabold text-[var(--template-on-primary)] transition hover:opacity-90">Book an RCIC assessment</a>
            <p className="m-0 text-[0.61rem] leading-[1.5] text-[var(--template-muted)]">Last checked: 9 November 2026. This planning tool cannot verify your documents, Job Bank wage, employer records or eligibility decision. Confirm every rule on the <a className="font-extrabold text-[var(--template-primary)] underline underline-offset-2" href="https://www.ontario.ca/page/ontario-workforce-priority-stream" target="_blank" rel="noreferrer">official Ontario page</a>.</p>
          </div>
        </div>
      </aside>
    </div>
    <p className="mb-0 mt-4 flex items-start gap-2 text-[0.65rem] leading-[1.5] text-[var(--template-muted)]"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--template-primary)]" />Eligibility rules and EOI points are separate. Ontario verifies each claim and controls invitations; no score guarantees an invitation, nomination or permanent residence.</p>
  </ToolCard>;
}
