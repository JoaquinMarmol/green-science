# 04 — Contenido de productos (ES / EN)

Datos extraídos de las etiquetas oficiales de Green Science. Todos son **Grupo biológico: orgánico microbiano**. Compatibles con la mayoría de abonos y plaguicidas del mercado local y con bacterias solubilizadoras (hacer prueba de compatibilidad previa).

> Para Claude Code: modelar `data/products.ts` con este tipado y generar `/productos/[slug]` dinámicamente. Cada campo tiene versión `es` y `en`.

```ts
type Product = {
  slug: string;
  name: string;
  category: 'bioestimulante' | 'biofertilizante' | 'bioinsecticida' | 'biofungicida' | 'tratamiento-semillas' | 'pecuario';
  type: { es: string; en: string };        // p.ej. "Bioestimulante líquido"
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  composition: { name: string; value: string }[];
  benefits: { es: string[]; en: string[] };
  crops: string[];
  usage: { es: string; en: string };
  dose: { es: string; en: string };
  featured?: boolean;
  registration?: string;                    // Reg. SENASAG si aplica
};
```

---

## 1. FULL POWER 50
- **slug:** `full-power-50`
- **categoría:** bioestimulante · **featured: sí**
- **tipo:** ES "Bioestimulante líquido" / EN "Liquid biostimulant"
- **tagline:** ES "Crecimiento rápido, mayor floración y activación radicular" / EN "Fast growth, more flowering and root activation"

**Descripción ES:** FULL POWER 50 es un bioestimulante formulado para favorecer y aprovechar la fijación del nitrógeno atmosférico y estimular la producción de fitohormonas vegetales (giberelinas, auxinas y citoquininas). Su acción promueve el desarrollo radicular, incrementa el tamaño y la cantidad de raíces, y mejora la capacidad de absorción de agua y nutrientes, contribuyendo a una mayor tolerancia de la planta frente a periodos de sequía. Además, facilita la solubilización de nutrientes esenciales como fósforo, potasio y hierro, optimizando su disponibilidad y absorción a través del sistema radicular.

**Descripción EN:** FULL POWER 50 is a biostimulant formulated to promote and harness atmospheric nitrogen fixation and stimulate plant phytohormone production (gibberellins, auxins and cytokinins). It promotes root development, increases root size and number, and improves water and nutrient uptake, helping the plant better tolerate drought periods. It also facilitates the solubilization of essential nutrients such as phosphorus, potassium and iron, optimizing their availability and absorption through the root system.

**Composición:** Azospirillum brasilense (2x10⁸ UFC/ml) 60% · Bradyrhizobium japonicum (2x10⁸ UFC/ml) 30% · Pseudomonas fluorescens (2x10 UFC/ml) 5% · Ingredientes inertes 5% · Ácidos húmicos y fúlvicos (inertes en dilución).

**Beneficios:** ES [Crecimiento rápido, Mayor floración, Activación radicular, Activador de fitohormonas, Solubilizador de nutrientes] / EN [Fast growth, More flowering, Root activation, Phytohormone activator, Nutrient solubilizer]

**Cultivos:** Arroz, Caña de azúcar, Maíz, Soya, Trigo

**Uso ES:** Preparar la dosis recomendada en un envase limpio. Aplicar en etapa vegetativa después de la siembra a los 15 o 20 días. Aplicaciones secuenciales en V3, V5 y R3.
**Uso EN:** Prepare the recommended dose in a clean container. Apply at the vegetative stage 15–20 days after sowing. Sequential applications at V3, V5 and R3.

**Dosis:** Secuencial 1 L/ha

---

## 2. FULL GREEN 100
- **slug:** `full-green-100`
- **categoría:** biofertilizante · **featured: sí**
- **tipo:** ES "Biofertilizante líquido" / EN "Liquid biofertilizer"
- **tagline:** ES "Mayor rendimiento, vigor, color y suelo fértil" / EN "Higher yield, vigor, color and fertile soil"

**Descripción ES:** FULL GREEN 100 es un inoculante y fertilizante microbiano de origen natural, formulado a partir de microorganismos benéficos que mejoran las condiciones del medio donde se aplica. En el suelo contribuye al desplazamiento de microorganismos patógenos y acelera la descomposición de la materia orgánica, favoreciendo el desarrollo y crecimiento de los cultivos. Mejora las propiedades físicas, químicas y biológicas del suelo, incrementa la microflora benéfica, estimula el desarrollo de raicillas y la simbiosis con bacterias fijadoras de nitrógeno, favoreciendo una mayor traslocación y aprovechamiento de nutrientes en la planta.

