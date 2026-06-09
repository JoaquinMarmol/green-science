import { Sprout, Leaf, Bug, ShieldCheck, Wheat, Droplets, type LucideIcon } from 'lucide-react';
import type { ProductCategory } from './products';

/**
 * Metadatos visuales de cada categoría: ícono, color de badge y gradiente
 * del placeholder de producto. Los colores siguen el sistema de diseño
 * (docs/02-design-system.md → "Color por categoría de producto").
 * Las clases se escriben como literales completos para que Tailwind las detecte.
 */
export type CategoryMeta = {
  id: ProductCategory;
  icon: LucideIcon;
  /** Clases del Badge (fondo claro + texto + ring). */
  badge: string;
  /** Gradiente del tile/placeholder de imagen. */
  tile: string;
  /** Color de acento sólido (para detalles e íconos sobre claro). */
  accentText: string;
};

export const categoryMeta: Record<ProductCategory, CategoryMeta> = {
  bioestimulante: {
    id: 'bioestimulante',
    icon: Sprout,
    badge: 'bg-lime/15 text-forest-deep ring-1 ring-lime/40',
    tile: 'from-[#8FD45C] via-[#5FB231] to-[#1B5E20]',
    accentText: 'text-forest-deep',
  },
  biofertilizante: {
    id: 'biofertilizante',
    icon: Leaf,
    badge: 'bg-forest/12 text-forest-deep ring-1 ring-forest/30',
    tile: 'from-[#3aa14a] via-[#2E7D32] to-[#10401a]',
    accentText: 'text-forest-deep',
  },
  bioinsecticida: {
    id: 'bioinsecticida',
    icon: Bug,
    badge: 'bg-amber-100 text-amber-800 ring-1 ring-amber-300/50',
    tile: 'from-[#d2b14a] via-[#9a7d2e] to-[#5c4a1a]',
    accentText: 'text-amber-700',
  },
  biofungicida: {
    id: 'biofungicida',
    icon: ShieldCheck,
    badge: 'bg-orange-100 text-orange-800 ring-1 ring-orange-300/50',
    tile: 'from-[#e08a4b] via-[#c2682f] to-[#7a3c14]',
    accentText: 'text-orange-700',
  },
  'tratamiento-semillas': {
    id: 'tratamiento-semillas',
    icon: Wheat,
    badge: 'bg-[#8B5E3C]/12 text-[#6B4423] ring-1 ring-[#8B5E3C]/30',
    tile: 'from-[#a9743f] via-[#8B5E3C] to-[#4d3014]',
    accentText: 'text-[#6B4423]',
  },
  pecuario: {
    id: 'pecuario',
    icon: Droplets,
    badge: 'bg-indigo-100 text-indigo-700 ring-1 ring-indigo-300/50',
    tile: 'from-[#6d7ce0] via-[#4f5fc7] to-[#2c2f8f]',
    accentText: 'text-indigo-600',
  },
};

/** Orden de aparición de categorías en filtros y secciones. */
export const categoryOrder: ProductCategory[] = [
  'bioestimulante',
  'biofertilizante',
  'bioinsecticida',
  'biofungicida',
  'tratamiento-semillas',
  'pecuario',
];
