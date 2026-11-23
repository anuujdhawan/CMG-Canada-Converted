import Image from "next/image";
import { site } from "@/config/site";

/**
 * The mark from the supplied full logo, cropped without redrawing or reshaping
 * it. Use beside a visible company name or in an already branded context.
 */
export default function BrandMark({ size = 18, className = "" }) {
  return (
    <span
      className={`site-brand-mark ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src={site.logos.brandMarkOnly}
        alt=""
        width={755}
        height={670}
        sizes={`${size}px`}
        className="site-brand-mark__light"
      />
      <Image
        src={site.logos.brandMarkOnlyDark}
        alt=""
        width={755}
        height={670}
        sizes={`${size}px`}
        className="site-brand-mark__dark"
      />
    </span>
  );
}
