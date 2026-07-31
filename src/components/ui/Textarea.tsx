import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { controlClasses, type ControlSize } from './Input';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: ControlSize;
  invalid?: boolean;
};

/** Campo de texto multilinha — mesma casca visual do `Input`. */
export function Textarea({ size = 'sm', invalid = false, className, ...props }: TextareaProps) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      className={controlClasses(size, invalid, cn('min-h-[52px] resize-y', className))}
      {...props}
    />
  );
}
