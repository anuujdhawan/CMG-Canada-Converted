import "react-chatbot-kit/build/main.css";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import { theme, themeCssVars, templateThemeCssVars } from "@/config/theme";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import WhatsAppBubble from "@/components/layout/WhatsAppBubble";
import CallBubble from "@/components/layout/CallBubble";
import ConsultationModal from "@/components/layout/ConsultationModal";
import GuidedChatbot from "@/components/chatbot/GuidedChatbot";

const manrope = localFont({
  src: "../../public/fonts/manrope-latin.woff2",
  weight: "200 800",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata = {
  title: {
    template: `%s | ${site.name}`,
    default: site.meta.defaultTitle,
  },
  metadataBase: site.url ? new URL(site.url) : undefined,
  ...buildMetadata({
    description: site.meta.defaultDescription,
    path: "/",
    keywords: site.meta.keywords,
  }),
  // Icons come from Next 16 file conventions in src/app/ (favicon.ico 16/32/48/64,
  // icon.png 192, apple-icon.png 180), not from metadata.icons. Google Search
  // dropped WebP/SVG favicon support in the Aug 2026 docs update (supported:
  // BMP, GIF, ICO, PNG, JPEG, PPM, TIFF), so every icon the head links must be a
  // supported format. The old /images/favicon.webp and the 1912x1140
  // /images/apple-icon.png are kept on disk but no longer referenced.
};

export const viewport = {
  themeColor: theme.colors.primary,
  width: "device-width",
  initialScale: 1,
};

/** Sitewide Organization + WebSite structured data. */
const structuredAddressLocality = site.address.city.split(",")[0].trim() || "Brampton";
const structuredAddressCountry = "CA";
const schemaAssetUrl = (value) => {
  if (!value) return "";
  return /^https?:\/\//i.test(value) ? value : absoluteUrl(value);
};
const organizationLogoUrl = schemaAssetUrl(site.logos.large);
const organizationImageUrl = schemaAssetUrl(site.meta.ogImage);
const organizationSameAs = Object.values(site.social).filter(Boolean);
const organizationContactPoint = [
  site.email.includes("@") ? { "@type": "ContactPoint", contactType: "customer support", email: site.email, areaServed: "CA", availableLanguage: ["English"] } : null,
  site.phone.replace(/\D/g, "").length >= 7 ? { "@type": "ContactPoint", contactType: "customer support", telephone: site.phone, areaServed: "CA", availableLanguage: ["English"] } : null,
].filter(Boolean);
// Stable @id for the licensed RCIC entity, shared by the Organization's
// `employee` reference and the Person node below.
const consultantSlug = site.rcic.consultant.name
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");
const consultantId = `${site.url}#${consultantSlug}`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}#organization`,
  name: site.name,
  alternateName: [site.tradingName, site.shortName].filter(Boolean),
  description: site.description,
  url: site.url,
  // Ties the business to the licence that authorises it to give immigration
  // advice — the entity link search engines use to resolve "licensed RCIC".
  employee: { "@id": consultantId },
  ...(site.email.includes("@") ? { email: site.email } : {}),
  ...(site.phone.replace(/\D/g, "").length >= 7 ? { telephone: site.phone } : {}),
  priceRange: "$$",
  currenciesAccepted: "CAD",
  areaServed: { "@type": "Country", name: "Canada" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: structuredAddressLocality,
    ...(site.address.region ? { addressRegion: site.address.region } : {}),
    ...(site.address.postal ? { postalCode: site.address.postal } : {}),
    addressCountry: structuredAddressCountry,
  },
  ...(organizationLogoUrl ? { logo: { "@type": "ImageObject", url: organizationLogoUrl } } : {}),
  ...(organizationImageUrl ? { image: organizationImageUrl } : {}),
  ...(organizationSameAs.length ? { sameAs: organizationSameAs } : {}),
  ...(organizationContactPoint.length ? { contactPoint: organizationContactPoint } : {}),
  knowsAbout: [
    "Express Entry",
    "Provincial Nominee Programs",
    "Canadian work permits",
    "Canadian study permits",
    "Family sponsorship",
    "Canadian citizenship",
    "Immigration refusals and appeals",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}#website`,
  name: site.name,
  url: site.url,
  inLanguage: "en-CA",
  publisher: { "@id": `${site.url}#organization` },
  about: { "@id": `${site.url}#organization` },
};

// ---- Licensed representative -------------------------------------------
// The practice's whole trust claim is "planned by a licensed RCIC", but the
// site previously emitted no Person node at all — so the credential existed in
// copy and nowhere in the structured data. This connects the business entity to
// a regulator-issued licence that Google can verify independently, and points
// `url`/`sameAs` at the licensee record on the CICC public register.
//
// Everything is derived from site.rcic so the licence number, the name and the
// register URL cannot drift out of sync with the visible page copy.
const consultantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": consultantId,
  name: site.rcic.consultant.name,
  honorificSuffix: "RCIC",
  jobTitle: site.rcic.consultant.role,
  // site.name already ends in a period ("…Group Inc."), so strip it before
  // appending sentence punctuation to avoid "Inc..".
  description: `${site.rcic.consultant.name} is a Regulated Canadian Immigration Consultant (RCIC) licensed by the ${site.rcic.regulator}, licence number ${site.rcic.number}, providing Canadian immigration services through ${site.name.replace(/\.$/, "")}.`,
  worksFor: { "@id": `${site.url}#organization` },
  url: site.rcic.profileUrl,
  sameAs: [site.rcic.profileUrl],
  knowsAbout: [
    "Express Entry",
    "Provincial Nominee Programs",
    "Canadian work permits",
    "Canadian study permits",
    "Family sponsorship",
    "Permanent residence",
    "Temporary residence",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Regulated Canadian Immigration Consultant (RCIC) licence",
    identifier: site.rcic.number,
    url: site.rcic.profileUrl,
    recognizedBy: {
      "@type": "Organization",
      name: "College of Immigration and Citizenship Consultants",
      alternateName: "CICC",
      url: site.rcic.regulatorUrl,
    },
  },
};

// Apply the persisted theme before the browser paints the page. Reading
// localStorage in ThemeToggle's effect alone causes a one-frame dark theme
// flash on refreshes when the saved preference is light.
const themeInitScript = `
  (function () {
    try {
      var savedTheme = window.localStorage.getItem("cmg-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        document.documentElement.dataset.theme = savedTheme;
      }
    } catch (_) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      style={{ ...themeCssVars, ...templateThemeCssVars }}
      className="h-full antialiased"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${manrope.className} flex min-h-full flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(consultantJsonLd) }}
        />
        <a href="#main-content" className="skip-link absolute left-4 top-4 z-100 -translate-y-24 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform focus:translate-y-0">
          Skip to main content
        </a>
        <ScrollProgressBar />
        <Header />
        <main id="main-content" className="site-theme flex-1 pb-12 min-[1120px]:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <WhatsAppBubble />
        <CallBubble />
        <ConsultationModal />
        <GuidedChatbot whatsappHref={whatsappUrl} />
      </body>
    </html>
  );
}
