import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'white' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out-expo focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none select-none';

const variants: Record<Variant, string> = {
  primary: 'bg-forest text-white shadow-soft hover:bg-forest-deep hover:shadow-glow active:scale-[0.98]',
  secondary:
    'bg-white text-forest-deep ring-1 ring-forest/25 hover:ring-forest/60 hover:bg-cream active:scale-[0.98]',
  ghost: 'text-forest-deep hover:bg-forest/10 active:scale-[0.98]',
  white: 'bg-white text-forest-deep shadow-soft hover:bg-cream active:scale-[0.98]',
  whatsapp: 'bg-[#25D366] text-white shadow-soft hover:brightness-95 active:scale-[0.98]',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-[3.25rem] px-7 text-base',
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  title?: string;
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  external,
  type = 'button',
  onClick,
  disabled,
  target,
  rel,
  'aria-label': ariaLabel,
  title,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href && external) {
    return (
      <a
        href={href}
        className={classes}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        aria-label={ariaLabel}
        title={title}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} title={title}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  );
}
