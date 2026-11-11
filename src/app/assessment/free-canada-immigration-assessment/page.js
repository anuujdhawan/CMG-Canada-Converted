import { buildMetadata, serializeJsonLd } from "@/lib/seo";
import { getPage } from "@/lib/sitePages";
import { pageStructuredData } from "@/components/templates/ContentPage";
import AssessmentForm from "@/components/forms/AssessmentForm";
import ReferenceServicePage from "@/components/home/ReferenceServicePage";

const pagePath = "/assessment/free-canada-immigration-assessment";
const page = getPage(pagePath);

export const metadata = buildMetadata({
  title: "Free Canada Immigration Assessment | Brampton RCIC",
  description: "Request a free Canada immigration assessment. Share your goal, status and timeline to identify routes to review, evidence gaps and next steps.",
  path: pagePath,
  keywords: [
    "free Canada immigration assessment",
    "Canada immigration eligibility assessment",
    "free PR pathway assessment Canada",
    "immigration consultant Brampton",
    "documents for an immigration assessment",
    "licensed RCIC profile review",
    "Canadian immigration options by status",
  ],
});

export default function FreeCanadaImmigrationAssessmentPage() {
  return (
    <>
      <ReferenceServicePage page={page}><AssessmentForm /></ReferenceServicePage>
      {pageStructuredData(page).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(obj) }} />
      ))}
    </>
  );
}
