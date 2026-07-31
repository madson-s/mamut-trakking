import type { ReactNode } from 'react';

// Largura máxima padrão do conteúdo. Componente burro de layout.
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}
