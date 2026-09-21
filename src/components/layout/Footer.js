import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GraduationCap, MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Sparkles, CreditCard } from "lucide-react";
import { socialIcons } from "@/components/ui/SocialIcons";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";

const SOCIAL_ITEMS = [
  { key: "linkedin", label: `${site.name} on LinkedIn` },
  { key: "facebook", label: `${site.name} on Facebook` },
  { key: "instagram", label: `${site.name} on Instagram` },
  { key: "youtube", label: `${site.name} on YouTube` },
];

const PAYMENT_LOGOS = [
  { key: "visa", label: "Visa", src: "/images/payments/visa.webp", width: 223, height: 140 },
  { key: "mastercard", label: "Mastercard", src: "/images/payments/mastercard.webp", width: 223, height: 140 },
  { key: "apple-pay", label: "Apple Pay", src: "/images/payments/apple-pay.webp", width: 140, height: 140 },
  { key: "google-pay", label: "Google Pay", src: "/images/payments/google-pay.webp", width: 140, height: 140 },
];

const REGULATORY_BODIES = [
  {
    name: "IRCC",
    full: "Immigration, Refugees and Citizenship Canada",
    sub: "Federal Immigration Authority",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
  },
  {
    name: "CICC",
    full: "College of Immigration and Citizenship Consultants",
    sub: "Regulator of RCIC Consultants",
    href: "https://register.college-ic.ca/",
  },
  {
    name: "ESDC",
    full: "Employment and Social Development Canada",
    sub: "LMIA & Labour Programs",
    href: "https://www.canada.ca/en/employment-social-development/services/foreign-workers.html",
  },
  {
    name: "CBSA",
    full: "Canada Border Services Agency",
    sub: "Border & Enforcement Authority",
    href: "https://www.cbsa-asfc.gc.ca/",
  },
];

