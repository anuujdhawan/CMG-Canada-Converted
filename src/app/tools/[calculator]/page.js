import { notFound } from "next/navigation";
import CalculatorToolPage from "@/components/tools/CalculatorToolPage";
import { calculatorTools, getCalculatorTool } from "@/data/calculatorTools";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return calculatorTools.map(({ slug }) => ({ calculator: slug }));
}

export async function generateMetadata({ params }) {
  const { calculator } = await params;
  const tool = getCalculatorTool(calculator);
  if (!tool) return {};

  return buildMetadata({
    title: tool.metaTitle,
    description: tool.description,
    path: `/tools/${tool.slug}`,
    keywords: tool.keywords,
  });
}

export default async function CalculatorPage({ params }) {
  const { calculator } = await params;
  const tool = getCalculatorTool(calculator);
  if (!tool) notFound();

  return <CalculatorToolPage calculator={tool} />;
}
