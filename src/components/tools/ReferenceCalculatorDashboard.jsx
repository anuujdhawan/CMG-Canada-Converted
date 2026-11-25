import Link from "next/link";
import { BookOpen, Calculator, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { CALCULATOR_NAV_GROUPS } from "@/data/calculatorCatalog";
import { criteriaSources } from "@/data/referenceProvincialCriteria";
import { pointsSources } from "@/data/referenceProvincialPoints";
import ReferenceRcipCalculator from "./ReferenceRcipCalculator";
import ReferenceFederalCalculators from "./ReferenceFederalCalculators";
import ReferenceProvincialCalculators from "./ReferenceProvincialCalculators";

const rcipGuide = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-franco-pilots/rural-immigration.html";
const presentation = {
  "clb-calculator": ["CLB Calculator", "Convert approved test scores to CLB (English) or NCLC (French) for each language ability."],
  "express-entry-crs-calculator": ["Express Entry CRS Calculator", "Estimate your Express Entry ranking score using the published CRS rules.", "IRCC CRS scoring criteria"],
  "fsw-67-point-calculator": ["FSW 67-Point Calculator", "Estimate your points on the Federal Skilled Worker selection grid.", "IRCC Federal Skilled Worker selection factors"],
  "ontario-oinp-calculator": ["Ontario OINP Calculator", "Review Ontario Workforce Priority eligibility and estimate your EOI score for the selected route.", "Ontario Workforce Priority stream · O. Reg. 422/17"],
  "manitoba-mpnp-calculator": ["Manitoba MPNP Calculator", "Check Skilled Worker Overseas self-assessment points and switch to the separate EOI ranking grid.", "Manitoba Skilled Worker Overseas points grid"],
  "alberta-aaip-calculator": ["Alberta AAIP Calculator", "Check your Alberta worker stream, then estimate your points on the 100-point Worker EOI grid.", "Alberta Worker EOI points grid"],
  "saskatchewan-sinp-calculator": ["Saskatchewan SINP Calculator", "Estimate points for the International Skilled Worker grid and check eligibility for your chosen SINP pathway.", "Saskatchewan points assessment grid"],
  "british-columbia-pnp-calculator": ["British Columbia PNP Calculator", "Check the BC Skills Immigration stream and estimate Skilled Worker registration points.", "WelcomeBC Skills Immigration program guide"],
  "new-brunswick-pnp-calculator": ["New Brunswick PNP Calculator", "Check New Brunswick Skilled Worker criteria or select a stream with its own selection grid.", "Immigration New Brunswick · Skilled Worker and stream guides"],
  "newfoundland-and-labrador-pnp-calculator": ["Newfoundland & Labrador PNP Calculator", "Review Newfoundland and Labrador Skilled Worker criteria or select the Express Entry Skilled Worker grid.", "NLPNP Skilled Worker and Express Entry Skilled Worker guides"],
  "nova-scotia-nsnp-calculator": ["Nova Scotia NSNP Calculator", "Review the job, candidate, employer and language conditions for your Nova Scotia stream.", "Live in Nova Scotia · NSNP Skilled Worker guide"],
  "prince-edward-island-pnp-calculator": ["Prince Edward Island PNP Calculator", "Check the Prince Edward Island workforce stream and estimate points using its category-specific EOI grid.", "PEI Workforce Application Guide"],
  "rural-community-immigration-pilot-calculator": ["Rural Community Immigration Pilot Calculator", "Check the rural immigration rules for the selected community and recommendation date.", "IRCC rural immigration pilot and permanent program · Steinbach", rcipGuide],
  "northwest-territories-ntnp-calculator": ["Northwest Territories Nominee Calculator", "Estimate a Northwest Territories Employer-Driven EOI score, with separate checks for the selected stream.", "NWT Employer-Driven EOI grid"],
  "yukon-nominee-program-calculator": ["Yukon Nominee Program Calculator", "Review Yukon candidate and employer requirements, then check the priorities for the relevant EOI intake.", "Government of Yukon · EOI process and Skilled Worker criteria"],
};

function CalculatorNav({ activeSlug }) {
  return (
    <nav className="ref-sidebar-nav" aria-label="Immigration calculators">
      {CALCULATOR_NAV_GROUPS.map((group) => (
        <div key={group.category}>
          <h3>{group.category}</h3>
          <ul>
            {group.items.map(({ slug, label }) => (
              <li key={slug}>
                <Link href={`/tools/${slug}`} prefetch={false} aria-current={slug === activeSlug ? "page" : undefined}>
                  {label}{slug === activeSlug && <ChevronRight aria-hidden />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function CalculatorSidebar({ activeSlug }) {
  return (
    <aside className="ref-panel ref-sidebar">
      <h2 className="ref-sidebar-title"><span className="ref-icon-box"><Calculator aria-hidden /></span>Calculators</h2>
      <CalculatorNav activeSlug={activeSlug} />
      <details className="ref-sidebar-disclosure">
        <summary><span className="ref-icon-box"><Calculator aria-hidden /></span>Browse calculators<ChevronDown aria-hidden /></summary>
        <CalculatorNav activeSlug={activeSlug} />
      </details>
    </aside>
  );
}

function getHeroBadge(page) {
  if (page.type === "clb") return "IELTS · CELPIP · PTE Core · TEF · TCF";
  if (page.type === "crs") return "Express Entry · CRS scoring";
  if (page.type === "fsw") return "Federal Skilled Worker · 67-point grid";
  if (page.type === "pnp") return `${page.program?.shortName || "Provincial nominee"} · Pathway review`;
  return "Rural community pathway · Eligibility review";
}

function HeroTitle({ title }) {
  const calculatorSuffix = title.match(/^(.*)\s+(Calculator)$/);
  if (!calculatorSuffix) return title;

  return <>{calculatorSuffix[1]}{" "}<span className="ref-hero-title-accent">{calculatorSuffix[2]}</span></>;
}

export default function ReferenceCalculatorDashboard({ page }) {
  const [title, description, sourceTitle, sourceUrl] = presentation[page.slug];
  const source = sourceUrl || pointsSources[page.slug] || criteriaSources[page.slug] || page.stream?.sourceUrl || page.sourceUrl || page.program?.source?.url;
  const breadcrumbGroup = page.group.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
  return (
    <div className="ref-calculator" data-kind={page.type} data-calculator={page.slug}>
      <header className="ref-hero" data-long={title.length > 20 || undefined} data-very-long={title.length > 34 || undefined}>
        <div className="ref-hero-art" aria-hidden="true" />
        <div className="ref-hero-watermark" aria-hidden="true"><span /></div>
        <div className="ref-hero-copy">
          <nav className="ref-hero-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/tools">Tools</Link><span aria-hidden="true">/</span></li>
              <li><span>{breadcrumbGroup}</span><span aria-hidden="true">/</span></li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
          <h1 aria-label={title}><HeroTitle title={title} /></h1>
          <p>{description}</p>
          <div className="ref-hero-badges" aria-label="Calculator details">
            <span>{getHeroBadge(page)}</span>
            <span>Free · Instant result</span>
          </div>
        </div>
        <span className="ref-hero-trust-label" aria-hidden="true">RCIC-REVIEWED TOOLS</span>
      </header>
      <div className="ref-grid">
        <CalculatorSidebar activeSlug={page.slug} />
        {page.type === "rcip"
          ? <ReferenceRcipCalculator />
          : page.type === "pnp"
            ? <ReferenceProvincialCalculators page={page} />
            : <ReferenceFederalCalculators page={page} />}
      </div>
      <footer className="ref-source">
        <span><BookOpen aria-hidden />Rules reviewed 20 Nov 2026 · Check official {page.type === "clb" ? "test " : ""}requirements before applying</span>
        {source && <a href={source} target="_blank" rel="noreferrer">{sourceTitle || page.sourceLabel || "Official program guide"}<ExternalLink aria-hidden /></a>}
      </footer>
    </div>
  );
}
