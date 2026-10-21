/**
 * Tabela completa de preços por faixa de grupo — o modelo para qualquer
 * roteiro (`DayTourAssets` ou `PatiAssets`).
 *
 * Para dar tabela a um passeio, espalhe nos assets
 * `...pricing([[pessoas, privado, emGrupo], …])` (ou `patiPricing` nas
 * travessias do Pati). Dali saem, sem risco de divergir:
 *  - a tabela formatada, com os rótulos de `PRICE_TABLE_LABELS` do idioma;
 *  - o "a partir de" (hero, JSON-LD), que é o menor valor dela;
 *  - os dois cards: privado = 2 pessoas (o caso mais comum, casais) e em
 *    grupo = o menor valor;
 *  - a estimativa do sheet de reserva, que muda com o nº de pessoas e o
 *    idioma do guia (`guide-pricing.ts`).
 * Só o `price` do card no hub (`adventures/adventures-data.ts`) é à mão.
 *
 * Os valores são de guia em português. Quando a operadora publicar os de guia
 * bilíngue, passe-os no 2º argumento: `pricing(pt, { bilingue: [...] })`.
 *
 * Os valores ficam em número porque valem para todos os idiomas; o texto
 * `R$ 1.200` é o mesmo em todos (formato brasileiro).
 */

import type { Locale } from '@/lib/site';
import type { GuidePriceTiers, PriceTier } from './guide-pricing';
import type { PriceTableLabels, PriceTableRow } from './PriceTable';

export type { PriceTier } from './guide-pricing';

export const brl = (value: number) => `R$ ${value.toLocaleString('pt-BR')}`;

export type TourPricing = {
  priceTable: PriceTableRow[];
  fromPrice: number;
  /** Destaque dos dois cards: privado para 2 pessoas e o menor valor em grupo. */
  cardPrices: readonly [number, number];
  tiers: GuidePriceTiers;
};

export function pricing(tiers: readonly PriceTier[], extra: { bilingue?: readonly PriceTier[] } = {}): TourPricing {
  const fromPrice = Math.min(...tiers.flatMap(([, privado, emGrupo]) => [privado, emGrupo]));
  const casal = tiers.find(([people]) => people === '2') ?? tiers[0];
  return {
    priceTable: tiers.map(([people, privado, emGrupo]) => ({ people, prices: [brl(privado), brl(emGrupo)] })),
    fromPrice,
    cardPrices: [casal[1], fromPrice],
    tiers: { pt: tiers, bilingue: extra.bilingue },
  };
}

/** `pricing` no formato de `PatiAssets`, que guarda os dois cards já como texto. */
export function patiPricing(tiers: readonly PriceTier[], extra: { bilingue?: readonly PriceTier[] } = {}) {
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
  },
  en: {
    titulo: 'Full price table',
    colunaPessoas: 'Group size',
    pessoa: 'person',
    pessoas: 'people',
    nota: 'Prices per person, in Brazilian reais, departing from and returning to Lençóis, for cash, bank transfer or boleto.',
    aviso: 'Bookings made less than 2 business days in advance are automatically private.',
    consulta: 'Starting from {cidade}? Ask our team for prices.',
  },
  es: {
    titulo: 'Tabla completa de precios',
    colunaPessoas: 'Nº de personas',
    pessoa: 'persona',
    pessoas: 'personas',
    nota: 'Valores por persona, en reales, con salida y regreso en Lençóis, para pago en efectivo, transferencia o boleto.',
    aviso: 'Las reservas hechas con menos de 2 días hábiles de anticipación serán automáticamente privadas.',
    consulta: '¿Salís desde {cidade}? Consultá los valores con nuestro equipo.',
  },
  fr: {
    titulo: 'Grille tarifaire complète',
    colunaPessoas: 'Nb de personnes',
    pessoa: 'personne',
    pessoas: 'personnes',
    nota: 'Tarifs par personne, en reais, départ et retour à Lençóis, pour paiement en espèces, virement ou boleto.',
    aviso: 'Les réservations faites moins de 2 jours ouvrés à l’avance sont automatiquement privées.',
    consulta: 'Départ de {cidade} ? Demandez-nous les tarifs.',
  },
  nl: {
    titulo: 'Volledige prijstabel',
    colunaPessoas: 'Aantal personen',
    pessoa: 'persoon',
    pessoas: 'personen',
    nota: 'Prijzen per persoon, in Braziliaanse real, met vertrek en terugkeer in Lençóis, bij betaling contant, per overboeking of met boleto.',
    aviso: 'Boekingen die minder dan 2 werkdagen van tevoren worden gemaakt, zijn automatisch privé.',
    consulta: 'Vertrek je vanuit {cidade}? Vraag ons naar de prijzen.',
  },
  de: {
    titulo: 'Vollständige Preistabelle',
    colunaPessoas: 'Anzahl Personen',
    pessoa: 'Person',
    pessoas: 'Personen',
    nota: 'Preise pro Person, in brasilianischen Real, mit Start und Rückkehr in Lençóis, bei Zahlung in bar, per Überweisung oder mit Boleto.',
    aviso: 'Buchungen, die weniger als 2 Werktage im Voraus erfolgen, sind automatisch privat.',
    consulta: 'Du startest in {cidade}? Frag uns nach den Preisen.',
  },
};
