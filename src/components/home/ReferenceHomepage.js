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
// import { HERO_SLIDES } from "@/lib/heroSlides";
// import HeroCarousel from "./HeroCarousel";
import HeroBackground from "./HeroBackground";
import HeroProofCardCarousel from "./HeroProofCardCarousel";
import ConsultantProfileSection from "./ConsultantProfileSection";
import PaymentTrustSection from "./PaymentTrustSection";
// Client Success Gallery — temporarily disabled (not wanted on the site right
// now). The component file is kept at ./LiveSuccessVideos.js for later reuse:
// restore this import and the <LiveSuccessVideos /> call below to bring it back.
// import LiveSuccessVideos from "./LiveSuccessVideos";
import LatestBlogsCarousel from "./LatestBlogsCarousel";
import TemplateMotion from "./TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import { getPageFaqs } from "@/lib/faqs";
import { getImageObjectPosition } from "@/lib/imagePresentation";
import SeoGuideSection from "@/components/sections/SeoGuideSection";

const href = (path) => currentPagePath(path);

const PATHWAYS = [
  ["Permanent residence", "Express Entry & PR", "Review Express Entry options, CRS factors and the evidence that may support a permanent-residence application.", "/immigrate/express-entry", CompassIcon],
  ["PNP pathways", "Provincial nominees", "Review provincial nominee streams and compare your profile with their published criteria.", "/immigrate/provincial-nominee-program-all-provinces-consolidated", MapPin],
  ["Work in Canada", "Work permits", "Explore employer-specific and open work permits, LMIA requirements and other options that may fit your situation.", "/work-and-study/canada-work-permit-overview", BriefcaseBusiness],
  ["Study in Canada", "Study permits", "Plan your study permit application and review post-graduation work options for which you may qualify.", "/work-and-study/canada-study-permit", GraduationCap],
  ["Family sponsorship", "Family sponsorship", "Review sponsorship options for spouses, partners, children, parents and other eligible relatives.", "/sponsor/family-sponsorship-overview-all-categories", HeartHandshake],
  ["Refusal support", "Refusals & next steps", "Understand the refusal reasons, evidence gaps and possible next steps for your case.", "/inadmissibility-and-appeals/refusal-and-pfl-response", ShieldCheck]];

const SERVICES = [
  ["Get guidance on the Federal Skilled Worker, Canadian Experience Class and Federal Skilled Trades programs, CRS factors, and category-based rounds.", "Express Entry & PR", "/immigrate/express-entry", BadgeCheck],
  ["Review employer-specific and open work permits, post-graduation permits, spousal permits and status-restoration options.", "Work permits", "/work-and-study/canada-work-permit-overview", BriefcaseBusiness],
  ["Plan your application around your school and program, any applicable attestation requirements, your study purpose, and post-graduation options that may be available.", "Study permits", "/work-and-study/canada-study-permit", GraduationCap],
  ["Prepare sponsorship applications for spouses, partners, parents, and dependent children, with evidence tailored to each category.", "Family sponsorship", "/sponsor/family-sponsorship-overview-all-categories", HeartHandshake],
  ["Review visitor visa, eTA, business-travel and Super Visa requirements for the purpose of your trip.", "Visitor visas & Super Visa", "/visit/visitor-visa-trv-and-super-visa-combined", MapPin],
  ["Compare Start-Up Visa and provincial entrepreneur options with current program rules.", "Business immigration", "/immigrate/business-immigration-and-start-up-visa", BadgeDollarSign],
  ["Learn when restoration may be available and which rules can apply while IRCC reviews a request.", "Status restoration", "/blog/restore-status-canada-worker-student", ShieldCheck],
  ["Review refusal reasons and procedural fairness letters, then consider possible next steps. Federal Court judicial reviews require a lawyer.", "Refusals & PFL responses", "/inadmissibility-and-appeals/refusal-and-pfl-response", BookOpenCheck],
  ["Review requirements for permanent resident cards, travel documents, and citizenship applications.", "PR cards & citizenship", "/citizenship/pr-card-renewal-and-citizenship-combined-overview", BadgeCheck]];

