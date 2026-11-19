import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  CircleParking,
  FileCheck2,
  FileText,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import { getPageFaqs } from "@/lib/faqs";
import FaqSection from "@/components/sections/FaqSection";
import BramptonOfficeSection from "./BramptonOfficeSection";
import ConsultantProfileSection from "./ConsultantProfileSection";
import TemplateMotion from "./TemplateMotion";
import styles from "./BramptonLocationPage.module.css";

const { address, rcic } = site;
const languages = [
  { name: "English", native: "English", code: "en" },
  { name: "Hindi", native: "हिन्दी", code: "hi" },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", code: "pa" },
  { name: "Marathi", native: "मराठी", code: "mr" },
  { name: "Gujarati", native: "ગુજરાતી", code: "gu" },
  { name: "French", native: "Français", code: "fr" },
  { name: "Arabic", native: "العربية", code: "ar", direction: "rtl" },
];

const reasons = [
  {
    title: "Independent licence check",
    text: "Confirm who will advise you and check that person’s licence in the regulator’s own register.",
    icon: BadgeCheck,
    link: { href: "#verify-licence", label: "See how to verify a licence" },
  },
  {
    title: "Fees in writing",
    text: "Review the services, professional fees, government charges and applicable tax before signing.",
    icon: FileText,
  },
  {
    title: "Saturday appointments",
    text: "Book an in-person appointment during office hours, Monday through Saturday, or ask to meet online.",
    icon: CalendarDays,
  },
  {
    title: "Free parking in front",
    text: "Park in front of the building and head to Suite 615 at 2250 Bovaird Drive East.",
    icon: CircleParking,
    link: { href: "#brampton-office", label: "See the entrance and directions" },
  },
  {
    title: "A clear point of contact",
    text: "Know who is handling your file, what documents to send and what the next step is.",
    icon: Users,
  },
  {
    title: "Advice grounded in your case",
    text: "Discuss your options, eligibility and deadlines in a free first consultation.",
    icon: HeartHandshake,
  },
];

const services = [
  {
    title: "Super Visa for parents and grandparents",
    text: "Review household size and host income, plan the invitation letter and check the medical exam and health insurance requirements.",
    icon: Users,
    links: [["Super Visa guide", "/visit/super-visa-standalone-page"]],
  },
  {
    title: "Spousal and family sponsorship",
    text: "Compare sponsorship routes, check the requirements for each person and organize evidence for the relationship and other eligibility criteria.",
    icon: HeartHandshake,
    links: [["Spousal sponsorship", "/sponsor/spousal-common-law-sponsorship"]],
  },
  {
    title: "Express Entry and Ontario immigration",
    text: "Check federal eligibility, your CRS factors and whether your work or education history fits a current Ontario nominee stream.",
    icon: FileCheck2,
    links: [["Express Entry", "/immigrate/express-entry"], ["Ontario PNP", "/immigrate/ontario-pnp-oinp"]],
  },
  {
    title: "Study permits and PGWP",
    text: "Plan around your study permit and review how your school, program and deadlines affect eligibility for a post-graduation work permit.",
    icon: GraduationCap,
    links: [["Study permits", "/work-and-study/canada-study-permit"], ["PGWP", "/work-and-study/post-graduation-work-permit-pgwp"]],
  },
  {
    title: "Work permits and employer services",
    text: "Compare work permit options, including spousal open work permits, and check whether an employer needs a Labour Market Impact Assessment (LMIA).",
    icon: BriefcaseBusiness,
    links: [["Work permits", "/work-and-study/canada-work-permit-overview"], ["LMIA support", "/work-and-study/lmia-and-employer-services-overview"]],
  },
  {
    title: "Visitor visas, refusals and temporary resident permits",
    text: "Prepare evidence for a visit or review a refusal letter and its deadlines. Where necessary, we can refer you to a lawyer for Federal Court advice.",
    icon: Globe2,
    links: [["Visitor visas", "/visit/visitor-visa-trv-standalone-page"], ["After a refusal", "/inadmissibility-and-appeals/refusal-and-pfl-response"]],
  },
];

