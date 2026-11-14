"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Languages, RefreshCw } from "lucide-react";
import {
  ToolCard,
  ToolHeader,
  ToolField,
  ToolInput,
  ToolSelect,
  ToolResetButton,
} from "./ui/ToolPrimitives";
import {
  convertLanguageScore,
  getRawInput,
  getTestLanguage,
  LANGUAGE_ABILITIES,
  LANGUAGE_TESTS,
} from "@/lib/languageConversion";

const EMPTY_SCORES = { speaking: "", listening: "", reading: "", writing: "" };

export default function ClbConverter() {
  const [test, setTest] = useState("celpip");
  const [scores, setScores] = useState(EMPTY_SCORES);
  const language = getTestLanguage(test);
  const converted = useMemo(() => Object.fromEntries(LANGUAGE_ABILITIES.map(({ key }) => [
    key,
    convertLanguageScore(test, key, scores[key]),
  ])), [test, scores]);
  const invalid = LANGUAGE_ABILITIES.filter(({ key }) => scores[key] !== "" && converted[key] === null);
  const complete = LANGUAGE_ABILITIES.every(({ key }) => converted[key] !== null);
  const lowest = complete ? Math.min(...Object.values(converted)) : null;
  const reset = () => setScores(EMPTY_SCORES);

  return (
    <ToolCard aria-labelledby="clb-converter-title">
      <ToolHeader
        icon={Languages}
        kicker="Free · Instant · IRCC test tables"
        title="CLB / NCLC language score converter"
        titleId="clb-converter-title"
        subtitle="Convert each approved Express Entry test result separately. Your overall level is the lowest of the four abilities."
        action={<ToolResetButton onClick={reset}><RefreshCw className="h-3.5 w-3.5" /> Clear scores</ToolResetButton>}
      />
      <div className="tool-card__body grid gap-6 p-[1.35rem_1.5rem_1.5rem] sm:p-[1.6rem_1.75rem_1.75rem]">
        <ToolField label="Approved language test" htmlFor="clb-test" hint="IELTS must be General Training; PTE must be Core; CELPIP must be General.">
          <ToolSelect id="clb-test" value={test} onChange={(event) => { setTest(event.target.value); setScores(EMPTY_SCORES); }}>
            {LANGUAGE_TESTS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </ToolSelect>
        </ToolField>
        <div className="grid gap-4 sm:grid-cols-2">
          {LANGUAGE_ABILITIES.map(({ key, label }) => {
            const input = getRawInput(test, key);
            return (
              <ToolField key={key} label={label + " score"} htmlFor={"clb-" + key}>
                <ToolInput
                  id={"clb-" + key}
                  type="number"
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  inputMode="decimal"
                  placeholder={input.placeholder}
                  aria-invalid={scores[key] !== "" && converted[key] === null}
                  value={scores[key]}
                  onChange={(event) => setScores((current) => ({ ...current, [key]: event.target.value }))}
                />
              </ToolField>
            );
          })}
        </div>
        <div className="rounded-[1rem] border border-[var(--template-border)] bg-[var(--template-surface-alt)] p-4 sm:p-5" aria-live="polite">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="m-0 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[var(--template-primary)]">{language} result</p>
              <h3 className="mb-0 mt-1 text-[1.15rem] font-extrabold text-[var(--template-ink)]">{invalid.length ? "Check the score range" : complete ? language + " " + (lowest || "< 4") : "Enter all four results"}</h3>
              <p className="mb-0 mt-1 max-w-xl text-[0.72rem] leading-[1.5] text-[var(--template-muted)]">{invalid.length ? "One or more values are outside the accepted range or score increments for this test." : complete ? "The overall level is your lowest ability. Immigration programs can set minimums for each ability." : "Each ability can map to a different level. Fill in all four test scores to calculate the overall level."}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {LANGUAGE_ABILITIES.map(({ key, label }) => (
                <div key={key} className="min-w-[5rem] rounded-[0.8rem] border border-[var(--template-border)] bg-[var(--template-surface)] px-3 py-2 text-center">
                  <span className="block text-[0.62rem] font-bold text-[var(--template-muted)]">{label}</span>
                  <strong className="mt-1 block text-[0.88rem] text-[var(--template-ink)]">{converted[key] === null ? "—" : (converted[key] || "< 4")}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
        {test === "tef" && <p className="m-0 rounded-[0.8rem] border border-amber-300/30 bg-amber-300/10 p-3 text-[0.7rem] leading-[1.5] text-[var(--template-muted)]">For TEF Canada, use the “Équivalence ancien score” (previous score equivalency) for each ability, not the score out of 699. If your test was taken from December 11, 2023 to May 6, 2024, check any revised NCLC result issued by the test provider.</p>}
        <a className="inline-flex w-fit items-center gap-2 text-[0.72rem] font-extrabold text-[var(--template-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html" target="_blank" rel="noreferrer">
          Check IRCC’s current equivalency tables <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <p className="m-0 text-[0.68rem] leading-[1.5] text-[var(--template-muted)]">Use your exact test type, test date, and ability scores. This converter does not assess score validity dates or program eligibility.</p>
      </div>
    </ToolCard>
  );
}
