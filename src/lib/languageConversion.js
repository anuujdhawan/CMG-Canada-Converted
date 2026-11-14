const ENGLISH_TESTS = new Set(["celpip", "ielts", "pte"]);

export const LANGUAGE_TESTS = [
  { value: "celpip", label: "CELPIP-General", language: "English" },
  { value: "ielts", label: "IELTS General Training", language: "English" },
  { value: "pte", label: "PTE Core", language: "English" },
  { value: "tef", label: "TEF Canada", language: "French" },
  { value: "tcf", label: "TCF Canada", language: "French" },
];

export const LANGUAGE_ABILITIES = [
  { key: "speaking", label: "Speaking" },
  { key: "listening", label: "Listening" },
  { key: "reading", label: "Reading" },
  { key: "writing", label: "Writing" },
];

export function getTestLanguage(test) {
  return ENGLISH_TESTS.has(test) ? "English" : "French";
}

export function getRawInput(test, ability) {
  if (test === "celpip") return { min: 0, max: 12, step: 1, placeholder: "0–12" };
  if (test === "ielts") return { min: 0, max: 9, step: 0.5, placeholder: "0.0–9.0" };
  if (test === "pte") return { min: 10, max: 90, step: 1, placeholder: "10–90" };
  if (test === "tef") return { min: 0, max: 450, step: 1, placeholder: "0–450" };
  if (test === "tcf") {
    return ability === "speaking" || ability === "writing"
      ? { min: 0, max: 20, step: 1, placeholder: "0–20" }
      : { min: 0, max: 699, step: 1, placeholder: "0–699" };
  }
  return { min: 0, max: 100, step: 1, placeholder: "Score" };
}

// IRCC's Express Entry language equivalency tables. Range entries are
// [minimum, maximum, CLB/NCLC]; a null maximum means "and above".
const SCORES = {
  celpip: {
    speaking: [[4, 12, 12]],
    listening: [[4, 12, 12]],
    reading: [[4, 12, 12]],
    writing: [[4, 12, 12]],
  },
  ielts: {
    speaking: [[7.5, 9, 10], [7, 7.49, 9], [6.5, 6.99, 8], [6, 6.49, 7], [5.5, 5.99, 6], [5, 5.49, 5], [4, 4.99, 4]],
    listening: [[8.5, 9, 10], [8, 8.49, 9], [7.5, 7.99, 8], [6, 7.49, 7], [5.5, 5.99, 6], [5, 5.49, 5], [4.5, 4.99, 4]],
    reading: [[8, 9, 10], [7, 7.99, 9], [6.5, 6.99, 8], [6, 6.49, 7], [5, 5.99, 6], [4, 4.99, 5], [3.5, 3.99, 4]],
    writing: [[7.5, 9, 10], [7, 7.49, 9], [6.5, 6.99, 8], [6, 6.49, 7], [5.5, 5.99, 6], [5, 5.49, 5], [4, 4.99, 4]],
  },
  pte: {
    speaking: [[89, null, 10], [84, 88, 9], [76, 83, 8], [68, 75, 7], [59, 67, 6], [51, 58, 5], [42, 50, 4]],
    listening: [[89, null, 10], [82, 88, 9], [71, 81, 8], [60, 70, 7], [50, 59, 6], [39, 49, 5], [28, 38, 4]],
    reading: [[88, null, 10], [78, 87, 9], [69, 77, 8], [60, 68, 7], [51, 59, 6], [42, 50, 5], [33, 41, 4]],
    writing: [[90, null, 10], [88, 89, 9], [79, 87, 8], [69, 78, 7], [60, 68, 6], [51, 59, 5], [41, 50, 4]],
  },
  tef: {
    speaking: [[393, 450, 10], [371, 392, 9], [349, 370, 8], [310, 348, 7], [271, 309, 6], [226, 270, 5], [181, 225, 4]],
    listening: [[316, 360, 10], [298, 315, 9], [280, 297, 8], [249, 279, 7], [217, 248, 6], [181, 216, 5], [145, 180, 4]],
    reading: [[263, 300, 10], [248, 262, 9], [233, 247, 8], [207, 232, 7], [181, 206, 6], [151, 180, 5], [121, 150, 4]],
    writing: [[393, 450, 10], [371, 392, 9], [349, 370, 8], [310, 348, 7], [271, 309, 6], [226, 270, 5], [181, 225, 4]],
  },
  tcf: {
    speaking: [[16, 20, 10], [14, 15, 9], [12, 13, 8], [10, 11, 7], [7, 9, 6], [6, 6, 5], [4, 5, 4]],
    listening: [[549, 699, 10], [523, 548, 9], [503, 522, 8], [458, 502, 7], [398, 457, 6], [369, 397, 5], [331, 368, 4]],
    reading: [[549, 699, 10], [524, 548, 9], [499, 523, 8], [453, 498, 7], [406, 452, 6], [375, 405, 5], [342, 374, 4]],
    writing: [[16, 20, 10], [14, 15, 9], [12, 13, 8], [10, 11, 7], [7, 9, 6], [6, 6, 5], [4, 5, 4]],
  },
};

export function convertLanguageScore(test, ability, rawValue) {
  if (rawValue === "" || rawValue === null || rawValue === undefined) return null;
  const score = Number(rawValue);
  if (!Number.isFinite(score) || score < 0) return null;
  const input = getRawInput(test, ability);
  if (score < input.min || score > input.max || Math.abs((score - input.min) / input.step - Math.round((score - input.min) / input.step)) > 1e-8) return null;
  if (test === "celpip") return score >= 4 ? Math.min(12, Math.floor(score)) : 0;
  const ranges = SCORES[test]?.[ability] || [];
  const match = ranges.find(([min, max]) => score >= min && (max === null || score <= max));
  return match ? match[2] : 0;
}
