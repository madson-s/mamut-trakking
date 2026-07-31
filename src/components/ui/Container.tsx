import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { containerSize, type ContainerSize } from '@/design/tokens';

export type ContainerProps = {
  children: ReactNode;
  /** `grid` (1216) é o grid de 12 colunas do Figma e o default do site. */
  size?: ContainerSize;
  /** Gutter lateral. Desligue quando a seção já controla o padding. */
  padded?: boolean;
  className?: string;
};

/** Centraliza e limita a largura do conteúdo. Componente puro de layout. */
export function Container({
  children,
  size = 'grid',
  padded = true,
  className,
}: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full', containerSize[size], padded && 'px-6', className)}>
      {children}
    </div>
  );
}
