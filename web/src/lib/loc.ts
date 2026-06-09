/** Selecciona el campo es/en de un valor localizado de la data de productos. */
export function pick<T>(value: { es: T; en: T }, locale: string): T {
  return locale === 'en' ? value.en : value.es;
}
