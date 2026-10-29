"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import CmgHero from "@/components/home/CmgHero";

const QUESTIONS = [
  {
    key: "location",
    prompt: "Where are you living right now?",
    options: ["Ontario", "Another province in Canada", "Outside Canada"],
  },
  {
    key: "situation",
    prompt: "What best describes your situation?",
    options: ["Working in Ontario", "Studying in Ontario", "Neither yet"],
  },
  {
    key: "jobOffer",
    prompt: "Do you have a job offer from an Ontario employer?",
    options: ["Yes", "Working but no formal offer", "Not yet"],
  },
  {
    key: "age",
    prompt: "How old are you?",
    options: ["18–29", "30–34", "35–39", "40–44", "45 or over"],
  },
  {
    key: "education",
    prompt: "What is your highest completed education?",
    options: ["Master's or PhD", "Bachelor's degree", "Diploma or certificate, 1–2 years", "Secondary school"],
  },
  {
    key: "languageTest",
    prompt: "Have you taken IELTS or CELPIP?",
    options: ["Yes, within 2 years", "Yes, more than 2 years ago", "Not yet"],
  },
];

const OUTCOMES = {
  A: {
    title: "Both routes are worth looking at",
    body: "Your profile touches the Ontario stream and Express Entry. Which one fits depends on details a licensed consultant needs to review.",
  },
  B: {
    title: "Express Entry is worth a closer look",
    body: "You may not be dependent on an employer. The next question is how your profile scores and what could strengthen it.",
  },
  C: {
    title: "The Ontario stream is worth reviewing",
    body: "You have an Ontario employer offer. The language result and your employer's next steps are among the details to discuss.",
  },
  D: {
    title: "A language result could clarify your options",
    body: "A current IELTS or CELPIP result may help clarify which route is worth discussing and what the next step could be.",
  },
  E: {
    title: "Worth a wider conversation",
    body: "The most familiar routes may not be the right ones for your profile. A licensed consultant can help you understand what else may be worth exploring.",
  },
};

const FAQS = [
  {
    question: "Is OINP still open?",
    answer: "Yes. The Ontario Workforce Priority stream is active, and its expression of interest portal opened on August 4, 2026. Ontario closed eight former streams during its 2026 redesign. Intake details can change, so check the latest Ontario updates before taking your next step.",
  },
  {
    question: "What replaced the former OINP streams?",
    answer: "Ontario introduced the Workforce Priority stream, with pathways for foreign workers who have a qualifying Ontario job offer and a separate pathway for eligible self-employed physicians. The foreign-worker pathway covers occupations across NOC TEER categories 0 through 5.",
  },
  {
    question: "Do I need a job offer for Express Entry?",
    answer: "A job offer is not required for many Express Entry candidates. The federal programmes assess factors such as age, education, skilled work experience and language ability. Ontario's employer-led route has different requirements.",
  },
  {
    question: "How many points is an Ontario nomination worth?",
    answer: "An accepted provincial nomination in Express Entry adds 600 points to a candidate's Comprehensive Ranking System score. The nomination is one part of a federal process; IRCC makes the final decision.",
  },
  {
    question: "What is the difference between OINP and Express Entry?",
    answer: "Express Entry is a federal system that manages profiles for eligible economic programmes. OINP is Ontario's provincial nomination programme. A nomination can add points to an eligible Express Entry profile, but does not itself grant permanent residence.",
  },
  {
    question: "Can I apply without a consultant?",
    answer: "Yes. Individuals can pursue these programmes directly. Some people choose a licensed representative when their history is complex, a previous application was refused or they want professional help preparing their file.",
  },
  {
    question: "How much does a consultation cost?",
    answer: "The first consultation is free and runs for 30 minutes. Any professional fees depend on the route and file complexity and are confirmed in writing before an engagement begins.",
  },
  {
    question: "How long does the process take?",
    answer: "Timelines differ by route and change with processing volumes. A consultation can discuss the steps and current estimates that apply to your circumstances.",
  },
];

function pushEvent(event, detail = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...detail });
}

