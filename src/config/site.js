/**
 * Central site/brand configuration.
 *
 * These values are public website content, so they belong in source control
 * rather than in environment variables. Keep actual credentials in .env only.
 */

const brandName = "Commonwealth Migration Group Inc.";
const supportEmail = "info@commonwealthmigration.ca";
const phone = "+1 647 617 0750";
const phoneDigits = phone.replace(/[^\d]/g, "");

export const site = {
  // ---- Identity -------------------------------------------------------
  name: brandName,
  tradingName: "Commonwealth Migration",
  shortName: "CMG",
  tagline: "Your Canadian Permanent Residence, Planned by a Licensed RCIC",
  description:
    "Commonwealth Migration Canada is a CICC-regulated Canadian immigration consultancy. Licensed RCICs serving Canada-wide - Express Entry, PNP, LMIA, work & study permits, family sponsorship, and refusals.",

  // ---- Contact -------------------------------------------------------
  url: "https://commonwealthmigration.ca",
  email: supportEmail,
  emailHref: `mailto:${supportEmail}`,
  phone,
  phoneHref: `tel:${phone.trim().startsWith("+") ? "+" : ""}${phoneDigits}`,
  address: {
    line1: "615, 2250 Bovaird Dr East",
    city: "Brampton, Sandringham- Wellington",
    region: "ON",
    postal: "",
    country: "Canada 🇨🇦",
    full: "615, 2250 Bovaird Dr East, Brampton, Sandringham- Wellington, ON, Canada 🇨🇦",
  },
  sisterConcern: {
    name: "Commonwealth Migration Group",
    shortName: "CMG",
    address: "307 Business Atrium Building, Oud Metha, Dubai , UAE 🇦🇪",
    href: "https://www.cwmigrationgroup.com/",
  },
  hours: "Monday - Friday, 9:00 am - 6:00 pm - Saturday 10:00 am - 4:00 pm (EST)",
  timezone: "Eastern Time (ET)",

  // ---- Regulated representative --------------------------------------
  // Single source of truth for the licensed RCIC behind this practice.
  // The licence number, the CICC profile URL and the displayed name are all
  // derived from here — do not hardcode "R711256" or the consultant's name in
  // a component, because a stale copy of a licence number on a regulated site
  // is a compliance problem, not just a typo.
  //
  // `profileUrl` is the individual licensee record on the CICC public register.
  // Verified 2026-09-24: Pankaj Khanna · College ID R711256 · Type RCIC ·
  // "Eligible to Provide Service" · no revocations, suspensions, restrictions,
  // current proceedings or past decisions.
  //
  // The CICC site appends a per-session token (…&b9100e1006f6=2#b9100e1006f6)
  // to its profile URLs. That token is session-scoped, so the canonical
  // `?ID=14725` form is used instead — it resolves correctly without it.
  rcic: {
    number: "R711256",
    regulator: "College of Immigration and Citizenship Consultants (CICC)",
    regulatorUrl: "https://college-ic.ca/",
    registerUrl: "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx",
    profileUrl: "https://register.college-ic.ca/Public-Register-EN/Licensee/Profile.aspx?ID=14725",
    consultant: {
      name: "Pankaj Khanna",
      // Used where the credential belongs in the visible label, e.g. "Pankaj Khanna, RCIC".
      nameWithCredential: "Pankaj Khanna, RCIC",
      licence: "R711256",
      role: "Regulated Canadian Immigration Consultant",
      // Taken verbatim from the CICC public register entry.
      status: "Eligible to Provide Service",
    },
  },

  // ---- Assets ---------------------------------------------------------
  logos: {
    large: "/images/logo-large.png",
    white: "/images/CMG-LOGO.webp",
    footer: "/images/CMG-LOGO-FOOTER.webp",
    favicon: "/images/icon.png",
    og: "/images/favicon_LG.webp",
  },

  // ---- Social ---------------------------------------------------------
  social: {
    facebook: "https://www.facebook.com/people/Commonwealth-Migration-Canada/61593464346589/",
    instagram: "https://www.instagram.com/commonwealthmigration",
    linkedin: "https://www.instagram.com/commonwealthmigration",
    youtube: "https://www.youtube.com/@Commonwealthmigration",
  },

  successVideos: [],

  // ---- Default metadata (used by lib/seo.js) --------------------------
  meta: {
    titleTemplate: `%s | ${brandName}`,
    defaultTitle: "Immigration Consultant Brampton | Canada Immigration Guidance",
    defaultDescription:
      "Looking for an immigration consultant in Brampton? Compare Express Entry, PNP, work, study and family routes with Canada-wide guidance and official sources.",
    keywords: [
      "Canadian immigration",
      "Express Entry",
      "immigration consultants",
      "study permit",
      "work permit",
      "PNP",
      "LMIA",
      "licensed RCIC",
    ],
    ogImage: "/images/favicon_LG.webp",
    locale: "en_CA",
  },

  // ---- CTA strategy (centralized labels/links) ------------------------
  ctas: {
    primary: { label: "Book a Consultation", href: "/contact/book-immigration-consultation-canada" },
    urgent: { label: "Book Urgent Consultation", href: "/assessment/free-canada-immigration-assessment" },
    assessment: { label: "Free Assessment", href: "/assessment/free-canada-immigration-assessment" },
    payment: { label: "Make Payment", href: "/contact/pay-immigration-consultation-canada" },
    tools: { label: "Free Tools", href: "/tools/canada-immigration-calculators" },
  },

  // ---- Legal / compliance links --------------------------------------
  legal: {
    privacy: { label: "Privacy Policy", href: "/legal/privacy-policy" },
    terms: { label: "Terms of Use", href: "/legal/terms-of-service" },
    disclaimer: { label: "Disclaimer", href: "/legal/canada-immigration-disclaimer" },
    refund: { label: "Refund Policy", href: "/legal/refund-policy" },
  },

  disclaimer:
    "Content on this site is general information only and does not constitute legal advice or a guarantee of visa or permanent-residence approval. Outcomes depend on individual circumstances and current Immigration, Refugees and Citizenship Canada (IRCC) requirements.",
};

/** Plain-text support email (no mailto formatting). */
export { supportEmail };

export default site;
