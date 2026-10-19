/**
 * Conteúdo da Cachoeira do Mixila (2 dias), por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-mixila e EN de
 * mamut.agency/en/aventuras/cachoeira-do-mixila-2-days. ES é tradução aqui.
 *
 * Trekking selvagem, como o [Palmital]: dorme em barraca dentro do Parque
 * Nacional. Comida, hospedagem e checklist vêm de `wild-trek-shared`.
 *
 * O trecho até o Mixila atravessa dois poços grandes **a nado** — é o que
 * distingue este roteiro dos outros de duas noites, e por isso aparece no lead,
 * no itinerário e no bloco de segurança.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { WILD_TREK_ESTADIA, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';

export const MIXILA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/mixila/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/mixila/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/mixila/2.jpeg', width: 1536, height: 1152 },
    { src: '/img/adventures/mixila/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['24 km', '/svg/_icons/icon_03_montain.svg'],
    ['2 dias / 1 noite', '/svg/_icons/icon_11_calendar.svg'],
    ['3 cachoeiras', '/svg/_icons/icon_09_location.svg'],
    ['Barraca', '/svg/_icons/icon_10_home.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 1200,
  returnTime: { time: '16:00', byRoad: false },
  campingGear: true,
};

export const MIXILA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Mixila — 2 dias',
      description:
        'Trekking selvagem de 24 km com três cachoeiras — Poção, Capivari e a lendária Mixila —, acampando dentro do Parque Nacional.',
      canonical: '/pt/aventuras/cachoeira-do-mixila',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Lençóis',
      duracao: '2 dias',
      titulo: 'Cachoeira do Mixila.',
      lead: 'Três cachoeiras em dois dias — e a última só se alcança atravessando dois poços a nado.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Cachoeiras', 'Onde se dorme', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Mixila.',
      paragrafos: [
        'Um dos trekkings mais marcantes da Chapada Diamantina, com três cachoeiras: a do Poção, a do Capivari e a lendária Mixila. As trilhas são rústicas e antigas, dentro do Parque Nacional, com trechos acidentados e escorregadios.',
        'A caminhada explica o cotidiano e as técnicas do antigo garimpo de diamantes na região — inclusive dormindo nas antigas "tocas". É um roteiro de imersão natural e cultural em partes iguais, e bem quieto: rota alternativa para quem quer fugir dos atrativos lotados.',
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
          titulo: 'Transfer 4x4 + Cachoeira do Poção + Cachoeira do Mixila',
          corpo: 'Saída de Lençóis às 7h00 rumo à comunidade do Capivara, onde a trilha começa. Depois da explanação sobre a atividade, são cerca de 3 horas de caminhada (1 hora de subida íngreme e 2 horas em terreno plano) até a Cachoeira do Poção, onde montamos o acampamento. Após o piquenique, seguimos só com itens de ataque pelos cânions do Rio Capivari até a Cachoeira do Mixila: cerca de 1 hora, com trechos acidentados, escorregadios e a travessia de dois poços grandes a nado — colete salva-vidas e saco estanque coletivo inclusos. A volta é pelo mesmo caminho e o jantar sai por volta das 19h00.',
          distancia: '13 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '2º dia',
          titulo: 'Cachoeira do Capivari + transfer para Lençóis',
          corpo: 'Depois do café da manhã preparado pelo guia, aproveitamos a área do acampamento na Cachoeira do Poção. Por volta das 10h00 partimos com todos os itens e caminhamos 40 minutos até o acesso à Cachoeira do Capivari. Deixamos parte da carga num ponto oportuno e seguimos só com itens de ataque até a base da cachoeira, onde ficamos até o início da tarde — piquenique por volta das 12h00. A volta é pelo mesmo caminho: cerca de 1 hora até a Serra do Bode e mais 1 hora de descida. Chegamos à base por volta das 15h00 e ao centro de Lençóis por volta das 16h00.',
          distancia: '11 km',
          esforco: 'Alto',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 1.600', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 1.200', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      wildTrekChecklist('pt', `A travessia a nado até o Mixila molha tudo que não estiver em saco estanque. ${WILD_TREK_PORTER.pt}`),
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH', 'Transfer de ida e volta, com trecho em 4x4', 'Camping: barraca, saco de dormir e isolante térmico', 'Colete salva-vidas e saco estanque coletivo', 'Alimentação durante o trekking', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros', 'Sala de espera, bagagem extra segura e banho antes/depois da atividade'],
        excluded: ['Qualquer item não listado', 'Café da manhã do 1º dia', 'Hospedagem antes ou após o trekking', 'Equipamento pessoal', 'Evacuação médica'],
      },
      safetyFaq(
        'pt',
        'O acesso à Cachoeira do Mixila exige atravessar dois poços grandes a nado, em cânion, além de trechos acidentados e escorregadios. Colete salva-vidas e saco estanque coletivo são fornecidos e o trecho só acontece com o guia posicionado. Quem não se sente confortável na água pode aguardar no acampamento da Cachoeira do Poção.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para atravessar', 'a nado até o Mixila?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Mixila Waterfall — 2 days',
      description:
        'A 24 km wild trek with three waterfalls — Poção, Capivari and the legendary Mixila — camping inside the National Park.',
      canonical: '/en/adventures/cachoeira-do-mixila-2-days',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Lençóis',
      duracao: '2 days',
      titulo: 'Mixila Waterfall.',
      lead: 'Three waterfalls in two days — and the last one is only reached by swimming across two pools.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Waterfalls', 'Where you sleep', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Mixila Waterfall.',
      paragrafos: [
        'One of the most striking treks in the Chapada Diamantina, with three waterfalls: Poção, Capivari and the legendary Mixila. The trails are old and rough, inside the National Park, with uneven and slippery sections.',
        'The walk explains the daily life and the techniques of the old diamond mining in the region — including sleeping in the old "tocas", the miners’ shelters. It is a trip of natural and cultural immersion in equal measure, and a quiet one: an alternative route for anyone avoiding crowded sights.',
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
          titulo: '4x4 transfer + Poção Waterfall + Mixila Waterfall',
          corpo: 'Departure from Lençóis at 7:00 am for the Capivara community, where the trail starts. After the briefing, it is around 3 hours of walking (1 hour of steep climb and 2 hours on flat ground) to Poção Waterfall, where we set up camp. After the picnic we head off with day packs only, through the canyons of the Capivari river to Mixila Waterfall: around an hour, with uneven and slippery sections and two large pools to swim across — life jacket and a shared dry bag provided. The return is by the same route and dinner is ready around 7:00 pm.',
          distancia: '13 km',
          esforco: 'Moderate / High',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Capivari Waterfall + transfer to Lençóis',
          corpo: 'After breakfast prepared by the guide, we enjoy the campsite at Poção Waterfall. Around 10:00 am we set off with everything and walk 40 minutes to the access to Capivari Waterfall. We leave part of the load at a suitable point and continue with day packs only to the base of the falls, where we stay until early afternoon — picnic around midday. The return is by the same route: about an hour to the Serra do Bode and another hour of descent. We reach the base around 3:00 pm and the centre of Lençóis around 4:00 pm.',
          distancia: '11 km',
          esforco: 'High',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 1,600', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 1,200', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      wildTrekChecklist('en', `The swim across to the Mixila soaks anything not in a dry bag. ${WILD_TREK_PORTER.en}`),
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training', 'Return transfer, including a 4x4 section', 'Camping: tent, sleeping bag and sleeping mat', 'Life jacket and shared dry bag', 'All meals during the trek', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit', 'Waiting room, secure luggage storage and a shower before/after the activity'],
        excluded: ['Anything not listed', 'Breakfast on day 1', 'Accommodation before or after the trek', 'Personal gear', 'Medical evacuation'],
      },
      safetyFaq(
        'en',
        'Reaching Mixila Waterfall means swimming across two large pools inside a canyon, on top of uneven and slippery sections. A life jacket and a shared dry bag are provided, and the section only happens with the guide in position. Anyone who is not comfortable in the water can wait at the Poção camp.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to swim', 'your way to the Mixila?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada del Mixila — 2 días',
      description:
        'Trekking salvaje de 24 km con tres cascadas — Poção, Capivari y la legendaria Mixila —, acampando dentro del Parque Nacional.',
      canonical: '/es/aventuras/cascada-del-mixila',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Lençóis',
      duracao: '2 días',
      titulo: 'Cascada del Mixila.',
      lead: 'Tres cascadas en dos días — y a la última solo se llega cruzando dos pozos a nado.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Cascadas', 'Dónde se duerme', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada del Mixila.',
      paragrafos: [
        'Uno de los trekkings más marcantes de la Chapada Diamantina, con tres cascadas: la del Poção, la del Capivari y la legendaria Mixila. Los senderos son rústicos y antiguos, dentro del Parque Nacional, con tramos accidentados y resbaladizos.',
        'La caminata explica el cotidiano y las técnicas de la antigua minería de diamantes en la región — incluso durmiendo en las antiguas "tocas". Es un recorrido de inmersión natural y cultural en partes iguales, y bien tranquilo: ruta alternativa para quien quiere escapar de los atractivos llenos.',
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
          titulo: 'Traslado 4x4 + Cascada del Poção + Cascada del Mixila',
          corpo: 'Salida de Lençóis a las 7:00 rumbo a la comunidad de Capivara, donde empieza el sendero. Después de la explicación sobre la actividad, son cerca de 3 horas de caminata (1 hora de subida empinada y 2 horas en terreno plano) hasta la Cascada del Poção, donde armamos el campamento. Tras el picnic, seguimos solo con mochila de ataque por los cañones del Río Capivari hasta la Cascada del Mixila: cerca de 1 hora, con tramos accidentados, resbaladizos y el cruce de dos pozos grandes a nado — chaleco salvavidas y bolsa estanca colectiva incluidos. La vuelta es por el mismo camino y la cena sale cerca de las 19:00.',
          distancia: '13 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '2º día',
          titulo: 'Cascada del Capivari + traslado a Lençóis',
          corpo: 'Después del desayuno preparado por el guía, aprovechamos el área del campamento en la Cascada del Poção. Cerca de las 10:00 partimos con todos los ítems y caminamos 40 minutos hasta el acceso a la Cascada del Capivari. Dejamos parte de la carga en un punto oportuno y seguimos solo con mochila de ataque hasta la base de la cascada, donde nos quedamos hasta el inicio de la tarde — picnic cerca del mediodía. La vuelta es por el mismo camino: cerca de 1 hora hasta la Serra do Bode y otra hora de bajada. Llegamos a la base cerca de las 15:00 y al centro de Lençóis cerca de las 16:00.',
          distancia: '11 km',
          esforco: 'Alto',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 1.600', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 1.200', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      wildTrekChecklist('es', `El cruce a nado hasta el Mixila moja todo lo que no esté en bolsa estanca. ${WILD_TREK_PORTER.es}`),
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios', 'Traslado de ida y vuelta, con tramo en 4x4', 'Camping: carpa, bolsa de dormir y aislante térmico', 'Chaleco salvavidas y bolsa estanca colectiva', 'Alimentación durante el trekking', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios', 'Sala de espera, equipaje extra seguro y ducha antes/después de la actividad'],
        excluded: ['Cualquier ítem no listado', 'Desayuno del 1º día', 'Alojamiento antes o después del trekking', 'Equipo personal', 'Evacuación médica'],
      },
      safetyFaq(
        'es',
        'El acceso a la Cascada del Mixila exige cruzar dos pozos grandes a nado, en cañón, además de tramos accidentados y resbaladizos. El chaleco salvavidas y la bolsa estanca colectiva se proveen y el tramo solo ocurre con el guía posicionado. Quien no se sienta cómodo en el agua puede esperar en el campamento de la Cascada del Poção.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para cruzar', 'a nado hasta el Mixila?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Cascade du Mixila — 2 jours',
      description:
        'Un trek sauvage de 24 km avec trois cascades — Poção, Capivari et la légendaire Mixila —, en campant à l’intérieur du parc national.',
      canonical: '/fr/aventures/cascade-du-mixila',
    },
    hero: {
      nivel: 'Modéré',
      origem: 'Départ : Lençóis',
      duracao: '2 jours',
      titulo: 'Cascade du Mixila.',
      lead: 'Trois cascades en deux jours — et la dernière ne s’atteint qu’en traversant deux bassins à la nage.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Durée', 'Cascades', 'Où l’on dort', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la cascade du Mixila.',
      paragrafos: [
        'L’un des treks les plus marquants de la Chapada Diamantina, avec trois cascades : celle du Poção, celle du Capivari et la légendaire Mixila. Les sentiers sont rustiques et anciens, à l’intérieur du parc national, avec des passages accidentés et glissants.',
        'La marche raconte le quotidien et les techniques de l’ancienne extraction de diamants dans la région — on dort d’ailleurs dans les anciennes « tocas », les abris sous roche des chercheurs de diamants. C’est un itinéraire d’immersion autant naturelle que culturelle, et très tranquille : une route alternative pour qui veut fuir les sites bondés.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.fr,
    itinerario: {
      titulo: 'Jour après jour.',
      aviso: 'L’itinéraire peut changer en raison de la météo ou de tout cas de force majeure que l’équipe juge pertinent. Ce trek est flexible et admet plusieurs points d’entrée et de sortie — renseignez-vous auprès de nous sur les options.',
      corpo: [],
      dias: [
        {
          rotulo: '1er jour',
          titulo: 'Transfert en 4x4 + cascade du Poção + cascade du Mixila',
          corpo: 'Départ de Lençóis à 7 h vers la communauté du Capivara, où commence le sentier. Après la présentation de l’activité, environ 3 heures de marche (1 heure de montée raide et 2 heures sur terrain plat) jusqu’à la cascade du Poção, où nous montons le campement. Après le pique-nique, nous continuons avec un sac léger à travers les canyons de la rivière Capivari jusqu’à la cascade du Mixila : environ 1 heure, avec des passages accidentés et glissants, et la traversée de deux grands bassins à la nage — gilet de sauvetage et sac étanche collectif fournis. Retour par le même chemin ; le dîner est servi vers 19 h.',
          distancia: '13 km',
          esforco: 'Modéré / Élevé',
        },
        {
          rotulo: '2e jour',
          titulo: 'Cascade du Capivari + transfert vers Lençóis',
          corpo: 'Après le petit-déjeuner préparé par le guide, nous profitons des abords du campement, à la cascade du Poção. Vers 10 h, nous partons avec toutes nos affaires et marchons 40 minutes jusqu’à l’accès de la cascade du Capivari. Nous laissons une partie de la charge à un endroit propice et continuons avec un sac léger jusqu’au pied de la cascade, où nous restons jusqu’au début d’après-midi — pique-nique vers 12 h. Retour par le même chemin : environ 1 heure jusqu’à la Serra do Bode, puis 1 heure de descente. Arrivée au point de départ vers 15 h et au centre de Lençóis vers 16 h.',
          distancia: '11 km',
          esforco: 'Élevé',
        },
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 1.600', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 1.200', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      wildTrekChecklist('fr', `La traversée à la nage jusqu’au Mixila mouille tout ce qui n’est pas dans un sac étanche. ${WILD_TREK_PORTER.fr}`),
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne formé aux premiers secours (APH)', 'Transfert aller-retour, avec un tronçon en 4x4', 'Camping : tente, sac de couchage et tapis isolant', 'Gilet de sauvetage et sac étanche collectif', 'Repas pendant le trek', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours', 'Salle d’attente, consigne sécurisée pour les bagages en plus et douche avant/après l’activité'],
        excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner du 1er jour', 'Hébergement avant ou après le trek', 'Équipement personnel', 'Évacuation médicale'],
      },
      safetyFaq(
        'fr',
        'L’accès à la cascade du Mixila oblige à traverser à la nage deux grands bassins, dans un canyon, en plus de passages accidentés et glissants. Gilet de sauvetage et sac étanche collectif sont fournis, et ce passage ne se fait qu’avec le guide en place. Si vous n’êtes pas à l’aise dans l’eau, vous pouvez attendre au campement de la cascade du Poção.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à rejoindre', 'le Mixila à la nage ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons le départ avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Waterval Mixila — 2 dagen',
      description:
        'Een wilde trektocht van 24 km langs drie watervallen — Poção, Capivari en de legendarische Mixila — met kamperen binnen het Nationaal Park.',
      canonical: '/nl/avonturen/waterval-mixila',
    },
    hero: {
      nivel: 'Gemiddeld',
      origem: 'Vertrek: Lençóis',
      duracao: '2 dagen',
      titulo: 'Waterval Mixila.',
      lead: 'Drie watervallen in twee dagen — en de laatste bereik je alleen door twee poelen over te zwemmen.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Duur', 'Watervallen', 'Waar je slaapt', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Waterval Mixila.',
      paragrafos: [
        'Een van de indrukwekkendste trektochten van de Chapada Diamantina, met drie watervallen: Poção, Capivari en de legendarische Mixila. De paden zijn oud en ruig, binnen het Nationaal Park, met oneffen en gladde stukken.',
        'De tocht vertelt over het dagelijks leven en de technieken van de vroegere diamantwinning in de regio — inclusief een nacht in de oude "tocas", de schuilplaatsen van de mijnwerkers. Het is een reis die in gelijke mate natuur en cultuur laat beleven, en een rustige: een alternatieve route voor wie drukke bezienswaardigheden wil vermijden.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.nl,
    itinerario: {
      titulo: 'Dag voor dag.',
      aviso: 'De route kan veranderen door het weer of door andere overmacht die het team relevant vindt. Deze trektocht is flexibel en kent verschillende in- en uitstappunten — vraag ons naar de mogelijkheden.',
      corpo: [],
      dias: [
        {
          rotulo: 'Dag 1',
          titulo: 'Transfer per 4x4 + Waterval Poção + Waterval Mixila',
          corpo: 'Vertrek om 7.00 uur uit Lençóis naar de gemeenschap Capivara, waar het pad begint. Na de briefing volgen zo’n 3 uur wandelen (1 uur steil klimmen en 2 uur over vlak terrein) naar de Waterval Poção, waar we het kamp opzetten. Na de picknick gaan we verder met alleen een dagrugzak, door de canyons van de rivier de Capivari naar de Waterval Mixila: zo’n uur, met oneffen en gladde stukken en twee grote poelen om over te zwemmen — zwemvest en een gedeelde waterdichte zak krijg je van ons. De terugweg gaat via dezelfde route en het avondeten staat rond 19.00 uur klaar.',
          distancia: '13 km',
          esforco: 'Gemiddeld / Zwaar',
        },
        {
          rotulo: 'Dag 2',
          titulo: 'Waterval Capivari + transfer naar Lençóis',
          corpo: 'Na het ontbijt dat de gids klaarmaakt, genieten we nog van de kampplek bij de Waterval Poção. Rond 10.00 uur vertrekken we met alle bagage en lopen we 40 minuten naar de toegang tot de Waterval Capivari. Op een geschikte plek laten we een deel van de last achter en lopen we met alleen een dagrugzak door naar de voet van de waterval, waar we tot het begin van de middag blijven — met een picknick rond het middaguur. De terugweg gaat via dezelfde route: zo’n uur naar de Serra do Bode en nog een uur afdalen. Rond 15.00 uur zijn we bij de basis en rond 16.00 uur in het centrum van Lençóis.',
          distancia: '11 km',
          esforco: 'Zwaar',
        },
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 1.600', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 1.200', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      wildTrekChecklist('nl', `Bij het zwemmen naar de Mixila wordt alles nat wat niet in een waterdichte zak zit. ${WILD_TREK_PORTER.nl}`),
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Berggids met EHBO-opleiding', 'Vervoer heen en terug, inclusief een stuk per 4x4', 'Kampeeruitrusting: tent, slaapzak en isolatiemat', 'Zwemvest en gedeelde waterdichte zak', 'Alle maaltijden tijdens de trektocht', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit', 'Wachtruimte, veilige bagageopslag en een douche voor/na de activiteit'],
        excluded: ['Alles wat niet in de lijst staat', 'Ontbijt op dag 1', 'Overnachting voor of na de trektocht', 'Persoonlijke uitrusting', 'Medische evacuatie'],
      },
      safetyFaq(
        'nl',
        'Om bij de Waterval Mixila te komen zwem je over twee grote poelen in een canyon, naast oneffen en gladde stukken. Een zwemvest en een gedeelde waterdichte zak krijg je van ons, en dit stuk gebeurt alleen met de gids op zijn plek. Wie zich niet op zijn gemak voelt in het water, kan wachten in het kamp bij de Poção.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om naar', 'de Mixila te zwemmen?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
};
