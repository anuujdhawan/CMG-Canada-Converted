/**
 * Server-only CRM handoff for website leads.
 *
 * The CRM endpoint requires fullName, email and phone. Keep this mapping
 * here so every lead entry point uses the same contract and the API key never
 * reaches the browser.
 */

import {
  CRM_BRANCH,
  CRM_DESTINATION_COUNTRY,
  CRM_ENDPOINT,
} from "@/config/integrations";

const CRM_API_KEY = process.env.CRM_WEB_TO_LEADS_API_KEY?.trim() || "";

function clean(value, maxLength = 500) {
  return String(value || "").trim().slice(0, maxLength);
}

function valueOrUndefined(value, maxLength) {
  const result = clean(value, maxLength);
  return result || undefined;
}

function detailText(parts) {
  return parts
    .filter((part) => part && String(part).trim())
    .map((part) => String(part).trim())
    .join(" | ");
}

function answersText(answers) {
  if (!answers || typeof answers !== "object") return "";
  return Object.entries(answers)
    .slice(0, 20)
    .map(([key, value]) => `${key}: ${clean(value, 120)}`)
    .filter((part) => !part.endsWith(": "))
    .join(", ");
}

function leadDetails(type, body) {
  const answerSummary = answersText(body.answers);

  if (type === "chatbot") {
    return detailText([
      `Pathway: ${clean(body.service, 120)}`,
      answerSummary ? `Answers: ${answerSummary}` : "",
    ]);
  }

  if (type === "assessment") {
    return detailText([
      `Assessment goal: ${clean(body.goal, 120)}`,
      `Current status: ${clean(body.currentStatus, 120)}`,
      clean(body.message, 600) ? `Message: ${clean(body.message, 600)}` : "",
    ]);
  }

  if (type === "contact") {
    return detailText([
      `Topic: ${clean(body.topic, 120)}`,
      clean(body.message, 600) ? `Message: ${clean(body.message, 600)}` : "",
    ]);
  }

  return detailText([
    `Help requested: ${clean(body.interest, 140)}`,
    `Consultation mode: ${clean(body.mode, 80)}`,
    `Preferred date: ${clean(body.preferredDate, 40)}`,
    type === "urgent-consultation" ? `Deadline: ${clean(body.deadline, 160)}` : "",
    clean(body.message, 600) ? `Message: ${clean(body.message, 600)}` : "",
  ]);
}

/** Convert a website submission into the CRM's web-to-leads contract. */
export function toCrmLead(type, body) {
  const details = leadDetails(type, body);
  const immigrationType = detailText([
    type === "chatbot" ? "Guided chat enquiry" : "Website enquiry",
    details,
  ]);

  return {
    fullName: clean(body.fullName, 120),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 80),
    Branch: valueOrUndefined(CRM_BRANCH, 80),
    ResidentCountry: valueOrUndefined(
      body.country || body.residentCountry || "Canada",
      120,
    ),
    DestinationCountry: valueOrUndefined(CRM_DESTINATION_COUNTRY, 120),
    ImmigrationType: valueOrUndefined(immigrationType, 1000),
    Education: valueOrUndefined(body.education, 160),
    AgeRange: valueOrUndefined(body.ageRange, 80),
    // Validated CRM values from the handoff document: chatbot leads are
    // tagged as guided-chat traffic, every other website form as Website.
    LeadSource: type === "chatbot" ? "Livechat - SEO" : "Website",
    UTMSource: valueOrUndefined(body.utm_source || body.utmSource, 160),
  };
}

/** Best-effort handoff: CRM outages never block the visitor's confirmation. */
export async function pushLeadToCrm(type, body) {
  if (!CRM_ENDPOINT) return { configured: false, ok: false };

  const lead = toCrmLead(type, body);
  try {
    const response = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(CRM_API_KEY ? { "x-api-key": CRM_API_KEY } : {}),
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error(`CRM lead handoff failed with status ${response.status}`, data);
      return { configured: true, ok: false, status: response.status };
    }

    return { configured: true, ok: true, data };
  } catch (error) {
    console.error("CRM lead handoff error:", error.message);
    return { configured: true, ok: false, error: error.message };
  }
}
