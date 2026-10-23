'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { Badge, Button, CaretDownIcon, Heading, IconButton, MediaCard, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { TransferBookingTrigger } from './TransferBookingTrigger';
import type { TransferLocationValue } from './transfer-booking';

const STOPS = [
  {
    title: 'Poço Azul & Poço Encantado',
    label: 'No caminho para Salvador · meio período',
    quote: 'Águas transparentes em grutas que parecem outro mundo.',
    image: '/img/adventures/pacotes/poco-azul.jpeg',
    alt: 'Águas azuis do Poço Azul na Chapada Diamantina',
    destination: 'poco-azul' as TransferLocationValue,
  },
  {
    title: 'Morro do Pai Inácio',
    label: 'Pôr do sol clássico · 1–2h',
    quote: 'A vista de 360 graus que apresenta a Chapada de uma vez.',
    image: '/img/transfer/pai-inacio.png',
    alt: 'Vista das montanhas no Morro do Pai Inácio',
    destination: 'lencois' as TransferLocationValue,
  },
  {
    title: 'Cachoeira na estrada',
    label: 'Parada rápida guiada · 1–2h',
    quote: 'Um mergulho e uma caminhada curta antes de seguir viagem.',
    image: '/img/transfer/waterfall-road.png',
    alt: 'Cachoeira entre paredões da Chapada Diamantina',
    destination: 'capao' as TransferLocationValue,
  },
  {
    title: 'Cachoeira do Mosquito',
    label: 'Desvio entre Lençóis e Salvador · meio período',
    quote: 'Uma queda d’água imponente para transformar o deslocamento em passeio.',
    image: '/img/adventures/mosquito/hero.jpeg',
    alt: 'Cachoeira do Mosquito cercada pelos paredões da Chapada Diamantina',
    destination: 'lencois' as TransferLocationValue,
  },
  {
    title: 'Parque da Muritiba',
    label: 'Antes de sair de Lençóis · 2–3h',
    quote: 'Poços, mirantes e formações rochosas a poucos minutos do centro histórico.',
    image: '/img/adventures/muritiba/hero.jpeg',
    alt: 'Piscina natural no Parque da Muritiba em Lençóis',
    destination: 'lencois' as TransferLocationValue,
  },
  {
    title: 'Marimbus de canoa',
    label: 'Na rota de Andaraí · meio período',
    quote: 'Um trecho tranquilo entre águas, vegetação e o silêncio do pantanal da Chapada.',
    image: '/img/adventures/marimbus/hero.jpeg',
    alt: 'Passeio de canoa pelo Marimbus na Chapada Diamantina',
    destination: 'andarai' as TransferLocationValue,
  },
  {
    title: 'Trilha de Águas Claras',
    label: 'No caminho do Vale do Capão · meio período',
    quote: 'Caminhada leve, banho de rio e o Morrão acompanhando a paisagem.',
    image: '/img/adventures/aguas-claras/hero.jpeg',
    alt: 'Trilha de Águas Claras com vista para o Morrão',
    destination: 'capao' as TransferLocationValue,
  },
] as const;

