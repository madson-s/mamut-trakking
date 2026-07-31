import type { ReactNode } from 'react';

// Marcador visível e sinalizado para conteúdo/asset que ainda não foi possível
// obter do handoff/Figma. Deixa o espaço reservado e avisa o que falta, para
// direcionamento manual — nunca inventa conteúdo.
export function Placeholder({
  label,
  className = '',
  children,
}: {
  label: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-warning-500/70 bg-warning-500/5 p-3 text-center ${className}`}
    >
      <span className="font-body text-xs leading-tight text-warning-500">
        ⚠ {label}
        {children}
      </span>
    </div>
  );
}
