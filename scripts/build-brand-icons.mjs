/**
 * Build the brand icon set from the CMG pinwheel logo.
 *
 *   node scripts/build-brand-icons.mjs [source-image]
 *
 * Writes (all auto-linked by Next 16 file conventions — nothing goes in
 * `metadata.icons`):
 *
 *   src/app/favicon.ico     128 / 64 / 48 / 32 / 16   browser tab + bookmarks
 *   src/app/icon.png        192x192                   the link Google uses for SERP
 *   src/app/apple-icon.png  180x180                   iOS home screen
 *
 * Nothing else is written. In particular no extra "master" copy is parked in
 * `public/`: the source artwork (`public/images/favicon_LG.webp`) is already
 * committed, so this script is the reproducible path to any other size.
 *
 * Why this exists rather than a one-off export:
 *
 *  - The artwork is flat #D02818 on white. Recovering an antialiased alpha
 *    mask from the green channel (white g=255, mark g=40 — by far the widest
 *    separation) and then forcing every pixel to the logo's own red removes
 *    the JPEG/WebP compression noise that a plain "make white transparent"
 *    would keep, and leaves the edge antialiasing intact.
 *  - `apple-icon.png` is deliberately *opaque* on white. iOS composites
 *    transparent touch icons onto black, so a transparent apple-icon turns
 *    the tile into a black square on the home screen.
 *  - The mark is trimmed to its own bounding box and re-padded to 88% of the
 *    tile. The supplied artwork sits at 70.9%, which at 16px leaves the mark
 *    about 11px across. 88% is still clear of the tile edge and is visibly
 *    more legible in a tab.
 *
 * The default source is `public/images/favicon_LG.webp` (1280px). The
 * WhatsApp/JPEG copies of this logo that get supplied by hand are the same
 * artwork at 640px — verified pixel-equivalent apart from compression noise —
 * so the larger repo copy is used to avoid upscaling. Pass a path to override.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.error(
    "sharp is required (it ships transitively with Next.js). Run `npm install` first."
  );
  process.exit(1);
}

const SOURCE = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(ROOT, "public/images/favicon_LG.webp");

/** The logo's own red — sampled from the artwork, not the CSS `--brand-primary`
 *  (#D80621). The mark, the header wordmark and the footer bird all use
 *  #D02818, so the icon must not drift to the UI token. */
const MARK = { r: 0xd0, g: 0x28, b: 0x18 };
const G_WHITE = 255;
const G_MARK = 40;

/** Fraction of the tile the trimmed mark occupies. */
const FILL = 0.88;

/**
 * ICO payload sizes. 16/32 cover tabs, 48/64 cover bookmarks and desktop,
 * 128 gives the file a large payload to hand out.
 *
 * **They are written largest-first, and that ordering is load-bearing.**
 * Next derives the `sizes` attribute of the emitted
 * `<link rel="icon" href="/favicon.ico?…" sizes="NxN">` from
 * `getImageSize()` in `next/dist/server/image-optimizer.js`, and for an ICO
 * that function returns the **first** directory entry — not the largest.
 * Ascending order (the conventional way to write an ICO) therefore makes Next
 * advertise `sizes="16x16"`, which is under Google's "larger than 48x48"
 * recommendation. Descending makes it advertise the real capability.
 *
 * This is safe for browsers: an ICO directory is a list that is matched by
 * requested size, and nothing in the format requires ascending order.
 */
const ICO_SIZES = [16, 32, 48, 64, 128];
const PNG_SIZE = 192;
const APPLE_SIZE = 180;

// ---------------------------------------------------------------- master --

if (!fs.existsSync(SOURCE)) {
  console.error(`Source image not found: ${SOURCE}`);
  process.exit(1);
}

const { data, info } = await sharp(SOURCE)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const flat = Buffer.alloc(width * height * 4);
let minX = width;
let minY = height;
let maxX = -1;
let maxY = -1;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const si = (y * width + x) * channels;
    let alpha = (G_WHITE - data[si + 1]) / (G_WHITE - G_MARK);
    if (alpha < 0.04) alpha = 0; // kill paper noise
    else if (alpha > 0.96) alpha = 1; // flatten the solid interior
    else alpha = Math.round(alpha * 255) / 255;

    const di = (y * width + x) * 4;
    flat[di] = MARK.r;
    flat[di + 1] = MARK.g;
    flat[di + 2] = MARK.b;
    flat[di + 3] = Math.round(alpha * 255);

    if (alpha > 0.5) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const markW = maxX - minX + 1;
const markH = maxY - minY + 1;
if (markW < 8 || markH < 8) {
  console.error("Could not find the mark — is the source the flat red-on-white logo?");
  process.exit(1);
}

const trimmed = await sharp(flat, { raw: { width, height, channels: 4 } })
  .extract({ left: minX, top: minY, width: markW, height: markH })
  .png()
  .toBuffer();

console.log(`source   ${path.relative(ROOT, SOURCE)}  ${width}x${height}`);
console.log(`mark     ${markW}x${markH}  trimmed to bounding box`);
console.log(`padding  re-framed to ${(FILL * 100).toFixed(0)}% of the tile\n`);

/** Trimmed mark centred on a transparent square tile at `fill` of its width. */
async function renderTile(size, fill = FILL) {
  const inner = Math.max(1, Math.round(size * fill));
  const scaled = await sharp(trimmed)
    .resize(inner, inner, {
      fit: "contain",
      kernel: "lanczos3",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const pad = Math.round((size - inner) / 2);
  return sharp({
    create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: scaled, left: pad, top: pad }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

// ------------------------------------------------------------------- ICO --
// Written by hand: sharp cannot emit ICO. Entries are PNG payloads (32bpp
// RGBA), which every browser since IE11 understands and which keeps the alpha.

async function buildIco(sizes) {
  const images = [];
  // Largest first — see ICO_SIZES. Next reports the first entry as `sizes`.
  for (const size of [...sizes].sort((a, b) => b - a)) {
    images.push({ size, buf: await renderTile(size) });
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(16 * images.length);
  let offset = header.length + directory.length;

  images.forEach((img, i) => {
    const o = i * 16;
    directory[o] = img.size >= 256 ? 0 : img.size;
    directory[o + 1] = img.size >= 256 ? 0 : img.size;
    directory[o + 2] = 0; // palette size
    directory[o + 3] = 0; // reserved
    directory.writeUInt16LE(1, o + 4); // colour planes
    directory.writeUInt16LE(32, o + 6); // bits per pixel
    directory.writeUInt32LE(img.buf.length, o + 8);
    directory.writeUInt32LE(offset, o + 12);
    offset += img.buf.length;
  });

  return Buffer.concat([header, directory, ...images.map((i) => i.buf)]);
}

// ----------------------------------------------------------------- write --

const writes = [
  [path.join(ROOT, "src/app/favicon.ico"), await buildIco(ICO_SIZES)],
  [path.join(ROOT, "src/app/icon.png"), await renderTile(PNG_SIZE)],
  [
    path.join(ROOT, "src/app/apple-icon.png"),
    // Opaque on white: iOS composites transparent touch icons onto black.
    await sharp({
      create: { width: APPLE_SIZE, height: APPLE_SIZE, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
    })
      .composite([{ input: await renderTile(APPLE_SIZE), left: 0, top: 0 }])
      .png({ compressionLevel: 9 })
      .toBuffer(),
  ],
];

for (const [file, buf] of writes) {
  fs.writeFileSync(file, buf);
  console.log(`wrote  ${path.relative(ROOT, file).padEnd(34)} ${(buf.length / 1024).toFixed(1)} KB`);
}
