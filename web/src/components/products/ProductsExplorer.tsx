'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { products, type ProductCategory } from '@/data/products';
import { categoryMeta, categoryOrder } from '@/data/categories';
import { ProductCard } from './ProductCard';
import { cn } from '@/lib/cn';

type Filter = ProductCategory | 'all';

function isCategory(value: string | undefined): value is ProductCategory {
  return !!value && (categoryOrder as string[]).includes(value);
}

export function ProductsExplorer({ initialCategory }: { initialCategory?: string }) {
  const t = useTranslations('productsPage');
  const tCat = useTranslations('categories.items');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const [active, setActive] = useState<Filter>(isCategory(initialCategory) ? initialCategory : 'all');

  const filtered = active === 'all' ? products : products.filter((p) => p.category === active);

  const selectFilter = (next: Filter) => {
    setActive(next);
    // Sincroniza la URL sin recargar (compartible), sin scroll.
    if (typeof window !== 'undefined') {
      const url = next === 'all' ? window.location.pathname : `${window.location.pathname}?categoria=${next}`;
      window.history.replaceState(null, '', url);
    }
  };

  return (
    <div>
      {/* Chips de filtro */}
      <div className="flex flex-wrap gap-2.5" role="group" aria-label={t('title')}>
        <FilterChip active={active === 'all'} onClick={() => selectFilter('all')}>
          {t('filterAll')}
        </FilterChip>
        {categoryOrder.map((id) => {
          const Icon = categoryMeta[id].icon;
          return (
            <FilterChip key={id} active={active === id} onClick={() => selectFilter(id)}>
              <Icon className="h-4 w-4" aria-hidden />
              {tCat(`${id}.label`)}
            </FilterChip>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-mute">{t('results', { count: filtered.length })}</p>

      {/* Grilla */}
      {filtered.length === 0 ? (
        <p className="mt-12 rounded-2xl bg-cream p-10 text-center text-mute">{t('empty')}</p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              locale={locale}
              categoryLabel={tCat(`${product.category}.label`)}
              viewMoreLabel={tCommon('viewMore')}
              featuredLabel={tCommon('featured')}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-all',
        active
          ? 'bg-forest text-white shadow-soft'
          : 'bg-white text-ink/75 ring-1 ring-ink/10 hover:ring-forest/40 hover:text-forest-deep',
      )}
    >
      {children}
    </button>
  );
}
