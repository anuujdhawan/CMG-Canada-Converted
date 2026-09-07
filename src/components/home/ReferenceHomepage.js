"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BadgeDollarSign,
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  ListChecks,
  Map,
  MapPin,
  Search,
  ShieldCheck,
  Timer,
  Wheat,
  Zap} from "lucide-react";
import { site } from "@/config/site";
import { currentPagePath } from "@/config/pageRoutes";
import { HERO_SLIDES } from "@/lib/heroSlides";
import HeroCarousel from "./HeroCarousel";
import HeroProofCardCarousel from "./HeroProofCardCarousel";
import ConsultantProfileSection from "./ConsultantProfileSection";
import LiveSuccessVideos from "./LiveSuccessVideos";
import TemplateMotion from "./TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import { getPageFaqs } from "@/lib/faqs";
import { getImageObjectPosition } from "@/lib/imagePresentation";

const href = (path) => currentPagePath(path);

const PATHWAYS = [
  ["Permanent residence", "Express Entry & PR", "Build a stronger federal profile with CRS strategy, program fit and a clear plan.", "/immigrate/express-entry", CompassIcon],
  ["PNP pathways", "Provincial nominees", "Compare provinces and nomination streams before you commit to a route.", "/immigrate/provincial-nominee-program-all-provinces-consolidated", MapPin],
  ["Work in Canada", "Work permits", "Explore employer-specific, open work permit and LMIA-supported options.", "/work-and-study/canada-work-permit-overview", BriefcaseBusiness],
  ["Study to settle", "Study permits", "Plan your study permit, school choice and post-graduation pathway together.", "/work-and-study/canada-study-permit", GraduationCap],
  ["Bring family closer", "Family sponsorship", "Understand spousal, partner, parent and dependent-child sponsorship routes.", "/sponsor/family-sponsorship-overview-all-categories", HeartHandshake],
  ["A better next step", "Refusals & appeals", "Turn refusal reasons, GCMS notes and procedural fairness letters into a plan.", "/inadmissibility-and-appeals/refusal-and-pfl-response", ShieldCheck]];

const SERVICES = [
  ["FSW, CEC and FST, plus CRS strategy and category-based draws.", "Express Entry & PR", "/immigrate/express-entry", BadgeCheck],
  ["PGWP, employer-specific and open permits, spousal permits and restoration.", "Work permits", "/work-and-study/canada-work-permit-overview", BriefcaseBusiness],
  ["DLI planning, PAL where required, study plans and post-graduation pathways.", "Study permits", "/work-and-study/canada-study-permit", GraduationCap],
  ["Spousal, partner, parent and dependent-child sponsorship routes.", "Family sponsorship", "/sponsor/family-sponsorship-overview-all-categories", HeartHandshake],
  ["TRVs, eTA, business visitors and Super Visa preparation.", "Visitor, eTA & Super Visa", "/visit/visitor-visa-trv-and-super-visa-combined", MapPin],
  ["Start-up Visa, self-employed pathways and provincial entrepreneur streams.", "Business immigration", "/immigrate/business-immigration-and-start-up-visa", BadgeDollarSign],
  ["Expired permits, overstays and regaining status where IRCC allows.", "Restoration & status", "/citizenship/pr-card-renewal-and-citizenship-combined-overview", ShieldCheck],
  ["GCMS, procedural fairness responses, reapplications, appeals and review referrals.", "Refusals & PFL", "/inadmissibility-and-appeals/refusal-and-pfl-response", BookOpenCheck],
  ["PR card renewals, PRTD, residency obligations and citizenship.", "PR card & citizenship", "/citizenship/pr-card-renewal-and-citizenship-combined-overview", BadgeCheck]];

const GUIDE_ITEMS = [
  ["Immigration hub", "Every PR, temporary and citizenship route indexed consistently across the site.", "/immigrate/express-entry"],
  ["Provinces & territories", "Compare streams from British Columbia to the Atlantic before choosing a province.", "/immigrate/provincial-nominee-program-all-provinces-consolidated"],
  ["Express Entry", "Understand CRS, the three federal programs and category-based draws.", "/immigrate/express-entry"],
  ["Calculators", "Use CRS, FSW 67 and provincial tools before paying filing fees.", "/tools/canada-immigration-calculators"],
  ["Employers · HGT", "Explore LMIA, GTS, recruitment and compliance through one employer journey.", "/work-and-study/lmia-and-employer-services-overview"],
];

