import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Text } from './Text';

export type FieldProps = {
  /** Rótulo do campo. */
  label: ReactNode;
  /** Controle (`Input`, `Textarea`, `select`…). */
  children: ReactNode;
  /** Texto de apoio abaixo do controle. */
  hint?: ReactNode;
  /** Mensagem de erro — substitui o hint e fica em vermelho. */
  error?: ReactNode;
  className?: string;
};

/**
 * Rótulo + controle + apoio. É um `<label>`, então clicar no texto foca o
 * campo sem precisar de `id`/`htmlFor`.
 */
export function Field({ label, children, hint, error, className }: FieldProps) {
  return (
    <label className={cn('block', className)}>
      <Text as="span" size="xs" weight="medium" tone="secondary" className="mb-1 block">
        {label}
      </Text>
      {children}
      {(error || hint) && (
        <Text
          as="span"
          size="xs"
          tone={error ? 'inherit' : 'subtle'}
          className={cn('mt-1 block', Boolean(error) && 'text-error-500')}
        >
          {error ?? hint}
        </Text>
      )}
    </label>
  );
}