**Descripción EN:** FULL GREEN 100 is a natural microbial inoculant and fertilizer formulated from beneficial microorganisms that improve the conditions of the medium where it is applied. In the soil it helps displace pathogenic microorganisms and accelerates the decomposition of organic matter, favoring crop development and growth. It improves the physical, chemical and biological properties of the soil, increases beneficial microflora, stimulates rootlet development and symbiosis with nitrogen-fixing bacteria, promoting greater translocation and use of nutrients by the plant.

**Composición:** Azospirillum brasilense spp 15% · Bradyrhizobium japonicum 15% · Pseudomonas fluorescens 5% · Saccharopolyspora spinosa 5% · Bacillus thuringiensis aizawai 5% · Bacillus thuringiensis kurstaki 5% · Metarhizium anisopliae 10% · Beauveria bassiana 10% · Minerales más sustancias inertes 30%.

**Beneficios:** ES [Mayor rendimiento, Vigor y color, Suelo fértil, Activador de rizobacterias, Microflora benéfica] / EN [Higher yield, Vigor and color, Fertile soil, Rhizobacteria activator, Beneficial microflora]

**Cultivos:** Soya, Algodón, Maní, Girasol

**Uso ES:** Preparar la dosis recomendada en un envase limpio. Aplicar en etapa vegetativa después de la siembra en etapas V3, V5, V7, R1 y R3.
**Uso EN:** Prepare the recommended dose in a clean container. Apply at the vegetative stage after sowing at stages V3, V5, V7, R1 and R3.

**Dosis:** 0.5 – 1 L/ha

---

## 3. SEED FORTE 4.0
- **slug:** `seed-forte-4-0`
- **categoría:** tratamiento-semillas · **featured: sí**
- **tipo:** ES "Tratamiento de semillas gramíneas" / EN "Grass (Poaceae) seed treatment"
- **tagline:** ES "Emergencia uniforme, mayor macollaje y raíces más fuertes" / EN "Uniform emergence, more tillering and stronger roots"

**Descripción ES:** SEED FORTE 4.0 es una formulación biológica a base de microorganismos seleccionados, destinada al tratamiento de semillas de la familia Poaceae (gramíneas). Su aplicación contribuye al control biológico de patógenos presentes en la semilla, favoreciendo una implantación inicial segura del cultivo. Actúa interfiriendo en el desarrollo de las principales enfermedades, estimula la producción de rizohormonas, incrementa la germinación, el vigor inicial y el crecimiento más uniforme del tallo y la planta.

**Descripción EN:** SEED FORTE 4.0 is a biological formulation based on selected microorganisms for treating seeds of the Poaceae (grass) family. Its application contributes to the biological control of pathogens present in the seed, favoring a safe initial crop establishment. It interferes with the development of major diseases, stimulates rhizohormone production, and increases germination, initial vigor and more uniform growth of the stem and plant.

**Composición:** Azospirillum brasilense spp 30% · Bradyrhizobium japonicum 20% · Bacillus amyloliquefaciens 5% · Bacillus aryabhatta 5% · Bacillus megaterium 5% · Chromobacterium subtsugae 5% · Gluconacetobacter diazotrophicus 10% · Trichoderma harzianum 10% · Bacillus subtilis 10% · Ácidos húmicos y fúlvicos (inertes en dilución).

**Beneficios:** ES [Emergencia uniforme, Mayor macollaje, Raíces más fuertes, Control de patógenos, Mayor vigor inicial] / EN [Uniform emergence, More tillering, Stronger roots, Pathogen control, Higher initial vigor]

**Cultivos:** Arroz, Caña de azúcar, Maíz, Trigo

**Uso ES:** Preparar la dosis recomendada en un envase limpio. Aplicar directamente sobre la semilla antes de la siembra. Puede utilizarse también en coinoculación, respetando las dosis y recomendaciones técnicas.
**Uso EN:** Prepare the recommended dose in a clean container. Apply directly onto the seed before sowing. May also be used in co-inoculation, respecting doses and technical recommendations.

**Dosis:** 500 ml por cada 100 kg de semilla · 1 L/ha

---

