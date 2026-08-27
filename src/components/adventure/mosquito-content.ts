/**
 * Conteúdo da página da Cachoeira do Mosquito, por idioma.
 *
 * PT vem de mamut.agency/aventuras/cachoeira-do-mosquito.
 *
 * ⚠️ EN e ES são tradução feita aqui: a operadora não publica versão traduzida
 * deste roteiro. O que existe em `/en/adventures/mosquito-waterfall` é o
 * passeio COMBINADO (Mosquito + Pai Inácio), que é outro produto e já tem
 * página própria no hub.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL } from './day-tour-legal';

export const MOSQUITO_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/mosquito/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/mosquito/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/mosquito/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/mosquito/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['2 km', '/svg/_icons/icon_03_montain.svg'],
    ['80 km', '/svg/_icons/icon_09_location.svg'],
    ['Meio dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['~13h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 375,
};

export const MOSQUITO_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Cachoeira do Mosquito',
      description:
        'Meio dia na cachoeira que os garimpeiros batizaram de "mosquitinhos": 2 km de caminhada até o leito do Rio Santo Antônio, dentro da Fazenda Santo Antônio.',
      canonical: '/pt/aventuras/cachoeira-do-mosquito',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: 'Meio dia',
      titulo: 'Cachoeira do Mosquito.',
      lead: 'O nome vem dos diamantes miúdos que os garimpeiros chamavam de "mosquitinhos".',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Percurso de carro', 'Duração', 'Saída (Lençóis)', 'Retorno', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Cachoeira do Mosquito.',
      paragrafos: [
        'Uma cachoeira em Lençóis, na Chapada Diamantina. O nome vem da grande incidência de diamantes pequenos na área, que os garimpeiros chamavam carinhosamente de "mosquitinhos".',
        'É um passeio curto, que ocupa metade do dia: saída a partir das 8h e retorno por volta das 13h. Sobra tempo para encaixar outra atração no mesmo dia.',
        'Costumamos combinar com o Parque da Muritiba, o Morro do Pai Inácio, o Ribeirão do Meio ou a Serra das Paridas — e também com o Poço Azul, que cai bem num transfer entre Lençóis e Mucugê. Fale com o atendimento para montar o par que faz sentido para você.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída entre 8h e 9h da manhã. São cerca de 1 hora de carro (40 km): 20 km de asfalto na BR-242 e 20 km de estrada irregular pela zona rural de Lençóis.',
        'A chegada é na Fazenda Santo Antônio, área privada onde fica a cachoeira — e onde dá para almoçar bem na volta do passeio.',
        'Depois do desembarque, 20 a 30 minutos de caminhada em descida, ora por trilha, ora por degraus, até o leito do Rio Santo Antônio, de onde se vê a Cachoeira do Mosquito por baixo.',
        'O local não oferece risco iminente nem técnico, mas exige cuidado nas áreas escorregadias e quando o volume de água está alto — o condutor acompanha o percurso inteiro. Depois do banho, a volta é pelo mesmo caminho até o carro, seguindo para a Fazenda Santo Antônio ou direto para Lençóis.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 410', nota: 'Mínimo de 2 pessoas. Só o seu grupo no passeio.' },
        { titulo: 'Em grupo', preco: 'R$ 375', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou pagamento em cartão: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório compromete a segurança do grupo e inviabiliza a participação.',
        requiredColumns: [
          ['Água (1,5L por pessoa)', 'Tênis ou bota de caminhada', 'Roupas leves', 'Roupa de banho'],
          ['Boné ou chapéu', 'Protetor solar', 'Remédios pessoais', 'Documento de identificação', 'Mochila para pertences'],
        ],
        recommendedColumns: [['Meias extras', 'Capa de chuva (corpo e mochila)'], ['Lanche ou fruta', 'Bastão de caminhada']],
        note: 'A descida tem trechos de trilha e trechos de degraus: calçado fechado com aderência resolve os dois.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Guia local credenciado com treinamento', 'Transfer in-out', 'Taxas de acesso', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Almoço (opcional)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem'],
      },
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Sua trilha começa', 'com uma mensagem.'],
      corpo: 'Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a Chapada Diamantina e como se preparar.',
      botao: 'Entrar para o bando',
    },
  },

  en: {
    meta: {
      title: 'Mosquito Waterfall',
      description:
        'Half a day at the waterfall the prospectors named after "little mosquitoes": a 2 km walk down to the Santo Antônio riverbed, inside a private farm.',
      canonical: '/en/adventures/mosquito-waterfall',
    },
    hero: {
      nivel: 'Light',
      origem: 'Starts in Lençóis',
      duracao: 'Half day',
      titulo: 'Mosquito Waterfall.',
      lead: 'The name comes from the tiny diamonds the prospectors used to call "little mosquitoes".',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Walking distance', 'Road section', 'Duration', 'Departure (Lençóis)', 'Return', 'Difficulty'],
    sobre: {
      titulo: 'About the Mosquito Waterfall.',
      paragrafos: [
        'A waterfall in Lençóis, in the Chapada Diamantina. The name comes from the abundance of small diamonds in the area, which prospectors fondly called "little mosquitoes".',
        'It is a short tour that takes half the day: departure from 8:00 and return around 13:00. That leaves room to fit another attraction into the same day.',
        'We usually pair it with the Muritiba Park, Pai Inácio Hill, Ribeirão do Meio or Serra das Paridas — and also with the Poço Azul, which fits well into a transfer between Lençóis and Mucugê. Talk to our team about the pairing that suits you.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any force majeure the team considers relevant.',
      corpo: [
        'Departure between 8:00 and 9:00. It is about 1 hour by car (40 km): 20 km of asphalt on the BR-242 and 20 km of rough road through the countryside around Lençóis.',
        'We arrive at the Santo Antônio farm, the private property where the waterfall sits — and where you can have a good lunch on the way back.',
        'After the drop-off, a 20 to 30 minute walk downhill, part trail and part steps, to the Santo Antônio riverbed, where you see the Mosquito Waterfall from below.',
        'The place presents no imminent or technical risk, but it does call for care on the slippery sections and when the water volume is high — the guide accompanies the whole route. After the swim, we return the same way to the car and head to the Santo Antônio farm or straight back to Lençóis.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 410', nota: 'Minimum 2 people. Only your group on the tour.' },
        { titulo: 'In a group', preco: 'R$ 375', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or card payment: ask our team.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'Items marked with * are mandatory. Missing any mandatory item compromises the safety of the group and makes participation impossible.',
        requiredColumns: [
          ['Water (1.5 L per person)', 'Hiking shoes or boots', 'Light clothing', 'Swimwear'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Backpack for your belongings'],
        ],
        recommendedColumns: [['Spare socks', 'Rain gear (body and backpack)'], ['A snack or fruit', 'Trekking pole']],
        note: 'The descent mixes trail and steps: closed shoes with grip handle both.',
      },
      {
        type: 'included',
        title: 'What is included / not included',
        included: ['Accredited local guide with training', 'Transfer in-out', 'Entrance fees', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed above', 'Lunch (optional)', 'Personal equipment', 'Medical evacuation', 'Lodging'],
      },
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Your trail starts', 'with a message.'],
      corpo: 'Talk to us on WhatsApp. Find out which trip suits you best in the Chapada Diamantina, and how to get ready for it.',
      botao: 'Join the herd',
    },
  },

  es: {
    meta: {
      title: 'Cascada del Mosquito',
      description:
        'Medio día en la cascada que los mineros bautizaron como "mosquitinhos": 2 km de caminata hasta el lecho del Río Santo Antônio, dentro de una hacienda privada.',
      canonical: '/es/aventuras/cascada-del-mosquito',
    },
    hero: {
      nivel: 'Liviano',
      origem: 'Sale de Lençóis',
      duracao: 'Medio día',
      titulo: 'Cascada del Mosquito.',
      lead: 'El nombre viene de los diamantes diminutos que los mineros llamaban "mosquitinhos".',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Tramo en auto', 'Duración', 'Salida (Lençóis)', 'Regreso', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Cascada del Mosquito.',
      paragrafos: [
        'Una cascada en Lençóis, en la Chapada Diamantina. El nombre viene de la gran cantidad de diamantes pequeños en la zona, que los mineros llamaban cariñosamente "mosquitinhos".',
        'Es un paseo corto, que ocupa medio día: salida a partir de las 8h y regreso alrededor de las 13h. Queda tiempo para sumar otra atracción el mismo día.',
        'Solemos combinarlo con el Parque da Muritiba, el Morro do Pai Inácio, el Ribeirão do Meio o la Serra das Paridas — y también con el Poço Azul, que encaja bien en un transfer entre Lençóis y Mucugê. Hablá con atención para armar la combinación que te sirva.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida entre las 8h y las 9h de la mañana. Es alrededor de 1 hora en auto (40 km): 20 km de asfalto por la BR-242 y 20 km de camino irregular por la zona rural de Lençóis.',
        'La llegada es a la Hacienda Santo Antônio, área privada donde está la cascada — y donde se puede almorzar bien a la vuelta del paseo.',
        'Después del desembarque, de 20 a 30 minutos de caminata en bajada, a veces por sendero y a veces por escalones, hasta el lecho del Río Santo Antônio, desde donde se ve la Cascada del Mosquito por abajo.',
        'El lugar no ofrece riesgo inminente ni técnico, pero exige cuidado en las zonas resbaladizas y cuando el volumen de agua está alto — el guía acompaña todo el recorrido. Después del baño, la vuelta es por el mismo camino hasta el auto, siguiendo a la hacienda o directo a Lençóis.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 410', nota: 'Mínimo 2 personas. Solo tu grupo en el paseo.' },
        { titulo: 'En grupo', preco: 'R$ 375', nota: 'De 2 a 7 personas. Te sumás a un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o pago con tarjeta: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio compromete la seguridad del grupo e impide la participación.',
        requiredColumns: [
          ['Agua (1,5 L por persona)', 'Zapatillas o botas de trekking', 'Ropa liviana', 'Ropa de baño'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento de identidad', 'Mochila para pertenencias'],
        ],
        recommendedColumns: [['Medias extra', 'Piloto de lluvia (cuerpo y mochila)'], ['Merienda o fruta', 'Bastón de caminata']],
        note: 'La bajada mezcla sendero y escalones: calzado cerrado con agarre resuelve los dos.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Guía local acreditado con formación', 'Transfer in-out', 'Tasas de acceso', 'Seguro de aventura', 'Kit de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Almuerzo (opcional)', 'Equipo personal', 'Evacuación médica', 'Alojamiento'],
      },
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['Tu sendero empieza', 'con un mensaje.'],
      corpo: 'Hablá con nosotros por WhatsApp. Descubrí cuál es tu recorrido ideal para conocer la Chapada Diamantina y cómo prepararte.',
      botao: 'Sumate a la manada',
    },
  },
};
