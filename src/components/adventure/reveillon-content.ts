/**
 * Conteúdo da página do Réveillon na Chapada, por idioma.
 *
 * PT é o copy do redesenho. EN, ES e FR são tradução feita aqui — a operadora
 * não publica esta página em outro idioma. O espanhol segue o voseo das demais
 * páginas em ES do site; o francês usa "vous".
 *
 * Números, datas, fotos e preços ficam em `REVEILLON_PACKAGES`: não mudam com
 * o idioma. O texto de cada pacote fica em `REVEILLON_CONTENT[locale].pacotes`,
 * pela mesma chave, e cada dia do roteiro casa com o dia de mesmo índice.
 */

import type { Locale } from '@/lib/site';
import type { PatiFaqItem } from './PatiFaqList';

export type ReveillonPackageKey = '4-dias' | '5-dias' | '6-dias';

/** Parte neutra de um dia do roteiro: data e distâncias, em km. */
export type ReveillonItineraryStop = {
  /** Dia e mês (1–12) — o rótulo é montado no idioma da página. */
  day: number;
  month: number;
  walkKm: number;
  driveKm?: number;
};

export type ReveillonPackage = {
  key: ReveillonPackageKey;
  price: number;
  image: string;
  /** Data do 1º dia, no formato do calendário do sheet de reserva. */
  startDate: `${number}-${number}-${number}`;
  itinerary: readonly ReveillonItineraryStop[];
};

export const REVEILLON_IMAGE = '/img/home_backgroud/home_hero_background_1_5x.webp';

export const REVEILLON_PACKAGES: readonly ReveillonPackage[] = [
  {
    key: '4-dias',
    price: 2369,
    image: '/img/home_backgroud/home_backgroud_04_no_crop_1x.webp',
    startDate: '2026-12-29',
    itinerary: [
      { day: 29, month: 12, walkKm: 4 },
      { day: 30, month: 12, walkKm: 2, driveKm: 156 },
      { day: 31, month: 12, walkKm: 2, driveKm: 120 },
      { day: 1, month: 1, walkKm: 12, driveKm: 160 },
    ],
  },
  {
    key: '5-dias',
    price: 3559,
    image: '/img/figma/destinations/vale-do-pati-3/cta-morro-do-castelo.png',
    startDate: '2026-12-29',
    itinerary: [
      { day: 29, month: 12, walkKm: 10, driveKm: 80 },
      { day: 30, month: 12, walkKm: 8 },
      { day: 31, month: 12, walkKm: 22, driveKm: 97 },
      { day: 1, month: 1, walkKm: 6, driveKm: 40 },
      { day: 2, month: 1, walkKm: 2, driveKm: 187 },
    ],
  },
  {
    key: '6-dias',
    price: 4979,
    image: '/img/adventures/fumacinha/hero.jpg',
    startDate: '2026-12-28',
    itinerary: [
      { day: 28, month: 12, walkKm: 10, driveKm: 80 },
      { day: 29, month: 12, walkKm: 8 },
      { day: 30, month: 12, walkKm: 22, driveKm: 97 },
      { day: 31, month: 12, walkKm: 6, driveKm: 40 },
      { day: 1, month: 1, walkKm: 18, driveKm: 102 },
      { day: 2, month: 1, walkKm: 2, driveKm: 187 },
    ],
  },
] as const;

/** Texto de um pacote. `itinerary[i]` é o dia `REVEILLON_PACKAGES[…].itinerary[i]`. */
export type ReveillonPackageText = {
  days: string;
  dates: string;
  places: string;
  imageAlt: string;
  pitch: string;
  highlights: readonly string[];
  itinerary: readonly { title: string; description: string }[];
};

export type ReveillonContent = {
  meta: { title: string; description: string; canonical: string };
  /** Locale BCP-47 para o milhar do preço (o espanhol usa o padrão brasileiro, como em `site.ts`). */
  numberLocale: string;
  /** Rótulo do dia no roteiro (29/12 em pt/es/fr, Dec 29 em en). */
  dateLabel: (day: number, month: number) => string;
  walk: (km: number) => string;
  drive: (km: number) => string;
  jsonLd: { touristType: string; offerName: (days: string) => string };
  hero: { dates: string; titulo: string; lead: string; verPacotes: string; falar: string; fotoAlt: string };
  story: {
    badge: string;
    titulo: string;
    paragrafos: readonly [string, string];
    selo: string;
    fotos: { buracao: string; lencois: string };
    regioes: string;
  };
  explorer: {
    badge: string;
    titulo: string;
    duracao: string;
    nome: string;
    /** "4 dias" → "4 dias de aventura." */
    tituloPacote: (days: string) => string;
    minimo: string;
    regiao: string;
    apartirDe: string;
    porPessoa: string;
    pagamento: { antes: string; destaque: string; depois: string };
    quero: string;
    adaptar: string;
    mensagem: (days: string) => string;
    roteiro: string;
    roteiroTitulo: (days: string) => string;
    roteiroNota: string;
  };
  inclusos: {
    titulo: string;
    ariaLabel: string;
    itens: readonly { label: string; detail: string }[];
  };
  info: { badge: string; titulo: string; corpo: string };
  finalCta: { badge: string; titulo: string; corpo: string; cta: string; fotoAlt: string };
  pacotes: Record<ReveillonPackageKey, ReveillonPackageText>;
  faqs: readonly PatiFaqItem[];
};

const MESES_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ddmm = (day: number, month: number) => `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`;

