// WhatsApp configuration is public contact information. The final href is
// passed to the browser only where the UI needs to open WhatsApp.
const raw = "+1 647 617 0750";

export const whatsappUrl = (() => {
  if (!raw) return "";
  // Already a full WhatsApp URL — use as-is.
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com)/i.test(raw)) return raw;
  if (/^https?:\/\//i.test(raw)) return raw;

  // Bare phone number (e.g. +14165551234 or 14165551234) → build a direct
  // api.whatsapp.com link. The wa.me shortlink is avoided because it answers
  // with a 302 redirect, which crawlers report as an external 3XX link.
  const digits = raw.replace(/[^\d]/g, "");
  return digits.length >= 8 ? `https://api.whatsapp.com/send/?phone=${digits}` : raw;
})();
