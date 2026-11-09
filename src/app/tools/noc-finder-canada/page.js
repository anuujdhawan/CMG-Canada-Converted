import Link from "next/link";
import NocFinder from "@/components/tools/NocFinder";
import { pageStructuredData } from "@/components/templates/ContentPage";
import { buildMetadata, serializeJsonLd } from "@/lib/seo";

const pagePath = "/tools/noc-finder-canada";
const pageTitle = "Canada NOC Code Finder";
const pageDescription = "Search all 516 NOC 2021 unit groups by occupation title, 5-digit code or definition. Compare actual duties and verify the full official occupation profile.";
const structuredPage = {
  path: pagePath,
  h1: pageTitle,
  seo: { description: pageDescription },
};

export const metadata = buildMetadata({
  title: "NOC Finder Canada | Search 516 Occupations",
  description: pageDescription,
  path: pagePath,
  keywords: ["NOC finder Canada", "NOC code search", "TEER category Canada"],
});

export default function NocFinderPage() {
  return (
    <>
      <main id="main-content" className="cmg-template-home cmg-template-service bg-[var(--bg)] text-[var(--ink)] [--container:min(1220px,calc(100%-40px))] max-[880px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)]">
        <section className="section relative z-[1] py-16 sm:py-20 lg:py-24">
          <div className="section-inner mx-auto w-[var(--container)]">
            <header className="mx-auto max-w-3xl text-center">
              <p className="eyebrow m-0 mb-4 text-[var(--primary)] text-xs font-extrabold uppercase tracking-[.16em]">Occupation classification guide</p>
              <h1 className="m-0 text-[clamp(34px,5vw,58px)] font-semibold leading-[1.08] tracking-[-.03em] text-[var(--ink)]">Canada NOC Code Finder</h1>
              <p className="mx-auto mt-5 max-w-[72ch] text-base leading-[1.8] text-[var(--muted)]">
                Search all 516 NOC 2021 Version 1.0 unit groups by occupation title, 5-digit code, or a phrase from the classification definition. Treat a match as a starting point and compare the complete official profile with the work you actually performed.
              </p>
            </header>

            <section className="mx-auto mt-10 max-w-4xl" aria-labelledby="noc-search-title">
              <h2 id="noc-search-title" className="sr-only">Search all 516 NOC occupations</h2>
              <NocFinder />
            </section>

            <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-2 md:gap-12">
              <section aria-labelledby="noc-match-title">
                <h2 id="noc-match-title" className="m-0 text-2xl font-semibold leading-tight text-[var(--ink)]">How to choose a possible NOC code</h2>
                <ol className="mt-5 list-decimal space-y-3 pl-5 text-[15px] leading-[1.75] text-[var(--muted)] marker:font-bold marker:text-[var(--primary)]">
                  <li>Describe the work you actually performed during the period you plan to claim.</li>
                  <li>Search occupation titles, codes, and definitions to identify possible unit groups; a job title alone is not enough.</li>
                  <li>Read the official lead statement, main duties, example titles, exclusions, and employment requirements, then compare them with your responsibilities.</li>
                  <li>Keep employer letters and work records that support the duties, dates and hours you report.</li>
                </ol>
              </section>

              <section aria-labelledby="noc-teer-title">
                <h2 id="noc-teer-title" className="m-0 text-2xl font-semibold leading-tight text-[var(--ink)]">How NOC codes and TEER are organized</h2>
                <p className="mt-5 text-[15px] leading-[1.75] text-[var(--muted)]">
                  A NOC 2021 code has five digits. The first digit identifies a broad occupational category, and the second identifies its TEER category. TEER describes training, education, experience and responsibilities associated with the occupational group; it is not a measure of your personal education level.
                </p>
                <p className="mt-4 text-[15px] leading-[1.75] text-[var(--muted)]">
                  A matching title or TEER category does not establish eligibility for Express Entry, a work permit, an LMIA, or a provincial program. Each program applies its own rules to the applicant’s work, documents and circumstances, so confirm the current program requirements separately.
                </p>
              </section>
            </div>

            <section className="mx-auto mt-14 max-w-5xl rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6 sm:p-8" aria-labelledby="noc-source-title">
              <h2 id="noc-source-title" className="m-0 text-xl font-semibold text-[var(--ink)]">Dataset source and full occupation profiles</h2>
              <p className="mt-3 max-w-[78ch] text-[15px] leading-[1.75] text-[var(--muted)]">
                The searchable list uses the 516 unit groups and short class definitions in the NOC 2021 Version 1.0 classification structure, published jointly by Statistics Canada and Employment and Social Development Canada. For complete occupation profiles and current details, use the Government of Canada’s official NOC search.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                <a className="inline-flex font-bold text-[var(--primary)] underline underline-offset-2" href="https://www.statcan.gc.ca/en/subjects/standard/noc/2021/introductionV1" target="_blank" rel="noopener noreferrer">
                  Read the NOC 2021 structure and TEER definitions
                </a>
                <a className="inline-flex font-bold text-[var(--primary)] underline underline-offset-2" href="https://noc.esdc.gc.ca/" target="_blank" rel="noopener noreferrer">
                  Search the official NOC occupation profiles
                </a>
              </div>
            </section>

            <nav className="mx-auto mt-10 flex max-w-5xl flex-wrap gap-x-6 gap-y-3 text-sm font-semibold" aria-label="Related immigration planning pages">
              <Link className="text-[var(--primary)] underline underline-offset-2" href="/immigrate/express-entry">Express Entry guide</Link>
              <Link className="text-[var(--primary)] underline underline-offset-2" href="/tools/crs-calculator-canada">CRS calculator</Link>
              <Link className="text-[var(--primary)] underline underline-offset-2" href="/tools/canada-immigration-calculators">All immigration tools</Link>
            </nav>
          </div>
        </section>
      </main>
      {pageStructuredData(structuredPage, { includeFaq: false }).map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      ))}
    </>
  );
}
