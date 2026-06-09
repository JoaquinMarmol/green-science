import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Contenedor de ancho máximo (1200px) con padding lateral consistente. */
export function Container({
  as: As = 'div',
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <As className={cn('container-px', className)}>{children}</As>;
}
