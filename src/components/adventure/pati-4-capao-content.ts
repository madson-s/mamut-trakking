/**
 * Conteúdo da travessia do Vale do Pati em 4 dias via Capão, por idioma.
 *
 * PT vem de mamut.agency/aventuras/vale-do-pati-4-dias-via-capao e EN de
 * mamut.agency/en/aventuras/pati-valley-4-days-capao-way. ES é tradução aqui.
 *
 * O texto de abertura, o checklist, o "o que está incluso" e o bloco de
 * sazonalidade vêm de `pati-capao-shared` — são iguais aos da versão de 5 dias.
 * Aqui ficam só os números, os dias e os preços.
 *
 * Não confundir com `vale-do-pati-4-dias` (entrada e saída por Guiné), que é
 * outro produto no hub.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';
import { PATI_CAPAO_AVISO, PATI_CAPAO_SOBRE, patiCapaoFaqs } from './pati-capao-shared';

export const PATI_4_CAPAO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/pati-4-capao/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/pati-4-capao/1.jpeg', width: 2080, height: 1170 },
    { src: '/img/adventures/pati-4-capao/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/pati-4-capao/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['68 km', '/svg/_icons/icon_03_montain.svg'],
    ['4 dias / 3 noites', '/svg/_icons/icon_11_calendar.svg'],
    ['1.200 m', '/svg/_icons/icon_09_location.svg'],
    ['Casas de nativos', '/svg/_icons/icon_10_home.svg'],
    ['7h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 2450,
};

export const PATI_4_CAPAO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Vale do Pati 4 dias via Capão',
      description:
        'Travessia de 68 km pelo Vale do Pati terminando no Vale do Capão: Cachoeirão, Calixto, Morro do Castelo e Mirante da Rampa.',
      canonical: '/pt/aventuras/vale-do-pati-4-dias-via-capao',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Palmeiras',
      duracao: '4 dias',
      titulo: 'Vale do Pati em 4 dias, via Capão.',
      lead: 'A travessia mais bonita do Brasil, terminando na vila entre montanhas do Vale do Capão.',
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
          titulo: 'Cachoeirão por Cima + Fenda da Prefeitura + Pati de Baixo',
          corpo: 'Saída a partir das 7h00 de Palmeiras, 1 hora de carro até a vila do Guiné, onde entramos no Vale do Pati. Pegamos a trilha dos Aleixos e subimos por 1 hora, depois mais 1h30 em terreno plano até o Mirante do Cachoeirão por Cima. De lá seguimos para a Fenda da Prefeitura, uma descida íngreme de 1 hora até o alojamento. Bebidas extras podem ser compradas no pequeno mercado do alojamento — vale para todos os dias.',
          distancia: '18 km',
          esforco: 'Alto',
        },
        {
          rotulo: '2º dia',
          titulo: 'Cachoeira do Calixto',
          corpo: 'Dia no Calixto, uma das áreas menos visitadas do Pati. Vamos só com itens de ataque, porque voltamos ao mesmo alojamento. São cerca de 2h30 pulando pedras e atravessando matas densas até a Cachoeira do Calixto. Ao meio-dia o guia prepara o piquenique. Na volta dá para se refrescar no Poço da Árvore.',
          distancia: '15 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '3º dia',
          titulo: 'Morro do Castelo + cachoeiras',
          corpo: 'Saída às 8h00 com todos os itens, que ficam na bifurcação. É o dia de esforço mais intenso: atacamos um morro a mais de 1.200 m de altitude, com um aclive de cerca de 250 metros em 40 a 60 minutos. No topo do Morro do Castelo são dois mirantes e a entrada da Gruta da Lapinha, uma das grutas mais raras do mundo acima de 1.000 m. Descemos, pegamos os itens e seguimos por outro caminho, conhecendo as Cachoeiras das Bananeiras, dos Funis e das Lajes (ou Altina) antes de chegar ao alojamento por volta das 18h00.',
          distancia: '—',
          esforco: 'Alto',
        },
        {
          rotulo: '4º dia',
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
        { titulo: 'Pacote privado', preco: 'R$ 2.750', nota: 'Mínimo de 2 pessoas. Só o seu grupo na travessia.' },
        { titulo: 'Em grupo', preco: 'R$ 2.450', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      ...patiCapaoFaqs('pt'),
      safetyFaq(
        'pt',
        'O dia do Morro do Castelo é o mais exigente: 250 metros de aclive para chegar acima dos 1.200 m. O trecho da Fenda da Prefeitura, no 1º dia, é uma descida íngreme de 1 hora — e o 1º dia já é o mais longo, com 18 km. Quem está em dúvida sobre o preparo deve falar com o atendimento antes de fechar.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para atravessar', 'o Vale do Pati?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a travessia com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Pati Valley 4 days, Capão way',
      description:
        'A 68 km crossing of the Pati Valley ending in Vale do Capão: Cachoeirão, Calixto, Castelo Hill and the Rampa Overlook.',
      canonical: '/en/adventures/pati-valley-4-days-capao-way',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Palmeiras',
      duracao: '4 days',
      titulo: 'Pati Valley in 4 days, the Capão way.',
      lead: "Brazil's most beautiful crossing, finishing in the village between the mountains at Vale do Capão.",
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
          titulo: 'Cachoeirão from above + Fenda da Prefeitura + Pati de Baixo',
          corpo: 'Departure from 7:00 am from Palmeiras, an hour by car to the village of Guiné, where we enter the Pati Valley. We take the Aleixos trail and climb for an hour, then another 1.5 hours on flat ground to the Cachoeirão overlook. From there we head for the Fenda da Prefeitura, a steep one-hour descent to the lodging. Extra drinks can be bought at the small shop there — that goes for every day.',
          distancia: '18 km',
          esforco: 'High',
        },
        {
          rotulo: 'Day 2',
          titulo: 'Calixto Waterfall',
          corpo: 'A day in the Calixto, one of the least visited parts of the Pati. We carry day packs only, since we come back to the same lodging. It is around 2.5 hours hopping rocks and cutting through dense forest to Calixto Waterfall. At midday the guide prepares the picnic. On the way back there is a swim at Poço da Árvore.',
          distancia: '15 km',
          esforco: 'Moderate / High',
        },
        {
          rotulo: 'Day 3',
          titulo: 'Castelo Hill + waterfalls',
          corpo: 'Out at 8:00 am with everything, which we leave at the fork. This is the most physically demanding day: we take on a hill standing above 1,200 m, with a climb of around 250 metres in 40 to 60 minutes. At the top of Castelo Hill there are two lookouts and the entrance to Lapinha Cave, one of the rarest caves in the world above 1,000 m. We come down, pick up our things and continue by a different route, taking in Bananeiras, Funis and Lajes (or Altina) waterfalls before reaching the lodging around 6:00 pm.',
          distancia: '—',
          esforco: 'High',
        },
        {
          rotulo: 'Day 4',
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
        { titulo: 'Private package', preco: 'R$ 2,750', nota: 'Minimum of 2 people. Just your group on the crossing.' },
        { titulo: 'Group tour', preco: 'R$ 2,450', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      ...patiCapaoFaqs('en'),
      safetyFaq(
        'en',
        'The Castelo Hill day is the demanding one: 250 metres of climb to get above 1,200 m. The Fenda da Prefeitura section, on day 1, is a steep hour-long descent — and day 1 is already the longest, at 18 km. If you are unsure about your fitness, talk to us before booking.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to cross', 'the Pati Valley?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the crossing together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Valle del Pati 4 días vía Capão',
      description:
        'Travesía de 68 km por el Valle del Pati terminando en el Valle do Capão: Cachoeirão, Calixto, Morro do Castelo y Mirador da Rampa.',
      canonical: '/es/aventuras/valle-del-pati-4-dias-via-capao',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Palmeiras',
      duracao: '4 días',
      titulo: 'Valle del Pati en 4 días, vía Capão.',
      lead: 'La travesía más linda de Brasil, terminando en la villa entre montañas del Valle do Capão.',
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
          titulo: 'Cachoeirão por Arriba + Fenda da Prefeitura + Pati de Baixo',
          corpo: 'Salida a partir de las 7:00 de Palmeiras, 1 hora de auto hasta la villa de Guiné, donde entramos al Valle del Pati. Tomamos el sendero de los Aleixos y subimos por 1 hora, después otra 1:30 h en terreno plano hasta el Mirador del Cachoeirão por Arriba. De ahí seguimos a la Fenda da Prefeitura, una bajada empinada de 1 hora hasta el alojamiento. Se pueden comprar bebidas extra en el pequeño mercado del alojamiento — vale para todos los días.',
          distancia: '18 km',
          esforco: 'Alto',
        },
        {
          rotulo: '2º día',
          titulo: 'Cascada del Calixto',
          corpo: 'Día en el Calixto, una de las áreas menos visitadas del Pati. Vamos solo con mochila de ataque, porque volvemos al mismo alojamiento. Son cerca de 2:30 h saltando piedras y atravesando montes densos hasta la Cascada del Calixto. Al mediodía el guía prepara el picnic. En la vuelta se puede uno refrescar en el Poço da Árvore.',
          distancia: '15 km',
          esforco: 'Moderado / Alto',
        },
        {
          rotulo: '3º día',
          titulo: 'Morro do Castelo + cascadas',
          corpo: 'Salida a las 8:00 con todos los ítems, que quedan en la bifurcación. Es el día de esfuerzo más intenso: atacamos un morro a más de 1.200 m de altitud, con una subida de cerca de 250 metros en 40 a 60 minutos. En la cima del Morro do Castelo hay dos miradores y la entrada de la Gruta da Lapinha, una de las grutas más raras del mundo por encima de los 1.000 m. Bajamos, tomamos los ítems y seguimos por otro camino, conociendo las Cascadas das Bananeiras, dos Funis y das Lajes (o Altina) antes de llegar al alojamiento cerca de las 18:00.',
          distancia: '—',
          esforco: 'Alto',
        },
        {
          rotulo: '4º día',
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
        { titulo: 'Paquete privado', preco: 'R$ 2.750', nota: 'Mínimo de 2 personas. Solo tu grupo en la travesía.' },
        { titulo: 'En grupo', preco: 'R$ 2.450', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      ...patiCapaoFaqs('es'),
      safetyFaq(
        'es',
        'El día del Morro do Castelo es el más exigente: 250 metros de subida para pasar los 1.200 m. El tramo de la Fenda da Prefeitura, en el 1º día, es una bajada empinada de 1 hora — y el 1º día ya es el más largo, con 18 km. Quien tenga dudas sobre su preparación debería hablar con atención antes de cerrar.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para atravesar', 'el Valle del Pati?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la travesía con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
