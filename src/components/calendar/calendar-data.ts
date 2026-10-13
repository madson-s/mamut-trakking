/**
 * Agenda de saídas — só o que é próprio do calendário: quais roteiros têm
 * saída marcada, as datas e as fotos usadas aqui.
 *
 * Nome, rota, preço, distância, origem e dificuldade NÃO moram aqui: vêm do
 * hub (`aventurasDoIdioma`, via `adventureId`), que já é traduzido e é a fonte
 * de verdade do site. A primeira versão desta página copiava esses valores do
 * bloco de calendário de mamut.agency — que estava desatualizado (falava em
 * "outubro 2024") e anunciava preços acima dos das páginas de cada roteiro.
 */

export type TrekId = 'pati3' | 'pati4Capao' | 'pati5';
export type HolidayId = 'aparecida' | 'republica';

export type CalendarTrek = {
  id: TrekId;
  /** Id do roteiro no hub (`adventures-data.ts`). */
  adventureId: string;
  days: number;
  image: string;
};

export type CalendarDeparture = {
  id: string;
  trekId: TrekId;
  start: string;
  end: string;
  /** Feriado que cai dentro da saída: vira chip e marca o dia na linha do tempo. */
  holiday?: { id: HolidayId; date: string };
};

/** Roteiros da seção "não achou sua data?". */
export type RelatedRoute = {
  adventureId: string;
  /** Foto própria desta página, quando difere da do hub. */
  image?: string;
};

export const CALENDAR_TREKS: CalendarTrek[] = [
  { id: 'pati3', adventureId: 'vale-do-pati-3-dias', days: 3, image: '/img/calendar/vale-pati-3.png' },
  { id: 'pati4Capao', adventureId: 'vale-do-pati-4-dias-via-capao', days: 4, image: '/img/calendar/vale-do-pati-4-dias.png' },
  { id: 'pati5', adventureId: 'travessia-vale-do-pati-5-dias', days: 5, image: '/img/calendar/vale-pati-5.png' },
];

export const CALENDAR_DEPARTURES: CalendarDeparture[] = [
  { id: 'pati3-2026-10-11', trekId: 'pati3', start: '2026-10-11', end: '2026-10-13', holiday: { id: 'aparecida', date: '2026-10-12' } },
  { id: 'pati3-2026-11-15', trekId: 'pati3', start: '2026-11-15', end: '2026-11-17', holiday: { id: 'republica', date: '2026-11-15' } },
  { id: 'pati4-capao-2026-10-12', trekId: 'pati4Capao', start: '2026-10-12', end: '2026-10-15' },
  { id: 'pati5-2026-10-11', trekId: 'pati5', start: '2026-10-11', end: '2026-10-15', holiday: { id: 'aparecida', date: '2026-10-12' } },
  { id: 'pati5-2026-11-15', trekId: 'pati5', start: '2026-11-15', end: '2026-11-19', holiday: { id: 'republica', date: '2026-11-15' } },
];

export const RELATED_ROUTES: RelatedRoute[] = [
  { adventureId: 'cachoeira-do-palmital-2-dias', image: '/img/calendar/cachoeira-palmital.png' },
  { adventureId: 'travessia-vale-do-pati-5-dias' },
  { adventureId: 'vale-do-pati-3-dias' },
  { adventureId: 'vale-do-pati-4-dias-via-capao' },
  { adventureId: 'cachoeira-do-mixila-2-dias' },
  { adventureId: 'vale-do-pati-4-dias', image: '/img/calendar/vale-do-pati-4-dias.png' },
  { adventureId: 'trilha-aguas-claras-2-dias' },
];

/**
 * Data de hoje em Lençóis, como `YYYY-MM-DD`. O fuso é fixo: a regra é "a
 * saída ainda não começou na Chapada", não importa onde o servidor roda.
 * (`en-CA` é só o formato de data ISO; não tem relação com o idioma da página.)
 */
export function todayInChapada(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Bahia' }).format(now);
}

/**
 * Saídas que ainda não começaram — "próximas" no sentido literal. Uma saída que
 * começa hoje já não é reservável, então sai junto. A comparação é de texto:
 * datas ISO ordenam como string.
 */
export function upcomingDepartures(today: string = todayInChapada()): CalendarDeparture[] {
  return CALENDAR_DEPARTURES.filter((departure) => departure.start > today);
}
