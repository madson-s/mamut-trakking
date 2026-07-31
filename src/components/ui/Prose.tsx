import type { ReactNode } from 'react';

// Corpo de texto legível. Estiliza os filhos (parágrafos, listas, subtítulos)
// para que cada página de detalhe só precise passar o conteúdo.
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 space-y-4 leading-relaxed text-mamut-ink/90 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
      {children}
    </div>
  );
}
