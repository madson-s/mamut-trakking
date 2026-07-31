import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { focus, motion } from '@/design/tokens';

export type ControlSize = 'sm' | 'md';

/** Classes compartilhadas por input, textarea e select. */
export const controlBase =
  'w-full rounded-control border bg-surface font-body text-content placeholder:text-content-subtle transition-[border-color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50';

export const controlSizes: Record<ControlSize, string> = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3.5 py-2.5 text-base',
};

export function controlClasses(size: ControlSize, invalid: boolean, className?: string) {
  return cn(
    controlBase,
    motion.fast,
    controlSizes[size],
    invalid
      ? 'border-error-500 focus:border-error-500 focus:ring-2 focus:ring-error-500/30 outline-none'
      : cn('border-line-strong', focus.control),
    className,
  );
}

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: ControlSize;
  invalid?: boolean;
};

/** Campo de texto de uma linha. Use dentro de `Field` para ter rótulo. */
export function Input({ size = 'sm', invalid = false, className, ...props }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={controlClasses(size, invalid, className)}
      {...props}
    />
  );
}
