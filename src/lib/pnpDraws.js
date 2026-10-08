import { PNP_PROGRAM_OPTIONS, PNP_PROGRAMS, PNP_REFRESH_INTERVAL_SECONDS } from "@/data/pnp-programs";
import { PNP_DRAW_HISTORY } from "@/data/pnp-draw-history";

export const PNP_DRAWS_SOURCE_URL = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html";
export { PNP_REFRESH_INTERVAL_SECONDS };

const ALL_FILTER = "all";

const HISTORY_PROGRAM_KEYS = {
  ab: "alberta",
  bc: "bc",
  mb: "manitoba",
  on: "ontario",
  sk: "saskatchewan",
};

const HISTORY_STREAM_LABELS = {
  "ab-express-entry": "AEE (Express Entry)",
  "ab-opportunity": "Opportunity Stream",
  "ab-rural": "Rural Renewal Stream",
  "ab-tech": "Accelerated Tech",
  "bc-ee": "Express Entry BC",
  "bc-health-authority": "Health Authority",
  "bc-intl-graduate": "Intl. Graduate",
  "bc-skills-worker": "Skills Worker",
  "mb-intl-student": "International Student",
  "mb-skilled-worker": "Skilled Worker",
  "mb-strategic": "Strategic Initiative",
  "on-employer-central": "Employer — Central",
  "on-employer-gta": "Employer — GTA",
  "on-employer-swont": "Employer — Southwestern Ontario",
  "on-french": "French-Speaking Skilled Worker",
  "on-healthcare": "Healthcare Priority",
  "on-workforce-priority": "Workforce Priority",
  "sk-priority": "Priority Sectors",
  "sk-window": "Capped Sector Window",
};

const HISTORY_SCORE_NAMES = {
  ab: "EOI Points",
  bc: "SIRS Score",
  mb: "LAA Points",
  on: "EOI Points",
  sk: "Window / Cap",
};

const HISTORY_SELECTION_TYPES = {
  "sk-priority": "priority",
  "sk-window": "intake",
};

function dateValue(value) {
  const dateText = String(value || "").replace(/(\w+\s+\d{1,2})\s*[–-]\s*\d{1,2}/, "$1");
  const timestamp = Date.parse(dateText);
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function formatHistoryDate(value) {
  const [year, month, day] = String(value).split("-").map(Number);
  if (![year, month, day].every(Number.isFinite)) return value;
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, day)));
}

function streamLabel(program, streamKey, fallback) {
  return program.streams?.find((stream) => stream.key === streamKey)?.label || fallback;
}

function normalizeDraw(program, draw, index) {
  const stream = program.streams?.find((item) => item.key === draw.streamKey);
  return {
    id: `${program.key}-${draw.streamKey}-${draw.date}-${index}`,
    province: program.key,
    provinceLabel: program.regionLabel,
    abbreviation: program.shortName,
    date: draw.date,
    streamKey: draw.streamKey,
    stream: draw.stream,
    streamLabel: streamLabel(program, draw.streamKey, draw.stream),
    minimum: draw.minimum,
    invitations: draw.invitations,
    detail: draw.detail,
    selectionType: draw.selectionType,
    scoreName: stream?.scoreName || "Selection signal",
    sourceUrl: stream?.sourceUrl || program.source.url,
    sourceLabel: program.source.label,
    dataAsOf: program.source.dataAsOf,
    sourceStatus: program.source.status,
  };
}

function normalizeHistoryDraw(draw, index) {
  const programKey = HISTORY_PROGRAM_KEYS[draw.province];
  const program = PNP_PROGRAMS[programKey];
  const stream = HISTORY_STREAM_LABELS[draw.stream] || draw.stream;
  const selectionType = HISTORY_SELECTION_TYPES[draw.stream] || (draw.score > 0 ? "score" : "targeted");
  return {
    id: `history-${draw.pageSlug || draw.stream}-${draw.date}-${index}`,
    province: programKey,
    provinceLabel: program.regionLabel,
    abbreviation: program.shortName,
    date: formatHistoryDate(draw.date),
    streamKey: draw.stream,
    stream,
    streamLabel: stream,
    minimum: draw.stream.startsWith("sk-") ? "Not published" : String(draw.score),
    invitations: String(draw.invited),
    detail: draw.notes || `${stream} invitation round`,
    selectionType,
    scoreName: HISTORY_SCORE_NAMES[draw.province],
    sourceUrl: program.source.url,
    sourceLabel: program.source.label,
    dataAsOf: draw.date,
    sourceStatus: program.source.status,
    referenceSlug: draw.pageSlug,
  };
}

function getProgramDraws(programKey) {
  const historyProvince = Object.entries(HISTORY_PROGRAM_KEYS).find(([, key]) => key === programKey)?.[0];
  if (historyProvince) return PNP_DRAW_HISTORY.filter((draw) => draw.province === historyProvince).map(normalizeHistoryDraw);
  return (PNP_PROGRAMS[programKey]?.draws || []).map((draw, index) => normalizeDraw(PNP_PROGRAMS[programKey], draw, index));
}

function getPrograms(province) {
  if (province === ALL_FILTER) return PNP_PROGRAM_OPTIONS;
  const selected = PNP_PROGRAM_OPTIONS.find((program) => program.key === province);
  return selected ? [selected] : null;
}

export function getPnpDrawFeed({ province = ALL_FILTER, stream = ALL_FILTER } = {}) {
  const programs = getPrograms(province);
  if (!programs) return null;

  const draws = programs
    .flatMap(({ key }) => getProgramDraws(key))
    .filter((draw) => stream === ALL_FILTER || draw.streamKey === stream)
    .sort((left, right) => dateValue(right.date) - dateValue(left.date));

  const streamOptions = [
    { key: ALL_FILTER, label: "All streams" },
    ...Array.from(
      new Map(
        draws.map((draw) => [
          draw.streamKey,
          { key: draw.streamKey, label: draw.streamLabel || draw.stream },
        ]),
      ).values(),
    ),
  ];

  return {
    draws,
    province,
    stream: streamOptions.some((option) => option.key === stream) ? stream : ALL_FILTER,
    programs: [{ key: ALL_FILTER, label: "All provinces" }, ...PNP_PROGRAM_OPTIONS],
    streams: streamOptions,
    source: PNP_DRAWS_SOURCE_URL,
    delivery: "source-indexed-snapshot",
    recordCount: draws.length,
    refreshedAt: new Date().toISOString(),
    refreshInterval: PNP_REFRESH_INTERVAL_SECONDS,
  };
}
