"use client";

import { useEffect, useState } from "react";

const launcherClass = "cmg-floating-bubble cmg-floating-bubble--chat cmg-chatbot-root fixed right-5 bottom-[8.75rem] z-[80] flex items-center justify-center w-12";

function Launcher({ onClick }) {
  return (
    <div className={launcherClass}>
      <button
        type="button"
        className="cmg-chatbot-launcher relative flex items-center justify-center w-12 h-12 min-h-12 max-[640px]:w-[2.75rem] max-[640px]:h-[2.75rem] max-[640px]:min-h-[2.75rem] rounded-full border border-[rgba(255,255,255,.72)] bg-[linear-gradient(135deg,var(--cmg-dark-primary,var(--brand-primary))_0%,var(--cmg-dark-accent,var(--brand-primary-dark))_100%)] p-0 text-[#ffffff] shadow-[0_12px_28px_color-mix(in_srgb,var(--brand-primary)_22%,transparent),0_4px_12px_rgba(0,0,0,.14)] transition-[transform,box-shadow,filter] duration-[220ms] ease-[cubic-bezier(.16,1,.3,1)] before:absolute before:inset-[-6px] before:z-[-1] before:rounded-full before:bg-[color-mix(in_srgb,var(--cmg-dark-primary,var(--brand-primary))_14%,transparent)] before:opacity-0 before:blur-[10px] before:content-[''] hover:-translate-y-0.5 hover:scale-[1.04] hover:filter-[brightness(1.04)] hover:shadow-[0_18px_36px_color-mix(in_srgb,var(--brand-primary)_34%,transparent),0_6px_16px_rgba(0,0,0,.18)] active:translate-y-0 active:scale-[.98]"
        onClick={onClick}
        aria-label="Open CMG Pathway Guide"
        title="Chat with CMG"
      >
        <span className="cmg-chatbot-launcher-mark inline-flex shrink-0 items-center justify-center w-[2.55rem] h-[2.55rem] rounded-full border border-[rgba(255,255,255,.92)] bg-white text-[var(--cmg-dark-primary,var(--brand-primary))] shadow-[0_2px_10px_rgba(0,0,0,.12),inset_0_0_0_1px_color-mix(in_srgb,var(--brand-primary)_8%,transparent)]" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-[1.35rem] w-[1.35rem] fill-none stroke-current stroke-[2.5]" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 18.5 4 21l.9-4.4A8 8 0 1 1 7.5 18.5Z" />
            <path strokeLinecap="round" d="M8 12h.01M12 12h.01M16 12h.01" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default function GuidedChatbotShell({ whatsappHref = "" }) {
  const [Panel, setPanel] = useState(null);

  useEffect(() => {
    const open = async () => {
      const loaded = await import("./GuidedChatbot");
      setPanel(() => loaded.default);
    };
    window.addEventListener("cmg:open-chatbot", open);
    return () => window.removeEventListener("cmg:open-chatbot", open);
  }, []);

  if (Panel && Panel !== true) return <Panel whatsappHref={whatsappHref} initialOpen />;

  return (
    <Launcher
      onClick={async () => {
        const loaded = await import("./GuidedChatbot");
        setPanel(() => loaded.default);
      }}
    />
  );
}
