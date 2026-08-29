"use client";

import { useEffect, useState } from "react";
import { Chatbot, createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import { ArrowRight, CalendarCheck, Check, ExternalLink, MessageCircle, RotateCcw, Search, X } from "lucide-react";
import { site } from "@/config/site";
import { currentPagePath } from "@/config/pageRoutes";

const whatsappHref = site.whatsappUrl;

const services = [
  { id: "pr", icon: "🍁", label: "Express Entry / PR", keywords: ["express", "entry", "permanent", "pr", "pnp", "nominee", "immigrate"] },
  { id: "work", icon: "💼", label: "Work permit", keywords: ["work", "permit", "pgwp", "job", "worker"] },
  { id: "study", icon: "🎓", label: "Study permit", keywords: ["study", "student", "school", "college", "university", "pgwp"] },
  { id: "visit", icon: "✈️", label: "Visitor / Super Visa", keywords: ["visit", "visitor", "tourist", "super visa", "eta", "travel"] },
  { id: "family", icon: "👨‍👩‍👧", label: "Sponsor family", keywords: ["sponsor", "spouse", "family", "partner", "parents", "grandparents"] },
  { id: "employer", icon: "🏢", label: "Employer services", keywords: ["employer", "lmia", "talent", "recruit", "business", "gts"] },
  { id: "refusal", icon: "⚖️", label: "Refusal / status problem", keywords: ["refusal", "refused", "pfl", "appeal", "out of status", "restore", "restoration"] },
  { id: "citizenship", icon: "🇨🇦", label: "Citizenship / PR card", keywords: ["citizen", "citizenship", "pr card", "prtd", "residency"] },
];

const choice = (value, label, keywords = []) => ({ value, label, keywords });

const choices = {
  prLocation: [
    choice("in-canada", "🇨🇦 I’m in Canada", ["in", "canada", "here"]),
    choice("outside-canada", "🌍 I’m outside Canada", ["outside", "abroad", "home"]),
    choice("not-sure", "🤔 I’m not sure yet", ["not sure", "unsure"]),
  ],
  prCrs: [
    choice("under-450", "Under 450", ["under", "low"]),
    choice("450-499", "450 – 499", ["450", "499"]),
    choice("500-plus", "500 or above", ["500", "high"]),
    choice("not-checked", "I haven’t checked yet", ["not checked", "unknown", "calculate"]),
  ],
  prExperience: [
    choice("canadian-experience", "I have Canadian work experience", ["canadian", "experience"]),
    choice("foreign-experience", "My experience is outside Canada", ["foreign", "outside"]),
    choice("no-experience", "I’m early in my career", ["early", "no experience"]),
    choice("not-sure", "I’m not sure how it counts", ["not sure", "unsure"]),
  ],
  workStatus: [
    choice("outside-canada", "Applying from outside Canada", ["outside", "abroad"]),
    choice("visitor", "I’m in Canada as a visitor", ["visitor"]),
    choice("student", "I’m a student / recent graduate", ["student", "graduate", "pgwp"]),
    choice("worker", "I’m already working in Canada", ["working", "worker"]),
    choice("not-sure", "I’m not sure", ["not sure", "unsure"]),
  ],
  workGoal: [
    choice("employer-specific", "Employer-specific work permit", ["employer", "specific", "job"]),
    choice("open", "Open work permit", ["open"]),
    choice("pgwp", "Post-Graduation Work Permit (PGWP)", ["pgwp", "graduation"]),
    choice("extend-restore", "Extend or restore my status", ["extend", "restore", "restoration"]),
    choice("not-sure", "I’m not sure which permit fits", ["not sure", "unsure"]),
  ],
  studyLocation: [
    choice("outside-canada", "I’m applying from outside Canada", ["outside", "abroad"]),
    choice("in-canada", "I’m already in Canada", ["in canada", "here"]),
    choice("not-sure", "I’m exploring options", ["explore", "not sure"]),
  ],
  studyStage: [
    choice("researching", "Researching programs", ["research", "explore"]),
    choice("accepted", "I have an acceptance letter", ["accepted", "letter", "offer"]),
    choice("graduating", "I’m planning after graduation", ["graduat", "pgwp"]),
    choice("not-sure", "I’m not sure what comes next", ["not sure", "unsure"]),
  ],
  visitPurpose: [
    choice("family", "Visit family or friends", ["family", "friends"]),
    choice("tourism", "Tourism or a short stay", ["tourism", "tourist", "short"]),
    choice("super-visa", "Parents’ or grandparents’ Super Visa", ["super", "parents", "grandparents"]),
    choice("business", "Business visit", ["business", "meeting"]),
  ],
  familyRelationship: [
    choice("spouse-partner", "Spouse or common-law partner", ["spouse", "partner", "common"]),
    choice("parents-grandparents", "Parents or grandparents", ["parents", "grandparents", "pgp"]),
    choice("dependent-child", "Dependent child", ["child", "dependent"]),
    choice("other-family", "Another family relationship", ["other", "family"]),
  ],
  employerNeed: [
    choice("lmia", "LMIA support", ["lmia"]),
    choice("global-talent", "Global Talent Stream", ["global", "talent", "gts"]),
    choice("recruitment", "Recruitment and work permits", ["recruit", "hiring"]),
    choice("compliance", "Employer compliance or audit", ["compliance", "audit"]),
    choice("provincial", "Employer-side PNP / regional program", ["pnp", "provincial", "regional"]),
  ],
  refusalIssue: [
    choice("visa-refusal", "A visa or permit was refused", ["visa", "permit", "refused"]),
    choice("pfl", "I received a procedural fairness letter", ["pfl", "fairness"]),
    choice("status", "My status expired or I’m out of status", ["status", "expired", "restore"]),
    choice("pr-refusal", "My PR or Express Entry case was refused", ["pr", "express", "refused"]),
  ],
  refusalDeadline: [
    choice("urgent", "Yes — I have a deadline soon", ["yes", "urgent", "deadline"]),
    choice("not-urgent", "No immediate deadline", ["no", "not urgent"]),
    choice("not-sure", "I’m not sure of the deadline", ["not sure", "unsure"]),
  ],
  citizenshipNeed: [
    choice("citizenship", "Citizenship application", ["citizenship"]),
    choice("pr-card", "PR card renewal or travel document", ["pr card", "travel", "prtd"]),
    choice("residency", "Residency obligation question", ["residency", "obligation"]),
    choice("not-sure", "I’m not sure which service I need", ["not sure", "unsure"]),
  ],
};

const menuOptions = services.map((service) => ({
  ...service,
  value: service.id,
}));

function botMessage(text, widget, payload) {
  return createChatBotMessage(text, {
    ...(widget ? { widget, payload } : {}),
    delay: 260,
  });
}

function BotHeader() {
  return (
    <div className="cmg-chatbot-header flex items-center gap-3 min-h-[4.65rem] border-b border-[rgba(255,255,255,.08)] bg-[linear-gradient(135deg,#070d16_0%,#0f1a2a_100%)] p-[.9rem_3.4rem_.9rem_1rem] text-[#f7f8fb]">
      <div className="cmg-chatbot-header-mark inline-flex shrink-0 items-center justify-center w-[2.35rem] h-[2.35rem] rounded-full text-[1.05rem] bg-[linear-gradient(135deg,var(--cmg-dark-primary,var(--brand-primary)),var(--cmg-dark-accent,var(--brand-primary-dark)))] text-white shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-primary)_20%,transparent)]" aria-hidden="true">✦</div>
      <div className="min-w-0">
      <p className="cmg-chatbot-header-title m-0 text-[.88rem] font-extrabold tracking-[-.015em] text-[#f7f8fb]">CMG Pathway Guide</p>
      <p className="cmg-chatbot-header-status flex items-center gap-[.35rem] m-[.2rem_0_0] text-[.6875rem] font-semibold text-[var(--cmg-dark-muted,rgba(255,255,255,.68))]"><span className="inline-block w-[.42rem] h-[.42rem] rounded-full bg-[#22c55e] shadow-[0_0_0_4px_rgba(34,197,94,.18),0_0_10px_rgba(34,197,94,.35)] animate-[cmg-chatbot-pulse_2s_ease-in-out_infinite]" /> Online · General information</p>
      </div>
      <div className="cmg-chatbot-header-badge ml-auto rounded-full border border-[rgba(255,255,255,.16)] bg-[rgba(255,255,255,.06)] px-[.55rem] py-[.35rem] text-[.6875rem] font-extrabold tracking-[.08em] text-[rgba(255,255,255,.78)] backdrop-blur-[8px]">RCIC</div>
    </div>
  );
}

function BotAvatar() {
  return <div className="cmg-chatbot-avatar inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full text-[.9rem] bg-[linear-gradient(135deg,var(--cmg-dark-primary,var(--brand-primary)),var(--cmg-dark-accent,var(--brand-primary-dark)))] text-white" aria-hidden="true">✦</div>;
}

function ChoiceWidget({ payload, actionProvider }) {
  return <ChoiceWidgetView payload={payload} actionProvider={actionProvider} />;
}

function ChoiceWidgetView({ payload, actionProvider }) {
  const [query, setQuery] = useState("");
  const options = payload?.options || [];
  const showSearch = Boolean(payload?.showSearch);
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? options.filter((option) => `${option.label} ${option.keywords?.join(" ") || ""}`.toLowerCase().includes(normalizedQuery))
    : options;

  return (
    <div className="cmg-chatbot-choice-widget w-[min(100%,19rem)] max-[640px]:w-[calc(100%-2.6rem)] m-[-.25rem_0_0_2.6rem]">
      {showSearch && (
        <label className="cmg-chatbot-search flex items-center gap-[.45rem] mb-[.65rem] rounded-[.85rem] border border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.06)] px-[.7rem] text-[var(--cmg-dark-muted,#aeb8c5)] transition-[border-color,background] duration-[180ms] ease-in-out focus-within:border-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_32%,transparent)] focus-within:bg-[rgba(255,255,255,.09)]">
          <Search className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Search services</span>
            <input
            className="w-full min-w-0 border-0 bg-transparent py-[.62rem] text-[var(--cmg-dark-ink,#f7f8fb)] text-[.72rem] outline-none placeholder:text-[var(--cmg-dark-muted,rgba(255,255,255,.42))]"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a service…"
          />
        </label>
      )}
      <div className="cmg-chatbot-choice-list grid gap-[.42rem]">
        {filtered.map((option) => (
          <button
            type="button"
            key={option.value}
            className="cmg-chatbot-choice flex items-center gap-[.55rem] w-full min-h-[2.55rem] rounded-[.85rem] border border-[rgba(255,255,255,.09)] bg-[rgba(255,255,255,.06)] px-[.72rem] py-[.6rem] text-[var(--cmg-dark-ink,#f7f8fb)] text-[.72rem] font-bold leading-[1.3] text-left transition-[border-color,background-color,transform,box-shadow] duration-[180ms] ease-in-out active:translate-y-0 hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_48%,transparent)] hover:bg-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_10%,rgba(255,255,255,.06))] hover:shadow-[0_6px_16px_rgba(0,0,0,.14)]"
            onClick={() => actionProvider.handleChoice({
              service: payload.service,
              step: payload.step,
              value: option.value,
              label: option.label,
            })}
          >
            {option.icon && <span aria-hidden="true">{option.icon}</span>}
            <span>{option.label}</span>
            <ArrowRight className="cmg-chatbot-choice-arrow w-[.82rem] ml-auto text-[var(--cmg-dark-primary,var(--brand-primary))] opacity-90" aria-hidden="true" />
          </button>
        ))}
        {filtered.length === 0 && <p className="cmg-chatbot-empty m-0 rounded-[.85rem] p-[.8rem] text-[.7rem] leading-[1.5] border border-[rgba(255,255,255,.08)] bg-[rgba(255,255,255,.06)] text-[var(--cmg-dark-muted,#aeb8c5)]">No matching service. Try another phrase or type your question below.</p>}
      </div>
    </div>
  );
}

function ActionWidget({ payload, actionProvider }) {
  return (
    <div className="cmg-chatbot-actions grid grid-cols-2 gap-2 w-[min(100%,21rem)] max-[640px]:w-[calc(100%-2.6rem)] m-[-.2rem_0_0_2.6rem]">
      {(payload?.actions || []).map((action) => {
        if (action.action === "lead") {
          return (
            <button type="button" className="cmg-chatbot-action inline-flex items-center justify-center gap-[.38rem] min-h-[2.4rem] rounded-[.8rem] border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.06)] px-[.6rem] py-2 text-[#f7f8fb] text-[.6875rem] font-extrabold leading-[1.2] text-center transition-all duration-[180ms] ease-in-out hover:border-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_10%,rgba(255,255,255,.06))] hover:-translate-y-px cmg-chatbot-action--primary border-transparent bg-[linear-gradient(135deg,var(--cmg-dark-primary,var(--brand-primary)),var(--cmg-dark-accent,var(--brand-primary-dark)))] text-[#ffffff] shadow-[0_6px_16px_color-mix(in_srgb,var(--brand-primary)_18%,transparent)] hover:filter-[brightness(1.07)] hover:border-transparent [html[data-theme='light']_&]:!bg-[linear-gradient(135deg,var(--cmg-light-primary,var(--brand-primary)),var(--cmg-light-accent,var(--brand-primary-dark)))] [html[data-theme='light']_&]:!text-white [html[data-theme='light']_&]:hover:!bg-[linear-gradient(135deg,var(--cmg-light-primary,var(--brand-primary)),var(--cmg-light-accent,var(--brand-primary-dark)))] [html[data-theme='light']_&]:hover:!text-white" key={action.label} onClick={() => actionProvider.startLeadCapture()}>
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {action.label}
            </button>
          );
        }

        if (action.action === "restart") {
          return (
            <button type="button" className="cmg-chatbot-action inline-flex items-center justify-center gap-[.38rem] min-h-[2.4rem] rounded-[.8rem] border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.06)] px-[.6rem] py-2 text-[#f7f8fb] text-[.6875rem] font-extrabold leading-[1.2] text-center transition-all duration-[180ms] ease-in-out hover:border-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_10%,rgba(255,255,255,.06))] hover:-translate-y-px cmg-chatbot-action--quiet border-transparent bg-transparent text-[var(--cmg-dark-muted,#aeb8c5)] col-span-full hover:border-[rgba(255,255,255,.10)] hover:bg-[rgba(255,255,255,.06)]" key={action.label} onClick={() => actionProvider.restart()}>
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              {action.label}
            </button>
          );
        }

        return (
          <a
            key={action.label}
            href={action.href}
            className={`cmg-chatbot-action inline-flex items-center justify-center gap-[.38rem] min-h-[2.4rem] rounded-[.8rem] border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.06)] px-[.6rem] py-2 text-[#f7f8fb] text-[.6875rem] font-extrabold leading-[1.2] text-center transition-all duration-[180ms] ease-in-out hover:border-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_10%,rgba(255,255,255,.06))] hover:-translate-y-px ${action.primary ? "cmg-chatbot-action--primary border-transparent bg-[linear-gradient(135deg,var(--cmg-dark-primary,var(--brand-primary)),var(--cmg-dark-accent,var(--brand-primary-dark)))] text-[#ffffff] shadow-[0_6px_16px_color-mix(in_srgb,var(--brand-primary)_18%,transparent)] hover:filter-[brightness(1.07)] hover:border-transparent [html[data-theme='light']_&]:!bg-[linear-gradient(135deg,var(--cmg-light-primary,var(--brand-primary)),var(--cmg-light-accent,var(--brand-primary-dark)))] [html[data-theme='light']_&]:!text-white [html[data-theme='light']_&]:hover:!bg-[linear-gradient(135deg,var(--cmg-light-primary,var(--brand-primary)),var(--cmg-light-accent,var(--brand-primary-dark)))] [html[data-theme='light']_&]:hover:!text-white" : ""}`}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
          >
            {action.icon === "calendar" && <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />}
            {action.icon === "whatsapp" && <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}
            {action.icon === "guide" && <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
            {action.label}
          </a>
        );
      })}
    </div>
  );
}

function LeadCaptureWidget({ actionProvider }) {
  return <LeadCaptureView actionProvider={actionProvider} />;
}

function LeadCaptureView({ actionProvider }) {
  const [form, setForm] = useState({ fullName: "", email: "", consent: false });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (field) => (event) => {
    const value = field === "consent" ? event.target.checked : event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
  };

  async function submit(event) {
    event.preventDefault();
    setError("");

    if (!form.fullName.trim() || !form.email.trim() || !form.consent) {
      setError("Please add your name, email and contact consent.");
      return;
    }

    setStatus("sending");
    try {
      await actionProvider.submitLead(form);
      setStatus("sent");
    } catch (submitError) {
      setStatus("error");
      setError(submitError.message || "We could not send your details. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="cmg-chatbot-lead-success flex items-start gap-2 w-[min(100%,21rem)] max-[640px]:w-[calc(100%-2.6rem)] m-[-.2rem_0_0_2.6rem] rounded-[.85rem] border border-[rgba(34,197,94,.18)] bg-[rgba(34,197,94,.1)] p-[.8rem] text-[#dcfce7] text-[.69rem] font-bold leading-[1.5]">
        <Check className="h-4 w-4 shrink-0 text-[#22c55e]" aria-hidden="true" />
        <span>Thanks — your pathway summary has been sent to the CMG team.</span>
      </div>
    );
  }

  return (
    <form className="cmg-chatbot-lead-form grid gap-[.6rem] w-[min(100%,21rem)] max-[640px]:w-[calc(100%-2.6rem)] m-[-.2rem_0_0_2.6rem] rounded-[.95rem] border border-[rgba(255,255,255,.09)] bg-[var(--cmg-dark-surface,#111925)] p-[.85rem] shadow-[0_8px_24px_rgba(0,0,0,.16)]" onSubmit={submit}>
      <p className="cmg-chatbot-lead-intro m-[0_0_.1rem] text-[var(--cmg-dark-muted,#aeb8c5)] text-[.68rem] leading-[1.5]">Want the team to follow up? Share your details and I’ll send this pathway summary to CMG.</p>
      <label className="grid gap-[.28rem]">
        <span className="text-[#f7f8fb] text-[.6875rem] font-extrabold tracking-[.02em]">Your name</span>
        <input className="w-full rounded-[.65rem] border border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.06)] px-[.65rem] py-[.55rem] text-[var(--cmg-dark-ink,#f7f8fb)] text-[.71rem] outline-none transition-[border-color,background,box-shadow] duration-[180ms] ease-in-out placeholder:text-[var(--cmg-dark-muted,rgba(255,255,255,.42))] focus:border-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_42%,transparent)] focus:bg-[rgba(255,255,255,.09)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_12%,transparent)]" type="text" value={form.fullName} onChange={update("fullName")} autoComplete="name" placeholder="Full name" />
      </label>
      <label className="grid gap-[.28rem]">
        <span className="text-[#f7f8fb] text-[.6875rem] font-extrabold tracking-[.02em]">Email address</span>
        <input className="w-full rounded-[.65rem] border border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.06)] px-[.65rem] py-[.55rem] text-[var(--cmg-dark-ink,#f7f8fb)] text-[.71rem] outline-none transition-[border-color,background,box-shadow] duration-[180ms] ease-in-out placeholder:text-[var(--cmg-dark-muted,rgba(255,255,255,.42))] focus:border-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_42%,transparent)] focus:bg-[rgba(255,255,255,.09)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_12%,transparent)]" type="email" value={form.email} onChange={update("email")} autoComplete="email" placeholder="you@example.com" />
      </label>
      <label className="cmg-chatbot-lead-consent flex items-start gap-[.45rem] text-[var(--cmg-dark-muted,#aeb8c5)] text-[.6875rem] leading-[1.4]">
        <input className="mt-[.12rem] accent-[var(--cmg-dark-primary,var(--brand-primary))]" type="checkbox" checked={form.consent} onChange={update("consent")} />
        <span>I agree to be contacted about this enquiry.</span>
      </label>
      {error && <p className="cmg-chatbot-lead-error m-0 text-[#ff6b7f] text-[.6875rem] leading-[1.4]" role="alert">{error}</p>}
      <button type="submit" className="cmg-chatbot-action inline-flex items-center justify-center gap-[.38rem] min-h-[2.4rem] rounded-[.8rem] border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.06)] px-[.6rem] py-2 text-[#f7f8fb] text-[.6875rem] font-extrabold leading-[1.2] text-center transition-all duration-[180ms] ease-in-out hover:border-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_10%,rgba(255,255,255,.06))] hover:-translate-y-px cmg-chatbot-action--primary border-transparent bg-[linear-gradient(135deg,var(--cmg-dark-primary,var(--brand-primary)),var(--cmg-dark-accent,var(--brand-primary-dark)))] text-[#ffffff] shadow-[0_6px_16px_color-mix(in_srgb,var(--brand-primary)_18%,transparent)] hover:filter-[brightness(1.07)] hover:border-transparent [html[data-theme='light']_&]:!bg-[linear-gradient(135deg,var(--cmg-light-primary,var(--brand-primary)),var(--cmg-light-accent,var(--brand-primary-dark)))] [html[data-theme='light']_&]:!text-white [html[data-theme='light']_&]:hover:!bg-[linear-gradient(135deg,var(--cmg-light-primary,var(--brand-primary)),var(--cmg-light-accent,var(--brand-primary-dark)))] [html[data-theme='light']_&]:hover:!text-white" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send my details"}
      </button>
    </form>
  );
}

function createServiceMenuMessage() {
  return botMessage(
    "Hi! I’m your CMG pathway guide. I can point you to the right Canadian immigration service and the best next step. What brings you here today?",
    "choiceWidget",
    { service: "menu", step: "service", options: menuOptions, showSearch: true }
  );
}

const config = {
  botName: "CMG Pathway Guide",
  initialMessages: [createServiceMenuMessage()],
  customComponents: {
    header: BotHeader,
    botAvatar: BotAvatar,
  },
  customStyles: {
    chatButton: { backgroundColor: "var(--brand-primary)" },
  },
  widgets: [
    { widgetName: "choiceWidget", widgetFunc: ChoiceWidget, props: {}, mapStateToProps: [] },
    { widgetName: "actionWidget", widgetFunc: ActionWidget, props: {}, mapStateToProps: [] },
    { widgetName: "leadCaptureWidget", widgetFunc: LeadCaptureWidget, props: {}, mapStateToProps: [] },
  ],
};

const chatbotKitClass = [
  "min-h-0 min-w-0 flex-1 overflow-hidden bg-[var(--cmg-dark-surface-alt,#0b121d)]",
  "[&_.react-chatbot-kit-chat-container]:!flex [&_.react-chatbot-kit-chat-container]:!h-full [&_.react-chatbot-kit-chat-container]:!min-h-0 [&_.react-chatbot-kit-chat-container]:!w-full [&_.react-chatbot-kit-chat-container]:!bg-transparent",
  "[&_.react-chatbot-kit-chat-inner-container]:!flex [&_.react-chatbot-kit-chat-inner-container]:!h-full [&_.react-chatbot-kit-chat-inner-container]:!min-h-0 [&_.react-chatbot-kit-chat-inner-container]:!flex-col [&_.react-chatbot-kit-chat-inner-container]:!rounded-none [&_.react-chatbot-kit-chat-inner-container]:!bg-transparent",
  "[&_.react-chatbot-kit-chat-header]:!shrink-0 [&_.react-chatbot-kit-chat-header]:!border-0 [&_.react-chatbot-kit-chat-header]:!bg-transparent [&_.react-chatbot-kit-chat-header]:!p-0",
  "[&_.react-chatbot-kit-chat-message-container]:!h-auto [&_.react-chatbot-kit-chat-message-container]:!min-h-0 [&_.react-chatbot-kit-chat-message-container]:!flex-1 [&_.react-chatbot-kit-chat-message-container]:!overflow-x-hidden [&_.react-chatbot-kit-chat-message-container]:!overflow-y-auto [&_.react-chatbot-kit-chat-message-container]:!p-[1rem_1rem_3rem]",
  "[&_.react-chatbot-kit-chat-input-container]:!absolute [&_.react-chatbot-kit-chat-input-container]:!right-0 [&_.react-chatbot-kit-chat-input-container]:!bottom-[1.85rem] [&_.react-chatbot-kit-chat-input-container]:!left-0 [&_.react-chatbot-kit-chat-input-container]:!z-[3] [&_.react-chatbot-kit-chat-input-container]:!w-full [&_.react-chatbot-kit-chat-input-container]:!items-center [&_.react-chatbot-kit-chat-input-container]:!gap-2 [&_.react-chatbot-kit-chat-input-container]:!border-t [&_.react-chatbot-kit-chat-input-container]:!border-[rgba(255,255,255,.08)] [&_.react-chatbot-kit-chat-input-container]:!bg-[var(--cmg-dark-surface-alt,#0b121d)] [&_.react-chatbot-kit-chat-input-container]:!px-3 [&_.react-chatbot-kit-chat-input-container]:!py-2",
  "[&_.react-chatbot-kit-chat-input-form]:!min-w-0 [&_.react-chatbot-kit-chat-input-form]:!items-center [&_.react-chatbot-kit-chat-input-form]:!gap-2",
  "[&_.react-chatbot-kit-chat-input]:!h-[2.5rem] [&_.react-chatbot-kit-chat-input]:!min-w-0 [&_.react-chatbot-kit-chat-input]:!flex-1 [&_.react-chatbot-kit-chat-input]:!rounded-[.7rem] [&_.react-chatbot-kit-chat-input]:!border [&_.react-chatbot-kit-chat-input]:!border-[rgba(255,255,255,.1)] [&_.react-chatbot-kit-chat-input]:!bg-[rgba(255,255,255,.06)] [&_.react-chatbot-kit-chat-input]:!px-[.7rem] [&_.react-chatbot-kit-chat-input]:!py-[.55rem] [&_.react-chatbot-kit-chat-input]:!text-[var(--cmg-dark-ink,#f7f8fb)] [&_.react-chatbot-kit-chat-input]:!text-[.75rem] [&_.react-chatbot-kit-chat-input]:!outline-none [&_.react-chatbot-kit-chat-input]:placeholder:!text-[var(--cmg-dark-muted,rgba(174,184,197,.72))]",
  "[&_.react-chatbot-kit-chat-btn-send]:!inline-flex [&_.react-chatbot-kit-chat-btn-send]:!h-[2.5rem] [&_.react-chatbot-kit-chat-btn-send]:!w-[3.25rem] [&_.react-chatbot-kit-chat-btn-send]:!shrink-0 [&_.react-chatbot-kit-chat-btn-send]:!items-center [&_.react-chatbot-kit-chat-btn-send]:!justify-center [&_.react-chatbot-kit-chat-btn-send]:!rounded-[.7rem] [&_.react-chatbot-kit-chat-btn-send]:!bg-[var(--cmg-dark-primary,var(--brand-primary))] [&_.react-chatbot-kit-chat-btn-send]:!text-white [&_.react-chatbot-kit-chat-btn-send]:hover:!bg-[var(--cmg-dark-accent,var(--brand-primary-dark))] [&_.react-chatbot-kit-chat-btn-send-icon]:!m-0 [&_.react-chatbot-kit-chat-btn-send-icon]:!h-4 [&_.react-chatbot-kit-chat-btn-send-icon]:!w-4 [&_.react-chatbot-kit-chat-btn-send-icon]:!fill-current",
  "[&_.react-chatbot-kit-chat-bot-message-container]:!my-3 [&_.react-chatbot-kit-chat-bot-avatar-container]:!m-0 [&_.react-chatbot-kit-chat-bot-avatar-container]:!size-8 [&_.react-chatbot-kit-chat-bot-avatar-container]:!shrink-0 [&_.react-chatbot-kit-chat-bot-avatar-container]:!bg-transparent [&_.react-chatbot-kit-chat-bot-message]:!m-0 [&_.react-chatbot-kit-chat-bot-message]:!w-auto [&_.react-chatbot-kit-chat-bot-message]:!max-w-[calc(100%_-_2.75rem)] [&_.react-chatbot-kit-chat-bot-message]:!rounded-[.85rem] [&_.react-chatbot-kit-chat-bot-message]:!bg-[rgba(255,255,255,.06)] [&_.react-chatbot-kit-chat-bot-message]:!px-[.75rem] [&_.react-chatbot-kit-chat-bot-message]:!py-[.62rem] [&_.react-chatbot-kit-chat-bot-message]:!text-[var(--cmg-dark-ink,#f7f8fb)] [&_.react-chatbot-kit-chat-bot-message]:!text-[.75rem] [&_.react-chatbot-kit-chat-bot-message]:!leading-[1.5] [&_.react-chatbot-kit-chat-bot-message-arrow]:!border-r-[rgba(255,255,255,.06)]",
  "[&_.react-chatbot-kit-user-chat-message-container]:!my-3 [&_.react-chatbot-kit-user-chat-message]:!m-0 [&_.react-chatbot-kit-user-chat-message]:!max-w-[78%] [&_.react-chatbot-kit-user-chat-message]:!rounded-[.85rem] [&_.react-chatbot-kit-user-chat-message]:!bg-[var(--cmg-dark-primary,var(--brand-primary))] [&_.react-chatbot-kit-user-chat-message]:!px-[.75rem] [&_.react-chatbot-kit-user-chat-message]:!py-[.62rem] [&_.react-chatbot-kit-user-chat-message]:!text-white [&_.react-chatbot-kit-user-chat-message]:!text-[.75rem] [&_.react-chatbot-kit-user-chat-message]:!leading-[1.5] [&_.react-chatbot-kit-user-chat-message-arrow]:!border-l-[var(--cmg-dark-primary,var(--brand-primary))]",
  "[&_.react-chatbot-kit-chat-input-container]:!hidden",
  "[html[data-theme='light']_&]:!bg-[var(--cmg-light-surface,#ffffff)]",
  "[html[data-theme='light']_&_.react-chatbot-kit-chat-container]:!bg-transparent",
  "[html[data-theme='light']_&_.react-chatbot-kit-chat-inner-container]:!bg-transparent",
  "[html[data-theme='light']_&_.react-chatbot-kit-chat-message-container]:!bg-transparent",
  "[html[data-theme='light']_&_.react-chatbot-kit-chat-input-container]:!border-[var(--cmg-light-border,var(--brand-border))] [html[data-theme='light']_&_.react-chatbot-kit-chat-input-container]:!bg-[var(--cmg-light-surface,#ffffff)]",
  "[html[data-theme='light']_&_.react-chatbot-kit-chat-input]:!border-[var(--cmg-light-border,var(--brand-border))] [html[data-theme='light']_&_.react-chatbot-kit-chat-input]:!bg-[var(--cmg-light-surface-alt,#eef0f3)] [html[data-theme='light']_&_.react-chatbot-kit-chat-input]:!text-[var(--cmg-light-ink,#10151d)] [html[data-theme='light']_&_.react-chatbot-kit-chat-input]:placeholder:!text-[var(--cmg-light-muted,#5d6875)]",
  "[html[data-theme='light']_&_.react-chatbot-kit-chat-btn-send]:!bg-[var(--cmg-light-primary,var(--brand-primary))] [html[data-theme='light']_&_.react-chatbot-kit-chat-btn-send]:hover:!bg-[var(--cmg-light-accent,var(--brand-primary-dark))]",
  "[html[data-theme='light']_&_.react-chatbot-kit-chat-bot-message]:!bg-[var(--cmg-light-surface-alt,#eef0f3)] [html[data-theme='light']_&_.react-chatbot-kit-chat-bot-message]:!text-[var(--cmg-light-ink,#10151d)] [html[data-theme='light']_&_.react-chatbot-kit-chat-bot-message-arrow]:!border-r-[var(--cmg-light-surface-alt,#eef0f3)]",
  "[html[data-theme='light']_&_.react-chatbot-kit-user-chat-message]:!bg-[var(--cmg-light-primary,var(--brand-primary))] [html[data-theme='light']_&_.react-chatbot-kit-user-chat-message-arrow]:!border-l-[var(--cmg-light-primary,var(--brand-primary))]",
].join(" ");

class ActionProvider {
  constructor(createChatBotMessageFn, setStateFunc) {
    this.createChatBotMessage = createChatBotMessageFn;
    this.setState = setStateFunc;
    this.activeContext = { service: "menu", step: "service", options: menuOptions };
    this.activeService = "menu";
    this.answers = {};
  }

  addMessages(...messages) {
    this.setState((previous) => ({
      ...previous,
      messages: [...previous.messages, ...messages],
    }));
  }

  addUserMessage(label) {
    this.addMessages(createClientMessage(label));
  }

  ask(service, step, text, options) {
    this.activeContext = { service, step, options };
    this.addMessages(botMessage(text, "choiceWidget", { service, step, options }));
  }

  saveAnswer(service, step, value) {
    this.answers[service] = { ...(this.answers[service] || {}), [step]: value };
  }

  handleChoice({ service, step, value, label, skipUser = false }) {
    if (!skipUser) this.addUserMessage(label);
    this.saveAnswer(service, step, value);

    if (service === "menu") return this.startService(value);

    const next = this.nextStep(service, step, value);
    if (next) return this.ask(service, next.step, next.text, next.options);

    return this.finishService(service);
  }

  handleFreeText(message) {
    const text = message.trim();
    if (!text) return;

    const normalized = text.toLowerCase();
    const context = this.activeContext;
    const currentOption = context.options?.find((option) =>
      `${option.label} ${option.keywords?.join(" ") || ""}`.toLowerCase().includes(normalized) ||
      (option.keywords || []).some((keyword) => normalized.includes(keyword))
    );

    if (context.service === "menu") {
      const matchedService = services.find((service) =>
        service.keywords.some((keyword) => normalized.includes(keyword))
      );
      if (matchedService) return this.startService(matchedService.id);
      return this.addMessages(botMessage(
        "I can help with Express Entry, work or study permits, visiting Canada, family sponsorship, employer services, refusals, and citizenship. Pick a pathway below and I’ll narrow it down.",
        "choiceWidget",
        { service: "menu", step: "service", options: menuOptions, showSearch: true }
      ));
    }

    if (currentOption) {
      return this.handleChoice({ service: context.service, step: context.step, value: currentOption.value, label: currentOption.label, skipUser: true });
    }

    return this.addMessages(botMessage(
      "Thanks — I’ll keep this high level. Choose the closest option below so I can point you to the right guide, or use the free assessment for a written review.",
      "choiceWidget",
      { service: context.service, step: context.step, options: context.options }
    ));
  }

  startService(service) {
    this.activeService = service;
    this.answers[service] = {};
    const intro = {
      pr: "Express Entry and provincial programs can work together, but the right starting point depends on where you are and how your profile scores.",
      work: "Work permit options depend on your current status, your job offer, and whether you are planning to extend, restore, or change status.",
      study: "Study permit planning is about more than admission — the school, program, funds, PAL requirements, and post-graduation plan all matter.",
      visit: "Visitor and Super Visa files are temporary-entry applications. Your purpose, ties, funds, and travel history help shape the strategy.",
      family: "Family sponsorship has different evidence and eligibility rules for spouses, partners, parents, grandparents, and dependent children.",
      employer: "Employer files need a defensible business case, the right stream, recruitment evidence, and compliance planning.",
      refusal: "A refusal or status problem needs a focused review of the officer’s concerns, timelines, and the evidence available for the next step.",
      citizenship: "Citizenship, PR cards, travel documents, and residency-obligation questions each have a different checklist and timeline.",
    }[service];

    this.addMessages(botMessage(intro));

    const firstStep = {
      pr: ["location", "Are you currently in Canada or applying from abroad?", choices.prLocation],
      work: ["status", "What best describes your current status?", choices.workStatus],
      study: ["location", "Where are you in your study-permit journey?", choices.studyLocation],
      visit: ["purpose", "What is the main reason for the trip?", choices.visitPurpose],
      family: ["relationship", "Who are you hoping to sponsor?", choices.familyRelationship],
      employer: ["need", "What does your organization need help with?", choices.employerNeed],
      refusal: ["issue", "What happened with the application or status?", choices.refusalIssue],
      citizenship: ["need", "Which service sounds closest to what you need?", choices.citizenshipNeed],
    }[service];

    this.ask(service, firstStep[0], firstStep[1], firstStep[2]);
  }

  nextStep(service, step, value) {
    const next = {
      pr: {
        location: ["crs", "Do you know your approximate CRS score?", choices.prCrs],
        crs: ["experience", "How would you describe your work experience?", choices.prExperience],
      },
      work: {
        status: ["goal", "What are you trying to do next?", choices.workGoal],
      },
      study: {
        location: ["stage", "What stage are you at?", choices.studyStage],
      },
      visit: {},
      family: {},
      employer: {},
      refusal: {
        issue: ["deadline", "Is there a deadline or hearing date coming up?", choices.refusalDeadline],
      },
      citizenship: {},
    }[service];
    const item = next?.[step];
    return item ? { step: item[0], text: item[1], options: item[2], value } : null;
  }

  finishService(service) {
    const answer = this.answers[service] || {};
    const results = {
      pr: {
        title: "Your next step: compare PR routes",
        text: answer.crs === "not-checked"
          ? "Start with the CRS calculator, then compare Express Entry with provincial options in a free assessment. A consultant can confirm which details change the result."
          : answer.crs === "500-plus"
            ? "A strong Express Entry profile may be worth checking against recent draws, category-based options, and provincial nominations. The guide below is the best place to start."
            : "Express Entry may still be one option, but PNPs and other pathways could be important depending on your occupation, language results, education, and work history.",
        href: "/immigrate/express-entry",
        guide: "Open Express Entry guide",
      },
      work: {
        title: "Your next step: clarify the permit strategy",
        text: answer.goal === "pgwp"
          ? "Use the work-permit guide to confirm PGWP planning, timing, and the transition from study to work. Keep your status dates visible when you request a review."
          : "The work-permit guide explains employer-specific, open, restoration, extension, and post-graduation routes. A profile review can identify which evidence matters most.",
        href: "/work-and-study/canada-work-permit-overview",
        guide: "Open work-permit guide",
      },
      study: {
        title: "Your next step: plan the study route end-to-end",
        text: answer.stage === "accepted"
          ? "With an acceptance letter, the next review usually focuses on the study plan, funds, PAL requirements where applicable, and how the program fits your longer-term plan."
          : "Start with the study-permit guide, then use a free assessment to connect program choice, documentation, finances, and post-graduation planning.",
        href: "/work-and-study/canada-study-permit",
        guide: "Open study-permit guide",
      },
      visit: {
        title: "Your next step: build the temporary-visit story",
        text: answer.purpose === "super-visa"
          ? "Super Visa files have their own medical insurance, income, invitation, and family-relationship evidence. Review the guide before collecting documents."
          : "The visitor-visa guide covers purpose of travel, ties, funds, travel history, and the difference between visitor, eTA, business-visitor, and Super Visa routes.",
        href: "/visit/visitor-visa-trv-and-super-visa-combined",
        guide: "Open visitor guide",
      },
      family: {
        title: "Your next step: identify the sponsorship evidence",
        text: answer.relationship === "spouse-partner"
          ? "Spousal and common-law sponsorship is evidence-led. The relationship history, shared life, admissibility, and complete document trail all matter."
          : "The family-sponsorship guide will help you compare the relationship category, eligibility requirements, and evidence before you prepare a package.",
        href: "/sponsor/family-sponsorship-overview-all-categories",
        guide: "Open family-sponsorship guide",
      },
      employer: {
        title: "Your next step: map the employer file",
        text: answer.need === "global-talent"
          ? "Global Talent Stream cases are time-sensitive and evidence-heavy. Review the employer hub and gather the role, wage, recruitment, and business-growth details."
          : "The employer hub is the right starting point for LMIA, recruitment, provincial employer, and compliance work. A consultation can turn the business need into a stream-by-stream plan.",
        href: "/work-and-study/lmia-and-employer-services-overview",
        guide: "Open employer services",
      },
      refusal: {
        title: answer.deadline === "urgent" ? "Your next step: request an urgent case review" : "Your next step: isolate the refusal reasons",
        text: answer.deadline === "urgent"
          ? "Keep the letter, deadline, and full application record together and request an urgent review. The response strategy depends on the exact concerns and the time available."
          : "A refusal is not fixed by repeating the same application. Start with the refusal guide to identify the concerns, then request a focused review of the evidence and next route.",
        href: "/inadmissibility-and-appeals/refusal-and-pfl-response",
        guide: "Open refusals guide",
        urgent: answer.deadline === "urgent",
      },
      citizenship: {
        title: "Your next step: confirm the document route",
        text: answer.need === "residency"
          ? "Residency-obligation questions depend on travel history, days in Canada, and the document or status you are trying to secure. A case-specific review is worthwhile before travel."
          : "The citizenship and PR-card guide is the best starting point for the eligibility, residency, and document checklist that matches your situation.",
        href: "/citizenship/pr-card-renewal-and-citizenship-combined-overview",
        guide: "Open citizenship guide",
      },
    }[service];

    const actions = [
      { label: results.guide, href: results.href, icon: "guide" },
      { label: "Send my details", action: "lead", primary: true },
      { label: "Start free assessment", href: currentPagePath("/tools/free-assessment"), primary: true, icon: "calendar" },
      ...(whatsappHref ? [{ label: "WhatsApp the team", href: whatsappHref, external: true, icon: "whatsapp" }] : []),
      { label: "Start over", action: "restart" },
    ];

    this.addMessages(
      botMessage(`${results.title}\n\n${results.text}${results.urgent ? "\n\nBecause your matter may be time-sensitive, use the urgent review route as soon as possible." : ""}`, "actionWidget", { actions })
    );
  }

  startLeadCapture() {
    this.addUserMessage("Send my details");
    this.addMessages(botMessage(
      "Please add your name and email. I’ll send your selected pathway and answers to the CMG team so they can follow up.",
      "leadCaptureWidget"
    ));
  }

  async submitLead({ fullName, email, consent }) {
    const service = services.find((item) => item.id === this.activeService);
    const response = await fetch("/api/chat-leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        consent,
        service: service?.label || "Guided chat enquiry",
        answers: this.answers[this.activeService] || {},
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "We could not send your details. Please try again.");

    this.addMessages(botMessage("Your details and pathway summary are on their way to the CMG team. We’ll follow up using the email you provided."));
  }

  restart() {
    this.answers = {};
    this.activeService = "menu";
    this.activeContext = { service: "menu", step: "service", options: menuOptions };
    this.addUserMessage("Start over");
    this.addMessages(createServiceMenuMessage());
  }
}

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    this.actionProvider.handleFreeText(message);
  }
}

export default function GuidedChatbot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openFromFloatingAction = () => setOpen(true);
    window.addEventListener("cmg:open-chatbot", openFromFloatingAction);
    return () => window.removeEventListener("cmg:open-chatbot", openFromFloatingAction);
  }, []);

  return (
    <div className={`cmg-floating-bubble cmg-floating-bubble--chat cmg-chatbot-root fixed right-5 bottom-[8.75rem] z-[80] w-[3.75rem] ${!open ? "flex items-center justify-center w-12" : ""} ${open ? "cmg-chatbot-root--open !left-[5.75rem] !right-auto max-[640px]:top-[var(--brand-hero-pad-top)] max-[640px]:left-[.75rem] max-[640px]:!right-auto max-[640px]:bottom-[5.4rem] max-[640px]:w-[calc(100vw-1.5rem)]" : ""}`}>
      {open ? (
        <div className="cmg-chatbot-panel relative flex h-[var(--cmg-chatbot-panel-height)] w-full flex-col overflow-hidden rounded-[1.35rem] border border-[color-mix(in_srgb,var(--cmg-dark-border,var(--brand-border))_100%,transparent)] bg-[var(--cmg-dark-surface-alt,#0b121d)] shadow-[0_24px_64px_rgba(0,0,0,.28),0_8px_24px_rgba(0,0,0,.16),0_0_0_1px_rgba(255,255,255,.06)_inset] before:absolute before:inset-[0_0_auto] before:z-[3] before:h-[3px] before:bg-[linear-gradient(90deg,var(--cmg-dark-primary,var(--brand-primary)),var(--cmg-dark-accent,var(--brand-primary-light)))] before:content-[''] [html[data-theme='light']_&]:border-[var(--cmg-light-border,var(--brand-border))] [html[data-theme='light']_&]:bg-[var(--cmg-light-surface,#ffffff)] [html[data-theme='light']_&]:shadow-[0_24px_56px_rgba(7,13,22,.14),0_8px_20px_rgba(7,13,22,.08),0_0_0_1px_rgba(7,13,22,.04)_inset]" role="dialog" aria-label="CMG Pathway Guide">
          <button type="button" className="cmg-chatbot-close absolute top-[.85rem] right-[.85rem] z-[4] inline-flex w-[2.1rem] h-[2.1rem] items-center justify-center rounded-full border border-[rgba(255,255,255,.18)] bg-[rgba(255,255,255,.08)] text-[#f7f8fb] backdrop-blur-[10px] transition-[background,border-color,transform] duration-[180ms] ease-in-out hover:bg-[rgba(255,255,255,.14)] hover:border-[rgba(255,255,255,.28)] hover:rotate-[90deg] focus-visible:bg-[rgba(255,255,255,.14)] focus-visible:border-[rgba(255,255,255,.28)] focus-visible:rotate-[90deg]" onClick={() => setOpen(false)} aria-label="Close pathway guide">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className={chatbotKitClass}>
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} placeholderText="Type a question…" />
          </div>
          <p className="cmg-chatbot-disclaimer absolute right-0 bottom-0 left-0 z-[2] m-0 border-t border-[rgba(255,255,255,.06)] bg-[color-mix(in_srgb,var(--cmg-dark-surface-alt,#0b121d)_96%,transparent)] px-3 pt-[.4rem] pb-[.45rem] text-[.6875rem] leading-[1.3] text-[var(--cmg-dark-muted,rgba(174,184,197,.72))] text-center">General information only — not legal advice or a guarantee of approval.</p>
        </div>
      ) : (
        <button type="button" className="cmg-chatbot-launcher relative flex items-center justify-center w-12 h-12 min-h-12 max-[640px]:w-[2.75rem] max-[640px]:h-[2.75rem] max-[640px]:min-h-[2.75rem] rounded-full border border-[rgba(255,255,255,.72)] bg-[linear-gradient(135deg,var(--cmg-dark-primary,var(--brand-primary))_0%,var(--cmg-dark-accent,var(--brand-primary-dark))_100%)] p-0 text-[#ffffff] shadow-[0_12px_28px_color-mix(in_srgb,var(--brand-primary)_22%,transparent),0_4px_12px_rgba(0,0,0,.14)] transition-[transform,box-shadow,filter] duration-[220ms] ease-[cubic-bezier(.16,1,.3,1)] before:absolute before:inset-[-6px] before:z-[-1] before:rounded-full before:bg-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_14%,transparent)] before:opacity-0 before:blur-[10px] before:content-[''] hover:-translate-y-0.5 hover:scale-[1.04] hover:filter-[brightness(1.04)] hover:shadow-[0_18px_36px_color-mix(in_srgb,var(--brand-primary)_34%,transparent),0_6px_16px_rgba(0,0,0,.18)] active:translate-y-0 active:scale-[.98]" onClick={() => setOpen(true)} aria-label="Open CMG Pathway Guide" title="Chat with CMG">
          <span className="cmg-chatbot-launcher-mark inline-flex shrink-0 items-center justify-center w-[2.55rem] h-[2.55rem] rounded-full border border-[rgba(255,255,255,.92)] bg-white text-[var(--cmg-dark-primary,var(--brand-primary))] shadow-[0_2px_10px_rgba(0,0,0,.12),inset_0_0_0_1px_color-mix(in_srgb,var(--brand-primary)_8%,transparent)]" aria-hidden="true"><MessageCircle className="h-[1.35rem] w-[1.35rem] stroke-[2.5]" /></span>
        </button>
      )}
    </div>
  );
}
