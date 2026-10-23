'use client';

import { useId, useRef, useState } from 'react';
import { CaretDownIcon, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { scrollToBrand } from '@/lib/scroll';

type TransferFaq = {
  question: string;
  answer: string;
};

const SCROLL_OFFSET = 16;

/**
 * A mesma mecânica do FAQ do Vale do Pati: um item aberto por vez,
 * animação por grid e correção de scroll ao alternar perguntas.
 */
export function TransferFaqList({ faqs }: { faqs: readonly TransferFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const listId = useId();
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const item = itemRefs.current[index];

    if (item) {
      const closing =
        openIndex !== null && openIndex < index ? panelRefs.current[openIndex] : null;
      const shift = closing?.getBoundingClientRect().height ?? 0;
      scrollToBrand(item.getBoundingClientRect().top + window.scrollY - shift - SCROLL_OFFSET);
    }

    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${listId}-panel-${index}`;

        return (
          <article
            key={faq.question}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className={cn(
              'overflow-hidden rounded-card border bg-surface transition-[border-color,box-shadow,transform] duration-300 ease-brand',
              isOpen
                ? 'border-brand shadow-card'
                : 'border-line-strong hover:-translate-y-0.5 hover:border-line-contrast',
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className={cn(
                'flex min-h-18 w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left font-medium transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand sm:px-7',
                !isOpen && 'hover:bg-surface-raised',
              )}
            >
              <span>{faq.question}</span>
              <span
                aria-hidden
                className={cn(
                  'flex size-9 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color] duration-300',
                  isOpen
                    ? 'border-brand bg-brand text-brand-contrast'
                    : 'border-line-strong text-content-secondary',
                )}
              >
                <CaretDownIcon
                  className={cn(
                    'size-4 transition-transform duration-300 ease-brand motion-reduce:transition-none',
                    isOpen && 'rotate-180',
                  )}
                />
              </span>
            </button>

            <div
              id={panelId}
              ref={(node) => {
                panelRefs.current[index] = node;
              }}
              aria-hidden={!isOpen}
              className={cn(
                'grid transition-[grid-template-rows,opacity,filter] duration-350 ease-brand motion-reduce:transition-none',
                isOpen
                  ? 'grid-rows-[1fr] opacity-100 blur-none'
                  : 'grid-rows-[0fr] opacity-0 blur-xs',
              )}
            >
              <div className="overflow-hidden border-t border-line">
                <Text
                  size="sm"
                  weight="light"
                  tone="secondary"
                  leading="relaxed"
                  pretty
                  className="px-5 py-6 sm:px-7"
                >
                  {faq.answer}
                </Text>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
