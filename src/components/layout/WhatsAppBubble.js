"use client";

import Image from "next/image";
import { site } from "@/config/site";

const whatsappHref = site.whatsappUrl;

/** Sitewide WhatsApp handoff bubble. URL is driven by NEXT_PUBLIC_WHATSAPP_URL in .env — hidden until a number/URL is configured. */
export default function WhatsAppBubble() {
  if (!whatsappHref) return null;
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="cmg-floating-bubble cmg-floating-bubble--whatsapp cmg-whatsapp-bubble fixed right-5 bottom-20 left-auto !z-[1000] inline-flex items-center justify-center w-12 h-12 border-0 rounded-full bg-transparent shadow-[0_16px_40px_color-mix(in_srgb,var(--brand-navy)_16%,transparent),0_2px_8px_color-mix(in_srgb,var(--brand-navy)_7%,transparent)] transition-[transform,box-shadow] duration-[180ms] ease-in-out hover:-translate-y-0.5 hover:shadow-[0_20px_48px_color-mix(in_srgb,var(--brand-navy)_22%,transparent),0_4px_12px_color-mix(in_srgb,var(--brand-navy)_10%,transparent)]"
    >
      <span className="cmg-whatsapp-bubble-icon inline-flex w-full h-full" aria-hidden="true">
        <Image
          className="cmg-whatsapp-bubble-svg block w-full h-full"
          src="/images/whatsapp-red.svg"
          alt=""
          width={256}
          height={256}
          draggable={false}
        />
      </span>
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
