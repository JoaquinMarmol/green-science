import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

const GS = {
  color: '/isotipo-light.png',
  onDark: '/isotipo-final.png',
  w: 1200,
  h: 507,
} as const;

const BA = {
  color: '/bioagro-color.png',
  onDark: '/bioagro-on-dark.png',
  w: 2397,
  h: 1032,
} as const;

/**
 * Co-marca: Green Science (línea) + BioAgroSolutions (empresa madre).
 * variant="onDark" para fondos oscuros (hero transparente / footer).
 */
export function Brand({
  variant = 'color',
  className,
  priority = false,
}: {
  variant?: 'color' | 'onDark';
  className?: string;
  priority?: boolean;
}) {
  const gs = variant === 'onDark' ? GS.onDark : GS.color;
  const ba = variant === 'onDark' ? BA.onDark : BA.color;
  const divider = variant === 'onDark' ? 'bg-white/25' : 'bg-ink/15';

  return (
    <div className={cn('flex items-center gap-2.5 sm:gap-3.5', className)}>
      <Link href="/" aria-label="Green Science — Inicio" className="inline-flex h-full items-center">
        <Image
          src={gs}
          alt="Green Science"
          width={GS.w}
          height={GS.h}
          priority={priority}
          className="h-full w-auto"
        />
      </Link>

      <span className={cn('h-2/3 w-px shrink-0', divider)} aria-hidden />

      <a
        href="https://www.bioagrosolutions.com.ar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="BioAgroSolutions — empresa madre"
        className="inline-flex h-full items-center"
      >
        <Image src={ba} alt="BioAgroSolutions" width={BA.w} height={BA.h} className="h-full w-auto" />
      </a>
    </div>
  );
}
