import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  ExternalLink,
  FileCheck2,
  FileText,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import { getPageFaqs } from "@/lib/faqs";
import FaqSection from "@/components/sections/FaqSection";
import BramptonOfficeSection from "./BramptonOfficeSection";
import ConsultantProfileSection from "./ConsultantProfileSection";
import CmgHero from "./CmgHero";
import TemplateMotion from "./TemplateMotion";
import styles from "./LocationPage.module.css";

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

const irccRepresentativeGuide = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html";
const statCanBrampton = "https://www.statcan.gc.ca/o1/en/plus/8470-living-under-one-roof-what-data-say-about-multigenerational-households-canada";
const irccSuperVisa = "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents.html";

function immigrationServices(program, office) {
  return [
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
      title: office ? "Express Entry and Ontario immigration" : `Express Entry and ${program.acronym}`,
      text: office
        ? "Check federal eligibility, your CRS factors and whether your work or education history fits a current Ontario nominee stream."
        : "Review federal eligibility and CRS factors, then compare your work, education and settlement plans with current provincial criteria.",
      icon: FileCheck2,
      links: [["Express Entry", "/immigrate/express-entry"], [office ? "Ontario PNP" : program.acronym, program.guide]],
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
      text: office
        ? "Discuss visitor matters, refusals, responses to procedural fairness letters, inadmissibility concerns, citizenship and PR card applications. The team will confirm the available service scope and can refer you to a lawyer for Federal Court advice."
        : "Prepare evidence for a visit or review a refusal letter and its deadlines. Where necessary, we can refer you to a lawyer for Federal Court advice.",
      icon: Globe2,
      links: office
        ? [["Visitor visas", "/visit/visitor-visa-trv-standalone-page"], ["After a refusal", "/inadmissibility-and-appeals/refusal-and-pfl-response"], ["Citizenship and PR documents", "/citizenship"]]
        : [["Visitor visas", "/visit/visitor-visa-trv-standalone-page"], ["After a refusal", "/inadmissibility-and-appeals/refusal-and-pfl-response"]],
    },
  ];
}

