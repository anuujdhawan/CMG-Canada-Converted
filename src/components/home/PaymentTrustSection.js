import Image from "next/image";
import { BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";

const TRUST_PLATFORMS = [
  {
    name: "Stripe",
    logo: "/images/payments/stripe-logo.jpeg",
    logoAlt: "Stripe",
    logoWidth: 694,
    logoHeight: 288,
    logoDisplayWidth: 176,
    eyebrow: "Secure online payments",
    description: "Stripe processes online card payments. Review your invoice and service agreement before paying.",
    logoClassName: "max-w-[176px]",
  },
  {
    name: "DocuSign",
    logo: "/images/payments/docusign-logo.jpeg",
    logoAlt: "DocuSign",
    logoWidth: 738,
    logoHeight: 261,
    logoDisplayWidth: 300,
    eyebrow: "Sign agreements online",
    description: "Your service agreement is signed electronically through DocuSign, with a signed copy sent to you.",
    logoClassName: "max-w-[300px]",
  },
  {
    name: "Officio",
    logo: "/images/payments/officio-logo-transparent.png",
    logoAlt: "Officio",
    logoWidth: 300,
    logoHeight: 102,
    logoDisplayWidth: 190,
    eyebrow: "Organized case management",
    description: "The practice uses Officio case-management software to organize file records and tasks.",
    logoClassName: "max-w-[190px]",
  },
];

const ASSURANCE_POINTS = [
  [ShieldCheck, "Clear payment handoff"],
  [FileCheck2, "Signed agreement copy"],
  [BadgeCheck, "Organized case record"],
];

export default function PaymentTrustSection() {
  return (
    <section
      id="payment-security"
      className="payment-trust-section section relative z-[1] overflow-hidden border-y border-[var(--border)] bg-[var(--surface-alt)] py-[86px] max-[880px]:py-[72px] max-[620px]:py-14"
      aria-labelledby="payment-security-title"
    >
      <div className="section-inner mx-auto w-[var(--container)]">
        <header className="payment-trust-section__intro grid grid-cols-[.9fr_1.1fr] items-end gap-[58px] max-[880px]:grid-cols-1 max-[880px]:gap-6 reveal">
          <div>
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">
              Payments and document handling
            </p>
            <h2 id="payment-security-title" className="max-w-[660px] !text-[clamp(30px,1.7rem+2.4vw,46px)] !leading-[1.05] !text-[var(--ink)]">
              Payments, signatures and case records
            </h2>
          </div>

          <div className="max-w-[590px] justify-self-end max-[880px]:justify-self-start">
            <p className="!m-0 !text-[16px] !leading-[1.7] !text-[var(--muted)]">
              We use third-party platforms for online payments, electronic signatures and case records. Review your service agreement and confirm how to send documents before sharing sensitive information.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5" aria-label="Case handling assurances">
              {ASSURANCE_POINTS.map(([Icon, label]) => (
                <span key={label} className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.02em] text-[var(--muted)]">
                  <Icon className="h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-3 gap-[18px] max-[880px]:grid-cols-2 max-[620px]:grid-cols-1">
          {TRUST_PLATFORMS.map(({ name, logo, logoAlt, logoWidth, logoHeight, logoDisplayWidth, eyebrow, description, logoClassName, logoPanelClassName }) => (
            <article
              key={name}
              className="payment-trust-card group relative flex min-h-[326px] flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] transition-[transform,border-color,box-shadow] duration-[250ms] ease-in-out before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[linear-gradient(90deg,var(--primary),var(--accent))] before:origin-left before:scale-x-[.28] before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(.2,.8,.2,1)] before:content-[''] hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--primary)_45%,var(--border))] hover:shadow-[var(--shadow-soft)] hover:before:scale-x-100"
            >
              <div className={`payment-trust-card__logo flex ${logoPanelClassName || "h-[102px]"} items-center justify-center overflow-hidden rounded-[16px] border border-black/[.08] bg-white px-4 py-3 shadow-[0_8px_20px_rgba(7,13,22,.05)]`}>
                <Image
                  src={logo}
                  alt={logoAlt}
                  width={logoWidth}
                  height={logoHeight}
                  sizes={`${logoDisplayWidth}px`}
                  className={`h-auto w-full object-contain ${logoClassName}`}
                />
              </div>
              <p className="!m-[22px_0_0] !text-[11px] !font-extrabold !leading-[1.5] tracking-[.15em] uppercase !text-[var(--primary)]">{name}</p>
              <h3 className="!m-[7px_0_8px] !text-[19px] !font-extrabold !leading-[1.25] !text-[var(--ink)]">{eyebrow}</h3>
              <p className="!m-0 !text-[14px] !leading-[1.65] !text-[var(--muted)]">{description}</p>
            </article>
          ))}
        </div>

        <p className="!m-[18px_0_0] !text-[11px] !leading-[1.6] !text-[var(--muted)]">
          Product names and logos belong to their respective owners. Their use does not imply endorsement or partnership.
        </p>
      </div>
    </section>
  );
}
