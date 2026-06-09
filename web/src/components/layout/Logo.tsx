import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/cn';

const SOURCES = {
  color: { src: '/isotipo-light.png', w: 1200, h: 507 },
  onDark: { src: '/isotipo-final.png', w: 1200, h: 507 },
} as const;

/** Logo enlazado al home. variant="onDark" (fondo transparente) para fondos oscuros. */
export function Logo({
  variant = 'color',
  className,
  priority = false,
  linkClassName,
}: {
  variant?: 'color' | 'onDark';
  className?: string;
  priority?: boolean;
  linkClassName?: string;
}) {
  const { src, w, h } = SOURCES[variant];
  const label = `${siteConfig.name} — ${siteConfig.tagline}`;

  return (
    <Link href="/" aria-label={label} className={cn('inline-flex items-center', linkClassName)}>
      <Image
        src={src}
        alt={label}
        width={w}
        height={h}
        priority={priority}
        className={cn('w-auto', className)}
      />
    </Link>
  );
}
