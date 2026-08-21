'use client';

import { Check } from 'lucide-react';
import { Button, Drawer } from '@/components/ui';
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
  type DifficultyFilter,
} from './filters';

export type AdventuresFiltersDrawerProps = {
  open: boolean;
  onClose: () => void;
  filters: AdventureFilters;
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
  onChange,
  onClear,
  resultCount,
  onApply,
}: AdventuresFiltersDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title="Filtrar"
      footer={
        <div className="flex flex-col gap-3">
          <Button onClick={onApply} block size="lg" disabled={resultCount === 0}>
            {resultCount === 0
              ? 'Nenhuma aventura encontrada'
              : `Ver ${resultCount} ${resultCount === 1 ? 'aventura' : 'aventuras'}`}
          </Button>
          <button
            type="button"
            onClick={onClear}
            className={cn(
              'min-h-10 font-body text-sm font-semibold text-content-secondary underline decoration-line-strong underline-offset-4',
              'transition-colors hover:text-content',
              focus.onSurface,
            )}
          >
            Limpar filtros
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-7">
        <FilterGroup label="Duração">
          {DURATION_OPTIONS.map((option) => (
            <FilterChip
              key={option}
              active={filters.duration === option}
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
    </Drawer>
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
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex min-h-11 items-center gap-2 rounded-pill px-4 font-body text-sm font-semibold ring-1',
        'transition-[background-color,color,transform] duration-200 ease-out',
        active
          ? 'bg-brand text-brand-contrast ring-brand'
          : 'bg-transparent text-content ring-line-strong hover:bg-surface-raised',
        press,
        focus.onSurface,
      )}
    >
      {active && <Check aria-hidden className="size-3.5" />}
      {children}
    </button>
  );
}
