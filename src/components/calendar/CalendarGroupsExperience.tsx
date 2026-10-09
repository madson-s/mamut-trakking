'use client';

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ChevronDown, Flag, MapPin, Mountain } from 'lucide-react';
import { Button } from '@/components/ui';
import { SITE } from '@/lib/site';
import { CALENDAR_DEPARTURES, CALENDAR_TREKS, RELATED_ROUTES, type CalendarDeparture, type CalendarTrek } from './calendar-data';
import styles from './calendar.module.css';

// THESIS: Reproduce the supplied ZIP and screenshots, not the previous interpretation.
// OWN-WORLD: Mergo, dark stone, pale green, documentary photos and glass stack captions.
// STORY: Explore three treks, compare dates and day markers, reserve or request a date.
// FIRST VIEWPORT: Pale stacked headline and mammoth cutout beside overlapping photos.
// FORM: User-pinned Mamut Trekking Aventuras.zip, 01–12-tela.png; no speculative sections.
// FINISH: Review desktop and mobile against the reference, then record the surface.

const ASSETS = '/img/calendar';
const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?wkst=1&ctz=America%2FSao_Paulo&src=bWFyY2Vsby5jYWJyYWxsLm1jQGdtYWlsLmNvbQ';
const weekdays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const date = (iso: string) => new Date(`${iso}T12:00:00`);
const price = (value: number) => `R$${value.toLocaleString('pt-BR')}`;
const title = (trek: CalendarTrek) => `Vale do Pati ${trek.days} Dias`;
const wa = (message: string) => `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
const askDate = (name?: string) => wa(name ? `Olá! Quero abrir uma nova data para o roteiro ${name}.` : 'Olá! Quero abrir uma nova data de saída.');

function dateRange(departure: CalendarDeparture) {
  const start = date(departure.start), end = date(departure.end);
  return `${start.getDate()}${start.getMonth() !== end.getMonth() ? ` ${months[start.getMonth()]}` : ''} – ${end.getDate()} ${months[end.getMonth()]}`;
}

function PhotoStack() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className={styles.stack} onMouseLeave={() => setHovered(null)}>
      <ul aria-label="Explore as próximas travessias">
        {CALENDAR_TREKS.map((trek, index) => {
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
          return (
            <li key={trek.id} className={styles.stackCard} style={cardStyle} data-active={index === 0 || pulled}>
              <a href={`#saidas-${trek.id}`} aria-label={`Ver as próximas saídas de ${title(trek)}`}
                onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}
                onFocus={(event) => { if (event.currentTarget.matches(':focus-visible')) setHovered(index); }} onBlur={() => setHovered(null)}>
                <Image src={trek.image} alt="" fill sizes="(max-width: 420px) 90vw, 380px" priority className={styles.cover} />
                <div className={styles.stackPills}><span><CalendarDays size={15} aria-hidden />{dateRange(departures[0])}</span><span>{departures.length} {departures.length === 1 ? 'saída' : 'saídas'}</span></div>
                <div className={styles.stackCaption}>
                  <div><h2>{title(trek)}</h2><div className={styles.stackMeta}><span><CalendarDays aria-hidden />{trek.days} dias</span><span><Mountain aria-hidden />{trek.distance}</span><span><MapPin aria-hidden />{trek.origin}</span></div><p>A partir de <strong>{price(trek.price)}</strong></p></div>
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

function Difficulty({ label }: { label: string }) {
  return <span className={styles.difficulty}><span aria-hidden>{label === 'Fácil' ? '🟢' : label === 'Avançado' ? '🔴' : '🟡'}</span>{label}</span>;
}

function DepartureCard({ trek, departure }: { trek: CalendarTrek; departure: CalendarDeparture }) {
  const first = date(departure.start), last = date(departure.end);
  const fullDate = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' });
  const bookingUrl = wa(`Olá! Quero reservar uma vaga no ${trek.name}, de ${fullDate.format(first)} a ${fullDate.format(last)}.`);
  return (
    <article className={styles.departure} aria-label={`${title(trek)}, ${dateRange(departure)} de ${first.getFullYear()}`}>
      <header className={styles.departureHeader}>
        <span className={styles.calendarIcon}><CalendarDays size={21} aria-hidden /></span>
        <div className={styles.dateHeading}><p>{weekdays[first.getDay()]} → {weekdays[last.getDay()]} · {first.getFullYear()}</p><h3><time dateTime={departure.start}>{dateRange(departure)}</time></h3></div>
        <div className={styles.dateChips}><span>{trek.days} dias</span>{departure.holidayDate && <span>Feriado · {departure.occasion}</span>}</div>
      </header>
      <ol className={styles.timeline} aria-label="Dias da travessia">
        {Array.from({ length: trek.days }, (_, index) => {
          const current = new Date(first.getFullYear(), first.getMonth(), first.getDate() + index);
          const isHoliday = !!departure.holidayDate && current.getTime() === date(departure.holidayDate).setHours(0, 0, 0, 0);
          const isLast = index === trek.days - 1;
          const Icon = index === 0 ? MapPin : isLast ? Flag : Mountain;
          return <li key={index} data-holiday={isHoliday}><span className={styles.dayIcon}><Icon size={16} aria-hidden /></span><strong>Dia {index + 1}</strong><span>{weekdays[current.getDay()]} {current.getDate()}</span><span className={styles.dayStatus}>{isHoliday ? 'Feriado' : index === 0 ? 'Saída' : isLast ? 'Retorno' : '\u00a0'}</span></li>;
        })}
      </ol>
      <footer className={styles.departureFooter}>
        <div className={styles.departureDetails}><p className={styles.price}><span>A partir de</span><strong>{price(trek.price)}</strong></p><span className={styles.origin}><MapPin size={16} aria-hidden />Saída de {trek.origin}</span></div>
        <Button href={bookingUrl} size="lg" arrow aria-label={`Reservar ${title(trek)}, ${dateRange(departure)}`}>Reservar vaga</Button>
      </footer>
    </article>
  );
}

