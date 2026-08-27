/**
 * Conteúdo da página da Cachoeira do Palmital (2 dias), por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-palmital e EN de
 * mamut.agency/en/aventuras/palmital-waterfall. ES é tradução feita aqui.
 *
 * É o único trekking do site em que se dorme em barraca, não em casa de nativo
 * — por isso o bloco de hospedagem entra no `sobre` e o checklist traz saco de
 * dormir e isolante.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { WILD_TREK_CAMP, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';

export const PALMITAL_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/palmital/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/palmital/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/palmital/2.jpeg', width: 2364, height: 1330 },
    { src: '/img/adventures/palmital/3.jpeg', width: 1773, height: 1773 },
  ],
  stats: [
    ['22 km', '/svg/_icons/icon_03_montain.svg'],
    ['2 dias / 1 noite', '/svg/_icons/icon_11_calendar.svg'],
    ['2 cachoeiras', '/svg/_icons/icon_09_location.svg'],
    ['Barraca', '/svg/_icons/icon_10_home.svg'],
    ['6h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Alto', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 1350,
};

export const PALMITAL_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Palmital — 2 dias',
      description:
        'Dois dias por trilhas rústicas do antigo garimpo, dormindo em barraca na beira do rio. Cachoeira do Palmital e Cachoeira do Capivara.',
      canonical: '/pt/aventuras/cachoeira-do-palmital',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origem: Lençóis',
      duracao: '2 dias',
      titulo: 'Cachoeira do Palmital.',
      lead: 'Dois dias pelas rotas do antigo garimpo, dormindo em barraca na beira do rio.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Cachoeiras', 'Onde se dorme', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Palmital.',
      paragrafos: [
        'Uma das rotas mais tradicionais do garimpo na Chapada Diamantina, com duas cachoeiras: a do Palmital e a do Capivara. As trilhas são rústicas e antigas, dentro do Parque Nacional, com trechos acidentados e escorregadios.',
        'A caminhada explica o cotidiano e as técnicas do antigo garimpo de diamantes na região — inclusive dormindo nas antigas "tocas". É um roteiro de imersão natural e cultural em partes iguais.',
        ...WILD_TREK_CAMP.pt,
        'É a alternativa certa para quem tem poucos dias na Chapada e quer um trekking selvagem, ou para quem está evitando multidões: este é bem quieto.',
      ],
    },
    itinerario: {
      titulo: 'Dia a dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante. Este trekking é dinâmico e admite várias entradas e saídas — consulte as opções com o atendimento.',
      corpo: [],
      dias: [
        {
          rotulo: '1º dia',
          titulo: 'Serra do Veneno + Toca da Onça + Cachoeira do Palmital',
          corpo: 'Saída a partir das 6h00 do centro de Lençóis, com todos os itens, em direção à Trilha do Ribeirão do Meio. São 40 minutos em terreno majoritariamente plano até o Rio Ribeirão, que atravessamos para começar a subida da Serra do Veneno — uma antiga lavra de garimpeiros, cerca de 2 horas de aclive considerável. A primeira parada é na Toca da Onça, mirante de onde se vê a Cachoeira do Capivari e o encontro dos rios Capivara e Capivari. Mais 1 hora até o acampamento base na Cachoeira do Palmital, e o resto do dia é da cachoeira. Jantar por volta das 19h00.',
          distancia: '9 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '2º dia',
          titulo: 'Cachoeira do Capivara + Ribeirão do Meio',
          corpo: 'Depois do café da manhã preparado pelo guia, subimos o rio principal por 30 minutos — só com itens de ataque — até a Cachoeira do Capivara, onde fica o resto da manhã. Após o piquenique de almoço recolhemos tudo e voltamos pelo mesmo caminho, passando de novo pela Toca da Onça e pela Serra do Veneno. Na descida, parada no Ribeirão do Meio, com seu tobogã natural polido na pedra. Mais 40 minutos e estamos de volta ao centro de Lençóis, por volta das 17h00.',
          distancia: '13 km',
          esforco: 'Baixo / Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 1.600', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 1.350', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      wildTrekChecklist('pt', `Se não quiser carregar peso, há opção de carregador pessoal. Os itens são conferidos na reserva e no check-in. ${WILD_TREK_PORTER.pt}`),
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH', 'Camping: barraca, saco de dormir e isolante térmico', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da trilha'],
        excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Equipamento pessoal', 'Evacuação médica'],
      },
      safetyFaq(
        'pt',
        'As trilhas são rústicas, com trechos acidentados e escorregadios — este roteiro pede boa aptidão física. Dormir em barraca dentro do Parque Nacional significa não ter estrutura por perto: por isso a lanterna de cabeça e a capa de chuva entram como obrigatórias, não como recomendação.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para dormir', 'na beira do rio?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Palmital Waterfall — 2 days',
      description:
        'Two days on the rough trails of the old diamond mines, sleeping in a tent by the river. Palmital Waterfall and Capivara Waterfall.',
      canonical: '/en/adventures/palmital-waterfall',
    },
    hero: {
      nivel: 'Moderate / High',
      origem: 'From: Lençóis',
      duracao: '2 days',
      titulo: 'Palmital Waterfall.',
      lead: 'Two days on the old mining routes, sleeping in a tent by the river.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Waterfalls', 'Where you sleep', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Palmital Waterfall.',
      paragrafos: [
        'One of the most traditional mining routes in the Chapada Diamantina, taking in two waterfalls: Palmital and Capivara. The trails are old and rough, inside the National Park, with uneven and slippery sections.',
        'The walk explains the daily life and the techniques of the old diamond mining in the region — including sleeping in the old "tocas", the miners’ shelters. It is a trip of natural and cultural immersion in equal measure.',
        ...WILD_TREK_CAMP.en,
        'It is the right alternative for anyone with only a few days in the Chapada who wants a wild trek, or for anyone avoiding crowds: this one is genuinely quiet.',
      ],
    },
    itinerario: {
      titulo: 'Day by day.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant. This trek is dynamic and allows several entry and exit points — ask us about the options.',
      corpo: [],
      dias: [
        {
          rotulo: 'Day 1',
          titulo: 'Serra do Veneno + Toca da Onça + Palmital Waterfall',
          corpo: 'Departure from 6:00 am from the centre of Lençóis, carrying everything, towards the Ribeirão do Meio trail. Forty minutes on mostly flat ground to the Ribeirão river, which we cross to begin the climb of Serra do Veneno — an old miners’ diggings, around 2 hours of substantial ascent. The first stop is Toca da Onça, a lookout over Capivari Waterfall and the meeting of the Capivara and Capivari rivers. Another hour to base camp at Palmital Waterfall, and the rest of the day belongs to the falls. Dinner around 7:00 pm.',
          distancia: '9 km',
          esforco: 'Moderate / High',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Capivara Waterfall + Ribeirão do Meio',
          corpo: 'After breakfast prepared by the guide, we head up the main river for 30 minutes — with day packs only — to Capivara Waterfall, where the rest of the morning is spent. After the picnic lunch we pack up and return by the same route, past Toca da Onça and Serra do Veneno again. On the way down, a stop at Ribeirão do Meio, with its natural slide polished into the rock. Another 40 minutes and we are back in the centre of Lençóis, around 5:00 pm.',
          distancia: '13 km',
          esforco: 'Low / Moderate',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 1,600', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 1,350', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      wildTrekChecklist('en', `If you would rather not carry the weight, a personal porter can be arranged. Items are checked at booking and at check-in. ${WILD_TREK_PORTER.en}`),
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training', 'Camping: tent, sleeping bag and sleeping mat', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the trail'],
        excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Personal gear', 'Medical evacuation'],
      },
      safetyFaq(
        'en',
        'The trails are rough, with uneven and slippery sections — this route calls for decent fitness. Sleeping in a tent inside the National Park means no facilities nearby: that is why the head torch and rain gear are mandatory rather than merely recommended.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to sleep', 'by the river?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada del Palmital — 2 días',
      description:
        'Dos días por senderos rústicos de la antigua minería, durmiendo en carpa a la orilla del río. Cascada del Palmital y Cascada del Capivara.',
      canonical: '/es/aventuras/cascada-del-palmital',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origen: Lençóis',
      duracao: '2 días',
      titulo: 'Cascada del Palmital.',
      lead: 'Dos días por las rutas de la antigua minería, durmiendo en carpa a la orilla del río.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Cascadas', 'Dónde se duerme', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada del Palmital.',
      paragrafos: [
        'Una de las rutas más tradicionales de la minería en la Chapada Diamantina, con dos cascadas: la del Palmital y la del Capivara. Los senderos son rústicos y antiguos, dentro del Parque Nacional, con tramos accidentados y resbaladizos.',
        'La caminata explica el cotidiano y las técnicas de la antigua minería de diamantes en la región — incluso durmiendo en las antiguas "tocas". Es un recorrido de inmersión natural y cultural en partes iguales.',
        ...WILD_TREK_CAMP.es,
        'Es la alternativa justa para quien tiene pocos días en la Chapada y quiere un trekking salvaje, o para quien está evitando multitudes: este es bien tranquilo.',
      ],
    },
    itinerario: {
      titulo: 'Día a día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante. Este trekking es dinámico y admite varias entradas y salidas — consultá las opciones con atención.',
      corpo: [],
      dias: [
        {
          rotulo: '1º día',
          titulo: 'Serra do Veneno + Toca da Onça + Cascada del Palmital',
          corpo: 'Salida a partir de las 6:00 del centro de Lençóis, con todos los ítems, en dirección al Sendero del Ribeirão do Meio. Son 40 minutos en terreno mayormente plano hasta el Río Ribeirão, que cruzamos para empezar la subida de la Serra do Veneno — una antigua labor de mineros, cerca de 2 horas de subida considerable. La primera parada es en la Toca da Onça, mirador desde donde se ve la Cascada del Capivari y el encuentro de los ríos Capivara y Capivari. Otra hora hasta el campamento base en la Cascada del Palmital, y el resto del día es de la cascada. Cena cerca de las 19:00.',
          distancia: '9 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '2º día',
          titulo: 'Cascada del Capivara + Ribeirão do Meio',
          corpo: 'Después del desayuno preparado por el guía, subimos el río principal por 30 minutos — solo con mochila de ataque — hasta la Cascada del Capivara, donde queda el resto de la mañana. Tras el picnic del almuerzo recogemos todo y volvemos por el mismo camino, pasando otra vez por la Toca da Onça y la Serra do Veneno. En la bajada, parada en el Ribeirão do Meio, con su tobogán natural pulido en la piedra. Otros 40 minutos y estamos de vuelta en el centro de Lençóis, cerca de las 17:00.',
          distancia: '13 km',
          esforco: 'Bajo / Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 1.600', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 1.350', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      wildTrekChecklist('es', `Si no querés cargar peso, hay opción de porteador personal. Los ítems se revisan en la reserva y en el check-in. ${WILD_TREK_PORTER.es}`),
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios', 'Camping: carpa, bolsa de dormir y aislante térmico', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después del sendero'],
        excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Equipo personal', 'Evacuación médica'],
      },
      safetyFaq(
        'es',
        'Los senderos son rústicos, con tramos accidentados y resbaladizos — este recorrido pide buena aptitud física. Dormir en carpa dentro del Parque Nacional significa no tener estructura cerca: por eso la linterna frontal y el piloto de lluvia entran como obligatorios, no como recomendación.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para dormir', 'a la orilla del río?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
