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
  Video,
} from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import { getPageFaqs } from "@/lib/faqs";
import FaqSection from "@/components/sections/FaqSection";
import BramptonOfficeSection from "./BramptonOfficeSection";
import ConsultantProfileSection from "./ConsultantProfileSection";
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
      text: "Prepare evidence for a visit or review a refusal letter and its deadlines. Where necessary, we can refer you to a lawyer for Federal Court advice.",
      icon: Globe2,
      links: [["Visitor visas", "/visit/visitor-visa-trv-standalone-page"], ["After a refusal", "/inadmissibility-and-appeals/refusal-and-pfl-response"]],
    },
  ];
}

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

function BookingActions({ findCity = false }) {
  return (
    <div className={styles.actions}>
      {findCity && (
        <a href="#city-directory" className={`${styles.button} ${styles.primaryButton}`}>
          Find your city <ArrowDown size={18} aria-hidden="true" />
        </a>
      )}
      <Link href={site.ctas.primary.href} className={`${styles.button} ${findCity ? styles.secondaryButton : styles.primaryButton}`}>
        Book a free consultation <ArrowRight size={18} aria-hidden="true" />
      </Link>
      <a href={site.phoneHref} className={`${styles.button} ${styles.secondaryButton}`}>
        <Phone size={16} aria-hidden="true" /> Call {site.phone}
      </a>
      {whatsappUrl && !findCity && (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.secondaryButton}`}>
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp
        </a>
      )}
    </div>
  );
}

function LocationSnapshot({ location }) {
  const office = location.kind === "office";
  const directory = location.kind === "directory";
  const Icon = office ? MapPin : Video;
  const titleId = office ? "brampton-snapshot-title" : "location-snapshot-title";

  return (
    <aside className={styles.snapshot} aria-labelledby={titleId}>
      <div className={styles.snapshotHeader}>
        <Icon size={23} aria-hidden="true" />
        <h2 id={titleId}>{office ? "Brampton office" : "Meet with our team"}</h2>
      </div>
      <dl className={styles.snapshotGrid}>
        {office ? (
          <>
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
          </>
        ) : (
          <>
            <div>
              <dt>Appointment type</dt>
              <dd>Video or phone</dd>
              <dd><a className={styles.textLink} href="#online-consultation">Prepare for your call <ArrowDown size={14} aria-hidden="true" /></a></dd>
            </div>
            <div>
              <dt>{directory ? "In-person appointments" : "Provincial options"}</dt>
              <dd>{directory ? "Brampton, Ontario" : location.program.acronym}</dd>
              <dd>
                {directory ? (
                  <Link className={styles.textLink} href="/locations/brampton">Visit the Brampton page <ArrowRight size={14} aria-hidden="true" /></Link>
                ) : (
                  <a className={styles.textLink} href="#regional-pathways">Explore local pathways <ArrowDown size={14} aria-hidden="true" /></a>
                )}
              </dd>
            </div>
          </>
        )}
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
  );
}

function LocationHero({ location, faqId }) {
  const { kind, city, province, titleLead, titlePlace, serviceAreaNote } = location;
  const office = kind === "office";
  const directory = kind === "directory";
  const eyebrow = office ? "Brampton office · Bovaird Drive East" : directory ? "Canadian immigration services" : `Online consultations · ${province}`;
  const titleId = office ? "brampton-title" : "location-title";
  const highlights = office
    ? ["Fees in writing", "Open Saturdays", "Free parking"]
    : ["Fees in writing", "CICC licence you can verify"];

  return (
    <section className={styles.hero} aria-labelledby={titleId}>
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li><Link href="/">Home</Link></li>
            {directory ? (
              <li aria-current="page"><ChevronRight size={13} aria-hidden="true" /><span>Locations</span></li>
            ) : (
              <>
                <li><ChevronRight size={13} aria-hidden="true" /><Link href="/locations">Locations</Link></li>
                <li aria-current="page"><ChevronRight size={13} aria-hidden="true" /><span>{city}</span></li>
              </>
            )}
          </ol>
        </nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><MapPin size={15} aria-hidden="true" /> {eyebrow}</p>
            <h1 id={titleId}>{titleLead} <span>{titlePlace}</span></h1>
            <p className={styles.heroLead}>
              {office ? (
                <>
                  Meet {rcic.consultant.name}, a licensed immigration consultant, in Brampton or online.
                  Get help with Super Visas, family sponsorship, permanent residence and permits.
                </>
              ) : serviceAreaNote}
            </p>
            <BookingActions findCity={directory} />
            <ul className={styles.heroHighlights} aria-label={office ? "Consultation and visit details" : "Consultation details"}>
              {highlights.map((highlight) => <li key={highlight}><Check size={16} aria-hidden="true" />{highlight}</li>)}
            </ul>
          </div>
          <LocationSnapshot location={location} />
        </div>
        <nav aria-label="On this page" className={styles.jumpLinks}>
          <ul>
            {directory && <li><a href="#city-directory">Find your city</a></li>}
            <li><a href="#choose-a-representative">Choosing a consultant</a></li>
            {!directory && <li><a href="#immigration-services">Immigration services</a></li>}
            {!directory && !office && <li><a href="#regional-pathways">Local pathways</a></li>}
            <li><a href={office ? "#brampton-office" : "#online-consultation"}>{office ? "Office and directions" : "Online consultations"}</a></li>
            <li><a href={`#${faqId}`}>FAQs</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

function WhyCmg({ location }) {
  const office = location.kind === "office";
  const directory = location.kind === "directory";
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
    ...(office ? [
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
    ] : [
      {
        title: "Meet by video or phone",
        text: "Choose a remote appointment and discuss your situation with our Brampton-based team from wherever you live.",
        icon: Video,
        link: { href: "#online-consultation", label: "Plan your consultation" },
      },
      {
        title: "Provincial pathway guidance",
        text: "Compare federal programs with the rules for the province where you plan to live and work.",
        icon: MapPin,
        link: { href: directory ? "#city-directory" : "#regional-pathways", label: "Explore pathways for your area" },
      },
    ]),
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

  return (
    <section className={styles.section} aria-labelledby="why-cmg-title">
      <div className={styles.container}>
        <SectionHeading id="why-cmg-title" title={office ? "What to expect from CMG in Brampton" : "What to expect from CMG"} />
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

function ServicesSection({ location }) {
  const { kind, city, program, detail } = location;
  const office = kind === "office";
  const serviceCards = immigrationServices(program, office);

  return (
    <section className={styles.section} id="immigration-services" aria-labelledby="immigration-services-title">
      <div className={styles.container}>
        <SectionHeading
          id="immigration-services-title"
          title={`Immigration services for ${city} residents`}
          description={office ? "Find support for your family, work, study or permanent residence plans." : detail.serviceIntro}
        />
        <ul className={styles.serviceGrid}>
          {serviceCards.map(({ title, text, icon: Icon, links }) => (
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

        {office && (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}

function LanguagesAndReviews({ office }) {
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
            <h2 id="reviews-title">{office ? "Hear from Brampton clients" : "Hear from CMG clients"}</h2>
            <p>{office ? "Read about other clients’ experiences with our Brampton team on Google." : "Read client experiences with Commonwealth Migration Group on Google."}</p>
          </div>
          <a href={address.mapsUrl} className={`${styles.button} ${styles.secondaryButton}`} target="_blank" rel="noopener noreferrer">
            Read Google reviews <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}

function ProcessSection({ office }) {
  return (
    <section className={styles.processSection} id="how-it-works" aria-labelledby="process-title">
      <div className={`${styles.container} ${styles.processPanel}`}>
        <SectionHeading id="process-title" title="From consultation to filing" />
        <ol className={styles.processGrid}>
          {processSteps.map(([title, text], index) => (
            <li key={title}>
              <span aria-hidden="true">{index + 1}</span>
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
  const { city, program, detail, related } = location;

  return (
    <section className={`${styles.section} ${styles.alternate} ${styles.sectionJump}`} id="regional-pathways" aria-labelledby="regional-pathways-title">
      <div className={styles.container}>
        <SectionHeading
          id="regional-pathways-title"
          title={`Immigration pathways for ${city}`}
          description={`If you plan to settle in ${location.province}, compare federal options with the ${program.program}. Check the current intake and criteria for the route you are considering.`}
        />
        <div className={styles.pathwayGrid}>
          <article className={styles.card}>
            <span className={styles.iconBadge}><MapPin size={21} aria-hidden="true" /></span>
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
                <dd><Link className={styles.textLink} href="/work-and-study/post-graduation-work-permit-pgwp">Review PGWP requirements <ArrowRight size={15} aria-hidden="true" /></Link></dd>
              </div>
            </dl>
          </article>

          <article className={styles.card}>
            <span className={styles.iconBadge}><FileCheck2 size={21} aria-hidden="true" /></span>
            <h3>Provincial pathways to compare</h3>
            <ul className={styles.pathwayList}>
              {program.pathways.map(([label, description]) => (
                <li key={label}><strong>{label}</strong><p>{description}</p></li>
              ))}
            </ul>
            <div className={styles.serviceLinks}>
              <Link className={styles.textLink} href={program.guide}>{program.acronym} guide <ArrowRight size={15} aria-hidden="true" /></Link>
              <a className={styles.textLink} href={program.officialUrl} target="_blank" rel="noopener noreferrer">Official requirements <ArrowUpRight size={15} aria-hidden="true" /></a>
              {city === "Halifax" && (
                <Link className={styles.textLink} href="/immigrate/atlantic-immigration-program">Atlantic Immigration Program <ArrowRight size={15} aria-hidden="true" /></Link>
              )}
            </div>
          </article>
        </div>
        {detail.routeChecks && (
          <div className={`${styles.card} ${styles.routeChecks}`}>
            <h3>Check the rules for your Saskatchewan situation</h3>
            <dl className={styles.localFacts}>
              {detail.routeChecks.slice(1).map(([situation, check]) => (
                <div key={situation}><dt>{situation}</dt><dd>{check}</dd></div>
              ))}
            </dl>
          </div>
        )}
        <nav className={styles.relatedPlaces} aria-label="More location guides">
          <ul>
            {related.map(({ city, href }) => <li key={href}><Link href={href}>{city} <ArrowRight size={14} aria-hidden="true" /></Link></li>)}
            <li><Link href="/locations">All location guides <ArrowRight size={14} aria-hidden="true" /></Link></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

function CityDirectory({ groups }) {
  return (
    <section className={`${styles.section} ${styles.sectionJump}`} id="city-directory" aria-labelledby="city-directory-title">
      <div className={styles.container}>
        <SectionHeading
          id="city-directory-title"
          title="Find your city"
          description="Choose the area where you live or plan to settle to see relevant provincial pathways and consultation options."
        />
        <div className={styles.directory}>
          {groups.map(({ province, acronym, cities }) => (
            <section className={styles.directoryGroup} key={province} aria-label={province}>
              <div className={styles.directoryProvince}>
                <h3>{province}</h3>
                <span>{acronym}</span>
              </div>
              <ul className={styles.directoryCities}>
                {cities.map(({ city, href, office }) => (
                  <li key={href}>
                    <Link className={styles.cityLink} href={href}>
                      <span><strong>{city}</strong><small>{office ? "In person or online" : "Online consultations"}</small></span>
                      <ArrowRight size={16} aria-hidden="true" />
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
    <section className={`${styles.section} ${styles.alternate} ${styles.sectionJump}`} id="online-consultation" aria-labelledby="online-consultation-title">
      <div className={styles.container}>
        <SectionHeading
          id="online-consultation-title"
          title={city ? `Meet with us from ${city}` : "Meet with us online"}
          description="Book a free first consultation by video or phone. We’ll review your situation and what to check before choosing an immigration pathway."
        />
        <div className={styles.pathwayGrid}>
          <div className={styles.card}>
            <span className={styles.iconBadge}><FileText size={21} aria-hidden="true" /></span>
            <h3>What to have handy</h3>
            <ul className={styles.preparationList}>
              <li><Check size={16} aria-hidden="true" /> Your current immigration status and any expiry or response deadlines</li>
              <li><Check size={16} aria-hidden="true" /> A short summary of your work, education and language results</li>
              <li><Check size={16} aria-hidden="true" /> Any job offer, prior application or decision relevant to your plans</li>
            </ul>
          </div>
          <div className={styles.card}>
            <span className={styles.iconBadge}><CalendarDays size={21} aria-hidden="true" /></span>
            <h3>Choose your appointment</h3>
            <p>Tell us whether you prefer a video or phone call and which language you’d like to use. Have a question before you book? Call us or send a WhatsApp message.</p>
            <BookingActions />
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
      <LocationHero location={location} faqId={faqId} />
      {directory && <CityDirectory groups={groups} />}
      <WhyCmg location={location} />
      <RepresentativeSection />
      {!directory && <ServicesSection location={location} />}
      {kind === "online" && <RegionalPathways location={location} />}
      <LanguagesAndReviews office={office} />
      <ProcessSection office={office} />
      {office ? <BramptonOfficeSection /> : <OnlineConsultation city={city} />}
      <FaqSection
        className={styles.faqs}
        faqs={getPageFaqs(page)}
        id={faqId}
        eyebrow="FAQs"
        title={faqTitle}
        description={faqDescription}
      />
      <section className={styles.closing} aria-labelledby="booking-title">
        <div className={styles.container}>
          <h2 id="booking-title">Book your free first consultation</h2>
          <p>{office ? "Meet in Brampton or online." : "Meet with us by video or phone."} Bring your key dates, current immigration status and any questions about your next step.</p>
          <BookingActions />
        </div>
      </section>
    </div>
  );
}
