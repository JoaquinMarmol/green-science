import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/motion/FadeIn';
import { whatsappLink } from '@/lib/site';

export function FinalCTA() {
  const t = useTranslations('cta');

  return (
    <Container className="py-16 sm:pb-16">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center shadow-glow sm:px-12 lg:py-20">
          {/* Símbolo de marca de fondo */}
          <Image
            src="/logo-symbol.png"
            alt=""
            aria-hidden
            width={469}
            height={696}
            className="blend-screen pointer-events-none absolute -bottom-10 -right-6 h-64 w-auto opacity-20 sm:h-80"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(60% 80% at 50% 0%, rgba(255,255,255,0.18), transparent 70%)',
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-[2.75rem]">
              {t('title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 text-pretty sm:text-lg">
              {t('subtitle')}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-forest-deep shadow-soft transition-all hover:bg-cream active:scale-[0.98]"
              >
                {t('primary')}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={whatsappLink(t('whatsappMessage'))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-night/85 px-7 text-base font-semibold text-white ring-1 ring-white/15 transition-all hover:bg-night active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t('whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
