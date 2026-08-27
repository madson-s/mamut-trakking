/**
 * Conteúdo da página da Cachoeira do Sossego, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-sossego e EN de
 * mamut.agency/en/adventures/sossego-waterfall. ES é tradução feita aqui.
 *
 * ⚠️ O preço de entrada diverge entre as duas páginas da operadora: a
 * portuguesa diz R$ 200 e a inglesa R$ 240. Mantive R$ 200, que é o valor já
 * registrado no hub de aventuras.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const SOSSEGO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/sossego/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/sossego/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/sossego/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/sossego/3.jpeg', width: 1600, height: 1200 },
  ],
  stats: [
    ['15 km', '/svg/_icons/icon_03_montain.svg'],
    ['+750m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Difícil', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 200,
};

export const SOSSEGO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Sossego',
      description:
        'Uma das trilhas mais desafiadoras da Chapada Diamantina: 15 km saltando pedras no leito do Rio Ribeirão, entre cânions de mais de 100 metros.',
      canonical: '/pt/aventuras/cachoeira-do-sossego',
    },
    hero: {
      nivel: 'Moderado / Difícil',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Cachoeira do Sossego.',
      lead: 'Quinze quilômetros saltando pedra no leito do rio, entre paredões de mais de 100 metros.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Ganho de elevação', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Sossego.',
      paragrafos: [
        'Uma das trilhas mais impressionantes e desafiadoras da Chapada Diamantina. A caminhada envolve subidas e descidas, literalmente pulando pedras no leito do Rio Ribeirão, cercado por cânions que ultrapassam os 100 metros de altura.',
        'O trajeto até a cachoeira é intenso, com muitos aclives e declives. A altimetria acumulada ao final do dia pode ultrapassar os 750 metros.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída às 8h — com tolerância de 15 minutos — do centro de Lençóis, pela trilha tradicional em direção ao Ribeirão do Meio. São cerca de 30 minutos até o Mirante do Rio Ribeirão, de onde já se vê parte do trajeto.',
        'Dali a trilha segue rio acima, com a paisagem mudando a cada passo. No caminho aparecem construções antigas e as "tocas" que abrigavam garimpeiros em busca de diamantes.',
        'Depois de cerca de 1 hora chega-se ao leito do Rio Ribeirão, onde é preciso saltar por várias pedras — que podem estar escorregadias — e, dependendo do clima, atravessar a água. É o trecho que mais cobra do grupo. Mais 30 minutos até a cachoeira.',
        'A volta é pelo mesmo caminho, com parada nos Caldeirões do Ribeirão de Cima para um banho em águas mais rasas.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 250', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 200', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório compromete a segurança do grupo e inviabiliza a participação.',
        requiredColumns: [
          ['Água (1,5L por pessoa)', 'Tênis ou bota de caminhada', 'Meias extras', 'Roupas leves', 'Roupa de banho'],
          ['Boné ou chapéu', 'Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Toalha', 'Câmera']],
        note: 'O leito do rio é escorregadio: calçado com boa aderência faz diferença real neste roteiro.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Colete salva-vidas'],
        excluded: ['Qualquer item não listado', 'Transfer (opcional)', 'Piquenique (opcional)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq('pt', 'O leito do Rio Ribeirão exige saltar entre pedras que podem estar escorregadias e, conforme o clima, atravessar a água. É o que torna esta trilha mais difícil do que a distância sugere.'),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Sua trilha começa', 'com uma mensagem.'],
      corpo: 'Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a Chapada Diamantina e como se preparar.',
      botao: 'Entrar para o bando',
    },
  },

  en: {
    meta: {
      title: 'Sossego Waterfall',
      description:
        'One of the most demanding trails in the Chapada Diamantina: 15 km hopping boulders along the Ribeirão riverbed, between canyons over 100 metres high.',
      canonical: '/en/adventures/sossego-waterfall',
    },
    hero: {
      nivel: 'Moderate / Hard',
      origem: 'Starts in Lençóis',
      duracao: '1 day',
      titulo: 'Sossego Waterfall.',
      lead: 'Fifteen kilometres hopping boulders along the riverbed, between walls over 100 metres high.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Walking distance', 'Elevation gain', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the Sossego Waterfall.',
      paragrafos: [
        'One of the most impressive and rewarding trails in the Chapada Diamantina. It involves hiking up and down, walking and jumping on stones literally in the Ribeirão riverbed, surrounded by canyons over 100 metres high.',
        'The path to reach the waterfall is quite intense, with many ascents and descents. The accumulated elevation gain by the end of the day can exceed 750 m.',
        'On the walks the picnic stands in for lunch: balanced meals across vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any force majeure the team considers relevant.',
      corpo: [
        'Departure at 8:00 — with 15 minutes of tolerance — from the centre of Lençóis, on the traditional trail towards Ribeirão do Meio. It is about 30 minutes to the Rio Ribeirão viewpoint, from where you already see part of the route ahead.',
        'From there the trail follows the river upstream, with the landscape changing at every step. Along the way you pass old constructions and the shelters that housed prospectors searching for diamonds.',
        'After roughly 1 hour you reach the Ribeirão riverbed, where you have to jump across many stones — which may be slippery — and, depending on the weather, cross the water. This is the stretch that asks the most of the group. Another 30 minutes to the waterfall.',
        'The way back follows the same route, with a stop at the Caldeirões do Ribeirão de Cima for a swim in shallower water.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 250', nota: 'Minimum 2 people. Only your group on the trail.' },
        { titulo: 'In a group', preco: 'R$ 200', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: ask our team.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'Items marked with * are mandatory. Missing any mandatory item compromises the safety of the group and makes participation impossible.',
        requiredColumns: [
          ['Water (1.5 L per person)', 'Hiking shoes or boots', 'Spare socks', 'Light clothing', 'Swimwear'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your belongings'],
        ],
        recommendedColumns: [['Rain gear (body and backpack)', 'Trekking pole'], ['A snack or fruit', 'Towel', 'Camera']],
        note: 'The riverbed is slippery: footwear with real grip makes a difference on this route.',
      },
      {
        type: 'included',
        title: 'What is included / not included',
        included: ['Bilingual mountain guide with APH training', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Life jacket'],
        excluded: ['Anything not listed above', 'Transfer (optional)', 'Picnic (optional)', 'Personal equipment', 'Medical evacuation', 'Lodging before or after the tour'],
      },
      safetyFaq('en', 'The Ribeirão riverbed requires jumping between stones that may be slippery and, depending on the weather, crossing the water. That is what makes this trail harder than the distance suggests.'),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Your trail starts', 'with a message.'],
      corpo: 'Talk to us on WhatsApp. Find out which trip suits you best in the Chapada Diamantina, and how to get ready for it.',
      botao: 'Join the herd',
    },
  },

  es: {
    meta: {
      title: 'Cascada do Sossego',
      description:
        'Uno de los senderos más exigentes de la Chapada Diamantina: 15 km saltando piedras en el lecho del Río Ribeirão, entre cañones de más de 100 metros.',
      canonical: '/es/aventuras/cascada-do-sossego',
    },
    hero: {
      nivel: 'Moderado / Difícil',
      origem: 'Sale de Lençóis',
      duracao: '1 día',
      titulo: 'Cascada do Sossego.',
      lead: 'Quince kilómetros saltando piedras en el lecho del río, entre paredones de más de 100 metros.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Desnivel acumulado', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada do Sossego.',
      paragrafos: [
        'Uno de los senderos más impresionantes y desafiantes de la Chapada Diamantina. La caminata implica subidas y bajadas, literalmente saltando piedras en el lecho del Río Ribeirão, rodeado de cañones que superan los 100 metros de altura.',
        'El trayecto hasta la cascada es intenso, con muchas subidas y bajadas. El desnivel acumulado al final del día puede superar los 750 metros.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida a las 8h — con tolerancia de 15 minutos — del centro de Lençóis, por el sendero tradicional hacia el Ribeirão do Meio. Son unos 30 minutos hasta el mirador del Río Ribeirão, desde donde ya se ve parte del trayecto.',
        'Desde ahí el sendero sigue río arriba, con el paisaje cambiando a cada paso. En el camino aparecen construcciones antiguas y las "tocas" que albergaban a los mineros que buscaban diamantes.',
        'Después de aproximadamente 1 hora se llega al lecho del Río Ribeirão, donde hay que saltar por varias piedras — que pueden estar resbaladizas — y, según el clima, cruzar el agua. Es el tramo que más le exige al grupo. Otros 30 minutos hasta la cascada.',
        'La vuelta es por el mismo camino, con parada en los Caldeirões do Ribeirão de Cima para un baño en aguas más bajas.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 250', nota: 'Mínimo 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 200', nota: 'De 2 a 7 personas. Te sumás a un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio compromete la seguridad del grupo e impide la participación.',
        requiredColumns: [
          ['Agua (1,5 L por persona)', 'Zapatillas o botas de trekking', 'Medias extra', 'Ropa liviana', 'Ropa de baño'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Merienda o fruta', 'Toalla', 'Cámara']],
        note: 'El lecho del río es resbaladizo: un calzado con buen agarre hace una diferencia real en este recorrido.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña bilingüe con formación APH', 'Rastreador satelital SPOT X', 'Seguro de aventura', 'Kit de primeros auxilios', 'Chaleco salvavidas'],
        excluded: ['Cualquier ítem no listado', 'Transfer (opcional)', 'Picnic (opcional)', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq('es', 'El lecho del Río Ribeirão exige saltar entre piedras que pueden estar resbaladizas y, según el clima, cruzar el agua. Es lo que hace este sendero más difícil de lo que la distancia sugiere.'),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['Tu sendero empieza', 'con un mensaje.'],
      corpo: 'Hablá con nosotros por WhatsApp. Descubrí cuál es tu recorrido ideal para conocer la Chapada Diamantina y cómo prepararte.',
      botao: 'Sumate a la manada',
    },
  },
};
