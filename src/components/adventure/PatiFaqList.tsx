'use client';

import { useRef, useState } from 'react';
import { CaretDownIcon, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { scrollToBrand } from '@/lib/scroll';

type FaqBase = { title: string };

type ChecklistFaq = FaqBase & {
  type: 'checklist';
  intro: string;
  requiredColumns: readonly (readonly string[])[];
  recommendedColumns: readonly (readonly string[])[];
  note: string;
};

type IncludedFaq = FaqBase & {
  type: 'included';
  included: readonly string[];
  excluded: readonly string[];
};

type SafetyFaq = FaqBase & {
  type: 'safety';
  lead: string;
  body: string;
  warning: string;
  footer: string;
};

type PaymentFaq = FaqBase & {
  type: 'payment';
  paragraphs: readonly string[];
};

type CancellationFaq = FaqBase & {
  type: 'cancellation';
  intro: string;
  refunds: readonly (readonly [string, string])[];
  paragraphs: readonly string[];
};

type TechnicalFaq = FaqBase & {
  type: 'technical';
  facts: readonly (readonly [string, string])[];
  requirements: readonly string[];
  documents: readonly (readonly [string, string])[];
};

export type PatiFaqItem =
  | ChecklistFaq
  | IncludedFaq
  | SafetyFaq
  | PaymentFaq
  | CancellationFaq
  | TechnicalFaq;

/* Respiro entre o topo do item e o topo da viewport ao abrir/fechar. */
const SCROLL_OFFSET = 16;

export function PatiFaqList({ faqs }: { faqs: readonly PatiFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const item = itemRefs.current[index];

    if (item) {
      // O item aberto some no mesmo clique: se ele estava acima, a altura que
      // ele perde tem de sair do alvo, senão o scroll para baixo demais.
      const closing =
        openIndex !== null && openIndex < index ? panelRefs.current[openIndex] : null;
      const shift = closing?.getBoundingClientRect().height ?? 0;

      scrollToBrand(item.getBoundingClientRect().top + window.scrollY - shift - SCROLL_OFFSET);
    }

    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `pati-faq-panel-${index}`;

        return (
          <article
            key={faq.title}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className={cn(
              'overflow-hidden rounded-card border bg-surface-muted transition-[border-color,box-shadow] duration-300 ease-brand',
              isOpen ? 'border-brand shadow-card' : 'border-line-strong',
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className={cn(
                'flex min-h-15 w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-light transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand sm:min-h-18 sm:px-10 sm:text-lg',
                !isOpen && 'hover:bg-surface-raised',
              )}
            >
              <span>{faq.title}</span>
              <CaretDownIcon
                className={cn(
                  'size-4 shrink-0 transition-transform duration-300 ease-brand motion-reduce:transition-none',
                  isOpen && 'rotate-180 text-brand-strong',
                )}
              />
            </button>

            <div
              id={panelId}
              ref={(node) => {
                panelRefs.current[index] = node;
              }}
              aria-hidden={!isOpen}
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-350 ease-brand motion-reduce:transition-none',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden border-t border-line">
                <FaqContent faq={faq} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function FaqContent({ faq }: { faq: PatiFaqItem }) {
  if (faq.type === 'checklist') {
    return (
      <div className="flex flex-col gap-8 px-6 pt-7 pb-8 sm:px-10 sm:pt-9 sm:pb-10 lg:px-12">
        <Text weight="light" tone="secondary" pretty>{faq.intro}</Text>
        <FaqListGroup title="Obrigatórios" columns={faq.requiredColumns} marker="required" />
        <FaqListGroup title="Recomendados" columns={faq.recommendedColumns} marker="dot" />
        <FaqCallout>{faq.note}</FaqCallout>
      </div>
    );
  }

  if (faq.type === 'included') {
    return (
      <div className="grid gap-10 px-6 pt-7 pb-8 sm:px-10 sm:pt-9 sm:pb-10 md:grid-cols-2 md:gap-14 lg:px-12">
        <FaqListGroup title="Incluso" columns={[faq.included]} marker="check" />
        <FaqListGroup title="Não incluso" columns={[faq.excluded]} marker="cross" />
      </div>
    );
  }

  if (faq.type === 'safety') {
    return (
      <div className="flex flex-col gap-7 px-6 pt-7 pb-8 sm:px-10 sm:pt-9 sm:pb-10 lg:px-12">
        <p className="text-xl font-semibold text-content sm:text-2xl">{faq.lead}</p>
        <Text weight="light" tone="secondary" leading="relaxed" pretty>{faq.body}</Text>
        <div className="flex flex-col gap-3">
          <FaqLabel>Riscos e limitações — leia com atenção</FaqLabel>
          <FaqCallout>{faq.warning}</FaqCallout>
        </div>
        <Text weight="light" tone="secondary" leading="relaxed" pretty>{faq.footer}</Text>
      </div>
    );
  }

  if (faq.type === 'payment') {
    return (
      <div className="flex flex-col gap-6 px-6 pt-7 pb-8 sm:px-10 sm:pt-9 sm:pb-10 lg:px-12">
        {faq.paragraphs.map((paragraph) => (
          <Text key={paragraph} weight="light" tone="secondary" leading="relaxed" pretty>
            {paragraph}
          </Text>
        ))}
      </div>
    );
  }

  if (faq.type === 'cancellation') {
    return (
      <div className="flex flex-col gap-8 px-6 pt-7 pb-8 sm:px-10 sm:pt-9 sm:pb-10 lg:px-12">
        <Text weight="light" tone="secondary" leading="relaxed" pretty>{faq.intro}</Text>
        <dl className="overflow-hidden rounded-control border border-line">
          {faq.refunds.map(([period, refund]) => (
            <div key={period} className="grid grid-cols-[minmax(0,1fr)_auto] gap-5 border-b border-line px-4 py-2.5 last:border-b-0 sm:px-5">
              <dt className="font-light text-content-secondary">{period}</dt>
              <dd className="text-right font-semibold text-content">{refund}</dd>
            </div>
          ))}
        </dl>
        {faq.paragraphs.map((paragraph) => (
          <Text key={paragraph} weight="light" tone="secondary" leading="relaxed" pretty>
            {paragraph}
          </Text>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 px-6 pt-7 pb-8 sm:px-10 sm:pt-9 sm:pb-10 lg:px-12">
      <dl className="overflow-hidden rounded-control border border-line">
        {faq.facts.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-5 border-b border-line px-4 py-2.5 last:border-b-0 sm:px-5">
            <dt className="font-light text-content-secondary">{label}</dt>
            <dd className="max-w-80 text-right font-semibold text-content">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-3">
        <FaqLabel>Requisitos</FaqLabel>
        <ul className="flex flex-col gap-2.5 text-content-secondary">
          {faq.requirements.map((requirement) => (
            <li key={requirement} className="flex gap-3 font-light">
              <span aria-hidden className="text-content-muted">—</span>
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <FaqLabel>Documentos</FaqLabel>
        <div className="flex flex-col items-start gap-2.5">
          {faq.documents.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-3 text-content underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-brand-strong focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <span aria-hidden className="text-brand-strong transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none">→</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqListGroup({
  title,
  columns,
  marker,
}: {
  title: string;
  columns: readonly (readonly string[])[];
  marker: 'required' | 'dot' | 'check' | 'cross';
}) {
  return (
    <div className="flex flex-col gap-5">
      <FaqLabel>{title}</FaqLabel>
      <div className={cn('grid gap-x-14 gap-y-4', columns.length > 1 && 'md:grid-cols-2')}>
        {columns.map((items, columnIndex) => (
          <ul key={columnIndex} className="flex flex-col gap-3.5 text-content-secondary">
            {items.map((item) => (
              <li key={item} className="flex gap-3 font-light">
                <FaqMarker variant={marker} />
                <span>{marker === 'required' ? `* ${item}` : item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function FaqMarker({ variant }: { variant: 'required' | 'dot' | 'check' | 'cross' }) {
  const symbol = variant === 'check' ? '✓' : variant === 'cross' ? '×' : '•';

  return (
    <span
      aria-hidden
      className={cn(
        'w-3 shrink-0 text-center font-semibold',
        variant === 'cross' ? 'text-content-muted' : 'text-brand-strong',
      )}
    >
      {symbol}
    </span>
  );
}

function FaqLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.06em] text-content-muted uppercase sm:text-sm">
      {children}
    </p>
  );
}

function FaqCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-control border-l-4 border-brand bg-surface-sunken px-5 py-5 text-content-secondary shadow-chip sm:px-6">
      <Text weight="light" tone="inherit" leading="relaxed" pretty>{children}</Text>
    </div>
  );
}
