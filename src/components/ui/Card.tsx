import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import {
  elevation as elevationMap,
  radius as radiusMap,
  type Elevation,
  type Radius,
} from '@/design/tokens';

export type CardProps = {
  children: ReactNode;
  /** `raised` = card de conteúdo; `muted` = card de leitura; `outline` = só borda. */
  surface?: 'raised' | 'muted' | 'outline';
  radius?: Radius;
  elevation?: Elevation;
  bordered?: boolean;
  /** Padding interno. `none` para cards que controlam o próprio espaçamento. */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Tag renderizada — `article`/`section` quando o card é um bloco de conteúdo. */
  as?: 'div' | 'article' | 'section';
  className?: string;
};

const surfaces = {
  raised: 'bg-surface-raised',
  muted: 'bg-surface-muted',
  outline: 'bg-transparent',
} as const;

const paddings = {
  none: '',
  sm: 'px-5 py-4',
  md: 'px-6 py-5',
  lg: 'px-8 py-6',
} as const;

/** Caixa de conteúdo sobre superfície do tema (sem mídia de fundo). */
export function Card({
  children,
  surface = 'raised',
  radius = 'card',
  elevation = 'none',
  bordered = true,
  padding = 'md',
  as: Tag = 'div',
  className,
}: CardProps) {
  return (
    <Tag
      className={cn(
        'relative flex flex-col',
        surfaces[surface],
        radiusMap[radius],
        elevationMap[elevation],
        bordered && 'border border-line-strong',
        paddings[padding],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
