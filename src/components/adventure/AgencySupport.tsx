import { Armchair, Luggage, ShowerHead, Sunrise, Sunset, Tent } from 'lucide-react';
import { Card, Heading, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { Locale } from '@/lib/site';
import { AGENCY_FACILITIES, CAMPING_GEAR, tripLogistics, type ReturnTime } from './agency-support';

// Na ordem de `AGENCY_FACILITIES` e dos blocos de `tripLogistics` (antes, depois).
const FACILITY_ICONS = [Armchair, Luggage, ShowerHead, Tent] as const;
const LOGISTICS_ICONS = [Sunrise, Sunset] as const;

/**
 * Faixa com as comodidades da sede — sala de espera, guarda-volumes, chuveiro —
 * e, nos passeios com acampamento, o equipamento de camping incluso.
 */
export function AgencyFacilities({ locale, campingGear = false }: { locale: Locale; campingGear?: boolean }) {
  const items = campingGear ? [...AGENCY_FACILITIES[locale], CAMPING_GEAR[locale]] : AGENCY_FACILITIES[locale];
  return (
    <ul className={cn('grid w-full gap-3', campingGear ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3')}>
      {items.map((item, i) => {
        const Icon = FACILITY_ICONS[i] ?? Armchair;
        return (
          <li key={item.titulo} className="flex items-center gap-4 rounded-card border border-line bg-surface-muted px-5 py-4">
            <Icon aria-hidden className="size-5.5 shrink-0 text-brand-strong" strokeWidth={1.5} />
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-lg">{item.titulo}</span>
              <Text as="div" size="xs" weight="light" tone="secondary">{item.apoio}</Text>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** "Antes / depois da atividade", logo abaixo do itinerário das travessias. */
export function TripLogistics({ locale, returnTime }: { locale: Locale; returnTime: ReturnTime }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {tripLogistics(locale, returnTime).map((bloco, i) => {
        const Icon = LOGISTICS_ICONS[i] ?? Sunrise;
        return (
          <Card key={bloco.titulo} as="article" surface="muted" padding="none" className="gap-5 border border-line p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <Icon aria-hidden className="size-5.5 shrink-0 text-brand-strong" strokeWidth={1.5} />
              <Heading as="h3" size="quote">{bloco.titulo}</Heading>
            </div>
            <ul className="flex flex-col gap-3">
              {bloco.itens.map((item) => (
                <li key={item}><Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{item}</Text></li>
              ))}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}
