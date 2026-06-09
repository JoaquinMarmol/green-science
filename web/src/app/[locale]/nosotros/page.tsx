import type { Metadata } from 'next';
import {
  Target,
  Sprout,
  Microscope,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Leaf,
  ShieldCheck,
  Globe,
  Handshake,
  type LucideIcon,
} from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/layout/PageHero';
import { FadeIn } from '@/components/motion/FadeIn';
import { FinalCTA } from '@/components/home/FinalCTA';
import { siteConfig } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tm = await getTranslations({ locale, namespace: 'metadata' });
  return pageMetadata({
    locale,
    path: '/nosotros',
    title: tm('about.title'),
    description: tm('about.description'),
  });
}

const BENEFITS: { key: string; Icon: LucideIcon }[] = [
  { key: 'yield', Icon: TrendingUp },
  { key: 'soil', Icon: Leaf },
  { key: 'control', Icon: ShieldCheck },
  { key: 'residue', Icon: Globe },
  { key: 'compat', Icon: Handshake },
];

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('about');

  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('intro')} />

      {/* Misión + Enfoque */}
      <Section className="bg-white">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { Icon: Target, title: t('missionTitle'), text: t('missionText') },
            { Icon: Sprout, title: t('approachTitle'), text: t('approachText') },
          ].map(({ Icon, title, text }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-cream p-8 ring-1 ring-ink/5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-soft">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-navy">{title}</h2>
                <p className="mt-3 leading-relaxed text-mute text-pretty">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Qué son los bioinsumos */}
      <Section className="bg-cream">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-soft">
              <Microscope className="h-7 w-7" aria-hidden />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy text-balance sm:text-3xl">
              {t('whatTitle')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mute text-pretty sm:text-lg">
              {t('whatText')}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Beneficios */}
      <Section className="bg-white">
        <h2 className="font-display text-2xl font-bold text-navy text-balance sm:text-3xl">
          {t('benefitsTitle')}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ key, Icon }, i) => (
            <FadeIn key={key} delay={(i % 3) * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl bg-cream p-5 ring-1 ring-ink/5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime/15 text-forest-deep">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="pt-1.5 text-[0.95rem] font-medium leading-snug text-ink">
                  {t(`benefits.${key}`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Ubicación */}
      <Section className="bg-cream">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-soft">
              <MapPin className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-navy sm:text-3xl">
              {t('locationTitle')}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink">{t('locationText')}</p>
            <p className="mt-2 text-mute">{siteConfig.address}</p>
          </div>
          <FadeIn>
            <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/10">
              <iframe
                src={siteConfig.mapsEmbed}
                title={siteConfig.address}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
