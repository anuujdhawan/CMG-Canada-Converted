import Link from "next/link";
import { Activity, ArrowUpRight, ExternalLink, MapPin, ShieldCheck, UsersRound } from "lucide-react";
import HeroCardShell from "./HeroCardShell";

const PNP_PAGE_PATH = "/pnp-draws";

function shortDate(value) {
  const text = String(value || "—");
  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString("en-CA", { month: "short", day: "numeric" });
  }
  return text.replace(/,\s*\d{4}$/, "");
}

function signalLabel(draw) {
  const minimum = String(draw.minimum || "").trim();
  if (!minimum || /not published|n\/a/i.test(minimum)) return "Targeted";
  if (/^\d+(?:\.\d+)?$/.test(minimum)) return `${minimum} pts`;
  return minimum.length > 13 ? "Priority" : minimum;
}

function publishedInvitationTotal(draws) {
  return draws.reduce((total, draw) => {
    const invitations = Number(String(draw.invitations || "").replace(/[^\d]/g, ""));
    return Number.isFinite(invitations) ? total + invitations : total;
  }, 0);
}

export default function PnpDrawCard({ initialDraws = [] }) {
  const draws = initialDraws;
  const status = draws.length ? "ready" : "error";

  const representedProvinces = new Set(draws.map((draw) => draw.province || draw.provinceLabel)).size;
  const invitationTotal = publishedInvitationTotal(draws);
  const quickReadStats = [
    { value: draws.length || "—", label: "rounds", Icon: Activity },
    { value: representedProvinces || "—", label: "provinces", Icon: MapPin },
    { value: invitationTotal ? invitationTotal.toLocaleString("en-CA") : "—", label: "invites", Icon: UsersRound },
  ];

  return (
    <HeroCardShell ariaLabel="Latest Canadian PNP draw highlights" className="hero-draw-card hero-pnp-draw-card -translate-y-[50%] max-[880px]:!translate-y-0">
      <div className="hero-pnp-draw-card__eyebrows">
        <span className="hero-pnp-draw-card__eyebrow">
          <ShieldCheck className="text-[var(--cmg-template-primary-bright)]" width={15} height={15} aria-hidden="true" /> Official PNP data
        </span>
        <span className="hero-pnp-draw-card__status hero-live-feed" role="status" aria-label="Multiple PNP draw highlights">
          <span className="hero-live-feed__dot" aria-hidden="true" /> MULTIPLE HIGHLIGHTS
        </span>
      </div>

      <h2 className="hero-pnp-draw-card__title !mt-4 !max-w-none !text-[clamp(25px,2.2vw,31px)] !leading-[1.15] !tracking-[-0.028em] text-[var(--template-on-primary)] [text-wrap:balance] after:block after:mt-3 after:h-0.5 after:w-9 after:rounded-full after:bg-[linear-gradient(90deg,var(--primary),transparent)] after:content-[''] after:opacity-[.95]">Latest PNP draw highlights</h2>
      <p className="!mt-3 !max-w-none !text-[13px] !leading-[1.65] !tracking-[-0.01em] text-[color-mix(in_srgb,var(--template-on-primary)_74%,transparent)]">Compare recent provincial invitation rounds across Canada.</p>

      <div className="hero-pnp-draw-card__feed mt-4" aria-live="polite">
        {status === "error" ? (
          <div className="flex items-start gap-3 text-[13px] leading-[1.55] text-[color-mix(in_srgb,var(--template-on-primary)_76%,transparent)]">
            <ExternalLink className="mt-0.5 flex-none text-[var(--cmg-template-primary-bright)]" width={16} height={16} aria-hidden="true" />
            <span>PNP highlights are temporarily unavailable. <a className="font-bold text-[var(--template-on-primary)] underline underline-offset-4" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" target="_blank" rel="noopener noreferrer">Check official sources</a>.</span>
          </div>
        ) : (
          <div className="hero-pnp-draw-card__rows">
            {draws.map((draw) => (
              <div className="hero-pnp-draw-card__row" key={draw.id}>
                <div className="hero-pnp-draw-card__row-marker">
                <span className="hero-pnp-draw-card__province">{draw.abbreviation}</span>
                </div>
                <div className="min-w-0">
                  <p className="hero-pnp-draw-card__stream m-0 truncate">{draw.streamLabel || draw.stream}</p>
                  <p className="hero-pnp-draw-card__date m-0 mt-1">{shortDate(draw.date)}</p>
                </div>
                <div className="hero-pnp-draw-card__signal">
                  <p className="hero-pnp-draw-card__signal-label m-0">{signalLabel(draw)}</p>
                  <p className="hero-pnp-draw-card__invites m-0 mt-1 whitespace-nowrap">{draw.invitations || "—"} invited</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <section className="hero-pnp-draw-card__quick-read mt-5" aria-label="PNP activity quick read">
        <div className="hero-pnp-draw-card__quick-header">
          <div>
            <p className="hero-pnp-draw-card__quick-kicker m-0">Quick read</p>
            <h3 className="hero-pnp-draw-card__quick-title m-0 mt-1">Activity snapshot</h3>
          </div>
          <span className="hero-pnp-draw-card__snapshot">Live snapshot</span>
        </div>

        <div className="hero-pnp-draw-card__stats mt-3">
          {quickReadStats.map((stat) => (
            <div className="hero-pnp-draw-card__stat" key={stat.label}>
              <stat.Icon className="hero-pnp-draw-card__stat-icon" width={14} height={14} aria-hidden="true" />
              <p className="hero-pnp-draw-card__stat-value m-0">{stat.value}</p>
              <p className="hero-pnp-draw-card__stat-label m-0 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="hero-pnp-draw-card__note m-0 mt-3"><span>Planning note</span> Province-led selection means the stream and signal matter—not just the score.</p>
      </section>

      <div className="hero-pnp-draw-card__footer mt-auto">
        <span className="hero-pnp-draw-card__footer-status"><span aria-hidden="true" /> Official provincial rounds</span>
        <Link href={PNP_PAGE_PATH} className="hero-draw-card__cta">
          <span>Compare PNP draws</span>
          <span className="hero-draw-card__cta-icon" aria-hidden="true"><ArrowUpRight width={15} height={15} /></span>
        </Link>
      </div>
    </HeroCardShell>
  );
}
