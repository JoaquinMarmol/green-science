import { MapPin, Phone, Mail, MessageCircle, AlertTriangle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Brand } from './Brand';
import { Container } from '@/components/ui/Container';
import { products } from '@/data/products';
import { siteConfig, whatsappLink } from '@/lib/site';

const NAV = [
  { href: '/', key: 'home' },
  { href: '/productos', key: 'products' },
  { href: '/nosotros', key: 'about' },
  { href: '/contacto', key: 'contact' },
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const tc = useTranslations('common');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-white/70">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          {/* Marca */}
          <div className="max-w-sm">
            <Brand variant="onDark" className="h-10" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-lime/90">
              Línea Green Science · {t('parent')}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{t('tagline')}</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-medium text-white transition hover:brightness-95"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {tc('writeWhatsapp')}
            </a>
          </div>

          {/* Navegación */}
          <nav aria-label={t('navTitle')}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('navTitle')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-lime">
                    {tn(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Productos */}
          <nav aria-label={t('productsTitle')}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('productsTitle')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/productos/${p.slug}`}
                    className="transition-colors hover:text-lime"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('contactTitle')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                <span className="flex flex-col">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                      className="transition-colors hover:text-lime"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-lime">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Aviso legal / SENASAG + emergencias */}
        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/45">
          <p>{t('senasag')}</p>
          <p className="flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>
              {t('emergencyLabel')}: {siteConfig.emergency}
            </span>
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {t('rights')}
          </p>
          <p className="uppercase tracking-wider">{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
