'use client';

import { useEffect, useRef } from 'react';
import { Card, Placeholder, StarRating, Text } from '@/components/ui';

const QUOTE =
  '"Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais."';

const TESTIMONIALS = [
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
];

const CLOSED_PITCH = 24;
const OPEN_GAP = 24;
const BLEED = 120;
const RUNWAY = 700;
const STEP_DELAY = 0.45;
const STEP_SPAN = 0.5;

const DRIVEN = ['position', 'top', 'left', 'right', 'z-index', 'transform'];

export function ScrollFeedbackStack() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frameId = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const reset = () => {
      const root = rootRef.current;
      root?.style.removeProperty('height');
      root?.closest<HTMLElement>('[data-pin-stage]')?.style.removeProperty('height');

      for (const card of cardRefs.current) {
        if (!card) continue;
        for (const prop of DRIVEN) card.style.removeProperty(prop);
      }
    };

    const render = () => {
      frameId = 0;

      const root = rootRef.current;
      const first = cardRefs.current[0];
      if (!root || !first) return;

      if (window.innerWidth < 1024) {
        reset();
        return;
      }

      const cardHeight = first.offsetHeight;
      const openPitch = cardHeight + OPEN_GAP;
      const count = cardRefs.current.length;

      root.style.height = `${cardHeight + openPitch * (count - 1) - BLEED}px`;

      const stage = root.closest<HTMLElement>('[data-pin-stage]');
      const box = stage?.querySelector<HTMLElement>('[data-pin-box]');
      if (stage && box) stage.style.height = `${box.offsetHeight + RUNWAY}px`;

      const progress =
        reducedMotion.matches || !stage
          ? 1
          : Math.min(Math.max(-stage.getBoundingClientRect().top / RUNWAY, 0), 1);

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const step = Math.min(
          Math.max((progress - (index - 1) * STEP_DELAY) / STEP_SPAN, 0),
          1,
        );
        const eased = 1 - (1 - step) ** 3;
        const closed = index * CLOSED_PITCH;
        const offset = closed + (index * openPitch - closed) * eased;

        card.style.position = 'absolute';
        card.style.top = '0';
        card.style.left = '0';
        card.style.right = '0';
        card.style.zIndex = `${index + 1}`;
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
    <div ref={rootRef} className="relative w-full max-w-122.5">
      {TESTIMONIALS.map((testimonial, index) => (
        <div
          key={index}
          ref={(element) => {
            cardRefs.current[index] = element;
          }}
          className="w-full max-lg:mb-6 max-lg:last:mb-0 lg:will-change-transform"
        >
          <Card
            radius="cardLg"
            surface="raised"
            padding="none"
            className="gap-4 px-8 py-6 max-lg:gap-3 max-lg:px-5.5 max-lg:py-4"
          >
            <div className="flex items-center gap-4 max-lg:gap-3">
              <Placeholder label="foto" className="size-16 shrink-0 rounded-chip max-lg:size-11" />
              <div className="flex flex-col justify-center gap-1">
                <Text size="xl" weight="semibold" className="max-lg:text-base">
                  {testimonial.name}
                </Text>
                <Text className="max-lg:text-xs">{testimonial.title}</Text>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <StarRating variant="dot" />
              <Text as="span" size="xl" weight="semibold" className="max-lg:text-base">
                {testimonial.rating}
              </Text>
            </div>

            <Text leading="relaxed" className="max-lg:text-xs">
              {testimonial.quote}
            </Text>
          </Card>
        </div>
      ))}
    </div>
  );
}
