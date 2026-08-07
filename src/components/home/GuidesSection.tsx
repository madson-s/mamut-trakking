"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heading, Section } from "@/components/ui";

import { cn } from "@/lib/cn";
import {  GuideCard, JoinTeamCard } from "../about/AboutGuides";
import { GUIDES } from './../../components/about/about-data';

export function GuidesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dotIndex, setDotIndex] = useState(0);

  const getCardStarts = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return [];

    const carouselLeft = carousel.getBoundingClientRect().left;
    return Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-guide-card]")
    ).map(
      (card) =>
        card.getBoundingClientRect().left - carouselLeft + carousel.scrollLeft
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
        Math.abs(starts[i] - carousel.scrollLeft) <
        Math.abs(starts[nearest] - carousel.scrollLeft)
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
    carousel.addEventListener("scroll", update, { passive: true });
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, [update]);

  const scrollToDot = (index: number) => {
    const carousel = carouselRef.current;
    const starts = getCardStarts();
    if (!carousel || index >= starts.length) return;
    carousel.scrollTo({ left: starts[index], behavior: "smooth" });
  };

  return (
    <Section
      padding="none"
      className="py-12 lg:py-24"
      containerClassName="flex flex-col items-center gap-8 lg:gap-6"
    >
      <div className="flex w-full flex-col items-center gap-8 lg:gap-16">
        <Heading size="hero" className="text-center">
          <span className="text-[clamp(28px,4.2vw,60px)]">
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
          </span>
        </Heading>
        <div
          ref={carouselRef}
          className={cn(
            "relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2",
            "[-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden",
            "lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:overflow-visible lg:pb-0"
          )}
        >
          {GUIDES.map((guide) => (
            <GuideCard key={guide.name} guide={guide} />
          ))}
          <JoinTeamCard />
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Página dos guias"
        className="flex items-center justify-center gap-2 lg:hidden"
      >
        {GUIDES.map((guide, i) => (
          <button
            key={`${guide.name}-dot-${i}`}
            type="button"
            role="tab"
            aria-selected={dotIndex === i}
            aria-label={`Ir para o guia ${i + 1}`}
            onClick={() => scrollToDot(i)}
            className={cn(
              "h-1.5 rounded-pill transition-[width,background-color] duration-300 ease-out",
              dotIndex === i ? "w-8 bg-brand" : "w-4 bg-surface-sunken"
            )}
          />
        ))}
      </div>
    </Section>
  );
}
