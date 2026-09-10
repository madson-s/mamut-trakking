'use client';

import Image from 'next/image';
import { CalendarDays, Car, Check, CreditCard, Footprints, MapPin, UsersRound } from 'lucide-react';
import { motion, type MotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Badge, Button, Heading, SegmentedControl, Text } from '@/components/ui';
import { PATI3_CONTENT } from './pati-3-content';
import { PatiMobileBooking } from './PatiMobileBooking';
import { REVEILLON_BOOKING_OPEN_EVENT } from './reveillonBooking';
import { REVEILLON_PACKAGES, type ReveillonPackageKey } from './reveillon-content';
import styles from './ReveillonPackageExplorer.module.css';

const options = REVEILLON_PACKAGES.map((item) => ({
  value: item.key,
  label: item.days,
}));

export function ReveillonPackageExplorer() {
  const [selected, setSelected] = useState<ReveillonPackageKey>('5-dias');
  const activePackage = REVEILLON_PACKAGES.find((item) => item.key === selected) ?? REVEILLON_PACKAGES[1];
  const timelineRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 72%', 'end 38%'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.2,
  });

  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <div className="flex flex-col items-start justify-between gap-5 border-b border-line pb-7 sm:flex-row sm:items-end">
        <div className="max-w-166">
          <Badge variant="brand" size="sm">Escolha o seu ritmo</Badge>
          <Heading as="h2" size="section" balance className="mt-4">
            Três caminhos para a mesma virada.
          </Heading>
        </div>
        <SegmentedControl
          label="Duração do pacote"
          options={options}
          value={selected}
          onChange={setSelected}
          size="md"
          variant="chips"
          className="max-sm:w-full max-sm:[&>button]:flex-1"
        />
      </div>

      <div aria-live="polite" className={styles.showcase}>
        <div className={styles.composition}>
          <div className={styles.strokeLayer} aria-hidden="true">
            <span className={styles.strokeStrip} />
            <span className={styles.strokeDetails} />
            <span className={styles.strokePrice} />
          </div>
          <div className={styles.destinationStrip}>
            <MapPin aria-hidden className="size-5 shrink-0" />
            <p className="text-sm font-medium sm:text-base">{activePackage.places}</p>
          </div>
          <div className={styles.seal} aria-hidden="true">
            <Image src="/svg/about/story-walkers.svg" alt="" width={290} height={114} unoptimized className="h-auto w-full" />
          </div>
          <div className={styles.details}>
            <div>
              <p className="text-sm font-light text-brand-contrast/80">Réveillon na Chapada</p>
              <Heading as="h3" size="section" tone="inherit" balance className="mt-2 text-brand-contrast">
                {activePackage.days} de aventura.
              </Heading>
              <Text weight="light" tone="inherit" pretty className="mt-4 max-w-120 text-brand-contrast/90">
                {activePackage.pitch}
              </Text>
            </div>
            <ul className="my-6 grid gap-2.5">
              {activePackage.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3 text-sm font-light text-brand-contrast">
                  <Check aria-hidden className="size-4 shrink-0 text-accent-line-art" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3 border-t border-brand-contrast/25 pt-5 text-sm text-brand-contrast">
              <p className="flex items-start gap-3"><CalendarDays aria-hidden className="size-4 shrink-0" />{activePackage.dates}</p>
              <p className="flex items-center gap-3"><UsersRound aria-hidden className="size-4 shrink-0" />Mínimo de 2 participantes</p>
            </div>
          </div>
          <aside className={styles.price}>
            <p className="self-start rounded-full border border-current/30 px-3 py-1 text-xs">Chapada Diamantina · Bahia</p>
            <div className="my-8">
              <p className="text-lg">A partir de</p>
              <p className={styles.amount}><span>R$</span>{activePackage.price.toLocaleString('pt-BR')}</p>
              <p className="mt-2 text-sm">por pessoa</p>
            </div>
            <div className={styles.payment}>
              <CreditCard aria-hidden className="size-7 shrink-0" />
              <p className="text-sm">Reserve com <strong>50% de sinal.</strong><br />Cartão em até 12x, com acréscimo.</p>
            </div>
            <Button
              size="lg"
              block
              arrow
              className={styles.book}
              onClick={() => window.dispatchEvent(new CustomEvent(REVEILLON_BOOKING_OPEN_EVENT))}
            >
              Quero este pacote
            </Button>
            <p className="mt-3 text-xs leading-relaxed">Quer adaptar o roteiro? Converse com a equipe.</p>
          </aside>
        </div>
      </div>

      <PatiMobileBooking
        content={PATI3_CONTENT.pt.booking}
        fromPrice={activePackage.price}
        initialDate="2026-12-29"
        messageIntro={`Olá! Quero verificar o pacote de ${activePackage.days} do Réveillon 2027 na Chapada para`}
        openEvent={REVEILLON_BOOKING_OPEN_EVENT}
        sheetId="reveillon-booking-sheet"
        showDock={false}
      />

      <div className={`${styles.itinerary} grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Text size="sm" weight="semibold" tone="muted" className="tracking-[.08em] uppercase">Roteiro dia a dia</Text>
          <Heading as="h3" size="card" balance className="mt-4">{activePackage.days} em movimento</Heading>
          <Text size="base" weight="light" tone="secondary" leading="relaxed" pretty className="mt-4">
            Distâncias aproximadas. A ordem pode mudar para aproveitar melhor o clima e manter o grupo seguro.
          </Text>
        </div>

        <ol ref={timelineRef} className="relative pl-7 sm:pl-10">
          <span aria-hidden className="absolute inset-y-0 left-0 w-px bg-line-strong" />
          <motion.span
            aria-hidden
            className="absolute inset-y-0 left-0 w-px origin-top bg-brand"
            style={{ scaleY: reduceMotion ? 1 : smoothProgress }}
          />
          {activePackage.itinerary.map((day, index) => (
            <li key={`${activePackage.key}-${day.date}`} className="relative border-b border-line py-7 first:pt-0 last:border-b-0 last:pb-0">
              <TimelineMarker
                index={index}
                total={activePackage.itinerary.length}
                progress={smoothProgress}
                reduceMotion={Boolean(reduceMotion)}
              />
              <div className="grid gap-4 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-6">
                <time className="inline-flex min-h-10 w-fit self-start items-center justify-center rounded-pill border border-brand/30 bg-brand-soft px-3 font-display text-2xl leading-none text-brand-ink tabular-nums">
                  {day.date}
                </time>
                <div>
                  <Heading as="h4" size="quote">{day.title}</Heading>
                  <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty className="mt-2 max-w-170">
                    {day.description}
                  </Text>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="soft" size="sm" icon={<Footprints aria-hidden className="size-3.5" />}>
                      {day.walking}
                    </Badge>
                    {day.driving ? (
                      <Badge variant="soft" size="sm" icon={<Car aria-hidden className="size-3.5" />}>
                        {day.driving}
                      </Badge>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function TimelineMarker({
  index,
  total,
  progress,
  reduceMotion,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const threshold = total > 1 ? index / (total - 1) : 0;
  const start = Math.max(0, threshold - 0.12);
  const markerScale = useTransform(progress, [start, Math.max(start + 0.01, threshold)], [0.25, 1]);
  const markerOpacity = useTransform(progress, [start, Math.max(start + 0.01, threshold)], [0, 1]);

  return (
    <span
      aria-hidden
      className={`absolute -left-[calc(1.75rem+5px)] flex size-2.5 items-center justify-center rounded-full bg-line-strong ring-4 ring-surface sm:-left-[calc(2.5rem+5px)] ${index === 0 ? 'top-1' : 'top-8'}`}
    >
      <motion.span
        className="size-2.5 rounded-full bg-brand"
        style={{
          opacity: reduceMotion ? 1 : markerOpacity,
          scale: reduceMotion ? 1 : markerScale,
        }}
      />
    </span>
  );
}
