import { Button, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { formatPrice, type Locale } from '@/lib/site';
import { guidePrice } from '@/components/adventure/guide-pricing';
import { CALENDAR_CONTENT } from './calendar-content';
import { NEXT_DEPARTURES_LABELS, calendarTrekHref, nextDepartures } from './next-departures';

/**
 * As próximas saídas em grupo de um roteiro, vindas do calendário. Cada data
 * e o botão levam ao bloco do roteiro na página do calendário, onde a pessoa
 * reserva a vaga. Sem saída futura, não renderiza nada.
 *
 * Usado no card de reserva do Vale do Pati (`PatiThreeDayExperience`) e na
 * seção de preços dos demais roteiros (`TrekJourney`, `DayTourExperience`).
 */
export function NextDepartures({ locale, trekId, className }: { locale: Locale; trekId: string; className?: string }) {
  const saidas = nextDepartures(trekId);
  if (saidas.length === 0) return null;

  const t = NEXT_DEPARTURES_LABELS[locale];
  const href = calendarTrekHref(locale, trekId);
  const periodo = new Intl.DateTimeFormat(CALENDAR_CONTENT[locale].intl, { day: 'numeric', month: 'short' });
  const dia = (iso: string) => new Date(`${iso}T12:00:00`);

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <Text size="sm" weight="semibold">{t.titulo}</Text>
      <ul className="flex flex-col divide-y divide-line">
        {saidas.map((saida) => (
          <li key={saida.id}>
            <a
              href={href}
              className="flex items-baseline justify-between gap-3 py-2.5 text-sm transition-colors hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <time dateTime={saida.start} className="font-light text-content-secondary">
                {saida.start === saida.end ? periodo.format(dia(saida.start)) : periodo.formatRange(dia(saida.start), dia(saida.end))}
              </time>
              <span className="tabular-nums">
                {formatPrice(guidePrice(saida.price, locale), locale)} <span className="font-light text-content-muted">{t.porPessoa}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <Button href={href} variant="outline" block arrow>{t.verTodas}</Button>
    </div>
  );
}
