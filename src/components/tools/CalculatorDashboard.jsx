"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AlertCircle, ArrowRight, BookOpen, Calculator, Check, ExternalLink, Info, RotateCcw, SlidersHorizontal } from "lucide-react";
import CrsCalculator from "@/components/tools/CrsCalculator";
import { ToolCard, ToolField, ToolInput, ToolResetButton, ToolResultCard, ToolSelect } from "@/components/tools/ui/ToolPrimitives";
import { CALCULATOR_NAV_GROUPS } from "@/data/calculatorCatalog";
import { evaluatePnpStream, getStatusLabel } from "@/lib/pnpCalculators";

const abilityKeys = ["speaking", "listening", "reading", "writing"];
const abilityLabels = { speaking: "Speaking", listening: "Listening", reading: "Reading", writing: "Writing" };

const thresholdRows = (values) => values.map((score, index) => [Number(score), index + 4]);
const LANGUAGE_TESTS = {
  celpip: { label: "CELPIP-General", language: "English", step: 1, thresholds: Object.fromEntries(abilityKeys.map((key) => [key, thresholdRows([4, 5, 6, 7, 8, 9, 10])])) },
  ielts: { label: "IELTS General Training", language: "English", step: 0.5, thresholds: { speaking: thresholdRows([4, 5, 5.5, 6, 6.5, 7, 7.5]), listening: thresholdRows([4.5, 5, 5.5, 6, 7.5, 8, 8.5]), reading: thresholdRows([3.5, 4, 5, 6, 6.5, 7, 8]), writing: thresholdRows([4, 5, 5.5, 6, 6.5, 7, 7.5]) } },
  pte: { label: "PTE Core", language: "English", step: 1, thresholds: { speaking: thresholdRows([42, 51, 59, 68, 76, 84, 89]), listening: thresholdRows([28, 39, 50, 60, 71, 82, 89]), reading: thresholdRows([33, 42, 51, 60, 69, 78, 88]), writing: thresholdRows([41, 51, 60, 69, 79, 88, 90]) } },
  tef: { label: "TEF Canada", language: "French", step: 1, thresholds: { speaking: thresholdRows([181, 226, 271, 310, 349, 371, 393]), listening: thresholdRows([145, 181, 217, 249, 280, 298, 316]), reading: thresholdRows([121, 151, 181, 207, 233, 248, 263]), writing: thresholdRows([181, 226, 271, 310, 349, 371, 393]) } },
  tcf: { label: "TCF Canada", language: "French", step: 1, thresholds: { speaking: thresholdRows([4, 6, 7, 10, 12, 14, 16]), listening: thresholdRows([331, 369, 398, 458, 503, 523, 549]), reading: thresholdRows([342, 375, 406, 453, 499, 524, 549]), writing: thresholdRows([4, 6, 7, 10, 12, 14, 16]) } },
};

function getLanguageLevel(test, ability, rawScore) {
  if (rawScore === "" || rawScore === undefined || rawScore === null) return null;
  const score = Number(rawScore);
  if (!Number.isFinite(score)) return null;
  const thresholds = test.thresholds[ability];
  let level = 0;
  thresholds.forEach(([minimum, candidate]) => { if (score >= minimum) level = candidate; });
  return level;
}

