import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, MapPin, MessageCircle, Phone } from "lucide-react";
import BramptonOfficeGallery from "@/components/home/BramptonOfficeGallery";
import BramptonOfficeSection from "@/components/home/BramptonOfficeSection";
import CmgHero from "@/components/home/CmgHero";
import ConsultantProfileSection from "@/components/home/ConsultantProfileSection";
import TemplateMotion from "@/components/home/TemplateMotion";
import FaqSection from "@/components/sections/FaqSection";
import { aboutUsFaqs, aboutUsPage, aboutUsProcess, aboutUsServices, aboutUsTeam, aboutUsValues } from "@/data/about-us-page";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import { serializeJsonLd } from "@/lib/seo";
import styles from "./AboutUsPage.module.css";

const aboutHeroLead = "Commonwealth Migration Group Inc. is a CICC-regulated Canadian immigration consultancy in Brampton. Licensed RCIC Pankaj Khanna (R711256) supports individuals and families across Canada and worldwide with permanent residence, work and study permits, sponsorship and visitor visas.";

function ActionLinks({ compact = false }) {
  const actionClass = compact ? styles.actionsCompact : "";
  return (
    <div className={styles.actions + " " + actionClass}>
      <Link href={site.ctas.primary.href} className={styles.primaryButton}>
        Book a consultation <ArrowRight size={16} aria-hidden="true" />
      </Link>
      {whatsappUrl && (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
          <MessageCircle size={16} aria-hidden="true" /> WhatsApp us
        </a>
      )}
      <a href={site.phoneHref} className={styles.secondaryButton}>
        <Phone size={16} aria-hidden="true" /> Call {site.phone}
      </a>
    </div>
  );
}

