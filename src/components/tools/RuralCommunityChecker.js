"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, MapPinned, RefreshCw } from "lucide-react";
import {
  ToolCard,
  ToolField,
  ToolHeader,
  ToolInput,
  ToolResetButton,
  ToolSelect,
} from "./ui/ToolPrimitives";

const FUNDS = [10507, 13080, 16080, 19524, 22143, 24975, 27806];
const INITIAL = {
  teer: "",
  recommendation: "",
  designatedOffer: "",
  workExperience: "",
  workTeerRelated: "",
  studentExemption: "",
  lowestLanguage: "",
  testValid: "",
  education: "",
  familySize: "1",
  settlementFunds: "",
  validWorkPermit: false,
};
const TEER_OPTIONS = ["0", "1", "2", "3", "4", "5"].map((value) => ({ value, label: "TEER " + value }));

function fundRequirement(familySize) {
  const size = Math.max(1, Number(familySize) || 1);
  return FUNDS[Math.min(size, 7) - 1] + Math.max(0, size - 7) * 2831;
}

function languageMinimum(teer) {
  if (teer === "0" || teer === "1") return 6;
  if (teer === "2" || teer === "3") return 5;
  if (teer === "4" || teer === "5") return 4;
  return null;
}

function isExperienceTeerRelated(offerTeer, experienceTeer) {
  if (offerTeer === "0" || offerTeer === "1") return ["0", "1", "2", "3"].includes(experienceTeer);
  if (offerTeer === "2") return ["1", "2", "3", "4"].includes(experienceTeer);
  if (offerTeer === "3" || offerTeer === "4") return ["2", "3", "4"].includes(experienceTeer);
  return false;
}

function getReview(form) {
  const minimum = languageMinimum(form.teer);
  const targetFunds = fundRequirement(form.familySize);
  const languagePass = minimum !== null && form.lowestLanguage !== "" && Number(form.lowestLanguage) >= minimum;
  const workPass = form.workExperience === "yes"
    && form.workTeerRelated === "yes"
    && form.workPaidAndRelated === "yes";
  const studentPass = form.studentExemption === "yes";
  const checks = [
    { key: "recommendation", label: "Community recommendation", value: form.recommendation, pass: form.recommendation === "yes" },
    { key: "offer", label: "Valid designated-employer job offer", value: form.designatedOffer, pass: form.designatedOffer === "yes" },
    { key: "experience", label: "Work experience or graduate exemption", value: form.workExperience === "no" && studentPass ? "yes" : form.workExperience, pass: workPass || studentPass },
    { key: "language", label: "Minimum language level", value: form.lowestLanguage, pass: languagePass },
    { key: "test", label: "Approved language test less than 2 years old", value: form.testValid, pass: form.testValid === "yes" },
    { key: "education", label: "Canadian credential or valid foreign ECA", value: form.education, pass: form.education === "yes" },
    { key: "funds", label: "Settlement funds or work-permit exception", value: form.validWorkPermit ? "exception" : form.settlementFunds, pass: form.validWorkPermit || (form.settlementFunds !== "" && Number(form.settlementFunds) >= targetFunds) },
  ];
  const requiredAnswers = form.teer !== "" && form.recommendation !== "" && form.designatedOffer !== ""
    && form.workExperience !== "" && form.studentExemption !== "" && form.lowestLanguage !== ""
    && form.testValid !== "" && form.education !== "" && Number(form.familySize) >= 1
    && (form.validWorkPermit || form.settlementFunds !== "")
    && (form.workExperience !== "yes" || (form.workTeerRelated !== "" && form.workPaidAndRelated !== ""));
  const failed = checks.filter((item) => !item.pass && item.value === "no");
  const complete = requiredAnswers;
  const allPass = complete && checks.every((item) => item.pass);
  return { checks, complete, allPass, failed, minimum, targetFunds, workPass, studentPass, languagePass };
}

function SelectField({ id, label, value, onChange, children, hint }) {
  return <ToolField label={label} htmlFor={id} hint={hint}><ToolSelect id={id} value={value} onChange={onChange}>{children}</ToolSelect></ToolField>;
}

