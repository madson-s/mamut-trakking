import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import {
  sectionPadding,
  surfaceTone,
  type ContainerSize,
  type SectionPadding,
  type SurfaceTone,
} from '@/design/tokens';
import { Container } from './Container';

export type SectionProps = {
  children: ReactNode;
  /** Fundo da faixa. `muted` é a seção alternada (cinza claro). */
  surface?: SurfaceTone;
  padding?: SectionPadding;
  /** Filetes em cima e embaixo — acompanha o `surface="muted"` do Figma. */
  bordered?: boolean;
  /** `false` renderiza sem Container (faixas full-bleed). */
  container?: ContainerSize | false;
  /** Classes do wrapper interno — normalmente o flex/gap do conteúdo. */
  containerClassName?: string;
  className?: string;
  id?: string;
  /** id do título que nomeia a seção (acessibilidade). */
  labelledBy?: string;
  'aria-label'?: string;
};

/**
 * Faixa de página: fundo + respiro vertical + container centralizado.
 * É o esqueleto de toda seção nova — o conteúdo entra como children.
 */
export function Section({
  children,
  surface = 'page',
  padding = 'default',
  bordered = false,
  container = 'grid',
  containerClassName,
  className,
  id,
  labelledBy,
  'aria-label': ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      className={cn(
        'w-full',
        surfaceTone[surface],
        sectionPadding[padding],
        bordered && 'border-y border-line',
        className,
      )}
    >
      {container === false ? (
        children
      ) : (
        <Container size={container} className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}
