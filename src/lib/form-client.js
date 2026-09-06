/**
 * Client-side form submit helper.
 * Posts to the internal API route; the server handles email and the CRM
 * web-to-leads handoff without exposing credentials to the browser.
 */
export async function submitForm(payload) {
  try {
    const res = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, ...data };
  } catch {
    return { ok: false, error: "Network error — please try again." };
  }
}
