# PROMPT MAESTRO — Sitio web Green Science

> Pegá este archivo completo en Claude Code (o referencialo con `@PROMPT.md`) como instrucción inicial.
> Los documentos de apoyo en `/docs` contienen TODO el contenido real (marca, diseño, productos, empresa).
> Leé esos archivos antes de escribir código. No inventes datos: usá los de `/docs`.

---

## ROL

Actuá como un desarrollador front-end senior y diseñador de producto. Vas a construir el sitio web corporativo de **Green Science** ("Living Soil Biotechnology"), una empresa boliviana de bioinsumos agrícolas (biofertilizantes, bioestimulantes, bioinsecticidas y biofungicidas de origen orgánico microbiano).

El objetivo: un sitio **profesional, moderno y mobile-first**, con estética limpia tipo agritech/biotecnología (referencia de sensación: sitios de bioinsumos modernos como naturartech.com, sobre todo cómo se ve y fluye en móvil), pero con identidad propia de Green Science.

---

## STACK Y REQUISITOS TÉCNICOS

- **Framework:** Next.js 14+ (App Router) con TypeScript.
- **Estilos:** Tailwind CSS. Definir los tokens de marca en `tailwind.config.ts` (colores, fuentes) según `/docs/02-design-system.md`.
- **Idiomas:** Bilingüe **Español (default) + Inglés**, con selector de idioma en el header. Usá `next-intl` (recomendado) o el routing i18n nativo de Next (`/es`, `/en`). Todo el contenido de texto debe venir de archivos de diccionario (`/messages/es.json`, `/messages/en.json`), nunca hardcodeado en los componentes.
- **Animaciones:** sutiles. Usá `framer-motion` para fade-in/slide-in al hacer scroll. Nada exagerado.
- **Íconos:** `lucide-react`.
- **Imágenes:** componente `next/image` optimizado.
- **SEO:** metadata por página (title, description, Open Graph), `sitemap.xml`, `robots.txt`, datos estructurados JSON-LD de Organization y Product.
- **Performance:** objetivo Lighthouse 90+ en mobile. Lazy-load, fuentes con `next/font`.
- **Accesibilidad:** semántica HTML correcta, contraste AA, `alt` en imágenes, navegación por teclado.
- **Responsive:** diseñar **primero para móvil (~375px)** y luego escalar a tablet y desktop. El móvil es la prioridad.
- **Deploy:** preparar para Vercel. Incluir `README.md` con instrucciones de `npm install` / `npm run dev` / `npm run build`.

---

## ENTREGA POR FASES (seguí este orden)

1. **Scaffold:** inicializar proyecto Next.js + TS + Tailwind. Configurar i18n, fuentes, tokens de color de marca, layout raíz, header y footer.
2. **Sistema de diseño:** crear componentes base reutilizables (Button, Container, Section, Card, Badge, LanguageSwitcher, Navbar móvil con menú hamburguesa, Footer).
3. **Home:** construir todas las secciones del home (ver abajo).
4. **Páginas internas:** Productos (listado + categorías), Detalle de producto (template dinámico desde data), Nosotros, Contacto.
5. **Contenido:** cargar los diccionarios ES/EN y la data de productos desde `/docs/04-products-content.md`.
6. **Pulido:** animaciones, SEO, metadata, sitemap, verificación responsive y de accesibilidad.

---

## ESTRUCTURA DE PÁGINAS

Ver `/docs/03-site-structure.md` para el detalle. Resumen:

- **Home (`/`)** — Hero, propuesta de valor, categorías de producto, productos destacados, "por qué Green Science", franja de cultivos, CTA de contacto.
- **Productos (`/productos`)** — Grilla filtrable por categoría (Bioestimulantes, Biofertilizantes, Bioinsecticidas, Biofungicidas, Tratamiento de semillas, Línea pecuaria).
- **Detalle de producto (`/productos/[slug]`)** — Template dinámico: nombre, categoría, descripción, composición (tabla), beneficios (íconos), cultivos, instrucciones de uso/dosis, compatibilidad.
- **Nosotros (`/nosotros`)** — Historia, misión, enfoque "Living Soil Biotechnology", tecnología microbiana.
- **Contacto (`/contacto`)** — Formulario, datos (Montero – Santa Cruz, Bolivia), WhatsApp, mapa.

---

## SECCIONES DEL HOME (mobile-first)

1. **Header fijo** — logo Green Science, menú hamburguesa en móvil, selector ES/EN, botón de contacto/WhatsApp.
2. **Hero** — fondo verde/naturaleza (degradado de marca o imagen de cultivo), titular potente, subtítulo, 2 CTAs ("Ver productos", "Contactar"). Logo o motivo de marca visible.
3. **Tira de valor** — 3–4 pilares con ícono (Origen orgánico microbiano, 100% biológico, Mejora del suelo, Apto para exportación).
4. **Categorías de productos** — tarjetas grandes táctiles que llevan al listado filtrado.
5. **Productos destacados** — carrusel/grilla con 3–4 productos clave (FULL POWER 50, BIOMAX 43, BIOGUARD, SEED FORTE).
6. **Por qué Green Science** — bloque con la tecnología "Living Soil Biotechnology", microorganismos benéficos, sostenibilidad.
7. **Cultivos** — franja con íconos/nombres de cultivos (soya, maíz, arroz, caña de azúcar, trigo, algodón, girasol, banano, etc.).
8. **CTA final + Footer** — llamado a contacto, datos de la empresa, redes, registro SENASAG, copyright.

---

## IDENTIDAD VISUAL (resumen — detalle en `/docs/02-design-system.md`)

- **Colores:** verdes (lima brillante → verde oscuro), azul marino para texto/acentos, negro y blanco. El logo combina una hélice de ADN con hoja/llama en degradado verde.
- **Tipografía:** sans-serif moderna y legible (ej. Inter, Poppins o Sora). Títulos con peso fuerte.
- **Tono:** científico pero accesible, confiable, natural, sostenible.
- **No usar:** plantillas genéricas recargadas, exceso de sombras, stock cliché. Limpio, con aire, foto agrícola real cuando sea posible.

---

## CONTENIDO Y DATOS

- **Productos:** todos los datos (composición, beneficios, cultivos, dosis) están en `/docs/04-products-content.md`, ya en ES e EN. Modelá un archivo `data/products.ts` con tipado TypeScript y generá las páginas de detalle dinámicamente.
- **Empresa:** datos de contacto y "Nosotros" en `/docs/05-company-info.md`.
- **Marca:** ver `/docs/01-brand-identity.md`.
- **Diseño:** ver `/docs/02-design-system.md`.
- **Assets (logos/etiquetas):** ver `/assets/README.md`. El usuario debe colocar los archivos de logo en `/public`. Mientras tanto, usá un placeholder con el wordmark "GREEN SCIENCE / Living Soil Biotechnology".

---

## REGLAS

- No inventes productos, composiciones ni datos de contacto: usá únicamente lo que está en `/docs`.
- Todo texto visible debe estar en los diccionarios i18n (ES y EN).
- Componentizá y mantené el código limpio, tipado y comentado donde aporte.
- Priorizá la experiencia móvil en cada decisión.
- Al terminar cada fase, dejá la app corriendo sin errores (`npm run dev`) y resumí qué construiste.

Empezá por la Fase 1 (scaffold) y avanzá en orden.
