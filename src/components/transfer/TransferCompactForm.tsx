'use client';

import { useState } from 'react';
import { ChevronDown, Route } from 'lucide-react';
import { Button, Card, Heading, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';
import { openTransferBooking } from './TransferBookingTrigger';
import type { TransferFormat } from './transfer-booking';

export function TransferCompactForm() {
  const [format, setFormat] = useState<TransferFormat>('group');

  return (
    <Card
      as="section"
      surface="raised"
      radius="panel"
      elevation="float"
      padding="none"
      className="w-full self-center p-5 sm:p-7"
    >
      <Heading as="h3" size="card">Monte seu trajeto</Heading>
      <Text size="sm" weight="light" tone="secondary" pretty className="mt-2">
        Comece pela rota e pelo formato. Os detalhes entram na próxima etapa.
      </Text>

      <button
        type="button"
        onClick={() => openTransferBooking({ view: 'origin', format })}
        className={cn(
          'mt-5 flex min-h-14 w-full items-center gap-3 rounded-control border border-line-strong bg-surface px-3.5 text-left transition-[background-color,border-color,transform] hover:border-brand hover:bg-surface-muted sm:mt-6 sm:min-h-15 sm:px-4',
          motion.fast,
          press,
          focus.onSurface,
        )}
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
          <Route aria-hidden className="size-4" strokeWidth={1.8} />
        </span>
        <span className="min-w-0 flex-1">
          <Text as="span" size="xs" tone="muted" className="block">Origem e destino</Text>
          <Text as="span" size="sm" weight="medium" className="mt-0.5 block">Escolher meu trajeto</Text>
        </span>
      </button>

      <label className="mt-3 block">
        <Text as="span" size="xs" tone="muted" className="sr-only">Formato do transfer</Text>
        <span className="relative block">
          <select
            value={format}
            onChange={(event) => setFormat(event.target.value as TransferFormat)}
            className={cn(
              'min-h-14 w-full appearance-none rounded-control border border-line-strong bg-surface px-3.5 pr-10 text-sm text-content transition-[background-color,border-color] hover:border-brand sm:min-h-15 sm:px-4 sm:pr-11',
              focus.onSurface,
            )}
          >
            <option value="group">Em grupo · melhor custo por pessoa</option>
            <option value="private">Privativo · veículo exclusivo</option>
          </select>
          <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-content-muted" />
        </span>
      </label>

      <Button
        type="button"
        size="lg"
        block
        arrow
        className="mt-4"
        onClick={() => openTransferBooking({ format })}
      >
        Continuar meu pedido
      </Button>
      <Text size="xs" weight="light" tone="muted" className="mt-3 text-center">
        Resposta da equipe pelo WhatsApp.
      </Text>
    </Card>
  );
}
