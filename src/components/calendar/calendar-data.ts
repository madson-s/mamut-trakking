/**
 * Agenda de saídas — só o que é próprio do calendário: quais roteiros têm
 * saída marcada, as datas, o preço de cada saída e as fotos usadas aqui.
 *
 * Nome, rota, distância, origem e dificuldade vêm do hub (`aventurasDoIdioma`,
 * via `adventureId`), que já é traduzido e é a fonte de verdade do site. O
 * preço não: a operadora fecha um valor por saída (o mesmo Pati 3 dias sai por
 * R$ 2.200 numa data e R$ 1.850 em outra), e é esse que a saída anuncia.
 *
 * Roteiros sem página no hub (combinações montadas só para uma saída) usam
 * `custom`, com o texto nos cinco idiomas. Sem `route`, o botão do grupo vira
 * WhatsApp em vez de "ver roteiro completo".
 */

import type { Locale } from '@/lib/site';
import type { DifficultyGroup } from '@/components/adventures/filters';

export type HolidayId = 'aparecida' | 'republica';

export type CustomTrek = {
  titulo: Record<Locale, string>;
  difficultyGroup: DifficultyGroup;
  difficulty: Record<Locale, string>;
  location: string;
  distance?: string;
  image: string;
  /** id em ADVENTURE_ROUTES, quando o roteiro tem página própria. */
  route?: string;
};

export type CalendarTrek = {
  id: string;
  days: number;
  /** Foto própria do calendário; sem ela, vale a do roteiro no hub. */
  image?: string;
} & ({ adventureId: string; custom?: never } | { custom: CustomTrek; adventureId?: never });

export type CalendarDeparture = {
  id: string;
  trekId: string;
  start: string;
  end: string;
  /** Preço por pessoa desta saída, em reais. */
  price: number;
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
  { id: 'fumacaBaixo', adventureId: 'cachoeira-da-fumaca-por-baixo', days: 3 },
  { id: 'pati4', adventureId: 'vale-do-pati-4-dias', days: 4, image: '/img/calendar/vale-do-pati-4-dias.png' },
  { id: 'grutas', adventureId: 'grutas-morro-do-camelo', days: 1 },
  { id: 'pati5', adventureId: 'travessia-vale-do-pati-5-dias', days: 5, image: '/img/calendar/vale-pati-5.png' },
  {
    id: 'pati3Buracao',
    days: 5,
    custom: {
      titulo: {
        pt: 'Vale do Pati 3 Dias + Cachoeira do Buracão',
        en: 'Pati Valley 3 Days + Buracão Waterfall',
        es: 'Valle del Pati 3 Días + Cascada do Buracão',
        fr: 'Vallée du Pati 3 Jours + cascade du Buracão',
        nl: 'Vale do Pati 3 dagen + Waterval Buracão',
        de: 'Vale do Pati 3 Tage + Buracão-Wasserfall',
      },
      difficultyGroup: 'Moderado',
      difficulty: { pt: 'Moderado', en: 'Moderate', es: 'Moderado', fr: 'Modéré', nl: 'Gemiddeld', de: 'Mittel' },
      location: 'Lençóis',
      image: '/img/adventures/buracao/hero.jpeg',
    },
  },
  {
    id: 'pati2',
    days: 2,
    custom: {
      titulo: {
        pt: 'Vale do Pati 2 Dias (Mirante do Pati + Cachoeirão)',
        en: 'Pati Valley 2 Days (Pati Viewpoint + Cachoeirão)',
        es: 'Valle del Pati 2 Días (Mirador del Pati + Cachoeirão)',
        fr: 'Vallée du Pati 2 Jours (belvédère du Pati + Cachoeirão)',
        nl: 'Vale do Pati 2 dagen (uitkijkpunt Pati + Cachoeirão)',
        de: 'Vale do Pati 2 Tage (Aussichtspunkt Pati + Cachoeirão)',
      },
      difficultyGroup: 'Moderado',
      difficulty: { pt: 'Moderado', en: 'Moderate', es: 'Moderado', fr: 'Modéré', nl: 'Gemiddeld', de: 'Mittel' },
      location: 'Lençóis',
      image: '/img/adventures/mirante-pati/hero.jpeg',
    },
  },
  { id: 'pacote6', adventureId: 'chapada-extraordinaria-6-dias', days: 6 },
  {
    id: 'reveillon6',
    days: 6,
    custom: {
      titulo: {
        pt: 'Réveillon na Chapada — Pacote 6 Dias',
        en: 'New Year’s Eve in the Chapada — 6-Day Package',
        es: 'Año Nuevo en la Chapada — Paquete 6 Días',
        fr: 'Réveillon dans la Chapada — Forfait 6 Jours',
        nl: 'Oudejaarsavond in de Chapada — Pakket 6 dagen',
        de: 'Silvester in der Chapada — Paket 6 Tage',
      },
      difficultyGroup: 'Desafiador',
      difficulty: { pt: 'Moderado / Difícil', en: 'Moderate / Hard', es: 'Moderado / Difícil', fr: 'Modéré / Difficile', nl: 'Gemiddeld / Zwaar', de: 'Mittel / Schwierig' },
      location: 'Lençóis',
      distance: '66 km',
      // Mesma foto do pacote de 6 dias na página do Réveillon.
      image: '/img/adventures/fumacinha/hero.jpg',
      route: 'reveillon',
    },
  },
  {
    id: 'mosquitoPocoAzul',
    days: 1,
    custom: {
      titulo: {
        pt: 'Cachoeira do Mosquito + Poço Azul',
        en: 'Mosquito Waterfall + Poço Azul',
        es: 'Cascada del Mosquito + Poço Azul',
        fr: 'Cascade du Mosquito + Poço Azul',
        nl: 'Waterval Mosquito + Poço Azul',
        de: 'Mosquito-Wasserfall + Poço Azul',
      },
      difficultyGroup: 'Fácil',
      difficulty: { pt: 'Fácil', en: 'Easy', es: 'Fácil', fr: 'Facile', nl: 'Makkelijk', de: 'Leicht' },
      location: 'Lençóis',
      image: '/img/adventures/mosquito/hero.jpeg',
    },
  },
  {
    id: 'mucugezinhoPratinhaPaiInacio',
    days: 1,
    custom: {
      titulo: {
        pt: 'Mucugêzinho + Pratinha + Pai Inácio (Personalizado)',
        en: 'Mucugêzinho + Pratinha + Pai Inácio (Custom)',
        es: 'Mucugêzinho + Pratinha + Pai Inácio (Personalizado)',
        fr: 'Mucugêzinho + Pratinha + Pai Inácio (Sur mesure)',
        nl: 'Mucugêzinho + Pratinha + Pai Inácio (Op maat)',
        de: 'Mucugêzinho + Pratinha + Pai Inácio (Individuell)',
      },
      difficultyGroup: 'Fácil',
      difficulty: { pt: 'Fácil', en: 'Easy', es: 'Fácil', fr: 'Facile', nl: 'Makkelijk', de: 'Leicht' },
      location: 'Lençóis',
      image: '/img/adventures/pratinha/hero.jpeg',
    },
  },
  { id: 'mixila', adventureId: 'cachoeira-do-mixila-2-dias', days: 2 },
];

