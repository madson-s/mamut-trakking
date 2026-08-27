/**
 * Travessia do Vale do Pati em 4 dias (entrada e saída por Guiné).
 *
 * PT vem de mamut.agency/aventuras/vale-do-pati-4-dias e EN de
 * mamut.agency/en/aventuras/pati-valley-4-days. ES é tradução feita aqui.
 *
 * Não confundir com a de 4 dias **via Capão**, que sai de Palmeiras e termina
 * no Vale do Capão — é outro produto, em `pati-4-capao-content`.
 *
 * O que não está aqui vem do 3 dias, via `buildPatiContent`.
 */

import type { Locale } from '@/lib/site';
import type { PatiAssets } from './PatiThreeDayExperience';
import { buildPatiContent, buildPatiFaqs, type PatiVariant } from './pati-variants';

export const PATI4_ASSETS: PatiAssets = {
  stats: [
    ['62 km', '/svg/_icons/icon_03_montain.svg'],
    ['4 dias / 3 noites', '/svg/_icons/icon_11_calendar.svg'],
    ['1.200m', '/svg/_icons/icon_09_location.svg'],
    ['+250m no Castelo', '/svg/_icons/icon_01_3-bars.svg'],
    ['6h00', '/svg/_icons/icon_11_calendar.svg'],
    ['~19h00', '/svg/_icons/icon_11_calendar.svg'],
    ['PT · EN · ES', '/svg/_icons/icon_16_internet.svg'],
    ['Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  itinerary: [
    { icon: '/svg/_icons/icon_09_location.svg', distance: '15 km' },
    { icon: '/svg/_icons/icon_03_montain.svg', distance: '8–12 km' },
    { icon: '/svg/_icons/icon_03_montain.svg', distance: '18 km' },
    { icon: '/svg/_icons/icon_08_send.svg', distance: '23 km' },
  ],
  landmarks: [
    ['/svg/figma/pati-3/landmark-view.svg', 'lg:w-[281px]'],
    ['/svg/figma/pati-3/landmark-waterfall.svg', 'lg:w-[188px]'],
    ['/svg/figma/pati-3/landmark-mountain.svg', 'lg:w-[292px]'],
    ['/svg/figma/pati-3/landmark-cave.svg', 'lg:w-[280px]'],
    ['/svg/figma/pati-3/landmark-water.svg', 'lg:w-[280px]'],
    ['/svg/figma/pati-3/landmark-river.svg', 'lg:w-[280px]'],
  ],
  priceTiers: [
    { price: 'R$ 2.600', highlight: false },
    { price: 'R$ 2.250', highlight: true },
  ],
  relatedImages: ['/img/vale-do-pati/vale-do-pati-04.webp', '/img/vale-do-pati/vale-do-pati-20.webp'],
  fromPrice: 2250,
  ogImage: '/img/vale-do-pati/vale-do-pati-14.webp',
  galleryHref: '/pt/aventuras/vale-do-pati-3-dias/galeria',
};

const VARIANTS: Record<Locale, PatiVariant> = {
  pt: {
    meta: {
      title: 'Vale do Pati em 4 Dias',
      description:
        'Travessia guiada de 62 km pelo Vale do Pati, com o Morro do Castelo, a Cachoeira do Calixto e o Mirante do Cachoeirão em dias próprios.',
      canonical: '/pt/aventuras/vale-do-pati-4-dias',
      ogDescription: 'Quatro dias para o vale inteiro, sem pressa em nenhum deles.',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Lençóis',
      titulo: { antes: 'Vale do Pati em', destaque: '4 Dias.' },
      lead: { antes: 'Quatro dias para o vale inteiro, sem pressa em', destaque: 'nenhum deles.' },
      apoio: 'Castelo, Calixto e Cachoeirão em dias próprios. Hospedagem em casas de nativos.',
      saida: 'Saída de Lençóis às 6h00',
    },
    story: {
      titulo: ['O vale inteiro,', 'com tempo para cada trecho.'],
      paragrafos: [
        'O trekking mais bonito do Brasil, no coração do Parque Nacional da Chapada Diamantina, cercado por montanhas, cachoeiras e grutas. Nesta versão de quatro dias cada atrativo grande ganha o seu próprio dia, em vez de dividir espaço.',
        'Dá para vislumbrar montanhas distantes, tomar banho gelado de cachoeira, entrar em grutas, escutar as histórias do antigo povo que vivia ali e provar o melhor da culinária local na casa dos nativos. É um show natural, histórico, geológico e cultural ao mesmo tempo.',
      ],
      outrasVersoes: 'O Vale também existe em 3 e 5 dias.',
      relacionados: [
        { titulo: 'Vale do Pati · 3 Dias', nivel: 'Moderado', href: '/pt/aventuras/vale-do-pati-3-dias' },
        { titulo: 'Vale do Pati · 5 Dias', nivel: 'Avançado', href: '/pt/aventuras/vale-do-pati-5-dias' },
      ],
    },
    dias: [
      {
        day: 'Dia 1', level: 'Moderado', lead: '6h saída',
        body: ' de Lençóis → 8h Vila do Guiné → 3h de trilha (1h subida íngreme + 2h plano) até o Mirante da Rampa → lanche → +1h30 até as Cachoeiras do Funis, Altina e Bananeiras → 17h hospedagem → 19h jantar.',
        note: 'Sugerimos tomar o café da manhã ao chegar no destino, não antes de sair.',
      },
      {
        day: 'Dia 2', level: 'Moderado / Alto', lead: '8h saída',
        body: ' rumo ao Morro do Castelo, só com itens de uso diário. É o dia de maior esforço: 250 m de aclive para passar dos 1.200 m de altitude, entre 60 e 80 minutos de subida. No topo, dois mirantes e a entrada da Gruta da Lapinha. Volta pelo mesmo caminho e, se sobrar tempo, uma cachoeira perto da hospedagem.',
        note: 'Bate-volta: dormimos na mesma casa.',
      },
      {
        day: 'Dia 3', level: 'Moderado / Alto', lead: '8h saída',
        body: ' depois de um café reforçado, rumo à Cachoeira do Calixto. São cerca de 2h30 em mata fechada, pulando pedras, até chegar. A volta é pelo mesmo caminho.',
        note: 'Uma das áreas menos visitadas do Pati.',
      },
      {
        day: 'Dia 4', level: 'Moderado / Alto', lead: '8h saída',
        body: ' com a despedida da hospedagem. São cerca de 3h de caminhada (2h em terreno acidentado + 1h em plano) até o Mirante do Cachoeirão, de 280 m de altura. Na estação chuvosa dá para contemplar cerca de 16 cascatas em volta do vale. Depois do lanche, volta parcial pelo mesmo caminho e bifurcação até a saída da trilha, onde o carro espera.',
        note: 'Dificuldade técnica baixa — o esforço é a distância.',
      },
    ],
    landmarks: [
      { titulo: 'Mirante da Rampa', apoio: 'O mais tradicional do vale' },
      { titulo: 'Cachoeiras do Funis, Altina e Bananeiras', apoio: 'Três no primeiro dia' },
      { titulo: 'Morro do Castelo', apoio: 'Mais de 1.200 m de altitude' },
      { titulo: 'Gruta da Lapinha', apoio: 'Das grutas mais raras acima de 1.000 m' },
      { titulo: 'Cachoeira do Calixto', apoio: 'Mata fechada e leito de pedra' },
      { titulo: 'Mirante do Cachoeirão', apoio: '280 m — até 16 cascatas na chuva' },
    ],
    included: {
      title: 'O que está incluso / não incluso',
      included: ['Guia de montanha credenciado com treinamento APH', 'Hospedagem em casas de nativos do Pati (3 noites)', 'Transfer Lençóis › Guiné › Lençóis', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da trilha'],
      excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Transfers de Salvador', 'Equipamento pessoal', 'Evacuação médica'],
    },
    safetyWarning: 'O 2º dia é o mais exigente: 250 metros de aclive em 60 a 80 minutos para passar dos 1.200 m. O 4º é o mais longo, com 23 km, mas de dificuldade técnica baixa. Quem está em dúvida sobre o preparo deve falar com o atendimento antes de fechar.',
  },
  en: {
    meta: {
      title: 'Pati Valley in 4 Days',
      description:
        'A guided 62 km crossing of the Pati Valley, with Castelo Hill, Calixto Waterfall and the Cachoeirão Overlook each getting their own day.',
      canonical: '/en/adventures/pati-valley-4-days',
      ogDescription: 'Four days for the whole valley, rushing none of them.',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Lençóis',
      titulo: { antes: 'Pati Valley in', destaque: '4 Days.' },
      lead: { antes: 'Four days for the whole valley, rushing', destaque: 'none of them.' },
      apoio: 'Castelo, Calixto and Cachoeirão each on their own day. Lodging in the houses of valley natives.',
      saida: 'Departure from Lençóis at 6:00 am',
    },
    story: {
      titulo: ['The whole valley,', 'with time for every stretch.'],
      paragrafos: [
        "Brazil's most beautiful trek, in the heart of the Chapada Diamantina National Park, ringed by mountains, waterfalls and caves. In this four-day version each major sight gets a day of its own rather than sharing one.",
        'You take in distant ranges, swim in cold waterfalls, step into caves, hear the stories of the people who lived here, and eat the best of the local cooking in the houses of the valley natives. It is a natural, historical, geological and cultural show at once.',
      ],
      outrasVersoes: 'The valley also exists in 3 and 5 days.',
      relacionados: [
        { titulo: 'Pati Valley · 3 Days', nivel: 'Moderate', href: '/en/adventures/pati-valley-3-days' },
        { titulo: 'Pati Valley · 5 Days', nivel: 'Advanced', href: '/en/adventures/pati-valley-5-days' },
      ],
    },
    dias: [
      {
        day: 'Day 1', level: 'Moderate', lead: '6 am departure',
        body: ' from Lençóis → 8 am Vila do Guiné → 3h of trail (1h steep climb + 2h flat) to the Rampa Overlook → snack → +1h30 to the Funis, Altina and Bananeiras waterfalls → 5 pm lodging → 7 pm dinner.',
        note: 'We suggest having breakfast on arrival rather than before leaving.',
      },
      {
        day: 'Day 2', level: 'Moderate / High', lead: '8 am departure',
        body: ' towards Castelo Hill, carrying day items only. This is the hardest day: 250 m of climb to get above 1,200 m of altitude, 60 to 80 minutes of ascent. At the top, two lookouts and the entrance to Lapinha Cave. Back the same way and, if there is time, a waterfall near the lodging.',
        note: 'There and back: we sleep in the same house.',
      },
      {
        day: 'Day 3', level: 'Moderate / High', lead: '8 am departure',
        body: ' after a substantial breakfast, towards Calixto Waterfall. It is around 2.5 hours through dense forest, hopping rocks, to get there. The return is by the same route.',
        note: 'One of the least visited parts of the Pati.',
      },
      {
        day: 'Day 4', level: 'Moderate / High', lead: '8 am departure',
        body: ' and farewell to the lodging. Around 3h of walking (2h on rough ground + 1h flat) to the Cachoeirão Overlook, standing 280 m high. In the rainy season you can take in some 16 falls around the valley. After the snack, a partial return by the same route, then a fork to the trailhead where the car is waiting.',
        note: 'Low technical difficulty — the effort is the distance.',
      },
    ],
    landmarks: [
      { titulo: 'Rampa Overlook', apoio: 'The most traditional in the valley' },
      { titulo: 'Funis, Altina and Bananeiras waterfalls', apoio: 'Three on the first day' },
      { titulo: 'Castelo Hill', apoio: 'Above 1,200 m of altitude' },
      { titulo: 'Lapinha Cave', apoio: 'Among the rarest caves above 1,000 m' },
      { titulo: 'Calixto Waterfall', apoio: 'Dense forest and a bed of rock' },
      { titulo: 'Cachoeirão Overlook', apoio: '280 m — up to 16 falls in the rain' },
    ],
    included: {
      title: "What's included / not included",
      included: ['Accredited mountain guide with first-aid training', 'Lodging in the houses of Pati natives (3 nights)', 'Transfer Lençóis › Guiné › Lençóis', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the trail'],
      excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Transfers from Salvador', 'Personal gear', 'Medical evacuation'],
    },
    safetyWarning: 'Day 2 is the demanding one: 250 metres of climb in 60 to 80 minutes to get above 1,200 m. Day 4 is the longest, at 23 km, but technically easy. If you are unsure about your fitness, talk to us before booking.',
  },
  es: {
    meta: {
      title: 'Valle del Pati en 4 Días',
      description:
        'Travesía guiada de 62 km por el Valle del Pati, con el Morro do Castelo, la Cascada del Calixto y el Mirador del Cachoeirão en días propios.',
      canonical: '/es/aventuras/valle-del-pati-4-dias',
      ogDescription: 'Cuatro días para el valle entero, sin apuro en ninguno.',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Lençóis',
      titulo: { antes: 'Valle del Pati en', destaque: '4 Días.' },
      lead: { antes: 'Cuatro días para el valle entero, sin apuro en', destaque: 'ninguno.' },
      apoio: 'Castelo, Calixto y Cachoeirão en días propios. Alojamiento en casas de nativos.',
      saida: 'Salida de Lençóis a las 6:00',
    },
    story: {
      titulo: ['El valle entero,', 'con tiempo para cada tramo.'],
      paragrafos: [
        'El trekking más lindo de Brasil, en el corazón del Parque Nacional da Chapada Diamantina, rodeado de montañas, cascadas y grutas. En esta versión de cuatro días cada atractivo grande recibe su propio día, en vez de compartir espacio.',
        'Se pueden vislumbrar montañas distantes, darse baños helados de cascada, entrar en grutas, escuchar las historias del antiguo pueblo que vivía ahí y probar lo mejor de la cocina local en la casa de los nativos. Es un show natural, histórico, geológico y cultural al mismo tiempo.',
      ],
      outrasVersoes: 'El valle también existe en 3 y 5 días.',
      relacionados: [
        { titulo: 'Valle del Pati · 3 Días', nivel: 'Moderado', href: '/es/aventuras/valle-del-pati-3-dias' },
        { titulo: 'Valle del Pati · 5 Días', nivel: 'Avanzado', href: '/es/aventuras/valle-del-pati-5-dias' },
      ],
    },
    dias: [
      {
        day: 'Día 1', level: 'Moderado', lead: '6h salida',
        body: ' de Lençóis → 8h Vila do Guiné → 3h de sendero (1h de subida empinada + 2h en plano) hasta el Mirador da Rampa → snack → +1:30 h hasta las Cascadas do Funis, Altina y Bananeiras → 17h alojamiento → 19h cena.',
        note: 'Sugerimos desayunar al llegar al destino, no antes de salir.',
      },
      {
        day: 'Día 2', level: 'Moderado / Alto', lead: '8h salida',
        body: ' rumbo al Morro do Castelo, solo con ítems de uso diario. Es el día de mayor esfuerzo: 250 m de subida para pasar los 1.200 m de altitud, entre 60 y 80 minutos de ascenso. En la cima, dos miradores y la entrada de la Gruta da Lapinha. Vuelta por el mismo camino y, si sobra tiempo, una cascada cerca del alojamiento.',
        note: 'Ida y vuelta: dormimos en la misma casa.',
      },
      {
        day: 'Día 3', level: 'Moderado / Alto', lead: '8h salida',
        body: ' después de un desayuno reforzado, rumbo a la Cascada del Calixto. Son cerca de 2:30 h en monte cerrado, saltando piedras, hasta llegar. La vuelta es por el mismo camino.',
        note: 'Una de las áreas menos visitadas del Pati.',
      },
      {
        day: 'Día 4', level: 'Moderado / Alto', lead: '8h salida',
        body: ' con la despedida del alojamiento. Son cerca de 3h de caminata (2h en terreno accidentado + 1h en plano) hasta el Mirador do Cachoeirão, de 280 m de altura. En la estación lluviosa se pueden contemplar cerca de 16 cascadas alrededor del valle. Después del snack, vuelta parcial por el mismo camino y bifurcación hasta la salida del sendero, donde espera el auto.',
        note: 'Dificultad técnica baja — el esfuerzo es la distancia.',
      },
    ],
    landmarks: [
      { titulo: 'Mirador da Rampa', apoio: 'El más tradicional del valle' },
      { titulo: 'Cascadas do Funis, Altina y Bananeiras', apoio: 'Tres en el primer día' },
      { titulo: 'Morro do Castelo', apoio: 'Más de 1.200 m de altitud' },
      { titulo: 'Gruta da Lapinha', apoio: 'De las grutas más raras por encima de 1.000 m' },
      { titulo: 'Cascada del Calixto', apoio: 'Monte cerrado y lecho de piedra' },
      { titulo: 'Mirador do Cachoeirão', apoio: '280 m — hasta 16 cascadas con lluvia' },
    ],
    included: {
      title: 'Qué está incluido / no incluido',
      included: ['Guía de montaña acreditado con formación en primeros auxilios', 'Alojamiento en casas de nativos del Pati (3 noches)', 'Traslado Lençóis › Guiné › Lençóis', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después del sendero'],
      excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Traslados desde Salvador', 'Equipo personal', 'Evacuación médica'],
    },
    safetyWarning: 'El 2º día es el más exigente: 250 metros de subida en 60 a 80 minutos para pasar los 1.200 m. El 4º es el más largo, con 23 km, pero de dificultad técnica baja. Quien tenga dudas sobre su preparación debería hablar con atención antes de cerrar.',
  },
};

export const PATI4_CONTENT = {
  pt: buildPatiContent('pt', VARIANTS.pt),
  en: buildPatiContent('en', VARIANTS.en),
  es: buildPatiContent('es', VARIANTS.es),
};

export const PATI4_FAQS = {
  pt: buildPatiFaqs('pt', VARIANTS.pt),
  en: buildPatiFaqs('en', VARIANTS.en),
  es: buildPatiFaqs('es', VARIANTS.es),
};
