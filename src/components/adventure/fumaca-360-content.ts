/**
 * Conteúdo da Cachoeira da Fumaça 360° (3 dias), por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-da-fumaca-360. A operadora não tem
 * versão em inglês nem em espanhol — o `/en/` da mesma URL devolve a página em
 * português —, então **EN e ES são tradução feita neste repositório**.
 *
 * O "360" é literal: o roteiro vê a mesma cachoeira de quatro ângulos — de cima
 * no mirante, de lado na fenda, de baixo na base e de frente da Serra da Folha
 * Larga. É o que separa este roteiro da [Fumaça por Baixo], que só faz dois.
 *
 * Trekking selvagem: comida, hospedagem e checklist vêm de `wild-trek-shared`.
 *
 * ⚠️ Três textos da fonte são colagem de outra página e foram reescritos: o
 * parágrafo de abertura e o título do 1º dia descrevem o roteiro da Fumaça por
 * Baixo (Palmital e Capivara no 1º dia, quando o corpo do próprio itinerário
 * diz Capão → Fumaça por cima → Fenda), e o checklist está intitulado "O que
 * levar para o Vale do Pati".
 *
 * ⚠️ A faixa de dados diz 38 km, mas os três dias somam 43 (13+12+18).
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { WILD_TREK_ESTADIA, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';

export const FUMACA_360_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/fumaca-360/hero.jpg', position: '50% 45%' },
  galeria: [
    { src: '/img/adventures/fumaca-360/1.jpeg', width: 1536, height: 2048 },
    { src: '/img/adventures/fumaca-360/2.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/fumaca-360/3.jpg', width: 1920, height: 2560 },
  ],
  stats: [
    ['38 km', '/svg/_icons/icon_03_montain.svg'],
    ['3 dias / 2 noites', '/svg/_icons/icon_11_calendar.svg'],
    ['400 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['4 ângulos', '/svg/_icons/icon_12_camera.svg'],
    ['Barraca', '/svg/_icons/icon_10_home.svg'],
    ['Moderado / Alto', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 1450,
};

export const FUMACA_360_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira da Fumaça 360° — 3 dias',
      description:
        'A mesma cachoeira de quatro ângulos: de cima no mirante, de lado na fenda, de baixo na base e de frente da Serra da Folha Larga.',
      canonical: '/pt/aventuras/cachoeira-da-fumaca-360',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origem: Vale do Capão',
      duracao: '3 dias',
      titulo: 'Fumaça 360°.',
      lead: 'A mesma cachoeira de quatro ângulos — de cima, de lado, de baixo e de frente.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Altura do paredão', 'Ângulos da cachoeira', 'Onde se dorme', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Fumaça 360°.',
      paragrafos: [
        'A Cachoeira da Fumaça, uma das maiores do Brasil, tem um paredão de 400 metros onde a água não alcança o chão de forma uniforme — é o efeito que dá nome à cachoeira. Quase todo mundo a conhece por um ângulo só. Este roteiro faz os quatro.',
        'De cima, no mirante clássico do Vale do Capão. De lado, dormindo na fenda, na toca da pingueira. De baixo, na base do paredão, onde poucos chegam. E de frente, do alto da Serra da Folha Larga, no último dia.',
        'O caminho passa por antigas lavras e tocas de garimpeiros abandonadas, e ainda inclui a Cachoeira do Palmital e a Cachoeira da Capivara. A trilha pode ficar consideravelmente mais perigosa conforme o tempo e a estação; siga sempre as instruções do guia.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.pt,
    itinerario: {
      titulo: 'Dia a dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante. Este trekking é dinâmico e admite várias entradas e saídas — consulte as opções com o atendimento.',
      corpo: [],
      dias: [
        {
          rotulo: '1º dia',
          titulo: 'Fumaça por cima + Fenda da Fumaça',
          corpo: 'Partimos pela trilha tradicional que leva do Vale do Capão à Cachoeira da Fumaça por cima — o mirante de 400 metros, alcançado depois de 1h30 de caminhada. Depois de um lanche e do descanso, seguimos até a Fenda da Cachoeira da Fumaça, onde fica o acampamento da primeira noite e de onde dá para contemplar a cachoeira de lado, na toca da pingueira.',
          distancia: '13 km',
          esforco: 'Alto',
        },
        {
          rotulo: '2º dia',
          titulo: 'Fenda + Fumaça por baixo',
          corpo: 'Depois do café da manhã preparado pelo guia, saímos por volta das 8h00 ladeira abaixo pela mesma fenda em que dormimos, até a base da Cachoeira da Fumaça — vista de baixo, é o ângulo mais impactante do roteiro. Seguimos o curso do córrego até a Cachoeira da Capivara, onde fica a segunda base de acampamento. Na chegada, o guia prepara o jantar.',
          distancia: '12 km',
          esforco: 'Moderado',
        },
        {
          rotulo: '3º dia',
          titulo: 'Fumaça de frente + Cachoeira do Palmital',
          corpo: 'Saída no mesmo horário, rumo à Cachoeira do Palmital — cerca de 40 minutos de caminhada. Deixamos a carga no ponto que o guia indicar e subimos a Serra da Folha Larga só com mochila de ataque até o Mirante da Cachoeira da Fumaça de frente, o quarto e último ângulo. Voltamos pela mesma trilha até o Palmital, pegamos as cargueiras e seguimos pela Serra do Veneno até Lençóis, por volta das 18h00, fechando o passeio com um banho no Ribeirão do Meio.',
          distancia: '18 km',
          esforco: 'Alto',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 1.750', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 1.450', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      wildTrekChecklist('pt', `São três dias com duas trocas de acampamento e uma noite dormindo dentro da fenda. ${WILD_TREK_PORTER.pt}`),
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Transfer Vale do Capão × Lençóis (80 km)', 'Camping selvagem (2 noites), com barraca, isolante térmico e saco de dormir', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Equipamento pessoal', 'Evacuação médica'],
      },
      safetyFaq(
        'pt',
        'A trilha pode ficar consideravelmente mais perigosa conforme o tempo e a estação. A descida da fenda até a base do paredão, no 2º dia, é o trecho que mais exige atenção. Dependendo do ritmo do grupo, a volta pode ficar para um 4º dia — confirme a possibilidade com o atendimento antes de fechar passagem ou hospedagem.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para ver a Fumaça', 'pelos quatro lados?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Fumaça Waterfall 360° — 3 days',
      description:
        'The same waterfall from four angles: from above at the lookout, from the side in the cleft, from below at the base, and head-on from Serra da Folha Larga.',
      canonical: '/en/adventures/fumaca-waterfall-360',
    },
    hero: {
      nivel: 'Moderate / High',
      origem: 'From: Vale do Capão',
      duracao: '3 days',
      titulo: 'Fumaça 360°.',
      lead: 'The same waterfall from four angles — from above, from the side, from below and head-on.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Height of the wall', 'Angles on the falls', 'Where you sleep', 'Difficulty'],
    sobre: {
      titulo: 'About Fumaça 360°.',
      paragrafos: [
        "Fumaça Waterfall, one of Brazil's largest, drops down a 400-metre wall where the water never reaches the ground evenly — the effect it is named for. Almost everyone sees it from a single angle. This route takes all four.",
        'From above, at the classic Vale do Capão lookout. From the side, sleeping in the cleft, in the drip cave. From below, at the foot of the wall, where few people get to. And head-on, from the top of the Serra da Folha Larga on the last day.',
        'The route passes old diggings and abandoned miners’ shelters, and takes in Palmital Waterfall and Capivara Waterfall along the way. The trail can become considerably more dangerous depending on the weather and the season; always follow the guide’s instructions.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.en,
    itinerario: {
      titulo: 'Day by day.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant. This trek is dynamic and allows several entry and exit points — ask us about the options.',
      corpo: [],
      dias: [
        {
          rotulo: 'Day 1',
          titulo: 'Fumaça from above + the cleft',
          corpo: 'We set off on the traditional trail from Vale do Capão to Fumaça Waterfall seen from above — the 400-metre lookout, reached after 1.5 hours of walking. After a snack and a rest, we continue to the cleft of the Fumaça, where the first night’s camp is set and from where you can take in the waterfall from the side, in the drip cave.',
          distancia: '13 km',
          esforco: 'High',
        },
        {
          rotulo: 'Day 2',
          titulo: 'The cleft + Fumaça from below',
          corpo: 'After breakfast prepared by the guide, we leave around 8:00 am down the same cleft we slept in, to the base of Fumaça Waterfall — seen from below, the most striking angle of the route. We follow the stream to Capivara Waterfall, where the second camp is set. On arrival, the guide prepares dinner.',
          distancia: '12 km',
          esforco: 'Moderate',
        },
        {
          rotulo: 'Day 3',
          titulo: 'Fumaça head-on + Palmital Waterfall',
          corpo: 'Out at the usual time, towards Palmital Waterfall — around 40 minutes of walking. We leave the heavy loads where the guide indicates and climb the Serra da Folha Larga with day packs only to the lookout facing Fumaça Waterfall head-on, the fourth and final angle. We return by the same trail to the Palmital, pick up our packs and carry on over the Serra do Veneno to Lençóis, arriving around 6:00 pm and closing the trip with a swim at Ribeirão do Meio.',
          distancia: '18 km',
          esforco: 'High',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 1,750', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 1,450', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      wildTrekChecklist('en', `Three days with two changes of camp and a night sleeping inside the cleft. ${WILD_TREK_PORTER.en}`),
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'Transfer Vale do Capão × Lençóis (80 km)', 'Wild camping (2 nights), with tent, sleeping mat and sleeping bag', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Personal gear', 'Medical evacuation'],
      },
      safetyFaq(
        'en',
        'The trail can become considerably more dangerous depending on the weather and the season. The descent from the cleft to the foot of the wall, on day 2, is the stretch that demands the most attention. Depending on the pace of the group, the return may run into a fourth day — check that possibility with us before booking flights or accommodation.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to see the Fumaça', 'from all four sides?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada da Fumaça 360° — 3 días',
      description:
        'La misma cascada desde cuatro ángulos: desde arriba en el mirador, de costado en la grieta, desde abajo en la base y de frente desde la Serra da Folha Larga.',
      canonical: '/es/aventuras/cascada-da-fumaca-360',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origen: Valle do Capão',
      duracao: '3 días',
      titulo: 'Fumaça 360°.',
      lead: 'La misma cascada desde cuatro ángulos — desde arriba, de costado, desde abajo y de frente.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Altura del paredón', 'Ángulos de la cascada', 'Dónde se duerme', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Fumaça 360°.',
      paragrafos: [
        'La Cascada da Fumaça, una de las mayores de Brasil, tiene un paredón de 400 metros donde el agua no alcanza el suelo de forma uniforme — es el efecto que le da nombre. Casi todo el mundo la conoce desde un solo ángulo. Este recorrido hace los cuatro.',
        'Desde arriba, en el mirador clásico del Valle do Capão. De costado, durmiendo en la grieta, en la toca da pingueira. Desde abajo, en la base del paredón, donde llegan pocos. Y de frente, desde lo alto de la Serra da Folha Larga, el último día.',
        'El camino pasa por antiguas labores y tocas de mineros abandonadas, e incluye además la Cascada del Palmital y la Cascada del Capivara. El sendero puede volverse considerablemente más peligroso según el tiempo y la estación; seguí siempre las instrucciones del guía.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.es,
    itinerario: {
      titulo: 'Día a día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante. Este trekking es dinámico y admite varias entradas y salidas — consultá las opciones con atención.',
      corpo: [],
      dias: [
        {
          rotulo: '1º día',
          titulo: 'Fumaça desde arriba + la grieta',
          corpo: 'Partimos por el sendero tradicional que lleva del Valle do Capão a la Cascada da Fumaça desde arriba — el mirador de 400 metros, alcanzado después de 1:30 h de caminata. Tras un snack y el descanso, seguimos hasta la Grieta de la Cascada da Fumaça, donde queda el campamento de la primera noche y desde donde se puede contemplar la cascada de costado, en la toca da pingueira.',
          distancia: '13 km',
          esforco: 'Alto',
        },
        {
          rotulo: '2º día',
          titulo: 'La grieta + Fumaça desde abajo',
          corpo: 'Después del desayuno preparado por el guía, salimos cerca de las 8:00 cuesta abajo por la misma grieta en la que dormimos, hasta la base de la Cascada da Fumaça — vista desde abajo, es el ángulo más impactante del recorrido. Seguimos el curso del arroyo hasta la Cascada del Capivara, donde queda la segunda base de campamento. Al llegar, el guía prepara la cena.',
          distancia: '12 km',
          esforco: 'Moderado',
        },
        {
          rotulo: '3º día',
          titulo: 'Fumaça de frente + Cascada del Palmital',
          corpo: 'Salida en el mismo horario, rumbo a la Cascada del Palmital — cerca de 40 minutos de caminata. Dejamos la carga en el punto que indique el guía y subimos la Serra da Folha Larga solo con mochila de ataque hasta el Mirador de la Cascada da Fumaça de frente, el cuarto y último ángulo. Volvemos por el mismo sendero hasta el Palmital, tomamos las mochilas de carga y seguimos por la Serra do Veneno hasta Lençóis, cerca de las 18:00, cerrando el paseo con un baño en el Ribeirão do Meio.',
          distancia: '18 km',
          esforco: 'Alto',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 1.750', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 1.450', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      wildTrekChecklist('es', `Son tres días con dos cambios de campamento y una noche durmiendo dentro de la grieta. ${WILD_TREK_PORTER.es}`),
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Traslado Valle do Capão × Lençóis (80 km)', 'Camping salvaje (2 noches), con carpa, aislante térmico y bolsa de dormir', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Equipo personal', 'Evacuación médica'],
      },
      safetyFaq(
        'es',
        'El sendero puede volverse considerablemente más peligroso según el tiempo y la estación. La bajada de la grieta hasta la base del paredón, el 2º día, es el tramo que más atención exige. Según el ritmo del grupo, la vuelta puede pasar a un 4º día — confirmá esa posibilidad con atención antes de cerrar pasajes o alojamiento.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para ver la Fumaça', 'por los cuatro lados?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
