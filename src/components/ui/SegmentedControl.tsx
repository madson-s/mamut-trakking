'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';

export type SegmentedOption<T extends string> = {
  value: T;
  /** Texto do segmento (curto — é um controle compacto). */
  label: ReactNode;
  /** Rótulo acessível quando `label` é só uma sigla ou ícone. */
  title?: string;
};

export type SegmentedControlProps<T extends string> = {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Nomeia o grupo para leitores de tela. */
  label: string;
  size?: 'sm' | 'md';
  /**
   * `segmented` é a pílula única, com os segmentos dentro de uma caixa.
   * `chips` solta os botões: cada um mantém a própria borda e o escolhido
   * assume o verde da marca.
   */
  variant?: SegmentedVariant;
  className?: string;
};

export type SegmentedVariant = 'segmented' | 'chips';

const sizes = {
  sm: 'min-h-8 px-3 text-xs',
  md: 'min-h-10 px-4 text-sm',
} as const;

/**
 * Grupo de escolha única no formato pílula — mesma linguagem do seletor de
 * tema. Para 2–4 opções curtas; acima disso use um `select`.
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  size = 'sm',
  variant = 'segmented',
  className,
}: SegmentedControlProps<T>) {
  const chips = variant === 'chips';

  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        'inline-flex items-center',
        chips
          ? 'flex-wrap gap-2'
          : 'shrink-0 rounded-pill bg-surface-raised p-1 shadow-chip ring-1 ring-inset ring-line-strong',
        className,
      )}
    >
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            title={option.title}
            className={cn(
              'inline-flex items-center justify-center rounded-pill font-body font-medium',
              'transition-[background-color,color,box-shadow,scale]',
              motion.fast,
              press,
              focus.onSurface,
              sizes[size],
              chips && 'ring-1',
              isActive
                ? chips
                  ? 'bg-brand text-brand-contrast ring-brand'
                  : 'bg-surface text-content shadow-chip ring-1 ring-inset ring-line-strong'
                : chips
                  ? 'bg-transparent text-content ring-line-strong hover:bg-surface-raised'
                  : 'text-content-secondary hover:text-content',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
