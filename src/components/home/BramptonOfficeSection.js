import Link from "next/link";
import { CircleParking, Clock3, Mail, MapPin, MessageCircle, Navigation, Phone, Video } from "lucide-react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/config/whatsapp";
import BramptonOfficeGallery from "./BramptonOfficeGallery";
import styles from "./LocationPage.module.css";

const { address } = site;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address.full)}`;
export default function BramptonOfficeSection({ showPhotos = true }) {
  const officeLayoutClass = styles.officeLayout + (showPhotos ? "" : " " + styles.officeLayoutWide);

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

        <div className={officeLayoutClass}>
          {showPhotos && <BramptonOfficeGallery />}

          <div className={`${styles.officeInfo} reveal`} style={{ "--delay": "90ms" }}>
            <div className={styles.officeAddress}>
              <p className={styles.officeInfoLabel}>Visit by appointment</p>
              <address>
                <strong>{site.name}</strong>
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

        <div className={`${styles.officeMap} reveal`}>
          <iframe
            title="Google Map showing Commonwealth Migration Group’s Brampton office"
            src={`https://www.google.com/maps?q=${address.coordinates.latitude},${address.coordinates.longitude}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
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
