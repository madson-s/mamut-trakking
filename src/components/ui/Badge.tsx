import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { radius as radiusMap, type Radius } from '@/design/tokens';

export type BadgeVariant = 'outline' | 'outlineOnMedia' | 'brand' | 'solid' | 'soft';
export type BadgeSize = 'sm' | 'md' | 'lg';

const variants: Record<BadgeVariant, string> = {
  /** Borda de contraste sobre superfície do tema. */
  outline: 'border border-line-contrast text-content',
  /** Borda branca sobre foto (chips de duração/nível nos cards). */
  outlineOnMedia: 'border border-on-media text-on-media',
  /** Verde da marca em contorno — rótulo de função/categoria. */
  brand: 'border border-brand-strong text-brand-ink',
  /** Preenchido. */
  solid: 'bg-brand text-brand-contrast',
  /** Caixa levantada com borda suave (stat chips). */
  soft: 'border border-line-strong bg-surface-raised text-content',
};

const sizes: Record<BadgeSize, string> = {
  sm: 'min-h-7 gap-2 px-3 py-1 text-xs',
  md: 'min-h-9 gap-2 px-3 py-2 text-sm',
  lg: 'min-h-11 gap-2.5 px-5 py-2.5 text-lg',
};

export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  radius?: Radius;
  /** Ícone antes do texto (SVG ou <Image>). */
  icon?: ReactNode;
  className?: string;
};

/** Chip informativo — duração, nível, distância, selo, rótulo de função. */
export function Badge({
  children,
  variant = 'outline',
  size = 'sm',
  radius = 'pill',
  icon,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-body font-light whitespace-nowrap',
        radiusMap[radius],
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
