'use client';

import { useEffect, useState } from 'react';
import { Heading, Text } from '@/components/ui';
import { TransferBookingTrigger } from './TransferBookingTrigger';

export function TransferMobileBookingDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('transfer-hero');
    if (!hero) return;

    const updateVisibility = () => {
      setVisible(hero.getBoundingClientRect().bottom < 72);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 mx-auto hidden w-full max-w-105 items-center justify-between gap-4 rounded-t-panel border-x border-t border-line-strong bg-surface-muted px-5 pt-3.5 pb-[max(22px,env(safe-area-inset-bottom))] shadow-popover transition-[opacity,transform,visibility] duration-300 ease-brand max-lg:flex ${
        visible
          ? 'visible translate-y-0 opacity-100'
          : 'invisible translate-y-6 opacity-0'
      }`}
    >
      <div className="min-w-0">
        <Heading as="p" size="quote" className="tabular-nums">
          R$ 90
        </Heading>
        <Text tone="secondary" className="max-w-30 text-[11px] leading-[1.25]">
          a partir de, por pessoa
        </Text>
      </div>
      <TransferBookingTrigger size="lg" className="min-h-12 shrink-0 px-5">
        Reservar transfer
      </TransferBookingTrigger>
    </div>
  );
}
