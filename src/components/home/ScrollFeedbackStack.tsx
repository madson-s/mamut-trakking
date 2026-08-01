'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { Card, Placeholder, StarRating, Text } from '@/components/ui';

const QUOTE =
  '"Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais."';

const CARD_HEIGHT = 272;
const CARD_GAP = 24;
const CLOSED_OFFSETS = [40, 20, 0];
const OPEN_OFFSETS = [40, CARD_HEIGHT + CARD_GAP + 40, (CARD_HEIGHT + CARD_GAP) * 2 + 40];

export function ScrollFeedbackStack() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frameId = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const renderStack = () => {
      frameId = 0;
      const root = rootRef.current;
      const sticky = stickyRef.current;
      if (!root || !sticky) return;

      const isDesktop = window.innerWidth >= 1024;
      const travel = Math.max(root.offsetHeight - sticky.offsetHeight, 1);
      const startTop = window.innerWidth >= 1280 ? 64 : 32;
      const rawProgress = (startTop - root.getBoundingClientRect().top) / travel;
      const progress = reducedMotion.matches ? 1 : Math.min(Math.max(rawProgress, 0), 1);

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        if (!isDesktop) {
          card.style.removeProperty('--stack-y');
          return;
        }

        const stageProgress =
          index === 0
            ? 0
            : index === 1
              ? Math.min(progress * 2, 1)
              : Math.min(Math.max((progress - 0.5) * 2, 0), 1);
        const offset =
          CLOSED_OFFSETS[index] +
          (OPEN_OFFSETS[index] - CLOSED_OFFSETS[index]) * stageProgress;
        card.style.setProperty('--stack-y', `${offset}px`);
      });
    };

    const scheduleRender = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(renderStack);
    };

    renderStack();
    window.addEventListener('scroll', scheduleRender, { passive: true });
    window.addEventListener('resize', scheduleRender);
    reducedMotion.addEventListener('change', scheduleRender);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleRender);
      window.removeEventListener('resize', scheduleRender);
      reducedMotion.removeEventListener('change', scheduleRender);
    };
  }, []);

  return (
    <div ref={rootRef} className="w-full max-w-[490px] lg:h-[1544px]">
      <div
        ref={stickyRef}
        className="relative flex w-full flex-col gap-6 lg:sticky lg:top-8 lg:block lg:h-[904px] xl:top-16"
        aria-label="Avaliações de viajantes"
      >
        {[0, 1, 2].map((index) => (
          <FeedbackCard
            key={index}
            cardRef={(element) => {
              cardRefs.current[index] = element;
            }}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function FeedbackCard({
  cardRef,
  index,
}: {
  cardRef: (element: HTMLDivElement | null) => void;
  index: number;
}) {
  const stackStyle = {
    '--stack-y': `${CLOSED_OFFSETS[index]}px`,
    zIndex: 30 - index * 10,
  } as CSSProperties;

  // O wrapper cuida do empilhamento (posição e transform vindos do rAF); o
  // `Card` cuida da aparência. `Card` não recebe `ref`/`style` de propósito.
  return (
    <div
      ref={cardRef}
      style={stackStyle}
      className="lg:absolute lg:inset-x-0 lg:top-0 lg:translate-y-[var(--stack-y)] lg:will-change-transform"
    >
      <Card
        radius="panelLg"
        elevation="card"
        surface="muted"
        padding="none"
        className="min-h-[272px] gap-4 px-8 py-6"
      >
        <div className="flex items-center gap-4">
          {/* Avatar — foto não está no handoff */}
          <Placeholder label="foto" className="size-16 shrink-0 rounded-chip" />
          <div className="flex flex-col justify-center gap-0.5">
            <Text size="xl" weight="semibold">
              Paola Bertoncello
            </Text>
            <Text>Marau, RS — Casal</Text>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StarRating />
          <Text as="span" size="xl" weight="semibold">
            5.0
          </Text>
        </div>
        <Text leading="relaxed">{QUOTE}</Text>
      </Card>
    </div>
  );
}
