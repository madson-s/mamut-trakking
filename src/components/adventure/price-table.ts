/**
 * Tabela completa de preços por faixa de grupo — o modelo para qualquer
 * roteiro (`DayTourAssets` ou `PatiAssets`).
 *
 * Para dar tabela a um passeio, espalhe nos assets
 * `...pricing([[pessoas, privado, emGrupo], …])` (ou `patiPricing` nas
 * travessias do Pati). Dali saem, sem risco de divergir:
 *  - a tabela formatada, com os rótulos de `PRICE_TABLE_LABELS` do idioma;
 *  - o "a partir de" (hero, JSON-LD), que é o menor valor das tabelas;
 *  - os dois cards: privado = 2 pessoas (o caso mais comum, casais) e em
 *    grupo = o menor valor;
 *  - a estimativa do sheet de reserva, que muda com o nº de pessoas e o
 *    idioma do guia (`guide-pricing.ts`).
 * Só o `price` do card no hub (`adventures/adventures-data.ts`) é à mão.
 *
 * Os valores são de guia em português. O de guia bilíngue sai da regra de
 * `guide-pricing.ts` (+ R$ 65 por pessoa); um roteiro com valores próprios
 * passa `pricing(pt, { bilingue: [...] })`. A página em português mostra o de
 * português; as demais, o bilíngue (`pricingFor`).
 *
 * Roteiro fora de Lençóis com saída também da cidade do atrativo (sem
 * transporte, mais barato): `pricing(pt, { local: { origin: 'Ibicoara', pt: [...] } })`.
 * A página mostra as duas tabelas e o sheet de reserva pergunta o ponto de
 * saída. O "a partir de" (hero, hub, JSON-LD) e o card em grupo mostram o
 * menor valor entre as duas tabelas; o card privado segue o de 2 pessoas
 * saindo de Lençóis.
 *
 * Os valores ficam em número porque valem para todos os idiomas; o texto
 * `R$ 1.200` é o mesmo em todos (formato brasileiro).
 */

import type { Locale } from '@/lib/site';
import { isPortugueseGuide, withBilingualSurcharge, type GuidePriceTiers, type OriginTiers, type PriceTier } from './guide-pricing';
import type { PriceTableLabels, PriceTableRow } from './PriceTable';

export type { PriceTier } from './guide-pricing';

export const brl = (value: number) => `R$ ${value.toLocaleString('pt-BR')}`;

export type TourPricing = {
  priceTable: PriceTableRow[];
  fromPrice: number;
  /** Destaque dos dois cards: privado para 2 pessoas e o menor valor em grupo. */
  cardPrices: readonly [number, number];
  tiers: GuidePriceTiers;
  /** Segunda tabela, saindo da cidade do atrativo (sem transporte). */
  localTable?: { origin: string; rows: PriceTableRow[] };
};

type PricingExtra = {
  bilingue?: readonly PriceTier[];
  local?: OriginTiers & { origin: string };
};

const rows = (tiers: readonly PriceTier[]): PriceTableRow[] =>
  tiers.map(([people, privado, emGrupo]) => ({ people, prices: [brl(privado), brl(emGrupo)] }));

/** Tabela, "a partir de", cards e tabela local de um conjunto de faixas (um idioma de guia). */
function view(main: readonly PriceTier[], local?: { origin: string; tiers: readonly PriceTier[] }) {
  const todas = [...main, ...(local?.tiers ?? [])];
  const fromPrice = Math.min(...todas.flatMap(([, privado, emGrupo]) => [privado, emGrupo]));
  const casal = main.find(([people]) => people === '2') ?? main[0];
  return {
    priceTable: rows(main),
    fromPrice,
    cardPrices: [casal[1], fromPrice] as const,
    ...(local ? { localTable: { origin: local.origin, rows: rows(local.tiers) } } : {}),
  };
}

export function pricing(tiers: readonly PriceTier[], extra: PricingExtra = {}): TourPricing {
  const local = extra.local ? { ...extra.local, bilingue: extra.local.bilingue ?? withBilingualSurcharge(extra.local.pt) } : undefined;
  return {
    ...view(tiers, local && { origin: local.origin, tiers: local.pt }),
    tiers: { pt: tiers, bilingue: extra.bilingue ?? withBilingualSurcharge(tiers), local },
  };
}

/**
 * Os valores que a página do idioma mostra: guia em português em /pt, guia
 * bilíngue nos demais. Os assets guardam o de português (`pricing`); as páginas
 * passam por aqui antes de exibir.
 */
export function pricingFor(tiers: GuidePriceTiers, locale: Locale) {
  const pt = isPortugueseGuide(locale);
  const pick = (t: OriginTiers) => (pt ? t.pt : (t.bilingue ?? withBilingualSurcharge(t.pt)));
  return view(pick(tiers), tiers.local && { origin: tiers.local.origin, tiers: pick(tiers.local) });
}

/** `pricingFor` com os dois cards já em texto, no formato de `PatiAssets`. */
export function patiPricingFor(tiers: GuidePriceTiers, locale: Locale) {
  const p = pricingFor(tiers, locale);
  return {
    ...p,
    priceTiers: [
      { price: brl(p.cardPrices[0]), highlight: false },
      { price: brl(p.cardPrices[1]), highlight: true },
    ],
  };
}

