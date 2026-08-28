import "react-chatbot-kit/build/main.css";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { site } from "@/config/site";
import { theme, themeCssVars, templateThemeCssVars } from "@/config/theme";
import { buildMetadata } from "@/lib/seo";
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
  icons: {
    icon: "/images/favicon.webp",
    shortcut: "/images/favicon.webp",
    apple: "/images/apple-icon.png",
  },
};

export const viewport = {
  themeColor: theme.colors.primary,
  width: "device-width",
  initialScale: 1,
};

/** Sitewide Organization + WebSite structured data. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: [site.tradingName, site.shortName].filter(Boolean),
  description: site.description,
  url: site.url,
  ...(site.email.includes("@") ? { email: site.email } : {}),
  ...(site.phone.replace(/\D/g, "").length >= 7 ? { telephone: site.phone } : {}),
  priceRange: "$$",
  currenciesAccepted: "CAD",
  areaServed: { "@type": "Country", name: site.address.country },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    ...(site.address.region ? { addressRegion: site.address.region } : {}),
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  sameAs: Object.values(site.social).filter(Boolean),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "en-CA",
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
        <a href="#main-content" className="skip-link absolute left-4 top-4 z-100 -translate-y-24 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform focus:translate-y-0">
          Skip to main content
        </a>
        <ScrollProgressBar />
        <Header />
        <main id="main-content" className="site-theme flex-1 pb-12 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <WhatsAppBubble />
        <CallBubble />
        <ConsultationModal />
        <GuidedChatbot />
      </body>
    </html>
  );
}
