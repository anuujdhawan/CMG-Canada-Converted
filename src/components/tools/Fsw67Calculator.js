"use client";

import { useMemo, useState } from "react";
import { Award, Info, RefreshCw, TrendingUp } from "lucide-react";
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
const EDUCATION = [
  { value: "0", label: "Less than secondary school", points: 0 },
  { value: "5", label: "Secondary school diploma", points: 5 },
  { value: "15", label: "One-year post-secondary credential", points: 15 },
  { value: "19", label: "Two-year post-secondary credential", points: 19 },
  { value: "21", label: "Bachelor’s degree or 3+ year credential", points: 21 },
  { value: "22", label: "Two or more credentials (one 3+ years)", points: 22 },
  { value: "23", label: "Master’s or eligible professional degree", points: 23 },
  { value: "25", label: "Doctoral degree", points: 25 },
];
const EXPERIENCE = [
  { value: "0", label: "Less than 1 year", points: 0 },
  { value: "1", label: "1 year", points: 9 },
  { value: "2", label: "2–3 years", points: 11 },
  { value: "4", label: "4–5 years", points: 13 },
  { value: "6", label: "6 or more years", points: 15 },
];
const LANGUAGES = Array.from({ length: 13 }, (_, value) => ({ value: String(value), label: value === 0 ? "Below CLB 4" : "CLB " + value }));
const EMPTY_SKILLS = { speaking: "", listening: "", reading: "", writing: "" };
const INITIAL = {
  age: "",
  education: "",
  experience: "",
  firstLanguage: EMPTY_SKILLS,
  hasSecondLanguage: false,
  secondLanguage: EMPTY_SKILLS,
  workMinimum: "",
  teerEligible: "",
  workWithin10Years: "",
  outsideQuebec: "",
  foreignEducationEca: "",
  languageResultsValid: "",
  funds: "",
  arrangedEmployment: "no",
  spouseLanguage: false,
  applicantStudy: false,
  spouseStudy: false,
  applicantCanadianWork: false,
  spouseCanadianWork: false,
  relativeInCanada: false,
};

function agePoints(ageValue) {
  if (ageValue === "") return 0;
  const age = Number(ageValue);
  if (age >= 18 && age <= 35) return 12;
  if (age >= 36 && age <= 46) return 47 - age;
  return 0;
}

function languagePoints(level) {
  const value = Number(level);
  if (value < 7) return 0;
  if (value === 7) return 4;
  if (value === 8) return 5;
  return 6;
}

function getResult(form) {
  const firstLevels = Object.values(form.firstLanguage);
  const secondLevels = form.hasSecondLanguage ? Object.values(form.secondLanguage) : [];
  const firstPoints = firstLevels.reduce((sum, level) => sum + (level === "" ? 0 : languagePoints(level)), 0);
  const secondPoints = form.hasSecondLanguage && secondLevels.every((level) => level !== "" && Number(level) >= 5) ? 4 : 0;
  const adaptabilityItems = [
    form.spouseLanguage ? 5 : 0,
    form.applicantStudy ? 5 : 0,
    form.spouseStudy ? 5 : 0,
    form.applicantCanadianWork ? 10 : 0,
    form.spouseCanadianWork ? 5 : 0,
    form.arrangedEmployment === "yes" ? 5 : 0,
    form.relativeInCanada ? 5 : 0,
  ];
  const adaptability = Math.min(10, adaptabilityItems.reduce((sum, points) => sum + points, 0));
  const breakdown = [
    { label: "Language", points: firstPoints + secondPoints, max: 28 },
    { label: "Education", points: Number(form.education) || 0, max: 25 },
    { label: "Skilled work experience", points: Number(form.experience) || 0, max: 15 },
    { label: "Age", points: agePoints(form.age), max: 12 },
    { label: "Arranged employment", points: form.arrangedEmployment === "yes" ? 10 : 0, max: 10 },
    { label: "Adaptability (capped)", points: adaptability, max: 10 },
  ];
  const score = breakdown.reduce((sum, item) => sum + item.points, 0);
  const languageComplete = ABILITIES.every(({ key }) => form.firstLanguage[key] !== "")
    && (!form.hasSecondLanguage || ABILITIES.every(({ key }) => form.secondLanguage[key] !== ""));
  const ageEligible = Number(form.age) >= 18;
  const educationEligible = Number(form.education) >= 5;
  const inputComplete = form.age !== "" && form.education !== "" && form.experience !== "" && languageComplete
    && form.workMinimum !== "" && form.teerEligible !== "" && form.workWithin10Years !== ""
    && form.outsideQuebec !== "" && form.foreignEducationEca !== "" && form.languageResultsValid !== "" && form.funds !== "";
  const minimumLanguage = ABILITIES.every(({ key }) => Number(form.firstLanguage[key]) >= 7);
  const requiredChecks = [
    form.workMinimum === "yes",
    form.teerEligible === "yes",
    form.workWithin10Years === "yes",
    form.outsideQuebec === "yes",
    ageEligible,
    educationEligible,
    form.languageResultsValid === "yes",
    form.foreignEducationEca === "yes",
    form.funds === "yes" || form.funds === "not-required",
  ];
  return { score, breakdown, adaptability, minimumLanguage, ageEligible, educationEligible, inputComplete, requiredChecks };
}

