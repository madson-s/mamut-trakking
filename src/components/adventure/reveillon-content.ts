import type { PatiFaqItem } from './PatiFaqList';

export type ReveillonPackageKey = '4-dias' | '5-dias' | '6-dias';

export type ReveillonItineraryDay = {
  date: string;
  title: string;
  description: string;
  walking: string;
  driving?: string;
};

export type ReveillonPackage = {
  key: ReveillonPackageKey;
  days: string;
  dates: string;
  places: string;
  price: number;
  image: string;
  imageAlt: string;
  pitch: string;
  highlights: readonly string[];
  itinerary: readonly ReveillonItineraryDay[];
};

export const REVEILLON_META = {
  title: 'Réveillon na Chapada Diamantina 2027',
  description:
    'Pacotes de 4, 5 e 6 dias para viver o Réveillon 2027 entre trilhas, cachoeiras e paisagens da Chapada Diamantina.',
  image: '/img/home_backgroud/home_hero_background_1_5x.webp',
} as const;

export const REVEILLON_PACKAGES: readonly ReveillonPackage[] = [
  {
    key: '4-dias',
    days: '4 dias',
    dates: '29 dez 2026 — 1 jan 2027',
    places: 'Lençóis · Iraquara',
    price: 2369,
    image: '/img/home_backgroud/home_backgroud_04_no_crop_1x.webp',
    imageAlt: 'Pôr do sol entre as montanhas da Chapada Diamantina',
    pitch: 'Uma virada com base em Lençóis e quatro dias de banho, mirantes e trilhas clássicas.',
    highlights: [
      'Parque da Muritiba',
      'Fazenda Pratinha',
      'Cachoeira do Mosquito',
      'Morro do Pai Inácio',
      'Cachoeira da Fumaça',
    ],
    itinerary: [
      {
        date: '29/12',
        title: 'Muritiba + Ribeirão do Meio',
        description: 'Chegada em Lençóis e primeiro mergulho nos circuitos naturais mais próximos da cidade.',
        walking: '4 km a pé',
      },
      {
        date: '30/12',
        title: 'Grutas, Pratinha + Mirante do Camelo',
        description: 'Um dia entre formações subterrâneas, água cristalina e a silhueta mais emblemática da região.',
        walking: '2 km a pé',
        driving: '156 km de carro',
      },
      {
        date: '31/12',
        title: 'Mosquito + Mucugezinho + Pai Inácio',
        description: 'Cachoeiras durante o dia e o horizonte da Chapada como cenário para encerrar o ano.',
        walking: '2 km a pé',
        driving: '120 km de carro',
      },
      {
        date: '01/01',
        title: 'Cachoeira da Fumaça',
        description: 'O primeiro grande desafio de 2027 leva ao topo de uma das quedas mais famosas do Brasil.',
        walking: '12 km a pé',
        driving: '160 km de carro',
      },
    ],
  },
  {
    key: '5-dias',
    days: '5 dias',
    dates: '29 dez 2026 — 2 jan 2027',
    places: 'Lençóis · Vale do Pati · Ibicoara',
    price: 3559,
    image: '/img/figma/destinations/vale-do-pati-3/cta-morro-do-castelo.png',
    imageAlt: 'Montanhas e trilhas do Vale do Pati',
    pitch: 'A travessia entra no centro da viagem: três dias de Pati antes das águas do sul da Chapada.',
    highlights: [
      'Vale do Pati em 3 dias',
      'Morro do Castelo',
      'Cachoeirão',
      'Cachoeira do Buracão',
      'Poço Azul',
    ],
    itinerary: [
      {
        date: '29/12',
        title: 'Lençóis → Guiné + Mirante da Rampa',
        description: 'Transfer para Guiné, subida da Rampa e a primeira visão panorâmica do Vale do Pati.',
        walking: '10 km a pé',
        driving: '80 km de carro',
      },
      {
        date: '30/12',
        title: 'Morro do Castelo',
        description: 'Travessia por dentro da montanha e vista elevada para os vales que cercam o Pati.',
        walking: '8 km a pé',
      },
      {
        date: '31/12',
        title: 'Cachoeirão + transfer para Ibicoara',
        description: 'Caminhada longa até o mirante do Cachoeirão antes de seguir para o sul da Chapada.',
        walking: '22 km a pé',
        driving: '97 km de carro',
      },
      {
        date: '01/01',
        title: 'Cachoeira do Buracão',
        description: 'O ano começa dentro do cânion, entre passarelas, rio e a força da queda-d’água.',
        walking: '6 km a pé',
        driving: '40 km de carro',
      },
      {
        date: '02/01',
        title: 'Poço Azul + Mosquito + Lençóis',
        description: 'Flutuação, banho de cachoeira e retorno a Lençóis para fechar a expedição.',
        walking: '2 km a pé',
        driving: '187 km de carro',
      },
    ],
  },
  {
    key: '6-dias',
    days: '6 dias',
    dates: '28 dez 2026 — 2 jan 2027',
    places: 'Lençóis · Mucugê · Vale do Pati · Ibicoara',
    price: 4979,
    image: '/img/adventures/fumacinha/hero.jpg',
    imageAlt: 'Cachoeira da Fumacinha entre paredões de pedra',
    pitch: 'A experiência mais completa: Pati, grandes cachoeiras e seis dias atravessando diferentes paisagens.',
    highlights: [
      'Vale do Pati em 3 dias',
      'Cachoeirão',
      'Cachoeira do Buracão',
      'Cachoeira da Fumacinha',
      'Poço Azul',
    ],
    itinerary: [
      {
        date: '28/12',
        title: 'Lençóis → Guiné + Mirante da Rampa',
        description: 'A viagem começa com a entrada clássica do Vale do Pati e a chegada à casa de nativos.',
        walking: '10 km a pé',
        driving: '80 km de carro',
      },
      {
        date: '29/12',
        title: 'Morro do Castelo',
        description: 'Cavernas, altitude e um dos panoramas mais marcantes do trekking no Pati.',
        walking: '8 km a pé',
      },
      {
        date: '30/12',
        title: 'Cachoeirão + transfer para Ibicoara',
        description: 'A etapa mais longa da travessia termina com a conexão rumo ao sul da Chapada.',
        walking: '22 km a pé',
        driving: '97 km de carro',
      },
      {
        date: '31/12',
        title: 'Cachoeira do Buracão',
        description: 'A despedida do ano acontece no cânion de uma das experiências aquáticas mais intensas da região.',
        walking: '6 km a pé',
        driving: '40 km de carro',
      },
      {
        date: '01/01',
        title: 'Cachoeira da Fumacinha',
        description: 'Dezoito quilômetros por leito de rio e cânion para começar 2027 em escala monumental.',
        walking: '18 km a pé',
        driving: '102 km de carro',
      },
      {
        date: '02/01',
        title: 'Poço Azul + Mosquito + Lençóis',
        description: 'Um último circuito de águas transparentes e cachoeira antes do retorno a Lençóis.',
        walking: '2 km a pé',
        driving: '187 km de carro',
      },
    ],
  },
] as const;

