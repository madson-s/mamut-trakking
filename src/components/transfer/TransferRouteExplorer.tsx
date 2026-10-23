'use client';

import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { CarFront, Clock3, Compass, MapPin } from 'lucide-react';
import { Heading, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { TransferBookingTrigger } from './TransferBookingTrigger';
import {
  TRANSFER_ROUTES,
  transferLocationLabel,
  type TransferLocationValue,
} from './transfer-booking';

const DESTINATIONS: Record<
  TransferLocationValue,
  { x: number; y: number; short: string; path: string }
> = {
  lencois: { x: 40, y: 45, short: 'Lençóis', path: '' },
  capao: { x: 20, y: 20, short: 'Vale do Capão', path: 'M40 45 Q28 37 20 20' },
  mucuge: { x: 56, y: 87, short: 'Mucugê', path: 'M40 45 Q49 65 56 87' },
  andarai: { x: 27, y: 76, short: 'Andaraí · Igatu', path: 'M40 45 Q32 59 27 76' },
  'poco-azul': { x: 73, y: 68, short: 'Poços Azul · Encantado', path: 'M40 45 Q58 55 73 68' },
  salvador: { x: 87, y: 30, short: 'Salvador', path: 'M40 45 Q67 43 87 30' },
  airport: { x: 85, y: 9, short: 'Aeroporto', path: 'M40 45 Q68 27 85 9' },
  feira: { x: 73, y: 49, short: 'Feira de Santana', path: 'M40 45 Q58 43 73 49' },
};

const DESTINATION_ORDER: TransferLocationValue[] = [
  'capao',
  'andarai',
  'mucuge',
  'poco-azul',
  'feira',
  'salvador',
  'airport',
];

export function TransferRouteExplorer() {
  const [activeDestination, setActiveDestination] = useState<TransferLocationValue>('airport');
  const mapRef = useRef<HTMLDivElement>(null);
  const active = DESTINATIONS[activeDestination];

  const moveGlow = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || !mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    mapRef.current.style.setProperty('--map-glow-x', `${event.clientX - rect.left}px`);
    mapRef.current.style.setProperty('--map-glow-y', `${event.clientY - rect.top}px`);
  };

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
      <div
        ref={mapRef}
        onPointerMove={moveGlow}
        className="group/map relative aspect-square overflow-hidden rounded-panel-lg border border-line-strong bg-surface-sunken shadow-image-outline lg:aspect-auto lg:h-full"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-0 blur-3xl transition-opacity duration-300 [left:var(--map-glow-x,50%)] [top:var(--map-glow-y,42%)] group-hover/map:opacity-55"
        />
        <div aria-hidden className="absolute inset-0 bg-surface-muted/82 backdrop-blur-xl" />

        <div className="absolute inset-x-5 top-5 z-20 flex items-start justify-between gap-4 sm:inset-x-7 sm:top-7">
          <div>
            <Text size="xs" tone="muted">Mapa esquemático da região</Text>
            <Heading as="h3" size="quote" className="mt-0.5">Lençóis · Chapada Diamantina</Heading>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-brand-contrast shadow-card">
            <Compass className="size-5" strokeWidth={1.8} />
          </span>
        </div>

        <div className="absolute inset-x-3 top-22 bottom-20 sm:inset-x-6 sm:top-24 sm:bottom-20">
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 size-full overflow-visible"
          >
            {DESTINATION_ORDER.map((destination) => (
              <path
                key={destination}
                d={DESTINATIONS[destination].path}
                fill="none"
                stroke="currentColor"
                strokeWidth={activeDestination === destination ? 2.4 : 1}
                strokeDasharray={activeDestination === destination ? undefined : '3 3'}
                vectorEffect="non-scaling-stroke"
                className={cn(
                  'transition-[stroke,stroke-width,opacity] duration-300',
                  activeDestination === destination ? 'text-highlight opacity-100' : 'text-content-muted opacity-48',
                )}
              />
            ))}
          </svg>

          <MapNode x={40} y={45} label="Lençóis" active origin />
          {DESTINATION_ORDER.map((destination) => {
            const place = DESTINATIONS[destination];
            return (
              <MapNode
                key={destination}
                x={place.x}
                y={place.y}
                label={place.short}
                active={activeDestination === destination}
                onFocus={() => setActiveDestination(destination)}
                onMouseEnter={() => setActiveDestination(destination)}
              />
            );
          })}
        </div>

        <div className="absolute inset-x-5 bottom-5 z-20 flex items-center gap-3 rounded-card bg-highlight px-4 py-3 text-brand-black sm:inset-x-7">
          <CarFront aria-hidden className="size-5 shrink-0" strokeWidth={1.8} />
          <div className="min-w-0">
            <Text size="xs" className="!text-brand-black opacity-70">Rota em destaque</Text>
            <Text size="sm" weight="semibold" className="truncate !text-brand-black">
              Lençóis ↔ {active.short}
            </Text>
          </div>
        </div>
      </div>

      <div className="grid gap-3" aria-label="Rotas de transfer disponíveis">
        {TRANSFER_ROUTES.map((route) => {
          const isActive = activeDestination === route.destination;
          return (
            <article
              key={`${route.origin}-${route.destination}`}
              onMouseEnter={() => setActiveDestination(route.destination)}
              onFocus={() => setActiveDestination(route.destination)}
              className={cn(
                'group relative grid min-h-21 grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-4 rounded-card border border-line-strong bg-surface-muted px-4 py-4 text-content transition-[background-color,box-shadow,transform] duration-300 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-5',
                isActive ? 'shadow-card sm:translate-x-0.5' : 'hover:-translate-y-0.5 hover:shadow-card',
              )}
            >
              <span
                className={cn(
                  'flex size-11 shrink-0 items-center justify-center rounded-control border border-line-strong bg-surface-raised text-content transition-transform duration-300 group-hover:scale-[1.03]',
                )}
              >
                <CarFront aria-hidden className="size-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0 flex-1">
                <Text size="sm" weight="semibold">
                  {transferLocationLabel(route.origin)} ↔ {transferLocationLabel(route.destination)}
                </Text>
                <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-2">
                  <span
                    className="inline-flex min-h-7 items-center gap-1.5 rounded-pill border border-line-strong bg-surface px-2.5 font-body text-xs font-semibold text-content-secondary tabular-nums"
                    aria-label={`Duração aproximada: ${route.duration.replace('~', '')}`}
                  >
                    <Clock3 aria-hidden className="size-3.5 text-brand-strong" strokeWidth={2} />
                    {route.duration}
                  </span>
                  <span className="hidden h-5 w-px bg-line-strong sm:block" aria-hidden />
                  <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="font-body text-[11px] font-medium text-content-muted">a partir de</span>
                    <span className="font-display text-lg leading-none text-brand-strong tabular-nums">
                      R$ {route.price.toLocaleString('pt-BR')}
                    </span>
                    <span className="font-body text-[11px] font-medium text-content-secondary">/ pessoa</span>
                  </span>
                </div>
              </div>
              <TransferBookingTrigger
                detail={{ origin: route.origin, destination: route.destination }}
                variant="ghost"
                size="sm"
                className="col-span-2 shrink-0 !bg-brand-black !text-on-media hover:!bg-highlight hover:!text-brand-black active:!bg-highlight active:!text-brand-black max-sm:w-full sm:col-span-1"
              >
                Ver disponibilidade
              </TransferBookingTrigger>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function MapNode({
  x,
  y,
  label,
  active,
  origin = false,
  onFocus,
  onMouseEnter,
}: {
  x: number;
  y: number;
  label: string;
  active: boolean;
  origin?: boolean;
  onFocus?: () => void;
  onMouseEnter?: () => void;
}) {
  return (
    <button
      type="button"
      tabIndex={origin ? -1 : 0}
      aria-label={origin ? 'Ponto de partida em Lençóis' : `Destacar rota para ${label}`}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      className={cn(
        'absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-pill border px-2.5 py-1.5 text-[10px] font-medium whitespace-nowrap shadow-chip transition-[background-color,border-color,color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-xs',
        active
          ? 'border-highlight bg-highlight text-brand-black scale-105'
          : 'border-line-strong bg-surface text-content-secondary hover:border-brand',
      )}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className="flex items-center gap-1.5">
        {origin ? <MapPin aria-hidden className="size-3" strokeWidth={2} /> : null}
        {label}
      </span>
    </button>
  );
}