function LinkColumn({ title, links }) {
  return (
    <nav aria-label={title} className="site-footer__col">
              <p className="site-footer__col-title flex items-center gap-2 m-[0_0_.9rem] text-[var(--brand-navy-dark)] text-[.68rem] max-[768px]:text-[.875rem] max-[768px]:mb-3 font-extrabold tracking-[.14em] leading-[1.2] uppercase">
        <span className="site-footer__col-title-line h-0.5 w-[1.4rem] shrink-0 rounded-full bg-[var(--brand-primary)]" aria-hidden />
        {title}
      </p>
      <ul className="site-footer__col-list grid gap-[.42rem] m-0 list-none p-0">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="site-footer__link group inline-flex items-center gap-[.3rem] text-[var(--brand-muted)] text-[.82rem] font-semibold leading-[1.45] no-underline transition-[color,transform] duration-[180ms] ease-in-out hover:translate-x-0.5 hover:text-[red]">
                <span>{link.label}</span>
                <ArrowUpRight className="site-footer__link-arrow text-[var(--brand-primary)] opacity-0 translate-x-[-4px] transition-[opacity,transform] duration-[180ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100" size={12} aria-hidden />
              </a>
            ) : (
              <Link href={link.href} className="site-footer__link group inline-flex items-center gap-[.3rem] text-[var(--brand-muted)] text-[.82rem] font-semibold leading-[1.45] no-underline transition-[color,transform] duration-[180ms] ease-in-out hover:translate-x-0.5 hover:text-[red]">
                <span>{link.label}</span>
                <ArrowUpRight className="site-footer__link-arrow text-[var(--brand-primary)] opacity-0 translate-x-[-4px] transition-[opacity,transform] duration-[180ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100" size={12} aria-hidden />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = SOCIAL_ITEMS.filter(({ key }) => site.social[key]);
  const linkColumns = navigation.footer;

  return (
    <footer className="site-footer relative isolate overflow-hidden border-t border-[var(--brand-border)] bg-[linear-gradient(180deg,#fff_0%,var(--brand-surface)_38%,var(--brand-surface-alt)_100%)] text-[var(--brand-text)]">
      {/* Top accent — uses the configured primary gradient */}
      <div className="site-footer__accent absolute inset-x-0 top-0 z-[3] h-1 bg-[linear-gradient(90deg,var(--brand-primary),var(--brand-primary-light),var(--brand-gold))]" aria-hidden />
      {/* Ambient decor — all colors from the active CSS variables */}
      <div className="site-footer__bg absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="site-footer__grid-pattern absolute inset-0 opacity-[.045] [background-image:linear-gradient(var(--brand-primary)_1px,transparent_1px),linear-gradient(90deg,var(--brand-primary)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(180deg,black_0%,transparent_78%)]" />
        <div className="site-footer__orb site-footer__orb--a absolute top-[-6rem] right-[-4rem] size-[30rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-primary)_7%,transparent)_0%,transparent_68%)] blur-[18px] pointer-events-none" />
        <div className="site-footer__orb site-footer__orb--b absolute bottom-[-10rem] left-[-6rem] size-[36rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--brand-gold)_6%,transparent)_0%,transparent_70%)] blur-[18px] pointer-events-none" />
      </div>

      <div className="site-footer__inner relative z-[1] max-w-7xl mx-auto px-5 md:px-8">
        {/* Main grid */}
        <div className="site-footer__main grid grid-cols-[minmax(0,1.42fr)_minmax(0,2.1fr)] items-start gap-x-12 gap-y-[2.75rem] py-12 pb-8 max-[1100px]:grid-cols-1 max-[1100px]:gap-[2.25rem] max-[720px]:py-[2.25rem_0_1.5rem]">
          {/* Brand */}
          <div className="site-footer__brand min-w-0">
            <Link href="/" className="site-footer__logo inline-flex items-center rounded-[1rem] border border-[var(--brand-border)] bg-[var(--brand-logo-bg)] px-3 py-[.55rem] shadow-[0_8px_24px_color-mix(in_srgb,var(--brand-primary)_6%,transparent),0_2px_8px_color-mix(in_srgb,var(--brand-navy)_4%,transparent)] transition-[transform,box-shadow,border-color] duration-[200ms] ease-in-out hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--brand-primary)_22%,var(--brand-border))] hover:shadow-[0_14px_32px_color-mix(in_srgb,var(--brand-primary)_9%,transparent)]" aria-label={`${site.name} home`}>
              <Image
                src={site.logos.footer}
                alt={site.name}
                width={1912}
                height={1140}
                className="site-footer__logo-img h-[2.45rem] w-auto object-contain"
              />
            </Link>

            <p className="site-footer__tagline mt-[.9rem] text-[var(--brand-navy-dark)] text-[.95rem] font-semibold tracking-[-.015em] leading-[1.3]">
              Canada Immigration <strong className="text-[var(--brand-primary)] font-extrabold">Simplified</strong>
            </p>

            <p className="site-footer__desc mt-[.65rem] max-w-[28rem] text-[var(--brand-muted)] text-[.78rem] leading-[1.65]">
              <strong className="text-[var(--brand-navy-dark)]">CICC-regulated licensed RCICs</strong> serving clients across Canada — Express Entry, every PNP stream, LMIA (HGT), work & study permits, family sponsorship, and refusals.
            </p>

            <div className="site-footer__rcic inline-flex items-center gap-2 mt-4 rounded-full border border-[color-mix(in_srgb,var(--brand-primary)_14%,var(--brand-border))] bg-[var(--brand-accent-soft)] text-[var(--brand-navy-dark)] px-3 py-2 text-[.68rem] font-extrabold tracking-[.02em] leading-none">
              <span className="site-footer__rcic-icon inline-flex size-6 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white">
                <GraduationCap size={14} aria-hidden />
              </span>
              <span>Licensed RCIC {site.rcic.number} · CICC-Regulated</span>
              <ShieldCheck size={12} className="site-footer__rcic-check text-[var(--brand-success)]" aria-hidden />
            </div>

            {/* Contact */}
            <div className="site-footer__contact grid gap-[.55rem] mt-[1.15rem]">
              <p className="site-footer__locations-label m-[0_0_.1rem] text-[var(--brand-navy-dark)] text-[.6875rem] font-extrabold tracking-[.14em] leading-[1.2] uppercase">Our offices</p>
              <div className="site-footer__locations grid gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__office site-footer__office--primary grid gap-[.45rem] rounded-[.8rem] border border-l-[3px] border-[var(--brand-border)] border-l-[var(--brand-primary)] bg-[color-mix(in_srgb,#fff_72%,var(--brand-surface))] text-[var(--brand-muted)] px-3 py-[.7rem] text-[.72rem] leading-[1.45] no-underline transition-[border-color,background,transform] duration-[180ms] ease-in-out hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--brand-primary)_32%,var(--brand-border))] hover:bg-[#ffffff]"
                >
                  <span className="site-footer__office-heading flex items-center gap-[.55rem]">
                    <span className="site-footer__contact-icon inline-flex size-[1.65rem] shrink-0 items-center justify-center mt-[.02rem] rounded-[.55rem] border border-[var(--brand-border)] bg-white text-[var(--brand-primary)]">
                      <MapPin size={13} aria-hidden />
                    </span>
                    <span className="grid gap-[.12rem] text-[var(--brand-navy-dark)]">
                      <strong className="text-[.72rem] font-extrabold leading-[1.25]">{site.name} </strong>
                      <small className="text-[var(--brand-primary-dark)] text-[.6rem] font-extrabold tracking-[.08em] leading-[1.2] uppercase">Canada</small>
                    </span>
                  </span>
                  <span className="site-footer__office-address grid gap-[.1rem] pl-[2.2rem]">
                    <span>{site.address.line1}</span>
                    {[site.address.city, site.address.region, site.address.postal, site.address.country].filter(Boolean).join(", ")}
                  </span>
                </a>
                <a
                  href={site.sisterConcern.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__office site-footer__office--sister grid gap-[.45rem] rounded-[.8rem] border border-l-[3px] border-[var(--brand-border)] border-l-[var(--brand-gold)] bg-[color-mix(in_srgb,#fff_72%,var(--brand-surface))] text-[var(--brand-muted)] px-3 py-[.7rem] text-[.72rem] leading-[1.45] no-underline transition-[border-color,background,transform] duration-[180ms] ease-in-out hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--brand-primary)_32%,var(--brand-border))] hover:bg-[#ffffff]"
                >
                  <span className="site-footer__office-heading flex items-center gap-[.55rem]">
                    <span className="site-footer__contact-icon inline-flex size-[1.65rem] shrink-0 items-center justify-center mt-[.02rem] rounded-[.55rem] border border-[var(--brand-border)] bg-white text-[var(--brand-primary)]">
                      <MapPin size={13} aria-hidden />
                    </span>
                    <span className="grid gap-[.12rem] text-[var(--brand-navy-dark)]">
                      <strong className="text-[.72rem] font-extrabold leading-[1.25]">{site.sisterConcern.name} </strong>
                      <small className="text-[var(--brand-gold)] text-[.6rem] font-extrabold tracking-[.08em] leading-[1.2] uppercase">Dubai</small>
                    </span>
                  </span>
                  <span className="site-footer__office-address grid gap-[.1rem] pl-[2.2rem]">{site.sisterConcern.address}</span>
                </a>
                <div className="site-footer__office site-footer__contact-card grid min-h-[8rem] items-center gap-[.2rem] rounded-[.8rem] border border-l-[3px] border-[var(--brand-border)] border-l-[var(--brand-primary)] bg-[color-mix(in_srgb,#fff_72%,var(--brand-surface))] px-3 py-[.7rem] text-[var(--brand-muted)] transition-[border-color,background,transform] duration-[180ms] ease-in-out hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--brand-primary)_32%,var(--brand-border))] hover:bg-[#ffffff]">
                  <a href={site.phoneHref} className="site-footer__contact-row flex items-center gap-[.6rem] text-[var(--brand-muted)] text-[.78rem] leading-[1.45] no-underline transition-colors duration-[180ms] ease-in-out hover:text-[var(--brand-primary-dark)]">
                    <span className="site-footer__contact-icon inline-flex size-[1.65rem] shrink-0 items-center justify-center rounded-[.55rem] border border-[var(--brand-border)] bg-white text-[var(--brand-primary)]">
                      <Phone size={13} aria-hidden />
                    </span>
                    <span>{site.phone}</span>
                  </a>
                  <a href={site.emailHref} className="site-footer__contact-row flex items-center gap-[.6rem] text-[var(--brand-muted)] text-[.78rem] leading-[1.45] no-underline transition-colors duration-[180ms] ease-in-out hover:text-[var(--brand-primary-dark)]">
                    <span className="site-footer__contact-icon inline-flex size-[1.65rem] shrink-0 items-center justify-center rounded-[.55rem] border border-[var(--brand-border)] bg-white text-[var(--brand-primary)]">
                      <Mail size={13} aria-hidden />
                    </span>
                    <span>{site.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social + CTA */}
            <div className="site-footer__brand-actions flex flex-wrap items-center gap-3 mt-[1.15rem] max-[520px]:flex-col max-[520px]:items-start">
              {socialLinks.length > 0 && (
                <div className="site-footer__social flex items-center gap-[.45rem]">
                  {socialLinks.map(({ key, label }) => {
                    const Icon = socialIcons[key];
                    return (
                      <a
                        key={key}
                        href={site.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="site-footer__social-link inline-flex size-[2.15rem] items-center justify-center rounded-full border border-[var(--brand-border)] bg-white text-[var(--brand-primary)] shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-primary)_4%,transparent)] transition-[transform,background,color,border-color] duration-[180ms] ease-in-out hover:-translate-y-0.5 hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-[#ffffff]"
                      >
                        <Icon className="h-[15px] w-[15px]" />
                        <span className="sr-only">{label}</span>
                      </a>
                    );
                  })}
                </div>
              )}
              <div className="site-footer__cta-row flex flex-wrap items-start gap-[.6rem]">
                <Link href={site.ctas.assessment.href} className="site-footer__cta inline-flex items-center gap-[.45rem] rounded-full border border-[var(--brand-primary)] bg-[var(--brand-primary)] px-[.95rem] py-[.6rem] text-white text-[.75rem] font-extrabold tracking-[.02em] shadow-[0_8px_18px_color-mix(in_srgb,var(--brand-primary)_18%,transparent)] transition-[transform,background,border-color] duration-[180ms] ease-in-out hover:-translate-y-px hover:border-[var(--brand-primary-dark)] hover:bg-[var(--brand-primary-dark)] hover:text-[#ffffff]">
                  <Sparkles size={14} aria-hidden />
                  Free Assessment
                </Link>
                <div className="site-footer__pay-group flex flex-col items-start gap-[.65rem]">
                  <Link href={site.ctas.payment.href} className="site-footer__cta inline-flex items-center gap-[.45rem] rounded-full border border-[var(--brand-primary)] bg-[var(--brand-primary)] px-[.95rem] py-[.6rem] text-white text-[.75rem] font-extrabold tracking-[.02em] shadow-[0_8px_18px_color-mix(in_srgb,var(--brand-primary)_18%,transparent)] transition-[transform,background,border-color] duration-[180ms] ease-in-out hover:-translate-y-px hover:border-[var(--brand-primary-dark)] hover:bg-[var(--brand-primary-dark)] hover:text-[#ffffff]">
                    <CreditCard size={14} aria-hidden />
                    Pay Online
                  </Link>
                  <div className="site-footer__pay-trust flex flex-col gap-2">
                    <p className="site-footer__pay-trust-label m-0 text-[var(--brand-muted)] text-[.68rem] font-bold tracking-[.04em] uppercase">Powered by Stripe</p>
                    <div className="site-footer__pay-logos flex flex-wrap items-center gap-[.45rem]">
                      {PAYMENT_LOGOS.map((logo) => (
                          <span key={logo.key} className="site-footer__pay-logo inline-flex h-[1.75rem] items-center justify-center rounded-[.5rem] border border-[var(--brand-border)] bg-white px-[.4rem] py-1 shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-primary)_4%,transparent)]">
                          <Image className="h-full w-auto object-contain" src={logo.src} alt={logo.label} width={logo.width} height={logo.height} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="site-footer__hours mt-[.9rem] text-[var(--brand-muted)] text-[.7rem] font-semibold leading-[1.45]">
              {site.hours} <span className="text-[color-mix(in_srgb,var(--brand-muted)_72%,transparent)] font-medium">· {site.timezone}</span>
            </p>
          </div>

          {/* Link columns */}
          <div className="site-footer__links grid grid-cols-6 items-start gap-x-5 gap-y-7 pt-[.35rem] max-[1100px]:grid-cols-3 max-[720px]:grid-cols-2 max-[720px]:gap-[1.6rem_1rem] max-[520px]:gap-[1.75rem_1rem]">
            {linkColumns.map((col) => (
              <LinkColumn key={col.title} title={col.title} links={col.links} />
            ))}

            {/* Regulatory trust bar — placed below link columns */}
            <div className="site-footer__trust col-span-full mt-2 border-t border-[var(--brand-border)] pt-[1.35rem]">
              <div className="site-footer__trust-header flex items-center gap-[.85rem] mb-4">
                <span className="site-footer__trust-line h-px max-w-20 flex-1 bg-[linear-gradient(90deg,transparent,var(--brand-border),transparent)]" aria-hidden />
                <p className="m-0 whitespace-nowrap text-[var(--brand-navy-dark)] text-[.6875rem] font-extrabold tracking-[.16em] uppercase">Regulated &amp; Recognised By</p>
                <span className="site-footer__trust-line h-px max-w-20 flex-1 bg-[linear-gradient(90deg,transparent,var(--brand-border),transparent)]" aria-hidden />
              </div>
              <div className="site-footer__trust-grid grid grid-cols-4 gap-3 max-[720px]:grid-cols-2 max-[520px]:grid-cols-1">
                {REGULATORY_BODIES.map((body) => (
                  <a
                    key={body.name}
                    href={body.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__trust-card relative flex flex-col items-center gap-2 rounded-[1rem] border border-[var(--brand-border)] bg-white px-4 pt-5 pb-[1.1rem] text-center no-underline shadow-[0_4px_14px_color-mix(in_srgb,var(--brand-primary)_4%,transparent)] transition-[transform,border-color,box-shadow,background] duration-[250ms] ease-in-out hover:-translate-y-1 hover:border-transparent hover:bg-[var(--brand-surface)] hover:shadow-[0_12px_28px_color-mix(in_srgb,var(--brand-primary)_8%,transparent),0_2px_8px_color-mix(in_srgb,var(--brand-primary)_4%,transparent)]"
                  >
                    <span className="site-footer__trust-card-icon inline-flex size-9 items-center justify-center rounded-[.65rem] bg-[var(--brand-accent-soft)] text-[var(--brand-primary)]">
                      <ExternalLink size={14} aria-hidden />
                    </span>
                    <span className="site-footer__trust-card-name text-[var(--brand-navy-dark)] text-[.85rem] font-extrabold tracking-[.04em] leading-[1.15]">{body.name}</span>
                    <span className="site-footer__trust-card-full text-[var(--brand-navy-dark)] max-w-[14rem] text-[.72rem] font-bold leading-[1.4]">{body.full}</span>
                    <span className="site-footer__trust-card-sub mt-[.1rem] text-[var(--brand-muted)] text-[.68rem] font-semibold leading-[1.3]">{body.sub}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal bottom bar */}
        <div className="site-footer__bottom mt-[1.35rem] border-t border-[var(--brand-border)] pt-[1.15rem] pb-[.35rem]">
          <div className="site-footer__bottom-row flex flex-wrap items-center justify-between gap-x-5 gap-y-[.85rem] max-[720px]:flex-col max-[720px]:items-start">
            <p className="site-footer__copyright m-0 text-[var(--brand-navy-dark)] text-[.76rem] font-bold leading-[1.4]">
              © {year} {site.name}. All rights reserved.
              <span className="site-footer__dot mx-[.45rem] text-[var(--brand-border)]" aria-hidden>
                ·
              </span>
              <span className="site-footer__regulator text-[var(--brand-muted)] italic font-semibold">Licensed by {site.rcic.regulator}</span>
            </p>
            <nav className="site-footer__legal flex flex-wrap items-center gap-[.55rem] text-[var(--brand-muted)] text-[.76rem] font-bold [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-[180ms] [&_a]:ease-in-out [&_a:hover]:text-[var(--brand-primary-dark)] [&_a:hover]:underline [&_a:hover]:underline-offset-[3px]" aria-label="Legal">
              <Link href={site.legal.privacy.href}>{site.legal.privacy.label}</Link>
              <span className="site-footer__legal-dot text-[var(--brand-border)]" aria-hidden>
                ·
              </span>
              <Link href={site.legal.terms.href}>{site.legal.terms.label}</Link>
              <span className="site-footer__legal-dot text-[var(--brand-border)]" aria-hidden>
                ·
              </span>
              <Link href={site.legal.disclaimer.href}>{site.legal.disclaimer.label}</Link>
              <span className="site-footer__legal-dot text-[var(--brand-border)]" aria-hidden>
                ·
              </span>
              <Link href={site.legal.refund.href}>{site.legal.refund.label}</Link>
            </nav>
          </div>

          <p className="site-footer__disclaimer m-[.85rem_0_0] rounded-[.85rem] border border-[color-mix(in_srgb,var(--brand-primary)_8%,var(--brand-border))] bg-[color-mix(in_srgb,var(--brand-accent-soft)_55%,#fff)] text-[var(--brand-muted)] px-4 py-3 text-[.68rem] italic leading-[1.6] text-center">
            {site.tradingName} is a trading name. Content on this site is general information only and does not constitute
            legal advice. Immigration outcomes depend on individual circumstances and current IRCC requirements. {site.name}{" "}
            <strong className="text-[var(--brand-primary-dark)] font-extrabold not-italic">does not guarantee</strong> visa approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
