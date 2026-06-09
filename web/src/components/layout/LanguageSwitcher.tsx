'use client';

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/cn';

/** Toggle ES/EN que conserva la ruta actual. tone según el fondo del header. */
export function LanguageSwitcher({ tone = 'onLight' }: { tone?: 'onLight' | 'onDark' }) {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const current = (params?.locale as string) ?? routing.defaultLocale;
  const [isPending, startTransition] = useTransition();

  const switchTo = (locale: string) => {
    if (locale === current) return;
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  const onDark = tone === 'onDark';

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full p-0.5 text-xs font-semibold ring-1',
        onDark ? 'bg-white/10 ring-white/20' : 'bg-cream ring-ink/10',
        isPending && 'opacity-70',
      )}
      role="group"
      aria-label="Idioma / Language"
    >
      {routing.locales.map((locale) => {
        const active = locale === current;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchTo(locale)}
            aria-pressed={active}
            className={cn(
              'rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors',
              active
                ? 'bg-forest text-white shadow-sm'
                : onDark
                  ? 'text-white/75 hover:text-white'
                  : 'text-mute hover:text-forest-deep',
            )}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
