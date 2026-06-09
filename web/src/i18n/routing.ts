import { defineRouting } from 'next-intl/routing';

/**
 * Ruteo bilingüe. Español por defecto (mercado boliviano/latinoamericano),
 * inglés como segundo idioma. Prefijo de idioma en la URL: /es, /en.
 */
export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
});

export type Locale = (typeof routing.locales)[number];
