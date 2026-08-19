import { useLocale, useTranslations } from 'next-intl';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/motion/FadeIn';
import { homeCrops } from '@/lib/crops';

export function CropsStrip() {
  const t = useTranslations('crops');
  const locale = useLocale();

  return (
    <Section className="bg-cream">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

      <FadeIn>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {homeCrops.map(({ es, en, icon: Icon }) => (
            <li
              key={es}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-sm ring-1 ring-ink/5 transition-colors hover:ring-forest/30"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime/15 text-forest-deep">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              {locale === 'en' ? en : es}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
