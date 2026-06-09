# 03 — Estructura del sitio

Bilingüe ES/EN. Rutas con prefijo de idioma (`/es`, `/en`); ES por defecto.

## Mapa del sitio

```
/                         Home
/productos                Listado de productos (filtro por categoría)
/productos/[slug]         Detalle de producto (dinámico desde data/products.ts)
/nosotros                 Sobre Green Science
/contacto                 Contacto
```

Categorías (para filtros y badges):
Bioestimulantes · Biofertilizantes · Bioinsecticidas · Biofungicidas · Tratamiento de semillas · Línea pecuaria.

## Navegación

**Header (fijo):** Logo · Inicio · Productos · Nosotros · Contacto · Selector ES/EN · Botón WhatsApp.
En móvil: logo + hamburguesa → overlay full-screen con los links grandes, selector de idioma y CTA.

**Footer:** Logo + tagline · columnas de navegación · datos de contacto (Montero – Santa Cruz, Bolivia; teléfonos; email) · registro/aviso SENASAG · redes · copyright.

## Home — secciones (orden)

1. Hero (titular + subtítulo + 2 CTAs).
2. Pilares de valor (3–4 íconos: origen orgánico microbiano, 100% biológico, mejora del suelo, apto para exportación).
3. Categorías de productos (tarjetas que linkean al listado filtrado).
4. Productos destacados (los marcados `featured`: FULL POWER 50, FULL GREEN 100, SEED FORTE 4.0, BIOMAX 43, BIOGUARD).
5. Por qué Green Science / "Living Soil Biotechnology" (tecnología microbiana, sostenibilidad).
6. Franja de cultivos (soya, maíz, arroz, caña, trigo, algodón, girasol, maní, banano…).
7. CTA final de contacto.

## Página Productos

- Encabezado de sección + filtros por categoría (chips).
- Grilla de tarjetas (1/2/3 columnas). Cada tarjeta: imagen/placeholder, badge de categoría, nombre, tagline corto, link "Ver más".

## Detalle de producto (`/productos/[slug]`)

Bloques: nombre + categoría (badge) + tipo · tagline · imagen del envase · descripción · tabla de composición · lista de beneficios (con checks) · cultivos (chips) · instrucciones de uso · dosis · nota de compatibilidad · CTA contacto. Si tiene `registration`, mostrar el N° SENASAG.

## Nosotros

Misión y enfoque "Living Soil Biotechnology"; qué son los bioinsumos de origen orgánico microbiano; beneficios (rendimiento, salud del suelo, control biológico, sin residuos, exportación); ubicación (Montero, Santa Cruz – Bolivia).

## Contacto

Formulario (nombre, email, teléfono, mensaje) + datos directos: teléfonos (+591) 69896583 / 74623363, ubicación Parque Industrial de Montero, botón WhatsApp, email. Mapa embebido opcional.

## i18n

- Archivos `messages/es.json` y `messages/en.json` para toda la UI (nav, botones, secciones, formularios).
- La data de productos ya trae `es`/`en` por campo (ver `04-products-content.md`).
