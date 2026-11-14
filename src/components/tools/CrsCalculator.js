"use client";

import { useMemo, useState } from "react";
import { Calculator, Info, RefreshCw, TrendingUp } from "lucide-react";
import {
  ToolCard,
  ToolCheckboxCard,
  ToolField,
  ToolHeader,
  ToolInput,
  ToolResultCard,
  ToolResetButton,
  ToolSelect,
  ToolStat,
} from "./ui/ToolPrimitives";

const ABILITIES = [
  { key: "speaking", label: "Speaking" },
  { key: "listening", label: "Listening" },
  { key: "reading", label: "Reading" },
  { key: "writing", label: "Writing" },
];
const EMPTY_SKILLS = { speaking: "", listening: "", reading: "", writing: "" };
const ZERO_SKILLS = { speaking: "0", listening: "0", reading: "0", writing: "0" };
const INITIAL = {
  age: "",
  education: "",
  primaryLanguage: "english",
  firstLanguage: EMPTY_SKILLS,
  hasSecondLanguage: false,
  secondLanguage: ZERO_SKILLS,
  canadianExperience: "",
  foreignExperience: "",
  hasSpouse: false,
  spouseEducation: "",
  spouseLanguage: EMPTY_SKILLS,
  spouseExperience: "",
  lmiType: "none",
  lmiWorkWage: "",
  lmiJobWage: "",
  certificateOfQualification: false,
  canadianEducation: "none",
  sibling: false,
  provincialNomination: false,
};

const EDUCATION = [
  { value: "none", label: "Less than secondary school", spouse: 0, single: 0 },
  { value: "hs", label: "Secondary diploma / high school", spouse: 28, single: 30 },
  { value: "one-year", label: "One-year post-secondary credential", spouse: 84, single: 90 },
  { value: "two-year", label: "Two-year post-secondary credential", spouse: 91, single: 98 },
  { value: "bachelor", label: "Bachelor’s / three or more year credential", spouse: 112, single: 120 },
  { value: "two-plus", label: "Two or more credentials, one 3+ years", spouse: 119, single: 128 },
  { value: "master", label: "Master’s or eligible professional degree", spouse: 126, single: 135 },
  { value: "phd", label: "Doctoral degree", spouse: 140, single: 150 },
];
const SPOUSE_EDUCATION = [
  { value: "none", label: "Less than secondary school", points: 0 },
  { value: "hs", label: "Secondary school", points: 2 },
  { value: "one-year", label: "One-year post-secondary", points: 6 },
  { value: "two-year", label: "Two-year post-secondary", points: 7 },
  { value: "bachelor", label: "Bachelor’s / 3+ year credential", points: 8 },
  { value: "two-plus", label: "Two or more credentials, one 3+ years", points: 9 },
  { value: "master", label: "Master’s or eligible professional degree", points: 10 },
  { value: "phd", label: "Doctoral degree", points: 10 },
];
const LANGUAGE_LEVELS = [
  { value: "0", label: "Below CLB/NCLC 4" },
  ...Array.from({ length: 7 }, (_, index) => ({ value: String(index + 4), label: index === 6 ? "CLB/NCLC 10 or higher" : "CLB/NCLC " + (index + 4) })),
];
const EXPERIENCE = [
  { value: "0", label: "None or less than 1 year" },
  { value: "1", label: "1 year" },
  { value: "2", label: "2 years" },
  { value: "3", label: "3 years" },
  { value: "4", label: "4 years" },
  { value: "5", label: "5 years or more" },
];
const CANADIAN_EXPERIENCE_POINTS = { "0": [0, 0], "1": [35, 40], "2": [46, 53], "3": [56, 64], "4": [63, 72], "5": [70, 80] };
const SPOUSE_EXPERIENCE_POINTS = { "0": 0, "1": 5, "2": 7, "3": 8, "4": 9, "5": 10 };
const SELECT_CLASS = "h-[3.15rem] w-full rounded-[0.75rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-3 text-[0.83rem] font-semibold text-[var(--template-ink)] outline-none focus:border-[var(--template-primary)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--template-primary)_14%,transparent)]";

