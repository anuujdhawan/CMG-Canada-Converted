import Image from "next/image";
import { site } from "@/config/site";
import styles from "./BrandMark.module.css";

/**
 * The standalone current maple-doorway mark. Use beside a visible company name
 * or in an already branded context.
 */
export default function BrandMark({ size = 18, className = "" }) {
  return (
    <span
      className={`${styles.mark} ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src={site.logos.brandMarkOnly}
        alt=""
        width={755}
        height={670}
        sizes={`${size}px`}
        className={`${styles.image} ${styles.lightImage}`}
      />
      <Image
        src={site.logos.brandMarkOnlyDark}
        alt=""
        width={755}
        height={670}
        sizes={`${size}px`}
        className={`${styles.image} ${styles.darkImage}`}
      />
    </span>
  );
}
