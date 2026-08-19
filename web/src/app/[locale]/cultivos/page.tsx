import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/ui/Section';
import CropsExplorer from '@/components/crops/CropsExplorer';
import { pageMetadata } from '@/lib/seo';
import { crops } from '@/data/crops';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return pageMetadata({
    locale,
    path: '/cultivos',
    title: 'Planes de manejo por cultivo',
    description:
      'Explorá el ciclo de tu cultivo etapa por etapa y descubrí qué producto biológico aplicar en cada momento, con dosis y objetivo.',
  });
}

export default function CultivosPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <>
      <PageHero
        eyebrow="Planes de manejo"
        title="Tu cultivo, etapa por etapa"
        subtitle={`Elegí tu cultivo y recorré el ciclo completo: en cada etapa fenológica te mostramos qué aplicar, en qué dosis y para qué. ${crops.length} cultivos con plan de manejo biológico.`}
      />

      <Section className="bg-cream">
        <CropsExplorer />
      </Section>

      {/* franja de cierre */}
      <Section className="bg-white">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-deep to-night px-7 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-lime/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-forest/30 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
              El plan se ajusta a tu lote
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
              Estos calendarios son la base. El plan real se arma con el diagnóstico de tu campo.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
              Visitamos el lote, evaluamos el suelo y el cultivo, y ajustamos dosis y momentos según
              variedad, clima y presión de plagas. El acompañamiento técnico está incluido.
            </p>
            <a
              href="https://wa.me/5492262487998"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 font-display text-[15px] font-bold text-forest-deep shadow-glow transition hover:bg-lime-400"
            >
              Pedir diagnóstico sin costo
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="m8 5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
