"use client";

import { useState } from "react";
import { CalendarCheck, Send } from "lucide-react";
import { Field, TextInput, SelectInput, TextArea, CheckboxField } from "./fields";
import { FormShell, FieldGrid } from "./FormShell";
import FormSuccessCard from "./FormSuccessCard";
import FormSubmitButton from "./FormSubmitButton";
import FormErrorBanner from "./FormErrorBanner";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  interest: "",
  mode: "",
  preferredDate: "",
  deadline: "",
  message: "",
  consent: false,
};

export default function ConsultationForm({ variant = "standard" }) {
  const urgent = variant === "urgent";
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const { status, serverError, run } = useFormSubmit(urgent ? "urgent-consultation" : "consultation");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.country.trim()) e.country = "Please enter your country of residence.";
    if (!urgent && !form.interest) e.interest = "Please tell us what you need help with.";
    if (!form.mode) e.mode = "Please choose a consultation mode.";
    if (!form.preferredDate) e.preferredDate = "Please pick a preferred date.";
    if (urgent && !form.deadline) e.deadline = "Please tell us your deadline — it matters for urgent cases.";
    if (urgent && form.message.trim().length < 10) e.message = "Please briefly describe the urgent situation.";
    if (!form.consent) e.consent = "Please confirm you agree to be contacted.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    await run(form);
  }

  if (status === "success") {
    return (
      <FormSuccessCard title="Consultation requested" tone={urgent ? "urgent" : "success"} className="consultation-form-success">
        {urgent
          ? `Your urgent request is in. Our team will contact ${form.email} within one business day to confirm your consultation.`
          : `Thanks, ${form.fullName.split(" ")[0] || "there"}. We'll confirm your consultation at ${form.email} within one business day.`}
      </FormSuccessCard>
    );
  }

  return (
      <FormShell as="form" onSubmit={onSubmit} noValidate className="consultation-form-shell !rounded-[20px] !p-0 before:absolute before:top-0 before:right-0 before:left-0 before:h-1 before:bg-[var(--brand-gold)] before:content-[''] border border-[var(--template-border)] bg-[var(--template-surface)] shadow-[0_14px_38px_color-mix(in_srgb,var(--template-ink)_8%,transparent),0_2px_8px_color-mix(in_srgb,var(--template-ink)_4%,transparent)]" bodyClassName="!gap-4 !p-[1.15rem_clamp(0.75rem,1.5vw,1.2rem)_1.25rem]">
      <div className="consultation-form-intro flex items-start gap-[0.8rem] mb-[1.15rem] border-b !border-b-[var(--modal-border,var(--template-border))] pb-[1.05rem]">
        <span className="consultation-form-intro-mark inline-flex h-[2.9rem] w-[2.9rem] shrink-0 items-center justify-center rounded-[15px] border border-[color-mix(in_srgb,var(--template-primary)_24%,transparent)] bg-[var(--template-secondary)] text-[var(--template-on-primary)] shadow-[0_8px_18px_color-mix(in_srgb,var(--template-ink)_12%,transparent)]" aria-hidden="true">
          <CalendarCheck className="h-6 w-6" />
        </span>
        <div>
          <p className="consultation-form-kicker m-0 !text-[var(--modal-primary,var(--template-primary))] text-[0.6875rem] font-extrabold leading-[1.2] tracking-[0.16em] uppercase">Personalised guidance</p>
          <h3 className="consultation-form-title m-0 mt-[0.35rem] !text-[var(--modal-ink,var(--template-ink))] text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.03] tracking-[-0.035em]">
            {urgent ? "Tell us what needs attention." : "Tell us what you need help with."}
          </h3>
          <p className="consultation-form-description m-0 mt-[0.55rem] max-w-[46rem] !text-[var(--modal-muted,var(--template-muted))] text-[0.86rem] font-medium leading-[1.65]">
            Share a few details and our regulated team will follow up with the right next step.
          </p>
        </div>
      </div>

      <div className="consultation-form-section-label m-0 mb-[0.8rem] flex items-center gap-[0.55rem] border-t !border-t-[var(--modal-border,var(--template-border))] pt-[1rem] !text-[var(--modal-primary,var(--template-primary))] font-extrabold tracking-[0.14em]">
        <span className="inline-flex h-[1.65rem] w-[1.65rem] items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--template-primary)_10%,var(--template-surface-alt))] text-[var(--template-primary)] text-[0.6875rem]">01</span>
        Your details
      </div>

      <FieldGrid className="consultation-form-fields gap-x-[0.9rem] gap-y-[0.85rem]">
        <Field label="Full name" htmlFor="consult-name" required error={errors.fullName}>
          <TextInput id="consult-name" autoComplete="name" value={form.fullName} onChange={set("fullName")} error={errors.fullName} className="h-[2.9rem] min-h-[2.9rem] rounded-[12px] px-[0.8rem]" />
        </Field>
        <Field label="Email" htmlFor="consult-email" required error={errors.email}>
          <TextInput id="consult-email" type="email" autoComplete="email" value={form.email} onChange={set("email")} error={errors.email} className="h-[2.9rem] min-h-[2.9rem] rounded-[12px] px-[0.8rem]" />
        </Field>
        <Field label="Phone" htmlFor="consult-phone" required error={errors.phone} hint="Include country code">
          <TextInput id="consult-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} error={errors.phone} className="h-[2.9rem] min-h-[2.9rem] rounded-[12px] px-[0.8rem]" />
        </Field>
        <Field label="Country of residence" htmlFor="consult-country" required error={errors.country}>
          <TextInput id="consult-country" autoComplete="country-name" value={form.country} onChange={set("country")} error={errors.country} className="h-[2.9rem] min-h-[2.9rem] rounded-[12px] px-[0.8rem]" />
        </Field>
        <Field label="What do you need help with?" htmlFor="consult-interest" required={!urgent} error={errors.interest}>
          <SelectInput id="consult-interest" value={form.interest} onChange={set("interest")} error={errors.interest} className="h-[2.9rem] min-h-[2.9rem] rounded-[12px] px-[0.8rem]">
            <option value="">Select…</option>
            <option>Express Entry / economic PR</option>
            <option>Provincial nomination (PNP)</option>
            <option>Study permit / PGWP</option>
            <option>Work permit / LMIA</option>
            <option>Family sponsorship</option>
            <option>Visitor visa / Super Visa</option>
            <option>Refusal or appeal</option>
            <option>Employer / recruitment</option>
            <option>Not sure yet</option>
          </SelectInput>
        </Field>
        <Field label="Consultation mode" htmlFor="consult-mode" required error={errors.mode}>
          <SelectInput id="consult-mode" value={form.mode} onChange={set("mode")} error={errors.mode} className="h-[2.9rem] min-h-[2.9rem] rounded-[12px] px-[0.8rem]">
            <option value="">Select…</option>
            <option>Video call</option>
            <option>Phone call</option>
            <option>In-office visit</option>
          </SelectInput>
        </Field>
        <Field label="Preferred date" htmlFor="consult-date" required error={errors.preferredDate}>
          <TextInput id="consult-date" type="date" value={form.preferredDate} onChange={set("preferredDate")} error={errors.preferredDate} className="h-[2.9rem] min-h-[2.9rem] rounded-[12px] px-[0.8rem]" />
        </Field>
        {urgent && (
          <Field label="Your deadline" htmlFor="consult-deadline" required error={errors.deadline} hint="e.g. PFL response due in 21 days">
            <TextInput id="consult-deadline" value={form.deadline} onChange={set("deadline")} error={errors.deadline} placeholder="e.g. Response due 2026-08-30" className="h-[2.9rem] min-h-[2.9rem] rounded-[12px] px-[0.8rem]" />
          </Field>
        )}
        <div className="sm:col-span-2">
          <Field
            label={urgent ? "Briefly describe the urgent situation" : "Anything we should know (optional)"}
            htmlFor="consult-message"
            required={urgent}
            error={errors.message}
          >
            <TextArea id="consult-message" rows={4} value={form.message} onChange={set("message")} error={errors.message} className="min-h-[6.5rem] rounded-[12px] px-4 py-[0.85rem] resize-y" />
          </Field>
        </div>
        <div className="consultation-form-consent sm:col-span-2 rounded-[14px] border border-[var(--template-border)] bg-[color-mix(in_srgb,var(--template-primary)_6%,var(--template-surface-alt))] p-[0.9rem_1rem]">
          <CheckboxField
            htmlFor="consult-consent"
            checked={form.consent}
            onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
            error={errors.consent}
            className="text-[var(--template-ink)] text-[0.78rem]"
            label="I agree to be contacted about my consultation by email or phone."
          />
        </div>
      </FieldGrid>

      <FormErrorBanner message={serverError} />

      <div className="consultation-form-submit-row flex items-center justify-between max-[640px]:items-stretch max-[640px]:flex-col gap-4 mt-[1.15rem] border-t pt-[1.05rem]">
        <div>
          <p className="consultation-form-submit-title m-0 !text-[var(--modal-ink,var(--template-ink))] text-[0.7rem] font-extrabold tracking-[0.13em] uppercase">Ready when you are</p>
          <p className="consultation-form-submit-note m-0 mt-1 max-w-[27rem] !text-[var(--modal-muted,var(--template-muted))] text-[0.7rem] font-medium leading-[1.55]">No payment is taken. We confirm availability before anything is booked.</p>
        </div>
        <FormSubmitButton
          loading={status === "loading"}
          variant={urgent ? "accent" : "primary"}
          icon={Send}
          className="consultation-form-submit max-[640px]:w-full !mt-0 min-h-[3.2rem] rounded-[12px] border px-4 py-3 text-[0.78rem] font-extrabold leading-none shadow-[0_10px_20px_color-mix(in_srgb,var(--brand-primary)_22%,transparent)]"
        >
          {urgent ? "Request urgent consultation" : "Request consultation"}
        </FormSubmitButton>
      </div>
    </FormShell>
  );
}
