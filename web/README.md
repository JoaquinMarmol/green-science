# Green Science — Sitio web

Sitio corporativo de **Green Science** (*Living Soil Biotechnology*): bioinsumos agrícolas de origen orgánico microbiano. Bilingüe ES/EN, mobile-first.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** con tokens de marca (`tailwind.config.ts`)
- **next-intl** para i18n (rutas `/es` y `/en`, ES por defecto)
- **framer-motion** (animaciones sutiles) · **lucide-react** (íconos)
- `next/font` (Sora + Inter), `next/image`, SEO con metadata, `sitemap.xml`, `robots.txt` y JSON-LD

## Requisitos

- Node.js 18.18+ (recomendado 20+)

## Desarrollo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000 (redirige a `/es`).

## Build de producción

```bash
npm run build
npm run start
```

## Variables de entorno

Copiá `.env.example` a `.env.local` y ajustá la URL pública (SEO/sitemap/OG):

```
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

## Estructura

```
src/
├─ app/[locale]/         Páginas: home, productos, productos/[slug], nosotros, contacto
│  ├─ layout.tsx         Layout raíz (fuentes, header/footer, metadata, JSON-LD Organization)
│  └─ not-found.tsx      404 localizado
├─ app/sitemap.ts        Sitemap (ES/EN + productos)
├─ app/robots.ts         robots.txt
├─ components/           ui/ · layout/ · home/ · products/ · contact/ · motion/ · seo/
├─ data/                 products.ts (8 productos) · categories.ts
├─ i18n/                 routing · navigation · request (next-intl)
├─ lib/                  site.ts · seo.ts · crops.ts · loc.ts · cn.ts
└─ middleware.ts         Middleware i18n
messages/                es.json · en.json (toda la UI)
public/                  Logos (logo-color, logo-dark, logo-symbol), og-image
```

## Contenido y marca

- **Productos:** `src/data/products.ts` (datos reales de las etiquetas; ES/EN por campo).
- **Textos de UI:** `messages/es.json` y `messages/en.json` (nunca hardcodeados en componentes).
- **Datos de empresa:** `src/lib/site.ts`.
- **Tokens de diseño:** `tailwind.config.ts`.

### Logos

Los logos provistos (`assets/`) se procesan a PNG recortados con `scripts/prep-logos.mjs`
(usa `sharp`, solo en build-time). Para regenerarlos tras cambiar los originales:

```bash
npm install sharp --no-save
node scripts/prep-logos.mjs
```

## Deploy en Vercel

1. Importá el repo en Vercel (root del proyecto = esta carpeta `web/`).
2. Configurá `NEXT_PUBLIC_SITE_URL` con el dominio final.
3. Deploy. (Framework detectado: Next.js.)

## Pendientes del cliente

Email oficial, redes sociales, HEX exactos de marca, registros SENASAG del resto de
productos y fotografías reales de campo/producto (ver `../docs/05-company-info.md`).
Mientras tanto se usan placeholders branded (gradientes por categoría) para los productos.