const representativeChecks = [
  {
    title: "Know who will represent you",
    text: "Ask for the adviser’s full name and licence number. If you appoint a representative, make sure their details appear on the required IRCC form.",
    icon: BadgeCheck,
  },
  {
    title: "Get the terms in writing",
    text: "Read the service agreement before signing. Confirm who will do the work, what it covers and what you’ll pay.",
    icon: FileText,
  },
  {
    title: "Question promises of approval",
    text: "The government makes the decision on your application. Treat a promise of a visa or permanent residence as a warning sign.",
    icon: ShieldCheck,
  },
  {
    title: "Keep your application records",
    text: "Ask for payment receipts. Keep your agreement, application number and copies of everything filed on your behalf.",
    icon: FileCheck2,
  },
];

const processSteps = [
  ["Free first consultation", "Discuss your goal, current status and any deadlines at our Brampton office or online."],
  ["Written scope and fees", "Review the proposed services, costs and responsibilities before you decide to proceed."],
  ["Document checklist", "Gather the records for your pathway. We review the documents and flag gaps before filing."],
  ["Filing and updates", "We prepare and submit the agreed application and explain any response or next step."],
];

const irccRepresentativeGuide = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html";
const statCanBrampton = "https://www.statcan.gc.ca/o1/en/plus/8470-living-under-one-roof-what-data-say-about-multigenerational-households-canada";
const irccSuperVisa = "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents.html";

