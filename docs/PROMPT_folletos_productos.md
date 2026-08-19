# Prompt general para generar los folletos de producto con IA (Flow)

Cómo usarlo: pegá el **PROMPT BASE**, reemplazá lo que está entre `[ ]` con los datos del producto (abajo está la ficha de los 8) y **subí la foto del bidón** como referencia para que la use tal cual.

> Importante: el bidón NO se genera con IA — se usa la foto real del producto. En el prompt se le pide que la coloque sin modificar la etiqueta.

---

## PROMPT BASE

```
Professional agricultural product one-pager (A4 portrait, 1654x2339 px, 200 dpi), clean modern corporate design, flat vector style, generous white space, print-ready.

BRAND: BioAgroSolutions — Línea Green Science. Biological agricultural inputs.
COLOR: deep forest green (#123A22) as the main color, lime green (#96C428) as accent, off-white background (#FAFBF9), dark grey text. Accent color for THIS product: [COLOR DEL PRODUCTO].
TYPOGRAPHY: Poppins (or a clean geometric sans). Bold for headings, regular for body. All text in SPANISH, spelled exactly as written below.

LAYOUT, top to bottom:
1) TOP BAND (about 15% of the height) in the product accent color with a subtle gradient. On the left, the BioAgroSolutions logo and the Green Science logo. On the right, small Argentina and Bolivia flags. Below the logos, in large bold white type: "[NOMBRE DEL PRODUCTO]". Underneath, smaller and in light green: "[TIPO DE PRODUCTO]".

2) HERO SECTION, two columns:
   - LEFT: the attached product photo (the container / bidón) on a white rounded card with a thin border and a colored top bar. THE BOTTLE MUST BE LARGE and fill the card, centered, with a small even margin. Do not crop, distort, redraw or restyle the label — use the photo as provided.
   - RIGHT: a large bold headline in dark green: "[CLAIM]". Below it, a short paragraph: "[PITCH]". Below that, the small heading "BENEFICIOS" and a list of 4 items, each with a lime check mark: [BENEFICIOS].

3) THREE EQUAL CARDS in a row, white with rounded corners and a colored top bar, each with a simple line icon inside a circle:
   - "DOSIS" — [DOSIS]
   - "CULTIVOS" — [CULTIVOS]
   - "CUÁNDO APLICAR" — [MOMENTO]

4) FULL-WIDTH STRIP, light tint of the accent color: heading "CONSORCIO DE MICROORGANISMOS" and the text: [COMPOSICIÓN].

5) FULL-WIDTH PRICE BAR, white with a colored border: on the left "PRECIO DE CATÁLOGO" and under it, in small grey, "Consultá descuentos por volumen". On the right, very large and bold: "[PRECIO] /L".

6) DARK GREEN CALL-TO-ACTION BLOCK with rounded corners, centered text:
   line 1 in lime: "100% biológico · Sin residuos · Sin carencia"
   line 2 in white: "Pedí tu asesoramiento y plan de manejo"
   line 3 large and bold in white: "WhatsApp +54 9 2262 48-7998"

7) THIN FOOTER: left "BioAgroSolutions · Línea Green Science", right "Argentina · Bolivia".

STYLE RULES: corporate, sober and trustworthy — agronomic, not childish. No stock photos of farmers, no clip art, no fake seals or awards. Perfect Spanish spelling with correct accents. Everything aligned to a clean grid with even margins.
```

**Negative prompt:**
```
misspelled text, gibberish text, distorted label, redrawn bottle, cropped bottle, small bottle, extra logos, watermark, stock photo people, clip art, cluttered layout, neon colors, drop shadows everywhere, fake awards, wrong accents
```

---

## Datos de cada producto (para reemplazar en el prompt)

