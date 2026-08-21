'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { focus, press } from '@/design/tokens';

export type DrawerProps = {
  open: boolean;
  onClose: () => void;
  /** Título visível no topo — também nomeia o diálogo para leitores de tela. */
  title: string;
  children: ReactNode;
  /** Bloco fixo no rodapé, separado do conteúdo por um filete. */
  footer?: ReactNode;
  /** Largura máxima do painel. */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizes: Record<NonNullable<DrawerProps['size']>, string> = {
  sm: 'max-w-90',
  md: 'max-w-105',
  lg: 'max-w-140',
};

/**
 * Diálogo centralizado na tela — mesma forma no mobile e no desktop.
 * Cuida de ESC, clique no backdrop e travamento da rolagem da página;
 * o conteúdo é responsabilidade de quem chama.
 */
export function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  className,
}: DrawerProps) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label={`Fechar ${title.toLowerCase()}`}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/65"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          'relative flex max-h-[86dvh] w-full flex-col overflow-hidden',
          'rounded-panel-lg bg-surface-muted text-content shadow-popover ring-1 ring-line-strong',
          sizes[size],
          className,
        )}
      >
        <div className="flex items-center justify-between gap-4 px-6 pt-6">
          <h2 className="font-display text-display-xs">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={`Fechar ${title.toLowerCase()}`}
            className={cn(
              'grid size-9 shrink-0 place-items-center rounded-pill bg-surface-raised text-content',
              'transition-[background-color,scale] duration-200 ease-out hover:bg-surface-sunken',
              press,
              focus.onSurface,
            )}
          >
            <span aria-hidden className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-7">{children}</div>

        {footer ? <div className="border-t border-line px-6 py-6">{footer}</div> : null}
      </div>
    </div>
  );
}
