'use client';

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ChevronDown, Flag, MapPin, Mountain } from 'lucide-react';
import { Button, JsonLd } from '@/components/ui';
import { aventurasDoIdioma } from '@/components/adventures/AdventureCard';
import type { DifficultyGroup } from '@/components/adventures/filters';
import { ADVENTURE_SEGMENT, SITE, formatPrice, type Locale } from '@/lib/site';
import { ADVENTURE_ROUTES } from '@/lib/routes';
import { MESSAGE_LOCALE } from '@/lib/message-locale';
import { CALENDAR_TREKS, RELATED_ROUTES, type CalendarDeparture } from './calendar-data';
import { CALENDAR_CONTENT, type CalendarContent } from './calendar-content';
import { ORGANIZATION, departureEvent, periodoSaida } from '@/components/adventure/structured-data';
import { guidePrice } from '@/components/adventure/guide-pricing';
import styles from './calendar.module.css';

// THESIS: Reproduce the supplied ZIP and screenshots, not the previous interpretation.
// OWN-WORLD: Mergo, dark stone, pale green, documentary photos and glass stack captions.
// STORY: Explore three treks, compare dates and day markers, reserve or request a date.
// FIRST VIEWPORT: Pale stacked headline and mammoth cutout beside overlapping photos.
// FORM: User-pinned Mamut Trekking Aventuras.zip, 01–12-tela.png; no speculative sections.
// FINISH: Review desktop and mobile against the reference, then record the surface.

const ASSETS = '/img/calendar';
const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?wkst=1&ctz=America%2FSao_Paulo&src=bWFyY2Vsby5jYWJyYWxsLm1jQGdtYWlsLmNvbQ';
const date = (iso: string) => new Date(`${iso}T12:00:00`);
const wa = (message: string) => `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;

/**
 * Roteiro do calendário pronto para exibir: texto no idioma da página (do hub
 * ou do `custom`), saídas futuras e o menor preço entre elas.
 */
type Trek = {
  id: string;
  /** Id no hub — ausente nos roteiros montados só para o calendário. */
  adventureId?: string;
  days: number;
  image: string;
  title: string;
  /** Nome no idioma da mensagem de WhatsApp (`MESSAGE_LOCALE`). */
  messageTitle: string;
  difficultyGroup: DifficultyGroup;
  difficulty: string;
  distance?: string;
  location: string;
  /** Página do roteiro; sem ela, o grupo oferece WhatsApp. */
  href?: string;
  departures: CalendarDeparture[];
  fromPrice: number;
};

/**
 * Contexto que cada bloco precisa: textos e formatação do idioma. `m` são os
 * textos do idioma da mensagem de WhatsApp — pt, en ou fr; os demais idiomas
 * do site mandam a mensagem em inglês (`MESSAGE_LOCALE`).
 */
type Ctx = { c: CalendarContent; m: CalendarContent; locale: Locale };

const price = ({ locale }: Ctx, value: number) => formatPrice(value, locale);
const askDate = ({ m }: Ctx, name?: string) => wa(name ? m.novaData.roteiro(name) : m.novaData.geral);

// A cor do selo segue o grupo de dificuldade do hub, não o texto do rótulo —
// comparar com "Fácil" quebraria no inglês e no espanhol.
const TONE = { 'Fácil': '🟢', 'Moderado': '🟡', 'Desafiador': '🔴' } as const;

/** Um `Event` do schema.org por saída confirmada — o mesmo gerador das páginas de roteiro. */
function departuresJsonLd({ locale }: Ctx, treks: Trek[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [ORGANIZATION, ...treks.flatMap((trek) => trek.departures.map((departure) => departureEvent(locale, trek, departure)))],
  };
}

function dateRange({ c }: Ctx, departure: CalendarDeparture) {
  return periodoSaida(c, departure);
}

function PhotoStack({ ctx, treks }: { ctx: Ctx; treks: Trek[] }) {
  const { c } = ctx;
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className={styles.stack} onMouseLeave={() => setHovered(null)}>
      <ul aria-label={c.hero.pilhaRotulo}>
        {/* A pilha foi desenhada para três cartões: mostra os três roteiros com
            as saídas mais próximas; os demais seguem na lista abaixo. */}
        {treks.slice(0, 3).map((trek, index) => {
          const departures = trek.departures;
          const pulled = hovered === index && index !== 0;
          const focused = hovered === index;
          const otherPulled = hovered !== null && hovered > 0 && !focused;
          const cardStyle = {
            '--card-x': `${pulled ? 0 : [0, -6, -10][index]}px`,
            '--card-y': `${-66 * index}px`,
            '--card-rotation': `${pulled ? 0 : [-1, 1.5, -1.5][index]}deg`,
            '--card-scale': pulled ? 1.02 : 1,
            zIndex: pulled ? 4 : 3 - index,
            filter: focused ? 'none' : otherPulled ? 'brightness(.6)' : index > 0 ? 'brightness(.74)' : 'none',
          } as CSSProperties;
          const titulo = trek.title;
          return (
            <li key={trek.id} className={styles.stackCard} style={cardStyle} data-active={index === 0 || pulled}>
              <a href={`#saidas-${trek.id}`} aria-label={c.hero.verSaidasDe(titulo)}
                onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}
                onFocus={(event) => { if (event.currentTarget.matches(':focus-visible')) setHovered(index); }} onBlur={() => setHovered(null)}>
                <Image src={trek.image} alt="" fill sizes="(max-width: 420px) 90vw, 380px" priority className={styles.cover} />
                <div className={styles.stackPills}><span><CalendarDays size={15} aria-hidden />{dateRange(ctx, departures[0])}</span><span>{c.saida(departures.length)}</span></div>
                <div className={styles.stackCaption}>
                  <div><h2>{titulo}</h2><div className={styles.stackMeta}><span><CalendarDays aria-hidden />{c.dias(trek.days)}</span>{trek.distance && <span><Mountain aria-hidden />{trek.distance}</span>}<span><MapPin aria-hidden />{trek.location}</span></div><p>{c.aPartirDe} <strong>{price(ctx, trek.fromPrice)}</strong></p></div>
                  <span className={styles.stackArrow}><ChevronDown size={20} aria-hidden /></span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Difficulty({ group, label }: { group: DifficultyGroup; label: string }) {
  return <span className={styles.difficulty}><span aria-hidden>{TONE[group] ?? '🟡'}</span>{label}</span>;
}

