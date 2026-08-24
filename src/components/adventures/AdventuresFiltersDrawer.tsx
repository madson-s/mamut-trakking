'use client';

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { Button, Heading, IconButton, XIcon } from '@/components/ui';
import { MorphingModal } from '@/components/motion/morphing-modal';
import { focus, press } from '@/design/tokens';
import { cn } from '@/lib/cn';
import { formatPrice } from '@/lib/site';
import {
  DIFFICULTY_OPTIONS,
  DURATION_OPTIONS,
  LOCATION_OPTIONS,
  MAX_BUDGET,
  MIN_BUDGET,
  durationLabel,
  type AdventureFilters,
  type AvailableOptions,
  type DifficultyFilter,
} from './filters';

export type AdventuresFiltersDrawerProps = {
  open: boolean;
  onClose: () => void;
  filters: AdventureFilters;
  /** Opções que ainda devolvem resultado — as de fora vêm desabilitadas. */
  available: AvailableOptions;
  onChange: (next: Partial<AdventureFilters>) => void;
  onClear: () => void;
  /** Quantidade de aventuras que os filtros atuais retornam. */
  resultCount: number;
  /** Aplica e leva o leitor até os resultados. */
  onApply: () => void;
};

export function AdventuresFiltersDrawer({
  open,
  onClose,
  filters,
  available,
  onChange,
  onClear,
  resultCount,
  onApply,
}: AdventuresFiltersDrawerProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  // Scroll-lock e Escape ficam por conta do MorphingModal; aqui só o focus trap.
  useEffect(() => {
    if (!open) return;

    const focusable = sheetRef.current?.querySelector<HTMLElement>('button, a[href]');
    focusable?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !sheetRef.current) return;

      const elements = Array.from(
        sheetRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]'),
      );
      const first = elements[0];
      const last = elements.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <MorphingModal
      viewId={open ? 'filters' : null}
      onClose={onClose}
      placement="bottom"
      labelledBy="adventures-filters-title"
      closeLabel="Fechar filtros"
      className="max-w-98 lg:max-w-130"
    >
      <div ref={sheetRef}>
        <div aria-hidden className="mx-auto mb-5 h-1 w-10 rounded-pill bg-content-muted lg:hidden" />

        <header className="mb-5 flex h-9 items-center justify-between">
          <Heading id="adventures-filters-title" as="h2" size="quote">Filtrar</Heading>
          <IconButton
            label="Fechar filtros"
            variant="outline"
            size="sm"
            onClick={onClose}
            className="relative !size-9 after:absolute after:-inset-1 after:content-['']"
          >
            <XIcon className="size-4" />
          </IconButton>
        </header>

        <div className="flex flex-col gap-7">
          <FilterGroup label="Duração">
            {DURATION_OPTIONS.map((option) => (
              <FilterChip
                key={option}
                active={filters.duration === option}
                disabled={!available.duration.has(option)}
                onClick={() => onChange({ duration: option })}
              >
                {option === 'all' ? 'Qualquer' : durationLabel(option)}
              </FilterChip>
            ))}
          </FilterGroup>

          <FilterGroup label="Dificuldade">
            {DIFFICULTY_OPTIONS.map((option) => (
              <FilterChip
                key={option}
                active={filters.difficulty === option}
                disabled={!available.difficulty.has(option as DifficultyFilter)}
                onClick={() => onChange({ difficulty: option as DifficultyFilter })}
              >
                {option === 'all' ? 'Todos' : option}
              </FilterChip>
            ))}
          </FilterGroup>

          <FilterGroup label="Origem">
            {LOCATION_OPTIONS.map((option) => (
              <FilterChip
                key={option}
                active={filters.location === option}
                disabled={!available.location.has(option)}
                onClick={() => onChange({ location: option })}
              >
                {option === 'all' ? 'Todas' : option}
              </FilterChip>
            ))}
          </FilterGroup>

          <div className="flex flex-col gap-3">
            <p className="font-body text-[11px] font-semibold tracking-[0.14em] text-content-muted uppercase">
              Preço · até <span className="text-content">{formatPrice(filters.budget, 'pt')}</span>
            </p>
            <input
              className="adventures-range w-full cursor-pointer accent-brand"
              type="range"
              min={MIN_BUDGET}
              max={MAX_BUDGET}
              step={50}
              value={filters.budget}
              onChange={(event) => onChange({ budget: Number(event.target.value) })}
              aria-label="Investimento máximo"
            />
          </div>
        </div>

        <Button onClick={onApply} block size="lg" disabled={resultCount === 0} className="mt-7">
          {resultCount === 0
            ? 'Nenhuma aventura encontrada'
            : `Ver ${resultCount} ${resultCount === 1 ? 'aventura' : 'aventuras'}`}
        </Button>
        <button
          type="button"
          onClick={onClear}
          className={cn(
            'mt-3 min-h-10 w-full font-body text-sm font-semibold text-content-secondary underline decoration-line-strong underline-offset-4',
            'transition-colors hover:text-content',
            focus.onSurface,
          )}
        >
          Limpar filtros
        </button>
      </div>
    </MorphingModal>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-body text-[11px] font-semibold tracking-[0.14em] text-content-muted uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  disabled = false,
  onClick,
  children,
}: {
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      className={cn(
        'inline-flex min-h-6 items-center gap-2 rounded-pill px-2 font-body text-sm font-semibold ring-1',
        'transition-[background-color,color,transform] duration-200 ease-out',
        active
          ? 'bg-brand text-brand-contrast ring-brand'
          : 'bg-transparent text-content ring-line-strong hover:bg-surface-raised',
        disabled && 'cursor-not-allowed opacity-35 hover:bg-transparent active:scale-100',
        press,
        focus.onSurface,
      )}
    >
      {active && <Check aria-hidden className="size-3.5" />}
      {children}
    </button>
  );
}
