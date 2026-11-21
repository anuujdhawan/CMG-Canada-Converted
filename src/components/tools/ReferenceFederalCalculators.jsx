"use client";

import { useId, useState } from "react";
import { AudioLines, BookOpen, Check, ChevronDown, Headphones, Mic, Pencil } from "lucide-react";
import {
  calculateCrs,
  EDUCATION as CRS_EDUCATION,
  EXPERIENCE as CRS_EXPERIENCE,
  LANGUAGE_LEVELS as CRS_LANGUAGE_LEVELS,
  SPOUSE_EDUCATION,
} from "./CrsCalculator";
import {
  Callout,
  CriteriaSummary,
  Field,
  FormPanel,
  PointsBreakdown,
  ResultNote,
  ResultPanel,
  ScoreResult,
  SectionLabel,
} from "./ReferenceCalculatorUI";
import styles from "./ReferenceFederalCalculators.module.css";

const abilities = [
  ["listening", "Listening", Headphones],
  ["reading", "Reading", BookOpen],
  ["writing", "Writing", Pencil],
  ["speaking", "Speaking", Mic],
];

function allBands(value = "") {
  return Object.fromEntries(abilities.map(([key]) => [key, value]));
}

function options(list) {
  return list.map(([value, label]) => ({ value: String(value), label }));
}

const yesNo = options([["yes", "Yes"], ["no", "No"]]);

function SelectField({ options: choices, placeholder = "Choose an answer", ...props }) {
  const list = props.value === "" || props.value == null
    ? [{ value: "", label: placeholder }, ...choices]
    : choices;
  return <Field {...props} options={list} />;
}

