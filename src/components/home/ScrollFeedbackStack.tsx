'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Card, Placeholder, StarRating, Text } from '@/components/ui';

const QUOTE =
  '"Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais."';

const OFFSETS = [0, 296, 592];

export function ScrollFeedbackStack() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(root);

    return () => observer.disconnect();
  }, [revealed]);

  return (
    <div ref={rootRef} className="relative w-full max-w-122.5 lg:h-186">
      {[0, 1, 2].map((index) => (
        <FeedbackCard key={index} index={index} revealed={revealed} />
      ))}
    </div>
  );
}

function FeedbackCard({ index, revealed }: { index: number; revealed: boolean }) {
  const style = {
    '--offset': `${OFFSETS[index]}px`,
    zIndex: 30 - index * 10,
    transitionDelay: `${index * 150}ms`,
  } as CSSProperties;

  return (
    <div
      style={style}
      className={`relative mb-6 transition-[opacity,transform] duration-700 ease-out last:mb-0 lg:absolute lg:inset-x-0 lg:top-0 lg:mb-0 lg:translate-y-(--offset) lg:will-change-transform ${
        revealed ? 'opacity-100' : 'opacity-0 lg:-translate-y-4'
      }`}
    >
      <Card
        radius="cardLg"
        elevation="card"
        surface="raised"
        padding="none"
        className="min-h-68 gap-4 px-8 py-6 max-lg:min-h-49.25 max-lg:gap-3 max-lg:px-5.5 max-lg:py-4"
      >
        <div className="flex items-center gap-4 max-lg:gap-3">
          <Placeholder label="foto" className="size-16 shrink-0 rounded-chip max-lg:size-11" />
          <div className="flex flex-col justify-center gap-0.5">
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
