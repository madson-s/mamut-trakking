/**
 * Conteúdo da Trilha Águas Claras de 1 dia, por idioma.
 *
 * PT vem de mamut.agency/aventuras/aguas-claras e EN de
 * mamut.agency/en/aventuras/aguas-claras-trail. ES é tradução feita aqui.
 *
 * Não confundir com `aguas-claras-content`, a versão de 2 dias que acampa nas
 * piscinas. Esta é o bate-volta (ou travessia) pela mesma região, sem pernoite,
 * entrando pela base do Morro do Pai Inácio em vez do Capão.
 *
 * ⚠️ A fonte diz "Nível de Esforço: Moderado" na faixa e "Esforço:
 * Leve/Moderado" no itinerário. Adotei Leve/Moderado, coerente com os 18 km em
 * terreno majoritariamente plano.
 */

import type { Locale } from '@/lib/site';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { DAY_TOUR_LEGAL, safetyFaq } from './day-tour-legal';

export const AGUAS_CLARAS_1D_ASSETS: DayTourAssets = {
  hero: { src: '/img/adventures/aguas-claras-1d/hero.jpeg', position: '50% 55%' },
  galeria: [
    { src: '/img/adventures/aguas-claras-1d/1.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/aguas-claras-1d/2.jpeg', width: 2048, height: 1536 },
    { src: '/img/adventures/aguas-claras-1d/3.jpeg', width: 2048, height: 1536 },
  ],
  stats: [
    ['18 km', '/svg/_icons/icon_03_montain.svg'],
    ['9 km até a cachoeira', '/svg/_icons/icon_09_location.svg'],
    ['1 dia', '/svg/_icons/icon_11_calendar.svg'],
    ['8h00', '/svg/_icons/icon_11_calendar.svg'],
    ['Leve / Moderado', '/svg/_icons/icon_01_3-bars.svg'],
  ],
  fromPrice: 390,
};

