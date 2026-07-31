'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { StarRating } from '@/components/ui/icons';

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

  return (
    <div
      ref={cardRef}
      style={stackStyle}
      className="relative flex min-h-[272px] flex-col gap-4 rounded-[40px] border border-gray-400 bg-gray-100 px-8 py-6 shadow-[0_18px_48px_rgba(0,0,0,0.08)] lg:absolute lg:inset-x-0 lg:top-0 lg:translate-y-[var(--stack-y)] lg:will-change-transform"
    >
      <div className="flex items-center gap-4">
        {/* Avatar — foto não está no handoff */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] border border-dashed border-warning-500/70 bg-warning-500/10 text-center font-body text-[9px] leading-tight text-warning-500">
          ⚠ foto
        </div>
        <div className="flex flex-col justify-center gap-0.5 text-gray-950">
          <p className="font-body text-xl font-semibold">Paola Bertoncello</p>
          <p className="font-body text-base">Marau, RS — Casal</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <StarRating />
        <span className="font-body text-xl font-semibold text-gray-950">5.0</span>
      </div>
      <p className="font-body text-base leading-relaxed text-gray-950">{QUOTE}</p>
    </div>
  );
}