function numeric(value) { return Number(value) || 0; }
function minLevel(levels) { return Math.min(...levels.map(numeric)); }
function agePoints(ageValue, spouse) {
  const age = Number(ageValue);
  const points = spouse
    ? { 18: 90, 19: 95, 20: 100, 21: 100, 22: 100, 23: 100, 24: 100, 25: 100, 26: 100, 27: 100, 28: 100, 29: 100, 30: 95, 31: 90, 32: 85, 33: 80, 34: 75, 35: 70, 36: 65, 37: 60, 38: 55, 39: 50, 40: 45, 41: 35, 42: 25, 43: 15, 44: 5 }
    : { 18: 99, 19: 105, 20: 110, 21: 110, 22: 110, 23: 110, 24: 110, 25: 110, 26: 110, 27: 110, 28: 110, 29: 110, 30: 105, 31: 99, 32: 94, 33: 88, 34: 83, 35: 77, 36: 72, 37: 66, 38: 61, 39: 55, 40: 50, 41: 39, 42: 28, 43: 17, 44: 6 };
  return points[age] || 0;
}
function firstLanguagePoints(levels, spouse) {
  const map = spouse ? { 0: 0, 1: 0, 2: 0, 3: 0, 4: 6, 5: 6, 6: 8, 7: 16, 8: 22, 9: 29, 10: 32 } : { 0: 0, 1: 0, 2: 0, 3: 0, 4: 6, 5: 6, 6: 9, 7: 17, 8: 23, 9: 31, 10: 34 };
  return levels.reduce((sum, level) => sum + (map[numeric(level)] || 0), 0);
}
function secondLanguagePoints(levels, spouse) {
  const valueMap = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 1, 6: 1, 7: 3, 8: 3, 9: 6, 10: 6 };
  const maximum = spouse ? 22 : 24;
  return Math.min(maximum, levels.reduce((sum, level) => sum + (valueMap[numeric(level)] || 0), 0));
}
function spouseLanguagePoints(levels) {
  const map = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 1, 6: 1, 7: 3, 8: 3, 9: 5, 10: 5 };
  return Math.min(20, levels.reduce((sum, level) => sum + (map[numeric(level)] || 0), 0));
}
function isAdvancedEducation(value) {
  return ["two-plus", "master", "phd"].includes(value);
}
function getLanguageTransferability(levels) {
  const minimum = minLevel(levels);
  if (minimum >= 9) return "strong";
  if (minimum >= 7) return "good";
  return "below";
}
function calcTransferability(form) {
  const first = ABILITIES.map(({ key }) => form.firstLanguage[key]);
  const minimum = minLevel(first);
  const postSecondary = !["", "none", "hs"].includes(form.education);
  const advanced = isAdvancedEducation(form.education);
  const canadianYears = numeric(form.canadianExperience);
  const foreignYears = numeric(form.foreignExperience);
  const languageBand = getLanguageTransferability(first);

  let educationLanguage = 0;
  if (postSecondary && languageBand !== "below") {
    educationLanguage = advanced
      ? (languageBand === "strong" ? 50 : 25)
      : (languageBand === "strong" ? 25 : 13);
  }
  let educationCanada = 0;
  if (postSecondary && canadianYears >= 1) {
    educationCanada = advanced
      ? (canadianYears >= 2 ? 50 : 25)
      : (canadianYears >= 2 ? 25 : 13);
  }
  const educationSection = Math.min(50, educationLanguage + educationCanada);

  let foreignLanguage = 0;
  if (foreignYears > 0 && languageBand !== "below") {
    foreignLanguage = foreignYears >= 3
      ? (languageBand === "strong" ? 50 : 25)
      : (languageBand === "strong" ? 25 : 13);
  }
  let foreignCanada = 0;
  if (foreignYears > 0 && canadianYears >= 1) {
    foreignCanada = foreignYears >= 3
      ? (canadianYears >= 2 ? 50 : 25)
      : (canadianYears >= 2 ? 25 : 13);
  }
  const foreignSection = Math.min(50, foreignLanguage + foreignCanada);
  const trade = form.certificateOfQualification
    ? (minimum >= 7 ? 50 : minimum >= 5 ? 25 : 0)
    : 0;
  return {
    education: educationSection,
    foreignWork: foreignSection,
    trade,
    total: Math.min(100, educationSection + foreignSection + trade),
  };
}

