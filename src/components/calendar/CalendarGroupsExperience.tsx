'use client';

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ChevronDown, Flag, MapPin, Mountain } from 'lucide-react';
import { Button } from '@/components/ui';
import { aventurasDoIdioma, type Adventure } from '@/components/adventures/AdventureCard';
import { ADVENTURE_SEGMENT, SITE, formatPrice, type Locale } from '@/lib/site';
import { CALENDAR_DEPARTURES, CALENDAR_TREKS, RELATED_ROUTES, type CalendarDeparture, type CalendarTrek } from './calendar-data';
import { CALENDAR_CONTENT, type CalendarContent } from './calendar-content';
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

/** Roteiro do calendário já com os dados do hub no idioma da página. */
type Trek = CalendarTrek & { adventure: Adventure };

/** Contexto que cada bloco precisa: textos e formatação do idioma. */
type Ctx = { c: CalendarContent; locale: Locale };

const price = ({ locale }: Ctx, value: number) => formatPrice(value, locale);
const askDate = ({ c }: Ctx, name?: string) => wa(name ? c.novaData.roteiro(name) : c.novaData.geral);

// A cor do selo segue o grupo de dificuldade do hub, não o texto do rótulo —
// comparar com "Fácil" quebraria no inglês e no espanhol.
const TONE = { 'Fácil': '🟢', 'Moderado': '🟡', 'Desafiador': '🔴' } as const;

function dateRange({ c }: Ctx, departure: CalendarDeparture) {
  const start = date(departure.start), end = date(departure.end);
  return `${start.getDate()}${start.getMonth() !== end.getMonth() ? ` ${c.meses[start.getMonth()]}` : ''} – ${end.getDate()} ${c.meses[end.getMonth()]}`;
}

