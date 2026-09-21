import { buildMetadata } from "@/lib/seo";
import NewsIndexPage from "@/components/blog/NewsIndexPage";

const LEAD = "Track policy changes, program announcements and processing updates that affect Canadian immigration applications — each one linked to the official source it is based on.";

export const metadata = buildMetadata({
  title: "Canada Immigration News | IRCC Updates",
  description: "Current Canada immigration news, IRCC updates and policy changes explained for applicants, families, students and employers.",
  path: "/canada-immigration-news",
  keywords: ["Canada immigration news", "IRCC news", "Canada visa news", "Canada PR news"],
});

export default function CanadaImmigrationNewsPage() {
  return <NewsIndexPage lead={LEAD} />;
}