function Gauge({ value, max, centerLabel, sublabel }) {
  const ratio = max > 0 && Number.isFinite(value) ? Math.max(0, Math.min(1, value / max)) : 0;
  const angle = `${Math.round(ratio * 270)}deg`;
  return <div className="relative mx-auto my-6 grid h-[218px] w-[218px] place-items-center" aria-label={`${centerLabel}, ${sublabel}`}>
    <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(from 135deg, color-mix(in srgb, var(--template-on-primary) 96%, var(--template-primary)) 0deg ${angle}, color-mix(in srgb, var(--template-on-primary) 26%, transparent) ${angle} 270deg, transparent 270deg 360deg)`, mask: "radial-gradient(farthest-side, transparent calc(100% - 18px), #000 calc(100% - 17px))" }} />
    <div className="relative z-[1] grid h-[164px] w-[164px] content-center justify-items-center rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_12%,transparent)] bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_24%,transparent)] text-center">
      <strong className="block text-[3.25rem] font-extrabold leading-none tracking-[-0.05em] text-[var(--template-on-primary)]">{centerLabel}</strong>
      <span className="mt-2 max-w-[9rem] text-[0.72rem] font-bold text-[color-mix(in_srgb,var(--template-on-primary)_78%,transparent)]">{sublabel}</span>
    </div>
  </div>;
}

function Hero({ page }) {
  return <header className="calculator-hero relative isolate mb-5 overflow-hidden rounded-[1.45rem] border border-[color-mix(in_srgb,var(--template-primary)_24%,var(--template-border))] bg-[linear-gradient(105deg,color-mix(in_srgb,var(--template-primary)_11%,var(--template-surface)),color-mix(in_srgb,var(--template-primary)_24%,var(--cmg-template-deep-surface))_68%,color-mix(in_srgb,var(--template-accent)_56%,var(--template-primary)))] px-6 py-6 shadow-[0_16px_48px_color-mix(in_srgb,var(--cmg-template-deep-surface)_16%,transparent)] sm:px-9 sm:py-8">
    <div className="pointer-events-none absolute -right-32 -top-20 hidden h-[22rem] w-[30rem] rotate-[-18deg] sm:block" aria-hidden="true">
      <div className="absolute right-8 top-12 h-32 w-[28rem] rounded-[50%] border-[18px] border-[color-mix(in_srgb,var(--template-primary)_85%,#ff657c)] shadow-[0_0_26px_color-mix(in_srgb,var(--template-primary)_42%,transparent)]" />
      <div className="absolute right-[-18px] top-24 h-36 w-[31rem] rounded-[50%] border-[17px] border-[color-mix(in_srgb,var(--template-primary)_80%,#ff94a2)]" />
      <div className="absolute right-[-48px] top-36 h-36 w-[33rem] rounded-[50%] border-[16px] border-[color-mix(in_srgb,var(--template-primary)_88%,#cf1735)]" />
    </div>
    <div className="relative max-w-[58rem]">
      <p className="mb-2 flex items-center gap-2 text-[0.69rem] font-extrabold uppercase tracking-[0.13em] text-[var(--template-primary)]"><span className="h-2 w-2 rounded-full bg-[var(--template-primary)]" /> Immigration tools <span className="opacity-60">›</span> {page.group}</p>
      <h1 className="m-0 text-[clamp(1.9rem,4.1vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-[var(--template-ink)]">{page.title}</h1>
      <p className="mb-0 mt-3 max-w-[54rem] text-[0.93rem] leading-[1.55] text-[var(--template-muted)] sm:text-[1.03rem]">{page.description}</p>
    </div>
  </header>;
}

function CalculatorSidebar({ activeSlug }) {
  const calculatorNavigation = <nav className="grid gap-4">
    {CALCULATOR_NAV_GROUPS.map((group) => <section key={group.category}>
      <h3 className="mb-1 flex items-center gap-2 text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[var(--template-muted)]"><span>{group.category}</span><span className="h-px flex-1 bg-[var(--template-border)]" /></h3>
      <ul className="m-0 grid list-none gap-0.5 p-0">{group.items.map((item) => <li key={item.slug}><Link href={`/tools/${item.slug}`} aria-current={item.slug === activeSlug ? "page" : undefined} className={`flex min-h-8 items-center justify-between gap-2 rounded-[0.55rem] px-2.5 py-1.5 text-[0.76rem] leading-[1.25] transition ${item.slug === activeSlug ? "bg-[var(--template-primary)] font-extrabold text-[var(--template-on-primary)]" : "font-medium text-[var(--template-muted)] hover:bg-[color-mix(in_srgb,var(--template-primary)_7%,var(--template-surface-alt))] hover:text-[var(--template-ink)]"}`}><span>{item.shortLabel}</span>{item.slug === activeSlug && <ArrowRight className="h-3.5 w-3.5 shrink-0" />}</Link></li>)}</ul>
    </section>)}
  </nav>;
  return <aside className="h-fit rounded-[1.35rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4 shadow-[0_12px_36px_color-mix(in_srgb,var(--cmg-template-deep-surface)_8%,transparent)] xl:sticky xl:top-24" aria-label="Immigration calculators">
    <h2 className="mb-3 flex items-center gap-2 text-[1.1rem] font-extrabold text-[var(--template-ink)]"><span className="grid h-9 w-9 place-items-center rounded-[0.7rem] border border-[color-mix(in_srgb,var(--template-primary)_24%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_8%,var(--template-surface-alt))] text-[var(--template-primary)]"><Calculator className="h-4 w-4" /></span>Calculators</h2>
    <details className="group xl:hidden">
      <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-3 rounded-[0.7rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-3 text-[0.75rem] font-bold text-[var(--template-ink)] [&::-webkit-details-marker]:hidden"><span>Browse all calculators</span><span className="text-[var(--template-primary)] group-open:rotate-180">⌄</span></summary>
      <div className="mt-3 max-h-[60vh] overflow-y-auto pr-1">{calculatorNavigation}</div>
    </details>
    <div className="hidden xl:block">{calculatorNavigation}</div>
  </aside>;
}

function FormField({ question, value, onChange, id }) {
  if (question.kind === "number") return <ToolField label={question.label} htmlFor={id} hint={question.help}>
    <div className="relative"><ToolInput id={id} type="number" min={question.min} max={question.max} step={question.step || 1} value={value ?? ""} onChange={(event) => onChange(question.key, event.target.value)} placeholder="Enter value" />{question.suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[0.67rem] text-[var(--template-muted)]">{question.suffix}</span>}</div>
  </ToolField>;
  return <ToolField label={question.label} htmlFor={id} hint={question.help}>
    <ToolSelect id={id} value={value ?? ""} onChange={(event) => onChange(question.key, event.target.value)}>
      <option value="">Choose an answer</option>
      {(question.options || []).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </ToolSelect>
  </ToolField>;
}

function QuestionGroups({ questions, answers, onChange }) {
  const groups = [];
  questions.forEach((question) => {
    const title = question.section || "Profile details";
    const current = groups.at(-1);
    if (!current || current.title !== title) groups.push({ title, items: [question] });
    else current.items.push(question);
  });
  return <div className="grid gap-x-5 gap-y-4">{groups.map((group) => <section key={group.title}>
    <h3 className="mb-2.5 flex items-center gap-2 text-[0.76rem] font-extrabold text-[var(--template-ink)]"><span>{group.title}</span><span className="h-px flex-1 bg-[var(--template-border)]" /></h3>
    <div className={`grid gap-x-3.5 gap-y-2.5 ${group.items.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}>{group.items.map((question) => <FormField key={question.key} id={`calc-${question.key}`} question={question} value={answers[question.key]} onChange={onChange} />)}</div>
  </section>)}</div>;
}

function StatusIcon({ kind }) {
  if (kind === "provided") return <Check className="h-3.5 w-3.5" />;
  if (kind === "review") return <AlertCircle className="h-3.5 w-3.5" />;
  return <Info className="h-3.5 w-3.5" />;
}

