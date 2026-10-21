/**
 * Forma comum das páginas de passeio de um dia.
 *
 * O conteúdo de cada roteiro vive no seu próprio arquivo (`pai-inacio-content`,
 * `sossego-content`), mas todos têm a mesma anatomia: hero, faixa de números,
 * sobre + galeria, itinerário, preços, FAQs e fecho. O componente que os
 * renderiza é um só — `DayTourExperience`.
 */

import type { PatiFaqItem } from './PatiFaqList';
import type { PriceTableLabels, PriceTableRow } from './PriceTable';
import type { ReturnTime } from './agency-support';
import type { GuidePriceTiers } from './guide-pricing';

export type DayTourContent = {
  meta: { title: string; description: string; canonical: string };
  hero: {
    nivel: string;
    origem: string;
    duracao: string;
    titulo: string;
    lead: string;
    apartirDe: string;
    porPessoa: string;
    reservar: string;
  };
  /** Rótulo de cada número, na ordem de `DayTourAssets.stats`. */
  stats: string[];
  sobre: { titulo: string; paragrafos: string[] };
  /**
   * "O que comemos" e "onde dormimos", com foto. Eram dois parágrafos soltos
   * dentro do `sobre` — mas são a pergunta que mais aparece no atendimento de
   * um trekking com pernoite, e a foto responde melhor que o texto.
   */
  estadia?: {
    titulo: string;
    itens: { img: string; alt: string; titulo: string; corpo: string }[];
  };
  /**
   * `corpo` é a narrativa corrida dos passeios de um dia. Trekkings de mais de
   * um dia usam `dias`: cada etapa tem distância e esforço próprios, e perder
   * essa estrutura numa lista de parágrafos apagaria justamente o que o
   * viajante compara antes de escolher entre 4 e 5 dias.
   */
  itinerario: {
    titulo: string;
    aviso: string;
    corpo: string[];
    dias?: { rotulo: string; titulo: string; corpo: string; distancia: string; esforco: string }[];
  };
  precos: {
    titulo: string;
    formatos: { titulo: string; preco: string; nota: string }[];
    /** Rótulos da tabela por faixa — só usados quando há `priceTable`. Use `PRICE_TABLE_LABELS` (`price-table.ts`). */
    tabela?: PriceTableLabels;
    nota: string;
  };
  faqTitulo: string;
  faqs: readonly PatiFaqItem[];
  /**
   * "Outras aventuras": ids do hub, na ordem em que devem aparecer. Só as
   * páginas que declaram o campo ganham a seção — os cards vêm do mesmo
   * `AdventureCard` do hub, então nível, distância e preço não podem divergir
   * do que o catálogo mostra.
   */
  relacionados?: { titulo: string; ids: string[] };
  cta: { titulo: [string, string]; corpo: string; botao: string };
};

/** A parte que não muda com o idioma: fotos, números e o preço de entrada. */
export type DayTourAssets = {
  /** O layout editorial é o padrão; `legacy` preserva apenas as variantes do Vale do Pati. */
  detailLayout?: 'journey' | 'legacy';
  hero: { src: string; position?: string };
  galeria: { src: string; width: number; height: number }[];
  /** `[valor, ícone]` — o rótulo vem de `DayTourContent.stats`, na mesma ordem. */
  stats: readonly (readonly [string, string])[];
  fromPrice: number;
  /**
   * Tabela completa por faixa de grupo, como a de mamut.agency (âncora
   * `#tabela-pagamento`). `people` é só o número — o rótulo vem de
   * `precos.tabela`, porque os assets valem para os três idiomas. `prices`
   * segue a ordem de `precos.formatos` (privado, em grupo). Omitir quando a
   * operadora não publicou os valores por faixa: aí ficam só os dois cards.
   * Monte com `pricing()` de `price-table.ts`, que também define `fromPrice`.
   */
  priceTable?: readonly PriceTableRow[];
  /** Segunda tabela, saindo da cidade do atrativo (sem transporte) — vem de `pricing()`. */
  localTable?: { origin: string; rows: readonly PriceTableRow[] };
  /** Os dois cards (privado para 2 pessoas, menor em grupo) — vem de `pricing()`. */
  cardPrices?: readonly [number, number];
  /** Faixas por idioma do guia, para a estimativa do sheet de reserva — vem de `pricing()`. */
  tiers?: GuidePriceTiers;
  /** Outra cidade de saída, com valores sob consulta (ex.: 'Ibicoara'). */
  /** Roteiro no calendário (`CALENDAR_TREKS`) — liga o bloco de próximas saídas na seção de preços. */
  calendarTrekId?: string;
  priceOrigin?: string;
  /**
   * Chegada de volta a Lençóis nas atividades de 2 dias ou mais — liga o
   * "antes / depois" abaixo do itinerário (`agency-support.ts`).
   */
  returnTime?: ReturnTime;
  /** Passeio com acampamento: soma o equipamento de camping incluso às comodidades. */
  campingGear?: boolean;
};
