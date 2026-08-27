/**
 * Conteúdo da página Gruta da Fumaça + Pratinha + Morro do Camelo, por idioma.
 *
 * PT vem de mamut.agency/aventuras/grutas e EN de
 * mamut.agency/en/aventuras/caves-tour. ES é tradução feita aqui.
 *
 * Único roteiro do site em terreno cárstico — a geologia da Formação Salitre é
 * o que explica as grutas, então ela entra no corpo da página e não só como
 * curiosidade.
 *
 * ⚠️ O hub tem uma entrada separada, `fazenda-pratinha-gruta-azul`, que cobre
 * só a fazenda. Este roteiro a inclui e soma a Gruta da Fumaça e o Morro do
 * Camelo. Confirme com a operadora se os dois produtos coexistem.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const GRUTAS_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/grutas/hero.jpeg', position: '50% 50%' },
  galeria: [
    { src: '/img/adventures/grutas/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/grutas/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/grutas/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['2 km', '/svg/_icons/icon_03_montain.svg'],
    ['130 km', '/svg/_icons/icon_09_location.svg'],
    ['4 atrativos', '/svg/_icons/icon_10_home.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 540,
};

export const GRUTAS_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Grutas + Morro do Camelo',
      description:
        'Gruta da Fumaça, Fazenda Pratinha, Gruta Azul e o pôr do sol no Morro do Camelo: um dia pelo calcário da Chapada, com caminhadas curtas.',
      canonical: '/pt/aventuras/grutas',
    },
    hero: {
      nivel: 'Leve',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Grutas + Morro do Camelo.',
      lead: 'Um dia por dentro do calcário — grutas, rio de água azul e o pôr do sol no Camelo para fechar.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Deslocamento de carro', 'Atrativos', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre o passeio.',
      paragrafos: [
        'Um passeio de carro com caminhadas curtas, ideal para crianças, idosos e para quem quer conhecer a Chapada Diamantina sem muito esforço. Todos os atrativos têm acesso fácil, são seguros e contam com ampla estrutura.',
        'São quatro paradas: a Gruta da Fumaça, a Fazenda Pratinha, a Gruta Azul e o Mirante do Morro do Camelo — um dos principais cartões-postais da região, e onde o dia termina, no pôr do sol.',
        'Nesta área da Chapada predomina o calcário, rocha frágil à ação da água. É isso que explica a quantidade de grutas e poços subterrâneos: a Formação Salitre tem cerca de 700 milhões de anos, e nela já foram encontrados fósseis datados de mais de 10 mil anos, além de evidências dos mares que cobriram a região e da Era do Gelo.',
        'Na Fazenda Pratinha há atividades adicionais — flutuação, foto subaquática, caiaque, tirolesa e outras. São opcionais e não entram no valor; fale com o atendimento para conferir o que está disponível.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída de Lençóis às 8h00 e cerca de 1 hora de carro até a Gruta da Fumaça, uma das mais completas da região de Iraquara.',
        'Visita de cerca de 40 minutos à gruta, com espeleotemas de todo tipo: estalactites, estalagmites, helictites e a raríssima Flor de Aragonita.',
        'De carro até a Fazenda Pratinha, onde corre o Rio Pratinha. Ali existe uma infinidade de atividades opcionais — flutuação, foto subaquática, caiaque, tirolesa e outras.',
        'Às 15h00, Gruta Azul, no interior da própria fazenda: um show natural de luzes que só acontece à tarde, quando o sol entra na água.',
        'Por volta das 16h30, cerca de 40 minutos de carro até o Mirante do Morro do Camelo, para o pôr do sol.',
        'Retorno a Lençóis, na cidade por volta das 18h30.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 580', nota: 'Mínimo de 2 pessoas. Só o seu grupo no passeio.' },
        { titulo: 'Em grupo', preco: 'R$ 540', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Toalha', 'Dinheiro para as atividades da fazenda']],
        note: 'O piso das grutas é úmido e escorregadio o ano inteiro — calçado fechado com boa aderência não é opcional aqui, mesmo sendo um roteiro leve.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia local credenciado com treinamento APH', 'Taxas de acesso', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Almoço (opcional)', 'Tirolesa e demais atividades da Pratinha (opcionais)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem antes ou após o passeio'],
      },
      safetyFaq(
        'pt',
        'Dentro das grutas o piso é úmido, irregular e escorregadio, e há trechos de teto baixo — siga o guia e não se apoie nos espeleotemas: uma estalactite leva milhares de anos para se formar e quebra num toque. A Gruta Azul depende da hora do sol para o efeito de luz, por isso a visita é fixada às 15h00.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para entrar', 'em 700 milhões de anos?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Caves + Camelo Hill',
      description:
        'Fumaça Cave, Pratinha Farm, Blue Cave and sunset from Camelo Hill: a day through the limestone of the Chapada, with short walks.',
      canonical: '/en/adventures/caves-tour',
    },
    hero: {
      nivel: 'Light',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Caves + Camelo Hill.',
      lead: 'A day inside the limestone — caves, a river of blue water, and sunset from the Camelo to close it out.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'Drive', 'Sights', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the tour.',
      paragrafos: [
        'A trip by car with short walks, ideal for children, older travellers and anyone who wants to see the Chapada Diamantina without much effort. Every site has easy access, is safe, and has ample facilities.',
        'There are four stops: Fumaça Cave, Pratinha Farm, the Blue Cave and the Camelo Hill lookout — one of the best-known landmarks in the region, and where the day ends, at sunset.',
        'This part of the Chapada is dominated by limestone, a rock that water breaks down easily. That is what accounts for the number of caves and underground pools: the Salitre Formation is around 700 million years old, and fossils dated at over 10,000 years have been found in it, along with evidence of the seas that once covered the region and of the Ice Age.',
        'At Pratinha Farm there are extra activities — snorkelling, underwater photography, kayaking, zip-lining and more. They are optional and not included in the price; ask us what is currently available.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure from Lençóis at 8:00 am and about an hour by car to Fumaça Cave, one of the most complete in the Iraquara region.',
        'A visit of around 40 minutes inside the cave, with speleothems of every kind: stalactites, stalagmites, helictites and the very rare Aragonite Flower.',
        'On by car to Pratinha Farm, where the Pratinha river runs. There is a wealth of optional activities there — snorkelling, underwater photography, kayaking, zip-lining and more.',
        'At 3:00 pm, the Blue Cave, inside the farm itself: a natural light show that only happens in the afternoon, when the sun reaches the water.',
        'Around 4:30 pm, about 40 minutes by car to the Camelo Hill lookout, for the sunset.',
        'Back to Lençóis, in town around 6:30 pm.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 580', nota: 'Minimum of 2 people. Just your group on the trip.' },
        { titulo: 'Group tour', preco: 'R$ 540', nota: 'From 2 to 7 people. You join an open group.' },
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
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Towel', 'Cash for the farm activities']],
        note: 'The cave floors are damp and slippery all year round — closed shoes with good grip are not optional here, easy trip or not.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Accredited local guide with first-aid training', 'Access fees', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Lunch (optional)', 'Zip-line and other Pratinha activities (optional)', 'Personal gear', 'Medical evacuation', 'Accommodation before or after the tour'],
      },
      safetyFaq(
        'en',
        'Inside the caves the floor is damp, uneven and slippery, and there are low-ceilinged stretches — follow the guide and do not lean on the speleothems: a stalactite takes thousands of years to form and breaks at a touch. The Blue Cave depends on the sun for its light effect, which is why the visit is fixed at 3:00 pm.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to step into', '700 million years?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Grutas + Morro do Camelo',
      description:
        'Gruta da Fumaça, Fazenda Pratinha, Gruta Azul y el atardecer en el Morro do Camelo: un día por la caliza de la Chapada, con caminatas cortas.',
      canonical: '/es/aventuras/grutas',
    },
    hero: {
      nivel: 'Suave',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Grutas + Morro do Camelo.',
      lead: 'Un día por dentro de la caliza — grutas, río de agua azul y el atardecer en el Camelo para cerrar.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Traslado en auto', 'Atractivos', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el paseo.',
      paragrafos: [
        'Un paseo en auto con caminatas cortas, ideal para chicos, personas mayores y para quien quiere conocer la Chapada Diamantina sin mucho esfuerzo. Todos los atractivos tienen acceso fácil, son seguros y cuentan con amplia estructura.',
        'Son cuatro paradas: la Gruta da Fumaça, la Fazenda Pratinha, la Gruta Azul y el Mirador del Morro do Camelo — una de las principales postales de la región, y donde termina el día, en el atardecer.',
        'En esta zona de la Chapada predomina la caliza, roca frágil a la acción del agua. Eso explica la cantidad de grutas y pozos subterráneos: la Formación Salitre tiene cerca de 700 millones de años, y en ella se encontraron fósiles datados en más de 10 mil años, además de evidencias de los mares que cubrieron la región y de la Era del Hielo.',
        'En la Fazenda Pratinha hay actividades adicionales — flotación, foto subacuática, kayak, tirolesa y otras. Son opcionales y no entran en el valor; hablá con atención para ver qué está disponible.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida de Lençóis a las 8:00 y cerca de 1 hora de auto hasta la Gruta da Fumaça, una de las más completas de la región de Iraquara.',
        'Visita de cerca de 40 minutos a la gruta, con espeleotemas de todo tipo: estalactitas, estalagmitas, helictitas y la rarísima Flor de Aragonita.',
        'En auto hasta la Fazenda Pratinha, donde corre el Río Pratinha. Ahí hay una infinidad de actividades opcionales — flotación, foto subacuática, kayak, tirolesa y otras.',
        'A las 15:00, Gruta Azul, en el interior de la propia fazenda: un show natural de luces que solo ocurre a la tarde, cuando el sol entra en el agua.',
        'Cerca de las 16:30, unos 40 minutos de auto hasta el Mirador del Morro do Camelo, para el atardecer.',
        'Regreso a Lençóis, en la ciudad cerca de las 18:30.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 580', nota: 'Mínimo de 2 personas. Solo tu grupo en el paseo.' },
        { titulo: 'En grupo', preco: 'R$ 540', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Toalla', 'Efectivo para las actividades de la fazenda']],
        note: 'El piso de las grutas es húmedo y resbaladizo todo el año — calzado cerrado con buena adherencia no es opcional acá, aunque sea un recorrido suave.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía local acreditado con formación en primeros auxilios', 'Tasas de acceso', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Almuerzo (opcional)', 'Tirolesa y demás actividades de la Pratinha (opcionales)', 'Equipo personal', 'Evacuación médica', 'Alojamiento antes o después del paseo'],
      },
      safetyFaq(
        'es',
        'Dentro de las grutas el piso es húmedo, irregular y resbaladizo, y hay tramos de techo bajo — seguí al guía y no te apoyes en los espeleotemas: una estalactita tarda miles de años en formarse y se rompe con un toque. La Gruta Azul depende de la hora del sol para el efecto de luz, por eso la visita se fija a las 15:00.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para entrar', 'en 700 millones de años?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
