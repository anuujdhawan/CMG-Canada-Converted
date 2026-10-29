import { buildMetadata, serializeJsonLd } from "@/lib/seo";
import OntarioPrLanding from "@/components/landing/OntarioPrLanding";
import "@/styles/ontario-pr.css";

const pagePath = "/ontario-pr";

const pageMetadata = buildMetadata({
  title: "Canada PR through Ontario | OINP & Express Entry | CMG",
  description:
    "Ontario's nominee programme changed in 2026. Find out which route fits your profile in a free 30-minute consultation with a CICC-regulated RCIC in Brampton.",
  path: pagePath,
  keywords: ["Ontario OINP", "Ontario Workforce Priority stream", "Express Entry Ontario", "Canada PR consultation"],
});

const pageTitle = "Canada PR through Ontario | OINP & Express Entry | CMG";
export const metadata = {
  ...pageMetadata,
  title: { absolute: pageTitle },
  openGraph: { ...pageMetadata.openGraph, title: pageTitle },
  twitter: { ...pageMetadata.twitter, title: pageTitle },
};

const bookingUrl = (() => {
  const configured = process.env.NEXT_PUBLIC_CMG_ONTARIO_BOOKING_URL?.trim();
  if (!configured) return "";
  try {
    const parsed = new URL(configured);
    return parsed.protocol === "https:" ? parsed.toString() : "";
  } catch {
    return "";
  }
})();

export default async function OntarioPrPage({ searchParams }) {
  const params = await searchParams;
  const variant = params?.v === "ee" ? "ee" : "oinp";

  return (
    <>
      <OntarioPrLanding variant={variant} bookingUrl={bookingUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is OINP still open?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. The Ontario Workforce Priority stream is active, and its expression of interest portal opened on August 4, 2026. Ontario closed eight former streams during its 2026 redesign. Intake details can change, so check the latest Ontario updates before taking your next step." },
            },
            {
              "@type": "Question",
              name: "What replaced the former OINP streams?",
              acceptedAnswer: { "@type": "Answer", text: "Ontario introduced the Workforce Priority stream, with pathways for foreign workers who have a qualifying Ontario job offer and a separate pathway for eligible self-employed physicians. The foreign-worker pathway covers occupations across NOC TEER categories 0 through 5." },
            },
            {
              "@type": "Question",
              name: "Do I need a job offer for Express Entry?",
              acceptedAnswer: { "@type": "Answer", text: "A job offer is not required for many Express Entry candidates. The federal programmes assess factors such as age, education, skilled work experience and language ability. Ontario's employer-led route has different requirements." },
            },
            {
              "@type": "Question",
              name: "How many points is an Ontario nomination worth?",
              acceptedAnswer: { "@type": "Answer", text: "An accepted provincial nomination in Express Entry adds 600 points to a candidate's Comprehensive Ranking System score. The nomination is one part of a federal process; IRCC makes the final decision." },
            },
            {
              "@type": "Question",
              name: "What is the difference between OINP and Express Entry?",
              acceptedAnswer: { "@type": "Answer", text: "Express Entry is a federal system that manages profiles for eligible economic programmes. OINP is Ontario's provincial nomination programme. A nomination can add points to an eligible Express Entry profile, but does not itself grant permanent residence." },
            },
            {
              "@type": "Question",
              name: "Can I apply without a consultant?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. Individuals can pursue these programmes directly. Some people choose a licensed representative when their history is complex, a previous application was refused or they want professional help preparing their file." },
            },
            {
              "@type": "Question",
              name: "How much does a consultation cost?",
              acceptedAnswer: { "@type": "Answer", text: "The first consultation is free and runs for 30 minutes. Any professional fees depend on the route and file complexity and are confirmed in writing before an engagement begins." },
            },
            {
              "@type": "Question",
              name: "How long does the process take?",
              acceptedAnswer: { "@type": "Answer", text: "Timelines differ by route and change with processing volumes. A consultation can discuss the steps and current estimates that apply to your circumstances." },
            },
          ],
        }) }}
      />
    </>
  );
}
