/**
 * Parte neutra das aventuras do hub: categoria, foto, números e destino.
 * Título e nível — o texto — ficam em `adventures-content.ts`, pelo `id`.
 *
 * `route` liga a aventura ao manifesto de rotas quando existe página de
 * detalhe; sem ele o card vai para o contato, como no site atual.
 */

import type { DifficultyGroup } from './filters';

export type AdventureCategory = 'trekking' | 'day-tour' | 'package';

export type AdventureBase = {
  id: string;
  category: AdventureCategory;
  /** id em ADVENTURE_ROUTES. Ausente = ainda não tem página própria. */
  route?: string;
  image: string;
  duration: number;
  difficultyGroup: DifficultyGroup;
  distance: string;
  location: string;
  price: number;
};

export const ADVENTURES: AdventureBase[] = [
  { id: 'cachoeira-do-palmital-2-dias', category: 'trekking', route: 'palmital', image: '/img/adventures/palmital/hero.jpeg', duration: 2, difficultyGroup: 'Moderado', distance: '22 km', location: 'Lençóis', price: 1350 },
  { id: 'trilha-aguas-claras-2-dias', category: 'trekking', route: 'aguas-claras', image: '/img/adventures/home/trilha-aguas-claras.jpg', duration: 2, difficultyGroup: 'Fácil', distance: '23 km', location: 'Lençóis', price: 1150 },
  { id: 'travessia-vale-do-pati-5-dias', category: 'trekking', route: 'vale-do-pati-5', image: '/img/adventures/home/vale-do-pati-5-dias.jpeg', duration: 5, difficultyGroup: 'Desafiador', distance: '70 km', location: 'Lençóis', price: 2750 },
  { id: 'vale-do-pati-3-dias', category: 'trekking', route: 'vale-do-pati-3', image: '/img/adventures/home/vale-do-pati-3-dias.jpeg', duration: 3, difficultyGroup: 'Moderado', distance: '43 km', location: 'Lençóis', price: 2100 },
  { id: 'vale-do-pati-4-dias', category: 'trekking', route: 'vale-do-pati-4', image: '/img/adventures/home/vale-do-pati-4-dias.jpeg', duration: 4, difficultyGroup: 'Moderado', distance: '62 km', location: 'Lençóis', price: 2250 },
  { id: 'cachoeira-do-mixila-2-dias', category: 'trekking', route: 'mixila', image: '/img/adventures/mixila/hero.jpeg', duration: 2, difficultyGroup: 'Moderado', distance: '24 km', location: 'Lençóis', price: 1200 },
  { id: 'cachoeira-da-fumaca-por-baixo', category: 'trekking', route: 'fumaca-baixo', image: '/img/adventures/fumaca-baixo/hero.jpeg', duration: 3, difficultyGroup: 'Desafiador', distance: '38 km', location: 'Lençóis', price: 1450 },
  { id: 'cachoeira-da-fumaca-360', category: 'trekking', image: '/img/home_backgroud/home_backgroud_04_no_crop_1x.webp', duration: 3, difficultyGroup: 'Desafiador', distance: '38 km', location: 'Vale do Capão', price: 1450 },
  { id: 'cachoeira-do-fundao-vinte-e-um', category: 'trekking', image: '/img/vale-do-pati/vale-do-pati-08.webp', duration: 3, difficultyGroup: 'Desafiador', distance: '24 km', location: 'Vale do Capão', price: 1750 },
  { id: 'vale-do-pati-4-dias-via-capao', category: 'trekking', route: 'pati-4-capao', image: '/img/adventures/pati-4-capao/hero.jpeg', duration: 4, difficultyGroup: 'Desafiador', distance: '68 km', location: 'Palmeiras', price: 2450 },
  { id: 'vale-do-pati-5-dias-via-capao', category: 'trekking', route: 'pati-5-capao', image: '/img/adventures/pati-5-capao/hero.jpeg', duration: 5, difficultyGroup: 'Desafiador', distance: '78 km', location: 'Palmeiras', price: 3300 },
  { id: 'mosquito-pai-inacio', category: 'day-tour', route: 'mosquito-pai-inacio', image: '/img/adventures/mosquito-pai-inacio/hero.jpeg', duration: 1, difficultyGroup: 'Fácil', distance: '4 km', location: 'Lençóis', price: 450 },
  { id: 'city-tour-em-lencois', category: 'day-tour', route: 'city-tour-lencois', image: '/img/adventures/city-tour/hero.jpeg', duration: 1, difficultyGroup: 'Fácil', distance: '1 km', location: 'Lençóis', price: 50 },
  { id: 'morro-do-pai-inacio', category: 'day-tour', route: 'pai-inacio', image: '/img/home_square_right_morro_1_1_5x.webp', duration: 1, difficultyGroup: 'Fácil', distance: '2 km', location: 'Lençóis', price: 265 },
  { id: 'cachoeira-do-mosquito', category: 'day-tour', route: 'mosquito', image: '/img/adventures/mosquito/hero.jpeg', duration: 1, difficultyGroup: 'Fácil', distance: '2 km', location: 'Lençóis', price: 375 },
  { id: 'cachoeira-do-sossego', category: 'day-tour', route: 'sossego', image: '/img/home_backgroud/home_backgroud_crop_02_1x.webp', duration: 1, difficultyGroup: 'Desafiador', distance: '15 km', location: 'Lençóis', price: 200 },
  { id: 'parque-da-muritiba', category: 'day-tour', image: '/img/about/story-sunset.webp', duration: 1, difficultyGroup: 'Fácil', distance: '4 km', location: 'Lençóis', price: 160 },
  { id: 'grutas-morro-do-camelo', category: 'day-tour', route: 'grutas', image: '/img/adventures/grutas/hero.jpeg', duration: 1, difficultyGroup: 'Fácil', distance: '2 km', location: 'Iraquara', price: 540 },
  { id: 'fazenda-pratinha-gruta-azul', category: 'day-tour', image: '/img/home_square_right_morro_2_1_5x.webp', duration: 1, difficultyGroup: 'Fácil', distance: '100 m', location: 'Lençóis', price: 500 },
  { id: 'aguas-claras', category: 'day-tour', image: '/img/adventures/home/trilha-aguas-claras.jpg', duration: 1, difficultyGroup: 'Fácil', distance: '18 km', location: 'Vale do Capão', price: 390 },
  { id: 'cachoeira-da-fumaca', category: 'day-tour', route: 'fumaca', image: '/img/adventures/fumaca/hero.jpeg', duration: 1, difficultyGroup: 'Desafiador', distance: '12 km', location: 'Vale do Capão', price: 320 },
  { id: 'cachoeira-da-fumacinha', category: 'day-tour', route: 'fumacinha', image: '/img/adventures/fumacinha/hero.jpg', duration: 1, difficultyGroup: 'Desafiador', distance: '18 km', location: 'Ibicoara', price: 550 },
  { id: 'pantanal-marimbus', category: 'day-tour', route: 'marimbus', image: '/img/adventures/marimbus/hero.jpeg', duration: 1, difficultyGroup: 'Fácil', distance: '8 km', location: 'Lençóis', price: 465 },
  { id: 'cachoeira-do-buracao', category: 'day-tour', route: 'buracao', image: '/img/adventures/buracao/hero.jpeg', duration: 1, difficultyGroup: 'Moderado', distance: '6 km', location: 'Ibicoara', price: 750 },
  { id: 'cachoeira-do-herculano', category: 'day-tour', route: 'herculano', image: '/img/adventures/herculano/hero.jpg', duration: 1, difficultyGroup: 'Moderado', distance: '6 km', location: 'Itaetê', price: 600 },
  { id: 'cachoeira-da-ferradura', category: 'day-tour', route: 'ferradura', image: '/img/adventures/ferradura/hero.jpeg', duration: 1, difficultyGroup: 'Fácil', distance: '7 km', location: 'Lençóis', price: 280 },
  { id: 'mirante-do-pati-1-dia', category: 'day-tour', route: 'mirante-pati', image: '/img/adventures/mirante-pati/hero.jpeg', duration: 1, difficultyGroup: 'Moderado', distance: '14–18 km', location: 'Guiné', price: 475 },
  { id: 'mirante-do-cachoeirao', category: 'day-tour', route: 'cachoeirao', image: '/img/adventures/cachoeirao/hero.jpeg', duration: 1, difficultyGroup: 'Moderado', distance: '18 km', location: 'Guiné', price: 500 },
  { id: 'ribeirao-do-meio', category: 'day-tour', route: 'ribeirao', image: '/img/adventures/ribeirao/hero.jpeg', duration: 1, difficultyGroup: 'Fácil', distance: '7 km', location: 'Lençóis', price: 145 },
  { id: 'chapada-especial-3-dias', category: 'package', image: '/img/home_backgroud/home_backgroud_03_no_crop_1x.webp', duration: 3, difficultyGroup: 'Desafiador', distance: '7 km', location: 'Lençóis', price: 1500 },
  { id: 'chapada-deslumbrante-4-dias', category: 'package', image: '/img/home_backgroud/home_backgroud_01_no_crop_1x.webp', duration: 4, difficultyGroup: 'Desafiador', distance: '15 km', location: 'Lençóis', price: 3350 },
  { id: 'chapada-extraordinaria-6-dias', category: 'package', image: '/img/home_backgroud/home_backgroud_02_no_crop_1x.webp', duration: 6, difficultyGroup: 'Desafiador', distance: '57 km', location: 'Lençóis', price: 4550 },
];
