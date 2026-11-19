import Image from "next/image";
import Link from "next/link";
import { CircleParking, Clock3, Mail, MapPin, MessageCircle, Navigation, Phone, Video } from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import styles from "./LocationPage.module.css";

const { address } = site;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address.full)}`;
const photos = [
  {
    file: "building-entrance.webp",
    alt: "Glass canopy and front doors marked 2250 at Bovaird Drive East",
    caption: "Main entrance",
    width: 679,
    height: 452,
    className: "officePhotoMain",
  },
  {
    file: "building-exterior.webp",
    alt: "Office building with a curved glass façade and beige exterior",
    caption: "Building exterior",
    width: 452,
    height: 679,
    className: "officePhotoExterior",
  },
  {
    file: "building-lobby.webp",
    alt: "Ground-floor building lobby with seating and elevators at the far end",
    caption: "Building lobby",
    width: 596,
    height: 335,
    className: "officePhotoLobby",
  },
];

export default function BramptonOfficeSection() {
  return (
    <section className={`${styles.section} ${styles.officeSection}`} id="brampton-office" aria-labelledby="brampton-office-title">
      <div className={styles.container}>
        <div className={`${styles.officeHeading} reveal`}>
          <div>
            <p className={styles.sectionEyebrow}><MapPin size={15} aria-hidden="true" /> Brampton · Ontario</p>
            <h2 id="brampton-office-title">See where we’ll meet you</h2>
            <p>Our Brampton office is in Suite 615 at 2250 Bovaird Drive East. Please book before visiting.</p>
          </div>
          <span className={styles.officeAppointmentNote}>In-person appointments by booking</span>
        </div>

        <div className={styles.officeLayout}>
          <div className={styles.officePhotos} role="group" aria-label="Photos of the Brampton office building and entrance">
            {photos.map(({ file, alt, caption, width, height, className }, index) => (
              <figure className={`${styles[className]} reveal`} style={{ "--delay": `${index * 55}ms` }} key={file}>
                <Image
                  src={`/images/locations/brampton/${file}`}
                  alt={alt}
                  width={width}
                  height={height}
                  sizes={className === "officePhotoMain" ? "(max-width: 760px) 100vw, (max-width: 1050px) 60vw, 45vw" : "(max-width: 760px) 48vw, (max-width: 1050px) 28vw, 22vw"}
                  unoptimized
                />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className={`${styles.officeInfo} reveal`} style={{ "--delay": "90ms" }}>
            <div className={styles.officeAddress}>
              <p className={styles.officeInfoLabel}>Visit by appointment</p>
              <address>
                <strong>{site.displayName}</strong>
                <span>{address.line1}</span>
                <span>{address.city}, {address.region} {address.postal}</span>
              </address>
              <a className={`${styles.button} ${styles.primaryButton}`} href={directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation size={16} aria-hidden="true" /> Get directions
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
                <dt><Phone size={17} aria-hidden="true" /> Phone and WhatsApp</dt>
                <dd className={styles.officeContactLinks}>
                  <a href={site.phoneHref}>{site.phone}</a>
                  {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} aria-hidden="true" /> WhatsApp</a>}
                </dd>
              </div>
              <div>
                <dt><Mail size={17} aria-hidden="true" /> Email</dt>
                <dd><a href={site.emailHref}>{site.email}</a></dd>
              </div>
            </dl>

            <div className={styles.officeActions}>
              <Link href={site.ctas.primary.href} className={`${styles.button} ${styles.secondaryButton}`}>Book a consultation</Link>
            </div>
          </div>
        </div>

        <div className={`${styles.officeBottomNote} reveal`} style={{ "--delay": "120ms" }}>
          <span><MapPin size={17} aria-hidden="true" /> 2250 Bovaird Drive East, Suite 615</span>
          <span><CircleParking size={17} aria-hidden="true" /> Free parking in front</span>
          <span><Video size={17} aria-hidden="true" /> Video and phone consultations also available</span>
        </div>
      </div>
    </section>
  );
}
