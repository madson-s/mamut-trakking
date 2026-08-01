import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Corpo de texto legível. Estiliza os filhos (parágrafos, listas, subtítulos)
 * para que cada página de detalhe só precise passar o conteúdo.
 *
 * É o único lugar do design system que pinta por descendente (`[&_h2]`), porque
 * o conteúdo vem como HTML solto da página — em markup escrito à mão, use
 * `Heading` e `Text`.
 */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 leading-relaxed text-content-secondary',
        '[&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-display-xs [&_h2]:text-content',
        '[&_h3]:font-display [&_h3]:text-lg [&_h3]:text-content',
        '[&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6',
        '[&_strong]:font-medium [&_strong]:text-content',
        '[&_a]:text-brand-strong [&_a]:underline [&_a]:underline-offset-2',
        className,
      )}
    >
      {children}
    </div>
  );
}
