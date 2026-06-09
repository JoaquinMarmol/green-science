import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Aplica i18n a todas las rutas salvo API, internals de Next y archivos con extensión
  // (imágenes, sitemap.xml, robots.txt, etc.).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
