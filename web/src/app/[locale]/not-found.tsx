import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';

const COPY = {
  es: {
    title: 'Página no encontrada',
    text: 'La página que buscás no existe o fue movida. Volvé al inicio o explorá nuestros productos.',
    home: 'Ir al inicio',
    products: 'Ver productos',
  },
  en: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved. Go back home or explore our products.',
    home: 'Go home',
    products: 'View products',
  },
} as const;

export default function NotFound() {
  const locale = useLocale();
  const c = COPY[locale === 'en' ? 'en' : 'es'];

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-forest/20">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-navy sm:text-3xl">{c.title}</h1>
      <p className="mt-3 max-w-md text-mute text-pretty">{c.text}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-forest-deep"
        >
          {c.home}
        </Link>
        <Link
          href="/productos"
          className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-forest-deep ring-1 ring-forest/25 transition hover:bg-cream"
        >
          {c.products}
        </Link>
      </div>
    </Container>
  );
}
