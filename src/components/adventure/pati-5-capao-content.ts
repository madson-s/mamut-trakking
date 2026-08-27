/**
 * Conteúdo da travessia do Vale do Pati em 5 dias via Capão, por idioma.
 *
 * PT vem de mamut.agency/aventuras/vale-do-pati-5-dias-capao e EN de
 * mamut.agency/en/aventuras/pati-valley-5-days-capao-way. ES é tradução aqui.
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
      canonical: '/pt/aventuras/vale-do-pati-5-dias-via-capao',
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
};
