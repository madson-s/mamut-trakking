'use client';

import Image from 'next/image';
import { CaretDownIcon } from '@/components/ui/icons';

const DESTINATIONS = [
  {
    src: '/img/home_square_right_morro_1_1_5x.webp',
    alt: 'Vale do Pati ao pôr do sol',
    href: '/pt/aventuras/vale-do-pati-5-dias',
  },
  {
    src: '/img/home_square_right_morro_2_1_5x.webp',
    alt: 'Centro histórico de Lençóis',
    href: '/pt/aventuras/city-tour-lencois',
  },
  {
    src: '/img/home_square_right_morro_3_1_5x.webp',
    alt: 'Morro do Pai Inácio',
    href: '/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio',
  },
] as const;

export function HeroDestinations() {
  return (
    <div className="flex items-center gap-6">
      {DESTINATIONS.map(({ src, alt, href }) => (
        <a
          key={src}
          href={href}
          aria-label={`Conhecer ${alt}`}
          onPointerMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            const pointerX = Math.max(14, Math.min(bounds.width - 14, event.clientX - bounds.left));
            event.currentTarget.style.setProperty('--pointer-x', `${pointerX}px`);
          }}
          className="group relative shrink-0 pb-3 focus-visible:outline-none"
        >
          <span className="relative block h-[124px] w-[122px] overflow-hidden rounded-[28px] shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="122px"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
            />

            <span
              aria-hidden
              className="pointer-events-none absolute bottom-[10px] left-[10px] flex size-8 scale-[0.25] items-center justify-center opacity-0 blur-[4px] transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(.2,0,0,1)] group-hover:scale-100 group-hover:opacity-100 group-hover:blur-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 group-focus-visible:blur-0"
            >
              <span className="flex size-[23px] -rotate-45 items-center justify-center rounded-full border border-white text-white">
                <CaretDownIcon className="size-3 -rotate-90" />
              </span>
            </span>
          </span>

          <span
            aria-hidden
            style={{ left: 'var(--pointer-x, 50%)' }}
            className="absolute bottom-0 h-[3px] w-7 -translate-x-1/2 rounded-full bg-white opacity-0 transition-[opacity,translate] duration-150 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        </a>
      ))}
    </div>
  );
}
