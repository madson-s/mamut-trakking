/**
 * Conteúdo da página Cachoeira do Mosquito + Morro do Pai Inácio, por idioma.
 *
 * PT vem de mamut.agency/aventuras/mosquito-pai-inacio e EN de
 * mamut.agency/en/aventuras/mosquito-waterfall-pai-inacio-hill. ES é tradução
 * feita aqui.
 *
 * É o roteiro combinado — não confundir com as páginas individuais da
 * [Cachoeira do Mosquito] e do [Morro do Pai Inácio], que operam separadas.
 * Aqui os três atrativos são visitados de carro, com caminhadas curtas.
 *
 * ⚠️ A fonte chama o segundo atrativo de "Vale das Piscinas (Rio Mucugêzinho)"
 * na abertura e de "Poço do Diabo" no itinerário — é o mesmo lugar.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const MOSQUITO_PAI_INACIO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/mosquito-pai-inacio/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/mosquito-pai-inacio/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/mosquito-pai-inacio/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/mosquito-pai-inacio/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['4 km', '/svg/_icons/icon_03_montain.svg'],
    ['120 km', '/svg/_icons/icon_09_location.svg'],
    ['3 atrativos', '/svg/_icons/icon_10_home.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve / Moderado', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 450,
};

export const MOSQUITO_PAI_INACIO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Mosquito + Morro do Pai Inácio',
      description:
        'Três atrativos em um dia de carro com caminhadas curtas: Cachoeira do Mosquito, Poço do Diabo e o pôr do sol no Morro do Pai Inácio.',
      canonical: '/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio',
    },
    hero: {
      nivel: 'Leve / Moderado',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Mosquito + Pai Inácio.',
      lead: 'Três cartões-postais em um dia, com caminhadas curtas — o roteiro que funciona com criança e com avó.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Atrativos', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o passeio.',
      paragrafos: [
        'Um passeio de carro com caminhadas curtas, pensado para quem quer conhecer a Chapada Diamantina sem encarar trilha longa. Todos os atrativos têm acesso fácil, são seguros e contam com estrutura para receber visitantes.',
        'São três paradas: a Cachoeira do Mosquito, o Vale das Piscinas no Rio Mucugêzinho — onde fica o Poço do Diabo — e o Morro do Pai Inácio, o principal cartão-postal da região.',
        'A caminhada mais longa do dia tem 700 metros; a mais curta, 300. Somadas dão os 4 km, distribuídos ao longo de 120 km de estrada. É por isso que funciona com crianças e com quem não caminha muito.',
        'O fecho é no alto do Pai Inácio, onde o guia conta a lenda que dá nome ao morro e a vista abre sobre o vale inteiro.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 8h00 rumo à Fazenda Santo Antônio, onde fica a entrada para a Cachoeira do Mosquito. São 40 km de carro, cerca de 1 hora, mais 700 metros de caminhada até a base da cachoeira.',
        'Banho na cachoeira e volta ao carro.',
        'Mais 28 km até o Balneário Mucugêzinho e uma caminhada de 15 minutos até o Poço do Diabo — uma enorme piscina natural de águas escuras e geladas. O grupo fica lá até as 16h00.',
        'Mais 5 km de carro e uma caminhada de 300 metros, cerca de 20 minutos, até o topo do Morro do Pai Inácio. Lá em cima o guia conta a lenda que dá nome ao lugar e a vista abre sobre o vale.',
        'Retorno a Lençóis, com a vista da BR-242 no caminho de volta.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 500', nota: 'Mínimo de 2 pessoas. Só o seu grupo no passeio.' },
        { titulo: 'Em grupo', preco: 'R$ 450', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        note: 'São duas paradas para banho no mesmo dia: leve toalha e, se puder, uma muda seca para o trecho final até o Pai Inácio.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia local credenciado com treinamento APH', 'Taxas de acesso', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Almoço (opcional)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'As caminhadas são curtas, mas o Poço do Diabo é uma piscina natural funda, de águas escuras e geladas — entre com o grupo e siga a orientação do guia. A subida final ao Pai Inácio tem 300 metros em escadaria e piso de pedra: é curta, mas íngreme.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para ver', 'a Chapada em um dia?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Mosquito Waterfall + Pai Inácio Hill',
      description:
        'Three sights in one day by car with short walks: Mosquito Waterfall, Poço do Diabo and sunset from Pai Inácio Hill.',
      canonical: '/en/adventures/mosquito-waterfall-pai-inacio-hill',
    },
    hero: {
      nivel: 'Light / Moderate',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Mosquito + Pai Inácio.',
      lead: 'Three postcard sights in a day, with short walks — the trip that works with a child and with a grandmother.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Sights', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the tour.',
      paragrafos: [
        'A trip by car with short walks, designed for anyone who wants to see the Chapada Diamantina without taking on a long trail. Every site has easy access, is safe, and has facilities for visitors.',
        'There are three stops: Mosquito Waterfall, the Vale das Piscinas on the Mucugêzinho river — where Poço do Diabo is — and Pai Inácio Hill, the best-known landmark in the region.',
        'The longest walk of the day is 700 metres; the shortest, 300. Together they make up the 4 km, spread across 120 km of road. That is why it works with children and with people who do not walk much.',
        'The day closes on top of Pai Inácio, where the guide tells the legend the hill is named for and the view opens over the whole valley.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 8:00 am for Fazenda Santo Antônio, where the entrance to Mosquito Waterfall is. That is 40 km by car, about 1 hour, plus a 700-metre walk to the base of the falls.',
        'A swim at the waterfall and back to the car.',
        'Another 28 km to the Mucugêzinho bathing area and a 15-minute walk to Poço do Diabo — a huge natural pool of dark, cold water. The group stays there until 4:00 pm.',
        'Another 5 km by car and a 300-metre walk, around 20 minutes, to the top of Pai Inácio Hill. Up there the guide tells the legend the place is named for and the view opens over the valley.',
        'Back to Lençóis, with the view from the BR-242 on the way.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 500', nota: 'Minimum of 2 people. Just your group on the trip.' },
        { titulo: 'Group tour', preco: 'R$ 450', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'Items marked * are mandatory. Missing any of them compromises the safety of the group and makes participation unfeasible.',
        requiredColumns: [
          ['Water (1.5L per person)', 'Trainers or hiking boots', 'Spare socks', 'Light clothing', 'Swimwear'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your things'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Towel', 'Camera']],
        note: 'There are two swimming stops in the same day: bring a towel and, if you can, a dry change for the final stretch up Pai Inácio.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Accredited local guide with first-aid training', 'Access fees', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Lunch (optional)', 'Personal gear', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'The walks are short, but Poço do Diabo is a deep natural pool of dark, cold water — go in with the group and follow the guide. The final climb up Pai Inácio is 300 metres of steps and rock: short, but steep.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to see', 'the Chapada in a day?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada del Mosquito + Morro do Pai Inácio',
      description:
        'Tres atractivos en un día en auto con caminatas cortas: Cascada del Mosquito, Poço do Diabo y el atardecer en el Morro do Pai Inácio.',
      canonical: '/es/aventuras/cascada-del-mosquito-morro-do-pai-inacio',
    },
    hero: {
      nivel: 'Suave / Moderado',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Mosquito + Pai Inácio.',
      lead: 'Tres postales en un día, con caminatas cortas — el recorrido que funciona con chicos y con abuelos.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Atractivos', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el paseo.',
      paragrafos: [
        'Un paseo en auto con caminatas cortas, pensado para quien quiere conocer la Chapada Diamantina sin encarar un sendero largo. Todos los atractivos tienen acceso fácil, son seguros y cuentan con estructura para recibir visitantes.',
        'Son tres paradas: la Cascada del Mosquito, el Vale das Piscinas en el Río Mucugêzinho — donde está el Poço do Diabo — y el Morro do Pai Inácio, la principal postal de la región.',
        'La caminata más larga del día tiene 700 metros; la más corta, 300. Sumadas dan los 4 km, distribuidos a lo largo de 120 km de ruta. Por eso funciona con chicos y con quien no camina mucho.',
        'El cierre es en lo alto del Pai Inácio, donde el guía cuenta la leyenda que da nombre al morro y la vista se abre sobre el valle entero.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 8:00 rumbo a la Fazenda Santo Antônio, donde está la entrada a la Cascada del Mosquito. Son 40 km en auto, cerca de 1 hora, más 700 metros de caminata hasta la base de la cascada.',
        'Baño en la cascada y vuelta al auto.',
        'Otros 28 km hasta el Balneario Mucugêzinho y una caminata de 15 minutos hasta el Poço do Diabo — una enorme piscina natural de aguas oscuras y heladas. El grupo se queda ahí hasta las 16:00.',
        'Otros 5 km en auto y una caminata de 300 metros, cerca de 20 minutos, hasta la cima del Morro do Pai Inácio. Arriba el guía cuenta la leyenda que da nombre al lugar y la vista se abre sobre el valle.',
        'Regreso a Lençóis, con la vista de la BR-242 en el camino de vuelta.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 500', nota: 'Mínimo de 2 personas. Solo tu grupo en el paseo.' },
        { titulo: 'En grupo', preco: 'R$ 450', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (1,5L por persona)', 'Zapatillas o botas de trekking', 'Medias extra', 'Ropa liviana', 'Ropa de baño'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Toalla', 'Cámara']],
        note: 'Son dos paradas de baño el mismo día: llevá toalla y, si podés, una muda seca para el tramo final hasta el Pai Inácio.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía local acreditado con formación en primeros auxilios', 'Tasas de acceso', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Almuerzo (opcional)', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'Las caminatas son cortas, pero el Poço do Diabo es una piscina natural profunda, de aguas oscuras y heladas — entrá con el grupo y seguí la orientación del guía. La subida final al Pai Inácio tiene 300 metros de escalera y piso de piedra: es corta, pero empinada.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para ver', 'la Chapada en un día?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
