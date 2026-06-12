import Image from 'next/image';
import { ArrowRight, Sprout, MapPin } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Caso } from '@/data/casos';
import { casoImage } from '@/data/casos';
import { pick } from '@/lib/loc';

/**
 * Card de caso de éxito (presentacional, sin hooks i18n) para el grid del índice.
 * Mismo lenguaje visual que ProductCard. Las etiquetas llegan por props.
 */
export function CasoCard({
  caso,
  locale,
  readMoreLabel,
}: {
  caso: Caso;
  locale: string;
  readMoreLabel: string;
}) {
  return (
    <Link
      href={`/casos/${caso.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:ring-forest/20"
    >
      {/* Foto principal del caso */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-white to-cream">
        <Image
          src={casoImage(caso)}
          alt={pick(caso.titulo, locale)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-forest px-2.5 py-1 text-xs font-semibold text-white shadow-soft">
          <Sprout className="h-3 w-3" aria-hidden />
          {pick(caso.cultivo, locale)}
        </span>
      </div>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight text-navy">
          {pick(caso.titulo, locale)}
        </h3>

        <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-forest">
          {caso.productoLabel}
        </p>

        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-mute">
          {pick(caso.resumen, locale)}
        </p>

        {caso.ubicacion ? (
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-mute">
            <MapPin className="h-3.5 w-3.5 text-forest/70" aria-hidden />
            {caso.ubicacion}
          </p>
        ) : null}

        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-deep transition-colors group-hover:text-forest">
          {readMoreLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
