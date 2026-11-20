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
  rules: "", community: "", employer: "", teer: "", local: "", term: "", experience: "", language: "", education: "", work: "", funds: "",
  recommendation: "", intent: "", permanentGuide: "", permanentCommunity: "",
};

const fields = [
  { key: "employer", label: "Designated employer offer", options: options([["designated", "Full-time, non-seasonal · designated"], ["other", "Other offer or employer"], ["unknown", "To be confirmed"]]) },
  { key: "teer", label: "Offered NOC and TEER", options: Array.from({ length: 6 }, (_, i) => ({ value: String(i), label: `TEER ${i}` })) },
  { key: "local", label: "Confirmed local priority occupation?", options: yesNo },
  { key: "term", label: "Employment term", options: options([["indeterminate", "Indeterminate"], ["fixed", "Fixed term"], ["unknown", "To be confirmed"]]) },
  { key: "experience", label: "Related work in past 3 years", options: options([["hours", "1,560+ hours in at least 1 year"], ["graduate", "Qualifying local graduate exemption"], ["no", "Below the requirement"], ["unknown", "To be confirmed"]]) },
  { key: "language", label: "Approved language test · lowest band", options: [...Array.from({ length: 7 }, (_, i) => ({ value: String(i + 4), label: `CLB/NCLC ${i + 4} · valid test` })), { value: "none", label: "No valid test or below level 4" }] },
  { key: "education", label: "Education", options: options([["canadian", "Canadian high school diploma or higher"], ["eca", "Foreign equivalent · valid ECA"], ["none", "No qualifying credential"], ["unknown", "To be confirmed"]]) },
  { key: "work", label: "Work status in Canada", options: options([["permit", "Currently working on a valid permit"], ["no", "Not working on a valid permit"], ["unknown", "To be confirmed"]]) },
  { key: "funds", label: "Settlement funds", options: options([["exempt", "Exempt · valid work permit"], ["available", "Evidence available"], ["no", "Evidence unavailable"], ["unknown", "To be confirmed"]]) },
  { key: "recommendation", label: "Community recommendation", options: options([["pending", "Not yet issued"], ["yes", "Valid pilot recommendation issued"], ["no", "Expired or invalid"]]) },
];

function pilotChecks(answers) {
  const teer = Number(answers.teer);
  const minimum = teer <= 1 ? 6 : teer <= 3 ? 5 : 4;
  return [
    { short: "Offer", label: "Job offer from a designated employer", keys: ["employer", "term"], provided: answers.employer === "designated" && answers.term === "indeterminate" },
    { short: "Local NOC", label: "Community priority occupation and recommendation", keys: ["local", "recommendation", "intent"], provided: answers.local === "yes" && answers.recommendation === "yes" && answers.intent === "yes" },
    { short: "Experience", label: "Related work history or graduate exemption", keys: ["experience"], provided: ["hours", "graduate"].includes(answers.experience) },
    { short: "Language", label: "Valid language result at the job’s TEER minimum", keys: ["language", "teer"], provided: Number(answers.language) >= minimum },
    { short: "Education", label: "Canadian credential or valid ECA", keys: ["education"], provided: ["canadian", "eca"].includes(answers.education) },
    { short: "Funds", label: "Settlement funds or applicable exemption", keys: ["funds", "work"], provided: answers.funds === "available" || (answers.funds === "exempt" && answers.work === "permit") },
  ];
}

