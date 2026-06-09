import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Inter, Sora } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { siteConfig } from '@/lib/site';
import { alternatesFor } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tm = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: tm('home.title'), template: `%s · ${siteConfig.name}` },
    description: tm('home.description'),
    applicationName: siteConfig.name,
    alternates: alternatesFor('', locale),
    icons: { icon: '/icon.png', apple: '/icon.png' },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: locale === 'en' ? 'en_US' : 'es_BO',
      url: `${siteConfig.url}/${locale}`,
      title: tm('home.title'),
      description: tm('home.description'),
      images: [{ url: '/og-image.jpg', width: 1536, height: 1024, alt: siteConfig.name }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();
  const tc = await getTranslations({ locale, namespace: 'common' });

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: 'Green Science',
    slogan: siteConfig.tagline,
    url: `${siteConfig.url}/${locale}`,
    logo: `${siteConfig.url}/logo-color.png`,
    image: `${siteConfig.url}/og-image.jpg`,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Parque Industrial de Montero',
      addressLocality: 'Montero',
      addressRegion: 'Santa Cruz',
      addressCountry: 'BO',
    },
    areaServed: 'BO',
  };

  return (
    <html lang={locale} className={`${inter.variable} ${sora.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-forest px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {tc('skipToContent')}
        </a>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
