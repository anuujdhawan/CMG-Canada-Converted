// WhatsApp configuration is public contact information. The final href is
// passed to the browser only where the UI needs to open WhatsApp.
const raw = "+1 (416) 856-9394";

export const whatsappUrl = (() => {
  if (!raw) return "";
  // Already a full WhatsApp URL — use as-is.
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com)/i.test(raw)) return raw;
  if (/^https?:\/\//i.test(raw)) return raw;

  // Bare phone number (e.g. +14165551234 or 14165551234) → build wa.me link.
  const digits = raw.replace(/[^\d]/g, "");
  return digits.length >= 8 ? `https://wa.me/${digits}` : raw;
})();