function classifyAnswers(answers) {
  const outsideCanada = answers.location === "Outside Canada";
  const age45Plus = answers.age === "45 or over";
  const secondaryOnly = answers.education === "Secondary school";
  const hasCurrentTest = answers.languageTest === "Yes, within 2 years";
  const hasOntarioOffer = answers.location === "Ontario" && answers.jobOffer === "Yes";
  const hasPostSecondary = !secondaryOnly && Boolean(answers.education);
  const under45 = !age45Plus && Boolean(answers.age);

  if (outsideCanada || age45Plus || secondaryOnly) return "E";
  if (hasOntarioOffer && hasCurrentTest) return "A";
  if (hasOntarioOffer && !hasCurrentTest) return "C";
  if (!hasCurrentTest && under45 && hasPostSecondary) return "D";
  if (answers.jobOffer !== "Yes" && under45 && hasPostSecondary && hasCurrentTest) return "B";
  return "E";
}

function primaryLinkProps() {
  return { href: "#free-consultation", className: "op-button op-button--primary" };
}

function LandingHeader({ variant }) {
  return (
    <header className="op-header" id="top">
      <div className="op-header__frame site-header__nav-frame px-1 pt-3 sm:px-1">
        <div className="op-header__shell site-header__nav-shell relative mx-auto max-w-none backdrop-blur-md rounded-2xl border px-4 transition-shadow duration-300 shadow-[0_4px_24px_color-mix(in_srgb,var(--brand-navy)_8%,transparent),0_1px_4px_color-mix(in_srgb,var(--brand-navy)_4%,transparent)]">
          <div className="op-header__inner">
            <a className="op-brand" href="#top" aria-label={`${site.name} — top of page`}>
              <span className="header-logo-shell flex items-center">
                <Image
                  className="op-header__logo op-header__logo--dark h-9 w-auto object-contain sm:h-10"
                  src={site.logos.white}
                  alt={site.name}
                  width={1912}
                  height={1140}
                  loading="eager"
                  fetchPriority="low"
                  sizes="124px"
                />
                <Image
                  className="op-header__logo op-header__logo--light h-9 w-auto object-contain sm:h-10"
                  src={site.logos.large}
                  alt=""
                  aria-hidden="true"
                  width={1912}
                  height={1140}
                  loading="eager"
                  fetchPriority="low"
                  sizes="124px"
                />
              </span>
            </a>
            <a
              href="#free-consultation"
              className="site-header__cta inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3.5 py-2.5 text-[12px] font-bold text-white shadow-md transition-colors whitespace-nowrap"
            >
              Book a free consultation <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <span className="sr-only">Landing page variant: {variant === "ee" ? "Express Entry" : "OINP"}</span>
    </header>
  );
}

function SectionHeading({ eyebrow, children, summary, light = false }) {
  return (
    <div className={`op-section-heading${light ? " op-section-heading--light" : ""}`}>
      <p className="op-eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
      {summary ? <p className="op-section-heading__summary">{summary}</p> : null}
    </div>
  );
}

