'use client';

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronRight,
  MapPin,
  Minus,
  Navigation,
  Plus,
  Route,
  X,
} from 'lucide-react';
import { MorphingModal } from '@/components/motion/morphing-modal';
import {
  Button,
  Field,
  Heading,
  IconButton,
  Input,
  SegmentedControl,
  Text,
} from '@/components/ui';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';
import { SITE } from '@/lib/site';
import {
  TRANSFER_BOOKING_OPEN_EVENT,
  TRANSFER_LOCATIONS,
  TRANSFER_SELECTION_EVENT,
  findTransferRoute,
  transferLocationLabel,
  type TransferBookingDetail,
  type TransferFormat,
  type TransferLocationValue,
  type TransferModalView,
  type TransferSelectionDetail,
} from './transfer-booking';

const FORMAT_OPTIONS = [
  { value: 'group', label: 'Em grupo' },
  { value: 'private', label: 'Privativo' },
] satisfies Array<{ value: TransferFormat; label: string }>;

export function TransferBookingModal() {
  const [view, setView] = useState<TransferModalView | null>(null);
  const [origin, setOrigin] = useState<TransferLocationValue>('lencois');
  const [destination, setDestination] = useState<TransferLocationValue>('airport');
  const [date, setDate] = useState('');
  const [travellers, setTravellers] = useState(2);
  const [format, setFormat] = useState<TransferFormat>('group');
  const [adventure, setAdventure] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const open = (event: Event) => {
      const detail = (event as CustomEvent<TransferBookingDetail>).detail ?? {};
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      if (detail.origin) setOrigin(detail.origin);
      if (detail.destination) setDestination(detail.destination);
      if (detail.format) setFormat(detail.format);
      if (typeof detail.adventure === 'boolean') setAdventure(detail.adventure);
      setView(detail.view ?? 'booking');
    };
    window.addEventListener(TRANSFER_BOOKING_OPEN_EVENT, open);
    return () => window.removeEventListener(TRANSFER_BOOKING_OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (!view) return;
    const first = sheetRef.current?.querySelector<HTMLElement>(
      'button:not(:disabled), input:not(:disabled), a[href]',
    );
    first?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !sheetRef.current) return;
      const elements = Array.from(
        sheetRef.current.querySelectorAll<HTMLElement>(
          'button:not(:disabled), input:not(:disabled), a[href]',
        ),
      );
      const start = elements[0];
      const end = elements.at(-1);
      if (!start || !end) return;

      if (event.shiftKey && document.activeElement === start) {
        event.preventDefault();
        end.focus();
      } else if (!event.shiftKey && document.activeElement === end) {
        event.preventDefault();
        start.focus();
      }
    };

    window.addEventListener('keydown', trapFocus);
    return () => window.removeEventListener('keydown', trapFocus);
  }, [view]);

  const close = () => {
    setView(null);
    window.requestAnimationFrame(() => returnFocusRef.current?.focus());
  };

  const updateSelection = (
    field: 'origin' | 'destination',
    value: TransferLocationValue,
  ) => {
    const nextOrigin = field === 'origin' ? value : origin;
    const nextDestination = field === 'destination' ? value : destination;
    if (nextOrigin === nextDestination) return;

    if (field === 'origin') setOrigin(value);
    else setDestination(value);

    window.dispatchEvent(
      new CustomEvent<TransferSelectionDetail>(TRANSFER_SELECTION_EVENT, {
        detail: { origin: nextOrigin, destination: nextDestination },
      }),
    );
    setView('booking');
  };

  const route = findTransferRoute(origin, destination);
  const quote =
    format === 'group' && route && !adventure
      ? `A partir de R$ ${route.price.toLocaleString('pt-BR')} / pessoa`
      : 'Orçamento personalizado';

  const whatsappUrl = useMemo(() => {
    const selectedDate = date
      ? new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long', timeZone: 'UTC' }).format(
          new Date(`${date}T12:00:00Z`),
        )
      : 'data a combinar';
    const message = [
      'Olá, Mamut! Quero solicitar um transfer.',
      `Origem: ${transferLocationLabel(origin)}.`,
      `Destino: ${transferLocationLabel(destination)}.`,
      `Data: ${selectedDate}.`,
      `Viajantes: ${travellers}.`,
      `Formato: ${format === 'group' ? 'em grupo' : 'privativo'}.`,
      adventure ? 'Quero incluir uma aventura guiada no caminho.' : '',
    ]
      .filter(Boolean)
      .join(' ');
    return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
  }, [adventure, date, destination, format, origin, travellers]);

  return (
    <MorphingModal
      viewId={view}
      onClose={close}
      placement="bottom"
      labelledBy="transfer-booking-title"
      closeLabel="Fechar reserva de transfer"
      className="max-w-155"
    >
      <div ref={sheetRef}>
        <div aria-hidden className="mx-auto mb-5 h-1 w-10 rounded-pill bg-content-muted lg:hidden" />

        {view === 'origin' || view === 'destination' ? (
          <LocationView
            field={view}
            origin={origin}
            destination={destination}
            onBack={() => setView('booking')}
            onClose={close}
            onSelect={updateSelection}
          />
        ) : (
          <>
            <header className="mb-6 flex items-start justify-between gap-4">
              <div>
                <Heading id="transfer-booking-title" as="h2" size="card">
                  Monte seu transfer
                </Heading>
                <Text size="sm" weight="light" tone="secondary" className="mt-1">
                  Escolha o trajeto. A Mamut confirma valor e embarque no WhatsApp.
                </Text>
              </div>
              <IconButton
                label="Fechar reserva de transfer"
                variant="outline"
                size="sm"
                onClick={close}
                className="relative !size-9 shrink-0 after:absolute after:-inset-1 after:content-['']"
              >
                <X className="size-4" />
              </IconButton>
            </header>

            <div className="overflow-hidden rounded-card border border-line-strong">
              <RouteField
                icon={<Navigation className="size-4" />}
                label="Origem"
                value={transferLocationLabel(origin)}
                onClick={() => setView('origin')}
              />
              <RouteField
                icon={<MapPin className="size-4 text-accent" />}
                label="Destino"
                value={transferLocationLabel(destination)}
                onClick={() => setView('destination')}
                border
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto]">
              <Field label="Data da viagem" hint="Se ainda não souber, deixe em branco.">
                <span className="relative block">
                  <CalendarDays
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-content-muted"
                  />
                  <Input
                    type="date"
                    size="md"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className="min-h-12 pl-10"
                  />
                </span>
              </Field>

              <div>
                <Text as="span" size="xs" weight="medium" tone="secondary" className="mb-1 block">
                  Viajantes
                </Text>
                <div className="flex min-h-12 items-center gap-3 rounded-control border border-line-strong bg-surface px-2">
                  <button
                    type="button"
                    aria-label="Remover viajante"
                    disabled={travellers === 1}
                    onClick={() => setTravellers((current) => Math.max(1, current - 1))}
                    className={cn(
                      'flex size-8 items-center justify-center rounded-full border border-line transition-colors hover:border-brand disabled:opacity-35',
                      focus.onSurface,
                    )}
                  >
                    <Minus className="size-3.5" />
                  </button>
                  <span className="min-w-5 text-center text-sm tabular-nums">{travellers}</span>
                  <button
                    type="button"
                    aria-label="Adicionar viajante"
                    disabled={travellers === 8}
                    onClick={() => setTravellers((current) => Math.min(8, current + 1))}
                    className={cn(
                      'flex size-8 items-center justify-center rounded-full border border-line transition-colors hover:border-brand disabled:opacity-35',
                      focus.onSurface,
                    )}
                  >
                    <Plus className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Text as="span" size="xs" weight="medium" tone="secondary" className="mb-2 block">
                Formato
              </Text>
              <SegmentedControl
                options={FORMAT_OPTIONS}
                value={format}
                onChange={setFormat}
                label="Formato do transfer"
                variant="chips"
                size="md"
              />
            </div>

            <label
              className={cn(
                'mt-5 flex cursor-pointer items-start gap-3 rounded-card border border-line-strong bg-surface px-4 py-3.5 transition-colors hover:border-brand',
                focus.onSurface,
              )}
            >
              <input
                type="checkbox"
                checked={adventure}
                onChange={(event) => setAdventure(event.target.checked)}
                className="peer sr-only"
              />
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-line-contrast peer-checked:border-brand peer-checked:bg-brand peer-checked:text-brand-contrast">
                {adventure ? <Check aria-hidden className="size-3.5" /> : null}
              </span>
              <span>
                <Text as="span" size="sm" weight="semibold">
                  Quero uma aventura no caminho
                </Text>
                <Text as="span" size="xs" weight="light" tone="secondary" className="mt-0.5 block">
                  A equipe sugere uma parada guiada compatível com o trajeto e o horário.
                </Text>
              </span>
            </label>

            <div className="mt-5 flex flex-col gap-4 rounded-card bg-surface-raised p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Text size="xs" tone="muted">Estimativa do trajeto</Text>
                <Heading as="p" size="quote" className="mt-0.5 tabular-nums">
                  {quote}
                </Heading>
                <Text size="xs" weight="light" tone="secondary" className="mt-1">
                  Valor final confirmado no atendimento.
                </Text>
              </div>
              <Button href={whatsappUrl} size="lg" arrow className="shrink-0 max-sm:w-full">
                Pedir disponibilidade
              </Button>
            </div>
          </>
        )}
      </div>
    </MorphingModal>
  );
}

