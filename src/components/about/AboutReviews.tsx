'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import Image from 'next/image';
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Section,
  StarIcon,
  StarRating,
  Text,
  Stat,
} from '@/components/ui';
import { SITE } from '@/lib/site';

const QUOTE =
  '“Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais.”';

const CLOSED_OFFSETS = [0, 18, 36, 54];
const OPEN_OFFSETS = [0, 296, 592, 888];
const STAGE_START = 0.2;
const STAGE_LENGTH = 0.4;

export function AboutReviews() {
  return (
    <Section
      surface="muted"
      bordered
      container={false}
      padding="tall"
      className="relative overflow-hidden"
      labelledBy="about-reviews-title"
    >
      <Image
        src="/svg/about/reviews-walkers-line.svg"
        alt=""
        width={1150}
        height={570}
        unoptimized
        className="pointer-events-none absolute bottom-0 left-[18%] hidden w-[60%] max-w-none opacity-35 lg:block"
      />

      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,620px)_490px] lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-8 max-lg:contents lg:gap-12 lg:pt-4">
          <div className="flex flex-col gap-5 max-lg:order-1 lg:gap-6">
            <Badge
              size="lg"
              className="self-start max-lg:min-h-8 max-lg:px-3 max-lg:py-1 max-lg:text-sm"
            >
              Avaliações verificadas · TripAdvisor
            </Badge>
            <Heading
              as="h2"
              id="about-reviews-title"
              size="hero"
              balance
              className="max-lg:text-[clamp(28px,8.4vw,36px)]"
            >
              <span className="lg:hidden">
                O que nosso bando
                <br />
                diz das aventuras.
              </span>
              <span className="max-lg:hidden">
                Cada review é uma
                <br />
                trilha que já fizemos
                <br />
                <span className="text-brand-strong">juntos.</span>
              </span>
            </Heading>

            <div className="flex flex-wrap items-center gap-2 lg:hidden">
              <Badge variant="soft" size="sm">
                140+ avaliações
              </Badge>
              <Badge
                variant="soft"
                size="sm"
                icon={<StarIcon className="size-3.5 text-warning-500" />}
              >
                5.0 geral
              </Badge>
              <Badge variant="soft" size="sm">
                #4 em Lençóis
              </Badge>
            </div>
          </div>

          <div className="hidden flex-wrap items-stretch gap-4 lg:flex">
            <Stat variant="chip" value="140 +" label="Avaliações" />
            <Stat
              variant="chip"
              value={
                <span className="flex items-center gap-1">
                  <StarIcon className="size-4.25 text-warning-500" />
                  5.0
                </span>
              }
              label="Média de nota geral"
            />
            <Stat variant="chip" value="#4 no Raking" label="de atividades ao ar livre em Lençóis" />
          </div>

          <div className="flex flex-wrap gap-3 max-lg:order-3 max-lg:flex-col max-lg:items-stretch">
            <Button href="/pt/aventuras" arrow className="w-full lg:hidden">
              Escolha a sua trilha
            </Button>
            <Button href={SITE.whatsappUrl} arrow className="max-lg:hidden">
              Reservar pelo WhatsApp
            </Button>
            <Button
              href="https://www.tripadvisor.com.br/"
              variant="outline"
              className="max-lg:w-full"
            >
              <span className="lg:hidden">Conheça nosso TripAdvisor</span>
              <span className="max-lg:hidden">Conheça o nosso TripAdvisor</span>
            </Button>
          </div>
        </div>

        <ReviewStack />
      </Container>
    </Section>
  );
}

function ReviewStack() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frameId = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const render = () => {
      frameId = 0;
      const root = rootRef.current;
      if (!root) return;

      const isDesktop = window.innerWidth >= 1024;
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.85;
      const end = viewportHeight * 0.1;
      const top = root.getBoundingClientRect().top;
      const progress = reducedMotion.matches
        ? 1
        : Math.min(Math.max((start - top) / (start - end), 0), 1);

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        if (!isDesktop) {
          card.style.removeProperty('transform');
          return;
        }

        const stage = Math.min(
          Math.max((progress - index * STAGE_START) / STAGE_LENGTH, 0),
          1,
        );
        const eased = 1 - (1 - stage) ** 3;
        const offset =
          CLOSED_OFFSETS[index] + (OPEN_OFFSETS[index] - CLOSED_OFFSETS[index]) * eased;
        card.style.transform = `translateY(${offset}px)`;
      });
    };

    const schedule = () => {
      if (!frameId) frameId = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reducedMotion.addEventListener('change', schedule);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotion.removeEventListener('change', schedule);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative flex flex-col gap-4 max-lg:order-2 lg:block lg:h-290"
      aria-label="Avaliações de viajantes"
    >
      {Array.from({ length: 4 }, (_, index) => (
        <ReviewCard
          key={index}
          index={index}
          cardRef={(element) => {
            cardRefs.current[index] = element;
          }}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  index,
  cardRef,
}: {
  index: number;
  cardRef: (element: HTMLDivElement | null) => void;
}) {
  const style = { zIndex: 30 - index * 10 } as CSSProperties;

  return (
    <div
      ref={cardRef}
      style={style}
      className="relative mb-4 last:mb-0 lg:absolute lg:inset-x-0 lg:top-0 lg:mb-0 lg:will-change-transform"
    >
      <Card
        as="article"
        surface="muted"
        radius="panelLg"
        elevation="card"
        padding="none"
        className="min-h-68 gap-4 px-6 py-5 max-lg:gap-3 max-lg:px-5.5 max-lg:py-4 sm:px-8 sm:py-6"
      >
        <div className="flex items-center gap-4 max-lg:gap-3">
          <Image
            src="/img/about/paola-bertoncello.png"
            alt="Paola Bertoncello"
            width={64}
            height={64}
            className="size-16 rounded-chip object-cover shadow-image-outline max-lg:size-11"
          />
          <div className="flex flex-col gap-0.5">
            <Text size="xl" weight="semibold" className="max-lg:text-base">
              Paola Bertoncello
            </Text>
            <Text className="max-lg:text-xs">Marau, RS — Casal</Text>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StarRating variant="dot" />
          <Text as="span" size="xl" weight="semibold" className="max-lg:text-base">
            5.0
          </Text>
        </div>
        <Text leading="relaxed" pretty className="max-lg:text-xs">
          {QUOTE}
        </Text>
      </Card>
    </div>
  );
}
