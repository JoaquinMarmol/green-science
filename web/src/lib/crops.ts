import { Sprout, Wheat, Leaf, Flower2, TreePalm, type LucideIcon } from 'lucide-react';

/**
 * Traducción de nombres de cultivos (la data de productos los guarda en español).
 * Permite mostrar etiquetas en inglés sin duplicar la data.
 */
const CROP_EN: Record<string, string> = {
  Arroz: 'Rice',
  'Caña de azúcar': 'Sugarcane',
  Maíz: 'Corn',
  Soya: 'Soybean',
  Trigo: 'Wheat',
  Algodón: 'Cotton',
  Maní: 'Peanut',
  Girasol: 'Sunflower',
  Banano: 'Banana',
  Piña: 'Pineapple',
  Palta: 'Avocado',
  Café: 'Coffee',
  Coca: 'Coca',
  Comederos: 'Feeders',
  Bebederos: 'Drinkers',
  Instalaciones: 'Facilities',
  'Aguas residuales': 'Wastewater',
  'Ganado bovino': 'Cattle',
  'Ganado porcino': 'Swine',
};

export function cropLabel(name: string, locale: string): string {
  return locale === 'en' ? CROP_EN[name] ?? name : name;
}

/** Cultivos destacados para la franja del home (con ícono). */
export const homeCrops: { es: string; en: string; icon: LucideIcon }[] = [
  { es: 'Soya', en: 'Soybean', icon: Sprout },
  { es: 'Maíz', en: 'Corn', icon: Wheat },
  { es: 'Arroz', en: 'Rice', icon: Wheat },
  { es: 'Caña de azúcar', en: 'Sugarcane', icon: Leaf },
  { es: 'Trigo', en: 'Wheat', icon: Wheat },
  { es: 'Algodón', en: 'Cotton', icon: Flower2 },
  { es: 'Girasol', en: 'Sunflower', icon: Flower2 },
  { es: 'Maní', en: 'Peanut', icon: Sprout },
  { es: 'Banano', en: 'Banana', icon: TreePalm },
];
