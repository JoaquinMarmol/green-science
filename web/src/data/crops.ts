/**
 * Planes de manejo biológico por cultivo — Línea Green Science.
 * Generado desde los planes de manejo integral de BioAgroSolutions.
 * Una etapa puede no tener aplicaciones (p. ej. cosecha): es intencional.
 */

export type CropCategory = 'extensivo' | 'frutal' | 'horticola' | 'industrial';

export type Application = {
  product: string;
  /** slug del producto en /productos y de la foto en /products/thumb */
  slug: string | null;
  dose: string;
  note: string;
};

export type CropStage = {
  stage: string;
  objective: string;
  applications: Application[];
};

export type Crop = {
  slug: string;
  name: string;
  category: CropCategory;
  summary: string;
  stages: CropStage[];
};

export const cropCategories: { id: CropCategory; label: string }[] = [
  { id: 'extensivo', label: 'Extensivos' },
  { id: 'frutal', label: 'Frutales' },
  { id: 'horticola', label: 'Hortícolas' },
  { id: 'industrial', label: 'Industriales' },
];

export const crops: Crop[] = [
  {
    slug: "arroz",
    name: "Arroz",
    category: "extensivo",
    summary: "Macollaje, tolerancia al estrés hídrico y prevención de piricularia.",
    stages: [
      {
        stage: "Tratamiento de semilla",
        objective: "Proteger la semilla; emergencia",
        applications: [
          { product: "SEED FORTE 4.0", slug: "seed-forte-4-0", dose: "500 ml/100 kg", note: "" },
        ],
      },
      {
        stage: "Macollaje",
        objective: "Vigor, raíz y tolerancia (secano)",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Máx. macollaje – primordio",
        objective: "Nutrir; prevenir piricularia/añublo; chinches",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración – panícula",
        objective: "Prevenir piricularia del cuello; chinches",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Grano lechoso – pastoso",
        objective: "Manchado de grano y chinches sin residuos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha",
        objective: "Recuperar suelo (aluvial/ácido)",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "cebada",
    name: "Cebada",
    category: "extensivo",
    summary: "Emergencia uniforme y protección foliar en el ciclo de invierno.",
    stages: [
      {
        stage: "Tratamiento de semilla",
        objective: "Proteger la semilla; emergencia y macollaje",
        applications: [
          { product: "SEED FORTE 4.0", slug: "seed-forte-4-0", dose: "500 ml/100 kg", note: "" },
        ],
      },
      {
        stage: "Macollaje",
        objective: "Vigor, raíz y control temprano",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Encañado",
        objective: "Nutrir; prevenir roya/escaldadura; pulgones",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Espigazón – floración",
        objective: "Proteger la espiga (roya, mancha)",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Llenado de grano",
        objective: "Proteger sin residuos; pulgón de la espiga",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha",
        objective: "Recuperar suelo",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "chia",
    name: "Chía",
    category: "extensivo",
    summary: "Cultivo de alto valor con manejo limpio, sin residuos para exportación.",
    stages: [
      {
        stage: "Siembra – emergencia",
        objective: "Proteger el arranque",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Desarrollo vegetativo",
        objective: "Vigor; control temprano",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Ramificación",
        objective: "Nutrir; prevenir mildiu/alternaria; plagas",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración (espigas)",
        objective: "Proteger la flor; pulgón y trips",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Llenado de grano",
        objective: "Sanidad sin residuos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha",
        objective: "Recuperar suelo",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "frejol",
    name: "Frejol",
    category: "extensivo",
    summary: "Nodulación y protección del cultivo desde la siembra.",
    stages: [
      {
        stage: "Tratamiento de semilla",
        objective: "Fijación de N; proteger la semilla",
        applications: [
          { product: "SEED FORTE 3.0", slug: "seed-forte-3-0", dose: "500 ml/100 kg", note: "" },
        ],
      },
      {
        stage: "Emergencia – trifoliadas",
        objective: "Vigor; mosca blanca temprana",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Prefloración – floración",
        objective: "Nutrir; prevenir antracnosis/roya; mosca blanca",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Llenado de vainas",
        objective: "Proteger la vaina; mustia; picudo",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Madurez – precosecha",
        objective: "Sanidad sin residuos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha",
        objective: "Recuperar suelo",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "girasol",
    name: "Girasol",
    category: "extensivo",
    summary: "Arranque, nutrición y sanidad del capítulo con manejo biológico.",
    stages: [
      {
        stage: "Siembra – semilla",
        objective: "Proteger la semilla y el arranque",
        applications: [
          { product: "SEED FORTE 3.0", slug: "seed-forte-3-0", dose: "500 ml/100 kg", note: "" },
        ],
      },
      {
        stage: "Emergencia – 4 a 6 hojas",
        objective: "Vigor y prevención basal de Sclerotinia",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Botón floral (R1–R3)",
        objective: "Prevenir Sclerotinia; nutrir; plagas",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Formación de capítulo (R5)",
        objective: "Proteger el capítulo de Sclerotinia",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Llenado",
        objective: "Sostener sanidad sin residuos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
    ],
  },
  {
    slug: "maiz",
    name: "Maíz",
    category: "extensivo",
    summary: "Vigor inicial, nutrición y control de plagas para sostener el número y el peso de granos.",
    stages: [
      {
        stage: "Siembra – semilla",
        objective: "Proteger semilla y arranque; nutrir",
        applications: [
          { product: "SEED FORTE 4.0", slug: "seed-forte-4-0", dose: "500 ml/100 kg", note: "" },
          { product: "coinoculación (FULL POWER 50)", slug: "full-power-50", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "V2",
        objective: "Vigor inicial y control temprano de plagas",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "V4 (10 días post 1ra)",
        objective: "Nutrir; prevenir enfermedades; plagas",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "V6 (10 días post 2da)",
        objective: "Sostener el control de plagas",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "0,5 L/ha", note: "" },
        ],
      },
      {
        stage: "V7 (10 días post 3ra)",
        objective: "Proteger previo a floración",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
    ],
  },
  {
    slug: "quinua",
    name: "Quinua",
    category: "extensivo",
    summary: "Nutrición y sanidad en un cultivo exigente y de alto valor.",
    stages: [
      {
        stage: "Siembra – emergencia",
        objective: "Proteger el arranque y la semilla",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "2 a 4 hojas",
        objective: "Control temprano de ticonas; vigor",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Ramificación",
        objective: "Nutrir; prevenir mildiu; plagas",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Panojamiento",
        objective: "Prevenir mildiu; polilla (kcona kcona)",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración – grano lechoso",
        objective: "Proteger la panoja sin residuos; polilla",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Madurez – postcosecha",
        objective: "Recuperar suelo y reservas",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "sorgo",
    name: "Sorgo",
    category: "extensivo",
    summary: "Implantación pareja y manejo del cogollero con control biológico, sin residuos.",
    stages: [
      {
        stage: "Siembra – semilla",
        objective: "Proteger la semilla y el arranque",
        applications: [
          { product: "SEED FORTE 4.0", slug: "seed-forte-4-0", dose: "500 ml/100 kg", note: "" },
        ],
      },
      {
        stage: "20–25 días post siembra",
        objective: "Vigor y control temprano de plagas",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "10–15 días post 1ra",
        objective: "Nutrir; prevenir enfermedades; plagas",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "10–15 días post 2da",
        objective: "Sostener sanidad y control",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Formación de grano",
        objective: "Proteger el grano sin residuos",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
    ],
  },
  {
    slug: "soya",
    name: "Soya",
    category: "extensivo",
    summary: "Nodulación, fijación de nitrógeno y sanidad del cultivo, desde la semilla hasta el llenado de granos.",
    stages: [
      {
        stage: "Siembra – semilla",
        objective: "Nodular, fijar N y proteger el arranque",
        applications: [
          { product: "SEED FORTE 3.0", slug: "seed-forte-3-0", dose: "3 L/1.000 kg", note: "" },
          { product: "coinoculación (FULL POWER 50)", slug: "full-power-50", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Vegetativo (V)",
        objective: "Vigor y control temprano de orugas",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Prefloración (R1)",
        objective: "Nutrir; prevenir roya; plagas",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración – vaina (R3–R5)",
        objective: "Sostener sanidad; chinches",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Inicio de llenado de grano",
        objective: "Proteger el llenado sin residuos",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
    ],
  },
  {
    slug: "trigo",
    name: "Trigo",
    category: "extensivo",
    summary: "Macollaje, raíz fuerte y prevención de enfermedades foliares durante todo el ciclo.",
    stages: [
      {
        stage: "Tratamiento de semilla",
        objective: "Proteger la semilla; emergencia y macollaje",
        applications: [
          { product: "SEED FORTE 4.0", slug: "seed-forte-4-0", dose: "500 ml/100 kg", note: "" },
        ],
      },
      {
        stage: "Macollaje",
        objective: "Vigor, raíz y control temprano",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Encañado",
        objective: "Nutrir; prevenir roya/oídio; pulgones",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Espigazón – floración",
        objective: "Proteger la espiga (roya, fusariosis)",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Llenado de grano",
        objective: "Proteger sin residuos; pulgón de la espiga",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha",
        objective: "Recuperar suelo",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "arandano",
    name: "Arándano",
    category: "frutal",
    summary: "Botrytis, antracnosis y mosca de la fruta en un cultivo de exportación.",
    stages: [
      {
        stage: "Reposo y poda",
        objective: "Sanear el suelo y proteger heridas",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
        ],
      },
      {
        stage: "Brotación (yema hinchada)",
        objective: "Brotación pareja, raíz activa y control temprano",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración",
        objective: "Mejorar cuaje; prevenir botrytis en flor",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Cuajado – desarrollo del fruto",
        objective: "Nutrir; prevenir botrytis/antracnosis; trips",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Maduración – cosecha",
        objective: "Proteger el fruto sin residuos; mosca de la fruta",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha",
        objective: "Recuperar suelo y reservas",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "banano",
    name: "Banano",
    category: "frutal",
    summary: "Control de caracol, sigatoka y nutrición para fruta de exportación.",
    stages: [
      {
        stage: "Establecimiento del hijo",
        objective: "Proteger cormo/raíz y arranque",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Crecimiento vegetativo",
        objective: "Vigor; sigatoka preventiva; picudo",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración (bellota)",
        objective: "Prevenir sigatoka; trips y áfidos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Desarrollo del racimo",
        objective: "Proteger el fruto; sigatoka; picudo",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Precosecha – cosecha",
        objective: "Fruto sin residuos; caracol",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
          { product: "BIO-MULUSK", slug: "bio-mulusk", dose: "3 L", note: "" },
        ],
      },
      {
        stage: "Mantenimiento del suelo",
        objective: "Recuperar suelo y materia orgánica",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "durazno",
    name: "Durazno",
    category: "frutal",
    summary: "Manejo de torque, monilia y grafolita en frutal de carozo, sin carencia.",
    stages: [
      {
        stage: "Reposo / poda invernal",
        objective: "Recuperar el suelo y sanear heridas",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "10 L/ha", note: "recupera suelo y microflora" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "preventivo de torque en yema" },
        ],
      },
      {
        stage: "Brotación / botón rosado",
        objective: "Arranque de raíz y prevención de torque",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha (secuencial)", note: "raíz y vigor" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "torque y lepra" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "pulgón temprano" },
        ],
      },
      {
        stage: "Floración",
        objective: "Proteger la flor de monilia y mejorar cuaje",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "monilia de flor" },
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha (secuencial)", note: "cuaje" },
        ],
      },
      {
        stage: "Cuaje / caída de pétalos",
        objective: "Control temprano de grafolita",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "grafolita 1a generación" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "preventivo" },
        ],
      },
      {
        stage: "Crecimiento / carozo",
        objective: "Nutrir, dar calibre y sostener la sanidad",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5-1 L/ha (secuencial)", note: "nutrición" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "grafolita" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "preventivo" },
        ],
      },
      {
        stage: "Maduración / precosecha",
        objective: "Sanidad del fruto sin residuos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "monilia de fruto (sin carencia)" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "mosca de la fruta" },
        ],
      },
      {
        stage: "Postcosecha / caída de hojas",
        objective: "Recuperar reservas y suelo",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "10 L/ha", note: "recupera el suelo" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "reservas" },
        ],
      },
    ],
  },
  {
    slug: "frambuesa",
    name: "Frambuesa",
    category: "frutal",
    summary: "Sanidad del fruto y manejo de cañas con biológicos, sin residuos.",
    stages: [
      {
        stage: "Brotación de cañas",
        objective: "Brotación pareja, raíz activa y control temprano",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Crecimiento vegetativo",
        objective: "Nutrir, suelo vivo y prevención (roya/oídio)",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración",
        objective: "Mejorar cuaje; prevenir botrytis en flor",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Fructificación",
        objective: "Prevenir botrytis; mosca de la fruta; trips",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Cosecha",
        objective: "Proteger el fruto sin residuos; Drosophila",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha – poda de cañas",
        objective: "Sanear cañas y recuperar el suelo",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "manzana",
    name: "Manzana",
    category: "frutal",
    summary: "Prevención de sarna, oídio y carpocapsa, con suelo vivo y fruta sin residuos.",
    stages: [
      {
        stage: "Reposo / poda invernal",
        objective: "Recuperar el suelo y sanear heridas de poda",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "10 L/ha", note: "recupera suelo y microflora" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "protege las heridas de poda" },
        ],
      },
      {
        stage: "Brotación (yema hinchada)",
        objective: "Arranque de raíz y prevención temprana",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha (secuencial)", note: "raíz y vigor" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "preventivo de sarna" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "pulgón temprano" },
        ],
      },
      {
        stage: "Floración",
        objective: "Proteger la flor y mejorar el cuaje",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "preventivo de sarna y oídio" },
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha (secuencial)", note: "cuaje" },
        ],
      },
      {
        stage: "Cuaje / caída de pétalos",
        objective: "Control temprano de plagas del fruto",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "carpocapsa 1a generación" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "preventivo" },
        ],
      },
      {
        stage: "Crecimiento del fruto",
        objective: "Nutrir, dar calibre y sostener la sanidad",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5-1 L/ha (secuencial)", note: "nutrición" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "carpocapsa y pulgón" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "sarna de verano" },
        ],
      },
      {
        stage: "Maduración / precosecha",
        objective: "Sanidad del fruto sin residuos",
        applications: [
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "mosca de la fruta" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "sin carencia" },
        ],
      },
      {
        stage: "Postcosecha / caída de hojas",
        objective: "Recuperar reservas y suelo",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "10 L/ha", note: "recupera el suelo" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "reservas" },
        ],
      },
    ],
  },
  {
    slug: "vid",
    name: "Vid",
    category: "frutal",
    summary: "Programa completo de poda a postcosecha: oídio, botrytis, polilla y recuperación del suelo.",
    stages: [
      {
        stage: "Poda y reposo (arranque)",
        objective: "Arranque sano, proteger heridas y sanear el suelo",
        applications: [
          { product: "SEED FORTE", slug: "seed-forte-4-0", dose: "2 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "10 L/ha", note: "" },
        ],
      },
      {
        stage: "Brotación",
        objective: "Brotación pareja, raíz activa y control temprano de plagas",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Crecimiento vegetativo",
        objective: "Nutrir, suelo vivo y prevención temprana",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración – cuajado",
        objective: "Mejor cuaje; proteger de oídio; polilla 1ª gen.",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Bayas – envero",
        objective: "Prevenir botrytis/oídio; polilla 2ª gen.; nutrir",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "0,5–1 L/ha", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
        ],
      },
      {
        stage: "Maduración – precosecha",
        objective: "Cuidar el racimo sin residuos; polilla 3ª gen.",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha",
        objective: "Recuperar suelo y reservas",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "10 L/ha", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplicación", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "según aplicación", note: "" },
        ],
      },
    ],
  },
  {
    slug: "zarzamora",
    name: "Zarzamora",
    category: "frutal",
    summary: "Protección del fruto y recuperación del suelo campaña tras campaña.",
    stages: [
      {
        stage: "Brotación de cañas",
        objective: "Brotación pareja, raíz activa y control temprano",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Crecimiento vegetativo",
        objective: "Nutrir, suelo vivo y prevención (roya/oídio)",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración",
        objective: "Mejorar cuaje; prevenir botrytis en flor",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Fructificación",
        objective: "Prevenir botrytis; mosca de la fruta; trips",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Cosecha",
        objective: "Proteger el fruto sin residuos; Drosophila",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha – poda de cañas",
        objective: "Sanear cañas y recuperar el suelo",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "papa",
    name: "Papa",
    category: "horticola",
    summary: "Suelo sano, control de tizón y calidad del tubérculo.",
    stages: [
      {
        stage: "Presiembra (preparación del suelo)",
        objective: "Activar el suelo antes de plantar",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "5 L/ha", note: "" },
        ],
      },
      {
        stage: "Siembra (tubérculo-semilla)",
        objective: "Proteger de Rhizoctonia y arranque",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Emergencia – desarrollo",
        objective: "Vigor; control temprano (gorgojo/pulgón)",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Inicio de tuberización",
        objective: "Nutrir; prevenir tizón; plagas",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Floración – llenado de tubérculos",
        objective: "Prevenir tizón tardío; polilla de la papa",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Madurez – precosecha",
        objective: "Proteger tubérculos sin residuos; polilla",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Postcosecha",
        objective: "Recuperar suelo",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "yuca",
    name: "Yuca",
    category: "horticola",
    summary: "Recuperación del suelo y sanidad de raíz en cultivo de ciclo largo.",
    stages: [
      {
        stage: "Plantación (estaca)",
        objective: "Tratamiento de la estaca y arranque",
        applications: [
          { product: "SEED FORTE 3.0", slug: "seed-forte-3-0", dose: "500 ml/100 kg", note: "" },
        ],
      },
      {
        stage: "Brotación – establecimiento",
        objective: "Vigor, raíz, suelo y control temprano (cachón/mosca)",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Desarrollo del follaje",
        objective: "Nutrir; prevenir mancha/antracnosis; ácaros/mosca",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Inicio de tuberización",
        objective: "Nutrir; sanidad; plagas",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Engrose de raíces",
        objective: "Planta muy alta: sin aplicación foliar",
        applications: [],
      },
      {
        stage: "Maduración – cosecha",
        objective: "Cosecha (sin aplicación)",
        applications: [],
      },
    ],
  },
  {
    slug: "cana-de-azucar",
    name: "Caña de azúcar",
    category: "industrial",
    summary: "Programa integral para caña, con recuperación del suelo entre ciclos.",
    stages: [
      {
        stage: "Plantación (estaca)",
        objective: "Proteger la estaca y el arranque",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Brotación – macollaje",
        objective: "Vigor, raíz y control temprano",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Gran crecimiento",
        objective: "Nutrir; prevenir roya/carbón; barrenador",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5–1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Cierre de canopia",
        objective: "Barrenador (generaciones); roya",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Maduración – precosecha",
        objective: "Sanidad del tallo sin residuos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
      {
        stage: "Soca / postcosecha",
        objective: "Recuperar suelo y favorecer el rebrote",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "según aplic.", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "según aplic.", note: "" },
        ],
      },
    ],
  },
  {
    slug: "cana-planta",
    name: "Caña planta",
    category: "industrial",
    summary: "Implantación de la caña: tratamiento de semilla, raíz y suelo vivo.",
    stages: [
      {
        stage: "Plantación (estaca) · 0-60 días",
        objective: "Activar suelo y proteger la estaca",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "5 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Macollaje (ahijamiento) · 60-150 días",
        objective: "Vigor, raíz y control temprano",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Gran crecimiento · 150-270 días",
        objective: "Nutrir; prevenir roya/carbón; barrenador",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5-1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Cierre de canopia · 270-360 días",
        objective: "Barrenador (generaciones); roya",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Maduracion - precosecha · 360-420+ días",
        objective: "Sanidad del tallo sin residuos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
    ],
  },
  {
    slug: "cana-soca",
    name: "Caña soca",
    category: "industrial",
    summary: "Rebrote vigoroso y sanidad tras el corte, con suelo activo.",
    stages: [
      {
        stage: "Postcosecha - preparación de la soca · 0 días",
        objective: "Activar la cepa y el suelo tras el corte",
        applications: [
          { product: "BIODYNE 500", slug: "biodyne-500", dose: "5 L/ha", note: "" },
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Rebrote de la soca · 0-45 días",
        objective: "Rebrote vigoroso y parejo",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Macollaje · 45-120 días",
        objective: "Vigor y control temprano de plagas",
        applications: [
          { product: "FULL POWER 50", slug: "full-power-50", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Gran crecimiento · 120-240 días",
        objective: "Nutrir; prevenir roya; barrenador",
        applications: [
          { product: "FULL GREEN 100", slug: "full-green-100", dose: "0,5-1 L/ha", note: "" },
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Maduracion · 240-330 días",
        objective: "Sanidad del tallo; barrenador",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha", note: "" },
        ],
      },
      {
        stage: "Precosecha · ~12 meses",
        objective: "Sanidad del tallo sin residuos",
        applications: [
          { product: "BIOGUARD", slug: "bioguard", dose: "1 L/ha (sin carencia)", note: "" },
          { product: "BIOMAX 43", slug: "biomax-43", dose: "1 L/ha (sin carencia)", note: "" },
        ],
      },
    ],
  },
];

export function getCrop(slug: string): Crop | undefined {
  return crops.find((c) => c.slug === slug);
}

export function cropsByCategory(cat: CropCategory): Crop[] {
  return crops.filter((c) => c.category === cat);
}
