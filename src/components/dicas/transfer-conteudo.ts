import type { MessageLocale } from '@/lib/message-locale';
import type { Locale } from '@/lib/site';
import type { DicasSecao } from './dicas-conteudo';

/**
 * Transfer Salvador × Lençóis — quinta página da seção de dicas.
 *
 * PT vem de mamut.agency/transfer-salvador-para-lencois-chapada-diamantina e
 * EN de /en/transfer-salvador-to-lencois-chapada-diamantina (backup de
 * 21/10/2026). ES, FR, NL e DE são tradução feita aqui.
 *
 * ⚠️ Preços: as versões PT e EN do site antigo divergiam (EN mais caro — SUV
 * R$ 2.199 × R$ 1.999, Econômico R$ 1.999 × R$ 1.799, e os transfers para as
 * outras cidades R$ 200–400 acima). Valem os de PT, em todos os idiomas, até a
 * operadora confirmar. A EN também não tinha "Destinos fora da Chapada".
 *
 * Números (preço, km, horas) moram em `TRANSFER_DADOS` e não se repetem por
 * idioma; o texto mora em `TRANSFER_CONTENT`.
 */

/** Ids de roteiro (`ADVENTURE_ROUTES`) linkados a partir das cidades. */
export type RoteiroLink = { id: string; label: string };

export type TransferContent = {
  secao: DicasSecao;
  intro: string[];
  imagemAlt: string;
  rota: { titulo: string; distancia: string; duracao: string; servico: string; privado: string };
  precos: {
    titulo: string;
    nota: string;
    aPartirDe: string;
    paraAte: string;
    economico: { nome: string; carros: string };
    suv: { nome: string; carros: string };
    van: { nome: string; paraAte: string };
    descontos: [aVista: string, idaEVolta: string];
  };
  incluso: { titulo: string; itens: string[] };
  naoIncluso: { titulo: string; itens: string[] };
  reservar: string;
  chapada: {
    titulo: string;
    lead: string;
    /** Na ordem de `TRANSFER_DADOS.cidades`. */
    cidades: { nome: string; texto: string; roteiros?: RoteiroLink[]; preco: string }[];
    chapadaVelha: string;
    personalizado: { titulo: string; texto: string };
  };
  fora: {
    titulo: string;
    texto: string;
    /** Destaque da rota Lençóis × Valença, a mais procurada (transfer × ônibus). */
    valenca: { titulo: string; texto: string };
    colunas: { destino: string; hatch: string; suv: string; tempo: string };
    horas: string;
  };
  comoChegar: { titulo: string; antes: string; link: string; depois: string };
};

/** Valores comuns a todos os idiomas (preços de PT — ver nota no topo). */
export const TRANSFER_DADOS = {
  distanciaKm: 420,
  /** Salvador × Lençóis, em horas (texto: é uma faixa). */
  duracaoHoras: '6–7',
  economico: 2069,
  /** Van executiva, Salvador × Lençóis, para até 12 pessoas (valor da operadora). */
  van: 3799,
  suv: 2299,
  /** "A partir de", para até 4 pessoas — na ordem de `chapada.cidades`. */
  cidades: [2300, 2070, 2818, 2933] as const,
  /** Destinos fora da Chapada, saindo de Lençóis, para até 4 pessoas. */
  fora: [
    { destino: 'Valença (Morro de São Paulo)', hatch: 2070, suv: 2300, horas: '5–6', km: 350 },
    { destino: 'Itacaré', hatch: 2358, suv: 2588, horas: 6, km: 480 },
    { destino: 'Ilhéus', hatch: 2760, suv: 2990, horas: 8, km: 539 },
    { destino: 'Porto Seguro', hatch: 3795, suv: 4082, horas: 12, km: 795 },
    { destino: 'Vitória da Conquista', hatch: 2185, suv: 2415, horas: 5, km: 410 },
    { destino: 'Feira de Santana', hatch: 1955, suv: 2185, horas: 4, km: 303 },
  ],
  /** Foto do topo e do compartilhamento (Open Graph / WhatsApp), 1440 × 1080. */
  imagem: '/img/dicas/transfer-frota-chapada.jpg',
  imagemLargura: 1440,
  imagemAltura: 1080,
} as const;

/** Mensagem do botão "Reservar" — nos idiomas da equipe (`MESSAGE_LOCALE`). */
export const TRANSFER_WHATSAPP: Record<MessageLocale, string> = {
  pt: 'Olá! Vim pelo site da Mamut e quero reservar um transfer de Salvador para Lençóis.',
  en: 'Hi! I came from the Mamut website and would like to book a transfer from Salvador to Lençóis.',
  fr: 'Bonjour ! Je viens du site de Mamut et je voudrais réserver un transfert de Salvador à Lençóis.',
};

