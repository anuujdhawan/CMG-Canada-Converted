import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import styles from "./BrandLockup.module.css";

/**
 * Compact responsive brand lockup for dark navigation surfaces. The mark is
 * current maple-doorway brand mark beside a compact wordmark that stays readable
 * at navbar scale.
 */
export default function BrandLockup({ className = "", onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`${styles.lockup} ${className}`.trim()}
      aria-label={`${site.displayName} — home`}
    >
      <span className={styles.mark} aria-hidden="true">
        <Image
          src={site.logos.brandMarkOnly}
          alt=""
          width={755}
          height={670}
          sizes="54px"
          loading="eager"
          fetchPriority="low"
          className={styles.markImage}
        />
      </span>
      <span className={styles.name}>
        <span>COMMONWEALTH</span>
        <span>MIGRATION GROUP</span>
      </span>
    </Link>
  );
}
