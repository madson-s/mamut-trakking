'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import Image from 'next/image';
import {
  Badge,
  Button,
  CaretDownIcon,
  Heading,
  IconButton,
  MediaCard,
  Section,
  SectionHeading,
  Text,
} from '@/components/ui';
import { Emphasis } from '@/components/ui/Text';
import { ADVENTURE_ROUTES } from '@/lib/routes';
import { ADVENTURE_SEGMENT, type Locale } from '@/lib/site';
import { HOME_CONTENT, type TrailId } from './home-content';

type Trail = {
  id: TrailId;
  image: string;
  imagePosition?: string;
  distance: string;
};

// Foto e distância não mudam com o idioma; duração, nível, título, descrição e
// destino vêm de `HOME_CONTENT` e do manifesto de rotas, pelo id.
const TRAILS: Trail[] = [
  { id: 'vale-do-pati-3', image: '/img/adventures/home/vale-do-pati-3-dias.jpeg', imagePosition: '50% 50%', distance: '46km' },
  { id: 'palmital', image: '/img/adventures/home/cachoeira-do-palmital.jpeg', imagePosition: '50% 50%', distance: '22km' },
  { id: 'vale-do-pati-5', image: '/img/adventures/home/vale-do-pati-5-dias.jpeg', imagePosition: '50% 50%', distance: '78km' },
  { id: 'aguas-claras', image: '/img/adventures/home/trilha-aguas-claras.jpg', imagePosition: '50% 50%', distance: '12km' },
  { id: 'mosquito-pai-inacio', image: '/img/adventures/home/mosquito-pai-inacio.jpeg', imagePosition: '50% 50%', distance: '8km' },
  { id: 'mixila', image: '/img/adventures/home/cachoeira-do-mixila.jpeg', imagePosition: '50% 50%', distance: '18km' },
  { id: 'vale-do-pati-4', image: '/img/adventures/home/vale-do-pati-4-dias.jpeg', imagePosition: '50% 50%', distance: '45km' },
];

/** Junta a parte fixa do card com o texto e o link do idioma. */
function trilhasDoIdioma(locale: Locale) {
  const seg = ADVENTURE_SEGMENT[locale];
  const c = HOME_CONTENT[locale].paths.trilhas;

  return TRAILS.map((trail) => {
    const rota = ADVENTURE_ROUTES.find((r) => r.id === trail.id);
    return {
      ...trail,
      ...c[trail.id],
      href: rota ? `/${locale}/${seg}/${rota[locale]}` : `/${locale}/${seg}`,
    };
  });
}

type TrailWithCopy = ReturnType<typeof trilhasDoIdioma>[number];

const ICON_ROOT = '/svg/figma/paths';

