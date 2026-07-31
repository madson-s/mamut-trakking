'use client';

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import Image from 'next/image';
import { ArrowRightIcon, CaretDownIcon } from '@/components/ui/icons';

type Trail = {
  image: string;
  imagePosition?: string;
  duration: string;
  level: string;
  distance: string;
  title: string;
  description: string;
  href: string;
};

const TRAILS: Trail[] = [
  {
    image: '/img/figma/paths/vale-pati-5.png',
    imagePosition: '50% 50%',
    duration: '5 Dias',
    level: 'Médio',
    distance: '78km',
    title: 'Vale do Pati (05 dias)',
    description:
      'Localizado no coração do Parque Nacional da Chapada Diamantina (PNCD), rodeado por montanhas, cachoeiras e grutas.',
    href: '/pt/aventuras/vale-do-pati-5-dias',
  },
  {
    image: '/img/figma/paths/cachoeira-palmital.png',
    imagePosition: '50% 50%',
    duration: '2 Dias',
    level: 'Médio',
    distance: '22km',
    title: 'Cachoeira do Palmital 02 Dias',
    description:
      'Uma travessia entre campos de altitude e paredões até as águas da Cachoeira do Palmital.',
    href: '/pt/aventuras/cachoeira-do-palmital',
  },
  {
    image: '/img/figma/paths/vale-pati-3.png',
    imagePosition: '50% 50%',
    duration: '3 Dias',
    level: 'Médio',
    distance: '46km',
    title: 'Vale do Pati (03 dias)',
    description:
      'Uma imersão de três dias entre cânions, rios e comunidades no coração do Vale do Pati.',
    href: '/pt/aventuras/vale-do-pati-3-dias',
  },
  {
    image: '/img/figma/paths/cachoeira-palmital.png',
    imagePosition: '66% 50%',
    duration: '2 Dias',
    level: 'Médio',
    distance: '22km',
    title: 'Cachoeira do Palmital 02 Dias',
    description:
      'Uma travessia entre campos de altitude e paredões até as águas da Cachoeira do Palmital.',
    href: '/pt/aventuras/cachoeira-do-palmital',
  },
  {
    image: '/img/vale-do-pati/vale-do-pati-12.webp',
    imagePosition: '50% 50%',
    duration: '1 Dia',
    level: 'Leve',
    distance: '12km',
    title: 'Trilha Águas Claras',
    description:
      'Um dia entre campos rupestres, piscinas naturais e os grandes paredões da Chapada Diamantina.',
    href: '/pt/aventuras/trilha-aguas-claras',
  },
  {
    image: '/img/home_square_right_morro_3_1_5x.webp',
    imagePosition: '50% 50%',
    duration: '1 Dia',
    level: 'Médio',
    distance: '8km',
    title: 'Mosquito + Pai Inácio',
    description:
      'Cachoeira do Mosquito e pôr do sol no Morro do Pai Inácio em um roteiro completo de um dia.',
    href: '/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio',
  },
  {
    image: '/img/vale-do-pati/vale-do-pati-01.webp',
    imagePosition: '50% 50%',
    duration: '2 Dias',
    level: 'Médio',
    distance: '18km',
    title: 'Cachoeira do Mixila',
    description:
      'Uma travessia até uma das cachoeiras mais preservadas da região de Lençóis.',
    href: '/pt/aventuras/cachoeira-do-mixila',
  },
  {
    image: '/img/vale-do-pati/vale-do-pati-06.webp',
    imagePosition: '50% 50%',
    duration: '4 Dias',
    level: 'Desafiador',
    distance: '45km',
    title: 'Vale do Pati (04 dias)',
    description:
      'Quatro dias explorando mirantes, cachoeiras e casas de nativos no Vale do Pati.',
    href: '/pt/aventuras/vale-do-pati-4-dias',
  },
];

const ICON_ROOT = '/svg/figma/paths';

