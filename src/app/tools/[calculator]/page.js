import { notFound } from "next/navigation";
import CalculatorDashboard from "@/components/tools/CalculatorDashboard";
import { CALCULATOR_PAGES, getCalculatorPage } from "@/data/calculatorPages";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CALCULATOR_PAGES.map(({ slug }) => ({ calculator: slug }));
}

export async function generateMetadata({ params }) {
  const { calculator } = await params;
  const page = getCalculatorPage(calculator);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/tools/${page.slug}/`,
  });
}

export default async function CalculatorRoute({ params }) {
  const { calculator } = await params;
  const page = getCalculatorPage(calculator);
  if (!page) notFound();
  return <CalculatorDashboard page={page} />;
}