export default function ReferenceRcipCalculator() {
  const [answers, setAnswers] = useState(initial);
  const [step, setStep] = useState(0);
  const permanent = answers.rules === "permanent";
  const set = (key, value) => {
    setAnswers((previous) => {
      const next = key === "rules" ? { ...initial, rules: value } : { ...previous, [key]: value };
      if (key === "community") Object.assign(next, { local: "", recommendation: "", permanentCommunity: "" });
      if (key === "teer") next.local = previous.local;
      return next;
    });
    if (key === "rules") setStep(value ? 1 : 0);
    if (key === "community") setStep(value ? 2 : 1);
  };
  const reset = () => {
    setAnswers(initial);
    setStep(0);
  };
  const checks = permanent ? [
    { short: "IRCC", label: "Current permanent program guide reviewed", key: "permanentGuide", provided: answers.permanentGuide === "yes" },
    { short: "Community", label: "Community guidance reviewed", key: "permanentCommunity", provided: answers.permanentCommunity === "yes" },
  ] : pilotChecks(answers);
  const result = checks.map((item) => {
    const keys = item.keys ?? [item.key];
    const answered = keys.every((key) => answers[key] !== "" && answers[key] != null);
    return { ...item, status: !answered ? "pending" : item.provided ? "provided" : "review" };
  });
  const provided = result.filter(({ status }) => status === "provided").length;
  const remaining = result.filter(({ status }) => status !== "provided").length;
  const hasCriteriaInput = permanent
    ? answers.permanentGuide !== "" || answers.permanentCommunity !== ""
    : fields.some(({ key }) => answers[key] !== "") || answers.intent !== "";
  const stepChange = (index) => {
    if (index === 0) setStep(0);
    else if (index === 1 && answers.rules) setStep(1);
    else if (index === 2 && answers.rules && answers.community) setStep(2);
  };
  const selection = (key, label, choices, extra = {}) => (
    <Field key={key} id={`rcip-${key}`} label={label} value={answers[key]} onChange={(value) => set(key, value)} options={choices} {...extra} />
  );

  const activeStep = step === 2 && answers.rules && answers.community ? 2 : step === 1 && answers.rules ? 1 : 0;
  const showCriteria = activeStep === 2;
  return (
    <>
      <FormPanel
        title="Rural immigration pathway" description="Choose the program version and community to review applicable requirements."
        onReset={reset} steps={["Program", "Community", "Criteria"]} activeStep={activeStep} onStep={stepChange}
        callout={{ title: "Pilot transition", body: transition }}
      >
        <div className="ref-fields" style={{ "--ref-field-height": "42px" }}>
          {selection("rules", "Ruleset", options([["pilot", "RCIP pilot · 2026 recommendation"], ["permanent", "Permanent program · 2027"]]), { highlight: true })}
          {answers.rules && selection("community", "Community", communities.map((label) => ({ value: label, label })))}
        </div>
        {showCriteria && <>
          <SectionLabel>{permanent ? "Current program and community guidance" : "Federal and community checks"}</SectionLabel>
          <div className="ref-fields" style={{ "--ref-field-height": "42px" }}>
            {permanent ? <>
              {selection("permanentGuide", "Checked current IRCC requirements?", yesNo)}
              {selection("permanentCommunity", "Checked local community requirements?", yesNo)}
            </> : <>
              {fields.map(({ key, label, options: choices }) => selection(key, label, choices, { warning: (key === "teer" && answers.local === "no") || (key === "recommendation" && answers.recommendation === "no") }))}
              <Field id="rcip-intent-yes" label="Intend to live in the community">
                <div className="ref-choice-group" role="group" aria-label="Intend to live in the community">
                  {["yes", "no"].map((value) => (
                    <button key={value} id={`rcip-intent-${value}`} type="button" className="ref-choice" aria-pressed={answers.intent === value} onClick={() => set("intent", value)}>
                      {answers.intent === value && <Check aria-hidden />}{value === "yes" ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </Field>
            </>}
          </div>
        </>}
      </FormPanel>
      <ResultPanel>
        <ScoreResult
          title={permanent ? "Permanent program guidance" : "RCIP community criteria"}
          calculated={hasCriteriaInput} value={hasCriteriaInput ? provided : null} max={result.length} sublabel={`/ ${result.length} ${permanent ? "reviewed" : "provided"}`}
          criteria={result.map(({ short, status }) => ({ label: short, status }))} warning={hasCriteriaInput && remaining > 0}
          footerLabel={hasCriteriaInput ? `${remaining} ${remaining === 1 ? "item" : "items"} to verify` : undefined}
          footerValue={hasCriteriaInput ? permanent ? "Official guidance" : result.find(({ status }) => status === "review")?.label || `${result.filter(({ status }) => status === "pending").length} answers needed` : undefined}
        />
        <CriteriaSummary rows={result} note={permanent
          ? "These answers record whether you reviewed the guidance. Use the current IRCC and community rules to check eligibility."
          : answers.community ? <>Communities set their own intake and selection rules. Confirm the local list of eligible occupations and recommendation process for {answers.community.split(",")[0]}.</> : "Choose a program version and community to review the applicable criteria."}
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
