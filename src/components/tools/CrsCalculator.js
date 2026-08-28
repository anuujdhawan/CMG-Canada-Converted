"use client";

import { useState } from "react";
import { Calculator, Info, RefreshCw, Sparkles, TrendingUp } from "lucide-react";
import {
  ToolCard,
  ToolHeader,
  ToolField,
  ToolSelect,
  ToolInput,
  ToolCheckboxCard,
  ToolResultCard,
  ToolStat,
  ToolResetButton,
} from "./ui/ToolPrimitives";

const AGE_POINTS_WITH_SPOUSE = { 18: 100, 19: 100, 20: 100, 21: 100, 22: 100, 23: 100, 24: 100, 25: 100, 26: 100, 27: 100, 28: 100, 29: 100, 30: 100, 31: 100, 32: 100, 33: 100, 34: 100, 35: 100, 36: 95, 37: 90, 38: 85, 39: 80, 40: 75, 41: 70, 42: 65, 43: 60, 44: 55, 45: 50, 46: 45, 47: 40, 48: 35, 49: 30, 50: 25 };
const AGE_POINTS_NO_SPOUSE = { 18: 110, 19: 110, 20: 110, 21: 110, 22: 110, 23: 110, 24: 110, 25: 110, 26: 110, 27: 110, 28: 110, 29: 110, 30: 110, 31: 110, 32: 110, 33: 110, 34: 110, 35: 110, 36: 105, 37: 100, 38: 95, 39: 90, 40: 85, 41: 80, 42: 75, 43: 70, 44: 65, 45: 60, 46: 55, 47: 50, 48: 45, 49: 40, 50: 35 };

const EDUCATION = [
  { value: "none", label: "Less than high school", single: 0, withSpouse: 0 },
  { value: "hs", label: "High school", single: 30, withSpouse: 28 },
  { value: "one-year", label: "One-year post-secondary", single: 90, withSpouse: 84 },
  { value: "two-year", label: "Two-year program", single: 98, withSpouse: 91 },
  { value: "bachelor", label: "Bachelor's degree", single: 120, withSpouse: 112 },
  { value: "two-plus", label: "Two or more (one 3+ year)", single: 128, withSpouse: 119 },
  { value: "master", label: "Master's degree", single: 135, withSpouse: 126 },
  { value: "phd", label: "PhD", single: 150, withSpouse: 140 },
];
const LANGUAGE = [
  { value: "none", label: "Below CLB 4", single: 0, withSpouse: 0 },
  { value: "clb4", label: "CLB 4", single: 24, withSpouse: 24 },
  { value: "clb5", label: "CLB 5", single: 24, withSpouse: 24 },
  { value: "clb6", label: "CLB 6", single: 36, withSpouse: 32 },
  { value: "clb7", label: "CLB 7", single: 68, withSpouse: 64 },
  { value: "clb8", label: "CLB 8", single: 92, withSpouse: 88 },
  { value: "clb9", label: "CLB 9", single: 124, withSpouse: 116 },
  { value: "clb10", label: "CLB 10+", single: 136, withSpouse: 128 },
];
const SECOND_LANGUAGE = [
  { value: "none", label: "No second language", single: 0, withSpouse: 0 },
  { value: "clb5", label: "CLB 5–6", single: 4, withSpouse: 4 },
  { value: "clb7", label: "CLB 7–8", single: 12, withSpouse: 12 },
  { value: "clb9", label: "CLB 9+", single: 24, withSpouse: 22 },
];
const CANADIAN_EXPERIENCE = [
  { value: "none", label: "None", single: 0, withSpouse: 0 },
  { value: "1", label: "1 year", single: 40, withSpouse: 35 },
  { value: "2", label: "2 years", single: 53, withSpouse: 46 },
  { value: "3", label: "3 years", single: 64, withSpouse: 56 },
  { value: "4", label: "4 years", single: 72, withSpouse: 63 },
  { value: "5", label: "5+ years", single: 80, withSpouse: 70 },
];
const FOREIGN_EXPERIENCE = [
  { value: "none", label: "None", years: 0 },
  { value: "1", label: "1–2 years", years: 1 },
  { value: "3", label: "3+ years", years: 3 },
];
const SPOUSE_EDUCATION = [
  { value: "none", label: "No post-secondary", points: 0 },
  { value: "one-year", label: "One-year program", points: 6 },
  { value: "two-year", label: "Two-year program", points: 7 },
  { value: "bachelor", label: "Bachelor's degree", points: 8 },
  { value: "two-plus", label: "Two or more credentials", points: 9 },
  { value: "master", label: "Master's or PhD", points: 10 },
];
const SPOUSE_LANGUAGE = [
  { value: "none", label: "Below CLB 4", points: 0 },
  { value: "clb4", label: "CLB 4–5", points: 4 },
  { value: "clb6", label: "CLB 6–7", points: 12 },
  { value: "clb8", label: "CLB 8–9", points: 20 },
  { value: "clb10", label: "CLB 10+", points: 20 },
];
const SPOUSE_EXPERIENCE = [
  { value: "none", label: "None", points: 0 },
  { value: "1", label: "1–2 years in Canada", points: 5 },
  { value: "3", label: "3–4 years in Canada", points: 7 },
  { value: "5", label: "5+ years in Canada", points: 10 },
];
const JOB_OFFER = [
  { value: "none", label: "No qualifying job offer", points: 0 },
  { value: "nocc0", label: "NOC 00 (senior management)", points: 200 },
  { value: "other", label: "Other qualifying offer", points: 50 },
];
const CANADIAN_EDUCATION = [
  { value: "none", label: "None", points: 0 },
  { value: "1", label: "One- or two-year credential", points: 15 },
  { value: "3", label: "Three or more years", points: 30 },
];
const FRENCH = [
  { value: "none", label: "No French", points: 0 },
  { value: "partial", label: "CLB 7+ French + CLB 4–5 English", points: 25 },
  { value: "strong", label: "CLB 7+ in both French and English", points: 50 },
];

