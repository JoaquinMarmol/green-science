import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

export function Hero() {
  const t = useTranslations('hero');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <section className="relative overflow-hidden bg-night">
      {/* fondo mobile/tablet: la foto vertical detrás de todo el hero */}
      <div className="absolute inset-0 lg:hidden" aria-hidden>
        <Image
          src="/hero/bidones-vertical.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        {/* velo general + mucha opacidad arriba, para que el texto respire */}
        <div className="absolute inset-0 bg-night/30" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #0B0F0C 0%, rgba(11,15,12,0.95) 26%, rgba(11,15,12,0.82) 44%, rgba(11,15,12,0.55) 62%, rgba(11,15,12,0.55) 88%, rgba(11,15,12,0.9) 100%)',
          }}
        />
      </div>

      {/* foto de la línea completa como fondo (desktop) */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden>
        <Image
          src="/hero/bidones-horizontal.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* velo general: baja el brillo de toda la foto */}
        <div className="absolute inset-0 bg-night/35" />
        {/* fusión con la marca: oscurece la izquierda para el texto y sella los bordes */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0B0F0C 0%, rgba(11,15,12,0.95) 34%, rgba(11,15,12,0.62) 56%, rgba(11,15,12,0.25) 78%, rgba(11,15,12,0.12) 100%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night/90 to-transparent" />
      </div>

      {/* línea de horizonte al pie */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-lime/25 to-transparent" aria-hidden />

      <Container className="relative z-10 flex min-h-[86vh] flex-col justify-center pb-20 pt-28 sm:pt-32 lg:min-h-0 lg:block lg:pb-24 lg:pt-36">
        <div className="max-w-xl">
          <p
            className="animate-fade-up mb-6 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime/90 sm:text-xs"
            style={{ animationDelay: '0ms' }}
          >
            <span className="h-px w-8 bg-lime/60" aria-hidden />
            {t('eyebrow')}
          </p>

          <h1
            className="animate-fade-up font-display text-[2.4rem] font-extrabold leading-[1.06] text-white text-balance sm:text-5xl lg:text-[3.3rem]"
            style={{ animationDelay: '80ms' }}
          >
            {t('titleLead')} <span className="text-lime">{t('titleHighlight')}</span>{' '}
            {t('titleTail')}
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-white/70 text-pretty sm:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            {t('subtitle')}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <Link
              href="/cultivos"
              className="group inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-lime px-7 text-base font-semibold text-forest-deep transition-all hover:bg-lime-400 active:scale-[0.98]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full px-7 text-base font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-white/40 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* stats */}
          <dl
            className="animate-fade-up mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-7"
            style={{ animationDelay: '320ms' }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className={cn(i > 0 && 'border-l border-white/10 pl-4')}>
                <dt className="font-display text-3xl font-bold text-lime sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-white/55">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
