import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/data/products';

export function FeaturedProducts() {
  const t = useTranslations('featured');
  const tCat = useTranslations('categories.items');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const featured = getFeaturedProducts();

  return (
    <Section className="bg-white">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          align="left"
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
          className="mx-0"
        />
        <Link
          href="/productos"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-forest-deep hover:text-forest sm:inline-flex"
        >
          {t('viewAll')}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product, i) => (
          <FadeIn key={product.slug} delay={(i % 3) * 0.08}>
            <ProductCard
              product={product}
              locale={locale}
              categoryLabel={tCat(`${product.category}.label`)}
              viewMoreLabel={tCommon('viewMore')}
              featuredLabel={tCommon('featured')}
            />
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 sm:hidden">
        <Link
          href="/productos"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-medium text-white"
        >
          {t('viewAll')}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
