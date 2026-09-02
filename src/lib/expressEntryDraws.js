export const EXPRESS_ENTRY_API_URL = "https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json";
export const EXPRESS_ENTRY_ROUNDS_URL = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html";

const DRAW_DETAILS_BASE_URL = "https://www.canada.ca/content/canadasite/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html";

function getDrawDetailsUrl(draw) {
  const relativeHref = String(draw?.drawNumberURL || "").match(/href=['"]([^'"]+)/i)?.[1];
  if (!relativeHref) return DRAW_DETAILS_BASE_URL;

  try {
    return new URL(relativeHref, DRAW_DETAILS_BASE_URL).toString();
  } catch {
    return DRAW_DETAILS_BASE_URL;
  }
}

function cleanDrawName(name) {
  return String(name || "Express Entry draw")
    .replace(/\s*,?\s*\d{4}-Version\s*\d+$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeDraw(draw) {
  return {
    number: String(draw?.drawNumber || ""),
    date: String(draw?.drawDate || ""),
    dateFull: String(draw?.drawDateFull || draw?.drawDate || ""),
    name: cleanDrawName(draw?.drawName),
    invitations: String(draw?.drawSize || ""),
    crs: String(draw?.drawCRS || ""),
    cutoff: String(draw?.drawCutOff || ""),
    drawDateTime: String(draw?.drawDateTime || ""),
    eligiblePrograms: String(draw?.drawText2 || ""),
    detailsUrl: getDrawDetailsUrl(draw),
  };
}

export async function getExpressEntryDraws() {
  const response = await fetch(EXPRESS_ENTRY_API_URL, {
    headers: { Accept: "application/json" },
    next: { revalidate: 900 },
  });

  if (!response.ok) {
    throw new Error(`Express Entry data request failed with ${response.status}`);
  }

  const payload = await response.json();
  if (!Array.isArray(payload?.rounds)) {
    throw new Error("Express Entry data response did not contain rounds");
  }

  return payload.rounds.map(normalizeDraw).filter((draw) => draw.number && draw.date);
}
