import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

/**
 * Compact responsive brand lockup for dark navigation surfaces. The mark is
 * cropped from the supplied red logo artwork with CSS; the source image itself
 * stays unchanged, while the adjacent name remains readable at navbar scale.
 */
export default function BrandLockup({ className = "", onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`site-brand-lockup ${className}`.trim()}
      aria-label={`${site.displayName} — home`}
    >
      <span className="site-brand-lockup__mark" aria-hidden="true">
        <Image
          src={site.logos.brandMarkOnly}
          alt=""
          width={755}
          height={670}
          sizes="54px"
          loading="eager"
          fetchPriority="low"
          className="site-brand-lockup__mark-image"
        />
      </span>
      <span className="site-brand-lockup__name">
        <span>COMMONWEALTH</span>
        <span>MIGRATION GROUP</span>
      </span>
    </Link>
  );
}
