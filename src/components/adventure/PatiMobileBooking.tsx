'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Button,
  CaretDownIcon,
  Heading,
  IconButton,
  PlusIcon,
  Text,
  XIcon,
} from '@/components/ui';
import { MorphingModal } from '@/components/motion/morphing-modal';
import { SITE } from '@/lib/site';
import { PATI_BOOKING_OPEN_EVENT } from './patiBooking';

type SheetView = 'booking' | 'calendar';

const WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'] as const;
const LANGUAGES = ['PT BR', 'EN', 'ES'] as const;
type Language = (typeof LANGUAGES)[number];
// O idioma já vem marcado conforme a raiz em que a página está (/pt, /en, /es).
const LANGUAGE_BY_LOCALE: Record<string, Language> = {
  pt: 'PT BR',
  en: 'EN',
  es: 'ES',
};

function languageFromPath(pathname: string) {
  const locale = Object.keys(LANGUAGE_BY_LOCALE).find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  return LANGUAGE_BY_LOCALE[locale ?? 'pt'];
}
const GROUP_PRICES = [2100, 1900, 1700, 1500] as const;

function getMonthDays(year: number, month: number) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  return [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: totalDays }, (_, index) => index + 1),
  ];
}

function formatDate(date: Date) {
  const weekdays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${weekdays[date.getDay()]}, ${day}/${month}`;
}

export function PatiMobileBooking() {
  const pathname = usePathname();
  const [dockVisible, setDockVisible] = useState(false);
  const [sheetView, setSheetView] = useState<SheetView | null>(null);
  const [travellers, setTravellers] = useState(2);
  const [language, setLanguage] = useState(() => languageFromPath(pathname));
  const [selectedDate, setSelectedDate] = useState(() => new Date(2026, 6, 30));
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(2026, 6, 1));
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bookingCard = document.getElementById('pati-booking-card');
    if (!bookingCard) return;

    const updateDockVisibility = () => {
      setDockVisible(bookingCard.getBoundingClientRect().bottom < 0);
    };

    updateDockVisibility();
    window.addEventListener('scroll', updateDockVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateDockVisibility);
  }, []);

  useEffect(() => {
    const openBooking = () => setSheetView('booking');
    window.addEventListener(PATI_BOOKING_OPEN_EVENT, openBooking);
    return () => window.removeEventListener(PATI_BOOKING_OPEN_EVENT, openBooking);
  }, []);

  // Scroll-lock e Escape ficam por conta do MorphingModal; aqui só o focus trap.
  useEffect(() => {
    if (!sheetView) return;

    const focusable = sheetRef.current?.querySelector<HTMLElement>('button, a[href]');
    focusable?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !sheetRef.current) return;

      const elements = Array.from(
        sheetRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]'),
      );
      const first = elements[0];
      const last = elements.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [sheetView]);

  const estimatedPrice = GROUP_PRICES[Math.min(travellers, 4) - 1];
  const monthDays = useMemo(
    () => getMonthDays(visibleMonth.getFullYear(), visibleMonth.getMonth()),
    [visibleMonth],
  );
  const monthLabel = `${new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(visibleMonth)} ${visibleMonth.getFullYear()}`;
  const bookingMessage = encodeURIComponent(
    `Olá! Quero verificar o Vale do Pati em 3 dias para ${formatDate(selectedDate)}, ${travellers} viajante${travellers > 1 ? 's' : ''}, idioma: ${language}.`,
  );
  const availabilityUrl = `${SITE.whatsappUrl}?text=${bookingMessage}`;

  const closeSheet = () => setSheetView(null);
  const changeMonth = (direction: number) => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + direction, 1));
  };

  return (
    <>
      <div
        aria-hidden={!dockVisible}
        className={`fixed inset-x-0 bottom-0 z-40 mx-auto hidden w-full max-w-105 items-center justify-between gap-4 rounded-t-panel border-x border-t border-line bg-surface-muted px-7 pt-3.5 pb-[max(28px,env(safe-area-inset-bottom))] shadow-popover transition-[opacity,transform,visibility] duration-300 ease-brand max-lg:flex ${
          dockVisible && !sheetView
            ? 'visible translate-y-0 opacity-100'
            : 'invisible translate-y-6 opacity-0'
        }`}
      >
        <div className="min-w-0">
          <Heading as="p" size="quote" className="tabular-nums">R$ 1.500</Heading>
          <Text tone="secondary" className="max-w-[141px] text-[11px] leading-[1.25]">
            Escolha o formato ideal para o seu grupo
          </Text>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <IconButton href={SITE.whatsappUrl} label="Falar pelo WhatsApp" size="lg" className="!size-11">
            <Image src="/svg/figma/pati-3/whatsapp.svg" alt="" width={20} height={20} className="size-5" />
          </IconButton>
          <Button onClick={() => setSheetView('booking')} className="min-h-12 px-5.5">
            Reservar
          </Button>
        </div>
      </div>

      <MorphingModal
        viewId={sheetView}
        onClose={closeSheet}
        placement="bottom"
        labelledBy="pati-booking-sheet-title"
        closeLabel="Fechar reserva"
        className="max-w-98 lg:max-w-130"
      >
        <div ref={sheetRef}>
          <div aria-hidden className="mx-auto mb-5 h-1 w-10 rounded-pill bg-content-muted lg:hidden" />

          {sheetView === 'calendar' ? (
            <CalendarView
              monthDays={monthDays}
              monthLabel={monthLabel}
              selectedDate={selectedDate}
              visibleMonth={visibleMonth}
              onClose={() => setSheetView('booking')}
              onChangeMonth={changeMonth}
              onSelectDate={(day) => {
                setSelectedDate(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day));
                setSheetView('booking');
              }}
            />
          ) : (
            <BookingView
              selectedDate={selectedDate}
              travellers={travellers}
              language={language}
              estimatedPrice={estimatedPrice}
              availabilityUrl={availabilityUrl}
              onClose={closeSheet}
              onOpenCalendar={() => setSheetView('calendar')}
              onTravellersChange={setTravellers}
              onLanguageChange={setLanguage}
            />
          )}
        </div>
      </MorphingModal>
    </>
  );
}

type SharedSheetProps = {
  onClose: () => void;
};

function SheetHeader({
  title,
  onClose,
  closeLabel = 'Fechar reserva',
}: SharedSheetProps & { title: string; closeLabel?: string }) {
  return (
    <header className="mb-5 flex h-9 items-center justify-between">
      <Heading id="pati-booking-sheet-title" as="h2" size="quote">{title}</Heading>
      <IconButton label={closeLabel} variant="outline" size="sm" onClick={onClose} className="relative !size-9 after:absolute after:-inset-1 after:content-['']">
        <XIcon className="size-4" />
      </IconButton>
    </header>
  );
}

function BookingView({
  selectedDate,
  travellers,
  language,
  estimatedPrice,
  availabilityUrl,
  onClose,
  onOpenCalendar,
  onTravellersChange,
  onLanguageChange,
}: SharedSheetProps & {
  selectedDate: Date;
  travellers: number;
  language: Language;
  estimatedPrice: number;
  availabilityUrl: string;
  onOpenCalendar: () => void;
  onTravellersChange: (value: number) => void;
  onLanguageChange: (value: Language) => void;
}) {
  return (
    <>
      <SheetHeader title="Reserve sua trilha" onClose={onClose} />

      <div className="overflow-hidden rounded-card border border-line-strong">
        <div className="grid h-17.5 grid-cols-2 divide-x divide-line-strong">
          <button type="button" onClick={onOpenCalendar} className="flex min-w-0 flex-col items-start gap-1.5 px-4 py-2.5 text-left transition-colors hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand">
            <Text size="xs" tone="muted">Data</Text>
            <span className="flex w-full items-center justify-between gap-2">
              <Text size="sm" tone="secondary" className="truncate">{formatDate(selectedDate)}</Text>
              <CaretDownIcon className="size-3.5 shrink-0" />
            </span>
          </button>

          <div className="flex flex-col items-start gap-1.5 px-4 py-2.5">
            <Text size="xs" tone="muted">Viajantes</Text>
            <div className="flex items-center gap-2.5">
              <IconButton label="Remover viajante" variant="outline" size="sm" onClick={() => onTravellersChange(Math.max(1, travellers - 1))} disabled={travellers === 1} className="relative !size-[30px] after:absolute after:-inset-[7px] after:content-['']">
                <span aria-hidden className="h-px w-2 bg-current" />
              </IconButton>
              <Text className="tabular-nums">{travellers}</Text>
              <IconButton label="Adicionar viajante" variant="outline" size="sm" onClick={() => onTravellersChange(Math.min(8, travellers + 1))} disabled={travellers === 8} className="relative !size-[30px] after:absolute after:-inset-[7px] after:content-['']">
                <PlusIcon className="size-3" />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="border-t border-line-strong px-4 py-3.5">
          <Text size="xs" tone="muted">Idioma</Text>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {LANGUAGES.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={language === item}
                onClick={() => onLanguageChange(item)}
                className={`min-h-10 rounded-pill border px-3 text-xs transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  language === item
                    ? 'border-brand bg-brand text-brand-contrast'
                    : 'border-line-contrast text-content-secondary hover:border-brand hover:text-content'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex h-13 items-center justify-between rounded-card border border-line px-4.5">
        <Text size="sm" weight="light">Valor estimado</Text>
        <Heading as="p" size="quote" className="tabular-nums max-lg:text-[20px]">R$ {estimatedPrice.toLocaleString('pt-BR')} / pessoa</Heading>
      </div>

      <Button href={availabilityUrl} size="lg" block arrow className="mt-5 text-lg">
        Verificar disponibilidade
      </Button>
      <Text size="xs" tone="muted" className="mt-5 text-center">
        Confirmamos tudo com você pelo WhatsApp — sem compromisso.
      </Text>
    </>
  );
}

