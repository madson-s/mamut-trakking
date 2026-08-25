'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Check, CircleDollarSign, MapPin, Mountain, SlidersHorizontal } from 'lucide-react';
import { ArrowRightIcon, Badge, Button, CaretDownIcon, Container, Heading, Text } from '@/components/ui';
import { focus, motion, press } from '@/design/tokens';
import { cn } from '@/lib/cn';
import { scrollToBrand } from '@/lib/scroll';
import { formatPrice, type Locale } from '@/lib/site';
import { AdventuresFiltersDrawer } from './AdventuresFiltersDrawer';
import { ADVENTURES } from './adventures-data';
import { ADVENTURES_CONTENT, type AdventuresContent } from './adventures-content';
import { ADVENTURE_ROUTES } from '@/lib/routes';
import { ADVENTURE_SEGMENT } from '@/lib/site';
import {
  DEFAULT_FILTERS,
  DIFFICULTY_OPTIONS,
  DURATION_OPTIONS,
  LOCATION_OPTIONS,
  MAX_BUDGET,
  MIN_BUDGET,
  activeFilterList,
  availableOptions,
  difficultyLabel,
  durationLabel,
  locationLabel,
  matchesFilters,
  type AdventureFilters,
  type DifficultyFilter,
} from './filters';

type OpenFilter = 'location' | 'duration' | 'difficulty' | 'budget' | null;


const HERO_BACKGROUND = '/img/adventures/adventures-hero-background-hq.webp';
const HERO_INLINE_IMAGE = '/img/adventures/adventures-hero-pill.webp';
const WALKERS = '/svg/about/story-walkers.svg';

const PAGE_TAIL = 'pb-20 lg:pb-28';

/** Junta a parte neutra da aventura com o texto e o link do idioma. */
function aventurasDoIdioma(locale: Locale) {
  const c = ADVENTURES_CONTENT[locale];
  const seg = ADVENTURE_SEGMENT[locale];
  const contato = '/pt/contato';

  return ADVENTURES.map((base) => {
    const rota = base.route && ADVENTURE_ROUTES.find((r) => r.id === base.route);
    return {
      ...base,
      ...c.roteiros[base.id],
      href: rota ? `/${locale}/${seg}/${rota[locale]}` : contato,
    };
  });
}

type Adventure = ReturnType<typeof aventurasDoIdioma>[number];

