import { Phone } from "lucide-react";
import { site } from "@/config/site";

const phoneHref = site.phoneHref;

/** Sitewide direct-call bubble. It stays hidden until a real phone number is configured. */
export default function CallBubble() {
  if (!phoneHref?.startsWith("tel:")) return null;

  return (
    <a
      href={phoneHref}
      aria-label={`Call ${site.name}`}
      title={`Call ${site.name}`}
      className="cmg-call-bubble fixed right-5 bottom-5 z-[1000] inline-flex items-center justify-center w-12 h-12 rounded-full border border-[color-mix(in_srgb,var(--brand-primary)_32%,white)] bg-[linear-gradient(135deg,var(--brand-primary),var(--brand-primary-dark))] text-white shadow-[0_10px_24px_color-mix(in_srgb,var(--brand-primary)_24%,transparent),0_3px_10px_rgba(0,0,0,.14)] transition-[transform,box-shadow,filter] duration-[180ms] ease-in-out hover:-translate-y-0.5 hover:filter-[brightness(1.05)] hover:shadow-[0_14px_30px_color-mix(in_srgb,var(--brand-primary)_30%,transparent),0_4px_12px_rgba(0,0,0,.18)] active:translate-y-0 active:scale-[.97] max-[1023.98px]:!right-3 max-[1023.98px]:!bottom-16 max-[1023.98px]:!w-[2.75rem] max-[1023.98px]:!h-[2.75rem]"
    >
      <Phone className="cmg-call-bubble-icon w-[1.15rem] h-[1.15rem]" aria-hidden="true" />
      <span className="sr-only">Call {site.name}</span>
    </a>
  );
}
