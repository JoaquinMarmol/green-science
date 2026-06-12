/**
 * Casos de éxito Green Science (Bolivia).
 * Fuente: chat "Bioagrosolutions y Green Science" (8–12 jun 2026) + transcripción de los
 * audios de cada productor. Solo se publica lo confirmado; no se inventan números ni datos.
 * La cita de cada caso ("Lo que dijeron en el campo") es una frase del productor,
 * editada levemente para lectura, fiel al sentido original del audio/chat.
 */

import type { Product } from './products';
import { products } from './products';

export type Localized = { es: string; en: string };

export type CasoMetric = { label: Localized; value: Localized };

export type Caso = {
  slug: string;
  titulo: Localized;
  cultivo: Localized;
  /** Texto visible del/los producto(s) usados. */
  productoLabel: string;
  /** Slugs de productos del catálogo para enlazar a su ficha (/productos/<slug>). */
  productoSlugs: string[];
  ubicacion: string;
  dosis?: Localized;
  /** Resumen de 1 línea para la card del índice. */
  resumen: Localized;
  situacion?: Localized;
  tratamiento?: Localized;
  resultado?: Localized;
  /** Métricas confirmadas (no inventar). */
  metricas: CasoMetric[];
  /** Frase del productor (una sola), editada para lectura y fiel al original. */
  citas: string[];
  /** Imagen principal (archivo dentro de /public/casos/<slug>/). Vacío => usa foto de producto. */
  imagenPrincipal?: string;
  /** Galería: nombres de archivo dentro de /public/casos/<slug>/. */
  galeria: string[];
  /** true si el relato/algún dato clave todavía vive en los audios sin confirmar. */
  pendienteAudio: boolean;
  destacado: boolean;
};

