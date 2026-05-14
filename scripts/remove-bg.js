import sharp from 'sharp';
import fs from 'fs';

const folder = new URL('../public/images/logo/', import.meta.url).pathname;
const inputs = [
  'ak_logo_1.png',
  'ak_logo2.png',
];

async function removeBackground(inputName, outputName) {
  const inputPath = folder + inputName;
  const outputPath = folder + outputName;

  if (!fs.existsSync(inputPath)) {
    console.error('Missing input:', inputPath);
    return;
  }

  const img = sharp(inputPath).ensureAlpha();
  const { width, height } = await img.metadata();

  // Extract raw RGBA pixels
  const raw = await img.raw().toBuffer();

  // Process each pixel: if near-white, set alpha to 0
  for (let i = 0; i < raw.length; i += 4) {
    const r = raw[i];
    const g = raw[i + 1];
    const b = raw[i + 2];
    const a = raw[i + 3];

    // If pixel is near white (threshold), make transparent
    if (r > 240 && g > 240 && b > 240) {
      raw[i + 3] = 0; // alpha
    }
  }

  await sharp(raw, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log('Wrote', outputPath);
}

(async () => {
  for (const name of inputs) {
    const out = name.replace(/\.png$/i, '') + '_trans.png';
    try {
      await removeBackground(name, out);
    } catch (err) {
      console.error('Failed', name, err.message);
    }
  }
})();
