function getOption(question, value) {
  return question?.options?.find((option) => String(option.value) === String(value));
}

function numberScore(question, value) {
  const scoring = question?.scoring;
  const numericValue = Number(value);
  if (!scoring || !Number.isFinite(numericValue)) return 0;

  if (scoring.type === "linear") {
    if (numericValue < scoring.min) return 0;
    return Math.min(scoring.maxPoints, Math.floor(numericValue) - scoring.offset);
  }

  if (scoring.type === "ranges") {
    const match = scoring.ranges.find((range) => numericValue >= range.min && numericValue < range.max);
    return match?.points || 0;
  }

  return 0;
}

export function getStream(program, streamKey) {
  return program?.streams?.find((stream) => stream.key === streamKey) || program?.streams?.[0] || null;
}

export function getQuestionScore(question, value) {
  if (question?.kind === "number") return numberScore(question, value);
  return getOption(question, value)?.points || 0;
}

function isMissing(question, answers) {
  const value = answers?.[question.key];
  return value === undefined || value === null || value === "";
}

function isUnknown(question, answers) {
  const value = answers?.[question.key];
  return Boolean(getOption(question, value)?.unknown);
}

function evaluateRule(rule, answers) {
  const value = answers?.[rule.key];
  if (rule.min != null) return Number(value) < rule.min;
  if (rule.max != null) return Number(value) > rule.max;
  return Array.isArray(rule.values) && rule.values.includes(value);
}

function getSectionBreakdown(stream, answers) {
  const sections = new Map();

  stream.questions.forEach((question) => {
    const section = question.section || question.key;
    const current = sections.get(section) || { section, points: 0, max: question.sectionMax || 0 };
    current.points += getQuestionScore(question, answers?.[question.key]);
    current.max = Math.max(current.max, question.sectionMax || 0);
    sections.set(section, current);
  });

  return Array.from(sections.values()).map((section) => ({
    ...section,
    points: section.max ? Math.min(section.points, section.max) : section.points,
  }));
}

function collectDocuments(stream, answers) {
  const documents = new Set(stream.documents || []);
  stream.questions.forEach((question) => {
    if (answers?.[question.key] !== undefined) {
      question.documents?.forEach((document) => documents.add(document));
    }
  });
  return Array.from(documents);
}

function getAnswerBreakdown(stream, answers) {
  return stream.questions
    .filter((question) => answers?.[question.key] !== undefined && answers?.[question.key] !== null && answers?.[question.key] !== "")
    .map((question) => {
      const value = answers[question.key];
      const option = getOption(question, value);
      return {
        key: question.key,
        label: question.label,
        value: option?.label || value,
        points: getQuestionScore(question, value),
        section: question.section || question.key,
      };
    });
}

export function evaluatePnpStream(stream, answers = {}) {
  if (!stream) return { status: "not-applicable", missing: [], failures: [], unknowns: [], documents: [], improvements: [] };
  if (stream.mode === "no-calculator") return { status: "not-applicable", missing: [], failures: [], unknowns: [], documents: [], improvements: stream.improvements || [] };

  const missing = stream.questions.filter((question) => question.required !== false && isMissing(question, answers));
  const unknowns = stream.questions.filter((question) => isUnknown(question, answers)).map((question) => question.label);
  const failures = (stream.rules || [])
    .filter((rule) => !missing.some((question) => question.key === rule.key) && evaluateRule(rule, answers))
    .map((rule) => rule.message);
  const breakdown = stream.mode === "official-grid" ? getSectionBreakdown(stream, answers) : [];
  const score = breakdown.reduce((total, section) => total + section.points, 0);

  let status = "needs-review";
  if (missing.length) status = "incomplete";
  else if (failures.length) status = "not-eligible";
  else if (unknowns.length) status = "needs-review";
  else if (stream.mode === "official-grid" && Number.isFinite(stream.minimumScore) && score < stream.minimumScore) status = "below-minimum";
  else status = "likely-eligible";

  return {
    status,
    score: stream.mode === "official-grid" ? score : null,
    maxScore: stream.mode === "official-grid" ? stream.maxScore : null,
    minimumScore: stream.mode === "official-grid" ? stream.minimumScore : null,
    breakdown,
    answerBreakdown: getAnswerBreakdown(stream, answers),
    missing: missing.map((question) => question.label),
    failures,
    unknowns,
    documents: collectDocuments(stream, answers),
    improvements: stream.improvements || [],
  };
}

export function getModeLabel(mode) {
  if (mode === "official-grid") return "Official scoring grid";
  if (mode === "eligibility-planner") return "Official eligibility planner";
  return "No public calculator";
}

export function getStatusLabel(status) {
  if (status === "likely-eligible") return "Likely eligible based on your answers";
  if (status === "below-minimum") return "Below the published minimum score";
  if (status === "not-eligible") return "A required rule is not met";
  if (status === "incomplete") return "Complete the remaining questions";
  if (status === "not-applicable") return "Use the official program guide";
  return "Needs document and rule verification";
}
