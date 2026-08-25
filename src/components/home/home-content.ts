/**
 * Todo o texto da home, por idioma.
 *
 * PT é o copy do redesenho (Figma). EN e ES são tradução feita neste
 * repositório: a home publicada em mamut.agency/en é a do site antigo, com
 * outra estrutura de seções, então não há original a transcrever.
 *
 * ⚠️ Os depoimentos são avaliações reais do TripAdvisor. Nome, nota e link são
 * fato e não mudam com o idioma; as citações aqui são traduções. Matt D e
 * Laura C quase certamente escreveram em inglês — vale conferir o original no
 * `reviewUrl` antes de publicar a versão EN.
 */

import type { Locale } from '@/lib/site';
import { ADVENTURE_SEGMENT } from '@/lib/site';

/** Ids do manifesto de rotas — o carrossel mostra estes sete, nesta ordem. */
export const TRAIL_IDS = [
  'vale-do-pati-3',
  'palmital',
  'vale-do-pati-5',
  'aguas-claras',
  'mosquito-pai-inacio',
  'mixila',
  'vale-do-pati-4',
] as const;

export type TrailId = (typeof TRAIL_IDS)[number];

export type HomeContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    /** Três linhas do h1; a arte dos caminhantes entra entre a 1ª e a 2ª. */
    titulo: { mamut: string; guia: string; linha2: string; linha3: string };
    lead: [string, string];
    ctaTrilhas: string;
    ctaTrilhasHref: string;
    ctaGuia: string;
    selo: { antes: string; jornada: string; meio: string; primitivas: string };
    destinos: { titulo: string; subtitulo: string; href: string }[];
    /** Rótulo acessível dos atalhos de destino: `${verDestino} Vale do Pati`. */
    verDestino: string;
  };
  stats: { value: string; label: string }[];
  manifesto: {
    eyebrow: string;
    /** `antes` [logo] `meio` / `depois` — a arte do mamute entra no meio da frase. */
    titulo: { antes: string; meio: string; depois: string };
    corpo: string;
    memoria: string;
    cta: string;
    ctaHref: string;
  };
  paths: {
    /** Texto de cada card do carrossel, indexado pelo id da aventura. */
    trilhas: Record<TrailId, { duration: string; level: string; title: string; description: string }>;
    eyebrow: string;
    titulo: { antes: string; destaque: string };
    todos: string;
    todosHref: string;
    arraste: string;
    explorar: string;
    carrossel: { rotulo: string; anterior: string; proximo: string; pagina: string; progresso: string };
  };
  entrelinhas: { rotulo: string; bando: string; reune: string; mundo: string };
  guides: { titulo: { linha1: string; linha2: string; linha3: string }; cta: string; ctaHref: string; pagina: string };
  reviews: {
    badge: string;
    titulo: { antes: string; destaque: string };
    avaliacoes: string;
    avaliacoesLabel: string;
    mediaChip: string;
    mediaLabel: string;
    rankingChip: string;
    ranking: string;
    rankingLabel: string;
    ctaTrilha: string;
    ctaTrilhaHref: string;
    ctaTripadvisor: string;
    /** Só as citações traduzem: nome, nota e link são fato. */
    depoimentos: string[];
  };
  finalCta: { titulo: [string, string]; corpo: string; cta: string; ctaHref: string };
};

const destinos = (locale: Locale) => {
  const seg = ADVENTURE_SEGMENT[locale];
  const slug = {
    pt: ['vale-do-pati-3-dias', 'cachoeira-do-palmital', 'cachoeira-do-mosquito-morro-do-pai-inacio'],
    en: ['pati-valley-3-days', 'palmital-waterfall', 'mosquito-waterfall-pai-inacio'],
    es: ['valle-del-pati-3-dias', 'cascada-del-palmital', 'cascada-del-mosquito-morro-do-pai-inacio'],
  }[locale];
  return slug.map((s) => `/${locale}/${seg}/${s}`);
};

const PT_DESTINOS = destinos('pt');
const EN_DESTINOS = destinos('en');
const ES_DESTINOS = destinos('es');

