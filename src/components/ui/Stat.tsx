import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Heading } from './Heading';
import { Text } from './Text';

export type StatProps = {
  /** Número/palavra em destaque. */
  value: ReactNode;
  /** Legenda abaixo. */
  label: ReactNode;
  /** `plain` = barra de autoridade; `chip` = caixa com borda. */
  variant?: 'plain' | 'chip';
  align?: 'center' | 'left';
  className?: string;
};

/** Par valor + legenda. Usado na barra de autoridade e nos chips de avaliação. */
export function Stat({ value, label, variant = 'plain', align, className }: StatProps) {
  const centered = (align ?? (variant === 'plain' ? 'center' : 'left')) === 'center';

  if (variant === 'chip') {
    return (
      <div
        className={cn(
          'flex flex-col justify-center rounded-chip border border-line-strong bg-surface-raised px-4 py-2.5',
          centered && 'items-center text-center',
          className,
        )}
      >
        <Heading as="span" size="quote">
          {value}
        </Heading>
        <Text as="span" size="sm">
          {label}
        </Text>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex w-full flex-col justify-center',
        centered && 'items-center text-center',
        className,
      )}
    >
      <Text as="p" size="lg" weight="medium" className="lg:text-xl">
        {value}
      </Text>
      <Text as="p" size="sm" tone="subtle" className="mt-1 lg:text-base">
        {label}
      </Text>
    </div>
  );
}