function ResultCard({ page, stream, answers, result }) {
  const answered = stream.questions.filter((question) => answers[question.key] !== undefined && answers[question.key] !== "").length;
  const hasScore = stream.mode === "official-grid" && result.score !== null && result.score !== undefined;
  const numerator = hasScore ? result.score : answered;
  const denominator = hasScore ? result.maxScore : stream.questions.length;
  const segments = hasScore ? result.breakdown : stream.questions.map((question) => {
    const selected = question.options?.find((item) => String(item.value) === String(answers[question.key]));
    const isAnswered = answers[question.key] !== undefined && answers[question.key] !== "";
    const kind = !isAnswered ? "pending" : selected?.unknown ? "review" : "answered";
    return { section: question.label, label: isAnswered ? selected?.label || answers[question.key] : "Not answered", kind };
  });
  const resultHeadline = hasScore
    ? result.status === "below-minimum" ? "Below the published minimum" : "Estimated points"
    : "Criteria review";
  const bottomNote = hasScore
    ? result.minimumScore != null ? `Published minimum: ${result.minimumScore} points. Meeting it does not guarantee an invitation.` : "This estimate is not an invitation cutoff or an eligibility decision."
    : stream.mode === "no-calculator" ? "The government does not publish a reproducible points calculator for this pathway." : "This program uses pathway criteria and selection priorities instead of a universal points score.";
  const statusText = stream.mode === "no-calculator" ? "Use the official guide" : getStatusLabel(result.status);
  return <div className="grid gap-4">
    <ToolResultCard className="min-h-0 px-4 py-5 sm:px-5" aria-live="polite">
      <div className="flex items-start justify-between gap-2"><h2 className="m-0 flex items-center gap-2 text-[1rem] font-extrabold leading-tight"><Check className="h-4 w-4 shrink-0" />{resultHeadline}</h2><span className="inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_36%,transparent)] px-2 py-1 text-[0.6rem] font-bold"><span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />Live estimate</span></div>
      <p className="mb-0 mt-1 text-center text-[0.68rem] font-bold opacity-80">{stream.scoreName || (stream.mode === "official-grid" ? "Published points grid" : "Pathway checks")}</p>
      <Gauge value={numerator} max={denominator} centerLabel={answered ? String(numerator) : "—"} sublabel={hasScore ? `/ ${denominator} points` : `/ ${denominator} checks answered`} />
      <div className="flex items-center justify-between gap-3 rounded-[0.8rem] border border-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_7%,transparent)] px-3 py-2.5 text-[0.68rem] font-bold"><span>{statusText}</span><span className="text-right opacity-85">{result.missing?.length ? `${result.missing.length} fields remaining` : result.unknowns?.length ? "Evidence to verify" : "Based on your answers"}</span></div>
    </ToolResultCard>

    <section className="rounded-[1.1rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4" aria-labelledby="calc-summary-title">
      <div className="mb-2 flex items-baseline justify-between gap-2"><h2 id="calc-summary-title" className="m-0 text-[1rem] font-extrabold text-[var(--template-ink)]">{hasScore ? "Points breakdown" : "Criteria summary"}</h2><span className="text-[0.64rem] text-[var(--template-muted)]">{hasScore ? "Earned / maximum" : "Your answers"}</span></div>
      <div className="divide-y divide-[var(--template-border)] rounded-[0.85rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] px-3">
        {segments.slice(0, hasScore ? 8 : 7).map((item, index) => {
          const ratio = hasScore && item.max > 0 ? Math.max(0, Math.min(1, item.points / item.max)) : 0;
          const badge = item.kind === "pending" ? "Not answered" : item.kind === "review" ? "Needs review" : item.kind === "answered" ? "Answered" : "";
          return <div key={`${item.section}-${index}`} className="flex min-h-[2.65rem] items-center justify-between gap-2 py-2 text-[0.68rem]">
            <span className="min-w-0 flex-1 font-semibold leading-[1.35] text-[var(--template-ink)]">{item.section}</span>
            {hasScore ? <div className="flex min-w-[6.8rem] items-center gap-2"><span className="h-1.5 w-12 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--template-primary)_13%,var(--template-border))]"><span className="block h-full rounded-full bg-[var(--template-primary)]" style={{ width: `${ratio * 100}%` }} /></span><strong className="min-w-[3.3rem] text-right text-[var(--template-ink)]">{item.points}<span className="font-medium text-[var(--template-muted)]"> / {item.max || "—"}</span></strong></div> : <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[0.58rem] font-bold ${item.kind === "review" ? "bg-amber-500/10 text-amber-700" : item.kind === "answered" ? "bg-emerald-500/10 text-emerald-700" : "bg-[var(--template-surface)] text-[var(--template-muted)]"}`}><StatusIcon kind={item.kind === "review" ? "review" : item.kind === "answered" ? "provided" : "pending"} />{badge}</span>}
          </div>;
        })}
      </div>
      {result.failures?.length > 0 && <div className="mt-3 grid gap-2">{result.failures.map((failure) => <p key={failure} className="m-0 flex items-start gap-2 rounded-[0.75rem] border border-amber-500/25 bg-amber-500/8 p-3 text-[0.68rem] leading-[1.45] text-amber-800"><AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />{failure}</p>)}</div>}
      <p className="mb-0 mt-3 flex items-start gap-2 text-[0.68rem] leading-[1.5] text-[var(--template-muted)]"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--template-primary)]" />{result.unknowns?.length ? `${result.unknowns.length} answer${result.unknowns.length === 1 ? " needs" : "s need"} document or rule verification. ` : ""}{bottomNote}</p>
    </section>

    {stream.focus && <aside className="rounded-[0.95rem] border border-[color-mix(in_srgb,var(--template-primary)_20%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_6%,var(--template-surface-alt))] p-4"><h3 className="m-0 flex items-center gap-2 text-[0.75rem] font-extrabold text-[var(--template-ink)]"><BookOpen className="h-4 w-4 text-[var(--template-primary)]" />{stream.mode === "official-grid" ? "How to read this score" : "Pathway guidance"}</h3><p className="mb-0 mt-2 text-[0.68rem] leading-[1.5] text-[var(--template-muted)]">{stream.focus}</p></aside>}
    <p className="m-0 text-[0.62rem] leading-[1.45] text-[var(--template-muted)]">{page.sourceLabel || stream.guideVersion || "Official program guidance"}. <a href={stream.sourceUrl || page.sourceUrl} target="_blank" rel="noreferrer" className="font-extrabold text-[var(--template-primary)] underline underline-offset-4">Open official guide <ExternalLink className="inline h-3 w-3" /></a></p>
  </div>;
}

function PnpCalculator({ page }) {
  const streams = page.program.streams.filter((item) => item.mode !== "no-calculator");
  const [streamKey, setStreamKey] = useState(page.streamKey || streams[0]?.key || "");
  const [answers, setAnswers] = useState({});
  const stream = useMemo(() => streams.find((item) => item.key === streamKey) || streams[0], [streams, streamKey]);
  const result = useMemo(() => evaluatePnpStream(stream, answers), [stream, answers]);
  const update = (key, value) => setAnswers((current) => ({ ...current, [key]: value }));
  const reset = () => setAnswers({});
  const changeStream = (event) => { setStreamKey(event.target.value); setAnswers({}); };
  const groups = stream?.questions || [];
  const isStale = page.program.source?.status === "stale";
  return <>
    <ToolCard className="h-full" aria-labelledby="calculator-form-title">
      <div className="flex items-start justify-between gap-3 border-b border-[var(--template-border)] bg-[linear-gradient(145deg,var(--template-surface),color-mix(in_srgb,var(--template-primary)_5%,var(--template-surface)))] px-4 py-4 sm:px-5">
        <div className="flex min-w-0 items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.8rem] border border-[color-mix(in_srgb,var(--template-primary)_24%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_9%,var(--template-surface-alt))] text-[var(--template-primary)]"><SlidersHorizontal className="h-5 w-5" /></span><div><p className="m-0 text-[0.62rem] font-extrabold uppercase tracking-[0.11em] text-[var(--template-primary)]">Pathway details</p><h2 id="calculator-form-title" className="m-0 mt-0.5 text-[1.15rem] font-extrabold leading-[1.25] text-[var(--template-ink)]">{stream?.label || page.shortLabel}</h2></div></div>
        <ToolResetButton onClick={reset} aria-label="Reset calculator"><RotateCcw className="h-3.5 w-3.5" /><span className="hidden sm:inline">Reset</span></ToolResetButton>
      </div>
      <div className="grid gap-4 p-4 sm:p-5">
        <p className="m-0 text-[0.75rem] leading-[1.5] text-[var(--template-muted)]">{page.program.focus}</p>
        {streams.length > 1 && <ToolField label="Select a pathway or category" htmlFor={`stream-${page.slug}`}><ToolSelect id={`stream-${page.slug}`} value={streamKey} onChange={changeStream}>{streams.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}</ToolSelect></ToolField>}
        {stream && <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-[color-mix(in_srgb,var(--template-primary)_10%,var(--template-surface-alt))] px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.07em] text-[var(--template-primary)]">{stream.mode === "official-grid" ? "Official points grid" : "Criteria and priorities"}</span>{stream.minimumScore != null && <span className="text-[0.65rem] font-semibold text-[var(--template-muted)]">Published minimum: {stream.minimumScore} points</span>}</div>}
        {isStale && <p className="m-0 flex items-start gap-2 rounded-[0.75rem] border border-amber-500/25 bg-amber-500/8 px-3 py-2.5 text-[0.66rem] leading-[1.45] text-amber-800"><AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />{page.program.source.note || "Some public program information is dated. Check the linked official source."}</p>}
        <QuestionGroups questions={groups} answers={answers} onChange={update} />
        {stream?.mode === "no-calculator" && <p className="m-0 rounded-[0.8rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-3 text-[0.7rem] leading-[1.5] text-[var(--template-muted)]">No points are calculated for this pathway. Open the official source to confirm the current program route.</p>}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--template-border)] pt-3"><button type="button" onClick={() => document.getElementById("calc-summary-title")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="inline-flex min-h-[2.8rem] items-center gap-3 rounded-[0.7rem] bg-[var(--template-primary)] px-4 text-[0.77rem] font-extrabold text-[var(--template-on-primary)] shadow-[0_9px_22px_color-mix(in_srgb,var(--template-primary)_20%,transparent)]">{stream?.mode === "official-grid" ? "Calculate score" : "Check criteria"}<ArrowRight className="h-4 w-4" /></button><span className="text-[0.63rem] text-[var(--template-muted)]">Results update as you enter answers</span></div>
      </div>
    </ToolCard>
    <div className="xl:sticky xl:top-24 xl:self-start"><ResultCard page={page} stream={stream} answers={answers} result={result} /></div>
  </>;
}

function ClbCalculator({ page }) {
  const [testKey, setTestKey] = useState("celpip");
  const [scores, setScores] = useState({});
  const test = LANGUAGE_TESTS[testKey];
  const levels = abilityKeys.map((key) => getLanguageLevel(test, key, scores[key]));
  const complete = levels.every((level) => level !== null);
  const minimum = complete ? Math.min(...levels) : null;
  const reset = () => setScores({});
  return <>
    <ToolCard className="h-full" aria-labelledby="calculator-form-title">
      <div className="flex items-start justify-between gap-3 border-b border-[var(--template-border)] bg-[linear-gradient(145deg,var(--template-surface),color-mix(in_srgb,var(--template-primary)_5%,var(--template-surface)))] px-4 py-4 sm:px-5"><div className="flex items-start gap-3"><span className="grid h-10 w-10 place-items-center rounded-[0.8rem] border border-[color-mix(in_srgb,var(--template-primary)_24%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_9%,var(--template-surface-alt))] text-[var(--template-primary)]"><SlidersHorizontal className="h-5 w-5" /></span><div><p className="m-0 text-[0.62rem] font-extrabold uppercase tracking-[0.11em] text-[var(--template-primary)]">Test score conversion</p><h2 id="calculator-form-title" className="m-0 mt-0.5 text-[1.15rem] font-extrabold text-[var(--template-ink)]">Enter your test results</h2></div></div><ToolResetButton onClick={reset}><RotateCcw className="h-3.5 w-3.5" /><span className="hidden sm:inline">Reset</span></ToolResetButton></div>
      <div className="grid gap-4 p-4 sm:p-5"><p className="m-0 text-[0.75rem] leading-[1.5] text-[var(--template-muted)]">Choose the exact IRCC-approved test and enter each score from your report. French results convert to NCLC; English results convert to CLB.</p>
        <ToolField label="Approved language test" htmlFor="language-test"><ToolSelect id="language-test" value={testKey} onChange={(event) => { setTestKey(event.target.value); setScores({}); }}>{Object.entries(LANGUAGE_TESTS).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}</ToolSelect></ToolField>
        <div className="grid gap-3 sm:grid-cols-2">{abilityKeys.map((key) => <ToolField key={key} label={abilityLabels[key]} htmlFor={`language-${key}`} hint={levels[abilityKeys.indexOf(key)] == null ? undefined : `${test.language === "English" ? "CLB" : "NCLC"} ${levels[abilityKeys.indexOf(key)] || "Below 4"}`}><ToolInput id={`language-${key}`} type="number" min="0" max={testKey === "ielts" ? "9" : testKey === "celpip" ? "12" : testKey === "pte" || testKey === "tcf" ? "90" : "450"} step={test.step} value={scores[key] ?? ""} onChange={(event) => setScores((current) => ({ ...current, [key]: event.target.value }))} placeholder="Enter score" /></ToolField>)}</div>
        <p className="m-0 rounded-[0.8rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-3 text-[0.67rem] leading-[1.5] text-[var(--template-muted)]">Use the TEF Canada “Équivalence ancien score” values. IRCC requires Express Entry test results to be valid when you create your profile and submit your permanent-residence application.</p>
      </div>
    </ToolCard>
    <div className="xl:sticky xl:top-24 xl:self-start">
      <ToolResultCard className="min-h-0 px-4 py-5 sm:px-5"><div className="flex items-center justify-between gap-2"><h2 className="m-0 flex items-center gap-2 text-[1rem] font-extrabold"><Check className="h-4 w-4" /> Language profile</h2><span className="rounded-full border border-white/30 px-2 py-1 text-[0.59rem] font-bold">{test.language}</span></div><p className="mb-0 mt-1 text-center text-[0.68rem] font-bold opacity-80">Lowest valid level</p><Gauge value={minimum ?? 0} max={10} centerLabel={complete ? String(minimum || "<4") : "—"} sublabel={`CLB / NCLC · ${test.label}`} /><div className="grid gap-1 rounded-[0.8rem] border border-white/15 bg-white/5 px-3">{abilityKeys.map((key, index) => <div key={key} className="flex items-center justify-between gap-2 border-b border-white/10 py-2 text-[0.72rem] last:border-0"><span>{abilityLabels[key]}</span><strong>{levels[index] === null ? "Enter score" : levels[index] === 0 ? "Below CLB/NCLC 4" : `${test.language === "English" ? "CLB" : "NCLC"} ${levels[index]}`}</strong></div>)}</div><p className="mb-0 mt-3 text-[0.68rem] leading-[1.5] opacity-85">Use the lowest ability level when checking many program minimums. Each immigration stream can set its own rule.</p></ToolResultCard>
      <div className="mt-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4"><h2 className="m-0 text-[0.95rem] font-extrabold text-[var(--template-ink)]">Score conversion</h2><div className="mt-3 grid grid-cols-2 gap-2">{abilityKeys.map((key, index) => <div key={key} className="rounded-[0.75rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-2.5"><span className="block text-[0.61rem] font-bold text-[var(--template-muted)]">{abilityLabels[key]}</span><strong className="mt-1 block text-[1rem] text-[var(--template-ink)]">{levels[index] === null ? "—" : levels[index] === 0 ? "<4" : levels[index]}</strong></div>)}</div><p className="mb-0 mt-3 text-[0.65rem] leading-[1.5] text-[var(--template-muted)]">Levels come from IRCC’s Federal Skilled Worker equivalency tables. Confirm the test version and score report before applying.</p></div>
    </div>
  </>;
}

const fswOptions = {
  ages: [{ value: "under18", label: "Under 18", points: 0 }, { value: "18to35", label: "18–35", points: 12 }, ...Array.from({ length: 11 }, (_, index) => ({ value: String(index + 36), label: String(index + 36), points: 11 - index })), { value: "47plus", label: "47 or older", points: 0 }],
  education: [{ value: "none", label: "Less than high school", points: 0 }, { value: "secondary", label: "High school diploma", points: 5 }, { value: "one-year", label: "One-year post-secondary credential", points: 15 }, { value: "two-year", label: "Two-year post-secondary credential", points: 19 }, { value: "three-year", label: "Three or more year credential", points: 21 }, { value: "two-credentials", label: "Two or more credentials, one 3+ years", points: 22 }, { value: "masters", label: "Master’s degree", points: 23 }, { value: "doctoral", label: "Doctoral degree", points: 25 }],
  experience: [{ value: "under1", label: "Less than 1 year", points: 0 }, { value: "1", label: "1 year", points: 9 }, { value: "2to3", label: "2–3 years", points: 11 }, { value: "4to5", label: "4–5 years", points: 13 }, { value: "6plus", label: "6 years or more", points: 15 }],
  language: [{ value: "below7", label: "Below CLB/NCLC 7", points: 0 }, { value: "7", label: "CLB/NCLC 7", points: 4 }, { value: "8", label: "CLB/NCLC 8", points: 5 }, { value: "9plus", label: "CLB/NCLC 9 or higher", points: 6 }],
};
const adaptabilityItems = [
  ["spouseLanguage", "Accompanying spouse/partner has CLB 4+ in all four abilities", 5],
  ["candidateStudy", "You completed 2 years of eligible full-time study in Canada", 5],
  ["spouseStudy", "Accompanying spouse/partner completed 2 years of eligible study in Canada", 5],
  ["candidateWork", "You completed 1 year of eligible authorized skilled work in Canada", 10],
  ["spouseWork", "Accompanying spouse/partner completed 1 year of eligible work in Canada", 5],
  ["relative", "You or accompanying spouse/partner has a qualifying relative in Canada", 5],
];
const fswMinimumRequirements = [
  ["continuousWork", "At least 1 year continuous skilled work in the past 10 years"],
  ["educationEca", "Canadian credential or foreign ECA"],
  ["funds", "Settlement funds or an applicable exemption"],
  ["residence", "Plan to live outside Quebec"],
];

function FswCalculator() {
  const [answers, setAnswers] = useState({});
  const reset = () => setAnswers({});
  const set = (key, value) => setAnswers((current) => ({ ...current, [key]: value }));
  const getPoints = (key, options) => options.find((item) => item.value === answers[key])?.points || 0;
  const languageValues = abilityKeys.map((key) => answers[`language-${key}`]);
  const baseComplete = ["age", "education", "experience", "secondLanguage", "jobOffer"].every((key) => answers[key] !== undefined && answers[key] !== "") && languageValues.every((value) => value !== undefined && value !== "");
  const languagePoints = abilityKeys.reduce((total, key) => total + getPoints(`language-${key}`, fswOptions.language), 0);
  const secondPoints = answers.secondLanguage === "yes" ? 4 : 0;
  const adaptabilityPoints = Math.min(10, adaptabilityItems.reduce((total, [key, , points]) => total + (answers[key] ? points : 0), 0) + (answers.jobOffer === "yes" ? 5 : 0));
  const score = getPoints("age", fswOptions.ages) + getPoints("education", fswOptions.education) + getPoints("experience", fswOptions.experience) + languagePoints + secondPoints + (answers.jobOffer === "yes" ? 10 : 0) + adaptabilityPoints;
  const languageRequirement = languageValues.some((value) => value === undefined) ? undefined : languageValues.every((value) => value !== "below7") ? "yes" : "no";
  const requirementStatuses = [...fswMinimumRequirements.map(([key, label]) => ({ key, label, answer: answers[key] })), { key: "languageMinimum", label: "First language is CLB/NCLC 7+ in all abilities", answer: languageRequirement }];
  const minimumChecks = requirementStatuses.map((item) => item.answer === "yes");
  const allRequirementsAnswered = requirementStatuses.every((item) => item.answer !== undefined);
  const passes = allRequirementsAnswered && minimumChecks.every(Boolean) && score >= 67;
  const breakdown = [
    ["Age", getPoints("age", fswOptions.ages), 12], ["Education", getPoints("education", fswOptions.education), 25], ["First official language", languagePoints, 24], ["Second official language", secondPoints, 4], ["Work experience", getPoints("experience", fswOptions.experience), 15], ["Arranged employment", answers.jobOffer === "yes" ? 10 : 0, 10], ["Adaptability", adaptabilityPoints, 10],
  ];
  return <>
    <ToolCard className="h-full" aria-labelledby="calculator-form-title"><div className="flex items-start justify-between gap-3 border-b border-[var(--template-border)] bg-[linear-gradient(145deg,var(--template-surface),color-mix(in_srgb,var(--template-primary)_5%,var(--template-surface)))] px-4 py-4 sm:px-5"><div className="flex items-start gap-3"><span className="grid h-10 w-10 place-items-center rounded-[0.8rem] border border-[color-mix(in_srgb,var(--template-primary)_24%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_9%,var(--template-surface-alt))] text-[var(--template-primary)]"><SlidersHorizontal className="h-5 w-5" /></span><div><p className="m-0 text-[0.62rem] font-extrabold uppercase tracking-[0.11em] text-[var(--template-primary)]">Selection factors</p><h2 id="calculator-form-title" className="m-0 mt-0.5 text-[1.15rem] font-extrabold text-[var(--template-ink)]">Federal Skilled Worker profile</h2></div></div><ToolResetButton onClick={reset}><RotateCcw className="h-3.5 w-3.5" /><span className="hidden sm:inline">Reset</span></ToolResetButton></div>
      <div className="grid gap-4 p-4 sm:p-5"><p className="m-0 text-[0.75rem] leading-[1.5] text-[var(--template-muted)]">Enter the federal selection factors. The 67-point test is separate from your CRS score and from FSW’s minimum eligibility requirements.</p>
        <section><h3 className="mb-2.5 flex items-center gap-2 text-[0.76rem] font-extrabold text-[var(--template-ink)]">Candidate profile <span className="h-px flex-1 bg-[var(--template-border)]" /></h3><div className="grid gap-x-3.5 gap-y-2.5 sm:grid-cols-2">
          <ToolField label="Age when IRCC receives the application" htmlFor="fsw-age"><ToolSelect id="fsw-age" value={answers.age ?? ""} onChange={(event) => set("age", event.target.value)}><option value="">Choose age range</option>{fswOptions.ages.map((item) => <option key={item.value} value={item.value}>{item.label} · {item.points} points</option>)}</ToolSelect></ToolField>
          <ToolField label="Highest completed education" htmlFor="fsw-education"><ToolSelect id="fsw-education" value={answers.education ?? ""} onChange={(event) => set("education", event.target.value)}><option value="">Choose education</option>{fswOptions.education.map((item) => <option key={item.value} value={item.value}>{item.label} · {item.points} points</option>)}</ToolSelect></ToolField>
          <ToolField label="Qualifying skilled work experience" htmlFor="fsw-experience"><ToolSelect id="fsw-experience" value={answers.experience ?? ""} onChange={(event) => set("experience", event.target.value)}><option value="">Choose experience</option>{fswOptions.experience.map((item) => <option key={item.value} value={item.value}>{item.label} · {item.points} points</option>)}</ToolSelect></ToolField>
          <ToolField label="Second official language" htmlFor="fsw-second-language"><ToolSelect id="fsw-second-language" value={answers.secondLanguage ?? ""} onChange={(event) => set("secondLanguage", event.target.value)}><option value="">Choose one</option><option value="yes">CLB/NCLC 5+ in all four abilities · 4 points</option><option value="no">Does not meet all four · 0 points</option></ToolSelect></ToolField>
        </div></section>
        <section><h3 className="mb-2.5 flex items-center gap-2 text-[0.76rem] font-extrabold text-[var(--template-ink)]">First official language <span className="h-px flex-1 bg-[var(--template-border)]" /></h3><div className="grid gap-x-3.5 gap-y-2.5 sm:grid-cols-2">{abilityKeys.map((key) => <ToolField key={key} label={abilityLabels[key]} htmlFor={`fsw-language-${key}`}><ToolSelect id={`fsw-language-${key}`} value={answers[`language-${key}`] ?? ""} onChange={(event) => set(`language-${key}`, event.target.value)}><option value="">Choose level</option>{fswOptions.language.map((item) => <option key={item.value} value={item.value}>{item.label} · {item.points} points</option>)}</ToolSelect></ToolField>)}</div><p className="mb-0 mt-2 text-[0.64rem] leading-[1.45] text-[var(--template-muted)]">A first-language level below CLB/NCLC 7 in any ability does not meet the minimum language requirement.</p></section>
        <section><h3 className="mb-2.5 flex items-center gap-2 text-[0.76rem] font-extrabold text-[var(--template-ink)]">Employment <span className="h-px flex-1 bg-[var(--template-border)]" /></h3><ToolField label="Qualifying arranged employment in Canada?" htmlFor="fsw-job-offer" hint="A qualifying offer earns 10 selection points and can contribute 5 adaptability points."><ToolSelect id="fsw-job-offer" value={answers.jobOffer ?? ""} onChange={(event) => set("jobOffer", event.target.value)}><option value="">Choose one</option><option value="yes">Yes · 10 points</option><option value="no">No · 0 points</option></ToolSelect></ToolField></section>
        <section><h3 className="mb-2.5 flex items-center gap-2 text-[0.76rem] font-extrabold text-[var(--template-ink)]">Adaptability · select any that apply <span className="h-px flex-1 bg-[var(--template-border)]" /></h3><div className="grid gap-2 sm:grid-cols-2">{adaptabilityItems.map(([key, label, points]) => <label key={key} className="flex cursor-pointer items-start gap-2 rounded-[0.75rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-2.5 text-[0.66rem] leading-[1.4] text-[var(--template-ink)]"><input type="checkbox" checked={Boolean(answers[key])} onChange={(event) => set(key, event.target.checked)} className="mt-0.5 accent-[var(--template-primary)]" /><span>{label}<strong className="ml-1 text-[var(--template-primary)]">+{points}</strong></span></label>)}</div><p className="mb-0 mt-2 text-[0.64rem] leading-[1.45] text-[var(--template-muted)]">Adaptability is capped at 10 points. Arranged employment can add 5 adaptability points when applicable.</p></section>
        <section><h3 className="mb-2.5 flex items-center gap-2 text-[0.76rem] font-extrabold text-[var(--template-ink)]">Minimum requirements · confirm separately <span className="h-px flex-1 bg-[var(--template-border)]" /></h3><div className="grid gap-x-3.5 gap-y-2.5 sm:grid-cols-2">{fswMinimumRequirements.map(([key, label]) => <ToolField key={key} label={label} htmlFor={`fsw-${key}`}><ToolSelect id={`fsw-${key}`} value={answers[key] ?? ""} onChange={(event) => set(key, event.target.value)}><option value="">Choose an answer</option><option value="yes">Yes</option><option value="no">No</option></ToolSelect></ToolField>)}</div></section>
      </div>
    </ToolCard>
    <div className="xl:sticky xl:top-24 xl:self-start"><ToolResultCard className="min-h-0 px-4 py-5 sm:px-5"><div className="flex items-center justify-between gap-2"><h2 className="m-0 flex items-center gap-2 text-[1rem] font-extrabold"><Check className="h-4 w-4" /> FSW selection score</h2><span className="rounded-full border border-white/30 px-2 py-1 text-[0.59rem] font-bold">67-point test</span></div><p className="mb-0 mt-1 text-center text-[0.68rem] font-bold opacity-80">Selection factors · out of 100</p><Gauge value={baseComplete ? score : 0} max={100} centerLabel={baseComplete ? String(score) : "—"} sublabel="/ 100 points" /><p className="m-0 rounded-[0.8rem] border border-white/15 bg-white/5 px-3 py-2.5 text-center text-[0.71rem] font-extrabold">{baseComplete ? passes ? "At or above 67 · review minimums" : score < 67 ? "Below the 67-point threshold" : "Review minimum requirements" : "Complete the factors to calculate"}</p><div className="mt-3 grid gap-1 rounded-[0.8rem] border border-white/15 bg-white/5 px-3">{breakdown.map(([label, points, max]) => <div key={label} className="flex items-center justify-between gap-2 border-b border-white/10 py-2 text-[0.67rem] last:border-0"><span>{label}</span><strong>{points} / {max}</strong></div>)}</div></ToolResultCard>
      <div className="mt-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4"><h2 className="m-0 text-[0.95rem] font-extrabold text-[var(--template-ink)]">Minimum requirement checks</h2><ul className="m-0 mt-3 grid list-none gap-2 p-0">{requirementStatuses.map(({ key, label, answer }) => <li key={key} className="flex items-start gap-2 rounded-[0.7rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-2.5 text-[0.66rem] leading-[1.4] text-[var(--template-ink)]"><span className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${answer === "yes" ? "bg-emerald-600" : answer === "no" ? "bg-amber-600" : "bg-[var(--template-muted)]"}`} /><span className="min-w-0 flex-1">{label}</span><strong className="shrink-0 text-[var(--template-muted)]">{answer === "yes" ? "Confirmed" : answer === "no" ? "No" : "Not answered"}</strong></li>)}</ul><p className="mb-0 mt-3 text-[0.66rem] leading-[1.5] text-[var(--template-muted)]">This self-check does not establish FSW eligibility. IRCC assesses all minimum requirements and supporting documents.</p></div>
    </div>
  </>;
}

function RcipCalculator({ page }) {
  const [answers, setAnswers] = useState({});
  const update = (key, value) => setAnswers((current) => ({ ...current, [key]: value }));
  const reset = () => setAnswers({});
  const versionQuestion = { key: "programVersion", label: "Which route are you checking?", section: "Program version", options: [{ value: "pilot", label: "RCIP pilot · recommendation issued by Dec 31, 2026" }, { value: "permanent", label: "Rural Community Immigration Program · opens Jan 1, 2027" }] };
  const pilotQuestions = [
    { key: "community", label: "Is your community participating and accepting candidates for the relevant occupation?", section: "Community and job", options: [{ value: "yes", label: "Yes, confirmed with the community" }, { value: "no", label: "No" }, { value: "unknown", label: "Need to confirm", unknown: true }] },
    { key: "employer", label: "Is the job offer from a designated employer in the participating community?", section: "Community and job", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unknown", label: "Need to confirm designation", unknown: true }] },
    { key: "recommendation", label: "Do you have a valid community recommendation?", section: "Community and job", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "pending", label: "Not yet issued", unknown: true }] },
    { key: "experience", label: "Do you have 1 year (1,560 hours) of related paid work in the past 3 years, or a qualifying graduate exemption?", section: "Federal requirements", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unknown", label: "Need to verify dates or exemption", unknown: true }] },
    { key: "language", label: "Do your approved language results meet the offered job’s TEER minimum?", section: "Federal requirements", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unknown", label: "Need to check the TEER threshold", unknown: true }] },
    { key: "education", label: "Do you have a Canadian credential or foreign equivalent with an ECA where required?", section: "Federal requirements", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unknown", label: "Need to confirm the ECA", unknown: true }] },
    { key: "funds", label: "Can you show required settlement funds, unless an IRCC exemption applies?", section: "Federal requirements", options: [{ value: "yes", label: "Yes / exemption applies" }, { value: "no", label: "No" }, { value: "unknown", label: "Need to check the current table", unknown: true }] },
    { key: "intent", label: "Do you intend to live in the participating rural community?", section: "Federal requirements", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
  ];
  const permanentQuestions = [
    { key: "permanentGuide", label: "Have you checked IRCC’s current eligibility and application instructions for the permanent program?", section: "Program guidance", options: [{ value: "yes", label: "Yes, reviewed" }, { value: "no", label: "Not yet" }, { value: "unknown", label: "Need help finding the latest guidance", unknown: true }] },
    { key: "permanentCommunity", label: "Have you confirmed the community’s current priority occupations, designated employers and selection process?", section: "Community guidance", options: [{ value: "yes", label: "Yes, confirmed" }, { value: "no", label: "Not yet" }, { value: "unknown", label: "Need to confirm locally", unknown: true }] },
  ];
  const selectedQuestions = answers.programVersion === "pilot" ? pilotQuestions : answers.programVersion === "permanent" ? permanentQuestions : [];
  const questions = [versionQuestion, ...selectedQuestions];
  const checks = selectedQuestions;
  const answered = checks.filter((question) => answers[question.key] !== undefined).length;
  const misses = checks.filter((question) => answers[question.key] === "no").length;
  const status = answers.programVersion === "permanent"
    ? answers.permanentGuide === "yes" && answers.permanentCommunity === "yes" ? "Guidance checked · assess your case with IRCC and the community" : "Review the 2027 program and community guidance"
    : answers.programVersion === "pilot" ? misses ? "One or more selected requirements are not met" : "Pilot requirements review" : "Choose a program version";
  return <>
    <ToolCard className="h-full" aria-labelledby="calculator-form-title"><div className="flex items-start justify-between gap-3 border-b border-[var(--template-border)] bg-[linear-gradient(145deg,var(--template-surface),color-mix(in_srgb,var(--template-primary)_5%,var(--template-surface)))] px-4 py-4 sm:px-5"><div className="flex items-start gap-3"><span className="grid h-10 w-10 place-items-center rounded-[0.8rem] border border-[color-mix(in_srgb,var(--template-primary)_24%,var(--template-border))] bg-[color-mix(in_srgb,var(--template-primary)_9%,var(--template-surface-alt))] text-[var(--template-primary)]"><SlidersHorizontal className="h-5 w-5" /></span><div><p className="m-0 text-[0.62rem] font-extrabold uppercase tracking-[0.11em] text-[var(--template-primary)]">Community pathway</p><h2 id="calculator-form-title" className="m-0 mt-0.5 text-[1.15rem] font-extrabold text-[var(--template-ink)]">Rural immigration pathway</h2></div></div><ToolResetButton onClick={reset}><RotateCcw className="h-3.5 w-3.5" /><span className="hidden sm:inline">Reset</span></ToolResetButton></div><div className="grid gap-4 p-4 sm:p-5"><p className="m-0 text-[0.75rem] leading-[1.5] text-[var(--template-muted)]">There is no points grid for this program. The pilot and its replacement have different timelines; choose the correct version before reviewing requirements.</p><QuestionGroups questions={questions} answers={answers} onChange={update} /><p className="m-0 rounded-[0.8rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-3 text-[0.67rem] leading-[1.5] text-[var(--template-muted)]">Transition note: IRCC says the pilot closes January 1, 2027. If your pilot recommendation is dated December 31, 2026 or earlier, apply for permanent residence before that recommendation expires. The permanent Rural Community Immigration Program opens January 1, 2027; use its current IRCC and community guidance.</p></div></ToolCard>
    <div className="xl:sticky xl:top-24 xl:self-start"><ToolResultCard className="min-h-0 px-4 py-5 sm:px-5"><div className="flex items-center justify-between gap-2"><h2 className="m-0 flex items-center gap-2 text-[1rem] font-extrabold"><Check className="h-4 w-4" />{answers.programVersion === "permanent" ? "Program guidance" : "RCIP community criteria"}</h2><span className="rounded-full border border-white/30 px-2 py-1 text-[0.59rem] font-bold">No points grid</span></div><p className="mb-0 mt-1 text-center text-[0.68rem] font-bold opacity-80">{answers.programVersion === "permanent" ? "Guidance checks answered" : "Requirements answered"}</p><Gauge value={answered} max={Math.max(checks.length, 1)} centerLabel={answers.programVersion ? String(answered) : "—"} sublabel={answers.programVersion ? `/ ${checks.length} checks answered` : "Choose a route"} /><p className="m-0 rounded-[0.8rem] border border-white/15 bg-white/5 px-3 py-2.5 text-center text-[0.71rem] font-extrabold">{status}</p><p className="mb-0 mt-3 text-[0.68rem] leading-[1.5] opacity-85">{answers.programVersion === "permanent" ? "The replacement program opens January 1, 2027. These answers only confirm that you checked current guidance; they do not assess your eligibility." : "Pilot checks cover the recommendation, designated employer, related experience, language, education, funds and community intent. Local requirements also apply."}</p></ToolResultCard><div className="mt-4 rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface)] p-4"><h2 className="m-0 flex items-center gap-2 text-[0.9rem] font-extrabold text-[var(--template-ink)]"><BookOpen className="h-4 w-4 text-[var(--template-primary)]" /> Official program sources</h2><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration.html" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-extrabold text-[var(--template-primary)] underline underline-offset-4">Pilot eligibility and transition <ExternalLink className="h-3 w-3" /></a><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration-program.html" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-[0.7rem] font-extrabold text-[var(--template-primary)] underline underline-offset-4">Permanent-program guidance <ExternalLink className="h-3 w-3" /></a></div></div>
  </>;
}

export default function CalculatorDashboard({ page }) {
  const pageSourceLabel = page.sourceLabel || page.stream?.guideVersion || page.program?.source?.guideVersion;
  return <main className="calculator-dashboard mx-auto w-full max-w-[1580px] px-3 pb-10 pt-36 sm:px-5 lg:px-8">
    <Hero page={page} />
    <div className="grid items-start gap-4 xl:grid-cols-[minmax(205px,0.72fr)_minmax(410px,1.85fr)_minmax(350px,1.45fr)]">
      <CalculatorSidebar activeSlug={page.slug} />
      {page.type === "crs" ? <div className="min-w-0 xl:col-span-2"><CrsCalculator /></div> : page.type === "pnp" ? <PnpCalculator page={page} /> : page.type === "clb" ? <ClbCalculator page={page} /> : page.type === "fsw" ? <FswCalculator /> : <RcipCalculator page={page} />}
    </div>
    <footer className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 rounded-[0.9rem] border border-[var(--template-border)] bg-[var(--template-surface)] px-4 py-3 text-[0.69rem] text-[var(--template-muted)]"><span className="flex items-center gap-2"><BookOpen className="h-4 w-4 shrink-0" />{pageSourceLabel ? `Guide: ${pageSourceLabel}` : "Rules reviewed against the linked official source"} · Confirm current requirements before applying</span><a href={page.stream?.sourceUrl || page.sourceUrl || page.program?.source?.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-extrabold text-[var(--template-primary)] underline underline-offset-4">{page.sourceLabel || page.program?.source?.label || "Official program guide"}<ExternalLink className="h-3 w-3" /></a></footer>
    <p className="mb-0 mt-3 flex items-start gap-2 text-[0.64rem] leading-[1.45] text-[var(--template-muted)]"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--template-primary)]" />This self-service estimate is for planning. Authorities assess your complete file and can change program rules, selection priorities and intake dates.</p>
  </main>;
}
