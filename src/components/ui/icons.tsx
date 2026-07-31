import type { HTMLAttributes, SVGProps } from 'react';

const FIGMA_CARET_LEAF = '/svg/figma/caret-down/leaf.svg';

/** CaretDown do Figma (572:812): caixa externa e folha mantidas separadamente. */
export function CaretDownIcon({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-block shrink-0 ${className}`}
      {...props}
    >
      <span className="absolute inset-[37.5%_18.75%_31.25%_18.75%]">
        <span
          className="absolute inset-[-7.27%_-3.64%] bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%]"
          style={{
            WebkitMaskImage: `url(${FIGMA_CARET_LEAF})`,
            maskImage: `url(${FIGMA_CARET_LEAF})`,
          }}
        />
      </span>
    </span>
  );
}

// Ícones de UI (genéricos). No Figma os botões usam um "CaretDown" rotacionado
// −90° para apontar à direita — aqui é uma seta/chevron à direita.
export function ArrowRightIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M3.5 8h9m0 0L8.5 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M8 12.5v-9m0 0L4 7.5m4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowDownIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M8 3.5v9m0 0 4-4m-4 4-4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Alça de arraste (dois trilhos de pontos). */
export function GripIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className} {...props}>
      {[4, 8, 12].map((y) => (
        <g key={y}>
          <circle cx="6" cy={y} r="1.1" />
          <circle cx="10" cy={y} r="1.1" />
        </g>
      ))}
    </svg>
  );
}

export function PlusIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M8 3.5v9M3.5 8h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function XIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M4 4l8 8m0-8l-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DownloadIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M8 2.5v7.5m0 0L5 7m3 3 3-3M3 12.5h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9 6.2 20.86l1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
    </svg>
  );
}

// Fileira de 5 estrelas (rating).
export function StarRating({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[2px] text-warning-500 ${className ?? ''}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-[17px] w-[17px]" />
      ))}
    </span>
  );
}

export function InstagramIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
    </svg>
  );
}
