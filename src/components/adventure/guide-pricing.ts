/**
 * Preço por faixa de grupo e por idioma do guia — sem rótulos nem JSX, para o
 * sheet de reserva (client) importar sem levar o resto de `price-table.ts`.
 *
 * Guia em português tem um preço; guia bilíngue (qualquer outro idioma) custa
 * mais para a agência e tem outro — o mesmo para EN e FR. Enquanto a
 * operadora não publica o bilíngue de um roteiro, `bilingue` fica vazio e vale
 * o de português.
 *
 * Roteiros que ficam fora de Lençóis podem ter uma segunda tabela, `local`:
 * saindo da própria cidade do atrativo, sem o transporte de ida e volta a
 * Lençóis — por isso mais barata. No sheet a pessoa escolhe o ponto de saída.
 */

/**
 * Guia bilíngue = guia em português + R$ 65 por pessoa, em toda faixa e em
 * toda tabela (regra da operadora, 2026-10). Vale para todos os idiomas do
 * site menos o português; no sheet de reserva, para o idioma escolhido.
 */
export const BILINGUAL_SURCHARGE = 65;

/** A página em português anuncia guia em português; as demais, guia bilíngue. */
export const isPortugueseGuide = (locale: string) => locale === 'pt';

/** Um valor avulso (saída do calendário, Réveillon, pacote sem tabela) no preço do idioma. */
export const guidePrice = (value: number, locale: string) => (isPortugueseGuide(locale) ? value : value + BILINGUAL_SURCHARGE);

/** `[faixa, privado, em grupo]` — a faixa é só o número: '1', '2', '3', '4+'. */
export type PriceTier = readonly [people: string, privado: number, emGrupo: number];

/** As faixas de português com o acréscimo do guia bilíngue. */
export const withBilingualSurcharge = (tiers: readonly PriceTier[]): PriceTier[] =>
  tiers.map(([people, privado, emGrupo]) => [people, privado + BILINGUAL_SURCHARGE, emGrupo + BILINGUAL_SURCHARGE]);

/** Faixas de um ponto de saída, por idioma do guia. */
export type OriginTiers = {
  pt: readonly PriceTier[];
  bilingue?: readonly PriceTier[];
};

export type GuidePriceTiers = OriginTiers & {
  /** Saída da cidade do atrativo, sem transporte (ex.: Ibicoara). */
  local?: OriginTiers & { origin: string };
};

/** Ponto de saída escolhido no sheet: Lençóis (com transporte) ou a cidade do atrativo. */
export type DepartureOrigin = 'lencois' | 'local';

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

/** Valor por pessoa para o grupo, o formato, o idioma do guia e o ponto de saída escolhidos. */
export function estimatePrice(
  tiers: GuidePriceTiers,
  people: number,
  column: PriceColumn,
  language: GuideLanguage,
  origin: DepartureOrigin = 'lencois',
) {
  const from: OriginTiers = origin === 'local' && tiers.local ? tiers.local : tiers;
  const table = language === 'PT BR' ? from.pt : (from.bilingue ?? from.pt);
  return tierFor(table, people)[column + 1] as number;
}