export const REVEILLON_CONTENT: Record<Locale, ReveillonContent> = {
  pt: {
    meta: {
      title: 'Réveillon na Chapada Diamantina 2027',
      description:
        'Pacotes de 4, 5 e 6 dias para viver o Réveillon 2027 entre trilhas, cachoeiras e paisagens da Chapada Diamantina.',
      canonical: '/pt/aventuras/reveillon-na-chapada',
    },
    numberLocale: 'pt-BR',
    dateLabel: ddmm,
    walk: (km) => `${km} km a pé`,
    drive: (km) => `${km} km de carro`,
    jsonLd: { touristType: 'Trekking e ecoturismo', offerName: (days) => `Réveillon na Chapada — ${days}` },
    hero: {
      dates: '28 dez 2026 — 2 jan 2027',
      titulo: 'Vire o ano no coração da Chapada.',
      lead: 'Troque a contagem regressiva pela trilha: cachoeiras, vales e paisagens para começar 2027 em movimento.',
      verPacotes: 'Ver os pacotes',
      falar: 'Falar com a equipe',
      fotoAlt: 'Montanhas da Chapada Diamantina vistas ao fim da tarde',
    },
    story: {
      badge: 'Réveillon 2027',
      titulo: 'A virada acontece lá fora.',
      paragrafos: [
        'Este é um Réveillon para quem prefere o som da água, o silêncio do vale e a sensação de chegar caminhando a um lugar extraordinário.',
        'Os roteiros combinam trilhas, cachoeiras, paisagens e hospedagem em viagens de quatro a seis dias. Você escolhe a intensidade; a Mamut organiza o caminho.',
      ],
      selo: 'Grupos pequenos, guias locais e possibilidade de personalizar o pacote.',
      fotos: {
        buracao: 'Cachoeira do Buracão vista entre os paredões do cânion',
        lencois: 'Rua histórica de Lençóis na Chapada Diamantina',
      },
      regioes: 'Lençóis · Pati · Ibicoara · Mucugê',
    },
    explorer: {
      badge: 'Escolha o seu ritmo',
      titulo: 'Três caminhos para a mesma virada.',
      duracao: 'Duração do pacote',
      nome: 'Réveillon na Chapada',
      tituloPacote: (days) => `${days} de aventura.`,
      minimo: 'Mínimo de 2 participantes',
      regiao: 'Chapada Diamantina · Bahia',
      apartirDe: 'A partir de',
      porPessoa: 'por pessoa',
      pagamento: { antes: 'Reserve com', destaque: '50% de sinal.', depois: 'Cartão em até 12x, com acréscimo.' },
      quero: 'Quero este pacote',
      adaptar: 'Quer adaptar o roteiro? Converse com a equipe.',
      mensagem: (days) => `Olá! Quero verificar o pacote de ${days} do Réveillon 2027 na Chapada para`,
      roteiro: 'Roteiro dia a dia',
      roteiroTitulo: (days) => `${days} em movimento`,
      roteiroNota: 'Distâncias aproximadas. A ordem pode mudar para aproveitar melhor o clima e manter o grupo seguro.',
    },
    inclusos: {
      titulo: 'Todo pacote já organiza o essencial.',
      ariaLabel: 'Itens incluídos nos pacotes',
      itens: [
        { label: 'Acessos', detail: 'Taxas de entrada previstas no roteiro' },
        { label: 'Guias locais', detail: 'Condução especializada em todas as atividades' },
        { label: 'Hospedagem', detail: 'Pernoites conforme o pacote escolhido' },
        { label: 'Traslados', detail: 'Deslocamentos para os atrativos do roteiro' },
      ],
    },
    info: {
      badge: 'Antes de reservar',
      titulo: 'Tudo claro antes do primeiro passo.',
      corpo: 'Consulte equipamentos, condições de pagamento, cancelamento e cuidados de segurança. As informações ficam aqui para você decidir com tranquilidade.',
    },
    finalCta: {
      badge: 'Comece 2027 em movimento',
      titulo: 'Seu próximo ano pode começar por uma trilha.',
      corpo: 'Conte para a Mamut quantos dias você tem e como gosta de viajar. A equipe ajuda a escolher — ou adaptar — o roteiro certo.',
      cta: 'Planejar meu Réveillon',
      fotoAlt: 'Trilha em direção às montanhas da Chapada Diamantina',
    },
    pacotes: {
      '4-dias': {
        days: '4 dias',
        dates: '29 dez 2026 — 1 jan 2027',
        places: 'Lençóis · Iraquara',
        imageAlt: 'Pôr do sol entre as montanhas da Chapada Diamantina',
        pitch: 'Uma virada com base em Lençóis e quatro dias de banho, mirantes e trilhas clássicas.',
        highlights: ['Parque da Muritiba', 'Fazenda Pratinha', 'Cachoeira do Mosquito', 'Morro do Pai Inácio', 'Cachoeira da Fumaça'],
        itinerary: [
          { title: 'Muritiba + Ribeirão do Meio', description: 'Chegada em Lençóis e primeiro mergulho nos circuitos naturais mais próximos da cidade.' },
          { title: 'Grutas, Pratinha + Mirante do Camelo', description: 'Um dia entre formações subterrâneas, água cristalina e a silhueta mais emblemática da região.' },
          { title: 'Mosquito + Mucugezinho + Pai Inácio', description: 'Cachoeiras durante o dia e o horizonte da Chapada como cenário para encerrar o ano.' },
          { title: 'Cachoeira da Fumaça', description: 'O primeiro grande desafio de 2027 leva ao topo de uma das quedas mais famosas do Brasil.' },
        ],
      },
      '5-dias': {
        days: '5 dias',
        dates: '29 dez 2026 — 2 jan 2027',
        places: 'Lençóis · Vale do Pati · Ibicoara',
        imageAlt: 'Montanhas e trilhas do Vale do Pati',
        pitch: 'A travessia entra no centro da viagem: três dias de Pati antes das águas do sul da Chapada.',
        highlights: ['Vale do Pati em 3 dias', 'Morro do Castelo', 'Cachoeirão', 'Cachoeira do Buracão', 'Poço Azul'],
        itinerary: [
          { title: 'Lençóis → Guiné + Mirante da Rampa', description: 'Transfer para Guiné, subida da Rampa e a primeira visão panorâmica do Vale do Pati.' },
          { title: 'Morro do Castelo', description: 'Travessia por dentro da montanha e vista elevada para os vales que cercam o Pati.' },
          { title: 'Cachoeirão + transfer para Ibicoara', description: 'Caminhada longa até o mirante do Cachoeirão antes de seguir para o sul da Chapada.' },
          { title: 'Cachoeira do Buracão', description: 'O ano começa dentro do cânion, entre passarelas, rio e a força da queda-d’água.' },
          { title: 'Poço Azul + Mosquito + Lençóis', description: 'Flutuação, banho de cachoeira e retorno a Lençóis para fechar a expedição.' },
        ],
      },
      '6-dias': {
        days: '6 dias',
        dates: '28 dez 2026 — 2 jan 2027',
        places: 'Lençóis · Mucugê · Vale do Pati · Ibicoara',
        imageAlt: 'Cachoeira da Fumacinha entre paredões de pedra',
        pitch: 'A experiência mais completa: Pati, grandes cachoeiras e seis dias atravessando diferentes paisagens.',
        highlights: ['Vale do Pati em 3 dias', 'Cachoeirão', 'Cachoeira do Buracão', 'Cachoeira da Fumacinha', 'Poço Azul'],
        itinerary: [
          { title: 'Lençóis → Guiné + Mirante da Rampa', description: 'A viagem começa com a entrada clássica do Vale do Pati e a chegada à casa de nativos.' },
          { title: 'Morro do Castelo', description: 'Cavernas, altitude e um dos panoramas mais marcantes do trekking no Pati.' },
          { title: 'Cachoeirão + transfer para Ibicoara', description: 'A etapa mais longa da travessia termina com a conexão rumo ao sul da Chapada.' },
          { title: 'Cachoeira do Buracão', description: 'A despedida do ano acontece no cânion de uma das experiências aquáticas mais intensas da região.' },
          { title: 'Cachoeira da Fumacinha', description: 'Dezoito quilômetros por leito de rio e cânion para começar 2027 em escala monumental.' },
          { title: 'Poço Azul + Mosquito + Lençóis', description: 'Um último circuito de águas transparentes e cachoeira antes do retorno a Lençóis.' },
        ],
      },
    },
    faqs: [
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
    ],
  },

  en: {
    meta: {
      title: 'New Year’s Eve in the Chapada Diamantina 2027',
      description:
        '4, 5 and 6-day packages to see in 2027 among the trails, waterfalls and landscapes of the Chapada Diamantina.',
      canonical: '/en/adventures/new-years-eve-chapada',
    },
    numberLocale: 'en-US',
    dateLabel: (day, month) => `${MESES_EN[month - 1]} ${day}`,
    walk: (km) => `${km} km on foot`,
    drive: (km) => `${km} km by car`,
    jsonLd: { touristType: 'Trekking and ecotourism', offerName: (days) => `New Year’s Eve in the Chapada — ${days}` },
    hero: {
      dates: 'Dec 28, 2026 — Jan 2, 2027',
      titulo: 'See in the new year in the heart of the Chapada.',
      lead: 'Swap the countdown for the trail: waterfalls, valleys and wide-open views to start 2027 on the move.',
      verPacotes: 'See the packages',
      falar: 'Talk to the team',
      fotoAlt: 'Mountains of the Chapada Diamantina in the late afternoon',
    },
    story: {
      badge: 'New Year 2027',
      titulo: 'The new year happens outdoors.',
      paragrafos: [
        'This is a New Year’s Eve for people who would rather hear running water, the quiet of the valley, and know the feeling of walking all the way to somewhere extraordinary.',
        'The itineraries combine trails, waterfalls, views and accommodation in trips of four to six days. You choose the intensity; Mamut sorts out the route.',
      ],
      selo: 'Small groups, local guides and the option to tailor the package.',
      fotos: {
        buracao: 'Buracão Waterfall seen between the canyon walls',
        lencois: 'Historic street in Lençóis, Chapada Diamantina',
      },
      regioes: 'Lençóis · Pati · Ibicoara · Mucugê',
    },
    explorer: {
      badge: 'Choose your pace',
      titulo: 'Three routes to the same new year.',
      duracao: 'Package length',
      nome: 'New Year’s Eve in the Chapada',
      tituloPacote: (days) => `${days} of adventure.`,
      minimo: 'Minimum of 2 travellers',
      regiao: 'Chapada Diamantina · Bahia',
      apartirDe: 'From',
      porPessoa: 'per person',
      pagamento: { antes: 'Book with a', destaque: '50% deposit.', depois: 'Card in up to 12 instalments, with a surcharge.' },
      quero: 'I want this package',
      adaptar: 'Want to adapt the itinerary? Talk to the team.',
      mensagem: (days) => `Hi! I'd like to check the ${days} New Year's Eve 2027 package in the Chapada for`,
      roteiro: 'Day by day',
      roteiroTitulo: (days) => `${days} on the move`,
      roteiroNota: 'Approximate distances. The order may change to make the most of the weather and keep the group safe.',
    },
    inclusos: {
      titulo: 'Every package already covers the essentials.',
      ariaLabel: 'What the packages include',
      itens: [
        { label: 'Entry fees', detail: 'Admission to every site on the itinerary' },
        { label: 'Local guides', detail: 'Expert guiding on every activity' },
        { label: 'Accommodation', detail: 'Nights according to the package you choose' },
        { label: 'Transfers', detail: 'Transport to every site on the itinerary' },
      ],
    },
    info: {
      badge: 'Before you book',
      titulo: 'Everything clear before the first step.',
      corpo: 'Check the gear, payment terms, cancellation and safety notes. It is all here so you can decide with peace of mind.',
    },
    finalCta: {
      badge: 'Start 2027 on the move',
      titulo: 'Your next year can start on a trail.',
      corpo: 'Tell Mamut how many days you have and how you like to travel. The team will help you choose — or adapt — the right itinerary.',
      cta: 'Plan my New Year’s Eve',
      fotoAlt: 'Trail heading towards the mountains of the Chapada Diamantina',
    },
    pacotes: {
      '4-dias': {
        days: '4 days',
        dates: 'Dec 29, 2026 — Jan 1, 2027',
        places: 'Lençóis · Iraquara',
        imageAlt: 'Sunset between the mountains of the Chapada Diamantina',
        pitch: 'A new year based in Lençóis, with four days of swimming spots, viewpoints and classic trails.',
        highlights: ['Muritiba Park', 'Pratinha Farm', 'Mosquito Waterfall', 'Pai Inácio Hill', 'Fumaça Waterfall'],
        itinerary: [
          { title: 'Muritiba + Ribeirão do Meio', description: 'Arrival in Lençóis and a first swim in the natural circuits closest to town.' },
          { title: 'Caves, Pratinha + Camelo Viewpoint', description: 'A day of underground formations, crystal-clear water and the region’s most iconic silhouette.' },
          { title: 'Mosquito + Mucugezinho + Pai Inácio', description: 'Waterfalls by day, and the Chapada’s horizon as the backdrop to close the year.' },
          { title: 'Fumaça Waterfall', description: 'The first big challenge of 2027 takes you to the top of one of Brazil’s most famous falls.' },
        ],
      },
      '5-dias': {
        days: '5 days',
        dates: 'Dec 29, 2026 — Jan 2, 2027',
        places: 'Lençóis · Pati Valley · Ibicoara',
        imageAlt: 'Mountains and trails of the Pati Valley',
        pitch: 'The trek sits at the heart of the trip: three days in the Pati before the waters of the southern Chapada.',
        highlights: ['Pati Valley in 3 days', 'Morro do Castelo', 'Cachoeirão', 'Buracão Waterfall', 'Poço Azul'],
        itinerary: [
          { title: 'Lençóis → Guiné + Rampa Viewpoint', description: 'Transfer to Guiné, the climb up the Rampa and the first panoramic view of the Pati Valley.' },
          { title: 'Morro do Castelo', description: 'A walk right through the mountain and a high view over the valleys around the Pati.' },
          { title: 'Cachoeirão + transfer to Ibicoara', description: 'A long walk to the Cachoeirão lookout before heading on to the south of the Chapada.' },
          { title: 'Buracão Waterfall', description: 'The year begins inside the canyon, among walkways, river and the force of the falls.' },
          { title: 'Poço Azul + Mosquito + Lençóis', description: 'Floating, a waterfall swim and the return to Lençóis to close the expedition.' },
        ],
      },
      '6-dias': {
        days: '6 days',
        dates: 'Dec 28, 2026 — Jan 2, 2027',
        places: 'Lençóis · Mucugê · Pati Valley · Ibicoara',
        imageAlt: 'Fumacinha Waterfall between rock walls',
        pitch: 'The most complete experience: the Pati, big waterfalls and six days crossing very different landscapes.',
        highlights: ['Pati Valley in 3 days', 'Cachoeirão', 'Buracão Waterfall', 'Fumacinha Waterfall', 'Poço Azul'],
        itinerary: [
          { title: 'Lençóis → Guiné + Rampa Viewpoint', description: 'The trip starts with the classic way into the Pati Valley and the arrival at a local family’s home.' },
          { title: 'Morro do Castelo', description: 'Caves, altitude and one of the most striking panoramas of the Pati trek.' },
          { title: 'Cachoeirão + transfer to Ibicoara', description: 'The longest stage of the trek ends with the connection to the south of the Chapada.' },
          { title: 'Buracão Waterfall', description: 'You say goodbye to the year in the canyon of one of the region’s most intense water experiences.' },
          { title: 'Fumacinha Waterfall', description: 'Eighteen kilometres along riverbed and canyon to start 2027 on a monumental scale.' },
          { title: 'Poço Azul + Mosquito + Lençóis', description: 'One last circuit of clear water and a waterfall before the return to Lençóis.' },
        ],
      },
    },
    faqs: [
      {
        type: 'checklist',
        title: 'What to bring',
        intro: 'Travel light, but don’t skip what keeps your body protected and comfortable on the trails.',
        requiredColumns: [
          ['Water — at least 1 litre', 'Trekking shoes or boots', 'Light clothing'],
          ['Cap or hat', 'Sunscreen', 'Personal medication', 'Photo ID', 'Backpack'],
        ],
        recommendedColumns: [
          ['Rain cover for you and your backpack', 'Light snack or fruit'],
          ['Walking pole', 'Sandals or flip-flops'],
        ],
        note: 'The team may check the mandatory items before the activities. The group’s safety depends on everyone being prepared.',
      },
      {
        type: 'payment',
        title: 'Payment and booking',
        paragraphs: [
          'A 50% deposit confirms the booking. Payment can be made upfront by bank transfer or boleto.',
          'Cards carry a 6% surcharge and can be split into up to 12 instalments through PagSeguro or Mercado Pago. For international cards, talk to the team.',
          'The balance is due at check-in or by bank transfer up to two business days before the package starts.',
        ],
      },
      {
        type: 'cancellation',
        title: 'Cancellation and changes',
        intro: 'If you can’t travel, you can send someone in your place or keep the amount as credit. For refunds, these deadlines apply:',
        refunds: [
          ['30 days or more before', '90% of the amount'],
          ['21 to 29 days before', '80% of the amount'],
          ['7 to 20 days before', '50% of the amount'],
          ['Fewer than 7 days before', 'No refund'],
        ],
        paragraphs: [
          'Once the package has started there are no refunds. Not showing up at the agreed time counts as a cancellation.',
          'The itinerary may change because of weather, the group’s safety or instructions from the authorities. Anyone who chooses to leave the group during the activity covers any costs that decision creates.',
        ],
      },
      {
        type: 'safety',
        title: 'Safety on the activities',
        riskLabel: 'Risks and limitations — please read',
        lead: 'Nature sets the pace — the team takes care of the technical decisions.',
        body: 'Activities are led by local guides trained in first aid and in minimum guiding competencies to Brazilian ABNT standards. Part of the team holds WAFA certification.',
        warning: 'Trekking means uneven ground, changing weather, falls, wildlife and remote areas. In some places a rescue can take more than five hours, and its cost is not included in the package.',
        footer: 'Follow the guide’s instructions, tell us about health conditions in advance and bring all the mandatory gear. The itinerary may change whenever safety requires it.',
      },
    ],
  },

  es: {
    meta: {
      title: 'Año Nuevo en la Chapada Diamantina 2027',
      description:
        'Paquetes de 4, 5 y 6 días para recibir el 2027 entre senderos, cascadas y paisajes de la Chapada Diamantina.',
      canonical: '/es/aventuras/ano-nuevo-en-la-chapada',
    },
    numberLocale: 'pt-BR',
    dateLabel: ddmm,
    walk: (km) => `${km} km a pie`,
    drive: (km) => `${km} km en auto`,
    jsonLd: { touristType: 'Trekking y ecoturismo', offerName: (days) => `Año Nuevo en la Chapada — ${days}` },
    hero: {
      dates: '28 dic 2026 — 2 ene 2027',
      titulo: 'Recibí el año en el corazón de la Chapada.',
      lead: 'Cambiá la cuenta regresiva por el sendero: cascadas, valles y paisajes para empezar el 2027 en movimiento.',
      verPacotes: 'Ver los paquetes',
      falar: 'Hablar con el equipo',
      fotoAlt: 'Montañas de la Chapada Diamantina al final de la tarde',
    },
    story: {
      badge: 'Año Nuevo 2027',
      titulo: 'El cambio de año pasa afuera.',
      paragrafos: [
        'Este es un Año Nuevo para quien prefiere el sonido del agua, el silencio del valle y la sensación de llegar caminando a un lugar extraordinario.',
        'Los recorridos combinan senderos, cascadas, paisajes y alojamiento en viajes de cuatro a seis días. Vos elegís la intensidad; Mamut organiza el camino.',
      ],
      selo: 'Grupos chicos, guías locales y la posibilidad de personalizar el paquete.',
      fotos: {
        buracao: 'Cascada del Buracão vista entre las paredes del cañón',
        lencois: 'Calle histórica de Lençóis, en la Chapada Diamantina',
      },
      regioes: 'Lençóis · Pati · Ibicoara · Mucugê',
    },
    explorer: {
      badge: 'Elegí tu ritmo',
      titulo: 'Tres caminos para el mismo Año Nuevo.',
      duracao: 'Duración del paquete',
      nome: 'Año Nuevo en la Chapada',
      tituloPacote: (days) => `${days} de aventura.`,
      minimo: 'Mínimo de 2 participantes',
      regiao: 'Chapada Diamantina · Bahia',
      apartirDe: 'Desde',
      porPessoa: 'por persona',
      pagamento: { antes: 'Reservá con', destaque: '50% de seña.', depois: 'Tarjeta en hasta 12 cuotas, con recargo.' },
      quero: 'Quiero este paquete',
      adaptar: '¿Querés adaptar el recorrido? Hablá con el equipo.',
      mensagem: (days) => `¡Hola! Quiero consultar el paquete de ${days} de Año Nuevo 2027 en la Chapada para`,
      roteiro: 'Recorrido día a día',
      roteiroTitulo: (days) => `${days} en movimiento`,
      roteiroNota: 'Distancias aproximadas. El orden puede cambiar para aprovechar mejor el clima y mantener al grupo seguro.',
    },
    inclusos: {
      titulo: 'Todo paquete ya resuelve lo esencial.',
      ariaLabel: 'Qué incluyen los paquetes',
      itens: [
        { label: 'Entradas', detail: 'Tasas de acceso previstas en el recorrido' },
        { label: 'Guías locales', detail: 'Conducción especializada en todas las actividades' },
        { label: 'Alojamiento', detail: 'Noches según el paquete elegido' },
        { label: 'Traslados', detail: 'Transporte a los atractivos del recorrido' },
      ],
    },
    info: {
      badge: 'Antes de reservar',
      titulo: 'Todo claro antes del primer paso.',
      corpo: 'Consultá el equipo, las condiciones de pago, de cancelación y los cuidados de seguridad. La información queda acá para que decidas con tranquilidad.',
    },
    finalCta: {
      badge: 'Empezá el 2027 en movimiento',
      titulo: 'Tu próximo año puede empezar por un sendero.',
      corpo: 'Contale a Mamut cuántos días tenés y cómo te gusta viajar. El equipo te ayuda a elegir — o adaptar — el recorrido justo.',
      cta: 'Planear mi Año Nuevo',
      fotoAlt: 'Sendero hacia las montañas de la Chapada Diamantina',
    },
    pacotes: {
      '4-dias': {
        days: '4 días',
        dates: '29 dic 2026 — 1 ene 2027',
        places: 'Lençóis · Iraquara',
        imageAlt: 'Atardecer entre las montañas de la Chapada Diamantina',
        pitch: 'Un Año Nuevo con base en Lençóis y cuatro días de baños, miradores y senderos clásicos.',
        highlights: ['Parque da Muritiba', 'Fazenda Pratinha', 'Cascada del Mosquito', 'Morro do Pai Inácio', 'Cascada da Fumaça'],
        itinerary: [
          { title: 'Muritiba + Ribeirão do Meio', description: 'Llegada a Lençóis y primer chapuzón en los circuitos naturales más cercanos a la ciudad.' },
          { title: 'Grutas, Pratinha + Mirador del Camelo', description: 'Un día entre formaciones subterráneas, agua cristalina y la silueta más emblemática de la región.' },
          { title: 'Mosquito + Mucugezinho + Pai Inácio', description: 'Cascadas durante el día y el horizonte de la Chapada como escenario para cerrar el año.' },
          { title: 'Cascada da Fumaça', description: 'El primer gran desafío del 2027 lleva a la cima de una de las caídas más famosas de Brasil.' },
        ],
      },
      '5-dias': {
        days: '5 días',
        dates: '29 dic 2026 — 2 ene 2027',
        places: 'Lençóis · Valle del Pati · Ibicoara',
        imageAlt: 'Montañas y senderos del Valle del Pati',
        pitch: 'La travesía queda en el centro del viaje: tres días de Pati antes de las aguas del sur de la Chapada.',
        highlights: ['Valle del Pati en 3 días', 'Morro do Castelo', 'Cachoeirão', 'Cascada do Buracão', 'Poço Azul'],
        itinerary: [
          { title: 'Lençóis → Guiné + Mirador de la Rampa', description: 'Traslado a Guiné, subida de la Rampa y la primera vista panorámica del Valle del Pati.' },
          { title: 'Morro do Castelo', description: 'Travesía por dentro de la montaña y una vista alta sobre los valles que rodean el Pati.' },
          { title: 'Cachoeirão + traslado a Ibicoara', description: 'Caminata larga hasta el mirador del Cachoeirão antes de seguir hacia el sur de la Chapada.' },
          { title: 'Cascada do Buracão', description: 'El año empieza dentro del cañón, entre pasarelas, río y la fuerza de la caída de agua.' },
          { title: 'Poço Azul + Mosquito + Lençóis', description: 'Flotación, baño de cascada y regreso a Lençóis para cerrar la expedición.' },
        ],
      },
      '6-dias': {
        days: '6 días',
        dates: '28 dic 2026 — 2 ene 2027',
        places: 'Lençóis · Mucugê · Valle del Pati · Ibicoara',
        imageAlt: 'Cascada da Fumacinha entre paredes de piedra',
        pitch: 'La experiencia más completa: Pati, grandes cascadas y seis días atravesando paisajes distintos.',
        highlights: ['Valle del Pati en 3 días', 'Cachoeirão', 'Cascada do Buracão', 'Cascada da Fumacinha', 'Poço Azul'],
        itinerary: [
          { title: 'Lençóis → Guiné + Mirador de la Rampa', description: 'El viaje empieza por la entrada clásica al Valle del Pati y la llegada a la casa de una familia nativa.' },
          { title: 'Morro do Castelo', description: 'Cuevas, altura y uno de los panoramas más impactantes del trekking en el Pati.' },
          { title: 'Cachoeirão + traslado a Ibicoara', description: 'La etapa más larga de la travesía termina con la conexión hacia el sur de la Chapada.' },
          { title: 'Cascada do Buracão', description: 'La despedida del año pasa en el cañón de una de las experiencias de agua más intensas de la región.' },
          { title: 'Cascada da Fumacinha', description: 'Dieciocho kilómetros por lecho de río y cañón para empezar el 2027 a escala monumental.' },
          { title: 'Poço Azul + Mosquito + Lençóis', description: 'Un último circuito de aguas transparentes y cascada antes de volver a Lençóis.' },
        ],
      },
    },
    faqs: [
      {
        type: 'checklist',
        title: 'Qué llevar',
        intro: 'Viajá liviano, pero no te olvides de lo que mantiene tu cuerpo protegido y cómodo en los senderos.',
        requiredColumns: [
          ['Agua — mínimo 1 litro', 'Zapatillas o botas de trekking', 'Ropa liviana'],
          ['Gorra o sombrero', 'Protector solar', 'Medicamentos personales', 'Documento con foto', 'Mochila'],
        ],
        recommendedColumns: [
          ['Piloto de lluvia para vos y la mochila', 'Snack liviano o fruta'],
          ['Bastón de caminata', 'Sandalias u ojotas'],
        ],
        note: 'El equipo puede revisar los ítems obligatorios antes de las actividades. La seguridad del grupo depende de que todos estén preparados.',
      },
      {
        type: 'payment',
        title: 'Pago y reserva',
        paragraphs: [
          'La reserva se confirma con el 50% del valor del paquete. El pago puede hacerse al contado por transferencia o boleto bancario.',
          'Las tarjetas tienen un recargo del 6%. Se puede pagar en hasta 12 cuotas por PagSeguro o Mercado Pago. Para tarjetas internacionales, consultá con el equipo.',
          'El saldo se paga en el check-in o por transferencia bancaria hasta dos días hábiles antes del inicio del paquete.',
        ],
      },
      {
        type: 'cancellation',
        title: 'Cancelación y cambios',
        intro: 'Si no podés viajar, podés indicar a otra persona o dejar el valor como crédito. Para reembolsos, valen estos plazos:',
        refunds: [
          ['30 días o más antes', '90% del valor'],
          ['De 21 a 29 días antes', '80% del valor'],
          ['De 7 a 20 días antes', '50% del valor'],
          ['Menos de 7 días antes', 'Sin reembolso'],
        ],
        paragraphs: [
          'Una vez iniciado el paquete, no hay reembolso. No presentarse en el horario acordado se considera desistimiento.',
          'El recorrido puede cambiar por el clima, la seguridad del grupo o indicación de los organismos responsables. Quien decida dejar el grupo durante la actividad asume los gastos que esa decisión genere.',
        ],
      },
      {
        type: 'safety',
        title: 'Seguridad en las actividades',
        riskLabel: 'Riesgos y limitaciones — leé con atención',
        lead: 'La naturaleza marca el ritmo — el equipo se ocupa de las decisiones técnicas.',
        body: 'Las actividades las acompañan conductores locales formados en primeros auxilios y en competencias mínimas de conducción según la ABNT brasileña. Parte del equipo tiene formación WAFA.',
        warning: 'El trekking implica terreno irregular, cambios de clima, caídas, animales y zonas remotas. En algunos puntos un rescate puede tardar más de cinco horas, y su costo no está incluido en el paquete.',
        footer: 'Seguí las indicaciones del guía, avisá con anticipación sobre condiciones de salud y llevá todo el equipo obligatorio. El recorrido puede cambiar cada vez que la seguridad lo exija.',
      },
    ],
  },

  fr: {
    meta: {
      title: 'Réveillon dans la Chapada Diamantina 2027',
      description:
        'Forfaits de 4, 5 et 6 jours pour vivre le Réveillon 2027 entre sentiers, cascades et paysages de la Chapada Diamantina.',
      canonical: '/fr/aventures/reveillon-dans-la-chapada',
    },
    numberLocale: 'pt-BR',
    dateLabel: ddmm,
    walk: (km) => `${km} km à pied`,
    drive: (km) => `${km} km en voiture`,
    jsonLd: { touristType: 'Trek et écotourisme', offerName: (days) => `Réveillon dans la Chapada — ${days}` },
    hero: {
      dates: '28 déc. 2026 — 2 janv. 2027',
      titulo: 'Passez le cap de la nouvelle année au cœur de la Chapada.',
      lead: 'Troquez le compte à rebours contre le sentier : cascades, vallées et grands paysages pour commencer 2027 en mouvement.',
      verPacotes: 'Voir les forfaits',
      falar: 'Parler avec l’équipe',
      fotoAlt: 'Montagnes de la Chapada Diamantina en fin d’après-midi',
    },
    story: {
      badge: 'Réveillon 2027',
      titulo: 'Le passage à la nouvelle année se vit dehors.',
      paragrafos: [
        'Voici un Réveillon pour celles et ceux qui préfèrent le bruit de l’eau, le silence de la vallée et la sensation d’arriver à pied dans un lieu extraordinaire.',
        'Les itinéraires associent sentiers, cascades, paysages et hébergement, sur des voyages de quatre à six jours. Vous choisissez l’intensité ; Mamut organise le chemin.',
      ],
      selo: 'Petits groupes, guides locaux et possibilité de personnaliser le forfait.',
      fotos: {
        buracao: 'La cascade du Buracão vue entre les parois du canyon',
        lencois: 'Rue historique de Lençóis, dans la Chapada Diamantina',
      },
      regioes: 'Lençóis · Pati · Ibicoara · Mucugê',
    },
    explorer: {
      badge: 'Choisissez votre rythme',
      titulo: 'Trois chemins vers la même nouvelle année.',
      duracao: 'Durée du forfait',
      nome: 'Réveillon dans la Chapada',
      tituloPacote: (days) => `${days} d’aventure.`,
      minimo: 'Minimum 2 participants',
      regiao: 'Chapada Diamantina · Bahia',
      apartirDe: 'À partir de',
      porPessoa: 'par personne',
      pagamento: { antes: 'Réservez avec', destaque: '50 % d’acompte.', depois: 'Carte bancaire jusqu’à 12 fois, avec majoration.' },
      quero: 'Je veux ce forfait',
      adaptar: 'Envie d’adapter l’itinéraire ? Parlez-en avec l’équipe.',
      mensagem: (days) => `Bonjour ! Je voudrais vérifier le forfait de ${days} du Réveillon 2027 dans la Chapada pour le`,
      roteiro: 'Itinéraire jour par jour',
      roteiroTitulo: (days) => `${days} en mouvement`,
      roteiroNota: 'Distances approximatives. L’ordre peut changer pour mieux profiter de la météo et garantir la sécurité du groupe.',
    },
    inclusos: {
      titulo: 'Chaque forfait règle déjà l’essentiel.',
      ariaLabel: 'Ce qui est inclus dans les forfaits',
      itens: [
        { label: 'Accès', detail: 'Droits d’entrée prévus dans l’itinéraire' },
        { label: 'Guides locaux', detail: 'Encadrement spécialisé pour toutes les activités' },
        { label: 'Hébergement', detail: 'Nuits selon le forfait choisi' },
        { label: 'Transferts', detail: 'Trajets vers les sites de l’itinéraire' },
      ],
    },
    info: {
      badge: 'Avant de réserver',
      titulo: 'Tout est clair avant le premier pas.',
      corpo: 'Consultez l’équipement, les conditions de paiement et d’annulation et les consignes de sécurité. Tout est réuni ici pour que vous décidiez l’esprit tranquille.',
    },
    finalCta: {
      badge: 'Commencez 2027 en mouvement',
      titulo: 'Votre nouvelle année peut commencer sur un sentier.',
      corpo: 'Dites à Mamut combien de jours vous avez et comment vous aimez voyager. L’équipe vous aide à choisir — ou à adapter — le bon itinéraire.',
      cta: 'Préparer mon Réveillon',
      fotoAlt: 'Sentier en direction des montagnes de la Chapada Diamantina',
    },
    pacotes: {
      '4-dias': {
        days: '4 jours',
        dates: '29 déc. 2026 — 1er janv. 2027',
        places: 'Lençóis · Iraquara',
        imageAlt: 'Coucher de soleil entre les montagnes de la Chapada Diamantina',
        pitch: 'Un passage à la nouvelle année au départ de Lençóis, avec quatre jours de baignades, de belvédères et de sentiers classiques.',
        highlights: ['Parc de la Muritiba', 'Fazenda Pratinha', 'Cascade du Mosquito', 'Morro do Pai Inácio', 'Cascade da Fumaça'],
        itinerary: [
          { title: 'Muritiba + Ribeirão do Meio', description: 'Arrivée à Lençóis et première baignade dans les circuits naturels les plus proches de la ville.' },
          { title: 'Grottes, Pratinha + belvédère du Camelo', description: 'Une journée entre formations souterraines, eau cristalline et la silhouette la plus emblématique de la région.' },
          { title: 'Mosquito + Mucugezinho + Pai Inácio', description: 'Des cascades pendant la journée et l’horizon de la Chapada comme décor pour clore l’année.' },
          { title: 'Cascade da Fumaça', description: 'Le premier grand défi de 2027 mène au sommet de l’une des chutes les plus célèbres du Brésil.' },
        ],
      },
      '5-dias': {
        days: '5 jours',
        dates: '29 déc. 2026 — 2 janv. 2027',
        places: 'Lençóis · vallée du Pati · Ibicoara',
        imageAlt: 'Montagnes et sentiers de la vallée du Pati',
        pitch: 'La traversée est au cœur du voyage : trois jours dans le Pati avant les eaux du sud de la Chapada.',
        highlights: ['Vallée du Pati en 3 jours', 'Morro do Castelo', 'Cachoeirão', 'Cascade du Buracão', 'Poço Azul'],
        itinerary: [
          { title: 'Lençóis → Guiné + belvédère da Rampa', description: 'Transfert jusqu’à Guiné, montée de la Rampa et première vue panoramique sur la vallée du Pati.' },
          { title: 'Morro do Castelo', description: 'Traversée à l’intérieur de la montagne et vue plongeante sur les vallées qui entourent le Pati.' },
          { title: 'Cachoeirão + transfert vers Ibicoara', description: 'Longue marche jusqu’au belvédère du Cachoeirão avant de rejoindre le sud de la Chapada.' },
          { title: 'Cascade du Buracão', description: 'L’année commence au fond du canyon, entre passerelles, rivière et la puissance de la chute.' },
          { title: 'Poço Azul + Mosquito + Lençóis', description: 'Flottaison, baignade en cascade et retour à Lençóis pour conclure l’expédition.' },
        ],
      },
      '6-dias': {
        days: '6 jours',
        dates: '28 déc. 2026 — 2 janv. 2027',
        places: 'Lençóis · Mucugê · vallée du Pati · Ibicoara',
        imageAlt: 'La cascade da Fumacinha entre des parois rocheuses',
        pitch: 'L’expérience la plus complète : le Pati, de grandes cascades et six jours à travers des paysages variés.',
        highlights: ['Vallée du Pati en 3 jours', 'Cachoeirão', 'Cascade du Buracão', 'Cascade da Fumacinha', 'Poço Azul'],
        itinerary: [
          { title: 'Lençóis → Guiné + belvédère da Rampa', description: 'Le voyage commence par l’entrée classique dans la vallée du Pati et l’arrivée chez une famille de la vallée.' },
          { title: 'Morro do Castelo', description: 'Grottes, altitude et l’un des panoramas les plus marquants du trek dans le Pati.' },
          { title: 'Cachoeirão + transfert vers Ibicoara', description: 'L’étape la plus longue de la traversée se termine par la liaison vers le sud de la Chapada.' },
          { title: 'Cascade du Buracão', description: 'On dit au revoir à l’année dans le canyon de l’une des expériences aquatiques les plus intenses de la région.' },
          { title: 'Cascade da Fumacinha', description: 'Dix-huit kilomètres dans le lit de la rivière et le canyon pour commencer 2027 à une échelle monumentale.' },
          { title: 'Poço Azul + Mosquito + Lençóis', description: 'Un dernier circuit d’eaux transparentes et de cascade avant le retour à Lençóis.' },
        ],
      },
    },
    faqs: [
      {
        type: 'checklist',
        title: 'Quoi emporter',
        intro: 'Voyagez léger, mais ne faites pas l’impasse sur ce qui garde votre corps protégé et à l’aise sur les sentiers.',
        requiredColumns: [
          ['Eau — 1 litre minimum', 'Chaussures ou bottes de trek', 'Vêtements légers'],
          ['Casquette ou chapeau', 'Crème solaire', 'Médicaments personnels', 'Pièce d’identité avec photo', 'Sac à dos'],
        ],
        recommendedColumns: [
          ['Protection de pluie pour vous et votre sac', 'En-cas léger ou fruit'],
          ['Bâton de marche', 'Sandales ou tongs'],
        ],
        note: 'L’équipe peut vérifier les articles obligatoires avant les activités. La sécurité du groupe dépend de la préparation de chacun.',
      },
      {
        type: 'payment',
        title: 'Paiement et réservation',
        paragraphs: [
          'La réservation est confirmée avec 50 % du montant du forfait. Le paiement peut se faire comptant par virement ou par boleto bancaire.',
          'Les cartes bancaires sont majorées de 6 %. Le paiement peut être échelonné jusqu’à 12 fois via PagSeguro ou Mercado Pago. Pour les cartes internationales, contactez l’équipe.',
          'Le solde est à régler au check-in ou par virement bancaire jusqu’à deux jours ouvrés avant le début du forfait.',
        ],
      },
      {
        type: 'cancellation',
        title: 'Annulation et modifications',
        intro: 'Si vous ne pouvez pas voyager, vous pouvez désigner une autre personne ou conserver le montant sous forme d’avoir. Pour un remboursement, les délais ci-dessous s’appliquent :',
        refunds: [
          ['30 jours ou plus avant', '90 % du montant'],
          ['De 21 à 29 jours avant', '80 % du montant'],
          ['De 7 à 20 jours avant', '50 % du montant'],
          ['Moins de 7 jours avant', 'Aucun remboursement'],
        ],
        paragraphs: [
          'Une fois le forfait commencé, aucun remboursement n’est possible. Une absence à l’heure convenue est considérée comme un désistement.',
          'L’itinéraire peut être modifié en raison de la météo, de la sécurité du groupe ou des consignes des autorités compétentes. Toute personne qui décide de quitter le groupe pendant l’activité prend à sa charge les frais qui en découlent.',
        ],
      },
      {
        type: 'safety',
        title: 'Sécurité pendant les activités',
        riskLabel: 'Risques et limites — à lire attentivement',
        lead: 'La nature donne le rythme — l’équipe se charge des décisions techniques.',
        body: 'Les activités sont encadrées par des guides locaux formés aux premiers secours et aux compétences minimales d’encadrement selon les normes brésiliennes ABNT. Une partie de l’équipe est certifiée WAFA.',
        warning: 'Le trek implique un terrain irrégulier, des changements de météo, des chutes, des animaux et des zones isolées. À certains endroits, un secours peut prendre plus de cinq heures, et son coût n’est pas inclus dans le forfait.',
        footer: 'Suivez les consignes du guide, signalez à l’avance tout problème de santé et emportez tout l’équipement obligatoire. L’itinéraire peut changer chaque fois que la sécurité l’exige.',
      },
    ],
  },
};
