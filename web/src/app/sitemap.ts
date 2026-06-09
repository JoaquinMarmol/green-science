import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { products } from '@/data/products';
import { siteConfig } from '@/lib/site';

const STATIC_PATHS = ['', '/productos', '/nosotros', '/contacto'];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...STATIC_PATHS, ...products.map((p) => `/productos/${p.slug}`)];
  const now = new Date();

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : path.startsWith('/productos/') ? 0.6 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
