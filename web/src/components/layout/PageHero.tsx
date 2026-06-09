import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

/** Encabezado superior de páginas internas. Incluye el padding para liberar el header fijo. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  align = 'center',
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  align?: 'center' | 'left';
}) {
  const center = align === 'center';

  return (
    <section className="relative overflow-hidden border-b border-ink/5 bg-cream pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-lime/10 blur-[90px]"
        aria-hidden
      />
      <Container className="relative">
        <div className={cn(center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl')}>
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest sm:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-3xl font-bold leading-[1.12] text-navy text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                'mt-4 text-base leading-relaxed text-mute text-pretty sm:text-lg',
                center && 'mx-auto',
              )}
            >
              {subtitle}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
