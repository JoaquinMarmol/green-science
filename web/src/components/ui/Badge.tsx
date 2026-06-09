import type { ReactNode } from 'react';
import { categoryMeta } from '@/data/categories';
import type { ProductCategory } from '@/data/products';
import { cn } from '@/lib/cn';

/** Etiqueta de categoría con color por tipo de producto (ver categoryMeta). */
export function Badge({
  category,
  children,
  withIcon = true,
  className,
}: {
  category: ProductCategory;
  children: ReactNode;
  withIcon?: boolean;
  className?: string;
}) {
  const meta = categoryMeta[category];
  const Icon = meta.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold',
        meta.badge,
        className,
      )}
    >
      {withIcon ? <Icon className="h-3.5 w-3.5" aria-hidden /> : null}
      {children}
    </span>
  );
}