const GUIDE_ITEMS = [
  ["Immigration guides", "Browse guides to permanent residence, temporary permits, family sponsorship and other Canadian pathways.", "/blog"],
  ["Provinces & territories", "Compare provincial and territorial streams before deciding which destination to research.", "/immigrate/provincial-nominee-program-all-provinces-consolidated"],
  ["Express Entry", "Review federal program eligibility, CRS ranking and category-based invitation rounds.", "/immigrate/express-entry"],
  ["Calculators and checklists", "Estimate your CRS score, review broad PNP options and organize application documents.", "/tools/canada-immigration-calculators"],
  ["Employer services", "Explore LMIA requirements, the Global Talent Stream and employer compliance.", "/work-and-study/lmia-and-employer-services-overview"],
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
        <h2 className={`max-w-[760px] ${className.includes("pathways-section-head") ? "!text-[var(--template-on-primary)] !text-[clamp(34px,1.9rem+3.2vw,56px)] !leading-[1.04] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_36%,transparent)] max-[880px]:!text-[clamp(32px,5.2vw,40px)] max-[620px]:!text-[clamp(31px,8.6vw,36px)]" : ""}`.trim()}>{title}</h2>
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
  const heroTitle = pageDataTitle || "Licensed Immigration Consultant (RCIC) in Brampton, Ontario";
  const heroLead = pageDataLead || "Commonwealth Migration Group Inc. is a Canadian immigration firm based in Brampton, Ontario. Our licensed RCIC team helps with Express Entry, PNP, work and study permits, Super Visa applications, family sponsorship, refusal responses, and judicial reviews. Online consultations are available to clients across Canada and worldwide.";

  return (
    <div className="cmg-template-home relative overflow-hidden bg-[var(--bg)] text-[var(--ink)] text-base leading-[1.65] [--container:min(1220px,calc(100%-40px))] max-[1120px]:[--container:min(1220px,calc(100%-32px))] max-[620px]:[--container:calc(100%-28px)] max-[620px]:text-[15px]" data-concept="nocturne">
      <TemplateMotion />
      <section className="hero group/hero relative isolate before:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--cmg-template-deep-surface)_2%,transparent),color-mix(in_srgb,var(--bg)_52%,transparent)_145%)] after:top-[-180px] after:right-[-170px] after:h-[520px] after:w-[520px] after:rounded-full after:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] after:blur-[80px] w-full overflow-hidden bg-transparent pb-20 min-[881px]:min-h-[max(880px,100svh)] before:absolute before:z-[-2] before:pointer-events-none before:content-[''] after:absolute after:z-[-2] after:pointer-events-none after:content-['']" aria-labelledby="hero-title">
        <div className="ambient a absolute z-[-1] size-[360px] rounded-full bg-[var(--primary)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] top-[2%] right-[15%] max-[880px]:hidden" aria-hidden="true" />
        <div className="ambient b absolute z-[-1] size-[360px] rounded-full bg-[var(--accent)] opacity-[.16] blur-[50px] animate-[cmg-template-ambient_10s_ease-in-out_infinite_alternate] bottom-[4%] left-[-8%] [animation-delay:-4s] max-[880px]:hidden" aria-hidden="true" />
        {/* Carousel retained for later use; the homepage currently uses one fixed hero image. */}
        {/* <HeroCarousel slides={HERO_SLIDES} className="hero-background-carousel z-[-3] w-full min-h-full rounded-[30px] border border-[var(--border)] bg-[var(--secondary)] shadow-[var(--shadow)]" /> */}
        <HeroBackground />
        <div className="hero-layout relative z-[1] grid grid-cols-[minmax(0,1fr)_minmax(420px,.86fr)] max-[1120px]:grid-cols-[minmax(0,1fr)_minmax(360px,.85fr)] max-[880px]:grid-cols-1 items-center max-[880px]:items-start gap-[66px] max-[1120px]:gap-[38px] max-[880px]:gap-[44px] w-[min(1280px,calc(100%-48px))] max-[620px]:w-[var(--container)] mx-auto">
          <div className="hero-copy relative z-[2] min-w-0 max-[880px]:w-full text-[var(--template-on-primary)] reveal in">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">Brampton-based · Online consultations worldwide</p>
            <h1 id="hero-title" className="max-w-[790px] max-[1120px]:!text-[clamp(36px,4.2vw,48px)] max-[620px]:!text-[clamp(24px,6.7vw,28px)] max-[1023.98px]:text-center max-[1023.98px]:mx-auto text-[clamp(42px,2.2rem+3.4vw,66px)] font-semibold max-[620px]:!font-extrabold leading-[1.04] tracking-[-.03em] text-[var(--template-on-primary)] [text-shadow:0_2px_18px_color-mix(in_srgb,var(--cmg-template-deep-surface)_42%,transparent),0_1px_2px_color-mix(in_srgb,var(--cmg-template-deep-surface)_55%,transparent)] text-[var(--ink)]">{heroTitle}</h1>
            <p className="lead max-w-[680px] max-[1023.98px]:text-center max-[1023.98px]:mx-auto !mt-6 text-[color-mix(in_srgb,var(--template-on-primary)_82%,transparent)] [text-shadow:0_1px_10px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent)] text-[17px] leading-[1.8] max-[620px]:text-[15px]">{heroLead}</p>
            <div className="hero-actions flex flex-wrap gap-3 mt-[30px] max-[768px]:!flex max-[768px]:!flex-col max-[768px]:!items-center max-[768px]:!gap-3 max-[768px]:!mt-6">
              <TemplateLink path={site.ctas.primary.href} className="btn btn-primary max-[768px]:!w-full max-[768px]:!min-h-[52px] max-[768px]:!px-[22px] max-[768px]:!py-[14px] max-[768px]:!rounded-[14px] max-[768px]:!text-[14px] max-[640px]:!p-[15px]">Book a Consultation <ArrowRight width={18} height={18} aria-hidden="true" /></TemplateLink>
            <TemplateLink path="/tools/crs-calculator" className="btn btn-secondary max-[768px]:!w-auto max-[768px]:!min-h-10 max-[768px]:!px-[18px] max-[768px]:!py-[9px] max-[768px]:!rounded-full max-[768px]:!text-[12.5px] max-[768px]:!bg-[color-mix(in_srgb,var(--template-on-primary)_8%,transparent)] max-[768px]:!border-[color-mix(in_srgb,var(--template-on-primary)_22%,transparent)] max-[768px]:!shadow-none max-[768px]:[&:hover]:!bg-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)] max-[768px]:[&:hover]:!border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] max-[768px]:[&:hover]:!transform-none max-[768px]:[&:focus-visible]:!bg-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)] max-[768px]:[&:focus-visible]:!border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] max-[768px]:[&:focus-visible]:!transform-none">Check your CRS <Calculator className="max-[768px]:!h-[14px] max-[768px]:!w-[14px]" width={18} height={18} aria-hidden="true" /></TemplateLink>
            </div>
          </div>
          <div className="hero-visual self-start relative w-full min-h-[530px] max-[880px]:static max-[880px]:min-h-0 max-[880px]:mt-[26px] reveal in">
            <HeroProofCardCarousel />
          </div>
        </div>
      </section>

      {/* Directly under the hero: this is the first thing a visitor meets after
          scrolling, so the licensed consultant leads the page rather than
          appearing eight sections further down. */}
      <ConsultantProfileSection />

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16" id="pathways">
        <div className="section-inner mx-auto w-[var(--container)]">
          <SectionHeading className="pathways-section-head" title="Immigration pathways from Brampton, Ontario" lead="Explore Express Entry, provincial nomination programs, work and study permits, family sponsorship and refusal support. Our Brampton-based practice offers online consultations across Canada and worldwide." />
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
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-[''] [text-shadow:0_1px_8px_color-mix(in_srgb,var(--cmg-template-deep-surface)_28%,transparent)]">Licensed RCIC · Brampton &amp; Canada-wide</p>
            <h2 className="!text-[34px] !leading-none">Canadian immigration case planning in Brampton</h2>
            <p className="role !m-0 !mt-3 !mb-7 text-[var(--muted)] !text-[16px] !leading-[1.65]">Pankaj Khanna, RCIC, advises on complex and time-sensitive immigration matters.</p>
            <ul className="expertise !m-0 grid grid-cols-2 gap-[10px] max-[620px]:grid-cols-1 !p-0 list-none">
              {["Refusal, inadmissibility and deadline reviews", "Employer compliance and workforce planning", "Express Entry profiles and supporting documents", "Provincial pathway comparisons across Canada", "Atlantic, western and prairie program research", "Procedural fairness letter responses"].map((item) => <li className="flex items-start gap-[9px] rounded-[13px] p-3 text-[var(--muted)] text-[13px] bg-[color-mix(in_srgb,var(--primary)_5%,var(--surface))]" key={item}><CheckCircle2 className="mt-0.5 flex-none text-[var(--primary)]" width={17} height={17} aria-hidden="true" />{item}</li>)}
            </ul>
            <div className="profile-meta flex flex-wrap gap-2 mt-[25px] text-[var(--muted)] text-[11px] font-bold"><span className="px-[11px] py-2 border border-[var(--border)] rounded-full text-[11px] font-bold">Canada-wide service</span><span className="px-[11px] py-2 border border-[var(--border)] rounded-full text-[11px] font-bold">Evidence-led preparation</span><span className="px-[11px] py-2 border border-[var(--border)] rounded-full text-[11px] font-bold">Plain-language guidance</span></div>
          </article>
          <aside className="quick-panel relative min-h-[340px] rounded-[var(--radius)] border border-[var(--border)] bg-[linear-gradient(145deg,var(--accent),var(--cmg-dark-secondary))] text-[var(--template-on-primary)] p-[38px] max-[620px]:p-[25px] reveal">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 whitespace-nowrap text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">Complex cases · Clear next steps</p>
            <h3 className="!m-0 text-[var(--template-on-primary)] !text-[26px] font-semibold !leading-[1.15] tracking-normal">Not sure which pathway fits?</h3>
            <p className="!m-0 !mt-[10px] !text-[color-mix(in_srgb,var(--template-on-primary)_77%,transparent)] !text-[16px] !leading-[1.65]">Use the free assessment to identify possible routes and questions for further review.</p>
            <div className="quick-links grid gap-[11px] mt-6">
              {[["Start the free assessment", site.ctas.assessment.href], ["CRS calculator", "/tools/crs-calculator-canada"], ["PNP eligibility check", "/tools/pnp-eligibility-canada"], ["NOC finder", "/tools/noc-finder-canada"]].map(([label, path]) => <TemplateLink key={label} path={path} className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--template-on-primary)_18%,transparent)] pb-[9px] text-[color-mix(in_srgb,var(--template-on-primary)_86%,transparent)] text-[13px] font-bold leading-[1.65]">{label}<ArrowUpRight width={17} height={17} aria-hidden="true" /></TemplateLink>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="section relative z-[1] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16" id="services">
        <div className="section-inner mx-auto w-[var(--container)]">
          <SectionHeading eyebrow="Choose the type of help you need" title="Canadian immigration services for individuals, families and employers" lead="Review support for permanent residence, temporary permits, family sponsorship, citizenship and refusal matters." />
          <div className="service-grid grid grid-cols-3 gap-[15px] max-[1120px]:grid-cols-2 max-[620px]:grid-cols-1">
            {SERVICES.map(([description, title, path, Icon], index) => <TemplateLink key={title} path={path} className="service-card relative flex min-h-[220px] flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-[25px] rounded-[20px] reveal transition-[transform,border-color,box-shadow] duration-[250ms] ease-in-out before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-[20px_20px_0_0] before:bg-[linear-gradient(90deg,var(--primary),var(--accent))] before:origin-left before:scale-x-[.28] before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(.2,.8,.2,1)] before:content-[''] hover:before:scale-x-100 hover:-translate-y-[5px] hover:border-[color-mix(in_srgb,var(--primary)_45%,var(--border))] hover:shadow-[var(--shadow-soft)]" style={{ "--delay": `${index * 45}ms` }}><IconBox icon={Icon} /><h3 className="!m-[9px_0_8px] text-[var(--ink)] !text-[19px] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3><p className="!m-0 !text-[var(--muted)] !text-[14px] !leading-[1.65]">{description}</p><ArrowUpRight className="self-end mt-auto" width={18} height={18} aria-hidden="true" /></TemplateLink>)}
          </div>
        </div>
      </section>

      <section className="section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 alt">
        <div className="section-inner mx-auto w-[var(--container)] guide-layout grid grid-cols-[.82fr_1.18fr] max-[880px]:grid-cols-1 items-stretch gap-[46px]">
        <div className="guide-image group relative min-h-[610px] max-[880px]:!min-h-[400px] max-[620px]:!min-h-[350px] overflow-hidden border-0 rounded-[var(--radius)] shadow-[var(--shadow-soft)] after:absolute after:z-[2] after:right-6 after:bottom-6 after:left-6 after:p-[18px_20px] after:rounded-2xl after:bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_67%,transparent)] after:content-['Welcome_to_Canada'] after:backdrop-blur-[12px] after:text-[var(--template-on-primary)] after:text-[20px] after:leading-[1.2] after:pointer-events-none reveal"><Image className="object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.04]" src="/images/pages/toronto-skyline.webp" alt="Toronto skyline from a Canadian autumn park" fill quality={75} sizes="(max-width: 620px) calc(100vw - 28px), (max-width: 880px) calc(100vw - 32px), (max-width: 1120px) calc(41vw - 32px), 481px" style={{ objectPosition: getImageObjectPosition("/images/pages/toronto-skyline.webp") }} /></div>
          <div className="guide-copy">
            <SectionHeading eyebrow="Shape your pathway" title="Explore the guides before you decide" lead="Start with an overview, then open the guides that explain eligibility, evidence and next steps for each Canadian immigration option." />
            <ol className="guide-list block m-0 p-0 list-none border-t border-[var(--border)]">
              {GUIDE_ITEMS.map(([title, description, path], index) => <li key={title} className="reveal grid grid-cols-[46px_1fr_24px] items-center gap-4 border-b border-[var(--border)] py-[18px]" style={{ "--delay": `${index * 45}ms` }}><span className="text-[var(--primary)] text-[11px] font-extrabold leading-none">0{index + 1}</span><div><strong className="text-[var(--ink)] text-[15px] font-bold leading-normal">{title}</strong><p className="!m-[3px_0_0] !text-[var(--muted)] !text-[13px] !leading-[1.65]">{description}</p></div><TemplateLink path={path} className="text-[var(--primary)]" aria-label={`Open ${title}`}><ArrowUpRight width={18} height={18} aria-hidden="true" /></TemplateLink></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section relative z-[1] bg-[var(--secondary)] py-[104px] max-[1120px]:py-[88px] max-[880px]:py-[76px] max-[620px]:py-16 dark">
        <div className="section-inner mx-auto w-[var(--container)] eligibility-layout grid grid-cols-[1fr_.92fr] max-[880px]:grid-cols-1 items-center gap-[60px]">
          <div className="eligibility-copy reveal">
            <p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">Free immigration assessment</p>
            <h2 className="max-w-[690px] !text-[clamp(32px,1.8rem+2.4vw,50px)] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-[1.02]">See which Canadian pathways may be worth exploring</h2>
            <p className="!mt-5 !max-w-[570px] !text-[15px] !leading-[1.8]">Answer questions about your goal, current status and timeline to identify possible routes and what to verify next. The assessment is a starting point, not an official eligibility decision.</p>
            <div className="feature-list grid grid-cols-2 gap-3 mt-7 max-[620px]:grid-cols-1">
              {[["Express Entry", "Review program eligibility and CRS factors."], ["Provincial programs", "Compare streams that may suit your profile."], ["Work and study", "Check permit options and conditions."], ["Family and visits", "Review the route and evidence required."]].map(([title, description]) => <div className="feature block p-[17px] border border-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)] rounded-[15px] bg-[color-mix(in_srgb,var(--template-on-primary)_6%,transparent)]" key={title}><strong className="block !text-[13px] !leading-[1.65]">{title}</strong><small className="!text-[11px] !leading-[1.65] text-[color-mix(in_srgb,var(--template-on-primary)_62%,transparent)]">{description}</small></div>)}
            </div>
            <TemplateLink path={site.ctas.assessment.href} className="btn btn-primary mt-7 w-fit">Start the free assessment <ArrowUpRight width="18" height="18" aria-hidden="true" /></TemplateLink>
          </div>
          <article className="eligibility-card min-h-0 border border-[var(--border)] bg-[var(--surface)] p-[30px] rounded-[26px] shadow-[0_30px_80px_color-mix(in_srgb,var(--cmg-template-deep-surface)_22%,transparent)] reveal">
            <div className="card-top flex items-center justify-between gap-5">
              <div>
                <span className="text-[var(--muted)] text-[11px] font-extrabold uppercase tracking-[.13em]">Assessment preview</span>
                <h3 className="text-[var(--ink)] !m-[5px_0_0] !text-[26px] font-semibold leading-[1.05] tracking-normal">Topics to review</h3>
              </div>
              <div className="grid h-[88px] w-[88px] flex-none place-items-center rounded-full border border-[color-mix(in_srgb,var(--primary)_25%,var(--border))] bg-[color-mix(in_srgb,var(--primary)_8%,var(--surface))]">
                <Search className="text-[var(--primary)]" width={28} height={28} aria-hidden="true" />
              </div>
            </div>
            <div className="snapshot grid gap-[11px] mt-[25px]">
              {[["Express Entry", "Check eligibility", BadgeCheck], ["Provincial streams", "Compare", Map], ["Work permit options", "Review", BriefcaseBusiness], ["Study and family routes", "Explore", GraduationCap]].map(([label, status, Icon]) => <div className="flex items-center gap-3 p-[13px] border border-[var(--border)] rounded-[13px] text-[var(--muted)] text-[12px]" key={label}><Icon className="text-[var(--primary)]" width={20} height={20} aria-hidden="true" />{label}<span className="ml-auto text-[var(--primary)] text-[11px] font-extrabold">{status}</span></div>)}
            </div>
            <p className="!mb-0 !mt-4 !text-[12px] !leading-[1.6] !text-[var(--muted)]">The results depend on the information you provide and must be checked against current official instructions.</p>
          </article>
        </div>
      </section>

      <section className="section relative z-[1] bg-[var(--secondary)] py-[104px] max-[620px]:py-[75px] dark" id="refusals">
        <div className="section-inner mx-auto w-[var(--container)] refusal-layout grid !grid-cols-[.54fr_1fr] max-[880px]:!grid-cols-1 items-center gap-[55px] max-[880px]:gap-8"><div className="refusal-copy reveal"><p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">When an application is refused</p><h2 className="max-w-[690px] !text-[clamp(32px,1.8rem+2.4vw,50px)] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-[1.02]">Understand the refusal and review possible next steps</h2><p className="!mt-5 !max-w-[570px] !text-[15px] !leading-[1.8]">Start with the decision letter and the evidence already submitted. A focused review can identify the concerns raised, any missing information and the available response options.</p><div className="quote mt-7 border-l-0 border-t p-[20px_0_0] text-[24px] font-semibold italic leading-[1.25]">Focus a response on the concerns raised in the decision.</div></div><div className="refusal-grid grid grid-cols-2 max-[620px]:!grid-cols-1 gap-[15px]">{[["Visitor visa refusals", "Review the refusal reasons, travel plans, funding and supporting records.", MapPin], ["Study permit refusals", "Check the study plan, funding evidence and how the program fits your history.", BookOpenCheck], ["Sponsorship refusals", "Review the relationship evidence and eligibility requirements raised in the decision.", HeartHandshake], ["Procedural fairness letters", "Identify the concerns and deadline, then organize a response to each point.", Timer]].map(([title, description, Icon], index) => <article className="refusal-card min-h-0 p-6 rounded-[18px] reveal bg-[color-mix(in_srgb,var(--template-on-primary)_7%,transparent)] border-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)]" key={title} style={{ "--delay": `${index * 60}ms` }}><IconBox icon={Icon} /><h3 className="!m-[9px_0_8px] !text-[19px] text-[var(--ink)] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3><p className="!m-0 !text-[14px] !leading-[1.65]">{description}</p></article>)}</div></div>
      </section>

      {/* Client Success Gallery — temporarily disabled. Restore with: <LiveSuccessVideos /> */}
      <LatestBlogsCarousel />

      <section className="section relative z-[1] bg-[var(--secondary)] py-[104px] max-[880px]:py-[76px] max-[620px]:py-16 dark" id="employers"><div className="section-inner mx-auto w-[var(--container)] employer-layout grid grid-cols-[.82fr_1.18fr] max-[880px]:grid-cols-1 items-start gap-[54px]"><div className="employer-copy reveal"><p className="eyebrow m-0 !mb-[18px] flex items-start gap-3 text-[var(--primary)] !font-extrabold !text-xs !leading-[1.65] tracking-[.18em] max-[480px]:tracking-[.09em] uppercase before:w-[38px] before:h-0.5 before:mt-1.5 before:flex-none before:bg-current before:content-['']">For employers hiring in Canada</p><h2 className="max-w-[690px] !text-[clamp(32px,1.8rem+2.4vw,50px)] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-[1.02]">Canadian immigration support for employers</h2><p className="!mt-5 !max-w-[570px] !text-[15px] !leading-[1.8]">We help employers review LMIA requirements, the Global Talent Stream, ESDC compliance and relevant provincial programs. Recommendations depend on the role, workplace, evidence and current program rules.</p></div><div className="employer-grid grid grid-cols-2 max-[620px]:grid-cols-1 gap-[15px]">{[["High- and low-wage LMIA", "Prepare the job details, recruitment record and supporting documents for the applicable LMIA stream.", BadgeDollarSign], ["Global Talent Stream", "Review whether an eligible technology role may fit the Global Talent Stream and its requirements.", Zap], ["Agricultural LMIA", "Organize seasonal or year-round agricultural hiring evidence for the relevant LMIA stream.", Wheat], ["ESDC compliance", "Review employer obligations and prepare records for possible Temporary Foreign Worker Program inspections.", ShieldCheck]].map(([title, description, Icon], index) => <article className="employer-card min-h-0 p-6 rounded-[18px] reveal bg-[color-mix(in_srgb,var(--template-on-primary)_7%,transparent)] border-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)]" key={title} style={{ "--delay": `${index * 60}ms` }}><IconBox icon={Icon} /><h3 className="!m-[9px_0_8px] !text-[19px] text-[var(--ink)] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3><p className="!m-0 !text-[14px] !leading-[1.65]">{description}</p></article>)}</div></div></section>

      <section className="section relative z-[1] bg-[var(--surface-alt)] py-[104px] max-[880px]:py-[76px] max-[620px]:py-16 alt"><div className="section-inner mx-auto w-[var(--container)]"><SectionHeading eyebrow="How our approach works" title="A clear process for your next step" lead="We review the issue, organize the supporting evidence, track deadlines and explain the options that may be available." /><div className="process-grid relative grid grid-cols-4 max-[880px]:grid-cols-2 max-[880px]:gap-[18px] max-[620px]:grid-cols-1 gap-0 mt-[42px]">{[["Review", "Identify the decision or question that needs attention."], ["Organize", "Connect relevant facts and documents to the applicable criteria."], ["Track", "Record deadlines and who needs to take the next action."], ["Discuss", "Review possible options and agree on a practical next step."]].map(([title, description], index) => <article className="process-step max-[880px]:[&:nth-child(2)]:after:hidden max-[620px]:after:hidden relative z-[1] border-t border-t-[var(--border)] px-6 py-7 reveal before:absolute before:left-0 before:top-[-6px] before:size-[11px] before:rounded-full before:bg-[var(--primary)] before:content-[''] before:shadow-[0_0_0_7px_color-mix(in_srgb,var(--primary)_13%,transparent)] after:absolute after:top-[-1px] after:right-0 after:left-[11px] after:h-px after:bg-[linear-gradient(90deg,var(--primary),var(--border))] after:content-['']" key={title}><span className="block w-auto h-auto m-0 border-0 rounded-none bg-transparent text-[var(--primary)] font-extrabold text-[11px] leading-none">0{index + 1}</span><h3 className="!m-[10px_0_6px] max-[620px]:!text-[20px] text-[var(--ink)] !text-[19px] !font-extrabold !leading-[1.25] tracking-normal">{title}</h3><p className="!m-0 !text-[13px] !leading-[1.65]">{description}</p></article>)}</div></div></section>

      {/* The payment and document-handling section follows the process section
          shown above, before visitors reach the tools and final CTA. */}
      <PaymentTrustSection />

      <section className="section relative z-[1] py-[104px] max-[880px]:py-[76px] max-[620px]:py-16" id="tools"><div className="section-inner mx-auto w-[var(--container)]"><SectionHeading eyebrow="Free tools for the next decision" title="Use free tools to plan your next step" lead="Use an estimate or checklist to organize your questions, then verify important details against the current official instructions." /><div className="tool-grid grid grid-cols-1 gap-[10px]">{[["CRS Calculator", "Estimate your Express Entry CRS score from the information you enter.", "/tools/crs-calculator-canada", Calculator], ["PNP Eligibility", "Find provincial streams to research; confirm each stream’s current rules.", "/tools/pnp-eligibility-canada", Map], ["NOC Finder", "Compare your job duties with National Occupational Classification descriptions.", "/tools/noc-finder-canada", Search], ["Document Checklist", "Organize the documents requested for the pathway you are considering.", "/tools/document-checklist-canada", ListChecks], ["Free Assessment", "Share your goal, status and timeline to identify questions for further review.", "/assessment/free-canada-immigration-assessment", FileCheck2]].map(([title, description, path, Icon], index) => <TemplateLink path={path} key={title} className="homepage-tool-card group grid grid-cols-[44px_48px_1fr_24px] items-center gap-[15px] rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-[16px_18px] transition-[transform,border-color,background] duration-[300ms] ease-[ease] hover:translate-x-[5px] hover:border-[var(--primary)] reveal" style={{ "--delay": `${index * 45}ms` }}><span className="tool-index text-[var(--muted)] text-[11px] font-extrabold leading-none">0{index + 1}</span><IconBox icon={Icon} /><span className="grid gap-1"><strong className="text-[13px] transition-[color] duration-[200ms] ease-[ease] group-hover:text-[var(--primary)]">{title}</strong><small className="text-[var(--muted)] text-[11px]">{description}</small></span><ArrowUpRight className="text-[var(--muted)] transition-[color] duration-[200ms] ease-[ease] group-hover:text-[var(--primary)]" width={18} height={18} aria-hidden="true" /></TemplateLink>)}</div></div></section>

      <section className="cta-section bg-[linear-gradient(125deg,var(--primary),color-mix(in_srgb,var(--primary)_38%,var(--cmg-dark-secondary)))] text-[var(--template-on-primary)] py-[72px] max-[620px]:!py-[12px_0_75px]" id="consultation"><div className="cta-shell flex items-center justify-between w-[var(--container)] gap-10 mx-auto p-0 rounded-none bg-transparent max-[620px]:!flex-col max-[620px]:!items-stretch max-[620px]:!gap-6 max-[620px]:!p-[31px_25px]"><div className="reveal"><h2 className="!text-[clamp(30px,1.8rem+2.2vw,46px)] max-[880px]:!text-[clamp(30px,5.2vw,40px)] max-[620px]:!text-[clamp(29px,8.6vw,35px)] !leading-none !text-[var(--template-on-primary)]">Not sure which pathway fits your profile?</h2><p className="!mt-[12px] max-w-[650px] !text-[16px] !text-[color-mix(in_srgb,var(--template-on-primary)_80%,transparent)]">A licensed RCIC can help you compare possible options and decide what to verify next.</p></div><TemplateLink path={site.ctas.primary.href} className="btn reveal !flex-none !px-6 !py-[17px] max-[620px]:!w-full bg-[var(--template-on-primary)] text-[var(--cmg-dark-secondary)] hover:bg-[var(--cmg-dark-secondary)] hover:text-[var(--template-on-primary)]">Book a Consultation <ArrowUpRight width="19" height="19" aria-hidden="true" /></TemplateLink></div></section>

      <FaqSection
        eyebrow="Immigration guidance in Brampton"
        title="Common questions about immigration consultants in Brampton"
        description="Answers about CICC licensing, services, fees and consultations in Brampton or online across Canada and worldwide."
        faqs={getPageFaqs(page)}
      />

      <SeoGuideSection page={page} eyebrow="Brampton immigration guidance" title="Plan your next Canadian immigration step" />

    </div>
  );
}
