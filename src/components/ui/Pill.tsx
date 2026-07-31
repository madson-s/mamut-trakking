import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from './icons';

type PillVariant = 'solid' | 'outline';

// Botão-pílula do design (rounded-full). "solid" = verde primário / texto claro;
// "outline" = borda clara / transparente. `arrow` adiciona a seta à direita.
export function Pill({
  children,
  href,
  variant = 'solid',
  arrow = true,
  size = 'md',
  className = '',
}: {
  children: ReactNode;
  href?: string;
  variant?: PillVariant;
  arrow?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform] duration-300 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2';
  const sizes = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-5 py-2.5 text-base';
  const variants: Record<PillVariant, string> = {
    solid: 'bg-primary-500 text-white hover:bg-primary-filled-hover',
    outline:
      'border border-gray-950 bg-transparent text-gray-950 hover:border-primary-500 hover:bg-primary-500 hover:text-white',
  };
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return <span className={cls}>{inner}</span>;
}
