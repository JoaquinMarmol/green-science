// Genera versiones recortadas (trim) y optimizadas de los logos para web.
// Uso puntual en build-time: `node scripts/prep-logos.mjs` (requiere sharp).
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const p = (base, rel) => fileURLToPath(new URL(rel, base));
const ASSETS = new URL('../../assets/', import.meta.url);
const PUBLIC = new URL('../public/', import.meta.url);
const APP = new URL('../src/app/', import.meta.url);

async function trimTo(input, output, { background, threshold = 18 }) {
  const info = await sharp(p(ASSETS, input))
    .trim({ background, threshold })
    .png()
    .toFile(p(PUBLIC, output));
  console.log(`${output}  ->  ${info.width}x${info.height}`);
  return info;
}

await mkdir(fileURLToPath(PUBLIC), { recursive: true });

// Logo full color sobre fondo blanco -> recorte ajustado al contenido.
await trimTo('isotipo.jpeg', 'logo-color.png', { background: '#ffffff' });
// Logo full sobre fondo negro -> para footer/fondos oscuros.
await trimTo('isotiponegro.jpeg', 'logo-dark.png', { background: '#000000' });
// Solo símbolo (ADN + hoja) sobre negro -> acentos en fondos oscuros (blend-screen).
await trimTo('logo.jpeg', 'logo-symbol.png', { background: '#000000' });

// Versión del logo full con fondo transparente (negro -> alpha) para el header
// sobre fondos oscuros (hero) y el footer. Conserva GREEN verde, SCIENCE azul y
// el tagline blanco; solo elimina el recuadro negro.
{
  const { data, info } = await sharp(p(ASSETS, 'isotiponegro.jpeg'))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (lum < 20) data[i + 3] = 0;
    else if (lum < 60) data[i + 3] = Math.round(((lum - 20) / 40) * 255);
  }
  const infoT = await sharp(data, { raw: { width, height, channels } })
    .trim()
    .png()
    .toFile(p(PUBLIC, 'logo-on-dark.png'));
  console.log(`logo-on-dark.png  ->  ${infoT.width}x${infoT.height}`);
}

// Símbolo (ADN + hoja) con fondo transparente para usarlo como motivo del hero
// sin recuadro y a cualquier opacidad. Feather amplio para conservar el glow.
{
  const { data, info } = await sharp(p(ASSETS, 'logo.jpeg'))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (lum < 18) data[i + 3] = 0;
    else if (lum < 70) data[i + 3] = Math.round(((lum - 18) / 52) * 255);
  }
  const infoT = await sharp(data, { raw: { width, height, channels } })
    .trim()
    .png()
    .toFile(p(PUBLIC, 'logo-symbol-on-dark.png'));
  console.log(`logo-symbol-on-dark.png  ->  ${infoT.width}x${infoT.height}`);
}

// Favicon cuadrado a partir del símbolo, sobre fondo negro de marca.
const symBuf = await sharp(p(ASSETS, 'logo.jpeg'))
  .trim({ background: '#000000', threshold: 18 })
  .png()
  .toBuffer();
await sharp({
  create: { width: 128, height: 128, channels: 4, background: '#0B0F0C' },
})
  .composite([{ input: await sharp(symBuf).resize(104, 104, { fit: 'inside' }).png().toBuffer(), gravity: 'center' }])
  .png()
  .toFile(p(APP, 'icon.png'));
console.log('src/app/icon.png  ->  128x128');
