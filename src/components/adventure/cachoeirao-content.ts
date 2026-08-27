/**
 * Conteúdo da página do Mirante do Cachoeirão, por idioma.
 *
 * PT vem de mamut.agency/aventuras/mirante-do-cachoeirao e EN de
 * mamut.agency/en/aventuras/cachoeirao-viewpoint. ES é tradução feita aqui.
 *
 * Divide as primeiras pernas com o [Mirante do Pati] — Guiné, Mirante dos
 * Aleixos, Gerais do Rio Preto, travessia do Rio Preto — e separa no destino.
 * Os dois arquivos ficam independentes de propósito: os textos da operadora
 * divergem e cada página tem números próprios.
 *
 * ⚠️ O parágrafo de abertura da fonte diz "9 km", mas é o mesmo texto colado na
 * página do Mirante do Pati; a faixa de dados desta diz 18 km (e 19–22 km na
 * versão inglesa). Adotei os 18 km da faixa portuguesa.
 *
 * ⚠️ Preço em grupo: R$ 500 em português, R$ 525 em inglês. Mantive o valor em
 * português.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const CACHOEIRAO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/cachoeirao/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/cachoeirao/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/cachoeirao/2.jpeg', width: 2080, height: 1170 },
    { src: '/img/adventures/cachoeirao/3.jpg', width: 2560, height: 1440 },
  ],
  stats: [
    ['18 km', '/svg/_icons/icon_03_montain.svg'],
    ['80 km', '/svg/_icons/icon_09_location.svg'],
    ['280 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 500,
};

export const CACHOEIRAO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Mirante do Cachoeirão',
      description:
        'Um mirante de 280 metros sobre o Vale do Pati, com mais de 20 quedas d’água no mesmo vale depois de chuva forte. 18 km em um dia.',
      canonical: '/pt/aventuras/mirante-do-cachoeirao',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Guiné',
      duracao: '1 dia',
      titulo: 'Mirante do Cachoeirão.',
      lead: 'Duzentos e oitenta metros de paredão e, depois de chuva forte, mais de vinte quedas d’água no mesmo vale.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura do mirante', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o Mirante do Cachoeirão.',
      paragrafos: [
        'Dezoito quilômetros em um dia para chegar a um mirante de 280 metros de altura sobre o Vale do Pati. Depois de chuvas fortes dá para contemplar mais de 20 quedas d’água no mesmo vale, ao mesmo tempo.',
        'A trilha é majoritariamente plana e atravessa os Gerais do Rio Preto, área aberta que corresponde a mais de 70% do Parque Nacional — um imenso jardim a céu aberto, com espécies da flora de altitude e as serras ao fundo.',
        'Nos arredores do mirante há uma área de banho com piscina natural. É lá que o grupo faz a refeição antes de começar a volta.',
        'Para nós a visita ideal ao Pati é de pelo menos 3 dias. Mas para quem tem poucos dias na Chapada, esta é uma ótima escolha — e no mesmo formato de um dia também operamos o Mirante da Rampa, o mais famoso do vale.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 7h00 rumo ao sul do Parque Nacional da Chapada Diamantina. São 80 km e cerca de 2 horas de carro até a vila do Guiné, onde a trilha começa e termina.',
        'Desembarque, explanação geral sobre o percurso, conferência do checklist e início da caminhada.',
        'Primeiro trecho: 30 minutos de subida em terreno acidentado até o Mirante dos Aleixos. Breve descanso e seguimos para o interior do vale.',
        'Cerca de 1h30 de caminhada em terreno plano pelos Gerais do Rio Preto. Na metade do caminho atravessamos o Rio Preto — rotas alternativas podem ser adotadas conforme o clima.',
        'Chegada ao Mirante do Cachoeirão, 280 metros acima do vale. Se o percurso for feito depois de chuvas fortes, são mais de 20 quedas d’água à vista de uma vez.',
        'Refeição na área de banho ao lado do mirante, com piscina natural, e preparação para a volta.',
        'Volta pelo mesmo percurso, com parada opcional no Rio Preto para um banho. Chegada ao carro por volta das 16h00, pequena parada no Guiné — onde dá para fazer uma boa refeição — e retorno a Lençóis, na cidade por volta das 19h00.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 540', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 500', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
          ['Água (1L por pessoa)', 'Tênis ou bota de caminhada', 'Roupas leves', 'Boné ou chapéu', 'Protetor solar'],
          ['Remédios pessoais', 'Documento de identificação', 'Mochila para pertences', 'Lanche para o mirante', 'Roupa de banho'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Chinelos', 'Toalha', 'Câmera']],
        note: 'Os chinelos entram na lista por causa da área de banho ao lado do mirante — é onde o grupo come e descansa antes da volta.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia local credenciado com treinamento APH', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Piquenique (opcional)', 'Lanche ou almoço', 'Refeição no Guiné', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      {
        type: 'seasons',
        title: 'Quando visitar o Vale do Pati',
        facts: [
          ['Verão e outono (jan–mai)', 'Cachoeiras cheias, mais lama nas trilhas'],
          ['Inverno e primavera (jun–dez)', 'Terreno mais firme, menos volume de água'],
          ['As 20 quedas do mirante', 'Só aparecem depois de chuva forte'],
        ],
        notes: [
          'Não existe melhor época absoluta — depende do que você quer ver.',
          'Para o Cachoeirão especificamente, a temporada de chuvas é a que entrega a vista completa.',
        ],
      },
      safetyFaq(
        'pt',
        'O dia é longo: saída às 7h00, retorno por volta das 19h00, com cerca de 4 horas de estrada somadas aos 18 km de caminhada. A travessia do Rio Preto depende do volume de água — em época de chuva a equipe adota rota alternativa. Os Gerais não têm sombra: chapéu, protetor e água são o que mais pesa aqui.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para ver', 'vinte cachoeiras de uma vez?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Cachoeirão Viewpoint',
      description:
        'A 280-metre overlook above the Pati Valley, with more than 20 waterfalls in the same valley after heavy rain. 18 km in a single day.',
      canonical: '/en/adventures/cachoeirao-viewpoint',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Guiné',
      duracao: '1 day',
      titulo: 'Cachoeirão Viewpoint.',
      lead: 'Two hundred and eighty metres of rock wall and, after heavy rain, more than twenty waterfalls in the same valley.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Height of the overlook', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the Cachoeirão Viewpoint.',
      paragrafos: [
        'Eighteen kilometres in a day to reach an overlook standing 280 metres above the Pati Valley. After heavy rain you can take in more than 20 waterfalls in the same valley, all at once.',
        'The trail is mostly flat and crosses the Gerais do Rio Preto, an open area that makes up more than 70% of the National Park — an immense garden under the open sky, with high-altitude plant species and the ranges behind.',
        'Beside the overlook there is a bathing area with a natural pool. That is where the group eats before starting back.',
        'We think the ideal visit to the Pati is at least 3 days. But for anyone with only a few days in the Chapada, this is an excellent choice — and in the same one-day format we also run the Rampa Overlook, the most famous in the valley.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 7:00 am heading south towards the Chapada Diamantina National Park. That is 80 km and about 2 hours by car to the village of Guiné, where the hike starts and ends.',
        'Arrival, a general briefing about the route, a run through the checklist and the start of the walk.',
        'First stretch: a 30-minute climb on rugged terrain to the Aleixos Overlook. A short break, then on into the valley.',
        'Around 1.5 hours walking on flat ground across the Gerais do Rio Preto. Midway we cross the Rio Preto — alternative routes may be taken depending on the weather.',
        'Arrival at the Cachoeirão Viewpoint, 280 metres above the valley. If the route is walked after heavy rain, more than 20 waterfalls are in view at once.',
        'A meal at the bathing area next to the overlook, with its natural pool, and time to get ready for the return.',
        'Back along the same route, with an optional stop at the Rio Preto for a swim. At the vehicle around 4:00 pm, a short stop in Guiné — where a good meal is available — and back to Lençóis, in town around 7:00 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 540', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 500', nota: 'From 2 to 7 people. You join an open group.' },
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
          ['Water (1L per person)', 'Trainers or hiking boots', 'Light clothing', 'Cap or hat', 'Sunscreen'],
          ['Personal medication', 'Photo ID', 'Backpack for your things', 'Snack for the overlook', 'Swimwear'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Flip-flops', 'Towel', 'Camera']],
        note: 'Flip-flops are on the list because of the bathing area next to the overlook — that is where the group eats and rests before heading back.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Accredited local guide with first-aid training', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Picnic (optional)', 'Snack or lunch', 'The meal in Guiné', 'Personal gear', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      {
        type: 'seasons',
        title: 'When to visit the Pati Valley',
        facts: [
          ['Summer and autumn (Jan–May)', 'Full waterfalls, more mud on the trails'],
          ['Winter and spring (Jun–Dec)', 'Firmer ground, less water in the falls'],
          ['The 20 falls from the overlook', 'Only appear after heavy rain'],
        ],
        notes: [
          'There is no single best season — it depends on what you want to see.',
          'For the Cachoeirão specifically, the rainy season is the one that delivers the full view.',
        ],
      },
      safetyFaq(
        'en',
        'It is a long day: out at 7:00 am, back around 7:00 pm, with about 4 hours of driving on top of the 18 km walk. The Rio Preto crossing depends on the water level — in the rainy season the team takes an alternative route. The Gerais have no shade: hat, sunscreen and water matter most here.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to see', 'twenty waterfalls at once?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Mirador do Cachoeirão',
      description:
        'Un mirador de 280 metros sobre el Valle del Pati, con más de 20 caídas de agua en el mismo valle después de lluvia fuerte. 18 km en un día.',
      canonical: '/es/aventuras/mirador-do-cachoeirao',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Guiné',
      duracao: '1 día',
      titulo: 'Mirador do Cachoeirão.',
      lead: 'Doscientos ochenta metros de paredón y, después de lluvia fuerte, más de veinte caídas de agua en el mismo valle.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura del mirador', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Mirador do Cachoeirão.',
      paragrafos: [
        'Dieciocho kilómetros en un día para llegar a un mirador de 280 metros de altura sobre el Valle del Pati. Después de lluvias fuertes se pueden contemplar más de 20 caídas de agua en el mismo valle, al mismo tiempo.',
        'El sendero es mayormente plano y atraviesa los Gerais do Rio Preto, área abierta que corresponde a más del 70% del Parque Nacional — un inmenso jardín a cielo abierto, con especies de flora de altura y las sierras al fondo.',
        'Al lado del mirador hay un área de baño con piscina natural. Ahí es donde el grupo hace la comida antes de empezar la vuelta.',
        'Para nosotros la visita ideal al Pati es de al menos 3 días. Pero para quien tiene pocos días en la Chapada, esta es una gran elección — y en el mismo formato de un día también operamos el Mirador da Rampa, el más famoso del valle.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 7:00 rumbo al sur del Parque Nacional da Chapada Diamantina. Son 80 km y cerca de 2 horas de auto hasta la villa de Guiné, donde el sendero empieza y termina.',
        'Desembarque, explicación general sobre el recorrido, repaso del checklist e inicio de la caminata.',
        'Primer tramo: 30 minutos de subida en terreno accidentado hasta el Mirador dos Aleixos. Breve descanso y seguimos hacia el interior del valle.',
        'Cerca de 1:30 h de caminata en terreno plano por los Gerais do Rio Preto. A mitad de camino cruzamos el Rio Preto — se pueden adoptar rutas alternativas según el clima.',
        'Llegada al Mirador do Cachoeirão, 280 metros por encima del valle. Si el recorrido se hace después de lluvias fuertes, son más de 20 caídas de agua a la vista de una vez.',
        'Comida en el área de baño al lado del mirador, con piscina natural, y preparación para la vuelta.',
        'Vuelta por el mismo recorrido, con parada opcional en el Rio Preto para bañarse. Llegada al auto cerca de las 16:00, parada breve en Guiné — donde se puede hacer una buena comida — y regreso a Lençóis, en la ciudad cerca de las 19:00.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 540', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 500', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (1L por persona)', 'Zapatillas o botas de trekking', 'Ropa liviana', 'Gorra o sombrero', 'Protector solar'],
          ['Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias', 'Snack para el mirador', 'Ropa de baño'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Ojotas', 'Toalla', 'Cámara']],
        note: 'Las ojotas entran en la lista por el área de baño al lado del mirador — es donde el grupo come y descansa antes de la vuelta.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía local acreditado con formación en primeros auxilios', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Picnic (opcional)', 'Snack o almuerzo', 'La comida en Guiné', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      {
        type: 'seasons',
        title: 'Cuándo visitar el Valle del Pati',
        facts: [
          ['Verano y otoño (ene–may)', 'Cascadas llenas, más barro en los senderos'],
          ['Invierno y primavera (jun–dic)', 'Terreno más firme, menos volumen de agua'],
          ['Las 20 caídas del mirador', 'Solo aparecen después de lluvia fuerte'],
        ],
        notes: [
          'No existe una mejor época absoluta — depende de lo que quieras ver.',
          'Para el Cachoeirão puntualmente, la temporada de lluvias es la que entrega la vista completa.',
        ],
      },
      safetyFaq(
        'es',
        'El día es largo: salida a las 7:00, regreso cerca de las 19:00, con unas 4 horas de ruta sumadas a los 18 km de caminata. El cruce del Rio Preto depende del volumen de agua — en época de lluvia el equipo adopta ruta alternativa. Los Gerais no tienen sombra: sombrero, protector y agua son lo que más pesa acá.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para ver', 'veinte cascadas de una vez?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