### FULL POWER 50
- **COLOR:** verde lima · **TIPO:** Bioestimulante líquido
- **CLAIM:** Más raíz, más vigor, más rendimiento
- **PITCH:** Fija nitrógeno del aire y activa las fitohormonas de la planta. Multiplica y alarga las raíces, para que el cultivo absorba más agua y nutrientes y aguante mejor la seca.
- **BENEFICIOS:** Crecimiento rápido y más floración · Raíces más largas y abundantes · Más tolerancia al estrés hídrico · Solubiliza fósforo, potasio y hierro
- **DOSIS:** 1 L/ha secuencial · **CULTIVOS:** Todos los cultivos · **MOMENTO:** Vegetativo, 15–20 días post siembra (V3, V5, R3)
- **COMPOSICIÓN:** Azospirillum brasilense 60% · Bradyrhizobium japonicum 30% · Pseudomonas fluorescens 5% · Ácidos húmicos y fúlvicos.
- **PRECIO:** US$ 16,50

### FULL GREEN 100
- **COLOR:** verde medio · **TIPO:** Biofertilizante líquido
- **CLAIM:** Suelo vivo, cultivo fuerte
- **PITCH:** Inoculante microbiano que devuelve la vida al suelo: acelera la descomposición de la materia orgánica, desplaza patógenos y multiplica la microflora benéfica.
- **BENEFICIOS:** Más rendimiento, vigor y color · Suelo más fértil campaña tras campaña · Mejor aprovechamiento de nutrientes · Más raicillas y fijación de nitrógeno
- **DOSIS:** 0,5 – 1 L/ha · **CULTIVOS:** Todos los cultivos · **MOMENTO:** Vegetativo secuencial (V3, V5, V7, R1, R3)
- **COMPOSICIÓN:** Azospirillum · Bradyrhizobium · Pseudomonas · Saccharopolyspora · Bacillus thuringiensis · Metarhizium · Beauveria · minerales.
- **PRECIO:** US$ 18,00

### SEED FORTE 4.0
- **COLOR:** dorado / ocre · **TIPO:** Tratamiento de semillas · Gramíneas
- **CLAIM:** El arranque define la campaña
- **PITCH:** Tratamiento biológico para semillas de gramíneas. Protege la semilla de los patógenos y estimula la germinación, el vigor inicial y el macollaje desde el primer día.
- **BENEFICIOS:** Emergencia pareja y uniforme · Mayor macollaje · Raíces más fuertes desde la semilla · Controla patógenos de la semilla
- **DOSIS:** 500 ml / 100 kg de semilla · **CULTIVOS:** Arroz, maíz, trigo, caña, sorgo, cebada · **MOMENTO:** Sobre la semilla, antes de sembrar
- **COMPOSICIÓN:** Azospirillum 30% · Bradyrhizobium 20% · Gluconacetobacter 10% · Trichoderma harzianum 10% · Bacillus spp. · Chromobacterium.
- **PRECIO:** US$ 45,50

### SEED FORTE 3.0
- **COLOR:** dorado / ocre · **TIPO:** Tratamiento de semillas · Leguminosas
- **CLAIM:** Más nódulos, más nitrógeno
- **PITCH:** Tratamiento biológico para semillas de leguminosas. Favorece la nodulación y la fijación de nitrógeno atmosférico, con una implantación pareja y protegida.
- **BENEFICIOS:** Mayor nodulación radicular · Fijación de nitrógeno del aire · Germinación uniforme · Controla patógenos de la semilla
- **DOSIS:** 500 ml / 100 kg de semilla · **CULTIVOS:** Soya, poroto, maní, arveja, alfalfa · **MOMENTO:** Sobre la semilla, antes de sembrar
- **COMPOSICIÓN:** Azospirillum 30% · Bradyrhizobium 30% · Trichoderma harzianum 20% · Bacillus spp. 15% · Chromobacterium subtsugae 5%.
- **PRECIO:** US$ 45,50

