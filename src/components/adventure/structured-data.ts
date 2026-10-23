/**
 * Dados estruturados (schema.org, JSON-LD) dos roteiros e das saídas.
 *
 * Cada página de roteiro publica um `@graph` com:
 *  - `TouristTrip`: nome, descrição, fotos, itinerário dia a dia e a faixa de
 *    preços (`AggregateOffer`, do menor ao maior valor da tabela);
 *  - `BreadcrumbList`: Início › Aventuras › roteiro;
 *  - `FAQPage`: as perguntas que têm resposta em texto corrido;
 *  - um `Event` por saída confirmada no calendário, o mesmo `@id` que a página
 *    do calendário publica — os buscadores entendem que é a mesma saída.
 * A agência (`TravelAgency`) e o site vêm do layout (`lib/structured-data.ts`);
 * aqui tudo só aponta para eles pelo `@id`.
 */

import type { Locale } from '@/lib/site';
import { SITE } from '@/lib/site';
import { ORGANIZATION_ID, absoluteUrl, adventureBreadcrumb } from '@/lib/structured-data';
import { aventurasDoIdioma } from '@/components/adventures/AdventureCard';
import { CALENDAR_CONTENT, CALENDAR_HREF, type CalendarContent } from '@/components/calendar/calendar-content';
import { CALENDAR_TREKS, type CalendarDeparture } from '@/components/calendar/calendar-data';
import { nextDepartures } from '@/components/calendar/next-departures';
import { guidePrice, isPortugueseGuide, withBilingualSurcharge, type GuidePriceTiers, type OriginTiers } from './guide-pricing';
import type { PatiFaqItem } from './PatiFaqList';

/** Texto corrido de um item de FAQ, para o JSON-LD (que só aceita texto). */
export function faqAnswerText(item: PatiFaqItem): string | null {
  switch (item.type) {
    case 'payment':
      return item.paragraphs.join(' ');
    case 'cancellation':
      return [item.intro, item.refunds.map(([quando, regra]) => `${quando}: ${regra}`).join('; '), ...item.paragraphs].join(' ');
    case 'safety':
      return [item.lead, item.body, ...(item.disclaimer ?? [])].join(' ');
    default:
      return null;
  }
}

export function faqPage(locale: Locale, faqs: readonly PatiFaqItem[], path?: string) {
  const mainEntity = faqs.flatMap((item) => {
    const texto = faqAnswerText(item);
    return texto ? [{ '@type': 'Question', name: item.title, acceptedAnswer: { '@type': 'Answer', text: texto } }] : [];
  });
  if (!mainEntity.length) return null;
  return { '@type': 'FAQPage', ...(path ? { '@id': `${absoluteUrl(path)}#faq`, url: absoluteUrl(path) } : {}), inLanguage: locale, mainEntity };
}

// ---------------------------------------------------------------- saídas

/** O que o `Event` de uma saída precisa saber do roteiro. */
export type DepartureTrek = {
  id: string;
  title: string;
  days: number;
  distance?: string;
  location: string;
  image: string;
  href?: string;
};

const dia = (iso: string) => new Date(`${iso}T12:00:00`);

/** "25 – 27 out", "30 out – 2 nov" ou "15 jan" — o mesmo rótulo do calendário. */
export function periodoSaida(c: CalendarContent, departure: CalendarDeparture) {
  const start = dia(departure.start), end = dia(departure.end);
  if (departure.start === departure.end) return `${start.getDate()} ${c.meses[start.getMonth()]}`;
  return `${start.getDate()}${start.getMonth() !== end.getMonth() ? ` ${c.meses[start.getMonth()]}` : ''} – ${end.getDate()} ${c.meses[end.getMonth()]}`;
}

