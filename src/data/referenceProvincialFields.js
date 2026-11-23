export const options = (...entries) => entries.map((entry) => {
  if (typeof entry === "string") return { value: entry, label: entry };
  const [value, label, points] = entry;
  return { value: String(value), label, points };
});

export function select(key, label, _initial, choices, config = {}) {
  return { key, label, options: choices, ...config };
}

export function number(key, label, _initial, suffix = "years", config = {}) {
  return { key, label, suffix, type: "number", min: 0, max: 120, ...config };
}

export const yesNo = options(["yes", "Yes"], ["no", "No"]);
export const evidence = options(["yes", "Evidence available"], ["review", "To be confirmed"], ["no", "Evidence unavailable"]);

export function checkField(key, label) {
  return select(key, label, "", yesNo, { toggle: true });
}

export function engineField(stream, key, label, _initial, labels = {}, config = {}) {
  const question = stream.questions.find((item) => item.key === key);
  return {
    key,
    label: label || question.label,
    options: question.options?.map((option) => ({
      ...option,
      label: labels[option.value] || option.label,
    })),
    type: question.kind === "number" ? "number" : undefined,
    min: question.min,
    max: question.max,
    step: question.step,
    suffix: question.suffix,
    ...config,
  };
}

export function ageRange(age, ranges) {
  if (age === "" || age == null) return "";
  return ranges.find(([max]) => Number(age) <= max)?.[1] || ranges.at(-1)[1];
}

export function resultStatus(value, passes = true) {
  if (value == null || value === "") return "pending";
  return passes && !["no", "review", "unknown"].includes(value) ? "provided" : "review";
}

export function criterion(label, short, answers, keys, test) {
  const answered = keys.every((key) => answers[key] !== "" && answers[key] != null);
  return { label, short, status: answered ? (test(answers) ? "provided" : "review") : "pending" };
}

export function numericOptions(values, { none = "No test result", language = "CLB" } = {}) {
  return options(["0", none], ...values.map((level) => [level, `${language} ${level}`]));
}
