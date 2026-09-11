import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/config/site";
import { LEAD_EMAIL_SENDER } from "@/config/integrations";
import { pushLeadToCrm } from "@/lib/crmLead";

export const runtime = "nodejs";

/**
 * Demo form endpoint.
 *
 * - Validates required fields.
 * - Sends the lead to the CMG web-to-leads CRM endpoint when configured.
 * - CRM delivery is best-effort and never blocks the website confirmation.
 *
 * Server-only CRM values are read by src/lib/crmLead.js — never exposed to
 * the browser.
 */

const TYPES = new Set([
  "contact",
  "newsletter",
  "consultation",
  "urgent-consultation",
  "assessment",
]);

const REQUIRED_FIELDS = {
  contact: ["fullName", "email", "phone", "topic", "message"],
  newsletter: ["email"],
  consultation: ["fullName", "email", "phone", "country", "mode", "preferredDate"],
  "urgent-consultation": ["fullName", "email", "phone", "country", "mode", "preferredDate", "deadline"],
  assessment: ["fullName", "email", "phone", "country", "currentStatus", "goal"],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, maxLength = 500) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return clean(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  }[character]));
}

function consultationLeadHtml(payload, type) {
  const urgent = type === "urgent-consultation";
  const rows = [
    ["Name", clean(payload.fullName, 120)],
    ["Email", clean(payload.email, 160)],
    ["Phone", clean(payload.phone, 80) || "Not provided"],
    ["Country of residence", clean(payload.country, 120)],
    ["Area of help", clean(payload.interest, 120) || "Not provided"],
    ["Consultation mode", clean(payload.mode, 80)],
    ["Preferred date", clean(payload.preferredDate, 40)],
    ...(urgent ? [["Deadline", clean(payload.deadline, 160)]] : []),
    ["Message", clean(payload.message, 1200) || "Not provided"],
  ]
    .map(([label, value]) => `<tr><td style="padding:6px 12px 6px 0;color:#6b5560;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;font-weight:600;white-space:pre-line;">${escapeHtml(value)}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#21181b;">
      <h2 style="color:#c8102e;margin-bottom:6px;">New ${urgent ? "urgent " : ""}consultation request</h2>
      <p style="margin-top:0;color:#6b5560;">A visitor submitted the consultation form on the website.</p>
      <table style="border-collapse:collapse;margin:18px 0;">${rows}</table>
      <p style="font-size:12px;color:#6b5560;">Submitted: ${escapeHtml(payload.receivedAt)}</p>
    </div>`;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const type = String(body?.type || "");
  if (!TYPES.has(type)) {
    return NextResponse.json({ ok: false, error: "Unknown form type." }, { status: 400 });
  }

  // Basic validation
  const required = REQUIRED_FIELDS[type] || [];
  const missing = required.filter((field) => {
    const value = body?.[field];
    return value === undefined || value === null || String(value).trim() === "";
  });
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required field(s): ${missing.join(", ")}.` },
      { status: 422 }
    );
  }

  const email = String(body.email || "").trim();
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 422 });
  }

  // Build the clean payload
  const payload = {
    ...body,
    receivedAt: new Date().toISOString(),
    origin: request.headers.get("origin") || "",
  };

  const isConsultationLead = type === "consultation" || type === "urgent-consultation";
  const recipient = site.email;
  const resendApiKey = clean(process.env.RESEND_API_KEY, 240);
  const sender = LEAD_EMAIL_SENDER;

  if (isConsultationLead && !resendApiKey) {
    console.error("Consultation lead email is not configured. Set RESEND_API_KEY in .env.");
    return NextResponse.json({ ok: false, error: "Lead email is not configured yet." }, { status: 503 });
  }

  let deliveredByEmail = false;
  if (isConsultationLead) {
    try {
      const resend = new Resend(resendApiKey);
      const { error } = await resend.emails.send({
        from: sender,
        to: [recipient],
        replyTo: email,
        subject: `New ${type === "urgent-consultation" ? "urgent " : ""}consultation request`,
        html: consultationLeadHtml(payload, type),
      });

      if (error) {
        console.error("Consultation lead email failed:", error);
        return NextResponse.json({ ok: false, error: "The consultation request could not be sent." }, { status: 502 });
      }
      deliveredByEmail = true;
    } catch (error) {
      console.error("Consultation lead email error:", error.message);
      return NextResponse.json({ ok: false, error: "The consultation request could not be sent." }, { status: 502 });
    }
  }

  // Push after the website's own delivery work. CRM is best-effort by design,
  // so a CRM hiccup never blocks the visitor's success confirmation.
  const crmLeadType = type === "newsletter" ? null : type;
  const crmResult = crmLeadType ? await pushLeadToCrm(crmLeadType, payload) : { configured: false, ok: false };

  return NextResponse.json({
    ok: true,
    crm: crmResult.configured ? (crmResult.ok ? "sent" : "failed") : "not-configured",
    demo: !deliveredByEmail && !crmResult.ok,
  });
}
