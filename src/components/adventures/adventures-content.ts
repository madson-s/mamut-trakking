/**
 * Texto do hub de aventuras por idioma: copy da página, rótulos dos filtros e
 * o nome e o nível de cada roteiro.
 *
 * PT é o copy do redesenho. EN toma como base
 * mamut.agency/en/adventures-of-chapada-diamantina — daí "Pati Valley
 * Crossing", "Fumaça Waterfall from Below" e a nomenclatura de nível
 * (Moderate / Hard). ES e FR são traduções feitas neste repositório.
 *
 * Os ids são os de `adventures-data.ts`; a parte neutra (foto, distância,
 * preço) não se repete aqui.
 */

import type { Locale } from '@/lib/site';
import type { DifficultyFilter } from './filters';

export type AdventureText = { title: string; difficulty: string };

export type AdventuresContent = {
  meta: { title: string; description: string; canonical: string };
  hero: {
    /** h1 em três linhas; a pílula com foto entra na segunda. */
    linha1: string;
    linha2: string;
    linha3: string;
    filtrar: string;
    explorar: string;
    limpar: string;
    removerFiltro: string;
  };
  filtros: {
    local: string;
    duracao: string;
    dificuldade: string;
    investimento: string;
    investimentoMax: string;
    escolher: string;
    todosLocais: string;
    todas: string;
    qualquerDuracao: string;
    qualquer: string;
    todosNiveis: string;
    todos: string;
    qualquerValor: string;
    ate: string;
    dia: string;
    dias: string;
  };
  drawer: { titulo: string; fechar: string; duracao: string; dificuldade: string; origem: string; preco: string; limpar: string; ver: string; verPlural: string; vazio: string };
  secoes: {
    trekking: { titulo: string; descricao: string };
    dayTours: { titulo: string; descricao: string };
    pacotes: { titulo: string; descricao: string };
  };
  vazio: { titulo: string; texto: string };
  card: { apartirDe: string; explorar: string; conhecer: string; dia: string; dias: string };
  niveis: Record<Exclude<DifficultyFilter, 'all'>, string>;
  roteiros: Record<string, AdventureText>;
};