export const HOME_CONTENT: Record<Locale, HomeContent> = {
  pt: {
    meta: {
      title: 'Mamut Trekking · Chapada Diamantina',
      description:
        'Operadora especializada em trekkings e aventuras na Chapada Diamantina, Bahia.',
    },
    hero: {
      eyebrow: 'Guias nativos · Chapada Diamantina',
      titulo: { mamut: 'MAMUT', guia: 'GUIA.', linha2: 'VOCÊ SÓ PRECISA', linha3: 'APROVEITAR.' },
      lead: [
        'Trekkings guiados por quem é filho da Chapada Diamantina.',
        'Cada trilha é uma jornada de volta ao que você é.',
      ],
      ctaTrilhas: 'Escolha a sua trilha',
      ctaTrilhasHref: '/pt/aventuras',
      ctaGuia: 'Falar com guia',
      selo: { antes: 'Uma', jornada: 'jornada', meio: 'de resgate das práticas', primitivas: 'primitivas' },
      destinos: [
        { titulo: 'Vale do Pati', subtitulo: '3 dias · travessia', href: PT_DESTINOS[0] },
        { titulo: 'Cachoeira do Palmital', subtitulo: '2 dias · trekking', href: PT_DESTINOS[1] },
        { titulo: 'Pai Inácio', subtitulo: '1 dia · trekking', href: PT_DESTINOS[2] },
      ],
      verDestino: 'Conhecer',
    },
    stats: [
      { value: '+500', label: 'aventureiros guiados' },
      { value: 'Guias', label: 'brigadistas e nativos' },
      { value: 'Cadastur', label: 'regularizado' },
      { value: 'TripAdvisor', label: 'Certificado de Excelência' },
      { value: 'Reserva', label: 'online garantida' },
    ],
    manifesto: {
      eyebrow: 'Inspirados pelos nossos antepassados nômades',
      titulo: { antes: 'Somos o', meio: 'bando', depois: 'que guia a sua tribo.' },
      corpo:
        'Na imensidão dos mega continentes, os mamutes caminhavam em grandes grupos — marcando sua existência para sempre.',
      memoria: 'É dessa memória que nascemos.',
      cta: 'Leia nosso manifesto',
      ctaHref: '/pt/manifesto',
    },
    paths: {
      trilhas: {
        'vale-do-pati-3': {
          duration: '3 Dias', level: 'Médio', title: 'Vale do Pati (03 dias)',
          description: 'Uma imersão de três dias entre cânions, rios e comunidades no coração do Vale do Pati.',
        },
        palmital: {
          duration: '2 Dias', level: 'Médio', title: 'Cachoeira do Palmital (02 dias)',
          description: 'Uma travessia entre campos de altitude e paredões até as águas da Cachoeira do Palmital.',
        },
        'vale-do-pati-5': {
          duration: '5 Dias', level: 'Médio', title: 'Vale do Pati (05 dias)',
          description: 'Localizado no coração do Parque Nacional da Chapada Diamantina, rodeado por montanhas, cachoeiras e grutas.',
        },
        'aguas-claras': {
          duration: '1 Dia', level: 'Leve', title: 'Trilha Águas Claras',
          description: 'Um dia entre campos rupestres, piscinas naturais e os grandes paredões da Chapada Diamantina.',
        },
        'mosquito-pai-inacio': {
          duration: '1 Dia', level: 'Médio', title: 'Mosquito + Pai Inácio',
          description: 'Cachoeira do Mosquito e pôr do sol no Morro do Pai Inácio em um roteiro completo de um dia.',
        },
        mixila: {
          duration: '2 Dias', level: 'Médio', title: 'Cachoeira do Mixila',
          description: 'Uma travessia até uma das cachoeiras mais preservadas da região de Lençóis.',
        },
        'vale-do-pati-4': {
          duration: '4 Dias', level: 'Desafiador', title: 'Vale do Pati (04 dias)',
          description: 'Quatro dias explorando mirantes, cachoeiras e casas de nativos no Vale do Pati.',
        },
      },
      eyebrow: 'Escolha seu caminho',
      titulo: { antes: 'Roteiros que a', destaque: 'Chapada pede.' },
      todos: 'Todos os roteiros',
      todosHref: '/pt/aventuras',
      arraste: 'Arraste para explorar os próximos roteiros →',
      explorar: 'Explorar a trilha',
      carrossel: {
        rotulo: 'Carrossel de roteiros',
        anterior: 'Mostrar roteiro anterior',
        proximo: 'Mostrar próximo roteiro',
        pagina: 'Página do carrossel de roteiros',
        progresso: 'Progresso do carrossel de roteiros',
      },
    },
    entrelinhas: {
      rotulo: 'Um bando que reune o mundo inteiro',
      bando: 'Um bando',
      reune: 'que reune',
      mundo: 'o mundo inteiro!',
    },
    guides: {
      titulo: { linha1: 'Nascidos aqui.', linha2: 'Formados pela', linha3: 'Chapada.' },
      cta: 'Conheça quem guia o nosso bando',
      ctaHref: '/pt/sobre#guias',
      pagina: 'Página dos guias',
    },
    reviews: {
      badge: 'Avaliações verificadas · TripAdvisor',
      titulo: { antes: 'O que nosso bando', destaque: 'diz das aventuras.' },
      avaliacoes: '145 avaliações',
      avaliacoesLabel: 'Avaliações',
      mediaChip: '5.0 geral',
      mediaLabel: 'Média de nota geral',
      rankingChip: '#5 em Lençóis',
      ranking: '#5 no ranking',
      rankingLabel: 'de atividades ao ar livre em Lençóis',
      ctaTrilha: 'Escolha a sua trilha',
      ctaTrilhaHref: '/pt/aventuras',
      ctaTripadvisor: 'Conheça o nosso TripAdvisor',
      depoimentos: [
        '“Desde o primeiro contato até o final da viagem, a agência demonstrou profissionalismo e organização.”',
        '“Os pontos turísticos eram deslumbrantes, as cachoeiras eram épicas, e a aventura era incrível.”',
        '“Nosso guia foi muito amigável, cuidadoso e adaptado a todas as nossas necessidades. Seu conhecimento sobre o parque nacional é enorme.”',
      ],
    },
    finalCta: {
      titulo: ['Sua trilha começa', 'com uma mensagem.'],
      corpo:
        'Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a Chapada Diamantina e como se preparar.',
      cta: 'Entrar para o bando',
      ctaHref: '/pt/contato',
    },
  },

  en: {
    meta: {
      title: 'Mamut Trekking · Chapada Diamantina',
      description: 'A specialist operator for treks and adventures in Chapada Diamantina, Bahia.',
    },
    hero: {
      eyebrow: 'Local guides · Chapada Diamantina',
      titulo: { mamut: 'MAMUT', guia: 'GUIDES.', linha2: 'ALL YOU HAVE TO DO', linha3: 'IS ENJOY IT.' },
      lead: [
        'Treks guided by those born and raised in the Chapada Diamantina.',
        'Every trail is a journey back to who you are.',
      ],
      ctaTrilhas: 'Choose your trail',
      ctaTrilhasHref: '/en/adventures',
      ctaGuia: 'Talk to a guide',
      selo: { antes: 'A', jornada: 'journey', meio: 'to reclaim the', primitivas: 'primitive' },
      destinos: [
        { titulo: 'Pati Valley', subtitulo: '3 days · traverse', href: EN_DESTINOS[0] },
        { titulo: 'Palmital Waterfall', subtitulo: '2 days · trek', href: EN_DESTINOS[1] },
        { titulo: 'Pai Inácio', subtitulo: '1 day · trek', href: EN_DESTINOS[2] },
      ],
      verDestino: 'See',
    },
    stats: [
      { value: '+500', label: 'adventurers guided' },
      { value: 'Guides', label: 'fire brigade trained, born here' },
      { value: 'Cadastur', label: 'licensed operator' },
      { value: 'TripAdvisor', label: 'Certificate of Excellence' },
      { value: 'Booking', label: 'guaranteed online' },
    ],
    manifesto: {
      eyebrow: 'Inspired by our nomadic ancestors',
      titulo: { antes: 'We are the', meio: 'herd', depois: 'that guides your tribe.' },
      corpo:
        'Across the vastness of the mega continents, mammoths walked in great herds — leaving their mark forever.',
      memoria: 'That memory is where we come from.',
      cta: 'Read our manifesto',
      ctaHref: '/en/manifesto',
    },
    paths: {
      trilhas: {
        'vale-do-pati-3': {
          duration: '3 Days', level: 'Moderate', title: 'Pati Valley (03 days)',
          description: 'A three-day immersion among canyons, rivers and communities in the heart of the Pati Valley.',
        },
        palmital: {
          duration: '2 Days', level: 'Moderate', title: 'Palmital Waterfall (02 days)',
          description: 'A traverse across highland fields and rock walls down to the waters of Palmital Waterfall.',
        },
        'vale-do-pati-5': {
          duration: '5 Days', level: 'Moderate', title: 'Pati Valley (05 days)',
          description: 'Set in the heart of the Chapada Diamantina National Park, surrounded by mountains, waterfalls and caves.',
        },
        'aguas-claras': {
          duration: '1 Day', level: 'Easy', title: 'Águas Claras Trail',
          description: 'A day among rocky fields, natural pools and the great rock walls of the Chapada Diamantina.',
        },
        'mosquito-pai-inacio': {
          duration: '1 Day', level: 'Moderate', title: 'Mosquito + Pai Inácio',
          description: 'Mosquito Waterfall and sunset at Morro do Pai Inácio in one complete day trip.',
        },
        mixila: {
          duration: '2 Days', level: 'Moderate', title: 'Mixila Waterfall',
          description: 'A traverse to one of the best-preserved waterfalls in the Lençóis region.',
        },
        'vale-do-pati-4': {
          duration: '4 Days', level: 'Challenging', title: 'Pati Valley (04 days)',
          description: 'Four days exploring viewpoints, waterfalls and the homes of local families in the Pati Valley.',
        },
      },
      eyebrow: 'Choose your path',
      titulo: { antes: 'The trips the', destaque: 'Chapada calls for.' },
      todos: 'All trips',
      todosHref: '/en/adventures',
      arraste: 'Drag to explore the next trips →',
      explorar: 'Explore the trail',
      carrossel: {
        rotulo: 'Trips carousel',
        anterior: 'Show previous trip',
        proximo: 'Show next trip',
        pagina: 'Trips carousel page',
        progresso: 'Trips carousel progress',
      },
    },
    entrelinhas: {
      rotulo: 'A herd that brings the whole world together',
      bando: 'A herd',
      reune: 'that brings',
      mundo: 'the whole world!',
    },
    guides: {
      titulo: { linha1: 'Born here.', linha2: 'Shaped by the', linha3: 'Chapada.' },
      cta: 'Meet the people who guide our herd',
      ctaHref: '/en/about#guias',
      pagina: 'Guides page',
    },
    reviews: {
      badge: 'Verified reviews · TripAdvisor',
      titulo: { antes: 'What our herd', destaque: 'says about the trips.' },
      avaliacoes: '145 reviews',
      avaliacoesLabel: 'Reviews',
      mediaChip: '5.0 overall',
      mediaLabel: 'Overall rating',
      rankingChip: '#5 in Lençóis',
      ranking: '#5 ranked',
      rankingLabel: 'of outdoor activities in Lençóis',
      ctaTrilha: 'Choose your trail',
      ctaTrilhaHref: '/en/adventures',
      ctaTripadvisor: 'See our TripAdvisor',
      depoimentos: [
        '“From the first contact to the end of the trip, the agency showed professionalism and organisation.”',
        '“The sights were stunning, the waterfalls were epic, and the adventure was incredible.”',
        '“Our guide was very friendly, careful and adapted to all of our needs. His knowledge of the national park is enormous.”',
      ],
    },
    finalCta: {
      titulo: ['Your trail starts', 'with a message.'],
      corpo:
        'Talk to us on WhatsApp. Find out which trip suits you best in the Chapada Diamantina, and how to get ready for it.',
      cta: 'Join the herd',
      ctaHref: '/en/contact',
    },
  },

  es: {
    meta: {
      title: 'Mamut Trekking · Chapada Diamantina',
      description:
        'Operadora especializada en trekkings y aventuras en la Chapada Diamantina, Bahía.',
    },
    hero: {
      eyebrow: 'Guías nativos · Chapada Diamantina',
      titulo: { mamut: 'MAMUT', guia: 'GUÍA.', linha2: 'VOS SOLO TENÉS', linha3: 'QUE DISFRUTAR.' },
      lead: [
        'Trekkings guiados por quienes nacieron en la Chapada Diamantina.',
        'Cada sendero es un viaje de vuelta a lo que sos.',
      ],
      ctaTrilhas: 'Elegí tu sendero',
      ctaTrilhasHref: '/es/aventuras',
      ctaGuia: 'Hablar con un guía',
      selo: { antes: 'Un', jornada: 'viaje', meio: 'de rescate de las prácticas', primitivas: 'primitivas' },
      destinos: [
        { titulo: 'Valle del Pati', subtitulo: '3 días · travesía', href: ES_DESTINOS[0] },
        { titulo: 'Cascada del Palmital', subtitulo: '2 días · trekking', href: ES_DESTINOS[1] },
        { titulo: 'Pai Inácio', subtitulo: '1 día · trekking', href: ES_DESTINOS[2] },
      ],
      verDestino: 'Conocer',
    },
    stats: [
      { value: '+500', label: 'aventureros guiados' },
      { value: 'Guías', label: 'brigadistas y nativos' },
      { value: 'Cadastur', label: 'operadora habilitada' },
      { value: 'TripAdvisor', label: 'Certificado de Excelencia' },
      { value: 'Reserva', label: 'online garantizada' },
    ],
    manifesto: {
      eyebrow: 'Inspirados por nuestros antepasados nómades',
      titulo: { antes: 'Somos la', meio: 'manada', depois: 'que guía a tu tribu.' },
      corpo:
        'En la inmensidad de los megacontinentes, los mamuts caminaban en grandes grupos — marcando su existencia para siempre.',
      memoria: 'De esa memoria nacimos.',
      cta: 'Leé nuestro manifiesto',
      ctaHref: '/es/manifiesto',
    },
    paths: {
      trilhas: {
        'vale-do-pati-3': {
          duration: '3 Días', level: 'Medio', title: 'Valle del Pati (03 días)',
          description: 'Una inmersión de tres días entre cañones, ríos y comunidades en el corazón del Valle del Pati.',
        },
        palmital: {
          duration: '2 Días', level: 'Medio', title: 'Cascada del Palmital (02 días)',
          description: 'Una travesía entre campos de altura y paredones hasta las aguas de la Cascada del Palmital.',
        },
        'vale-do-pati-5': {
          duration: '5 Días', level: 'Medio', title: 'Valle del Pati (05 días)',
          description: 'En el corazón del Parque Nacional da Chapada Diamantina, rodeado de montañas, cascadas y grutas.',
        },
        'aguas-claras': {
          duration: '1 Día', level: 'Suave', title: 'Sendero Águas Claras',
          description: 'Un día entre campos rupestres, piscinas naturales y los grandes paredones de la Chapada Diamantina.',
        },
        'mosquito-pai-inacio': {
          duration: '1 Día', level: 'Medio', title: 'Mosquito + Pai Inácio',
          description: 'Cascada del Mosquito y atardecer en el Morro do Pai Inácio, en un recorrido completo de un día.',
        },
        mixila: {
          duration: '2 Días', level: 'Medio', title: 'Cascada del Mixila',
          description: 'Una travesía hasta una de las cascadas más preservadas de la región de Lençóis.',
        },
        'vale-do-pati-4': {
          duration: '4 Días', level: 'Desafiante', title: 'Valle del Pati (04 días)',
          description: 'Cuatro días explorando miradores, cascadas y casas de nativos en el Valle del Pati.',
        },
      },
      eyebrow: 'Elegí tu camino',
      titulo: { antes: 'Recorridos que la', destaque: 'Chapada pide.' },
      todos: 'Todos los recorridos',
      todosHref: '/es/aventuras',
      arraste: 'Arrastrá para explorar los próximos recorridos →',
      explorar: 'Explorar el sendero',
      carrossel: {
        rotulo: 'Carrusel de recorridos',
        anterior: 'Mostrar recorrido anterior',
        proximo: 'Mostrar recorrido siguiente',
        pagina: 'Página del carrusel de recorridos',
        progresso: 'Progreso del carrusel de recorridos',
      },
    },
    entrelinhas: {
      rotulo: 'Una manada que reúne al mundo entero',
      bando: 'Una manada',
      reune: 'que reúne',
      mundo: 'al mundo entero!',
    },
    guides: {
      titulo: { linha1: 'Nacidos acá.', linha2: 'Formados por la', linha3: 'Chapada.' },
      cta: 'Conocé a quienes guían nuestra manada',
      ctaHref: '/es/quienes-somos#guias',
      pagina: 'Página de los guías',
    },
    reviews: {
      badge: 'Reseñas verificadas · TripAdvisor',
      titulo: { antes: 'Lo que nuestra manada', destaque: 'dice de las aventuras.' },
      avaliacoes: '145 reseñas',
      avaliacoesLabel: 'Reseñas',
      mediaChip: '5.0 general',
      mediaLabel: 'Promedio general',
      rankingChip: '#5 en Lençóis',
      ranking: '#5 en el ranking',
      rankingLabel: 'de actividades al aire libre en Lençóis',
      ctaTrilha: 'Elegí tu sendero',
      ctaTrilhaHref: '/es/aventuras',
      ctaTripadvisor: 'Conocé nuestro TripAdvisor',
      depoimentos: [
        '“Desde el primer contacto hasta el final del viaje, la agencia demostró profesionalismo y organización.”',
        '“Los paisajes eran deslumbrantes, las cascadas épicas y la aventura increíble.”',
        '“Nuestro guía fue muy amable, cuidadoso y se adaptó a todas nuestras necesidades. Su conocimiento del parque nacional es enorme.”',
      ],
    },
    finalCta: {
      titulo: ['Tu sendero empieza', 'con un mensaje.'],
      corpo:
        'Hablá con nosotros por WhatsApp. Descubrí cuál es tu recorrido ideal para conocer la Chapada Diamantina y cómo prepararte.',
      cta: 'Sumate a la manada',
      ctaHref: '/es/contacto',
    },
  },
};