function CalendarView({
  monthDays,
  monthLabel,
  selectedDate,
  visibleMonth,
  onClose,
  onChangeMonth,
  onSelectDate,
}: SharedSheetProps & {
  monthDays: Array<number | null>;
  monthLabel: string;
  selectedDate: Date;
  visibleMonth: Date;
  onChangeMonth: (direction: number) => void;
  onSelectDate: (day: number) => void;
}) {
  return (
    <>
      <SheetHeader title="Escolha a data" closeLabel="Voltar para a reserva" onClose={onClose} />
      <div className="mb-4 flex h-11 items-center justify-between">
        <IconButton label="Mês anterior" variant="outline" size="sm" onClick={() => onChangeMonth(-1)} className="relative !size-9 after:absolute after:-inset-1 after:content-['']">
          <CaretDownIcon className="size-4 rotate-90" />
        </IconButton>
        <Text weight="semibold" className="capitalize">{monthLabel}</Text>
        <IconButton label="Próximo mês" variant="outline" size="sm" onClick={() => onChangeMonth(1)} className="relative !size-9 after:absolute after:-inset-1 after:content-['']">
          <CaretDownIcon className="size-4 -rotate-90" />
        </IconButton>
      </div>

      <div className="grid grid-cols-7 text-center">
        {WEEKDAYS.map((weekday, index) => (
          <Text key={`${weekday}-${index}`} size="xs" tone="muted" className="flex h-8 items-center justify-center">{weekday}</Text>
        ))}
        {monthDays.map((day, index) => {
          if (!day) return <span key={`empty-${index}`} aria-hidden className="size-[50px]" />;

          const isSelected =
            selectedDate.getFullYear() === visibleMonth.getFullYear() &&
            selectedDate.getMonth() === visibleMonth.getMonth() &&
            selectedDate.getDate() === day;
          const isReferenceDay =
            visibleMonth.getFullYear() === 2026 && visibleMonth.getMonth() === 6 && day === 21;

          return (
            <button
              key={day}
              type="button"
              aria-label={`Escolher dia ${day}`}
              aria-pressed={isSelected}
              onClick={() => onSelectDate(day)}
              className={`flex size-[50px] items-center justify-center rounded-pill text-sm tabular-nums transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                isSelected
                  ? 'bg-brand text-brand-contrast'
                  : isReferenceDay
                    ? 'border border-brand text-content'
                    : 'text-content-secondary hover:bg-surface-raised hover:text-content'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </>
  );
}
