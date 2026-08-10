'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { Card, Placeholder, StarRating, Text } from '@/components/ui';

const QUOTE =
  '"Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais."';

const CLOSED_OFFSETS = [0, 18, 36];
const OPEN_OFFSETS = [0, 296, 592];
const STAGE_START = 0.22;
const STAGE_LENGTH = 0.5;

export function ScrollFeedbackStack() {
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
    <div ref={rootRef} className="relative w-full max-w-122.5 lg:h-186">
      {[0, 1, 2].map((index) => (
        <FeedbackCard
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

function FeedbackCard({
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
      className="relative mb-6 last:mb-0 lg:absolute lg:inset-x-0 lg:top-0 lg:mb-0 lg:will-change-transform"
    >
      <Card
        radius="cardLg"
        surface="raised"
        padding="none"
        className="min-h-68 gap-4 px-8 py-6 max-lg:min-h-49.25 max-lg:gap-3 max-lg:px-5.5 max-lg:py-4"
      >
        <div className="flex items-center gap-4 max-lg:gap-3">
          <Placeholder label="foto" className="size-16 shrink-0 rounded-chip max-lg:size-11" />
          <div className="flex flex-col justify-center gap-1">
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
        <Text leading="relaxed" className="max-lg:text-xs">
          {QUOTE}
        </Text>
      </Card>
    </div>
  );
}
