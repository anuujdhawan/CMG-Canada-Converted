const FOCAL_POSITIONS = {
  "businessman.webp": "center 14%",
  "businesswoman.webp": "center 18%",
  "city-skyline.webp": "center 24%",
  "city-street.webp": "center 24%",
  "couple.webp": "center 44%",
  "engineer.webp": "center 34%",
  "toronto-skyline.webp": "center 25%",
};

export function getImageObjectPosition(src = "") {
  const fileName = src.split("/").pop()?.toLowerCase();
  return FOCAL_POSITIONS[fileName] || "center center";
}