export const casos: Caso[] = [
  {
    slug: '01_soja_biomax_fullpower',
    titulo: {
      es: 'Soja — Bio Max 43 + Full Power 50 (antes/después a 10 días)',
      en: 'Soybean — Bio Max 43 + Full Power 50 (before/after at 10 days)',
    },
    cultivo: { es: 'Soja', en: 'Soybean' },
    productoLabel: 'BIOMAX 43 + FULL POWER 50',
    productoSlugs: ['biomax-43', 'full-power-50'],
    ubicacion: 'Colonia, Bolivia',
    dosis: { es: '1 litro por cada 1000 litros de agua', en: '1 liter per 1000 liters of water' },
    resumen: {
      es: 'Antes/después a 10 días: más biomasa y mejor sistema radicular en el mismo lote.',
      en: 'Before/after at 10 days: more biomass and a better root system on the same plot.',
    },
    situacion: {
      es: 'Lote de soja de ciclo de 95 días en una colonia menonita de la zona de Colonia (Bolivia), trabajado junto a Wilmer. Se documentó el estado del cultivo 10 días antes de la aplicación, sobre el mismo lote y el mismo cliente, para tener un punto de comparación claro del antes y el después.',
      en: 'A 95-day-cycle soybean field in a Mennonite colony near Colonia (Bolivia), worked together with Wilmer. The crop was documented 10 days before the application, on the same plot and the same client, to give a clear before-and-after comparison.',
    },
    tratamiento: {
      es: 'Aplicación combinada de Bio Max 43 (bioinsecticida) y Full Power 50 (bioestimulante), a razón de 1 litro por cada 1000 litros de agua, en plena etapa vegetativa.',
      en: 'Combined application of Bio Max 43 (bioinsecticide) and Full Power 50 (biostimulant), at a rate of 1 liter per 1000 liters of water, during the vegetative stage.',
    },
    resultado: {
      es: 'A los 10 días de la aplicación la diferencia es visible en el mismo lote: un aumento significativo de la biomasa general, con un sistema radicular de mayor capacidad de absorción y una buena asimilación de nutrientes.',
      en: 'Ten days after the application the difference is visible on the same plot: a significant increase in overall biomass, with a root system of greater uptake capacity and good nutrient assimilation.',
    },
    metricas: [
      { label: { es: 'Comparación', en: 'Comparison' }, value: { es: '10 días', en: '10 days' } },
    ],
    citas: [
      'Visualmente se ve un aumento significativo de la biomasa, con mejor capacidad de absorción en la radícula y buena asimilación de nutrientes.',
    ],
    imagenPrincipal: '01.jpg',
    galeria: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'],
    pendienteAudio: false,
    destacado: true,
  },
  {
    slug: '02_trigo_seed_forte_40',
    titulo: {
      es: 'Trigo — Seed Forte 4.0 (raíces a 15 días de la siembra)',
      en: 'Wheat — Seed Forte 4.0 (roots at 15 days from sowing)',
    },
    cultivo: { es: 'Trigo', en: 'Wheat' },
    productoLabel: 'SEED FORTE 4.0',
    productoSlugs: ['seed-forte-4-0'],
    ubicacion: 'Bolivia',
    dosis: {
      es: 'Tratamiento de semilla — 500 ml por cada 100 kg de semilla · 1 L/ha',
      en: 'Seed treatment — 500 ml per 100 kg of seed · 1 L/ha',
    },
    resumen: {
      es: 'A 15 días de la siembra, raíces visiblemente más largas con el tratamiento.',
      en: 'At 15 days from sowing, visibly longer roots with the treatment.',
    },
    situacion: {
      es: 'Trigo implantado con semilla tratada, evaluado a los 15 días de la siembra para observar el arranque del cultivo y, sobre todo, el desarrollo del sistema radicular en esa etapa temprana.',
      en: 'Wheat established with treated seed, assessed 15 days after sowing to observe the crop’s start and, above all, root-system development at that early stage.',
    },
    tratamiento: {
      es: 'Tratamiento de semilla con Seed Forte 4.0 (500 ml por cada 100 kg de semilla · 1 L/ha), aplicado directamente sobre la semilla antes de sembrar.',
      en: 'Seed treatment with Seed Forte 4.0 (500 ml per 100 kg of seed · 1 L/ha), applied directly onto the seed before sowing.',
    },
    resultado: {
      es: 'A los 15 días, las plantas tratadas muestran raíces visiblemente más largas y mejor desarrolladas que el testigo, señal de una implantación más vigorosa.',
      en: 'At 15 days, the treated plants show visibly longer, better-developed roots than the control, a sign of a more vigorous establishment.',
    },
    metricas: [
      { label: { es: 'Evaluación', en: 'Assessment' }, value: { es: '15 días', en: '15 days' } },
    ],
    citas: [
      'Excelente, tremendo lo que se ve: a los 15 días, las raíces con el tratamiento son mucho más largas.',
    ],
    imagenPrincipal: '01.jpg',
    galeria: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'],
    pendienteAudio: false,
    destacado: true,
  },
  {
    slug: '03_comparativa_tratamiento_semilla',
    titulo: {
      es: 'Comparativa de tratamiento de semilla 1 vs 2 (maíz)',
      en: 'Seed-treatment comparison 1 vs 2 (maize)',
    },
    cultivo: { es: 'Maíz / semilla', en: 'Maize / seed' },
    productoLabel: 'SEED FORTE',
    productoSlugs: ['seed-forte-4-0'],
    ubicacion: 'Bolivia',
    dosis: { es: 'Tratamiento de semilla', en: 'Seed treatment' },
    resumen: {
      es: 'Misma gestión, distinta semilla: +25 quintales/ha solo por el tratamiento biológico.',
      en: 'Same management, different seed: +25 quintals/ha from the biological treatment alone.',
    },
    situacion: {
      es: 'Ensayo en maíz para comparar dos tratamientos de semilla bajo el mismo manejo posterior. El tratamiento 1 fue químico (cepa de Azospirillum más fungicida químico) y se sembró 4 días antes; el tratamiento 2 fue el biológico de Green Science. Todas las demás aplicaciones y productos fueron idénticos en ambos lotes.',
      en: 'A maize trial comparing two seed treatments under the same subsequent management. Treatment 1 was chemical (an Azospirillum strain plus a chemical fungicide) and was sown 4 days earlier; treatment 2 was the Green Science biological one. Every other application and product was identical on both plots.',
    },
    tratamiento: {
      es: 'La única variable fue el tratamiento de semilla. Durante el ciclo se controlaron plagas como chicharrita y gusano con los productos biológicos, por igual en los dos lotes.',
      en: 'The only variable was the seed treatment. Through the season, pests such as leafhopper and worms were controlled with the biological products, equally on both plots.',
    },
    resultado: {
      es: 'Aun habiéndose sembrado después, el tratamiento biológico mostró más raíces primarias y secundarias y más pelos absorbentes. En la cosecha, esa sola diferencia de tratamiento de semilla se tradujo en 25 quintales por hectárea a favor del biológico.',
      en: 'Even though it was sown later, the biological treatment showed more primary and secondary roots and more absorbent hairs. At harvest, that seed-treatment difference alone translated into 25 quintals per hectare in favor of the biological one.',
    },
    metricas: [
      { label: { es: 'Diferencia en cosecha', en: 'Harvest difference' }, value: { es: '+25 quintales/ha', en: '+25 quintals/ha' } },
    ],
    citas: [
      'Le sacamos 25 quintales por hectárea respecto del tratamiento químico, haciendo la diferencia solo en el tratamiento de semilla.',
    ],
    imagenPrincipal: '01.jpeg',
    galeria: ['01.jpeg', '02.jpeg', '03.jpg', '04.jpeg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg'],
    pendienteAudio: false,
    destacado: true,
  },
  {
    slug: '04_maiz_cusi',
    titulo: { es: 'Maíz de Cusi — manejo biológico para silo', en: 'Cusi maize — biological program for silage' },
    cultivo: { es: 'Maíz', en: 'Maize' },
    productoLabel: 'Manejo biológico — Línea Green Science',
    productoSlugs: [],
    ubicacion: 'Cusi, Bolivia',
    resumen: {
      es: 'Maíz para silo: de 6 a 10 silos de 250 t con manejo biológico.',
      en: 'Silage maize: from 6 to 10 silos of 250 t with a biological program.',
    },
    situacion: {
      es: 'Productor de Cusi (Bolivia) con unas 10.000 hectáreas, dedicado principalmente a la ganadería, que siembra maíz para forraje y armado de silo destinado a su propio ganado. En campañas normales obtenía 6 silos de 250 toneladas.',
      en: 'A grower in Cusi (Bolivia) with around 10,000 hectares, mainly in livestock, who grows maize for forage and silage for his own cattle. In normal seasons he obtained 6 silos of 250 tonnes.',
    },
    tratamiento: {
      es: 'Campaña conducida con el manejo biológico de la línea Green Science.',
      en: 'Season run with the Green Science biological program.',
    },
    resultado: {
      es: 'Con el manejo biológico llegó a 10 silos de 250 toneladas, frente a los 6 habituales. Fue tal el excedente que, por primera vez, tuvo que vender maíz afuera por falta de lugar para almacenarlo.',
      en: 'With the biological program he reached 10 silos of 250 tonnes, versus the usual 6. The surplus was such that, for the first time, he had to sell maize externally for lack of storage.',
    },
    metricas: [
      { label: { es: 'Silos de 250 t', en: 'Silos of 250 t' }, value: { es: '6 → 10', en: '6 → 10' } },
    ],
    citas: [
      'Normalmente sacaba 6 silos de 250 toneladas; este año, con el manejo biológico, sacó 10. Por primera vez le sobró maíz para vender.',
    ],
    imagenPrincipal: '01.jpg',
    galeria: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'],
    pendienteAudio: false,
    destacado: true,
  },
  {
    slug: '05_maiz_bella_union',
    titulo: {
      es: 'Maíz — Bella Unión (comparativa de 3 mazorcas)',
      en: 'Maize — Bella Unión (3-ear comparison)',
    },
    cultivo: { es: 'Maíz', en: 'Maize' },
    productoLabel: 'Manejo biológico — Línea Green Science',
    productoSlugs: [],
    ubicacion: 'Bella Unión',
    resumen: {
      es: 'Comparación de tres mazorcas para afinar el momento de cosecha.',
      en: 'Three-ear comparison to fine-tune harvest timing.',
    },
    situacion: {
      es: 'Seguimiento de maíz en Bella Unión, con una comparación de tres mazorcas de distinto desarrollo dentro del mismo cultivo. El objetivo era leer el estado del lote y definir el mejor momento para iniciar el corte.',
      en: 'Maize follow-up in Bella Unión, comparing three ears at different stages of development within the same crop. The goal was to read the plot’s state and decide the best moment to start harvest.',
    },
    tratamiento: {
      es: 'Cultivo conducido con la línea de bioinsumos Green Science, con seguimiento agronómico en campo.',
      en: 'Crop managed with the Green Science bio-input line, with agronomic field follow-up.',
    },
    resultado: {
      es: 'La comparación de las tres mazorcas permitió coordinar con el Dr. Moisés el inicio del corte en el momento justo, cuando el lote terminó de emparejarse.',
      en: 'Comparing the three ears made it possible to coordinate with Dr. Moisés the start of harvest at the right moment, once the plot had evened out.',
    },
    metricas: [],
    citas: [
      'Son de Bella Unión: hay tres mazorcas diferentes; coordinamos con el Dr. Moisés iniciar el corte cuando se emparejaran.',
    ],
    imagenPrincipal: '01.jpg',
    galeria: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
    pendienteAudio: false,
    destacado: true,
  },
  {
    slug: '06_arroz_max18_sequia',
    titulo: {
      es: 'Arroz Max 18 — recuperación en sequía extrema',
      en: 'Max 18 Rice — recovery under extreme drought',
    },
    cultivo: { es: 'Arroz', en: 'Rice' },
    productoLabel: 'FULL POWER 50 + BIOMAX 43',
    productoSlugs: ['full-power-50', 'biomax-43'],
    ubicacion: 'El Beni, Bolivia',
    dosis: { es: 'Manejo 80% biológico · 20% químico', en: '80% biological · 20% chemical program' },
    resumen: {
      es: 'Arroz de secano que aguantó la sequía: 20 fanegas, y hasta 36 donde hubo más humedad.',
      en: 'Rainfed rice that withstood drought: 20 fanegas, and up to 36 where there was more moisture.',
    },
    situacion: {
      es: 'Arroz de secano en El Beni, dependiente de la lluvia. La sequía dejó el lote tan seco que el propio dueño dijo que “daba pena” y que parecía madurar antes de tiempo. El cultivo ya tenía aplicado el manejo biológico.',
      en: 'Rainfed rice in El Beni, dependent on rainfall. The drought left the plot so dry that the owner himself said it “was a pity” and that it seemed to ripen prematurely. The crop already had the biological program applied.',
    },
    tratamiento: {
      es: 'Manejo mayormente biológico (≈80% biológico, 20% químico) con Full Power 50 (bioestimulante) y Bio Max 43 (bioinsecticida). El enfoque biológico ayuda al cultivo a tolerar mejor el estrés hídrico.',
      en: 'Mostly biological program (≈80% biological, 20% chemical) with Full Power 50 (biostimulant) and Bio Max 43 (bioinsecticide). The biological approach helps the crop better tolerate water stress.',
    },
    resultado: {
      es: 'Tras las lluvias el arroz reaccionó visiblemente, pese al estrés hídrico previo. Aun con la sequía extrema se cosecharon 20 fanegas; en los sectores con más humedad —sin llegar a inundar— la cosechadora registró 36 fanegas.',
      en: 'After the rains the rice visibly recovered, despite the earlier water stress. Even with the extreme drought, 20 fanegas were harvested; in the sectors with more moisture —without flooding— the harvester recorded 36 fanegas.',
    },
    metricas: [
      { label: { es: 'Sequía extrema', en: 'Extreme drought' }, value: { es: '20 fanegas', en: '20 fanegas' } },
      { label: { es: 'Con más humedad', en: 'With more moisture' }, value: { es: '36 fanegas', en: '36 fanegas' } },
    ],
    citas: [
      'Ese arroz que daba pena de lo seco reaccionó después de la lluvia; donde hubo más humedad, sin inundar, se cosecharon 36 fanegas según la cosechadora.',
    ],
    imagenPrincipal: '01.jpg',
    galeria: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'],
    pendienteAudio: false,
    destacado: true,
  },
  {
    slug: '07_sorgo_control_cogollero',
    titulo: {
      es: 'Sorgo — control de cogollero con Bio Max 43',
      en: 'Sorghum — fall armyworm control with Bio Max 43',
    },
    cultivo: { es: 'Sorgo', en: 'Sorghum' },
    productoLabel: 'BIOMAX 43',
    productoSlugs: ['biomax-43'],
    ubicacion: 'Bolivia',
    dosis: { es: 'Secuencial 1 L/ha', en: 'Sequential 1 L/ha' },
    resumen: {
      es: 'Control biológico del cogollero en sorgo con Bio Max 43.',
      en: 'Biological fall-armyworm control in sorghum with Bio Max 43.',
    },
    situacion: {
      es: 'Lote de sorgo con presencia de cogollero (Spodoptera), una de las principales plagas del cultivo: ataca el cogollo de la planta y, sin control, compromete el rendimiento.',
      en: 'A sorghum plot with fall armyworm (Spodoptera) present, one of the crop’s main pests: it attacks the plant’s whorl and, left uncontrolled, hurts yield.',
    },
    tratamiento: {
      es: 'Control biológico de la plaga con aplicaciones secuenciales de Bio Max 43 (1 L/ha), un bioinsecticida a base de microorganismos entomopatógenos.',
      en: 'Biological pest control with sequential applications of Bio Max 43 (1 L/ha), a bioinsecticide based on entomopathogenic microorganisms.',
    },
    resultado: {
      es: 'El programa con Bio Max 43 mantuvo controlado el cogollero en el sorgo, sin recurrir a insecticidas químicos.',
      en: 'The Bio Max 43 program kept the fall armyworm under control in the sorghum, without resorting to chemical insecticides.',
    },
    metricas: [],
    citas: [
      'El control del cogollero en el sorgo lo hicimos con Bio Max 43.',
    ],
    imagenPrincipal: '01.jpg',
    galeria: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
    pendienteAudio: false,
    destacado: true,
  },
  {
    slug: '08_manejo_agricultura_soja',
    titulo: {
      es: 'Manejo integral en agricultura (con Wilmer)',
      en: 'Integrated crop management (with Wilmer)',
    },
    cultivo: { es: 'Soja / varios', en: 'Soybean / various' },
    productoLabel: 'Línea Green Science',
    productoSlugs: [],
    ubicacion: 'Bolivia',
    resumen: {
      es: 'Manejo biológico integral en campo propio, junto a Wilmer.',
      en: 'Full biological management on our own fields, with Wilmer.',
    },
    situacion: {
      es: 'Manejo integral en la agricultura propia del equipo, conducido junto a Wilmer, aplicando la línea completa de bioinsumos Green Science a lo largo del ciclo.',
      en: 'Integrated management on the team’s own farming, run together with Wilmer, applying the full Green Science bio-input line throughout the cycle.',
    },
    tratamiento: {
      es: 'Programa biológico integral sobre el cultivo, combinando bioestimulación, nutrición y control biológico de plagas y enfermedades con la línea Green Science.',
      en: 'A full biological program on the crop, combining biostimulation, nutrition and biological control of pests and diseases with the Green Science line.',
    },
    resultado: {
      es: 'El manejo se refleja en cultivos bien implantados y con un sistema radicular profundo y vigoroso, base de plantas más sanas y de mejor rendimiento.',
      en: 'The program shows in well-established crops with a deep, vigorous root system, the basis for healthier, higher-yielding plants.',
    },
    metricas: [],
    citas: [
      'Este es el manejo que llevamos con Wilmer en nuestra propia agricultura.',
    ],
    imagenPrincipal: '01.jpg',
    galeria: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'],
    pendienteAudio: false,
    destacado: false,
  },
  {
    slug: '09_ganaderia_biodyne500',
    titulo: {
      es: 'Ganadería de carne — Bio Dyne 500 (ganancia de peso)',
      en: 'Beef cattle — Bio Dyne 500 (weight gain)',
    },
    cultivo: { es: 'Ganadería bovina', en: 'Cattle' },
    productoLabel: 'BIODYNE 500',
    productoSlugs: ['biodyne-500'],
    ubicacion: 'Bolivia',
    dosis: {
      es: 'Bebederos: 1 L activado por 1000 L de agua · Comederos e instalaciones: 5 L activado por mochila de 20 L',
      en: 'Drinkers: 1 L activated per 1000 L of water · Feeders and facilities: 5 L activated per 20 L tank',
    },
    resumen: {
      es: 'Más ganancia de peso (140–280 g/día) y mejor sanidad animal con Bio Dyne 500.',
      en: 'More weight gain (140–280 g/day) and better animal health with Bio Dyne 500.',
    },
    situacion: {
      es: 'Ganado bovino de carne, buscando mejorar de forma natural la conversión del alimento y la ganancia diaria de peso.',
      en: 'Beef cattle, aiming to naturally improve feed conversion and daily weight gain.',
    },
    tratamiento: {
      es: 'Suministro de Bio Dyne 500 activado: en bebederos, 1 litro activado por cada 1000 litros de agua; en comederos e instalaciones, 5 litros activados por mochila de 20 litros.',
      en: 'Supply of activated Bio Dyne 500: in drinkers, 1 liter activated per 1000 liters of water; in feeders and facilities, 5 liters activated per 20 L tank.',
    },
    resultado: {
      es: 'Bio Dyne 500 activa y aumenta la flora microbiana de los animales, mejorando el aprovechamiento del alimento ingerido. El efecto se nota a partir del día 14, con una ganancia de 140 a 280 gramos diarios por encima de lo habitual, mejor apariencia del pelaje, mayor sanidad y menos problemas hepáticos. Es un probiótico natural y biológico.',
      en: 'Bio Dyne 500 activates and increases the animals’ microbial flora, improving the use of ingested feed. The effect shows from day 14, with a gain of 140 to 280 grams per day above the usual, better coat appearance, greater health and fewer liver problems. It is a natural, biological probiotic.',
    },
    metricas: [
      { label: { es: 'Ganancia extra', en: 'Extra gain' }, value: { es: '+140–280 g/día', en: '+140–280 g/day' } },
      { label: { es: 'Efecto visible', en: 'Visible effect' }, value: { es: 'desde el día 14', en: 'from day 14' } },
    ],
    citas: [
      'La ganancia de peso aumenta entre 140 y 280 gramos por día, y se empieza a notar a partir del día 14.',
    ],
    imagenPrincipal: undefined, // sin fotos en el chat — usa foto del producto
    galeria: [],
    pendienteAudio: false,
    destacado: true,
  },
  {
    slug: '10_biodyne500_agricultura',
    titulo: {
      es: 'Agricultura — Bio Dyne 500 (suelos cansados)',
      en: 'Agriculture — Bio Dyne 500 (tired soils)',
    },
    cultivo: { es: 'Agricultura / suelo', en: 'Agriculture / soil' },
    productoLabel: 'BIODYNE 500',
    productoSlugs: ['biodyne-500'],
    ubicacion: 'Bolivia',
    resumen: {
      es: 'Reactiva la flora microbiana y mejora suelos cansados y compactados.',
      en: 'Reactivates microbial flora and improves tired, compacted soils.',
    },
    situacion: {
      es: 'Suelos agrícolas cansados y compactados, con baja actividad biológica y poca disponibilidad de nutrientes.',
      en: 'Tired, compacted agricultural soils, with low biological activity and poor nutrient availability.',
    },
    tratamiento: {
      es: 'Aplicación de Bio Dyne 500 al suelo para acelerar la descomposición de la materia orgánica y reactivar la vida microbiana.',
      en: 'Application of Bio Dyne 500 to the soil to speed up the breakdown of organic matter and reactivate microbial life.',
    },
    resultado: {
      es: 'Bio Dyne 500 mejora y aumenta la flora microbiana del suelo, dando mejor disponibilidad de nutrientes, y mejora la estructura y la permeabilidad de los terrenos cansados y compactados.',
      en: 'Bio Dyne 500 improves and increases the soil’s microbial flora for better nutrient availability, and improves the structure and permeability of tired, compacted soils.',
    },
    metricas: [],
    citas: [
      'Mejora la estructura y la permeabilidad de los terrenos cansados y compactados, y reactiva la flora microbiana del suelo.',
    ],
    imagenPrincipal: undefined, // sin fotos en el chat — usa foto del producto
    galeria: [],
    pendienteAudio: false,
    destacado: false,
  },
];

/** Foto principal del caso. Si no hay fotos propias, cae a la foto del producto enlazado. */
export function casoImage(caso: Caso): string {
  if (caso.imagenPrincipal) return `/casos/${caso.slug}/${caso.imagenPrincipal}`;
  if (caso.productoSlugs[0]) return `/products/${caso.productoSlugs[0]}.jpg`;
  return '/og-image.jpg';
}

/** Ruta de una imagen de la galería del caso. */
export function casoGalleryImage(caso: Caso, file: string): string {
  return `/casos/${caso.slug}/${file}`;
}

export function getCaso(slug: string): Caso | undefined {
  return casos.find((c) => c.slug === slug);
}

export function getFeaturedCasos(): Caso[] {
  return casos.filter((c) => c.destacado);
}

/** Productos del catálogo enlazados a un caso. */
export function casoProducts(caso: Caso): Product[] {
  return caso.productoSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}
