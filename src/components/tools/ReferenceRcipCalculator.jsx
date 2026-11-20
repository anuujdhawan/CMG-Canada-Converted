"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Callout, CriteriaSummary, Field, FormPanel, ResultPanel, ScoreResult, SectionLabel } from "./ReferenceCalculatorUI";

const base = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/";
export const pilotGuide = `${base}rural-immigration.html`;
const permanentGuide = `${base}rural-immigration-program.html`;
const communityGuide = `${base}rural-immigration/job-offer.html`;
const communities = [
  "Steinbach, Manitoba", "Altona/Rhineland, Manitoba", "Brandon, Manitoba", "Pictou County, Nova Scotia",
  "North Bay, Ontario", "Sudbury, Ontario", "Timmins, Ontario", "Sault Ste. Marie, Ontario", "Thunder Bay, Ontario",
  "Moose Jaw, Saskatchewan", "Claresholm, Alberta", "West Kootenay, British Columbia",
  "North Okanagan Shuswap, British Columbia", "Peace Liard, British Columbia",
];
const options = (pairs) => pairs.map(([value, label]) => ({ value, label }));
const transition = "The pilot closes 1 Jan 2027. Use the pilot route for recommendations issued by 31 Dec 2026 and apply before expiry. Use the permanent program rules for later recommendations.";
const yesNo = options([["yes", "Yes"], ["no", "No"], ["unknown", "To be confirmed"]]);
const initial = {
  rules: "pilot", community: communities[0], employer: "designated", teer: "2", local: "unknown",
  term: "indeterminate", experience: "hours", language: "5", education: "canadian", work: "permit", funds: "exempt",
  recommendation: "pending", intent: "yes", permanentGuide: "", permanentCommunity: "",
};

const fields = [
  { key: "employer", label: "Designated employer offer", options: options([["designated", "Full-time, non-seasonal · designated"], ["other", "Other offer or employer"], ["unknown", "To be confirmed"]]) },
  { key: "teer", label: "Offered NOC and TEER", options: Array.from({ length: 6 }, (_, i) => ({ value: String(i), label: `TEER ${i}` })) },
  { key: "term", label: "Employment term", options: options([["indeterminate", "Indeterminate"], ["fixed", "Fixed term"], ["unknown", "To be confirmed"]]) },
  { key: "experience", label: "Related work in past 3 years", options: options([["hours", "1,560+ hours in at least 1 year"], ["graduate", "Qualifying local graduate exemption"], ["no", "Below the requirement"], ["unknown", "To be confirmed"]]) },
  { key: "language", label: "Approved language test · lowest band", options: [...Array.from({ length: 7 }, (_, i) => ({ value: String(i + 4), label: `CLB/NCLC ${i + 4} · valid test` })), { value: "none", label: "No valid test or below level 4" }] },
  { key: "education", label: "Education", options: options([["canadian", "Canadian high school diploma or higher"], ["eca", "Foreign equivalent · valid ECA"], ["none", "No qualifying credential"], ["unknown", "To be confirmed"]]) },
  { key: "work", label: "Work status in Canada", options: options([["permit", "Currently working on a valid permit"], ["no", "Not working on a valid permit"], ["unknown", "To be confirmed"]]) },
  { key: "funds", label: "Settlement funds", options: options([["exempt", "Exempt in this example · valid work permit"], ["available", "Evidence available"], ["no", "Evidence unavailable"], ["unknown", "To be confirmed"]]) },
  { key: "recommendation", label: "Community recommendation", options: options([["pending", "Not yet issued"], ["yes", "Valid pilot recommendation issued"], ["no", "Expired or invalid"]]) },
];

function pilotChecks(answers) {
  const minimum = Number(answers.teer) <= 1 ? 6 : Number(answers.teer) <= 3 ? 5 : 4;
  return [
    ["Offer", "Job offer from a designated employer", answers.employer === "designated" && answers.term === "indeterminate"],
    ["Local NOC", "Community priority occupation and recommendation", answers.local === "yes" && answers.recommendation === "yes" && answers.intent === "yes"],
    ["Experience", "Related work history or graduate exemption", ["hours", "graduate"].includes(answers.experience)],
    ["Language", "Valid language result at the job’s TEER minimum", Number(answers.language) >= minimum],
    ["Education", "Canadian credential or valid ECA", ["canadian", "eca"].includes(answers.education)],
    ["Funds", "Settlement funds or applicable exemption", answers.funds === "available" || (answers.funds === "exempt" && answers.work === "permit")],
  ];
}

