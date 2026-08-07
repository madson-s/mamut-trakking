'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Badge, Button, Card, Heading, Section, SectionHeading, Text } from '@/components/ui';
import { focus, motion } from '@/design/tokens';
import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';
import { GUIDES, type Guide } from './about-data';

const GUIDE_IMAGE_SIZES =
  '(min-width: 1280px) 377px, (min-width: 1024px) 31vw, (min-width: 640px) 50vw, 74vw';

const GUIDE_CROSSFADE = cn(
  'object-cover transition-[opacity,transform] duration-500 ease-brand',
  'group-hover/guide:scale-[1.025] group-focus-visible/guide:scale-[1.025]',
  'motion-reduce:transition-none motion-reduce:transform-none',
);

export function AboutGuides() {
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
    carousel.scrollTo({ left: starts[index], behavior: 'smooth' });
  };

  const slides = [...GUIDES.map((guide) => guide.name), 'join'];

  return (
    <Section
      id="guias"
      padding="tall"
      containerClassName="relative flex flex-col items-center gap-8 lg:gap-20"
      className="scroll-mt-20 overflow-hidden"
      labelledBy="about-guides-title"
    >
      <Image
        src="/svg/about/guides-landscape-line.svg"
        alt=""
        width={861}
        height={537}
        unoptimized
        className="pointer-events-none absolute right-[-12%] bottom-0 hidden w-[78%] max-w-none opacity-30 lg:block"
      />

      <SectionHeading
        titleId="about-guides-title"
        align="center"
        size="hero"
        maxWidth="max-w-216"
        title={
          <span className="max-lg:text-[clamp(28px,8.4vw,36px)]">
            <span className="lg:hidden">Conheça quem guia o nosso bando!</span>
            <span className="max-lg:hidden">Quem guia o nosso bando.</span>
          </span>
        }
        lead={
          <Text
            size="sm"
            weight="light"
            tone="muted"
            pretty
            className="max-w-216 lg:text-xl"
          >
            Sete guias nativos, formados pela Chapada. Cada um com uma especialidade — juntos,
            cobrem o Parque Nacional inteiro.
          </Text>
        }
      />

      <div
        ref={carouselRef}
        className={cn(
          'relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2',
          '[-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden',
          'lg:grid lg:grid-cols-3 lg:gap-x-10.5 lg:gap-y-12 lg:overflow-visible lg:pb-0',
        )}
      >
        {GUIDES.map((guide) => (
          <GuideCard key={guide.name} guide={guide} />
        ))}
        <JoinTeamCard />
        <div aria-hidden className="w-1 shrink-0 lg:hidden" />
      </div>

      <div
        role="tablist"
        aria-label="Página dos guias"
        className="flex items-center justify-center gap-2 lg:hidden"
      >
        {slides.map((slide, i) => (
          <button
            key={slide}
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
    </Section>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article
      data-guide-card
      tabIndex={0}
      aria-label={`${guide.name}, ${guide.role}`}
      className={cn(
        'group/guide flex min-w-0 flex-col gap-3 rounded-panel-lg',
        'shrink-0 basis-[74%] snap-start lg:shrink lg:basis-auto',
        'max-lg:rounded-[22px] max-lg:border max-lg:border-line max-lg:bg-surface-muted max-lg:p-3',
        focus.onSurface,
        'focus-visible:ring-offset-4',
      )}
    >
      <div className="relative aspect-377/402 w-full overflow-hidden rounded-panel-lg bg-surface-sunken shadow-image-outline max-lg:rounded-2xl">
        <Image
          src={guide.photo}
          alt={guide.name}
          fill
          sizes={GUIDE_IMAGE_SIZES}
          className={cn(
            GUIDE_CROSSFADE,
            'group-hover/guide:opacity-0 group-focus-visible/guide:opacity-0',
          )}
          style={guide.position ? { objectPosition: guide.position } : undefined}
        />
        <Image
          src={guide.photoBw}
          alt=""
          fill
          sizes={GUIDE_IMAGE_SIZES}
          className={cn(
            GUIDE_CROSSFADE,
            'scale-[1.01] opacity-0 group-hover/guide:opacity-100 group-focus-visible/guide:opacity-100',
            'motion-reduce:scale-100',
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
            'motion-reduce:translate-y-0 motion-reduce:transition-none',
          )}
        />
      </div>
      <div className="flex flex-col gap-2 max-lg:px-1 max-lg:pb-1">
        <div className="flex flex-col items-start gap-2 lg:flex-row lg:flex-wrap lg:items-center lg:gap-3">
          <Badge variant="brand" size="sm" radius="panelLg" className="order-1 lg:order-2">
            {guide.role}
          </Badge>
          <Text as="p" size="xl" weight="semibold" className="order-2 lg:order-1">
            {guide.name}
          </Text>
        </div>
        <Text size="xs" weight="light" leading="snug" pretty>
          {guide.bio}
        </Text>
      </div>
    </article>
  );
}

export function JoinTeamCard() {
  return (
    <div
      data-guide-card
      className="flex shrink-0 basis-[74%] snap-start lg:shrink lg:basis-auto"
    >
      <Card
        as="article"
        surface="outline"
        radius="panelLg"
        padding="none"
        className={cn(
          'h-full w-full overflow-hidden px-8 pt-10 pb-10 sm:px-10 lg:min-h-122',
          'max-lg:items-center max-lg:rounded-[22px] max-lg:text-center',
        )}
      >
      <div className="flex items-end gap-5 max-lg:justify-center">
        <Image
          src="/svg/about/walking-group.svg"
          alt=""
          width={461}
          height={245}
          unoptimized
          className="h-auto w-[47%] max-lg:w-[58%]"
        />
        <Image
          src="/svg/about/mamut-yellow.svg"
          alt=""
          width={117}
          height={67}
          unoptimized
          className="about-theme-art hidden h-auto w-[43%] brightness-0 invert lg:block"
        />
      </div>

      <div className="mt-auto flex flex-col gap-6 max-lg:items-center">
        <Heading as="h3" size="section" balance className="max-lg:text-[clamp(26px,7.6vw,34px)]">
          Quer caminhar
          <br />
          com a gente?
        </Heading>
        <Text size="sm" weight="light" pretty>
          <span className="lg:hidden">Escolhemos juntos o ritmo, o roteiro e a data.</span>
          <span className="max-lg:hidden">
            Fale com um guia nativo pelo WhatsApp. Escolhemos juntos o ritmo, o roteiro e a data.
          </span>
        </Text>
          <Button href={SITE.whatsappUrl} block arrow>
            Entrar para o bando
          </Button>
        </div>
      </Card>
    </div>
  );
}
