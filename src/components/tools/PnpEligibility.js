"use client";

import { useState } from "react";
import { ArrowRight, MapPin, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import { ToolCard, ToolHeader, ToolResetButton, ToolProgress, ToolOptionButton, ToolResultCard } from "./ui/ToolPrimitives";

const PROVINCES = [
  { value: "all", label: "I’m comparing all provinces and territories", path: "/immigrate/provincial-nominee-program-all-provinces-consolidated" },
  { value: "bc", label: "British Columbia", path: "/immigrate/british-columbia-pnp" },
  { value: "ontario", label: "Ontario", path: "/immigrate/ontario-pnp-oinp" },
  { value: "alberta", label: "Alberta", path: "/immigrate/alberta-pnp-aaip" },
  { value: "saskatchewan", label: "Saskatchewan", path: "/immigrate/saskatchewan-pnp-sinp" },
  { value: "manitoba", label: "Manitoba", path: "/immigrate/manitoba-pnp-mpnp" },
  { value: "nova-scotia", label: "Nova Scotia", path: "/immigrate/nova-scotia-pnp-nsnp" },
  { value: "new-brunswick", label: "New Brunswick", path: "/immigrate/new-brunswick-pnp" },
  { value: "pei", label: "Prince Edward Island", path: "/immigrate/prince-edward-island-pnp" },
  { value: "newfoundland", label: "Newfoundland and Labrador", path: "/immigrate/newfoundland-and-labrador-pnp" },
  { value: "north", label: "Yukon / Northwest Territories", path: "/immigrate/yukon-nwt-nunavut-nominee-programs" },
];

const QUESTIONS = [
  { key: "province", label: "Which province or territory are you considering?", options: PROVINCES.map(({ value, label }) => ({ value, label })) },
  { key: "status", label: "Where are you in your Canada plan?", options: [{ value: "outside", label: "Outside Canada" }, { value: "worker", label: "Working in Canada" }, { value: "student", label: "Studying in Canada" }, { value: "visitor", label: "In Canada as a visitor" }] },
  { key: "expressEntry", label: "Do you have an active Express Entry profile?", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unsure", label: "I need to check" }] },
  { key: "jobOffer", label: "Do you have a job offer from an employer in that province or territory?", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unsure", label: "I need to check employer/offer rules" }] },
  { key: "connection", label: "What other connection do you have to that province or territory?", options: [{ value: "work", label: "Prior local work experience" }, { value: "study", label: "Local education or graduation" }, { value: "family", label: "Close family connection" }, { value: "community", label: "Community or regional connection" }, { value: "none", label: "None of these" }] },
];

export default function PnpEligibility() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const question = QUESTIONS[step];
  const answered = answers[question.key] !== undefined;
  function choose(value) {
    setAnswers((current) => ({ ...current, [question.key]: value }));
    if (step < QUESTIONS.length - 1) setStep((current) => current + 1);
    else setShowResult(true);
  }
  function restart() { setAnswers({}); setStep(0); setShowResult(false); }
  if (showResult) return <Result answers={answers} onRestart={restart} />;

  return (
    <ToolCard>
      <ToolHeader icon={MapPin} kicker="5 questions · private · no sign-up" title="PNP Pathway Research Planner" subtitle="Choose a target region and identify the published program guides and pathway types to review next." action={<ToolResetButton onClick={restart}><RefreshCw className="h-3.5 w-3.5" /> Restart</ToolResetButton>} />
      <div className="tool-card__body flex flex-col gap-5 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]">
        <ToolProgress value={step} max={QUESTIONS.length} labelLeft={"Question " + (step + 1) + " of " + QUESTIONS.length} labelRight={Math.round((step / QUESTIONS.length) * 100) + "%"} />
        <div className="mt-2">
          <h3 className="text-[var(--template-ink)] text-[1.15rem] font-extrabold leading-tight"><span className="text-[var(--template-primary)]">{String(step + 1).padStart(2, "0")}.</span> {question.label}</h3>
          <div className="mt-5 grid gap-3">
            {question.options.map((option) => (
              <ToolOptionButton key={option.value} onClick={() => choose(option.value)}>
                <span>{option.label}</span><ArrowRight className="h-4 w-4 shrink-0 text-[var(--template-primary)]" />
              </ToolOptionButton>
            ))}
          </div>
        </div>
        {answered && <div className="flex justify-end"><button type="button" onClick={() => { if (step < QUESTIONS.length - 1) setStep((current) => current + 1); else setShowResult(true); }} className="text-sm font-bold text-[var(--template-primary)] hover:underline">Continue with this answer →</button></div>}
        <p className="m-0 text-xs leading-[1.5] text-[var(--template-muted)]">This planner does not score eligibility or estimate invitation chances. PNP rules, stream openings and selection priorities are province-specific.</p>
      </div>
    </ToolCard>
  );
}

function Result({ answers, onRestart }) {
  const province = PROVINCES.find((item) => item.value === answers.province) || PROVINCES[0];
  const targetedProvince = answers.province !== "all";
  const categories = [
    {
      label: "Employer-linked provincial streams",
      detail: answers.jobOffer === "yes"
        ? "Review the selected region’s employer, job-offer, occupation and work-permit rules. A job offer alone does not establish eligibility."
        : "No regional job offer was selected. Check the selected program guide for pathways that do not require a job offer, and confirm current intake priorities.",
    },
    {
      label: "Express Entry-linked provincial streams",
      detail: answers.expressEntry === "yes"
        ? "Review whether the province has an enhanced stream that accepts your active Express Entry profile and whether your occupation or CRS profile matches current selection criteria."
        : "An active Express Entry profile was not selected. Check whether a base provincial stream fits, or confirm the federal program requirements before creating a profile.",
    },
    {
      label: "Local work, education or family connections",
      detail: answers.connection === "none"
        ? "No prior local connection was selected. Some pathways may still exist, but do not assume a general connection requirement is waived."
        : "Check whether this exact connection is accepted by an open stream, how long it must have existed and what evidence the province requires.",
    },
  ];
  return (
    <ToolCard>
      <ToolHeader icon={MapPin} kicker="Your research plan" title={targetedProvince ? "Start with " + province.label : "Compare provincial program guides"} subtitle="Use the profile details you selected to prioritize research. The government program guide remains the source for eligibility." action={<ToolResetButton onClick={onRestart}><RefreshCw className="h-3.5 w-3.5" /> Start again</ToolResetButton>} />
      <div className="tool-card__body grid gap-5 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]">
        <div className="rounded-[0.9rem] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-primary)_5%,var(--template-surface-alt))] p-4 text-[0.75rem] leading-[1.55] text-[var(--template-muted)]">
          <strong className="text-[var(--template-ink)]">No eligibility verdict or score is generated.</strong> PNP streams can require a specific NOC, language level, employer, connection, license, funds or invitation. Check the selected region’s published calculator and official criteria.
        </div>
        <ul className="grid gap-3">
          {categories.map((item) => <li key={item.label} className="rounded-[0.9rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4"><p className="m-0 text-sm font-extrabold text-[var(--template-ink)]">{item.label}</p><p className="tool-field__hint mb-0 mt-1">{item.detail}</p></li>)}
        </ul>
        <ToolResultCard className="min-h-0">
          <h3 className="m-0 text-base font-bold text-white">Next step</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/85">Open the program guide and use its stream-specific score grid or eligibility planner. If you are considering a rural community offer, use the separate Rural Community Immigration Program checker.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={province.path} variant="light">Open {targetedProvince ? province.label + " program guide" : "all PNP overview"}</Button>
            <Button href="/tools/rural-community-immigration-program-canada" variant="lightOutline">Rural pathway checker</Button>
            <Button href={site.ctas.primary.href} variant="lightOutline">{site.ctas.primary.label}</Button>
          </div>
        </ToolResultCard>
        <button type="button" onClick={onRestart} className="mx-auto text-sm font-bold text-[var(--template-primary)] hover:underline">Start a new research plan</button>
      </div>
    </ToolCard>
  );
}
