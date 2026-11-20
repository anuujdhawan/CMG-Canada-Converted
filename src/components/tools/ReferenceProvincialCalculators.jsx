"use client";

import { useId, useState } from "react";
import { Check, ChevronDown, ExternalLink } from "lucide-react";
import { evaluatePnpStream } from "@/lib/pnpCalculators";
import { ontario } from "@/data/referenceOntario";
import { newBrunswick, newfoundland, novaScotia, yukon } from "@/data/referenceProvincialCriteria";
import { alberta, britishColumbia, manitoba, northwestTerritories, princeEdwardIsland, saskatchewan } from "@/data/referenceProvincialPoints";
import styles from "./ReferenceProvincialCalculators.module.css";
import { Callout, CriteriaSummary, Field, FormPanel, PointsBreakdown, ResultPanel, ScoreResult, SectionLabel } from "./ReferenceCalculatorUI";

const programs = {
  ontario,
  manitoba,
  alberta,
  saskatchewan,
  bc: britishColumbia,
  newBrunswick,
  newfoundland,
  novaScotia,
  pei: princeEdwardIsland,
};
const territories = { nwt: northwestTerritories, yukon };
const pointsSteps = ["Pathway", "Eligibility", "Points"];
const criteriaSteps = ["Pathway", "Criteria"];

function initialAnswers(variant) {
  return Object.fromEntries([...(variant.controls || []), ...variant.fields].map((field) => [field.key, field.initial ?? (field.multi ? [] : "")]));
}

function ProvincialField({ field, value, update }) {
  const id = useId();
  const warning = field.warningValues?.includes(value);
  const blank = field.options && !field.options.some((option) => option.value === "");
  const choices = blank && value === "" ? [{ value: "", label: "Select an answer" }, ...field.options] : field.options;
  const onChange = (next) => update(field.key, next);
  return (
    <Field label={field.label} id={id} value={value} onChange={onChange} options={choices} type={field.type} suffix={field.suffix} min={field.min} max={field.max} step={field.step} highlight={field.highlight} warning={warning} wide={field.wide}>
      {field.toggle ? (
        <div className="ref-choice-group" id={id} role="group" aria-label={field.label}>
          {field.options.map((option) => (
            <button type="button" className="ref-choice" key={option.value} aria-pressed={value === option.value} onClick={() => onChange(option.value)}>
              {value === option.value && <Check aria-hidden />}{option.label}
            </button>
          ))}
        </div>
      ) : field.multi ? (
        <details className={styles.multiple} id={id}>
          <summary className="ref-control">
            <span>{value?.length === 1 ? choices.find((option) => option.value === value[0])?.label : value?.length ? `${value.length} selected` : "No factors selected"}</span>
            <ChevronDown className="ref-select-chevron" aria-hidden />
          </summary>
          <div className={styles.multipleOptions}>
            {choices.map((option) => (
              <label key={option.value}>
                <input type="checkbox" checked={value?.includes(option.value) ?? false} onChange={(event) => onChange(event.target.checked ? [...(value ?? []), option.value] : value.filter((item) => item !== option.value))} />
                {option.label}
              </label>
            ))}
          </div>
        </details>
      ) : null}
    </Field>
  );
}

function Results({ variant, answers, example, showIssues }) {
  const guide = variant.guide && (
    <Callout variant="book" title={variant.guide[0]}>
      {variant.guide[1]}
      {variant.source && <> <a href={variant.source} target="_blank" rel="noreferrer">Official program guide <ExternalLink aria-hidden size={12} /></a></>}
    </Callout>
  );
  if (variant.criteria) {
    const rows = variant.criteria(answers);
    const provided = rows.filter((item) => item.status === "provided").length;
    const pending = rows.filter((item) => item.status === "pending");
    const review = rows.filter((item) => item.status === "review");
    const outstanding = pending.length + review.length;
    const label = pending.length ? `${pending.length} ${pending.length === 1 ? "answer" : "answers"} needed` : outstanding ? `${outstanding} ${outstanding === 1 ? "item" : "items"} to verify` : "Evidence indicated";
    const detail = outstanding ? (example && variant.warningDetail ? variant.warningDetail : [...review, ...pending].map((item) => item.short).join(", ")) : "Review the program guide";
    return (
      <ResultPanel>
        <ScoreResult title={variant.resultTitle} example={example} value={provided} max={rows.length} sublabel={`/ ${rows.length} provided`} criteria={rows.map(({ short, status }) => ({ label: short, status }))} footerLabel={label} footerValue={detail} warning={outstanding > 0} />
        <CriteriaSummary rows={rows} note={variant.note} />
        {guide}
      </ResultPanel>
    );
  }

  const input = variant.mapAnswers?.(answers) ?? answers;
  const result = variant.score?.(input) ?? evaluatePnpStream(variant.stream, input);
  const value = result.value ?? result.score;
  const max = result.max ?? result.maxScore;
  const threshold = result.minimumScore;
  const above = Number.isFinite(threshold) && value >= threshold;
  const rows = result.rows ?? variant.rows?.(result.breakdown) ?? result.breakdown?.filter((row) => row.max > 0 || row.points < 0).map((row) => ({ ...row, label: row.section })) ?? [];
  const footerLabel = Number.isFinite(threshold) ? `${Math.abs(value - threshold)} points ${above ? "above" : "below"}` : variant.footerLabel;
  const footerValue = Number.isFinite(threshold) ? (variant.thresholdLabel || `${threshold}-point minimum`) : typeof variant.footerValue === "function" ? variant.footerValue(answers) : variant.footerValue;
  const note = showIssues && (result.failures?.length || result.missing?.length)
    ? result.failures?.[0] || `Complete the remaining ${result.missing.length} ${result.missing.length === 1 ? "answer" : "answers"} for this grid.`
    : example ? variant.note : variant.liveNote ?? variant.note?.replace(/^The example.*$/u, "Review the points for your answers and confirm the requirements for this pathway.");
  return (
    <ResultPanel>
      <ScoreResult title={variant.resultTitle} example={example} value={value} max={max} min={variant.min} threshold={threshold} ticks={variant.ticks} footerLabel={footerLabel} footerValue={footerValue} warning={Number.isFinite(threshold) && !above} />
      <PointsBreakdown rows={rows} note={note} />
      {guide}
    </ResultPanel>
  );
}