function SelectField({ label, id, value, onChange, children, hint }) {
  return (
    <ToolField label={label} htmlFor={id} hint={hint}>
      <ToolSelect id={id} value={value} onChange={onChange}>
        {children}
      </ToolSelect>
    </ToolField>
  );
}

export default function Fsw67Calculator() {
  const [form, setForm] = useState(INITIAL);
  const result = useMemo(() => getResult(form), [form]);
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const setSkill = (group, ability) => (event) => setForm((current) => ({
    ...current,
    [group]: { ...current[group], [ability]: event.target.value },
  }));
  const setCheck = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.checked }));
  const reset = () => setForm(INITIAL);

  return (
    <ToolCard aria-labelledby="fsw-67-calculator-title">
      <ToolHeader
        icon={Award}
        kicker="Federal Skilled Worker · Selection grid"
        title="FSW 67-point calculator"
        titleId="fsw-67-calculator-title"
        subtitle="Calculate the program’s 100-point selection-factor score. This is separate from your Express Entry CRS score."
        action={<ToolResetButton onClick={reset}><RefreshCw className="h-3.5 w-3.5" /> Reset</ToolResetButton>}
      />
      <div className="tool-card__body grid gap-5 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]">
        <section className="grid gap-4 sm:grid-cols-2">
          <ToolField label="Age on the date you apply" htmlFor="fsw-age" hint="FSW awards age points from 18 to 46; the maximum is 12.">
            <ToolInput id="fsw-age" type="number" min="0" max="100" step="1" value={form.age} onChange={update("age")} placeholder="Enter age" />
          </ToolField>
          <SelectField label="Highest assessed education" id="fsw-education" value={form.education} onChange={update("education")} hint="Foreign credentials need an immigration-purpose ECA to claim their equivalent.">
            <option value="">Choose education</option>
            {EDUCATION.map((item) => <option key={item.value} value={item.value}>{item.label} · {item.points} points</option>)}
          </SelectField>
          <SelectField label="Qualifying skilled work experience" id="fsw-experience" value={form.experience} onChange={update("experience")} hint="Count qualifying skilled work in Canada or abroad; the selection factor caps at 15 points.">
            <option value="">Choose experience</option>
            {EXPERIENCE.map((item) => <option key={item.value} value={item.value}>{item.label} · {item.points} points</option>)}
          </SelectField>
          <ToolField label="First official language" hint="Enter your CLB/NCLC level in each ability. The FSW minimum is level 7 in every ability.">
            <div className="flex h-[3.15rem] items-center rounded-[0.75rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-3 text-sm font-semibold text-[var(--template-muted)]">Choose levels below</div>
          </ToolField>
        </section>
        <LanguageGrid title="First official language — maximum 24 points" values={form.firstLanguage} onChange={setSkill("firstLanguage")} prefix="first" />
        <ToolCheckboxCard
          label="I want to claim second official language points"
          hint="Adds 4 points only when all four abilities are at CLB/NCLC 5 or higher."
          checked={form.hasSecondLanguage}
          onChange={setCheck("hasSecondLanguage")}
        />
        {form.hasSecondLanguage && <LanguageGrid title="Second official language — 4 points when all four meet level 5" values={form.secondLanguage} onChange={setSkill("secondLanguage")} prefix="second" />}
        <section className="grid gap-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-4 sm:grid-cols-2">
          <h3 className="m-0 text-sm font-extrabold text-[var(--template-ink)] sm:col-span-2">Basic program checks</h3>
          <SelectField label="At least one year of continuous paid skilled work in your primary occupation?" id="fsw-work-minimum" value={form.workMinimum} onChange={update("workMinimum")}>
            <YesNo />
          </SelectField>
          <SelectField label="Is the occupation in NOC TEER 0, 1, 2 or 3?" id="fsw-teer" value={form.teerEligible} onChange={update("teerEligible")}>
            <YesNo />
          </SelectField>
          <SelectField label="Was the work experience gained within the last 10 years?" id="fsw-work-recent" value={form.workWithin10Years} onChange={update("workWithin10Years")}>
            <YesNo />
          </SelectField>
          <SelectField label="Do you plan to live outside Quebec?" id="fsw-location" value={form.outsideQuebec} onChange={update("outsideQuebec")}>
            <YesNo />
          </SelectField>
          <SelectField label="Is your education Canadian, or does a foreign credential have a valid immigration ECA?" id="fsw-eca" value={form.foreignEducationEca} onChange={update("foreignEducationEca")}>
            <option value="">Choose an answer</option><option value="yes">Yes</option><option value="no">No</option>
          </SelectField>
          <SelectField label="Are your approved language test results less than 2 years old?" id="fsw-language-valid" value={form.languageResultsValid} onChange={update("languageResultsValid")}>
            <YesNo />
          </SelectField>
          <SelectField label="Settlement funds" id="fsw-funds" value={form.funds} onChange={update("funds")}>
            <option value="">Choose an answer</option><option value="yes">I meet the current fund requirement</option><option value="not-required">IRCC says proof of funds is not required for my situation</option><option value="no">I do not meet it</option><option value="unsure">I am not sure</option>
          </SelectField>
        </section>
        <section className="grid gap-3 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-4">
          <div>
            <h3 className="m-0 text-sm font-extrabold text-[var(--template-ink)]">Arranged employment and adaptability</h3>
            <p className="mb-0 mt-1 text-[0.7rem] leading-[1.5] text-[var(--template-muted)]">Adaptability selections are combined and capped at 10 points.</p>
          </div>
          <SelectField label="Do you have a qualifying Canadian job offer for FSW arranged-employment points?" id="fsw-job-offer" value={form.arrangedEmployment} onChange={update("arrangedEmployment")} hint="A qualifying offer can add 10 selection points and 5 adaptability points. An LMIA is not required under current Express Entry rules.">
            <option value="no">No</option><option value="yes">Yes — it meets the current IRCC requirements</option>
          </SelectField>
          <div className="grid gap-3 sm:grid-cols-2">
            <ToolCheckboxCard label="Spouse/partner has CLB 4+ in all four abilities" checked={form.spouseLanguage} onChange={setCheck("spouseLanguage")} />
            <ToolCheckboxCard label="I completed 2 academic years of full-time study in Canada" checked={form.applicantStudy} onChange={setCheck("applicantStudy")} />
            <ToolCheckboxCard label="My accompanying spouse completed 2 academic years of full-time study in Canada" checked={form.spouseStudy} onChange={setCheck("spouseStudy")} />
            <ToolCheckboxCard label="I completed 1 authorized year of Canadian TEER 0–3 work" checked={form.applicantCanadianWork} onChange={setCheck("applicantCanadianWork")} />
            <ToolCheckboxCard label="My accompanying spouse completed 1 authorized year of Canadian work" checked={form.spouseCanadianWork} onChange={setCheck("spouseCanadianWork")} />
            <ToolCheckboxCard label="I or my spouse has a qualifying close relative in Canada" checked={form.relativeInCanada} onChange={setCheck("relativeInCanada")} />
          </div>
        </section>
        <ToolResultCard className="min-h-0" aria-live="polite">
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="m-0 flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><TrendingUp className="h-3.5 w-3.5" /> FSW selection-factor result</p>
              <p className="mb-0 mt-2 text-[clamp(2rem,1.4rem+3vw,3.25rem)] font-extrabold leading-none">{result.inputComplete ? result.score : "—"} <span className="text-base font-bold opacity-75">/ 100</span></p>
              <p className="mb-0 mt-2 text-sm leading-[1.5]">{!result.inputComplete ? "Complete the score fields and program checks to see the result." : !result.ageEligible ? "The Federal Skilled Worker Program requires applicants to be at least 18 years old." : !result.educationEligible ? "The program requires at least a Canadian high-school diploma or foreign equivalent." : !result.minimumLanguage ? "The first official language minimum is not met: at least CLB/NCLC 7 is needed in every ability." : !result.requiredChecks.every(Boolean) ? "At least one required program check is not met or still needs review." : result.score >= 67 ? "Your entered answers meet the 67-point selection threshold and the checks shown here." : "Your entered selection-factor score is below 67 points."}</p>
            </div>
            <div className="grid gap-2 sm:min-w-[15rem]">
              {result.breakdown.map((item) => <ToolStat key={item.label} label={item.label} value={item.points + " / " + item.max} />)}
            </div>
          </div>
        </ToolResultCard>
        <p className="m-0 flex items-start gap-2 text-[0.68rem] leading-[1.5] text-[var(--template-muted)]"><Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--template-primary)]" />A score of 67 is only the selection-factor threshold. IRCC separately assesses skilled-work continuity, credential evidence, funds or any exemption, admissibility, and the full program requirements. Recheck the official rules before submitting.</p>
        <a className="w-fit text-[0.72rem] font-extrabold text-[var(--template-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html" target="_blank" rel="noreferrer">Open IRCC’s Federal Skilled Worker requirements</a>
      </div>
    </ToolCard>
  );
}

function LanguageGrid({ title, values, onChange, prefix }) {
  return (
    <div className="grid gap-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4">
      <h3 className="m-0 text-sm font-extrabold text-[var(--template-ink)]">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {ABILITIES.map(({ key, label }) => (
          <ToolField key={key} label={label + " CLB/NCLC"} htmlFor={"fsw-" + prefix + "-" + key}>
            <ToolSelect id={"fsw-" + prefix + "-" + key} value={values[key]} onChange={onChange(key)}>
              <option value="">Choose level</option>
              {LANGUAGES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </ToolSelect>
          </ToolField>
        ))}
      </div>
    </div>
  );
}

function YesNo() {
  return <><option value="">Choose an answer</option><option value="yes">Yes</option><option value="no">No</option></>;
}
