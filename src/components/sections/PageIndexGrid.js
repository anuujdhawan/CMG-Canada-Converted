import Link from "next/link";
import { ArrowRight, Calculator, MapPin } from "lucide-react";
import { getAllPages, segmentLabel } from "@/lib/sitePages";
import { rebrand } from "@/components/templates/ContentPage";
import PathwayCard from "@/components/cards/PathwayCard";

/** Shorten an SEO title for card display without gutting its keywords. */
function shortTitle(title) {
  // Keep everything before a trailing "| Licensed RCIC"-style suffix
  const cut = rebrand(title).split("|")[0].trim();
  return cut.length > 70 ? `${cut.slice(0, 67).trimEnd()}…` : cut;
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

/**
 * For hub routes (e.g. /tools, /blog, /immigration/pnp) renders a grid of the
 * direct child pages — deep, natural internal links that help crawlers index
 * every page. Returns null for non-hub routes.
 */
export default function PageIndexGrid({ pathname }) {
  const pages = getAllPages();
  const base = pathname === "/" ? "" : pathname;
  const children = pages
    .filter((p) => {
      if (base === "" || p.path === "/") return false;
      if (!p.path.startsWith(`${base}/`)) return false;
      const rest = p.path.slice(base.length + 1).split("/");
      return rest.length === 1; // direct children only
    })
    .sort((a, b) => Number(b.meta.priority) - Number(a.meta.priority) || a.path.localeCompare(b.path));

  if (children.length < 3) return null;
  // The rewritten URL system intentionally uses keyword-led routes, so the
  // homepage is no longer a shallow parent for the entire inventory. Keep the
  // homepage index useful without rendering all 137 pages as one giant grid.
  const visibleChildren = base === "" ? children.slice(0, 12) : children;

  const isCities = base === "/immigration-consultant";
  const isTools = base === "/tools";
  const Icon = isTools ? Calculator : isCities ? MapPin : null;

  return (
    <section aria-label="Related pages" className="reference-index-grid border-t border-[var(--template-border)] bg-[var(--template-bg)] text-[var(--template-ink)]">
      <div className="reference-index-grid__inner mx-auto w-[min(100%-2rem,var(--container,1220px))] py-[clamp(4rem,8vw,8rem)] max-[640px]:w-[min(calc(100%-1.5rem),var(--container,1220px))] max-[640px]:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] uppercase">
              {base === "/blog" ? "Latest articles" : isCities ? "Serving cities across Canada" : "Explore"}
            </p>
            <h2>
              {base === "/blog" ? "Read the guides, then decide" : `${segmentLabel(base.split("/").pop())} guides`}
            </h2>
          </div>
          <Link href={base} className="reference-index-grid__view-all text-[var(--template-ink)] mt-6 inline-flex items-center gap-[0.55rem] text-[0.82rem] font-extrabold no-underline transition-[color,transform] duration-[180ms] ease-[ease] hover:text-[var(--template-primary)] hover:translate-x-[3px] focus-visible:text-[var(--template-primary)] focus-visible:translate-x-[3px]">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="reference-index-grid__cards mt-[clamp(2.4rem,5vw,4.5rem)] grid grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-[.8rem] gap-4">
          {visibleChildren.map((page, index) => {
            const published = formatDate(page.meta.lastModified);
            const eyebrow = base === "/blog"
              ? published || "Latest guide"
              : isCities
                ? "Canada-wide service"
                : `${segmentLabel(base.split("/").pop())} guide`;
            return (
              <PathwayCard
                key={page.path}
                href={page.path}
                label={shortTitle(page.h1)}
                eyebrow={eyebrow}
                description={rebrand(page.seo.description)}
                icon={Icon}
                index={index}
                actionLabel="Read guide"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
