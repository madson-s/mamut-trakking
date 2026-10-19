/**
 * Tabela completa de preços por faixa de grupo — o modelo para qualquer
 * roteiro que use `DayTourContent` / `DayTourAssets`.
 *
 * Para dar tabela a um passeio:
 *  1. Nos assets, espalhe `...pricing([[pessoas, privado, emGrupo], …])` no
 *     lugar de `fromPrice` — a tabela sai formatada e o "a partir de" (hero,
 *     JSON-LD) passa a ser o menor valor dela, sem risco de divergir.
 *  2. Em cada idioma, `precos.tabela: PRICE_TABLE_LABELS.<locale>`.
 *  3. Ajuste à mão o `preco` dos dois cards em `precos.formatos` e o `price`
 *     do card no hub (`adventures/adventures-data.ts`).
 *
 * Os valores ficam em número porque valem para todos os idiomas; o texto
 * `R$ 1.200` é o mesmo em pt/en/es/fr/nl (ver `INTL_LOCALE`).
 */

import type { Locale } from '@/lib/site';
import type { PriceTableLabels, PriceTableRow } from './PriceTable';

/** `[faixa, privado, em grupo]` — a faixa é só o número: '1', '2', '3+'. */
export type PriceTier = readonly [people: string, privado: number, emGrupo: number];

const brl = (value: number) => `R$ ${value.toLocaleString('pt-BR')}`;

export function pricing(tiers: readonly PriceTier[]): { priceTable: PriceTableRow[]; fromPrice: number } {
  return {
    priceTable: tiers.map(([people, privado, emGrupo]) => ({ people, prices: [brl(privado), brl(emGrupo)] })),
    fromPrice: Math.min(...tiers.flatMap(([, privado, emGrupo]) => [privado, emGrupo])),
  };
}

export const PRICE_TABLE_LABELS: Record<Locale, PriceTableLabels> = {
  pt: {
    titulo: 'Tabela completa de preços',
    colunaPessoas: 'Nº de pessoas',
    pessoa: 'pessoa',
    pessoas: 'pessoas',
    nota: 'Valores por pessoa, em reais, para pagamento em dinheiro, transferência ou boleto.',
  },
  en: {
    titulo: 'Full price table',
    colunaPessoas: 'Group size',
    pessoa: 'person',
    pessoas: 'people',
    nota: 'Prices per person, in Brazilian reais, for cash, bank transfer or boleto.',
  },
  es: {
    titulo: 'Tabla completa de precios',
    colunaPessoas: 'Nº de personas',
    pessoa: 'persona',
    pessoas: 'personas',
    nota: 'Valores por persona, en reales, para pago en efectivo, transferencia o boleto.',
  },
  fr: {
    titulo: 'Grille tarifaire complète',
    colunaPessoas: 'Nb de personnes',
    pessoa: 'personne',
    pessoas: 'personnes',
    nota: 'Tarifs par personne, en reais, pour paiement en espèces, virement ou boleto.',
  },
  nl: {
    titulo: 'Volledige prijstabel',
    colunaPessoas: 'Aantal personen',
    pessoa: 'persoon',
    pessoas: 'personen',
    nota: 'Prijzen per persoon, in Braziliaanse real, bij betaling contant, per overboeking of met boleto.',
  },
  de: {
    titulo: 'Vollständige Preistabelle',
    colunaPessoas: 'Anzahl Personen',
    pessoa: 'Person',
    pessoas: 'Personen',
    nota: 'Preise pro Person, in brasilianischen Real, bei Zahlung in bar, per Überweisung oder mit Boleto.',
  },
};
