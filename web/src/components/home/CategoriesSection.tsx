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
                className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:ring-forest/20"
              >
                <span
                  className={cn(
                    'inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-soft',
                    meta.tile,
                  )}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">
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
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