function DepartureCard({ ctx, trek, departure }: { ctx: Ctx; trek: Trek; departure: CalendarDeparture }) {
  const { c, m } = ctx;
  const first = date(departure.start), last = date(departure.end);
  const fullDate = new Intl.DateTimeFormat(m.intl, { dateStyle: 'long' });
  const titulo = trek.title;
  const periodo = dateRange(ctx, departure);
  const bookingUrl = wa(m.partida.mensagem(trek.messageTitle, fullDate.format(first), fullDate.format(last)));
  return (
    <article className={styles.departure} aria-label={c.partida.rotulo(titulo, periodo, first.getFullYear())}>
      <header className={styles.departureHeader}>
        <span className={styles.calendarIcon}><CalendarDays size={21} aria-hidden /></span>
        <div className={styles.dateHeading}><p>{c.semana[first.getDay()]} → {c.semana[last.getDay()]} · {first.getFullYear()}</p><h3><time dateTime={departure.start}>{periodo}</time></h3></div>
        <div className={styles.dateChips}><span>{c.dias(trek.days)}</span>{departure.holiday && <span>{c.partida.feriado} · {c.feriados[departure.holiday.id]}</span>}</div>
      </header>
      <ol className={styles.timeline} aria-label={c.partida.linhaDoTempo}>
        {Array.from({ length: trek.days }, (_, index) => {
          const current = new Date(first.getFullYear(), first.getMonth(), first.getDate() + index);
          const isHoliday = !!departure.holiday && current.getTime() === date(departure.holiday.date).setHours(0, 0, 0, 0);
          const isLast = index === trek.days - 1;
          const Icon = index === 0 ? MapPin : isLast ? Flag : Mountain;
          return <li key={index} data-holiday={isHoliday}><span className={styles.dayIcon}><Icon size={16} aria-hidden /></span><strong>{c.partida.dia(index + 1)}</strong><span>{c.semana[current.getDay()]} {current.getDate()}</span><span className={styles.dayStatus}>{isHoliday ? c.partida.status.feriado : index === 0 ? c.partida.status.saida : isLast ? c.partida.status.retorno : ' '}</span></li>;
        })}
      </ol>
      <footer className={styles.departureFooter}>
        <div className={styles.departureDetails}><p className={styles.price}><span>{c.porPessoa}</span><strong>{price(ctx, departure.price)}</strong></p><span className={styles.origin}><MapPin size={16} aria-hidden />{c.saidaDe(trek.location)}</span></div>
        <Button href={bookingUrl} size="lg" arrow aria-label={c.partida.reservarRotulo(titulo, periodo)}>{c.partida.reservar}</Button>
      </footer>
    </article>
  );
}

