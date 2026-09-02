/**
 * Forma comum das páginas de passeio de um dia.
 *
 * O conteúdo de cada roteiro vive no seu próprio arquivo (`pai-inacio-content`,
 * `sossego-content`), mas todos têm a mesma anatomia: hero, faixa de números,
 * sobre + galeria, itinerário, preços, FAQs e fecho. O componente que os
 * renderiza é um só — `DayTourExperience`.
 */

import type { PatiFaqItem } from './PatiFaqList';

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
  hero: { src: string; position?: string };
  galeria: { src: string; width: number; height: number }[];
  /** `[valor, ícone]` — o rótulo vem de `DayTourContent.stats`, na mesma ordem. */
  stats: readonly (readonly [string, string])[];
  fromPrice: number;
};
