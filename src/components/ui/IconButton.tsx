import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';

export type IconButtonVariant = 'primary' | 'outline' | 'outlineOnMedia' | 'solidOnMedia' | 'subtle';
export type IconButtonSize = 'sm' | 'md' | 'lg';

const variants: Record<IconButtonVariant, string> = {
  primary: 'bg-brand text-brand-contrast hover:bg-brand-hover',
  outline:
    'border border-line-contrast bg-transparent text-content hover:border-brand hover:bg-brand hover:text-brand-contrast',
  outlineOnMedia:
    'border border-on-media bg-transparent text-on-media hover:border-brand hover:bg-brand',
  /** Botão branco sobre foto (canto do card de roteiro). */
  solidOnMedia: 'bg-white text-gray-1100 hover:bg-brand hover:text-brand-contrast',
  /** Sobre superfície levantada — usado em toggles e controles de header. */
  subtle:
    'bg-surface-raised text-content-secondary ring-1 ring-inset ring-line-strong hover:bg-surface-sunken hover:text-content',
};

const sizes: Record<IconButtonSize, string> = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
};

type BaseProps = {
  /** Obrigatório: vira `aria-label` (o botão não tem texto visível). */
  label: string;
  children: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  className?: string;
};

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps | 'aria-label'> & {
    href?: undefined;
  };

type AsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'aria-label'> & {
    href: string;
    external?: boolean;
  };

export type IconButtonProps = AsButton | AsLink;

/** Botão circular só com ícone: setas de carrossel, controles sobre foto. */
export function IconButton(props: IconButtonProps) {
  const { label, children, variant = 'primary', size = 'md', className, ...rest } = props;

  const classes = cn(
    'group inline-flex shrink-0 items-center justify-center rounded-pill',
    'transition-[background-color,border-color,color,opacity,transform]',
    motion.base,
    press,
    variant === 'outlineOnMedia' || variant === 'solidOnMedia' ? focus.onMedia : focus.onSurface,
    sizes[size],
    variants[variant],
    className,
  );

  if ('href' in props && props.href !== undefined) {
    const { href, external, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
      external?: boolean;
    };
    const isExternal = external ?? /^(https?:)?\/\//.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} aria-label={label} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        classes,
        'disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100',
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
