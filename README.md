# Green Science — Paquete para construir la web

Todo lo necesario para que **Claude Code** construya el sitio web de Green Science (Next.js + Tailwind, bilingüe ES/EN, mobile-first, profesional).

## Qué hay acá

```
greenScience/
├─ PROMPT.md                 ← Prompt maestro. Pegalo/referencialo en Claude Code.
├─ README.md                 ← Este archivo.
├─ docs/
│  ├─ 01-brand-identity.md   ← Marca: esencia, logo, paleta, tipografía, tono.
│  ├─ 02-design-system.md    ← Sistema de diseño mobile-first + tokens Tailwind.
│  ├─ 03-site-structure.md   ← Páginas, navegación, secciones del home, i18n.
│  ├─ 04-products-content.md ← Los 8 productos con todo su contenido ES/EN.
│  └─ 05-company-info.md     ← Datos de empresa, contacto y pendientes.
└─ assets/
   └─ README.md              ← Dónde poner logos e imágenes de producto.
```

## Cómo usarlo en Claude Code

1. Abrí esta carpeta (`greenScience`) en tu terminal y ejecutá `claude` (Claude Code).
2. Dale esta instrucción inicial:

   > Leé `PROMPT.md` y todos los archivos de `docs/`. Construí el sitio web de Green Science siguiendo esas especificaciones. Empezá por la Fase 1 (scaffold) y avanzá en orden, mostrándome el resultado de cada fase.

3. Antes o durante: subí los logos e imágenes a `assets/` (ver `assets/README.md`).
4. Claude Code irá creando el proyecto Next.js dentro de esta carpeta (o en una subcarpeta `web/`, como prefieras — aclaráselo).

## Resumen del encargo
- **Stack:** Next.js 14+ (App Router, TypeScript) + Tailwind CSS.
- **Idiomas:** Español (default) + Inglés, con selector.
- **Enfoque:** mobile-first, profesional, estética agritech/biotecnología limpia.
- **Páginas:** Home, Productos, Detalle de producto, Nosotros, Contacto.
- **Datos:** reales, extraídos de las etiquetas (ver `docs/04-products-content.md`). No inventar.

## Pendientes del cliente (ver `docs/05-company-info.md`)
Email oficial, redes sociales, HEX exactos de marca, vectores del logo, registros SENASAG del resto de productos y fotografías reales.