## 4. SEED FORTE 3.0
- **slug:** `seed-forte-3-0`
- **categoría:** tratamiento-semillas
- **tipo:** ES "Tratamiento de semillas leguminosas" / EN "Legume seed treatment"
- **tagline:** ES "Fijación de nitrógeno, mayor nodulación y germinación uniforme" / EN "Nitrogen fixation, more nodulation and uniform germination"

**Descripción ES:** SEED FORTE 3.0 es un bioestimulante líquido formulado a partir de una combinación de microorganismos benéficos, destinado al tratamiento de semillas de la familia Fabaceae y otras especies leguminosas. Su formulación biológica actúa en el control de patógenos presentes en la semilla y en el entorno inmediato, reduciendo el riesgo de generación de resistencias. Activa las fitohormonas, incrementa la porosidad de germinación, mejora el vigor inicial y promueve un crecimiento más uniforme del cultivo, favoreciendo la nodulación radicular y la captación de nitrógeno atmosférico.

**Descripción EN:** SEED FORTE 3.0 is a liquid biostimulant formulated from a combination of beneficial microorganisms for treating seeds of the Fabaceae family and other legume species. Its biological formulation controls pathogens present in the seed and immediate environment, reducing the risk of resistance development. It activates phytohormones, improves germination and initial vigor, and promotes more uniform crop growth, favoring root nodulation and atmospheric nitrogen uptake.

**Composición:** Azospirillum brasilense spp 30% · Bradyrhizobium japonicum spp 30% · Bacillus aryabhatta 5% · Bacillus megaterium 5% · Bacillus subtilis spp 5% · Chromobacterium subtsugae 5% · Trichoderma harzianum 20% · Ácidos húmicos y fúlvicos (inertes en dilución).

**Beneficios:** ES [Fijación de nitrógeno, Mayor nodulación, Germinación uniforme, Activador de fitohormonas, Control de patógenos] / EN [Nitrogen fixation, More nodulation, Uniform germination, Phytohormone activator, Pathogen control]

**Cultivos:** Soya, Algodón, Maní, Girasol

**Uso ES:** Preparar la dosis recomendada en un envase limpio. Aplicar directamente sobre la semilla antes de la siembra. Puede utilizarse también en coinoculación, respetando las dosis y recomendaciones técnicas.
**Uso EN:** Prepare the recommended dose in a clean container. Apply directly onto the seed before sowing. May also be used in co-inoculation, respecting doses and technical recommendations.

**Dosis:** 500 ml por cada 100 kg de semilla · 1 L/ha

---

## 5. BIOMAX 43
- **slug:** `biomax-43`
- **categoría:** bioinsecticida · **featured: sí**
- **tipo:** ES "Bioinsecticida líquido" / EN "Liquid bioinsecticide"
- **tagline:** ES "Control total de plagas, reacción rápida, 100% biológico" / EN "Total pest control, fast action, 100% biological"

**Descripción ES:** BIOMAX 43 es un bioinsecticida formulado a partir de microorganismos entomopatógenos. Su mecanismo de acción se basa en la formación de cristales proteicos durante la fase estacionaria de esporulación. Al ser ingerido por el insecto objetivo, el producto provoca alteraciones fisiológicas que derivan en debilitamiento progresivo, interrupción de la alimentación, reducción de la reproducción y, finalmente, la muerte del insecto. La aplicación de estos microorganismos vivos contribuye además a la solubilización de nutrientes, favoreciendo la sanidad del cultivo y reduciendo la incidencia de plagas de manera biológica y sostenible.

**Descripción EN:** BIOMAX 43 is a bioinsecticide formulated from entomopathogenic microorganisms. Its mechanism is based on the formation of protein crystals during the stationary sporulation phase. Once ingested by the target insect, it causes physiological alterations leading to progressive weakening, feeding interruption, reduced reproduction and, ultimately, the insect's death. These living microorganisms also help solubilize nutrients, favoring crop health and reducing pest incidence in a biological and sustainable way.

**Composición:** Bacillus thuringiensis kurstaki 10% · Bacillus thuringiensis aizawai 10% · Chromobacterium subtsugae 20% · Saccharopolyspora spinosa 20% · Beauveria bassiana 10% · Metarhizium anisopliae 10% · Ácidos húmicos 20% (ácidos húmicos y fúlvicos – inertes en dilución).

