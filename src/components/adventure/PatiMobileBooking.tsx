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
import { SITE, type Locale } from '@/lib/site';
import { PATI3_CONTENT, type Pati3Content } from './pati-3-content';
import { PATI3_FROM_PRICE } from './PatiThreeDayExperience';
import { PATI_BOOKING_OPEN_EVENT } from './patiBooking';

type SheetView = 'booking' | 'calendar';

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
// Preço de grupo por pessoa, fixo — a tabela de faixas saiu quando os preços
// passaram a seguir mamut.agency (dois formatos, mínimo de 2 pessoas).
const GROUP_PRICE = PATI3_FROM_PRICE;

function getMonthDays(year: number, month: number) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  return [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: totalDays }, (_, index) => index + 1),
  ];
}

function formatDate(date: Date, diasSemana: readonly string[]) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${diasSemana[date.getDay()]}, ${day}/${month}`;
}

export function PatiMobileBooking({ locale = 'pt' }: { locale?: Locale }) {
  const c = PATI3_CONTENT[locale].booking;
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

  const estimatedPrice = GROUP_PRICE;
  const monthDays = useMemo(
    () => getMonthDays(visibleMonth.getFullYear(), visibleMonth.getMonth()),
    [visibleMonth],
  );
  const monthLabel = `${new Intl.DateTimeFormat(c.intl, { month: 'long' }).format(visibleMonth)} ${visibleMonth.getFullYear()}`;
  const bookingMessage = encodeURIComponent(
    `${c.mensagem.antes} ${formatDate(selectedDate, c.diasSemana)}, ${travellers} ${
      travellers > 1 ? c.mensagem.viajantes : c.mensagem.viajante
    }, ${c.mensagem.idioma}: ${language}.`,
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
          <Heading as="p" size="quote" className="tabular-nums">R$ {GROUP_PRICE.toLocaleString('pt-BR')}</Heading>
          <Text tone="secondary" className="max-w-[141px] text-[11px] leading-[1.25]">
            {c.dockApoio}
          </Text>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <IconButton href={SITE.whatsappUrl} label={c.whatsapp} size="lg" className="!size-11">
            <Image src="/svg/figma/pati-3/whatsapp.svg" alt="" width={20} height={20} className="size-5" />
          </IconButton>
          <Button onClick={() => setSheetView('booking')} className="min-h-12 px-5.5">
            {c.reservar}
          </Button>
        </div>
      </div>

      <MorphingModal
        viewId={sheetView}
        onClose={closeSheet}
        placement="bottom"
        labelledBy="pati-booking-sheet-title"
        closeLabel={c.fechar}
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
              c={c}
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
              c={c}
            />
          )}
        </div>
      </MorphingModal>
    </>
  );
}

type Booking = Pati3Content['booking'];

type SharedSheetProps = {
  onClose: () => void;
  c: Booking;
};

function SheetHeader({
  title,
  onClose,
  closeLabel,
}: Omit<SharedSheetProps, 'c'> & { title: string; closeLabel: string }) {
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
  c,
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
      <SheetHeader title={c.titulo} onClose={onClose} closeLabel={c.fechar} />

      <div className="overflow-hidden rounded-card border border-line-strong">
        <div className="grid h-17.5 grid-cols-2 divide-x divide-line-strong">
          <button type="button" onClick={onOpenCalendar} className="flex min-w-0 flex-col items-start gap-1.5 px-4 py-2.5 text-left transition-colors hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand">
            <Text size="xs" tone="muted">{c.data}</Text>
            <span className="flex w-full items-center justify-between gap-2">
              <Text size="sm" tone="secondary" className="truncate">{formatDate(selectedDate, c.diasSemana)}</Text>
              <CaretDownIcon className="size-3.5 shrink-0" />
            </span>
          </button>

          <div className="flex flex-col items-start gap-1.5 px-4 py-2.5">
            <Text size="xs" tone="muted">{c.viajantes}</Text>
            <div className="flex items-center gap-2.5">
              <IconButton label={c.remover} variant="outline" size="sm" onClick={() => onTravellersChange(Math.max(1, travellers - 1))} disabled={travellers === 1} className="relative !size-[30px] after:absolute after:-inset-[7px] after:content-['']">
                <span aria-hidden className="h-px w-2 bg-current" />
              </IconButton>
              <Text className="tabular-nums">{travellers}</Text>
              <IconButton label={c.adicionar} variant="outline" size="sm" onClick={() => onTravellersChange(Math.min(8, travellers + 1))} disabled={travellers === 8} className="relative !size-[30px] after:absolute after:-inset-[7px] after:content-['']">
                <PlusIcon className="size-3" />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="border-t border-line-strong px-4 py-3.5">
          <Text size="xs" tone="muted">{c.idioma}</Text>
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
        <Text size="sm" weight="light">{c.valor}</Text>
        <Heading as="p" size="quote" className="tabular-nums max-lg:text-[20px]">R$ {estimatedPrice.toLocaleString('pt-BR')} {c.porPessoa}</Heading>
      </div>

      <Button href={availabilityUrl} size="lg" block arrow className="mt-5 text-lg">
        {c.verificar}
      </Button>
      <Text size="xs" tone="muted" className="mt-5 text-center">
        {c.nota}
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
  c,
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
      <SheetHeader title={c.calendario} closeLabel={c.voltar} onClose={onClose} />
      <div className="mb-4 flex h-11 items-center justify-between">
        <IconButton label={c.mesAnterior} variant="outline" size="sm" onClick={() => onChangeMonth(-1)} className="relative !size-9 after:absolute after:-inset-1 after:content-['']">
          <CaretDownIcon className="size-4 rotate-90" />
        </IconButton>
        <Text weight="semibold" className="capitalize">{monthLabel}</Text>
        <IconButton label={c.proximoMes} variant="outline" size="sm" onClick={() => onChangeMonth(1)} className="relative !size-9 after:absolute after:-inset-1 after:content-['']">
          <CaretDownIcon className="size-4 -rotate-90" />
        </IconButton>
      </div>

      <div className="grid grid-cols-7 text-center">
        {c.semana.map((weekday, index) => (
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
              aria-label={`${c.escolherDia} ${day}`}
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
