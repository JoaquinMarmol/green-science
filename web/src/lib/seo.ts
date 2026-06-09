import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from './site';

/** Construye canonical + hreflang alternates para una ruta (sin prefijo de idioma). */
export function alternatesFor(path: string, locale: string): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `/${l}${path}`;
  languages['x-default'] = `/${routing.defaultLocale}${path}`;
  return { canonical: `/${locale}${path}`, languages };
}

const ogLocale: Record<string, string> = { es: 'es_BO', en: 'en_US' };

/** Metadata por página: título, descripción, alternates y Open Graph coherentes. */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: alternatesFor(path, locale),
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: ogLocale[locale] ?? 'es_BO',
      url: `${siteConfig.url}/${locale}${path}`,
      title,
      description,
      images: [{ url: '/og-image.jpg', width: 1536, height: 1024, alt: siteConfig.name }],
    },
  };
}