**Beneficios:** ES [Control total de plagas, Reacción rápida, 100% biológico, Control de orugas/chinches/mosca blanca/trips/ácaros] / EN [Total pest control, Fast action, 100% biological, Controls caterpillars/stink bugs/whitefly/thrips/mites]

**Cultivos:** Arroz, Caña de azúcar, Maíz, Soya, Trigo

**Uso ES:** Preparar la dosis recomendada en un envase limpio. Aplicar en etapa vegetativa después de la siembra a los 30 días. Se recomiendan aplicaciones secuenciales en V3, V5, V7, R1 y R3.
**Uso EN:** Prepare the recommended dose in a clean container. Apply at the vegetative stage 30 days after sowing. Sequential applications recommended at V3, V5, V7, R1 and R3.

**Dosis:** Secuencial 1 L/ha

---

## 6. BIOGUARD
- **slug:** `bioguard`
- **categoría:** biofungicida · **featured: sí**
- **tipo:** ES "Biofungicida multisitio" / EN "Multi-site biofungicide"
- **tagline:** ES "Protección total, acción preventiva, amplio espectro" / EN "Total protection, preventive action, broad spectrum"

**Descripción ES:** BIOGUARD es la combinación de 3 microorganismos cuyo modo de acción permite un eficiente y excelente biocontrol de patógenos en el follaje. Se han seleccionado especies que se complementan entre sí: una coloniza el sustrato rápidamente desplazando a los patógenos, y la otra produce metabolitos que controlan a los patógenos sobrevivientes al primer ataque. Esta característica asegura un biocontrol secuencial y eficiente, produciendo sustancias antifúngicas que inhiben el crecimiento de los hongos patógenos. Puede estimular las defensas naturales de las plantas haciéndolas más resistentes a las enfermedades fúngicas.

**Descripción EN:** BIOGUARD combines 3 microorganisms whose mode of action delivers efficient, excellent biocontrol of foliar pathogens. The selected species complement each other: one rapidly colonizes the substrate, displacing pathogens, while the other produces metabolites that control pathogens surviving the first attack. This ensures sequential, efficient biocontrol, producing antifungal substances that inhibit the growth of pathogenic fungi. It can stimulate the plant's natural defenses, making it more resistant to fungal diseases.

**Composición:** Trichoderma spp 15% · Bacillus subtilis spp 30% · Bacillus pumilus 30% · Ingredientes inertes 25%.

**Beneficios:** ES [Protección total, Acción preventiva, Amplio espectro, Biocontrol secuencial, Estimula defensas naturales] / EN [Total protection, Preventive action, Broad spectrum, Sequential biocontrol, Stimulates natural defenses]

**Cultivos:** Arroz, Caña de azúcar, Maíz, Soya, Trigo

**Uso ES:** Preparar la dosis recomendada en un envase limpio. Aplicar en etapa vegetativa después de la siembra a los 25 días. Realizar aplicaciones en V3, V5, V7, R1 y R3.
**Uso EN:** Prepare the recommended dose in a clean container. Apply at the vegetative stage 25 days after sowing. Apply at V3, V5, V7, R1 and R3.

**Dosis:** Secuencial 1 L/ha

---

## 7. BIO-MULUSK (insect gs)
- **slug:** `bio-mulusk`
- **categoría:** bioinsecticida
- **tipo:** ES "Bioinsecticida líquido" / EN "Liquid bioinsecticide"
- **tagline:** ES "Control de caracol, mejora la producción, sin residuos para exportación" / EN "Snail control, better production, no residues for export"
- **registro:** Reg. SENASAG N° 07-16428

**Descripción ES:** BIO-MULUSK está indicado para el control de moluscos (caracoles, cochinilla, pulgón negro) en cultivos de plátano/banano y cítricos. Es un producto que inmoviliza al caracol y lo esteriliza, impidiendo su reproducción y reduciendo significativamente la cantidad de caracoles en el cultivo. No deja residuos tóxicos, lo que permite su aplicación en cualquier momento del cultivo y favorece la exportación del banano.

**Descripción EN:** BIO-MULUSK is intended for the control of mollusks (snails, mealybug, black aphid) in banana/plantain and citrus crops. It immobilizes and sterilizes the snail, preventing its reproduction and significantly reducing snail populations in the crop. It leaves no toxic residues, allowing application at any point in the crop cycle and supporting banana export.

