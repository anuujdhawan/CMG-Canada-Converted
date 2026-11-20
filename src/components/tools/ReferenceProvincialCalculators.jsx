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
  return Object.fromEntries([...(variant.controls || []), ...variant.fields].map((field) => [field.key, field.multi ? [] : ""]));
}

function hasAnswers(answers) {
  return Object.values(answers).some((value) => Array.isArray(value) ? value.length > 0 : value !== "" && value != null);
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

function Results({ variant, answers }) {
  if (!variant) {
    return <ResultPanel>
      <ScoreResult title="Choose a pathway" calculated={false} value={null} max={100} />
      <Callout title="Start with a pathway">Select a stream or scoring grid to see its questions and result.</Callout>
    </ResultPanel>;
  }
  const guide = variant.guide && (
    <Callout variant="book" title={variant.guide[0]}>
      {variant.guide[1]}
      {variant.source && <> <a href={variant.source} target="_blank" rel="noreferrer">Official program guide <ExternalLink aria-hidden size={12} /></a></>}
    </Callout>
  );
  if (variant.criteria) {
    const rows = variant.criteria(answers);
    const showResult = hasAnswers(answers);
    const provided = rows.filter((item) => item.status === "provided").length;
    const pending = rows.filter((item) => item.status === "pending");
    const review = rows.filter((item) => item.status === "review");
    const outstanding = pending.length + review.length;
    const label = !showResult ? undefined : pending.length ? `${pending.length} ${pending.length === 1 ? "answer" : "answers"} needed` : outstanding ? `${outstanding} ${outstanding === 1 ? "item" : "items"} to verify` : "Evidence indicated";
    const detail = !showResult ? undefined : outstanding ? (variant.warningDetail || [...review, ...pending].map((item) => item.short).join(", ")) : "Review the program guide";
    return (
      <ResultPanel>
        <ScoreResult title={variant.resultTitle} calculated={showResult} value={showResult ? provided : null} max={rows.length} sublabel={`/ ${rows.length} provided`} criteria={rows.map(({ short, status }) => ({ label: short, status }))} footerLabel={label} footerValue={detail} warning={showResult && outstanding > 0} />
        <CriteriaSummary rows={rows} note={showResult ? variant.note : "Your criteria status will update automatically as you answer."} />
        {guide}
      </ResultPanel>
    );
  }

  const input = variant.mapAnswers?.(answers) ?? answers;
  const result = variant.score?.(input) ?? evaluatePnpStream(variant.stream, input);
  const requiredFields = [...(variant.controls || []), ...variant.fields]
    .filter((field) => field.required !== false && !field.multi && (!field.visible || field.visible(answers)));
  const missing = Math.max(
    requiredFields.filter((field) => answers[field.key] === "" || answers[field.key] == null).length,
    result.missing?.length ?? 0,
  );
  const rawValue = result.value ?? result.score;
  const hasInput = hasAnswers(answers);
  const value = hasInput && Number.isFinite(rawValue) ? rawValue : null;
  const max = result.max ?? result.maxScore;
  const threshold = result.minimumScore;
  const above = Number.isFinite(threshold) && value >= threshold;
  const rawRows = result.rows ?? variant.rows?.(result.breakdown) ?? result.breakdown?.filter((row) => row.max > 0 || row.points < 0).map((row) => ({ ...row, label: row.section })) ?? [];
  const answeredSections = new Set((variant.stream?.questions ?? [])
    .filter((question) => input[question.key] !== "" && input[question.key] != null)
    .map((question) => question.section || question.key));
  const rows = !hasInput
    ? rawRows.map((row) => ({ ...row, points: null }))
    : rawRows.map((row) => answeredSections.size && row.section
      ? { ...row, points: answeredSections.has(row.section) ? row.points : null }
      : row);
  const footerLabel = !hasInput ? undefined : missing ? "Provisional score" : Number.isFinite(threshold) ? `${Math.abs(value - threshold)} points ${above ? "above" : "below"}` : variant.footerLabel;
  const footerValue = Number.isFinite(threshold) ? (variant.thresholdLabel || `${threshold}-point minimum`) : typeof variant.footerValue === "function" ? variant.footerValue(answers) : variant.footerValue;
  const note = !hasInput
    ? "Your score will update automatically when you answer the required questions."
    : missing
      ? `Live partial score; ${missing} ${missing === 1 ? "answer remains" : "answers remain"}. It updates as you change your selections.`
      : result.failures?.[0] || variant.liveNote || variant.note;
  return (
    <ResultPanel>
      <ScoreResult title={variant.resultTitle} calculated={value != null} value={value} max={max} min={variant.min} threshold={value != null ? threshold : undefined} ticks={variant.ticks} footerLabel={footerLabel} footerValue={value != null ? missing ? `${missing} required ${missing === 1 ? "answer" : "answers"} remain` : footerValue : undefined} warning={value != null && !missing && Number.isFinite(threshold) && !above} />
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
  const defaultStep = (variant) => variant.activeStep ?? (variant.criteria ? 1 : 2);
  const [route, setRoute] = useState("");
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const routeVariant = route ? config.variants[route] : null;
  const pathwayVariant = routeVariant ? (routeVariant.selectPathway?.(routeVariant, answers) ?? routeVariant) : null;
  const variant = step === 2 && pathwayVariant?.priority ? pathwayVariant.priority : pathwayVariant;
  const controls = pathwayVariant ? [...(pathwayVariant.controls || [])] : [];
  const fields = variant?.fields.filter((field) => !field.visible || field.visible(answers)) ?? [];
  if (!pathwayVariant) controls.unshift(config.routeField);
  else if (config.routeLast) controls.push(config.routeField);
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
  }

  function reset() {
    setRoute("");
    setAnswers({});
    setStep(0);
  }

  function changeStep(index) {
    setStep(index);
    if (index === 0) document.getElementById(pathwayId)?.querySelector("select")?.focus();
    else if (index !== 2 || !pathwayVariant.priority) document.getElementById(fieldsId)?.querySelector("input, select, button")?.focus();
  }

  const pathwayId = useId();
  const fieldsId = useId();
  const renderField = (field) => <ProvincialField key={field.key} field={field} value={field.key === "route" ? route : answers[field.key] ?? (field.multi ? [] : "")} update={update} />;
  const callout = variant?.callout ? { title: variant.callout[0], body: variant.callout[1] } : !pathwayVariant ? { title: "Choose a pathway", body: "Select a stream or scoring grid to load the questions that apply to you." } : undefined;
  return (
    <>
      <FormPanel title={config.title} description={variant?.description || config.description} onReset={reset} steps={pathwayVariant?.steps ?? (pathwayVariant ? pathwayVariant.criteria ? criteriaSteps : pointsSteps : criteriaSteps)} activeStep={step} onStep={changeStep} callout={callout}>
        <div className="ref-fields" id={pathwayId}>{controls.map(renderField)}</div>
        {variant && <>
          <SectionLabel>{variant.section}</SectionLabel>
          <div className="ref-fields" id={fieldsId}>{fields.map(renderField)}</div>
        </>}
      </FormPanel>
      <Results variant={variant} answers={answers} />
    </>
  );
}
