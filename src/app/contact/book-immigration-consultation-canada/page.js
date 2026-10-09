import { buildMetadata, serializeJsonLd } from "@/lib/seo";
import { ArrowUpRight, MapPin } from "lucide-react";
import ReferenceServicePage from "@/components/home/ReferenceServicePage";
import { pageStructuredData } from "@/components/templates/ContentPage";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { site } from "@/config/site";

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
      <ReferenceServicePage page={page}>
        <div className="grid gap-4">
          <aside className="grid gap-3 rounded-[18px] border border-[var(--template-border)] bg-[var(--template-surface)] p-4 shadow-[0_8px_24px_color-mix(in_srgb,var(--template-ink)_5%,transparent)]" aria-label="Brampton office location">
            <div className="flex items-start gap-3">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[color-mix(in_srgb,var(--template-primary)_12%,transparent)] text-[var(--template-primary)]">
                <MapPin size={20} aria-hidden="true" />
              </span>
              <div className="grid gap-1">
                <h3 className="m-0 text-[16px] font-extrabold text-[var(--template-ink)]">Visit our Brampton office</h3>
                <p className="m-0 text-[13px] leading-[1.6] text-[var(--template-muted)]">{site.address.full}</p>
              </div>
            </div>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-[13px] font-extrabold text-[var(--template-primary)] no-underline transition-colors hover:text-[var(--template-accent)]"
            >
              View our location on Google Maps <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </aside>
          <ConsultationForm />
        </div>
      </ReferenceServicePage>
      {pageStructuredData(page).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(obj) }} />
      ))}
    </>
  );
}
