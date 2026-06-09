# 06 — Prompts para generar bidones / envases (mockups)

Para usar en un flow de generación de imágenes donde **vos cargás la etiqueta como imagen de referencia** y el modelo la aplica sobre el envase.

- 7 productos → **botella de 1 L** (líquido agrícola, HDPE).
- BIO-MULUSK → **bidón / jerrycan de 20 L**.
- BIODYNE 500 → 1 L (línea pecuaria, mismo formato botella).

**Reglas para que salga bien:**
- Pasá la etiqueta como imagen de entrada / referencia (label input) y, si el flow lo permite, marcá "mantener texto / no deformar".
- Fondo blanco/transparente para la web; versión en campo opcional para banners.
- Relación de aspecto sugerida: **3:4 o 1:1** (retrato/cuadrado para fichas de producto).
- Una sola botella, centrada, vista frontal, etiqueta plana y legible hacia la cámara.

---

## PROMPT BASE — Botella 1 L (fondo blanco, para web)

> EN (pegar en el flow):
```
Professional studio product photography of a 1-liter white HDPE agricultural
liquid bottle with a colored screw cap, the provided label wrapped seamlessly
and undistorted around the full cylindrical front body, label text crisp and
fully legible facing the camera, photorealistic, soft even studio lighting,
subtle natural reflections on the plastic, clean pure white background, soft
contact shadow beneath the bottle, centered, front view, high resolution,
commercial e-commerce product shot, 3:4.
```

> Negative prompt:
```
warped text, distorted label, blurry, illegible, double bottle, multiple bottles,
hands, fingers, watermark, logo overlay, text artifacts, melted plastic, low
resolution, busy background, props, clutter, tilted label, wrapping wrinkles on text
```

---

## PROMPT BASE — Bidón 20 L (BIO-MULUSK)

> EN:
```
Professional studio product photography of a 20-liter agricultural plastic
jerry can (rectangular drum with a built-in side handle and a colored screw
cap on top), the provided label applied flat, seamless and undistorted on the
large front face, label text crisp and fully legible facing the camera,
photorealistic, soft even studio lighting, subtle reflections on the plastic,
clean pure white background, soft contact shadow, centered, front three-quarter
view, high resolution, commercial product shot, 3:4.
```

> Negative prompt: (mismo que el de arriba)

---

## Prompts por producto

Tomá el PROMPT BASE correspondiente y, si querés afinar el color del tapón/acento al de cada línea, reemplazá `colored screw cap` por el color indicado. Cargá SIEMPRE la etiqueta de ese producto como referencia.

| Producto | Envase | Tapón / acento sugerido |
|---|---|---|
| FULL POWER 50 | Botella 1 L | tapón **verde lima** |
| FULL GREEN 100 | Botella 1 L | tapón **verde** |
| SEED FORTE 4.0 | Botella 1 L | tapón **marrón / crema** |
| SEED FORTE 3.0 | Botella 1 L | tapón **marrón** |
| BIOMAX 43 | Botella 1 L | tapón **verde oliva** |
| BIOGUARD | Botella 1 L | tapón **naranja** |
| BIODYNE 500 | Botella 1 L | tapón **azul / violeta** |
| BIO-MULUSK | Bidón 20 L | tapón **amarillo** |

Ejemplo afinado (FULL POWER 50):
```
Professional studio product photography of a 1-liter white HDPE agricultural
liquid bottle with a lime-green screw cap, the provided FULL POWER 50 label
wrapped seamlessly and undistorted around the full cylindrical front body,
label text crisp and fully legible, photorealistic, soft studio lighting,
subtle reflections, clean white background, soft contact shadow, centered,
front view, high resolution, e-commerce product shot, 3:4.
```

---

## Variante "en campo" (opcional, para banners/hero)

> EN:
```
Photorealistic product photography of the 1-liter Green Science agricultural
bottle (provided label applied, undistorted, legible) standing on soil at the
edge of a green crop field at golden hour, shallow depth of field with softly
blurred crops in the background, natural warm sunlight, realistic shadows,
commercial agritech advertising style, 16:9.
```

---

## Tips finales
- Si el texto sale deformado, bajá la "creatividad/denoise" del flow y subí el peso de la imagen de referencia (label strength).
- Generá 3–4 variaciones por producto y elegí la de texto más limpio.
- Mantené el mismo ángulo y encuadre en todos para que las fichas de la web se vean uniformes.
- Exportá en PNG con fondo blanco (o transparente si el flow lo permite) y nombrá por slug: `full-power-50.png`, etc. (ver `assets/README.md`).
```