export const AGUAS_CLARAS_1D_CONTENT: Record<Locale, DayTourContent> = {
  pt: {
    meta: {
      title: 'Trilha Águas Claras — 1 dia',
      description:
        'Dezoito quilômetros pelos campos gerais até a Cachoeira Águas Claras, com o Morrão de perto e as nascentes do Rio Ribeirão pelo caminho.',
      canonical: '/pt/aventuras/aguas-claras',
    },
    hero: {
      nivel: 'Leve / Moderado',
      origem: 'Origem: Lençóis',
      duracao: '1 dia',
      titulo: 'Trilha Águas Claras.',
      lead: 'Dezoito quilômetros de campo aberto, com serras em todo o horizonte e o Morrão de perto.',
      apartirDe: 'A partir de',
      porPessoa: '/ pessoa',
      reservar: 'Reservar pelo WhatsApp',
    },
    stats: ['Distância a pé', 'Até a cachoeira', 'Duração', 'Saída (Lençóis)', 'Dificuldade'],
    sobre: {
      titulo: 'Sobre a Trilha Águas Claras.',
      paragrafos: [
        'Uma das travessias mais especiais da Chapada Diamantina, e uma das poucas em vegetação aberta — o que aqui se chama de campos gerais, áreas que antigamente serviam à pecuária. O horizonte fica cheio de serras e morros durante todo o trajeto.',
        'É uma região de nascentes, e é dali que brota, entre outras, a do Rio Ribeirão — o mesmo que corta Lençóis. Também se vê o Morrão bem de perto, um dos principais cartões-postais do Vale do Capão; para vê-lo por inteiro é preciso fazer o passeio por uma rota alternativa.',
        'O terreno é majoritariamente plano, o que faz os 18 km serem menos duros do que o número sugere. A volta muda conforme a modalidade escolhida — bate-volta ou travessia —, mas nas duas a distância é praticamente a mesma.',
      ],
    },
    itinerario: {
      titulo: 'Como é o dia.',
      aviso: 'O itinerário pode mudar por condição climática ou por qualquer fator de força maior que a equipe julgue relevante.',
      corpo: [
        'Saída às 8h00 pela BR-242 até a base do Morro do Pai Inácio, onde fica a entrada da trilha.',
        'A caminhada começa numa antiga cabana que servia de ponto de apoio para os viajantes que passavam por ali. Dali são 9 km, cerca de 2 horas, em terreno majoritariamente plano até a Cachoeira Águas Claras — com serras e morros de formatos e tamanhos muito diversos à vista o tempo todo.',
        'Na cachoeira o guia prepara o lanche do grupo, enquanto todos aproveitam a vista das montanhas e o banho de águas cristalinas.',
        'A volta depende da modalidade escolhida: bate-volta pelo mesmo caminho ou travessia saindo por outro ponto. Nas duas opções a distância é de aproximadamente 9 km.',
      ],
    },
    precos: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', preco: 'R$ 450', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', preco: 'R$ 390', nota: 'De 2 a 7 pessoas. Você entra num grupo aberto.' },
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
        recommendedColumns: [['Capa de chuva (corpo e mochila)', 'Bastão de caminhada'], ['Lanche ou fruta', 'Toalha', 'Câmera']],
        note: 'Campo aberto significa sol direto nos 18 km, sem sombra para se abrigar. Chapéu, protetor e água são o que mais pesa aqui.',
      },
      {
        type: 'included',
        title: 'O que está incluso / não incluso',
        included: ['Transfer de ida e volta', 'Guia de montanha com treinamento APH e bilíngue', 'Seguro aventura', 'Kit de primeiros socorros'],
        excluded: ['Qualquer item não listado', 'Piquenique (opcional)', 'Equipamento pessoal', 'Evacuação médica', 'Hospedagem'],
      },
      safetyFaq(
        'pt',
        'A trilha é plana e sem trecho técnico, mas são 18 km em campo aberto, sem sombra em quase todo o percurso. O risco real do dia é insolação e desidratação, não o terreno — leve os 1,5L de água e não conte com abrigo no meio do caminho.',
      ),
      ...DAY_TOUR_LEGAL.pt,
    ],
    cta: {
      titulo: ['Pronto para atravessar', 'os campos gerais?'],
      corpo: 'Conte quantas pessoas, as datas que está considerando e a gente monta a saída com você.',
      botao: 'Falar com a Mamut',
    },
  },
  en: {
    meta: {
      title: 'Águas Claras Trail — 1 day',
      description:
        'Eighteen kilometres across open grassland to Águas Claras Waterfall, with the Morrão close up and the headwaters of the Ribeirão river along the way.',
      canonical: '/en/adventures/aguas-claras-trail-1-day',
    },
    hero: {
      nivel: 'Light / Moderate',
      origem: 'From: Lençóis',
      duracao: '1 day',
      titulo: 'Águas Claras Trail.',
      lead: 'Eighteen kilometres of open country, with ranges filling the horizon and the Morrão close up.',
      apartirDe: 'From',
      porPessoa: '/ person',
      reservar: 'Book on WhatsApp',
    },
    stats: ['Distance on foot', 'To the waterfall', 'Duration', 'Departure (Lençóis)', 'Difficulty'],
    sobre: {
      titulo: 'About the Águas Claras Trail.',
      paragrafos: [
        'One of the most special crossings in the Chapada Diamantina, and one of the few through open vegetation — what is called campos gerais here, land once used for cattle. The horizon stays full of ranges and hills for the whole route.',
        'This is headwater country, and among the springs that rise here is the one that feeds the Ribeirão river — the same one that runs through Lençóis. You also see the Morrão close up, one of the main landmarks of Vale do Capão; to see it in full you need to walk an alternative route.',
        'The ground is mostly flat, which makes the 18 km less punishing than the number suggests. The return changes with the format you choose — there and back, or a full crossing — but the distance is much the same either way.',
      ],
    },
    itinerario: {
      titulo: 'How the day goes.',
      aviso: 'The itinerary may change due to weather conditions or any other factor of force majeure the team considers relevant.',
      corpo: [
        'Departure at 8:00 am along the BR-242 to the foot of Pai Inácio Hill, where the trailhead is.',
        'The walk starts at an old cabin that once served as a waypoint for travellers passing through. From there it is 9 km, around 2 hours, on mostly flat ground to Águas Claras Waterfall — with ranges and hills of every shape and size in view the whole time.',
        'At the waterfall the guide prepares the snack while the group takes in the mountains and swims in the clear water.',
        'The return depends on the format chosen: back the same way, or a crossing that exits at another point. Either option is around 9 km.',
      ],
    },
    precos: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', preco: 'R$ 450', nota: 'Minimum of 2 people. Just your group on the trail.' },
        { titulo: 'Group tour', preco: 'R$ 390', nota: 'From 2 to 7 people. You join an open group.' },
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
        recommendedColumns: [['Rain gear (body and pack)', 'Trekking pole'], ['Snack or fruit', 'Towel', 'Camera']],
        note: 'Open country means direct sun for all 18 km, with no shade to shelter in. Hat, sunscreen and water matter most here.',
      },
      {
        type: 'included',
        title: "What's included / not included",
        included: ['Return transfer', 'Mountain guide with first-aid training, bilingual', 'Adventure insurance', 'First-aid kit'],
        excluded: ['Anything not listed', 'Picnic (optional)', 'Personal gear', 'Medical evacuation', 'Accommodation'],
      },
      safetyFaq(
        'en',
        'The trail is flat and has no technical sections, but it is 18 km of open country with almost no shade. The real risk of the day is heatstroke and dehydration, not the terrain — carry the 1.5L of water and do not count on shelter along the way.',
      ),
      ...DAY_TOUR_LEGAL.en,
    ],
    cta: {
      titulo: ['Ready to cross', 'the open country?'],
      corpo: 'Tell us how many people and the dates you have in mind, and we will put the trip together with you.',
      botao: 'Talk to Mamut',
    },
  },
  es: {
    meta: {
      title: 'Sendero Águas Claras — 1 día',
      description:
        'Dieciocho kilómetros por los campos generales hasta la Cascada Águas Claras, con el Morrão de cerca y las nacientes del Río Ribeirão en el camino.',
      canonical: '/es/aventuras/sendero-aguas-claras-1-dia',
    },
    hero: {
      nivel: 'Suave / Moderado',
      origem: 'Origen: Lençóis',
      duracao: '1 día',
      titulo: 'Sendero Águas Claras.',
      lead: 'Dieciocho kilómetros de campo abierto, con sierras en todo el horizonte y el Morrão de cerca.',
      apartirDe: 'Desde',
      porPessoa: '/ persona',
      reservar: 'Reservar por WhatsApp',
    },
    stats: ['Distancia a pie', 'Hasta la cascada', 'Duración', 'Salida (Lençóis)', 'Dificultad'],
    sobre: {
      titulo: 'Sobre el Sendero Águas Claras.',
      paragrafos: [
        'Una de las travesías más especiales de la Chapada Diamantina, y una de las pocas en vegetación abierta — lo que acá se llama campos generales, áreas que antiguamente servían a la ganadería. El horizonte queda lleno de sierras y morros durante todo el trayecto.',
        'Es una región de nacientes, y de ahí brota, entre otras, la del Río Ribeirão — el mismo que corta Lençóis. También se ve el Morrão bien de cerca, una de las principales postales del Valle do Capão; para verlo entero hay que hacer el paseo por una ruta alternativa.',
        'El terreno es mayormente plano, lo que hace que los 18 km sean menos duros de lo que el número sugiere. La vuelta cambia según la modalidad elegida — ida y vuelta o travesía —, pero en las dos la distancia es prácticamente la misma.',
      ],
    },
    itinerario: {
      titulo: 'Cómo es el día.',
      aviso: 'El itinerario puede cambiar por condiciones climáticas o por cualquier factor de fuerza mayor que el equipo considere relevante.',
      corpo: [
        'Salida a las 8:00 por la BR-242 hasta la base del Morro do Pai Inácio, donde está la entrada del sendero.',
        'La caminata empieza en una antigua cabaña que servía de punto de apoyo para los viajeros que pasaban por ahí. De ahí son 9 km, cerca de 2 horas, en terreno mayormente plano hasta la Cascada Águas Claras — con sierras y morros de formas y tamaños muy diversos a la vista todo el tiempo.',
        'En la cascada el guía prepara el snack del grupo, mientras todos aprovechan la vista de las montañas y el baño de aguas cristalinas.',
        'La vuelta depende de la modalidad elegida: ida y vuelta por el mismo camino o travesía saliendo por otro punto. En las dos opciones la distancia es de aproximadamente 9 km.',
      ],
    },
    precos: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', preco: 'R$ 450', nota: 'Mínimo de 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', preco: 'R$ 390', nota: 'De 2 a 7 personas. Entrás en un grupo abierto.' },
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
        recommendedColumns: [['Piloto de lluvia (cuerpo y mochila)', 'Bastón de caminata'], ['Snack o fruta', 'Toalla', 'Cámara']],
        note: 'Campo abierto significa sol directo en los 18 km, sin sombra donde abrigarse. Sombrero, protector y agua son lo que más pesa acá.',
      },
      {
        type: 'included',
        title: 'Qué está incluido / no incluido',
        included: ['Traslado de ida y vuelta', 'Guía de montaña con formación en primeros auxilios, bilingüe', 'Seguro de aventura', 'Botiquín de primeros auxilios'],
        excluded: ['Cualquier ítem no listado', 'Picnic (opcional)', 'Equipo personal', 'Evacuación médica', 'Alojamiento'],
      },
      safetyFaq(
        'es',
        'El sendero es plano y sin tramos técnicos, pero son 18 km en campo abierto, sin sombra en casi todo el recorrido. El riesgo real del día es la insolación y la deshidratación, no el terreno — llevá los 1,5L de agua y no cuentes con refugio en el medio del camino.',
      ),
      ...DAY_TOUR_LEGAL.es,
    ],
    cta: {
      titulo: ['¿Listo para atravesar', 'los campos generales?'],
      corpo: 'Contanos cuántas personas y las fechas que estás considerando y armamos la salida con vos.',
      botao: 'Hablar con Mamut',
    },
  },
};
