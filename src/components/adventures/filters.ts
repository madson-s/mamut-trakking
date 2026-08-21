export type DifficultyFilter = 'all' | 'Fácil' | 'Moderado' | 'Desafiador';
export type DifficultyGroup = Exclude<DifficultyFilter, 'all'>;

export type AdventureFilters = {
  location: string;
  duration: string;
  difficulty: DifficultyFilter;
  budget: number;
};

/** Campos que uma aventura precisa expor para ser filtrada. */
export type FilterableAdventure = {
  duration: number;
  difficultyGroup: DifficultyGroup;
  location: string;
  price: number;
};

export const MIN_BUDGET = 50;
export const MAX_BUDGET = 4550;

export const LOCATION_OPTIONS = ['all', 'Lençóis', 'Vale do Capão', 'Palmeiras', 'Ibicoara', 'Guiné'];
export const DURATION_OPTIONS = ['all', '1', '2', '3', '4', '5', '6'];
export const DIFFICULTY_OPTIONS: DifficultyFilter[] = ['all', 'Fácil', 'Moderado', 'Desafiador'];

export const DEFAULT_FILTERS: AdventureFilters = {
  location: 'all',
  duration: 'all',
  difficulty: 'all',
  budget: MAX_BUDGET,
};

export const locationLabel = (value: string) => (value === 'all' ? 'Todos os locais' : value);

export const durationLabel = (value: string) =>
  value === 'all' ? 'Qualquer duração' : `${value} ${value === '1' ? 'dia' : 'dias'}`;

export const difficultyLabel = (value: DifficultyFilter) =>
  value === 'all' ? 'Todos os níveis' : value;

export function matchesFilters(adventure: FilterableAdventure, filters: AdventureFilters) {
  return (
    (filters.location === 'all' || adventure.location === filters.location) &&
    (filters.duration === 'all' || adventure.duration === Number(filters.duration)) &&
    (filters.difficulty === 'all' || adventure.difficultyGroup === filters.difficulty) &&
    adventure.price <= filters.budget
  );
}

/** Filtros ativos, prontos para virar chips removíveis. */
export function activeFilterList(
  filters: AdventureFilters,
  formatBudget: (value: number) => string,
) {
  return [
    filters.location !== 'all'
      ? { id: 'location' as const, label: locationLabel(filters.location), reset: { location: 'all' } }
      : null,
    filters.duration !== 'all'
      ? { id: 'duration' as const, label: durationLabel(filters.duration), reset: { duration: 'all' } }
      : null,
    filters.difficulty !== 'all'
      ? {
          id: 'difficulty' as const,
          label: difficultyLabel(filters.difficulty),
          reset: { difficulty: 'all' as DifficultyFilter },
        }
      : null,
    filters.budget !== MAX_BUDGET
      ? {
          id: 'budget' as const,
          label: `Até ${formatBudget(filters.budget)}`,
          reset: { budget: MAX_BUDGET },
        }
      : null,
  ].filter((filter): filter is NonNullable<typeof filter> => filter !== null);
}
