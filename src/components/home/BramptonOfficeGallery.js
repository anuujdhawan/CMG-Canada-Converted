import Image from "next/image";
import styles from "./LocationPage.module.css";

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

export default function BramptonOfficeGallery({ className = "" }) {
  return (
    <div className={styles.officePhotos + (className ? " " + className : "")} role="group" aria-label="Photos of the Brampton office building and entrance">
      {photos.map(({ file, alt, caption, width, height, className: photoClass }, index) => (
        <figure className={styles[photoClass] + " reveal"} style={{ "--delay": String(index * 55) + "ms" }} key={file}>
          <Image
            src={"/images/locations/brampton/" + file}
            alt={alt}
            width={width}
            height={height}
            sizes={photoClass === "officePhotoMain" ? "(max-width: 760px) 100vw, (max-width: 1050px) 60vw, 45vw" : "(max-width: 760px) 48vw, (max-width: 1050px) 28vw, 22vw"}
            unoptimized
          />
          <figcaption>{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