export const TRANSFER_CONTENT: Record<Locale, TransferContent> = {
  pt: {
    secao: {
      nav: 'Transfer Salvador × Lençóis',
      meta: {
        title: 'Transfer Salvador para Lençóis – Chapada Diamantina',
        description:
          'Transfer privado de Salvador a Lençóis (420 km, 6 a 7 horas) com motorista experiente, ar-condicionado e bagageiro. Também para Ibicoara, Mucugê, Vale do Capão e o litoral.',
      },
      titulo: { antes: 'Transfer Salvador para', destaque: 'Lençóis.' },
      lead: 'A forma mais rápida e direta de chegar à Chapada Diamantina: um carro só para o seu grupo, com flexibilidade, conforto e segurança.',
    },
    intro: [
      'A Chapada é um destino imperdível para quem busca aventura, contato com a natureza e experiências autênticas no interior da Bahia — trilhas desafiadoras, visuais de tirar o fôlego e uma história marcante. Ao chegar, espere serras, vales, cavernas, cachoeiras e rios cristalinos, além de vilarejos acolhedores com rica cultura local.',
      'Saindo de Salvador, dá para chegar de ônibus (6 a 8 horas até Lençóis, principal base turística, com saídas diárias pela Guanabara, antiga Rápido Federal), de carro pela BR-324 e BR-242 (cerca de 420 km) ou de avião até o pequeno aeroporto de Lençóis, com voos raros. E a forma mais rápida: um transfer privado com a Mamut.',
      'A vantagem do transfer em relação ao ônibus está na exclusividade e no horário: o carro é só do seu grupo, sai na hora que for melhor para você — direto do aeroporto, da rodoviária ou do hotel em Salvador — e para quando vocês quiserem no caminho.',
    ],
    imagemAlt: 'A frota da Mamut — dois SUVs e uma van — com os morros da Chapada Diamantina ao pôr do sol',
    rota: { titulo: 'Salvador × Lençóis', distancia: 'Distância de carro', duracao: 'Duração', servico: 'Serviço', privado: 'Privado' },
    precos: {
      titulo: 'Preços',
      nota: 'Sujeitos a confirmação: podem mudar conforme o preço dos combustíveis no Brasil.',
      aPartirDe: 'a partir de',
      paraAte: 'para até 3 pessoas',
      economico: { nome: 'Econômico', carros: 'Sandero, Polo ou similar' },
      suv: { nome: 'SUV', carros: 'Renegade, Duster ou similar' },
      van: { nome: 'Van executiva', paraAte: 'para até 12 pessoas' },
      descontos: ['5% de desconto à vista', '10% de desconto em ida e volta'],
    },
    incluso: {
      titulo: 'Incluso',
      itens: ['Ar-condicionado', 'Motorista experiente', 'Bagageiro para até 5 malas', 'Check-in fácil', 'Serviço privado', 'Starlink (opcional)'],
    },
    naoIncluso: {
      titulo: 'Não incluso',
      itens: ['Hospedagem', 'Almoço (opcional)', 'Seguro (opcional)', 'Qualquer item não descrito'],
    },
    reservar: 'Reservar transfer',
    chapada: {
      titulo: 'Outros destinos na Chapada Diamantina',
      lead: 'Além de Lençóis, outras cidades e vilarejos valem a visita durante a sua estadia:',
      cidades: [
        {
          nome: 'Ibicoara',
          texto:
            'Para as cachoeiras do Licuri, Véu de Noiva, Recanto Verde, das Orquídeas e muitas outras, além do turismo de base comunitária no Baixão (zona rural de Ibicoara).',
          roteiros: [
            { id: 'buracao', label: 'Cachoeira do Buracão' },
            { id: 'fumacinha', label: 'Cachoeira da Fumacinha' },
          ],
          preco: 'Transfer a partir de',
        },
        {
          nome: 'Mucugê',
          texto: 'Ótima base para o Poço Azul, a vinícola UVVA e o charme da cidade à noite.',
          preco: 'Transfer a partir de',
        },
        {
          nome: 'Vale do Capão',
          texto:
            'Para as cachoeiras da Angélica, da Purificação, da Engrunada e da Invernada e os Gerais do Vieira, além da gastronomia variada e das terapias alternativas (thetahealing, reiki, ayahuasca, Santo Daime, constelação familiar…).',
          roteiros: [
            { id: 'fumaca', label: 'Cachoeira da Fumaça' },
            { id: 'aguas-claras-1d', label: 'Trilha Águas Claras' },
          ],
          preco: 'Transfer a partir de',
        },
        {
          nome: 'Iraquara',
          texto:
            'Ótimo pernoite na Fazenda Pratinha, principalmente em noites de lua cheia, perto das grutas da Lapa Doce, da Fumaça e da Torrinha. A cidade concentra muitos espeleotemas, graças à formação calcária.',
          preco: 'Transfer a partir de',
        },
      ],
      chapadaVelha:
        'Para as cidades da Chapada Velha — Piatã, Rio de Contas, Morro do Chapéu ou Jacobina —, fale com o nosso atendimento e confira as melhores opções.',
      personalizado: {
        titulo: 'Serviço personalizado',
        texto:
          'Buscamos você e o seu grupo no endereço enviado, no horário combinado, com tolerância de até 1 hora. Flexibilidade, compromisso e empenho para você ter a melhor experiência na Chapada Diamantina.',
      },
    },
    fora: {
      titulo: 'Destinos fora da Chapada Diamantina',
      texto:
        'Também fazemos transfers privados para o litoral e outras cidades da Bahia — rotas mais curtas que as dos ônibus, para quem quer aproveitar mais a Costa do Cacau, a Costa do Dendê ou a Costa do Descobrimento. Valores e tempos aproximados, saindo de Lençóis, para grupos de até 4 pessoas (podem variar com o trânsito e o preço dos combustíveis).',
      valenca: {
        titulo: 'Lençóis × Valença (Morro de São Paulo): 5 a 6 horas',
        texto: 'De ônibus, a viagem entre Lençóis e Valença — porta de entrada para Morro de São Paulo e Boipeba — leva pelo menos 6 horas a mais. Com o transfer direto você chega em 5 a 6 horas, e o tempo que sobra vira um dia a mais de praia.',
      },
      colunas: { destino: 'Destino', hatch: 'Hatch', suv: 'SUV', tempo: 'Tempo e distância' },
      horas: 'h',
    },
    comoChegar: {
      titulo: 'Como chegar a Lençóis',
      antes:
        'De Salvador a Lençóis, onde começa a sua aventura na Chapada Diamantina, há quatro caminhos principais, conforme o orçamento, o tempo e o conforto que você procura. Veja todos em',
      link: 'Como chegar na Chapada Diamantina',
      depois: ', com outras informações úteis sobre a região, que reúne mais de 24 municípios.',
    },
  },

  en: {
    secao: {
      nav: 'Transfer Salvador × Lençóis',
      meta: {
        title: 'Transfer from Salvador to Lençóis – Chapada Diamantina',
        description:
          'Private transfer from Salvador to Lençóis (420 km, 6 to 7 hours) with an experienced driver, air conditioning and room for luggage. Also to Ibicoara, Mucugê, Vale do Capão and the coast.',
      },
      titulo: { antes: 'Transfer from Salvador to', destaque: 'Lençóis.' },
      lead: 'The fastest and most direct way into the Chapada Diamantina: a car just for your group, with flexibility, comfort and safety.',
    },
    intro: [
      'The Chapada is a must for anyone after adventure, nature and authentic experiences in the interior of Bahia — challenging trails, breathtaking views and a remarkable history. Expect mountain ranges, valleys, caves, waterfalls and crystal-clear rivers, as well as welcoming villages with a rich local culture.',
      'From Salvador you can come by bus (6 to 8 hours to Lençóis, the main tourist base, with daily departures by Guanabara, formerly Rápido Federal), drive along the BR-324 and BR-242 (about 420 km) or fly to the small Lençóis airport, which has few flights. And the fastest way: a private transfer with Mamut.',
      'What a transfer gives you over the bus is exclusivity and a flexible schedule: the car is just for your group, it leaves whenever suits you — straight from the airport, the bus station or your hotel in Salvador — and it stops whenever you want along the way.',
    ],
    imagemAlt: 'The Mamut fleet — two SUVs and a van — with the Chapada Diamantina mountains at sunset',
    rota: { titulo: 'Salvador × Lençóis', distancia: 'Distance by car', duracao: 'Duration', servico: 'Service', privado: 'Private' },
    precos: {
      titulo: 'Prices',
      nota: 'Subject to confirmation: they may change with fuel prices in Brazil.',
      aPartirDe: 'from',
      paraAte: 'for up to 3 people',
      economico: { nome: 'Economy', carros: 'Sandero, Polo or similar' },
      suv: { nome: 'SUV', carros: 'Renegade, Duster or similar' },
      van: { nome: 'Executive van', paraAte: 'for up to 12 people' },
      descontos: ['5% off when paid in full', '10% off for a round trip'],
    },
    incluso: {
      titulo: 'Included',
      itens: ['Air conditioning', 'Experienced driver', 'Room for up to 5 bags', 'Easy check-in', 'Private service', 'Starlink (optional)'],
    },
    naoIncluso: {
      titulo: 'Not included',
      itens: ['Accommodation', 'Lunch (optional)', 'Insurance (optional)', 'Anything not listed'],
    },
    reservar: 'Book a transfer',
    chapada: {
      titulo: 'Other destinations in the Chapada Diamantina',
      lead: 'Besides Lençóis, other towns and villages are worth a visit during your stay:',
      cidades: [
        {
          nome: 'Ibicoara',
          texto:
            'For the Licuri, Véu de Noiva, Recanto Verde and Orchid waterfalls and many more, plus community-based tourism in the Baixão (the rural area of Ibicoara).',
          roteiros: [
            { id: 'buracao', label: 'Buracão Waterfall' },
            { id: 'fumacinha', label: 'Fumacinha Waterfall' },
          ],
          preco: 'Transfer from',
        },
        {
          nome: 'Mucugê',
          texto: 'A great base for Poço Azul, the UVVA winery and the charm of the town at night.',
          preco: 'Transfer from',
        },
        {
          nome: 'Vale do Capão',
          texto:
            'For the Angélica, Purificação, Engrunada and Invernada waterfalls and the Gerais do Vieira, plus varied food and alternative therapies (thetahealing, reiki, ayahuasca, Santo Daime, family constellations…).',
          roteiros: [
            { id: 'fumaca', label: 'Fumaça Waterfall' },
            { id: 'aguas-claras-1d', label: 'Águas Claras Trail' },
          ],
          preco: 'Transfer from',
        },
        {
          nome: 'Iraquara',
          texto:
            'A great overnight stay at Fazenda Pratinha, especially on full-moon nights, close to the Lapa Doce, Fumaça and Torrinha caves. Thanks to its limestone, the area has a high concentration of speleothems.',
          preco: 'Transfer from',
        },
      ],
      chapadaVelha:
        'For the towns of the Chapada Velha — Piatã, Rio de Contas, Morro do Chapéu or Jacobina — talk to our team and we will find the best option.',
      personalizado: {
        titulo: 'Personalised service',
        texto:
          'We pick you and your group up at the address you send, at the agreed time, with up to 1 hour of tolerance. Flexibility, commitment and care so you have the best experience in the Chapada Diamantina.',
      },
    },
    fora: {
      titulo: 'Destinations outside the Chapada Diamantina',
      texto:
        'We also run private transfers to the coast and other towns in Bahia — shorter routes than the buses take, for anyone who wants more time on the Cocoa Coast, the Dendê Coast or the Discovery Coast. Approximate prices and times from Lençóis, for groups of up to 4 people (they may vary with traffic and fuel prices).',
      valenca: {
        titulo: 'Lençóis × Valença (Morro de São Paulo): 5 to 6 hours',
        texto: 'By bus, the trip between Lençóis and Valença — the gateway to Morro de São Paulo and Boipeba — takes at least 6 hours longer. With a direct transfer you get there in 5 to 6 hours, and the time you save becomes an extra day at the beach.',
      },
      colunas: { destino: 'Destination', hatch: 'Hatchback', suv: 'SUV', tempo: 'Time and distance' },
      horas: 'h',
    },
    comoChegar: {
      titulo: 'How to get to Lençóis',
      antes:
        'From Salvador to Lençóis, where your adventure in the Chapada Diamantina begins, there are four main routes, depending on your budget, time and the comfort you want. See them all on',
      link: 'How to get to the Chapada Diamantina',
      depois: ', along with other useful information about the region, which spans more than 24 municipalities.',
    },
  },

  es: {
    secao: {
      nav: 'Traslado Salvador × Lençóis',
      meta: {
        title: 'Traslado de Salvador a Lençóis – Chapada Diamantina',
        description:
          'Traslado privado de Salvador a Lençóis (420 km, de 6 a 7 horas) con conductor experimentado, aire acondicionado y lugar para el equipaje. También a Ibicoara, Mucugê, Vale do Capão y la costa.',
      },
      titulo: { antes: 'Traslado de Salvador a', destaque: 'Lençóis.' },
      lead: 'La forma más rápida y directa de llegar a la Chapada Diamantina: un auto solo para tu grupo, con flexibilidad, comodidad y seguridad.',
    },
    intro: [
      'La Chapada es un destino imperdible para quien busca aventura, naturaleza y experiencias auténticas en el interior de Bahía: senderos desafiantes, paisajes que quitan el aliento y una historia marcante. Al llegar, esperá sierras, valles, cuevas, cascadas y ríos cristalinos, además de pueblos acogedores con una rica cultura local.',
      'Desde Salvador se puede llegar en ómnibus (6 a 8 horas hasta Lençóis, la principal base turística, con salidas diarias de Guanabara, ex Rápido Federal), en auto por la BR-324 y la BR-242 (unos 420 km) o en avión hasta el pequeño aeropuerto de Lençóis, con pocos vuelos. Y la forma más rápida: un traslado privado con Mamut.',
      'La ventaja del transfer frente al bus es la exclusividad y el horario flexible: el auto es solo para tu grupo, sale a la hora que te quede mejor — directo del aeropuerto, de la terminal o del hotel en Salvador — y para cuando quieran en el camino.',
    ],
    imagemAlt: 'La flota de Mamut — dos SUV y una van — con los morros de la Chapada Diamantina al atardecer',
    rota: { titulo: 'Salvador × Lençóis', distancia: 'Distancia en auto', duracao: 'Duración', servico: 'Servicio', privado: 'Privado' },
    precos: {
      titulo: 'Precios',
      nota: 'Sujetos a confirmación: pueden cambiar según el precio del combustible en Brasil.',
      aPartirDe: 'desde',
      paraAte: 'hasta 3 personas',
      economico: { nome: 'Económico', carros: 'Sandero, Polo o similar' },
      suv: { nome: 'SUV', carros: 'Renegade, Duster o similar' },
      van: { nome: 'Van ejecutiva', paraAte: 'hasta 12 personas' },
      descontos: ['5% de descuento pagando al contado', '10% de descuento en ida y vuelta'],
    },
    incluso: {
      titulo: 'Incluye',
      itens: ['Aire acondicionado', 'Conductor experimentado', 'Lugar para hasta 5 valijas', 'Check-in fácil', 'Servicio privado', 'Starlink (opcional)'],
    },
    naoIncluso: {
      titulo: 'No incluye',
      itens: ['Alojamiento', 'Almuerzo (opcional)', 'Seguro (opcional)', 'Cualquier ítem no descrito'],
    },
    reservar: 'Reservar traslado',
    chapada: {
      titulo: 'Otros destinos en la Chapada Diamantina',
      lead: 'Además de Lençóis, otras ciudades y pueblos merecen una visita durante tu estadía:',
      cidades: [
        {
          nome: 'Ibicoara',
          texto:
            'Para las cascadas del Licuri, Véu de Noiva, Recanto Verde, de las Orquídeas y muchas más, además del turismo comunitario en el Baixão (zona rural de Ibicoara).',
          roteiros: [
            { id: 'buracao', label: 'Cascada do Buracão' },
            { id: 'fumacinha', label: 'Cascada da Fumacinha' },
          ],
          preco: 'Traslado desde',
        },
        {
          nome: 'Mucugê',
          texto: 'Muy buena base para el Poço Azul, la bodega UVVA y el encanto de la ciudad de noche.',
          preco: 'Traslado desde',
        },
        {
          nome: 'Vale do Capão',
          texto:
            'Para las cascadas de la Angélica, la Purificação, la Engrunada y la Invernada y los Gerais do Vieira, además de una gastronomía variada y terapias alternativas (thetahealing, reiki, ayahuasca, Santo Daime, constelaciones familiares…).',
          roteiros: [
            { id: 'fumaca', label: 'Cascada da Fumaça' },
            { id: 'aguas-claras-1d', label: 'Sendero Águas Claras' },
          ],
          preco: 'Traslado desde',
        },
        {
          nome: 'Iraquara',
          texto:
            'Muy buena para pasar la noche en la Fazenda Pratinha, sobre todo con luna llena, cerca de las grutas de Lapa Doce, da Fumaça y da Torrinha. Gracias a la formación calcárea, concentra muchos espeleotemas.',
          preco: 'Traslado desde',
        },
      ],
      chapadaVelha:
        'Para las ciudades de la Chapada Velha —Piatã, Rio de Contas, Morro do Chapéu o Jacobina—, escribinos y te mostramos las mejores opciones.',
      personalizado: {
        titulo: 'Servicio personalizado',
        texto:
          'Te buscamos a vos y a tu grupo en la dirección que nos mandes, en el horario acordado, con una tolerancia de hasta 1 hora. Flexibilidad, compromiso y dedicación para que tengas la mejor experiencia en la Chapada Diamantina.',
      },
    },
    fora: {
      titulo: 'Destinos fuera de la Chapada Diamantina',
      texto:
        'También hacemos traslados privados a la costa y a otras ciudades de Bahía: rutas más cortas que las de los ómnibus, para quien quiere aprovechar más la Costa del Cacao, la Costa del Dendê o la Costa del Descubrimiento. Valores y tiempos aproximados, saliendo de Lençóis, para grupos de hasta 4 personas (pueden variar con el tránsito y el precio del combustible).',
      valenca: {
        titulo: 'Lençóis × Valença (Morro de São Paulo): de 5 a 6 horas',
        texto: 'En bus, el viaje entre Lençóis y Valença — la puerta de entrada a Morro de São Paulo y Boipeba — lleva por lo menos 6 horas más. Con el transfer directo llegás en 5 a 6 horas, y el tiempo que ahorrás se convierte en un día más de playa.',
      },
      colunas: { destino: 'Destino', hatch: 'Hatchback', suv: 'SUV', tempo: 'Tiempo y distancia' },
      horas: 'h',
    },
    comoChegar: {
      titulo: 'Cómo llegar a Lençóis',
      antes:
        'De Salvador a Lençóis, donde empieza tu aventura en la Chapada Diamantina, hay cuatro caminos principales, según tu presupuesto, tu tiempo y la comodidad que buscás. Miralos todos en',
      link: 'Cómo llegar a la Chapada Diamantina',
      depois: ', junto con otra información útil sobre la región, que reúne más de 24 municipios.',
    },
  },

  fr: {
    secao: {
      nav: 'Transfert Salvador × Lençóis',
      meta: {
        title: 'Transfert de Salvador à Lençóis – Chapada Diamantina',
        description:
          'Transfert privé de Salvador à Lençóis (420 km, 6 à 7 heures) avec chauffeur expérimenté, climatisation et place pour les bagages. Aussi vers Ibicoara, Mucugê, le Vale do Capão et la côte.',
      },
      titulo: { antes: 'Transfert de Salvador à', destaque: 'Lençóis.' },
      lead: 'Le moyen le plus rapide et le plus direct de rejoindre la Chapada Diamantina : une voiture rien que pour votre groupe, avec souplesse, confort et sécurité.',
    },
    intro: [
      'La Chapada est un incontournable pour qui cherche l’aventure, la nature et des expériences authentiques dans l’intérieur de Bahia : sentiers exigeants, panoramas à couper le souffle et une histoire marquante. Attendez-vous à des sierras, des vallées, des grottes, des cascades et des rivières cristallines, ainsi qu’à des villages accueillants à la culture riche.',
      'Depuis Salvador, on peut venir en bus (6 à 8 heures jusqu’à Lençóis, la principale base touristique, avec des départs quotidiens de la compagnie Guanabara, ex-Rápido Federal), en voiture par la BR-324 et la BR-242 (environ 420 km) ou en avion jusqu’au petit aéroport de Lençóis, peu desservi. Et le plus rapide : un transfert privé avec Mamut.',
      'Par rapport au bus, le transfert offre l’exclusivité et un horaire flexible : la voiture est réservée à votre groupe, elle part à l’heure qui vous convient — directement de l’aéroport, de la gare routière ou de votre hôtel à Salvador — et s’arrête quand vous le souhaitez en route.',
    ],
    imagemAlt: 'La flotte de Mamut — deux SUV et un van — devant les montagnes de la Chapada Diamantina au coucher du soleil',
    rota: { titulo: 'Salvador × Lençóis', distancia: 'Distance en voiture', duracao: 'Durée', servico: 'Service', privado: 'Privé' },
    precos: {
      titulo: 'Tarifs',
      nota: 'Sous réserve de confirmation : ils peuvent varier selon le prix du carburant au Brésil.',
      aPartirDe: 'à partir de',
      paraAte: 'jusqu’à 3 personnes',
      economico: { nome: 'Économique', carros: 'Sandero, Polo ou similaire' },
      suv: { nome: 'SUV', carros: 'Renegade, Duster ou similaire' },
      van: { nome: 'Van exécutif', paraAte: 'jusqu’à 12 personnes' },
      descontos: ['5 % de remise pour un paiement comptant', '10 % de remise pour un aller-retour'],
    },
    incluso: {
      titulo: 'Inclus',
      itens: ['Climatisation', 'Chauffeur expérimenté', 'Place pour 5 valises', 'Prise en charge simple', 'Service privé', 'Starlink (en option)'],
    },
    naoIncluso: {
      titulo: 'Non inclus',
      itens: ['Hébergement', 'Déjeuner (en option)', 'Assurance (en option)', 'Tout ce qui n’est pas mentionné'],
    },
    reservar: 'Réserver un transfert',
    chapada: {
      titulo: 'Autres destinations dans la Chapada Diamantina',
      lead: 'Au-delà de Lençóis, d’autres villes et villages méritent le détour pendant votre séjour :',
      cidades: [
        {
          nome: 'Ibicoara',
          texto:
            'Pour les cascades du Licuri, Véu de Noiva, Recanto Verde, des Orchidées et bien d’autres, ainsi que le tourisme communautaire du Baixão (zone rurale d’Ibicoara).',
          roteiros: [
            { id: 'buracao', label: 'Cascade du Buracão' },
            { id: 'fumacinha', label: 'Cascade da Fumacinha' },
          ],
          preco: 'Transfert à partir de',
        },
        {
          nome: 'Mucugê',
          texto: 'Une excellente base pour le Poço Azul, le domaine viticole UVVA et le charme de la ville le soir.',
          preco: 'Transfert à partir de',
        },
        {
          nome: 'Vale do Capão',
          texto:
            'Pour les cascades de l’Angélica, de la Purificação, de l’Engrunada et de l’Invernada et les Gerais do Vieira, ainsi qu’une gastronomie variée et des thérapies alternatives (thetahealing, reiki, ayahuasca, Santo Daime, constellations familiales…).',
          roteiros: [
            { id: 'fumaca', label: 'Cascade da Fumaça' },
            { id: 'aguas-claras-1d', label: 'Sentier d’Águas Claras' },
          ],
          preco: 'Transfert à partir de',
        },
        {
          nome: 'Iraquara',
          texto:
            'Idéal pour une nuit à la Fazenda Pratinha, surtout les soirs de pleine lune, près des grottes de Lapa Doce, da Fumaça et da Torrinha. Grâce au calcaire, la région concentre de nombreux spéléothèmes.',
          preco: 'Transfert à partir de',
        },
      ],
      chapadaVelha:
        'Pour les villes de la Chapada Velha — Piatã, Rio de Contas, Morro do Chapéu ou Jacobina —, contactez notre équipe pour trouver la meilleure option.',
      personalizado: {
        titulo: 'Service sur mesure',
        texto:
          'Nous venons vous chercher, vous et votre groupe, à l’adresse indiquée, à l’heure convenue, avec une tolérance d’une heure. Souplesse, engagement et attention pour que vous viviez la meilleure expérience dans la Chapada Diamantina.',
      },
    },
    fora: {
      titulo: 'Destinations hors de la Chapada Diamantina',
      texto:
        'Nous assurons aussi des transferts privés vers la côte et d’autres villes de Bahia — des trajets plus courts que ceux des bus, pour profiter davantage de la Costa do Cacau, de la Costa do Dendê ou de la Costa do Descobrimento. Tarifs et durées approximatifs au départ de Lençóis, pour des groupes jusqu’à 4 personnes (ils peuvent varier selon la circulation et le prix du carburant).',
      valenca: {
        titulo: 'Lençóis × Valença (Morro de São Paulo) : 5 à 6 heures',
        texto: 'En bus, le trajet entre Lençóis et Valença — porte d’entrée de Morro de São Paulo et de Boipeba — prend au moins 6 heures de plus. Avec un transfert direct, vous y êtes en 5 à 6 heures, et le temps gagné devient une journée de plage en plus.',
      },
      colunas: { destino: 'Destination', hatch: 'Citadine', suv: 'SUV', tempo: 'Durée et distance' },
      horas: 'h',
    },
    comoChegar: {
      titulo: 'Comment rejoindre Lençóis',
      antes:
        'De Salvador à Lençóis, point de départ de votre aventure dans la Chapada Diamantina, il existe quatre trajets principaux selon votre budget, votre temps et le confort recherché. Retrouvez-les tous sur',
      link: 'Comment rejoindre la Chapada Diamantina',
      depois: ', avec d’autres informations utiles sur la région, qui compte plus de 24 communes.',
    },
  },

  nl: {
    secao: {
      nav: 'Transfer Salvador × Lençóis',
      meta: {
        title: 'Transfer van Salvador naar Lençóis – Chapada Diamantina',
        description:
          'Privétransfer van Salvador naar Lençóis (420 km, 6 tot 7 uur) met een ervaren chauffeur, airco en ruimte voor bagage. Ook naar Ibicoara, Mucugê, Vale do Capão en de kust.',
      },
      titulo: { antes: 'Transfer van Salvador naar', destaque: 'Lençóis.' },
      lead: 'De snelste en meest directe manier naar de Chapada Diamantina: een auto alleen voor jouw groep, flexibel, comfortabel en veilig.',
    },
    intro: [
      'De Chapada is een must voor wie avontuur, natuur en authentieke ervaringen zoekt in het binnenland van Bahia: uitdagende wandelpaden, adembenemende uitzichten en een bijzondere geschiedenis. Verwacht bergketens, dalen, grotten, watervallen en kristalheldere rivieren, en gastvrije dorpen met een rijke lokale cultuur.',
      'Vanuit Salvador kun je met de bus komen (6 tot 8 uur naar Lençóis, de belangrijkste toeristische uitvalsbasis, met dagelijkse ritten van Guanabara, voorheen Rápido Federal), met de auto over de BR-324 en BR-242 (ongeveer 420 km) of met het vliegtuig naar het kleine vliegveld van Lençóis, met weinig vluchten. En het snelst: een privétransfer met Mamut.',
      'Het voordeel van een transfer boven de bus is exclusiviteit en een flexibel vertrektijdstip: de auto is alleen voor jouw groep, vertrekt wanneer het jou uitkomt — direct vanaf het vliegveld, het busstation of je hotel in Salvador — en stopt onderweg wanneer jullie willen.',
    ],
    imagemAlt: 'De vloot van Mamut — twee SUV’s en een busje — met de bergen van de Chapada Diamantina bij zonsondergang',
    rota: { titulo: 'Salvador × Lençóis', distancia: 'Afstand met de auto', duracao: 'Duur', servico: 'Service', privado: 'Privé' },
    precos: {
      titulo: 'Prijzen',
      nota: 'Onder voorbehoud: ze kunnen veranderen met de brandstofprijzen in Brazilië.',
      aPartirDe: 'vanaf',
      paraAte: 'voor maximaal 3 personen',
      economico: { nome: 'Voordelig', carros: 'Sandero, Polo of vergelijkbaar' },
      suv: { nome: 'SUV', carros: 'Renegade, Duster of vergelijkbaar' },
      van: { nome: 'Luxe busje', paraAte: 'voor maximaal 12 personen' },
      descontos: ['5% korting bij vooruitbetaling', '10% korting op een retour'],
    },
    incluso: {
      titulo: 'Inbegrepen',
      itens: ['Airco', 'Ervaren chauffeur', 'Ruimte voor maximaal 5 koffers', 'Eenvoudig ophalen', 'Privéservice', 'Starlink (optioneel)'],
    },
    naoIncluso: {
      titulo: 'Niet inbegrepen',
      itens: ['Accommodatie', 'Lunch (optioneel)', 'Verzekering (optioneel)', 'Alles wat niet genoemd is'],
    },
    reservar: 'Transfer boeken',
    chapada: {
      titulo: 'Andere bestemmingen in de Chapada Diamantina',
      lead: 'Naast Lençóis zijn andere stadjes en dorpen tijdens je verblijf een bezoek waard:',
      cidades: [
        {
          nome: 'Ibicoara',
          texto:
            'Voor de watervallen Licuri, Véu de Noiva, Recanto Verde, Orquídeas en nog veel meer, plus kleinschalig toerisme van de lokale gemeenschap in de Baixão (het platteland van Ibicoara).',
          roteiros: [
            { id: 'buracao', label: 'Waterval Buracão' },
            { id: 'fumacinha', label: 'Waterval Fumacinha' },
          ],
          preco: 'Transfer vanaf',
        },
        {
          nome: 'Mucugê',
          texto: 'Een prima uitvalsbasis voor de Poço Azul, wijngoed UVVA en de charme van het stadje ’s avonds.',
          preco: 'Transfer vanaf',
        },
        {
          nome: 'Vale do Capão',
          texto:
            'Voor de watervallen Angélica, Purificação, Engrunada en Invernada en de Gerais do Vieira, plus gevarieerd eten en alternatieve therapieën (thetahealing, reiki, ayahuasca, Santo Daime, familieopstellingen…).',
          roteiros: [
            { id: 'fumaca', label: 'Waterval Fumaça' },
            { id: 'aguas-claras-1d', label: 'Wandelpad Águas Claras' },
          ],
          preco: 'Transfer vanaf',
        },
        {
          nome: 'Iraquara',
          texto:
            'Fijn om te overnachten op de Fazenda Pratinha, vooral bij volle maan, dicht bij de grotten Lapa Doce, Fumaça en Torrinha. Door de kalksteen telt de streek veel druipsteenformaties.',
          preco: 'Transfer vanaf',
        },
      ],
      chapadaVelha:
        'Voor de stadjes van de Chapada Velha — Piatã, Rio de Contas, Morro do Chapéu of Jacobina — neem je contact met ons op en zoeken we de beste optie.',
      personalizado: {
        titulo: 'Service op maat',
        texto:
          'We halen jou en je groep op het opgegeven adres op, op het afgesproken tijdstip, met tot 1 uur speling. Flexibiliteit, betrokkenheid en inzet, zodat je de beste ervaring hebt in de Chapada Diamantina.',
      },
    },
    fora: {
      titulo: 'Bestemmingen buiten de Chapada Diamantina',
      texto:
        'We rijden ook privétransfers naar de kust en andere steden in Bahia — kortere routes dan de bus, voor wie meer tijd wil aan de Costa do Cacau, de Costa do Dendê of de Costa do Descobrimento. Prijzen en reistijden zijn indicatief, vanuit Lençóis, voor groepen tot 4 personen (ze kunnen variëren met verkeer en brandstofprijzen).',
      valenca: {
        titulo: 'Lençóis × Valença (Morro de São Paulo): 5 tot 6 uur',
        texto: 'Met de bus duurt de reis tussen Lençóis en Valença — de toegangspoort tot Morro de São Paulo en Boipeba — minstens 6 uur langer. Met een directe transfer ben je er in 5 tot 6 uur, en de tijd die je wint wordt een extra stranddag.',
      },
      colunas: { destino: 'Bestemming', hatch: 'Hatchback', suv: 'SUV', tempo: 'Tijd en afstand' },
      horas: 'u',
    },
    comoChegar: {
      titulo: 'Hoe kom je in Lençóis',
      antes:
        'Van Salvador naar Lençóis, waar je avontuur in de Chapada Diamantina begint, zijn er vier hoofdroutes, afhankelijk van je budget, je tijd en het comfort dat je zoekt. Je vindt ze allemaal op',
      link: 'Hoe kom je in de Chapada Diamantina',
      depois: ', met nog meer handige informatie over de regio, die meer dan 24 gemeenten telt.',
    },
  },

  de: {
    secao: {
      nav: 'Transfer Salvador × Lençóis',
      meta: {
        title: 'Transfer von Salvador nach Lençóis – Chapada Diamantina',
        description:
          'Privattransfer von Salvador nach Lençóis (420 km, 6 bis 7 Stunden) mit erfahrenem Fahrer, Klimaanlage und Platz für Gepäck. Auch nach Ibicoara, Mucugê, ins Vale do Capão und an die Küste.',
      },
      titulo: { antes: 'Transfer von Salvador nach', destaque: 'Lençóis.' },
      lead: 'Der schnellste und direkteste Weg in die Chapada Diamantina: ein Auto nur für deine Gruppe, flexibel, bequem und sicher.',
    },
    intro: [
      'Die Chapada ist ein Muss für alle, die im Landesinneren Bahias Abenteuer, Natur und echte Erlebnisse suchen: anspruchsvolle Wanderwege, atemberaubende Ausblicke und eine bewegte Geschichte. Dich erwarten Bergketten, Täler, Höhlen, Wasserfälle und kristallklare Flüsse – und gastfreundliche Dörfer mit reicher lokaler Kultur.',
      'Von Salvador aus kommst du mit dem Bus (6 bis 8 Stunden bis Lençóis, dem wichtigsten touristischen Ausgangspunkt, mit täglichen Fahrten von Guanabara, früher Rápido Federal), mit dem Auto über die BR-324 und BR-242 (rund 420 km) oder mit dem Flugzeug zum kleinen Flughafen von Lençóis, der selten angeflogen wird. Am schnellsten geht es mit einem Privattransfer von Mamut.',
      'Der Vorteil eines Transfers gegenüber dem Bus: Exklusivität und eine flexible Abfahrtszeit. Das Auto gehört nur deiner Gruppe, fährt los, wann es dir passt — direkt vom Flughafen, vom Busbahnhof oder von deinem Hotel in Salvador — und hält unterwegs, wann immer ihr wollt.',
    ],
    imagemAlt: 'Die Mamut-Flotte — zwei SUVs und ein Kleinbus — vor den Bergen der Chapada Diamantina bei Sonnenuntergang',
    rota: { titulo: 'Salvador × Lençóis', distancia: 'Strecke mit dem Auto', duracao: 'Dauer', servico: 'Service', privado: 'Privat' },
    precos: {
      titulo: 'Preise',
      nota: 'Ohne Gewähr: Sie können sich mit den Kraftstoffpreisen in Brasilien ändern.',
      aPartirDe: 'ab',
      paraAte: 'für bis zu 3 Personen',
      economico: { nome: 'Kompakt', carros: 'Sandero, Polo oder ähnlich' },
      suv: { nome: 'SUV', carros: 'Renegade, Duster oder ähnlich' },
      van: { nome: 'Executive-Van', paraAte: 'für bis zu 12 Personen' },
      descontos: ['5 % Rabatt bei Vorauszahlung', '10 % Rabatt auf Hin- und Rückfahrt'],
    },
    incluso: {
      titulo: 'Inklusive',
      itens: ['Klimaanlage', 'Erfahrener Fahrer', 'Platz für bis zu 5 Koffer', 'Einfache Abholung', 'Privater Service', 'Starlink (optional)'],
    },
    naoIncluso: {
      titulo: 'Nicht inklusive',
      itens: ['Unterkunft', 'Mittagessen (optional)', 'Versicherung (optional)', 'Alles, was nicht aufgeführt ist'],
    },
    reservar: 'Transfer buchen',
    chapada: {
      titulo: 'Weitere Ziele in der Chapada Diamantina',
      lead: 'Neben Lençóis lohnen sich während deines Aufenthalts weitere Orte und Dörfer:',
      cidades: [
        {
          nome: 'Ibicoara',
          texto:
            'Für die Wasserfälle Licuri, Véu de Noiva, Recanto Verde, Orquídeas und viele mehr – dazu gemeindebasierter Tourismus im Baixão (dem ländlichen Gebiet von Ibicoara).',
          roteiros: [
            { id: 'buracao', label: 'Buracão-Wasserfall' },
            { id: 'fumacinha', label: 'Fumacinha-Wasserfall' },
          ],
          preco: 'Transfer ab',
        },
        {
          nome: 'Mucugê',
          texto: 'Ein guter Ausgangspunkt für den Poço Azul, das Weingut UVVA und den abendlichen Charme des Städtchens.',
          preco: 'Transfer ab',
        },
        {
          nome: 'Vale do Capão',
          texto:
            'Für die Wasserfälle Angélica, Purificação, Engrunada und Invernada und die Gerais do Vieira – dazu vielfältige Küche und alternative Therapien (Thetahealing, Reiki, Ayahuasca, Santo Daime, Familienaufstellungen…).',
          roteiros: [
            { id: 'fumaca', label: 'Fumaça-Wasserfall' },
            { id: 'aguas-claras-1d', label: 'Águas-Claras-Wanderweg' },
          ],
          preco: 'Transfer ab',
        },
        {
          nome: 'Iraquara',
          texto:
            'Ideal für eine Übernachtung auf der Fazenda Pratinha, besonders bei Vollmond, nahe den Höhlen Lapa Doce, Fumaça und Torrinha. Dank des Kalksteins gibt es hier besonders viele Tropfsteinformationen.',
          preco: 'Transfer ab',
        },
      ],
      chapadaVelha:
        'Für die Orte der Chapada Velha – Piatã, Rio de Contas, Morro do Chapéu oder Jacobina – schreib uns, und wir finden die beste Option.',
      personalizado: {
        titulo: 'Individueller Service',
        texto:
          'Wir holen dich und deine Gruppe an der angegebenen Adresse ab, zur vereinbarten Zeit, mit bis zu 1 Stunde Spielraum. Flexibilität, Verlässlichkeit und Einsatz, damit du das beste Erlebnis in der Chapada Diamantina hast.',
      },
    },
    fora: {
      titulo: 'Ziele außerhalb der Chapada Diamantina',
      texto:
        'Wir fahren auch Privattransfers an die Küste und in andere Städte Bahias – kürzere Strecken als mit dem Bus, für alle, die mehr Zeit an der Costa do Cacau, der Costa do Dendê oder der Costa do Descobrimento haben wollen. Preise und Fahrzeiten sind ungefähre Angaben ab Lençóis, für Gruppen bis 4 Personen (je nach Verkehr und Kraftstoffpreisen).',
      valenca: {
        titulo: 'Lençóis × Valença (Morro de São Paulo): 5 bis 6 Stunden',
        texto: 'Mit dem Bus dauert die Fahrt zwischen Lençóis und Valença — dem Tor nach Morro de São Paulo und Boipeba — mindestens 6 Stunden länger. Mit dem direkten Transfer bist du in 5 bis 6 Stunden dort, und die gewonnene Zeit wird zu einem zusätzlichen Strandtag.',
      },
      colunas: { destino: 'Ziel', hatch: 'Kompaktwagen', suv: 'SUV', tempo: 'Dauer und Strecke' },
      horas: 'Std.',
    },
    comoChegar: {
      titulo: 'So kommst du nach Lençóis',
      antes:
        'Von Salvador nach Lençóis, wo dein Abenteuer in der Chapada Diamantina beginnt, gibt es vier Hauptwege – je nach Budget, Zeit und gewünschtem Komfort. Alle findest du unter',
      link: 'So kommst du in die Chapada Diamantina',
      depois: ', zusammen mit weiteren nützlichen Infos über die Region, die mehr als 24 Gemeinden umfasst.',
    },
  },
};
