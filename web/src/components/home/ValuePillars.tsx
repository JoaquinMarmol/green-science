import { Dna, Leaf, Sprout, Globe, type LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';

const PILLARS: { key: string; Icon: LucideIcon }[] = [
  { key: 'organic', Icon: Dna },
  { key: 'biological', Icon: Leaf },
  { key: 'soil', Icon: Sprout },
  { key: 'export', Icon: Globe },
];

export function ValuePillars() {
  const t = useTranslations('pillars');

  return (
    <Section className="bg-white">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map(({ key, Icon }, i) => (
          <FadeIn key={key} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl bg-cream p-6 ring-1 ring-ink/5 transition-shadow hover:shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-soft">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{t(`items.${key}.desc`)}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
