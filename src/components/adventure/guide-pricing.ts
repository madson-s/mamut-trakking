/**
 * Preço por faixa de grupo e por idioma do guia — sem rótulos nem JSX, para o
 * sheet de reserva (client) importar sem levar o resto de `price-table.ts`.
 *
 * Guia em português tem um preço; guia bilíngue (qualquer outro idioma) custa
 * mais para a agência e tem outro — o mesmo para EN e FR. Enquanto a
 * operadora não publica o bilíngue de um roteiro, `bilingue` fica vazio e vale
 * o de português.
 */

/** `[faixa, privado, em grupo]` — a faixa é só o número: '1', '2', '3', '4+'. */
export type PriceTier = readonly [people: string, privado: number, emGrupo: number];

export type GuidePriceTiers = {
  pt: readonly PriceTier[];
  bilingue?: readonly PriceTier[];
};

/** Idioma escolhido no sheet de reserva (`PatiMobileBooking`). */
export type GuideLanguage = 'PT BR' | 'EN' | 'FR';

/** 0 = privado, 1 = em grupo — a ordem das colunas da tabela. */
export type PriceColumn = 0 | 1;

/** Faixa que cobre `people` viajantes: '3' só 3, '3+' de 3 em diante; acima da última, a última. */
function tierFor(tiers: readonly PriceTier[], people: number) {
  return (
    tiers.find(([label]) => (label.endsWith('+') ? people >= Number.parseInt(label, 10) : people === Number(label))) ??
    tiers.at(-1)!
  );
}

/** Valor por pessoa para o grupo, o formato e o idioma do guia escolhidos. */
export function estimatePrice(tiers: GuidePriceTiers, people: number, column: PriceColumn, language: GuideLanguage) {
  const table = language === 'PT BR' ? tiers.pt : (tiers.bilingue ?? tiers.pt);
  return tierFor(table, people)[column + 1] as number;
}
