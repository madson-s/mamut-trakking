import type { ReactNode } from 'react';

// Grid do design system (Figma): 12 col × 72px + 11 gaps × 32px = 1216px de
// conteúdo. Em 1440 de viewport, isso equivale a 112px de padding lateral.
// Este componente é a fonte única de verdade para a "margem de segurança".
export function GridContainer({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav';
}) {
  return (
    <Tag className={`mx-auto w-full max-w-[1216px] px-6 sm:px-10 lg:px-0 ${className}`}>
      {children}
    </Tag>
  );
}