### BIOMAX 43
- **COLOR:** verde oliva · **TIPO:** Bioinsecticida líquido
- **CLAIM:** Control de plagas sin residuos
- **PITCH:** Consorcio de bacterias y hongos entomopatógenos con varios modos de acción. El insecto lo ingiere o lo toma por contacto: deja de comer, no se reproduce y muere.
- **BENEFICIOS:** Orugas, chinches, trips y ácaros · Actúa por ingestión y contacto · Sin residuos tóxicos ni carencia · Cuida la fauna benéfica
- **DOSIS:** 1 L/ha secuencial · **CULTIVOS:** Todos los cultivos · **MOMENTO:** Al detectar la plaga · cada 10–15 días
- **COMPOSICIÓN:** Chromobacterium 20% · Saccharopolyspora spinosa 20% · Bt kurstaki y aizawai 20% · Beauveria 10% · Metarhizium 10%.
- **PRECIO:** US$ 20,00

### BIOGUARD
- **COLOR:** naranja · **TIPO:** Biofungicida multisitio
- **CLAIM:** Prevención de hongos de amplio espectro
- **PITCH:** Coloniza el follaje antes que el hongo y produce sustancias antifúngicas. Biocontrol secuencial que además despierta las defensas naturales de la planta.
- **BENEFICIOS:** Preventivo de amplio espectro · Protege flor, hoja y fruto · Estimula las defensas de la planta · Sin residuos ni período de carencia
- **DOSIS:** 1 L/ha secuencial · **CULTIVOS:** Todos los cultivos · **MOMENTO:** Preventivo, antes de la presión · cada 10–14 días
- **COMPOSICIÓN:** Bacillus subtilis 30% · Bacillus pumilus 30% · Trichoderma spp. 15% · ingredientes inertes 25%.
- **PRECIO:** US$ 21,50

### BIO-MULUSK
- **COLOR:** verde oliva · **TIPO:** Bioinsecticida · Moluscos
- **CLAIM:** Adiós al caracol, sin veneno
- **PITCH:** Controla caracoles, babosas, cochinilla y pulgón negro. Los extractos atrayentes acercan la plaga al producto, que la inmoviliza y la esteriliza.
- **BENEFICIOS:** Corta la reproducción del caracol · Reduce la población progresivamente · Sin residuos: apto exportación · También cochinilla y pulgón negro
- **DOSIS:** 3 L secuencial · **CULTIVOS:** Banano, cítricos, hortalizas, frutales · **MOMENTO:** Con humedad y días nublados o al atardecer
- **COMPOSICIÓN:** Beauveria bassiana 10% · Metarhizium anisopliae 10% · Pseudomonas fluorescens 10% · extractos orgánicos atrayentes.
- **PRECIO:** US$ 20,00

### BIODYNE 500
- **COLOR:** azul · **TIPO:** Bioactivador · Probiótico
- **CLAIM:** Recupera el suelo y el sistema
- **PITCH:** Probiótico de microorganismos que descomponen la materia orgánica y reequilibran el medio. Sirve para recuperar suelos y también para agua, instalaciones y hacienda.
- **BENEFICIOS:** Recupera suelos degradados · Más tolerancia a sequía y salinidad · Mejor digestión y ganancia de peso · Sanea aguas e instalaciones
- **DOSIS:** Suelo 5–20 L/ha · Bebederos 1 L/1.000 L · **CULTIVOS:** Suelo, aguas, bovinos y porcinos · **MOMENTO:** Presiembra, postcosecha o según uso pecuario
- **COMPOSICIÓN:** Actinomicetos 30% · Saccharomyces 30% · bacterias ácido lácticas 20% · ingredientes inertes 20%.
- **PRECIO:** US$ 13,00

---

## Consejos para que salga bien

- **Subí siempre la foto del bidón** (están en `assets/productos/`). Si no, la IA va a inventar un envase con una etiqueta falsa.
- Pedí explícitamente que el bidón sea **grande y centrado**: es el error más común, lo dibujan chiquito.
- Si el texto sale con errores de ortografía o sin tildes, generá 2–3 variaciones o pedí la pieza **sin texto** y sumá los textos después.
- Para que los 8 folletos sean una familia, generá todos con el mismo prompt y cambiá solo el color y los datos.
- Los folletos ya armados (`folletos/`) sirven como referencia visual: podés adjuntarlos al prompt como ejemplo de estilo.
