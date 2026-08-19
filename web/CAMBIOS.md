# Rediseño de la web — qué se hizo y cómo verlo

## Cómo levantarla

```bash
cd web
npm run dev
```

Después abrí:

- `http://localhost:3000/es` — home
- `http://localhost:3000/es/cultivos` — explorador de planes por cultivo (lo nuevo)

## Archivos nuevos

| Archivo | Qué hace |
|---|---|
| `src/data/crops.ts` | Los 22 cultivos con sus etapas fenológicas, productos y dosis. Extraído de los planes de manejo en PDF, sin inventar nada. |
| `src/components/crops/CropTimeline.tsx` | La línea de tiempo interactiva. Íconos SVG que cambian según el momento del ciclo, transiciones con framer-motion, navegación anterior/siguiente. |
| `src/components/crops/CropsExplorer.tsx` | Filtros por categoría (extensivos, frutales, hortícolas, industriales) y selección de cultivo. |
| `src/app/[locale]/cultivos/page.tsx` | La página `/cultivos`. |
| `src/components/home/CropsPlanner.tsx` | Versión compacta del explorador para la home, sobre fondo oscuro. |
| `src/components/home/ProcessSection.tsx` | Los tres pasos de trabajo: diagnóstico → plan → acompañamiento. |

## Archivos modificados

- `src/app/[locale]/page.tsx` — se agregaron `ProcessSection` y `CropsPlanner` al orden de la home.
- `src/components/home/Hero.tsx` — badge con punto pulsante, CTA principal ahora lleva a `/cultivos`, botón en verde lima.
- `src/components/layout/Header.tsx` — "Cultivos" en el menú.
- `messages/es.json` y `messages/en.json` — textos del hero reescritos con el mensaje de BioAgro (diagnóstico, fórmula dirigida, resultado documentado) y nueva sección `process`.

## Lo que falta

1. **Revisar cómo se ve.** No pude verificarlo renderizado: el entorno donde trabajo no llega a compilar y servir Next dentro de su límite de tiempo. TypeScript compila sin errores (`npx tsc --noEmit` pasa limpio), pero el ajuste fino visual —espaciados, ritmo de animaciones, cómo respira en mobile— necesita verlo en pantalla.
2. **Traducir `/cultivos`.** Los textos de esa página están escritos directo en español; en inglés se ven en español. Falta pasarlos a `messages/`.
3. **Página por cultivo.** Hoy el explorador es una sola página con selector. Se puede abrir `/cultivos/[slug]` para SEO, con la infografía descargable y el caso de éxito de ese cultivo.
4. **Conectar con los casos.** Cada cultivo podría linkear a su caso real en `/casos`.

## Nota sobre el contenido

Los datos de `crops.ts` salieron de los generadores de los planes de manejo (`_generadores/`). Si cambiás un plan en PDF, hay que regenerar ese archivo para que la web quede sincronizada.
