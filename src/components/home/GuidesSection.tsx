'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Badge, Button, Heading, Section, Text } from '@/components/ui';
import { focus, motion } from '@/design/tokens';
import { cn } from '@/lib/cn';
import { GUIDES } from '../about/about-data';

const GUIDE_CARD_SIZES = '(min-width: 1024px) 280px, 216px';

const HOME_GUIDES = GUIDES.slice(0, 4);

const CROSSFADE = cn(
  'object-cover transition-[opacity,transform] duration-500 ease-brand',
  'group-hover/guide:scale-[1.025] group-focus-visible/guide:scale-[1.025]',
);

export function GuidesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dotIndex, setDotIndex] = useState(0);

  const getCardStarts = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return [];

    const carouselLeft = carousel.getBoundingClientRect().left;
    return Array.from(carousel.querySelectorAll<HTMLElement>('[data-guide-card]')).map(
      (card) => card.getBoundingClientRect().left - carouselLeft + carousel.scrollLeft,
    );
  }, []);

  const update = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const starts = getCardStarts();
    if (starts.length === 0) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (maxScroll - carousel.scrollLeft <= 1) {
      setDotIndex(starts.length - 1);
      return;
    }

    let nearest = 0;
    for (let i = 1; i < starts.length; i += 1) {
      if (
        Math.abs(starts[i] - carousel.scrollLeft) < Math.abs(starts[nearest] - carousel.scrollLeft)
      ) {
        nearest = i;
      }
    }
    setDotIndex(nearest);
  }, [getCardStarts]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    update();
    carousel.addEventListener('scroll', update, { passive: true });
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener('scroll', update);
      resizeObserver.disconnect();
    };
  }, [update]);

  const scrollToDot = (index: number) => {
    const carousel = carouselRef.current;
    const starts = getCardStarts();
    if (!carousel || index >= starts.length) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollTo({ left: Math.min(starts[index], maxScroll), behavior: 'smooth' });
  };

  return (
    <Section
      padding="none"
      className="py-12 lg:py-24"
      containerClassName="flex flex-col items-center gap-8 lg:gap-6"
    >
      <div className="flex w-full flex-col items-center gap-8 lg:gap-16">
        <Heading size="hero" className="text-center max-sm:text-[clamp(28px,8.4vw,36px)]">
          Nascidos aqui.
          <br />
          <span className="inline-flex flex-wrap items-center justify-center gap-x-2 lg:gap-x-4">
            Formados pela
            <span className="hidden lg:inline">
              <Image
                src="/img/home_square_right_morro_1_1_5x.webp"
                alt=""
                width={183}
                height={186}
                sizes="128px"
                className="inline-block h-[1.333em] w-[2.033em] rounded-pill object-cover align-middle"
              />
            </span>
            Chapada.
          </span>
        </Heading>

        <div
          ref={carouselRef}
          className={cn(
            'flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2',
            '[-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden',
            'lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0',
          )}
        >
          {HOME_GUIDES.map((guide) => (
            <article
              key={guide.name}
              data-guide-card
              tabIndex={0}
              aria-label={`${guide.name}, ${guide.role}`}
              className={cn(
                'group/guide flex shrink-0 basis-54 snap-start flex-col rounded-card lg:gap-3',
                'max-lg:min-h-111.75 max-lg:overflow-hidden max-lg:rounded-[22px] max-lg:border max-lg:border-line max-lg:bg-surface-muted',
                'lg:shrink lg:basis-auto',
                focus.onSurface,
                'focus-visible:ring-offset-4',
              )}
            >
              <div className="relative h-54 w-full overflow-hidden rounded-card bg-surface-sunken shadow-image-outline max-lg:rounded-none max-lg:shadow-none lg:h-96.5">
                <Image
                  src={guide.photo}
                  alt={guide.name}
                  fill
                  sizes={GUIDE_CARD_SIZES}
                  className={cn(
                    CROSSFADE,
                    'group-hover/guide:opacity-0 group-focus-visible/guide:opacity-0',
                  )}
                  style={guide.position ? { objectPosition: guide.position } : undefined}
                />
                <Image
                  src={guide.photoBw}
                  alt=""
                  fill
                  sizes={GUIDE_CARD_SIZES}
                  className={cn(
                    CROSSFADE,
                    'scale-[1.01] opacity-0 group-hover/guide:opacity-100 group-focus-visible/guide:opacity-100',
                  )}
                  style={guide.position ? { objectPosition: guide.position } : undefined}
                />
                <Image
                  src="/svg/figma/guides/marcelo-hover-line.svg"
                  alt=""
                  width={288}
                  height={163}
                  unoptimized
                  className={cn(
                    'pointer-events-none absolute -bottom-px left-[-1.5%] h-[42.25%] w-[103%] translate-y-3 opacity-0 blur-xs',
                    'transition-[opacity,filter,transform] ease-brand',
                    motion.slow,
                    'group-hover/guide:translate-y-0 group-hover/guide:opacity-100 group-hover/guide:blur-none',
                    'group-focus-visible/guide:translate-y-0 group-focus-visible/guide:opacity-100 group-focus-visible/guide:blur-none',
                  )}
                />
              </div>

              <div className="flex flex-col gap-2 max-lg:p-4">
                <div className="flex flex-col items-start gap-2 lg:flex-row lg:flex-wrap lg:items-center">
                  <Badge variant="brand" size="sm" radius="panelLg" className="order-1 lg:order-2">
                    {guide.role}
                  </Badge>
                  <Text as="p" size="xl" weight="semibold" className="order-2 lg:order-1">
                    {guide.name}
                  </Text>
                </div>
                <Text size="xs" leading="snug">
                  {guide.bio}
                </Text>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Página dos guias"
        className="flex items-center justify-center gap-2 lg:hidden"
      >
        {HOME_GUIDES.map((guide, i) => (
          <button
            key={`${guide.name}-dot-${i}`}
            type="button"
            role="tab"
            aria-selected={dotIndex === i}
            aria-label={`Ir para o guia ${i + 1}`}
            onClick={() => scrollToDot(i)}
            className={cn(
              'h-1.5 rounded-pill transition-[width,background-color] duration-300 ease-out',
              dotIndex === i ? 'w-8 bg-brand' : 'w-4 bg-surface-sunken',
            )}
          />
        ))}
      </div>

      <Button href="/pt/sobre#guias" arrow block className="lg:w-auto">
        Conheça quem guia o nosso bando
      </Button>
    </Section>
  );
}