**Composición:** Beauveria bassiana 10% · Metarhizium anisopliae 10% · Pseudomonas fluorescens 10% · Extractos orgánicos atrayentes (c.s.p.).

**Beneficios:** ES [Control de caracol, Mejora la producción, No deja residuos para exportación, Control de cochinillas/orugas/picudo negro] / EN [Snail control, Improves production, No residues for export, Controls mealybugs/caterpillars/black weevil]

**Cultivos:** Banano, Piña, Palta, Café, Coca

**Uso ES:** Preparar la dosis recomendada en un envase limpio. Aplicar en la etapa vegetativa después de la siembra a los 30 días. Se recomienda aplicar con buena humedad relativa y en días nublados. Aplicaciones en V3, V5, V7, R1 y R3.
**Uso EN:** Prepare the recommended dose in a clean container. Apply at the vegetative stage 30 days after sowing. Best applied under good relative humidity and on cloudy days. Apply at V3, V5, V7, R1 and R3.

**Dosis:** 3 litros secuencial

---

## 8. BIODYNE 500
- **slug:** `biodyne-500`
- **categoría:** pecuario
- **tipo:** ES "Bioactivador · Probiótico · Agua" / EN "Bioactivator · Probiotic · Water"
- **tagline:** ES "Mejora biológica, aguas residuales y línea pecuaria" / EN "Biological improvement, wastewater and livestock line"

**Descripción ES:** BIODYNE 500 es un producto biológico formado a partir de microorganismos anaeróbicos que obtienen su energía mediante la descomposición de la materia orgánica. Su acción contribuye al control biológico de patógenos, protege el sistema radicular y mejora la resistencia de las plantas frente al estrés abiótico como sequía y salinidad, favoreciendo el desarrollo radicular, la eficiencia fotosintética y el rendimiento de los cultivos. En aplicaciones pecuarias, mejora la digestión y la eficiencia de conversión alimenticia, favorece la ganancia de peso y contribuye al fortalecimiento del sistema inmunológico, además de mejorar la sanidad animal.

**Descripción EN:** BIODYNE 500 is a biological product made from anaerobic microorganisms that obtain energy by decomposing organic matter. It contributes to the biological control of pathogens, protects the root system and improves plant resistance to abiotic stress such as drought and salinity, favoring root development, photosynthetic efficiency and crop yield. In livestock applications, it improves digestion and feed conversion efficiency, supports weight gain and strengthens the immune system, while improving animal health.

**Composición:** Bacterias ácido lácticas spp 20% · Bacterias actinomicetos spp 30% · Hongos Saccharomyces spp 30% · Ingredientes inertes 20%.

**Beneficios:** ES [Mejora biológica, Tratamiento de aguas residuales, Línea pecuaria (bovino y porcino), Mejor digestión y conversión, Fortalece el sistema inmune] / EN [Biological improvement, Wastewater treatment, Livestock line (cattle & swine), Better digestion and conversion, Strengthens the immune system]

**Cultivos / Aplicación:** Comederos, Bebederos, Instalaciones; aguas residuales; ganado bovino y porcino.

**Uso ES:** Preparar la dosis recomendada en un envase limpio. Para aplicaciones destinadas al consumo animal, consultar previamente con un técnico especializado. Comederos: 2–3 L de activado por mochila de 20 L. Bebederos: 10 ml de activado para 1000 L de agua. Instalaciones: 5 L del activado por mochila de 20 L.
**Uso EN:** Prepare the recommended dose in a clean container. For animal-consumption applications, consult a specialized technician first. Feeders: 2–3 L of activated product per 20 L tank. Drinkers: 10 ml of activated product per 1000 L of water. Facilities: 5 L of activated product per 20 L tank.

**Dosis:** Según aplicación (ver uso)

---

## Notas legales/comunes (mostrar en detalle de producto y/o footer)
- Titular de registro y formulador: **GREEN SCIENCE** — Parque Industrial de Montero, Santa Cruz, Bolivia.
- Compatibilidad: con la mayoría de abonos y plaguicidas del mercado local; hacer prueba previa de compatibilidad antes de mezclar.
- Almacenamiento: envase original cerrado, lugar fresco, ventilado y bajo sombra; fuera del alcance de niños.
- Periodo de carencia: no correspondiente por la naturaleza del producto (en la mayoría).
- Consultas por intoxicaciones (Bolivia): Hospital Japonés 800-10-6966.
