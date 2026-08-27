'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Badge, Button, Heading, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { AssetIcon } from './AssetIcon';

export type ItineraryItem = {
  day: string;
  icon: string;
  distance: string;
  level: string;
  lead: string;
  body: string;
  note?: string;
  alert?: string;
};

const SLIDES = [
  { src: '/img/vale-do-pati/vale-do-pati-06.webp', alt: 'Caminhantes celebrando em um mirante do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-04.webp', alt: 'Caminhantes diante dos paredões do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-14.webp', alt: 'Trilha entre as formações do Vale do Pati' },
  { src: '/img/vale-do-pati/vale-do-pati-20.webp', alt: 'Vista panorâmica do Vale do Pati' },
] as const;

const INTERVAL_MS = 4500;

export function PatiItinerary({ items, galleryHref }: { items: readonly ItineraryItem[]; galleryHref: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDay = Math.min(activeIndex, items.length - 1);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_546px]">
      <ol className="relative flex flex-col gap-6">
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-7 w-px bg-[linear-gradient(180deg,var(--surface)_0%,var(--line)_50%,var(--surface)_100%)]"
        />
        {items.map((item, index) => (
          <li key={item.day} className="relative grid grid-cols-[56px_1fr] items-center gap-5 sm:gap-7">
            <span
              className={cn(
                'z-10 flex size-14 items-center justify-center rounded-full border-[1.5px] border-brand-strong',
                'transition-[background-color,box-shadow] duration-500 ease-brand',
                index === activeDay
                  ? 'bg-brand-soft shadow-[0_0_0_5px_color-mix(in_srgb,var(--brand)_20%,transparent)]'
                  : 'bg-surface',
              )}
            >
              <AssetIcon src={item.icon} className="size-6" />
            </span>

            <article
              className={cn(
                'flex flex-col gap-3 rounded-card border bg-surface-muted p-5 sm:p-8',
                'transition-[border-color,transform,box-shadow] duration-500 ease-brand',
                index === activeDay
                  ? 'scale-[1.022] border-brand shadow-[0_18px_44px_rgb(0_0_0/0.12)]'
                  : 'border-line-strong',
              )}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Heading as="h3" size="quote">{item.day}</Heading>
                <Badge variant="outline" size="sm" className="!border-brand-strong">{item.distance}</Badge>
                <Badge variant="outline" size="sm" className="gap-1.5 !border-brand-strong">
                  {item.level}
                  <AssetIcon src="/svg/_icons/icon_01_3-bars.svg" className="size-3.5" />
                </Badge>
                {item.alert ? (
                  <Badge variant="brand" size="sm" className="!border-brand-strong !text-brand-strong">
                    {item.alert}
                  </Badge>
                ) : null}
              </div>
              <Text size="sm" weight="light" tone="secondary" pretty>
                <strong className="font-semibold text-content">{item.lead}</strong>
                {item.body}
              </Text>
              {item.note ? (
                <Text size="sm" weight="light" tone="secondary" className="border-l border-brand-strong pl-3">
                  {item.note}
                </Text>
              ) : null}
            </article>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-4">
        <div className="relative h-139.5 overflow-hidden rounded-panel-lg bg-media-backdrop shadow-image-outline">
          {SLIDES.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={index === activeIndex ? slide.alt : ''}
              fill
              sizes="(min-width:1024px) 546px, 100vw"
              aria-hidden={index !== activeIndex}
              className={cn(
                'object-cover transition-[opacity,filter,transform] duration-700 ease-brand motion-reduce:transition-none',
                index === activeIndex
                  ? 'scale-100 opacity-100 blur-none'
                  : 'pointer-events-none scale-[1.015] opacity-0 blur-xs',
              )}
            />
          ))}

          <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

          <div
            role="group"
            aria-label="Escolher foto do Vale do Pati"
            className="absolute inset-x-5 bottom-5 z-10 flex items-center justify-center gap-2"
          >
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Mostrar foto ${index + 1} de ${SLIDES.length}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'h-1.5 rounded-pill transition-[width,background-color] duration-300 ease-out',
                  index === activeIndex ? 'w-8 bg-on-media' : 'w-4 bg-on-media/40',
                )}
              />
            ))}
          </div>
        </div>

        <Button
          href={galleryHref}
          block
          className="!min-h-14.75"
          icon={
            <AssetIcon
              src="/svg/_icons/icon_12_camera.svg"
              className="size-4.5"
              colorClassName="bg-brand-contrast"
            />
          }
        >
          Ver todas as fotos
        </Button>
      </div>
    </div>
  );
}
