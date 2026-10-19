/**
 * Travessia do Vale do Pati em 5 dias (entra por Guiné, sai por Andaraí).
 *
 * PT vem de mamut.agency/aventuras/vale-do-pati-05-dias e EN de
 * mamut.agency/en/aventuras/pati-valley-5-days. ES, FR e NL são tradução feita aqui.
 *
 * É a única versão que atravessa o vale de ponta a ponta: entra pelo Guiné e
 * sai do outro lado, em Andaraí, pela Ladeira do Império. Não confundir com a
 * de 5 dias **via Capão**, em `pati-5-capao-content`.
 *
 * O que não está aqui vem do 3 dias, via `buildPatiContent`.
 */

import type { Locale } from '@/lib/site';
import type { PatiAssets } from './PatiThreeDayExperience';
import { buildPatiContent, buildPatiFaqs, type PatiVariant } from './pati-variants';
import { patiPricing } from './price-table';

export const PATI5_ASSETS: PatiAssets = {
  stats: [
    ['70 km', '/svg/_icons/icon_03_montain.svg'],
    ['5 dias / 4 noites', '/svg/_icons/icon_11_calendar.svg'],
    ['1.200m', '/svg/_icons/icon_09_location.svg'],
    ['+250m no Castelo', '/svg/_icons/icon_01_3-bars.svg'],
    ['7h30', '/svg/_icons/icon_11_calendar.svg'],
    ['Andaraí', '/svg/_icons/icon_08_send.svg'],
    ['PT · EN · FR', '/svg/_icons/icon_16_internet.svg'],
    ['Moderado / Alto', '/svg/_icons/icon_03_montain.svg'],
  ],
  itinerary: [
    { icon: '/svg/_icons/icon_09_location.svg', distance: '12 km' },
    { icon: '/svg/_icons/icon_03_montain.svg', distance: '22 km' },
    { icon: '/svg/_icons/icon_03_montain.svg', distance: '15 km' },
    { icon: '/svg/_icons/icon_09_location.svg', distance: '10 km' },
    { icon: '/svg/_icons/icon_08_send.svg', distance: '13 km' },
  ],
  landmarks: [
    ['/svg/figma/pati-3/landmark-view.svg', 'lg:w-[281px]'],
    ['/svg/figma/pati-3/landmark-waterfall.svg', 'lg:w-[188px]'],
    ['/svg/figma/pati-3/landmark-mountain.svg', 'lg:w-[292px]'],
    ['/svg/figma/pati-3/landmark-cave.svg', 'lg:w-[280px]'],
    ['/svg/figma/pati-3/landmark-water.svg', 'lg:w-[280px]'],
    ['/svg/figma/pati-3/landmark-river.svg', 'lg:w-[280px]'],
    ['/svg/figma/pati-3/landmark-descent.svg', 'lg:w-[188px]'],
  ],
  relatedImages: ['/img/vale-do-pati/vale-do-pati-04.webp', '/img/vale-do-pati/vale-do-pati-14.webp'],
  // Guia em português, saída e retorno em Lençóis. Ordem: [pessoas, privado, em grupo].
  ...patiPricing([
    ['1', 4500, 3450],
    ['2', 3700, 3450],
    ['3', 3100, 2900],
    ['4+', 2900, 2750],
  ]),
  ogImage: '/img/vale-do-pati/vale-do-pati-20.webp',
  galleryHref: '/pt/aventuras/vale-do-pati-03-dias/galeria',
  // A caminhada termina em Andaraí por volta das 12h00; o transfer até Lençóis chega às 13h30.
  returnTime: { time: '13:30' },
  bookingName: { pt: 'o Vale do Pati em 5 dias', en: 'the Pati Valley in 5 days', fr: 'la vallée du Pati en 5 jours' },
};

