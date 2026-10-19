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
import { WILD_TREK_ESTADIA, WILD_TREK_PORTER, wildTrekChecklist } from './wild-trek-shared';

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
  returnTime: { time: '16:00' },
  campingGear: true,
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
  fr: {
    meta: {
      title: 'Cascade da Fumaça par le bas — 3 jours',
      description:
        'Trois jours jusqu’au pied de la paroi de 400 mètres de la cascade da Fumaça, en passant par le Palmital et le Capivara, avec sortie par le Vale do Capão.',
      canonical: '/fr/aventures/cascade-da-fumaca-par-le-bas',
    },
    hero: {
      nivel: 'Modéré / Élevé',
      origem: 'Départ : Lençóis',
      duracao: '3 jours',
      titulo: 'Fumaça par le bas.',
      lead: 'Atteindre le pied de la paroi de 400 mètres — et, le dernier jour, contempler le même lieu d’en haut.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Durée', 'Hauteur de la paroi', 'Où l’on dort', 'Départ (Lençóis)', 'Difficulté'],
    sobre: {
      titulo: 'À propos de la Fumaça par le bas.',
      paragrafos: [
        'L’un des sentiers les plus traditionnels et les plus exigeants de la Chapada Diamantina. Vue d’en bas, la cascade da Fumaça, l’une des plus hautes du Brésil, est un spectacle réservé à ceux qui vont jusqu’à son pied : une paroi de 400 mètres où l’eau n’atteint pas le sol de manière uniforme — c’est cet effet qui a donné son nom à la cascade (« fumaça », la fumée).',
        'Le sentier passe par d’anciennes exploitations et des « tocas » abandonnées, les abris sous roche des chercheurs de diamants, sur un parcours qui tient autant de l’histoire que du paysage. En chemin, nous visitons aussi la cascade du Palmital et la cascade du Capivara.',
        'Le troisième jour, nous gravissons la Serra do Macaco jusqu’au belvédère de la Fumaça par le haut — le même lieu, vu de l’autre extrémité. Le sentier peut devenir nettement plus dangereux selon la météo et la saison ; suivez toujours les consignes du guide.',
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
          titulo: 'Cascade du Palmital + cascade du Capivara',
          corpo: 'Départ de Lençóis vers 7 h, par le sentier du Ribeirão do Meio. Environ 2 heures de montée sur la Serra do Veneno jusqu’à la Toca da Onça, où nous faisons une pause casse-croûte, puis encore 1 heure jusqu’à la cascade du Palmital — un paradis niché dans la montagne. Après 1 heure de marche supplémentaire, nous arrivons à la cascade du Capivara, où nous passons la première nuit. Une fois le campement monté, le guide prépare le dîner en tenant compte des restrictions alimentaires du groupe.',
          distancia: '15 km',
          esforco: 'Élevé',
        },
        {
          rotulo: '2e jour',
          titulo: 'La Fumaça par le bas',
          corpo: 'Départ à 8 h, après le petit-déjeuner, avec tout l’équipement, vers le pied de la Serra do Macaco — le prochain camp de base. 2 heures en longeant la rivière Capivara. Nous laissons la charge à l’endroit indiqué par le guide et continuons 2 heures jusqu’aux chutes de la cascade da Fumaça, par le bas. La marche le long du Riacho da Fumaça est singulière justement parce qu’elle est intacte et protégée : on peut observer de nombreuses espèces de flore et de faune dans les branches, sur les rochers et tout autour. Retour au campement, où est servi le dernier dîner de l’itinéraire.',
          distancia: '12 km',
          esforco: 'Modéré',
        },
        {
          rotulo: '3e jour',
          titulo: 'La Fumaça par le haut + Vale do Capão',
          corpo: 'Départ à la même heure, après le petit-déjeuner. Nous gravissons la Serra do Macaco jusqu’au belvédère de la cascade da Fumaça par le haut : environ 3 heures de marche en montée. Après un casse-croûte et le temps d’admirer la cascade depuis l’autre extrémité, nous prenons le sentier traditionnel jusqu’au village de Caeté-Açu, dans le Vale do Capão, où la voiture attend pour le transfert retour vers Lençóis.',
          distancia: '—',
          esforco: 'Élevé',
        },
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 1.700', nota: 'Minimum 2 personnes. Seul votre groupe sur le sentier.' },
        { titulo: 'En groupe', preco: 'R$ 1.450', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Tarifs pour paiement en espèces, virement ou boleto. Virement international ou groupe plus grand : contactez-nous.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      wildTrekChecklist('fr', `Trois jours sans aucune infrastructure à proximité et deux changements de campement. ${WILD_TREK_PORTER.fr}`),
      {
        type: 'included',
        title: 'Ce qui est inclus / non inclus',
        included: ['Guide de montagne formé aux premiers secours (APH)', 'Transfert aller-retour, avec retour par le Vale do Capão', 'Camping : tente, sac de couchage et tapis isolant', 'Repas pendant le trek', 'Balise satellite SPOT X', 'Assurance aventure', 'Trousse de premiers secours', 'Salle d’attente, consigne sécurisée pour les bagages en plus et douche avant/après le sentier'],
        excluded: ['Tout ce qui n’est pas listé', 'Petit-déjeuner du 1er jour', 'Hébergement avant ou après le trek', 'Équipement personnel', 'Évacuation médicale'],
      },
      safetyFaq(
        'fr',
        'Le sentier peut devenir nettement plus dangereux selon la météo et la saison — les consignes du guide comptent ici plus que sur n’importe lequel de nos autres itinéraires. Trois jours avec deux campements différents, sans aucune infrastructure à proximité : lampe frontale et protection de pluie sont obligatoires, pas simplement recommandées.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt à voir la Fumaça', 'des deux côtés ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous organisons le départ avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Waterval Fumaça van onderen — 3 dagen',
      description:
        'Drie dagen naar de voet van de 400 meter hoge rotswand van de Waterval Fumaça, via Palmital en Capivara, met de terugweg door de Vale do Capão.',
      canonical: '/nl/avonturen/waterval-fumaca-van-onderen',
    },
    hero: {
      nivel: 'Gemiddeld / Zwaar',
      origem: 'Vertrek: Lençóis',
      duracao: '3 dagen',
      titulo: 'Fumaça van onderen.',
      lead: 'Sta aan de voet van de 400 meter hoge wand — en kijk op de laatste dag van bovenaf neer op dezelfde plek.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Duur', 'Hoogte van de wand', 'Waar je slaapt', 'Vertrek (Lençóis)', 'Zwaarte'],
    sobre: {
      titulo: 'Over de Fumaça van onderen.',
      paragrafos: [
        'Een van de meest traditionele en zwaarste paden van de Chapada Diamantina. De Waterval Fumaça, een van de grootste van Brazilië, is van onderen een schouwspel dat is voorbehouden aan wie de voet bereikt: een wand van 400 meter waar het water nooit gelijkmatig de grond raakt — het effect waar de waterval zijn naam ("rook") aan dankt.',
        'Het pad loopt langs oude mijnplekken en verlaten schuilplaatsen van mijnwerkers, een route die net zoveel geschiedenis als landschap is. Onderweg bezoeken we ook de Waterval Palmital en de Waterval Capivara.',
        'Op de derde dag beklimmen we de Serra do Macaco naar het uitkijkpunt boven de Fumaça — dezelfde plek, gezien vanaf de andere kant. Afhankelijk van het weer en het seizoen kan het pad een stuk gevaarlijker worden; volg altijd de aanwijzingen van de gids.',
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
          titulo: 'Waterval Palmital + Waterval Capivara',
          corpo: 'Vertrek uit Lençóis rond 7.00 uur, over het pad van de Ribeirão do Meio. We klimmen zo’n 2 uur de Serra do Veneno op naar de Toca da Onça, waar we iets eten, en lopen nog een uur door naar de Waterval Palmital — een paradijs midden in de bergen. Na nog een uur lopen bereiken we de Waterval Capivara, waar we de eerste nacht doorbrengen. Als het kamp staat, maakt de gids het avondeten klaar, afgestemd op de dieetwensen van de groep.',
          distancia: '15 km',
          esforco: 'Zwaar',
        },
        {
          rotulo: 'Dag 2',
          titulo: 'Fumaça van onderen',
          corpo: 'Om 8.00 uur, na het ontbijt, vertrekken we met alle uitrusting naar de voet van de Serra do Macaco — de volgende kampplek. Het is 2 uur langs de rivier de Capivara. We laten de bagage achter op de plek die de gids aanwijst en lopen nog 2 uur door naar de voet van de Waterval Fumaça. De tocht langs de beek van de Fumaça is juist zo bijzonder omdat hij ongerept en beschermd is: in de takken, op de rotsen en overal om je heen zie je talloze planten- en diersoorten. Terug naar het kamp, waar het laatste avondeten van de reis wordt geserveerd.',
          distancia: '12 km',
          esforco: 'Gemiddeld',
        },
        {
          rotulo: 'Dag 3',
          titulo: 'Fumaça van bovenaf + Vale do Capão',
          corpo: 'Vertrek op het gebruikelijke tijdstip, na het ontbijt. We beklimmen de Serra do Macaco richting het uitkijkpunt boven de Waterval Fumaça: zo’n 3 uur bergop. Na een snack en tijd om de waterval vanaf de andere kant te bewonderen, nemen we het traditionele pad naar het dorp Caeté-Açu, in de Vale do Capão, waar de auto klaarstaat voor de rit terug naar Lençóis.',
          distancia: '—',
          esforco: 'Zwaar',
        },
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 1.700', nota: 'Minimaal 2 personen. Alleen jouw groep op het pad.' },
        { titulo: 'In een groep', preco: 'R$ 1.450', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      wildTrekChecklist('nl', `Drie dagen zonder voorzieningen in de buurt en twee keer van kampplek wisselen. ${WILD_TREK_PORTER.nl}`),
      {
        type: 'included',
        title: 'Wat is inbegrepen / niet inbegrepen',
        included: ['Berggids met EHBO-opleiding', 'Vervoer heen en terug, met de terugweg via de Vale do Capão', 'Kampeeruitrusting: tent, slaapzak en isolatiemat', 'Alle maaltijden tijdens de trektocht', 'SPOT X-satelliettracker', 'Avonturenverzekering', 'EHBO-kit', 'Wachtruimte, veilige bagageopslag en een douche voor/na het pad'],
        excluded: ['Alles wat niet in de lijst staat', 'Ontbijt op dag 1', 'Overnachting voor of na de trektocht', 'Persoonlijke uitrusting', 'Medische evacuatie'],
      },
      safetyFaq(
        'nl',
        'Afhankelijk van het weer en het seizoen kan het pad een stuk gevaarlijker worden — de aanwijzingen van de gids tellen hier zwaarder dan op welke andere route van ons ook. Het zijn drie dagen op twee verschillende kampplekken zonder voorzieningen in de buurt: hoofdlamp en regenkleding zijn verplicht, geen aanbeveling.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar om de Fumaça', 'van twee kanten te zien?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de reis samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
  de: {
    meta: {
      title: 'Wasserfall Fumaça von unten — 3 Tage',
      description:
        'Drei Tage bis zum Fuß der 400 Meter hohen Felswand des Fumaça-Wasserfalls, über Palmital und Capivara, mit dem Rückweg durch das Vale do Capão.',
      canonical: '/de/abenteuer/wasserfall-fumaca-von-unten',
    },
    hero: {
      nivel: 'Mittel / Schwer',
      origem: 'Start: Lençóis',
      duracao: '3 Tage',
      titulo: 'Fumaça von unten.',
      lead: 'Steh am Fuß der 400 Meter hohen Wand — und schau am letzten Tag von oben auf genau dieselbe Stelle.',
      apartirDe: 'Ab',
      porPessoa: '/ Person',
      reservar: 'Per WhatsApp buchen',
    },
    stats: ['Strecke zu Fuß', 'Dauer', 'Höhe der Wand', 'Übernachtung', 'Start (Lençóis)', 'Schwierigkeit'],
    sobre: {
      titulo: 'Über die Fumaça von unten.',
      paragrafos: [
        'Einer der traditionsreichsten und anspruchsvollsten Wege der Chapada Diamantina. Der Fumaça-Wasserfall, einer der höchsten Brasiliens, ist von unten ein Schauspiel, das nur denen vorbehalten ist, die seinen Fuß erreichen: eine 400 Meter hohe Wand, an der das Wasser nie gleichmäßig den Boden erreicht — der Effekt, dem der Wasserfall seinen Namen („Rauch“) verdankt.',
        'Der Weg führt an alten Minenstätten und verlassenen Unterschlüpfen der Minenarbeiter vorbei, eine Route, die genauso viel Geschichte wie Landschaft ist. Unterwegs besuchen wir auch den Palmital- und den Capivara-Wasserfall.',
        'Am dritten Tag steigen wir die Serra do Macaco hinauf zum Aussichtspunkt oberhalb der Fumaça — dieselbe Stelle, von der anderen Seite gesehen. Je nach Wetter und Jahreszeit kann der Weg deutlich gefährlicher werden; folge immer den Anweisungen des Guides.',
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
          titulo: 'Palmital-Wasserfall + Capivara-Wasserfall',
          corpo: 'Start in Lençóis gegen 7:00 Uhr, über den Weg des Ribeirão do Meio. Wir steigen rund 2 Stunden die Serra do Veneno hinauf zur Toca da Onça, wo wir eine Kleinigkeit essen, und gehen noch eine Stunde weiter bis zum Palmital-Wasserfall — einem Paradies mitten in den Bergen. Nach einer weiteren Stunde erreichen wir den Capivara-Wasserfall, wo wir die erste Nacht verbringen. Steht das Lager, bereitet der Guide das Abendessen zu, abgestimmt auf die Ernährungswünsche der Gruppe.',
          distancia: '15 km',
          esforco: 'Schwer',
        },
        {
          rotulo: 'Tag 2',
          titulo: 'Fumaça von unten',
          corpo: 'Um 8:00 Uhr, nach dem Frühstück, brechen wir mit der ganzen Ausrüstung zum Fuß der Serra do Macaco auf — dem nächsten Lagerplatz. Es sind 2 Stunden am Fluss Capivara entlang. Wir lassen das Gepäck an der Stelle, die der Guide zeigt, und gehen noch 2 Stunden weiter bis zum Fuß des Fumaça-Wasserfalls. Der Weg am Bach der Fumaça ist gerade deshalb so besonders, weil er unberührt und geschützt ist: In den Ästen, auf den Felsen und überall um dich herum siehst du unzählige Pflanzen- und Tierarten. Zurück im Lager gibt es das letzte Abendessen der Reise.',
          distancia: '12 km',
          esforco: 'Mittel',
        },
        {
          rotulo: 'Tag 3',
          titulo: 'Fumaça von oben + Vale do Capão',
          corpo: 'Aufbruch zur gewohnten Zeit, nach dem Frühstück. Wir steigen die Serra do Macaco hinauf Richtung Aussichtspunkt oberhalb des Fumaça-Wasserfalls: rund 3 Stunden bergauf. Nach einem Snack und Zeit, den Wasserfall von der anderen Seite zu bestaunen, nehmen wir den traditionellen Weg zum Dorf Caeté-Açu im Vale do Capão, wo das Auto für die Rückfahrt nach Lençóis bereitsteht.',
          distancia: '—',
          esforco: 'Schwer',
        },
      ],
    },
    precos: {
      titulo: 'Wähle das Format, das zu deiner Gruppe passt.',
      formatos: [
        { titulo: 'Privatpaket', preco: 'R$ 1.700', nota: 'Mindestens 2 Personen. Nur deine Gruppe auf dem Weg.' },
        { titulo: 'In der Gruppe', preco: 'R$ 1.450', nota: 'Von 2 bis 7 Personen. Du schließt dich einer offenen Gruppe an.' },
      ],
      nota: 'Preise bei Zahlung in bar, per Überweisung oder mit Boleto. Internationale Überweisung oder größere Gruppe: sprich uns an.',
    },
    faqTitulo: 'Alles, was du wissen musst.',
    faqs: [
      wildTrekChecklist('de', `Drei Tage ohne Infrastruktur in der Nähe und zwei Wechsel des Lagerplatzes. ${WILD_TREK_PORTER.de}`),
      {
        type: 'included',
        title: 'Was inklusive ist / was nicht',
        included: ['Bergführer mit Erste-Hilfe-Ausbildung', 'Hin- und Rücktransport, mit Rückweg über das Vale do Capão', 'Campingausrüstung: Zelt, Schlafsack und Isomatte', 'Alle Mahlzeiten während der Tour', 'SPOT-X-Satellitentracker', 'Abenteuerversicherung', 'Erste-Hilfe-Set', 'Warteraum, sichere Gepäckaufbewahrung und Dusche vor/nach der Wanderung'],
        excluded: ['Alles, was nicht aufgeführt ist', 'Frühstück am 1. Tag', 'Unterkunft vor oder nach der Tour', 'Persönliche Ausrüstung', 'Medizinische Evakuierung'],
      },
      safetyFaq(
        'de',
        'Je nach Wetter und Jahreszeit kann der Weg deutlich gefährlicher werden — die Anweisungen des Guides zählen hier mehr als auf jeder anderen unserer Routen. Es sind drei Tage an zwei verschiedenen Lagerplätzen ohne Infrastruktur in der Nähe: Stirnlampe und Regenschutz sind Pflicht, keine Empfehlung.',
      ),
      ...DAY_TOUR_LEGAL.de,
    ],
    cta: {
      titulo: ['Bereit, die Fumaça', 'von zwei Seiten zu sehen?'],
      corpo: 'Sag uns, mit wie vielen Personen du kommst und welche Daten du im Blick hast, dann stellen wir die Tour gemeinsam mit dir zusammen.',
      botao: 'Sprich mit Mamut',
    },
  },
};
