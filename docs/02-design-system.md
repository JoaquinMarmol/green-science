# 02 — Sistema de diseño (mobile-first)

Objetivo: estética profesional de agritech/biotecnología, **diseñada primero para móvil**, limpia y con aire. Sensación de referencia: sitios modernos de bioinsumos (cómo se ve y fluye naturartech.com en móvil), con identidad propia Green Science.

## Principios

1. **Mobile-first real:** diseñar a ~375px, luego escalar. Tipografía y targets táctiles cómodos (mín. 44px).
2. **Limpio y aireado:** mucho espacio en blanco, secciones bien separadas, una idea por bloque.
3. **Verde con propósito:** el color de marca guía la atención (CTAs, acentos), no satura.
4. **Confianza:** datos reales, composiciones, registro SENASAG, fotografía de campo.
5. **Velocidad:** liviano, imágenes optimizadas, animaciones sutiles.

## Tokens (para `tailwind.config.ts`)

```ts
// theme.extend
colors: {
  lime:    { DEFAULT: '#7AC943' },
  forest:  { DEFAULT: '#2E7D32', deep: '#1B5E20' },
  navy:    { DEFAULT: '#15356A' },
  ink:     { DEFAULT: '#1C2421' },
  mute:    { DEFAULT: '#5B6B61' },
  cream:   { DEFAULT: '#F7FAF6' },
  night:   { DEFAULT: '#0B0F0C' },
},
fontFamily: {
  display: ['Sora', 'Poppins', 'sans-serif'],
  body:    ['Inter', 'sans-serif'],
},
borderRadius: { xl: '1rem', '2xl': '1.5rem' },
```

Degradado de marca (utilidad): `bg-gradient-to-br from-lime via-forest to-forest-deep`.

## Escala tipográfica (móvil → desktop)

| Token | Móvil | Desktop | Uso |
|-------|-------|---------|-----|
| Display | 32px / 700 | 56px | Hero |
| H1 | 28px | 40px | Títulos de página |
| H2 | 22px | 32px | Títulos de sección |
| H3 | 18px | 22px | Tarjetas |
| Body | 16px | 17px | Cuerpo |
| Small | 14px | 14px | Captions, labels |

Interlineado cuerpo 1.6. Títulos 1.15.

## Espaciado y layout

- Contenedor máx. 1200px, padding lateral 20px en móvil, 32px+ en desktop.
- Separación entre secciones: 64px móvil / 96–120px desktop.
- Grilla de productos: 1 col móvil → 2 col tablet → 3 col desktop.
- Bordes redondeados generosos (rounded-2xl) en tarjetas e imágenes.

## Componentes base

- **Button:** primario (verde sólido/degradado, texto blanco), secundario (borde verde, texto verde), ghost. Estados hover/active/focus visibles.
- **Container / Section:** wrappers de ancho y padding consistentes.
- **Card:** tarjeta de producto (imagen, badge de categoría, nombre, 1 línea, link). Hover sutil (elevación + acento).
- **Badge:** etiqueta de categoría con color por tipo de producto.
- **Navbar móvil:** header fijo, logo, hamburguesa → menú overlay full-screen con links grandes, selector ES/EN y CTA WhatsApp.
- **Footer:** logo, navegación, datos de contacto, registro SENASAG, redes, copyright.
- **LanguageSwitcher:** toggle ES/EN.
- **SectionHeading:** eyebrow (label pequeño en verde) + título + subtítulo.

## Color por categoría de producto (badges)

- Bioestimulante → verde lima
- Biofertilizante → verde bosque
- Bioinsecticida → ámbar/oliva
- Biofungicida → naranja tierra
- Tratamiento de semillas → marrón
- Línea pecuaria / probiótico → azul/violeta

(Coherente con los colores de las etiquetas reales de cada línea.)

## Animaciones

- Fade-in + leve subida (16px) al entrar en viewport (framer-motion, `whileInView`).
- Hover en tarjetas: elevación suave y borde/acento verde.
- Transiciones 200–300ms, easing suave. Respetar `prefers-reduced-motion`.

## Hero (referencia mobile)

- Fondo: degradado de marca o foto de cultivo con overlay verde oscuro.
- Logo/símbolo, titular en 2–3 líneas, subtítulo corto, 2 botones apilados en móvil.
- Indicador de scroll opcional.

## Accesibilidad

- Contraste AA mínimo (texto sobre verde: usar verde oscuro o blanco según fondo).
- Foco visible en todos los interactivos.
- `alt` descriptivo, jerarquía de headings correcta, navegación por teclado en el menú móvil.
