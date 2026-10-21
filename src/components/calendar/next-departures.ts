/**
 * "Próximas saídas" de um roteiro fora da página do calendário — hoje no card
 * de reserva do Vale do Pati 3 dias (`PatiThreeDayExperience`). A fonte é a
 * mesma agenda do calendário (`calendar-data.ts`): uma saída nova aparece nos
 * dois lugares de uma vez.
 *
 * A página do roteiro é estática; quem a usa declara `revalidate`, como o
 * calendário, para uma saída que já começou não seguir anunciada.
 */

import type { Locale } from '@/lib/site';
import { CALENDAR_HREF } from './calendar-content';
import { upcomingDepartures, type CalendarDeparture } from './calendar-data';

export type NextDeparturesLabels = {
  titulo: string;
  /** Botão que leva às saídas deste roteiro no calendário. */
  verTodas: string;
  porPessoa: string;
};

export const NEXT_DEPARTURES_LABELS: Record<Locale, NextDeparturesLabels> = {
  pt: { titulo: 'Próximas saídas em grupo', verTodas: 'Ver todas as saídas', porPessoa: 'por pessoa' },
  en: { titulo: 'Upcoming group departures', verTodas: 'See all departures', porPessoa: 'per person' },
  es: { titulo: 'Próximas salidas en grupo', verTodas: 'Ver todas las salidas', porPessoa: 'por persona' },
  fr: { titulo: 'Prochains départs en groupe', verTodas: 'Voir tous les départs', porPessoa: 'par personne' },
  nl: { titulo: 'Volgende groepsvertrekken', verTodas: 'Bekijk alle vertrekken', porPessoa: 'per persoon' },
  de: { titulo: 'Nächste Gruppentermine', verTodas: 'Alle Termine ansehen', porPessoa: 'pro Person' },
};

/** Âncora do bloco do roteiro na página do calendário (`saidas-<trekId>`). */
export const calendarTrekHref = (locale: Locale, trekId: string) => `${CALENDAR_HREF[locale]}#saidas-${trekId}`;

export function nextDepartures(trekId: string, limit = 3): CalendarDeparture[] {
  return upcomingDepartures().filter((departure) => departure.trekId === trekId).slice(0, limit);
}
