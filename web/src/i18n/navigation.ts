import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Wrappers de navegación conscientes del idioma (Link, useRouter, usePathname...).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
