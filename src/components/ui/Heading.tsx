import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { displaySize, tone as toneMap, type DisplaySize, type Tone } from '@/design/tokens';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';

export type HeadingProps = {
  children: ReactNode;
  /** Tag semântica. Só uma `h1` por página — o resto é `h2`/`h3`. */
  as?: HeadingElement;
  /** Escala visual, independente da tag. */
  size?: DisplaySize;
  tone?: Tone;
  /** `text-balance` — evita órfãs em títulos de 2–3 linhas. */
  balance?: boolean;
  id?: string;
  className?: string;
};

/**
 * Título na fonte display (Mergo). A escala vem de `displaySize`, então as
 * páginas nunca repetem `text-[40px] sm:text-6xl lg:text-[72px]`.
 */
export function Heading({
  children,
  as: Tag = 'h2',
  size = 'section',
  tone = 'default',
  balance = false,
  id,
  className,
}: HeadingProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'font-display',
        displaySize[size],
        toneMap[tone],
        balance && 'text-balance',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
