/**
 * Base dos dados estruturados (schema.org, JSON-LD) do site — leve de
 * propósito (só depende de `site.ts`), para os componentes client poderem usar.
 *
 * - `SITE_JSON_LD`: a agência (`TravelAgency`) e o site (`WebSite`), com
 *   `@id` fixos. Vão uma vez por página, no layout de cada idioma; os demais
 *   blocos da página só apontam para eles pelo `@id`.
 * - `pageJsonLd`: a página em si (`WebPage` ou subtipo) e o caminho de
 *   navegação (`BreadcrumbList`) — o que todas as páginas institucionais usam.
 *
 * Os roteiros e as saídas do calendário ficam em
 * `components/adventure/structured-data.ts`, que se apoia neste.
 */

import { ADVENTURE_SEGMENT, SITE, type Locale } from './site';

export const absoluteUrl = (path: string) => (path.startsWith('http') ? path : `${SITE.url}${path}`);

export const ORGANIZATION_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

/** Idiomas em que a equipe conduz e atende (BCP 47). */
const IDIOMAS_DA_EQUIPE = ['pt-BR', 'en', 'fr'];

export const ORGANIZATION = {
  '@type': 'TravelAgency',
  '@id': ORGANIZATION_ID,
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: absoluteUrl('/web-app-manifest-512x512.png'), width: 512, height: 512 },
  image: absoluteUrl('/img/vale-do-pati/vale-do-pati-04.webp'),
  description: 'Operadora de trekkings e passeios na Chapada Diamantina, com base em Lençóis, Bahia.',
  email: SITE.email,
  telephone: SITE.whatsapp.replace(/[^\d+]/g, ''),
  address: { '@type': 'PostalAddress', streetAddress: 'Avenida 7 de Setembro, Centro', addressLocality: 'Lençóis', addressRegion: 'BA', postalCode: '46960-000', addressCountry: 'BR' },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
  hasMap: SITE.mapsUrl,
  areaServed: { '@type': 'Place', name: 'Chapada Diamantina, Bahia, Brasil' },
  knowsLanguage: IDIOMAS_DA_EQUIPE,
  identifier: { '@type': 'PropertyValue', propertyID: 'Cadastur', value: SITE.cadastur },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: SITE.whatsapp.replace(/[^\d+]/g, ''),
    email: SITE.email,
    availableLanguage: IDIOMAS_DA_EQUIPE,
  },
  sameAs: Object.values(SITE.social),
};

/** Agência + site, uma vez por página (layout de cada idioma). */
export function siteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION,
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE.name,
        url: SITE.url,
        inLanguage: locale,
        publisher: { '@id': ORGANIZATION_ID },
      },
    ],
  };
}

const INICIO: Record<Locale, string> = { pt: 'Início', en: 'Home', es: 'Inicio', fr: 'Accueil', nl: 'Home', de: 'Startseite' };
export const AVENTURAS: Record<Locale, string> = {
  pt: 'Aventuras', en: 'Adventures', es: 'Aventuras', fr: 'Aventures', nl: 'Avonturen', de: 'Abenteuer',
};

/** Tira o sufixo de marca e o ponto final de um título para usar no breadcrumb. */
const curto = (titulo: string) => titulo.replace(/\s*[·|—-]\s*Mamut Trekking\s*$/i, '').replace(/[.!]+$/, '').trim();

/** Início › … › página. `trail` são os níveis depois do início, na ordem. */
export function breadcrumbList(locale: Locale, trail: readonly { name: string; path: string }[]) {
  const itens = [{ name: INICIO[locale], path: `/${locale}` }, ...trail];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: itens.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: curto(item.name), item: absoluteUrl(item.path) })),
  };
}

/** Breadcrumb dos roteiros: Início › Aventuras › roteiro. */
export const adventureBreadcrumb = (locale: Locale, name: string, path: string) =>
  breadcrumbList(locale, [
    { name: AVENTURAS[locale], path: `/${locale}/${ADVENTURE_SEGMENT[locale]}` },
    { name, path },
  ]);

export type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage' | 'Article';

/**
 * Uma página institucional: o nó da página e o breadcrumb. Na home, sem
 * `trail`, sai só a página. `extra` entra no nó da página (ex.: \`mainEntity\`).
 */
export function pageJsonLd(p: {
  locale: Locale;
  type: PageType;
  name: string;
  description?: string;
  path: string;
  /** Níveis entre o início e esta página; a própria página entra no fim. */
  parents?: readonly { name: string; path: string }[];
  extra?: Record<string, unknown>;
  /** Nós a mais no mesmo @graph (ex.: uma ItemList). */
  nodes?: readonly Record<string, unknown>[];
}) {
  const url = absoluteUrl(p.path);
  const isHome = p.path === `/${p.locale}`;
  const page = {
    '@type': p.type,
    '@id': `${url}#webpage`,
    url,
    name: curto(p.name),
    ...(p.description ? { description: p.description } : {}),
    inLanguage: p.locale,
    isPartOf: { '@id': WEBSITE_ID },
    ...(p.type === 'Article'
      ? { headline: curto(p.name), author: { '@id': ORGANIZATION_ID }, publisher: { '@id': ORGANIZATION_ID } }
      : { publisher: { '@id': ORGANIZATION_ID } }),
    ...(isHome ? { about: { '@id': ORGANIZATION_ID } } : {}),
    ...p.extra,
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      page,
      ...(isHome ? [] : [breadcrumbList(p.locale, [...(p.parents ?? []), { name: p.name, path: p.path }])]),
      ...(p.nodes ?? []),
    ],
  };
}