export default function ReferenceRcipCalculator() {
  const [answers, setAnswers] = useState(initial);
  const [example, setExample] = useState(true);
  const [step, setStep] = useState(2);
  const permanent = answers.rules === "permanent";
  const set = (key, value) => {
    setAnswers((previous) => {
      const next = { ...previous, [key]: value };
      if (key === "community") Object.assign(next, { local: "unknown", recommendation: "pending", permanentCommunity: "" });
      if (key === "teer") next.local = "unknown";
      return next;
    });
    setExample(false);
  };
  const reset = () => {
    setAnswers(initial);
    setExample(true);
    setStep(2);
  };
  const checks = permanent ? [
    ["IRCC", "Current permanent program guide reviewed", answers.permanentGuide === "yes"],
    ["Community", "Community guidance reviewed", answers.permanentCommunity === "yes"],
  ] : pilotChecks(answers);
  const result = checks.map(([short, label, provided]) => ({
    short, label, status: provided ? "provided" : permanent && !answers[short === "IRCC" ? "permanentGuide" : "permanentCommunity"] ? "pending" : "review",
  }));
  const provided = result.filter(({ status }) => status === "provided").length;
  const remaining = result.length - provided;
  const selection = (key, label, choices, extra = {}) => (
    <Field key={key} id={`rcip-${key}`} label={label} value={answers[key]} onChange={(value) => set(key, value)} options={choices} {...extra} />
  );

  return (
    <>
      <FormPanel
        title="Rural immigration pathway" description="The example shows the 2026 pilot. Select the official program version before checking community rules."
        onReset={reset} steps={["Program", "Community", "Criteria"]} activeStep={step} onStep={setStep}
        callout={{ title: "Pilot transition", body: transition }} actionLabel={permanent ? "Review guidance" : "Check criteria"}
        onCalculate={() => setStep(2)} example={example}
      >
        <div className="ref-fields" style={{ "--ref-field-height": "42px" }}>
          {selection("rules", "Ruleset", options([["pilot", "RCIP pilot · 2026 recommendation"], ["permanent", "Permanent program · 2027"]]), { highlight: true })}
          {selection("community", "Community", communities.map((label) => ({ value: label, label })))}
        </div>
        <SectionLabel>{permanent ? "Current program and community guidance" : step === 1 ? "Local occupation and recommendation" : "Federal and community checks"}</SectionLabel>
        <div className="ref-fields" style={{ "--ref-field-height": "42px" }}>
          {permanent ? (
            <>
              {selection("permanentGuide", "Checked current IRCC requirements?", [{ value: "", label: "Select an answer" }, ...yesNo])}
              {selection("permanentCommunity", "Checked local community requirements?", [{ value: "", label: "Select an answer" }, ...yesNo])}
            </>
          ) : step === 1 ? (
            <>
              {selection("teer", "Offered NOC and TEER", fields[1].options)}
              {selection("local", "Confirmed local priority occupation?", yesNo)}
              {selection("recommendation", "Community recommendation", fields.at(-1).options)}
            </>
          ) : (
            <>
              {fields.map(({ key, label, options: choices }) => {
                const warning = (key === "teer" && answers.local !== "yes") || (key === "recommendation" && answers.recommendation !== "yes");
                const displayed = key === "teer" && warning
                  ? choices.map((item) => ({ ...item, label: `${item.label} · local priority to confirm` }))
                  : choices;
                return selection(key, label, displayed, { warning });
              })}
              <Field id="rcip-intent-yes" label="Intend to live in the community">
                <div className="ref-choice-group" role="group" aria-label="Intend to live in the community">
                  {["yes", "no"].map((value) => (
                    <button key={value} id={`rcip-intent-${value}`} type="button" className="ref-choice" aria-pressed={answers.intent === value} onClick={() => set("intent", value)}>
                      {answers.intent === value && <Check aria-hidden />}{value === "yes" ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </Field>
            </>
          )}
        </div>
      </FormPanel>
      <ResultPanel>
        <ScoreResult
          title={permanent ? "Permanent program guidance" : "RCIP community criteria"}
          value={provided} max={result.length} sublabel={`/ ${result.length} ${permanent ? "reviewed" : "provided"}`}
          criteria={result.map(({ short, status }) => ({ label: short, status }))} example={example} warning={remaining > 0}
          footerLabel={remaining ? `${remaining} ${remaining === 1 ? "item" : "items"} to verify` : "Checks provided"}
          footerValue={permanent ? "Official guidance" : remaining === 1 ? result.find(({ status }) => status === "review")?.label : "Community and federal checks"}
        />
        <CriteriaSummary rows={result} note={permanent
          ? "These answers confirm that you reviewed the guidance. Use the current IRCC and community rules to check your eligibility."
          : <>Communities set their own intake and selection rules. Confirm the local list of eligible occupations and recommendation process for {answers.community.split(",")[0]}.</>}
        />
        <Callout title={permanent ? "Official guidance" : "Federal checks"} variant="book">
          {permanent ? (
            <><a href={permanentGuide} target="_blank" rel="noreferrer">Permanent program guidance</a>{" · "}<a href={communityGuide} target="_blank" rel="noreferrer">Find community contacts</a></>
          ) : "Use TEER-specific language minimums, the eligible local graduate exemption, and the current funds table or work permit exemption."}
        </Callout>
      </ResultPanel>
    </>
  );
}