const initialState = {
  age: 30, hasSpouse: false, education: "bachelor", language: "clb7", secondLanguage: "none",
  canadianExperience: "1", foreignExperience: "3", spouseEducation: "bachelor", spouseLanguage: "none",
  spouseExperience: "none", provincialNomination: false, jobOffer: "none", canadianEducation: "none", french: "none", sibling: false,
};

const CRS_INPUT_CLASS = "!h-[3.25rem] !min-h-[3.25rem] !rounded-[0.95rem] !px-4 !bg-[color-mix(in_srgb,var(--cmg-dark-surface-alt)_95%,var(--cmg-dark-primary)_5%)] !text-[var(--cmg-dark-ink)] !font-bold !text-[0.82rem] !leading-[1.2] !shadow-[inset_0_1px_0_color-mix(in_srgb,var(--cmg-dark-on-primary)_5%,transparent),0_4px_12px_color-mix(in_srgb,var(--cmg-dark-bg)_14%,transparent)] hover:!border-[color-mix(in_srgb,var(--cmg-dark-primary)_45%,var(--cmg-dark-border))] hover:!bg-[var(--cmg-dark-surface)] focus:!border-[var(--cmg-dark-primary)] focus:!shadow-[0_0_0_4px_color-mix(in_srgb,var(--cmg-dark-primary)_15%,transparent),inset_0_1px_0_color-mix(in_srgb,var(--cmg-dark-on-primary)_5%,transparent)]";
const CRS_LABEL_CLASS = "flex min-h-[1.05rem] items-center !text-[var(--cmg-dark-ink)] !font-extrabold !text-[0.76rem] !leading-[1.25] tracking-[0.01em]";
const CRS_CHECK_LABEL_CLASS = "!font-extrabold !text-[0.78rem] !leading-[1.3]";
const CRS_CHECK_HINT_CLASS = "!font-semibold !text-[0.68rem] !leading-[1.35]";

