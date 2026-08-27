/**
 * Conteúdo da página da Cachoeira da Fumacinha, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-da-fumacinha e EN de
 * mamut.agency/en/aventuras/fumacinha-waterfall. ES é tradução feita aqui.
 *
 * As fotos são verticais (1920×2560) — é o formato em que a operadora
 * fotografou o cânion, e o que faz sentido para paredões de 100 metros.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const FUMACINHA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/fumacinha/hero.jpg', position: '50% 45%' },
  galeria: [
    { src: '/img/adventures/fumacinha/1.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/fumacinha/2.jpg', width: 1920, height: 2560 },
    { src: '/img/adventures/fumacinha/3.jpg', width: 1920, height: 2560 },
  ],
  stats: [
    ['18 km', '/svg/_icons/icon_03_montain.svg'],
    ['260 km', '/svg/_icons/icon_09_location.svg'],
    ['100 m', '/svg/_icons/icon_01_3-bars.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['5h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Moderado / Pesado', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 550,
};

export const FUMACINHA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira da Fumacinha',
      description:
        'Dezoito quilômetros no leito do rio entre cânions de 100 metros, em Ibicoara. O roteiro mais técnico de um dia da Chapada Diamantina.',
      canonical: '/pt/aventuras/cachoeira-da-fumacinha',
    },
    hero: {
      nivel: 'Moderado / Pesado',
      origem: 'Origem: Ibicoara',
      duracao: '1 dia',
      titulo: 'Cachoeira da Fumacinha.',
      lead: 'Dezoito quilômetros dentro do rio, entre paredões de cem metros que vão se fechando.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Altura dos cânions', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira da Fumacinha.',
      paragrafos: [
        'A Fumacinha é o roteiro de um dia mais técnico que operamos. Grande parte dos 18 quilômetros é feita dentro do leito do rio, saltando entre pedras molhadas, com trechos em que é preciso usar equipamento de segurança para passar.',
        'O cenário compensa: o cânion vai estreitando e as paredes chegam a 100 metros de altura de cada lado. No caminho o grupo passa pela Cachoeira do Encontro, onde dois cursos d’água se juntam.',
        'A dificuldade não está só na distância — está no piso. É trilha para quem já caminhou antes e está confortável com terreno irregular e escorregadio por horas seguidas.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 5h00, com tolerância de 30 minutos. O horário é cedo porque o dia é longo e o deslocamento também: são cerca de 260 km e 3 horas de carro até Ibicoara.',
        'De Ibicoara, mais 1 hora até o início da trilha, já em estrada de terra.',
        'A caminhada entra logo no leito do rio. O grupo segue rio acima saltando pedras, com o cânion se fechando aos poucos e as paredes ganhando altura.',
        'Passagem pela Cachoeira do Encontro, onde dois cursos d’água se juntam — parada boa para respirar antes do trecho final.',
        'Nos pontos mais expostos usamos equipamento de segurança para a passagem, um de cada vez, com o guia posicionado.',
        'Chegada à Fumacinha, banho e piquenique. A volta é pelo mesmo caminho e o retorno a Lençóis é já à noite.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 715', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 550', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
          ['Água (2L por pessoa)', 'Bota de caminhada com boa aderência', 'Meias extras', 'Roupas leves', 'Roupa de banho'],
          ['Boné ou chapéu', 'Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Lanterna de cabeça'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Toalha', 'Muda de roupa seca para a volta']],
        note: 'Calçado é o item crítico deste roteiro: quase toda a trilha é em pedra molhada. Lanterna é obrigatória porque a saída é antes do amanhecer e a volta pode terminar no escuro.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Equipamento de segurança para as passagens técnicas', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Transfer (opcional)', 'Piquenique (opcional)', 'Equipamento pessoal', 'Taxa de acesso', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'Não recomendamos fazer a Fumacinha em bate-volta de Lençóis: são 3 horas de carro em cada ponta somadas a um dia inteiro de trilha técnica. Se puder, durma em Ibicoara na véspera. Os trechos expostos do cânion são vencidos com equipamento de segurança, um participante de cada vez.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para entrar', 'no cânion?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Fumacinha Falls',
      description:
        'Eighteen kilometres up the riverbed between 100-metre canyon walls, in Ibicoara. The most technical day trip in the Chapada Diamantina.',
      canonical: '/en/adventures/fumacinha-waterfall',
    },
    hero: {
      nivel: 'Moderate / Heavy',
      origem: 'From: Ibicoara',
      duracao: '1 day',
      titulo: 'Fumacinha Falls.',
      lead: 'Eighteen kilometres inside the river, between hundred-metre walls that keep closing in.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Canyon walls', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Fumacinha Falls.',
      paragrafos: [
        'Fumacinha is the most technical day trip we run. Much of the 18 kilometres is walked inside the riverbed, hopping between wet rocks, with sections where safety equipment is needed to get through.',
        'The setting makes up for it: the canyon narrows as you go and the walls reach 100 metres on either side. On the way the group passes Encontro Waterfall, where two watercourses meet.',
        'The difficulty is not only the distance — it is the ground. This is a trail for people who have walked before and are comfortable on uneven, slippery terrain for hours at a time.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 5:00 am, with 30 minutes of tolerance. The early start is because both the day and the drive are long: around 260 km and 3 hours by car to Ibicoara.',
        'From Ibicoara, another hour to the trailhead, now on dirt road.',
        'The walk drops into the riverbed early on. The group heads upstream hopping across rocks, with the canyon gradually closing in and the walls gaining height.',
        'Past Encontro Waterfall, where two watercourses meet — a good stop to catch your breath before the final stretch.',
        'At the most exposed points we use safety equipment for the crossing, one at a time, with the guide in position.',
        'Arrival at Fumacinha, swim and picnic. The return is by the same route, and you get back to Lençóis after dark.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 715', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 550', nota: 'From 2 to 7 people. You join an open group.' },
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
          ['Water (2L per person)', 'Hiking boots with good grip', 'Spare socks', 'Light clothing', 'Swimwear'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Head torch'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Towel', 'Dry change of clothes for the drive back']],
        note: 'Footwear is the critical item here: almost the whole trail is on wet rock. A head torch is mandatory because you leave before dawn and may finish in the dark.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'Safety equipment for the technical sections', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Transfer (optional)', 'Picnic (optional)', 'Personal gear', 'Access fee', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'We do not recommend doing Fumacinha as a same-day round trip from Lençóis: that is 3 hours of driving at each end on top of a full day of technical trail. If you can, sleep in Ibicoara the night before. The exposed sections of the canyon are passed with safety equipment, one participant at a time.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to walk', 'into the canyon?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Cascada da Fumacinha',
      description:
        'Dieciocho kilómetros por el lecho del río entre cañones de 100 metros, en Ibicoara. El recorrido de un día más técnico de la Chapada Diamantina.',
      canonical: '/es/aventuras/cascada-da-fumacinha',
    },
    hero: {
      nivel: 'Moderado / Pesado',
      origem: 'Origen: Ibicoara',
      duracao: '1 día',
      titulo: 'Cascada da Fumacinha.',
      lead: 'Dieciocho kilómetros dentro del río, entre paredones de cien metros que se van cerrando.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Altura de los cañones', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada da Fumacinha.',
      paragrafos: [
        'La Fumacinha es el recorrido de un día más técnico que operamos. Gran parte de los 18 kilómetros se hace dentro del lecho del río, saltando entre piedras mojadas, con tramos en los que hay que usar equipo de seguridad para pasar.',
        'El escenario compensa: el cañón se va estrechando y las paredes llegan a 100 metros de altura de cada lado. En el camino el grupo pasa por la Cascada do Encontro, donde se juntan dos cursos de agua.',
        'La dificultad no está solo en la distancia — está en el piso. Es un sendero para quien ya caminó antes y está cómodo en terreno irregular y resbaladizo durante horas seguidas.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 5:00, con tolerancia de 30 minutos. El horario es temprano porque el día es largo y el traslado también: unos 260 km y 3 horas de auto hasta Ibicoara.',
        'Desde Ibicoara, otra hora hasta el inicio del sendero, ya por camino de tierra.',
        'La caminata entra enseguida en el lecho del río. El grupo sigue río arriba saltando piedras, con el cañón cerrándose de a poco y las paredes ganando altura.',
        'Paso por la Cascada do Encontro, donde se juntan dos cursos de agua — buena parada para respirar antes del tramo final.',
        'En los puntos más expuestos usamos equipo de seguridad para el paso, de a uno, con el guía posicionado.',
        'Llegada a la Fumacinha, baño y picnic. La vuelta es por el mismo camino y el regreso a Lençóis ya es de noche.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 715', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 550', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (2L por persona)', 'Botas de trekking con buena adherencia', 'Medias extra', 'Ropa liviana', 'Ropa de baño'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Linterna frontal'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Toalla', 'Muda de ropa seca para la vuelta']],
        note: 'El calzado es el ítem crítico de este recorrido: casi todo el sendero es sobre piedra mojada. La linterna es obligatoria porque la salida es antes del amanecer y la vuelta puede terminar de noche.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Equipo de seguridad para los tramos técnicos', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Traslado (opcional)', 'Picnic (opcional)', 'Equipo personal', 'Tasa de acceso', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'No recomendamos hacer la Fumacinha ida y vuelta en el día desde Lençóis: son 3 horas de auto de cada lado sumadas a un día entero de sendero técnico. Si podés, dormí en Ibicoara la víspera. Los tramos expuestos del cañón se pasan con equipo de seguridad, de a un participante por vez.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para entrar', 'en el cañón?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