function CredentialStrip() {
  const items = [
    { icon: ShieldCheck, label: "CICC-regulated practice" },
    { icon: UserRoundCheck, label: `Licensed RCIC · ${site.rcic.number}` },
    { icon: Check, label: "10,000+ cases since 2016" },
    { icon: MapPin, label: "Office in Brampton, Ontario" },
  ];

  return (
    <div className="op-credentials" aria-label="Practice credentials">
      <div className="op-wrap op-credentials__inner">
        {items.map(({ icon: Icon, label }) => (
          <div className="op-credential" key={label}>
            <span><Icon size={17} aria-hidden="true" /></span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function EligibilityChecker({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  function choose(answer) {
    const updated = { ...answers, [QUESTIONS[step].key]: answer };
    setAnswers(updated);
    if (step === 0) pushEvent("checker_start");
    if (step < QUESTIONS.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    const outcome = classifyAnswers(updated);
    setResult(outcome);
    pushEvent("checker_complete", { result_outcome: outcome });
    onComplete?.(updated, outcome);
  }

  const question = QUESTIONS[step];
  return (
    <div className="op-checker-card">
      <div className="op-checker-card__top">
        <span className="op-checker-label">Quick profile guide</span>
        <span className="op-checker-count">Question <strong>{result ? 6 : step + 1}</strong> of 6</span>
      </div>
      <div className="op-progress" aria-label={result ? "Guide complete" : `Question ${step + 1} of 6`}>
        {QUESTIONS.map((item, index) => (
          <span key={item.key} className={index <= (result ? 5 : step) ? "is-active" : ""} />
        ))}
      </div>
      {result ? (
        <div className="op-result" aria-live="polite">
          <span className="op-result__badge">Your starting point</span>
          <h3>{OUTCOMES[result].title}</h3>
          <p>{OUTCOMES[result].body}</p>
          <p className="op-result__disclaimer">This is an indicative guide, not an eligibility assessment. Only a licensed representative can assess eligibility. Outcomes are determined by IRCC and the Government of Ontario.</p>
          <a {...primaryLinkProps()}>Book a free consultation <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      ) : (
        <div className="op-question" aria-live="polite">
          <div className="op-question__heading">
            {step > 0 ? (
              <button type="button" className="op-back" onClick={() => setStep((current) => Math.max(0, current - 1))} aria-label="Go to previous question">
                <ChevronLeft size={17} aria-hidden="true" /> Back
              </button>
            ) : <span className="op-question__note">Your result appears before we ask for contact details.</span>}
            <h3>{question.prompt}</h3>
          </div>
          <div className="op-options">
            {question.options.map((option) => (
              <button type="button" key={option} className="op-option" onClick={() => choose(option)}>
                <span>{option}</span><ChevronRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ComparisonCards() {
  const rows = [
    ["Who it suits", "Skilled professionals ranked on points", "People with a qualifying Ontario employer; eligible self-employed physicians may also qualify"],
    ["Job offer", "Not required for many Express Entry candidates", "Required for the foreign-worker pathway"],
    ["What is assessed", "Age, education, work experience and language", "Employer, offer and occupation criteria"],
    ["Occupations", "Roles that meet the selected federal programme criteria", "Foreign-worker pathways span NOC TEER 0 through 5"],
    ["Nomination", "A provincial nomination may add 600 CRS points", "An accepted nomination in Express Entry adds 600 points"],
    ["Invitations", "Federal invitation rounds take place throughout the year", "Ontario sets its own invitation rounds"],
  ];

  return (
    <div className="op-comparison" role="table" aria-label="Express Entry and Ontario Workforce Priority comparison">
      <div className="op-comparison__head" role="row">
        <span role="columnheader">Compare the routes</span>
        <strong role="columnheader">Express Entry</strong>
        <strong role="columnheader">Ontario Workforce Priority</strong>
      </div>
      {rows.map(([label, express, ontario]) => (
        <div className="op-comparison__row" role="row" key={label}>
          <strong className="op-comparison__label" role="rowheader">{label}</strong>
          <span role="cell">{express}</span>
          <span role="cell">{ontario}</span>
        </div>
      ))}
    </div>
  );
}

function ConsultationForm({ variant, answers, resultOutcome, bookingUrl }) {
  const [fields, setFields] = useState({ firstName: "", lastName: "", email: "", phone: "", countryCode: "+1" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingDone, setBookingDone] = useState(false);
  const bookingConversionTracked = useRef(false);

  useEffect(() => {
    if (!bookingUrl) return undefined;
    const onMessage = (event) => {
      const trustedOrigin = event.origin === "https://calendly.com"
        || event.origin.endsWith(".calendly.com")
        || event.origin === "https://cal.com"
        || event.origin.endsWith(".cal.com");
      const eventName = event.data?.event || event.data?.type;
      if (
        trustedOrigin
        && !bookingConversionTracked.current
        && (eventName === "calendly.event_scheduled" || eventName === "booking:confirmed")
      ) {
        bookingConversionTracked.current = true;
        setBookingDone(true);
        pushEvent("booking_complete", {
          conversion_name: "ontario_pr_consultation_booking",
          conversion_type: "consultation_booking",
          result_outcome: resultOutcome || "not_completed",
          variant,
        });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [bookingUrl, resultOutcome, variant]);

  const whatsappHref = useMemo(() => {
    if (!whatsappUrl) return "";
    const message = "Hi, I'd like to book a free consultation about Canada PR through Ontario.";
    return `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`;
  }, []);

  function updateField(key) {
    return (event) => setFields((current) => ({ ...current, [key]: event.target.value }));
  }

  function validate() {
    const nextErrors = {};
    if (!fields.firstName.trim()) nextErrors.firstName = "Enter your first name.";
    if (!fields.lastName.trim()) nextErrors.lastName = "Enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (fields.phone.replace(/\D/g, "").length < 7) nextErrors.phone = "Enter a valid phone number.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function submit(event) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrorMessage("");
    const query = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].map((key) => [key, query.get(key) || ""]));
    const fullName = `${fields.firstName.trim()} ${fields.lastName.trim()}`.trim();
    const payload = {
      type: "ontario-landing",
      fullName,
      firstName: fields.firstName.trim(),
      lastName: fields.lastName.trim(),
      email: fields.email.trim(),
      phone: `${fields.countryCode} ${fields.phone.trim()}`,
      country: "Not specified",
      interest: "OINP and Express Entry consultation",
      mode: "To be confirmed",
      preferredDate: "To be scheduled",
      message: "Enquiry submitted from the Ontario PR landing page.",
      variant,
      answers,
      resultOutcome: resultOutcome || "not_completed",
      consent: true,
      ...attribution,
    };

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "We couldn't send your enquiry. Please try again.");
      setStatus("success");
      pushEvent("form_submit", {
        conversion_name: "ontario_pr_lead",
        conversion_type: "lead_form_submission",
        result_outcome: payload.resultOutcome,
        variant,
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "We couldn't send your enquiry. Please try again.");
    }
  }

  if (status === "success") {
    if (bookingDone) {
      return (
        <div className="op-success-card" role="status" aria-live="polite">
          <span className="op-success-card__icon"><Check size={22} aria-hidden="true" /></span>
          <p className="op-eyebrow">Consultation booked</p>
          <h3>You&apos;re booked. Check your email.</h3>
          <p>You&apos;ll get a confirmation and calendar invite. If anything changes, message us on WhatsApp and we&apos;ll help move it.</p>
          {whatsappHref ? <a className="op-button op-button--secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" /> Message us on WhatsApp</a> : null}
        </div>
      );
    }

    return (
      <div className="op-booking-step" role="status" aria-live="polite">
        <span className="op-success-card__icon"><CalendarCheck size={22} aria-hidden="true" /></span>
        <p className="op-eyebrow">Next step</p>
        <h3>{bookingUrl ? "Choose a time for your free consultation" : "Your consultation request is in"}</h3>
        <p>{bookingUrl ? "Choose an available 30-minute time below. The calendar will confirm your booking." : "Our team will contact you within one business day to confirm a free 30-minute time. You can also call or message us to arrange it."}</p>
        {bookingUrl ? (
          <iframe className="op-calendar" title="Book a free 30-minute consultation" src={bookingUrl} referrerPolicy="no-referrer" loading="lazy" />
        ) : (
          <div className="op-booking-fallback">
            <a className="op-button op-button--primary" href={site.phoneHref}><span>Call {site.phone}</span><ArrowRight size={16} aria-hidden="true" /></a>
            {whatsappHref ? <a className="op-button op-button--secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" /> Message us on WhatsApp</a> : null}
          </div>
        )}
      </div>
    );
  }

  return (
    <form className="op-form" onSubmit={submit} noValidate>
      <div className="op-form__header">
        <span className="op-form__icon"><CalendarCheck size={21} aria-hidden="true" /></span>
        <div>
          <p className="op-eyebrow">Free consultation</p>
          <h3>Tell us how to reach you</h3>
          <p>Share four details and our team will be in touch.</p>
        </div>
      </div>
      <div className="op-form__grid">
        <label className="op-field">
          <span>First name <b>*</b></span>
          <input name="firstName" autoComplete="given-name" value={fields.firstName} onChange={updateField("firstName")} aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? "ontario-first-error" : undefined} />
          {errors.firstName ? <small id="ontario-first-error">{errors.firstName}</small> : null}
        </label>
        <label className="op-field">
          <span>Last name <b>*</b></span>
          <input name="lastName" autoComplete="family-name" value={fields.lastName} onChange={updateField("lastName")} aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? "ontario-last-error" : undefined} />
          {errors.lastName ? <small id="ontario-last-error">{errors.lastName}</small> : null}
        </label>
        <label className="op-field">
          <span>Email <b>*</b></span>
          <input name="email" type="email" autoComplete="email" value={fields.email} onChange={updateField("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "ontario-email-error" : undefined} />
          {errors.email ? <small id="ontario-email-error">{errors.email}</small> : null}
        </label>
        <label className="op-field">
          <span>Phone <b>*</b></span>
          <span className="op-phone-field">
            <select aria-label="Phone country code" value={fields.countryCode} onChange={updateField("countryCode")}>
              <option value="+1">Canada / US +1</option>
              <option value="+44">UK +44</option>
              <option value="+91">India +91</option>
              <option value="+971">UAE +971</option>
              <option value="+61">Australia +61</option>
            </select>
            <input name="phone" type="tel" autoComplete="tel-national" value={fields.phone} onChange={updateField("phone")} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "ontario-phone-error" : undefined} />
          </span>
          {errors.phone ? <small id="ontario-phone-error">{errors.phone}</small> : null}
        </label>
      </div>
      {errorMessage ? <p className="op-form__error" role="alert">{errorMessage}</p> : null}
      <div className="op-form__submit-row">
        <button type="submit" className="op-button op-button--primary" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Book a free consultation"}
          <ArrowRight size={16} aria-hidden="true" />
        </button>
        <p>By submitting, you agree to be contacted about your enquiry. We use your information to respond and handle your request. See our <a href={site.legal.privacy.href}>Privacy Policy</a>.</p>
      </div>
      <p className="op-form__promise"><Clock3 size={15} aria-hidden="true" /> Free 30 minutes · No obligation</p>
    </form>
  );
}

export default function OntarioPrLanding({ variant = "oinp", bookingUrl = "" }) {
  const [quizResult, setQuizResult] = useState({ answers: {}, outcome: "" });
  const [showDesktopCta, setShowDesktopCta] = useState(false);
  const expressEntryVariant = variant === "ee";

  useEffect(() => {
    const onScroll = () => {
      const changed = document.getElementById("what-changed");
      if (!changed) return;
      const threshold = changed.offsetTop + changed.offsetHeight;
      setShowDesktopCta(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="op-page" id="landing-main">
      <a className="op-skip-link" href="#main-content">Skip to main content</a>
      <LandingHeader variant={variant} />

      {showDesktopCta ? (
        <div className="op-sticky-top" aria-label="Book a free consultation">
          <span>Ontario OINP and Express Entry guidance</span>
          <a {...primaryLinkProps()}>Book a free consultation <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      ) : null}

      <CmgHero
        id="op-hero-title"
        className="op-landing-hero"
        eyebrow={expressEntryVariant ? "Express Entry · Ontario" : "OINP · Ontario Nominee Program"}
        title={expressEntryVariant ? <>Canada PR <em>without a job offer</em></> : <>Canada PR through <em>ONIP</em></>}
        lead={expressEntryVariant
          ? "Express Entry scores your age, education, experience and English. Find out where your profile stands in a free 30-minute consultation with a CICC-regulated RCIC."
          : "Ontario rebuilt its nominee programme in 2026. Find out which route still fits your profile in a free 30-minute consultation with a CICC-regulated RCIC."}
        pagePath="/"
        initialCardIndex={1}
        primaryAction={{
          href: "#free-consultation",
          label: "Book a free consultation",
          icon: <ArrowRight size={17} aria-hidden="true" />,
          className: "max-[768px]:!w-full max-[768px]:!min-h-[52px] max-[768px]:!px-[22px] max-[768px]:!py-[14px] max-[768px]:!rounded-[14px] max-[768px]:!text-[14px] max-[640px]:!p-[15px]",
        }}
        secondaryAction={{
          href: "#eligibility-checker",
          label: "Check my eligibility",
          icon: <ArrowRight size={17} aria-hidden="true" />,
          className: "max-[768px]:!w-auto max-[768px]:!min-h-10 max-[768px]:!px-[18px] max-[768px]:!py-[9px] max-[768px]:!rounded-full max-[768px]:!text-[12.5px] max-[768px]:!bg-[color-mix(in_srgb,var(--template-on-primary)_8%,transparent)] max-[768px]:!border-[color-mix(in_srgb,var(--template-on-primary)_22%,transparent)] max-[768px]:!shadow-none max-[768px]:[&:hover]:!bg-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)] max-[768px]:[&:hover]:!border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] max-[768px]:[&:hover]:!transform-none max-[768px]:[&:focus-visible]:!bg-[color-mix(in_srgb,var(--template-on-primary)_14%,transparent)] max-[768px]:[&:focus-visible]:!border-[color-mix(in_srgb,var(--template-on-primary)_34%,transparent)] max-[768px]:[&:focus-visible]:!transform-none",
        }}
        trustClassName="op-hero__trust"
        trustContent={(
          <>
            <span><ShieldCheck size={15} aria-hidden="true" /> No cost</span>
            <span><UserRoundCheck size={15} aria-hidden="true" /> No obligation</span>
            <span><Clock3 size={15} aria-hidden="true" /> 30 minutes with a licensed consultant</span>
          </>
        )}
      />

      <CredentialStrip />

      <section className="op-section op-section--warm" id="what-changed">
        <div className="op-wrap op-change-grid">
          <div>
            <SectionHeading eyebrow="Ontario in 2026" summary="Ontario replaced eight former OINP streams with a new provincial pathway. The updated route is employer-led for foreign workers, with a separate option for eligible self-employed physicians.">
              What changed for OINP and Express Entry in Ontario?
            </SectionHeading>
            <p className="op-body-copy">Ontario&apos;s 2026 redesign took effect on June 25. The Ontario Workforce Priority stream now covers foreign-worker occupations across NOC TEER categories 0 through 5. Its expression of interest portal opened on August 4, 2026.</p>
            <p className="op-body-copy">An Ontario employer begins the foreign-worker process through the employer portal. An accepted provincial nomination in Express Entry adds 600 points to a candidate&apos;s Comprehensive Ranking System score; IRCC makes the final decision on permanent residence.</p>
            <div className="op-callout"><span aria-hidden="true" />Most guides online still describe the former streams. If your plan came from one of those, it needs rechecking.</div>
          </div>
          <aside className="op-fact-card" aria-label="Ontario Workforce Priority summary">
            <span className="op-fact-card__label">Ontario Workforce Priority</span>
            <strong>0–5</strong>
            <p>NOC TEER categories covered by the foreign-worker pathways</p>
            <div className="op-fact-card__rule" />
            <span className="op-fact-card__meta"><Check size={16} aria-hidden="true" /> Eligible self-employed physicians have a separate pathway</span>
            <a href="#eligibility-checker">Check my eligibility <ArrowRight size={15} aria-hidden="true" /></a>
          </aside>
        </div>
      </section>

      <section className="op-section op-section--checker" id="eligibility-checker">
        <div className="op-wrap">
          <SectionHeading eyebrow="Find a starting point" summary="Answer six questions to see which route may be worth discussing. Your result appears before we ask for contact details.">
            A quick guide to your profile
          </SectionHeading>
          <EligibilityChecker onComplete={(answers, outcome) => setQuizResult({ answers, outcome })} />
        </div>
      </section>

      <section className="op-section op-section--routes" id="routes">
        <div className="op-wrap">
          <SectionHeading eyebrow="Two routes compared" summary="Express Entry is the federal points-based system. Ontario Workforce Priority is a provincial route with an employer-led pathway for foreign workers.">
            Two routes to Canada PR from Ontario
          </SectionHeading>
          <ComparisonCards />
          <p className="op-section-note">Most people fit one route, not both. Some fit neither today but could within a few months. Establishing which of those describes you is what the first call is for.</p>
          <a {...primaryLinkProps()}>Book a free consultation <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="op-section op-section--warm" id="requirements">
        <div className="op-wrap">
          <SectionHeading eyebrow="What you need" summary="The requirements differ between federal Express Entry programmes and Ontario's provincial stream. A personal review can identify which rules apply to your circumstances.">
            What you need for each route
          </SectionHeading>
          <div className="op-requirements">
            <article className="op-requirement-card">
              <span className="op-card-kicker">Federal programme</span>
              <h3>Express Entry</h3>
              <ul>
                <li><Check size={16} aria-hidden="true" /><span>Age, which can affect your Comprehensive Ranking System score</span></li>
                <li><Check size={16} aria-hidden="true" /><span>A degree or diploma, with an educational credential assessment when the programme requires one</span></li>
                <li><Check size={16} aria-hidden="true" /><span>Work experience that meets the requirements of the federal programme you qualify under</span></li>
                <li><Check size={16} aria-hidden="true" /><span>A current English test result, such as IELTS General Training or CELPIP General</span></li>
                <li><Check size={16} aria-hidden="true" /><span>Proof of settlement funds when your selected programme requires it</span></li>
                <li><Check size={16} aria-hidden="true" /><span>Police certificates and a medical exam when required for your file</span></li>
              </ul>
            </article>
            <article className="op-requirement-card op-requirement-card--accent">
              <span className="op-card-kicker">Ontario employer-led route</span>
              <h3>Ontario Workforce Priority</h3>
              <ul>
                <li><Check size={16} aria-hidden="true" /><span>A qualifying full-time, permanent Ontario job offer for the foreign-worker pathway</span></li>
                <li><Check size={16} aria-hidden="true" /><span>An occupation in NOC TEER category 0 through 5</span></li>
                <li><Check size={16} aria-hidden="true" /><span>An employer that meets Ontario&apos;s requirements and starts through its employer portal</span></li>
                <li><Check size={16} aria-hidden="true" /><span>An expression of interest and an invitation before moving to the next stage</span></li>
                <li><Check size={16} aria-hidden="true" /><span>Work experience, language, education and licensing requirements that vary by pathway</span></li>
                <li><Check size={16} aria-hidden="true" /><span>Eligible self-employed physicians may use a separate pathway without a job offer</span></li>
              </ul>
            </article>
          </div>
          <p className="op-section-note">Missing one item does not always close the door. Some parts of a profile can be strengthened over time, and getting the steps in the right order can make a difference.</p>
          <a {...primaryLinkProps()}>Book a free consultation <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="op-section op-section--process" id="how-it-works">
        <div className="op-wrap">
          <SectionHeading eyebrow="How working with us goes" summary="A clear sequence gives you a chance to understand the service and your options before deciding what comes next." light>
            How it works
          </SectionHeading>
          <div className="op-process-grid">
            {[
              ["01", "Free 30-minute consultation", "A licensed RCIC reviews your profile, discusses which route may fit and identifies what may be missing."],
              ["02", "A written plan", "The route, the documents, the order they go in and the likely next steps."],
              ["03", "File preparation", "We prepare the file with you. You supply the documents and information needed for your circumstances."],
              ["04", "Submission and follow-through", "Your licensed representative prepares and submits the file, then stays involved through the next steps and decision."],
            ].map(([number, title, copy]) => (
              <article className="op-process-card" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="op-process-footer"><p>You can stop after step one. Most of what people need from the first call is a straight answer, and that costs nothing.</p><a {...primaryLinkProps()}>Book a free consultation <ArrowRight size={16} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="op-section op-section--licensed" id="licensed-rcic">
        <div className="op-wrap op-licensed-grid">
          <div>
            <SectionHeading eyebrow="Why a licensed RCIC" summary="Before you pay anyone, ask who will be responsible for your file and what their licence number is.">
              Before you pay anyone, ask one question
            </SectionHeading>
            <blockquote>“Who is the licensed representative on my file, and what is their licence number?”</blockquote>
            <p>People who provide paid immigration advice or representation must be authorized. You can check a consultant on the CICC public register. Our RCIC number is <strong>{site.rcic.number}</strong>.</p>
            <p>Ask who will be responsible for your file before you sign an agreement or pay professional fees. Clear scope, a named representative and a written fee agreement should be in place before you begin.</p>
          </div>
          <div className="op-licensed-mark"><ShieldCheck size={40} aria-hidden="true" /><span>CICC-regulated practice</span><strong>{site.rcic.number}</strong><small>Licensed RCIC · Brampton, Ontario</small></div>
        </div>
      </section>

      <section className="op-section op-section--faq" id="faq">
        <div className="op-wrap op-faq-grid">
          <div className="op-faq-intro">
            <SectionHeading eyebrow="Questions people ask" summary="Clear answers to common questions about OINP, Express Entry and working with a representative.">
              Answers before you make a decision
            </SectionHeading>
          </div>
          <div className="op-faq-list">
            {FAQS.map((faq, index) => (
              <details key={faq.question} open={index === 0} className="op-faq-item">
                <summary><span>{faq.question}</span><span className="op-faq-icon" aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="op-section op-section--final" id="free-consultation">
        <div className="op-wrap op-final-grid">
          <div className="op-final-copy">
            <p className="op-eyebrow">Your next step</p>
            <h2>Find out where you actually stand</h2>
            <p>Thirty minutes, no cost, no obligation. A licensed RCIC reviews your profile and talks through which route may fit, what is missing and what could change the answer.</p>
            <div className="op-final-trust">
              <span><Clock3 size={17} aria-hidden="true" /><strong>30 minutes</strong><small>Focused on your profile</small></span>
              <span><ShieldCheck size={17} aria-hidden="true" /><strong>Licensed RCIC</strong><small>Regulated representation</small></span>
            </div>
          </div>
          <ConsultationForm variant={variant} answers={quizResult.answers} resultOutcome={quizResult.outcome} bookingUrl={bookingUrl} />
        </div>
      </section>

      <footer className="op-footer">
        <div className="op-wrap">
          <div className="op-footer__top">
            <div className="op-footer__brand">
              <Image src={site.logos.white} alt="" width={1912} height={1140} sizes="76px" />
              <div><strong>Commonwealth Migration Group Inc.</strong><span>Brampton, Ontario</span></div>
            </div>
            <div className="op-footer__contact">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.emailHref}>{site.email}</a>
              <span>Licensed RCIC · {site.rcic.number} · CICC-regulated</span>
            </div>
          </div>
          <div className="op-footer__disclaimers">
            <p>Commonwealth Migration Group Inc. is a private immigration consultancy. We are not affiliated with, endorsed by, or acting on behalf of the Government of Canada or the Government of Ontario.</p>
            <p>Individuals can pursue these programmes directly without a representative. Our fees are for professional representation and file preparation only.</p>
            <p>Eligibility and outcomes are determined by IRCC and the Government of Ontario. No outcome is guaranteed.</p>
            <p className="op-footer__license">Licensed RCIC · {site.rcic.number} · CICC-regulated</p>
          </div>
          <nav className="op-footer__legal" aria-label="Legal">
            <a href={site.legal.privacy.href}>Privacy Policy</a>
            <a href={site.legal.terms.href}>Terms of Use</a>
            <a href={site.legal.disclaimer.href}>Disclaimer</a>
          </nav>
          <p className="op-footer__copyright">© {new Date().getFullYear()} Commonwealth Migration Group Inc. All rights reserved.</p>
        </div>
      </footer>

      <div className="op-sticky-bottom"><a {...primaryLinkProps()}>Book a free consultation <ArrowRight size={16} aria-hidden="true" /></a></div>
    </div>
  );
}
