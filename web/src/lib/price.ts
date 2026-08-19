/**
 * Formateo de precios de la Línea Green Science.
 * Fuente única: `price` en src/data/products.ts (USD por litro, precio de catálogo).
 * Mantener sincronizado con Catalogo_Precios_Bidones_ConsumidorFinal.pdf.
 */

/** 16.5 -> "16,50" · 45.5 -> "45,50" */
export function formatAmount(value: number): string {
  return value.toFixed(2).replace('.', ',');
}

/** 16.5 -> "US$ 16,50" */
export function formatPrice(value: number): string {
  return `US$ ${formatAmount(value)}`;
}

/** 16.5 -> "US$ 16,50 /L" */
export function formatPricePerLiter(value: number): string {
  return `${formatPrice(value)} /L`;
}