export default function RuralCommunityChecker() {
  const [form, setForm] = useState(INITIAL);
  const result = useMemo(() => getReview(form), [form]);
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const reset = () => setForm(INITIAL);

  return (
    <ToolCard aria-labelledby="rcip-checker-title">
      <ToolHeader
        icon={MapPinned}
        kicker="Permanent Rural Community Immigration Program"
        title="RCIP eligibility checker"
        titleId="rcip-checker-title"
        subtitle="Review the community recommendation, job offer, work, language, education and funds requirements together."
        action={<ToolResetButton onClick={reset}><RefreshCw className="h-3.5 w-3.5" /> Reset</ToolResetButton>}
      />
      <div className="tool-card__body grid gap-5 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]">
        <div className="rounded-[0.95rem] border border-[color-mix(in_srgb,var(--template-primary)_25%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_6%,var(--template-surface-alt))] p-4">
          <p className="m-0 text-[0.68rem] font-extrabold uppercase tracking-[0.11em] text-[var(--template-primary)]">Program timing</p>
          <p className="mb-0 mt-1 text-[0.8rem] leading-[1.55] text-[var(--template-muted)]">The permanent program opens January 1, 2027. The Rural Community Immigration Pilot closes on that date; this checker uses the permanent program rules.</p>
        </div>
        <section className="grid gap-4 sm:grid-cols-2">
          <SelectField id="rcip-teer" label="TEER category of the designated-community job offer" value={form.teer} onChange={update("teer")} hint="This determines the minimum CLB/NCLC level.">
            <option value="">Choose TEER category</option>
            {TEER_OPTIONS.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
          </SelectField>
          <SelectField id="rcip-recommendation" label="Do you have a valid recommendation from the participating community?" value={form.recommendation} onChange={update("recommendation")}>
            <AnswerChoices />
          </SelectField>
          <SelectField id="rcip-offer" label="Do you have a valid job offer from an employer designated by that community?" value={form.designatedOffer} onChange={update("designatedOffer")} hint="The employer, offer, and community all need to meet current program rules.">
            <AnswerChoices />
          </SelectField>
          <SelectField id="rcip-work" label="Do you have 1 year / 1,560 paid, non-self-employed related work hours in the last 3 years?" value={form.workExperience} onChange={update("workExperience")}>
            <AnswerChoices />
          </SelectField>
          {form.workExperience === "yes" && <>
            <SelectField id="rcip-work-related" label="Does that work meet the NOC duty and TEER relationship rules?" value={form.workTeerRelated} onChange={update("workTeerRelated")} hint="Offer TEER 0–1: work TEER 0–3. Offer 2: work 1–4. Offer 3–4: work 2–4. Offer 5: same five-digit NOC.">
              <AnswerChoices />
            </SelectField>
            <SelectField id="rcip-work-paid" label="Was it paid work, not self-employment, with matching NOC duties?" value={form.workPaidAndRelated} onChange={update("workPaidAndRelated")}>
              <AnswerChoices />
            </SelectField>
          </>}
          <SelectField id="rcip-student-exemption" label="If you do not meet the work-hours rule, do you meet IRCC’s community graduate exemption?" value={form.studentExemption} onChange={update("studentExemption")} hint="The exemption has detailed school, location, credential and timing rules. Open IRCC’s work-experience page before relying on it.">
            <AnswerChoices />
          </SelectField>
          <SelectField id="rcip-language-level" label="Lowest of your four CLB/NCLC levels" value={form.lowestLanguage} onChange={update("lowestLanguage")} hint={result.minimum ? "Your offer TEER requires CLB/NCLC " + result.minimum + " in all four abilities." : "Select the job offer TEER first."}>
            <option value="">Choose lowest level</option>
            {Array.from({ length: 13 }, (_, value) => <option key={value} value={value}>{value === 0 ? "Below 4" : "CLB/NCLC " + value}</option>)}
          </SelectField>
          <SelectField id="rcip-test-valid" label="Is your approved English/French test less than 2 years old?" value={form.testValid} onChange={update("testValid")}>
            <AnswerChoices />
          </SelectField>
          <SelectField id="rcip-education" label="Do you have a Canadian credential or a valid foreign ECA at high-school level or higher?" value={form.education} onChange={update("education")} hint="A foreign ECA must be less than 5 years old when you apply.">
            <AnswerChoices />
          </SelectField>
        </section>
        <section className="grid gap-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-4 sm:grid-cols-2">
          <ToolField label="Family members included in the funds calculation" htmlFor="rcip-family-size" hint="Include you, spouse/partner and dependent children, even if they will not accompany you.">
            <ToolInput id="rcip-family-size" type="number" min="1" max="30" step="1" value={form.familySize} onChange={update("familySize")} />
          </ToolField>
          <ToolField label="Settlement funds available (CAD)" htmlFor="rcip-funds" hint={"Published IRCC baseline: CAD $" + result.targetFunds.toLocaleString() + ". Check for the next annual update before applying."}>
            <ToolInput id="rcip-funds" type="number" min="0" step="1" value={form.settlementFunds} onChange={update("settlementFunds")} placeholder="Enter available funds" disabled={form.validWorkPermit} />
          </ToolField>
          <label className="flex cursor-pointer items-start gap-3 rounded-[0.85rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-3 text-[0.72rem] leading-[1.45] text-[var(--template-ink)] sm:col-span-2">
            <input className="mt-0.5 h-4 w-4 accent-[var(--template-primary)]" type="checkbox" checked={form.validWorkPermit} onChange={(event) => setForm((current) => ({ ...current, validWorkPermit: event.target.checked }))} />
            <span><strong>I am already working in Canada with a valid work permit.</strong><br /><span className="text-[var(--template-muted)]">IRCC says proof of settlement funds is not required in this situation.</span></span>
          </label>
        </section>
        <section className="rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4 sm:p-5" aria-live="polite">
          <p className="m-0 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[var(--template-primary)]">Preliminary review</p>
          <h3 className="mb-0 mt-1 text-[1.1rem] font-extrabold text-[var(--template-ink)]">{!result.complete ? "Complete the required checks" : result.allPass ? "Your selected answers meet the listed checks" : "One or more listed checks are not met"}</h3>
          <p className="mb-0 mt-2 text-[0.72rem] leading-[1.55] text-[var(--template-muted)]">{result.minimum ? "Your job’s TEER " + form.teer + " minimum language level is CLB/NCLC " + result.minimum + "." : "Select the TEER category of the job offer to see its language threshold."} This tool cannot confirm that a community will issue a recommendation or that an employer/job offer qualifies.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {result.checks.map((item) => <div key={item.key} className="flex items-center justify-between gap-3 rounded-[0.75rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-3 py-2 text-[0.7rem]"><span className="text-[var(--template-muted)]">{item.label}</span><strong className={item.pass ? "text-[var(--template-primary)]" : "text-[var(--template-ink)]"}>{item.pass ? "Met" : "Not met / verify"}</strong></div>)}
          </div>
        </section>
        <div className="grid gap-2 sm:grid-cols-2">
          <a className="inline-flex w-fit items-center gap-2 text-[0.72rem] font-extrabold text-[var(--template-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration-program/eligibility.html" target="_blank" rel="noreferrer">Official eligibility rules <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <a className="inline-flex w-fit items-center gap-2 text-[0.72rem] font-extrabold text-[var(--template-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration-program/eligibility/work-experience.html" target="_blank" rel="noreferrer">Work and graduate exception rules <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <a className="inline-flex w-fit items-center gap-2 text-[0.72rem] font-extrabold text-[var(--template-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration-program/eligibility/language-test.html" target="_blank" rel="noreferrer">Approved tests and score tables <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <a className="inline-flex w-fit items-center gap-2 text-[0.72rem] font-extrabold text-[var(--template-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration-program/eligibility/proof-funds.html" target="_blank" rel="noreferrer">Current settlement-fund amounts <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </div>
        <p className="m-0 text-[0.67rem] leading-[1.5] text-[var(--template-muted)]">Government decisions, participating communities, designated employers and selection priorities can change. Use this as a checklist and confirm the current rules and available community intakes before applying.</p>
      </div>
    </ToolCard>
  );
}

function AnswerChoices() {
  return <><option value="">Choose an answer</option><option value="yes">Yes</option><option value="no">No</option><option value="not-yet">Not yet / not sure</option></>;
}
