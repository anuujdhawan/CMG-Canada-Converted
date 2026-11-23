import { CALCULATOR_PAGES } from "@/data/calculatorCatalog";
import { PNP_PROGRAMS } from "@/data/pnp-programs";

export { CALCULATOR_PAGES, CALCULATOR_PATHS, CALCULATOR_SLUGS } from "@/data/calculatorCatalog";

export function getCalculatorPage(slug) {
  const page = CALCULATOR_PAGES.find((item) => item.slug === slug);
  if (!page) return null;
  if (page.type !== "pnp") return page;

  const program = PNP_PROGRAMS[page.programKey];
  const stream = program?.streams?.find((item) => item.key === page.streamKey);
  if (!program || !stream) return null;
  return { ...page, program, stream };
}
