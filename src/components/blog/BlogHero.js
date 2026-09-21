import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { currentPagePath } from "@/config/pageRoutes";
import { HERO_SLIDES } from "@/lib/heroSlides";
import HeroCarousel from "@/components/home/HeroCarousel";
import HeroProofCardCarousel from "@/components/home/HeroProofCardCarousel";

/**
 * Shared hero for every page in the Resources area — the blog index, the
 * article routes and the Canada immigration news index.
 *
 * Two rules keep these pages on the sitewide look:
 *
 * 1. They must render inside `.cmg-template-home`. That class defines the
 *    `--ink` / `--primary` / `--muted` / `--border` tokens *and* switches the
 *    header onto the template skin (`body:has(.cmg-template-home)` in
 *    globals.css). Without it the header is a 1400px pill instead of 1220px
 *    and every `var(--…)` in the body resolves to nothing.
 *
 * 2. The hero markup below is copied verbatim from `ReferenceHomepage` and
 *    `ReferenceServicePage` — same section `before:`/`after:` layers, same
 *    `HeroCarousel` panel classes, same `hero-copy` wrapper, same h1/lead
 *    colour utilities. That is deliberate: `globals.css` drives the
 *    light-theme hero treatment through `html[data-theme="light"]
 *    .cmg-template-home .hero-copy h1` and `.hero::before`, and those
 *    selectors only line up if the structure matches. Two traps in
 *    particular, both of which were live bugs here:
 *
 *    - Do **not** add `!` to the h1 colour. The sitewide rule at
 *      `.cmg-template-home h1 { color: var(--ink) }` is unlayered and the
 *      light-theme override is `!important`; forcing
 *      `!text-[var(--template-on-primary)]` pins the title to white in both
 *      themes, which is unreadable on the light-washed hero.
 *    - The `before:content-['']` layer is required, not decoration — the
 *      light-theme wash in globals.css targets `.hero::before` and renders
 *      nothing without it.
 */

/** Button/link that understands the `btn`, `btn-primary` and `btn-secondary` classes. */
export function TemplateLink({ children, path, className = "", ...props }) {
  const buttonSurface = className.includes("btn-primary")
    ? "bg-[var(--primary)] text-[var(--template-on-primary)] shadow-[0_13px_28px_color-mix(in_srgb,var(--primary)_23%,transparent)] hover:bg-[var(--accent)]"
    : className.includes("btn-secondary")
      ? "border-[var(--border)] bg-transparent text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
      : "";
  const classes = className.split(/\s+/).includes("btn") ? `inline-flex items-center justify-center gap-[9px] min-h-12 border border-transparent rounded-[12px] px-5 py-[13px] font-extrabold text-[13px] leading-none transition-[transform,background,border-color,color] duration-[200ms] ease-[ease] hover:translate-y-[-2px] ${buttonSurface} ${className}` : className;
  return <Link href={currentPagePath(path)} className={classes.trim()} {...props}>{children}</Link>;
}

/**
 * Trust chips under the hero copy.
 *
 * The label lives in a `<span>` because `.cmg-template-home a { color: inherit }`
 * is unlayered CSS and therefore outranks any text-colour utility applied
 * directly to an anchor — colour written on the chip itself would silently do
 * nothing.
 */
function HeroChips({ chips }) {
  if (!chips?.length) return null;
  return (
    <div
      className="hero-trust grid grid-cols-[repeat(3,max-content)] gap-[10px] mt-6 max-[880px]:grid-cols-[repeat(3,minmax(0,1fr))] max-[880px]:gap-1.5 max-[620px]:flex max-[620px]:items-center max-[620px]:gap-3 max-[360px]:gap-2 max-[620px]:mt-[18px]"
      aria-label="Highlights"
    >
      {chips.map((chip) => {
        const Icon = chip.icon;
        return (
          <span
            className="trust-chip inline-flex min-w-0 items-center justify-center gap-2 whitespace-nowrap max-[620px]:!gap-1 max-[620px]:!text-[11px] max-[420px]:!text-[10px] max-[360px]:!text-[9px]"
            key={chip.label}
          >
            {Icon && <Icon className="shrink-0 max-[620px]:!h-[14px] max-[620px]:!w-[14px]" width={16} height={16} aria-hidden="true" />}
            {chip.label}
          </span>
        );
      })}
    </div>
  );
}

export default function BlogHero({
  eyebrow,
  title,
  lead,
  titleId = "blog-hero-title",
  chips = [],
  actions,
  children,
}) {
  return (
    <section
      className="hero reference-blog-hero relative isolate before:absolute before:z-[-2] before:pointer-events-none before:content-[''] after:absolute after:z-[-2] after:pointer-events-none after:content-[''] before:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_2%,transparent),color-mix(in_srgb,var(--bg)_52%,transparent)_145%)] after:top-[-180px] after:right-[-170px] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] after:blur-[80px] w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)]"
      aria-labelledby={titleId}
    >
      <div className="ambient a absolute z-[-1] size-[360px] rounded-full bg-[var(--primary)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] top-[2%] right-[15%]" aria-hidden="true" />
      <div className="ambient b absolute z-[-1] size-[360px] rounded-full bg-[var(--accent)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] bottom-[4%] left-[-8%] [animation-delay:-4s]" aria-hidden="true" />
      <HeroCarousel slides={HERO_SLIDES} className="hero-background-carousel z-[-3] w-full min-h-full rounded-[30px] border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow)]" />
      <div className="hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center max-[880px]:items-start gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto">
        <div className="hero-copy relative z-[2] min-w-0 max-[880px]:w-full text-[var(--template-on-primary)] reveal in">
          <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">{eyebrow}</p>
          <h1 id={titleId} className="max-w-[790px] text-[clamp(42px,2.2rem+3.4vw,66px)] !font-semibold max-[620px]:!font-extrabold !leading-[1.04] !tracking-[-.03em] max-[1120px]:!text-[clamp(36px,4.2vw,48px)] max-[620px]:!text-[clamp(24px,6.7vw,28px)] text-[var(--template-on-primary)] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent),0_1px_2px_color-mix(in_srgb,var(--cmg-template-deep-surface)_55%,transparent)]">{title}</h1>
          <p className="lead max-w-[620px] !mt-6 text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent)] text-[17px] leading-[1.8] max-[620px]:text-[15px]">{lead}</p>
          <div className="hero-actions flex flex-wrap gap-3 mt-[30px]">
            {actions ?? (
              <>
                <TemplateLink path={site.ctas.primary.href} className="btn btn-primary">
                  Book a Consultation
                  <ArrowRight width={18} height={18} aria-hidden="true" />
                </TemplateLink>
                <TemplateLink path={site.ctas.tools.href} className="btn btn-secondary">
                  Explore free tools
                  <ArrowUpRight width={18} height={18} aria-hidden="true" />
                </TemplateLink>
              </>
            )}
          </div>
          <HeroChips chips={chips} />
          {children}
        </div>

        <div className="hero-visual self-start relative w-full min-h-[530px] max-[880px]:static max-[880px]:min-h-0 max-[880px]:transform-none max-[880px]:mt-[26px] reveal in">
          <HeroProofCardCarousel />
        </div>
      </div>
    </section>
  );
}
