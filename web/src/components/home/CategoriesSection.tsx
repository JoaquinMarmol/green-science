import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { categoryMeta, categoryOrder } from '@/data/categories';
import { cn } from '@/lib/cn';

export function CategoriesSection() {
  const t = useTranslations('categories');

  return (
    <Section className="bg-cream">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categoryOrder.map((id, i) => {
          const meta = categoryMeta[id];
          const Icon = meta.icon;
          return (
            <FadeIn key={id} delay={(i % 3) * 0.08}>
              <Link
                href={`/productos?categoria=${id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow hover:ring-forest/20"
              >
                {/* Header visual con gradiente */}
                <div
                  className={cn(
                    'relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br',
                    meta.tile,
                  )}
                >
                  {/* Círculos decorativos de fondo */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-black/10" />
                  <div className="absolute right-12 bottom-6 h-16 w-16 rounded-full bg-white/10" />

                  {/* Patrón de puntos sutil */}
                  <svg
                    className="absolute inset-0 h-full w-full opacity-[0.13]"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <defs>
                      <pattern
                        id={`dots-${id}`}
                        x="0"
                        y="0"
                        width="18"
                        height="18"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1.5" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#dots-${id})`} />
                  </svg>

                  {/* Ícono grande en círculo frosted-glass */}
                  <div className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-white/15 shadow-lg ring-2 ring-white/30 backdrop-blur-sm">
                    <Icon className="h-11 w-11 text-white drop-shadow" aria-hidden />
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {t(`items.${id}.label`)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">
                    {t(`items.${id}.desc`)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-deep transition-colors group-hover:text-forest">
                    {t('explore')}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
