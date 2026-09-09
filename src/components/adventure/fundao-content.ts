/**
 * Conteúdo da Cachoeira do Fundão + Vinte e Um, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-fundao-vinte-e-um. A operadora
 * não tem versão em inglês nem em espanhol — o `/en/` da mesma URL devolve a
 * página em português —, então **EN e ES são tradução feita neste repositório**.
 *
 * O roteiro mais difícil do catálogo: a fonte diz "indicado apenas para
 * trilheiros muito experientes" e marca o 1º dia como esforço **altíssimo**, o
 * único assim em todo o site. O lead e o bloco de segurança dizem isso na cara,
 * porque quem reserva errado aqui fica exposto numa rota isolada.
 *
 * Números da fonte que pareciam se contradizer, mas não se contradizem: a faixa
 * diz "18–24 km" e "3 dias", e o incluso diz "camping selvagem (1 noite)". São
 * os dois formatos do mesmo roteiro — 18 km em 2 dias com uma noite, ou até
 * 24 km em 3 dias com duas. O itinerário descreve o de 2 dias e a variação.
 *
 * Trekking selvagem: comida, hospedagem e checklist vêm de `wild-trek-shared`.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { WILD_TREK_ESTADIA, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';

export const FUNDAO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/fundao/hero.jpg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/fundao/1.jpg', width: 2560, height: 1920 },
    { src: '/img/adventures/fundao/2.jpeg', width: 1773, height: 1773 },
    { src: '/img/adventures/fundao/3.jpg', width: 2560, height: 1920 },
  ],
  stats: [
    ['18–24 km', '/svg/_icons/icon_03_montain.svg'],
    ['2 ou 3 dias', '/svg/_icons/icon_11_calendar.svg'],
    ['80 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['Barraca', '/svg/_icons/icon_10_home.svg'],
    ['6h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Pesado', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 1750,
};

export const FUNDAO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Fundão + Vinte e Um',
      description:
        'Um dos trekkings mais difíceis da Chapada Diamantina: cânions de 80 metros numa rota isolada do Parque Nacional, só para trilheiros experientes.',
      canonical: '/pt/aventuras/cachoeira-do-fundao-vinte-e-um',
    },
    hero: {
      nivel: 'Moderado / Pesado',
      origem: 'Origem: Lençóis',
      duracao: '2 ou 3 dias',
      titulo: 'Fundão + Vinte e Um.',
      lead: 'O roteiro mais difícil que operamos — cânions fechados, rota isolada e só para quem já andou muito.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Altura dos paredões', 'Onde se dorme', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o Fundão + Vinte e Um.',
      paragrafos: [
        'Este é considerado um dos trekkings mais difíceis da Chapada Diamantina, e é indicado apenas para trilheiros muito experientes. Fica numa rota pouco percorrida do Parque Nacional — bastante inóspita e isolada.',
        'O percurso sobe o Cânion do Fundão pelo leito do rio até a Cachoeira do Fundão, e de lá vence um trecho muito difícil para alcançar o cânion do Vinte e Um, onde o acampamento fica de frente para paredões de cerca de 80 metros.',
        'São dois formatos do mesmo roteiro: 18 km em 2 dias, com uma noite de acampamento, ou até 24 km em 3 dias, com duas noites e a Cachoeira da Fumaça de frente no caminho. Dá para combinar com a Fumaça 360°, a Fumaça por Baixo ou o Mixila — consulte a disponibilidade.',
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
          titulo: 'Cânion do Fundão + Cachoeira do Vinte e Um',
          corpo: 'Saída por volta das 6h00 pela trilha que liga Lençóis ao Vale do Capão. No encontro do Rio Ribeirão com o Rio Fundão, seguimos rio acima pelo Cânion do Fundão — cerca de 3h30 de caminhada até a Cachoeira do Fundão. Depois do lanche preparado pelo guia, subimos a cachoeira por um trecho muito difícil, 40 minutos, até o cânion do Vinte e Um, onde fica o acampamento base, de frente para paredões de cerca de 80 metros. O guia monta o acampamento e prepara o jantar.',
          distancia: '8 km',
          esforco: 'Altíssimo',
        },
        {
          rotulo: '2º dia',
          titulo: 'Cânion acima + Fumaça por cima + Vale do Capão',
          corpo: 'Saída às 8h00, depois do café da manhã, rio acima. Passamos por trechos difíceis mas visualmente impactantes, caminhando junto aos paredões do cânion. São de 2 a 3 horas até a Cachoeira da Fumaça por cima e mais 1h30 até o Vale do Capão, onde o carro espera para levar o grupo de volta a Lençóis.',
          distancia: '10 km',
          esforco: 'Alto',
        },
        {
          rotulo: 'Em 3 dias',
          titulo: 'A variação, com noite no Palmital',
          corpo: 'Se o grupo escolher fazer em 3 dias, o 2º dia não vai até a Fumaça por cima: segue 1 hora até o mirante da Cachoeira da Fumaça de frente e mais 1 hora até o acampamento da Cachoeira do Palmital, onde passa outra noite. A saída fica para o dia seguinte — confirme o percurso exato com o atendimento ao fechar a data.',
          distancia: 'até 24 km no total',
          esforco: 'Alto',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 2.000', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 1.750', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      wildTrekChecklist('pt', `Aqui o calçado e a capa de chuva são o que mais pesa: quase todo o percurso é no leito do rio, entre paredões. ${WILD_TREK_PORTER.pt}`),
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento WAFA e bilíngue', 'Camping selvagem, com barraca, isolante térmico e saco de dormir', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Carregador pessoal', 'Bebidas extras', 'Equipamento pessoal', 'Evacuação médica'],
      },
      safetyFaq(
        'pt',
        'Este é o roteiro mais exigente do nosso catálogo, e a própria operadora o indica apenas para trilheiros muito experientes. O 1º dia é classificado como esforço altíssimo — o único assim em todos os nossos roteiros: 3h30 no leito do rio e depois 40 minutos subindo a cachoeira por um trecho muito difícil. A rota é pouco percorrida e isolada, o que significa que qualquer resgate demora mais do que o já longo padrão da região. Se você tem dúvida sobre o seu preparo, fale com o atendimento antes de fechar — este não é o roteiro para descobrir isso na trilha.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para o roteiro', 'mais difícil da Chapada?'],
      corpo: 'Conte quantas pessoas, sua experiência em trilha e as datas que está considerando — a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Fundão + Vinte e Um Waterfalls',
      description:
        'One of the hardest treks in the Chapada Diamantina: 80-metre canyons on an isolated route through the National Park, for experienced hikers only.',
      canonical: '/en/adventures/fundao-vinte-e-um-waterfalls',
    },
    hero: {
      nivel: 'Moderate / Heavy',
      origem: 'From: Lençóis',
      duracao: '2 or 3 days',
      titulo: 'Fundão + Vinte e Um.',
      lead: 'The hardest route we run — closed canyons, isolated ground, and only for people who have walked a lot.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Canyon walls', 'Where you sleep', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Fundão + Vinte e Um.',
      paragrafos: [
        'This is considered one of the hardest treks in the Chapada Diamantina, and it is recommended for very experienced hikers only. It follows a little-walked route through the National Park — genuinely inhospitable and isolated.',
        'The route climbs the Fundão Canyon along the riverbed to Fundão Waterfall, and from there tackles a very difficult stretch to reach the Vinte e Um canyon, where camp faces walls of around 80 metres.',
        'There are two formats of the same route: 18 km over 2 days with one night of camping, or up to 24 km over 3 days with two nights and Fumaça Waterfall seen head-on along the way. It can be combined with Fumaça 360°, Fumaça from Below or the Mixila — ask us about availability.',
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
          titulo: 'Fundão Canyon + Vinte e Um Waterfall',
          corpo: 'Departure around 6:00 am on the trail linking Lençóis to Vale do Capão. Where the Ribeirão meets the Fundão river, we head upstream through the Fundão Canyon — around 3.5 hours of walking to Fundão Waterfall. After the snack prepared by the guide, we climb past the waterfall on a very difficult stretch, 40 minutes, to the Vinte e Um canyon, where base camp sits facing walls of around 80 metres. The guide sets up camp and prepares dinner.',
          distancia: '8 km',
          esforco: 'Extreme',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Up the canyon + Fumaça from above + Vale do Capão',
          corpo: 'Out at 8:00 am, after breakfast, upstream. We pass difficult but visually striking stretches, walking alongside the canyon walls. It is 2 to 3 hours to Fumaça Waterfall seen from above and another 1.5 hours to Vale do Capão, where the car is waiting to take the group back to Lençóis.',
          distancia: '10 km',
          esforco: 'High',
        },
        {
          rotulo: 'Over 3 days',
          titulo: 'The variation, with a night at the Palmital',
          corpo: 'If the group chooses the 3-day format, day 2 does not go up to Fumaça from above: it continues for an hour to the lookout facing Fumaça Waterfall head-on and another hour to the Palmital Waterfall camp, where you spend a second night. The exit falls to the following day — confirm the exact route with us when you settle on a date.',
          distancia: 'up to 24 km in total',
          esforco: 'High',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 2,000', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 1,750', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      wildTrekChecklist('en', `Footwear and rain gear matter most here: almost the whole route is in the riverbed, between canyon walls. ${WILD_TREK_PORTER.en}`),
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with WAFA training, bilingual', 'Wild camping, with tent, sleeping mat and sleeping bag', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Personal porter', 'Extra drinks', 'Personal gear', 'Medical evacuation'],
      },
      safetyFaq(
        'en',
        'This is the most demanding route in our catalogue, and the operator itself recommends it for very experienced hikers only. Day 1 is rated extreme effort — the only one so rated across all our routes: 3.5 hours in the riverbed and then 40 minutes climbing past the waterfall on a very difficult stretch. The route is little-walked and isolated, which means any rescue takes longer than the already long regional norm. If you are unsure about your fitness, talk to us before booking — this is not the route on which to find out.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready for the hardest', 'route in the Chapada?'],
      corpo: 'Tell us how many people, your trail experience and the dates you have in mind — we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascadas do Fundão + Vinte e Um',
      description:
        'Uno de los trekkings más difíciles de la Chapada Diamantina: cañones de 80 metros en una ruta aislada del Parque Nacional, solo para caminantes experimentados.',
      canonical: '/es/aventuras/cascadas-do-fundao-vinte-e-um',
    },
    hero: {
      nivel: 'Moderado / Pesado',
      origem: 'Origen: Lençóis',
      duracao: '2 o 3 días',
      titulo: 'Fundão + Vinte e Um.',
      lead: 'El recorrido más difícil que operamos — cañones cerrados, ruta aislada y solo para quien ya caminó mucho.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Altura de los paredones', 'Dónde se duerme', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Fundão + Vinte e Um.',
      paragrafos: [
        'Este es considerado uno de los trekkings más difíciles de la Chapada Diamantina, y está indicado solo para caminantes muy experimentados. Queda en una ruta poco recorrida del Parque Nacional — bastante inhóspita y aislada.',
        'El recorrido sube el Cañón do Fundão por el lecho del río hasta la Cascada do Fundão, y de ahí vence un tramo muy difícil para alcanzar el cañón del Vinte e Um, donde el campamento queda de frente a paredones de cerca de 80 metros.',
        'Son dos formatos del mismo recorrido: 18 km en 2 días, con una noche de campamento, o hasta 24 km en 3 días, con dos noches y la Cascada da Fumaça de frente en el camino. Se puede combinar con la Fumaça 360°, la Fumaça por Abajo o el Mixila — consultá la disponibilidad.',
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
          titulo: 'Cañón do Fundão + Cascada do Vinte e Um',
          corpo: 'Salida cerca de las 6:00 por el sendero que une Lençóis al Valle do Capão. En el encuentro del Río Ribeirão con el Río Fundão, seguimos río arriba por el Cañón do Fundão — cerca de 3:30 h de caminata hasta la Cascada do Fundão. Después del snack preparado por el guía, subimos la cascada por un tramo muy difícil, 40 minutos, hasta el cañón del Vinte e Um, donde queda el campamento base, de frente a paredones de cerca de 80 metros. El guía arma el campamento y prepara la cena.',
          distancia: '8 km',
          esforco: 'Altísimo',
        },
        {
          rotulo: '2º día',
          titulo: 'Cañón arriba + Fumaça desde arriba + Valle do Capão',
          corpo: 'Salida a las 8:00, después del desayuno, río arriba. Pasamos por tramos difíciles pero visualmente impactantes, caminando junto a los paredones del cañón. Son de 2 a 3 horas hasta la Cascada da Fumaça desde arriba y otra 1:30 h hasta el Valle do Capão, donde el auto espera para llevar al grupo de vuelta a Lençóis.',
          distancia: '10 km',
          esforco: 'Alto',
        },
        {
          rotulo: 'En 3 días',
          titulo: 'La variación, con noche en el Palmital',
          corpo: 'Si el grupo elige hacerlo en 3 días, el 2º día no llega a la Fumaça desde arriba: sigue 1 hora hasta el mirador de la Cascada da Fumaça de frente y otra hora hasta el campamento de la Cascada del Palmital, donde pasa otra noche. La salida queda para el día siguiente — confirmá el recorrido exacto con atención al cerrar la fecha.',
          distancia: 'hasta 24 km en total',
          esforco: 'Alto',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 2.000', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 1.750', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      wildTrekChecklist('es', `Acá el calzado y el piloto de lluvia son lo que más pesa: casi todo el recorrido es en el lecho del río, entre paredones. ${WILD_TREK_PORTER.es}`),
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación WAFA, bilingüe', 'Camping salvaje, con carpa, aislante térmico y bolsa de dormir', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Porteador personal', 'Bebidas extra', 'Equipo personal', 'Evacuación médica'],
      },
      safetyFaq(
        'es',
        'Este es el recorrido más exigente de nuestro catálogo, y la propia operadora lo indica solo para caminantes muy experimentados. El 1º día está clasificado como esfuerzo altísimo — el único así en todos nuestros recorridos: 3:30 h en el lecho del río y después 40 minutos subiendo la cascada por un tramo muy difícil. La ruta es poco recorrida y aislada, lo que significa que cualquier rescate demora más que el ya largo estándar de la región. Si tenés dudas sobre tu preparación, hablá con atención antes de cerrar — este no es el recorrido para descubrirlo en el sendero.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para el recorrido', 'más difícil de la Chapada?'],
      corpo: 'Contanos cuántas personas, tu experiencia en sendero y las fechas que estás considerando — armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