function PhotoStack({ ctx, treks }: { ctx: Ctx; treks: Trek[] }) {
  const { c } = ctx;
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className={styles.stack} onMouseLeave={() => setHovered(null)}>
      <ul aria-label={c.hero.pilhaRotulo}>
        {treks.map((trek, index) => {
          const departures = CALENDAR_DEPARTURES.filter((item) => item.trekId === trek.id);
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
          const titulo = c.tituloCurto(trek.days);
          return (
            <li key={trek.id} className={styles.stackCard} style={cardStyle} data-active={index === 0 || pulled}>
              <a href={`#saidas-${trek.id}`} aria-label={c.hero.verSaidasDe(titulo)}
                onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}
                onFocus={(event) => { if (event.currentTarget.matches(':focus-visible')) setHovered(index); }} onBlur={() => setHovered(null)}>
                <Image src={trek.image} alt="" fill sizes="(max-width: 420px) 90vw, 380px" priority className={styles.cover} />
                <div className={styles.stackPills}><span><CalendarDays size={15} aria-hidden />{dateRange(ctx, departures[0])}</span><span>{c.saida(departures.length)}</span></div>
                <div className={styles.stackCaption}>
                  <div><h2>{titulo}</h2><div className={styles.stackMeta}><span><CalendarDays aria-hidden />{c.dias(trek.days)}</span><span><Mountain aria-hidden />{trek.adventure.distance}</span><span><MapPin aria-hidden />{trek.adventure.location}</span></div><p>{c.aPartirDe} <strong>{price(ctx, trek.adventure.price)}</strong></p></div>
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

function Difficulty({ adventure }: { adventure: Adventure }) {
  return <span className={styles.difficulty}><span aria-hidden>{TONE[adventure.difficultyGroup] ?? '🟡'}</span>{adventure.difficulty}</span>;
}

function DepartureCard({ ctx, trek, departure }: { ctx: Ctx; trek: Trek; departure: CalendarDeparture }) {
  const { c } = ctx;
  const first = date(departure.start), last = date(departure.end);
  const fullDate = new Intl.DateTimeFormat(c.intl, { dateStyle: 'long' });
  const titulo = c.tituloCurto(trek.days);
  const periodo = dateRange(ctx, departure);
  const bookingUrl = wa(c.partida.mensagem(trek.adventure.title, fullDate.format(first), fullDate.format(last)));
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
        <div className={styles.departureDetails}><p className={styles.price}><span>{c.aPartirDe}</span><strong>{price(ctx, trek.adventure.price)}</strong></p><span className={styles.origin}><MapPin size={16} aria-hidden />{c.saidaDe(trek.adventure.location)}</span></div>
        <Button href={bookingUrl} size="lg" arrow aria-label={c.partida.reservarRotulo(titulo, periodo)}>{c.partida.reservar}</Button>
      </footer>
    </article>
  );
}

export function CalendarGroupsExperience({ locale = 'pt' }: { locale?: Locale }) {
  const c = CALENDAR_CONTENT[locale];
  const ctx: Ctx = { c, locale };
  const hub = aventurasDoIdioma(locale);
  const doHub = (id: string) => {
    const adventure = hub.find((item) => item.id === id);
    // Falha no build, não em produção: um id errado aqui é erro de digitação.
    if (!adventure) throw new Error(`calendário: roteiro "${id}" não existe no hub`);
    return adventure;
  };
  const treks: Trek[] = CALENDAR_TREKS.map((trek) => ({ ...trek, adventure: doHub(trek.adventureId) }));

  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="calendar-title" data-scroll-reveal="off">
        <div className={styles.heroArt} aria-hidden />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 id="calendar-title">{c.hero.titulo.antes}<br /><span><Image src={`${ASSETS}/mamut_logo_pren_morro-1.webp`} alt="" width={150} height={100} priority />{c.hero.titulo.meio}</span><br />{c.hero.titulo.depois}</h1>
            <p>{c.hero.texto}</p>
            <div className={styles.heroActions}><Button href={askDate(ctx)} size="lg" arrow>{c.hero.cta}</Button><a href="#calendario">{c.hero.explorar}<span><ChevronDown size={16} aria-hidden /></span></a></div>
          </div>
          <PhotoStack ctx={ctx} treks={treks} />
        </div>
      </section>
      <section id="calendario" className={styles.calendar} aria-label={c.calendarioRotulo} data-scroll-reveal="off">
        <div className={styles.calendarArt} aria-hidden />
        <div className={styles.container}><div className={styles.groups}>
          {treks.map((trek) => <section id={`saidas-${trek.id}`} className={styles.trekGroup} key={trek.id} aria-labelledby={`heading-${trek.id}`}>
            <header className={styles.groupHeading}><div><Difficulty adventure={trek.adventure} /><h2 id={`heading-${trek.id}`}>{c.tituloCurto(trek.days)}</h2><p>{c.grupo.resumo(trek.days, trek.adventure.distance, trek.adventure.location, price(ctx, trek.adventure.price))}</p></div><Button href={trek.adventure.href} variant="outline" size="lg" arrow aria-label={c.grupo.verRoteiroRotulo(trek.adventure.title)}>{c.grupo.verRoteiro}</Button></header>
            <div className={styles.groupBody}><div className={styles.trekPhoto}><div className={styles.trekPhotoMedia}><Image src={trek.image} alt={c.grupo.fotoAlt(trek.adventure.title)} fill sizes="(max-width: 640px) 100vw, 380px" className={styles.cover} /></div></div><div className={styles.departures}>{CALENDAR_DEPARTURES.filter((departure) => departure.trekId === trek.id).map((departure) => <DepartureCard key={departure.id} ctx={ctx} trek={trek} departure={departure} />)}</div></div>
          </section>)}
          <aside className={styles.summer}><span className={styles.calendarIcon}><CalendarDays size={21} aria-hidden /></span><div><h2>{c.verao.titulo}</h2><a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">{c.verao.abrirCalendario}</a></div><Button href={wa(c.verao.mensagem)} variant="outline" size="lg" arrow>{c.verao.cta}</Button></aside>
        </div></div>
      </section>
      <section className={`${styles.container} ${styles.related}`} aria-labelledby="more-treks-title" data-scroll-reveal="off">
        <header><h2 id="more-treks-title">{c.relacionados.titulo}</h2><Link href={`/${locale}/${ADVENTURE_SEGMENT[locale]}`}>{c.relacionados.verTodas} <ArrowRight size={16} aria-hidden /></Link></header>
        <div className={styles.relatedGrid}>{RELATED_ROUTES.map((route) => {
          const adventure = doHub(route.adventureId);
          const scheduled = treks.find((trek) => trek.adventureId === route.adventureId);
          const image = scheduled?.image ?? route.image ?? adventure.image;
          return <article key={route.adventureId} className={styles.relatedCard}><div className={styles.relatedPhoto}><Image src={image} alt={c.relacionados.fotoAlt(adventure.title)} fill sizes="(max-width: 420px) 110px, 140px" className={styles.cover} /></div><div className={styles.relatedCopy}><Difficulty adventure={adventure} /><h3>{adventure.title}</h3><Button href={scheduled ? `#saidas-${scheduled.id}` : askDate(ctx, adventure.title)} size="lg">{scheduled ? c.relacionados.verSaidas : c.relacionados.pedirData}</Button></div></article>;
        })}</div>
      </section>
      <section className={`${styles.container} ${styles.contact}`} aria-labelledby="contact-calendar-title" data-scroll-reveal="off"><div className={styles.contactPanel}>
        <Image src="/img/figma/destinations/vale-do-pati-3/cta-morro-do-castelo.png" alt="" fill sizes="(max-width: 1216px) 100vw, 1168px" className={styles.cover} />
        <div className={styles.contactContent}><div><h2 id="contact-calendar-title">{c.contato.titulo}</h2><p>{c.contato.texto}</p></div><Button href={askDate(ctx)} size="lg" arrow>{c.contato.cta}</Button></div>
      </div></section>
    </article>
  );
}
