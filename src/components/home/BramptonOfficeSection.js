import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleParking, Clock3, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import styles from "./LocationPage.module.css";

const { address } = site;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address.full)}`;
const photos = [
  {
    file: "building-entrance.webp",
    alt: "Glass canopy and front doors marked 2250 at Bovaird Drive East",
    caption: "Entrance at 2250 Bovaird Drive East",
    width: 679,
    height: 452,
  },
  {
    file: "building-exterior.webp",
    alt: "The office building with a curved glass façade and beige exterior",
    caption: "Office building",
    width: 452,
    height: 679,
  },
  {
    file: "building-lobby.webp",
    alt: "Ground-floor building lobby with seating and elevators at the far end",
    caption: "Building lobby",
    width: 596,
    height: 335,
  },
];

export default function BramptonOfficeSection() {
  return (
    <section className={`${styles.section} ${styles.alternate}`} id="brampton-office" aria-labelledby="brampton-office-title">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <h2 id="brampton-office-title">Visit our Brampton office</h2>
          <p>Find us in Suite 615 on Bovaird Drive East. Please book before visiting.</p>
        </div>
        <div className={styles.officeGrid}>
          <div className={styles.officeInfo}>
            <div className={styles.officeAddress}>
              <address>
                <span className={styles.eyebrow}><MapPin size={17} aria-hidden="true" /> {site.displayName}</span>
                <strong>{address.line1}</strong>
                <span>{address.city}, {address.region} {address.postal}</span>
              </address>
              <a className={`${styles.button} ${styles.primaryButton}`} href={directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation size={16} aria-hidden="true" /> Get directions <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <dl className={styles.officeDetails}>
              <div>
                <dt><Clock3 size={17} aria-hidden="true" /> Office hours</dt>
                <dd>{site.hours}</dd>
              </div>
              <div>
                <dt><CircleParking size={17} aria-hidden="true" /> Parking</dt>
                <dd>Free parking in front of the building.</dd>
              </div>
              <div>
                <dt><Phone size={17} aria-hidden="true" /> Phone</dt>
                <dd>
                  <a className={styles.textLink} href={site.phoneHref}>{site.phone}</a>
                  {whatsappUrl && (
                    <a className={styles.textLink} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} aria-hidden="true" /> WhatsApp
                    </a>
                  )}
                </dd>
              </div>
              <div>
                <dt><Mail size={17} aria-hidden="true" /> Email</dt>
                <dd><a className={styles.textLink} href={site.emailHref}>{site.email}</a></dd>
              </div>
            </dl>
            <div className={styles.actions}>
              <Link href={site.ctas.primary.href} className={`${styles.button} ${styles.secondaryButton}`}>Book a visit</Link>
            </div>
          </div>

          <div className={styles.officePhotos} role="group" aria-label="Photos to help you find the office">
            {photos.map(({ file, alt, caption, width, height }) => (
              <figure key={file}>
                <Image src={`/images/locations/brampton/${file}`} alt={alt} width={width} height={height} unoptimized />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
