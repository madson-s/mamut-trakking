import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';
import { ArrowRightIcon } from './icons';

export type ButtonVariant = 'primary' | 'outline' | 'outlineOnMedia' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const variants: Record<ButtonVariant, string> = {
  /** CTA principal — verde da marca. */
  primary: 'bg-brand text-brand-contrast hover:bg-brand-hover',
  /** Secundário sobre superfície do tema. */
  outline:
    'border border-line-contrast bg-transparent text-content hover:border-brand hover:bg-brand hover:text-brand-contrast',
  /** Secundário sobre foto/vídeo (borda branca). */
  outlineOnMedia:
    'border border-on-media bg-transparent text-on-media hover:border-brand hover:bg-brand',
  /** Sem caixa — para ações discretas e navegação. */
  ghost: 'bg-transparent text-content hover:text-brand-strong',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-10 gap-1.5 px-4 text-sm',
  md: 'min-h-10 gap-2.5 px-5 py-2.5 text-base',
  lg: 'min-h-12 gap-3 px-6 py-3 text-base',
};

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Seta à direita, com o micro-deslize no hover. */
  arrow?: boolean;
  /** Ícone antes do texto. */
  icon?: ReactNode;
  /** Ocupa a largura toda (CTA de card). */
  block?: boolean;
  /** `between` empurra a seta para a borda — usado nos CTAs de card. */
  justify?: 'center' | 'between';
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
    /** Abre em nova aba. Auto-detectado para URLs absolutas. */
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Botão-pílula do design. Renderiza `<button>`, `<Link>` (rota interna) ou
 * `<a target="_blank">` (URL absoluta) conforme as props — a aparência é a
 * mesma nos três casos.
 */
export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    arrow = false,
    icon,
    block = false,
    justify = 'center',
    className,
    ...rest
  } = props;

  const classes = cn(
    'group inline-flex items-center rounded-pill font-body font-semibold whitespace-nowrap',
    'transition-[background-color,border-color,color,transform]',
    motion.base,
    press,
    variant === 'outlineOnMedia' ? focus.onMedia : focus.onSurface,
    sizes[size],
    variants[variant],
    justify === 'between' ? 'justify-between' : 'justify-center',
    block && 'w-full',
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRightIcon
          className={cn(
            'h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5',
            motion.base,
          )}
        />
      )}
    </>
  );

  if ('href' in props && props.href !== undefined) {
    const { href, external, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
      external?: boolean;
    };
    const isExternal = external ?? /^(https?:)?\/\//.test(href);

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...anchorProps}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={type} className={cn(classes, 'disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100')} {...buttonProps}>
      {content}
    </button>
  );
}
