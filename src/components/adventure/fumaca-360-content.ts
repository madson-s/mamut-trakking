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
  returnTime: { time: '18:00', byRoad: false },
  campingGear: true,
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
  fr: {
    meta: {
      title: 'Cascade da Fumaça 360° — 3 jours',
      description:
        'La même cascade sous quatre angles : d’en haut au belvédère, de côté dans la faille, d’en bas à son pied et de face depuis la Serra da Folha Larga.',
      canonical: '/fr/aventures/cascade-da-fumaca-360',
    },
    hero: {
      nivel: 'Modéré / Élevé',
      origem: 'Départ : Vale do Capão',
      duracao: '3 jours',
      titulo: 'Fumaça 360°.',
      lead: 'La même cascade sous quatre angles — d’en haut, de côté, d’en bas et de face.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Durée', 'Hauteur de la paroi', 'Angles sur la cascade', 'Où l’on dort', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la Fumaça 360°.',
      paragrafos: [
        'La cascade da Fumaça, l’une des plus hautes du Brésil, plonge d’une paroi de 400 mètres où l’eau n’atteint pas le sol de manière uniforme — c’est cet effet qui a donné son nom à la cascade (« fumaça », la fumée). Presque tout le monde ne la connaît que sous un seul angle. Cet itinéraire les fait tous les quatre.',
        'D’en haut, depuis le belvédère classique du Vale do Capão. De côté, en dormant dans la faille, dans la toca da pingueira (un abri sous roche). D’en bas, au pied de la paroi, là où peu de gens arrivent. Et de face, depuis le sommet de la Serra da Folha Larga, le dernier jour.',
        'Le chemin passe par d’anciennes exploitations et des « tocas » abandonnées, les abris des chercheurs de diamants, et inclut aussi la cascade du Palmital et la cascade du Capivara. Le sentier peut devenir nettement plus dangereux selon la météo et la saison ; suivez toujours les consignes du guide.',
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
          titulo: 'La Fumaça par le haut + la faille de la Fumaça',
          corpo: 'Nous partons par le sentier traditionnel qui mène du Vale do Capão à la cascade da Fumaça par le haut — le belvédère de 400 mètres, atteint après 1 h 30 de marche. Après un casse-croûte et une pause, nous continuons jusqu’à la faille de la cascade da Fumaça, où se trouve le campement de la première nuit et d’où l’on peut contempler la cascade de côté, depuis la toca da pingueira.',
          distancia: '13 km',
          esforco: 'Élevé',
        },
        {
          rotulo: '2e jour',
          titulo: 'La faille + la Fumaça par le bas',
          corpo: 'Après le petit-déjeuner préparé par le guide, nous partons vers 8 h en descendant par la faille même où nous avons dormi, jusqu’au pied de la cascade da Fumaça — vue d’en bas, c’est l’angle le plus saisissant de l’itinéraire. Nous suivons le cours du ruisseau jusqu’à la cascade du Capivara, où se trouve le deuxième camp de base. À l’arrivée, le guide prépare le dîner.',
          distancia: '12 km',
          esforco: 'Modéré',
        },
        {
          rotulo: '3e jour',
          titulo: 'La Fumaça de face + cascade du Palmital',
          corpo: 'Départ à la même heure, vers la cascade du Palmital — environ 40 minutes de marche. Nous laissons la charge à l’endroit indiqué par le guide et gravissons la Serra da Folha Larga avec un sac léger jusqu’au belvédère qui fait face à la cascade da Fumaça, le quatrième et dernier angle. Retour par le même sentier jusqu’au Palmital, où nous reprenons les gros sacs, puis direction Lençóis par la Serra do Veneno, avec une arrivée vers 18 h et une dernière baignade au Ribeirão do Meio pour clore l’aventure.',
          distancia: '18 km',
          esforco: 'Élevé',
        },
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 1.750', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 1.450', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      wildTrekChecklist('fr', `Trois jours, deux changements de campement et une nuit à dormir dans la faille. ${WILD_TREK_PORTER.fr}`),
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne bilingue, formé aux premiers secours (APH)', 'Transfert Vale do Capão × Lençóis (80 km)', 'Camping sauvage (2 nuits), avec tente, tapis isolant et sac de couchage', 'Repas pendant le trek', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours'],
        excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner du 1er jour', 'Hébergement avant ou après le trek', 'Équipement personnel', 'Évacuation médicale'],
      },
      safetyFaq(
        'fr',
        'Le sentier peut devenir nettement plus dangereux selon la météo et la saison. La descente de la faille jusqu’au pied de la paroi, le 2e jour, est le passage qui demande le plus d’attention. Selon le rythme du groupe, le retour peut glisser à un 4e jour — vérifiez cette possibilité avec nous avant de réserver vos billets ou votre hébergement.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à voir la Fumaça', 'sous ses quatre angles ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons le départ avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Waterval Fumaça 360° — 3 dagen',
      description:
        'Dezelfde waterval vanuit vier invalshoeken: van bovenaf bij het uitkijkpunt, van opzij in de kloof, van onderen aan de voet, en recht ervoor vanaf de Serra da Folha Larga.',
      canonical: '/nl/avonturen/waterval-fumaca-360',
    },
    hero: {
      nivel: 'Gemiddeld / Zwaar',
      origem: 'Vertrek: Vale do Capão',
      duracao: '3 dagen',
      titulo: 'Fumaça 360°.',
      lead: 'Dezelfde waterval vanuit vier invalshoeken — van bovenaf, van opzij, van onderen en recht ervoor.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Duur', 'Hoogte van de wand', 'Invalshoeken op de waterval', 'Waar je slaapt', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Fumaça 360°.',
      paragrafos: [
        'De Waterval Fumaça, een van de grootste van Brazilië, stort langs een wand van 400 meter, waar het water nooit gelijkmatig de grond raakt — het effect waar hij zijn naam ("rook") aan dankt. Bijna iedereen ziet hem vanuit één invalshoek. Deze route neemt ze alle vier.',
        'Van bovenaf, bij het klassieke uitkijkpunt in de Vale do Capão. Van opzij, met een nacht in de kloof, in de druipgrot. Van onderen, aan de voet van de wand, waar maar weinig mensen komen. En recht ervoor, vanaf de top van de Serra da Folha Larga op de laatste dag.',
        'De route loopt langs oude mijnplekken en verlaten schuilplaatsen van mijnwerkers, en neemt onderweg de Waterval Palmital en de Waterval Capivara mee. Afhankelijk van het weer en het seizoen kan het pad een stuk gevaarlijker worden; volg altijd de aanwijzingen van de gids.',
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
          titulo: 'Fumaça van bovenaf + de kloof',
          corpo: 'We vertrekken over het traditionele pad van de Vale do Capão naar de Waterval Fumaça van bovenaf — het uitkijkpunt van 400 meter, dat je na 1,5 uur lopen bereikt. Na een snack en wat rust lopen we door naar de kloof van de Fumaça, waar het kamp voor de eerste nacht staat en vanwaar je de waterval van opzij ziet, in de druipgrot.',
          distancia: '13 km',
          esforco: 'Zwaar',
        },
        {
          rotulo: 'Dag 2',
          titulo: 'De kloof + Fumaça van onderen',
          corpo: 'Na het ontbijt dat de gids klaarmaakt, vertrekken we rond 8.00 uur via dezelfde kloof waarin we sliepen naar beneden, naar de voet van de Waterval Fumaça — van onderen gezien, de indrukwekkendste invalshoek van de route. We volgen de beek naar de Waterval Capivara, waar het tweede kamp staat. Bij aankomst maakt de gids het avondeten klaar.',
          distancia: '12 km',
          esforco: 'Gemiddeld',
        },
        {
          rotulo: 'Dag 3',
          titulo: 'Fumaça recht ervoor + Waterval Palmital',
          corpo: 'Vertrek op het gebruikelijke tijdstip, richting de Waterval Palmital — zo’n 40 minuten lopen. We laten de zware bagage achter waar de gids aanwijst en beklimmen met alleen een dagrugzak de Serra da Folha Larga, naar het uitkijkpunt recht tegenover de Waterval Fumaça: de vierde en laatste invalshoek. Via hetzelfde pad gaan we terug naar de Palmital, halen we onze rugzakken op en lopen we verder over de Serra do Veneno naar Lençóis, waar we rond 18.00 uur aankomen en de reis afsluiten met een duik in de Ribeirão do Meio.',
          distancia: '18 km',
          esforco: 'Zwaar',
        },
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 1.750', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 1.450', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      wildTrekChecklist('nl', `Drie dagen, twee keer van kamp wisselen en een nacht slapen in de kloof. ${WILD_TREK_PORTER.nl}`),
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Tweetalige berggids met EHBO-opleiding', 'Transfer Vale do Capão × Lençóis (80 km)', 'Wildkamperen (2 nachten), met tent, isolatiemat en slaapzak', 'Alle maaltijden tijdens de trektocht', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit'],
        excluded: ['Alles wat niet in de lijst staat', 'Ontbijt op dag 1', 'Overnachting voor of na de trektocht', 'Persoonlijke uitrusting', 'Medische evacuatie'],
      },
      safetyFaq(
        'nl',
        'Afhankelijk van het weer en het seizoen kan het pad een stuk gevaarlijker worden. De afdaling van de kloof naar de voet van de wand, op dag 2, is het stuk dat de meeste aandacht vraagt. Afhankelijk van het tempo van de groep kan de terugweg uitlopen tot een vierde dag — check die mogelijkheid bij ons voordat je vluchten of overnachtingen boekt.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om de Fumaça', 'van alle vier kanten te zien?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Wasserfall Fumaça 360° — 3 Tage',
      description:
        'Derselbe Wasserfall aus vier Blickwinkeln: von oben am Aussichtspunkt, von der Seite in der Schlucht, von unten an seinem Fuß und frontal von der Serra da Folha Larga.',
      canonical: '/de/abenteuer/wasserfall-fumaca-360',
    },
    hero: {
      nivel: 'Mittel / Schwer',
      origem: 'Start: Vale do Capão',
      duracao: '3 Tage',
      titulo: 'Fumaça 360°.',
      lead: 'Derselbe Wasserfall aus vier Blickwinkeln — von oben, von der Seite, von unten und frontal.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Dauer', 'Höhe der Wand', 'Blickwinkel auf den Wasserfall', 'Übernachtung', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über die Fumaça 360°.',
      paragrafos: [
        'Der Fumaça-Wasserfall, einer der höchsten Brasiliens, stürzt eine 400 Meter hohe Wand hinab, an der das Wasser nie gleichmäßig den Boden erreicht — der Effekt, dem er seinen Namen („Rauch“) verdankt. Fast alle sehen ihn aus nur einem Blickwinkel. Diese Route nimmt alle vier mit.',
        'Von oben, am klassischen Aussichtspunkt im Vale do Capão. Von der Seite, mit einer Nacht in der Schlucht, in der Tropfsteingrotte. Von unten, am Fuß der Wand, wohin nur wenige kommen. Und frontal, vom Gipfel der Serra da Folha Larga am letzten Tag.',
        'Die Route führt an alten Minenstätten und verlassenen Unterschlüpfen der Minenarbeiter vorbei und nimmt unterwegs den Palmital- und den Capivara-Wasserfall mit. Je nach Wetter und Jahreszeit kann der Weg deutlich gefährlicher werden; folge immer den Anweisungen des Guides.',
      ],
    },
    estadia: WILD_TREK_ESTADIA.de,
    itinerario: {
      titulo: 'Tag für Tag.',
      aviso: 'Die Route kann sich wegen des Wetters oder aus anderen Gründen höherer Gewalt ändern, die das Team für relevant hält. Diese Tour ist flexibel und hat verschiedene Ein- und Ausstiegspunkte — frag uns nach den Möglichkeiten.',
      corpo: [],
      dias: [
        {
          rotulo: 'Tag 1',
          titulo: 'Fumaça von oben + die Schlucht',
          corpo: 'Wir starten auf dem traditionellen Weg vom Vale do Capão zum Fumaça-Wasserfall von oben — dem Aussichtspunkt über 400 Metern, den du nach 1,5 Stunden Gehzeit erreichst. Nach einem Snack und etwas Ruhe geht es weiter zur Schlucht der Fumaça, wo das Lager für die erste Nacht steht und von wo du den Wasserfall von der Seite siehst, in der Tropfsteingrotte.',
          distancia: '13 km',
          esforco: 'Schwer',
        },
        {
          rotulo: 'Tag 2',
          titulo: 'Die Schlucht + Fumaça von unten',
          corpo: 'Nach dem Frühstück, das der Guide zubereitet, steigen wir gegen 8:00 Uhr durch dieselbe Schlucht, in der wir geschlafen haben, hinab zum Fuß des Fumaça-Wasserfalls — von unten gesehen, der eindrucksvollste Blickwinkel der Route. Wir folgen dem Bach bis zum Capivara-Wasserfall, wo das zweite Lager steht. Bei der Ankunft bereitet der Guide das Abendessen zu.',
          distancia: '12 km',
          esforco: 'Mittel',
        },
        {
          rotulo: 'Tag 3',
          titulo: 'Fumaça frontal + Palmital-Wasserfall',
          corpo: 'Aufbruch zur gewohnten Zeit, Richtung Palmital-Wasserfall — rund 40 Minuten Gehzeit. Wir lassen das schwere Gepäck dort, wo der Guide es zeigt, und steigen nur mit Tagesrucksack die Serra da Folha Larga hinauf, zum Aussichtspunkt direkt gegenüber dem Fumaça-Wasserfall: dem vierten und letzten Blickwinkel. Auf demselben Weg geht es zurück zum Palmital, wo wir unsere Rucksäcke holen und über die Serra do Veneno weiter nach Lençóis gehen, wo wir gegen 18:00 Uhr ankommen und die Reise mit einem Bad im Ribeirão do Meio abschließen.',
          distancia: '18 km',
          esforco: 'Schwer',
        },
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 1.750', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 1.450', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Internationale Überweisung oder größere Gruppe: sprich uns an.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      wildTrekChecklist('de', `Drei Tage, zwei Lagerwechsel und eine Nacht in der Schlucht. ${WILD_TREK_PORTER.de}`),
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Zweisprachiger Bergführer mit Erste-Hilfe-Ausbildung', 'Transfer Vale do Capão × Lençóis (80 km)', 'Wildcamping (2 Nächte), mit Zelt, Isomatte und Schlafsack', 'Alle Mahlzeiten während der Tour', 'SPOT-X-Satellitentracker', 'Abenteuerversicherung', 'Erste-Hilfe-Set'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Frühstück am 1. Tag', 'Unterkunft vor oder nach der Tour', 'Persönliche Ausrüstung', 'Medizinische Evakuierung'],
      },
      safetyFaq(
        'de',
        'Je nach Wetter und Jahreszeit kann der Weg deutlich gefährlicher werden. Der Abstieg von der Schlucht zum Fuß der Wand an Tag 2 ist der Abschnitt, der die meiste Aufmerksamkeit verlangt. Je nach Tempo der Gruppe kann sich der Rückweg auf einen vierten Tag ausdehnen — kläre diese Möglichkeit mit uns, bevor du Flüge oder Unterkünfte buchst.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit, die Fumaça', 'von allen vier Seiten zu sehen?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
