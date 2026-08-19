'use client';

import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { whatsappLink } from '@/lib/site';
import { cn } from '@/lib/cn';
import { Brand } from './Brand';
import { LanguageSwitcher } from './LanguageSwitcher';

const NAV = [
  { href: '/', key: 'home' },
  { href: '/productos', key: 'products' },
  { href: '/cultivos', key: 'crops' },
  { href: '/casos', key: 'casos' },
  { href: '/nosotros', key: 'about' },
  { href: '/contacto', key: 'contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled && !open;

  // Detecta scroll para volver el header sólido sobre el hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cierra el menú al cambiar de ruta.
  useEffect(() => setOpen(false), [pathname]);

  // Bloquea el scroll del body y permite cerrar con Escape mientras el menú está abierto.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-colors duration-300',
          transparent
            ? 'bg-transparent'
            : 'border-b border-ink/5 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75',
        )}
      >
        <div className="container-px flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <Brand
            variant={transparent ? 'onDark' : 'color'}
            priority
            className="h-8 sm:h-11"
          />

          {/* Navegación desktop */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label={t('home')}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                  transparent
                    ? 'text-white/85 hover:text-white'
                    : 'text-ink/75 hover:text-forest-deep',
                  isActive(item.href) && (transparent ? 'text-white' : 'text-forest-deep'),
                )}
              >
                {t(item.key)}
                {isActive(item.href) ? (
                  <span
                    className={cn(
                      'absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full',
                      transparent ? 'bg-lime' : 'bg-forest',
                    )}
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          {/* Acciones desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher tone={transparent ? 'onDark' : 'onLight'} />
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-forest px-4 text-sm font-medium text-white shadow-soft transition-all hover:bg-forest-deep hover:shadow-glow active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {tc('whatsapp')}
            </a>
          </div>

          {/* Acciones móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher tone={transparent ? 'onDark' : 'onLight'} />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t('openMenu')}
              aria-expanded={open}
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 transition-colors',
                transparent
                  ? 'text-white ring-white/25 hover:bg-white/10'
                  : 'text-forest-deep ring-ink/10 hover:bg-forest/5',
              )}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay de menú móvil full-screen */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-white transition-all duration-300 lg:hidden',
          open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
        )}
        aria-hidden={!open}
      >
        <div className="container-px flex h-16 items-center justify-between">
          <Brand variant="color" className="h-8" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t('closeMenu')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-deep ring-1 ring-ink/10 hover:bg-forest/5"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <nav className="container-px flex flex-1 flex-col justify-center gap-1 pb-16" aria-label={t('home')}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-semibold transition-colors',
                isActive(item.href)
                  ? 'bg-forest/8 text-forest-deep'
                  : 'text-navy hover:bg-cream',
              )}
            >
              {t(item.key)}
            </Link>
          ))}

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] text-lg font-semibold text-white shadow-soft active:scale-[0.99]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            {tc('writeWhatsapp')}
          </a>
        </nav>
      </div>
    </header>
  );
}
