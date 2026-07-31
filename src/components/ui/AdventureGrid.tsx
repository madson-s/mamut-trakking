import type { ReactNode } from 'react';

// Grade responsiva de cards de aventura. 3 colunas por padrão (hub) ou 4
// (destaques da Home).
export function AdventureGrid({
  children,
  columns = 3,
}: {
  children: ReactNode;
  columns?: 3 | 4;
}) {
  const cols = columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';
  return <div className={`grid gap-8 ${cols}`}>{children}</div>;
}
