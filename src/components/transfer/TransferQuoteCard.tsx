'use client';

import { useMemo, useState } from 'react';
import { Card, Text } from '@/components/ui';
import { AssetIcon } from '@/components/adventure/AssetIcon';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';
import { TransferBookingTrigger } from './TransferBookingTrigger';
import type { TransferFormat } from './transfer-booking';

const FORMAT_COPY = {
  group: {
    eyebrow: 'A partir de',
    price: 'R$ 90',
    suffix: '/ pessoa',
    description: 'Trecho compartilhado com horário confirmado pela equipe.',
  },
  private: {
    eyebrow: 'Veículo exclusivo',
    price: 'Sob consulta',
    suffix: '',
    description: 'Horário e embarque ajustados ao ritmo do seu grupo.',
  },
} as const;

export function TransferQuoteCard() {
  const [format, setFormat] = useState<TransferFormat>('group');
  const [adventure, setAdventure] = useState(false);

  const quote = useMemo(() => {
    if (adventure) {
      return {
        eyebrow: 'Transfer + experiência',
        price: 'Pacote sob consulta',
        suffix: '',
        description: 'A equipe combina o trajeto com uma parada guiada compatível.',
      };
    }
    return FORMAT_COPY[format];
  }, [adventure, format]);

  return (
    <Card
      as="article"
      surface="raised"
      radius="panelLg"
      elevation="card"
      padding="none"
      className="overflow-hidden p-6 sm:p-8 lg:sticky lg:top-25"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <Text size="sm" weight="light" tone="secondary">{quote.eyebrow}</Text>
          <p className="mt-1 font-display text-[clamp(38px,5vw,58px)] leading-none text-accent tabular-nums">
            {quote.price}
            {quote.suffix ? <span className="ml-2 text-lg text-content">{quote.suffix}</span> : null}
          </p>
          <Text size="xs" weight="light" tone="secondary" className="mt-3 max-w-100">
            {quote.description}
          </Text>
        </div>
        <span className="rounded-pill border border-line-strong px-3 py-1 text-xs text-content-secondary">
          estimativa
        </span>
      </div>

      <div className="mt-7 overflow-hidden rounded-card border border-line-strong bg-surface">
        <QuoteRow icon="/svg/_icons/icon_01_3-bars.svg" label="Trajeto" value="Selecionar origem e destino" />
        <QuoteRow icon="/svg/_icons/icon_11_calendar.svg" label="Data" value="Escolher a data da viagem" border />
        <QuoteRow
          icon="/svg/_icons/icon_06_people.svg"
          label="Categoria"
          value={`${format === 'group' ? 'Em grupo' : 'Privativo'}${adventure ? ' + aventura' : ''}`}
          border
        />
      </div>

      <fieldset className="mt-5">
        <legend className="sr-only">Categoria do transfer</legend>
        <div className="flex flex-wrap gap-2">
          <CategoryButton
            selected={format === 'group'}
            onClick={() => setFormat('group')}
          >
            Em grupo
          </CategoryButton>
          <CategoryButton
            selected={format === 'private'}
            onClick={() => setFormat('private')}
          >
            Privativo
          </CategoryButton>
          <CategoryButton
            selected={adventure}
            accent
            onClick={() => setAdventure((current) => !current)}
          >
            + aventura
          </CategoryButton>
        </div>
      </fieldset>

      <TransferBookingTrigger
        detail={{ format, adventure }}
        size="lg"
        block
        className="mt-6"
      >
        {adventure ? 'Montar transfer + aventura' : 'Reservar meu transfer'}
      </TransferBookingTrigger>
      <Text size="xs" weight="light" tone="muted" className="mt-4 text-center">
        Sem pagamento online. A equipe confirma tudo no WhatsApp.
      </Text>
    </Card>
  );
}

function CategoryButton({
  children,
  selected,
  accent = false,
  onClick,
}: {
  children: string;
  selected: boolean;
  accent?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'min-h-10 rounded-pill border px-4 text-sm transition-[background-color,border-color,color,transform]',
        selected
          ? accent
            ? 'border-brand bg-brand text-brand-contrast'
            : 'border-brand bg-brand text-brand-contrast'
          : 'border-line-strong bg-surface text-content hover:border-content',
        motion.fast,
        press,
        focus.control,
      )}
    >
      {children}
    </button>
  );
}

function QuoteRow({
  icon,
  label,
  value,
  border = false,
}: {
  icon: string;
  label: string;
  value: string;
  border?: boolean;
}) {
  return (
    <div className={cn('flex items-center gap-3 px-4 py-3.5', border && 'border-t border-line')}>
      <AssetIcon src={icon} className="size-4" colorClassName="bg-content-muted" />
      <span className="min-w-0 flex-1">
        <Text as="span" size="xs" tone="muted" className="block">{label}</Text>
        <Text as="span" size="sm" className="block truncate">{value}</Text>
      </span>
    </div>
  );
}