export function PathsSection({ locale = 'pt' }: { locale?: Locale }) {
  const c = HOME_CONTENT[locale].paths;
  const trilhas = trilhasDoIdioma(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [carouselProgress, setCarouselProgress] = useState({ value: 0, visibleRatio: 1 });
  const [dotIndex, setDotIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const suppressClickRef = useRef(false);
  const dragRef = useRef({
    active: false,
    hasMoved: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });

  const getCardStarts = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return [];

    const carouselLeft = carousel.getBoundingClientRect().left;
    return Array.from(carousel.querySelectorAll<HTMLElement>('[data-carousel-card]')).map(
      (card) => card.getBoundingClientRect().left - carouselLeft + carousel.scrollLeft,
    );
  }, []);

  const updateScrollControls = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const value = maxScrollLeft > 0 ? carousel.scrollLeft / maxScrollLeft : 0;
    const visibleRatio = carousel.scrollWidth > 0
      ? Math.min(1, carousel.clientWidth / carousel.scrollWidth)
      : 1;

    setCanScrollPrevious(carousel.scrollLeft > 2);
    setCanScrollNext(carousel.scrollLeft < maxScrollLeft - 2);
    setCarouselProgress({ value: Math.max(0, Math.min(1, value)), visibleRatio });

    const starts = getCardStarts();
    if (starts.length === 0) return;

    let nearest = 0;
    for (let i = 1; i < starts.length; i += 1) {
      if (Math.abs(starts[i] - carousel.scrollLeft) < Math.abs(starts[nearest] - carousel.scrollLeft)) {
        nearest = i;
      }
    }
    setDotIndex(nearest);
  }, [getCardStarts]);

  const scrollToDot = (index: number) => {
    const carousel = carouselRef.current;
    const starts = getCardStarts();
    if (!carousel || index >= starts.length) return;
    carousel.scrollTo({ left: starts[index], behavior: 'smooth' });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateScrollControls();
    carousel.addEventListener('scroll', updateScrollControls, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollControls);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener('scroll', updateScrollControls);
      resizeObserver.disconnect();
    };
  }, [updateScrollControls]);

  useEffect(() => {
    const timeoutId = window.setTimeout(updateScrollControls, 520);
    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, updateScrollControls]);

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction * Math.max(carousel.clientWidth * 0.72, 270),
      behavior: 'smooth',
    });
  };

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest('a, button')) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    dragRef.current = {
      active: true,
      hasMoved: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: carousel.scrollLeft,
    };
    carousel.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const dragCarousel = (event: ReactPointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    const drag = dragRef.current;
    if (!carousel || !drag.active || event.pointerId !== drag.pointerId) return;

    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 5) drag.hasMoved = true;
    if (!drag.hasMoved) return;

    carousel.scrollLeft = drag.startScrollLeft - distance;
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    const drag = dragRef.current;
    if (!carousel || !drag.active || event.pointerId !== drag.pointerId) return;

    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }

    drag.active = false;
    setIsDragging(false);

    if (!drag.hasMoved) return;

    const starts = getCardStarts();
    if (starts.length === 0) return;
    suppressClickRef.current = true;
    const nearest = starts.reduce((best, start) =>
      Math.abs(start - carousel.scrollLeft) < Math.abs(best - carousel.scrollLeft) ? start : best,
    );
    carousel.scrollTo({ left: nearest, behavior: 'smooth' });
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  };

  const preventClickAfterDrag = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Section
      surface="muted"
      bordered
      padding="none"
      className="relative py-20 lg:py-24"
      labelledBy="paths-heading"
      containerClassName="flex flex-col gap-6 lg:gap-12"
    >
      <div className="flex min-h-13.75 flex-wrap items-center justify-between gap-6">
        <SectionHeading
          layout="inline"
          titleId="paths-heading"
          title={<span className="max-sm:text-[36px]">{c.eyebrow}</span>}
          actions={
            <div className="hidden lg:block">
              <Button href={c.todosHref} arrow>
                {c.todos}
              </Button>
            </div>
          }
        />

        <div className="hidden items-center gap-3 lg:flex">
          <IconButton
            label={c.carrossel.anterior}
            variant="outline"
            onClick={() => scrollCarousel(-1)}
            disabled={!canScrollPrevious}
            aria-controls="paths-carousel"
          >
            <CaretDownIcon className="size-6 rotate-90 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </IconButton>
          <IconButton
            label={c.carrossel.proximo}
            onClick={() => scrollCarousel(1)}
            disabled={!canScrollNext}
            aria-controls="paths-carousel"
          >
            <CaretDownIcon className="size-6 -rotate-90 transition-transform duration-300 group-hover:translate-x-0.5" />
          </IconButton>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div
          id="paths-carousel"
          ref={carouselRef}
          onPointerDown={startDrag}
          onPointerMove={dragCarousel}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onClickCapture={preventClickAfterDrag}
          onDragStart={(event) => event.preventDefault()}
          className={`flex h-109.25 gap-3 overflow-x-auto overscroll-x-contain pb-2 select-none [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden xl:pb-0 ${
            isDragging
              ? 'cursor-grabbing snap-none'
              : 'cursor-grab snap-x snap-mandatory scroll-smooth'
          }`}
          aria-label={c.carrossel.rotulo}
          aria-live="polite"
        >
          {trilhas.map((trail, index) => (
            <TrailCard
              explorarLabel={c.explorar}
              key={`${trail.title}-${index}`}
              trail={trail}
              isActive={activeIndex === index}
              onActivate={() => {
                if (!dragRef.current.active) setActiveIndex(index);
              }}
            />
          ))}
        </div>

        <Text size="sm" weight="light" tone="muted" className="text-center lg:hidden">
          {c.arraste}
        </Text>

        <div
          role="tablist"
          aria-label={c.carrossel.pagina}
          className="flex items-center justify-center gap-2 lg:hidden"
        >
          {trilhas.map((trail, index) => (
            <button
              key={`${trail.title}-dot-${index}`}
              type="button"
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={`Ir para o roteiro ${index + 1}`}
              onClick={() => scrollToDot(index)}
              className={`h-1.5 rounded-pill transition-[width,background-color] duration-300 ease-out ${
                dotIndex === index ? 'w-8 bg-brand' : 'w-4 bg-surface-sunken'
              }`}
            />
          ))}
        </div>

        <div
          role="progressbar"
          aria-label={c.carrossel.progresso}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(carouselProgress.value * 100)}
          className="relative mx-auto hidden h-1 w-36 overflow-hidden rounded-pill bg-surface-sunken lg:block"
        >
          <span
            className="absolute inset-y-0 left-0 rounded-pill bg-brand transition-transform duration-150 ease-out"
            style={{
              width: `${Math.max(28, 144 * carouselProgress.visibleRatio)}px`,
              transform: `translate3d(${(144 - Math.max(28, 144 * carouselProgress.visibleRatio)) * carouselProgress.value}px, 0, 0)`,
            }}
          />
        </div>

        <Button href={c.todosHref} arrow block className="mt-2 lg:hidden">
          {c.todos}
        </Button>
      </div>

      <Text
        size="sm"
        weight="light"
        tone="secondary"
        pretty
        className="mt-6 text-center sm:text-xl lg:mt-0"
      >
        Do <Emphasis size="xs" tone="default" className="sm:text-lg">caminhante</Emphasis> de fim de
        semana ao{' '}
        <Emphasis size="xs" tone="default" className="sm:text-lg">
          aventureiro de longa data
        </Emphasis>{' '}
        — aqui tem o ritmo certo para você.
      </Text>
    </Section>
  );
}

