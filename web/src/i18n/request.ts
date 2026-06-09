import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Carga el diccionario correcto (messages/es.json | messages/en.json) por request.
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