function SectionHeading({ eyebrow, title, children, id }) {
  return (
    <div className={styles.sectionHeading}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function AboutBreadcrumbs() {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        <li aria-hidden="true">›</li>
        <li aria-current="page">About Us</li>
      </ol>
    </nav>
  );
}

function TeamSection() {
  const teamMembers = aboutUsTeam.filter(
    (member) => member.name.replace(/, RCIC$/, "") !== site.rcic.consultant.name,
  );

  return (
    <section className={styles.section} id="team" aria-labelledby="team-title">
      <SectionHeading eyebrow="People behind your file" title="Our team" id="team-title">
        Your file is handled by a licensed RCIC, supported by a dedicated case and client team. Only licensed RCICs give immigration advice and represent clients before IRCC on our team.
      </SectionHeading>
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <article className={styles.teamCard} key={member.name}>
            {member.image ? (
              <Image
                className={styles.teamImage}
                src={member.image}
                alt={member.alt}
                width={400}
                height={400}
                sizes="(max-width: 640px) 42vw, (max-width: 920px) 24vw, 16vw"
              />
            ) : (
              <div className={styles.teamInitials} aria-hidden="true">{member.initials}</div>
            )}
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  const schema = aboutUsPage.jsonLd[0];

  return (
    <div className={"cmg-template-home " + styles.page} data-concept="nocturne">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />
      <TemplateMotion />
      <CmgHero
        id="about-title"
        pagePath={aboutUsPage.path}
        eyebrow="About Commonwealth Migration · Brampton, Ontario"
        title={<span className={styles.heroTitle}>{aboutUsPage.h1}</span>}
        lead={aboutHeroLead}
        primaryAction={{ href: site.ctas.primary.href, label: "Book a consultation" }}
        secondaryAction={{ href: "#licensed-rcic-about", label: "Meet our RCIC" }}
        trustContent={
          <ul className={styles.trustPoints}>
            <li><Check size={17} aria-hidden="true" /> Licensed RCIC, verifiable on the CICC Public Register</li>
            <li><Check size={17} aria-hidden="true" /> One Brampton office, with online consultations in Canada and worldwide</li>
            <li><Check size={17} aria-hidden="true" /> Professional and government fees shown separately before you sign</li>
            <li><Check size={17} aria-hidden="true" /> Service in English, Hindi, Punjabi, Marathi, Gujarati, French and Arabic</li>
          </ul>
        }
        trustClassName={styles.heroTrust}
        ariaLabel="Commonwealth Migration Group firm information and Canadian immigration services"
      />
      <div className={styles.container}>
        <AboutBreadcrumbs />

        <section className={styles.section} aria-labelledby="who-we-are-title">
          <SectionHeading eyebrow="Our firm" title="Who we are" id="who-we-are-title">
            Commonwealth Migration Group Inc. is an Ontario-incorporated Canadian immigration consulting firm.
          </SectionHeading>
          <div className={styles.twoColumnText}>
            <p>Our tagline, <strong>“Canada Immigration Simplified”</strong>, describes what we do: we take federal and provincial immigration rules, which change often, and turn them into a clear plan, a complete application and regular updates you can follow.</p>
            <p>We are a regulated practice. Applications we prepare are reviewed, signed and submitted by a licensed RCIC who is a member in good standing of the College of Immigration and Citizenship Consultants (CICC), the federal regulator for immigration consultants in Canada. Clients have a written service agreement and access to the CICC Code of Professional Conduct and its formal complaints process.</p>
          </div>
          <p className={styles.sectionBody}>Our team has supported immigration clients since 2016. Our case processing, client support and regional teams work with clients in Canada, India, the Middle East and the UK.</p>
        </section>

        <section className={styles.gallerySection} aria-labelledby="about-office-gallery-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Our Brampton office</p>
              <h2 id="about-office-gallery-title">A place to meet our team</h2>
              <p>These are the entrance, building exterior and lobby at our Brampton office. In-person visits are by appointment.</p>
            </div>
            <BramptonOfficeGallery className={styles.galleryPhotos} />
          </div>
        </section>

        <section className={styles.missionValues} aria-labelledby="mission-title">
          <div className={styles.missionCard}>
            <span className={styles.missionIcon}><BadgeCheck size={22} aria-hidden="true" /></span>
            <p className={styles.eyebrow}>Our mission</p>
            <h2 id="mission-title">Advice built around the facts in your file</h2>
            <p>To give every client honest advice about their real chances, the right immigration pathway and an application prepared well enough to be decided on its merits.</p>
          </div>
          <div className={styles.valuesPanel}>
            <SectionHeading eyebrow="What guides us" title="Our values" />
            <div className={styles.valuesGrid}>
              {aboutUsValues.map((value) => (
                <article className={styles.valueCard} key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <SectionHeading eyebrow="How we can help" title="Canadian immigration services" id="services-title">
            We advise on, prepare and submit applications to Immigration, Refugees and Citizenship Canada (IRCC), provincial nominee programs and Employment and Social Development Canada (ESDC) for LMIAs.
          </SectionHeading>
          <div className={styles.serviceGrid}>
            {aboutUsServices.map((service, index) => (
              <article className={styles.serviceCard} key={service.title}>
                <span className={styles.serviceIndex}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className={styles.cardLinks}>
                  {service.links.map(([label, href]) => (
                    <Link href={href} key={href}>{label}<ArrowRight size={14} aria-hidden="true" /></Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.processSection} aria-labelledby="process-title">
          <SectionHeading eyebrow="A clear path forward" title="How we work: four steps" id="process-title">
            You know what happens next, who is responsible and what each stage covers.
          </SectionHeading>
          <ol className={styles.processGrid}>
            {aboutUsProcess.map((step, index) => (
              <li className={styles.processCard} key={step.title}>
                <span className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <TeamSection />
        <ConsultantProfileSection id="licensed-rcic-about" className={styles.profileSection} />

        <section className={styles.areaSection} aria-labelledby="service-areas-title">
          <div>
            <p className={styles.eyebrow}><MapPin size={15} aria-hidden="true" /> Where we work</p>
            <h2 id="service-areas-title">One Brampton office. Online consultations everywhere.</h2>
          </div>
          <div>
            <p>Brampton is our only physical office. We serve clients across the GTA, every Canadian province and worldwide through online consultations. Our professional fee is the same across Canada; only sales tax varies by province.</p>
            <div className={styles.officeLinks}>
              <Link href="/locations/brampton">Brampton office details <ArrowRight size={15} aria-hidden="true" /></Link>
              <Link href="/locations">Explore service areas <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <BramptonOfficeSection showPhotos={false} />

        <FaqSection
          className={styles.faqs}
          faqs={aboutUsFaqs}
          id="about-faqs"
          eyebrow="Clear answers"
          title="Frequently asked questions about Commonwealth Migration"
          description="Answers about our team, services, Brampton office and working with a licensed Canadian immigration consultant."
        />

        <section className={styles.finalCta} aria-labelledby="final-cta-title">
          <div>
            <p className={styles.eyebrow}>Take the next step</p>
            <h2 id="final-cta-title">Talk to a licensed immigration consultant today</h2>
            <p>Find out which Canadian immigration pathway fits you before you spend money on an application. Book a consultation with our RCIC in Brampton or online.</p>
          </div>
          <ActionLinks compact />
        </section>

        <p className={styles.disclaimer}>The information on this page is general and is not legal advice. Commonwealth Migration Group Inc. does not guarantee visa or permit approval; all decisions are made by IRCC and other government authorities.</p>
      </div>
    </div>
  );
}
