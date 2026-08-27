/**
 * Conteúdo da Cachoeira da Fumaça por Baixo (3 dias), por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-da-fumaca-por-baixo e EN de
 * mamut.agency/en/aventuras/fumaca-waterfall-from-bellow. ES é tradução aqui.
 *
 * Trekking selvagem, como o [Palmital] e o [Mixila]: comida, hospedagem e
 * checklist vêm de `wild-trek-shared`.
 *
 * É o roteiro que vê a Fumaça pelos dois lados — de baixo, na base do paredão
 * de 400 m, e de cima, no mirante do 3º dia. A página de um dia
 * (`fumaca-content`) só faz o de cima.
 *
 * ⚠️ O checklist da fonte está com o título "O que levar para o Vale do Pati" —
 * texto colado por engano. Usei o checklist de camping, que é o que o roteiro
 * pede.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { WILD_TREK_CAMP, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';

export const FUMACA_BAIXO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/fumaca-baixo/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/fumaca-baixo/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/fumaca-baixo/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/fumaca-baixo/3.jpeg', width: 1536, height: 1152 },
  ],
  stats: [
    ['38 km', '/svg/_icons/icon_03_montain.svg'],
    ['3 dias / 2 noites', '/svg/_icons/icon_11_calendar.svg'],
    ['400 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['Barraca', '/svg/_icons/icon_10_home.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Alto', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 1450,
};

export const FUMACA_BAIXO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira da Fumaça por Baixo — 3 dias',
      description:
        'Três dias até a base do paredão de 400 metros da Cachoeira da Fumaça, passando pelo Palmital e pela Capivara, com saída pelo Vale do Capão.',
      canonical: '/pt/aventuras/cachoeira-da-fumaca-por-baixo',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origem: Lençóis',
      duracao: '3 dias',
      titulo: 'Fumaça por Baixo.',
      lead: 'Chegar ao pé do paredão de 400 metros — e, no último dia, olhar de cima o mesmo lugar.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Altura do paredão', 'Onde se dorme', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Fumaça por Baixo.',
      paragrafos: [
        'Uma das trilhas mais tradicionais e desafiadoras da Chapada Diamantina. A Cachoeira da Fumaça, uma das maiores do Brasil, vista de baixo é um espetáculo reservado a quem chega até a base: um paredão de 400 metros onde a água não alcança o chão de forma uniforme — é o efeito que dá nome à cachoeira.',
        'A trilha passa por antigas lavras e tocas de garimpeiros abandonadas, num percurso que é tanto história quanto paisagem. No caminho também visitamos a Cachoeira do Palmital e a Cachoeira da Capivara.',
        'No terceiro dia subimos a Serra do Macaco até o mirante da Fumaça por cima — o mesmo lugar, visto do outro extremo. A trilha pode ficar consideravelmente mais perigosa conforme o tempo e a estação; siga sempre as instruções do guia.',
        ...WILD_TREK_CAMP.pt,
      ],
    },
    itinerario: {
      titulo: 'Dia a dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante. Este trekking é dinâmico e admite várias entradas e saídas — consulte as opções com o atendimento.',
      corpo: [],
      dias: [
        {
          rotulo: '1º dia',
          titulo: 'Cachoeira do Palmital + Cachoeira da Capivara',
          corpo: 'Saída de Lençóis por volta das 7h00, pela trilha do Ribeirão do Meio. Subimos cerca de 2 horas a Serra do Veneno até a Toca da Onça, onde fazemos um lanche, e seguimos mais 1 hora até a Cachoeira do Palmital — um paraíso encravado na serra. Depois de mais 1 hora de caminhada chegamos à Cachoeira da Capivara, onde ficamos na primeira noite. Montado o acampamento, o guia prepara o jantar conforme as restrições alimentares do grupo.',
          distancia: '15 km',
          esforco: 'Alto',
        },
        {
          rotulo: '2º dia',
          titulo: 'Fumaça por baixo',
          corpo: 'Partida às 8h00, depois do café da manhã, com todo o equipamento rumo à base da Serra do Macaco — a próxima base de acampamento. São 2 horas beirando o Rio Capivara. Deixamos a carga no ponto indicado pelo guia e seguimos mais 2 horas até as quedas da Cachoeira da Fumaça por baixo. A caminhada pelo Riacho da Fumaça é especial justamente por ser intocada e protegida: dá para observar muitas espécies da flora e da fauna nos galhos, nas pedras e em tudo em volta. Volta ao acampamento, onde sai o último jantar do passeio.',
          distancia: '12 km',
          esforco: 'Moderado',
        },
        {
          rotulo: '3º dia',
          titulo: 'Fumaça por cima + Vale do Capão',
          corpo: 'Saída no mesmo horário, depois do café. Subimos a Serra do Macaco rumo ao mirante da Cachoeira da Fumaça por cima: cerca de 3 horas de caminhada serra acima. Depois de um lanche e do tempo para apreciar a cachoeira do outro extremo, pegamos a trilha tradicional até a vila de Caeté-Açu, no Vale do Capão, onde o carro espera para o transfer de volta a Lençóis.',
          distancia: '—',
          esforco: 'Alto',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 1.700', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 1.450', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      wildTrekChecklist('pt', `São três dias sem estrutura por perto e duas trocas de acampamento. ${WILD_TREK_PORTER.pt}`),
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH', 'Transfer de ida e volta, com retorno pelo Vale do Capão', 'Camping: barraca, saco de dormir e isolante térmico', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da trilha'],
        excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Equipamento pessoal', 'Evacuação médica'],
      },
      safetyFaq(
        'pt',
        'A trilha pode ficar consideravelmente mais perigosa conforme o tempo e a estação — as instruções do guia valem mais aqui do que em qualquer outro roteiro nosso. São três dias com dois acampamentos diferentes, sem estrutura por perto: lanterna de cabeça e capa de chuva são obrigatórias, não recomendação.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para ver a Fumaça', 'pelos dois lados?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Fumaça Waterfall from Below — 3 days',
      description:
        'Three days to the foot of the 400-metre wall of Fumaça Waterfall, by way of Palmital and Capivara, coming out through Vale do Capão.',
      canonical: '/en/adventures/fumaca-waterfall-from-bellow',
    },
    hero: {
      nivel: 'Moderate / High',
      origem: 'From: Lençóis',
      duracao: '3 days',
      titulo: 'Fumaça from Below.',
      lead: 'Reach the foot of the 400-metre wall — and, on the last day, look down on the same place.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Height of the wall', 'Where you sleep', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Fumaça from Below.',
      paragrafos: [
        "One of the most traditional and demanding trails in the Chapada Diamantina. Fumaça Waterfall, one of Brazil's largest, seen from below is a spectacle reserved for those who make it to the base: a 400-metre wall where the water never reaches the ground evenly — the effect the waterfall is named for.",
        "The trail passes old diggings and abandoned miners' shelters, a route that is as much history as landscape. Along the way we also visit Palmital Waterfall and Capivara Waterfall.",
        'On the third day we climb the Serra do Macaco to the Fumaça lookout from above — the same place, seen from the other end. The trail can become considerably more dangerous depending on the weather and the season; always follow the guide’s instructions.',
        ...WILD_TREK_CAMP.en,
      ],
    },
    itinerario: {
      titulo: 'Day by day.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant. This trek is dynamic and allows several entry and exit points — ask us about the options.',
      corpo: [],
      dias: [
        {
          rotulo: 'Day 1',
          titulo: 'Palmital Waterfall + Capivara Waterfall',
          corpo: 'Departure from Lençóis around 7:00 am, along the Ribeirão do Meio trail. We climb the Serra do Veneno for about 2 hours to Toca da Onça, where we have a snack, and continue another hour to Palmital Waterfall — a paradise set in the range. After another hour of walking we reach Capivara Waterfall, where we spend the first night. Once camp is up, the guide prepares dinner around the group’s dietary requirements.',
          distancia: '15 km',
          esforco: 'High',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Fumaça from below',
          corpo: 'Out at 8:00 am, after breakfast, with all the gear towards the foot of the Serra do Macaco — the next campsite. It is 2 hours following the Capivara river. We leave the load at the point the guide indicates and carry on another 2 hours to the falls of Fumaça Waterfall from below. The walk up the Fumaça creek is special precisely because it is untouched and protected: you can watch a great many plant and animal species in the branches, on the rocks and in everything around you. Back to camp, where the last dinner of the trip is served.',
          distancia: '12 km',
          esforco: 'Moderate',
        },
        {
          rotulo: 'Day 3',
          titulo: 'Fumaça from above + Vale do Capão',
          corpo: 'Out at the usual time, after breakfast. We climb the Serra do Macaco towards the Fumaça Waterfall lookout from above: around 3 hours of walking up the range. After a snack and time to take in the waterfall from the other end, we take the traditional trail to the village of Caeté-Açu, in Vale do Capão, where the car is waiting for the transfer back to Lençóis.',
          distancia: '—',
          esforco: 'High',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 1,700', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 1,450', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      wildTrekChecklist('en', `Three days with no facilities nearby and two changes of campsite. ${WILD_TREK_PORTER.en}`),
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training', 'Return transfer, coming back through Vale do Capão', 'Camping: tent, sleeping bag and sleeping mat', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the trail'],
        excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Personal gear', 'Medical evacuation'],
      },
      safetyFaq(
        'en',
        "The trail can become considerably more dangerous depending on the weather and the season — the guide's instructions count for more here than on any other route we run. It is three days across two different campsites with no facilities nearby: a head torch and rain gear are mandatory, not a recommendation.",
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to see the Fumaça', 'from both sides?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada da Fumaça por Abajo — 3 días',
      description:
        'Tres días hasta la base del paredón de 400 metros de la Cascada da Fumaça, pasando por el Palmital y la Capivara, con salida por el Valle do Capão.',
      canonical: '/es/aventuras/cascada-da-fumaca-por-abajo',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origen: Lençóis',
      duracao: '3 días',
      titulo: 'Fumaça por Abajo.',
      lead: 'Llegar al pie del paredón de 400 metros — y, el último día, mirar desde arriba el mismo lugar.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Altura del paredón', 'Dónde se duerme', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Fumaça por Abajo.',
      paragrafos: [
        'Uno de los senderos más tradicionales y desafiantes de la Chapada Diamantina. La Cascada da Fumaça, una de las mayores de Brasil, vista desde abajo es un espectáculo reservado a quien llega hasta la base: un paredón de 400 metros donde el agua no alcanza el suelo de forma uniforme — es el efecto que le da nombre a la cascada.',
        'El sendero pasa por antiguas labores y tocas de mineros abandonadas, en un recorrido que es tanto historia como paisaje. En el camino también visitamos la Cascada del Palmital y la Cascada del Capivara.',
        'El tercer día subimos la Serra do Macaco hasta el mirador de la Fumaça por arriba — el mismo lugar, visto desde el otro extremo. El sendero puede volverse considerablemente más peligroso según el tiempo y la estación; seguí siempre las instrucciones del guía.',
        ...WILD_TREK_CAMP.es,
      ],
    },
    itinerario: {
      titulo: 'Día a día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante. Este trekking es dinámico y admite varias entradas y salidas — consultá las opciones con atención.',
      corpo: [],
      dias: [
        {
          rotulo: '1º día',
          titulo: 'Cascada del Palmital + Cascada del Capivara',
          corpo: 'Salida de Lençóis cerca de las 7:00, por el sendero del Ribeirão do Meio. Subimos cerca de 2 horas la Serra do Veneno hasta la Toca da Onça, donde hacemos un snack, y seguimos otra hora hasta la Cascada del Palmital — un paraíso encajado en la sierra. Después de otra hora de caminata llegamos a la Cascada del Capivara, donde pasamos la primera noche. Armado el campamento, el guía prepara la cena según las restricciones alimentarias del grupo.',
          distancia: '15 km',
          esforco: 'Alto',
        },
        {
          rotulo: '2º día',
          titulo: 'Fumaça por abajo',
          corpo: 'Partida a las 8:00, después del desayuno, con todo el equipo rumbo a la base de la Serra do Macaco — la próxima base de campamento. Son 2 horas bordeando el Río Capivara. Dejamos la carga en el punto indicado por el guía y seguimos otras 2 horas hasta las caídas de la Cascada da Fumaça por abajo. La caminata por el Riacho da Fumaça es especial justamente por ser intocada y protegida: se pueden observar muchas especies de flora y fauna en las ramas, en las piedras y en todo alrededor. Vuelta al campamento, donde sale la última cena del paseo.',
          distancia: '12 km',
          esforco: 'Moderado',
        },
        {
          rotulo: '3º día',
          titulo: 'Fumaça por arriba + Valle do Capão',
          corpo: 'Salida en el mismo horario, después del desayuno. Subimos la Serra do Macaco rumbo al mirador de la Cascada da Fumaça por arriba: cerca de 3 horas de caminata sierra arriba. Después de un snack y del tiempo para apreciar la cascada desde el otro extremo, tomamos el sendero tradicional hasta la villa de Caeté-Açu, en el Valle do Capão, donde el auto espera para el traslado de vuelta a Lençóis.',
          distancia: '—',
          esforco: 'Alto',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 1.700', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 1.450', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      wildTrekChecklist('es', `Son tres días sin estructura cerca y dos cambios de campamento. ${WILD_TREK_PORTER.es}`),
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios', 'Traslado de ida y vuelta, con regreso por el Valle do Capão', 'Camping: carpa, bolsa de dormir y aislante térmico', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después del sendero'],
        excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Equipo personal', 'Evacuación médica'],
      },
      safetyFaq(
        'es',
        'El sendero puede volverse considerablemente más peligroso según el tiempo y la estación — las instrucciones del guía valen más acá que en cualquier otro recorrido nuestro. Son tres días con dos campamentos distintos, sin estructura cerca: linterna frontal y piloto de lluvia son obligatorios, no una recomendación.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para ver la Fumaça', 'por los dos lados?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
