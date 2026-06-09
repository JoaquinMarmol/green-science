import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductsExplorer } from '@/components/products/ProductsExplorer';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tm = await getTranslations({ locale, namespace: 'metadata' });
  return pageMetadata({
    locale,
    path: '/productos',
    title: tm('products.title'),
    description: tm('products.description'),
  });
}

export default function ProductsPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { categoria?: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations('productsPage');

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
      <Section className="bg-white">
        <ProductsExplorer initialCategory={searchParams?.categoria} />
      </Section>
    </>
  );
}
