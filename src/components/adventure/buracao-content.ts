/**
 * Conteúdo da página da Cachoeira do Buracão, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-buracao e EN de
 * mamut.agency/en/aventuras/buracao-waterfall. ES é tradução feita aqui.
 *
 * ⚠️ Os preços divergem entre as duas páginas da operadora: a portuguesa diz
 * R$ 820 (privado) e R$ 750 (grupo), a inglesa R$ 900 e R$ 790. Mantive os
 * valores em português, que são os já registrados no hub de aventuras.
 *
 * ⚠️ A página também se contradiz sobre a alimentação: o cartão de preços lista
 * "Almoço (opcional)" como não incluso, mas a aba "O que está incluso" traz
 * "Alimentação". Segui o cartão, que é o que o cliente lê primeiro.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const BURACAO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/buracao/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/buracao/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/buracao/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/buracao/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['6 km', '/svg/_icons/icon_03_montain.svg'],
    ['250 km', '/svg/_icons/icon_09_location.svg'],
    ['80 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['6h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 750,
};

export const BURACAO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Buracão',
      description:
        'Mais de 80 metros de queda dentro de um cânion, com poço de águas escuras. Trilha de 6 km no Parque Natural Municipal do Espalhado, em Ibicoara.',
      canonical: '/pt/aventuras/cachoeira-do-buracao',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Ibicoara',
      duracao: '1 dia',
      titulo: 'Cachoeira do Buracão.',
      lead: 'Oitenta metros de queda dentro de um cânion — o último trecho se faz nadando.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura da queda', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Buracão.',
      paragrafos: [
        'Uma das cachoeiras mais impressionantes da Chapada Diamantina: mais de 80 metros de queda caindo dentro de um cânion fechado, num poço de águas escuras próprio para nadar.',
        'O que a torna diferente é a chegada. Na borda do cânion o grupo desce por uma escada de madeira até o rio e, dali em diante, o caminho é feito nadando ou escalando pelas pedras até a cachoeira aparecer de frente.',
        'No atrativo dá para descer de rapel até a base da queda — atividade adicional, não inclusa. É operada com equipamento próprio e não tem histórico de imprevistos.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída do centro de Lençóis às 6h00, com tolerância de 10 minutos, rumo a Ibicoara — onde fica a entrada do Parque Natural Municipal do Espalhado. São cerca de 250 km e 3 horas de estrada.',
        'Chegada a Ibicoara e preparação para a trilha. São 3 km de caminhada até o topo da cachoeira, com alguns trechos íngremes e escadarias, mas em terreno relativamente tranquilo.',
        'No caminho, parada para refrescar na Cachoeira do Recanto Verde e na Cachoeira das Orquídeas.',
        'No topo, a vista abre sobre o cânion. Quem quiser desce de rapel até a base — opcional, R$ 220.',
        'Na borda do cânion o grupo desce por uma escada de madeira até o rio. A partir daí segue nadando ou escalando pelas pedras até chegar à Cachoeira do Buracão, onde dá para nadar no poço.',
        'Volta pelo mesmo caminho até a entrada do parque, com almoço típico da região preparado por moradores locais. Retorno a Lençóis por volta das 20h00.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 820', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 750', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
          ['Água (1,5L por pessoa)', 'Tênis ou bota de caminhada', 'Roupas leves', 'Roupa de banho', 'Boné ou chapéu'],
          ['Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences', 'Meias extras'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Toalha'], ['Lanche ou fruta', 'Saco estanque para a câmera', 'Muda de roupa seca']],
        note: 'O trecho final é feito na água: leve a câmera em saco estanque e conte com sair molhado da cachoeira.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia local e bilíngue', 'Taxa de acesso ao parque', 'Seguro aventura', 'Colete salva-vidas', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Almoço (opcional)', 'Rapel (opcional, R$ 220)', 'Equipamento pessoal', 'Bebidas extras', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'O último trecho até a cachoeira é feito nadando ou escalando pelas pedras do rio, e a descida ao leito é por escada de madeira. O colete salva-vidas é fornecido e de uso obrigatório na travessia. Quem não se sente confortável na água pode aguardar no topo do cânion, de onde a vista já compensa a caminhada.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para nadar', 'até a cachoeira?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Buracão Waterfall',
      description:
        'Over 80 metres of falling water inside a canyon, into a dark pool. A 6 km trail in the Espalhado Municipal Natural Park, in Ibicoara.',
      canonical: '/en/adventures/buracao-waterfall',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'From: Ibicoara',
      duracao: '1 day',
      titulo: 'Buracão Waterfall.',
      lead: 'Eighty metres of falling water inside a canyon — you swim the last stretch to reach it.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Height of the fall', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Buracão Waterfall.',
      paragrafos: [
        'One of the most impressive waterfalls in the Chapada Diamantina: over 80 metres of water dropping inside a closed canyon, into a dark pool that is perfect for swimming.',
        'What sets it apart is the arrival. At the canyon rim the group climbs down a wooden staircase to the river and, from there on, you carry on swimming or scrambling over the rocks until the waterfall opens up in front of you.',
        'At the site you can abseil down to the base of the fall — an additional activity, not included. It is run with our own equipment and has no history of incidents.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from the centre of Lençóis at 6:00 am, with 10 minutes of tolerance, heading to Ibicoara — where the entrance to the Espalhado Municipal Natural Park is. That is around 250 km and 3 hours on the road.',
        'Arrival in Ibicoara and preparation for the trail. It is a 3 km walk to the top of the waterfall, with some steep sections and stairs, but on relatively easy ground.',
        'Along the way, a stop to cool off at Recanto Verde Waterfall and Orquídeas Waterfall.',
        'At the top, the view opens over the canyon. Anyone who wants to can abseil down to the base — optional, R$ 220.',
        'At the canyon rim the group climbs down a wooden staircase to the river. From there you swim or scramble over the rocks to reach Buracão Waterfall, where you can swim in the pool.',
        'Return along the same route to the park entrance, with a typical regional lunch prepared by local residents. Back in Lençóis around 8:00 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 820', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 750', nota: 'From 2 to 7 people. You join an open group.' },
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
          ['Water (1.5L per person)', 'Trainers or hiking boots', 'Light clothing', 'Swimwear', 'Cap or hat'],
          ['Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your things', 'Spare socks'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Towel'], ['Snack or fruit', 'Dry bag for the camera', 'Dry change of clothes']],
        note: 'The final stretch is done in the water: carry the camera in a dry bag and expect to leave the waterfall wet.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Local bilingual guide', 'Park access fee', 'Adventure insurance', 'Life jacket', 'First-aid kit'],
        excluded: ['Anything not listed', 'Lunch (optional)', 'Abseiling (optional, R$ 220)', 'Personal gear', 'Extra drinks', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'The last stretch to the waterfall is done swimming or scrambling over the river rocks, and you reach the riverbed down a wooden staircase. A life jacket is provided and mandatory for the crossing. Anyone who is not comfortable in the water can wait at the top of the canyon, where the view alone repays the walk.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to swim', 'to the waterfall?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada do Buracão',
      description:
        'Más de 80 metros de caída dentro de un cañón, con pozo de aguas oscuras. Sendero de 6 km en el Parque Natural Municipal do Espalhado, en Ibicoara.',
      canonical: '/es/aventuras/cascada-do-buracao',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origen: Ibicoara',
      duracao: '1 día',
      titulo: 'Cascada do Buracão.',
      lead: 'Ochenta metros de caída dentro de un cañón — el último tramo se hace nadando.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura de la caída', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada do Buracão.',
      paragrafos: [
        'Una de las cascadas más impresionantes de la Chapada Diamantina: más de 80 metros de caída dentro de un cañón cerrado, en un pozo de aguas oscuras ideal para nadar.',
        'Lo que la hace distinta es la llegada. En el borde del cañón el grupo baja por una escalera de madera hasta el río y, de ahí en adelante, el camino se hace nadando o trepando por las piedras hasta que la cascada aparece de frente.',
        'En el atractivo se puede descender en rappel hasta la base de la caída — actividad adicional, no incluida. Se opera con equipo propio y no tiene historial de imprevistos.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida del centro de Lençóis a las 6:00, con tolerancia de 10 minutos, rumbo a Ibicoara — donde está la entrada del Parque Natural Municipal do Espalhado. Son unos 250 km y 3 horas de ruta.',
        'Llegada a Ibicoara y preparación para el sendero. Son 3 km de caminata hasta la parte alta de la cascada, con algunos tramos empinados y escaleras, pero en terreno relativamente tranquilo.',
        'En el camino, parada para refrescarse en la Cascada do Recanto Verde y en la Cascada das Orquídeas.',
        'Arriba, la vista se abre sobre el cañón. Quien quiera baja en rappel hasta la base — opcional, R$ 220.',
        'En el borde del cañón el grupo baja por una escalera de madera hasta el río. Desde ahí se sigue nadando o trepando por las piedras hasta llegar a la Cascada do Buracão, donde se puede nadar en el pozo.',
        'Vuelta por el mismo camino hasta la entrada del parque, con almuerzo típico de la región preparado por vecinos locales. Regreso a Lençóis cerca de las 20:00.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 820', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 750', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (1,5L por persona)', 'Zapatillas o botas de trekking', 'Ropa liviana', 'Ropa de baño', 'Gorra o sombrero'],
          ['Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias', 'Medias extra'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Toalla'], ['Snack o fruta', 'Bolsa estanca para la cámara', 'Muda de ropa seca']],
        note: 'El tramo final se hace en el agua: llevá la cámara en bolsa estanca y contá con salir mojado de la cascada.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía local y bilingüe', 'Tasa de acceso al parque', 'Seguro de aventura', 'Chaleco salvavidas', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Almuerzo (opcional)', 'Rappel (opcional, R$ 220)', 'Equipo personal', 'Bebidas extra', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'El último tramo hasta la cascada se hace nadando o trepando por las piedras del río, y la bajada al lecho es por escalera de madera. El chaleco salvavidas se provee y es de uso obligatorio en el cruce. Quien no se sienta cómodo en el agua puede esperar arriba del cañón, desde donde la vista ya compensa la caminata.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para nadar', 'hasta la cascada?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
