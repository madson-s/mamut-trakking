/**
 * Conteúdo da página da Cachoeira do Herculano, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-herculano. A operadora não tem
 * versão em inglês nem em espanhol desta página — **EN e ES são tradução feita
 * neste repositório** e precisam de revisão antes de valerem como material de
 * venda.
 *
 * ⚠️ A página se contradiz sobre o deslocamento: a faixa do topo diz 350 km, o
 * itinerário diz "aproximadamente 140 km" por trecho e depois "250 km (ida e
 * volta)". Adotei os 140 km do itinerário, que é a única medida por trecho — e
 * a que fecha com as 3 horas de estrada declaradas.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const HERCULANO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/herculano/hero.jpg', position: '50% 45%' },
  galeria: [
    { src: '/img/adventures/herculano/1.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/herculano/2.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/herculano/3.jpg', width: 1920, height: 2560 },
  ],
  stats: [
    ['6 km', '/svg/_icons/icon_03_montain.svg'],
    ['140 km', '/svg/_icons/icon_09_location.svg'],
    ['60 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['6h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 600,
};

export const HERCULANO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Herculano',
      description:
        'Sessenta metros de queda e um poço para banho em Itaetê, longe da rota turística. Trilha de 6 km por mata fechada e riachos.',
      canonical: '/pt/aventuras/cachoeira-do-herculano',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Itaetê',
      duracao: '1 dia',
      titulo: 'Cachoeira do Herculano.',
      lead: 'Sessenta metros de queda em Itaetê, do outro lado da Chapada — e quase sempre só o seu grupo.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura da queda', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Herculano.',
      paragrafos: [
        'Uma queda de cerca de 60 metros em Itaetê, município vizinho a Lençóis, com um poço largo e raso o bastante para ficar dentro d’água sem pressa.',
        'É um roteiro fora do circuito de sempre. A distância de Lençóis segura o volume de gente, e o comum é o grupo ter a cachoeira só para si.',
        'A trilha tem cerca de 6 km ida e volta e leva umas 2 horas, atravessando mata fechada e riachos, com trechos irregulares e aclives que justificam o nível moderado.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída do centro de Lençóis às 6h00, com tolerância de 30 minutos, em direção a Itaetê. São cerca de 140 km e 3 horas de estrada.',
        'Chegando a Itaetê, parada breve para um café da manhã — não incluso — e para preparar a trilha.',
        'A caminhada até a cachoeira leva cerca de 2 horas, passando por trechos de mata fechada e riachos.',
        'Chegada à Cachoeira do Herculano: cerca de 60 metros de queda formando um poço bom para banho, com tempo para ficar.',
        'Volta pela mesma trilha até o ponto de partida em Itaetê e retorno a Lençóis no fim da tarde, com chegada prevista por volta das 18h00.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 650', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 600', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório compromete a segurança do grupo e inviabiliza a participação.',
        requiredColumns: [
          ['Água (1,5L por pessoa)', 'Tênis ou bota de caminhada', 'Meias extras', 'Roupas leves', 'Roupa de banho'],
          ['Boné ou chapéu', 'Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Repelente'], ['Lanche ou fruta', 'Toalha', 'Dinheiro para o café da manhã']],
        note: 'A saída é às 6h00 e o café da manhã fica por sua conta na parada em Itaetê — leve algum trocado.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia local com treinamento APH e bilíngue', 'Taxa de acesso', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Café da manhã na parada', 'Piquenique (opcional)', 'Equipamento pessoal', 'Bebidas extras', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'A trilha tem trechos irregulares e aclives, com travessia de riachos que ficam escorregadios depois de chuva. Calçado com boa aderência e repelente são o que mais faz diferença aqui — é mata fechada boa parte do caminho.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para conhecer', 'o outro lado da Chapada?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Herculano Waterfall',
      description:
        'Sixty metres of falling water and a pool to swim in, in Itaetê, off the tourist route. A 6 km trail through dense forest and streams.',
      canonical: '/en/adventures/herculano-waterfall',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Itaetê',
      duracao: '1 day',
      titulo: 'Herculano Waterfall.',
      lead: 'Sixty metres of falling water in Itaetê, on the far side of the Chapada — and usually just your group.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Height of the fall', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Herculano Waterfall.',
      paragrafos: [
        'A drop of around 60 metres in Itaetê, a town neighbouring Lençóis, with a pool wide and shallow enough to stay in the water without hurrying.',
        'This is a trip off the usual circuit. The distance from Lençóis keeps the numbers down, and more often than not the group has the waterfall to itself.',
        'The trail is around 6 km there and back and takes about 2 hours, crossing dense forest and streams, with uneven sections and climbs that justify the moderate rating.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from the centre of Lençóis at 6:00 am, with 30 minutes of tolerance, heading for Itaetê. That is around 140 km and 3 hours on the road.',
        'On arrival in Itaetê, a short stop for breakfast — not included — and to get ready for the trail.',
        'The walk to the waterfall takes about 2 hours, through stretches of dense forest and streams.',
        'Arrival at Herculano Waterfall: around 60 metres of falling water into a pool that is good for swimming, with time to stay.',
        'Return along the same trail to the starting point in Itaetê and back to Lençóis in the late afternoon, arriving around 6:00 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 650', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 600', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'Items marked * are mandatory. Missing any of them compromises the safety of the group and makes participation unfeasible.',
        requiredColumns: [
          ['Water (1.5L per person)', 'Trainers or hiking boots', 'Spare socks', 'Light clothing', 'Swimwear'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your things'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Insect repellent'], ['Snack or fruit', 'Towel', 'Cash for breakfast']],
        note: 'You leave at 6:00 am and breakfast is on you at the stop in Itaetê — bring some cash.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Local guide with first-aid training, bilingual', 'Access fee', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Breakfast at the stop', 'Picnic (optional)', 'Personal gear', 'Extra drinks', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'The trail has uneven sections and climbs, with stream crossings that get slippery after rain. Footwear with good grip and insect repellent make the biggest difference here — much of the way is through dense forest.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to see', 'the other side of the Chapada?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada do Herculano',
      description:
        'Sesenta metros de caída y un pozo para bañarse en Itaetê, lejos de la ruta turística. Sendero de 6 km por monte cerrado y arroyos.',
      canonical: '/es/aventuras/cascada-do-herculano',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Itaetê',
      duracao: '1 día',
      titulo: 'Cascada do Herculano.',
      lead: 'Sesenta metros de caída en Itaetê, del otro lado de la Chapada — y casi siempre solo tu grupo.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura de la caída', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada do Herculano.',
      paragrafos: [
        'Una caída de cerca de 60 metros en Itaetê, municipio vecino a Lençóis, con un pozo ancho y poco profundo como para quedarse en el agua sin apuro.',
        'Es un recorrido fuera del circuito de siempre. La distancia desde Lençóis contiene el volumen de gente, y lo común es que el grupo tenga la cascada para sí solo.',
        'El sendero tiene cerca de 6 km ida y vuelta y lleva unas 2 horas, atravesando monte cerrado y arroyos, con tramos irregulares y subidas que justifican el nivel moderado.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida del centro de Lençóis a las 6:00, con tolerancia de 30 minutos, en dirección a Itaetê. Son unos 140 km y 3 horas de ruta.',
        'Al llegar a Itaetê, parada breve para un desayuno — no incluido — y para preparar el sendero.',
        'La caminata hasta la cascada lleva cerca de 2 horas, pasando por tramos de monte cerrado y arroyos.',
        'Llegada a la Cascada do Herculano: cerca de 60 metros de caída formando un pozo bueno para bañarse, con tiempo para quedarse.',
        'Vuelta por el mismo sendero hasta el punto de partida en Itaetê y regreso a Lençóis al final de la tarde, con llegada prevista cerca de las 18:00.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 650', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 600', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio compromete la seguridad del grupo e impide la participación.',
        requiredColumns: [
          ['Agua (1,5L por persona)', 'Zapatillas o botas de trekking', 'Medias extra', 'Ropa liviana', 'Ropa de baño'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Repelente'], ['Snack o fruta', 'Toalla', 'Efectivo para el desayuno']],
        note: 'La salida es a las 6:00 y el desayuno corre por tu cuenta en la parada en Itaetê — llevá algo de efectivo.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía local con formación en primeros auxilios, bilingüe', 'Tasa de acceso', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Desayuno en la parada', 'Picnic (opcional)', 'Equipo personal', 'Bebidas extra', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'El sendero tiene tramos irregulares y subidas, con cruces de arroyos que quedan resbaladizos después de la lluvia. Calzado con buena adherencia y repelente son lo que más diferencia hace acá — es monte cerrado buena parte del camino.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para conocer', 'el otro lado de la Chapada?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