function CompassIcon(props) {
  return <Map {...props} />;
}

function TemplateLink({ children, path, className = "", ...props }) {
  const buttonSurface = className.includes("btn-primary")
    ? "bg-[var(--primary)] text-[var(--template-on-primary)] shadow-[0_13px_28px_color-mix(in_srgb,var(--primary)_23%,transparent)] hover:bg-[var(--accent)]"
    : className.includes("btn-secondary")
      ? "border-[var(--border)] bg-transparent text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
      : "";
  const classes = className.split(/\s+/).includes("btn") ? `inline-flex items-center justify-center gap-[9px] min-h-12 border border-transparent rounded-[12px] px-5 py-[13px] font-extrabold text-[13px] leading-none transition-[transform,background,border-color,color] duration-[200ms] ease-[ease] hover:translate-y-[-2px] ${buttonSurface} ${className}` : className;
  return <Link href={href(path)} className={classes.trim()} {...props}>{children}</Link>;
}

function SectionHeading({ eyebrow, title, lead, className = "" }) {
  return (
    <header className={`section-head grid grid-cols-[.72fr_.42fr] max-[880px]:grid-cols-1 items-end gap-[50px] max-[880px]:gap-[17px] mb-[42px] reveal ${className}`.trim()}>
      <div>
        {eyebrow && <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">{eyebrow}</p>}
        <h2 className={`max-w-[760px] ${className.includes("pathways-section-head") ? "!text-[var(--template-on-primary)] !text-[clamp(34px,1.9rem+3.2vw,56px)] !leading-[1.04] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_36%,transparent)] max-[620px]:!text-[clamp(42px,12vw,58px)]" : ""}`.trim()}>{title}</h2>
      </div>
      {lead && <p className="!text-[16px] !leading-[1.65]">{lead}</p>}
    </header>
  );
}

function IconBox({ icon: Icon, className = "" }) {
  return <span className={`icon-box inline-flex h-[46px] w-[46px] items-center justify-center rounded-[14px] m-0 bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)] ${className}`.trim()}><Icon width={22} height={22} aria-hidden="true" /></span>;
}

export default function ReferenceHomepage({ page, heroData }) {
  const pageDataTitle = heroData?.title || page?.h1;
  const pageDataLead = heroData?.leadBlock?.text || page?.seo?.description;
  const heroTitle = pageDataTitle || "Your Permanent Residence, Planned by a Licensed RCIC";
  const heroLead = pageDataLead || "No matter which door into Canada you are walking through, a single licensed team can plan it end to end.";

  return (
    <div className="cmg-template-home relative overflow-hidden bg-[var(--bg)] text-[var(--ink)] text-base leading-[1.65] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)] max-[620px]:text-[15px]" data-concept="nocturne">
      <TemplateMotion />
      <section className="hero group/hero relative isolate before:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_2%,transparent),color-mix(in_srgb,var(--bg)_52%,transparent)_145%)] after:top-[-180px] after:right-[-170px] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] after:blur-[80px] w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)] before:absolute before:z-[-2] before:pointer-events-none before:content-[''] after:absolute after:z-[-2] after:pointer-events-none after:content-['']" aria-labelledby="hero-title">
        <div className="ambient a absolute z-[-1] size-[360px] rounded-full bg-[var(--primary)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] top-[2%] right-[15%]" aria-hidden="true" />
        <div className="ambient b absolute z-[-1] size-[360px] rounded-full bg-[var(--accent)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] bottom-[4%] left-[-8%] [animation-delay:-4s]" aria-hidden="true" />
        <HeroCarousel slides={HERO_SLIDES} className="hero-background-carousel z-[-3] w-full min-h-full rounded-[30px] border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow)]" />
        <div className="hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center max-[880px]:items-start gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto">
          <div className="hero-copy relative z-[2] min-w-0 max-[880px]:w-full text-[var(--template-on-primary)] reveal in">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">Licensed Canadian immigration guidance</p>
            <h1 id="hero-title" className="max-w-[790px] max-[1120px]:!text-[clamp(38px,4.6vw,52px)] max-[620px]:!text-[clamp(34px,10.5vw,44px)] max-[1023.98px]:text-center max-[1023.98px]:mx-auto text-[clamp(42px,2.2rem+3.4vw,66px)] font-semibold leading-[1.04] tracking-[-.03em] text-[var(--template-on-primary)] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent),0_1px_2px_color-mix(in_srgb,var(--cmg-template-deep-surface)_55%,transparent)] text-[var(--ink)]">{heroTitle}</h1>
            <p className="lead max-w-[680px] max-[1023.98px]:text-center max-[1023.98px]:mx-auto !mt-6 text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent)] text-[17px] leading-[1.8] max-[620px]:text-[15px]">{heroLead}</p>
            <div className="hero-actions flex flex-wrap gap-3 mt-[30px] max-[768px]:!flex max-[768px]:!flex-col max-[768px]:!items-center max-[768px]:!gap-3 max-[768px]:!mt-6">
              <TemplateLink path={site.ctas.primary.href} className="btn btn-primary max-[768px]:!w-full max-[768px]:!min-h-[52px] max-[768px]:!px-[22px] max-[768px]:!py-[14px] max-[768px]:!rounded-[14px] max-[768px]:!text-[14px] max-[640px]:!p-[15px]">Book a Consultation <ArrowRight width={18} height={18} aria-hidden="true" /></TemplateLink>
            <TemplateLink path="/tools/crs-calculator" className="btn btn-secondary max-[768px]:!w-auto max-[768px]:!min-h-10 max-[768px]:!px-[18px] max-[768px]:!py-[9px] max-[768px]:!rounded-full max-[768px]:!text-[12.5px] max-[768px]:!bg-[color-mix(in_srgb,var(--template-on-primary)_8%,transparent)] max-[768px]:!border-[color-mix(in_srgb,var(--template-on-primary)_22%,transparent)] max-[768px]:!shadow-none max-[768px]:[&:hover]:!bg-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)] max-[768px]:[&:hover]:!border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] max-[768px]:[&:hover]:!transform-none max-[768px]:[&:focus-visible]:!bg-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)] max-[768px]:[&:focus-visible]:!border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] max-[768px]:[&:focus-visible]:!transform-none">Check your CRS <Calculator className="max-[768px]:!h-[14px] max-[768px]:!w-[14px]" width={18} height={18} aria-hidden="true" /></TemplateLink>
            </div>
          </div>
          <div className="hero-visual self-start relative w-full min-h-[530px] ![transform:translate3d(calc(var(--px,0px)*.25),calc(var(--py,0px)*.25),0)] max-[880px]:static max-[880px]:min-h-0 max-[880px]:!transform-none max-[880px]:mt-[26px] reveal in">
            <HeroProofCardCarousel />
          </div>
        </div>
      </section>

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16" id="pathways">
        <div className="section-inner mx-auto w-[var(--container)]">
          <SectionHeading className="pathways-section-head" title="Choose the pathway that feels like yours" lead="The best immigration plan starts with the right question. Pick a goal and we will take you to the deeper guide, tools and next steps." />
          <div className="path-grid grid grid-cols-3 gap-[18px] max-[1120px]:grid-cols-2 max-[620px]:grid-cols-1">
            {PATHWAYS.map(([overline, title, description, path, Icon], index) => (
              <TemplateLink key={title} path={path} className="path-card relative flex min-h-[330px] flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-7 reveal shadow-[var(--shadow-soft)] [transition:transform_.35s_cubic-bezier(.2,.8,.2,1),border-color_.35s,box-shadow_.35s] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[var(--primary)] before:origin-left before:scale-x-[.28] before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(.2,.8,.2,1)] before:content-[''] hover:before:scale-x-100 after:absolute after:right-[-80px] after:top-[-80px] after:size-[160px] after:rounded-full after:border after:border-[color-mix(in_srgb,var(--primary)_25%,transparent)] after:content-[''] after:transition-[right,bottom,border-color] after:duration-500 after:ease-[ease] hover:-translate-y-[5px] hover:border-[color-mix(in_srgb,var(--primary)_45%,var(--border))] hover:shadow-[var(--shadow-soft)] hover:after:top-[-55px] hover:after:right-[-55px] hover:after:bottom-auto hover:after:border-[color-mix(in_srgb,var(--primary)_50%,transparent)]" style={{ "--delay": `${index * 45}ms` }}>
                <span className="card-number absolute top-6 right-[26px] text-[var(--primary)] text-[11px] font-extrabold leading-none tracking-[.14em]">0{index + 1}</span>
                <IconBox icon={Icon} className="!h-12 !w-12 border border-[color-mix(in_srgb,var(--primary)_19%,transparent)]" />
              <span className="overline !m-[25px_0_0] text-[var(--primary)] !text-[11px] font-extrabold !leading-[1.65] tracking-[.15em] uppercase no-underline">{overline}</span>
                <h3 className="!m-[9px_0_8px] text-[var(--ink)] !text-[19px] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3>
                <p className="!m-0 !text-[var(--muted)] !text-[14px] !leading-[1.65]">{description}</p>
                <span className="text-link inline-flex items-center gap-[7px] mt-auto pt-5 text-[var(--primary)] text-[12px] font-extrabold leading-none">Explore pathway <ArrowUpRight width={18} height={18} aria-hidden="true" /></span>
              </TemplateLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 alt" id="consultant">
        <div className="section-inner mx-auto w-[var(--container)] consultant-layout grid grid-cols-[1.22fr_.78fr] max-[880px]:grid-cols-1 items-stretch gap-7">
          <article className="consultant-panel relative min-h-[340px] rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] p-[38px] max-[620px]:p-[25px] shadow-[var(--shadow-soft)] before:absolute before:left-0 before:top-9 before:h-[58px] before:w-[5px] before:rounded-[0_5px_5px_0] before:bg-[var(--primary)] before:content-[''] reveal">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">Licensed RCIC · Canada-wide</p>
            <h2 className="!text-[34px] !leading-none">Case Strategy Lead</h2>
            <p className="role !m-0 !mt-3 !mb-7 text-[var(--muted)] !text-[16px] !leading-[1.65]">CICC-regulated guidance for complex Canadian immigration files</p>
            <ul className="expertise !m-0 grid grid-cols-2 gap-[10px] max-[620px]:grid-cols-1 !p-0 list-none">
              {["Refusal, inadmissibility and deadline reviews", "Employer compliance and workforce planning", "Express Entry profile and document strategy", "Provincial pathway comparison across Canada", "Atlantic, western and prairie program research", "Procedural fairness and response planning"].map((item) => <li className="flex items-start gap-[9px] rounded-[13px] p-3 text-[var(--muted)] text-[13px] capitalize bg-[color-mix(in_srgb,var(--primary)_5%,var(--surface))]" key={item}><CheckCircle2 className="mt-0.5 flex-none text-[var(--primary)]" width={17} height={17} aria-hidden="true" />{item}</li>)}
            </ul>
            <div className="profile-meta flex flex-wrap gap-2 mt-[25px] text-[var(--muted)] text-[11px] font-bold"><span className="px-[11px] py-2 border border-[var(--border)] rounded-full text-[11px] font-bold">Canada-wide service</span><span className="px-[11px] py-2 border border-[var(--border)] rounded-full text-[11px] font-bold">Evidence-led preparation</span><span className="px-[11px] py-2 border border-[var(--border)] rounded-full text-[11px] font-bold">Plain-language guidance</span></div>
          </article>
          <aside className="quick-panel relative min-h-[340px] rounded-[var(--radius)] border border-[var(--border)] bg-[linear-gradient(145deg,var(--accent),var(--cmg-dark-secondary))] text-[var(--template-on-primary)] p-[38px] max-[620px]:p-[25px] reveal">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 whitespace-nowrap text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">High-stakes files · Sharper strategy</p>
            <h3 className="!m-0 text-[var(--template-on-primary)] !text-[26px] font-semibold !leading-[1.15] tracking-normal">Not sure which pathway fits?</h3>
            <p className="!m-0 !mt-[10px] !text-[color-mix(in_srgb,var(--template-on-primary)_77%,transparent)] !text-[16px] !leading-[1.65]">Start with a free profile review, then decide what needs deeper strategy.</p>
            <div className="quick-links grid gap-[11px] mt-6">
              {[["Book a consultation", site.ctas.primary.href], ["CRS Calculator", "/tools/crs-calculator-canada"], ["PNP Eligibility", "/tools/pnp-eligibility-canada"], ["NOC Finder", "/tools/noc-finder-canada"]].map(([label, path]) => <TemplateLink key={label} path={path} className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] pb-[9px] text-[color-mix(in_srgb,var(--template-on-primary)_86%,transparent)] text-[13px] font-bold leading-[1.65]">{label}<ArrowUpRight width={17} height={17} aria-hidden="true" /></TemplateLink>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16" id="services">
        <div className="section-inner mx-auto w-[var(--container)]">
          <SectionHeading eyebrow="Choose who we are helping today" title="One team for every stage of the journey" lead="Apply as an individual, with your family or on behalf of a company. Each route opens into in-depth guidance, practical tools and a defined next step." />
          <div className="service-grid grid grid-cols-3 gap-[15px] max-[1120px]:grid-cols-2 max-[620px]:grid-cols-1">
            {SERVICES.map(([description, title, path, Icon], index) => <TemplateLink key={title} path={path} className="service-card relative flex min-h-[220px] flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-[25px] rounded-[20px] reveal transition-[transform,border-color,box-shadow] duration-[250ms] ease-in-out before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-[20px_20px_0_0] before:bg-[linear-gradient(90deg,var(--primary),var(--accent))] before:origin-left before:scale-x-[.28] before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(.2,.8,.2,1)] before:content-[''] hover:before:scale-x-100 hover:-translate-y-[5px] hover:border-[color-mix(in_srgb,var(--primary)_45%,var(--border))] hover:shadow-[var(--shadow-soft)]" style={{ "--delay": `${index * 45}ms` }}><IconBox icon={Icon} /><h3 className="!m-[9px_0_8px] text-[var(--ink)] !text-[19px] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3><p className="!m-0 !text-[var(--muted)] !text-[14px] !leading-[1.65]">{description}</p><ArrowUpRight className="self-end mt-auto" width={18} height={18} aria-hidden="true" /></TemplateLink>)}
          </div>
        </div>
      </section>

      <section className="section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 alt">
        <div className="section-inner mx-auto w-[var(--container)] guide-layout grid grid-cols-[.82fr_1.18fr] max-[880px]:grid-cols-1 items-stretch gap-[46px]">
        <div className="guide-image group relative min-h-[610px] max-[880px]:!min-h-[400px] max-[620px]:!min-h-[350px] overflow-hidden border-0 rounded-[var(--radius)] shadow-[var(--shadow-soft)] after:absolute after:z-[2] after:right-6 after:bottom-6 after:left-6 after:p-[18px_20px] after:rounded-2xl after:bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_67%,transparent)] after:content-['Welcome_to_Canada'] after:backdrop-blur-[12px] after:text-[var(--template-on-primary)] after:text-[20px] after:leading-[1.2] after:pointer-events-none reveal"><Image className="object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.04]" src="/images/pages/toronto-skyline.webp" alt="Toronto skyline from a Canadian autumn park" fill sizes="(max-width: 880px) 100vw, 40vw" style={{ objectPosition: getImageObjectPosition("/images/pages/toronto-skyline.webp") }} /></div>
          <div className="guide-copy">
            <SectionHeading eyebrow="Plan your pathway" title="Read the guides, then decide" lead="The service grid is designed for quick entry. These deeper hubs show how programs fit together—so you already know the right questions when you book." />
            <ol className="guide-list block m-0 p-0 list-none border-t border-[var(--border)]">
              {GUIDE_ITEMS.map(([title, description, path], index) => <li key={title} className="reveal grid grid-cols-[46px_1fr_24px] items-center gap-4 border-b border-[var(--border)] py-[18px]" style={{ "--delay": `${index * 45}ms` }}><span className="text-[var(--primary)] text-[11px] font-extrabold leading-none">0{index + 1}</span><div><strong className="text-[var(--ink)] text-[15px] font-bold leading-normal">{title}</strong><p className="!m-[3px_0_0] !text-[var(--muted)] !text-[13px] !leading-[1.65]">{description}</p></div><TemplateLink path={path} className="text-[var(--primary)]" aria-label={`Open ${title}`}><ArrowUpRight width={18} height={18} aria-hidden="true" /></TemplateLink></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section relative z-[1] bg-[var(--secondary)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 dark">
        <div className="section-inner mx-auto w-[var(--container)] eligibility-layout grid grid-cols-[1fr_.92fr] max-[880px]:grid-cols-1 items-center gap-[60px]">
          <div className="eligibility-copy reveal"><p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">Free eligibility snapshot</p><h2 className="max-w-[690px] !text-[clamp(32px,1.8rem+2.4vw,50px)] !leading-[1.02]">See how your profile fits Canadian programs</h2><p className="!mt-5 !max-w-[570px] !text-[15px] !leading-[1.8]">Answer a few short questions and see where your profile stands against Express Entry, PNPs, work and study permits, and visitor routes.</p><div className="feature-list grid grid-cols-2 gap-3 mt-7 max-[620px]:grid-cols-1">{[["CRS & eligibility", "Understand broad program fit."], ["Pathway match", "Surface routes worth researching."], ["Free to use", "No obligation to begin."], ["Clear next steps", "Know what to prepare next."]].map(([title, description]) => <div className="feature block p-[17px] border border-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)] rounded-[15px] bg-[color-mix(in_srgb,var(--template-on-primary)_6%,transparent)]" key={title}><strong className="block !text-[13px] !leading-[1.65]">{title}</strong><small className="!text-[11px] !leading-[1.65] text-[color-mix(in_srgb,var(--template-on-primary)_62%,transparent)]">{description}</small></div>)}</div></div>
      <article className="eligibility-card min-h-0 border border-[var(--border)] bg-[var(--surface)] p-[30px] rounded-[26px] shadow-[0_30px_80px_color-mix(in_srgb,var(--cmg-template-deep-surface)_22%,transparent)] reveal"><div className="card-top flex items-center justify-between gap-5"><div><span className="text-[var(--muted)] text-[11px] font-extrabold uppercase tracking-[.13em]">Profile snapshot</span><h3 className="text-[var(--ink)] !m-[5px_0_0] !text-[26px] font-semibold leading-[1.05] tracking-normal">Pathway readiness</h3></div><div className="score-ring relative grid h-[88px] w-[88px] flex-none place-items-center rounded-[50%] border-0 ![background:conic-gradient(var(--primary)_0_72%,color-mix(in_srgb,var(--primary)_12%,transparent)_72%)] !border-t-[var(--primary)] !border-r-[var(--primary)] after:absolute after:inset-[9px] after:rounded-full after:bg-[var(--surface)] after:content-['']"><strong className="relative z-[1] font-bold text-[19px] leading-none">72%</strong></div></div><div className="snapshot grid gap-[11px] mt-[25px]">{[["Express Entry foundation", "Review", BadgeCheck], ["Provincial options", "Explore", Map], ["Work pathway", "Compare", BriefcaseBusiness], ["Study route", "Plan", GraduationCap]].map(([label, status, Icon]) => <div className="flex items-center gap-3 p-[13px] border border-[var(--border)] rounded-[13px] text-[var(--muted)] text-[12px]" key={label}><Icon className="text-[var(--primary)]" width={20} height={20} aria-hidden="true" />{label}<span className="ml-auto text-[var(--primary)] text-[11px] font-extrabold">{status}</span></div>)}</div></article>
        </div>
      </section>

      <section className="section relative z-[1] bg-[var(--secondary)] py-[104px] max-[620px]:py-[75px] dark" id="refusals">
        <div className="section-inner mx-auto w-[var(--container)] refusal-layout grid !grid-cols-[.54fr_1fr] max-[880px]:grid-cols-1 items-center gap-[55px]"><div className="refusal-copy reveal"><p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">When the file gets complicated</p><h2 className="max-w-[690px] !text-[clamp(32px,1.8rem+2.4vw,50px)] !leading-[1.02]">Refusals and procedural fairness are not the end of the line</h2><p className="!mt-5 !max-w-[570px] !text-[15px] !leading-[1.8]">Officers decide on the file they see. We isolate the stated concerns and build evidence-backed replies, reapplications or appeal paths.</p><div className="quote mt-7 border-l-0 border-t p-[20px_0_0] text-[24px] font-semibold italic leading-[1.25]">“A refusal is often a presentation problem. We fix the presentation.”</div></div><div className="refusal-grid grid grid-cols-2 max-[620px]:grid-cols-1 gap-[15px]">{[["Visitor visa refused", "Ties, funds or purpose—we strengthen the evidence and narrative.", MapPin], ["Study permit refused", "Study plan, finances or program fit—we identify and repair the gaps.", BookOpenCheck], ["Sponsorship refused", "Genuineness or eligibility—we organize the proof around the concern.", HeartHandshake], ["Procedural fairness", "Short deadlines require a focused, evidence-backed reply and clear ownership.", Timer]].map(([title, description, Icon], index) => <article className="refusal-card min-h-0 p-6 rounded-[18px] reveal bg-[color-mix(in_srgb,var(--template-on-primary)_7%,transparent)] border-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)]" key={title} style={{ "--delay": `${index * 60}ms` }}><IconBox icon={Icon} /><h3 className="!m-[9px_0_8px] !text-[19px] text-[var(--ink)] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3><p className="!m-0 !text-[14px] !leading-[1.65]">{description}</p></article>)}</div></div>
      </section>

      <ConsultantProfileSection />

      <LiveSuccessVideos />

      <section className="section relative z-[1] bg-[var(--secondary)] py-[104px] max-[880px]:py-[76px] max-[620px]:py-16 dark" id="employers"><div className="section-inner mx-auto w-[var(--container)] employer-layout grid grid-cols-[.82fr_1.18fr] max-[880px]:grid-cols-1 items-start gap-[54px]"><div className="employer-copy reveal"><p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">For Canadian employers</p><h2 className="max-w-[690px] !text-[clamp(32px,1.8rem+2.4vw,50px)] !leading-[1.02]">Canada’s employer immigration specialists</h2><p className="!mt-5 !max-w-[570px] !text-[15px] !leading-[1.8]">LMIA, Global Talent Stream, ESDC compliance and employer-side provincial representation—structured around defensible files and audit readiness.</p><div className="employer-stat block mt-[30px] border-l-4 border-[var(--primary)] p-6 bg-[color-mix(in_srgb,var(--template-on-primary)_6%,transparent)] text-[var(--muted)] text-[12px]"><strong className="block text-[var(--primary)] text-[34px] font-semibold leading-none max-[620px]:!text-[42px] max-[620px]:!leading-none" data-count="500">500<span>+</span></strong><span className="text-[color-mix(in_srgb,var(--template-on-primary)_65%,transparent)] text-[13px]">LMIAs filed across streams</span></div></div><div className="employer-grid grid grid-cols-2 max-[620px]:grid-cols-1 gap-[15px]">{[["High- & low-wage LMIA", "Full LMIA strategy and documentation support across wage levels.", BadgeDollarSign], ["Global Talent Stream", "Expedited employer pathways for eligible tech and in-demand roles.", Zap], ["Agricultural LMIA", "Seasonal and year-round agricultural stream preparation.", Wheat], ["ESDC compliance", "Audit readiness, employer obligations and TFWP integrity.", ShieldCheck]].map(([title, description, Icon], index) => <article className="employer-card min-h-0 p-6 rounded-[18px] reveal bg-[color-mix(in_srgb,var(--template-on-primary)_7%,transparent)] border-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)]" key={title} style={{ "--delay": `${index * 60}ms` }}><IconBox icon={Icon} /><h3 className="!m-[9px_0_8px] !text-[19px] text-[var(--ink)] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3><p className="!m-0 !text-[14px] !leading-[1.65]">{description}</p></article>)}</div></div></section>

      <section className="section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[880px]:py-[76px] max-[620px]:py-16 alt"><div className="section-inner mx-auto w-[var(--container)]"><SectionHeading eyebrow="How it works" title="A sharper plan changes the outcome" lead="Understand the issue, shape the evidence, protect the deadline and choose the route that fits the file." /><div className="process-grid relative grid grid-cols-4 max-[880px]:grid-cols-2 max-[880px]:gap-[18px] max-[620px]:grid-cols-1 gap-0 mt-[42px]">{[["Diagnose", "Identify what the decision-maker actually needs to see."], ["Build", "Organize facts, documents and explanations around the concern."], ["Protect", "Assign ownership and move before a procedural deadline closes."], ["Decide", "Reapply, appeal or seek review with a route shaped to the file."]].map(([title, description], index) => <article className="process-step max-[880px]:[&:nth-child(2)]:after:hidden max-[620px]:after:hidden relative z-[1] border-t border-t-[var(--border)] px-6 py-7 reveal before:absolute before:left-0 before:top-[-6px] before:size-[11px] before:rounded-full before:bg-[var(--primary)] before:content-[''] before:shadow-[0_0_0_7px_color-mix(in_srgb,var(--primary)_13%,transparent)] after:absolute after:top-[-1px] after:right-0 after:left-[11px] after:h-px after:bg-[linear-gradient(90deg,var(--primary),var(--border))] after:content-['']" key={title}><span className="block w-auto h-auto m-0 border-0 rounded-none bg-transparent text-[var(--primary)] font-extrabold text-[11px] leading-none">0{index + 1}</span><h3 className="!m-[10px_0_6px] max-[620px]:!text-[20px] text-[var(--ink)] !text-[19px] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3><p className="!m-0 !text-[13px] !leading-[1.65]">{description}</p></article>)}</div></div></section>

      <section className="section relative z-[1] py-[104px] max-[880px]:py-[76px] max-[620px]:py-16" id="tools"><div className="section-inner mx-auto w-[var(--container)]"><SectionHeading eyebrow="Free tools, all in one place" title="Make your next decision with better numbers" lead="Start with an estimate, then bring the result into a focused immigration strategy when the situation requires it." /><div className="tool-grid grid grid-cols-1 gap-[10px]">{[["CRS Calculator", "Estimate your Express Entry score.", "/tools/crs-calculator-canada", Calculator], ["PNP Eligibility", "Surface provincial pathways to research.", "/tools/pnp-eligibility-canada", Map], ["NOC Finder", "Identify your occupation classification.", "/tools/noc-finder-canada", Search], ["Document Checklist", "Organize requirements by pathway.", "/tools/document-checklist-canada", ListChecks], ["Free Assessment", "Start with a guided profile review.", "/assessment/free-canada-immigration-assessment", FileCheck2]].map(([title, description, path, Icon], index) => <TemplateLink path={path} key={title} className="homepage-tool-card group grid grid-cols-[44px_48px_1fr_24px] items-center gap-[15px] rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-[16px_18px] transition-[transform,border-color,background] duration-[300ms] ease-[ease] hover:translate-x-[5px] hover:border-[var(--primary)] reveal" style={{ "--delay": `${index * 45}ms` }}><span className="tool-index text-[var(--muted)] text-[11px] font-extrabold leading-none">0{index + 1}</span><IconBox icon={Icon} /><span className="grid gap-1"><strong className="text-[13px] transition-[color] duration-[200ms] ease-[ease] group-hover:text-[var(--primary)]">{title}</strong><small className="text-[var(--muted)] text-[11px]">{description}</small></span><ArrowUpRight className="text-[var(--muted)] transition-[color] duration-[200ms] ease-[ease] group-hover:text-[var(--primary)]" width={18} height={18} aria-hidden="true" /></TemplateLink>)}</div></div></section>

      <section className="cta-section bg-[linear-gradient(125deg,var(--primary),color-mix(in_srgb,var(--primary)_38%,var(--cmg-dark-secondary)))] text-[var(--template-on-primary)] py-[72px] max-[620px]:!py-[12px_0_75px]" id="consultation"><div className="cta-shell flex items-center justify-between w-[var(--container)] gap-10 mx-auto p-0 rounded-none bg-transparent max-[620px]:!p-[31px_25px]"><div className="reveal"><h2 className="!text-[clamp(30px,1.8rem+2.2vw,46px)] !leading-none !text-[var(--template-on-primary)]">Not sure which pathway fits your profile?</h2><p className="!mt-[12px] max-w-[650px] !text-[16px] !text-[color-mix(in_srgb,var(--template-on-primary)_80%,transparent)]">Our licensed consultants will review your profile and map the clearest route to your goal—without pressure.</p></div><TemplateLink path={site.ctas.primary.href} className="btn reveal !flex-none !px-6 !py-[17px] max-[620px]:!w-full bg-[var(--template-on-primary)] text-[var(--cmg-dark-secondary)] hover:bg-[var(--cmg-dark-secondary)] hover:text-[var(--template-on-primary)]">Book a Free Consultation <ArrowUpRight width="19" height="19" aria-hidden="true" /></TemplateLink></div></section>

      <FaqSection faqs={getPageFaqs(page)} />

    </div>
  );
}