export function CalendarGroupsExperience({
  locale = 'pt',
  departures,
}: {
  locale?: Locale;
  /**
   * Saídas a exibir — já filtradas pelo servidor (`upcomingDepartures`). O
   * filtro não roda aqui de propósito: num componente cliente, a data do
   * render no servidor e a da hidratação podem cair em dias diferentes.
   */
  departures: CalendarDeparture[];
}) {
  const c = CALENDAR_CONTENT[locale];
  const messageLocale = MESSAGE_LOCALE[locale];
  const ctx: Ctx = { c, m: CALENDAR_CONTENT[messageLocale], locale };
  const hub = aventurasDoIdioma(locale);
  const messageHub = aventurasDoIdioma(messageLocale);
  const doHub = (id: string, from = hub) => {
    const adventure = from.find((item) => item.id === id);
    // Falha no build, não em produção: um id errado aqui é erro de digitação.
    if (!adventure) throw new Error(`calendário: roteiro "${id}" não existe no hub`);
    return adventure;
  };
  // Roteiro sem saída futura sai da pilha e do calendário; na seção "não achou
  // sua data?" ele continua, com o botão de pedir nova data. Os grupos seguem
  // a ordem da próxima saída de cada um.
  const treks: Trek[] = CALENDAR_TREKS
    .map((trek): Trek => {
      // Preço da saída no idioma: guia em português em /pt, bilíngue nos demais.
      const own = departures
        .filter((departure) => departure.trekId === trek.id)
        .map((departure) => ({ ...departure, price: guidePrice(departure.price, locale) }));
      const base = { id: trek.id, days: trek.days, departures: own, fromPrice: Math.min(...own.map((d) => d.price)) };
      if (trek.custom) {
        const route = trek.custom.route && ADVENTURE_ROUTES.find((r) => r.id === trek.custom.route);
        if (trek.custom.route && !route) throw new Error(`calendário: rota "${trek.custom.route}" não existe`);
        return {
          ...base,
          image: trek.image ?? trek.custom.image,
          title: trek.custom.titulo[locale],
          messageTitle: trek.custom.titulo[messageLocale],
          difficultyGroup: trek.custom.difficultyGroup,
          difficulty: trek.custom.difficulty[locale],
          distance: trek.custom.distance,
          location: trek.custom.location,
          href: route ? `/${locale}/${ADVENTURE_SEGMENT[locale]}/${route[locale]}` : undefined,
        };
      }
      const adventure = doHub(trek.adventureId);
      return {
        ...base,
        adventureId: trek.adventureId,
        image: trek.image ?? adventure.image,
        title: adventure.title,
        messageTitle: doHub(trek.adventureId, messageHub).title,
        difficultyGroup: adventure.difficultyGroup,
        difficulty: adventure.difficulty,
        distance: adventure.distance,
        location: adventure.location,
        href: adventure.href,
      };
    })
    .filter((trek) => trek.departures.length > 0)
    .sort((a, b) => a.departures[0].start.localeCompare(b.departures[0].start));

  return (
    <article className={styles.page}>
      {treks.length > 0 && <JsonLd data={departuresJsonLd(ctx, treks)} />}
      <section className={styles.hero} aria-labelledby="calendar-title" data-scroll-reveal="off">
        <div className={styles.heroArt} aria-hidden />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 id="calendar-title">{c.hero.titulo.antes}<br /><span><Image src={`${ASSETS}/mamut_logo_pren_morro-1.webp`} alt="" width={150} height={100} priority />{c.hero.titulo.meio}</span><br />{c.hero.titulo.depois}</h1>
            <p>{c.hero.texto}</p>
            <div className={styles.heroActions}><Button href={askDate(ctx)} size="lg" arrow>{c.hero.cta}</Button><a href="#calendario">{c.hero.explorar}<span><ChevronDown size={16} aria-hidden /></span></a></div>
          </div>
          {treks.length > 0 && <PhotoStack ctx={ctx} treks={treks} />}
        </div>
      </section>
      <section id="calendario" className={styles.calendar} aria-label={c.calendarioRotulo} data-scroll-reveal="off">
        <div className={styles.calendarArt} aria-hidden />
        <div className={styles.container}><div className={styles.groups}>
          {treks.map((trek) => <section id={`saidas-${trek.id}`} className={styles.trekGroup} key={trek.id} aria-labelledby={`heading-${trek.id}`}>
            <header className={styles.groupHeading}><div><Difficulty group={trek.difficultyGroup} label={trek.difficulty} /><h2 id={`heading-${trek.id}`}>{trek.title}</h2><p>{c.grupo.resumo(c.dias(trek.days), trek.distance, trek.location, price(ctx, trek.fromPrice))}</p></div>{trek.href
              ? <Button href={trek.href} variant="outline" size="lg" arrow aria-label={c.grupo.verRoteiroRotulo(trek.title)}>{c.grupo.verRoteiro}</Button>
              : <Button href={wa(ctx.m.grupo.mensagem(trek.messageTitle))} variant="outline" size="lg" arrow>{c.grupo.falar}</Button>}</header>
            <div className={styles.groupBody}><div className={styles.trekPhoto}><div className={styles.trekPhotoMedia}><Image src={trek.image} alt={c.grupo.fotoAlt(trek.title)} fill sizes="(max-width: 640px) 100vw, 380px" className={styles.cover} /></div></div><div className={styles.departures}>{trek.departures.map((departure) => <DepartureCard key={departure.id} ctx={ctx} trek={trek} departure={departure} />)}</div></div>
          </section>)}
          <aside className={styles.summer}><span className={styles.calendarIcon}><CalendarDays size={21} aria-hidden /></span><div><h2>{c.verao.titulo}</h2><a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">{c.verao.abrirCalendario}</a></div><Button href={wa(ctx.m.verao.mensagem)} variant="outline" size="lg" arrow>{c.verao.cta}</Button></aside>
        </div></div>
      </section>
      <section className={`${styles.container} ${styles.related}`} aria-labelledby="more-treks-title" data-scroll-reveal="off">
        <header><h2 id="more-treks-title">{c.relacionados.titulo}</h2><Link href={`/${locale}/${ADVENTURE_SEGMENT[locale]}`}>{c.relacionados.verTodas} <ArrowRight size={16} aria-hidden /></Link></header>
        <div className={styles.relatedGrid}>{RELATED_ROUTES.map((route) => {
          const adventure = doHub(route.adventureId);
          const scheduled = treks.find((trek) => trek.adventureId === route.adventureId);
          const image = scheduled?.image ?? route.image ?? adventure.image;
          return <article key={route.adventureId} className={styles.relatedCard}><div className={styles.relatedPhoto}><Image src={image} alt={c.relacionados.fotoAlt(adventure.title)} fill sizes="(max-width: 420px) 110px, 140px" className={styles.cover} /></div><div className={styles.relatedCopy}><Difficulty group={adventure.difficultyGroup} label={adventure.difficulty} /><h3>{adventure.title}</h3><Button href={scheduled ? `#saidas-${scheduled.id}` : askDate(ctx, doHub(route.adventureId, messageHub).title)} size="lg">{scheduled ? c.relacionados.verSaidas : c.relacionados.pedirData}</Button></div></article>;
        })}</div>
      </section>
      <section className={`${styles.container} ${styles.contact}`} aria-labelledby="contact-calendar-title" data-scroll-reveal="off"><div className={styles.contactPanel}>
        <Image src="/img/figma/destinations/vale-do-pati-3/cta-morro-do-castelo.png" alt="" fill sizes="(max-width: 1216px) 100vw, 1168px" className={styles.cover} />
        <div className={styles.contactContent}><div><h2 id="contact-calendar-title">{c.contato.titulo}</h2><p>{c.contato.texto}</p></div><Button href={askDate(ctx)} size="lg" arrow>{c.contato.cta}</Button></div>
      </div></section>
    </article>
  );
}