export default function ReferenceProvincialCalculators({ page }) {
  const createConfig = page.programKey === "north" ? territories[page.streamKey] : programs[page.programKey];
  return <ProvincialForm key={page.slug} config={createConfig(page)} />;
}

function ProvincialForm({ config }) {
  const initialVariant = config.variants[config.defaultRoute];
  const defaultStep = (variant) => variant.activeStep ?? (variant.criteria ? 1 : 2);
  const [route, setRoute] = useState(config.defaultRoute);
  const [answers, setAnswers] = useState(() => initialAnswers(initialVariant));
  const [example, setExample] = useState(true);
  const [showIssues, setShowIssues] = useState(false);
  const [step, setStep] = useState(() => defaultStep(initialVariant));
  const routeVariant = config.variants[route];
  const pathwayVariant = routeVariant.selectPathway?.(routeVariant, answers) ?? routeVariant;
  const variant = step === 2 && pathwayVariant.priority ? pathwayVariant.priority : pathwayVariant;
  const controls = [...(pathwayVariant.controls || [])];
  const fields = variant.fields.filter((field) => !field.visible || field.visible(answers));
  if (config.routeLast) controls.push(config.routeField);
  else controls.unshift(config.routeField);

  function update(key, value) {
    if (key === "route") {
      const nextVariant = config.variants[value];
      if (!nextVariant) return;
      setRoute(value);
      setAnswers(initialAnswers(nextVariant));
      setStep(defaultStep(nextVariant));
    } else {
      setAnswers((current) => ({ ...current, [key]: value }));
    }
    setExample(false);
    setShowIssues(false);
  }

  function reset() {
    setRoute(config.defaultRoute);
    setAnswers(initialAnswers(initialVariant));
    setExample(true);
    setShowIssues(false);
    setStep(defaultStep(initialVariant));
  }

  function calculate() {
    setStep(pathwayVariant.priority && step === 2 ? 2 : defaultStep(pathwayVariant));
    setShowIssues(!example);
  }

  function changeStep(index) {
    setStep(index);
    if (index === 0) document.getElementById(pathwayId)?.querySelector("select")?.focus();
    else if (index !== 2 || !pathwayVariant.priority) document.getElementById(fieldsId)?.querySelector("input, select, button")?.focus();
  }

  const pathwayId = useId();
  const fieldsId = useId();
  const renderField = (field) => <ProvincialField key={field.key} field={field} value={field.key === "route" ? route : answers[field.key] ?? (field.multi ? [] : "")} update={update} />;
  const callout = variant.callout ? { title: variant.callout[0], body: variant.callout[1] } : undefined;
  return (
    <>
      <FormPanel title={config.title} description={variant.description || config.description} onReset={reset} steps={pathwayVariant.steps ?? (pathwayVariant.criteria ? criteriaSteps : pointsSteps)} activeStep={step} onStep={changeStep} actionLabel={variant.criteria ? "Check criteria" : "Calculate score"} onCalculate={calculate} callout={callout} example={example}>
        <div className="ref-fields" id={pathwayId}>{controls.map(renderField)}</div>
        <SectionLabel>{variant.section}</SectionLabel>
        <div className="ref-fields" id={fieldsId}>{fields.map(renderField)}</div>
      </FormPanel>
      <Results variant={variant} answers={answers} example={example} showIssues={showIssues} />
    </>
  );
}
