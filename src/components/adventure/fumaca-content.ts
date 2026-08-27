/**
 * Conteúdo da página da Cachoeira da Fumaça, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-da-fumaca e EN de
 * mamut.agency/en/aventuras/fumaca-waterfall. ES é tradução feita aqui.
 *
 * Pagamento, cancelamento e o corpo do bloco de segurança vêm de
 * `day-tour-legal` — são regra da operadora, iguais em todos os passeios.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const FUMACA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/fumaca/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/fumaca/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/fumaca/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/fumaca/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['12 km', '/svg/_icons/icon_03_montain.svg'],
    ['60 km', '/svg/_icons/icon_09_location.svg'],
    ['380 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Alto', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 320,
};

export const FUMACA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira da Fumaça',
      description:
        'A maior queda livre do Brasil: 380 metros de água que viram névoa antes de tocar o chão. Trilha de 12 km pelo Vale do Capão até o mirante.',
      canonical: '/pt/aventuras/cachoeira-da-fumaca',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origem: Vale do Capão',
      duracao: '1 dia',
      titulo: 'Cachoeira da Fumaça.',
      lead: 'Trezentos e oitenta metros de queda livre — a água vira fumaça antes de chegar embaixo.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura da queda', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira da Fumaça.',
      paragrafos: [
        'Com 380 metros, é a maior queda livre do Brasil. O volume de água é pequeno diante da altura: o vento pega a lâmina no meio do caminho e a transforma em névoa — daí o nome. Em boa parte do ano a água não chega ao chão.',
        'A visita é feita por cima. Do mirante, deitado de bruços na borda, você vê o abismo inteiro se abrir e o vale do Capão ao fundo. São dois mirantes, ambos com cerca de 400 metros de exposição.',
        'A trilha começa com a parte mais dura: cerca de 1 hora de subida em 2 km de pedra até o platô. Depois disso o terreno fica plano e a caminhada é tranquila até a borda.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 8h00 rumo ao Vale do Capão — são cerca de 60 km de carro, com trechos de estrada de terra.',
        'A trilha começa no Capão. A primeira hora é a mais exigente: 2 km de subida em piso de pedra, ganhando altura rápido até alcançar o platô.',
        'No alto o terreno abre e fica plano. A caminhada segue por campo rupestre, entre sempre-vivas e afloramentos de arenito, até a borda do cânion.',
        'Chegada aos mirantes. Deitar na borda para ver a queda de 380 metros é a razão da caminhada — dá para passar um bom tempo ali antes do piquenique.',
        'A volta é pelo mesmo caminho, agora com a descida de pedra no fim. Retorno a Lençóis no fim da tarde.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 420', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 320', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
          ['Água (2L por pessoa)', 'Tênis ou bota de caminhada', 'Meias extras', 'Roupas leves', 'Boné ou chapéu'],
          ['Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences', 'Lanterna de cabeça'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Roupa de banho', 'Câmera']],
        note: 'Não há sombra no platô e o sol bate direto durante quase toda a travessia. Chapéu e protetor não são opcionais na prática.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Transfer (opcional)', 'Piquenique (opcional)', 'Equipamento pessoal', 'Taxa de acesso', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'O mirante é uma borda de cânion sem qualquer proteção, com cerca de 400 metros de exposição. A aproximação é feita deitado, um de cada vez, sempre com o guia. Quem tem vertigem consegue fazer a trilha e apreciar o vale sem chegar à borda.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para ver', 'a água virar fumaça?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Fumaça Waterfall',
      description:
        "Brazil's tallest free fall: 380 metres of water that turns to mist before reaching the ground. A 12 km trail through Vale do Capão to the lookout.",
      canonical: '/en/adventures/fumaca-waterfall',
    },
    hero: {
      nivel: 'Moderate / High',
      origem: 'From: Vale do Capão',
      duracao: '1 day',
      titulo: 'Fumaça Waterfall.',
      lead: 'Three hundred and eighty metres of free fall — the water turns to smoke before it lands.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Height of the fall', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Fumaça Waterfall.',
      paragrafos: [
        "At 380 metres, it is the tallest free fall in Brazil. The volume of water is small against that height: the wind catches the sheet halfway down and turns it to mist — hence the name, fumaça, smoke. For much of the year the water never reaches the ground.",
        'You visit it from above. Lying flat on the edge of the lookout, the whole abyss opens beneath you with the Capão valley beyond. There are two lookouts, both with around 400 metres of exposure.',
        'The trail starts with the hardest part: about 1 hour climbing 2 km of rock up to the plateau. After that the ground flattens out and the walk to the rim is easy.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 8:00 am towards Vale do Capão — around 60 km by car, with stretches of dirt road.',
        'The trail starts in Capão. The first hour is the demanding one: 2 km climbing over rock, gaining height quickly until you reach the plateau.',
        'Up top the terrain opens out and levels off. The walk continues across rocky grassland, among everlasting flowers and sandstone outcrops, to the canyon rim.',
        'Arrival at the lookouts. Lying down on the edge to watch the 380-metre drop is the reason for the walk — there is time to stay a while before the picnic.',
        'The return is by the same route, with the rock descent at the end. Back in Lençóis in the late afternoon.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 420', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 320', nota: 'From 2 to 7 people. You join an open group.' },
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
          ['Water (2L per person)', 'Trainers or hiking boots', 'Spare socks', 'Light clothing', 'Cap or hat'],
          ['Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your things', 'Head torch'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Swimwear', 'Camera']],
        note: 'There is no shade on the plateau and the sun hits directly for most of the crossing. Hat and sunscreen are not optional in practice.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Transfer (optional)', 'Picnic (optional)', 'Personal gear', 'Access fee', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'The lookout is an unprotected canyon edge with around 400 metres of exposure. You approach it lying down, one at a time, always with the guide. Anyone with vertigo can still do the trail and enjoy the valley without going to the edge.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to watch', 'water turn to smoke?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada da Fumaça',
      description:
        'La mayor caída libre de Brasil: 380 metros de agua que se vuelve niebla antes de tocar el suelo. Sendero de 12 km por el Valle do Capão hasta el mirador.',
      canonical: '/es/aventuras/cascada-da-fumaca',
    },
    hero: {
      nivel: 'Moderado / Alto',
      origem: 'Origen: Valle do Capão',
      duracao: '1 día',
      titulo: 'Cascada da Fumaça.',
      lead: 'Trescientos ochenta metros de caída libre — el agua se vuelve humo antes de llegar abajo.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura de la caída', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada da Fumaça.',
      paragrafos: [
        'Con 380 metros, es la mayor caída libre de Brasil. El volumen de agua es pequeño frente a la altura: el viento toma la lámina a mitad de camino y la convierte en niebla — de ahí el nombre, fumaça, humo. Buena parte del año el agua no llega al suelo.',
        'La visita se hace desde arriba. Del mirador, acostado boca abajo en el borde, se abre el abismo entero con el valle do Capão al fondo. Son dos miradores, ambos con unos 400 metros de exposición.',
        'El sendero empieza con la parte más dura: cerca de 1 hora de subida en 2 km de piedra hasta la meseta. Después el terreno se aplana y la caminata hasta el borde es tranquila.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 8:00 rumbo al Valle do Capão — unos 60 km en auto, con tramos de camino de tierra.',
        'El sendero empieza en Capão. La primera hora es la más exigente: 2 km de subida sobre piedra, ganando altura rápido hasta alcanzar la meseta.',
        'Arriba el terreno se abre y se aplana. La caminata sigue por campo rupestre, entre siemprevivas y afloramientos de arenisca, hasta el borde del cañón.',
        'Llegada a los miradores. Acostarse en el borde para ver la caída de 380 metros es la razón de la caminata — hay tiempo para quedarse un buen rato antes del picnic.',
        'La vuelta es por el mismo camino, ahora con la bajada de piedra al final. Regreso a Lençóis al final de la tarde.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 420', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 320', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (2L por persona)', 'Zapatillas o botas de trekking', 'Medias extra', 'Ropa liviana', 'Gorra o sombrero'],
          ['Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias', 'Linterna frontal'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Ropa de baño', 'Cámara']],
        note: 'No hay sombra en la meseta y el sol pega directo casi toda la travesía. Sombrero y protector no son opcionales en la práctica.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Traslado (opcional)', 'Picnic (opcional)', 'Equipo personal', 'Tasa de acceso', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'El mirador es un borde de cañón sin ninguna protección, con unos 400 metros de exposición. La aproximación se hace acostado, de a uno, siempre con el guía. Quien tiene vértigo puede hacer el sendero y disfrutar el valle sin llegar al borde.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para ver', 'el agua volverse humo?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