export const REVEILLON_FAQS: readonly PatiFaqItem[] = [
  {
    type: 'checklist',
    title: 'O que levar',
    intro: 'Viaje leve, mas não abra mão do que mantém seu corpo protegido e confortável durante as trilhas.',
    requiredColumns: [
      ['Água — mínimo de 1 litro', 'Tênis ou bota para trekking', 'Roupas leves'],
      ['Boné ou chapéu', 'Protetor solar', 'Medicamentos pessoais', 'Documento com foto', 'Mochila'],
    ],
    recommendedColumns: [
      ['Capa de chuva para corpo e mochila', 'Lanche leve ou fruta'],
      ['Bastão de caminhada', 'Sandália ou chinelo'],
    ],
    note: 'Os itens obrigatórios podem ser conferidos pela equipe antes das atividades. A segurança do grupo depende de todos estarem preparados.',
  },
  {
    type: 'payment',
    title: 'Pagamento e reserva',
    paragraphs: [
      'A reserva é confirmada com 50% do valor do pacote. O pagamento pode ser feito à vista por transferência ou boleto bancário.',
      'Cartões têm acréscimo de 6%. O parcelamento pode ser feito em até 12 vezes via PagSeguro ou Mercado Pago. Para cartões internacionais, consulte a equipe.',
      'O saldo deve ser pago no check-in ou por transferência bancária até dois dias úteis antes do início do pacote.',
    ],
  },
  {
    type: 'cancellation',
    title: 'Cancelamento e alterações',
    intro: 'Se não puder viajar, você pode indicar outra pessoa ou manter o valor como crédito. Para reembolso, valem os prazos abaixo:',
    refunds: [
      ['30 dias ou mais antes', '90% do valor'],
      ['De 21 a 29 dias antes', '80% do valor'],
      ['De 7 a 20 dias antes', '50% do valor'],
      ['Menos de 7 dias antes', 'Sem reembolso'],
    ],
    paragraphs: [
      'Depois do início do pacote, não há reembolso. Ausência no horário combinado é considerada desistência.',
      'O roteiro pode ser alterado por condições climáticas, segurança do grupo ou orientação dos órgãos responsáveis. Quem decidir deixar o grupo durante a atividade assume as despesas decorrentes dessa decisão.',
    ],
  },
  {
    type: 'safety',
    title: 'Segurança nas atividades',
    lead: 'A natureza dita o ritmo — a equipe cuida das decisões técnicas.',
    body: 'As atividades são acompanhadas por condutores locais treinados em primeiros socorros e em competências mínimas de condução conforme a ABNT. Parte da equipe possui formação WAFA.',
    warning: 'Trekking envolve terreno irregular, mudanças de clima, quedas, animais e áreas remotas. Em alguns pontos, um resgate pode levar mais de cinco horas e seus custos não estão incluídos no pacote.',
    footer: 'Siga as orientações do guia, informe previamente condições de saúde e leve todo o equipamento obrigatório. O roteiro pode mudar sempre que a segurança exigir.',
  },
] as const;
