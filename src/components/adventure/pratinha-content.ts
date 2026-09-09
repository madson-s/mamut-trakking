/**
 * Conteúdo da Fazenda Pratinha & Gruta Azul, por idioma.
 *
 * PT vem de mamut.agency/aventuras/fazenda-pratinha e EN de
 * mamut.agency/en/aventuras/pratinha-farm. ES é tradução feita aqui.
 *
 * O passeio mais leve do catálogo: 100 metros a pé em 156 km de carro. O dia
 * inteiro é de água, e as atividades opcionais da fazenda — flutuação, caiaque,
 * tirolesa, cavalo — são o que realmente preenche o tempo, então elas aparecem
 * no corpo e no "não incluso", não só de passagem.
 *
 * O roteiro [Grutas + Morro do Camelo] inclui esta fazenda e soma a Gruta da
 * Fumaça e o mirante do Camelo. A operadora vende os dois separados.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const PRATINHA_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/pratinha/hero.jpeg', position: '50% 45%' },
  galeria: [
    { src: '/img/adventures/pratinha/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/pratinha/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/pratinha/3.jpeg', width: 2365, height: 1330 },
  ],
  stats: [
    ['100 m', '/svg/_icons/icon_03_montain.svg'],
    ['156 km', '/svg/_icons/icon_09_location.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h às 9h', '/svg/_icons/icon_11_calendar.svg'],
    ['~18h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 500,
};

export const PRATINHA_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Fazenda Pratinha & Gruta Azul',
      description:
        'Um dia inteiro de água cristalina em Iraquara: o Rio Pratinha, a Gruta da Pratinha e a Gruta Azul, com flutuação, caiaque e tirolesa opcionais.',
      canonical: '/pt/aventuras/fazenda-pratinha',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Fazenda Pratinha.',
      lead: 'Cem metros a pé e o dia inteiro na água — o oásis que aparece no meio do sertão.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Duração', 'Horário de saída', 'Retorno previsto', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Fazenda Pratinha.',
      paragrafos: [
        'Em Iraquara, a Fazenda Pratinha atrai gente do mundo inteiro para ver de perto as águas cristalinas que surgem no sertão baiano como um oásis. É uma área privada onde ficam a Gruta Azul, a Gruta da Pratinha e o rio que leva o nome da fazenda.',
        'É o passeio mais leve que operamos — 100 metros de caminhada no total —, mas preenche o dia inteiro: saímos a partir das 8h00 e voltamos por volta das 18h00, o que dá tempo de sobra para o banho e para as atividades da fazenda.',
        'As atividades adicionais são o que realmente enche o dia: flutuação com snorkel, pé de pato, lanterna e colete; caiaque; passeio de cavalo; tirolesa; foto subaquática. Nenhuma está inclusa no valor — são pagas na fazenda e vale confirmar com o atendimento o que está disponível na sua data.',
        'O banho na Pratinha é raso e agradável, especialmente em dias de tempo aberto. O almoço é na própria fazenda, que tem vários pontos servindo de refeição completa a petiscos, sobremesas, café e sorvete.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis entre 8h00 e 9h00. São cerca de 1 hora de carro, 65 km — 60 de asfalto pela BR-242 e 5 de estrada irregular pela zona rural de Iraquara.',
        'Chegada à Fazenda Pratinha, a área privada onde ficam a Gruta Azul, a Gruta da Pratinha e o rio. O tempo ali é livre entre o banho, as paisagens na beira do rio e ao redor das grutas, e as atividades opcionais.',
        'O almoço é na própria fazenda — há vários pontos com opções que vão de refeição completa a petiscos, sobremesas, cafés e sorvetes.',
        'A volta é por um caminho diferente: 30 minutos pela zona rural de Iraquara até a BR-242, com vista para as montanhas e os vales distantes. Retorno a Lençóis previsto por volta das 18h00.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 550', nota: 'Mínimo de 2 pessoas. Só o seu grupo no passeio.' },
        { titulo: 'Em grupo', preco: 'R$ 500', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
      ],
      nota: 'Valores para dinheiro, transferência ou boleto. Transferência internacional ou grupo maior: consulte o atendimento.',
    },
    faqTitulo: 'Tudo que você precisa saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — o que levar',
        intro: 'É um passeio leve, então a lista é curta. Itens marcados com * são obrigatórios.',
        requiredColumns: [
          ['Água (1,5L por pessoa)', 'Roupa de banho', 'Boné ou chapéu', 'Protetor solar'],
          ['Remédios pessoais', 'Documento de identificação', 'Toalha', 'Chinelos'],
        ],
        recommendedColumns: [['Câmera ou saco estanque', 'Muda de roupa seca'], ['Dinheiro para o almoço e as atividades opcionais']],
        note: 'As atividades da fazenda são pagas no local — leve meio de pagamento se pretende fazer flutuação, caiaque ou tirolesa.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia local', 'Taxas de acesso', 'Seguro aventura'],
        excluded: ['Qualquer item não listado', 'Almoço (opcional)', 'Flutuação, caiaque, tirolesa, cavalo e foto subaquática (pagos na fazenda)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem'],
      },
      safetyFaq(
        'pt',
        'O local não oferece risco iminente nem exige técnica, mas há duas coisas a observar: as áreas molhadas em volta das grutas ficam escorregadias, e há animais soltos pela fazenda — evite contato. O banho na Pratinha é raso; nas grutas, siga a orientação da equipe local.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para um dia', 'de água cristalina?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Pratinha Farm & Blue Cave',
      description:
        'A full day of clear water in Iraquara: the Pratinha river, Pratinha Cave and the Blue Cave, with optional snorkelling, kayaking and zip-lining.',
      canonical: '/en/adventures/pratinha-farm',
    },
    hero: {
      nivel: 'Light',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Pratinha Farm.',
      lead: 'A hundred metres on foot and the whole day in the water — the oasis that appears in the middle of the backlands.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Duration', 'Departure window', 'Expected return', 'Difficulty'],
    sobre: {
      titulo: 'About Pratinha Farm.',
      paragrafos: [
        'In Iraquara, Pratinha Farm draws people from all over the world to see up close the clear water that rises in the Bahian backlands like an oasis. It is a private property holding the Blue Cave, Pratinha Cave and the river the farm is named after.',
        'It is the lightest trip we run — 100 metres of walking in total — but it fills the whole day: we leave from 8:00 am and get back around 6:00 pm, which leaves plenty of time for swimming and for the activities on site.',
        'The extra activities are what really fill the day: snorkelling with fins, torch and life jacket; kayaking; horse riding; zip-lining; underwater photography. None of them is included in the price — they are paid at the farm, and it is worth checking with us what is available on your date.',
        'The swimming at the Pratinha is shallow and pleasant, especially on clear days. Lunch is at the farm itself, which has several outlets serving anything from a full meal to snacks, desserts, coffee and ice cream.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis between 8:00 and 9:00 am. It is about an hour by car, 65 km — 60 of them paved on the BR-242 and 5 of rough road through the countryside of Iraquara.',
        'Arrival at Pratinha Farm, the private property holding the Blue Cave, Pratinha Cave and the river. Time there is your own, between swimming, the scenery along the river and around the caves, and the optional activities.',
        'Lunch is at the farm — several outlets offer anything from a full meal to snacks, desserts, coffee and ice cream.',
        'The return is by a different road: 30 minutes through the countryside of Iraquara to the BR-242, with views of distant mountains and valleys. Back in Lençóis around 6:00 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 550', nota: 'Minimum of 2 people. Just your group on the trip.' },
        { titulo: 'Group tour', preco: 'R$ 500', nota: 'From 2 to 7 people. You join an open group.' },
      ],
      nota: 'Prices for cash, bank transfer or boleto. International transfer or a larger group: talk to us.',
    },
    faqTitulo: 'Everything you need to know.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — what to bring',
        intro: 'This is a light trip, so the list is short. Items marked * are mandatory.',
        requiredColumns: [
          ['Water (1.5L per person)', 'Swimwear', 'Cap or hat', 'Sunscreen'],
          ['Personal medication', 'Photo ID', 'Towel', 'Flip-flops'],
        ],
        recommendedColumns: [['Camera or dry bag', 'Dry change of clothes'], ['Cash for lunch and the optional activities']],
        note: 'The farm activities are paid on site — bring a means of payment if you plan to snorkel, kayak or zip-line.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Local guide', 'Access fees', 'Adventure insurance'],
        excluded: ['Anything not listed', 'Lunch (optional)', 'Snorkelling, kayaking, zip-line, horse riding and underwater photos (paid at the farm)', 'Personal gear', 'Medical evacuation', 'Accommodation'],
      },
      safetyFaq(
        'en',
        'The site poses no imminent risk and needs no technique, but two things are worth watching: the wet areas around the caves get slippery, and there are animals roaming the farm — avoid contact. Swimming at the Pratinha is shallow; in the caves, follow the local team’s instructions.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready for a day', 'of clear water?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Fazenda Pratinha & Gruta Azul',
      description:
        'Un día entero de agua cristalina en Iraquara: el Río Pratinha, la Gruta da Pratinha y la Gruta Azul, con flotación, kayak y tirolesa opcionales.',
      canonical: '/es/aventuras/fazenda-pratinha',
    },
    hero: {
      nivel: 'Suave',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Fazenda Pratinha.',
      lead: 'Cien metros a pie y el día entero en el agua — el oasis que aparece en medio del sertão.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Duración', 'Horario de salida', 'Regreso previsto', 'Dificultad'],
    sobre: {
      titulo: 'Sobre la Fazenda Pratinha.',
      paragrafos: [
        'En Iraquara, la Fazenda Pratinha atrae gente de todo el mundo para ver de cerca las aguas cristalinas que surgen en el sertão bahiano como un oasis. Es un área privada donde están la Gruta Azul, la Gruta da Pratinha y el río que lleva el nombre de la fazenda.',
        'Es el paseo más suave que operamos — 100 metros de caminata en total —, pero llena el día entero: salimos a partir de las 8:00 y volvemos cerca de las 18:00, lo que da tiempo de sobra para el baño y para las actividades de la fazenda.',
        'Las actividades adicionales son lo que realmente llena el día: flotación con snorkel, patas de rana, linterna y chaleco; kayak; paseo a caballo; tirolesa; foto subacuática. Ninguna está incluida en el valor — se pagan en la fazenda, y conviene confirmar con atención qué está disponible en tu fecha.',
        'El baño en la Pratinha es bajo y agradable, especialmente en días despejados. El almuerzo es en la propia fazenda, que tiene varios puntos sirviendo desde comida completa hasta picadas, postres, café y helado.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis entre las 8:00 y las 9:00. Es cerca de 1 hora de auto, 65 km — 60 de asfalto por la BR-242 y 5 de camino irregular por la zona rural de Iraquara.',
        'Llegada a la Fazenda Pratinha, el área privada donde están la Gruta Azul, la Gruta da Pratinha y el río. El tiempo ahí es libre entre el baño, los paisajes a la orilla del río y alrededor de las grutas, y las actividades opcionales.',
        'El almuerzo es en la propia fazenda — hay varios puntos con opciones que van de comida completa a picadas, postres, cafés y helados.',
        'La vuelta es por un camino diferente: 30 minutos por la zona rural de Iraquara hasta la BR-242, con vista a las montañas y los valles distantes. Regreso a Lençóis previsto cerca de las 18:00.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 550', nota: 'Mínimo de 2 personas. Solo tu grupo en el paseo.' },
        { titulo: 'En grupo', preco: 'R$ 500', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
      ],
      nota: 'Valores para efectivo, transferencia o boleto. Transferencia internacional o grupo mayor: consultá con atención.',
    },
    faqTitulo: 'Todo lo que necesitás saber.',
    faqs: [
      {
        type: 'checklist',
        title: 'Checklist — qué llevar',
        intro: 'Es un paseo suave, así que la lista es corta. Los ítems marcados con * son obligatorios.',
        requiredColumns: [
          ['Agua (1,5L por persona)', 'Ropa de baño', 'Gorra o sombrero', 'Protector solar'],
          ['Medicamentos personales', 'Documento de identidad', 'Toalla', 'Ojotas'],
        ],
        recommendedColumns: [['Cámara o bolsa estanca', 'Muda de ropa seca'], ['Efectivo para el almuerzo y las actividades opcionales']],
        note: 'Las actividades de la fazenda se pagan en el lugar — llevá medio de pago si pensás hacer flotación, kayak o tirolesa.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía local', 'Tasas de acceso', 'Seguro de aventura'],
        excluded: ['Cualquier ítem no listado', 'Almuerzo (opcional)', 'Flotación, kayak, tirolesa, caballo y foto subacuática (se pagan en la fazenda)', 'Equipo personal', 'Evacuación médica', 'Alojamiento'],
      },
      safetyFaq(
        'es',
        'El lugar no ofrece riesgo inminente ni exige técnica, pero hay dos cosas a observar: las áreas mojadas alrededor de las grutas quedan resbaladizas, y hay animales sueltos por la fazenda — evitá el contacto. El baño en la Pratinha es bajo; en las grutas, seguí la orientación del equipo local.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para un día', 'de agua cristalina?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