export function departureEvent(locale: Locale, trek: DepartureTrek, departure: CalendarDeparture) {
  const c = CALENDAR_CONTENT[locale];
  return {
    '@type': 'Event',
    '@id': `${SITE.url}${CALENDAR_HREF[locale]}#${departure.id}`,
    name: `${trek.title} · ${periodoSaida(c, departure)}`,
    description: [c.dias(trek.days), trek.distance, c.saidaDe(trek.location)].filter(Boolean).join(' · '),
    startDate: departure.start,
    endDate: departure.end,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    inLanguage: locale,
    image: [absoluteUrl(trek.image)],
    location: {
      '@type': 'Place',
      name: `${trek.location}, Chapada Diamantina`,
      address: { '@type': 'PostalAddress', addressLocality: trek.location, addressRegion: 'BA', addressCountry: 'BR' },
    },
    // Quem conduz a saída é a própria agência: organizadora e "performer".
    organizer: { '@id': ORGANIZATION_ID },
    performer: { '@id': ORGANIZATION_ID },
    offers: {
      '@type': 'Offer',
      price: departure.price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}${CALENDAR_HREF[locale]}#saidas-${trek.id}`,
      seller: { '@id': ORGANIZATION_ID },
    },
    ...(trek.href ? { subjectOf: absoluteUrl(trek.href) } : {}),
  };
}

/** Saídas futuras de um roteiro do calendário, já como `Event` (para a página do roteiro). */
function departureEventsFor(locale: Locale, trekId: string) {
  const trek = CALENDAR_TREKS.find((t) => t.id === trekId);
  if (!trek?.adventureId) return [];
  const hub = aventurasDoIdioma(locale).find((a) => a.id === trek.adventureId);
  if (!hub) throw new Error(`structured-data: roteiro "${trek.adventureId}" não existe no hub`);
  const info: DepartureTrek = {
    id: trek.id,
    title: hub.title,
    days: trek.days,
    distance: hub.distance,
    location: hub.location,
    image: trek.image ?? hub.image,
    href: hub.href,
  };
  return nextDepartures(trekId, Infinity).map((d) => departureEvent(locale, info, { ...d, price: guidePrice(d.price, locale) }));
}

// ---------------------------------------------------------------- roteiro

export function tourJsonLd(p: {
  locale: Locale;
  name: string;
  description: string;
  /** Canonical da página, ex.: `/pt/aventuras/grutas`. */
  path: string;
  images: readonly string[];
  /** Etapas do itinerário, na ordem. */
  days?: readonly { name: string; description?: string }[];
  fromPrice: number;
  tiers?: GuidePriceTiers;
  faqs?: readonly PatiFaqItem[];
  calendarTrekId?: string;
  /** Âncora da oferta na página (padrão: a tabela de preços). */
  offersAnchor?: string;
  touristType?: readonly string[];
}) {
  const url = absoluteUrl(p.path);
  // Os valores do idioma da página: guia em português em /pt, bilíngue nos demais.
  const pick = (t?: OriginTiers) => (t ? (isPortugueseGuide(p.locale) ? t.pt : (t.bilingue ?? withBilingualSurcharge(t.pt))) : []);
  const prices = [...pick(p.tiers), ...pick(p.tiers?.local)].flatMap(([, privado, grupo]) => [privado, grupo]);
  const offers = prices.length
    ? {
        '@type': 'AggregateOffer',
        priceCurrency: 'BRL',
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        offerCount: prices.length,
        availability: 'https://schema.org/InStock',
        url: `${url}${p.offersAnchor ?? '#tabela-pagamento'}`,
        seller: { '@id': ORGANIZATION_ID },
      }
    : { '@type': 'Offer', price: p.fromPrice, priceCurrency: 'BRL', availability: 'https://schema.org/InStock', url, seller: { '@id': ORGANIZATION_ID } };

  const trip = {
    '@type': 'TouristTrip',
    '@id': `${url}#trip`,
    name: p.name,
    description: p.description,
    url,
    inLanguage: p.locale,
    image: p.images.map(absoluteUrl),
    touristType: p.touristType ?? ['Trekking', 'Ecoturismo'],
    mainEntityOfPage: url,
    provider: { '@id': ORGANIZATION_ID },
    offers,
    ...(p.days?.length
      ? {
          itinerary: {
            '@type': 'ItemList',
            numberOfItems: p.days.length,
            itemListElement: p.days.map((d, i) => ({ '@type': 'ListItem', position: i + 1, name: d.name, ...(d.description ? { description: d.description } : {}) })),
          },
        }
      : {}),
  };

  const breadcrumb = adventureBreadcrumb(p.locale, p.name, p.path);
  const faq = p.faqs ? faqPage(p.locale, p.faqs, p.path) : null;
  const events = p.calendarTrekId ? departureEventsFor(p.locale, p.calendarTrekId) : [];

  return {
    '@context': 'https://schema.org',
    '@graph': [trip, breadcrumb, ...(faq ? [faq] : []), ...events],
  };
}
