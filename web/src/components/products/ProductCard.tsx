import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Product } from '@/data/products';
import { productImage } from '@/data/products';
import { pick } from '@/lib/loc';
import { Badge } from '@/components/ui/Badge';

/**
 * Tarjeta de producto presentacional (sin hooks i18n) para usarse tanto en
 * Server Components como en el filtro cliente. Las etiquetas llegan por props.
 */
export function ProductCard({
  product,
  locale,
  categoryLabel,
  viewMoreLabel,
  featuredLabel,
}: {
  product: Product;
  locale: string;
  categoryLabel: string;
  viewMoreLabel: string;
  featuredLabel: string;
}) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:ring-forest/20"
    >
      {/* Foto del envase */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-white to-cream">
        <Image
          src={productImage(product)}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.featured ? (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-forest px-2.5 py-1 text-xs font-semibold text-white shadow-soft">
            <Star className="h-3 w-3 fill-current" aria-hidden />
            {featuredLabel}
          </span>
        ) : null}
      </div>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <Badge category={product.category}>{categoryLabel}</Badge>
        </div>
        <h3 className="font-display text-lg font-bold leading-tight text-navy">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-[0.95rem] leading-relaxed text-mute">
          {pick(product.tagline, locale)}
        </p>
        {product.price !== undefined ? (
          <p className="mt-3 text-base font-bold text-forest-deep">
            {product.price % 1 === 0
              ? `$us ${product.price}`
              : `$us ${product.price.toString().replace('.', ',')}`}
            <span className="ml-0.5 text-xs font-medium text-mute">/L</span>
          </p>
        ) : null}
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-deep transition-colors group-hover:text-forest">
          {viewMoreLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
