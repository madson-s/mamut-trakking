import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import {
  bodyLeading,
  bodySize,
  bodyWeight,
  leading as leadingMap,
  tone as toneMap,
  type BodySize,
  type BodyWeight,
  type Leading,
  type Tone,
} from '@/design/tokens';

type TextElement = 'p' | 'span' | 'div' | 'li' | 'strong' | 'figcaption';

export type TextProps = {
  children: ReactNode;
  as?: TextElement;
  size?: BodySize;
  weight?: BodyWeight;
  tone?: Tone;
  /** Substitui a entrelinha default do tamanho. */
  leading?: Leading;
  /** `display` troca para Mergo — usado em destaques dentro de texto corrido. */
  font?: 'body' | 'display';
  balance?: boolean;
  pretty?: boolean;
  className?: string;
};

/**
 * Texto de corpo. Cobre parágrafo, kicker (`size="lg" weight="light"`),
 * legenda (`size="xs"`) e rótulo (`size="sm" weight="semibold"`).
 */
export function Text({
  children,
  as: Tag = 'p',
  size = 'base',
  weight = 'normal',
  tone = 'default',
  leading,
  font = 'body',
  balance = false,
  pretty = false,
  className,
}: TextProps) {
  return (
    <Tag
      className={cn(
        font === 'display' ? 'font-display' : 'font-body',
        bodySize[size],
        leading ? leadingMap[leading] : bodyLeading[size],
        bodyWeight[weight],
        toneMap[tone],
        balance && 'text-balance',
        pretty && 'text-pretty',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Destaque em Mergo dentro de um parágrafo — o padrão
 * "do <em>caminhante</em> de fim de semana" que aparece na home.
 */
export function Emphasis({
  children,
  size = 'quote',
  tone = 'inherit',
  className,
}: {
  children: ReactNode;
  /** `sm` = 18px, `quote` = 24px (default do Figma), `card` = 30px. */
  size?: 'sm' | 'quote' | 'card';
  tone?: Tone;
  className?: string;
}) {
  const sizes = {
    sm: 'text-lg',
    quote: 'text-display-xs',
    card: 'text-display-sm',
  } as const;

  return (
    <span className={cn('font-display', sizes[size], toneMap[tone], className)}>{children}</span>
  );
}
