'use client';

import {
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
    <Section
      surface="muted"
      bordered
      padding="tall"
      labelledBy="paths-heading"
      containerClassName="flex flex-col gap-12"
    >
      <div className="flex min-h-[55px] flex-wrap items-center justify-between gap-6">
        <SectionHeading
          layout="inline"
          titleId="paths-heading"
          title="Escolha seu caminho"
          actions={
            <Button href="/pt/aventuras" arrow>
              Todos os roteiros
            </Button>
          }
        />

        <div className="flex items-center gap-3">
          <IconButton
            label="Mostrar roteiro anterior"
            variant="outline"
            onClick={() => scrollCarousel(-1)}
            disabled={!canScrollPrevious}
            aria-controls="paths-carousel"
          >
            <CaretDownIcon className="size-6 rotate-90 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </IconButton>
          <IconButton
            label="Mostrar próximo roteiro"
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
          className="relative mx-auto h-1 w-36 overflow-hidden rounded-pill bg-surface-sunken"
        >
          <span
            className="absolute inset-y-0 left-0 rounded-pill bg-brand transition-transform duration-150 ease-out"
            style={{
              width: `${Math.max(28, 144 * carouselProgress.visibleRatio)}px`,
              transform: `translate3d(${(144 - Math.max(28, 144 * carouselProgress.visibleRatio)) * carouselProgress.value}px, 0, 0)`,
            }}
          />
        </div>
      </div>

      <Text
        size="lg"
        weight="light"
        tone="secondary"
        pretty
        className="text-center sm:text-xl"
      >
        Do <Emphasis tone="default">caminhante</Emphasis> de fim de semana ao{' '}
        <Emphasis tone="default">aventureiro de longa data</Emphasis> — aqui tem o ritmo certo para
        você.
      </Text>
    </Section>
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
  // O `<article>` externo cuida do carrossel (flex-basis, snap, handlers e os
  // data-attributes que o arraste lê). O `MediaCard` cuida do card: foto, véu,
  // radius e a sombra do estado ativo.
  return (
    <article
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
      onClick={onActivate}
      data-carousel-card
      data-active={isActive}
      className={`group/card h-full min-w-0 shrink-0 snap-center basis-[86vw] transition-[flex-basis] duration-500 ease-brand sm:basis-[406px] ${
        isActive ? 'xl:basis-[406px]' : 'xl:basis-[258px]'
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
          className={`absolute left-6 top-6 z-10 flex max-w-[255px] flex-wrap items-center gap-2 transition-[opacity,filter,transform] duration-300 ${
            isActive
              ? 'translate-y-0 opacity-100 blur-0 delay-150'
              : 'pointer-events-none -translate-y-1 opacity-0 blur-xs'
          }`}
          aria-hidden={!isActive}
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
                className="size-3.5"
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

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-5 p-7">
          <div className="flex flex-col gap-3">
            <Heading as="h3" size="card" tone="onMedia">
              {trail.title}
            </Heading>
            <div
              className={`grid transition-[grid-template-rows,opacity,filter] duration-300 ${
                isActive
                  ? 'grid-rows-[1fr] opacity-100 blur-0 delay-150'
                  : 'grid-rows-[0fr] opacity-0 blur-xs'
              }`}
            >
              <div className="overflow-hidden">
                <Text size="xs" weight="light" tone="onMedia" className="max-w-[320px]">
                  {trail.description}
                </Text>
              </div>
            </div>
          </div>

          <Button
            href={trail.href}
            variant={isActive ? 'primary' : 'outlineOnMedia'}
            size="lg"
            block
            justify="between"
            arrow
          >
            Explorar a trilha
          </Button>
        </div>
      </MediaCard>
    </article>
  );
}
