'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR = [
  'main > section',
  'main > article > section',
  'main > div > section',
  'main > div > article > section',
].join(',');

export function ScrollExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | null = null;
    document.documentElement.dataset.scrollExperience = 'ready';

    let frame = 0;

    const setup = () => {
      const allSections = Array.from(
        document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
      );
      const sections = allSections.filter(
        (section) =>
          section.dataset.scrollReveal !== 'off' &&
          !section.classList.contains('scroll-reveal-skip'),
      );

      allSections
        .filter((section) => !sections.includes(section))
        .forEach((section) => {
          section.classList.remove('scroll-reveal-section', 'is-scroll-visible');
        });

      if (reducedMotion.matches || !('IntersectionObserver' in window)) {
        sections.forEach((section) => {
          section.classList.remove('scroll-reveal-section');
          section.classList.add('is-scroll-visible');
        });
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-scroll-visible');
            observer?.unobserve(entry.target);
          });
        },
        {
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.08,
        },
      );

      sections.forEach((section) => {
        section.classList.add('scroll-reveal-section');

        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          section.classList.add('is-scroll-visible');
        } else {
          observer?.observe(section);
        }
      });
    };

    const timer = window.setTimeout(() => {
      frame = window.requestAnimationFrame(setup);
    }, 120);

    return () => {
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      delete document.documentElement.dataset.scrollExperience;
    };
  }, [pathname]);

  return <span hidden aria-hidden data-scroll-experience />;
}