function RouteField({
  icon,
  label,
  value,
  onClick,
  border = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  onClick: () => void;
  border?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group flex min-h-17 w-full items-center gap-3 bg-surface px-4 py-3 text-left transition-colors hover:bg-surface-raised',
        border && 'border-t border-line-strong',
        focus.onSurface,
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-content-secondary">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <Text as="span" size="xs" tone="muted" className="block">{label}</Text>
        <Text as="span" size="sm" weight="medium" className="mt-0.5 block truncate">{value}</Text>
      </span>
      <ChevronRight
        aria-hidden
        className="size-4 shrink-0 text-content-muted transition-transform group-hover:translate-x-0.5"
      />
    </button>
  );
}

function LocationView({
  field,
  origin,
  destination,
  onBack,
  onClose,
  onSelect,
}: {
  field: 'origin' | 'destination';
  origin: TransferLocationValue;
  destination: TransferLocationValue;
  onBack: () => void;
  onClose: () => void;
  onSelect: (field: 'origin' | 'destination', value: TransferLocationValue) => void;
}) {
  const title = field === 'origin' ? 'De onde você sai?' : 'Para onde você vai?';
  const selected = field === 'origin' ? origin : destination;
  const unavailable = field === 'origin' ? destination : origin;
  const groups = [...new Set(TRANSFER_LOCATIONS.map((location) => location.group))];

  return (
    <>
      <header className="mb-5 flex items-center justify-between gap-3">
        <IconButton
          label="Voltar para a reserva"
          variant="outline"
          size="sm"
          onClick={onBack}
          className="relative !size-9 after:absolute after:-inset-1 after:content-['']"
        >
          <ArrowLeft className="size-4" />
        </IconButton>
        <Heading id="transfer-booking-title" as="h2" size="quote" className="text-center">
          {title}
        </Heading>
        <IconButton
          label="Fechar reserva de transfer"
          variant="outline"
          size="sm"
          onClick={onClose}
          className="relative !size-9 after:absolute after:-inset-1 after:content-['']"
        >
          <X className="size-4" />
        </IconButton>
      </header>

      <div className="space-y-5">
        {groups.map((group) => (
          <section key={group} aria-label={group}>
            <Text
              as="p"
              size="xs"
              weight="semibold"
              tone="muted"
              className="mb-2 tracking-wide uppercase"
            >
              {group}
            </Text>
            <div className="overflow-hidden rounded-card border border-line-strong bg-surface">
              {TRANSFER_LOCATIONS.filter((location) => location.group === group).map(
                (location, index) => {
                  const isSelected = location.value === selected;
                  const isUnavailable = location.value === unavailable;
                  return (
                    <button
                      key={location.value}
                      type="button"
                      disabled={isUnavailable}
                      onClick={() => onSelect(field, location.value)}
                      className={cn(
                        'flex min-h-13 w-full items-center gap-3 px-4 text-left transition-colors',
                        index > 0 && 'border-t border-line',
                        isSelected
                          ? 'bg-brand-soft text-brand-ink'
                          : 'hover:bg-surface-raised',
                        isUnavailable && 'cursor-not-allowed opacity-35',
                        motion.fast,
                        press,
                        focus.onSurface,
                      )}
                    >
                      {field === 'origin' ? (
                        <Navigation className="size-4 shrink-0" strokeWidth={1.8} />
                      ) : (
                        <MapPin className="size-4 shrink-0" strokeWidth={1.8} />
                      )}
                      <span className="flex-1 text-sm">{location.label}</span>
                      {isSelected ? <Check className="size-4 text-brand-strong" /> : null}
                    </button>
                  );
                },
              )}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-card bg-surface-raised px-4 py-3">
        <Route aria-hidden className="size-4 shrink-0 text-content-muted" />
        <Text size="xs" weight="light" tone="secondary">
          Não encontrou o local? Escolha a opção mais próxima e explique o endereço no WhatsApp.
        </Text>
      </div>
    </>
  );
}
