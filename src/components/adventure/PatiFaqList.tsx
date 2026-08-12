'use client';

import { useState } from 'react';
import { CaretDownIcon, Text } from '@/components/ui';

export function PatiFaqList({ faqs }: { faqs: readonly (readonly [string, string])[] }) {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map(([title, content], index) => {
        const isOpen = openItems.has(index);
        const panelId = `pati-faq-panel-${index}`;

        return (
          <article key={title} className="overflow-hidden rounded-card border border-line-strong bg-surface-muted">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="flex min-h-15 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-light transition-colors duration-200 ease-out hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand sm:px-8 sm:text-lg"
            >
              <span>{title}</span>
              <CaretDownIcon className={`size-4 shrink-0 transition-transform duration-300 ease-brand motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              id={panelId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-brand motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <Text weight="light" tone="secondary" pretty className="px-5 pb-5 sm:px-8 sm:pb-6">
                  {content}
                </Text>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
