export type TrekId = 'pati3' | 'pati4Capao' | 'pati5';

export type CalendarTrek = {
  id: TrekId;
  name: string;
  shortName: string;
  origin: 'Lençóis' | 'Palmeiras';
  price: number;
  difficulty: string;
  difficultyTone: 'moderate' | 'advanced';
  distance: string;
  days: number;
  image: string;
  href: string;
  description: string;
};

export type CalendarDeparture = {
  id: string;
  trekId: TrekId;
  start: string;
  end: string;
  holidayDate?: string;
  occasion?: string;
};

export type RelatedRoute = {
  id: string;
  name: string;
  origin: string;
  price: number;
  difficulty: string;
  difficultyTone: 'easy' | 'moderate' | 'advanced';
  image: string;
  href: string;
};

export const CALENDAR_TREKS: CalendarTrek[] = [
  {
    id: 'pati3',
    name: 'Vale do Pati 3 Dias',
    shortName: 'Pati 3 dias',
    origin: 'Lençóis',
    price: 2200,
    difficulty: 'Moderado',
    difficultyTone: 'moderate',
    distance: '45 km',
    days: 3,
    image: '/img/calendar/vale-pati-3.png',
    href: '/pt/aventuras/vale-do-pati-03-dias',
    description: 'A travessia essencial para conhecer o coração do Vale sem abrir mão de uma rota completa.',
  },
  {
    id: 'pati4Capao',
    name: 'Vale do Pati 4 Dias via Capão',
    shortName: '4 dias via Capão',
    origin: 'Palmeiras',
    price: 2750,
    difficulty: 'Moderado / Avançado',
    difficultyTone: 'moderate',
    distance: '68 km',
    days: 4,
    image: '/img/calendar/vale-do-pati-4-dias.png',
    href: '/pt/aventuras/vale-do-pati-4-dias-via-capao',
    description: 'Entrada pelo Vale do Capão, mais dias de caminhada e uma leitura ampla das serras do Pati.',
  },
  {
    id: 'pati5',
    name: 'Travessia Vale do Pati 5 Dias',
    shortName: 'Travessia 5 dias',
    origin: 'Lençóis',
    price: 2900,
    difficulty: 'Avançado',
    difficultyTone: 'advanced',
    distance: '70 km',
    days: 5,
    image: '/img/calendar/vale-pati-5.png',
    href: '/pt/aventuras/vale-do-pati-05-dias',
    description: 'A experiência mais profunda: cinco dias para atravessar o Vale no ritmo da paisagem.',
  },
];
export const CALENDAR_DEPARTURES: CalendarDeparture[] = [
  {
    id: 'pati3-2026-10-11',
    trekId: 'pati3',
    start: '2026-10-11',
    end: '2026-10-13',
    holidayDate: '2026-10-12',
    occasion: 'Nossa Senhora Aparecida',
  },
  {
    id: 'pati3-2026-11-15',
    trekId: 'pati3',
    start: '2026-11-15',
    end: '2026-11-17',
    holidayDate: '2026-11-15',
    occasion: 'Proclamação da República',
  },
  {
    id: 'pati4-capao-2026-10-12',
    trekId: 'pati4Capao',
    start: '2026-10-12',
    end: '2026-10-15',
    occasion: 'Vale do Pati via Capão',
  },
  {
    id: 'pati5-2026-10-11',
    trekId: 'pati5',
    start: '2026-10-11',
    end: '2026-10-15',
    holidayDate: '2026-10-12',
    occasion: 'Nossa Senhora Aparecida',
  },
  {
    id: 'pati5-2026-11-15',
    trekId: 'pati5',
    start: '2026-11-15',
    end: '2026-11-19',
    holidayDate: '2026-11-15',
    occasion: 'Proclamação da República',
  },
];

export const RELATED_ROUTES: RelatedRoute[] = [
  {
    id: 'palmital',
    name: 'Cachoeira do Palmital 2 Dias',
    origin: 'Lençóis',
    price: 1600,
    difficulty: 'Moderado',
    difficultyTone: 'moderate',
    image: '/img/adventures/palmital/hero.jpeg',
    href: '/pt/aventuras/cachoeira-do-palmital',
  },
  {
    id: 'pati5',
    name: 'Travessia Vale do Pati 5 Dias',
    origin: 'Lençóis',
    price: 2900,
    difficulty: 'Avançado',
    difficultyTone: 'advanced',
    image: '/img/adventures/home/vale-do-pati-5-dias.jpeg',
    href: '/pt/aventuras/vale-do-pati-05-dias',
  },
  {
    id: 'pati3',
    name: 'Vale do Pati 3 Dias',
    origin: 'Lençóis',
    price: 2200,
    difficulty: 'Moderado',
    difficultyTone: 'moderate',
    image: '/img/adventures/home/vale-do-pati-3-dias.jpeg',
    href: '/pt/aventuras/vale-do-pati-03-dias',
  },
  {
    id: 'pati4Capao',
    name: 'Vale do Pati 4 Dias via Capão',
    origin: 'Palmeiras',
    price: 2750,
    difficulty: 'Moderado / Avançado',
    difficultyTone: 'advanced',
    image: '/img/adventures/pati-4-capao/1.jpeg',
    href: '/pt/aventuras/vale-do-pati-4-dias-via-capao',
  },
  {
    id: 'mixila',
    name: 'Cachoeira do Mixila 2 Dias',
    origin: 'Lençóis x PNCD',
    price: 1600,
    difficulty: 'Moderado / Avançado',
    difficultyTone: 'advanced',
    image: '/img/adventures/mixila/hero.jpeg',
    href: '/pt/aventuras/cachoeira-do-mixila',
  },
  {
    id: 'pati4',
    name: 'Vale do Pati 4 Dias',
    origin: 'Lençóis',
    price: 2600,
    difficulty: 'Moderado / Avançado',
    difficultyTone: 'advanced',
    image: '/img/adventures/home/vale-do-pati-4-dias.jpeg',
    href: '/pt/aventuras/vale-do-pati-4-dias',
  },
  {
    id: 'aguasClaras',
    name: 'Trilha Águas Claras 2 Dias',
    origin: 'Lençóis',
    price: 1350,
    difficulty: 'Fácil',
    difficultyTone: 'easy',
    image: '/img/adventures/aguas-claras/hero.jpeg',
    href: '/pt/aventuras/trilha-aguas-claras-2-dias',
  },
];
