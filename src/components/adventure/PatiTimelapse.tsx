'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';

const SLIDES = [
  { src: '/img/vale-do-pati/vale-do-pati-06.webp', alt: 'Caminhantes celebrando em um mirante do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-04.webp', alt: 'Caminhantes diante dos paredões do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-14.webp', alt: 'Trilha entre as formações do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-20.webp', alt: 'Vista panorâmica do Vale do Pati' },
] as const;

const INTERVAL_MS = 4500;

export function PatiTimelapse() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-105 overflow-hidden rounded-panel-lg bg-media-backdrop shadow-image-outline">
      {SLIDES.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={index === activeIndex ? slide.alt : ''}
          fill
          sizes="(min-width:1024px) 546px, 100vw"
          aria-hidden={index !== activeIndex}
          className={`object-cover transition-[opacity,filter,transform] duration-700 ease-brand motion-reduce:transition-none ${
            index === activeIndex
              ? 'scale-100 opacity-100 blur-none'
              : 'pointer-events-none scale-[1.015] opacity-0 blur-xs'
          }`}
        />
      ))}

      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

      <div className="absolute inset-x-5 bottom-5 z-10 flex flex-col gap-4">
        <div className="flex justify-center gap-0.5" role="group" aria-label="Escolher foto do Vale do Pati">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Mostrar foto ${index + 1} de ${SLIDES.length}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className="group inline-flex size-8 items-center justify-center rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span
                className={`size-2 rounded-full border border-white/80 transition-[background-color,border-color,scale] duration-300 ease-out group-active:scale-[0.96] ${
                  index === activeIndex ? 'scale-110 border-white bg-white' : 'bg-black/12'
                }`}
              />
            </button>
          ))}
        </div>
        <Button href="/pt/aventuras/vale-do-pati-3-dias/galeria" variant="outlineOnMedia" size="lg" block>
          Ver todas as fotos
        </Button>
      </div>
    </div>
  );
}
