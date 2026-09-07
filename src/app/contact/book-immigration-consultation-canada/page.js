import { buildMetadata } from "@/lib/seo";
import ReferenceServicePage from "@/components/home/ReferenceServicePage";
import { pageStructuredData } from "@/components/templates/ContentPage";
import ConsultationForm from "@/components/forms/ConsultationForm";

const pagePath = "/contact/book-immigration-consultation-canada";
const page = {
  path: pagePath,
  h1: "Book an Immigration Consultation in Brampton",
  seo: {
    title: "Book an Immigration Consultation in Brampton",
    description: "Book a focused Canadian immigration consultation in Brampton to discuss your pathway, documents, timeline and next steps.",
  },
  meta: { lastModified: "2026-09-07", priority: 0.8, status: "Content Ready" },
  hero: "# Book an Immigration Consultation in Brampton\n\nShare your Canadian immigration goal, current status and timeline so the team can prepare the right next step.",
  contentBlocks: [
    { type: "heading", level: 2, text: "Prepare for a focused immigration consultation" },
    { type: "paragraph", text: "Bring the facts that shape your situation: your current status, important dates, family details, education, work history, documents and any previous applications or refusals." },
    { type: "heading", level: 2, text: "What the consultation can help clarify" },
    { type: "paragraph", text: "Use the conversation to identify possible pathways, evidence gaps, deadlines and questions that should be checked against the current official requirements before you proceed." },
  ],
  headingOutline: [
    { level: 2, text: "Prepare for a focused immigration consultation" },
    { level: 2, text: "What the consultation can help clarify" },
  ],
  jsonLd: [],
};

export const metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: pagePath,
});

export default function BookImmigrationConsultationPage() {
  return (
    <>
      <ReferenceServicePage page={page}><ConsultationForm /></ReferenceServicePage>
      {pageStructuredData(page).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
