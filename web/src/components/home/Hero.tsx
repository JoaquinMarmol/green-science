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
    <section className="relative overflow-hidden bg-hero">
      {/* Glows decorativos de marca */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-lime/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-forest/25 blur-[120px]"
        aria-hidden
      />

      {/* Símbolo de marca como motivo ambiente (solo desktop) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center lg:flex"
        aria-hidden
      >
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/12 blur-[120px]" />
          <Image
            src="/logo-symbol-on-dark.png"
            alt=""
            width={466}
            height={691}
            priority
            className="relative h-[26rem] w-auto animate-float opacity-70 drop-shadow-[0_24px_70px_rgba(122,201,67,0.2)] xl:h-[31rem]"
          />
        </div>
      </div>

      <Container className="relative pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
        <div className="relative z-10 max-w-2xl">
          <h1
            className="animate-fade-up font-display text-[2.5rem] font-extrabold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0ms' }}
          >
            {t('titleLead')}{' '}
            <span className="bg-gradient-to-r from-lime to-[#c7ef9a] bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>{' '}
            {t('titleTail')}
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-lg text-base leading-relaxed text-white/70 text-pretty sm:text-lg"
            style={{ animationDelay: '80ms' }}
          >
            {t('subtitle')}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '160ms' }}
          >
            <Link
              href="/productos"
              className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-forest-deep shadow-soft transition-all hover:bg-cream hover:shadow-glow active:scale-[0.98]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full px-7 text-base font-semibold text-white ring-1 ring-white/25 transition-all hover:bg-white/10 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Stats */}
          <dl
            className="animate-fade-up mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-7"
            style={{ animationDelay: '240ms' }}
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