export function AdventuresHub({ locale = 'pt' }: { locale?: Locale }) {
  const c = ADVENTURES_CONTENT[locale];
  const labels = {
    todosLocais: c.filtros.todosLocais,
    qualquerDuracao: c.filtros.qualquerDuracao,
    todosNiveis: c.filtros.todosNiveis,
    dia: c.filtros.dia,
    dias: c.filtros.dias,
    niveis: c.niveis,
  };
  const aventuras = aventurasDoIdioma(locale);
  const [filters, setFilters] = useState<AdventureFilters>(DEFAULT_FILTERS);
  const { location, duration, difficulty, budget } = filters;
  const updateFilters = (next: Partial<AdventureFilters>) =>
    setFilters((current) => ({ ...current, ...next }));
  const setLocation = (value: string) => updateFilters({ location: value });
  const setDuration = (value: string) => updateFilters({ duration: value });
  const setDifficulty = (value: DifficultyFilter) => updateFilters({ difficulty: value });
  const setBudget = (value: number) => updateFilters({ budget: value });
  const [openFilter, setOpenFilter] = useState<OpenFilter>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!filtersRef.current?.contains(event.target as Node)) setOpenFilter(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenFilter(null);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const filteredAdventures = useMemo(
    () => aventuras.filter((adventure) => matchesFilters(adventure, filters)),
    [aventuras, filters],
  );

  const available = useMemo(() => availableOptions(aventuras, filters), [aventuras, filters]);

  const groups = useMemo(
    () => ({
      trekking: filteredAdventures.filter((item) => item.category === 'trekking'),
      dayTours: filteredAdventures.filter((item) => item.category === 'day-tour'),
      packages: filteredAdventures.filter((item) => item.category === 'package'),
    }),
    [filteredAdventures],
  );

  const lastGroup =
    groups.packages.length > 0
      ? 'packages'
      : groups.dayTours.length > 0
        ? 'dayTours'
        : groups.trekking.length > 0
          ? 'trekking'
          : null;

  const activeFilters = activeFilterList(filters, (value) => formatPrice(value, locale), labels, c.filtros.ate);

  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setOpenFilter(null);
  };

  const scrollToResults = () => {
    setOpenFilter(null);
    setDrawerOpen(false);
    const section = document.getElementById('todas-as-aventuras');
    if (!section) return;

    // Alvo calculado à mão: o scrollIntoView respeitaria o scroll-padding-top
    // de 6rem do html e pararia 96px abaixo do topo da seção.
    scrollToBrand(section.getBoundingClientRect().top + window.scrollY);
  };

  return (
    <div className="bg-surface text-content">
      <section className="adventures-hub-hero relative z-10 -mt-20 overflow-hidden pt-20 pb-18 text-on-media lg:overflow-visible lg:pb-34">
        <Image
          src={HERO_BACKGROUND}
          alt="Morro do Pai Inácio na Chapada Diamantina"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="-z-10 object-cover object-bottom"
        />

        <Container className="mt-14.5 text-center lg:mt-10">
          <h1 className="mx-auto max-w-190 text-balance font-display text-[38px] leading-[1.08] tracking-tight text-[#f4f4f4] sm:text-[44px] lg:text-[48px] lg:leading-[1.1]">
            <span className="block">{c.hero.linha1}</span>
            <span className="flex items-center justify-center gap-3">
              {c.hero.linha2}
              <span className="relative inline-block h-[38px] w-[76px] shrink-0 overflow-hidden rounded-pill sm:h-[44px] sm:w-[88px] lg:h-[48px] lg:w-[96px]">
                <Image src={HERO_INLINE_IMAGE} alt="Morro do Pai Inácio" fill sizes="96px" className="object-cover" />
              </span>
            </span>
            <span className="block text-brand-on-media">{c.hero.linha3}</span>
          </h1>

          <Button
            onClick={() => setDrawerOpen(true)}
            icon={<SlidersHorizontal aria-hidden className="size-5" />}
            arrow
            block
            size="lg"
            justify="between"
            aria-haspopup="dialog"
            aria-expanded={drawerOpen}
            className="mt-24 lg:hidden"
          >
            {c.hero.filtrar}
          </Button>
        </Container>

        <Container className="mt-6 hidden lg:block">
          <div
            ref={filtersRef}
            className="grid h-21 grid-cols-[repeat(4,minmax(0,1fr))_219px] items-center rounded-panel-lg border border-line bg-surface-muted px-6 text-content shadow-popover"
          >
            <FilterPopover
              id="location"
              label={c.filtros.local}
              icon={<MapPin aria-hidden className="size-4" />}
              value={locationLabel(location, labels)}
              active={location !== 'all'}
              isOpen={openFilter === 'location'}
              onToggle={() => setOpenFilter(openFilter === 'location' ? null : 'location')}
            >
              <FilterChipGrid>
                {LOCATION_OPTIONS.map((option) => (
                  <FilterChip key={option} active={location === option} disabled={!available.location.has(option)} onClick={() => { setLocation(option); setOpenFilter(null); }}>
                    {option === 'all' ? c.filtros.todas : option}
                  </FilterChip>
                ))}
              </FilterChipGrid>
            </FilterPopover>

            <FilterPopover
              id="duration"
              label={c.filtros.duracao}
              icon={<CalendarDays aria-hidden className="size-4" />}
              value={durationLabel(duration, labels)}
              active={duration !== 'all'}
              isOpen={openFilter === 'duration'}
              onToggle={() => setOpenFilter(openFilter === 'duration' ? null : 'duration')}
            >
              <FilterChipGrid>
                {DURATION_OPTIONS.map((option) => (
                  <FilterChip key={option} active={duration === option} disabled={!available.duration.has(option)} onClick={() => { setDuration(option); setOpenFilter(null); }}>
                    {option === 'all' ? c.filtros.qualquer : durationLabel(option, labels)}
                  </FilterChip>
                ))}
              </FilterChipGrid>
            </FilterPopover>

            <FilterPopover
              id="difficulty"
              label={c.filtros.dificuldade}
              icon={<Mountain aria-hidden className="size-4" />}
              value={difficultyLabel(difficulty, labels)}
              active={difficulty !== 'all'}
              isOpen={openFilter === 'difficulty'}
              onToggle={() => setOpenFilter(openFilter === 'difficulty' ? null : 'difficulty')}
            >
              <FilterChipGrid>
                {DIFFICULTY_OPTIONS.map((option) => (
                  <FilterChip key={option} active={difficulty === option} disabled={!available.difficulty.has(option)} onClick={() => { setDifficulty(option); setOpenFilter(null); }}>
                    {option === 'all' ? c.filtros.todos : c.niveis[option]}
                  </FilterChip>
                ))}
              </FilterChipGrid>
            </FilterPopover>

            <FilterPopover
              id="budget"
              label={c.filtros.investimento}
              icon={<CircleDollarSign aria-hidden className="size-4" />}
              value={budget === MAX_BUDGET ? c.filtros.qualquerValor : `${c.filtros.ate} ${formatPrice(budget, locale)}`}
              active={budget !== MAX_BUDGET}
              isOpen={openFilter === 'budget'}
              align="right"
              onToggle={() => setOpenFilter(openFilter === 'budget' ? null : 'budget')}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-end justify-between gap-4">
                  <Text size="xs" tone="secondary" className="uppercase tracking-[0.14em]">{c.filtros.ate}</Text>
                  <Text size="xl" weight="semibold" tone="onMedia" className="tabular-nums">{formatPrice(budget, locale)}</Text>
                </div>
                <input
                  className="adventures-range w-full cursor-pointer accent-brand"
                  type="range"
                  min={MIN_BUDGET}
                  max={MAX_BUDGET}
                  step={50}
                  value={budget}
                  onChange={(event) => setBudget(Number(event.target.value))}
                  aria-label={c.filtros.investimentoMax}
                />
                <div className="flex justify-between font-body text-xs font-light text-content-muted tabular-nums">
                  <span>{formatPrice(MIN_BUDGET, locale)}</span><span>{formatPrice(MAX_BUDGET, locale)}</span>
                </div>
              </div>
            </FilterPopover>

            <Button onClick={scrollToResults} arrow size="lg" className="ml-3 min-w-51.75">{c.filtros.escolher}</Button>
          </div>
        </Container>

        {activeFilters.length > 0 ? (
          <Container className="mt-4 hidden lg:block">
            <div className="flex min-h-10 items-center justify-start gap-2">
              {activeFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => updateFilters(filter.reset)}
                  className={cn(
                    'inline-flex min-h-10 items-center gap-2 rounded-pill border border-white/70 px-4 font-body text-sm font-semibold text-white',
                    'transition-[background-color,border-color,transform] duration-200 ease-out hover:border-white hover:bg-white/8',
                    press,
                    focus.onMedia,
                  )}
                  aria-label={`${c.hero.removerFiltro} ${filter.label}`}
                >
                  {filter.label}
                  <span aria-hidden className="text-white/65">×</span>
                </button>
              ))}
              <button
                type="button"
                onClick={clearFilters}
                className={cn(
                  'min-h-10 px-2 font-body text-sm font-semibold text-white underline decoration-white/55 underline-offset-4',
                  'transition-colors hover:text-brand-strong',
                  press,
                  focus.onMedia,
                )}
              >
                {c.hero.limpar}
              </button>
            </div>
          </Container>
        ) : (
          <button
            type="button"
            onClick={scrollToResults}
            className={cn(
              'mx-auto mt-10 flex w-fit items-center gap-2 font-body text-base font-light text-white/65',
              'transition-colors hover:text-white',
              focus.onMedia,
            )}
          >
            {c.hero.explorar}
            <span className="grid size-5.5 place-items-center rounded-full border border-current">
              <ArrowRightIcon aria-hidden className="size-3 rotate-90" />
            </span>
          </button>
        )}
      </section>

      <AdventuresFiltersDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filters={filters}
        available={available}
        content={c}
        locale={locale}
        onChange={updateFilters}
        onClear={clearFilters}
        resultCount={filteredAdventures.length}
        onApply={scrollToResults}
      />

      <section id="todas-as-aventuras" className={cn('bg-surface-muted pt-15', lastGroup === 'trekking' && PAGE_TAIL)} aria-labelledby="trekking-heading">
        <AdventureSection
          id="trekking-heading"
          title={c.secoes.trekking.titulo}
          description={c.secoes.trekking.descricao}
          adventures={groups.trekking}
          content={c}
          locale={locale}
          walkers
        />
      </section>

      {groups.dayTours.length > 0 && (
        <section className={cn('bg-surface-muted pt-16', lastGroup === 'dayTours' && PAGE_TAIL)} aria-labelledby="day-tours-heading">
          <AdventureSection
            id="day-tours-heading"
            title={c.secoes.dayTours.titulo}
            description={c.secoes.dayTours.descricao}
            adventures={groups.dayTours}
            content={c}
            locale={locale}
          />
        </section>
      )}

      {groups.packages.length > 0 && (
        <section className={cn('bg-surface-muted pt-16', lastGroup === 'packages' && PAGE_TAIL)} aria-labelledby="packages-heading">
          <AdventureSection
            id="packages-heading"
            title={c.secoes.pacotes.titulo}
            description={c.secoes.pacotes.descricao}
            adventures={groups.packages}
            content={c}
            locale={locale}
            featured
          />
        </section>
      )}

      {filteredAdventures.length === 0 && (
        <section className="bg-surface-muted pb-24">
          <Container>
            <div className="rounded-panel bg-surface-raised px-6 py-16 text-center shadow-card">
              <Heading as="h2" size="card" balance>{c.vazio.titulo}</Heading>
              <Text tone="secondary" pretty className="mx-auto mt-3 max-w-lg">
                {c.vazio.texto}
              </Text>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}

function FilterPopover({ id, label, icon, value, active = false, isOpen, align = 'left', onToggle, children }: {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  active?: boolean;
  isOpen: boolean;
  align?: 'left' | 'right';
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-14 items-center border-r border-line px-5">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'flex h-full w-full items-center gap-3 rounded-pill text-left transition-[background-color,box-shadow] duration-200 ease-out',
          active && 'bg-surface-raised px-3 shadow-[inset_0_0_0_1px_var(--brand)]',
          focus.onSurface,
        )}
        aria-expanded={isOpen}
        aria-controls={`${id}-popover`}
      >
        <span className="shrink-0 text-brand-strong">{icon}</span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="font-body text-[11px] font-semibold uppercase tracking-[0.13em] text-brand-strong">{label}</span>
          <span className={cn('truncate font-body text-sm font-light', active ? 'text-content' : 'text-content-secondary')}>{value}</span>
        </span>
        <CaretDownIcon aria-hidden className={cn('size-4 shrink-0 text-content-secondary transition-transform', motion.base, isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div
          id={`${id}-popover`}
          className={cn(
            'absolute top-[calc(100%+12px)] z-40 w-[320px] rounded-card bg-surface-muted p-5 text-content shadow-popover ring-1 ring-line',
            align === 'right' ? 'right-0' : 'left-0',
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function FilterChipGrid({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}


function FilterChip({ active, disabled = false, onClick, children }: { active: boolean; disabled?: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex min-h-11 items-center gap-2 rounded-pill px-4 font-body text-sm font-semibold ring-1 transition-[background-color,color,transform] duration-200 ease-out',
        active ? 'bg-brand text-brand-contrast ring-brand' : 'bg-transparent text-content ring-line-strong hover:bg-surface-raised hover:ring-line-contrast',
        disabled && 'cursor-not-allowed opacity-35 hover:bg-transparent hover:ring-line-strong active:scale-100',
        press,
        focus.onSurface,
      )}
    >
      {active && <Check aria-hidden className="size-3.5" />}
      {children}
    </button>
  );
}

function AdventureSection({ id, title, description, adventures, content, locale, walkers = false, featured = false }: {
  id: string;
  title: string;
  description: string;
  adventures: Adventure[];
  content: AdventuresContent;
  locale: Locale;
  walkers?: boolean;
  featured?: boolean;
}) {
  if (adventures.length === 0) return null;

  return (
    <Container className="flex flex-col gap-12 lg:gap-16">
      <div className={cn('grid items-end gap-8', walkers && 'lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.65fr)]')}>
        <div className="flex flex-col gap-4">
          <Heading id={id} as="h2" size="section" balance>{title}</Heading>
          <Text size="lg" weight="light" tone="secondary" pretty className="max-w-2xl">{description}</Text>
        </div>
        {walkers && (
          <Image src={WALKERS} alt="" width={290} height={114} unoptimized className="hidden h-31.25 w-auto justify-self-end lg:block" />
        )}
      </div>

      <div aria-live="polite" className={cn('grid gap-5 md:grid-cols-2 lg:grid-cols-3', featured && 'lg:gap-6')}>
        {adventures.map((adventure) => (
          <AdventureCard
            key={adventure.id}
            adventure={adventure}
            content={content}
            locale={locale}
            featured={featured}
          />
        ))}
      </div>
    </Container>
  );
}

function AdventureCard({
  adventure,
  content,
  locale,
  featured = false,
}: {
  adventure: Adventure;
  content: AdventuresContent;
  locale: Locale;
  featured?: boolean;
}) {
  const difficultyEmoji = adventure.difficultyGroup === 'Fácil' ? '🟢' : adventure.difficultyGroup === 'Moderado' ? '🟡' : '🔴';

  return (
    <Link
      href={adventure.href}
      className={cn(
        'group relative flex min-h-132 flex-col overflow-hidden rounded-card-lg border border-line-strong bg-surface-raised text-content shadow-card',
        'transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-float',
        featured && 'min-h-144',
        motion.base,
        press,
        focus.onSurface,
      )}
      aria-label={`${content.card.conhecer} ${adventure.title}`}
    >
      <div className={cn('relative aspect-[1.28] overflow-hidden bg-media-backdrop', featured && 'aspect-[1.18]')}>
        <Image
          src={adventure.image}
          alt={`Paisagem de ${adventure.title}`}
          fill
          priority={adventure.title === 'Cachoeira do Palmital 2 Dias'}
          sizes="(min-width: 1024px) 390px, (min-width: 768px) 50vw, 100vw"
          className="object-cover shadow-image-outline transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/5" />
        <Badge variant="outlineOnMedia" size="sm" className="absolute left-5 top-5 z-10 bg-black/12 font-medium backdrop-blur-sm">
          {adventure.duration} {adventure.duration === 1 ? content.card.dia : content.card.dias}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <Heading as="h3" size="card" balance className="min-h-[2lh]">{adventure.title}</Heading>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" size="sm">
            <span aria-hidden>{difficultyEmoji}</span>
            {adventure.difficulty}
          </Badge>
          <Badge variant="outline" size="sm">{adventure.distance}</Badge>
          <Badge variant="outline" size="sm">{adventure.location}</Badge>
        </div>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-5">
          <div>
            <Text size="xs" weight="light" tone="secondary">{content.card.apartirDe}</Text>
            <Text size="xl" weight="semibold" className="tabular-nums">{formatPrice(adventure.price, locale)}</Text>
          </div>
          <span className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-pill bg-brand px-4 font-body text-sm font-semibold whitespace-nowrap text-brand-contrast transition-[background-color,transform] duration-300 ease-out group-hover:bg-brand-hover">
            <span>{content.card.explorar}</span>
            <ArrowRightIcon aria-hidden className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