function SectionHeading({ id, title, description }) {
  return (
    <div className={styles.sectionHeading}>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function BookingActions() {
  return (
    <div className={styles.actions}>
      <Link href={site.ctas.primary.href} className={`${styles.button} ${styles.primaryButton}`}>
        Book a free consultation <ArrowRight size={18} aria-hidden="true" />
      </Link>
      <a href={site.phoneHref} className={`${styles.button} ${styles.secondaryButton}`}>
        <Phone size={16} aria-hidden="true" /> Call {site.phone}
      </a>
      {whatsappUrl && (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.secondaryButton}`}>
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp
        </a>
      )}
    </div>
  );
}

function BramptonHero() {
  return (
    <section className={styles.hero} aria-labelledby="brampton-title">
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><ChevronRight size={13} aria-hidden="true" /><Link href="/locations">Locations</Link></li>
            <li aria-current="page"><ChevronRight size={13} aria-hidden="true" /><span>Brampton</span></li>
          </ol>
        </nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><MapPin size={15} aria-hidden="true" /> Brampton office · Bovaird Drive East</p>
            <h1 id="brampton-title">Immigration consultant in <span>Brampton, Ontario</span></h1>
            <p className={styles.heroLead}>
              Meet {rcic.consultant.name}, a licensed immigration consultant, in Brampton or online.
              Get help with Super Visas, family sponsorship, permanent residence and permits.
            </p>
            <BookingActions />
            <ul className={styles.heroHighlights} aria-label="Consultation and visit details">
              {["Fees in writing", "Open Saturdays", "Free parking"].map((highlight) => (
                <li key={highlight}><Check size={16} aria-hidden="true" />{highlight}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.snapshot} aria-labelledby="brampton-snapshot-title">
            <div className={styles.snapshotHeader}>
              <MapPin size={23} aria-hidden="true" />
              <h2 id="brampton-snapshot-title">Brampton office</h2>
            </div>
            <dl className={styles.snapshotGrid}>
              <div>
                <dt>Address</dt>
                <dd>{address.line1}<br />{address.city}, {address.region} {address.postal}</dd>
                <dd><a className={styles.textLink} href="#brampton-office">Plan your visit <ArrowDown size={14} aria-hidden="true" /></a></dd>
              </div>
              <div>
                <dt>Office hours</dt>
                <dd>{site.hours}</dd>
                <dd>Please book before visiting.</dd>
              </div>
              <div>
                <dt>Licensed RCIC</dt>
                <dd>{rcic.consultant.name} · {rcic.number}</dd>
                <dd><a href={rcic.profileUrl} className={styles.textLink} target="_blank" rel="noopener noreferrer">Verify on the CICC register <ArrowUpRight size={14} aria-hidden="true" /></a></dd>
              </div>
              <div>
                <dt>Client reviews</dt>
                <dd>Read recent feedback on our Google profile.</dd>
                <dd><a href={address.mapsUrl} className={styles.textLink} target="_blank" rel="noopener noreferrer">Read Google reviews <ArrowUpRight size={14} aria-hidden="true" /></a></dd>
              </div>
            </dl>
            <div className={styles.snapshotLanguages}>
              <a href="#consultation-languages" className={styles.textLink}>Consultation languages <ArrowDown size={14} aria-hidden="true" /></a>
              <ul aria-label="Available languages">
                {languages.map(({ name }) => <li key={name}>{name}</li>)}
              </ul>
            </div>
          </aside>
        </div>

        <nav aria-label="On this page" className={styles.jumpLinks}>
          <ul>
            <li><a href="#choose-a-representative">Choosing a consultant</a></li>
            <li><a href="#immigration-services">Immigration services</a></li>
            <li><a href="#brampton-office">Office and directions</a></li>
            <li><a href="#brampton-faqs">FAQs</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

function WhyCmg() {
  return (
    <section className={styles.section} aria-labelledby="why-cmg-title">
      <div className={styles.container}>
        <SectionHeading id="why-cmg-title" title="What to expect from CMG in Brampton" />
        <ul className={styles.reasonGrid}>
          {reasons.map(({ title, text, icon: Icon, link }) => (
            <li key={title} className={styles.card}>
              <span className={styles.iconBadge}><Icon size={21} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              {link && <a href={link.href} className={styles.textLink}>{link.label} <ArrowRight size={15} aria-hidden="true" /></a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RepresentativeSection() {
  return (
    <section className={`${styles.section} ${styles.alternate}`} id="choose-a-representative" aria-labelledby="representative-title">
      <div className={styles.container}>
        <SectionHeading
          id="representative-title"
          title="Protect your application from ghost consultants"
          description="You can apply on your own. If you choose to pay for immigration advice, check that the person is authorized before sharing documents or sending money. Unauthorized paid advisers are often called ghost consultants."
        />
        <ul className={styles.checkGrid}>
          {representativeChecks.map(({ title, text, icon: Icon }) => (
            <li key={title} className={`${styles.card} ${styles.checkCard}`}>
              <span className={styles.iconBadge}><Icon size={21} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ul>
        <a className={`${styles.textLink} ${styles.checkSource}`} href={irccRepresentativeGuide} target="_blank" rel="noopener noreferrer">
          IRCC’s guide to choosing a representative <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <div className={styles.verification} id="verify-licence">
          <div>
            <h2>Verify your consultant’s licence</h2>
            <p>
              Search the College of Immigration and Citizenship Consultants (CICC) Public Register.
              Match the name and licence number, then confirm the current eligibility and contact details in the record.
            </p>
            <a className={styles.textLink} href={rcic.registerUrl} target="_blank" rel="noopener noreferrer">
              Search the public register <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <a className={`${styles.button} ${styles.primaryButton}`} href={rcic.profileUrl} target="_blank" rel="noopener noreferrer">
            Open {rcic.consultant.name}’s record <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <ConsultantProfileSection className={styles.profile} id="licensed-rcic" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section className={styles.section} id="immigration-services" aria-labelledby="immigration-services-title">
      <div className={styles.container}>
        <SectionHeading
          id="immigration-services-title"
          title="Immigration services for Brampton residents"
          description="Find support for your family, work, study or permanent residence plans."
        />
        <ul className={styles.serviceGrid}>
          {services.map(({ title, text, icon: Icon, links }) => (
            <li className={`${styles.card} ${styles.serviceCard}`} key={title}>
              <span className={styles.iconBadge}><Icon size={21} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className={styles.serviceLinks}>
                {links.map(([label, href]) => (
                  <Link key={href} href={href} className={styles.textLink}>{label} <ArrowRight size={15} aria-hidden="true" /></Link>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <aside className={styles.localFocus} aria-labelledby="super-visa-title">
          <div className={styles.statistic}>
            <strong>14.3%</strong>
            <span>of Brampton households were multigenerational in the 2021 Census, the highest share among Canadian cities.</span>
            <a className={styles.textLink} href={statCanBrampton} target="_blank" rel="noopener noreferrer">
              Statistics Canada <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div>
            <h3 id="super-visa-title">Planning a longer visit for a parent or grandparent</h3>
            <p>
              If you’re inviting a parent or grandparent, we can help review the host’s income, the invitation and proof of relationship.
              IRCC also requires an immigration medical exam and qualifying health insurance with at least $100,000 in emergency coverage for at least one year from entry.
            </p>
            <a className={styles.textLink} href={irccSuperVisa} target="_blank" rel="noopener noreferrer">
              Check IRCC’s Super Visa requirements <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </aside>

        <p className={styles.neighbourhoods}>
          <strong>Neighbourhoods we serve</strong>
          Bramalea, Springdale, Heart Lake, Mount Pleasant, Castlemore, Sandalwood Heights, Credit Valley, Downtown Brampton and Gore Meadows.
          We also meet online with clients in <Link href="/locations/mississauga">Mississauga</Link>, <Link href="/locations/toronto">Toronto</Link> and across the GTA.
        </p>
      </div>
    </section>
  );
}

function LanguagesAndReviews() {
  return (
    <>
      <section className={`${styles.section} ${styles.languageSection}`} id="consultation-languages" aria-labelledby="languages-title">
        <div className={styles.container}>
          <SectionHeading id="languages-title" title="Consult in your preferred language" description="Tell us which language you’d like to use when you book. Official IRCC applications are completed in English or French." />
          <ul className={styles.languageGrid}>
            {languages.map(({ name, native, code, direction }) => (
              <li key={code}>
                <strong lang={code} dir={direction}>{native}</strong>
                {native !== name && <span>{name}</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id="client-reviews" aria-labelledby="reviews-title">
        <div className={`${styles.container} ${styles.reviewPanel}`}>
          <span className={styles.iconBadge}><MessageCircle size={22} aria-hidden="true" /></span>
          <div>
            <h2 id="reviews-title">Hear from Brampton clients</h2>
            <p>Read about other clients’ experiences with our Brampton team on Google.</p>
          </div>
          <a href={address.mapsUrl} className={`${styles.button} ${styles.secondaryButton}`} target="_blank" rel="noopener noreferrer">
            Read Google reviews <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}

function ProcessSection() {
  return (
    <section className={styles.processSection} id="how-it-works" aria-labelledby="process-title">
      <div className={`${styles.container} ${styles.processPanel}`}>
        <SectionHeading id="process-title" title="From consultation to filing" />
        <ol className={styles.processGrid}>
          {processSteps.map(([title, text], index) => (
            <li key={title}>
              <span aria-hidden="true">{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function BramptonLocationPage({ page }) {
  return (
    <div className={`cmg-template-home ${styles.page}`} data-concept="nocturne">
      <TemplateMotion />
      <BramptonHero />
      <WhyCmg />
      <RepresentativeSection />
      <ServicesSection />
      <LanguagesAndReviews />
      <ProcessSection />
      <BramptonOfficeSection />
      <FaqSection
        className={styles.faqs}
        faqs={getPageFaqs(page)}
        id="brampton-faqs"
        eyebrow="FAQs"
        title="Brampton immigration questions, answered"
        description="Find answers about visiting the office, checking a licence and planning an application."
      />
      <section className={styles.closing} aria-labelledby="booking-title">
        <div className={styles.container}>
          <h2 id="booking-title">Book your free first consultation</h2>
          <p>Meet in Brampton or online. Bring your key dates, current immigration status and any questions about your next step.</p>
          <BookingActions />
        </div>
      </section>
    </div>
  );
}
