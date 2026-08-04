'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@/components/ui';
import { cn } from '@/lib/cn';

const DESTINATIONS = [
  {
    src: '/img/home_square_right_morro_1_1_5x.webp',
    alt: 'Vale do Pati ao pôr do sol',
    title: 'Vale do Pati',
    subtitle: '5 dias · travessia',
    href: '/pt/aventuras/vale-do-pati-5-dias',
  },
  {
    src: '/img/home_square_right_morro_2_1_5x.webp',
    alt: 'Centro histórico de Lençóis',
    title: 'Lençóis',
    subtitle: '1 dia · city tour',
    href: '/pt/aventuras/city-tour-lencois',
  },
  {
    src: '/img/home_square_right_morro_3_1_5x.webp',
    alt: 'Morro do Pai Inácio',
    title: 'Pai Inácio',
    subtitle: '1 dia · trekking',
    href: '/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio',
  },
] as const;

export function HeroDestinations() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex h-32.25 items-start gap-6">
      {DESTINATIONS.map((destination, i) => {
        const isActive = activeIndex === i;

        return (
          <a
            key={destination.href}
            href={destination.href}
            aria-label={`Conhecer ${destination.title}`}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex((current) => (current === i ? null : current))}
            onFocus={() => setActiveIndex(i)}
            onBlur={() => setActiveIndex((current) => (current === i ? null : current))}
            className={cn(
              'group relative block overflow-hidden rounded-card-lg',
              'shadow-[0_0_0_1px_rgba(255,255,255,0.10)]',
              'transition-[width,height] duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] focus-visible:outline-none',
              isActive ? 'z-10 h-32.25 w-37.5' : 'h-29.25 w-35.5',
            )}
          >
            <Image src={destination.src} alt={destination.alt} fill sizes="150px" className="object-cover" />

            <span
              aria-hidden
              className={cn(
                'pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent',
                'opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]',
                isActive && 'opacity-100',
              )}
            />

            <span
              aria-hidden={!isActive}
              className={cn(
                'pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-2',
                'translate-y-1 opacity-0 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]',
                isActive && 'translate-y-0 opacity-100',
              )}
            >
              <span className="flex min-w-0 flex-col gap-0.5 text-on-media">
                <span className="truncate font-body text-xs font-semibold">{destination.title}</span>
                <span className="truncate font-body text-[10px] font-light text-on-media-muted">
                  {destination.subtitle}
                </span>
              </span>

              <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-white text-white">
                <ArrowRightIcon className="size-2.5" />
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
