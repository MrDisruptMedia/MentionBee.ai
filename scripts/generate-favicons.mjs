import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public", "icon.png");

async function pngAt(size) {
  return sharp(src)
    .resize(size, size, { fit: "fill", kernel: "lanczos3" })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

function createIco(images) {
  const count = images.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const withOffsets = images.map(({ size, buf }) => {
    const entry = { size, buf, offset };
    offset += buf.length;
    return entry;
  });
  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  let pos = 6;
  for (const img of withOffsets) {
    out.writeUInt8(img.size >= 256 ? 0 : img.size, pos);
    out.writeUInt8(img.size >= 256 ? 0 : img.size, pos + 1);
    out.writeUInt8(0, pos + 2);
    out.writeUInt8(0, pos + 3);
    out.writeUInt16LE(1, pos + 4);
    out.writeUInt16LE(32, pos + 6);
    out.writeUInt32LE(img.buf.length, pos + 8);
    out.writeUInt32LE(img.offset, pos + 12);
    img.buf.copy(out, img.offset);
    pos += 16;
  }
  return out;
}

const sizes = [16, 32, 48];
const images = [];
for (const size of sizes) {
  images.push({ size, buf: await pngAt(size) });
}
writeFileSync(join(root, "public", "favicon.ico"), createIco(images));

const apple = await pngAt(180);
writeFileSync(join(root, "public", "apple-touch-icon.png"), apple);

console.log(
  JSON.stringify(
    {
      faviconIco: images.map((i) => ({ size: i.size, bytes: i.buf.length })),
      appleBytes: apple.length,
    },
    null,
    2,
  ),
);
