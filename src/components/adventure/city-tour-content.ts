/**
 * Conteúdo da página do City Tour em Lençóis, por idioma.
 *
 * PT vem de mamut.agency/aventuras/city-tour-em-lencois-ba e EN de
 * mamut.agency/en/aventuras/lencois-historic-center-guided-walking-tour.
 * ES é tradução feita aqui.
 *
 * É o único roteiro do site que dura 1 hora e não sai da cidade — daí a faixa
 * de números não trazer deslocamento de carro (a fonte marca 0 km).
 *
 * ⚠️ O checklist da fonte é o de trilha, colado por engano (o título na página
 * ainda diz "O que levar para o Cachoeirão do Pati?" e pede bota de caminhada
 * para um passeio de 1 hora no calçamento). Escrevi um checklist condizente
 * com o passeio; confira com a operadora.
 *
 * ⚠️ A aba "O que está incluso" também é boilerplate de trilha e lista
 * "Transfers in-out" num roteiro de 0 km de carro. Segui o cartão de preços da
 * própria página, que lista guia, arquitetura, história, cultura e cotidiano.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL } from './day-tour-legal';

export const CITY_TOUR_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/city-tour/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/city-tour/1.jpeg', width: 1536, height: 1229 },
    { src: '/img/adventures/city-tour/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/city-tour/3.jpeg', width: 2364, height: 1330 },
  ],
  stats: [
    ['1 km', '/svg/_icons/icon_03_montain.svg'],
    ['1 hora', '/svg/_icons/icon_11_calendar.svg'],
    ['13 pontos', '/svg/_icons/icon_10_home.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 50,
};

export const CITY_TOUR_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'City Tour em Lençóis',
      description:
        'Uma hora a pé pelo centro histórico de Lençóis: Praça Horácio de Matos, Mercado Cultural, Igreja Senhor dos Passos e a era dos diamantes.',
      canonical: '/pt/aventuras/city-tour-lencois',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: '1 hora',
      titulo: 'City Tour em Lençóis.',
      lead: 'Uma hora a pé para entender por que esta cidade existe — e o que os diamantes deixaram nela.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Pontos visitados', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o City Tour.',
      paragrafos: [
        'Lençóis não é só a base de onde se sai para as trilhas: é uma cidade que nasceu do garimpo e entrou no circuito global dos diamantes no século XIX. Uma hora a pé pelo centro histórico explica o resto da sua semana na Chapada.',
        'O percurso passa pela Praça Horácio de Matos, pelo antigo Consulado Francês, pelo Mercado Cultural, pela Igreja Senhor dos Passos, pela Rua das Pedras e pelo Hotel de Lençóis, onde ainda se veem ferramentas usadas pelos garimpeiros há dois séculos.',
        'Não é um tour só de arquitetura. Entram a era dos coronéis, a fé dos garimpeiros, o cotidiano de quem mora aqui hoje e a parte incômoda da história — o Mercado Cultural também foi usado para a venda de pessoas escravizadas.',
        'Como sai do escritório da Mamut e não usa carro, é o roteiro mais fácil de encaixar: cabe na tarde de chegada ou na manhã antes do transfer.',
      ],
    },
    itinerario: {
      titulo: 'Como é o passeio.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Começo a pé no escritório da Mamut e poucos metros até a Praça Horácio de Matos: construções históricas como o antigo Consulado Francês e a Loja Magnólia, a era dos coronéis e o papel de Lençóis no circuito global dos diamantes.',
        'Mercado Cultural, prédio histórico que já foi usado para a venda de diamantes, de ferramentas e de pessoas escravizadas.',
        'Travessia da ponte histórica, de arquitetura única, até a Igreja Senhor dos Passos — dedicada ao santo dos antigos garimpeiros.',
        'Volta ao Mercado Cultural e subida pela Rua das Pedras, antiga rua calçada com pedras de rio, com histórias dos garimpeiros e do cotidiano de ontem e de hoje. Segue pela Rua da Baderna.',
        'Igreja do Rosário, a igreja "oficial" da cidade, e o Memorial Afrânio Peixoto na mesma praça — personagem nativo de Lençóis, importante e controverso.',
        'Rua da Boa Vista, com a arquitetura colonial das casas e a organização urbana da cidade, até o Hotel de Lençóis: prédio antigo usado para lapidação de diamantes, com ferramentas de dois séculos atrás.',
        'Retorno ao centro passando por construções antigas e pela Associação Mineira, entidade social que preserva a memória dos garimpeiros.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 75', nota: 'Mínimo de 2 pessoas. Só o seu grupo com o guia.' },
        { titulo: 'Em grupo', preco: 'R$ 50', nota: 'De 4 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'É um passeio de uma hora dentro da cidade, então a lista é curta. Itens marcados com * são obrigatórios.',
        requiredColumns: [
          ['Calçado confortável', 'Água', 'Documento de identificação'],
          ['Boné ou chapéu', 'Protetor solar', 'Remédios pessoais'],
        ],
        recommendedColumns: [['Capa de chuva', 'Câmera'], ['Dinheiro para o Mercado Cultural']],
        note: 'A Rua das Pedras é calçada com pedra de rio, irregular por natureza — calçado fechado e firme ajuda mais do que parece.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia local credenciado com treinamento APH', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Lanche ou refeição', 'Compras no Mercado Cultural', 'Ingressos de museus ou memoriais', 'Evacuação médica', 'Hospedagem'],
      },
      {
        type: 'seasons',
        title: 'Quando visitar Lençóis',
        facts: [
          ['Verão e outono (jan–mai)', 'Cachoeiras cheias; jan–mar é alta temporada'],
          ['Inverno e primavera (jun–dez)', 'Terreno mais firme, menos volume de água'],
          ['Fim de junho a julho', 'Segunda alta temporada'],
        ],
        notes: [
          'Não existe melhor época absoluta — depende do que você quer ver.',
          'O city tour funciona o ano inteiro: é a única atividade que não depende do nível dos rios.',
        ],
      },
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para conhecer', 'a cidade que os diamantes fizeram?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Lençóis Historic Centre Walking Tour',
      description:
        'An hour on foot through the historic centre of Lençóis: Horácio de Matos Square, the Cultural Market, Senhor dos Passos Church and the diamond era.',
      canonical: '/en/adventures/lencois-historic-center-guided-walking-tour',
    },
    hero: {
      nivel: 'Light',
      origem: 'From: Lençóis',
      duracao: '1 hour',
      titulo: 'Lençóis Walking Tour.',
      lead: 'An hour on foot to understand why this town exists — and what the diamonds left behind in it.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Stops on the route', 'Difficulty'],
    sobre: {
      titulo: 'About the walking tour.',
      paragrafos: [
        'Lençóis is not just the base you leave from to reach the trails: it is a town born of diamond mining that entered the global diamond trade in the 19th century. An hour on foot through the historic centre explains the rest of your week in the Chapada.',
        'The route takes in Horácio de Matos Square, the old French Consulate, the Cultural Market, Senhor dos Passos Church, Rua das Pedras and the Hotel de Lençóis, where you can still see tools used by miners two centuries ago.',
        'It is not only a tour of architecture. It covers the era of the colonels, the faith of the miners, the daily life of the people who live here now, and the uncomfortable part of the history — the Cultural Market was also used for the sale of enslaved people.',
        'Because it starts at the Mamut office and uses no vehicle, it is the easiest trip to fit in: it works on the afternoon you arrive or the morning before your transfer.',
      ],
    },
    itinerario: {
      titulo: 'How the tour goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'We start on foot at the Mamut office and walk a few metres to Horácio de Matos Square: historic buildings such as the old French Consulate and the Magnólia store, the era of the colonels, and the part Lençóis played in the global diamond trade.',
        'The Cultural Market, a historic building once used for the sale of diamonds, of tools and of enslaved people.',
        'Across the historic bridge, with its distinctive architecture, to Senhor dos Passos Church — dedicated to the saint of the old miners.',
        'Back to the Cultural Market and up Rua das Pedras, an old street paved with river stones, with stories of the miners and of daily life then and now. On along Rua da Baderna.',
        "Rosário Church, the town's “official” church, and the Afrânio Peixoto Memorial on the same square — a figure native to Lençóis, important and controversial in equal measure.",
        'Rua da Boa Vista, with the colonial architecture of its houses and the urban layout of the town, to the Hotel de Lençóis: an old building once used for cutting diamonds, holding tools from two centuries ago.',
        "Back to the centre past old buildings and the Associação Mineira, a social body that keeps the miners' memory alive.",
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 75', nota: 'Minimum of 2 people. Just your group with the guide.' },
        { titulo: 'Group tour', preco: 'R$ 50', nota: 'From 4 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'This is a one-hour walk inside town, so the list is short. Items marked * are mandatory.',
        requiredColumns: [
          ['Comfortable shoes', 'Water', 'Photo ID'],
          ['Cap or hat', 'Sunscreen', 'Personal medication'],
        ],
        recommendedColumns: [['Rain gear', 'Camera'], ['Cash for the Cultural Market']],
        note: 'Rua das Pedras is paved with river stones and uneven by nature — closed, sturdy shoes help more than you would expect.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Accredited local guide with first-aid training', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Snack or meal', 'Purchases at the Cultural Market', 'Museum or memorial tickets', 'Medical evacuation', 'Accommodation'],
      },
      {
        type: 'seasons',
        title: 'When to visit Lençóis',
        facts: [
          ['Summer and autumn (Jan–May)', 'Full waterfalls; Jan–Mar is high season'],
          ['Winter and spring (Jun–Dec)', 'Firmer ground, less water in the falls'],
          ['Late June to July', 'A second high season'],
        ],
        notes: [
          'There is no single best season — it depends on what you want to see.',
          'The walking tour works year-round: it is the one activity that does not depend on river levels.',
        ],
      },
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to meet', 'the town the diamonds built?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'City Tour en Lençóis',
      description:
        'Una hora a pie por el centro histórico de Lençóis: Plaza Horácio de Matos, Mercado Cultural, Iglesia Senhor dos Passos y la era de los diamantes.',
      canonical: '/es/aventuras/city-tour-lencois',
    },
    hero: {
      nivel: 'Suave',
      origem: 'Origen: Lençóis',
      duracao: '1 hora',
      titulo: 'City Tour en Lençóis.',
      lead: 'Una hora a pie para entender por qué existe esta ciudad — y qué le dejaron los diamantes.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Puntos visitados', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el City Tour.',
      paragrafos: [
        'Lençóis no es solo la base desde donde se sale a los senderos: es una ciudad que nació de la minería y entró en el circuito global de los diamantes en el siglo XIX. Una hora a pie por el centro histórico explica el resto de tu semana en la Chapada.',
        'El recorrido pasa por la Plaza Horácio de Matos, el antiguo Consulado Francés, el Mercado Cultural, la Iglesia Senhor dos Passos, la Rua das Pedras y el Hotel de Lençóis, donde todavía se ven herramientas usadas por los mineros hace dos siglos.',
        'No es un tour solo de arquitectura. Entran la era de los coroneles, la fe de los mineros, el cotidiano de quien vive acá hoy y la parte incómoda de la historia — el Mercado Cultural también se usó para la venta de personas esclavizadas.',
        'Como sale de la oficina de Mamut y no usa auto, es el recorrido más fácil de encajar: entra en la tarde de llegada o en la mañana antes del traslado.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el paseo.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Comienzo a pie en la oficina de Mamut y pocos metros hasta la Plaza Horácio de Matos: construcciones históricas como el antiguo Consulado Francés y la Tienda Magnólia, la era de los coroneles y el papel de Lençóis en el circuito global de los diamantes.',
        'Mercado Cultural, edificio histórico que se usó para la venta de diamantes, de herramientas y de personas esclavizadas.',
        'Cruce del puente histórico, de arquitectura única, hasta la Iglesia Senhor dos Passos — dedicada al santo de los antiguos mineros.',
        'Vuelta al Mercado Cultural y subida por la Rua das Pedras, antigua calle empedrada con piedras de río, con historias de los mineros y del cotidiano de ayer y de hoy. Sigue por la Rua da Baderna.',
        'Iglesia do Rosário, la iglesia "oficial" de la ciudad, y el Memorial Afrânio Peixoto en la misma plaza — personaje nativo de Lençóis, importante y controvertido.',
        'Rua da Boa Vista, con la arquitectura colonial de las casas y la organización urbana de la ciudad, hasta el Hotel de Lençóis: edificio antiguo usado para el tallado de diamantes, con herramientas de hace dos siglos.',
        'Regreso al centro pasando por construcciones antiguas y por la Associação Mineira, entidad social que preserva la memoria de los mineros.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 75', nota: 'Mínimo de 2 personas. Solo tu grupo con el guía.' },
        { titulo: 'En grupo', preco: 'R$ 50', nota: 'De 4 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Es un paseo de una hora dentro de la ciudad, así que la lista es corta. Los ítems marcados con * son obligatorios.',
        requiredColumns: [
          ['Calzado cómodo', 'Agua', 'Documento de identidad'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales'],
        ],
        recommendedColumns: [['Piloto de lluvia', 'Cámara'], ['Efectivo para el Mercado Cultural']],
        note: 'La Rua das Pedras está empedrada con piedra de río, irregular por naturaleza — calzado cerrado y firme ayuda más de lo que parece.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía local acreditado con formación en primeros auxilios', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Snack o comida', 'Compras en el Mercado Cultural', 'Entradas de museos o memoriales', 'Evacuación médica', 'Alojamiento'],
      },
      {
        type: 'seasons',
        title: 'Cuándo visitar Lençóis',
        facts: [
          ['Verano y otoño (ene–may)', 'Cascadas llenas; ene–mar es alta temporada'],
          ['Invierno y primavera (jun–dic)', 'Terreno más firme, menos volumen de agua'],
          ['Fin de junio a julio', 'Segunda alta temporada'],
        ],
        notes: [
          'No existe una mejor época absoluta — depende de lo que quieras ver.',
          'El city tour funciona todo el año: es la única actividad que no depende del nivel de los ríos.',
        ],
      },
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para conocer', 'la ciudad que hicieron los diamantes?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