function ChoiceField({ label, value, onChange }) {
  const id = useId();
  return (
    <div className="ref-field">
      <span className={styles.choiceLabel} id={id}>{label}</span>
      <div className="ref-choice-group" role="group" aria-labelledby={id}>
        {yesNo.map((choice) => (
          <button className="ref-choice" type="button" key={choice.value} aria-pressed={value === choice.value} onClick={() => onChange(choice.value)}>
            {value === choice.value && <Check aria-hidden />}
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ExpandedField({ label, valueLabel, highlight, children }) {
  const id = useId();
  const menuId = useId();
  const [open, setOpen] = useState(false);

  return (
    <Field label={label} id={id}>
      <div
        className={styles.disclosure}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            document.getElementById(id)?.focus();
          }
        }}
      >
        <div className="ref-control" data-highlight={highlight || undefined}>
          <button id={id} type="button" className={styles.trigger} aria-expanded={open} aria-controls={menuId} onClick={() => setOpen(!open)}>
            <span>{valueLabel}</span><ChevronDown className="ref-select-chevron" aria-hidden />
          </button>
        </div>
        {open && <div className={styles.editor} id={menuId}>{children}</div>}
      </div>
    </Field>
  );
}

const languageChoices = options([["english", "English"], ["french", "French"]]);
const benchmark = (language) => language === "french" ? "NCLC" : language === "english" ? "CLB" : "CLB/NCLC";
const translatedLanguage = (language) => language === "french" ? "French" : language === "english" ? "English" : "official-language";

function BandField({
  label, scores, onChange, levels = CRS_LANGUAGE_LEVELS, language = "", onLanguageChange, enabled = true, onEnabledChange, highlight,
}) {
  const id = useId();
  const summary = abilities.map(([key]) => scores[key] || "–").join(" / ");
  const levelLabel = (level) => levels.find(({ value }) => value === level)?.label.replaceAll("CLB/NCLC", benchmark(language));
  let valueLabel = "Enter the four ability levels";
  if (enabled == null) valueLabel = "Choose whether you have a test result";
  else if (!enabled) valueLabel = `No ${translatedLanguage(language)} test result`;
  else if (onLanguageChange && !language) valueLabel = "Choose your first language";
  else if (abilities.some(([key]) => scores[key] !== "")) valueLabel = `${translatedLanguage(language)} ${benchmark(language)} ${summary.replaceAll("9plus", "9+").replaceAll("below7", "<7")}`;

  return (
    <ExpandedField label={label} valueLabel={valueLabel} highlight={highlight}>
      {onEnabledChange && <ChoiceField label={`Use ${language ? `a ${translatedLanguage(language)} test result` : "a language test result"}`} value={enabled == null ? "" : enabled ? "yes" : "no"} onChange={(next) => onEnabledChange(next === "yes")} />}
      {onLanguageChange && enabled && <SelectField label="Test language" id={`${id}-language`} options={languageChoices} value={language} onChange={onLanguageChange} />}
      {enabled && (!onLanguageChange || language) && (
        <div className="ref-fields">
          {abilities.map(([key, name]) => (
            <SelectField key={key} id={`${id}-${key}`} label={name} placeholder="Select score" value={scores[key]} onChange={(value) => onChange({ ...scores, [key]: value })} options={levels.map(({ value }) => ({ value, label: levelLabel(value) }))} />
          ))}
        </div>
      )}
    </ExpandedField>
  );
}

function useFederalProfile(emptyValues) {
  const [values, setValues] = useState(emptyValues);
  function change(key) {
    return (value) => {
      setValues((previous) => ({ ...previous, [key]: value }));
    };
  }
  function reset() {
    setValues(emptyValues);
  }
  return { values, change, reset };
}

const testData = {
  ielts: {
    name: "IELTS General",
    scoreName: "IELTS",
    heading: "IELTS General Training band scores",
    language: "CLB",
    max: 9,
    step: .5,
    thresholds: {
      listening: [4.5, 5, 5.5, 6, 7.5, 8, 8.5],
      reading: [3.5, 4, 5, 6, 6.5, 7, 8],
      writing: [4, 5, 5.5, 6, 6.5, 7, 7.5],
      speaking: [4, 5, 5.5, 6, 6.5, 7, 7.5],
    },
  },
  celpip: {
    name: "CELPIP-General",
    scoreName: "CELPIP",
    language: "CLB",
    max: 12,
    thresholds: Object.fromEntries(abilities.map(([key]) => [key, [4, 5, 6, 7, 8, 9, 10]])),
  },
  pte: {
    name: "PTE Core",
    scoreName: "PTE",
    language: "CLB",
    min: 10,
    max: 90,
    thresholds: {
      listening: [28, 39, 50, 60, 71, 82, 89],
      reading: [33, 42, 51, 60, 69, 78, 88],
      writing: [41, 51, 60, 69, 79, 88, 90],
      speaking: [42, 51, 59, 68, 76, 84, 89],
    },
  },
  tef: {
    name: "TEF Canada",
    scoreName: "TEF",
    language: "NCLC",
    max: { listening: 360, reading: 300, writing: 450, speaking: 450 },
    thresholds: {
      listening: [145, 181, 217, 249, 280, 298, 316],
      reading: [121, 151, 181, 207, 233, 248, 263],
      writing: [181, 226, 271, 310, 349, 371, 393],
      speaking: [181, 226, 271, 310, 349, 371, 393],
    },
  },
  tcf: {
    name: "TCF Canada",
    scoreName: "TCF",
    language: "NCLC",
    max: { listening: 699, reading: 699, writing: 20, speaking: 20 },
    thresholds: {
      listening: [331, 369, 398, 458, 503, 523, 549],
      reading: [342, 375, 406, 453, 499, 524, 549],
      writing: [4, 6, 7, 10, 12, 14, 16],
      speaking: [4, 6, 7, 10, 12, 14, 16],
    },
  },
};

const scoreMax = (test, key) => typeof test.max === "number" ? test.max : test.max[key];

function convertScore(test, ability, score) {
  if (score === "" || !Number.isFinite(Number(score))) return null;
  const numeric = Number(score);
  const step = test.step ?? 1;
  if (numeric < 0 || numeric > scoreMax(test, ability) || numeric % step !== 0) return null;
  const index = test.thresholds[ability].findLastIndex((minimum) => numeric >= minimum);
  return index < 0 ? 0 : 4 + index;
}

function formatRaw(test, value) {
  return value === "" ? "" : Number(value).toFixed(test.step === .5 ? 1 : 0);
}

function rawScoreOptions(test, ability) {
  const min = test.min ?? 0;
  const max = scoreMax(test, ability);
  const step = test.step ?? 1;
  const count = Math.floor((max - min) / step + 1e-9);
  return Array.from({ length: count + 1 }, (_, index) => {
    const value = Number((min + index * step).toFixed(step === .5 ? 1 : 0));
    const converted = convertScore(test, ability, value);
    const levelLabel = converted === 0 ? `Below ${test.language} 4` : `${test.language} ${converted}${converted === 10 ? "+" : ""}`;
    return { value: String(value), label: `${formatRaw(test, value)} · ${levelLabel}` };
  });
}

function ClbCalculator() {
  const [testKey, setTestKey] = useState("");
  const { values: scores, change, reset } = useFederalProfile(allBands());
  const test = testData[testKey] ?? null;
  const max = 10;
  const levels = test ? abilities.map(([key, label, Icon]) => ({ key, label, Icon, level: convertScore(test, key, scores[key]) })) : [];
  const enteredLevels = levels.filter(({ level }) => level != null);
  const allEntered = Boolean(test) && enteredLevels.length === abilities.length;
  const minimum = enteredLevels.length ? Math.min(...enteredLevels.map(({ level }) => level)) : null;
  const lowest = minimum === null ? [] : levels.filter(({ level }) => level === minimum);
  const levelName = (level) => level == null ? "—" : level === 0 ? `Below ${test.language} 4` : `${test.language} ${level}${level === max ? "+" : ""}`;
  const callout = !test ? {
    title: "Choose an approved test",
    body: "Select the test shown on your result report. The score options will match that test’s valid score range.",
  } : {
    title: testKey === "ielts" ? "Use your General Training results" : `Use your ${test.name} results`,
    body: <>{testKey === "tef" ? "Choose the Équivalence ancien score values from your report." : testKey === "ielts" ? "Choose all four bands from the same IELTS General Training test." : "Choose all four scores from the same report."}<br />Express Entry requires test results less than two years old.</>,
  };
  const footerValue = lowest.length === 1
    ? `${lowest[0].label} · ${test.scoreName} ${formatRaw(test, scores[lowest[0].key])}${allEntered ? "" : ` · ${enteredLevels.length}/4 entered`}`
    : lowest.length > 1 ? `${lowest.map(({ label }) => label).join(", ")}${allEntered ? "" : ` · ${enteredLevels.length}/4 entered`}` : undefined;
  const resetCalculator = () => { setTestKey(""); reset(); };

  return (
    <>
      <FormPanel
        title="Language test scores"
        description="Choose a test, select the four scores shown on one report and convert them to CLB or NCLC."
        icon={AudioLines}
        onReset={resetCalculator}
        callout={callout}
      >
        <div className="ref-test-picker">
          <span id="language-test-type">Test type</span>
          <div className="ref-test-tabs" role="group" aria-labelledby="language-test-type">
            {Object.entries(testData).map(([key, item]) => (
              <button key={key} type="button" aria-pressed={key === testKey} onClick={() => {
                if (key === testKey) return;
                setTestKey(key);
                reset();
              }}>{item.name}</button>
            ))}
          </div>
        </div>
        {test ? <>
          <SectionLabel>{test.heading ?? `${test.name} scores`}</SectionLabel>
          <div className={`ref-fields ${styles.languageInputs}`}>
            {levels.map(({ key, label, level }) => (
              <Field
                key={key}
                label={label}
                id={`language-${key}`}
                placeholder="Select score"
                value={scores[key]}
                onChange={change(key)}
                options={rawScoreOptions(test, key)}
                suffix={`/ ${formatRaw(test, scoreMax(test, key))}`}
                highlight={minimum !== null && level === minimum && lowest.length < 4}
              />
            ))}
          </div>
        </> : <p className="ref-empty-prompt">Choose one of the approved tests above to load its score choices.</p>}
      </FormPanel>
      <ResultPanel>
        <ScoreResult
          title="Language benchmark"
          calculated={minimum !== null}
          value={minimum}
          max={max}
          min={4}
          ticks={test?.thresholds.listening.map((_, i) => i === max - 4 ? { value: max, label: `${max}+` } : i + 4)}
          centerLabel={minimum === null ? "—" : minimum === 0 ? "< 4" : minimum === max ? `${max}+` : minimum}
          unitLabel={test?.language}
          sublabel={test ? allEntered ? "Lowest converted level" : enteredLevels.length ? `Lowest so far · ${enteredLevels.length}/4 scores` : "Enter four test scores" : "Choose a test and scores"}
          footerLabel={minimum !== null ? allEntered ? "Lowest ability" : "Lowest ability so far" : undefined}
          footerValue={footerValue}
        />
        <div className="ref-result-heading"><h3>Ability breakdown</h3><span>{test ? `${test.scoreName} → ${test.language}` : "Four test scores"}</span></div>
        {test ? <div className="ref-ability-grid">
          {levels.map(({ key, label, Icon, level: rawLevel }) => {
            const isLowest = minimum !== null && rawLevel === minimum && lowest.length < 4;
            return (
              <div key={key} className="ref-ability-card" data-lowest={isLowest || undefined}>
                <div className="ref-ability-card-row"><span><Icon aria-hidden />{label}</span><strong>{levelName(rawLevel)}</strong></div>
                <div className="ref-ability-card-row ref-ability-card-meta">
                  <span>{scores[key] === "" ? "Enter a score" : `${test.scoreName} ${formatRaw(test, scores[key])}`}</span>
                  {isLowest && <strong>Lowest ability</strong>}
                </div>
                <span className="ref-progress" aria-hidden><i style={{ width: `${rawLevel !== null ? rawLevel / max * 100 : 0}%` }} /></span>
              </div>
            );
          })}
        </div> : <ResultNote>Choose a test and enter all four scores to see the converted language levels.</ResultNote>}
        {test && <ResultNote>{test.scoreName} table: below {test.language} 4 or {test.language} 4–{max}+. French tests return NCLC. {allEntered ? "" : "This estimate updates as you select each score."}</ResultNote>}
      </ResultPanel>
    </>
  );
}

const crsEmpty = {
  marital: "",
  age: "",
  education: "",
  primaryLanguage: "",
  firstLanguage: allBands(),
  hasSecondLanguage: null,
  secondLanguage: allBands(),
  canadianExperience: "",
  foreignExperience: "",
  spouseEducation: "",
  spouseLanguage: allBands(),
  spouseExperience: "",
  lmiWorkWage: "",
  lmiJobWage: "",
  certificateOfQualification: "",
  canadianEducation: "",
  sibling: "",
  provincialNomination: "",
};

const crsMarital = options([
  ["single", "Single"],
  ["accompanying", "With accompanying spouse or partner"],
  ["other", "Spouse is not accompanying or is a Canadian citizen / permanent resident"],
]);
const crsEducation = CRS_EDUCATION.map((item) => ({
  ...item, label: item.value === "bachelor" ? "Bachelor’s degree or 3+ year credential" : item.label,
}));
const noneExperience = CRS_EXPERIENCE.map((item) => item.value === "0" ? { ...item, label: "None" } : item);
const canadianStudy = options([["none", "None"], ["1", "Credential of 1 or 2 years"], ["3", "Credential of 3 or more years"]]);
const foreignExperience = options([[0, "None"], [1, "1–2 years"], [3, "3 years or more"]]);
const lmiWork = options([[0, "None"], [20, "Eligible 1.3× occupation"], [40, "Eligible 1.5× occupation"], [70, "Eligible 2× occupation"]]);
const lmiJob = options([[0, "None"], [50, "Eligible 1.3× job offer"], [70, "Eligible 1.5× job offer"], [100, "Eligible 2× job offer"]]);
const nomination = options([["no", "None"], ["yes", "Yes, nomination accepted"]]);
const crsAgeOptions = options([
  [17, "17 or younger"], [18, "18 years"], [19, "19 years"], [25, "20–29 years"],
  ...Array.from({ length: 15 }, (_, index) => [String(index + 30), `${index + 30} years`]),
  [45, "45 years or older"],
]);

function hasAnswer(value) {
  return Array.isArray(value) ? value.length > 0 : value !== "" && value != null;
}

function hasCrsInput(form) {
  return Object.values(form).some((value) => Array.isArray(value)
    ? value.length > 0
    : value && typeof value === "object"
      ? Object.values(value).some(hasAnswer)
      : hasAnswer(value));
}

function CrsReferenceCalculator() {
  const { values: form, change, reset } = useFederalProfile(crsEmpty);
  const [step, setStep] = useState(0);
  const hasSpouse = form.marital === "accompanying";
  const second = !form.primaryLanguage ? "" : form.primaryLanguage === "english" ? "french" : "english";
  const scorerInput = {
    ...form,
    hasSpouse,
    certificateOfQualification: form.certificateOfQualification === "yes",
    sibling: form.sibling === "yes",
    provincialNomination: form.provincialNomination === "yes",
  };
  const workResult = calculateCrs({ ...scorerInput, lmiType: "work" });
  const jobResult = calculateCrs({ ...scorerInput, lmiType: "job" });
  const result = workResult.lmi >= jobResult.lmi ? workResult : jobResult;
  const core = result.score - result.transferability.total - result.additional - result.rows.find(({ label }) => label === "Spouse factors").points;
  const show = (index) => step === index || step === 3;
  const spouseRow = result.rows.find(({ label }) => label === "Spouse factors");
  const hasInput = hasCrsInput(form);
  const selectionsComplete = form.marital !== "" && form.primaryLanguage !== ""
    && form.hasSecondLanguage !== null
    && form.canadianEducation !== "" && form.sibling !== "" && form.provincialNomination !== ""
    && form.certificateOfQualification !== "" && form.lmiWorkWage !== "" && form.lmiJobWage !== "";
  const completeResult = result.complete && selectionsComplete;
  const scoreRow = (label, points, max) => ({ label, points: hasInput ? points : null, max });

  return (
    <>
      <FormPanel
        title="Express Entry scoring factors"
        description={<span className={styles.crsDescription}>Enter your profile details and supporting factors. Language bands appear in listening, reading, writing, speaking order.</span>}
        onReset={() => { reset(); setStep(0); }}
        steps={["Profile", "Language", "Work & offer", "Review"]}
        activeStep={step}
        onStep={setStep}
        callout={{
          title: "Accompanying spouse or partner",
          body: "If your accompanying spouse or partner is neither a Canadian citizen nor a permanent resident, include their education, language scores and Canadian work.",
        }}
      >
        <SectionLabel>{step === 3 ? "Profile and supporting factors" : ["Profile details", "Official language levels", "Work history and job offer"][step]}</SectionLabel>
        <div className="ref-fields">
          {show(0) && <>
            <SelectField id="crs-marital" label="Marital status" value={form.marital} onChange={change("marital")} options={crsMarital} />
            <SelectField id="crs-age" label="Age" value={form.age} onChange={change("age")} options={crsAgeOptions} placeholder="Choose age range" />
            <SelectField id="crs-education" label="Highest education" value={form.education} onChange={change("education")} options={crsEducation} />
            <SelectField id="crs-canadian-education" label="Canadian study credential" value={form.canadianEducation} onChange={change("canadianEducation")} options={canadianStudy} />
          </>}
          {show(1) && <>
            <BandField label="First language · L / R / W / S" scores={form.firstLanguage} onChange={change("firstLanguage")} language={form.primaryLanguage} onLanguageChange={change("primaryLanguage")} />
            <BandField label="Second language · L / R / W / S" scores={form.secondLanguage} onChange={change("secondLanguage")} language={second} enabled={form.hasSecondLanguage} onEnabledChange={change("hasSecondLanguage")} />
          </>}
          {show(2) && <>
            <SelectField id="crs-canadian-experience" label="Qualifying Canadian work" value={form.canadianExperience} onChange={change("canadianExperience")} options={noneExperience} />
            <SelectField id="crs-foreign-experience" label="Qualifying foreign work" value={form.foreignExperience} onChange={change("foreignExperience")} options={foreignExperience} />
            <SelectField id="crs-lmi-work-wage" label="High-wage Canadian work" value={form.lmiWorkWage} onChange={change("lmiWorkWage")} options={lmiWork} />
            <SelectField id="crs-lmi-job-wage" label="Qualifying high-wage job offer" value={form.lmiJobWage} onChange={change("lmiJobWage")} options={lmiJob} />
            <SelectField id="crs-trade" label="Canadian trade qualification" value={form.certificateOfQualification} onChange={change("certificateOfQualification")} options={options([["no", "None"], ["yes", "Qualifying Canadian trade certificate"]])} />
          </>}
          {(step === 3 || step === 0) && <>
            <SelectField id="crs-sibling" label="Eligible sibling in Canada" value={form.sibling} onChange={change("sibling")} options={yesNo} />
            <SelectField id="crs-nomination" label="Provincial or territorial nomination" value={form.provincialNomination} onChange={change("provincialNomination")} options={nomination} wide />
          </>}
        </div>
        {hasSpouse && (show(0) || show(1)) && (
          <>
            <SectionLabel>Accompanying spouse or partner</SectionLabel>
            <div className="ref-fields">
              <SelectField id="crs-spouse-education" label="Spouse education" value={form.spouseEducation} onChange={change("spouseEducation")} options={SPOUSE_EDUCATION} />
              <SelectField id="crs-spouse-experience" label="Spouse Canadian work experience" value={form.spouseExperience} onChange={change("spouseExperience")} options={noneExperience} />
              <BandField label="Spouse language · L / R / W / S" scores={form.spouseLanguage} onChange={change("spouseLanguage")} />
            </div>
          </>
        )}
      </FormPanel>
      <ResultPanel>
        <ScoreResult
          title="Estimated CRS score"
          calculated={hasInput}
          value={hasInput ? result.score : null}
          max={1270}
          ticks={[0, 300, 600, 900, 1270]}
          footerLabel={hasInput ? completeResult ? "Express Entry" : "Provisional score" : undefined}
          footerValue={hasInput ? completeResult ? hasSpouse ? "Accompanying spouse or partner" : form.marital === "single" ? "Single applicant · spouse factors do not apply" : "Scored without spouse factors" : "Updates as you complete each answer" : undefined}
        />
        <PointsBreakdown
          rows={[
            scoreRow("Core human capital", core, hasSpouse ? 530 : 570),
            ...(hasSpouse ? [scoreRow("Spouse factors", spouseRow.points, 40)] : []),
            scoreRow("Skill transferability", result.transferability.total, 100),
            scoreRow("Additional points", result.additional, 600),
          ]}
          note={completeResult ? "Confirm each claimed factor against your supporting documents and the IRCC scoring criteria." : hasInput ? "Provisional points reflect the answers entered so far. The total updates immediately when an answer changes." : "Choose your profile, language and work factors to see a live estimate."}
        />
        <div className={styles.crsCallout}>
          <Callout title="Labour Market Integration" variant="book">
            The calculator uses the higher of your eligible Canadian work points and qualifying high-wage job offer points. Check IRCC’s published NOC lists for eligible occupations.
          </Callout>
        </div>
      </ResultPanel>
    </>
  );
}

const fswLevels = options([
  ["below7", "Below CLB/NCLC 7"], [7, "CLB/NCLC 7"], [8, "CLB/NCLC 8"], ["9plus", "CLB/NCLC 9 or higher"],
]);
const fswLanguagePoints = { below7: 0, 7: 4, 8: 5, "9plus": 6 };
const fswAgeOptions = options([
  ["under18", "Under 18"], ["18to35", "18–35"],
  ...Array.from({ length: 11 }, (_, index) => [String(index + 36), String(index + 36)]),
  ["47plus", "47 or older"],
]);
const fswEducation = [
  ["none", "Less than high school", 0],
  ["secondary", "High school diploma", 5],
  ["one-year", "One-year post-secondary credential", 15],
  ["two-year", "Two-year post-secondary credential", 19],
  ["three-year", "Bachelor’s degree or 3+ year credential", 21],
  ["two-credentials", "Two credentials, one 3+ years", 22],
  ["masters", "Master’s or eligible professional degree", 23],
  ["doctoral", "Doctoral degree", 25],
];
const fswExperience = [
  ["under1", "Less than 1 year", 0],
  ["1", "1 year · TEER 0–3", 9],
  ["2to3", "2–3 years · TEER 0–3", 11],
  ["4to5", "4–5 years · TEER 0–3", 13],
  ["6plus", "6+ years · TEER 0–3", 15],
];
const adaptability = [
  ["relative", "Eligible relative in Canada", 5],
  ["spouseLanguage", "Accompanying spouse or partner with CLB/NCLC 4+ in all abilities", 5],
  ["candidateStudy", "Two years of eligible study in Canada", 5],
  ["spouseStudy", "Two years of eligible spouse or partner study in Canada", 5],
  ["candidateWork", "One year of eligible skilled work in Canada", 10],
  ["spouseWork", "One year of eligible spouse or partner work in Canada", 5],
];

const fswEmpty = {
  age: "", education: "", experience: "", primaryLanguage: "", firstLanguage: allBands(),
  hasSecondLanguage: null, secondLanguage: allBands(), jobOffer: "", adaptability: [],
  continuousWork: "", educationEca: "", funds: "", residence: "",
};

function AdaptabilityField({ selected, onChange }) {
  const checked = adaptability.filter(([key]) => selected.includes(key));
  const summary = checked.length === 1 ? checked[0][1] : checked.length ? `${checked.length} factors selected` : "None selected";
  function toggle(key) {
    onChange(selected.includes(key) ? selected.filter((item) => item !== key) : [...selected, key]);
  }
  return (
    <ExpandedField label="Adaptability factors · select all" valueLabel={summary}>
      <div className={styles.adaptabilityChoices}>
        {adaptability.map(([key, label, points]) => (
          <label key={key}><input type="checkbox" checked={selected.includes(key)} onChange={() => toggle(key)} />{label} <strong>+{points}</strong></label>
        ))}
      </div>
    </ExpandedField>
  );
}

function calculateFsw(answers) {
  const age = Number(answers.age);
  const agePoints = answers.age === "18to35" ? 12 : age >= 36 && age <= 46 ? 47 - age : ["under18", "47plus"].includes(answers.age) ? 0 : null;
  const education = fswEducation.find(([value]) => value === answers.education)?.[2];
  const experience = fswExperience.find(([value]) => value === answers.experience)?.[2];
  const firstBands = Object.values(answers.firstLanguage);
  const secondBands = Object.values(answers.secondLanguage);
  const firstComplete = firstBands.every(Boolean);
  const secondComplete = answers.hasSecondLanguage === false || (answers.hasSecondLanguage === true && secondBands.every(Boolean));
  const secondPoints = answers.hasSecondLanguage === true && secondBands.every((level) => Number(level) >= 5) ? 4 : 0;
  const arranged = answers.jobOffer === "yes" ? 10 : 0;
  const adaptabilityPoints = Math.min(10, adaptability.reduce((total, [key, , points]) => total + (answers.adaptability.includes(key) ? points : 0), arranged ? 5 : 0));
  const languageStarted = firstBands.some(Boolean) || answers.hasSecondLanguage !== null;
  const firstLanguagePartial = firstBands.reduce((total, band) => total + (fswLanguagePoints[band] || 0), 0);
  const rows = [
    { label: "Age", points: answers.age === "" ? null : agePoints, max: 12 },
    { label: "Education", points: education, max: 25 },
    { label: "Official languages", points: firstComplete && secondComplete ? firstLanguagePartial + secondPoints : languageStarted ? firstLanguagePartial + secondPoints : null, max: 28 },
    { label: "Skilled work experience", points: experience, max: 15 },
    { label: "Arranged employment", points: answers.jobOffer ? arranged : null, max: 10 },
    { label: "Adaptability", points: adaptabilityPoints, max: 10 },
  ];
  const score = rows.every(({ points }) => points != null) && firstComplete && secondComplete && answers.primaryLanguage !== "" && answers.hasSecondLanguage !== null
    ? rows.reduce((total, { points }) => total + points, 0)
    : null;
  const criteria = [
    ["Continuous skilled work in the past 10 years", answers.continuousWork],
    ["Canadian credential or foreign ECA", answers.educationEca],
    ["Settlement funds or exemption", answers.funds === "exempt" ? "yes" : answers.funds],
    ["Intend to settle outside Quebec", answers.residence],
    ["CLB/NCLC 7 or higher in each first-language ability", firstComplete ? firstBands.includes("below7") ? "no" : "yes" : ""],
  ].map(([label, value]) => ({ label, status: value === "yes" ? "provided" : value === "no" ? "review" : "pending" }));
  let note = "Complete the required selection factors. Review the minimum requirements separately.";
  if (score !== null) {
    const threshold = score >= 67 ? "meets the selection grid minimum" : "falls below the 67-point selection threshold";
    note = `${score} points ${threshold}. Check the minimum requirements before applying.`;
  }
  return { rows, score, criteria, note };
}

function FswReferenceCalculator() {
  const { values: form, change, reset } = useFederalProfile(fswEmpty);
  const [step, setStep] = useState(0);
  const result = calculateFsw(form);
  const hasInput = hasCrsInput(form);
  const liveScore = hasInput ? result.rows.reduce((total, { points }) => total + (typeof points === "number" ? points : 0), 0) : null;
  const second = !form.primaryLanguage ? "" : form.primaryLanguage === "english" ? "french" : "english";
  const delta = result.score === null ? null : result.score - 67;
  const thresholdLabel = delta === null ? "Complete the selection factors" : delta === 0 ? "At the threshold" : `${Math.abs(delta)} ${Math.abs(delta) === 1 ? "point" : "points"} ${delta > 0 ? "above" : "below"}`;
  const educationOptions = options(fswEducation.map(([value, label]) => [value, label]));
  const experienceOptions = options(fswExperience.map(([value, label]) => [value, label]));
  const displayRows = hasInput ? result.rows : result.rows.map((row) => ({ ...row, points: null }));
  const funds = (
    <SelectField
      id="fsw-funds"
      label="Settlement funds or exemption"
      value={form.funds}
      onChange={change("funds")}
      options={options([["yes", "Funds available · verify family size"], ["exempt", "A valid exemption applies"], ["no", "Requirement not met"]])}
    />
  );
  const continuous = (
    <SelectField
      id="fsw-continuousWork"
      label="Continuous work in primary NOC"
      value={form.continuousWork}
      onChange={change("continuousWork")}
      options={options([["yes", "1+ year / 1,560 hours · last 10 years"], ["no", "Requirement not met"]])}
    />
  );

  return (
    <>
      <FormPanel
        title="Federal selection factors"
        description="Check the minimum requirements first, then estimate your selection factor points."
        onReset={() => { reset(); setStep(0); }}
        steps={["Minimum requirements", "Selection factors"]}
        activeStep={step}
        onStep={setStep}
        callout={{
          title: "Language and adaptability",
          body: "First language requires CLB/NCLC 7 in every ability. Second language awards 4 points only when all four are at least 5. Adaptability is capped at 10.",
        }}
      >
        <SectionLabel>{step === 0 ? "Minimum requirements" : "Selection grid inputs"}</SectionLabel>
        <div className={`ref-fields ${styles.fswInputs}`}>
          {step === 1 && <>
            <SelectField id="fsw-age" label="Age at application" value={form.age} onChange={change("age")} options={fswAgeOptions} placeholder="Choose age range" />
            <SelectField id="fsw-education" label="Education" value={form.education} onChange={change("education")} options={educationOptions} />
          </>}
          <BandField label="First language · L / R / W / S" scores={form.firstLanguage} onChange={change("firstLanguage")} levels={fswLevels} language={form.primaryLanguage} onLanguageChange={change("primaryLanguage")} />
          {step === 1 ? (
            <>
              <BandField label="Second language · L / R / W / S" scores={form.secondLanguage} onChange={change("secondLanguage")} language={second} enabled={form.hasSecondLanguage} onEnabledChange={change("hasSecondLanguage")} />
              <SelectField id="fsw-experience" label="Eligible skilled work total" value={form.experience} onChange={change("experience")} options={experienceOptions} />
              {continuous}
              <ChoiceField label="Valid arranged employment" value={form.jobOffer} onChange={change("jobOffer")} />
              <AdaptabilityField selected={form.adaptability} onChange={change("adaptability")} />
            </>
          ) : (
            <>
              <SelectField id="fsw-educationEca" label="Canadian credential or foreign ECA" value={form.educationEca} onChange={change("educationEca")} options={yesNo} />
              {continuous}
            </>
          )}
          <ChoiceField label="Intend to settle outside Quebec" value={form.residence} onChange={change("residence")} />
          {funds}
        </div>
      </FormPanel>
      <ResultPanel>
        <ScoreResult title="Estimated FSW points" calculated={hasInput} value={liveScore} threshold={67} footerLabel={hasInput ? result.score !== null ? thresholdLabel : "Provisional score" : undefined} footerValue={hasInput ? result.score !== null ? "67-point selection threshold" : "Updates as you complete each answer" : undefined} warning={result.score !== null && result.score < 67} />
        {step === 0
          ? <CriteriaSummary rows={result.criteria} note="IRCC assesses whether you meet the minimum requirements and verifies the supporting documents." />
          : <PointsBreakdown rows={displayRows} note={result.score !== null ? result.note : hasInput ? "Provisional points reflect the answers entered so far. The total updates immediately when an answer changes." : "Choose your selection factors to see a live estimate."} />}
        <Callout title="Two distinct scores" variant="book">
          The 67-point federal grid checks program selection factors. The CRS ranks candidates in the Express Entry pool.
        </Callout>
      </ResultPanel>
    </>
  );
}

export default function ReferenceFederalCalculators({ page }) {
  if (page.type === "clb") return <ClbCalculator />;
  if (page.type === "crs") return <CrsReferenceCalculator />;
  return <FswReferenceCalculator />;
}