export function PathsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [carouselProgress, setCarouselProgress] = useState({ value: 0, visibleRatio: 1 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const suppressClickRef = useRef(false);
  const dragRef = useRef({
    active: false,
    hasMoved: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });

  const updateScrollControls = () => {
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
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(updateScrollControls, 520);
    return () => window.clearTimeout(timeoutId);
  }, [activeIndex]);

  const getCardStarts = () => {
    const carousel = carouselRef.current;
    if (!carousel) return [];

    const carouselLeft = carousel.getBoundingClientRect().left;
    return Array.from(carousel.querySelectorAll<HTMLElement>('[data-carousel-card]')).map(
      (card) => card.getBoundingClientRect().left - carouselLeft + carousel.scrollLeft,
    );
  };

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
    <section
      aria-labelledby="paths-heading"
      className="w-full border-y border-gray-200 bg-gray-100 px-6 py-20 lg:px-8 lg:py-[108px]"
    >
      <div className="mx-auto flex w-full max-w-[1218px] flex-col gap-12">
        <div className="flex min-h-[55px] flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <h2
              id="paths-heading"
              className="font-display text-[40px] leading-[1.15] font-light text-gray-950 sm:text-5xl"
            >
              Escolha seu caminho
            </h2>

            <a
              href="/pt/aventuras"
              className="group inline-flex min-h-10 items-center justify-center gap-3 rounded-full bg-primary-500 px-6 py-2 font-body text-base leading-6 font-semibold text-white transition-[background-color,transform] duration-300 hover:bg-primary-filled-hover active:scale-[0.96]"
            >
              Todos os roteiros
              <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="flex items-center gap-3" aria-label="Navegação dos roteiros">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              disabled={!canScrollPrevious}
              aria-controls="paths-carousel"
              aria-label="Mostrar roteiro anterior"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-950 bg-transparent text-gray-950 transition-[background-color,border-color,color,opacity,transform] duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100"
            >
              <CaretDownIcon className="size-6 rotate-90 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              disabled={!canScrollNext}
              aria-controls="paths-carousel"
              aria-label="Mostrar próximo roteiro"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 transition-[background-color,opacity,transform] duration-300 hover:bg-primary-filled-hover active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100"
            >
              <CaretDownIcon className="size-6 -rotate-90 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
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
            className={`flex h-[437px] gap-3 overflow-x-auto overscroll-x-contain pb-2 select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:pb-0 ${
              isDragging
                ? 'cursor-grabbing snap-none'
                : 'cursor-grab snap-x snap-mandatory scroll-smooth'
            }`}
            aria-label="Carrossel de roteiros"
            aria-live="polite"
          >
            {TRAILS.map((trail, index) => (
              <TrailCard
                key={`${trail.title}-${index}`}
                trail={trail}
                isActive={activeIndex === index}
                onActivate={() => {
                  if (!dragRef.current.active) setActiveIndex(index);
                }}
              />
            ))}
          </div>

          <div
            role="progressbar"
            aria-label="Progresso do carrossel de roteiros"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(carouselProgress.value * 100)}
            className="relative mx-auto h-1 w-36 overflow-hidden rounded-full bg-gray-300"
          >
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-primary-500 transition-transform duration-150 ease-out"
              style={{
                width: `${Math.max(28, 144 * carouselProgress.visibleRatio)}px`,
                transform: `translate3d(${(144 - Math.max(28, 144 * carouselProgress.visibleRatio)) * carouselProgress.value}px, 0, 0)`,
              }}
            />
          </div>
        </div>

        <p className="text-center font-body text-lg leading-[1.4] font-light text-gray-600 sm:text-xl">
          Do <span className="font-display text-2xl text-gray-950">caminhante</span> de fim de
          semana ao{' '}
          <span className="font-display text-2xl text-gray-950">aventureiro de longa data</span> —
          aqui tem o ritmo certo para você.
        </p>
      </div>
    </section>
  );
}

function TrailCard({
  trail,
  isActive,
  onActivate,
}: {
  trail: Trail;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <article
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
      onClick={onActivate}
      data-carousel-card
      data-active={isActive}
      className={`group/card relative h-full min-w-0 shrink-0 snap-center basis-[86vw] overflow-hidden rounded-[28px] bg-gray-200 transition-[flex-basis,box-shadow] duration-500 ease-[cubic-bezier(.2,0,0,1)] sm:basis-[406px] ${
        isActive
          ? 'shadow-[0_18px_48px_rgba(0,0,0,0.18)] xl:basis-[406px]'
          : 'xl:basis-[258px]'
      }`}
    >
      <Image
        src={trail.image}
        alt=""
        fill
        sizes="(min-width: 1280px) 406px, (min-width: 640px) 406px, 86vw"
        loading="lazy"
        style={{ objectPosition: trail.imagePosition }}
        className="absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(.2,0,0,1)] group-hover/card:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />

      <div
        className={`absolute left-6 top-6 z-10 flex max-w-[255px] flex-wrap items-center gap-2 transition-[opacity,filter,transform] duration-300 ${
          isActive
            ? 'translate-y-0 opacity-100 blur-0 delay-150'
            : '-translate-y-1 opacity-0 blur-[4px] pointer-events-none'
        }`}
        aria-hidden={!isActive}
      >
        <Badge>
          <Image
            src={`${ICON_ROOT}/calendar.svg`}
            alt=""
            width={14}
            height={14}
            unoptimized
            className="h-3.5 w-3.5"
          />
          {trail.duration}
        </Badge>
        <Badge>{trail.level}</Badge>
        <Badge>{trail.distance}</Badge>
      </div>

      <a
        href={trail.href}
        aria-label={`Explorar ${trail.title}`}
        className={`absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-[background-color,color,transform] duration-500 active:scale-[0.96] ${
          isActive ? 'bg-primary-500 text-white' : 'bg-white text-[#1e1e1e]'
        }`}
      >
        <CaretDownIcon className="size-6 -rotate-90 transition-transform duration-500" />
      </a>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-5 p-7 text-white">
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-[30px] leading-[1.25] font-light text-white">
            {trail.title}
          </h3>
          <div
            className={`grid transition-[grid-template-rows,opacity,filter] duration-300 ${
              isActive
                ? 'grid-rows-[1fr] opacity-100 blur-0 delay-150'
                : 'grid-rows-[0fr] opacity-0 blur-[4px]'
            }`}
          >
            <div className="overflow-hidden">
              <p className="max-w-[320px] font-body text-xs leading-[1.4] font-light text-white">
                {trail.description}
              </p>
            </div>
          </div>
        </div>

        <a
          href={trail.href}
          className={`group/cta relative inline-flex min-h-12 w-full items-center justify-between overflow-hidden rounded-full border px-6 py-3 font-body text-base leading-6 font-semibold text-white transition-[background-color,border-color,transform] duration-300 active:scale-[0.96] ${
            isActive
              ? 'border-primary-500 bg-primary-500 hover:border-primary-filled-hover hover:bg-primary-filled-hover'
              : 'border-white bg-transparent hover:border-primary-500 hover:bg-primary-500'
          }`}
        >
          Explorar a trilha
          <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-7 items-center gap-2 rounded-full border border-white px-3 py-1 font-body text-xs leading-[1.4] font-light text-white">
      {children}
    </span>
  );
}