function TrailCard({
  trail,
  isActive,
  onActivate,
  explorarLabel,
}: {
  trail: TrailWithCopy;
  isActive: boolean;
  onActivate: () => void;
  explorarLabel: string;
}) {
  return (
    <article
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
      onClick={onActivate}
      data-carousel-card
      data-active={isActive}
      className={`group/card h-full min-w-0 shrink-0 snap-center basis-[86vw] transition-[flex-basis] duration-500 ease-brand sm:basis-101.5 ${
        isActive ? 'xl:basis-101.5' : 'xl:basis-64.5'
      }`}
    >
      <MediaCard
        image={{
          src: trail.image,
          alt: '',
          sizes: '(min-width: 1280px) 406px, (min-width: 640px) 406px, 86vw',
          position: trail.imagePosition,
        }}
        overlay="bottom"
        radius="cardLg"
        backdrop="media"
        elevation={isActive ? 'float' : 'none'}
        className="h-full w-full transition-shadow duration-500 ease-brand"
        contentLayer="fill"
      >
        <div
          className={`absolute top-6 left-6 z-10 flex max-w-63.75 flex-wrap items-center gap-2 transition-[opacity,filter,transform] duration-300 max-lg:translate-y-0 max-lg:pointer-events-auto max-lg:opacity-100 max-lg:blur-none ${
            isActive
              ? 'translate-y-0 opacity-100 blur-none delay-150'
              : 'pointer-events-none -translate-y-1 opacity-0 blur-xs'
          }`}
        >
          <Badge
            variant="outlineOnMedia"
            icon={
              <Image
                src={`${ICON_ROOT}/calendar.svg`}
                alt=""
                width={14}
                height={14}
                unoptimized
                className="hidden size-3.5 lg:inline"
              />
            }
          >
            {trail.duration}
          </Badge>
          <Badge variant="outlineOnMedia">{trail.level}</Badge>
          <Badge variant="outlineOnMedia">{trail.distance}</Badge>
        </div>

        <IconButton
          href={trail.href}
          label={`Explorar ${trail.title}`}
          variant={isActive ? 'primary' : 'solidOnMedia'}
          className="absolute right-4 top-4 z-20"
        >
          <CaretDownIcon className="size-6 -rotate-90" />
        </IconButton>

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-5 p-7 lg:items-stretch">
          <div className="flex flex-col gap-3">
            <Heading as="h3" size="card" tone="onMedia">
              {trail.title}
            </Heading>
            <div
              className={`grid transition-[grid-template-rows,opacity,filter] duration-300 max-lg:grid-rows-[1fr] max-lg:opacity-100 max-lg:blur-none ${
                isActive
                  ? 'grid-rows-[1fr] opacity-100 blur-none delay-150'
                  : 'grid-rows-[0fr] opacity-0 blur-xs'
              }`}
            >
              <div className="overflow-hidden">
                <Text size="xs" weight="light" tone="onMedia" className="max-w-80">
                  {trail.description}
                </Text>
              </div>
            </div>
          </div>

          <Button
            href={trail.href}
            variant={isActive ? 'primary' : 'outlineOnMedia'}
            size="lg"
            justify="center"
            arrow
            className="lg:w-full lg:justify-between"
          >
            {explorarLabel}
          </Button>
        </div>
      </MediaCard>
    </article>
  );
}
