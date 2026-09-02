/**
 * Conteúdo da Trilha Águas Claras (2 dias), por idioma.
 *
 * PT vem de mamut.agency/aventuras/trilha-aguas-claras-2-dias. A operadora não
 * tem versão em inglês nem em espanhol — o `/en/` da mesma URL devolve a página
 * em português —, então **EN e ES são tradução feita neste repositório** e
 * precisam de revisão antes de valerem como material de venda.
 *
 * Trekking selvagem, como o [Palmital], o [Mixila] e a [Fumaça por Baixo]:
 * comida, hospedagem e checklist vêm de `wild-trek-shared`. É o mais leve dos
 * quatro — a página se vende como a primeira noite de barraca de quem nunca
 * acampou, e o corpo diz isso.
 *
 * ⚠️ O checklist da fonte está intitulado "O que levar para a Cachoeira do
 * Palmital" — texto colado por engano, como no City Tour e na Fumaça por Baixo.
 *
 * Não confundir com `aguas-claras` no hub, que é o passeio de um dia saindo do
 * Vale do Capão (18 km).
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { WILD_TREK_ESTADIA, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';

export const AGUAS_CLARAS_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/aguas-claras/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/aguas-claras/1.jpeg', width: 1536, height: 864 },
    { src: '/img/adventures/aguas-claras/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/aguas-claras/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['23 km', '/svg/_icons/icon_03_montain.svg'],
    ['2 dias / 1 noite', '/svg/_icons/icon_11_calendar.svg'],
    ['Barraca', '/svg/_icons/icon_10_home.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve / Moderado', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 1150,
};

export const AGUAS_CLARAS_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Trilha Águas Claras — 2 dias',
      description:
        'A primeira noite de barraca de quem nunca acampou: 23 km em terreno majoritariamente plano até as piscinas cristalinas do Vale dos 3 Irmãos.',
      canonical: '/pt/aventuras/trilha-aguas-claras',
    },
    hero: {
      nivel: 'Leve / Moderado',
      origem: 'Origem: Lençóis',
      duracao: '2 dias',
      titulo: 'Trilha Águas Claras.',
      lead: 'A trilha certa para a primeira noite de barraca — plana, curta e com o céu inteiro à noite.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Onde se dorme', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Trilha Águas Claras.',
      paragrafos: [
        'É a atividade ideal para quem nunca acampou e quer começar por uma trilha leve, e também para quem vem com crianças ou pessoas idosas. O terreno é majoritariamente plano.',
        'A caminhada começa nos arredores do Morro do Pai Inácio e segue em direção ao Vale dos 3 Irmãos — dois cartões-postais da Chapada Diamantina no mesmo dia. São 9 km, cerca de 3 horas, até as piscinas cristalinas onde fica o acampamento.',
        'A região de nascentes do Águas Claras é uma área sensível: o cuidado com resíduos é redobrado aqui, e o acampamento fica a cerca de 60 metros do rio por esse motivo.',
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
          titulo: 'Transfer até o Pai Inácio + Trilha Águas Claras + acampamento',
          corpo: 'Saída a partir das 7h00 do centro de Lençóis, com todos os itens, de carro até os arredores do Morro do Pai Inácio, na BR-242. Depois dos ajustes finais começa a caminhada rumo ao Vale dos 3 Irmãos: 9 km, cerca de 3 horas, até as piscinas cristalinas. Montamos o acampamento a cerca de 60 metros do rio — a região de nascentes é sensível e o cuidado com resíduos é redobrado. Chegada por volta das 13h00, com o guia preparando o piquenique enquanto o grupo aproveita o rio. À tarde dá para explorar os arredores, reconhecer plantas e observar as montanhas até o jantar, servido a partir das 18h00. Se o céu estiver aberto, a noite não tem nenhuma luz artificial atrapalhando — e, dependendo da data, tem lua cheia.',
          distancia: '9 km',
          esforco: 'Leve / Moderado',
        },
        {
          rotulo: '2º dia',
          titulo: 'Águas Claras + Trilha do Grisante',
          corpo: 'Depois do café da manhã preparado pelo guia, levantamos acampamento e saímos por volta das 9h00. Caminhamos 1 hora até ver o Morrão de frente, um dos principais atrativos do Vale do Capão, e mais 30 minutos até o Poço das Piabas, onde dá para tomar um banho e aproveitar o lanche por volta do meio-dia. Seguimos mais 2 horas até avistar Lençóis e descemos 40 minutos até o centro histórico, onde a trilha termina.',
          distancia: '15 km',
          esforco: 'Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 1.350', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 1.150', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      wildTrekChecklist('pt', `É a trilha mais leve dos nossos acampamentos, mas a noite no alto esfria. ${WILD_TREK_PORTER.pt}`),
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Camping selvagem (1 noite), com barraca, isolante térmico e saco de dormir', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da trilha'],
        excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Equipamento pessoal', 'Evacuação médica'],
      },
      safetyFaq(
        'pt',
        'A trilha é leve, mas a noite é em barraca a céu aberto e esfria — roupa de dormir não é opcional aqui. O acampamento fica numa área de nascentes: tudo o que entra precisa sair junto com o grupo, sem exceção.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para a sua', 'primeira noite de barraca?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Águas Claras Trail — 2 days',
      description:
        'The right first night under canvas: 23 km on mostly flat ground to the clear pools of the Vale dos 3 Irmãos.',
      canonical: '/en/adventures/aguas-claras-trail',
    },
    hero: {
      nivel: 'Light / Moderate',
      origem: 'From: Lençóis',
      duracao: '2 days',
      titulo: 'Águas Claras Trail.',
      lead: 'The right trail for a first night in a tent — flat, short, and with the whole sky at night.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Where you sleep', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the Águas Claras Trail.',
      paragrafos: [
        'This is the right trip for anyone who has never camped and wants to start with an easy trail, and equally for anyone travelling with children or older companions. The ground is mostly flat.',
        'The walk starts near Pai Inácio Hill and heads towards the Vale dos 3 Irmãos — two of the Chapada Diamantina’s landmarks in the same day. It is 9 km, about 3 hours, to the clear pools where we camp.',
        'The Águas Claras headwaters are a sensitive area: care with waste is doubled here, and the campsite sits around 60 metres from the river for that reason.',
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
          titulo: 'Transfer to Pai Inácio + Águas Claras Trail + camp',
          corpo: 'Departure from 7:00 am from the centre of Lençóis, carrying everything, by car to the area around Pai Inácio Hill on the BR-242. After final adjustments the walk begins towards the Vale dos 3 Irmãos: 9 km, around 3 hours, to the clear pools. We set up camp some 60 metres from the river — the headwaters are a sensitive area and care with waste is doubled. We arrive around 1:00 pm, with the guide preparing the picnic while the group enjoys the river. In the afternoon there is time to explore around the camp, learn the plants and watch the mountains until dinner, served from 6:00 pm. If the sky is clear, the night comes with no artificial light at all — and, depending on the date, a full moon.',
          distancia: '9 km',
          esforco: 'Light / Moderate',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Águas Claras + Grisante Trail',
          corpo: 'After breakfast prepared by the guide, we strike camp and set off around 9:00 am. We walk an hour until the Morrão stands in front of us, one of the main sights of Vale do Capão, and another 30 minutes to Poço das Piabas, where there is a swim and the snack around midday. Another 2 hours brings Lençóis into view, and a 40-minute descent takes us into the historic centre, where the trail ends.',
          distancia: '15 km',
          esforco: 'Moderate',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 1,350', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 1,150', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      wildTrekChecklist('en', `It is the easiest of our camping trips, but the night up there gets cold. ${WILD_TREK_PORTER.en}`),
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'Wild camping (1 night), with tent, sleeping mat and sleeping bag', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the trail'],
        excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Personal gear', 'Medical evacuation'],
      },
      safetyFaq(
        'en',
        'The trail is easy, but the night is in a tent under open sky and it gets cold — sleepwear is not optional here. The camp sits in a headwaters area: everything that goes in comes out with the group, without exception.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready for your', 'first night under canvas?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Sendero Águas Claras — 2 días',
      description:
        'La primera noche de carpa para quien nunca acampó: 23 km en terreno mayormente plano hasta las piscinas cristalinas del Valle dos 3 Irmãos.',
      canonical: '/es/aventuras/sendero-aguas-claras',
    },
    hero: {
      nivel: 'Suave / Moderado',
      origem: 'Origen: Lençóis',
      duracao: '2 días',
      titulo: 'Sendero Águas Claras.',
      lead: 'El sendero justo para la primera noche de carpa — plano, corto y con el cielo entero de noche.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Dónde se duerme', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Sendero Águas Claras.',
      paragrafos: [
        'Es la actividad ideal para quien nunca acampó y quiere empezar por un sendero suave, y también para quien viene con chicos o personas mayores. El terreno es mayormente plano.',
        'La caminata empieza en los alrededores del Morro do Pai Inácio y sigue hacia el Valle dos 3 Irmãos — dos postales de la Chapada Diamantina el mismo día. Son 9 km, cerca de 3 horas, hasta las piscinas cristalinas donde está el campamento.',
        'La región de nacientes del Águas Claras es un área sensible: el cuidado con los residuos es redoblado acá, y el campamento queda a unos 60 metros del río por ese motivo.',
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
          titulo: 'Traslado hasta el Pai Inácio + Sendero Águas Claras + campamento',
          corpo: 'Salida a partir de las 7:00 del centro de Lençóis, con todos los ítems, en auto hasta los alrededores del Morro do Pai Inácio, en la BR-242. Después de los ajustes finales empieza la caminata rumbo al Valle dos 3 Irmãos: 9 km, cerca de 3 horas, hasta las piscinas cristalinas. Armamos el campamento a unos 60 metros del río — la región de nacientes es sensible y el cuidado con los residuos es redoblado. Llegada cerca de las 13:00, con el guía preparando el picnic mientras el grupo disfruta del río. A la tarde se pueden explorar los alrededores, reconocer plantas y observar las montañas hasta la cena, servida a partir de las 18:00. Si el cielo está despejado, la noche no tiene ninguna luz artificial molestando — y, según la fecha, hay luna llena.',
          distancia: '9 km',
          esforco: 'Suave / Moderado',
        },
        {
          rotulo: '2º día',
          titulo: 'Águas Claras + Sendero do Grisante',
          corpo: 'Después del desayuno preparado por el guía, levantamos campamento y salimos cerca de las 9:00. Caminamos 1 hora hasta ver el Morrão de frente, uno de los principales atractivos del Valle do Capão, y otros 30 minutos hasta el Poço das Piabas, donde se puede tomar un baño y disfrutar del snack cerca del mediodía. Seguimos otras 2 horas hasta divisar Lençóis y bajamos 40 minutos hasta el centro histórico, donde termina el sendero.',
          distancia: '15 km',
          esforco: 'Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 1.350', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 1.150', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      wildTrekChecklist('es', `Es el sendero más suave de nuestros campamentos, pero la noche en lo alto refresca. ${WILD_TREK_PORTER.es}`),
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Camping salvaje (1 noche), con carpa, aislante térmico y bolsa de dormir', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después del sendero'],
        excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Equipo personal', 'Evacuación médica'],
      },
      safetyFaq(
        'es',
        'El sendero es suave, pero la noche es en carpa a cielo abierto y refresca — la ropa para dormir no es opcional acá. El campamento queda en un área de nacientes: todo lo que entra sale junto con el grupo, sin excepción.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para tu', 'primera noche de carpa?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