export function TransferStopsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const suppressClickRef = useRef(false);
  const dragRef = useRef({
    active: false,
    hasMoved: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const getStarts = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return [];
    const left = carousel.getBoundingClientRect().left;
    return Array.from(carousel.querySelectorAll<HTMLElement>('[data-stop-card]')).map(
      (card) => card.getBoundingClientRect().left - left + carousel.scrollLeft,
    );
  }, []);

  const update = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const max = carousel.scrollWidth - carousel.clientWidth;
    setCanPrevious(carousel.scrollLeft > 2);
    setCanNext(carousel.scrollLeft < max - 2);

    const starts = getStarts();
    if (!starts.length) return;
    if (max - carousel.scrollLeft <= 2) {
      setActiveIndex(starts.length - 1);
      return;
    }
    let nearest = 0;
    for (let index = 1; index < starts.length; index += 1) {
      if (Math.abs(starts[index] - carousel.scrollLeft) < Math.abs(starts[nearest] - carousel.scrollLeft)) {
        nearest = index;
      }
    }
    setActiveIndex(nearest);
  }, [getStarts]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    update();
    carousel.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(carousel);
    return () => {
      carousel.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [update]);

  const scrollTo = (index: number) => {
    const carousel = carouselRef.current;
    const starts = getStarts();
    if (!carousel || starts[index] === undefined) return;
    carousel.scrollTo({ left: starts[index], behavior: 'smooth' });
  };

  const move = (direction: -1 | 1) => {
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
    const starts = getStarts();
    if (!starts.length) return;
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
    <div className="mt-9">
      <div className="mb-5 hidden justify-end gap-3 sm:flex">
        <IconButton
          label="Parada anterior"
          variant="outline"
          onClick={() => move(-1)}
          disabled={!canPrevious}
          aria-controls="transfer-stops-carousel"
        >
          <CaretDownIcon className="size-6 rotate-90" />
        </IconButton>
        <IconButton
          label="Próxima parada"
          onClick={() => move(1)}
          disabled={!canNext}
          aria-controls="transfer-stops-carousel"
        >
          <CaretDownIcon className="size-6 -rotate-90" />
        </IconButton>
      </div>

      <div
        id="transfer-stops-carousel"
        ref={carouselRef}
        tabIndex={0}
        onPointerDown={startDrag}
        onPointerMove={dragCarousel}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onClickCapture={preventClickAfterDrag}
        onDragStart={(event) => event.preventDefault()}
        className={cn(
          'flex select-none gap-4 overflow-x-auto pb-3 overscroll-x-contain focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-surface scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
          isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory scroll-smooth',
        )}
        aria-label="Paradas que podem ser incluídas no transfer"
      >
        {STOPS.map((stop) => (
          <article
            key={stop.title}
            data-stop-card
            className="min-w-0 shrink-0 snap-start basis-[86vw] sm:basis-96 lg:basis-[calc((100%_-_1rem)/2)]"
          >
            <MediaCard
              image={{ src: stop.image, alt: stop.alt, sizes: '(min-width:1280px) 460px, (min-width:640px) 384px, 86vw' }}
              overlay="bottom"
              radius="cardLg"
              backdrop="media"
              elevation={activeIndex === STOPS.indexOf(stop) ? 'float' : 'none'}
              zoomOnHover
              className="h-118 shadow-image-outline transition-shadow duration-500 ease-brand"
              contentLayer="fill"
            >
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-6 sm:p-7">
                <Badge variant="outlineOnMedia" size="sm">{stop.label}</Badge>
                <Heading as="h3" size="card" tone="onMedia" className="mt-4">{stop.title}</Heading>
                <Text size="sm" weight="light" tone="onMediaSoft" pretty className="mt-2 max-w-80">
                  {stop.quote}
                </Text>
                <TransferBookingTrigger
                  detail={{ destination: stop.destination, adventure: true }}
                  size="lg"
                  className="mt-5 max-sm:w-full"
                >
                  Incluir no caminho
                </TransferBookingTrigger>
              </div>
            </MediaCard>
          </article>
        ))}
      </div>

      <div role="tablist" aria-label="Selecionar parada" className="mt-4 flex justify-center gap-2">
        {STOPS.map((stop, index) => (
          <button
            key={`${stop.title}-dot`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Mostrar ${stop.title}`}
            onClick={() => scrollTo(index)}
            className={cn(
              'h-1.5 rounded-pill transition-[width,background-color] duration-300',
              activeIndex === index ? 'w-8 bg-brand' : 'w-4 bg-surface-sunken',
            )}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button href="/pt/aventuras" variant="outline" size="lg" arrow>
          Ver todas as aventuras
        </Button>
      </div>
    </div>
  );
}
