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
  leading?: Leading;
  font?: 'body' | 'display';
  balance?: boolean;
  pretty?: boolean;
  className?: string;
};

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

export function Emphasis({
  children,
  size = 'quote',
  tone = 'inherit',
  className,
}: {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'quote' | 'card';
  tone?: Tone;
  className?: string;
}) {
  const sizes = {
    xs: 'text-sm',
    sm: 'text-lg',
    quote: 'text-display-xs',
    card: 'text-display-sm',
  } as const;

  return (
    <span className={cn('font-display', sizes[size], toneMap[tone], className)}>{children}</span>
  );
}