export function CalendarGroupsExperience() {
  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="calendar-title" data-scroll-reveal="off">
        <div className={styles.heroArt} aria-hidden />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 id="calendar-title">Próximos<br /><span><Image src={`${ASSETS}/mamut_logo_pren_morro-1.webp`} alt="" width={150} height={100} priority />trekkings</span><br />da Mamut</h1>
            <p>Caso não encontre sua data, entre em contato conosco que abriremos uma nova data para você.</p>
            <div className={styles.heroActions}><Button href={askDate()} size="lg" arrow>Falar com o guia</Button><a href="#calendario">Explore todas as saídas<span><ChevronDown size={16} aria-hidden /></span></a></div>
          </div>
          <PhotoStack />
        </div>
      </section>
      <section id="calendario" className={styles.calendar} aria-label="Calendário de saídas" data-scroll-reveal="off">
        <div className={styles.calendarArt} aria-hidden />
        <div className={styles.container}><div className={styles.groups}>
          {CALENDAR_TREKS.map((trek) => <section id={`saidas-${trek.id}`} className={styles.trekGroup} key={trek.id} aria-labelledby={`heading-${trek.id}`}>
            <header className={styles.groupHeading}><div><Difficulty label={trek.difficulty} /><h2 id={`heading-${trek.id}`}>{title(trek)}</h2><p>{trek.days} dias · {trek.distance} · Saída de {trek.origin} · A partir de {price(trek.price)}</p></div><Button href={trek.href} variant="outline" size="lg" arrow aria-label={`Ver roteiro completo: ${trek.name}`}>Ver roteiro completo</Button></header>
            <div className={styles.groupBody}><div className={styles.trekPhoto}><div className={styles.trekPhotoMedia}><Image src={trek.image} alt={`Paisagem da travessia ${trek.name}`} fill sizes="(max-width: 640px) 100vw, 380px" className={styles.cover} /></div></div><div className={styles.departures}>{CALENDAR_DEPARTURES.filter((departure) => departure.trekId === trek.id).map((departure) => <DepartureCard key={departure.id} trek={trek} departure={departure} />)}</div></div>
          </section>)}
          <aside className={styles.summer}><span className={styles.calendarIcon}><CalendarDays size={21} aria-hidden /></span><div><h2>Grupos para o verão já disponíveis no nosso atendimento.</h2><a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">Abrir calendário completo</a></div><Button href={wa('Olá! Quero saber dos grupos de verão.')} variant="outline" size="lg" arrow>Consultar datas de verão</Button></aside>
        </div></div>
      </section>
      <section className={`${styles.container} ${styles.related}`} aria-labelledby="more-treks-title" data-scroll-reveal="off">
        <header><h2 id="more-treks-title">Não achou sua data? A gente abre uma.</h2><Link href="/pt/aventuras">Ver todas as aventuras <ArrowRight size={16} aria-hidden /></Link></header>
        <div className={styles.relatedGrid}>{RELATED_ROUTES.map((route) => {
          const scheduled = CALENDAR_TREKS.find((trek) => trek.id === route.id);
          const image = scheduled?.image ?? (route.id === 'palmital' ? `${ASSETS}/cachoeira-palmital.png` : route.id === 'pati4' ? `${ASSETS}/vale-do-pati-4-dias.png` : route.image);
          return <article key={route.id} className={styles.relatedCard}><div className={styles.relatedPhoto}><Image src={image} alt={`Paisagem de ${route.name}`} fill sizes="(max-width: 420px) 110px, 140px" className={styles.cover} /></div><div className={styles.relatedCopy}><Difficulty label={route.difficulty} /><h3>{route.name}</h3><Button href={scheduled ? `#saidas-${scheduled.id}` : askDate(route.name)} size="lg">{scheduled ? 'Ver próximas saídas' : 'Pedir nova data'}</Button></div></article>;
        })}</div>
      </section>
      <section className={`${styles.container} ${styles.contact}`} aria-labelledby="contact-calendar-title" data-scroll-reveal="off"><div className={styles.contactPanel}>
        <Image src="/img/figma/destinations/vale-do-pati-3/cta-morro-do-castelo.png" alt="" fill sizes="(max-width: 1216px) 100vw, 1168px" className={styles.cover} />
        <div className={styles.contactContent}><div><h2 id="contact-calendar-title">Sua data não está aqui?</h2><p>Conte quando você chega na Chapada e o roteiro que quer fazer. Abrimos uma nova saída para você.</p></div><Button href={askDate()} size="lg" arrow>Falar com guia</Button></div>
      </div></section>
    </article>
  );
}
