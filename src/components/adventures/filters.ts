import { ADVENTURES } from './adventures-data';

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
// Teto do filtro = aventura mais cara do catálogo. Com um número fixo, o card
// que passasse dele sumia do hub já no filtro padrão ("qualquer valor").
export const MAX_BUDGET = Math.max(...ADVENTURES.map((a) => a.price));

export const LOCATION_OPTIONS = ['all', 'Lençóis', 'Vale do Capão', 'Ibicoara', 'Guiné'];
export const DURATION_OPTIONS = ['all', '1', '2', '3', '4', '5', '6'];
export const DIFFICULTY_OPTIONS: DifficultyFilter[] = ['all', 'Fácil', 'Moderado', 'Desafiador'];

export const DEFAULT_FILTERS: AdventureFilters = {
  location: 'all',
  duration: 'all',
  difficulty: 'all',
  budget: MAX_BUDGET,
};

/**
 * Rótulos por idioma. Os VALORES dos filtros seguem em português — são chaves
 * de dado (`difficultyGroup`, nome da vila), não texto de interface.
 */
export type FilterLabels = {
  todosLocais: string;
  qualquerDuracao: string;
  todosNiveis: string;
  dia: string;
  dias: string;
  niveis: Record<Exclude<DifficultyFilter, 'all'>, string>;
};

export const locationLabel = (value: string, labels: FilterLabels) =>
  value === 'all' ? labels.todosLocais : value;

export const durationLabel = (value: string, labels: FilterLabels) =>
  value === 'all'
    ? labels.qualquerDuracao
    : `${value} ${value === '1' ? labels.dia : labels.dias}`;

export const difficultyLabel = (value: DifficultyFilter, labels: FilterLabels) =>
  value === 'all' ? labels.todosNiveis : labels.niveis[value];

export function matchesFilters(adventure: FilterableAdventure, filters: AdventureFilters) {
  return (
    (filters.location === 'all' || adventure.location === filters.location) &&
    (filters.duration === 'all' || adventure.duration === Number(filters.duration)) &&
    (filters.difficulty === 'all' || adventure.difficultyGroup === filters.difficulty) &&
    // No teto, o orçamento não limita: fora de /pt o preço tem o acréscimo do
    // guia bilíngue e passaria do teto, calculado em cima do de português.
    (filters.budget >= MAX_BUDGET || adventure.price <= filters.budget)
  );
}

export type AvailableOptions = {
  location: ReadonlySet<string>;
  duration: ReadonlySet<string>;
  difficulty: ReadonlySet<DifficultyFilter>;
};

/**
 * Opções que ainda devolvem resultado, por grupo. Cada opção é testada com os
 * outros filtros ativos e o próprio grupo substituído — ignorar o grupo em
 * avaliação é o que impede a opção escolhida de desabilitar todas as irmãs.
 */
export function availableOptions(
  adventures: readonly FilterableAdventure[],
  filters: AdventureFilters,
): AvailableOptions {
  const yields = (override: Partial<AdventureFilters>) =>
    adventures.some((adventure) => matchesFilters(adventure, { ...filters, ...override }));

  // A opção já escolhida nunca é desabilitada: o preço zera o resultado sem
  // passar por aqui, e desabilitá-la esconderia o caminho de volta.
  return {
    location: new Set(
      LOCATION_OPTIONS.filter((option) => option === filters.location || yields({ location: option })),
    ),
    duration: new Set(
      DURATION_OPTIONS.filter((option) => option === filters.duration || yields({ duration: option })),
    ),
    difficulty: new Set(
      DIFFICULTY_OPTIONS.filter((option) => option === filters.difficulty || yields({ difficulty: option })),
    ),
  };
}

/** Filtros ativos, prontos para virar chips removíveis. */
export function activeFilterList(
  filters: AdventureFilters,
  formatBudget: (value: number) => string,
  labels: FilterLabels,
  ateLabel: string,
) {
  return [
    filters.location !== 'all'
      ? { id: 'location' as const, label: locationLabel(filters.location, labels), reset: { location: 'all' } }
      : null,
    filters.duration !== 'all'
      ? { id: 'duration' as const, label: durationLabel(filters.duration, labels), reset: { duration: 'all' } }
      : null,
    filters.difficulty !== 'all'
      ? {
          id: 'difficulty' as const,
          label: difficultyLabel(filters.difficulty, labels),
          reset: { difficulty: 'all' as DifficultyFilter },
        }
      : null,
    filters.budget !== MAX_BUDGET
      ? {
          id: 'budget' as const,
          label: `${ateLabel} ${formatBudget(filters.budget)}`,
          reset: { budget: MAX_BUDGET },
        }
      : null,
  ].filter((filter): filter is NonNullable<typeof filter> => filter !== null);
}

/* ------------------------------------------------------------------ */
/* Filtros na URL                                                     */
/* ------------------------------------------------------------------ */

/**
 * Os filtros do hub vivem também na query string, para o link poder ser
 * enviado já filtrado: `?local=lencois&dias=2&nivel=moderado&ate=1500`.
 * Nomes e valores são os mesmos em todos os idiomas (o valor é chave de dado,
 * não texto de interface) e sem acento, para o link não virar `%C3%A7`.
 * Filtro no valor padrão não vai para a URL. Valor desconhecido é ignorado.
 */
export const FILTER_PARAMS = { location: 'local', duration: 'dias', difficulty: 'nivel', budget: 'ate' } as const;

const toSlug = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');

const fromSlug = <T extends string>(options: readonly T[], slug: string | null): T | undefined =>
  slug ? options.find((option) => option !== 'all' && toSlug(option) === slug) : undefined;

export function filtersToSearchParams(filters: AdventureFilters): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.location !== 'all') params.set(FILTER_PARAMS.location, toSlug(filters.location));
  if (filters.duration !== 'all') params.set(FILTER_PARAMS.duration, filters.duration);
  if (filters.difficulty !== 'all') params.set(FILTER_PARAMS.difficulty, toSlug(filters.difficulty));
  if (filters.budget < MAX_BUDGET) params.set(FILTER_PARAMS.budget, String(filters.budget));
  return params;
}

export function filtersFromSearchParams(params: Pick<URLSearchParams, 'get'>): AdventureFilters {
  const budget = Number(params.get(FILTER_PARAMS.budget));
  return {
    location: fromSlug(LOCATION_OPTIONS, params.get(FILTER_PARAMS.location)) ?? DEFAULT_FILTERS.location,
    duration: fromSlug(DURATION_OPTIONS, params.get(FILTER_PARAMS.duration)) ?? DEFAULT_FILTERS.duration,
    difficulty: fromSlug(DIFFICULTY_OPTIONS, params.get(FILTER_PARAMS.difficulty)) ?? DEFAULT_FILTERS.difficulty,
    // Mesmos limites e passo do slider (50 em 50).
    budget:
      Number.isFinite(budget) && budget > 0
        ? Math.min(MAX_BUDGET, Math.max(MIN_BUDGET, Math.round(budget / 50) * 50))
        : DEFAULT_FILTERS.budget,
  };
}
