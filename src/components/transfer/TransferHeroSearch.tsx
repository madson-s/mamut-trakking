'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';
import { openTransferBooking } from './TransferBookingTrigger';
import {
  TRANSFER_SELECTION_EVENT,
  transferLocationLabel,
  type TransferLocationValue,
  type TransferSelectionDetail,
} from './transfer-booking';

export function TransferHeroSearch() {
  const [origin, setOrigin] = useState<TransferLocationValue | null>(null);
  const [destination, setDestination] = useState<TransferLocationValue | null>(null);

  useEffect(() => {
    const update = (event: Event) => {
      const detail = (event as CustomEvent<TransferSelectionDetail>).detail;
      setOrigin(detail.origin);
      setDestination(detail.destination);
    };
    window.addEventListener(TRANSFER_SELECTION_EVENT, update);
    return () => window.removeEventListener(TRANSFER_SELECTION_EVENT, update);
  }, []);

  return (
    <div
      className="mx-auto grid w-full max-w-180 grid-cols-2 gap-1.5 rounded-panel border border-line-strong bg-surface-muted p-1.5 shadow-card sm:flex sm:gap-2"
      aria-label="Buscar transfer"
    >
      <button
        type="button"
        onClick={() => openTransferBooking({ view: 'origin', origin: origin ?? undefined, destination: destination ?? undefined })}
        className={cn(
          'flex min-h-13 min-w-0 items-center gap-2.5 rounded-control px-3 text-left text-sm text-content-secondary transition-colors hover:bg-surface-raised sm:min-h-14 sm:flex-1 sm:rounded-pill sm:px-5',
          motion.fast,
          press,
          focus.onSurface,
        )}
      >
        <Search aria-hidden className="size-4 shrink-0" strokeWidth={1.8} />
        <span className="min-w-0 truncate">
          {origin ? transferLocationLabel(origin) : (
            <><span className="sm:hidden">Origem</span><span className="max-sm:hidden">De onde você sai?</span></>
          )}
        </span>
      </button>

      <span aria-hidden className="hidden w-px self-stretch bg-line sm:block" />

      <button
        type="button"
        onClick={() => openTransferBooking({ view: 'destination', origin: origin ?? undefined, destination: destination ?? undefined })}
        className={cn(
          'flex min-h-13 min-w-0 items-center gap-2.5 rounded-control px-3 text-left text-sm text-content-secondary transition-colors hover:bg-surface-raised sm:min-h-14 sm:flex-1 sm:rounded-pill sm:px-5',
          motion.fast,
          press,
          focus.onSurface,
        )}
      >
        <MapPin aria-hidden className="size-4 shrink-0 text-accent" strokeWidth={1.8} />
        <span className="min-w-0 truncate">
          {destination ? transferLocationLabel(destination) : (
            <><span className="sm:hidden">Destino</span><span className="max-sm:hidden">Para onde você vai?</span></>
          )}
        </span>
      </button>

      <button
        type="button"
        onClick={() => openTransferBooking({ origin: origin ?? undefined, destination: destination ?? undefined })}
        className={cn(
          'group col-span-2 flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-pill bg-content px-6 text-surface transition-[background-color,color,transform] hover:bg-brand hover:text-brand-contrast sm:size-14 sm:self-end sm:px-0',
          motion.base,
          press,
          focus.onSurface,
        )}
      >
        <span className="text-sm font-semibold sm:sr-only">Montar meu transfer</span>
        <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}
