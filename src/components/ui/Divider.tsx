import { cn } from '@/lib/cn';

/** Filete de 1px na cor de traço do tema. */
export function Divider({
  orientation = 'horizontal',
  className,
}: {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}) {
  return (
    <span
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'block shrink-0 bg-line',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
    />
  );
}
