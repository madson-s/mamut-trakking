'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Check, CircleDollarSign, MapPin, Mountain, SlidersHorizontal } from 'lucide-react';
import { ArrowRightIcon, Badge, Button, CaretDownIcon, Container, Heading, Text } from '@/components/ui';
import { focus, motion, press } from '@/design/tokens';
import { cn } from '@/lib/cn';
import { formatPrice } from '@/lib/site';

type AdventureCategory = 'trekking' | 'day-tour' | 'package';
type DifficultyFilter = 'all' | 'Fácil' | 'Moderado' | 'Desafiador';
type DifficultyGroup = Exclude<DifficultyFilter, 'all'>;
type OpenFilter = 'location' | 'duration' | 'difficulty' | 'budget' | null;

type Adventure = {
  category: AdventureCategory;
  href: string;
  image: string;
  title: string;
  duration: number;
  difficulty: string;
  difficultyGroup: DifficultyGroup;
  distance: string;
  location: string;
  price: number;
};

const A = '/img/adventures/home/';
const H = '/img/home_backgroud/';
const V = '/img/vale-do-pati/';
const CONTACT = '/pt/contato';

const ADVENTURES: Adventure[] = [
  ['trekking', '/pt/aventuras/cachoeira-do-palmital', `${A}cachoeira-do-palmital.jpeg`, 'Cachoeira do Palmital 2 Dias', 2, 'Moderado', 'Moderado', '22 km', 'Lençóis', 1350],
  ['trekking', '/pt/aventuras/trilha-aguas-claras', `${A}trilha-aguas-claras.jpg`, 'Trilha Águas Claras 2 Dias', 2, 'Fácil', 'Fácil', '23 km', 'Lençóis', 1150],
  ['trekking', '/pt/aventuras/vale-do-pati-5-dias', `${A}vale-do-pati-5-dias.jpeg`, 'Travessia Vale do Pati 5 Dias', 5, 'Moderado / Difícil', 'Desafiador', '70 km', 'Lençóis', 2750],
  ['trekking', '/pt/aventuras/vale-do-pati-3-dias', `${A}vale-do-pati-3-dias.jpeg`, 'Vale do Pati 3 Dias', 3, 'Moderado', 'Moderado', '45 km', 'Lençóis', 1500],
  ['trekking', '/pt/aventuras/vale-do-pati-4-dias', `${A}vale-do-pati-4-dias.jpeg`, 'Vale do Pati 4 Dias', 4, 'Moderado / Difícil', 'Desafiador', '62 km', 'Lençóis', 2250],
  ['trekking', '/pt/aventuras/cachoeira-do-mixila', `${A}cachoeira-do-mixila.jpeg`, 'Cachoeira do Mixila 2 Dias', 2, 'Moderado / Difícil', 'Desafiador', '24 km', 'Lençóis', 1200],
  ['trekking', CONTACT, `${H}home_backgroud_crop_04_1x.webp`, 'Cachoeira da Fumaça por Baixo', 3, 'Moderado / Difícil', 'Desafiador', '38 km', 'Vale do Capão', 1450],
  ['trekking', CONTACT, `${H}home_backgroud_04_no_crop_1x.webp`, 'Cachoeira da Fumaça 360', 3, 'Moderado / Difícil', 'Desafiador', '38 km', 'Vale do Capão', 1450],
  ['trekking', CONTACT, `${V}vale-do-pati-08.webp`, 'Cachoeira do Fundão + Vinte e Um', 3, 'Muito difícil', 'Desafiador', '24 km', 'Vale do Capão', 1750],
  ['trekking', CONTACT, `${V}vale-do-pati-14.webp`, 'Vale do Pati 4 Dias via Capão', 4, 'Moderado / Difícil', 'Desafiador', '68 km', 'Palmeiras', 2450],
  ['trekking', CONTACT, `${V}vale-do-pati-19.webp`, 'Vale do Pati 5 Dias via Capão', 5, 'Moderado / Difícil', 'Desafiador', '78 km', 'Palmeiras', 3300],
  ['day-tour', '/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio', `${A}mosquito-pai-inacio.jpeg`, 'Mosquito + Pai Inácio', 1, 'Fácil / Moderado', 'Fácil', '4 km', 'Lençóis', 450],
  ['day-tour', '/pt/aventuras/city-tour-lencois', '/img/about/hero-lencois.webp', 'City Tour em Lençóis', 1, 'Fácil', 'Fácil', '1 km', 'Lençóis', 50],
  ['day-tour', CONTACT, '/img/home_square_right_morro_1_1_5x.webp', 'Morro do Pai Inácio', 1, 'Fácil', 'Fácil', '2 km', 'Lençóis', 265],
  ['day-tour', CONTACT, `${H}home_backgroud_crop_02_1x.webp`, 'Cachoeira do Sossego', 1, 'Moderado / Difícil', 'Desafiador', '15 km', 'Lençóis', 200],
  ['day-tour', CONTACT, '/img/about/story-sunset.webp', 'Parque da Muritiba', 1, 'Fácil / Moderado', 'Fácil', '4 km', 'Lençóis', 160],
  ['day-tour', CONTACT, '/img/home_square_right_morro_2_1_5x.webp', 'Fazenda Pratinha & Gruta Azul', 1, 'Fácil', 'Fácil', '100 m', 'Lençóis', 500],
  ['day-tour', CONTACT, `${A}trilha-aguas-claras.jpg`, 'Águas Claras', 1, 'Fácil', 'Fácil', '18 km', 'Vale do Capão', 390],
  ['day-tour', CONTACT, `${H}home_backgroud_crop_03_1x.webp`, 'Cachoeira da Fumaça', 1, 'Moderado / Difícil', 'Desafiador', '12 km', 'Vale do Capão', 320],
  ['day-tour', CONTACT, `${A}cachoeira-do-mixila.jpeg`, 'Cachoeira da Fumacinha', 1, 'Moderado / Difícil', 'Desafiador', '18 km', 'Ibicoara', 550],
  ['day-tour', CONTACT, '/img/entre_session_foto_02_1_5x.webp', 'Pantanal Marimbus', 1, 'Fácil', 'Fácil', '8 km', 'Lençóis', 465],
  ['day-tour', CONTACT, `${A}cachoeira-do-palmital.jpeg`, 'Cachoeira do Buracão', 1, 'Fácil / Moderado', 'Moderado', '6 km', 'Ibicoara', 750],
  ['day-tour', CONTACT, `${V}vale-do-pati-04.webp`, 'Mirante do Pati 1 Dia', 1, 'Fácil', 'Fácil', '9 km', 'Guiné', 475],
  ['package', CONTACT, `${H}home_backgroud_03_no_crop_1x.webp`, 'Chapada Especial 3 Dias', 3, 'Moderado / Difícil', 'Desafiador', '7 km', 'Lençóis', 1500],
  ['package', CONTACT, `${H}home_backgroud_01_no_crop_1x.webp`, 'Chapada Deslumbrante 4 Dias', 4, 'Moderado / Difícil', 'Desafiador', '15 km', 'Lençóis', 3350],
  ['package', CONTACT, `${H}home_backgroud_02_no_crop_1x.webp`, 'Chapada Extraordinária 6 Dias', 6, 'Moderado / Difícil', 'Desafiador', '57 km', 'Lençóis', 4550],
].map(([category, href, image, title, duration, difficulty, difficultyGroup, distance, location, price]) => ({
  category: category as AdventureCategory,
  href: href as string,
  image: image as string,
  title: title as string,
  duration: duration as number,
  difficulty: difficulty as string,
  difficultyGroup: difficultyGroup as DifficultyGroup,
  distance: distance as string,
  location: location as string,
  price: price as number,
}));

