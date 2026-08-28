"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarCheck, X } from "lucide-react";
import { site } from "@/config/site";
import ConsultationForm from "@/components/forms/ConsultationForm";

function localPath(value) {
  try {
    const url = new URL(value, window.location.origin);
    return url.origin === window.location.origin ? url.pathname : null;
  } catch {
    return null;
  }
}

/**
 * Opens the existing consultation lead form in place for every configured
 * local consultation CTA, so visitors do not lose their place while booking.
 */
export default function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const bookingPaths = new Set([
      localPath(site.ctas.primary.href),
      localPath(site.ctas.urgent.href),
    ].filter(Boolean));

    function handleBookingClick(event) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target instanceof Element ? event.target.closest("a") : null;
      if (!target || target.target === "_blank" || target.hasAttribute("download")) return;

      const href = target.getAttribute("href");
      const path = href ? localPath(href) : null;
      if (!path || !bookingPaths.has(path)) return;

      event.preventDefault();
      setOpen(true);
    }

    document.addEventListener("click", handleBookingClick, true);
    return () => document.removeEventListener("click", handleBookingClick, true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="consultation-modal fixed inset-0 z-[260] flex items-end justify-center p-3 sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <section
        className="consultation-modal__dialog relative flex w-full max-w-[860px] max-h-[calc(100vh-1.5rem)] flex-col overflow-hidden rounded-[20px] border border-[var(--modal-border)] bg-[var(--modal-bg)] text-[var(--modal-ink)] shadow-[0_34px_100px_color-mix(in_srgb,var(--cmg-template-deep-surface)_48%,transparent),0_0_0_1px_color-mix(in_srgb,var(--template-on-primary)_4%,transparent)] sm:max-h-[calc(100vh-3rem)] max-[640px]:max-h-[calc(100dvh-1.5rem)] max-[640px]:rounded-[22px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        <div className="consultation-modal__header flex min-h-[90px] shrink-0 items-center justify-between gap-4 border-b border-[color-mix(in_srgb,var(--template-on-primary)_16%,transparent)] bg-[linear-gradient(135deg,var(--modal-accent),var(--modal-primary)_72%,var(--cmg-template-modal-end))] px-5 py-4 text-[var(--template-on-primary)] sm:px-8 max-[640px]:min-h-[92px] max-[640px]:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="consultation-modal__header-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_32%,transparent)] bg-[color-mix(in_srgb,var(--template-on-primary)_13%,transparent)] text-[var(--template-on-primary)] shadow-[inset_0_1px_0_color-mix(in_srgb,var(--template-on-primary)_16%,transparent),0_8px_20px_color-mix(in_srgb,var(--cmg-template-deep-surface)_12%,transparent)]">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="consultation-modal__kicker eyebrow !text-[color-mix(in_srgb,var(--template-on-primary)_86%,transparent)] !font-extrabold !text-[11px] !leading-[1.2] !tracking-[.16em]">Start with a conversation</p>
            <h2 id="consultation-modal-title" className="consultation-modal__title mt-1 truncate !text-[var(--template-on-primary)] text-[clamp(1.6rem,3vw,2.2rem)] max-[640px]:!text-[1.55rem]">
                Book a free consultation
              </h2>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            className="consultation-modal__close flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--template-on-primary)_70%,transparent)] bg-[color-mix(in_srgb,var(--cmg-template-deep-surface)_12%,transparent)] text-[var(--template-on-primary)] shadow-[inset_0_0_0_3px_color-mix(in_srgb,var(--template-on-primary)_10%,transparent)] transition-[background,border-color,transform] duration-[180ms] ease-in-out hover:border-[var(--template-on-primary)] hover:bg-[var(--template-on-primary)] hover:text-[var(--modal-accent)] hover:rotate-[4deg] focus-visible:border-[var(--template-on-primary)] focus-visible:bg-[var(--template-on-primary)] focus-visible:text-[var(--modal-accent)] focus-visible:rotate-[4deg]"
            aria-label="Close consultation form"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="consultation-modal__body min-h-0 overflow-y-auto bg-[var(--modal-bg)] !p-2 sm:!px-4 sm:!py-3">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}
