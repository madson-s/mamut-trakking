/**
 * As quatro páginas da seção de dicas e o caminho de cada uma por idioma.
 *
 * "Como chegar" É a página da seção (`/dicas`, `/tips`, `/consejos`, `/conseils`, `/nl/tips`, `/de/tipps`); as outras
 * três ficam na raiz do idioma, com os mesmos slugs do site atual. Como a regra
 * não é uniforme, o caminho vem declarado inteiro em vez de montado a partir de
 * um segmento.
 *
 * Lê daqui: o menu da seção, o `localizePath` e o sitemap.
 */

import type { Locale } from '@/lib/site';

export const DICAS_PAGES = [
  'como-chegar',
  'informacoes-gerais',
  'classificacao-de-nivel',
  'geologia',
] as const;

export type DicasPageId = (typeof DICAS_PAGES)[number];

/** Segmento da seção em cada idioma. */
export const DICAS_SEGMENT: Record<Locale, string> = {
  pt: 'dicas',
  en: 'tips',
  es: 'consejos',
  fr: 'conseils',
  nl: 'tips',
  de: 'tipps',
};

export const DICAS_PATHS: Record<Locale, Record<DicasPageId, string>> = {
  pt: {
    'como-chegar': '/pt/dicas',
    'informacoes-gerais': '/pt/informacoes-gerais',
    'classificacao-de-nivel': '/pt/classificacao-de-nivel',
    geologia: '/pt/geologia-da-chapada-diamantina',
  },
  en: {
    'como-chegar': '/en/tips',
    'informacoes-gerais': '/en/general-information',
    'classificacao-de-nivel': '/en/level-classification',
    geologia: '/en/geology-of-chapada-diamantina',
  },
  es: {
    'como-chegar': '/es/consejos',
    'informacoes-gerais': '/es/informacion-general',
    'classificacao-de-nivel': '/es/clasificacion-de-nivel',
    geologia: '/es/geologia-de-la-chapada-diamantina',
  },
  fr: {
    'como-chegar': '/fr/conseils',
    'informacoes-gerais': '/fr/informations-generales',
    'classificacao-de-nivel': '/fr/classification-des-niveaux',
    geologia: '/fr/geologie-de-la-chapada-diamantina',
  },
  nl: {
    'como-chegar': '/nl/tips',
    'informacoes-gerais': '/nl/algemene-informatie',
    'classificacao-de-nivel': '/nl/niveauclassificatie',
    geologia: '/nl/geologie-van-de-chapada-diamantina',
  },
  de: {
    'como-chegar': '/de/tipps',
    'informacoes-gerais': '/de/allgemeine-informationen',
    'classificacao-de-nivel': '/de/schwierigkeitsgrade',
    geologia: '/de/geologie-der-chapada-diamantina',
  },
};

export const dicasHref = (locale: Locale, page: DicasPageId) => DICAS_PATHS[locale][page];
