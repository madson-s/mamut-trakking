'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { Locale } from '@/lib/site';
import { HOME_CONTENT } from './home-content';

// As fotos são fixas; título, legenda e destino vêm do idioma.
const FOTOS = [
  { src: '/img/adventures/home/vale-do-pati-3-dias.jpeg', alt: 'Caminhantes percorrendo o Vale do Pati' },
  { src: '/img/adventures/home/cachoeira-do-palmital.jpeg', alt: 'Queda-d’água da Cachoeira do Palmital' },
  { src: '/img/home_square_right_morro_3_1_5x.webp', alt: 'Morro do Pai Inácio' },
] as const;

export function HeroDestinations({ locale = 'pt' }: { locale?: Locale }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hero = HOME_CONTENT[locale].hero;
  const destinations = hero.destinos.map((destino, i) => ({
    ...FOTOS[i],
    title: destino.titulo,
    subtitle: destino.subtitulo,
    href: destino.href,
  }));

  return (
    <div className="flex h-32.25 items-start gap-6">
      {destinations.map((destination, i) => {
        const isActive = activeIndex === i;

        return (
          <Link
            key={destination.href}
            href={destination.href}
            aria-label={`${hero.verDestino} ${destination.title}`}
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
              <span className="flex min-w-0 flex-col gap-1 text-on-media">
                <span className="truncate font-body text-xs font-semibold">{destination.title}</span>
                <span className="truncate font-body text-[10px] font-light text-on-media-muted">
                  {destination.subtitle}
                </span>
              </span>

              <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-white text-white">
                <ArrowRightIcon className="size-2.5" />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
