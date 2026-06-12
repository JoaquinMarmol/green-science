import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/ui/Section';
import { CasoCard } from '@/components/casos/CasoCard';
import { getFeaturedCasos } from '@/data/casos';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tm = await getTranslations({ locale, namespace: 'metadata' });
  return pageMetadata({
    locale,
    path: '/casos',
    title: tm('casos.title'),
    description: tm('casos.description'),
  });
}

export default function CasosPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations('casosPage');
  const tCommon = useTranslations('common');

  const casos = getFeaturedCasos();

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
      <Section className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {casos.map((caso) => (
            <CasoCard
              key={caso.slug}
              caso={caso}
              locale={locale}
              readMoreLabel={tCommon('readCase')}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
