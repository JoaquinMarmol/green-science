import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Eyebrow (label verde) + título + subtítulo. tone="light" para fondos oscuros. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const light = tone === 'light';
  const center = align === 'center';

  return (
    <div className={cn(center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm',
            light ? 'text-lime-400' : 'text-forest',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-display text-[1.75rem] font-bold leading-[1.15] text-balance sm:text-3xl lg:text-[2.4rem]',
          light ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
            light ? 'text-white/70' : 'text-mute',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