const HERO_BACKGROUND = '/img/adventures/adventures-hero-background-hq.webp';
const HERO_INLINE_IMAGE = '/img/adventures/adventures-hero-pill.webp';
const WALKERS = '/svg/about/story-walkers.svg';
const MAX_BUDGET = 4550;
const MIN_BUDGET = 50;
const LOCATION_OPTIONS = ['all', 'Lençóis', 'Vale do Capão', 'Palmeiras', 'Ibicoara', 'Guiné'];
const DURATION_OPTIONS = ['all', '1', '2', '3', '4', '5', '6'];
const DIFFICULTY_OPTIONS: DifficultyFilter[] = ['all', 'Fácil', 'Moderado', 'Desafiador'];

const locationLabel = (value: string) => (value === 'all' ? 'Todos os locais' : value);
const durationLabel = (value: string) =>
  value === 'all' ? 'Qualquer duração' : `${value} ${value === '1' ? 'dia' : 'dias'}`;
const difficultyLabel = (value: DifficultyFilter) => (value === 'all' ? 'Todos os níveis' : value);

export function AdventuresHub() {
  const [location, setLocation] = useState('all');
  const [duration, setDuration] = useState('all');
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all');
  const [budget, setBudget] = useState(MAX_BUDGET);
  const [openFilter, setOpenFilter] = useState<OpenFilter>(null);
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
    () =>
      ADVENTURES.filter(
        (adventure) =>
          (location === 'all' || adventure.location === location) &&
          (duration === 'all' || adventure.duration === Number(duration)) &&
          (difficulty === 'all' || adventure.difficultyGroup === difficulty) &&
          adventure.price <= budget,
      ),
    [budget, difficulty, duration, location],
  );

  const groups = useMemo(
    () => ({
      trekking: filteredAdventures.filter((item) => item.category === 'trekking'),
      dayTours: filteredAdventures.filter((item) => item.category === 'day-tour'),
      packages: filteredAdventures.filter((item) => item.category === 'package'),
    }),
    [filteredAdventures],
  );

  const activeFilters = [
    location !== 'all' ? { id: 'location', label: locationLabel(location), onRemove: () => setLocation('all') } : null,
    duration !== 'all' ? { id: 'duration', label: durationLabel(duration), onRemove: () => setDuration('all') } : null,
    difficulty !== 'all' ? { id: 'difficulty', label: difficultyLabel(difficulty), onRemove: () => setDifficulty('all') } : null,
    budget !== MAX_BUDGET ? { id: 'budget', label: `Até ${formatPrice(budget, 'pt')}`, onRemove: () => setBudget(MAX_BUDGET) } : null,
  ].filter((filter): filter is NonNullable<typeof filter> => filter !== null);

  const clearFilters = () => {
    setLocation('all');
    setDuration('all');
    setDifficulty('all');
    setBudget(MAX_BUDGET);
    setOpenFilter(null);
  };

  const scrollToResults = () => {
    setOpenFilter(null);
    document.getElementById('todas-as-aventuras')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-surface text-content">
      <section className="adventures-hub-hero relative z-10 -mt-20 min-h-[700px] overflow-hidden pt-20 text-on-media lg:min-h-[496px] lg:overflow-visible">
        <Image
          src={HERO_BACKGROUND}
          alt="Morro do Pai Inácio na Chapada Diamantina"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-bottom"
        />

        <Container className="absolute inset-x-0 top-[138px] text-center lg:top-[120px]">
          <h1 className="mx-auto max-w-[760px] text-balance font-display text-[38px] leading-[1.08] tracking-[-0.025em] text-[#f4f4f4] sm:text-[44px] lg:text-[48px] lg:leading-[1.1]">
            <span className="block">Conheça as</span>
            <span className="flex items-center justify-center gap-3">
              aventuras na
              <span className="relative inline-block h-[0.98em] w-[3.06em] shrink-0 overflow-hidden rounded-pill">
                <Image src={HERO_INLINE_IMAGE} alt="Morro do Pai Inácio" fill sizes="147px" className="object-cover" />
              </span>
            </span>
            <span className="block text-brand-strong">Chapada Diamantina!</span>
          </h1>
        </Container>

        <Container className="absolute inset-x-0 top-[303px] hidden lg:block">
          <div
            ref={filtersRef}
            className="grid h-21 grid-cols-[repeat(4,minmax(0,1fr))_219px] items-center rounded-[40px] border border-white/8 bg-[#1f1f1f] px-6 text-white shadow-popover"
          >
            <FilterPopover
              id="location"
              label="Onde começa"
              icon={<MapPin aria-hidden className="size-4" />}
              value={locationLabel(location)}
              active={location !== 'all'}
              isOpen={openFilter === 'location'}
              onToggle={() => setOpenFilter(openFilter === 'location' ? null : 'location')}
            >
              <FilterChipGrid>
                {LOCATION_OPTIONS.map((option) => (
                  <FilterChip key={option} active={location === option} onClick={() => { setLocation(option); setOpenFilter(null); }}>
                    {option === 'all' ? 'Todas' : option}
                  </FilterChip>
                ))}
              </FilterChipGrid>
            </FilterPopover>

            <FilterPopover
              id="duration"
              label="Duração"
              icon={<CalendarDays aria-hidden className="size-4" />}
              value={durationLabel(duration)}
              active={duration !== 'all'}
              isOpen={openFilter === 'duration'}
              onToggle={() => setOpenFilter(openFilter === 'duration' ? null : 'duration')}
            >
              <FilterChipGrid>
                {DURATION_OPTIONS.map((option) => (
                  <FilterChip key={option} active={duration === option} onClick={() => { setDuration(option); setOpenFilter(null); }}>
                    {option === 'all' ? 'Qualquer' : durationLabel(option)}
                  </FilterChip>
                ))}
              </FilterChipGrid>
            </FilterPopover>

            <FilterPopover
              id="difficulty"
              label="Dificuldade"
              icon={<Mountain aria-hidden className="size-4" />}
              value={difficultyLabel(difficulty)}
              active={difficulty !== 'all'}
              isOpen={openFilter === 'difficulty'}
              onToggle={() => setOpenFilter(openFilter === 'difficulty' ? null : 'difficulty')}
            >
              <FilterChipGrid>
                {DIFFICULTY_OPTIONS.map((option) => (
                  <FilterChip key={option} active={difficulty === option} onClick={() => { setDifficulty(option); setOpenFilter(null); }}>
                    {option === 'all' ? 'Todos' : option}
                  </FilterChip>
                ))}
              </FilterChipGrid>
            </FilterPopover>

            <FilterPopover
              id="budget"
              label="Investimento"
              icon={<CircleDollarSign aria-hidden className="size-4" />}
              value={budget === MAX_BUDGET ? 'Qualquer valor' : `Até ${formatPrice(budget, 'pt')}`}
              active={budget !== MAX_BUDGET}
              isOpen={openFilter === 'budget'}
              align="right"
              onToggle={() => setOpenFilter(openFilter === 'budget' ? null : 'budget')}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-end justify-between gap-4">
                  <Text size="xs" tone="secondary" className="uppercase tracking-[0.14em]">Até</Text>
                  <Text size="xl" weight="semibold" tone="onMedia" className="tabular-nums">{formatPrice(budget, 'pt')}</Text>
                </div>
                <input
                  className="adventures-range w-full cursor-pointer accent-brand"
                  type="range"
                  min={MIN_BUDGET}
                  max={MAX_BUDGET}
                  step={50}
                  value={budget}
                  onChange={(event) => setBudget(Number(event.target.value))}
                  aria-label="Investimento máximo"
                />
                <div className="flex justify-between font-body text-xs font-light text-white/55 tabular-nums">
                  <span>R$ 50</span><span>R$ 4.550</span>
                </div>
              </div>
            </FilterPopover>

            <Button onClick={scrollToResults} arrow size="lg" className="ml-3 min-w-[207px]">Escolha a sua trilha</Button>
          </div>
        </Container>

        {activeFilters.length > 0 ? (
          <Container className="absolute inset-x-0 top-[402px] hidden lg:block">
            <div className="flex min-h-10 items-center justify-start gap-2">
              {activeFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={filter.onRemove}
                  className={cn(
                    'inline-flex min-h-10 items-center gap-2 rounded-pill border border-white/70 px-4 font-body text-sm font-semibold text-white',
                    'transition-[background-color,border-color,transform] duration-200 ease-out hover:border-white hover:bg-white/8',
                    press,
                    focus.onMedia,
                  )}
                  aria-label={`Remover filtro ${filter.label}`}
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
                Limpar
              </button>
            </div>
          </Container>
        ) : (
          <button
            type="button"
            onClick={scrollToResults}
            className={cn(
              'absolute inset-x-0 top-[427px] mx-auto hidden w-fit items-center gap-2 font-body text-base font-light text-white/65 lg:flex',
              'transition-colors hover:text-white',
              focus.onMedia,
            )}
          >
            Explore todas as aventuras
            <span className="grid size-[22px] place-items-center rounded-full border border-current">
              <ArrowRightIcon aria-hidden className="size-3 rotate-90" />
            </span>
          </button>
        )}
      </section>

      <div className="px-6 py-5 lg:hidden">
        <Button onClick={scrollToResults} icon={<SlidersHorizontal aria-hidden className="size-5" />} arrow block size="lg" justify="between">
          Filtrar aventuras
        </Button>
      </div>

      <section id="todas-as-aventuras" className="bg-surface-muted pb-20 pt-[60px] lg:pb-28" aria-labelledby="trekking-heading">
        <AdventureSection
          id="trekking-heading"
          title="Trekking de 2 a 6 dias"
          description="Caminhos para viver a Chapada no seu ritmo, com guias nativos, segurança e a experiência de quem conhece cada trecho."
          adventures={groups.trekking}
          walkers
        />
      </section>

      {groups.dayTours.length > 0 && (
        <section className="bg-surface py-20 lg:py-28" aria-labelledby="day-tours-heading">
          <AdventureSection
            id="day-tours-heading"
            title="Passeios de 1 dia"
            description="Banhos de cachoeira, mirantes e circuitos para quem quer viver muito sem precisar contar as noites."
            adventures={groups.dayTours}
          />
        </section>
      )}

      {groups.packages.length > 0 && (
        <section className="bg-surface-muted py-20 lg:py-28" aria-labelledby="packages-heading">
          <AdventureSection
            id="packages-heading"
            title="Pacotes especiais"
            description="Roteiros combinados para conhecer diferentes paisagens da Chapada com toda a operação organizada pelo bando Mamut."
            adventures={groups.packages}
            featured
          />
        </section>
      )}

      {filteredAdventures.length === 0 && (
        <section className="bg-surface-muted pb-24">
          <Container>
            <div className="rounded-panel bg-surface-raised px-6 py-16 text-center shadow-card">
              <Heading as="h2" size="card" balance>Nenhuma aventura combina com esses filtros.</Heading>
              <Text tone="secondary" pretty className="mx-auto mt-3 max-w-lg">
                Tente ampliar a duração, o nível ou o investimento para descobrir outros caminhos.
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
    <div className="relative flex h-14 items-center border-r border-white/12 px-5">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'flex h-full w-full items-center gap-3 rounded-pill text-left transition-[background-color,box-shadow] duration-200 ease-out',
          active && 'bg-white/6 px-3 shadow-[inset_0_0_0_1px_rgba(150,194,147,0.32)]',
          focus.onMedia,
        )}
        aria-expanded={isOpen}
        aria-controls={`${id}-popover`}
      >
        <span className="shrink-0 text-brand-strong">{icon}</span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="font-body text-[11px] font-semibold uppercase tracking-[0.13em] text-[#a8c39a]">{label}</span>
          <span className={cn('truncate font-body text-sm font-light', active ? 'text-white' : 'text-white/62')}>{value}</span>
        </span>
        <CaretDownIcon aria-hidden className={cn('size-4 shrink-0 text-white/65 transition-transform', motion.base, isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div
          id={`${id}-popover`}
          className={cn(
            'absolute top-[calc(100%+12px)] z-40 w-[320px] rounded-card bg-[#1f1f1f] p-5 text-white shadow-popover ring-1 ring-white/10',
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

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex min-h-11 items-center gap-2 rounded-pill px-4 font-body text-sm font-semibold ring-1 transition-[background-color,color,transform] duration-200 ease-out',
        active ? 'bg-brand text-white ring-brand' : 'bg-transparent text-white ring-white/20 hover:bg-white/8 hover:ring-white/35',
        press,
        focus.onMedia,
      )}
    >
      {active && <Check aria-hidden className="size-3.5" />}
      {children}
    </button>
  );
}

function AdventureSection({ id, title, description, adventures, walkers = false, featured = false }: {
  id: string;
  title: string;
  description: string;
  adventures: Adventure[];
  walkers?: boolean;
  featured?: boolean;
}) {
  if (adventures.length === 0) return null;

  return (
    <Container className="flex flex-col gap-12 lg:gap-16">
      <div className={cn('grid items-end gap-8', walkers && 'lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.65fr)]')}>
        <div className="flex flex-col gap-4">
          <Heading id={id} as="h2" size="hero" balance>{title}</Heading>
          <Text size="lg" weight="light" tone="secondary" pretty className="max-w-2xl">{description}</Text>
        </div>
        {walkers && (
          <Image src={WALKERS} alt="" width={290} height={114} unoptimized className="hidden h-auto w-full max-w-md justify-self-end lg:block" />
        )}
      </div>

      <div aria-live="polite" className={cn('grid gap-5 md:grid-cols-2 lg:grid-cols-3', featured && 'lg:gap-6')}>
        {adventures.map((adventure) => (
          <AdventureCard key={`${adventure.category}-${adventure.title}`} adventure={adventure} featured={featured} />
        ))}
      </div>
    </Container>
  );
}

function AdventureCard({ adventure, featured = false }: { adventure: Adventure; featured?: boolean }) {
  const difficultyEmoji = adventure.difficultyGroup === 'Fácil' ? '🟢' : adventure.difficultyGroup === 'Moderado' ? '🟡' : '🔴';

  return (
    <Link
      href={adventure.href}
      className={cn(
        'group relative flex min-h-132 flex-col overflow-hidden rounded-card-lg bg-surface-raised text-content shadow-card',
        'transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-float',
        featured && 'min-h-144 ring-1 ring-brand/20',
        motion.base,
        press,
        focus.onSurface,
      )}
      aria-label={`Conhecer ${adventure.title}`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
        <Badge variant="outlineOnMedia" size="sm" className="absolute left-5 top-5 z-10 bg-black/12 font-medium backdrop-blur-sm">
          {adventure.duration} {adventure.duration === 1 ? 'dia' : 'dias'}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <Heading as="h3" size="card" balance>{adventure.title}</Heading>
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
            <Text size="xs" weight="light" tone="secondary">A partir de</Text>
            <Text size="xl" weight="semibold" className="tabular-nums">{formatPrice(adventure.price, 'pt')}</Text>
          </div>
          <span className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-pill bg-brand px-4 font-body text-sm font-semibold whitespace-nowrap text-brand-contrast transition-[background-color,transform] duration-300 ease-out group-hover:bg-brand-hover">
            <span>Explorar a trilha</span>
            <ArrowRightIcon aria-hidden className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
