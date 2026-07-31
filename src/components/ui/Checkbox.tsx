import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { focus } from '@/design/tokens';
import { Text } from './Text';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  /** Rótulo ao lado da caixa. Sem ele, passe `aria-label`. */
  label?: ReactNode;
  /** Risca o rótulo — item desativado, mas ainda visível. */
  struck?: boolean;
  className?: string;
};

/** Caixa de marcação com rótulo opcional. */
export function Checkbox({ label, struck = false, className, ...props }: CheckboxProps) {
  const box = (
    <input
      type="checkbox"
      className={cn(
        'size-4 shrink-0 accent-brand',
        focus.onSurface,
        !label && className,
      )}
      {...props}
    />
  );

  if (!label) return box;

  return (
    <label className={cn('flex cursor-pointer items-center gap-2', className)}>
      {box}
      <Text as="span" size="sm" tone={struck ? 'muted' : 'default'} className={struck ? 'line-through' : undefined}>
        {label}
      </Text>
    </label>
  );
}