function getLmiPoints(form, spouse) {
  if (form.lmiType === "work") {
    const years = numeric(form.canadianExperience);
    const workLength = (CANADIAN_EXPERIENCE_POINTS[String(Math.min(5, years))] || [0, 0])[spouse ? 0 : 1];
    const highWageWork = years >= 1 ? numeric(form.lmiWorkWage) : 0;
    return workLength + highWageWork;
  }
  if (form.lmiType === "job") return numeric(form.lmiJobWage);
  return 0;
}

function getFrenchAdditional(form) {
  const first = ABILITIES.map(({ key }) => numeric(form.firstLanguage[key]));
  const second = ABILITIES.map(({ key }) => numeric(form.secondLanguage[key]));
  const french = form.primaryLanguage === "french" ? first : (form.hasSecondLanguage ? second : [0, 0, 0, 0]);
  const english = form.primaryLanguage === "english" ? first : (form.hasSecondLanguage ? second : [0, 0, 0, 0]);
  if (Math.min(...french) < 7) return 0;
  return Math.min(...english) >= 5 ? 50 : Math.max(...english) <= 4 ? 25 : 0;
}

function calculate(form) {
  const spouse = form.hasSpouse;
  const first = ABILITIES.map(({ key }) => form.firstLanguage[key]);
  const second = ABILITIES.map(({ key }) => form.secondLanguage[key]);
  const spouseLanguage = ABILITIES.map(({ key }) => form.spouseLanguage[key]);
  const education = EDUCATION.find((item) => item.value === form.education);
  const spouseEducation = SPOUSE_EDUCATION.find((item) => item.value === form.spouseEducation);
  const transferability = calcTransferability(form);
  const spouseFirstLanguage = spouse ? spouseLanguagePoints(spouseLanguage) : 0;
  const spouseWork = spouse ? SPOUSE_EXPERIENCE_POINTS[form.spouseExperience] || 0 : 0;
  const spouseFactors = spouse ? ((spouseEducation?.points || 0) + spouseFirstLanguage + spouseWork) : 0;
  const lmi = getLmiPoints(form, spouse);
  const french = getFrenchAdditional(form);
  const canadianEducation = form.canadianEducation === "1" ? 15 : form.canadianEducation === "3" ? 30 : 0;
  const additionalRaw = (form.sibling ? 15 : 0) + french + canadianEducation + (form.provincialNomination ? 600 : 0);
  const additional = Math.min(600, additionalRaw);
  const firstLanguage = firstLanguagePoints(first, spouse);
  const secondOfficialLanguage = form.hasSecondLanguage ? secondLanguagePoints(second, spouse) : 0;
  const canadianExp = form.canadianExperience === "" ? 0 : (CANADIAN_EXPERIENCE_POINTS[form.canadianExperience] || [0, 0])[spouse ? 0 : 1];
  const rows = [
    { label: "Age", points: agePoints(form.age, spouse) },
    { label: "Education", points: spouse ? (education?.spouse || 0) : (education?.single || 0) },
    { label: "First official language", points: firstLanguage },
    { label: "Second official language", points: secondOfficialLanguage },
    { label: "Labour Market Integration", points: lmi },
    { label: "Spouse factors", points: spouseFactors },
    { label: "Skill transferability", points: transferability.total },
    { label: "Additional points", points: additional },
  ];
  const complete = form.age !== "" && form.education !== "" && first.every((level) => level !== "")
    && form.canadianExperience !== "" && form.foreignExperience !== ""
    && (!form.hasSecondLanguage || second.every((level) => level !== ""))
    && (!spouse || (form.spouseEducation !== "" && spouseLanguage.every((level) => level !== "") && form.spouseExperience !== ""))
    && (form.lmiType === "none" || (form.lmiType === "work" ? form.lmiWorkWage !== "" : form.lmiJobWage !== ""));
  const score = rows.reduce((sum, row) => sum + row.points, 0);
  return {
    score,
    rows,
    complete,
    transferability,
    canadianExp,
    french,
    additional,
    lmi,
  };
}

