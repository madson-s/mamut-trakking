/**
 * Conteúdo da travessia do Vale do Pati em 5 dias via Capão, por idioma.
 *
 * PT vem de mamut.agency/aventuras/vale-do-pati-5-dias-capao e EN de
 * mamut.agency/en/aventuras/pati-valley-5-days-capao-way. ES, FR e NL são tradução aqui.
 *
 * Mesma rota da versão de 4 dias, com um dia a mais: o Cachoeirão por Baixo
 * ganha um bate-volta próprio em vez de ficar de fora. O texto compartilhado
 * vem de `pati-capao-shared`.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { PATI_CAPAO_AVISO, PATI_CAPAO_SOBRE, patiCapaoFaqs } from './pati-capao-shared';

export const PATI_5_CAPAO_ASSETS: DayTourAssets = {
  detailLayout: 'legacy',
  hero: { src: '/img/adventures/pati-5-capao/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/pati-5-capao/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/pati-5-capao/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/pati-5-capao/3.jpeg', width: 1600, height: 1200 },
  ],
  stats: [
    ['78 km', '/svg/_icons/icon_03_montain.svg'],
    ['5 dias / 4 noites', '/svg/_icons/icon_11_calendar.svg'],
    ['1.200 m', '/svg/_icons/icon_09_location.svg'],
    ['Casas de nativos', '/svg/_icons/icon_10_home.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Difícil', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 3300,
};

export const PATI_5_CAPAO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Vale do Pati 5 dias via Capão',
      description:
        'Travessia de 78 km pelo Vale do Pati terminando no Vale do Capão, com dia inteiro no Cachoeirão por Baixo e no Calixto.',
      canonical: '/pt/aventuras/vale-do-pati-5-dias-capao',
    },
    hero: {
      nivel: 'Moderado / Difícil',
      origem: 'Origem: Palmeiras',
      duracao: '5 dias',
      titulo: 'Vale do Pati em 5 dias, via Capão.',
      lead: 'A travessia completa: setenta e oito quilômetros, com o Cachoeirão por baixo e o Calixto em dias próprios.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Duração', 'Altitude máxima', 'Onde se dorme', 'Saída (Palmeiras)', 'Dificuldade'],
    sobre: { titulo: 'Sobre o Vale do Pati.', paragrafos: PATI_CAPAO_SOBRE.pt },
    itinerario: {
      titulo: 'Dia a dia.',
      aviso: PATI_CAPAO_AVISO.pt,
      corpo: [],
      dias: [
        {
          rotulo: '1º dia',
          titulo: 'Cachoeirão por Cima + Pati de Baixo',
          corpo: 'Saída a partir das 7h00 de Palmeiras, 1 hora de carro até a vila do Guiné, onde entramos no Vale do Pati. Pegamos a trilha dos Aleixos e subimos por 1 hora, depois mais 1h30 em terreno plano até o Mirante do Cachoeirão por Cima. De lá seguimos para a Fenda da Prefeitura, uma descida íngreme de 1 hora até o sopé, e mais 40 minutos até o alojamento.',
          distancia: '15 km',
          esforco: 'Alto',
        },
        {
          rotulo: '2º dia',
          titulo: 'Cachoeirão por Baixo',
          corpo: 'Saída por volta das 8h00, depois do café da manhã servido na hospedagem. Bate-volta em caminho majoritariamente acidentado, no leito do Rio Cachoeirão, pulando muitas pedras. Seguimos até a base da cachoeira só com itens de ataque. Depois da contemplação e do lanche preparado pelo guia, voltamos pelo mesmo caminho.',
          distancia: '12 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '3º dia',
          titulo: 'Cachoeira do Calixto + Poço da Árvore',
          corpo: 'Dia no Calixto, uma das áreas menos visitadas do Pati. Vamos só com itens de ataque, pulando pedras e cortando matas densas até a Cachoeira do Calixto. No percurso dá para se refrescar no Poço da Árvore.',
          distancia: '18 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '4º dia',
          titulo: 'Morro do Castelo + cachoeiras',
          corpo: 'Saída às 8h00 depois de um café reforçadíssimo, com todos os itens, que ficam na bifurcação. É o dia de esforço mais intenso: atacamos um morro a mais de 1.200 m de altitude, com um aclive de cerca de 250 metros em 40 a 60 minutos. No topo do Morro do Castelo são dois mirantes e a entrada da Gruta da Lapinha, uma das grutas mais raras do mundo acima de 1.000 m. Descemos, pegamos os itens e seguimos por outro caminho, conhecendo as Cachoeiras Altina (Lajes), Funis e Bananeiras antes de chegar à hospedagem por volta das 18h00.',
          distancia: '—',
          esforco: 'Alto',
        },
        {
          rotulo: '5º dia',
          titulo: 'Mirante da Rampa + Quebra Bunda + Gerais do Vieira',
          corpo: 'Saída da Igrejinha por volta das 8h00 e 1 hora de subida até o Mirante da Rampa. Depois 2 horas em terreno plano até o Mirante do Quebra Bunda, onde começa 1 hora de descida. Na base da serra, mais 3 horas em terreno plano pelos Gerais do Vieira até a Vila do Bomba, onde o carro espera por volta das 16h00 para o transfer de volta. Pernoite em hostel, sem café da manhã.',
          distancia: '—',
          esforco: 'Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 3.500', nota: 'Mínimo de 2 pessoas. Só o seu grupo na travessia.' },
        { titulo: 'Em grupo', preco: 'R$ 3.300', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      ...patiCapaoFaqs('pt'),
      safetyFaq(
        'pt',
        'São cinco dias seguidos de caminhada, com o nível técnico entre Moderado e Difícil. O 2º dia é feito no leito do Rio Cachoeirão, pulando pedras que podem estar escorregadias; o 4º é o mais duro, com 250 metros de aclive para passar dos 1.200 m. Quem está em dúvida sobre o preparo deve falar com o atendimento antes de fechar.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para os cinco dias', 'de travessia?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a travessia com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Pati Valley 5 days, Capão way',
      description:
        'A 78 km crossing of the Pati Valley ending in Vale do Capão, with full days at Cachoeirão from below and at the Calixto.',
      canonical: '/en/adventures/pati-valley-5-days-capao-way',
    },
    hero: {
      nivel: 'Moderate / Hard',
      origem: 'From: Palmeiras',
      duracao: '5 days',
      titulo: 'Pati Valley in 5 days, the Capão way.',
      lead: 'The full crossing: seventy-eight kilometres, with the Cachoeirão from below and the Calixto each getting their own day.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Duration', 'Highest point', 'Where you sleep', 'Departure (Palmeiras)', 'Difficulty'],
    sobre: { titulo: 'About the Pati Valley.', paragrafos: PATI_CAPAO_SOBRE.en },
    itinerario: {
      titulo: 'Day by day.',
      aviso: PATI_CAPAO_AVISO.en,
      corpo: [],
      dias: [
        {
          rotulo: 'Day 1',
          titulo: 'Cachoeirão from above + Pati de Baixo',
          corpo: 'Departure from 7:00 am from Palmeiras, an hour by car to the village of Guiné, where we enter the Pati Valley. We take the Aleixos trail and climb for an hour, then another 1.5 hours on flat ground to the Cachoeirão overlook. From there we head for the Fenda da Prefeitura, a steep one-hour descent to the foot of the range, and another 40 minutes to the lodging.',
          distancia: '15 km',
          esforco: 'High',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Cachoeirão from below',
          corpo: 'Out around 8:00 am, after breakfast at the lodging. A there-and-back day on mostly rough ground, in the bed of the Cachoeirão river, hopping across a lot of rocks. We go to the base of the falls with day packs only. After taking it in and the snack prepared by the guide, we return the same way.',
          distancia: '12 km',
          esforco: 'Moderate / High',
        },
        {
          rotulo: 'Day 3',
          titulo: 'Calixto Waterfall + Poço da Árvore',
          corpo: 'A day in the Calixto, one of the least visited parts of the Pati. We carry day packs only, hopping rocks and cutting through dense forest to Calixto Waterfall. On the way there is a swim at Poço da Árvore.',
          distancia: '18 km',
          esforco: 'Moderate / High',
        },
        {
          rotulo: 'Day 4',
          titulo: 'Castelo Hill + waterfalls',
          corpo: 'Out at 8:00 am after a very substantial breakfast, with everything, which we leave at the fork. This is the most demanding day: we take on a hill standing above 1,200 m, with a climb of around 250 metres in 40 to 60 minutes. At the top of Castelo Hill there are two lookouts and the entrance to Lapinha Cave, one of the rarest caves in the world above 1,000 m. We come down, pick up our things and continue by a different route, taking in Altina (Lajes), Funis and Bananeiras waterfalls before reaching the lodging around 6:00 pm.',
          distancia: '—',
          esforco: 'High',
        },
        {
          rotulo: 'Day 5',
          titulo: 'Rampa Overlook + Quebra Bunda + Gerais do Vieira',
          corpo: 'We leave Igrejinha around 8:00 am and climb for an hour to the Rampa Overlook. Then 2 hours on flat ground to the Quebra Bunda lookout, where an hour of descent begins. At the foot of the range, another 3 hours on flat ground across the Gerais do Vieira to Vila do Bomba, where the car is waiting around 4:00 pm for the transfer back. Overnight in a hostel, breakfast not included.',
          distancia: '—',
          esforco: 'Moderate',
        },
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 3,500', nota: 'Minimum of 2 people. Just your group on the crossing.' },
        { titulo: 'Group tour', preco: 'R$ 3,300', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      ...patiCapaoFaqs('en'),
      safetyFaq(
        'en',
        'This is five consecutive days of walking, with a technical level between Moderate and Hard. Day 2 is walked in the bed of the Cachoeirão river, hopping rocks that can be slippery; day 4 is the hardest, with 250 metres of climb to get above 1,200 m. If you are unsure about your fitness, talk to us before booking.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready for five days', 'of crossing?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the crossing together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Valle del Pati 5 días vía Capão',
      description:
        'Travesía de 78 km por el Valle del Pati terminando en el Valle do Capão, con día entero en el Cachoeirão por abajo y en el Calixto.',
      canonical: '/es/aventuras/valle-del-pati-5-dias-via-capao',
    },
    hero: {
      nivel: 'Moderado / Difícil',
      origem: 'Origen: Palmeiras',
      duracao: '5 días',
      titulo: 'Valle del Pati en 5 días, vía Capão.',
      lead: 'La travesía completa: setenta y ocho kilómetros, con el Cachoeirão por abajo y el Calixto en días propios.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Duración', 'Altitud máxima', 'Dónde se duerme', 'Salida (Palmeiras)', 'Dificultad'],
    sobre: { titulo: 'Sobre el Valle del Pati.', paragrafos: PATI_CAPAO_SOBRE.es },
    itinerario: {
      titulo: 'Día a día.',
      aviso: PATI_CAPAO_AVISO.es,
      corpo: [],
      dias: [
        {
          rotulo: '1º día',
          titulo: 'Cachoeirão por Arriba + Pati de Baixo',
          corpo: 'Salida a partir de las 7:00 de Palmeiras, 1 hora de auto hasta la villa de Guiné, donde entramos al Valle del Pati. Tomamos el sendero de los Aleixos y subimos por 1 hora, después otra 1:30 h en terreno plano hasta el Mirador del Cachoeirão por Arriba. De ahí seguimos a la Fenda da Prefeitura, una bajada empinada de 1 hora hasta el pie de la sierra, y otros 40 minutos hasta el alojamiento.',
          distancia: '15 km',
          esforco: 'Alto',
        },
        {
          rotulo: '2º día',
          titulo: 'Cachoeirão por Abajo',
          corpo: 'Salida cerca de las 8:00, después del desayuno servido en el alojamiento. Ida y vuelta en camino mayormente accidentado, en el lecho del Río Cachoeirão, saltando muchas piedras. Seguimos hasta la base de la cascada solo con mochila de ataque. Después de la contemplación y del snack preparado por el guía, volvemos por el mismo camino.',
          distancia: '12 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '3º día',
          titulo: 'Cascada del Calixto + Poço da Árvore',
          corpo: 'Día en el Calixto, una de las áreas menos visitadas del Pati. Vamos solo con mochila de ataque, saltando piedras y cortando montes densos hasta la Cascada del Calixto. En el trayecto se puede uno refrescar en el Poço da Árvore.',
          distancia: '18 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '4º día',
          titulo: 'Morro do Castelo + cascadas',
          corpo: 'Salida a las 8:00 después de un desayuno reforzadísimo, con todos los ítems, que quedan en la bifurcación. Es el día de esfuerzo más intenso: atacamos un morro a más de 1.200 m de altitud, con una subida de cerca de 250 metros en 40 a 60 minutos. En la cima del Morro do Castelo hay dos miradores y la entrada de la Gruta da Lapinha, una de las grutas más raras del mundo por encima de los 1.000 m. Bajamos, tomamos los ítems y seguimos por otro camino, conociendo las Cascadas Altina (Lajes), Funis y Bananeiras antes de llegar al alojamiento cerca de las 18:00.',
          distancia: '—',
          esforco: 'Alto',
        },
        {
          rotulo: '5º día',
          titulo: 'Mirador da Rampa + Quebra Bunda + Gerais do Vieira',
          corpo: 'Salida de la Igrejinha cerca de las 8:00 y 1 hora de subida hasta el Mirador da Rampa. Después 2 horas en terreno plano hasta el Mirador del Quebra Bunda, donde empieza 1 hora de bajada. En la base de la sierra, otras 3 horas en terreno plano por los Gerais do Vieira hasta la Vila do Bomba, donde el auto espera cerca de las 16:00 para el traslado de vuelta. Pernocte en hostel, sin desayuno.',
          distancia: '—',
          esforco: 'Moderado',
        },
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 3.500', nota: 'Mínimo de 2 personas. Solo tu grupo en la travesía.' },
        { titulo: 'En grupo', preco: 'R$ 3.300', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      ...patiCapaoFaqs('es'),
      safetyFaq(
        'es',
        'Son cinco días seguidos de caminata, con nivel técnico entre Moderado y Difícil. El 2º día se hace en el lecho del Río Cachoeirão, saltando piedras que pueden estar resbaladizas; el 4º es el más duro, con 250 metros de subida para pasar los 1.200 m. Quien tenga dudas sobre su preparación debería hablar con atención antes de cerrar.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para los cinco días', 'de travesía?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la travesía con vos.',
      botao: 'Hablar con Mamut',
    },
  },
  fr: {
    meta: {
      title: 'Vallée du Pati en 5 jours par le Capão',
      description:
        'Traversée de 78 km dans la vallée du Pati, avec arrivée dans la vallée du Capão et une journée entière au Cachoeirão par le bas et au Calixto.',
      canonical: '/fr/aventures/vallee-du-pati-5-jours-par-capao',
    },
    hero: {
      nivel: 'Modéré / Difficile',
      origem: 'Départ : Palmeiras',
      duracao: '5 jours',
      titulo: 'Vallée du Pati en 5 jours, par le Capão.',
      lead: 'La traversée complète : soixante-dix-huit kilomètres, avec le Cachoeirão par le bas et le Calixto, chacun sur sa propre journée.',
      apartirDe: 'À partir de',
      porPessoa: '/ personne',
      reservar: 'Réserver sur WhatsApp',
    },
    stats: ['Distance à pied', 'Durée', 'Altitude maximale', 'Où l’on dort', 'Départ (Palmeiras)', 'Difficulté'],
    sobre: { titulo: 'À propos de la vallée du Pati.', paragrafos: PATI_CAPAO_SOBRE.fr },
    itinerario: {
      titulo: 'Jour par jour.',
      aviso: PATI_CAPAO_AVISO.fr,
      corpo: [],
      dias: [
        {
          rotulo: '1er jour',
          titulo: 'Cachoeirão par le haut + Pati de Baixo',
          corpo: 'Départ à partir de 7h00 de Palmeiras, 1 heure de voiture jusqu’au village de Guiné, où nous entrons dans la vallée du Pati. Nous prenons le sentier des Aleixos et montons pendant 1 heure, puis encore 1h30 sur terrain plat jusqu’au belvédère du Cachoeirão par le haut. De là, nous rejoignons la Fenda da Prefeitura, une descente raide d’une heure jusqu’au pied de la serra, puis encore 40 minutes jusqu’à l’hébergement.',
          distancia: '15 km',
          esforco: 'Élevé',
        },
        {
          rotulo: '2e jour',
          titulo: 'Cachoeirão par le bas',
          corpo: 'Départ vers 8h00, après le petit-déjeuner servi à l’hébergement. Aller-retour sur un chemin en grande partie accidenté, dans le lit de la rivière Cachoeirão, en sautant de rocher en rocher. Nous allons jusqu’au pied de la cascade avec un simple sac de journée. Après la contemplation et la collation préparée par le guide, nous revenons par le même chemin.',
          distancia: '12 km',
          esforco: 'Modéré / Élevé',
        },
        {
          rotulo: '3e jour',
          titulo: 'Cascade du Calixto + Poço da Árvore',
          corpo: 'Journée au Calixto, l’un des coins les moins visités du Pati. Nous partons avec un simple sac de journée, en sautant de rocher en rocher et en traversant une forêt dense jusqu’à la cascade du Calixto. En chemin, on peut se rafraîchir au Poço da Árvore.',
          distancia: '18 km',
          esforco: 'Modéré / Élevé',
        },
        {
          rotulo: '4e jour',
          titulo: 'Morro do Castelo + cascades',
          corpo: 'Départ à 8h00 après un petit-déjeuner très copieux, avec toutes les affaires, que nous laissons à la bifurcation. C’est la journée d’effort la plus intense : nous attaquons un morro à plus de 1 200 m d’altitude, avec environ 250 mètres de dénivelé en 40 à 60 minutes. Au sommet du Morro do Castelo, deux belvédères et l’entrée de la grotte de la Lapinha, l’une des grottes les plus rares au monde au-dessus de 1 000 m. Nous redescendons, récupérons les affaires et continuons par un autre chemin, à la découverte des cascades Altina (Lajes), Funis et Bananeiras, avant d’arriver à l’hébergement vers 18h00.',
          distancia: '—',
          esforco: 'Élevé',
        },
        {
          rotulo: '5e jour',
          titulo: 'Mirante da Rampa + Quebra Bunda + Gerais do Vieira',
          corpo: 'Départ de l’Igrejinha vers 8h00 et 1 heure de montée jusqu’au Mirante da Rampa. Puis 2 heures sur terrain plat jusqu’au belvédère du Quebra Bunda, où commence 1 heure de descente. Au pied de la serra, encore 3 heures sur terrain plat à travers les Gerais do Vieira jusqu’à la Vila do Bomba, où la voiture attend vers 16h00 pour le transfert retour. Nuit en auberge, sans petit-déjeuner.',
          distancia: '—',
          esforco: 'Modéré',
        },
      ],
    },
    precos: {
      titulo: 'Choisissez la formule idéale pour votre groupe.',
      formatos: [
        { titulo: 'Forfait privé', preco: 'R$ 3.500', nota: 'Minimum 2 personnes. Seul votre groupe sur la traversée.' },
        { titulo: 'En groupe', preco: 'R$ 3.300', nota: 'De 2 à 7 personnes. Vous rejoignez un groupe ouvert.' },
      ],
      nota: 'Prix pour un paiement en espèces, par virement ou par boleto. Virement international ou groupe plus grand : contactez notre équipe.',
    },
    faqTitulo: 'Tout ce que vous devez savoir.',
    faqs: [
      ...patiCapaoFaqs('fr'),
      safetyFaq(
        'fr',
        'Il s’agit de cinq jours de marche d’affilée, avec un niveau technique entre Modéré et Difficile. Le 2e jour se fait dans le lit de la rivière Cachoeirão, en sautant sur des rochers qui peuvent être glissants ; le 4e est le plus dur, avec 250 mètres de dénivelé pour dépasser 1 200 m. Si vous avez un doute sur votre condition physique, parlez-en à notre équipe avant de réserver.',
      ),
      ...DAY_TOUR_LEGAL.fr,
    ],
    cta: {
      titulo: ['Prêt pour cinq jours', 'de traversée ?'],
      corpo: 'Dites-nous combien vous êtes et les dates que vous envisagez, et nous construisons la traversée avec vous.',
      botao: 'Parler à Mamut',
    },
  },
  nl: {
    meta: {
      title: 'Vale do Pati 5 dagen, via Capão',
      description:
        'Een doorsteek van 78 km door de Vale do Pati die eindigt in de Vale do Capão, met volle dagen bij de Cachoeirão van onderen en bij de Calixto.',
      canonical: '/nl/avonturen/pati-vallei-5-dagen-via-capao',
    },
    hero: {
      nivel: 'Gemiddeld / Moeilijk',
      origem: 'Vertrek: Palmeiras',
      duracao: '5 dagen',
      titulo: 'Vale do Pati in 5 dagen, via Capão.',
      lead: 'De volledige doorsteek: achtenzeventig kilometer, met een eigen dag voor de Cachoeirão van onderen en voor de Calixto.',
      apartirDe: 'Vanaf',
      porPessoa: '/ persoon',
      reservar: 'Boek via WhatsApp',
    },
    stats: ['Afstand te voet', 'Duur', 'Hoogste punt', 'Waar je slaapt', 'Vertrek (Palmeiras)', 'Zwaarte'],
    sobre: { titulo: 'Over de Vale do Pati.', paragrafos: PATI_CAPAO_SOBRE.nl },
    itinerario: {
      titulo: 'Dag voor dag.',
      aviso: PATI_CAPAO_AVISO.nl,
      corpo: [],
      dias: [
        {
          rotulo: 'Dag 1',
          titulo: 'Cachoeirão van bovenaf + Pati de Baixo',
          corpo: 'Vertrek vanaf 7.00 uur uit Palmeiras, een uur met de auto naar het dorp Guiné, waar we de Vale do Pati in gaan. We nemen het pad van de Aleixos en klimmen een uur, daarna nog 1,5 uur over vlak terrein naar het uitkijkpunt Cachoeirão. Vandaar gaan we naar de Fenda da Prefeitura, een steile afdaling van een uur naar de voet van de bergketen, en nog 40 minuten naar het onderkomen.',
          distancia: '15 km',
          esforco: 'Zwaar',
        },
        {
          rotulo: 'Dag 2',
          titulo: 'Cachoeirão van onderen',
          corpo: 'Vertrek rond 8.00 uur, na het ontbijt in het onderkomen. Een heen-en-terugdag over overwegend ruig terrein, in de bedding van de rivier de Cachoeirão, springend over veel rotsen. We gaan met alleen een dagrugzak naar de voet van de watervallen. Na het genieten van het uitzicht en de snack die de gids klaarmaakt, gaan we via dezelfde weg terug.',
          distancia: '12 km',
          esforco: 'Gemiddeld / Zwaar',
        },
        {
          rotulo: 'Dag 3',
          titulo: 'Waterval Calixto + Poço da Árvore',
          corpo: 'Een dag in de Calixto, een van de minst bezochte delen van de Pati. We nemen alleen een dagrugzak mee en springen van rots naar rots en lopen door dicht bos naar de Waterval Calixto. Onderweg zwemmen we in de Poço da Árvore.',
          distancia: '18 km',
          esforco: 'Gemiddeld / Zwaar',
        },
        {
          rotulo: 'Dag 4',
          titulo: 'Morro do Castelo + watervallen',
          corpo: 'Om 8.00 uur, na een heel stevig ontbijt, vertrekken we met alle bagage, die we bij de splitsing achterlaten. Dit is de zwaarste dag: we beklimmen een berg van meer dan 1.200 m, met zo’n 250 meter stijgen in 40 tot 60 minuten. Op de top van de Morro do Castelo zijn twee uitkijkpunten en de ingang van de Gruta da Lapinha, een van de zeldzaamste grotten ter wereld boven 1.000 m. We dalen af, halen onze spullen op en lopen via een andere route verder, langs de watervallen Altina (Lajes), Funis en Bananeiras, tot we rond 18.00 uur bij het onderkomen aankomen.',
          distancia: '—',
          esforco: 'Zwaar',
        },
        {
          rotulo: 'Dag 5',
          titulo: 'Uitkijkpunt Rampa + Quebra Bunda + Gerais do Vieira',
          corpo: 'We vertrekken rond 8.00 uur uit Igrejinha en klimmen een uur naar het uitkijkpunt Rampa. Dan 2 uur over vlak terrein naar het uitkijkpunt Quebra Bunda, waar een uur afdalen begint. Aan de voet van de bergketen nog 3 uur over vlak terrein door de Gerais do Vieira naar Vila do Bomba, waar rond 16.00 uur de auto klaarstaat voor de terugrit. Overnachting in een hostel, ontbijt niet inbegrepen.',
          distancia: '—',
          esforco: 'Gemiddeld',
        },
      ],
    },
    precos: {
      titulo: 'Kies de vorm die bij je groep past.',
      formatos: [
        { titulo: 'Privépakket', preco: 'R$ 3.500', nota: 'Minimaal 2 personen. Alleen jouw groep op de doorsteek.' },
        { titulo: 'In een groep', preco: 'R$ 3.300', nota: 'Van 2 tot 7 personen. Je sluit aan bij een open groep.' },
      ],
      nota: 'Prijzen bij betaling contant, per overboeking of met boleto. Internationale overboeking of een grotere groep: neem contact met ons op.',
    },
    faqTitulo: 'Alles wat je moet weten.',
    faqs: [
      ...patiCapaoFaqs('nl'),
      safetyFaq(
        'nl',
        'Het zijn vijf dagen achter elkaar lopen, met een technisch niveau tussen Gemiddeld en Moeilijk. Dag 2 loop je in de bedding van de rivier de Cachoeirão, springend over rotsen die glad kunnen zijn; dag 4 is de zwaarste, met 250 meter klimmen tot boven de 1.200 m. Twijfel je over je conditie, praat dan met ons voordat je boekt.',
      ),
      ...DAY_TOUR_LEGAL.nl,
    ],
    cta: {
      titulo: ['Klaar voor vijf dagen', 'doorsteken?'],
      corpo: 'Vertel ons met hoeveel mensen je komt en welke data je in gedachten hebt, dan stellen we de doorsteek samen met je op.',
      botao: 'Praat met Mamut',
    },
  },
};