const representativeChecks = [
  {
    title: "Check who will advise you",
    text: "Ask for the adviser’s full name and licence number. If you appoint a representative, confirm their details on the required IRCC form.",
    officeText: "Ask for the adviser’s full name and licence number, their experience with your pathway, and how your records will be stored and shared. If you appoint a representative, confirm their details on the required IRCC form.",
    icon: BadgeCheck,
  },
  {
    title: "Get the agreement in writing",
    text: "Review the service agreement before signing. It should explain who will do the work, what it includes and what you will pay.",
    icon: FileText,
  },
  {
    title: "Keep control of your records",
    text: "Keep your signed agreement, receipts, application number and copies of every document submitted for you.",
    icon: FileCheck2,
  },
  {
    title: "Expect an honest assessment",
    text: "A representative can explain options and prepare an application, but only the government can decide the outcome.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  ["Free first consultation", "Discuss your goal, current status and any deadlines at our Brampton office or online."],
  ["Written scope and fees", "Review the proposed services, costs and responsibilities before you decide to proceed."],
  ["Document checklist", "Gather the records for your pathway. We review the documents and flag gaps before filing."],
  ["Filing and updates", "We prepare and submit the agreed application and explain any response or next step."],
];

function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <div className={`${styles.sectionHeading} reveal`}>
      {eyebrow && <p className={styles.sectionEyebrow}>{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </div>
  );
}

function TextLink({ href, children, external = false, className = "" }) {
  const linkClass = `${styles.textLink} ${className}`.trim();
  return external ? (
    <a className={linkClass} href={href} target="_blank" rel="noopener noreferrer">
      {children}<ExternalLink size={14} aria-hidden="true" />
    </a>
  ) : (
    <Link className={linkClass} href={href}>{children}</Link>
  );
}

function BookingActions({ directory = false, compact = false }) {
  return (
    <div className={`${styles.actions} ${compact ? styles.compactActions : ""}`}>
      <Link href={site.ctas.primary.href} className={`${styles.button} ${styles.primaryButton}`}>
        Book a free consultation
      </Link>
      {directory && <a href="#city-directory" className={`${styles.button} ${styles.secondaryButton}`}>Find your city</a>}
      <a href={site.phoneHref} className={`${styles.button} ${styles.secondaryButton}`}>
        <Phone size={16} aria-hidden="true" /> Call {site.phone}
      </a>
      {whatsappUrl && !compact && (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.secondaryButton}`}>
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp
        </a>
      )}
    </div>
  );
}

function LocationHero({ page, location }) {
  const isDirectory = location.kind === "directory";
  const title = (
    <>
      {location.titleLead}{" "}
      <span className="text-[var(--cmg-template-primary-highlight)]">{location.titlePlace}</span>
    </>
  );
  const secondaryHref = isDirectory
    ? "#city-directory"
    : location.kind === "office"
      ? "#brampton-office"
      : "#regional-pathways";

  return (
    <CmgHero
      id="location-title"
      pagePath="/locations"
      eyebrow={isDirectory ? "Canadian immigration services" : `${location.city}, ${location.province} · immigration guidance`}
      title={title}
      lead={location.kind === "office" ? location.detail?.heroLead || location.serviceAreaNote : page.hero?.lead || location.serviceAreaNote}
      primaryAction={{ href: site.ctas.primary.href, label: "Book a free consultation" }}
      secondaryAction={{ href: secondaryHref, label: isDirectory ? "Find your city" : location.kind === "office" ? "Visit the Brampton office" : "Explore local pathways" }}
      ariaLabel="Commonwealth Migration Group immigration services and guidance"
    />
  );
}

function Breadcrumbs({ location }) {
  const isDirectory = location.kind === "directory";
  return (
    <div className={styles.breadcrumbBand}>
      <nav className={styles.container} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbs}>
          <li><Link href="/">Home</Link></li>
          <li><ChevronRight size={14} aria-hidden="true" /><Link href="/locations">Locations</Link></li>
          {!isDirectory && <li aria-current="page"><ChevronRight size={14} aria-hidden="true" /><span>{location.city}</span></li>}
        </ol>
      </nav>
    </div>
  );
}

function LocationOverview({ location }) {
  const office = location.kind === "office";
  const directory = location.kind === "directory";
  const heading = directory
    ? "Start with the place that fits your plan"
    : office
      ? "Immigration support, shaped around your situation"
      : `Immigration guidance for ${location.city}`;
  const description = directory
    ? "Explore city guides built around the province where you plan to live, study or work. Every city page explains the local pathways and questions to check before applying."
    : location.detail.serviceIntro;
  const localProgram = directory
    ? "Federal and provincial options"
    : `${location.program.acronym} · ${location.program.program}`;
  const meetingMode = directory
    ? "Video or phone consultations across Canada"
    : office
      ? "In person in Brampton or online"
      : `Video or phone from ${location.city}`;
  const localLink = directory
    ? { href: "/locations/brampton", label: "See the Brampton office" }
    : { href: location.program.guide, label: `Explore ${location.program.acronym}` };
  const introEyebrow = directory ? "Choose your location" : `${location.city} · ${location.province}`;

  const facts = [
    { label: "Consultation", value: meetingMode, icon: office || directory ? MapPin : Video, href: office ? "#brampton-office" : directory ? "/locations/brampton" : "#online-consultation", linkLabel: office ? "Office details" : directory ? "In-person office" : "How online meetings work" },
    { label: "Local pathway", value: localProgram, icon: FileCheck2, href: localLink.href, linkLabel: localLink.label },
    { label: "Licensed RCIC", value: `${rcic.consultant.nameWithCredential} · ${rcic.number}`, icon: ShieldCheck, href: rcic.profileUrl, linkLabel: "Verify on the CICC register", external: true },
    { label: "Client feedback", value: "Read recent feedback on Google", icon: MessageCircle, href: address.mapsUrl, linkLabel: "Read Google reviews", external: true },
  ];

  return (
    <section className={`${styles.overviewSection} ${directory ? styles.directoryOverview : ""}`} id="location-overview" aria-labelledby="location-overview-title">
      <div className={styles.container}>
        <div className={styles.overviewLead}>
          <div className={`${styles.overviewTitle} reveal`}>
            <p className={styles.sectionEyebrow}>{introEyebrow}</p>
            <h2 id="location-overview-title">{heading}</h2>
            <p>{description}</p>
          </div>
          <aside className={`${styles.overviewNote} reveal`} style={{ "--delay": "90ms" }} aria-label="Free first consultation">
            <span className={styles.overviewNoteIcon}><CalendarDays size={20} aria-hidden="true" /></span>
            <div>
              <strong>Begin with a free first consultation</strong>
              <p>Discuss your goal, current status and any time-sensitive dates before deciding on a next step.</p>
            </div>
          </aside>
        </div>

        <dl className={styles.overviewFacts}>
          {facts.map(({ label, value, icon: Icon, href, linkLabel, external }, index) => (
            <div className={`${styles.overviewFact} reveal`} style={{ "--delay": `${index * 45}ms` }} key={label}>
              <dt><Icon size={19} aria-hidden="true" />{label}</dt>
              <dd>{value}</dd>
              <dd><TextLink href={href} external={external}>{linkLabel}</TextLink></dd>
            </div>
          ))}
        </dl>

        <div className={`${styles.languageRibbon} reveal`} style={{ "--delay": "100ms" }}>
          <div><Languages size={18} aria-hidden="true" /><strong>Consultations in seven languages</strong></div>
          <ul aria-label="Consultation languages">
            {languages.map(({ name }) => <li key={name}>{name}</li>)}
          </ul>
          <a href="#consultation-languages">Language details</a>
        </div>
      </div>
    </section>
  );
}

function WhyCmg({ location }) {
  const directory = location.kind === "directory";
  const reasons = [
    {
      title: "Verify the person advising you",
      text: "Check an RCIC’s name and licence in the regulator’s public register before sharing documents or paying for advice.",
      icon: BadgeCheck,
      link: { href: "#choose-a-representative", label: "See how to check a representative" },
    },
    {
      title: "Understand the work and fees",
      text: "A written service agreement can set out what is included, who will handle the work and what you will pay.",
      icon: FileText,
    },
    {
      title: "Keep your options clear",
      text: "Compare your status, goals and documents with current program requirements before settling on a route.",
      icon: FileCheck2,
      link: { href: directory ? "#city-directory" : "#regional-pathways", label: directory ? "Browse city guides" : "Review local pathways" },
    },
    {
      title: "Know who to contact",
      text: "Ask who is handling your file and how you will receive updates about documents, deadlines and decisions.",
      icon: Users,
    },
  ];

  return (
    <section className={`${styles.section} ${styles.expectSection}`} aria-labelledby="why-cmg-title">
      <div className={styles.container}>
        <SectionHeading
          id="why-cmg-title"
          eyebrow="A clearer first step"
          title="Good immigration support should feel clear from day one"
          description="Before choosing any representative, understand who is advising you, what the service covers and how your application will be managed."
        />
        <ul className={styles.reasonGrid}>
          {reasons.map(({ title, text, icon: Icon, link }, index) => (
            <li key={title} className={`${styles.reasonCard} reveal`} style={{ "--delay": `${index * 45}ms` }}>
              <span className={styles.reasonNumber}>0{index + 1}</span>
              <span className={styles.iconBadge}><Icon size={21} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              {link && <TextLink href={link.href}>{link.label}</TextLink>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RepresentativeSection({ office }) {
  return (
    <section className={`${styles.section} ${styles.alternate} ${styles.representativeSection}`} id="choose-a-representative" aria-labelledby="representative-title">
      <div className={styles.container}>
        <div className={styles.representativeIntro}>
          <div>
            <SectionHeading
              id="representative-title"
              eyebrow="Your application, your choice"
              title="Know who is handling your immigration case"
              description="You can apply on your own. If you choose paid immigration advice, take a moment to confirm that the person is authorized before sharing documents or sending money. Unauthorized paid advisers are often called ghost consultants."
            />
          </div>
          <div className={`${styles.readerNote} reveal`} style={{ "--delay": "100ms" }}>
            <span className={styles.readerNoteIcon}><ShieldCheck size={22} aria-hidden="true" /></span>
            <p>These simple checks help you make an informed choice and keep control of your application records.</p>
          </div>
        </div>

        <ul className={styles.checkGrid}>
          {representativeChecks.map(({ title, text, officeText, icon: Icon }, index) => (
            <li key={title} className={`${styles.checkCard} reveal`} style={{ "--delay": `${index * 45}ms` }}>
              <span className={styles.checkIndex}>0{index + 1}</span>
              <span className={styles.iconBadge}><Icon size={20} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{office && officeText ? officeText : text}</p></div>
            </li>
          ))}
        </ul>
        <TextLink className={styles.checkSource} href={irccRepresentativeGuide} external>Read the Government of Canada guide to choosing a representative</TextLink>

        <div className={`${styles.verification} reveal`} style={{ "--delay": "80ms" }} id="verify-licence">
          <div className={styles.verificationCopy}>
            <p className={styles.sectionEyebrow}>An independent check</p>
            <h2>Verify your consultant through the CICC Public Register</h2>
            <p>Search the regulator’s register. Match the person’s name and licence number, then review their current eligibility and contact details in the official record.</p>
            <TextLink href={rcic.registerUrl} external>Search the public register</TextLink>
          </div>
          <a className={`${styles.button} ${styles.verificationButton}`} href={rcic.profileUrl} target="_blank" rel="noopener noreferrer">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>Verify {rcic.consultant.name} · {rcic.number}</span>
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <ConsultantProfileSection className={`${styles.profile} reveal`} id="licensed-rcic" />
    </section>
  );
}

function ServicesSection({ location }) {
  const { kind, city, program, detail } = location;
  const office = kind === "office";
  const serviceCards = immigrationServices(program, office);

  return (
    <section className={`${styles.section} ${styles.servicesSection}`} id="immigration-services" aria-labelledby="immigration-services-title">
      <div className={styles.container}>
        <SectionHeading
          id="immigration-services-title"
          eyebrow="Support for your next step"
          title={`Immigration services for ${city} residents`}
          description={office ? "Find support for your family, work, study or permanent residence plans." : detail.serviceIntro}
        />
        <ul className={styles.serviceGrid}>
          {serviceCards.map(({ title, text, icon: Icon, links }, index) => (
            <li className={`${styles.serviceCard} reveal`} style={{ "--delay": `${index % 3 * 45}ms` }} key={title}>
              <div className={styles.serviceCardTop}>
                <span className={styles.iconBadge}><Icon size={21} aria-hidden="true" /></span>
                <span className={styles.serviceNumber}>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className={styles.serviceLinks}>
                {links.map(([label, href]) => <TextLink key={href} href={href}>{label}</TextLink>)}
              </div>
            </li>
          ))}
        </ul>

        {office && (
          <>
            <aside className={`${styles.localFocus} reveal`} style={{ "--delay": "80ms" }} aria-labelledby="super-visa-title">
              <div className={styles.statistic}>
                <p className={styles.sectionEyebrow}>Local context · 2021 Census</p>
                <strong>14.3%</strong>
                <span>of Brampton households were multigenerational in 2021, the highest share among Canadian cities.</span>
                <TextLink href={statCanBrampton} external>Statistics Canada source</TextLink>
              </div>
              <div className={styles.superVisaCopy}>
                <p className={styles.sectionEyebrow}>Family visits</p>
                <h3 id="super-visa-title">Planning a longer visit for a parent or grandparent?</h3>
                <p>If you’re inviting a parent or grandparent, we can help review the host’s income, the invitation and proof of relationship. IRCC also requires an immigration medical exam and qualifying health insurance with at least $100,000 in emergency coverage for at least one year from entry.</p>
                <TextLink href={irccSuperVisa} external>Check IRCC’s current Super Visa requirements</TextLink>
              </div>
            </aside>
            <p className={`${styles.neighbourhoods} reveal`} style={{ "--delay": "100ms" }}>
              <strong>Neighbourhoods we serve</strong>
              <span>Bramalea, Springdale, Heart Lake, Mount Pleasant, Castlemore, Sandalwood Heights, Credit Valley, Downtown Brampton and Gore Meadows.</span>
              <span>We also meet online with clients in <Link href="/locations/mississauga">Mississauga</Link>, <Link href="/locations/toronto">Toronto</Link> and across the GTA.</span>
            </p>
          </>
        )}
      </div>
    </section>
  );
}

function LanguagesAndReviews({ office }) {
  return (
    <section className={`${styles.section} ${styles.languageSection}`} id="consultation-languages" aria-labelledby="languages-title">
      <div className={styles.container}>
        <div className={styles.languageReviewGrid}>
          <div className={styles.languagePanel}>
            <SectionHeading
              id="languages-title"
              eyebrow="A comfortable conversation"
              title="Consult in your preferred language"
              description="Tell us which language you’d like to use when you book. Official IRCC applications are completed in English or French."
            />
            <ul className={styles.languageGrid}>
              {languages.map(({ name, native, code, direction }, index) => (
                <li className="reveal" style={{ "--delay": `${index * 35}ms` }} key={code}>
                  <strong lang={code} dir={direction}>{native}</strong>
                  {native !== name && <span>{name}</span>}
                </li>
              ))}
            </ul>
          </div>
          <aside className={`${styles.reviewPanel} reveal`} style={{ "--delay": "90ms" }} id="client-reviews">
            <span className={styles.reviewMark}><MessageCircle size={23} aria-hidden="true" /></span>
            <p className={styles.sectionEyebrow}>Client experiences</p>
            <h2>{office ? "Hear from Brampton clients" : "Hear from CMG clients"}</h2>
            <p>{office ? "Read about other clients’ experiences with our Brampton team on Google." : "Read client experiences with Commonwealth Migration Group on Google."}</p>
            <a href={address.mapsUrl} className={`${styles.button} ${styles.reviewButton}`} target="_blank" rel="noopener noreferrer">
              Read Google reviews <ExternalLink size={15} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ office }) {
  return (
    <section className={`${styles.section} ${styles.processSection}`} id="how-it-works" aria-labelledby="process-title">
      <div className={styles.container}>
        <SectionHeading
          id="process-title"
          eyebrow="From first conversation to filing"
          title="A process you can understand at every step"
          description="You decide whether to proceed after reviewing the proposed work and written fees."
        />
        <ol className={styles.processGrid}>
          {processSteps.map(([title, text], index) => (
            <li className="reveal" style={{ "--delay": `${index * 60}ms` }} key={title}>
              <span className={styles.processIndex} aria-hidden="true">0{index + 1}</span>
              <div className={styles.processLine} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{index === 0 && !office ? "Discuss your goals, current status and deadlines with us by video or phone." : text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RegionalPathways({ location }) {
  const { city, province, program, detail, related } = location;

  return (
    <section className={`${styles.section} ${styles.alternate} ${styles.pathwaysSection}`} id="regional-pathways" aria-labelledby="regional-pathways-title">
      <div className={styles.container}>
        <SectionHeading
          id="regional-pathways-title"
          eyebrow={`${province} · ${program.acronym}`}
          title={`Immigration pathways for ${city}`}
          description={`If you plan to settle in ${province}, compare federal options with the ${program.program}. Check the current intake and criteria for the route you are considering.`}
        />
        <div className={styles.pathwayGrid}>
          <article className={`${styles.pathwayFeature} ${styles.localPathway} reveal`}>
            <span className={styles.pathwayLabel}><MapPin size={17} aria-hidden="true" /> Local planning</span>
            <h3>{`What to check in ${city}`}</h3>
            <p>{detail.planningNote}</p>
            <dl className={styles.localFacts}>
              <div>
                <dt>Local work sectors</dt>
                <dd>{detail.sectors.join(" · ")}</dd>
              </div>
              <div>
                <dt>Local study options</dt>
                <dd>{detail.studyOptions}. Check the exact institution and program when assessing PGWP eligibility.</dd>
                <dd><Link className={styles.textLink} href="/work-and-study/post-graduation-work-permit-pgwp">Review PGWP requirements</Link></dd>
              </div>
            </dl>
          </article>

          <article className={`${styles.pathwayFeature} ${styles.provincePathway} reveal`} style={{ "--delay": "90ms" }}>
            <span className={styles.pathwayLabel}><FileCheck2 size={17} aria-hidden="true" /> Provincial programs</span>
            <h3>Options to compare</h3>
            <ul className={styles.pathwayList}>
              {program.pathways.map(([label, description]) => (
                <li key={label}><strong>{label}</strong><p>{description}</p></li>
              ))}
            </ul>
            <div className={styles.serviceLinks}>
              <Link className={styles.textLink} href={program.guide}>{program.acronym} guide</Link>
              <a className={styles.textLink} href={program.officialUrl} target="_blank" rel="noopener noreferrer">Official requirements <ExternalLink size={14} aria-hidden="true" /></a>
              {city === "Halifax" && <Link className={styles.textLink} href="/immigrate/atlantic-immigration-program">Atlantic Immigration Program</Link>}
            </div>
          </article>
        </div>
        {detail.routeChecks && (
          <div className={styles.routeChecks}>
            <h3>Check the rules for your Saskatchewan situation</h3>
            <dl className={styles.localFacts}>
              {detail.routeChecks.slice(1).map(([situation, check]) => (
                <div key={situation}><dt>{situation}</dt><dd>{check}</dd></div>
              ))}
            </dl>
          </div>
        )}
        <nav className={styles.relatedPlaces} aria-label="More location guides">
          <h3>Explore nearby location guides</h3>
          <ul>
            {related.map(({ city: relatedCity, href }) => <li key={href}><Link href={href}>{relatedCity}</Link></li>)}
            <li><Link href="/locations">All location guides</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

function CityDirectory({ groups }) {
  return (
    <section className={`${styles.section} ${styles.directorySection}`} id="city-directory" aria-labelledby="city-directory-title">
      <div className={styles.container}>
        <SectionHeading
          id="city-directory-title"
          eyebrow="Explore the city guides"
          title="Choose your city and province"
          description="Compare relevant provincial pathways and consultation options for the place where you live or plan to settle."
        />
        <div className={styles.directory}>
          {groups.map(({ province, acronym, cities }, index) => (
            <section className={`${styles.directoryGroup} reveal`} style={{ "--delay": `${index % 2 * 70}ms` }} key={province} aria-label={province}>
              <div className={styles.directoryProvince}>
                <span className={styles.directoryIndex}>0{index + 1}</span>
                <div><h3>{province}</h3><span>{acronym}</span></div>
              </div>
              <ul className={styles.directoryCities}>
                {cities.map(({ city, href, office }) => (
                  <li key={href}>
                    <Link className={styles.cityLink} href={href}>
                      <span><strong>{city}</strong><small>{office ? "In person or online" : "Online consultations"}</small></span>
                      <ChevronRight size={17} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function OnlineConsultation({ city }) {
  return (
    <section className={`${styles.section} ${styles.alternate} ${styles.onlineSection}`} id="online-consultation" aria-labelledby="online-consultation-title">
      <div className={styles.container}>
        <SectionHeading
          id="online-consultation-title"
          eyebrow="Meet from wherever you are"
          title={city ? `Meet with us from ${city}` : "Meet with us online"}
          description="Book a free first consultation by video or phone. We’ll review your situation and what to check before choosing an immigration pathway."
        />
        <div className={styles.pathwayGrid}>
          <div className={`${styles.preparationPanel} reveal`}>
            <span className={styles.iconBadge}><FileText size={21} aria-hidden="true" /></span>
            <h3>What to have handy</h3>
            <ul className={styles.preparationList}>
              <li><Check size={16} aria-hidden="true" /> Your current immigration status and any expiry or response deadlines</li>
              <li><Check size={16} aria-hidden="true" /> A short summary of your work, education and language results</li>
              <li><Check size={16} aria-hidden="true" /> Any job offer, prior application or decision relevant to your plans</li>
            </ul>
          </div>
          <div className={`${styles.appointmentPanel} reveal`} style={{ "--delay": "90ms" }}>
            <span className={styles.iconBadge}><CalendarDays size={21} aria-hidden="true" /></span>
            <h3>Choose your appointment</h3>
            <p>Tell us whether you prefer a video or phone call and which language you’d like to use. Have a question before you book? Call us or send a WhatsApp message.</p>
            <BookingActions compact />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LocationPage({ page }) {
  const { location } = page;
  const { kind, city, groups } = location;
  const office = kind === "office";
  const directory = kind === "directory";
  const faqId = office ? "brampton-faqs" : "location-faqs";
  const faqTitle = directory ? "Canada-wide immigration consultations" : `${city} immigration questions, answered`;
  const faqDescription = office
    ? "Find answers about visiting the office, checking a licence and planning an application."
    : "Find answers about consultations, checking a licence and choosing an immigration pathway.";

  return (
    <div className={`cmg-template-home ${styles.page}`} data-concept="nocturne">
      <TemplateMotion />
      <LocationHero page={page} location={location} />
      <Breadcrumbs location={location} />
      {office && <BramptonOfficeSection />}
      <LocationOverview location={location} />
      {directory && <CityDirectory groups={groups} />}
      <WhyCmg location={location} />
      <RepresentativeSection office={office} />
      {!directory && <ServicesSection location={location} />}
      {kind === "online" && <RegionalPathways location={location} />}
      <LanguagesAndReviews office={office} />
      <ProcessSection office={office} />
      {!office && <OnlineConsultation city={city} />}
      <FaqSection
        className={styles.faqs}
        faqs={getPageFaqs(page)}
        id={faqId}
        eyebrow="FAQs"
        title={faqTitle}
        description={faqDescription}
      />
      <section className={styles.closing} aria-labelledby="booking-title">
        <div className={`${styles.container} reveal`}>
          <p className={styles.sectionEyebrow}>Your next step</p>
          <h2 id="booking-title">Book your free first consultation</h2>
          <p>{office ? "Meet in Brampton or online." : "Meet with us by video or phone."} Bring your key dates, current immigration status and any questions about your next step.</p>
          <BookingActions />
        </div>
      </section>
    </div>
  );
}
