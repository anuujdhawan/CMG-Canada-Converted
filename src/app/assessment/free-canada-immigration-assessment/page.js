import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/sitePages";
import { pageStructuredData } from "@/components/templates/ContentPage";
import AssessmentForm from "@/components/forms/AssessmentForm";
import ReferenceServicePage from "@/components/home/ReferenceServicePage";

const pagePath = "/assessment/free-canada-immigration-assessment";
const page = getPage(pagePath);

export const metadata = buildMetadata({
  title: "Free Canada Immigration Assessment | Brampton RCIC",
  description: "Get a free Canada immigration assessment in Brampton. Share your goal, status and timeline to identify possible pathways, document gaps and next steps.",
  path: pagePath,
  keywords: ["free Canada immigration assessment", "immigration consultant Brampton", "Canada immigration eligibility"],
});

export default function FreeCanadaImmigrationAssessmentPage() {
  return (
    <>
      <ReferenceServicePage page={page}><AssessmentForm /></ReferenceServicePage>
      {pageStructuredData(page).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
