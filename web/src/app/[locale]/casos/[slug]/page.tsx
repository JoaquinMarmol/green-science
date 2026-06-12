import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Sprout,
  Package,
  Ruler,
  MessageCircle,
  Sparkles,
  Mic,
  Quote,
} from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { CasoCard } from '@/components/casos/CasoCard';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  casos,
  getCaso,
  casoImage,
  casoGalleryImage,
  casoProducts,
  type Caso,
} from '@/data/casos';
import { pick } from '@/lib/loc';
import { whatsappLink, siteConfig } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return casos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const caso = getCaso(slug);
  if (!caso) return {};
  return pageMetadata({
    locale,
    path: `/casos/${slug}`,
    title: pick(caso.titulo, locale),
    description: pick(caso.resumen, locale),
  });
}

function otherCasos(slug: string): Caso[] {
  return casos.filter((c) => c.slug !== slug && c.destacado).slice(0, 3);
}

export default function CasoDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const caso = getCaso(slug);
  if (!caso) notFound();

  const t = useTranslations('casoDetail');
  const tCommon = useTranslations('common');

  const products = casoProducts(caso);
  const related = otherCasos(slug);

  const narrative = [
    { key: 'situacion', title: t('situationTitle'), text: caso.situacion },
    { key: 'tratamiento', title: t('treatmentTitle'), text: caso.tratamiento },
    { key: 'resultado', title: t('resultTitle'), text: caso.resultado },
  ] as const;

  const casoLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pick(caso.titulo, locale),
    description: pick(caso.resumen, locale),
    image: `${siteConfig.url}${casoImage(caso)}`,
    publisher: { '@type': 'Organization', name: siteConfig.name },
    about: pick(caso.cultivo, locale),
  };

  return (
    <>
      <JsonLd data={casoLd} />

      {/* Encabezado */}
      <section className="border-b border-ink/5 bg-cream pb-10 pt-28 sm:pt-32 lg:pt-36">
        <Container>
          <Link
            href="/casos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-mute transition-colors hover:text-forest-deep"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t('back')}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/8 px-3 py-1 text-xs font-semibold text-forest-deep ring-1 ring-forest/15">
              <Sprout className="h-3.5 w-3.5" aria-hidden />
              {pick(caso.cultivo, locale)}
            </span>
            {caso.ubicacion ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy ring-1 ring-navy/15">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {caso.ubicacion}
              </span>
            ) : null}
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.8rem]">
            {pick(caso.titulo, locale)}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink text-pretty">
            {pick(caso.resumen, locale)}
          </p>
        </Container>
      </section>

      {/* Cuerpo */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Columna izquierda: narrativa + galería */}
          <div className="space-y-10">
            {caso.pendienteAudio ? (
              <div className="flex items-start gap-3 rounded-2xl bg-brand-soft p-4 ring-1 ring-forest/10">
                <Mic className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden />
                <p className="text-sm leading-relaxed text-ink/80">{t('audioPending')}</p>
              </div>
            ) : null}

            {narrative.map(({ key, title, text }) => (
              <Block key={key} title={title}>
                {text ? (
                  <p className="leading-relaxed text-ink/85 text-pretty">{pick(text, locale)}</p>
                ) : (
                  <p className="rounded-2xl bg-cream px-4 py-3 text-sm italic leading-relaxed text-mute ring-1 ring-ink/5">
                    {t('sectionPending')}
                  </p>
                )}
              </Block>
            ))}

            {/* Galería */}
            {caso.galeria.length > 0 ? (
              <Block title={t('galleryTitle')}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {caso.galeria.map((file, idx) => (
                    <div
                      key={file}
                      className="relative aspect-square overflow-hidden rounded-xl bg-cream ring-1 ring-ink/5"
                    >
                      <Image
                        src={casoGalleryImage(caso, file)}
                        alt={`${pick(caso.titulo, locale)} — ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Block>
            ) : null}

            {/* Citas del chat (testimonio confirmado) */}
            {caso.citas.length > 0 ? (
              <Block title={t('quotesTitle')}>
                <ul className="space-y-3">
                  {caso.citas.map((cita) => (
                    <li
                      key={cita}
                      className="flex gap-3 rounded-2xl bg-cream px-4 py-3 ring-1 ring-ink/5"
                    >
                      <Quote className="mt-0.5 h-4 w-4 shrink-0 text-forest/60" aria-hidden />
                      <span className="text-sm leading-relaxed text-ink/80">{cita}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
          </div>

          {/* Columna derecha: ficha + producto + CTA (sticky) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-b from-white to-cream shadow-card ring-1 ring-ink/5">
              <Image
                src={casoImage(caso)}
                alt={pick(caso.titulo, locale)}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>

            {/* Ficha rápida */}
            <dl className="mt-6 divide-y divide-ink/5 overflow-hidden rounded-2xl bg-cream ring-1 ring-ink/5">
              <FactRow Icon={Sprout} label={t('cropLabel')} value={pick(caso.cultivo, locale)} />
              <FactRow Icon={Package} label={t('productLabel')} value={caso.productoLabel} />
              {caso.dosis ? (
                <FactRow Icon={Ruler} label={t('doseLabel')} value={pick(caso.dosis, locale)} />
              ) : null}
              {caso.ubicacion ? (
                <FactRow Icon={MapPin} label={t('locationLabel')} value={caso.ubicacion} />
              ) : null}
            </dl>

            {/* Métricas confirmadas */}
            {caso.metricas.length > 0 ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {caso.metricas.map((m) => (
                  <div
                    key={m.label.es}
                    className="rounded-2xl bg-brand-soft p-4 ring-1 ring-forest/10"
                  >
                    <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-forest">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden />
                      {pick(m.label, locale)}
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-forest-deep">
                      {pick(m.value, locale)}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Producto(s) usados, enlazados a su ficha */}
            {products.length > 0 ? (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-semibold text-navy">{t('usedProducts')}</p>
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/productos/${p.slug}`}
                    className="group flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-ink/10 transition-all hover:ring-forest/30 hover:shadow-soft"
                  >
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-cream">
                      <Image
                        src={`/products/${p.slug}.jpg`}
                        alt={p.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-navy">{p.name}</span>
                      <span className="block truncate text-xs text-mute">{pick(p.type, locale)}</span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-forest-deep transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                ))}
              </div>
            ) : null}

            <a
              href={whatsappLink(t('whatsappMessage', { caso: pick(caso.titulo, locale) }))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-base font-semibold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {t('ctaButton')}
            </a>
          </div>
        </div>
      </Section>

      {/* Más casos */}
      {related.length > 0 ? (
        <Section className="bg-cream">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              {t('relatedTitle')}
            </h2>
            <Link
              href="/casos"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-forest-deep hover:text-forest sm:inline-flex"
            >
              {t('viewAll')}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CasoCard key={c.slug} caso={c} locale={locale} readMoreLabel={tCommon('readCase')} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}

function FactRow({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 px-4 py-3">
      <dt className="inline-flex items-center gap-1.5 text-sm text-mute">
        <Icon className="h-4 w-4 text-forest/70" aria-hidden />
        {label}
      </dt>
      <dd className="text-right text-sm font-semibold text-ink">{value}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-display text-xl font-semibold text-navy sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}