function Field({ label, id, hint, children }) {
  return <ToolField label={label} htmlFor={id} hint={hint}>{children}</ToolField>;
}
function LevelFields({ title, prefix, values, onChange, languageLabel = "CLB/NCLC" }) {
  return (
    <section className="grid gap-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4">
      <h3 className="m-0 text-sm font-extrabold text-[var(--template-ink)]">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {ABILITIES.map(({ key, label }) => {
          const id = prefix + "-" + key;
          return <Field key={id} label={label + " " + languageLabel} id={id}><ToolSelect className={SELECT_CLASS} id={id} value={values[key]} onChange={onChange(key)}><option value="">Choose level</option>{LANGUAGE_LEVELS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</ToolSelect></Field>;
        })}
      </div>
    </section>
  );
}

export default function CrsCalculator() {
  const [form, setForm] = useState(INITIAL);
  const result = useMemo(() => calculate(form), [form]);
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const setCheck = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.checked }));
  const updateSkills = (group) => (key) => (event) => setForm((current) => ({ ...current, [group]: { ...current[group], [key]: event.target.value } }));
  const reset = () => setForm(INITIAL);

  return (
    <ToolCard className="crs-calculator rounded-[1.35rem]" aria-labelledby="crs-calculator-title">
      <ToolHeader
        icon={Calculator}
        kicker="Express Entry · updated for November 2026"
        title="Comprehensive Ranking System (CRS) calculator"
        titleId="crs-calculator-title"
        subtitle="Estimate your current CRS score using individual language abilities, spouse factors, skill transferability and the new Labour Market Integration factor."
        action={<ToolResetButton onClick={reset}><RefreshCw className="h-3.5 w-3.5" /> Reset</ToolResetButton>}
      />
      <div className="tool-card__body grid gap-5 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]">
        <p className="m-0 rounded-[0.9rem] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-primary)_5%,var(--template-surface-alt))] px-4 py-3 text-[0.72rem] leading-[1.5] text-[var(--template-muted)]">Your score depends on the accompanying-spouse rule. Select “with spouse” only if your spouse or partner is accompanying you and is not a Canadian citizen or permanent resident. Use the CLB converter to map approved language test results.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Age" id="crs-age"><ToolInput id="crs-age" type="number" min="0" max="100" step="1" placeholder="Age" value={form.age} onChange={update("age")} /></Field>
          <Field label="Education" id="crs-education"><ToolSelect className={SELECT_CLASS} id="crs-education" value={form.education} onChange={update("education")}><option value="">Choose education</option>{EDUCATION.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</ToolSelect></Field>
          <Field label="First official language test" id="crs-primary-language"><ToolSelect className={SELECT_CLASS} id="crs-primary-language" value={form.primaryLanguage} onChange={update("primaryLanguage")}><option value="english">English</option><option value="french">French</option></ToolSelect></Field>
          <Field label="Canadian work experience" id="crs-canadian-experience"><ToolSelect className={SELECT_CLASS} id="crs-canadian-experience" value={form.canadianExperience} onChange={update("canadianExperience")}><option value="">Choose years</option>{EXPERIENCE.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</ToolSelect></Field>
          <Field label="Foreign skilled work experience" id="crs-foreign-experience"><ToolSelect className={SELECT_CLASS} id="crs-foreign-experience" value={form.foreignExperience} onChange={update("foreignExperience")}><option value="">Choose years</option><option value="0">None</option><option value="1">1–2 years</option><option value="3">3 years or more</option></ToolSelect></Field>
        </div>
        <ToolCheckboxCard
          label="I am applying with an accompanying spouse or common-law partner"
          hint="Select no if they are not accompanying you or are a Canadian citizen or permanent resident."
          checked={form.hasSpouse}
          onChange={(event) => setForm((current) => ({
            ...current,
            hasSpouse: event.target.checked,
            spouseEducation: event.target.checked ? "" : "",
            spouseExperience: event.target.checked ? "" : "",
            spouseLanguage: event.target.checked ? EMPTY_SKILLS : EMPTY_SKILLS,
          }))}
        />
        <LevelFields title="Your first official language" prefix="crs-first" values={form.firstLanguage} onChange={updateSkills("firstLanguage")} />
        <ToolCheckboxCard label="I have a second official language result to include" hint="Second-language points are calculated for each ability. Leave unchecked if you are not claiming a second language." checked={form.hasSecondLanguage} onChange={(event) => setForm((current) => ({ ...current, hasSecondLanguage: event.target.checked, secondLanguage: event.target.checked ? EMPTY_SKILLS : ZERO_SKILLS }))} />
        {form.hasSecondLanguage && <LevelFields title="Your second official language" prefix="crs-second" values={form.secondLanguage} onChange={updateSkills("secondLanguage")} />}
        <section className="grid gap-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-4">
          <div>
            <h3 className="m-0 text-sm font-extrabold text-[var(--template-ink)]">Labour Market Integration factor</h3>
            <p className="mb-0 mt-1 text-[0.7rem] leading-[1.5] text-[var(--template-muted)]">Claim either Canadian-work-experience points plus any qualifying high-wage work bonus, or a high-wage job-offer score. These routes do not combine.</p>
          </div>
          <Field label="Which Labour Market Integration route are you claiming?" id="crs-lmi-type">
            <ToolSelect className={SELECT_CLASS} id="crs-lmi-type" value={form.lmiType} onChange={update("lmiType")}><option value="none">No Labour Market Integration points</option><option value="work">Canadian work experience</option><option value="job">Qualifying high-wage job offer</option></ToolSelect>
          </Field>
          {form.lmiType === "work" && <Field label="High-wage occupation work of at least 12 months" id="crs-lmi-work-wage" hint="Choose the highest eligible wage multiple for your Canadian work. The calculator adds this to the work-length points above."><ToolSelect className={SELECT_CLASS} id="crs-lmi-work-wage" value={form.lmiWorkWage} onChange={update("lmiWorkWage")}><option value="">Choose a wage category</option><option value="0">No qualifying high-wage work</option><option value="20">At least 1.3× the occupation median</option><option value="40">At least 1.5× the occupation median</option><option value="70">At least 2× the occupation median</option></ToolSelect></Field>}
          {form.lmiType === "job" && <Field label="Qualifying high-wage job offer category" id="crs-lmi-job-wage" hint="Use the occupation’s wage multiple in the current IRCC rules. LMIA points are no longer part of CRS."><ToolSelect className={SELECT_CLASS} id="crs-lmi-job-wage" onChange={update("lmiJobWage")} value={form.lmiJobWage}><option value="">Choose a wage category</option><option value="0">Below 1.3× the occupation median · 0</option><option value="50">At least 1.3× · 50 points</option><option value="70">At least 1.5× · 70 points</option><option value="100">At least 2× · 100 points</option></ToolSelect></Field>}
        </section>
        <ToolCheckboxCard label="I hold a trade certificate of qualification" hint="Used only in the CRS skill-transferability factor for eligible trade occupations." checked={form.certificateOfQualification} onChange={setCheck("certificateOfQualification")} />
        {form.hasSpouse && (
          <section className="grid gap-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-4">
            <h3 className="m-0 text-sm font-extrabold text-[var(--template-ink)]">Accompanying spouse or partner factors</h3>
            <Field label="Spouse/partner education" id="crs-spouse-education"><ToolSelect className={SELECT_CLASS} id="crs-spouse-education" value={form.spouseEducation} onChange={update("spouseEducation")}><option value="">Choose education</option>{SPOUSE_EDUCATION.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</ToolSelect></Field>
            <LevelFields title="Spouse/partner first official language" prefix="crs-spouse" values={form.spouseLanguage} onChange={updateSkills("spouseLanguage")} />
            <Field label="Spouse/partner Canadian work experience" id="crs-spouse-experience"><ToolSelect className={SELECT_CLASS} id="crs-spouse-experience" value={form.spouseExperience} onChange={update("spouseExperience")}><option value="">Choose years</option>{EXPERIENCE.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</ToolSelect></Field>
          </section>
        )}
        <section className="grid gap-3 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-4 sm:grid-cols-2">
          <h3 className="m-0 text-sm font-extrabold text-[var(--template-ink)] sm:col-span-2">Additional CRS factors</h3>
          <Field label="Canadian post-secondary education" id="crs-canadian-education"><ToolSelect className={SELECT_CLASS} id="crs-canadian-education" value={form.canadianEducation} onChange={update("canadianEducation")}><option value="none">None</option><option value="1">Credential of 1 or 2 years</option><option value="3">Credential of 3 or more years</option></ToolSelect></Field>
          <ToolCheckboxCard label="Sibling in Canada who is a citizen or permanent resident" checked={form.sibling} onChange={setCheck("sibling")} />
          <ToolCheckboxCard label="Provincial or territorial nomination" hint="Adds 600 CRS points." checked={form.provincialNomination} onChange={setCheck("provincialNomination")} />
          <FrenchPreview points={result.french} />
        </section>
        <ToolResultCard className="min-h-0" aria-live="polite">
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="m-0 flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><TrendingUp className="h-3.5 w-3.5" /> Current CRS estimate</p>
              <p className="mb-0 mt-2 text-[clamp(2rem,1.4rem+3vw,3.25rem)] font-extrabold leading-none">{result.complete ? result.score : "—"} <span className="text-base font-bold opacity-75">/ 1,270</span></p>
              <p className="mb-0 mt-2 text-sm leading-[1.5]">{result.complete ? "This is an estimate based on the values you entered. Verify each factor against your documents and IRCC’s live tool." : "Complete the required profile and test scores to calculate a current CRS estimate."}</p>
            </div>
            <div className="grid gap-2 sm:min-w-[15rem]">
              {result.rows.map((row) => <ToolStat key={row.label} label={row.label} value={row.points + " points"} />)}
            </div>
          </div>
        </ToolResultCard>
        <p className="m-0 flex items-start gap-2 text-[0.68rem] leading-[1.5] text-[var(--template-muted)]"><Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--template-primary)]" />The Labour Market Integration factor is applied only through one route at a time. For Canadian-work points, the high-wage component requires at least 12 months in qualifying occupations. A qualifying job offer must satisfy IRCC’s current criteria; an LMIA is no longer required for CRS points.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] font-extrabold text-[var(--template-primary)]">
          <a className="underline underline-offset-4" href="/tools/clb-converter-canada">Convert language scores</a>
          <a className="underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html" target="_blank" rel="noreferrer">Current IRCC CRS criteria</a>
          <a className="underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html" target="_blank" rel="noreferrer">Official CRS calculator</a>
        </div>
      </div>
    </ToolCard>
  );
}

function FrenchPreview({ points }) {
  return (
    <div className="rounded-[0.85rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-3 text-[0.7rem] leading-[1.5] text-[var(--template-muted)]">
      <strong className="block text-[var(--template-ink)]">French additional points: {points}</strong>
      <span>Calculated from the English/French combination in your first and second official language scores.</span>
    </div>
  );
}
