/**
 * Public/non-secret integration defaults.
 *
 * Credentials remain environment-backed; these values are deployment
 * constants and do not need to be duplicated in .env.
 */

export const CRM_ENDPOINT = "https://www.cmgsales.ca/api/web-to-leads";
export const CRM_BRANCH = "Canada";
export const CRM_DESTINATION_COUNTRY = "Canada";
export const LEAD_EMAIL_SENDER = "CMG Website <onboarding@resend.dev>";
