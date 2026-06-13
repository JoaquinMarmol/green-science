/**
 * Catálogo Green Science — datos extraídos de las etiquetas oficiales
 * (ver docs/04-products-content.md). NO inventar: todo proviene de esa fuente.
 * Todos los productos son de Grupo biológico: origen orgánico microbiano.
 */

export type ProductCategory =
  | 'bioestimulante'
  | 'biofertilizante'
  | 'bioinsecticida'
  | 'biofungicida'
  | 'tratamiento-semillas'
  | 'pecuario';

export type Localized = { es: string; en: string };
export type LocalizedList = { es: string[]; en: string[] };
export type CompositionItem = { name: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  type: Localized;
  tagline: Localized;
  description: Localized;
  composition: CompositionItem[];
  benefits: LocalizedList;
  crops: string[];
  usage: Localized;
  dose: Localized;
  /** Precio en USD por litro */
  price?: number;
  featured?: boolean;
  registration?: string;
};

export const products: Product[] = [
  {
    slug: 'full-power-50',
    name: 'FULL POWER 50',
    category: 'bioestimulante',
    featured: true,
    type: { es: 'Bioestimulante líquido', en: 'Liquid biostimulant' },
    tagline: {
      es: 'Crecimiento rápido, mayor floración y activación radicular',
      en: 'Fast growth, more flowering and root activation',
    },
    description: {
      es: 'FULL POWER 50 es un bioestimulante formulado para favorecer y aprovechar la fijación del nitrógeno atmosférico y estimular la producción de fitohormonas vegetales (giberelinas, auxinas y citoquininas). Su acción promueve el desarrollo radicular, incrementa el tamaño y la cantidad de raíces, y mejora la capacidad de absorción de agua y nutrientes, contribuyendo a una mayor tolerancia de la planta frente a periodos de sequía. Además, facilita la solubilización de nutrientes esenciales como fósforo, potasio y hierro, optimizando su disponibilidad y absorción a través del sistema radicular.',
      en: 'FULL POWER 50 is a biostimulant formulated to promote and harness atmospheric nitrogen fixation and stimulate plant phytohormone production (gibberellins, auxins and cytokinins). It promotes root development, increases root size and number, and improves water and nutrient uptake, helping the plant better tolerate drought periods. It also facilitates the solubilization of essential nutrients such as phosphorus, potassium and iron, optimizing their availability and absorption through the root system.',
    },
    composition: [
      { name: 'Azospirillum brasilense (2x10⁸ UFC/ml)', value: '60%' },
      { name: 'Bradyrhizobium japonicum (2x10⁸ UFC/ml)', value: '30%' },
      { name: 'Pseudomonas fluorescens (2x10 UFC/ml)', value: '5%' },
      { name: 'Ingredientes inertes', value: '5%' },
      { name: 'Ácidos húmicos y fúlvicos', value: 'inertes en dilución' },
    ],
    benefits: {
      es: ['Crecimiento rápido', 'Mayor floración', 'Activación radicular', 'Activador de fitohormonas', 'Solubilizador de nutrientes'],
      en: ['Fast growth', 'More flowering', 'Root activation', 'Phytohormone activator', 'Nutrient solubilizer'],
    },
    crops: ['Arroz', 'Caña de azúcar', 'Maíz', 'Soya', 'Trigo'],
    usage: {
      es: 'Preparar la dosis recomendada en un envase limpio. Aplicar en etapa vegetativa después de la siembra a los 15 o 20 días. Aplicaciones secuenciales en V3, V5 y R3.',
      en: 'Prepare the recommended dose in a clean container. Apply at the vegetative stage 15–20 days after sowing. Sequential applications at V3, V5 and R3.',
    },
    dose: { es: 'Secuencial 1 L/ha', en: 'Sequential 1 L/ha' },
    price: 21,
  },
  {
    slug: 'full-green-100',
    name: 'FULL GREEN 100',
    category: 'biofertilizante',
    featured: true,
    type: { es: 'Biofertilizante líquido', en: 'Liquid biofertilizer' },
    tagline: {
      es: 'Mayor rendimiento, vigor, color y suelo fértil',
      en: 'Higher yield, vigor, color and fertile soil',
    },
    description: {
      es: 'FULL GREEN 100 es un inoculante y fertilizante microbiano de origen natural, formulado a partir de microorganismos benéficos que mejoran las condiciones del medio donde se aplica. En el suelo contribuye al desplazamiento de microorganismos patógenos y acelera la descomposición de la materia orgánica, favoreciendo el desarrollo y crecimiento de los cultivos. Mejora las propiedades físicas, químicas y biológicas del suelo, incrementa la microflora benéfica, estimula el desarrollo de raicillas y la simbiosis con bacterias fijadoras de nitrógeno, favoreciendo una mayor traslocación y aprovechamiento de nutrientes en la planta.',
      en: 'FULL GREEN 100 is a natural microbial inoculant and fertilizer formulated from beneficial microorganisms that improve the conditions of the medium where it is applied. In the soil it helps displace pathogenic microorganisms and accelerates the decomposition of organic matter, favoring crop development and growth. It improves the physical, chemical and biological properties of the soil, increases beneficial microflora, stimulates rootlet development and symbiosis with nitrogen-fixing bacteria, promoting greater translocation and use of nutrients by the plant.',
    },
    composition: [
      { name: 'Azospirillum brasilense spp', value: '15%' },
      { name: 'Bradyrhizobium japonicum', value: '15%' },
      { name: 'Pseudomonas fluorescens', value: '5%' },
      { name: 'Saccharopolyspora spinosa', value: '5%' },
      { name: 'Bacillus thuringiensis aizawai', value: '5%' },
      { name: 'Bacillus thuringiensis kurstaki', value: '5%' },
      { name: 'Metarhizium anisopliae', value: '10%' },
      { name: 'Beauveria bassiana', value: '10%' },
      { name: 'Minerales más sustancias inertes', value: '30%' },
    ],
    benefits: {
      es: ['Mayor rendimiento', 'Vigor y color', 'Suelo fértil', 'Activador de rizobacterias', 'Microflora benéfica'],
      en: ['Higher yield', 'Vigor and color', 'Fertile soil', 'Rhizobacteria activator', 'Beneficial microflora'],
    },
    crops: ['Soya', 'Algodón', 'Maní', 'Girasol'],
    usage: {
      es: 'Preparar la dosis recomendada en un envase limpio. Aplicar en etapa vegetativa después de la siembra en etapas V3, V5, V7, R1 y R3.',
      en: 'Prepare the recommended dose in a clean container. Apply at the vegetative stage after sowing at stages V3, V5, V7, R1 and R3.',
    },
    dose: { es: '0.5 – 1 L/ha', en: '0.5 – 1 L/ha' },
    price: 24,
  },
  {
    slug: 'seed-forte-4-0',
    name: 'SEED FORTE 4.0',
    category: 'tratamiento-semillas',
    featured: true,
    type: { es: 'Tratamiento de semillas gramíneas', en: 'Grass (Poaceae) seed treatment' },
    tagline: {
      es: 'Emergencia uniforme, mayor macollaje y raíces más fuertes',
      en: 'Uniform emergence, more tillering and stronger roots',
    },
    description: {
      es: 'SEED FORTE 4.0 es una formulación biológica a base de microorganismos seleccionados, destinada al tratamiento de semillas de la familia Poaceae (gramíneas). Su aplicación contribuye al control biológico de patógenos presentes en la semilla, favoreciendo una implantación inicial segura del cultivo. Actúa interfiriendo en el desarrollo de las principales enfermedades, estimula la producción de rizohormonas, incrementa la germinación, el vigor inicial y el crecimiento más uniforme del tallo y la planta.',
      en: 'SEED FORTE 4.0 is a biological formulation based on selected microorganisms for treating seeds of the Poaceae (grass) family. Its application contributes to the biological control of pathogens present in the seed, favoring a safe initial crop establishment. It interferes with the development of major diseases, stimulates rhizohormone production, and increases germination, initial vigor and more uniform growth of the stem and plant.',
    },
    composition: [
      { name: 'Azospirillum brasilense spp', value: '30%' },
      { name: 'Bradyrhizobium japonicum', value: '20%' },
      { name: 'Bacillus amyloliquefaciens', value: '5%' },
      { name: 'Bacillus aryabhatta', value: '5%' },
      { name: 'Bacillus megaterium', value: '5%' },
      { name: 'Chromobacterium subtsugae', value: '5%' },
      { name: 'Gluconacetobacter diazotrophicus', value: '10%' },
      { name: 'Trichoderma harzianum', value: '10%' },
      { name: 'Bacillus subtilis', value: '10%' },
      { name: 'Ácidos húmicos y fúlvicos', value: 'inertes en dilución' },
    ],
    benefits: {
      es: ['Emergencia uniforme', 'Mayor macollaje', 'Raíces más fuertes', 'Control de patógenos', 'Mayor vigor inicial'],
      en: ['Uniform emergence', 'More tillering', 'Stronger roots', 'Pathogen control', 'Higher initial vigor'],
    },
    crops: ['Arroz', 'Caña de azúcar', 'Maíz', 'Trigo'],
    usage: {
      es: 'Preparar la dosis recomendada en un envase limpio. Aplicar directamente sobre la semilla antes de la siembra. Puede utilizarse también en coinoculación, respetando las dosis y recomendaciones técnicas.',
      en: 'Prepare the recommended dose in a clean container. Apply directly onto the seed before sowing. May also be used in co-inoculation, respecting doses and technical recommendations.',
    },
    dose: { es: '500 ml por cada 100 kg de semilla · 1 L/ha', en: '500 ml per 100 kg of seed · 1 L/ha' },
    price: 43.45,
  },
  {
    slug: 'seed-forte-3-0',
    name: 'SEED FORTE 3.0',
    category: 'tratamiento-semillas',
    type: { es: 'Tratamiento de semillas leguminosas', en: 'Legume seed treatment' },
    tagline: {
      es: 'Fijación de nitrógeno, mayor nodulación y germinación uniforme',
      en: 'Nitrogen fixation, more nodulation and uniform germination',
    },
    description: {
      es: 'SEED FORTE 3.0 es un bioestimulante líquido formulado a partir de una combinación de microorganismos benéficos, destinado al tratamiento de semillas de la familia Fabaceae y otras especies leguminosas. Su formulación biológica actúa en el control de patógenos presentes en la semilla y en el entorno inmediato, reduciendo el riesgo de generación de resistencias. Activa las fitohormonas, incrementa la porosidad de germinación, mejora el vigor inicial y promueve un crecimiento más uniforme del cultivo, favoreciendo la nodulación radicular y la captación de nitrógeno atmosférico.',
      en: 'SEED FORTE 3.0 is a liquid biostimulant formulated from a combination of beneficial microorganisms for treating seeds of the Fabaceae family and other legume species. Its biological formulation controls pathogens present in the seed and immediate environment, reducing the risk of resistance development. It activates phytohormones, improves germination and initial vigor, and promotes more uniform crop growth, favoring root nodulation and atmospheric nitrogen uptake.',
    },
    composition: [
      { name: 'Azospirillum brasilense spp', value: '30%' },
      { name: 'Bradyrhizobium japonicum spp', value: '30%' },
      { name: 'Bacillus aryabhatta', value: '5%' },
      { name: 'Bacillus megaterium', value: '5%' },
      { name: 'Bacillus subtilis spp', value: '5%' },
      { name: 'Chromobacterium subtsugae', value: '5%' },
      { name: 'Trichoderma harzianum', value: '20%' },
      { name: 'Ácidos húmicos y fúlvicos', value: 'inertes en dilución' },
    ],
    benefits: {
      es: ['Fijación de nitrógeno', 'Mayor nodulación', 'Germinación uniforme', 'Activador de fitohormonas', 'Control de patógenos'],
      en: ['Nitrogen fixation', 'More nodulation', 'Uniform germination', 'Phytohormone activator', 'Pathogen control'],
    },
    crops: ['Soya', 'Algodón', 'Maní', 'Girasol'],
    usage: {
      es: 'Preparar la dosis recomendada en un envase limpio. Aplicar directamente sobre la semilla antes de la siembra. Puede utilizarse también en coinoculación, respetando las dosis y recomendaciones técnicas.',
      en: 'Prepare the recommended dose in a clean container. Apply directly onto the seed before sowing. May also be used in co-inoculation, respecting doses and technical recommendations.',
    },
    dose: { es: '500 ml por cada 100 kg de semilla · 1 L/ha', en: '500 ml per 100 kg of seed · 1 L/ha' },
    price: 43.45,
  },
  {
    slug: 'biomax-43',
    name: 'BIOMAX 43',
    category: 'bioinsecticida',
    featured: true,
    type: { es: 'Bioinsecticida líquido', en: 'Liquid bioinsecticide' },
    tagline: {
      es: 'Control total de plagas, reacción rápida, 100% biológico',
      en: 'Total pest control, fast action, 100% biological',
    },
    description: {
      es: 'BIOMAX 43 es un bioinsecticida formulado a partir de microorganismos entomopatógenos. Su mecanismo de acción se basa en la formación de cristales proteicos durante la fase estacionaria de esporulación. Al ser ingerido por el insecto objetivo, el producto provoca alteraciones fisiológicas que derivan en debilitamiento progresivo, interrupción de la alimentación, reducción de la reproducción y, finalmente, la muerte del insecto. La aplicación de estos microorganismos vivos contribuye además a la solubilización de nutrientes, favoreciendo la sanidad del cultivo y reduciendo la incidencia de plagas de manera biológica y sostenible.',
      en: 'BIOMAX 43 is a bioinsecticide formulated from entomopathogenic microorganisms. Its mechanism is based on the formation of protein crystals during the stationary sporulation phase. Once ingested by the target insect, it causes physiological alterations leading to progressive weakening, feeding interruption, reduced reproduction and, ultimately, the insect’s death. These living microorganisms also help solubilize nutrients, favoring crop health and reducing pest incidence in a biological and sustainable way.',
    },
    composition: [
      { name: 'Bacillus thuringiensis kurstaki', value: '10%' },
      { name: 'Bacillus thuringiensis aizawai', value: '10%' },
      { name: 'Chromobacterium subtsugae', value: '20%' },
      { name: 'Saccharopolyspora spinosa', value: '20%' },
      { name: 'Beauveria bassiana', value: '10%' },
      { name: 'Metarhizium anisopliae', value: '10%' },
      { name: 'Ácidos húmicos y fúlvicos', value: '20%' },
    ],
    benefits: {
      es: ['Control total de plagas', 'Reacción rápida', '100% biológico', 'Control de orugas, chinches, mosca blanca, trips y ácaros'],
      en: ['Total pest control', 'Fast action', '100% biological', 'Controls caterpillars, stink bugs, whitefly, thrips and mites'],
    },
    crops: ['Arroz', 'Caña de azúcar', 'Maíz', 'Soya', 'Trigo'],
    usage: {
      es: 'Preparar la dosis recomendada en un envase limpio. Aplicar en etapa vegetativa después de la siembra a los 30 días. Se recomiendan aplicaciones secuenciales en V3, V5, V7, R1 y R3.',
      en: 'Prepare the recommended dose in a clean container. Apply at the vegetative stage 30 days after sowing. Sequential applications recommended at V3, V5, V7, R1 and R3.',
    },
    dose: { es: 'Secuencial 1 L/ha', en: 'Sequential 1 L/ha' },
    price: 28,
  },
  {
    slug: 'bioguard',
    name: 'BIOGUARD',
    category: 'biofungicida',
    featured: true,
    type: { es: 'Biofungicida multisitio', en: 'Multi-site biofungicide' },
    tagline: {
      es: 'Protección total, acción preventiva, amplio espectro',
      en: 'Total protection, preventive action, broad spectrum',
    },
    description: {
      es: 'BIOGUARD es la combinación de 3 microorganismos cuyo modo de acción permite un eficiente y excelente biocontrol de patógenos en el follaje. Se han seleccionado especies que se complementan entre sí: una coloniza el sustrato rápidamente desplazando a los patógenos, y la otra produce metabolitos que controlan a los patógenos sobrevivientes al primer ataque. Esta característica asegura un biocontrol secuencial y eficiente, produciendo sustancias antifúngicas que inhiben el crecimiento de los hongos patógenos. Puede estimular las defensas naturales de las plantas haciéndolas más resistentes a las enfermedades fúngicas.',
      en: 'BIOGUARD combines 3 microorganisms whose mode of action delivers efficient, excellent biocontrol of foliar pathogens. The selected species complement each other: one rapidly colonizes the substrate, displacing pathogens, while the other produces metabolites that control pathogens surviving the first attack. This ensures sequential, efficient biocontrol, producing antifungal substances that inhibit the growth of pathogenic fungi. It can stimulate the plant’s natural defenses, making it more resistant to fungal diseases.',
    },
    composition: [
      { name: 'Trichoderma spp', value: '15%' },
      { name: 'Bacillus subtilis spp', value: '30%' },
      { name: 'Bacillus pumilus', value: '30%' },
      { name: 'Ingredientes inertes', value: '25%' },
    ],
    benefits: {
      es: ['Protección total', 'Acción preventiva', 'Amplio espectro', 'Biocontrol secuencial', 'Estimula defensas naturales'],
      en: ['Total protection', 'Preventive action', 'Broad spectrum', 'Sequential biocontrol', 'Stimulates natural defenses'],
    },
    crops: ['Arroz', 'Caña de azúcar', 'Maíz', 'Soya', 'Trigo'],
    usage: {
      es: 'Preparar la dosis recomendada en un envase limpio. Aplicar en etapa vegetativa después de la siembra a los 25 días. Realizar aplicaciones en V3, V5, V7, R1 y R3.',
      en: 'Prepare the recommended dose in a clean container. Apply at the vegetative stage 25 days after sowing. Apply at V3, V5, V7, R1 and R3.',
    },
    dose: { es: 'Secuencial 1 L/ha', en: 'Sequential 1 L/ha' },
    price: 31,
  },
  {
    slug: 'bio-mulusk',
    name: 'BIO-MULUSK',
    category: 'bioinsecticida',
    registration: 'Reg. SENASAG N° 07-16428',
    type: { es: 'Bioinsecticida líquido', en: 'Liquid bioinsecticide' },
    tagline: {
      es: 'Control de caracol, mejora la producción, sin residuos para exportación',
      en: 'Snail control, better production, no residues for export',
    },
    description: {
      es: 'BIO-MULUSK está indicado para el control de moluscos (caracoles, cochinilla, pulgón negro) en cultivos de plátano/banano y cítricos. Es un producto que inmoviliza al caracol y lo esteriliza, impidiendo su reproducción y reduciendo significativamente la cantidad de caracoles en el cultivo. No deja residuos tóxicos, lo que permite su aplicación en cualquier momento del cultivo y favorece la exportación del banano.',
      en: 'BIO-MULUSK is intended for the control of mollusks (snails, mealybug, black aphid) in banana/plantain and citrus crops. It immobilizes and sterilizes the snail, preventing its reproduction and significantly reducing snail populations in the crop. It leaves no toxic residues, allowing application at any point in the crop cycle and supporting banana export.',
    },
    composition: [
      { name: 'Beauveria bassiana', value: '10%' },
      { name: 'Metarhizium anisopliae', value: '10%' },
      { name: 'Pseudomonas fluorescens', value: '10%' },
      { name: 'Extractos orgánicos atrayentes', value: 'c.s.p.' },
    ],
    benefits: {
      es: ['Control de caracol', 'Mejora la producción', 'No deja residuos para exportación', 'Control de cochinillas, orugas y picudo negro'],
      en: ['Snail control', 'Improves production', 'No residues for export', 'Controls mealybugs, caterpillars and black weevil'],
    },
    crops: ['Banano', 'Piña', 'Palta', 'Café', 'Coca'],
    usage: {
      es: 'Preparar la dosis recomendada en un envase limpio. Aplicar en la etapa vegetativa después de la siembra a los 30 días. Se recomienda aplicar con buena humedad relativa y en días nublados. Aplicaciones en V3, V5, V7, R1 y R3.',
      en: 'Prepare the recommended dose in a clean container. Apply at the vegetative stage 30 days after sowing. Best applied under good relative humidity and on cloudy days. Apply at V3, V5, V7, R1 and R3.',
    },
    dose: { es: '3 litros secuencial', en: '3 liters sequential' },
    price: 28,
  },
  {
    slug: 'biodyne-500',
    name: 'BIODYNE 500',
    category: 'pecuario',
    type: { es: 'Bioactivador · Probiótico · Agua', en: 'Bioactivator · Probiotic · Water' },
    tagline: {
      es: 'Mejora biológica, aguas residuales y línea pecuaria',
      en: 'Biological improvement, wastewater and livestock line',
    },
    description: {
      es: 'BIODYNE 500 es un producto biológico formado a partir de microorganismos anaeróbicos que obtienen su energía mediante la descomposición de la materia orgánica. Su acción contribuye al control biológico de patógenos, protege el sistema radicular y mejora la resistencia de las plantas frente al estrés abiótico como sequía y salinidad, favoreciendo el desarrollo radicular, la eficiencia fotosintética y el rendimiento de los cultivos. En aplicaciones pecuarias, mejora la digestión y la eficiencia de conversión alimenticia, favorece la ganancia de peso y contribuye al fortalecimiento del sistema inmunológico, además de mejorar la sanidad animal.',
      en: 'BIODYNE 500 is a biological product made from anaerobic microorganisms that obtain energy by decomposing organic matter. It contributes to the biological control of pathogens, protects the root system and improves plant resistance to abiotic stress such as drought and salinity, favoring root development, photosynthetic efficiency and crop yield. In livestock applications, it improves digestion and feed conversion efficiency, supports weight gain and strengthens the immune system, while improving animal health.',
    },
    composition: [
      { name: 'Bacterias ácido lácticas spp', value: '20%' },
      { name: 'Bacterias actinomicetos spp', value: '30%' },
      { name: 'Hongos Saccharomyces spp', value: '30%' },
      { name: 'Ingredientes inertes', value: '20%' },
    ],
    benefits: {
      es: ['Mejora biológica', 'Tratamiento de aguas residuales', 'Línea pecuaria (bovino y porcino)', 'Mejor digestión y conversión', 'Fortalece el sistema inmune'],
      en: ['Biological improvement', 'Wastewater treatment', 'Livestock line (cattle & swine)', 'Better digestion and conversion', 'Strengthens the immune system'],
    },
    crops: ['Comederos', 'Bebederos', 'Instalaciones', 'Aguas residuales', 'Ganado bovino', 'Ganado porcino'],
    usage: {
      es: 'Preparar la dosis recomendada en un envase limpio. Para aplicaciones destinadas al consumo animal, consultar previamente con un técnico especializado. Comederos: 2–3 L de activado por mochila de 20 L. Bebederos: 1 L de activado para 1000 L de agua. Instalaciones: 5 L del activado por mochila de 20 L.',
      en: 'Prepare the recommended dose in a clean container. For animal-consumption applications, consult a specialized technician first. Feeders: 2–3 L of activated product per 20 L tank. Drinkers: 1 L of activated product per 1000 L of water. Facilities: 5 L of activated product per 20 L tank.',
    },
    dose: { es: 'Según aplicación (ver uso)', en: 'According to application (see usage)' },
    price: 14,
  },
];

/** Ruta de la foto de producto (envase). Convención: /products/<slug>.jpg */
export function productImage(product: Product): string {
  return `/products/${product.slug}.jpg`;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