export default function CrsCalculator() {
  const [form, setForm] = useState(initialState);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const setBool = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.checked }));
  const handleAgeChange = (e) => {
    const { value } = e.target;
    if (value === "") {
      setForm((f) => ({ ...f, age: "" }));
      return;
    }

    const numericValue = Number(value);
    if (Number.isFinite(numericValue)) {
      setForm((f) => ({ ...f, age: numericValue }));
    }
  };
  const handleAgeBlur = () => setForm((f) => {
    const rawValue = String(f.age).trim();
    if (rawValue === "") return { ...f, age: 30 };

    const numericValue = Number(rawValue);
    return { ...f, age: Number.isFinite(numericValue) ? clamp(numericValue) : 30 };
  });
  const reset = () => setForm(initialState);
  const score = computeScore(form);
  const breakdown = computeBreakdown(form);
  const level = score >= 1000 ? "Elite" : score >= 480 ? "Competitive" : score >= 440 ? "Potential" : "Developing";

  return (
    <ToolCard className="crs-calculator rounded-[1.35rem]">
      <ToolHeader
        icon={Calculator}
        kicker="Free · Instant · No sign-up"
        title="CRS Score Estimator"
        subtitle="Close estimate based on the official IRCC grid — a planning snapshot before you submit."
        action={<ToolResetButton onClick={reset}><RefreshCw className="h-3.5 w-3.5" /> Reset</ToolResetButton>}
      />

      <div className="tool-card__body flex flex-col gap-[1.1rem] p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]">
        {/* Intro band */}
        <div className="tool-notice mb-6 rounded-[0.85rem] border border-[var(--cmg-dark-border)] bg-[color-mix(in_srgb,var(--cmg-dark-primary)_5%,transparent)] px-4 py-[0.9rem] flex items-center gap-2 text-xs font-semibold">
          <Sparkles className="text-[var(--template-primary)] h-3.5 w-3.5" />
          <span>Tip: add spouse, language or Canadian education to see live score movement.</span>
        </div>

        <div className="crs-calculator__form-grid grid items-start gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="crs-calculator__column flex min-w-0 flex-col gap-[0.85rem]">
            <div className="crs-calculator__column-heading flex min-h-[3.4rem] max-[639px]:min-h-12 items-center gap-3 mb-[0.15rem] border-b border-[color-mix(in_srgb,var(--cmg-dark-primary)_24%,var(--cmg-dark-border))] pb-3">
              <span className="crs-calculator__column-index inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.75rem] border border-[color-mix(in_srgb,var(--cmg-dark-primary)_42%,transparent)] bg-[color-mix(in_srgb,var(--cmg-dark-primary)_11%,var(--cmg-dark-surface-alt))] text-[var(--cmg-dark-primary)] text-[0.7rem] font-extrabold leading-none">01</span>
              <span className="grid min-w-0 gap-[0.18rem]">
                <strong className="!text-[var(--cmg-dark-ink)] text-[0.85rem] font-extrabold leading-[1.2] tracking-[0.04em] uppercase">Core profile</strong>
                <small className="!text-[var(--cmg-dark-muted)] text-[0.72rem] font-semibold leading-[1.35]">Your main CRS factors</small>
              </span>
            </div>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="Age" htmlFor="crs-age">
              <ToolInput className={CRS_INPUT_CLASS} id="crs-age" type="number" inputMode="numeric" step={1} min={18} max={50} value={form.age} onChange={handleAgeChange} onBlur={handleAgeBlur} />
            </ToolField>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="Education">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.education} onChange={set("education")}>
                {EDUCATION.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </ToolSelect>
            </ToolField>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="First official language">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.language} onChange={set("language")}>
                {LANGUAGE.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </ToolSelect>
            </ToolField>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="Second official language (optional)">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.secondLanguage} onChange={set("secondLanguage")}>
                {SECOND_LANGUAGE.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </ToolSelect>
            </ToolField>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="Canadian work experience">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.canadianExperience} onChange={set("canadianExperience")}>
                {CANADIAN_EXPERIENCE.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </ToolSelect>
            </ToolField>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="Foreign work experience">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.foreignExperience} onChange={set("foreignExperience")}>
                {FOREIGN_EXPERIENCE.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </ToolSelect>
            </ToolField>
          </div>

          <div className="crs-calculator__column flex min-w-0 flex-col gap-[0.85rem]">
            <div className="crs-calculator__column-heading flex min-h-[3.4rem] max-[639px]:min-h-12 items-center gap-3 mb-[0.15rem] border-b border-[color-mix(in_srgb,var(--cmg-dark-primary)_24%,var(--cmg-dark-border))] pb-3">
              <span className="crs-calculator__column-index inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.75rem] border border-[color-mix(in_srgb,var(--cmg-dark-primary)_42%,transparent)] bg-[color-mix(in_srgb,var(--cmg-dark-primary)_11%,var(--cmg-dark-surface-alt))] text-[var(--cmg-dark-primary)] text-[0.7rem] font-extrabold leading-none">02</span>
              <span className="grid min-w-0 gap-[0.18rem]">
                <strong className="!text-[var(--cmg-dark-ink)] text-[0.85rem] font-extrabold leading-[1.2] tracking-[0.04em] uppercase">Additional factors</strong>
                <small className="!text-[var(--cmg-dark-muted)] text-[0.72rem] font-semibold leading-[1.35]">Bonus points and family factors</small>
              </span>
            </div>
            <ToolCheckboxCard labelClassName={CRS_CHECK_LABEL_CLASS} hintClassName={CRS_CHECK_HINT_CLASS} className="crs-calculator__toggle h-[3.25rem] min-h-[3.25rem] box-border items-center rounded-[.95rem] px-4 py-[.55rem] bg-[color-mix(in_srgb,var(--cmg-dark-surface-alt)_95%,var(--cmg-dark-primary)_5%)] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--cmg-dark-on-primary)_5%,transparent),0_4px_12px_color-mix(in_srgb,var(--cmg-dark-bg)_14%,transparent)] crs-calculator__toggle--spouse mt-[calc(1.05rem+0.38rem)] max-[639px]:mt-0 max-[639px]:h-auto max-[639px]:min-h-[3.25rem] max-[639px]:py-[0.7rem]" label="Applying with a spouse / partner" hint="Toggle to include spouse factors" checked={form.hasSpouse} onChange={setBool("hasSpouse")} />
            {form.hasSpouse && (
              <div className="tool-group rounded-[0.95rem] border border-[var(--cmg-dark-border)] bg-[var(--cmg-dark-surface)] grid gap-4 p-3">
                <ToolField labelClassName={CRS_LABEL_CLASS} label="Spouse education">
                  <ToolSelect className={CRS_INPUT_CLASS} value={form.spouseEducation} onChange={set("spouseEducation")}>
                    {SPOUSE_EDUCATION.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </ToolSelect>
                </ToolField>
                <ToolField labelClassName={CRS_LABEL_CLASS} label="Spouse language (CLB)">
                  <ToolSelect className={CRS_INPUT_CLASS} value={form.spouseLanguage} onChange={set("spouseLanguage")}>
                    {SPOUSE_LANGUAGE.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </ToolSelect>
                </ToolField>
                <ToolField labelClassName={CRS_LABEL_CLASS} label="Spouse Canadian work experience">
                  <ToolSelect className={CRS_INPUT_CLASS} value={form.spouseExperience} onChange={set("spouseExperience")}>
                    {SPOUSE_EXPERIENCE.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </ToolSelect>
                </ToolField>
              </div>
            )}
            <ToolField labelClassName={CRS_LABEL_CLASS} label="Provincial nomination (adds 600 points)">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.provincialNomination ? "yes" : "no"} onChange={(e) => setForm((f) => ({ ...f, provincialNomination: e.target.value === "yes" }))}>
                <option value="no">No</option>
                <option value="yes">Yes — nominated</option>
              </ToolSelect>
            </ToolField>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="Qualifying job offer">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.jobOffer} onChange={set("jobOffer")}>
                {JOB_OFFER.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </ToolSelect>
            </ToolField>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="Canadian education">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.canadianEducation} onChange={set("canadianEducation")}>
                {CANADIAN_EDUCATION.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </ToolSelect>
            </ToolField>
            <ToolField labelClassName={CRS_LABEL_CLASS} label="French ability">
              <ToolSelect className={CRS_INPUT_CLASS} value={form.french} onChange={set("french")}>
                {FRENCH.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </ToolSelect>
            </ToolField>
            <ToolCheckboxCard labelClassName={CRS_CHECK_LABEL_CLASS} hintClassName={CRS_CHECK_HINT_CLASS} className="crs-calculator__toggle h-[3.25rem] min-h-[3.25rem] box-border items-center rounded-[.95rem] px-4 py-[.55rem] bg-[color-mix(in_srgb,var(--cmg-dark-surface-alt)_95%,var(--cmg-dark-primary)_5%)] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--cmg-dark-on-primary)_5%,transparent),0_4px_12px_color-mix(in_srgb,var(--cmg-dark-bg)_14%,transparent)] crs-calculator__toggle--sibling mt-[calc(1.05rem+0.38rem)] max-[639px]:mt-0 max-[639px]:h-auto max-[639px]:min-h-[3.25rem] max-[639px]:py-[0.7rem]" label="Sibling living in Canada (citizen/PR)" checked={form.sibling} onChange={setBool("sibling")} />
          </div>
        </div>

        {/* Result */}
        <ToolResultCard className="mt-7">
          <div className="tool-result__layout flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="tool-result__summary flex min-w-[230px] flex-col items-start max-[620px]:items-center max-[620px]:text-center">
              <p className="tool-result__label flex items-center gap-2 text-xs font-bold uppercase tracking-widest !text-[var(--template-on-primary)]"><TrendingUp className="h-3.5 w-3.5" /> Estimated CRS — {level}</p>
              <div
                className="tool-result__score-gauge relative mt-3 grid size-[170px] place-items-center rounded-full bg-[conic-gradient(var(--template-on-primary)_var(--score-progress),color-mix(in_srgb,var(--template-on-primary)_18%,transparent)_0)] shadow-[0_12px_28px_color-mix(in_srgb,var(--cmg-template-deep-surface)_20%,transparent)] before:absolute before:inset-2.5 before:rounded-full before:bg-[color-mix(in_srgb,var(--template-primary)_82%,var(--template-accent))] before:content-['']"
                style={{ "--score-progress": `${Math.min(100, Math.round((score / 1200) * 100))}%` }}
                aria-label={`Estimated CRS score ${score} out of 1200`}
              >
                <div className="tool-result__score-gauge-content relative z-[1] flex flex-col items-center text-[var(--template-on-primary)]">
                  <strong className="tool-result__score font-extrabold !text-[var(--template-on-primary)] !text-[clamp(2.5rem,1.6rem+3vw,3.75rem)] !leading-[1.02] tracking-[-0.028em]">{score}</strong>
                  <span className="mt-[9px] text-[color-mix(in_srgb,var(--template-on-primary)_70%,transparent)] text-[11px] font-extrabold leading-none tracking-[.08em] uppercase">/ 1200 CRS</span>
                </div>
              </div>
              <p className="tool-result__copy mt-2 max-w-md text-sm leading-relaxed !text-[var(--template-on-primary)] max-[620px]:max-w-[32rem]">
                {score >= 1000 ? "With a provincial nomination or senior-management offer, you're effectively guaranteed an invitation." : score >= 480 ? "Competitive — you'd likely receive an invitation in recent draws." : score >= 440 ? "Potentially competitive depending on recent cut-offs." : "Below recent cut-offs — provincial streams or score improvements could change that."}
              </p>
            </div>
            <div className="w-full max-w-xs space-y-2">
              {breakdown.map((row) => <ToolStat key={row.label} label={row.label} value={`+${row.points}`} />)}
              {breakdown.length === 0 && <p className="tool-result__empty rounded-xl border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-surface-alt)_88%,var(--template-secondary))] px-3.5 py-3 text-sm !text-[var(--template-muted)]">Adjust inputs to see scoring.</p>}
            </div>
          </div>
        </ToolResultCard>

        <p className="text-[var(--template-muted)] mt-4 flex items-start gap-2 text-xs leading-relaxed">
          <Info className="text-[var(--template-primary)] mt-0.5 h-4 w-4 shrink-0" />
          Simplified CRS grid (one CLB across all abilities, skill-transferability approximated). Official score is set by IRCC at submission — use this as a planning estimate.
        </p>
      </div>
    </ToolCard>
  );
}

function clamp(n) { if (Number.isNaN(n)) return 30; return Math.min(50, Math.max(18, n)); }
function computeScore(form) { return computeBreakdown(form).reduce((s, r) => s + r.points, 0); }
function computeBreakdown(form) {
  const spouse = form.hasSpouse;
  const agePoints = (spouse ? AGE_POINTS_WITH_SPOUSE : AGE_POINTS_NO_SPOUSE)[form.age] || 0;
  const edu = EDUCATION.find((o) => o.value === form.education);
  const lang = LANGUAGE.find((o) => o.value === form.language);
  const secondLang = SECOND_LANGUAGE.find((o) => o.value === form.secondLanguage);
  const canExp = CANADIAN_EXPERIENCE.find((o) => o.value === form.canadianExperience);
  const foreignYears = (FOREIGN_EXPERIENCE.find((o) => o.value === form.foreignExperience) || {}).years || 0;
  let transferability = 0;
  const clb9plus = form.language === "clb9" || form.language === "clb10";
  const postSecondary = form.education !== "none" && form.education !== "hs";
  const canYears = Number(form.canadianExperience) || 0;
  if (postSecondary && clb9plus) transferability += 50; else if (postSecondary) transferability += 25;
  if (postSecondary && canYears >= 2) transferability += 50; else if (postSecondary && canYears >= 1) transferability += 25;
  if (clb9plus && foreignYears >= 3) transferability += 50; else if (foreignYears >= 3) transferability += 25;
  if (canYears >= 2 && foreignYears >= 3) transferability += 50; else if (canYears >= 1 && foreignYears >= 3) transferability += 25;
  const rows = [
    { label: "Age", points: agePoints },
    { label: "Education", points: spouse ? edu.withSpouse : edu.single },
    { label: "Language (first)", points: spouse ? lang.withSpouse : lang.single },
    { label: "Language (second)", points: spouse ? secondLang.withSpouse : secondLang.single },
    { label: "Canadian experience", points: spouse ? canExp.withSpouse : canExp.single },
    { label: "Skill transferability", points: transferability },
  ];
  if (spouse) {
    const sEdu = SPOUSE_EDUCATION.find((o) => o.value === form.spouseEducation);
    const sLang = SPOUSE_LANGUAGE.find((o) => o.value === form.spouseLanguage);
    const sExp = SPOUSE_EXPERIENCE.find((o) => o.value === form.spouseExperience);
    rows.push({ label: "Spouse factors", points: sEdu.points + sLang.points + sExp.points });
  }
  const additional = [];
  if (form.provincialNomination) additional.push({ label: "Provincial nomination", points: 600 });
  const offer = JOB_OFFER.find((o) => o.value === form.jobOffer);
  if (offer.points > 0) additional.push({ label: "Job offer", points: offer.points });
  const canEdu = CANADIAN_EDUCATION.find((o) => o.value === form.canadianEducation);
  if (canEdu.points > 0) additional.push({ label: "Canadian education", points: canEdu.points });
  const french = FRENCH.find((o) => o.value === form.french);
  if (french.points > 0) additional.push({ label: "French ability", points: french.points });
  if (form.sibling) additional.push({ label: "Sibling in Canada", points: 15 });
  return [...rows, ...additional].filter((r) => r.points > 0);
}