/** `pricing` no formato de `PatiAssets`, que guarda os dois cards já como texto. */
export function patiPricing(tiers: readonly PriceTier[], extra: PricingExtra = {}) {
  const p = pricing(tiers, extra);
  return {
    ...p,
    priceTiers: [
      { price: brl(p.cardPrices[0]), highlight: false },
      { price: brl(p.cardPrices[1]), highlight: true },
    ],
  };
}

/** Botão do topo da página que desce até a tabela (`#tabela-pagamento`). */
export const VER_TABELA: Record<Locale, string> = {
  pt: 'Ver tabela de preços',
  en: 'See price table',
  es: 'Ver tabla de precios',
  fr: 'Voir la grille tarifaire',
  nl: 'Bekijk de prijstabel',
  de: 'Preistabelle ansehen',
};

export const PRICE_TABLE_LABELS: Record<Locale, PriceTableLabels> = {
  pt: {
    titulo: 'Tabela completa de preços',
    colunaPessoas: 'Nº de pessoas',
    pessoa: 'pessoa',
    pessoas: 'pessoas',
    nota: 'Valores por pessoa, em reais, com saída e retorno em Lençóis, para pagamento em dinheiro, transferência ou boleto.',
    aviso: 'Reservas feitas com menos de 2 dias úteis de antecedência serão automaticamente privativas.',
    consulta: 'Saindo de {cidade}? Consulte os valores no atendimento.',
    lencois: 'Saindo de Lençóis · com transporte',
    local: 'Saindo de {cidade} · sem transporte',
    notaLocal: 'Valores por pessoa, em reais, com encontro em {cidade} — sem o transporte de ida e volta a Lençóis.',
  },
  en: {
    titulo: 'Full price table',
    colunaPessoas: 'Group size',
    pessoa: 'person',
    pessoas: 'people',
    nota: 'Prices per person, in Brazilian reais, departing from and returning to Lençóis, for cash, bank transfer or boleto.',
    aviso: 'Bookings made less than 2 business days in advance are automatically private.',
    consulta: 'Starting from {cidade}? Ask our team for prices.',
    lencois: 'From Lençóis · transport included',
    local: 'From {cidade} · no transport',
    notaLocal: 'Prices per person, in Brazilian reais, meeting in {cidade} — without the round trip to and from Lençóis.',
  },
  es: {
    titulo: 'Tabla completa de precios',
    colunaPessoas: 'Nº de personas',
    pessoa: 'persona',
    pessoas: 'personas',
    nota: 'Valores por persona, en reales, con salida y regreso en Lençóis, para pago en efectivo, transferencia o boleto.',
    aviso: 'Las reservas hechas con menos de 2 días hábiles de anticipación serán automáticamente privadas.',
    consulta: '¿Salís desde {cidade}? Consultá los valores con nuestro equipo.',
    lencois: 'Saliendo de Lençóis · con transporte',
    local: 'Saliendo de {cidade} · sin transporte',
    notaLocal: 'Valores por persona, en reales, con encuentro en {cidade} — sin el traslado de ida y vuelta a Lençóis.',
  },
  fr: {
    titulo: 'Grille tarifaire complète',
    colunaPessoas: 'Nb de personnes',
    pessoa: 'personne',
    pessoas: 'personnes',
    nota: 'Tarifs par personne, en reais, départ et retour à Lençóis, pour paiement en espèces, virement ou boleto.',
    aviso: 'Les réservations faites moins de 2 jours ouvrés à l’avance sont automatiquement privées.',
    consulta: 'Départ de {cidade} ? Demandez-nous les tarifs.',
    lencois: 'Départ de Lençóis · transport inclus',
    local: 'Départ de {cidade} · sans transport',
    notaLocal: 'Tarifs par personne, en reais, rendez-vous à {cidade} — sans le trajet aller-retour depuis Lençóis.',
  },
  nl: {
    titulo: 'Volledige prijstabel',
    colunaPessoas: 'Aantal personen',
    pessoa: 'persoon',
    pessoas: 'personen',
    nota: 'Prijzen per persoon, in Braziliaanse real, met vertrek en terugkeer in Lençóis, bij betaling contant, per overboeking of met boleto.',
    aviso: 'Boekingen die minder dan 2 werkdagen van tevoren worden gemaakt, zijn automatisch privé.',
    consulta: 'Vertrek je vanuit {cidade}? Vraag ons naar de prijzen.',
    lencois: 'Vanuit Lençóis · met vervoer',
    local: 'Vanuit {cidade} · zonder vervoer',
    notaLocal: 'Prijzen per persoon, in Braziliaanse real, met verzamelpunt in {cidade} — zonder de rit heen en terug naar Lençóis.',
  },
  de: {
    titulo: 'Vollständige Preistabelle',
    colunaPessoas: 'Anzahl Personen',
    pessoa: 'Person',
    pessoas: 'Personen',
    nota: 'Preise pro Person, in brasilianischen Real, mit Start und Rückkehr in Lençóis, bei Zahlung in bar, per Überweisung oder mit Boleto.',
    aviso: 'Buchungen, die weniger als 2 Werktage im Voraus erfolgen, sind automatisch privat.',
    consulta: 'Du startest in {cidade}? Frag uns nach den Preisen.',
    lencois: 'Ab Lençóis · mit Transport',
    local: 'Ab {cidade} · ohne Transport',
    notaLocal: 'Preise pro Person, in brasilianischen Real, Treffpunkt in {cidade} — ohne Hin- und Rückfahrt nach Lençóis.',
  },
};