const VARIANTS: Record<Locale, PatiVariant> = {
  pt: {
    meta: {
      title: 'Travessia Vale do Pati 5 Dias',
      description:
        'Travessia guiada de 70 km entrando pelo Guiné e saindo em Andaraí, com Cachoeirão, Morro do Castelo, Poço da Árvore e a Ladeira do Império.',
      canonical: '/pt/aventuras/vale-do-pati-05-dias',
      ogDescription: 'A travessia de ponta a ponta: entra pelo Guiné, sai por Andaraí.',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origem: Lençóis',
      titulo: { antes: 'Travessia Vale do Pati', destaque: '5 Dias.' },
      lead: { antes: 'Entra pelo Guiné, sai por Andaraí. A travessia de', destaque: 'ponta a ponta.' },
      apoio: 'Setenta quilômetros pelos pontos mais emblemáticos do vale, com saída pelo outro lado da serra.',
      saida: 'Saída de Lençóis às 7h30',
    },
    story: {
      titulo: ['A travessia completa,', 'de um lado ao outro do vale.'],
      paragrafos: [
        'O Vale do Pati orbita os 1.000 metros de altitude, com uma variedade rica de transições entre resquícios de Mata Atlântica, campos rupestres e campos gerais. A região foi lar de camponeses há cerca de 200 anos e hoje abriga 14 casas remanescentes, que servem de alojamento para visitantes.',
        'Este itinerário percorre os pontos mais emblemáticos da região — Morro do Castelo, Cachoeirão e Mirante da Rampa — e sai pelo outro lado, em Andaraí, passando pelo Poço da Árvore, o Pati de Baixo e a Ladeira do Império. Exige ótimo condicionamento e capacidade de caminhar por vários dias em condições adversas: sol, chuva, terreno escorregadio e acidentado.',
      ],
      outrasVersoes: 'O Vale também existe em 3 e 4 dias.',
      relacionados: [
        { titulo: 'Vale do Pati · 3 Dias', nivel: 'Moderado', href: '/pt/aventuras/vale-do-pati-03-dias' },
        { titulo: 'Vale do Pati · 4 Dias', nivel: 'Moderado / Avançado', href: '/pt/aventuras/vale-do-pati-4-dias' },
      ],
    },
    dias: [
      {
        day: 'Dia 1', level: 'Moderado', lead: '7h30 saída',
        body: ' de Lençóis rumo à vila do Guiné, onde a trilha começa. São cerca de 3h de caminhada (1h de subida íngreme + 2h em terreno plano) até o Mirante Tradicional do Vale do Pati. Depois do lanche, mais 1h30 até a Igrejinha, onde o Sr. João e a família recebem o grupo na hospedaria.',
        note: 'A subida íngreme é a primeira cobrança do Pati.',
      },
      {
        day: 'Dia 2', level: 'Moderado / Alto', lead: '8h saída',
        body: ' com a despedida da hospedagem. São cerca de 3h até o Mirante do Cachoeirão, de 280 m de altura — na estação chuvosa dá para contemplar cerca de 16 cascatas em volta do vale. Depois do lanche preparado pelo condutor, volta pelo mesmo caminho até a Igrejinha para pegar os pertences e seguir a uma casa mais abaixo no vale.',
        note: 'O dia mais longo: 22 km.',
      },
      {
        day: 'Dia 3', level: 'Alto', lead: '8h saída',
        body: ' depois de um café reforçadíssimo, rumo ao Morro do Castelo. É o dia de esforço físico mais intenso: 250 m de aclive em 40 a 60 minutos para passar dos 1.200 m de altitude. No topo, dois mirantes e a entrada da Gruta da Lapinha. A volta é por outro caminho, passando pela Cachoeira das Bananeiras, com chegada à hospedagem por volta das 18h.',
        note: 'Uma das grutas mais raras do mundo acima de 1.000 m.',
      },
      {
        day: 'Dia 4', level: 'Leve', lead: '8h saída',
        body: ' — o dia mais calmo do roteiro. Depois do café, seguimos descendo o Vale do Pati por cerca de 2h até o Poço da Árvore. Ficamos um bom tempo ali e caminhamos mais 2h até a casa dos últimos anfitriões no vale.',
        note: 'Depois de três dias puxados, um dia leve de propósito.',
      },
      {
        day: 'Dia 5', level: 'Alto', lead: '6h café',
        body: ' — acordamos mais cedo para evitar o sol escaldante no trecho mais crítico. São 2h30 de subida (2,5 km) pela Ladeira do Império, antigo caminho usado para escoar o café do Vale do Pati. Chegando ao platô, mais 9 km de descida em terreno acidentado pela Serra do Ramalho até a cidade de Andaraí, onde o transporte espera.',
        alert: 'A Ladeira do Império é o trecho mais crítico do roteiro — por isso o café é às 6h.',
      },
    ],
    landmarks: [
      { titulo: 'Mirante da Rampa', apoio: 'O mais tradicional do vale' },
      { titulo: 'Hospedaria da Igrejinha', apoio: 'Casa do Sr. João e família' },
      { titulo: 'Mirante do Cachoeirão', apoio: '280 m — até 16 cascatas na chuva' },
      { titulo: 'Morro do Castelo e Gruta da Lapinha', apoio: 'Mais de 1.200 m de altitude' },
      { titulo: 'Poço da Árvore', apoio: 'O dia leve da travessia' },
      { titulo: 'Ladeira do Império', apoio: 'Antigo caminho do café' },
      { titulo: 'Serra do Ramalho até Andaraí', apoio: '9 km de descida na saída' },
    ],
    included: {
      title: 'O que está incluso / não incluso',
      included: ['Guia de montanha credenciado com treinamento APH', 'Hospedagem em casas de nativos do Pati (4 noites)', 'Transfer de ida e de volta, com saída por Andaraí', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da trilha'],
      excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Equipamento pessoal', 'Evacuação médica'],
    },
    safetyWarning: 'Este roteiro exige ótimo condicionamento físico e capacidade de caminhar vários dias seguidos em condições adversas — sol, chuva, terreno escorregadio e acidentado. O 3º dia tem 250 m de aclive para passar dos 1.200 m; o 5º sobe 2,5 km pela Ladeira do Império e desce outros 9 km em terreno acidentado. Quem está em dúvida sobre o preparo deve falar com o atendimento antes de fechar.',
  },
  en: {
    meta: {
      title: 'Pati Valley Crossing, 5 Days',
      description:
        'A guided 70 km crossing entering at Guiné and leaving at Andaraí, with the Cachoeirão, Castelo Hill, Poço da Árvore and the Ladeira do Império.',
      canonical: '/en/adventures/pati-valley-5-days',
      ogDescription: 'The end-to-end crossing: in at Guiné, out at Andaraí.',
    },
    hero: {
      nivel: 'Moderate / High',
      origem: 'From: Lençóis',
      titulo: { antes: 'Pati Valley Crossing,', destaque: '5 Days.' },
      lead: { antes: 'In at Guiné, out at Andaraí. The crossing from', destaque: 'end to end.' },
      apoio: 'Seventy kilometres through the most emblematic points of the valley, leaving by the far side of the range.',
      saida: 'Departure from Lençóis at 7:30 am',
    },
    story: {
      titulo: ['The full crossing,', 'from one side of the valley to the other.'],
      paragrafos: [
        'The Pati Valley sits around 1,000 metres of altitude, with a rich variety of transitions between remnants of Atlantic Forest, rupestrian fields and open grassland. The region was home to peasant farmers some 200 years ago and today holds 14 remaining houses, which serve as lodging for visitors.',
        'This itinerary covers the most emblematic points of the region — Castelo Hill, the Cachoeirão and the Rampa Overlook — and leaves by the far side, at Andaraí, by way of Poço da Árvore, Pati de Baixo and the Ladeira do Império. It calls for excellent fitness and the ability to walk for several days in adverse conditions: sun, rain, slippery and uneven ground.',
      ],
      outrasVersoes: 'The valley also exists in 3 and 4 days.',
      relacionados: [
        { titulo: 'Pati Valley · 3 Days', nivel: 'Moderate', href: '/en/adventures/pati-valley-3-days' },
        { titulo: 'Pati Valley · 4 Days', nivel: 'Moderate / Advanced', href: '/en/adventures/pati-valley-4-days' },
      ],
    },
    dias: [
      {
        day: 'Day 1', level: 'Moderate', lead: '7:30 am departure',
        body: ' from Lençóis towards the village of Guiné, where the trail starts. Around 3h of walking (1h steep climb + 2h on flat ground) to the traditional Pati Valley overlook. After a snack, another 1h30 to Igrejinha, where Sr. João and his family welcome the group at the guesthouse.',
        note: 'The steep climb is the first thing the Pati asks of you.',
      },
      {
        day: 'Day 2', level: 'Moderate / High', lead: '8 am departure',
        body: ' and farewell to the lodging. Around 3h to the Cachoeirão Overlook, standing 280 m high — in the rainy season you can take in some 16 falls around the valley. After the snack prepared by the guide, back the same way to Igrejinha to collect our things and on to a house further down the valley.',
        note: 'The longest day: 22 km.',
      },
      {
        day: 'Day 3', level: 'High', lead: '8 am departure',
        body: ' after a very substantial breakfast, towards Castelo Hill. This is the most physically demanding day: 250 m of climb in 40 to 60 minutes to get above 1,200 m of altitude. At the top, two lookouts and the entrance to Lapinha Cave. The return is by a different route, past Bananeiras Waterfall, reaching the lodging around 6 pm.',
        note: 'One of the rarest caves in the world above 1,000 m.',
      },
      {
        day: 'Day 4', level: 'Light', lead: '8 am departure',
        body: ' — the calmest day of the route. After breakfast we carry on down the Pati Valley for around 2h to Poço da Árvore. We stay a good while and walk another 2h to the house of our last hosts in the valley.',
        note: 'After three hard days, an easy one on purpose.',
      },
      {
        day: 'Day 5', level: 'High', lead: '6 am breakfast',
        body: ' — we wake earlier to avoid the scorching sun on the hardest stretch. It is 2.5 hours of climbing (2.5 km) up the Ladeira do Império, the old route used to bring coffee out of the Pati Valley. On reaching the plateau, another 9 km of descent on rough ground down the Serra do Ramalho to the town of Andaraí, where the transport is waiting.',
        alert: 'The Ladeira do Império is the hardest stretch of the route — hence breakfast at 6 am.',
      },
    ],
    landmarks: [
      { titulo: 'Rampa Overlook', apoio: 'The most traditional in the valley' },
      { titulo: 'Igrejinha guesthouse', apoio: "Sr. João and his family's house" },
      { titulo: 'Cachoeirão Overlook', apoio: '280 m — up to 16 falls in the rain' },
      { titulo: 'Castelo Hill and Lapinha Cave', apoio: 'Above 1,200 m of altitude' },
      { titulo: 'Poço da Árvore', apoio: 'The easy day of the crossing' },
      { titulo: 'Ladeira do Império', apoio: 'The old coffee route' },
      { titulo: 'Serra do Ramalho to Andaraí', apoio: '9 km of descent on the way out' },
    ],
    included: {
      title: "What's included / not included",
      included: ['Accredited mountain guide with first-aid training', 'Lodging in the houses of Pati natives (4 nights)', 'Transfer out and back, leaving via Andaraí', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the trail'],
      excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Personal gear', 'Medical evacuation'],
    },
    safetyWarning: 'This route calls for excellent fitness and the ability to walk several consecutive days in adverse conditions — sun, rain, slippery and uneven ground. Day 3 has 250 m of climb to get above 1,200 m; day 5 climbs 2.5 km up the Ladeira do Império and descends another 9 km on rough ground. If you are unsure about your fitness, talk to us before booking.',
  },
  es: {
    meta: {
      title: 'Travesía Valle del Pati, 5 Días',
      description:
        'Travesía guiada de 70 km entrando por Guiné y saliendo en Andaraí, con Cachoeirão, Morro do Castelo, Poço da Árvore y la Ladeira do Império.',
      canonical: '/es/aventuras/valle-del-pati-5-dias',
      ogDescription: 'La travesía de punta a punta: entra por Guiné, sale por Andaraí.',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origen: Lençóis',
      titulo: { antes: 'Travesía Valle del Pati,', destaque: '5 Días.' },
      lead: { antes: 'Entra por Guiné, sale por Andaraí. La travesía de', destaque: 'punta a punta.' },
      apoio: 'Setenta kilómetros por los puntos más emblemáticos del valle, con salida por el otro lado de la sierra.',
      saida: 'Salida de Lençóis a las 7:30',
    },
    story: {
      titulo: ['La travesía completa,', 'de un lado al otro del valle.'],
      paragrafos: [
        'El Valle del Pati orbita los 1.000 metros de altitud, con una variedad rica de transiciones entre restos de Mata Atlántica, campos rupestres y campos generales. La región fue hogar de campesinos hace cerca de 200 años y hoy alberga 14 casas remanentes, que sirven de alojamiento para visitantes.',
        'Este itinerario recorre los puntos más emblemáticos de la región — Morro do Castelo, Cachoeirão y Mirador da Rampa — y sale por el otro lado, en Andaraí, pasando por el Poço da Árvore, el Pati de Baixo y la Ladeira do Império. Exige muy buen estado físico y capacidad de caminar varios días en condiciones adversas: sol, lluvia, terreno resbaladizo y accidentado.',
      ],
      outrasVersoes: 'El valle también existe en 3 y 4 días.',
      relacionados: [
        { titulo: 'Valle del Pati · 3 Días', nivel: 'Moderado', href: '/es/aventuras/valle-del-pati-3-dias' },
        { titulo: 'Valle del Pati · 4 Días', nivel: 'Moderado / Avanzado', href: '/es/aventuras/valle-del-pati-4-dias' },
      ],
    },
    dias: [
      {
        day: 'Día 1', level: 'Moderado', lead: '7:30 salida',
        body: ' de Lençóis rumbo a la villa de Guiné, donde empieza el sendero. Son cerca de 3h de caminata (1h de subida empinada + 2h en terreno plano) hasta el Mirador Tradicional del Valle del Pati. Después del snack, otra 1:30 h hasta la Igrejinha, donde el Sr. João y su familia reciben al grupo en la hospedería.',
        note: 'La subida empinada es lo primero que el Pati te cobra.',
      },
      {
        day: 'Día 2', level: 'Moderado / Alto', lead: '8h salida',
        body: ' con la despedida del alojamiento. Son cerca de 3h hasta el Mirador do Cachoeirão, de 280 m de altura — en la estación lluviosa se pueden contemplar cerca de 16 cascadas alrededor del valle. Después del snack preparado por el guía, vuelta por el mismo camino hasta la Igrejinha para buscar las pertenencias y seguir a una casa más abajo en el valle.',
        note: 'El día más largo: 22 km.',
      },
      {
        day: 'Día 3', level: 'Alto', lead: '8h salida',
        body: ' después de un desayuno reforzadísimo, rumbo al Morro do Castelo. Es el día de esfuerzo físico más intenso: 250 m de subida en 40 a 60 minutos para pasar los 1.200 m de altitud. En la cima, dos miradores y la entrada de la Gruta da Lapinha. La vuelta es por otro camino, pasando por la Cascada das Bananeiras, con llegada al alojamiento cerca de las 18h.',
        note: 'Una de las grutas más raras del mundo por encima de los 1.000 m.',
      },
      {
        day: 'Día 4', level: 'Suave', lead: '8h salida',
        body: ' — el día más tranquilo del recorrido. Después del desayuno seguimos bajando el Valle del Pati por cerca de 2h hasta el Poço da Árvore. Nos quedamos un buen rato ahí y caminamos otras 2h hasta la casa de los últimos anfitriones en el valle.',
        note: 'Después de tres días duros, un día suave a propósito.',
      },
      {
        day: 'Día 5', level: 'Alto', lead: '6h desayuno',
        body: ' — nos despertamos más temprano para evitar el sol abrasador en el tramo más crítico. Son 2:30 h de subida (2,5 km) por la Ladeira do Império, antiguo camino usado para sacar el café del Valle del Pati. Al llegar a la meseta, otros 9 km de bajada en terreno accidentado por la Serra do Ramalho hasta la ciudad de Andaraí, donde espera el transporte.',
        alert: 'La Ladeira do Império es el tramo más crítico del recorrido — por eso el desayuno es a las 6h.',
      },
    ],
    landmarks: [
      { titulo: 'Mirador da Rampa', apoio: 'El más tradicional del valle' },
      { titulo: 'Hospedería da Igrejinha', apoio: 'Casa del Sr. João y familia' },
      { titulo: 'Mirador do Cachoeirão', apoio: '280 m — hasta 16 cascadas con lluvia' },
      { titulo: 'Morro do Castelo y Gruta da Lapinha', apoio: 'Más de 1.200 m de altitud' },
      { titulo: 'Poço da Árvore', apoio: 'El día suave de la travesía' },
      { titulo: 'Ladeira do Império', apoio: 'Antiguo camino del café' },
      { titulo: 'Serra do Ramalho hasta Andaraí', apoio: '9 km de bajada en la salida' },
    ],
    included: {
      title: 'Qué está incluido / no incluido',
      included: ['Guía de montaña acreditado con formación en primeros auxilios', 'Alojamiento en casas de nativos del Pati (4 noches)', 'Traslado de ida y de vuelta, con salida por Andaraí', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después del sendero'],
      excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Equipo personal', 'Evacuación médica'],
    },
    safetyWarning: 'Este recorrido exige muy buen estado físico y capacidad de caminar varios días seguidos en condiciones adversas — sol, lluvia, terreno resbaladizo y accidentado. El 3º día tiene 250 m de subida para pasar los 1.200 m; el 5º sube 2,5 km por la Ladeira do Império y baja otros 9 km en terreno accidentado. Quien tenga dudas sobre su preparación debería hablar con atención antes de cerrar.',
  },
  fr: {
    meta: {
      title: 'Traversée de la vallée du Pati en 5 jours',
      description:
        'Traversée guidée de 70 km, entrée par Guiné et sortie par Andaraí, avec le Cachoeirão, le Morro do Castelo, le Poço da Árvore et la Ladeira do Império.',
      canonical: '/fr/aventures/vallee-du-pati-5-jours',
      ogDescription: 'La traversée de bout en bout : entrée par Guiné, sortie par Andaraí.',
    },
    hero: {
      nivel: 'Modéré / Élevé',
      origem: 'Départ : Lençóis',
      titulo: { antes: 'Traversée de la vallée du Pati', destaque: '5 jours.' },
      lead: { antes: 'Entrée par Guiné, sortie par Andaraí. La traversée de', destaque: 'bout en bout.' },
      apoio: 'Soixante-dix kilomètres par les points les plus emblématiques de la vallée, avec une sortie de l’autre côté de la serra.',
      saida: 'Départ de Lençóis à 7h30',
    },
    story: {
      titulo: ['La traversée complète,', 'd’un bout à l’autre de la vallée.'],
      paragrafos: [
        'La vallée du Pati se situe autour de 1 000 mètres d’altitude, avec une riche variété de transitions entre vestiges de forêt atlantique, champs rupestres et prairies ouvertes. La région a abrité des paysans il y a environ 200 ans et compte aujourd’hui 14 maisons encore debout, qui servent d’hébergement aux visiteurs.',
        'Cet itinéraire parcourt les points les plus emblématiques de la région — Morro do Castelo, Cachoeirão et Mirante da Rampa — et ressort de l’autre côté, à Andaraí, en passant par le Poço da Árvore, le Pati de Baixo et la Ladeira do Império. Il exige une excellente condition physique et la capacité de marcher plusieurs jours dans des conditions difficiles : soleil, pluie, terrain glissant et accidenté.',
      ],
      outrasVersoes: 'La vallée existe aussi en 3 et 4 jours.',
      relacionados: [
        { titulo: 'Vallée du Pati · 3 jours', nivel: 'Modéré', href: '/fr/aventures/vallee-du-pati-3-jours' },
        { titulo: 'Vallée du Pati · 4 jours', nivel: 'Modéré / Avancé', href: '/fr/aventures/vallee-du-pati-4-jours' },
      ],
    },
    dias: [
      {
        day: 'Jour 1', level: 'Modéré', lead: '7h30 départ',
        body: ' de Lençóis vers le village de Guiné, où commence le sentier. Environ 3h de marche (1h de montée raide + 2h sur terrain plat) jusqu’au belvédère traditionnel de la vallée du Pati. Après la collation, encore 1h30 jusqu’à l’Igrejinha, où Seu João et sa famille accueillent le groupe dans leur maison d’hôtes.',
        note: 'La montée raide est la première épreuve du Pati.',
      },
      {
        day: 'Jour 2', level: 'Modéré / Élevé', lead: '8h départ',
        body: ' et adieux à l’hébergement. Environ 3h jusqu’au Mirante do Cachoeirão, haut de 280 m — à la saison des pluies, on peut y contempler quelque 16 cascades autour de la vallée. Après la collation préparée par le guide, retour par le même chemin jusqu’à l’Igrejinha pour récupérer les affaires et rejoindre une maison plus bas dans la vallée.',
        note: 'La journée la plus longue : 22 km.',
      },
      {
        day: 'Jour 3', level: 'Élevé', lead: '8h départ',
        body: ' après un petit-déjeuner très copieux, vers le Morro do Castelo. C’est la journée d’effort physique le plus intense : 250 m de dénivelé en 40 à 60 minutes pour dépasser 1 200 m d’altitude. Au sommet, deux belvédères et l’entrée de la grotte de la Lapinha. Le retour se fait par un autre chemin, en passant par la cascade des Bananeiras, avec une arrivée à l’hébergement vers 18h.',
        note: 'L’une des grottes les plus rares au monde au-dessus de 1 000 m.',
      },
      {
        day: 'Jour 4', level: 'Facile', lead: '8h départ',
        body: ' — la journée la plus calme de l’itinéraire. Après le petit-déjeuner, nous descendons la vallée du Pati pendant environ 2h jusqu’au Poço da Árvore. Nous y restons un bon moment, puis marchons encore 2h jusqu’à la maison de nos derniers hôtes dans la vallée.',
        note: 'Après trois jours intenses, une journée facile, à dessein.',
      },
      {
        day: 'Jour 5', level: 'Élevé', lead: '6h petit-déjeuner',
        body: ' — lever plus tôt pour éviter le soleil brûlant sur le passage le plus critique. 2h30 de montée (2,5 km) par la Ladeira do Império, ancien chemin qui servait à acheminer le café de la vallée du Pati. Une fois sur le plateau, encore 9 km de descente en terrain accidenté par la Serra do Ramalho jusqu’à la ville d’Andaraí, où le transport attend.',
        alert: 'La Ladeira do Império est le passage le plus critique de l’itinéraire — d’où le petit-déjeuner à 6h.',
      },
    ],
    landmarks: [
      { titulo: 'Mirante da Rampa', apoio: 'Le plus traditionnel de la vallée' },
      { titulo: 'Maison d’hôtes de l’Igrejinha', apoio: 'Chez Seu João et sa famille' },
      { titulo: 'Mirante do Cachoeirão', apoio: '280 m — jusqu’à 16 cascades sous la pluie' },
      { titulo: 'Morro do Castelo et grotte de la Lapinha', apoio: 'Plus de 1 200 m d’altitude' },
      { titulo: 'Poço da Árvore', apoio: 'La journée facile de la traversée' },
      { titulo: 'Ladeira do Império', apoio: 'Ancien chemin du café' },
      { titulo: 'Serra do Ramalho jusqu’à Andaraí', apoio: '9 km de descente à la sortie' },
    ],
    included: {
      title: 'Ce qui est inclus / non inclus',
      included: ['Guide de montagne agréé formé aux premiers secours (APH)', 'Hébergement chez l’habitant dans le Pati (4 nuits)', 'Transfert aller et retour, avec sortie par Andaraí', 'Repas pendant le trek', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours', 'Salle d’attente, consigne sécurisée pour les bagages en plus et douche avant/après la randonnée'],
      excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner du 1er jour', 'Hébergement avant ou après le trek', 'Équipement personnel', 'Évacuation médicale'],
    },
    safetyWarning: 'Cet itinéraire exige une excellente condition physique et la capacité de marcher plusieurs jours d’affilée dans des conditions difficiles — soleil, pluie, terrain glissant et accidenté. Le 3e jour comporte 250 m de dénivelé pour dépasser 1 200 m ; le 5e monte 2,5 km par la Ladeira do Império et redescend encore 9 km en terrain accidenté. Si vous avez un doute sur votre condition physique, parlez-en à notre équipe avant de réserver.',
  },
  nl: {
    meta: {
      title: 'Doorsteek Vale do Pati, 5 dagen',
      description:
        'Een begeleide doorsteek van 70 km, met de ingang in Guiné en de uitgang in Andaraí, langs de Cachoeirão, de Morro do Castelo, de Poço da Árvore en de Ladeira do Império.',
      canonical: '/nl/avonturen/pati-vallei-5-dagen',
      ogDescription: 'De doorsteek van begin tot eind: in bij Guiné, uit bij Andaraí.',
    },
    hero: {
      nivel: 'Gemiddeld / Zwaar',
      origem: 'Vertrek: Lençóis',
      titulo: { antes: 'Doorsteek Vale do Pati,', destaque: '5 dagen.' },
      lead: { antes: 'In bij Guiné, uit bij Andaraí. De doorsteek', destaque: 'van begin tot eind.' },
      apoio: 'Zeventig kilometer langs de meest iconische plekken van het dal, met de uitgang aan de andere kant van de bergketen.',
      saida: 'Vertrek uit Lençóis om 7.30 uur',
    },
    story: {
      titulo: ['De volledige doorsteek,', 'van de ene kant van het dal naar de andere.'],
      paragrafos: [
        'De Vale do Pati ligt rond de 1.000 meter hoogte, met een rijke afwisseling van restanten van Atlantisch regenwoud, rotsvelden en open grasland. De streek was zo’n 200 jaar geleden de thuis van keuterboeren en telt nu nog 14 huizen, die als onderkomen voor bezoekers dienen.',
        'Deze route gaat langs de meest iconische plekken van de streek — de Morro do Castelo, de Cachoeirão en het uitkijkpunt Rampa — en verlaat het dal aan de andere kant, bij Andaraí, via de Poço da Árvore, de Pati de Baixo en de Ladeira do Império. Hij vraagt een uitstekende conditie en het vermogen om meerdere dagen te lopen in zware omstandigheden: zon, regen, glad en oneffen terrein.',
      ],
      outrasVersoes: 'Het dal bestaat ook in 3 en 4 dagen.',
      relacionados: [
        { titulo: 'Vale do Pati · 3 dagen', nivel: 'Gemiddeld', href: '/nl/avonturen/pati-vallei-3-dagen' },
        { titulo: 'Vale do Pati · 4 dagen', nivel: 'Gemiddeld / Gevorderd', href: '/nl/avonturen/pati-vallei-4-dagen' },
      ],
    },
    dias: [
      {
        day: 'Dag 1', level: 'Gemiddeld', lead: '7.30 uur vertrek',
        body: ' uit Lençóis richting het dorp Guiné, waar het pad begint. Zo’n 3 uur lopen (1 uur steil klimmen + 2 uur over vlak terrein) naar het traditionele uitkijkpunt over de Vale do Pati. Na een snack nog 1,5 uur naar Igrejinha, waar Sr. João en zijn familie de groep ontvangen in het gastenverblijf.',
        note: 'De steile klim is het eerste wat de Pati van je vraagt.',
      },
      {
        day: 'Dag 2', level: 'Gemiddeld / Zwaar', lead: '8.00 uur vertrek',
        body: ' en afscheid van het onderkomen. Zo’n 3 uur naar het uitkijkpunt Cachoeirão, 280 m hoog — in het regenseizoen zie je zo’n 16 watervallen rondom het dal. Na de snack die de gids klaarmaakt, via dezelfde weg terug naar Igrejinha om onze spullen op te halen en verder naar een huis lager in het dal.',
        note: 'De langste dag: 22 km.',
      },
      {
        day: 'Dag 3', level: 'Zwaar', lead: '8.00 uur vertrek',
        body: ' na een heel stevig ontbijt, richting de Morro do Castelo. Dit is fysiek de zwaarste dag: 250 m klimmen in 40 tot 60 minuten tot boven de 1.200 m hoogte. Op de top twee uitkijkpunten en de ingang van de Gruta da Lapinha. De terugweg gaat via een andere route, langs de Waterval Bananeiras, met aankomst bij het onderkomen rond 18.00 uur.',
        note: 'Een van de zeldzaamste grotten ter wereld boven 1.000 m.',
      },
      {
        day: 'Dag 4', level: 'Licht', lead: '8.00 uur vertrek',
        body: ' — de rustigste dag van de route. Na het ontbijt lopen we zo’n 2 uur verder het dal in, naar de Poço da Árvore. We blijven er een flinke tijd en lopen daarna nog 2 uur naar het huis van onze laatste gastheren in het dal.',
        note: 'Na drie zware dagen bewust een makkelijke.',
      },
      {
        day: 'Dag 5', level: 'Zwaar', lead: '6.00 uur ontbijt',
        body: ' — we staan vroeger op om de brandende zon op het zwaarste stuk te vermijden. Het is 2,5 uur klimmen (2,5 km) over de Ladeira do Império, de oude route waarlangs koffie uit de Vale do Pati werd gehaald. Op het plateau volgt nog 9 km afdalen over ruig terrein langs de Serra do Ramalho naar het stadje Andaraí, waar het vervoer klaarstaat.',
        alert: 'De Ladeira do Império is het zwaarste stuk van de route — vandaar het ontbijt om 6.00 uur.',
      },
    ],
    landmarks: [
      { titulo: 'Uitkijkpunt Rampa', apoio: 'Het meest traditionele van het dal' },
      { titulo: 'Gastenverblijf Igrejinha', apoio: 'Het huis van Sr. João en zijn familie' },
      { titulo: 'Uitkijkpunt Cachoeirão', apoio: '280 m — tot 16 watervallen bij regen' },
      { titulo: 'Morro do Castelo en Gruta da Lapinha', apoio: 'Boven de 1.200 m hoogte' },
      { titulo: 'Poço da Árvore', apoio: 'De makkelijke dag van de doorsteek' },
      { titulo: 'Ladeira do Império', apoio: 'De oude koffieroute' },
      { titulo: 'Serra do Ramalho naar Andaraí', apoio: '9 km afdalen op de weg naar buiten' },
    ],
    included: {
      title: 'Wat is inbegrepen / niet inbegrepen',
      included: ['Erkende berggids met EHBO-opleiding', 'Overnachting in de huizen van bewoners van de Pati (4 nachten)', 'Vervoer heen en terug, met de uitgang via Andaraí', 'Alle maaltijden tijdens de trektocht', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit', 'Wachtruimte, veilige bagageopslag en een douche voor/na het pad'],
      excluded: ['Alles wat niet in de lijst staat', 'Ontbijt op dag 1', 'Overnachting voor of na de trektocht', 'Persoonlijke uitrusting', 'Medische evacuatie'],
    },
    safetyWarning: 'Deze route vraagt een uitstekende conditie en het vermogen om meerdere dagen achter elkaar te lopen in zware omstandigheden — zon, regen, glad en oneffen terrein. Dag 3 heeft 250 m klimmen tot boven de 1.200 m; dag 5 klimt 2,5 km over de Ladeira do Império en daalt nog eens 9 km af over ruig terrein. Twijfel je over je conditie, praat dan met ons voordat je boekt.',
  },
  de: {
    meta: {
      title: 'Durchquerung Vale do Pati, 5 Tage',
      description:
        'Eine geführte Durchquerung von 70 km, mit Einstieg in Guiné und Ausstieg in Andaraí, vorbei am Cachoeirão, dem Morro do Castelo, dem Poço da Árvore und der Ladeira do Império.',
      canonical: '/de/abenteuer/pati-tal-5-tage',
      ogDescription: 'Die Durchquerung von Anfang bis Ende: rein bei Guiné, raus bei Andaraí.',
    },
    hero: {
      nivel: 'Mittel / Schwer',
      origem: 'Start: Lençóis',
      titulo: { antes: 'Durchquerung Vale do Pati,', destaque: '5 Tage.' },
      lead: { antes: 'Rein bei Guiné, raus bei Andaraí. Die Durchquerung', destaque: 'von Anfang bis Ende.' },
      apoio: 'Siebzig Kilometer zu den bekanntesten Orten des Tals, mit dem Ausstieg auf der anderen Seite der Bergkette.',
      saida: 'Start in Lençóis um 7:30 Uhr',
    },
    story: {
      titulo: ['Die vollständige Durchquerung,', 'von einer Seite des Tals zur anderen.'],
      paragrafos: [
        'Das Vale do Pati liegt auf rund 1.000 Metern Höhe, mit einer reichen Abfolge von Resten des Atlantischen Regenwalds, Felsfeldern und offenem Grasland. Vor rund 200 Jahren lebten hier Kleinbauern; heute stehen noch 14 Häuser, die als Unterkunft für Besucher dienen.',
        'Diese Route führt zu den bekanntesten Orten der Region — dem Morro do Castelo, dem Cachoeirão und dem Aussichtspunkt Rampa — und verlässt das Tal auf der anderen Seite, bei Andaraí, über den Poço da Árvore, das Pati de Baixo und die Ladeira do Império. Sie verlangt eine ausgezeichnete Kondition und die Fähigkeit, mehrere Tage unter harten Bedingungen zu gehen: Sonne, Regen, rutschiges und unebenes Gelände.',
      ],
      outrasVersoes: 'Das Tal gibt es auch in 3 und 4 Tagen.',
      relacionados: [
        { titulo: 'Vale do Pati · 3 Tage', nivel: 'Mittel', href: '/de/abenteuer/pati-tal-3-tage' },
        { titulo: 'Vale do Pati · 4 Tage', nivel: 'Mittel / Fortgeschritten', href: '/de/abenteuer/pati-tal-4-tage' },
      ],
    },
    dias: [
      {
        day: 'Tag 1', level: 'Mittel', lead: '7:30 Uhr Start',
        body: ' in Lençóis Richtung Dorf Guiné, wo der Weg beginnt. Rund 3 Stunden zu Fuß (1 Stunde steiler Anstieg + 2 Stunden über flaches Gelände) zum traditionellen Aussichtspunkt über das Vale do Pati. Nach einem Snack noch 1,5 Stunden bis Igrejinha, wo Sr. João und seine Familie die Gruppe in der Herberge empfangen.',
        note: 'Der steile Anstieg ist das Erste, was das Pati von dir verlangt.',
      },
      {
        day: 'Tag 2', level: 'Mittel / Schwer', lead: '8:00 Uhr Start',
        body: ' und Abschied von der Unterkunft. Rund 3 Stunden zum Aussichtspunkt Cachoeirão, 280 m hoch — in der Regenzeit siehst du rund 16 Wasserfälle rund ums Tal. Nach dem Snack, den der Guide zubereitet, auf demselben Weg zurück nach Igrejinha, um unsere Sachen zu holen, und weiter zu einem Haus weiter unten im Tal.',
        note: 'Der längste Tag: 22 km.',
      },
      {
        day: 'Tag 3', level: 'Schwer', lead: '8:00 Uhr Start',
        body: ' nach einem sehr kräftigen Frühstück, Richtung Morro do Castelo. Dies ist körperlich der anstrengendste Tag: 250 m Anstieg in 40 bis 60 Minuten auf über 1.200 m Höhe. Auf dem Gipfel zwei Aussichtspunkte und der Eingang zur Gruta da Lapinha. Der Rückweg führt über eine andere Route, vorbei am Bananeiras-Wasserfall, mit Ankunft an der Unterkunft gegen 18:00 Uhr.',
        note: 'Eine der seltensten Höhlen der Welt über 1.000 m.',
      },
      {
        day: 'Tag 4', level: 'Leicht', lead: '8:00 Uhr Start',
        body: ' — der ruhigste Tag der Route. Nach dem Frühstück gehen wir rund 2 Stunden weiter ins Tal hinein, zum Poço da Árvore. Wir bleiben dort eine ganze Weile und gehen dann noch 2 Stunden zum Haus unserer letzten Gastgeber im Tal.',
        note: 'Nach drei harten Tagen bewusst ein leichter.',
      },
      {
        day: 'Tag 5', level: 'Schwer', lead: '6:00 Uhr Frühstück',
        body: ' — wir stehen früher auf, um die brennende Sonne auf dem schwierigsten Abschnitt zu vermeiden. Es sind 2,5 Stunden Aufstieg (2,5 km) über die Ladeira do Império, den alten Weg, über den der Kaffee aus dem Vale do Pati gebracht wurde. Auf dem Plateau folgen noch 9 km Abstieg über raues Gelände entlang der Serra do Ramalho bis zum Städtchen Andaraí, wo der Transport bereitsteht.',
        alert: 'Die Ladeira do Império ist der anstrengendste Abschnitt der Route — deshalb das Frühstück um 6:00 Uhr.',
      },
    ],
    landmarks: [
      { titulo: 'Aussichtspunkt Rampa', apoio: 'Der traditionellste des Tals' },
      { titulo: 'Herberge Igrejinha', apoio: 'Das Haus von Sr. João und seiner Familie' },
      { titulo: 'Aussichtspunkt Cachoeirão', apoio: '280 m — bis zu 16 Wasserfälle bei Regen' },
      { titulo: 'Morro do Castelo und Gruta da Lapinha', apoio: 'Über 1.200 m Höhe' },
      { titulo: 'Poço da Árvore', apoio: 'Der leichte Tag der Durchquerung' },
      { titulo: 'Ladeira do Império', apoio: 'Der alte Kaffeeweg' },
      { titulo: 'Serra do Ramalho nach Andaraí', apoio: '9 km Abstieg auf dem Weg hinaus' },
    ],
    included: {
      title: 'Was inklusive ist / was nicht',
      included: ['Zertifizierter Bergführer mit Erste-Hilfe-Ausbildung', 'Übernachtung in den Häusern der Bewohner des Pati (4 Nächte)', 'Hin- und Rücktransport, mit Ausstieg über Andaraí', 'Alle Mahlzeiten während der Tour', 'SPOT-X-Satellitentracker', 'Abenteuerversicherung', 'Erste-Hilfe-Set', 'Warteraum, sichere Gepäckaufbewahrung und Dusche vor/nach der Wanderung'],
      excluded: ['Alles, was nicht aufgeführt ist', 'Frühstück am 1. Tag', 'Unterkunft vor oder nach der Tour', 'Persönliche Ausrüstung', 'Medizinische Evakuierung'],
    },
    safetyWarning: 'Diese Route verlangt eine ausgezeichnete Kondition und die Fähigkeit, mehrere Tage hintereinander unter harten Bedingungen zu gehen — Sonne, Regen, rutschiges und unebenes Gelände. Tag 3 hat 250 m Anstieg auf über 1.200 m; Tag 5 steigt 2,5 km über die Ladeira do Império hinauf und dann noch 9 km über raues Gelände hinab. Wenn du an deiner Kondition zweifelst, sprich mit uns, bevor du buchst.',
  },
};

export const PATI5_CONTENT = {
  pt: buildPatiContent('pt', VARIANTS.pt),
  en: buildPatiContent('en', VARIANTS.en),
  es: buildPatiContent('es', VARIANTS.es),
  fr: buildPatiContent('fr', VARIANTS.fr),
  nl: buildPatiContent('nl', VARIANTS.nl),
  de: buildPatiContent('de', VARIANTS.de),
};

export const PATI5_FAQS = {
  pt: buildPatiFaqs('pt', VARIANTS.pt),
  en: buildPatiFaqs('en', VARIANTS.en),
  es: buildPatiFaqs('es', VARIANTS.es),
  fr: buildPatiFaqs('fr', VARIANTS.fr),
  nl: buildPatiFaqs('nl', VARIANTS.nl),
  de: buildPatiFaqs('de', VARIANTS.de),
};