export const ADVENTURES_CONTENT: Record<Locale, AdventuresContent> = {
  pt: {
    meta: {
      title: 'Aventuras',
      description:
        'Trekkings, passeios de um dia e pacotes na Chapada Diamantina, com guias nativos. Filtre por duração, nível, origem e investimento.',
      canonical: '/pt/aventuras',
    },
    hero: {
      linha1: 'Conheça as',
      linha2: 'aventuras na',
      linha3: 'Chapada Diamantina!',
      filtrar: 'Filtrar aventuras',
      explorar: 'Explore todas as aventuras',
      limpar: 'Limpar',
      removerFiltro: 'Remover filtro',
    },
    filtros: {
      local: 'Onde começa',
      duracao: 'Duração',
      dificuldade: 'Dificuldade',
      investimento: 'Investimento',
      investimentoMax: 'Investimento máximo',
      escolher: 'Escolha a sua trilha',
      todosLocais: 'Todos os locais',
      todas: 'Todas',
      qualquerDuracao: 'Qualquer duração',
      qualquer: 'Qualquer',
      todosNiveis: 'Todos os níveis',
      todos: 'Todos',
      qualquerValor: 'Qualquer valor',
      ate: 'Até',
      dia: 'dia',
      dias: 'dias',
    },
    drawer: {
      titulo: 'Filtrar',
      fechar: 'Fechar filtros',
      duracao: 'Duração',
      dificuldade: 'Dificuldade',
      origem: 'Origem',
      preco: 'Preço · até',
      limpar: 'Limpar filtros',
      ver: 'Ver {n} aventura',
      verPlural: 'Ver {n} aventuras',
      vazio: 'Nenhuma aventura encontrada',
    },
    secoes: {
      trekking: {
        titulo: 'Trekking de 2 a 6 dias',
        descricao:
          'Caminhos para viver a Chapada no seu ritmo, com guias nativos, segurança e a experiência de quem conhece cada trecho.',
      },
      dayTours: {
        titulo: 'Passeios de 1 dia',
        descricao:
          'Banhos de cachoeira, mirantes e circuitos para quem quer viver muito sem precisar contar as noites.',
      },
      pacotes: {
        titulo: 'Pacotes especiais',
        descricao:
          'Roteiros combinados para conhecer diferentes paisagens da Chapada com toda a operação organizada pelo bando Mamut.',
      },
    },
    vazio: {
      titulo: 'Nenhuma aventura combina com esses filtros.',
      texto: 'Tente ampliar a duração, o nível ou o investimento para descobrir outros caminhos.',
    },
    card: { apartirDe: 'A partir de', explorar: 'Explorar a trilha', conhecer: 'Conhecer', dia: 'dia', dias: 'dias' },
    niveis: { 'Fácil': 'Fácil', 'Moderado': 'Moderado', 'Desafiador': 'Desafiador' },
    roteiros: {
      'cachoeira-do-palmital-2-dias': { title: 'Cachoeira do Palmital 2 Dias', difficulty: 'Moderado' },
      'trilha-aguas-claras-2-dias': { title: 'Trilha Águas Claras 2 Dias', difficulty: 'Fácil' },
      'travessia-vale-do-pati-5-dias': { title: 'Travessia Vale do Pati 5 Dias', difficulty: 'Moderado / Difícil' },
      'vale-do-pati-3-dias': { title: 'Vale do Pati 3 Dias', difficulty: 'Moderado' },
      'vale-do-pati-4-dias': { title: 'Vale do Pati 4 Dias', difficulty: 'Moderado / Difícil' },
      'cachoeira-do-mixila-2-dias': { title: 'Cachoeira do Mixila 2 Dias', difficulty: 'Moderado / Difícil' },
      'cachoeira-da-fumaca-por-baixo': { title: 'Cachoeira da Fumaça por Baixo', difficulty: 'Moderado / Difícil' },
      'cachoeira-da-fumaca-360': { title: 'Cachoeira da Fumaça 360', difficulty: 'Moderado / Difícil' },
      'cachoeira-do-fundao-vinte-e-um': { title: 'Cachoeira do Fundão + Vinte e Um', difficulty: 'Muito difícil' },
      'vale-do-pati-4-dias-via-capao': { title: 'Vale do Pati 4 Dias via Capão', difficulty: 'Moderado / Difícil' },
      'vale-do-pati-5-dias-via-capao': { title: 'Vale do Pati 5 Dias via Capão', difficulty: 'Moderado / Difícil' },
      'mosquito-pai-inacio': { title: 'Mosquito + Pai Inácio', difficulty: 'Fácil / Moderado' },
      'city-tour-em-lencois': { title: 'City Tour em Lençóis', difficulty: 'Fácil' },
      'morro-do-pai-inacio': { title: 'Morro do Pai Inácio', difficulty: 'Fácil' },
      'cachoeira-do-mosquito': { title: 'Cachoeira do Mosquito', difficulty: 'Fácil' },
      'cachoeira-do-sossego': { title: 'Cachoeira do Sossego', difficulty: 'Moderado / Difícil' },
      'parque-da-muritiba': { title: 'Parque da Muritiba', difficulty: 'Fácil / Moderado' },
      'grutas-morro-do-camelo': { title: 'Grutas + Morro do Camelo', difficulty: 'Fácil' },
      'fazenda-pratinha-gruta-azul': { title: 'Fazenda Pratinha & Gruta Azul', difficulty: 'Fácil' },
      'aguas-claras': { title: 'Águas Claras', difficulty: 'Fácil' },
      'cachoeira-da-fumaca': { title: 'Cachoeira da Fumaça', difficulty: 'Moderado / Difícil' },
      'cachoeira-da-fumacinha': { title: 'Cachoeira da Fumacinha', difficulty: 'Moderado / Difícil' },
      'pantanal-marimbus': { title: 'Pantanal Marimbus', difficulty: 'Fácil' },
      'cachoeira-do-buracao': { title: 'Cachoeira do Buracão', difficulty: 'Fácil / Moderado' },
      'cachoeira-do-herculano': { title: 'Cachoeira do Herculano', difficulty: 'Moderado' },
      'cachoeira-da-ferradura': { title: 'Cachoeira da Ferradura', difficulty: 'Fácil / Moderado' },
      'mirante-do-pati-1-dia': { title: 'Mirante do Pati 1 Dia', difficulty: 'Moderado' },
      'mirante-do-cachoeirao': { title: 'Mirante do Cachoeirão', difficulty: 'Moderado' },
      'ribeirao-do-meio': { title: 'Ribeirão do Meio', difficulty: 'Fácil' },
      'chapada-especial-3-dias': { title: 'Chapada Especial 3 Dias', difficulty: 'Moderado / Difícil' },
      'chapada-deslumbrante-4-dias': { title: 'Chapada Deslumbrante 4 Dias', difficulty: 'Moderado / Difícil' },
      'chapada-extraordinaria-6-dias': { title: 'Chapada Extraordinária 6 Dias', difficulty: 'Moderado / Difícil' },
    },
  },

  en: {
    meta: {
      title: 'Adventures',
      description:
        'Treks, day tours and packages in the Chapada Diamantina, with local guides. Filter by duration, level, starting point and budget.',
      canonical: '/en/adventures',
    },
    hero: {
      linha1: 'Discover the',
      linha2: 'adventures of the',
      linha3: 'Chapada Diamantina!',
      filtrar: 'Filter adventures',
      explorar: 'Explore every adventure',
      limpar: 'Clear',
      removerFiltro: 'Remove filter',
    },
    filtros: {
      local: 'Starting point',
      duracao: 'Duration',
      dificuldade: 'Difficulty',
      investimento: 'Budget',
      investimentoMax: 'Maximum budget',
      escolher: 'Choose your trail',
      todosLocais: 'All starting points',
      todas: 'All',
      qualquerDuracao: 'Any duration',
      qualquer: 'Any',
      todosNiveis: 'All levels',
      todos: 'All',
      qualquerValor: 'Any budget',
      ate: 'Up to',
      dia: 'day',
      dias: 'days',
    },
    drawer: {
      titulo: 'Filter',
      fechar: 'Close filters',
      duracao: 'Duration',
      dificuldade: 'Difficulty',
      origem: 'Starting point',
      preco: 'Price · up to',
      limpar: 'Clear filters',
      ver: 'See {n} adventure',
      verPlural: 'See {n} adventures',
      vazio: 'No adventures found',
    },
    secoes: {
      trekking: {
        titulo: 'Treks of 2 to 6 days',
        descricao:
          'Intense, immersive crossings and wild camping inside the Chapada Diamantina National Park, with local guides who know every stretch.',
      },
      dayTours: {
        titulo: 'Day tours',
        descricao:
          'Waterfalls, natural pools, caves and hills — short and long trails, one-day crossings and 4×4 tours, for those who want a lot without counting nights.',
      },
      pacotes: {
        titulo: 'Special packages',
        descricao:
          'Combined itineraries to see different landscapes of the Chapada, with the whole operation organised by the Mamut herd.',
      },
    },
    vazio: {
      titulo: 'No adventure matches these filters.',
      texto: 'Try widening the duration, the level or the budget to find other paths.',
    },
    card: { apartirDe: 'From', explorar: 'Explore the trail', conhecer: 'See', dia: 'day', dias: 'days' },
    niveis: { 'Fácil': 'Easy', 'Moderado': 'Moderate', 'Desafiador': 'Challenging' },
    roteiros: {
      'cachoeira-do-palmital-2-dias': { title: 'Palmital Waterfall 2 Days', difficulty: 'Moderate' },
      'trilha-aguas-claras-2-dias': { title: 'Águas Claras Trail 2 Days', difficulty: 'Easy' },
      'travessia-vale-do-pati-5-dias': { title: 'Pati Valley Crossing 5 Days', difficulty: 'Moderate / Hard' },
      'vale-do-pati-3-dias': { title: 'Pati Valley 3 Days', difficulty: 'Moderate' },
      'vale-do-pati-4-dias': { title: 'Pati Valley 4 Days', difficulty: 'Moderate / Hard' },
      'cachoeira-do-mixila-2-dias': { title: 'Mixila Waterfall 2 Days', difficulty: 'Moderate / Hard' },
      'cachoeira-da-fumaca-por-baixo': { title: 'Fumaça Waterfall from Below', difficulty: 'Moderate / Hard' },
      'cachoeira-da-fumaca-360': { title: 'Fumaça Waterfall 360', difficulty: 'Moderate / Hard' },
      'cachoeira-do-fundao-vinte-e-um': { title: 'Fundão + Vinte e Um Waterfalls', difficulty: 'Very hard' },
      'vale-do-pati-4-dias-via-capao': { title: 'Pati Valley 4 Days (Capão Way)', difficulty: 'Moderate / Hard' },
      'vale-do-pati-5-dias-via-capao': { title: 'Pati Valley 5 Days (Capão Way)', difficulty: 'Moderate / Hard' },
      'mosquito-pai-inacio': { title: 'Mosquito + Pai Inácio', difficulty: 'Easy / Moderate' },
      'city-tour-em-lencois': { title: 'Lençóis City Tour', difficulty: 'Easy' },
      'morro-do-pai-inacio': { title: 'Pai Inácio Hill', difficulty: 'Easy' },
      'cachoeira-do-mosquito': { title: 'Mosquito Waterfall', difficulty: 'Easy' },
      'cachoeira-do-sossego': { title: 'Sossego Waterfall', difficulty: 'Moderate / Hard' },
      'parque-da-muritiba': { title: 'Muritiba Park', difficulty: 'Easy / Moderate' },
      'grutas-morro-do-camelo': { title: 'Caves + Camelo Hill', difficulty: 'Easy' },
      'fazenda-pratinha-gruta-azul': { title: 'Pratinha Farm & Blue Cave', difficulty: 'Easy' },
      'aguas-claras': { title: 'Águas Claras', difficulty: 'Easy' },
      'cachoeira-da-fumaca': { title: 'Fumaça Waterfall', difficulty: 'Moderate / Hard' },
      'cachoeira-da-fumacinha': { title: 'Fumacinha Waterfall', difficulty: 'Moderate / Hard' },
      'pantanal-marimbus': { title: 'Marimbus Wetlands', difficulty: 'Easy' },
      'cachoeira-do-buracao': { title: 'Buracão Waterfall', difficulty: 'Easy / Moderate' },
      'cachoeira-do-herculano': { title: 'Herculano Waterfall', difficulty: 'Moderate' },
      'cachoeira-da-ferradura': { title: 'Ferradura Waterfall', difficulty: 'Easy / Moderate' },
      'mirante-do-pati-1-dia': { title: 'Pati Viewpoint 1 Day', difficulty: 'Moderate' },
      'mirante-do-cachoeirao': { title: 'Cachoeirão Viewpoint', difficulty: 'Moderate' },
      'ribeirao-do-meio': { title: 'Ribeirão do Meio Natural Pool', difficulty: 'Easy' },
      'chapada-especial-3-dias': { title: 'Chapada Special 3 Days', difficulty: 'Moderate / Hard' },
      'chapada-deslumbrante-4-dias': { title: 'Chapada Stunning 4 Days', difficulty: 'Moderate / Hard' },
      'chapada-extraordinaria-6-dias': { title: 'Chapada Extraordinary 6 Days', difficulty: 'Moderate / Hard' },
    },
  },

  es: {
    meta: {
      title: 'Aventuras',
      description:
        'Trekkings, paseos de un día y paquetes en la Chapada Diamantina, con guías nativos. Filtrá por duración, nivel, origen e inversión.',
      canonical: '/es/aventuras',
    },
    hero: {
      linha1: 'Conocé las',
      linha2: 'aventuras de la',
      linha3: '¡Chapada Diamantina!',
      filtrar: 'Filtrar aventuras',
      explorar: 'Explorá todas las aventuras',
      limpar: 'Limpiar',
      removerFiltro: 'Quitar filtro',
    },
    filtros: {
      local: 'Dónde empieza',
      duracao: 'Duración',
      dificuldade: 'Dificultad',
      investimento: 'Inversión',
      investimentoMax: 'Inversión máxima',
      escolher: 'Elegí tu sendero',
      todosLocais: 'Todos los puntos de partida',
      todas: 'Todas',
      qualquerDuracao: 'Cualquier duración',
      qualquer: 'Cualquiera',
      todosNiveis: 'Todos los niveles',
      todos: 'Todos',
      qualquerValor: 'Cualquier valor',
      ate: 'Hasta',
      dia: 'día',
      dias: 'días',
    },
    drawer: {
      titulo: 'Filtrar',
      fechar: 'Cerrar filtros',
      duracao: 'Duración',
      dificuldade: 'Dificultad',
      origem: 'Origen',
      preco: 'Precio · hasta',
      limpar: 'Limpiar filtros',
      ver: 'Ver {n} aventura',
      verPlural: 'Ver {n} aventuras',
      vazio: 'No se encontraron aventuras',
    },
    secoes: {
      trekking: {
        titulo: 'Trekking de 2 a 6 días',
        descricao:
          'Caminos para vivir la Chapada a tu ritmo, con guías nativos, seguridad y la experiencia de quien conoce cada tramo.',
      },
      dayTours: {
        titulo: 'Paseos de 1 día',
        descricao:
          'Baños de cascada, miradores y circuitos para quien quiere vivir mucho sin tener que contar las noches.',
      },
      pacotes: {
        titulo: 'Paquetes especiales',
        descricao:
          'Recorridos combinados para conocer distintos paisajes de la Chapada con toda la operación organizada por la manada Mamut.',
      },
    },
    vazio: {
      titulo: 'Ninguna aventura coincide con esos filtros.',
      texto: 'Probá ampliar la duración, el nivel o la inversión para descubrir otros caminos.',
    },
    card: { apartirDe: 'Desde', explorar: 'Explorar el sendero', conhecer: 'Conocer', dia: 'día', dias: 'días' },
    niveis: { 'Fácil': 'Fácil', 'Moderado': 'Moderado', 'Desafiador': 'Desafiante' },
    roteiros: {
      'cachoeira-do-palmital-2-dias': { title: 'Cascada del Palmital 2 Días', difficulty: 'Moderado' },
      'trilha-aguas-claras-2-dias': { title: 'Sendero Águas Claras 2 Días', difficulty: 'Fácil' },
      'travessia-vale-do-pati-5-dias': { title: 'Travesía Valle del Pati 5 Días', difficulty: 'Moderado / Difícil' },
      'vale-do-pati-3-dias': { title: 'Valle del Pati 3 Días', difficulty: 'Moderado' },
      'vale-do-pati-4-dias': { title: 'Valle del Pati 4 Días', difficulty: 'Moderado / Difícil' },
      'cachoeira-do-mixila-2-dias': { title: 'Cascada del Mixila 2 Días', difficulty: 'Moderado / Difícil' },
      'cachoeira-da-fumaca-por-baixo': { title: 'Cascada da Fumaça por Abajo', difficulty: 'Moderado / Difícil' },
      'cachoeira-da-fumaca-360': { title: 'Cascada da Fumaça 360', difficulty: 'Moderado / Difícil' },
      'cachoeira-do-fundao-vinte-e-um': { title: 'Cascadas do Fundão + Vinte e Um', difficulty: 'Muy difícil' },
      'vale-do-pati-4-dias-via-capao': { title: 'Valle del Pati 4 Días vía Capão', difficulty: 'Moderado / Difícil' },
      'vale-do-pati-5-dias-via-capao': { title: 'Valle del Pati 5 Días vía Capão', difficulty: 'Moderado / Difícil' },
      'mosquito-pai-inacio': { title: 'Mosquito + Pai Inácio', difficulty: 'Fácil / Moderado' },
      'city-tour-em-lencois': { title: 'City Tour en Lençóis', difficulty: 'Fácil' },
      'morro-do-pai-inacio': { title: 'Morro do Pai Inácio', difficulty: 'Fácil' },
      'cachoeira-do-mosquito': { title: 'Cascada del Mosquito', difficulty: 'Fácil' },
      'cachoeira-do-sossego': { title: 'Cascada do Sossego', difficulty: 'Moderado / Difícil' },
      'parque-da-muritiba': { title: 'Parque da Muritiba', difficulty: 'Fácil / Moderado' },
      'grutas-morro-do-camelo': { title: 'Grutas + Morro do Camelo', difficulty: 'Fácil' },
      'fazenda-pratinha-gruta-azul': { title: 'Fazenda Pratinha y Gruta Azul', difficulty: 'Fácil' },
      'aguas-claras': { title: 'Águas Claras', difficulty: 'Fácil' },
      'cachoeira-da-fumaca': { title: 'Cascada da Fumaça', difficulty: 'Moderado / Difícil' },
      'cachoeira-da-fumacinha': { title: 'Cascada da Fumacinha', difficulty: 'Moderado / Difícil' },
      'pantanal-marimbus': { title: 'Pantanal Marimbus', difficulty: 'Fácil' },
      'cachoeira-do-buracao': { title: 'Cascada do Buracão', difficulty: 'Fácil / Moderado' },
      'cachoeira-do-herculano': { title: 'Cascada do Herculano', difficulty: 'Moderado' },
      'cachoeira-da-ferradura': { title: 'Cascada da Ferradura', difficulty: 'Fácil / Moderado' },
      'mirante-do-pati-1-dia': { title: 'Mirador del Pati 1 Día', difficulty: 'Moderado' },
      'mirante-do-cachoeirao': { title: 'Mirador do Cachoeirão', difficulty: 'Moderado' },
      'ribeirao-do-meio': { title: 'Ribeirão do Meio', difficulty: 'Fácil' },
      'chapada-especial-3-dias': { title: 'Chapada Especial 3 Días', difficulty: 'Moderado / Difícil' },
      'chapada-deslumbrante-4-dias': { title: 'Chapada Deslumbrante 4 Días', difficulty: 'Moderado / Difícil' },
      'chapada-extraordinaria-6-dias': { title: 'Chapada Extraordinaria 6 Días', difficulty: 'Moderado / Difícil' },
    },
  },

  fr: {
    meta: {
      title: 'Aventures',
      description:
        'Treks, excursions d’une journée et forfaits dans la Chapada Diamantina, avec des guides natifs. Filtrez par durée, niveau, point de départ et budget.',
      canonical: '/fr/aventures',
    },
    hero: {
      linha1: 'Découvrez les',
      linha2: 'aventures de la',
      linha3: 'Chapada Diamantina !',
      filtrar: 'Filtrer les aventures',
      explorar: 'Découvrez toutes les aventures',
      limpar: 'Effacer',
      removerFiltro: 'Retirer le filtre',
    },
    filtros: {
      local: 'Point de départ',
      duracao: 'Durée',
      dificuldade: 'Difficulté',
      investimento: 'Budget',
      investimentoMax: 'Budget maximum',
      escolher: 'Choisissez votre sentier',
      todosLocais: 'Tous les points de départ',
      todas: 'Toutes',
      qualquerDuracao: 'Toutes durées',
      qualquer: 'Toutes',
      todosNiveis: 'Tous les niveaux',
      todos: 'Tous',
      qualquerValor: 'Tous budgets',
      ate: 'Jusqu’à',
      dia: 'jour',
      dias: 'jours',
    },
    drawer: {
      titulo: 'Filtrer',
      fechar: 'Fermer les filtres',
      duracao: 'Durée',
      dificuldade: 'Difficulté',
      origem: 'Point de départ',
      preco: 'Prix · jusqu’à',
      limpar: 'Effacer les filtres',
      ver: 'Voir {n} aventure',
      verPlural: 'Voir {n} aventures',
      vazio: 'Aucune aventure trouvée',
    },
    secoes: {
      trekking: {
        titulo: 'Treks de 2 à 6 jours',
        descricao:
          'Des chemins pour vivre la Chapada à votre rythme, avec des guides natifs, en toute sécurité et avec l’expérience de ceux qui connaissent chaque tronçon.',
      },
      dayTours: {
        titulo: 'Excursions d’une journée',
        descricao:
          'Baignades en cascade, belvédères et circuits pour qui veut vivre beaucoup sans avoir à compter les nuits.',
      },
      pacotes: {
        titulo: 'Forfaits spéciaux',
        descricao:
          'Des itinéraires combinés pour découvrir différents paysages de la Chapada, avec toute l’organisation assurée par la harde Mamut.',
      },
    },
    vazio: {
      titulo: 'Aucune aventure ne correspond à ces filtres.',
      texto: 'Essayez d’élargir la durée, le niveau ou le budget pour découvrir d’autres chemins.',
    },
    card: { apartirDe: 'À partir de', explorar: 'Découvrir le sentier', conhecer: 'Découvrir', dia: 'jour', dias: 'jours' },
    niveis: { 'Fácil': 'Facile', 'Moderado': 'Modéré', 'Desafiador': 'Difficile' },
    roteiros: {
      'cachoeira-do-palmital-2-dias': { title: 'Cascade du Palmital 2 Jours', difficulty: 'Modéré' },
      'trilha-aguas-claras-2-dias': { title: 'Sentier d’Águas Claras 2 Jours', difficulty: 'Facile' },
      'travessia-vale-do-pati-5-dias': { title: 'Traversée de la vallée du Pati 5 Jours', difficulty: 'Modéré / Difficile' },
      'vale-do-pati-3-dias': { title: 'Vallée du Pati 3 Jours', difficulty: 'Modéré' },
      'vale-do-pati-4-dias': { title: 'Vallée du Pati 4 Jours', difficulty: 'Modéré / Difficile' },
      'cachoeira-do-mixila-2-dias': { title: 'Cascade du Mixila 2 Jours', difficulty: 'Modéré / Difficile' },
      'cachoeira-da-fumaca-por-baixo': { title: 'Cascade da Fumaça par le bas', difficulty: 'Modéré / Difficile' },
      'cachoeira-da-fumaca-360': { title: 'Cascade da Fumaça 360', difficulty: 'Modéré / Difficile' },
      'cachoeira-do-fundao-vinte-e-um': { title: 'Cascades du Fundão + Vinte e Um', difficulty: 'Très difficile' },
      'vale-do-pati-4-dias-via-capao': { title: 'Vallée du Pati 4 Jours par le Capão', difficulty: 'Modéré / Difficile' },
      'vale-do-pati-5-dias-via-capao': { title: 'Vallée du Pati 5 Jours par le Capão', difficulty: 'Modéré / Difficile' },
      'mosquito-pai-inacio': { title: 'Mosquito + Pai Inácio', difficulty: 'Facile / Modéré' },
      'city-tour-em-lencois': { title: 'Visite de Lençóis', difficulty: 'Facile' },
      'morro-do-pai-inacio': { title: 'Morro do Pai Inácio', difficulty: 'Facile' },
      'cachoeira-do-mosquito': { title: 'Cascade du Mosquito', difficulty: 'Facile' },
      'cachoeira-do-sossego': { title: 'Cascade du Sossego', difficulty: 'Modéré / Difficile' },
      'parque-da-muritiba': { title: 'Parc de la Muritiba', difficulty: 'Facile / Modéré' },
      'grutas-morro-do-camelo': { title: 'Grottes + Morro do Camelo', difficulty: 'Facile' },
      'fazenda-pratinha-gruta-azul': { title: 'Fazenda Pratinha & Gruta Azul', difficulty: 'Facile' },
      'aguas-claras': { title: 'Águas Claras', difficulty: 'Facile' },
      'cachoeira-da-fumaca': { title: 'Cascade da Fumaça', difficulty: 'Modéré / Difficile' },
      'cachoeira-da-fumacinha': { title: 'Cascade da Fumacinha', difficulty: 'Modéré / Difficile' },
      'pantanal-marimbus': { title: 'Marais de Marimbus', difficulty: 'Facile' },
      'cachoeira-do-buracao': { title: 'Cascade du Buracão', difficulty: 'Facile / Modéré' },
      'cachoeira-do-herculano': { title: 'Cascade du Herculano', difficulty: 'Modéré' },
      'cachoeira-da-ferradura': { title: 'Cascade da Ferradura', difficulty: 'Facile / Modéré' },
      'mirante-do-pati-1-dia': { title: 'Belvédère du Pati 1 Jour', difficulty: 'Modéré' },
      'mirante-do-cachoeirao': { title: 'Belvédère du Cachoeirão', difficulty: 'Modéré' },
      'ribeirao-do-meio': { title: 'Ribeirão do Meio', difficulty: 'Facile' },
      'chapada-especial-3-dias': { title: 'Chapada Spéciale 3 Jours', difficulty: 'Modéré / Difficile' },
      'chapada-deslumbrante-4-dias': { title: 'Chapada Éblouissante 4 Jours', difficulty: 'Modéré / Difficile' },
      'chapada-extraordinaria-6-dias': { title: 'Chapada Extraordinaire 6 Jours', difficulty: 'Modéré / Difficile' },
    },
  },
  nl: {
    meta: {
      title: 'Avonturen',
      description:
        'Trektochten, dagtochten en pakketten in de Chapada Diamantina, met lokale gidsen. Filter op duur, niveau, vertrekpunt en budget.',
      canonical: '/nl/avonturen',
    },
    hero: {
      linha1: 'Ontdek de',
      linha2: 'avonturen van de',
      linha3: 'Chapada Diamantina!',
      filtrar: 'Avonturen filteren',
      explorar: 'Ontdek alle avonturen',
      limpar: 'Wissen',
      removerFiltro: 'Filter verwijderen',
    },
    filtros: {
      local: 'Vertrekpunt',
      duracao: 'Duur',
      dificuldade: 'Moeilijkheid',
      investimento: 'Budget',
      investimentoMax: 'Maximaal budget',
      escolher: 'Kies je pad',
      todosLocais: 'Alle vertrekpunten',
      todas: 'Alle',
      qualquerDuracao: 'Elke duur',
      qualquer: 'Elke',
      todosNiveis: 'Alle niveaus',
      todos: 'Alle',
      qualquerValor: 'Elk budget',
      ate: 'Tot',
      dia: 'dag',
      dias: 'dagen',
    },
    drawer: {
      titulo: 'Filteren',
      fechar: 'Filters sluiten',
      duracao: 'Duur',
      dificuldade: 'Moeilijkheid',
      origem: 'Vertrekpunt',
      preco: 'Prijs · tot',
      limpar: 'Filters wissen',
      ver: 'Bekijk {n} avontuur',
      verPlural: 'Bekijk {n} avonturen',
      vazio: 'Geen avonturen gevonden',
    },
    secoes: {
      trekking: {
        titulo: 'Trektochten van 2 tot 6 dagen',
        descricao:
          'Intensieve, meeslepende doorsteken en wildkamperen in het Nationaal Park Chapada Diamantina, met lokale gidsen die elk stuk kennen.',
      },
      dayTours: {
        titulo: 'Dagtochten',
        descricao:
          'Watervallen, natuurlijke baden, grotten en bergen — korte en lange paden, eendaagse doorsteken en 4×4-tochten, voor wie veel wil zien zonder nachten te tellen.',
      },
      pacotes: {
        titulo: 'Speciale pakketten',
        descricao:
          'Gecombineerde routes om verschillende landschappen van de Chapada te zien, met de hele organisatie in handen van de kudde van Mamut.',
      },
    },
    vazio: {
      titulo: 'Geen avontuur past bij deze filters.',
      texto: 'Maak de duur, het niveau of het budget wat ruimer om andere paden te vinden.',
    },
    card: { apartirDe: 'Vanaf', explorar: 'Ontdek het pad', conhecer: 'Bekijk', dia: 'dag', dias: 'dagen' },
    niveis: { 'Fácil': 'Makkelijk', 'Moderado': 'Gemiddeld', 'Desafiador': 'Uitdagend' },
    roteiros: {
      'cachoeira-do-palmital-2-dias': { title: 'Waterval Palmital 2 dagen', difficulty: 'Gemiddeld' },
      'trilha-aguas-claras-2-dias': { title: 'Wandelpad Águas Claras 2 dagen', difficulty: 'Makkelijk' },
      'travessia-vale-do-pati-5-dias': { title: 'Doorsteek Vale do Pati 5 dagen', difficulty: 'Gemiddeld / Zwaar' },
      'vale-do-pati-3-dias': { title: 'Vale do Pati 3 dagen', difficulty: 'Gemiddeld' },
      'vale-do-pati-4-dias': { title: 'Vale do Pati 4 dagen', difficulty: 'Gemiddeld / Zwaar' },
      'cachoeira-do-mixila-2-dias': { title: 'Waterval Mixila 2 dagen', difficulty: 'Gemiddeld / Zwaar' },
      'cachoeira-da-fumaca-por-baixo': { title: 'Waterval Fumaça van onderen', difficulty: 'Gemiddeld / Zwaar' },
      'cachoeira-da-fumaca-360': { title: 'Waterval Fumaça 360', difficulty: 'Gemiddeld / Zwaar' },
      'cachoeira-do-fundao-vinte-e-um': { title: 'Watervallen Fundão + Vinte e Um', difficulty: 'Zeer zwaar' },
      'vale-do-pati-4-dias-via-capao': { title: 'Vale do Pati 4 dagen (via Capão)', difficulty: 'Gemiddeld / Zwaar' },
      'vale-do-pati-5-dias-via-capao': { title: 'Vale do Pati 5 dagen (via Capão)', difficulty: 'Gemiddeld / Zwaar' },
      'mosquito-pai-inacio': { title: 'Mosquito + Pai Inácio', difficulty: 'Makkelijk / Gemiddeld' },
      'city-tour-em-lencois': { title: 'Stadswandeling Lençóis', difficulty: 'Makkelijk' },
      'morro-do-pai-inacio': { title: 'Morro do Pai Inácio', difficulty: 'Makkelijk' },
      'cachoeira-do-mosquito': { title: 'Waterval Mosquito', difficulty: 'Makkelijk' },
      'cachoeira-do-sossego': { title: 'Waterval Sossego', difficulty: 'Gemiddeld / Zwaar' },
      'parque-da-muritiba': { title: 'Parque da Muritiba', difficulty: 'Makkelijk / Gemiddeld' },
      'grutas-morro-do-camelo': { title: 'Grotten + Morro do Camelo', difficulty: 'Makkelijk' },
      'fazenda-pratinha-gruta-azul': { title: 'Fazenda Pratinha & Gruta Azul', difficulty: 'Makkelijk' },
      'aguas-claras': { title: 'Águas Claras', difficulty: 'Makkelijk' },
      'cachoeira-da-fumaca': { title: 'Waterval Fumaça', difficulty: 'Gemiddeld / Zwaar' },
      'cachoeira-da-fumacinha': { title: 'Waterval Fumacinha', difficulty: 'Gemiddeld / Zwaar' },
      'pantanal-marimbus': { title: 'Moeras van Marimbus', difficulty: 'Makkelijk' },
      'cachoeira-do-buracao': { title: 'Waterval Buracão', difficulty: 'Makkelijk / Gemiddeld' },
      'cachoeira-do-herculano': { title: 'Waterval Herculano', difficulty: 'Gemiddeld' },
      'cachoeira-da-ferradura': { title: 'Waterval Ferradura', difficulty: 'Makkelijk / Gemiddeld' },
      'mirante-do-pati-1-dia': { title: 'Uitkijkpunt Pati 1 dag', difficulty: 'Gemiddeld' },
      'mirante-do-cachoeirao': { title: 'Uitkijkpunt Cachoeirão', difficulty: 'Gemiddeld' },
      'ribeirao-do-meio': { title: 'Natuurlijk bad Ribeirão do Meio', difficulty: 'Makkelijk' },
      'chapada-especial-3-dias': { title: 'Chapada Especial 3 dagen', difficulty: 'Gemiddeld / Zwaar' },
      'chapada-deslumbrante-4-dias': { title: 'Chapada Deslumbrante 4 dagen', difficulty: 'Gemiddeld / Zwaar' },
      'chapada-extraordinaria-6-dias': { title: 'Chapada Extraordinária 6 dagen', difficulty: 'Gemiddeld / Zwaar' },
    },
  },
  de: {
    meta: {
      title: 'Abenteuer',
      description:
        'Trekkingtouren, Tagesausflüge und Pakete in der Chapada Diamantina, mit lokalen Guides. Filtere nach Dauer, Niveau, Startort und Budget.',
      canonical: '/de/abenteuer',
    },
    hero: {
      linha1: 'Entdecke die',
      linha2: 'Abenteuer der',
      linha3: 'Chapada Diamantina!',
      filtrar: 'Abenteuer filtern',
      explorar: 'Alle Abenteuer entdecken',
      limpar: 'Zurücksetzen',
      removerFiltro: 'Filter entfernen',
    },
    filtros: {
      local: 'Startort',
      duracao: 'Dauer',
      dificuldade: 'Schwierigkeit',
      investimento: 'Budget',
      investimentoMax: 'Maximales Budget',
      escolher: 'Wähle deinen Weg',
      todosLocais: 'Alle Startorte',
      todas: 'Alle',
      qualquerDuracao: 'Jede Dauer',
      qualquer: 'Jede',
      todosNiveis: 'Alle Niveaus',
      todos: 'Alle',
      qualquerValor: 'Jedes Budget',
      ate: 'Bis',
      dia: 'Tag',
      dias: 'Tage',
    },
    drawer: {
      titulo: 'Filtern',
      fechar: 'Filter schließen',
      duracao: 'Dauer',
      dificuldade: 'Schwierigkeit',
      origem: 'Startort',
      preco: 'Preis · bis',
      limpar: 'Filter zurücksetzen',
      ver: '{n} Abenteuer ansehen',
      verPlural: '{n} Abenteuer ansehen',
      vazio: 'Keine Abenteuer gefunden',
    },
    secoes: {
      trekking: {
        titulo: 'Trekkingtouren von 2 bis 6 Tagen',
        descricao:
          'Intensive, mitreißende Durchquerungen und Wildcamping im Nationalpark Chapada Diamantina, mit lokalen Guides, die jeden Abschnitt kennen.',
      },
      dayTours: {
        titulo: 'Tagesausflüge',
        descricao:
          'Wasserfälle, Naturbecken, Höhlen und Berge — kurze und lange Wege, Tagesdurchquerungen und 4×4-Touren, für alle, die viel sehen wollen, ohne Nächte zu zählen.',
      },
      pacotes: {
        titulo: 'Besondere Pakete',
        descricao:
          'Kombinierte Routen, um verschiedene Landschaften der Chapada zu erleben, mit der gesamten Organisation in den Händen der Mamut-Herde.',
      },
    },
    vazio: {
      titulo: 'Kein Abenteuer passt zu diesen Filtern.',
      texto: 'Erweitere Dauer, Niveau oder Budget etwas, um andere Wege zu finden.',
    },
    card: { apartirDe: 'Ab', explorar: 'Weg entdecken', conhecer: 'Ansehen', dia: 'Tag', dias: 'Tage' },
    niveis: { 'Fácil': 'Leicht', 'Moderado': 'Mittel', 'Desafiador': 'Anspruchsvoll' },
    roteiros: {
      'cachoeira-do-palmital-2-dias': { title: 'Wasserfall Palmital 2 Tage', difficulty: 'Mittel' },
      'trilha-aguas-claras-2-dias': { title: 'Wanderweg Águas Claras 2 Tage', difficulty: 'Leicht' },
      'travessia-vale-do-pati-5-dias': { title: 'Durchquerung Vale do Pati 5 Tage', difficulty: 'Mittel / Schwer' },
      'vale-do-pati-3-dias': { title: 'Vale do Pati 3 Tage', difficulty: 'Mittel' },
      'vale-do-pati-4-dias': { title: 'Vale do Pati 4 Tage', difficulty: 'Mittel / Schwer' },
      'cachoeira-do-mixila-2-dias': { title: 'Wasserfall Mixila 2 Tage', difficulty: 'Mittel / Schwer' },
      'cachoeira-da-fumaca-por-baixo': { title: 'Wasserfall Fumaça von unten', difficulty: 'Mittel / Schwer' },
      'cachoeira-da-fumaca-360': { title: 'Wasserfall Fumaça 360', difficulty: 'Mittel / Schwer' },
      'cachoeira-do-fundao-vinte-e-um': { title: 'Wasserfälle Fundão + Vinte e Um', difficulty: 'Sehr schwer' },
      'vale-do-pati-4-dias-via-capao': { title: 'Vale do Pati 4 Tage (über Capão)', difficulty: 'Mittel / Schwer' },
      'vale-do-pati-5-dias-via-capao': { title: 'Vale do Pati 5 Tage (über Capão)', difficulty: 'Mittel / Schwer' },
      'mosquito-pai-inacio': { title: 'Mosquito + Pai Inácio', difficulty: 'Leicht / Mittel' },
      'city-tour-em-lencois': { title: 'Stadtführung Lençóis', difficulty: 'Leicht' },
      'morro-do-pai-inacio': { title: 'Morro do Pai Inácio', difficulty: 'Leicht' },
      'cachoeira-do-mosquito': { title: 'Wasserfall Mosquito', difficulty: 'Leicht' },
      'cachoeira-do-sossego': { title: 'Wasserfall Sossego', difficulty: 'Mittel / Schwer' },
      'parque-da-muritiba': { title: 'Parque da Muritiba', difficulty: 'Leicht / Mittel' },
      'grutas-morro-do-camelo': { title: 'Höhlen + Morro do Camelo', difficulty: 'Leicht' },
      'fazenda-pratinha-gruta-azul': { title: 'Fazenda Pratinha & Gruta Azul', difficulty: 'Leicht' },
      'aguas-claras': { title: 'Águas Claras', difficulty: 'Leicht' },
      'cachoeira-da-fumaca': { title: 'Wasserfall Fumaça', difficulty: 'Mittel / Schwer' },
      'cachoeira-da-fumacinha': { title: 'Wasserfall Fumacinha', difficulty: 'Mittel / Schwer' },
      'pantanal-marimbus': { title: 'Sumpfgebiet Marimbus', difficulty: 'Leicht' },
      'cachoeira-do-buracao': { title: 'Wasserfall Buracão', difficulty: 'Leicht / Mittel' },
      'cachoeira-do-herculano': { title: 'Wasserfall Herculano', difficulty: 'Mittel' },
      'cachoeira-da-ferradura': { title: 'Wasserfall Ferradura', difficulty: 'Leicht / Mittel' },
      'mirante-do-pati-1-dia': { title: 'Aussichtspunkt Pati 1 Tag', difficulty: 'Mittel' },
      'mirante-do-cachoeirao': { title: 'Aussichtspunkt Cachoeirão', difficulty: 'Mittel' },
      'ribeirao-do-meio': { title: 'Naturbecken Ribeirão do Meio', difficulty: 'Leicht' },
      'chapada-especial-3-dias': { title: 'Chapada Especial 3 Tage', difficulty: 'Mittel / Schwer' },
      'chapada-deslumbrante-4-dias': { title: 'Chapada Deslumbrante 4 Tage', difficulty: 'Mittel / Schwer' },
      'chapada-extraordinaria-6-dias': { title: 'Chapada Extraordinária 6 Tage', difficulty: 'Mittel / Schwer' },
    },
  },
};