// Ordem cronológica. O id é roteiro + data de saída.
export const CALENDAR_DEPARTURES: CalendarDeparture[] = [
  { id: 'pati3-2026-10-25', trekId: 'pati3', start: '2026-10-25', end: '2026-10-27', price: 2200 },
  { id: 'pati3-2026-10-27', trekId: 'pati3', start: '2026-10-27', end: '2026-10-29', price: 1850 },
  { id: 'fumacaBaixo-2026-10-31', trekId: 'fumacaBaixo', start: '2026-10-31', end: '2026-11-02', price: 1275 },
  { id: 'pati4-2026-11-04', trekId: 'pati4', start: '2026-11-04', end: '2026-11-07', price: 2650 },
  { id: 'pati3-2026-11-06', trekId: 'pati3', start: '2026-11-06', end: '2026-11-08', price: 2200 },
  { id: 'pati3-2026-11-08', trekId: 'pati3', start: '2026-11-08', end: '2026-11-10', price: 2200 },
  { id: 'grutas-2026-11-09', trekId: 'grutas', start: '2026-11-09', end: '2026-11-09', price: 570 },
  { id: 'pati5-2026-11-09', trekId: 'pati5', start: '2026-11-09', end: '2026-11-13', price: 3450 },
  { id: 'pati3Buracao-2026-11-12', trekId: 'pati3Buracao', start: '2026-11-12', end: '2026-11-16', price: 2250, holiday: { id: 'republica', date: '2026-11-15' } },
  { id: 'pati3-2026-11-15', trekId: 'pati3', start: '2026-11-15', end: '2026-11-17', price: 2200, holiday: { id: 'republica', date: '2026-11-15' } },
  { id: 'pati5-2026-11-15', trekId: 'pati5', start: '2026-11-15', end: '2026-11-19', price: 3450, holiday: { id: 'republica', date: '2026-11-15' } },
  { id: 'mucugezinhoPratinhaPaiInacio-2026-12-04', trekId: 'mucugezinhoPratinhaPaiInacio', start: '2026-12-04', end: '2026-12-04', price: 600 },
  { id: 'pati2-2026-12-07', trekId: 'pati2', start: '2026-12-07', end: '2026-12-08', price: 1650 },
  { id: 'pacote6-2026-12-11', trekId: 'pacote6', start: '2026-12-11', end: '2026-12-16', price: 4700 },
  { id: 'pati3-2026-12-17', trekId: 'pati3', start: '2026-12-17', end: '2026-12-19', price: 2200 },
  { id: 'pati3-2026-12-26', trekId: 'pati3', start: '2026-12-26', end: '2026-12-28', price: 2200 },
  { id: 'reveillon6-2026-12-28', trekId: 'reveillon6', start: '2026-12-28', end: '2027-01-02', price: 5199 },
  { id: 'pati3-2027-01-12', trekId: 'pati3', start: '2027-01-12', end: '2027-01-14', price: 2200 },
  { id: 'mosquitoPocoAzul-2027-01-15', trekId: 'mosquitoPocoAzul', start: '2027-01-15', end: '2027-01-15', price: 570 },
  { id: 'mixila-2027-01-16', trekId: 'mixila', start: '2027-01-16', end: '2027-01-17', price: 1500 },
  { id: 'pati3-2027-01-28', trekId: 'pati3', start: '2027-01-28', end: '2027-01-30', price: 2200 },
  { id: 'pati3-2027-02-28', trekId: 'pati3', start: '2027-02-28', end: '2027-03-02', price: 2200 },
  { id: 'pati3-2027-03-01', trekId: 'pati3', start: '2027-03-01', end: '2027-03-03', price: 2200 },
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
