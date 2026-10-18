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
};
