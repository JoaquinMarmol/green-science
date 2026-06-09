import Image from 'next/image';
import { Microscope, Sparkles, ShieldCheck, Recycle, ArrowRight, type LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';

const POINTS: { key: string; Icon: LucideIcon }[] = [
  { key: 'micro', Icon: Microscope },
  { key: 'fixation', Icon: Sparkles },
  { key: 'control', Icon: ShieldCheck },
  { key: 'sustainable', Icon: Recycle },
];

export function WhyGreenScience() {
  const t = useTranslations('why');

  return (
    <section className="relative overflow-hidden bg-night text-white">
      {/* Acentos */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-forest/30 blur-[120px]"
        aria-hidden
      />
      <Image
        src="/logo-symbol.png"
        alt=""
        aria-hidden
        width={469}
        height={696}
        className="blend-screen pointer-events-none absolute -bottom-16 right-2 hidden h-[28rem] w-auto opacity-30 lg:block"
      />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime-400 sm:text-sm">
              {t('eyebrow')}
            </p>
            <h2 className="font-display text-[1.75rem] font-bold leading-tight text-white text-balance sm:text-3xl lg:text-[2.4rem]">
              {t('title')}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
              {t('lead')}
            </p>
            <Link
              href="/nosotros"
              className="mt-8 inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-forest-deep shadow-soft transition-all hover:bg-cream hover:shadow-glow active:scale-[0.98]"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map(({ key, Icon }, i) => (
              <FadeIn key={key} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lime/15 text-lime-400 ring-1 ring-lime/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {t(`points.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {t(`points.${key}.desc`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
