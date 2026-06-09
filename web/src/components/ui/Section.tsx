import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

/**
 * Sección con espaciado vertical consistente (64px móvil → ~112px desktop).
 * `container={false}` para secciones que manejan su propio ancho (p. ej. hero).
 */
export function Section({
  id,
  className,
  innerClassName,
  children,
  container = true,
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  container?: boolean;
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-28', className)}>
      {container ? <Container className={innerClassName}>{children}</Container> : children}
    </section>
  );
}
