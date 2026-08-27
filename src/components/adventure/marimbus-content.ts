/**
 * Conteúdo da página do Pantanal Marimbus, por idioma.
 *
 * PT vem de mamut.agency/aventuras/pantanal-marimbus e EN de
 * mamut.agency/en/aventuras/marimbus-swamp. ES é tradução feita aqui.
 *
 * É o único roteiro de um dia que combina caminhada e canoa — daí a faixa de
 * números trazer as duas distâncias separadas.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const MARIMBUS_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/marimbus/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/marimbus/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/marimbus/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/marimbus/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['8 km', '/svg/_icons/icon_03_montain.svg'],
    ['9 km', '/svg/_icons/icon_09_location.svg'],
    ['20 km', '/svg/_icons/icon_09_location.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve / Moderado', '/svg/_icons/icon_03_montain.svg'],
  ],
  fromPrice: 465,
};

export const MARIMBUS_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Pantanal Marimbus',
      description:
        'O pantanal da Chapada Diamantina: 9 km de canoa pelos rios Santo Antônio e Roncador, saindo da comunidade quilombola do Remanso.',
      canonical: '/pt/aventuras/pantanal-marimbus',
    },
    hero: {
      nivel: 'Leve / Moderado',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Pantanal Marimbus.',
      lead: 'Nove quilômetros de canoa por dentro do pantanal da Chapada, saindo do Remanso.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Distância de canoa', 'Deslocamento de carro', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o Pantanal Marimbus.',
      paragrafos: [
        'Chamam de pantanal da Chapada Diamantina, e a comparação se sustenta: uma área alagada permanente, cheia de vegetação aquática, onde o deslocamento é de canoa e o silêncio é a regra.',
        'O passeio começa na comunidade quilombola do Remanso e desce o Rio Santo Antônio até o Rio Roncador. São cerca de 2 horas de remada, 9 quilômetros no total, com o guia local conduzindo.',
        'A fauna é o ponto alto: sucuris, jacarés e bugios aparecem com frequência para quem vai em silêncio e sabe olhar. Além dos 8 km a pé, o dia inclui as Piscinas do Roncador.',
        'Durante as caminhadas o piquenique equivale ao almoço: refeições balanceadas entre vitaminas, proteínas, fibras e carboidratos.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 8h00 para a comunidade quilombola do Remanso — cerca de 20 km de carro.',
        'Embarque nas canoas no Rio Santo Antônio. A remada desce até o encontro com o Rio Roncador, atravessando a área alagada: são cerca de 2 horas e 9 quilômetros.',
        'Desembarque e caminhada de aproximadamente 30 minutos até as Piscinas do Roncador, onde o grupo para para banho e piquenique.',
        'Volta por trilha, cerca de 40 minutos, com a paisagem alagada de um outro ângulo. Retorno a Lençóis no fim da tarde.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 510', nota: 'Mínimo de 2 pessoas. Só o seu grupo no passeio.' },
        { titulo: 'Em grupo', preco: 'R$ 465', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
          ['Água (1,5L por pessoa)', 'Tênis ou bota de caminhada', 'Camisa com proteção UV', 'Roupa de banho', 'Boné ou chapéu'],
          ['Protetor solar', 'Repelente', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences'],
        ],
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Óculos de sol'], ['Lanche ou fruta', 'Toalha', 'Saco estanque para a câmera']],
        note: 'Na canoa não há sombra e o reflexo da água dobra a exposição ao sol. Camisa de manga com proteção UV e repelente são o que mais faz diferença aqui.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia de montanha com treinamento APH e bilíngue', 'Canoa com condutor local do Remanso', 'Colete salva-vidas', 'Rastreador SPOT X via satélite', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Transfer (opcional)', 'Piquenique (opcional)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'O risco aqui não é a trilha, é o sol e os insetos: são cerca de 2 horas na canoa sem sombra, com o reflexo da água somando exposição. Protetor, repelente e camisa de manga longa evitam o que mais tira o dia do lugar. O colete salva-vidas é de uso obrigatório durante toda a remada.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para remar', 'pelo pantanal?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Marimbus Swamp',
      description:
        "The Chapada Diamantina's wetland: 9 km by canoe along the Santo Antônio and Roncador rivers, starting from the quilombola community of Remanso.",
      canonical: '/en/adventures/marimbus-swamp',
    },
    hero: {
      nivel: 'Light / Moderate',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Marimbus Swamp.',
      lead: 'Nine kilometres by canoe through the Chapada wetland, setting out from Remanso.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Distance by canoe', 'Drive', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About Marimbus Swamp.',
      paragrafos: [
        "They call it the Pantanal of the Chapada Diamantina, and the comparison holds: a permanent wetland thick with aquatic vegetation, where you move by canoe and silence is the rule.",
        'The trip starts at the quilombola community of Remanso and follows the Santo Antônio river down to the Roncador. That is around 2 hours of paddling, 9 kilometres in total, with a local guide steering.',
        'The wildlife is the highlight: anacondas, caimans and howler monkeys show up often for those who stay quiet and know where to look. Beyond the 8 km on foot, the day includes the Roncador Pools.',
        'On our treks the picnic is lunch: meals balanced between vitamins, protein, fibre and carbohydrates.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 8:00 am for the quilombola community of Remanso — around 20 km by car.',
        'Board the canoes on the Santo Antônio river. The paddle runs down to the meeting with the Roncador, crossing the flooded area: around 2 hours and 9 kilometres.',
        'Disembark and walk roughly 30 minutes to the Roncador Pools, where the group stops for a swim and the picnic.',
        'Return on foot, about 40 minutes, with the wetland seen from another angle. Back in Lençóis in the late afternoon.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 510', nota: 'Minimum of 2 people. Just your group on the trip.' },
        { titulo: 'Group tour', preco: 'R$ 465', nota: 'From 2 to 7 people. You join an open group.' },
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
          ['Water (1.5L per person)', 'Trainers or hiking boots', 'UV-protection shirt', 'Swimwear', 'Cap or hat'],
          ['Sunscreen', 'Insect repellent', 'Personal medication', 'Photo ID', 'Backpack for your things'],
        ],
        recommendedColumns: [['Rain gear (body and pack)', 'Sunglasses'], ['Snack or fruit', 'Towel', 'Dry bag for the camera']],
        note: 'There is no shade in the canoe and the glare off the water doubles your sun exposure. A long-sleeved UV shirt and repellent make the biggest difference here.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Mountain guide with first-aid training, bilingual', 'Canoe with a local boatman from Remanso', 'Life jacket', 'SPOT X satellite tracker', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Transfer (optional)', 'Picnic (optional)', 'Personal gear', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'The risk here is not the trail, it is the sun and the insects: around 2 hours in the canoe with no shade, and the water reflecting more of it back at you. Sunscreen, repellent and a long-sleeved shirt prevent what most often ruins the day. The life jacket is mandatory for the whole paddle.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to paddle', 'through the wetland?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Pantanal Marimbus',
      description:
        'El pantanal de la Chapada Diamantina: 9 km en canoa por los ríos Santo Antônio y Roncador, saliendo de la comunidad quilombola del Remanso.',
      canonical: '/es/aventuras/pantanal-marimbus',
    },
    hero: {
      nivel: 'Suave / Moderado',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Pantanal Marimbus.',
      lead: 'Nueve kilómetros en canoa por dentro del pantanal de la Chapada, saliendo del Remanso.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Distancia en canoa', 'Traslado en auto', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Pantanal Marimbus.',
      paragrafos: [
        'Lo llaman el pantanal de la Chapada Diamantina, y la comparación se sostiene: un área inundada permanente, llena de vegetación acuática, donde el desplazamiento es en canoa y el silencio es la regla.',
        'El paseo empieza en la comunidad quilombola del Remanso y baja por el Río Santo Antônio hasta el Río Roncador. Son cerca de 2 horas de remada, 9 kilómetros en total, con el guía local conduciendo.',
        'La fauna es el punto alto: anacondas, yacarés y monos aulladores aparecen seguido para quien va en silencio y sabe mirar. Además de los 8 km a pie, el día incluye las Piscinas del Roncador.',
        'Durante las caminatas el picnic equivale al almuerzo: comidas balanceadas entre vitaminas, proteínas, fibras y carbohidratos.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 8:00 hacia la comunidad quilombola del Remanso — unos 20 km en auto.',
        'Embarque en las canoas en el Río Santo Antônio. La remada baja hasta el encuentro con el Río Roncador, atravesando el área inundada: cerca de 2 horas y 9 kilómetros.',
        'Desembarque y caminata de aproximadamente 30 minutos hasta las Piscinas del Roncador, donde el grupo para a bañarse y hacer el picnic.',
        'Vuelta por sendero, cerca de 40 minutos, con el paisaje inundado desde otro ángulo. Regreso a Lençóis al final de la tarde.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 510', nota: 'Mínimo de 2 personas. Solo tu grupo en el paseo.' },
        { titulo: 'En grupo', preco: 'R$ 465', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
          ['Agua (1,5L por persona)', 'Zapatillas o botas de trekking', 'Remera con protección UV', 'Ropa de baño', 'Gorra o sombrero'],
          ['Protector solar', 'Repelente', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias'],
        ],
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Anteojos de sol'], ['Snack o fruta', 'Toalla', 'Bolsa estanca para la cámara']],
        note: 'En la canoa no hay sombra y el reflejo del agua duplica la exposición al sol. Remera de manga larga con protección UV y repelente son lo que más diferencia hace acá.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía de montaña con formación en primeros auxilios, bilingüe', 'Canoa con conductor local del Remanso', 'Chaleco salvavidas', 'Rastreador SPOT X satelital', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Traslado (opcional)', 'Picnic (opcional)', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'El riesgo acá no es el sendero, es el sol y los insectos: son cerca de 2 horas en canoa sin sombra, con el reflejo del agua sumando exposición. Protector, repelente y remera de manga larga evitan lo que más arruina el día. El chaleco salvavidas es de uso obligatorio durante toda la remada.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para remar', 'por el pantanal?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
