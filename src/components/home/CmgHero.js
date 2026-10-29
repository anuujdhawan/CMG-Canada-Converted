import Link from "next/link";
import HeroBackground from "./HeroBackground";
import HeroProofCardCarousel from "./HeroProofCardCarousel";

const AMBIENT_CLASSES = {
  primary: "ambient a absolute z-[-1] size-[360px] rounded-full bg-[var(--primary)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] top-[2%] right-[15%] max-[880px]:hidden",
  accent: "ambient b absolute z-[-1] size-[360px] rounded-full bg-[var(--accent)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] bottom-[4%] left-[-8%] [animation-delay:-4s] max-[880px]:hidden",
};

const HERO_CLASSES = "hero group/hero relative isolate before:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_2%,transparent),color-mix(in_srgb,var(--bg)_52%,transparent)_145%)] after:top-[-180px] after:right-[-170px] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] after:blur-[80px] w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)] before:absolute before:z-[-2] before:pointer-events-none before:content-[''] after:absolute after:z-[-2] after:pointer-events-none after:content-['']";
const HERO_LAYOUT_CLASSES = "hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center max-[880px]:items-start gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto";
const HERO_COPY_CLASSES = "hero-copy relative z-[2] min-w-0 max-[880px]:w-full text-[var(--template-on-primary)] reveal in";
const HERO_TITLE_CLASSES = "max-w-[790px] max-[1120px]:!text-[clamp(36px,4.2vw,48px)] max-[620px]:!text-[clamp(24px,6.7vw,28px)] max-[1023.98px]:text-center max-[1023.98px]:mx-auto text-[clamp(42px,2.2rem+3.4vw,66px)] font-semibold max-[620px]:!font-extrabold leading-[1.04] tracking-[-.03em] text-[var(--template-on-primary)] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent),0_1px_2px_color-mix(in_srgb,var(--cmg-template-deep-surface)_55%,transparent)] text-[var(--ink)]";
const HERO_LEAD_CLASSES = "lead max-w-[680px] max-[1023.98px]:text-center max-[1023.98px]:mx-auto !mt-6 text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent)] text-[17px] leading-[1.8] max-[620px]:text-[15px]";
const HERO_ACTION_BASE = "inline-flex items-center justify-center gap-[9px] min-h-12 border border-transparent rounded-[12px] px-5 py-[13px] font-extrabold text-[13px] leading-none transition-[transform,background,border-color,color] duration-[200ms] ease-[ease] hover:translate-y-[-2px]";

function HeroAction({ action, variant }) {
  if (!action) return null;

  const surface = variant === "primary"
    ? "bg-[var(--primary)] text-[var(--template-on-primary)] shadow-[0_13px_28px_color-mix(in_srgb,var(--primary)_23%,transparent)] hover:bg-[var(--accent)]"
    : "border-[var(--border)] bg-transparent text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)]";

  return (
    <Link href={action.href} className={`${HERO_ACTION_BASE} ${surface} btn btn-${variant} ${action.className || ""}`.trim()}>
      {action.label}
      {action.icon}
    </Link>
  );
}

/**
 * Shared homepage hero. Keep its image, atmosphere, copy layout, actions, and
 * proof-card carousel in one place so campaign pages inherit the same design.
 */
export default function CmgHero({
  id = "hero-title",
  className = "",
  eyebrow,
  title,
  lead,
  primaryAction,
  secondaryAction,
  trustContent,
  trustClassName = "",
  initialCardIndex = 0,
  pagePath = "/",
  ariaLabel = "Commonwealth Migration Group highlights",
}) {
  return (
    <section className={`cmg-template-home ${HERO_CLASSES} ${className}`.trim()} aria-labelledby={id}>
      <div className={AMBIENT_CLASSES.primary} aria-hidden="true" />
      <div className={AMBIENT_CLASSES.accent} aria-hidden="true" />
      <HeroBackground />
      <div className={HERO_LAYOUT_CLASSES}>
        <div className={HERO_COPY_CLASSES}>
          <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">{eyebrow}</p>
          <h1 id={id} className={HERO_TITLE_CLASSES}>{title}</h1>
          <p className={HERO_LEAD_CLASSES}>{lead}</p>
          {(primaryAction || secondaryAction) ? (
            <div className="hero-actions flex flex-wrap gap-3 mt-[30px] max-[768px]:!flex max-[768px]:!flex-col max-[768px]:!items-center max-[768px]:!gap-3 max-[768px]:!mt-6">
              <HeroAction action={primaryAction} variant="primary" />
              <HeroAction action={secondaryAction} variant="secondary" />
            </div>
          ) : null}
          {trustContent ? <div className={trustClassName}>{trustContent}</div> : null}
        </div>
        <div className="hero-visual self-start relative w-full min-h-[530px] max-[880px]:static max-[880px]:min-h-0 max-[880px]:mt-[26px] reveal in">
          <HeroProofCardCarousel pagePath={pagePath} ariaLabel={ariaLabel} initialCardIndex={initialCardIndex} />
        </div>
      </div>
    </section>
  );
}
