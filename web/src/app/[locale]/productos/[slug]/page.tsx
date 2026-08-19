import type { Metadata } from 'next';
import { formatPricePerLiter } from '@/lib/price';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Package,
  AlertTriangle,
  ShieldCheck,
  MessageCircle,
  Sprout,
} from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { ProductCard } from '@/components/products/ProductCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { products, getProduct, productImage } from '@/data/products';
import { pick } from '@/lib/loc';
import { cropLabel } from '@/lib/crops';
import { siteConfig, whatsappLink } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata({
    locale,
    path: `/productos/${slug}`,
    title: `${product.name} — ${pick(product.type, locale)}`,
    description: pick(product.tagline, locale),
  });
}

function relatedProducts(slug: string, category: string) {
  const sameCat = products.filter((p) => p.slug !== slug && p.category === category);
  const others = products.filter((p) => p.slug !== slug && p.category !== category);
  return [...sameCat, ...others].slice(0, 3);
}

export default function ProductDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  // Server Components: hooks i18n sincrónicos.
  const t = useTranslations('productDetail');
  const tCat = useTranslations('categories.items');
  const tCommon = useTranslations('common');

  const categoryLabel = tCat(`${product.category}.label`);
  const benefits = pick(product.benefits, locale);
  const related = relatedProducts(slug, product.category);

  const notes = [
    { Icon: FlaskConical, title: t('compatibilityTitle'), text: t('compatibilityText') },
    { Icon: Package, title: t('storageTitle'), text: t('storageText') },
    { Icon: AlertTriangle, title: t('emergencyTitle'), text: t('emergencyText') },
  ];

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: pick(product.description, locale),
    category: categoryLabel,
    image: `${siteConfig.url}/og-image.jpg`,
    brand: { '@type': 'Brand', name: siteConfig.name },
    manufacturer: { '@type': 'Organization', name: siteConfig.name },
    ...(product.registration
      ? {
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'SENASAG', value: product.registration },
          ],
        }
      : {}),
  };

  return (
    <>
      <JsonLd data={productLd} />

      {/* Encabezado */}
      <section className="border-b border-ink/5 bg-cream pb-10 pt-28 sm:pt-32 lg:pt-36">
        <Container>
          <Link
            href="/productos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-mute transition-colors hover:text-forest-deep"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t('back')}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge category={product.category}>{categoryLabel}</Badge>
            {product.registration ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-2.5 py-1 text-xs font-semibold text-navy ring-1 ring-navy/15">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                {product.registration}
              </span>
            ) : null}
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm font-medium uppercase tracking-wide text-forest">
            {pick(product.type, locale)}
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink text-pretty">
            {pick(product.tagline, locale)}
          </p>
        </Container>
      </section>

      {/* Cuerpo */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Columna izquierda: visual + ficha + CTA (sticky) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-b from-white to-cream shadow-card ring-1 ring-ink/5">
              <Image
                src={productImage(product)}
                alt={`${product.name} — ${pick(product.type, locale)}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>

            {/* Ficha técnica rápida */}
            <dl className="mt-6 divide-y divide-ink/5 overflow-hidden rounded-2xl bg-cream ring-1 ring-ink/5">
              <FactRow label={t('group')} value={t('groupValue')} />
              <FactRow label={t('type')} value={pick(product.type, locale)} />
              <FactRow label={t('doseTitle')} value={pick(product.dose, locale)} />
              {product.price !== undefined ? (
                <FactRow
                  label={t('price')}
                  value={formatPricePerLiter(product.price)}
                  highlight
                />
              ) : null}
              {product.registration ? (
                <FactRow label={t('registration')} value={product.registration} />
              ) : null}
            </dl>

            <a
              href={whatsappLink(t('whatsappMessage', { product: product.name }))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-base font-semibold text-white shadow-soft transition hover:brightness-95 active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {t('ctaButton')}
            </a>
          </div>

          {/* Columna derecha: contenido */}
          <div className="space-y-10">
            <Block title={t('descriptionTitle')}>
              <p className="leading-relaxed text-ink/85 text-pretty">
                {pick(product.description, locale)}
              </p>
            </Block>

            <Block title={t('benefitsTitle')}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden />
                    <span className="text-[0.95rem] leading-relaxed text-ink/85">{b}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={t('compositionTitle')}>
              <div className="overflow-hidden rounded-2xl ring-1 ring-ink/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-cream text-xs uppercase tracking-wide text-mute">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        {t('componentCol')}
                      </th>
                      <th scope="col" className="px-4 py-3 text-right font-semibold">
                        {t('valueCol')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/5">
                    {product.composition.map((c) => (
                      <tr key={c.name} className="bg-white">
                        <td className="px-4 py-3 italic text-ink/85">{c.name}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-forest-deep">
                          {c.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>

            <Block title={t('cropsTitle')}>
              <ul className="flex flex-wrap gap-2.5">
                {product.crops.map((crop) => (
                  <li
                    key={crop}
                    className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3.5 py-1.5 text-sm font-medium text-ink ring-1 ring-ink/5"
                  >
                    <Sprout className="h-4 w-4 text-forest" aria-hidden />
                    {cropLabel(crop, locale)}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={t('usageTitle')}>
              <p className="leading-relaxed text-ink/85 text-pretty">{pick(product.usage, locale)}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl bg-brand-soft px-4 py-3 ring-1 ring-forest/10">
                <span className="text-sm font-semibold text-forest-deep">{t('doseTitle')}:</span>
                <span className="text-sm font-medium text-ink">{pick(product.dose, locale)}</span>
              </div>
            </Block>

            {/* Notas legales/comunes */}
            <div className="grid gap-4 sm:grid-cols-3">
              {notes.map(({ Icon: NoteIcon, title, text }) => (
                <div key={title} className="rounded-2xl bg-cream p-5 ring-1 ring-ink/5">
                  <NoteIcon className="h-5 w-5 text-forest" aria-hidden />
                  <h3 className="mt-3 text-sm font-semibold text-navy">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-mute">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Productos relacionados */}
      {related.length > 0 ? (
        <Section className="bg-cream">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              {t('relatedTitle')}
            </h2>
            <Link
              href="/productos"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-forest-deep hover:text-forest sm:inline-flex"
            >
              {tCommon('viewAllProducts')}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard
                key={p.slug}
                product={p}
                locale={locale}
                categoryLabel={tCat(`${p.category}.label`)}
                viewMoreLabel={tCommon('viewMore')}
                featuredLabel={tCommon('featured')}
              />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}

function FactRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 px-4 py-3">
      <dt className="text-sm text-mute">{label}</dt>
      <dd className={highlight ? 'text-right text-sm font-bold text-forest-deep' : 'text-right text-sm font-semibold text-ink'}>
        {value}
      </dd>
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
