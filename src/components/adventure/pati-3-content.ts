/**
 * Conteúdo da página do Vale do Pati em 3 dias, por idioma.
 *
 * PT é o copy do redesenho. EN toma como base
 * mamut.agency/en/aventuras/pati-valley-3-days — a única página de roteiro que
 * a operadora publica traduzida de verdade. ES é tradução feita aqui.
 *
 * ⚠️ Os números da página em inglês do site atual divergem dos deste
 * repositório (43 km × 45 km; saída 7h × 6h; preços diferentes). Mantive os do
 * repositório nos três idiomas — inventar uma terceira versão seria pior — mas
 * a operadora precisa dizer qual está correta.
 *
 * Números, ícones e imagens ficam no componente: não mudam com o idioma.
 */

import type { Locale } from '@/lib/site';

export type Pati3Content = {
  meta: { title: string; description: string; canonical: string; ogDescription: string };
  hero: {
    nivel: string;
    origem: string;
    titulo: { antes: string; destaque: string };
    lead: { antes: string; destaque: string };
    apoio: string;
    apartirDe: string;
    grupo: string;
    saida: string;
    tripadvisor: string;
    sinal: string;
    paraGrupos: string;
    pessoas: string;
    verPrecos: string;
    resposta: string;
    idiomas: string;
    fotoAlt: string;
  };
  /** Rótulo de cada número do cabeçalho, na ordem do componente. */
  stats: string[];
  story: {
    titulo: [string, string];
    paragrafos: [string, string];
    quando: string;
    estacoes: { titulo: string; meses: string; pontos: string[] }[];
    editoriais: { titulo: string; corpo: string }[];
    outrasVersoes: string;
    explorar: string;
    relacionados: { titulo: string; nivel: string; href: string }[];
  };
  itinerary: {
    titulo: string;
    dias: { day: string; level: string; lead: string; body: string; note?: string; alert?: string }[];
  };
  landmarks: { titulo: string; itens: { titulo: string; apoio: string }[] };
  pricing: {
    titulo: string;
    /** Os dois formatos do site de referência, na ordem: privado e em grupo. */
    formatos: { titulo: string; nota: string }[];
    porPessoa: string;
    nota: { antes: string; destaque: string; depois: string };
    cta: string;
  };
  trust: {
    badge: string;
    titulo: { antes: string; destaque: string };
    selos: { titulo: string; corpo: string }[];
    cta: string;
    ctaTripadvisor: string;
  };
  faqTitulo: { titulo: string; lead: string };
  finalCta: { titulo: [string, string]; corpo: string; cta: string; fotoAlt: string };
  /** Sheet de reserva do mobile (`PatiMobileBooking`). */
  booking: {
    dockApoio: string;
    reservar: string;
    whatsapp: string;
    fechar: string;
    titulo: string;
    data: string;
    viajantes: string;
    remover: string;
    adicionar: string;
    idioma: string;
    valor: string;
    porPessoa: string;
    verificar: string;
    nota: string;
    calendario: string;
    voltar: string;
    mesAnterior: string;
    proximoMes: string;
    escolherDia: string;
    /** Iniciais dos dias da semana, de domingo a sábado. */
    semana: [string, string, string, string, string, string, string];
    /** Locale BCP-47 para o nome do mês e a data por extenso. */
    intl: string;
    /** Dias da semana por extenso, de domingo a sábado. */
    diasSemana: string[];
    mensagem: { antes: string; viajante: string; viajantes: string; idioma: string };
  };
};

export const PATI3_CONTENT: Record<Locale, Pati3Content> = {
  pt: {
    meta: {
      title: 'Vale do Pati em 3 Dias',
      description:
        'Travessia guiada de 43 km pelo Vale do Pati, com hospedagem em casas de nativos, cachoeiras e os mirantes mais emblemáticos do vale.',
      canonical: '/pt/aventuras/vale-do-pati-3-dias',
      ogDescription: 'A travessia que reorganiza o que você chama de natureza.',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Origem: Lençóis',
      titulo: { antes: 'Vale do Pati em', destaque: '3 Dias.' },
      lead: { antes: 'A travessia que reorganiza o que você chama de', destaque: 'natureza.' },
      apoio: 'Cachoeiras e casas de nativos a 1.000m de altitude. Guiado por quem nasceu aqui.',
      apartirDe: 'A partir de',
      grupo: 'Em grupo',
      saida: 'Saída de Lençóis às 6h00',
      tripadvisor: 'TripAdvisor — Certificado de Excelência',
      sinal: '50% de sinal para confirmar reserva',
      paraGrupos: 'Para grupos de',
      pessoas: '4 pessoas',
      verPrecos: 'Ver tabela de preços',
      resposta: 'Respondemos em até 2h',
      idiomas: 'PT · EN · ES',
      fotoAlt: 'Vale do Pati visto do alto',
    },
    stats: [
      'Distância a pé', 'Duração', 'Altitude máxima', 'Ganho de elevação',
      'Saída (Lençóis)', 'Retorno', 'Idiomas', 'Dificuldade',
    ],
    story: {
      titulo: ['O trek mais famoso', 'da Chapada Diamantina.'],
      paragrafos: [
        'O Vale do Pati fica a mil metros de altitude e entrega uma diversidade de paisagens rara no Brasil: remanescentes de Mata Atlântica, campos rupestres e os Gerais do Rio Preto. Uma região que abrigou camponeses há dois séculos e ainda guarda, em 14 casas vivas, a memória de quem nunca saiu daqui.',
        'O terreno é real: sol, chuva, lama, subidas íngremes, travessia de rio. Não é passeio. É travessia — o Pati cobra de quem quer atravessá-lo. Nosso roteiro faz a volta completa pelos pontos mais emblemáticos do Vale.',
      ],
      quando: 'Quando caminhar no Pati?',
      estacoes: [
        { titulo: 'Verão e Outono', meses: 'Jan – Mai', pontos: ['Cachoeiras cheias, volume máximo de água', 'Mais lama nas trilhas'] },
        { titulo: 'Inverno e Primavera', meses: 'Jun – Dez', pontos: ['Terreno mais firme e seco', 'Menos volume de água nas cachoeiras'] },
      ],
      editoriais: [
        { titulo: 'Mesa farta', corpo: 'Café e jantar preparados nos alojamentos, cardápio farto que varia a cada dia. Nas caminhadas, piquenique equilibrado. Café do 1º dia não incluso — tome em Lençóis antes da saída.' },
        { titulo: 'Hospedagem', corpo: 'Hospedagem em casas de nativos, quartos compartilhados. Precisa de quarto privativo? Informe na reserva e verificamos disponibilidade.' },
      ],
      outrasVersoes: 'O Vale também existe em 4 e 5 dias.',
      explorar: 'Explorar essa versão',
      relacionados: [
        { titulo: 'Vale do Pati · 4 Dias', nivel: 'Moderado / Avançado', href: '/pt/aventuras/vale-do-pati-4-dias' },
        { titulo: 'Vale do Pati · 5 Dias', nivel: 'Avançado', href: '/pt/aventuras/vale-do-pati-5-dias' },
      ],
    },
    itinerary: {
      titulo: 'O itinerário da travessia.',
      dias: [
        {
          day: 'Dia 1', level: 'Moderado', lead: '6h saída',
          body: ' de Lençóis → 8h Vila do Guiné (2h de carro) → 3h de trilha (1h subida íngreme + 2h plano) até o Mirante da Rampa → +1h30 até as Cachoeiras do Funis, Altina e Bananeiras → 17h hospedagem → 19h jantar.',
          note: 'A subida íngreme é a primeira cobrança do Pati.',
        },
        {
          day: 'Dia 2', level: 'Alto', lead: '8h saída',
          body: ' → Morro do Castelo, subida de +250m até 1.200m de altitude (60–80 min) → 2 mirantes no cume + Gruta da Lapinha, uma das grutas mais raras do mundo → retorno pelo mesmo caminho → cachoeira próxima, se houver tempo.',
          note: 'O dia mais exigente da travessia.', alert: 'Dia mais exigente',
        },
        {
          day: 'Dia 3', level: 'Moderado', lead: '8h despedida',
          body: ' do Pati → 3h até o Mirante do Cachoeirão (+280m; em época chuvosa, até 16 cascatas ao redor do vale) → lanche → Gerais do Rio Preto → Descida dos Aleixos → transfer de 80km → ~19h em Lençóis.',
        },
      ],
    },
    landmarks: {
      titulo: 'Os pontos mais emblemáticos do Vale.',
      itens: [
        { titulo: '4 pontos de banho', apoio: 'Ao longo do roteiro' },
        { titulo: 'Gerais do Rio Preto', apoio: '' },
        { titulo: 'Mirante da Rampa', apoio: 'Entrada do Vale' },
        { titulo: 'Mirante do Cachoeirão', apoio: '280m · até 16 cascatas' },
        { titulo: 'Morro do Castelo', apoio: '1.200m de altitude' },
        { titulo: 'Gruta da Lapinha', apoio: 'Uma das mais raras do mundo' },
        { titulo: 'Cachoeiras do Funis, Altina e Bananeiras', apoio: '' },
        { titulo: 'Descida dos Aleixos', apoio: '' },
      ],
    },
    pricing: {
      titulo: 'Escolha o formato ideal para o seu grupo.',
      formatos: [
        { titulo: 'Pacote privado', nota: 'Mínimo de 2 pessoas. Só o seu grupo na trilha.' },
        { titulo: 'Em grupo', nota: 'Mínimo de 2 pessoas. Você entra num grupo aberto.' },
      ],
      porPessoa: 'por pessoa',
      nota: {
        antes: 'Dinheiro, transferência ou boleto. ',
        destaque: 'Cartão: +5%, em até 12x (PagSeguro). Reserva confirmada com 50% de sinal:',
        depois: ' restante no check-in. Transferência internacional ou grupo maior: consulte o atendimento.',
      },
      cta: 'Reservar pelo WhatsApp',
    },
    trust: {
      badge: 'Avaliações verificadas · TripAdvisor',
      titulo: { antes: 'Quem já caminhou com a gente', destaque: 'confia!' },
      selos: [
        { titulo: 'Guias certificados', corpo: 'APH e CMC (ABNT), alguns com WAFA' },
        { titulo: 'Comunicação via satélite', corpo: 'SPOT X com botão de S.O.S.' },
        { titulo: 'Seguro aventura', corpo: 'Kit de primeiros socorros incluso' },
        { titulo: 'Certificado de excelência', corpo: 'Avaliações verificadas no TripAdvisor' },
      ],
      cta: 'Reservar pelo WhatsApp',
      ctaTripadvisor: 'Conheça o nosso TripAdvisor',
    },
    faqTitulo: {
      titulo: 'Tudo que você precisa saber.',
      lead: 'Detalhes de execução para tirar suas dúvidas antes de embarcar nesta aventura com o bando Mamut.',
    },
    finalCta: {
      titulo: ['Sua trilha começa', 'com uma mensagem.'],
      corpo: 'Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a Chapada Diamantina e como se preparar.',
      cta: 'Entrar para o bando',
      fotoAlt: 'Morro do Castelo cercado por flores no Vale do Pati',
    },
    booking: {
      dockApoio: 'Escolha o formato ideal para o seu grupo',
      reservar: 'Reservar',
      whatsapp: 'Falar pelo WhatsApp',
      fechar: 'Fechar reserva',
      titulo: 'Reserve sua trilha',
      data: 'Data',
      viajantes: 'Viajantes',
      remover: 'Remover viajante',
      adicionar: 'Adicionar viajante',
      idioma: 'Idioma',
      valor: 'Valor estimado',
      porPessoa: '/ pessoa',
      verificar: 'Verificar disponibilidade',
      nota: 'Confirmamos tudo com você pelo WhatsApp — sem compromisso.',
      calendario: 'Escolha a data',
      voltar: 'Voltar para a reserva',
      mesAnterior: 'Mês anterior',
      proximoMes: 'Próximo mês',
      escolherDia: 'Escolher dia',
      semana: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      intl: 'pt-BR',
      diasSemana: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
      mensagem: { antes: 'Olá! Quero verificar o Vale do Pati em 3 dias para', viajante: 'viajante', viajantes: 'viajantes', idioma: 'idioma' },
    },
  },

  en: {
    meta: {
      title: 'Pati Valley in 3 Days',
      description:
        'A guided 43 km traverse of the Pati Valley, staying in local families’ homes, with waterfalls and the most emblematic viewpoints of the valley.',
      canonical: '/en/adventures/pati-valley-3-days',
      ogDescription: 'The traverse that rearranges what you call nature.',
    },
    hero: {
      nivel: 'Moderate',
      origem: 'Starts in Lençóis',
      titulo: { antes: 'Pati Valley in', destaque: '3 Days.' },
      lead: { antes: 'The traverse that rearranges what you call', destaque: 'nature.' },
      apoio: 'Waterfalls and local families’ homes at 1,000 m of altitude. Guided by those born here.',
      apartirDe: 'From',
      grupo: 'In a group',
      saida: 'Departure from Lençóis at 6:00',
      tripadvisor: 'TripAdvisor — Certificate of Excellence',
      sinal: '50% deposit confirms the booking',
      paraGrupos: 'For groups of',
      pessoas: '4 people',
      verPrecos: 'See the price table',
      resposta: 'We reply within 2h',
      idiomas: 'PT · EN · ES',
      fotoAlt: 'The Pati Valley seen from above',
    },
    stats: [
      'Walking distance', 'Duration', 'Maximum altitude', 'Elevation gain',
      'Departure (Lençóis)', 'Return', 'Languages', 'Difficulty',
    ],
    story: {
      titulo: ['The most famous trek', 'of the Chapada Diamantina.'],
      paragrafos: [
        'The Pati Valley sits at a thousand metres of altitude and offers a diversity of landscapes that is rare in Brazil: remnants of Atlantic Forest, rocky fields and the Gerais do Rio Preto. A region that sheltered farmers two centuries ago and still keeps, in 14 living houses, the memory of those who never left.',
        'The terrain is real: sun, rain, mud, steep ascents, river crossings. This is not a stroll. It is a traverse — the Pati asks something of whoever wants to cross it. Our itinerary makes the full loop through the most emblematic points of the valley.',
      ],
      quando: 'When to walk the Pati?',
      estacoes: [
        { titulo: 'Summer and Autumn', meses: 'Jan – May', pontos: ['Full waterfalls, maximum water volume', 'More mud on the trails'] },
        { titulo: 'Winter and Spring', meses: 'Jun – Dec', pontos: ['Firmer, drier terrain', 'Less water in the waterfalls'] },
      ],
      editoriais: [
        { titulo: 'A full table', corpo: 'Breakfast and dinner prepared at the lodgings, a generous menu that changes every day. On the walks, a balanced picnic. Breakfast on day 1 is not included — have it in Lençóis before departure.' },
        { titulo: 'Accommodation', corpo: 'Lodging in local families’ homes, shared rooms. Need a private room? Tell us when booking and we check availability.' },
      ],
      outrasVersoes: 'The valley also exists in 4 and 5 days.',
      explorar: 'Explore this version',
      relacionados: [
        { titulo: 'Pati Valley · 4 Days', nivel: 'Moderate / Advanced', href: '/en/adventures/pati-valley-4-days' },
        { titulo: 'Pati Valley · 5 Days', nivel: 'Advanced', href: '/en/adventures/pati-valley-5-days' },
      ],
    },
    itinerary: {
      titulo: 'The itinerary of the traverse.',
      dias: [
        {
          day: 'Day 1', level: 'Moderate', lead: '6:00 departure',
          body: ' from Lençóis → 8:00 Vila do Guiné (2h drive) → 3h of trail (1h steep ascent + 2h flat) to the Mirante da Rampa → +1h30 to the Funis, Altina and Bananeiras waterfalls → 17:00 lodging → 19:00 dinner.',
          note: 'The steep ascent is the first thing the Pati asks of you.',
        },
        {
          day: 'Day 2', level: 'High', lead: '8:00 departure',
          body: ' → Morro do Castelo, a climb of +250 m to 1,200 m of altitude (60–80 min) → 2 viewpoints at the summit + the Lapinha Cave, one of the rarest caves in the world → back the same way → a nearby waterfall, if there is time.',
          note: 'The most demanding day of the traverse.', alert: 'Most demanding day',
        },
        {
          day: 'Day 3', level: 'Moderate', lead: '8:00 farewell',
          body: ' to the Pati → 3h to the Mirante do Cachoeirão (+280 m; in the rainy season, up to 16 waterfalls around the valley) → snack → Gerais do Rio Preto → Aleixos descent → 80 km transfer → ~19:00 in Lençóis.',
        },
      ],
    },
    landmarks: {
      titulo: 'The most emblematic points of the valley.',
      itens: [
        { titulo: '4 swimming spots', apoio: 'Along the route' },
        { titulo: 'Gerais do Rio Preto', apoio: '' },
        { titulo: 'Mirante da Rampa', apoio: 'Entrance to the valley' },
        { titulo: 'Mirante do Cachoeirão', apoio: '280 m · up to 16 waterfalls' },
        { titulo: 'Morro do Castelo', apoio: '1,200 m of altitude' },
        { titulo: 'Lapinha Cave', apoio: 'One of the rarest in the world' },
        { titulo: 'Funis, Altina and Bananeiras waterfalls', apoio: '' },
        { titulo: 'Aleixos descent', apoio: '' },
      ],
    },
    pricing: {
      titulo: 'Choose the format that fits your group.',
      formatos: [
        { titulo: 'Private package', nota: 'Minimum 2 people. Only your group on the trail.' },
        { titulo: 'In a group', nota: 'Minimum 2 people. You join an open group.' },
      ],
      porPessoa: 'per person',
      nota: {
        antes: 'Cash, bank transfer or boleto. ',
        destaque: 'Card: +5%, up to 12 instalments (PagSeguro). Booking confirmed with a 50% deposit:',
        depois: ' the rest at check-in. International transfer or a larger group: ask our team.',
      },
      cta: 'Book on WhatsApp',
    },
    trust: {
      badge: 'Verified reviews · TripAdvisor',
      titulo: { antes: 'Those who have walked with us', destaque: 'trust us!' },
      selos: [
        { titulo: 'Certified guides', corpo: 'APH and CMC (ABNT), some with WAFA' },
        { titulo: 'Satellite communication', corpo: 'SPOT X with an S.O.S. button' },
        { titulo: 'Adventure insurance', corpo: 'First-aid kit included' },
        { titulo: 'Certificate of excellence', corpo: 'Verified reviews on TripAdvisor' },
      ],
      cta: 'Book on WhatsApp',
      ctaTripadvisor: 'See our TripAdvisor',
    },
    faqTitulo: {
      titulo: 'Everything you need to know.',
      lead: 'The operational detail that answers your questions before setting off on this adventure with the Mamut herd.',
    },
    finalCta: {
      titulo: ['Your trail starts', 'with a message.'],
      corpo: 'Talk to us on WhatsApp. Find out which trip suits you best in the Chapada Diamantina, and how to get ready for it.',
      cta: 'Join the herd',
      fotoAlt: 'Morro do Castelo surrounded by flowers in the Pati Valley',
    },
    booking: {
      dockApoio: 'Choose the format that fits your group',
      reservar: 'Book',
      whatsapp: 'Talk on WhatsApp',
      fechar: 'Close booking',
      titulo: 'Book your trail',
      data: 'Date',
      viajantes: 'Travellers',
      remover: 'Remove traveller',
      adicionar: 'Add traveller',
      idioma: 'Language',
      valor: 'Estimated price',
      porPessoa: '/ person',
      verificar: 'Check availability',
      nota: 'We confirm everything with you on WhatsApp — no commitment.',
      calendario: 'Pick the date',
      voltar: 'Back to the booking',
      mesAnterior: 'Previous month',
      proximoMes: 'Next month',
      escolherDia: 'Pick day',
      semana: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      intl: 'en-GB',
      diasSemana: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      mensagem: { antes: 'Hi! I want to check the Pati Valley in 3 days for', viajante: 'traveller', viajantes: 'travellers', idioma: 'language' },
    },
  },

  es: {
    meta: {
      title: 'Valle del Pati en 3 Días',
      description:
        'Travesía guiada de 43 km por el Valle del Pati, con alojamiento en casas de nativos, cascadas y los miradores más emblemáticos del valle.',
      canonical: '/es/aventuras/valle-del-pati-3-dias',
      ogDescription: 'La travesía que reorganiza lo que llamás naturaleza.',
    },
    hero: {
      nivel: 'Moderado',
      origem: 'Sale de Lençóis',
      titulo: { antes: 'Valle del Pati en', destaque: '3 Días.' },
      lead: { antes: 'La travesía que reorganiza lo que llamás', destaque: 'naturaleza.' },
      apoio: 'Cascadas y casas de nativos a 1.000 m de altitud. Guiado por quienes nacieron acá.',
      apartirDe: 'Desde',
      grupo: 'En grupo',
      saida: 'Salida de Lençóis a las 6h00',
      tripadvisor: 'TripAdvisor — Certificado de Excelencia',
      sinal: '50% de seña para confirmar la reserva',
      paraGrupos: 'Para grupos de',
      pessoas: '4 personas',
      verPrecos: 'Ver la tabla de precios',
      resposta: 'Respondemos en hasta 2h',
      idiomas: 'PT · EN · ES',
      fotoAlt: 'El Valle del Pati visto desde arriba',
    },
    stats: [
      'Distancia a pie', 'Duración', 'Altitud máxima', 'Desnivel acumulado',
      'Salida (Lençóis)', 'Regreso', 'Idiomas', 'Dificultad',
    ],
    story: {
      titulo: ['El trekking más famoso', 'de la Chapada Diamantina.'],
      paragrafos: [
        'El Valle del Pati está a mil metros de altitud y ofrece una diversidad de paisajes rara en Brasil: remanentes de Mata Atlántica, campos rupestres y los Gerais do Rio Preto. Una región que albergó campesinos hace dos siglos y todavía guarda, en 14 casas vivas, la memoria de quienes nunca se fueron de acá.',
        'El terreno es real: sol, lluvia, barro, subidas empinadas, cruce de ríos. No es un paseo. Es una travesía — el Pati le cobra a quien quiere atravesarlo. Nuestro recorrido hace la vuelta completa por los puntos más emblemáticos del valle.',
      ],
      quando: '¿Cuándo caminar en el Pati?',
      estacoes: [
        { titulo: 'Verano y Otoño', meses: 'Ene – May', pontos: ['Cascadas llenas, volumen máximo de agua', 'Más barro en los senderos'] },
        { titulo: 'Invierno y Primavera', meses: 'Jun – Dic', pontos: ['Terreno más firme y seco', 'Menos volumen de agua en las cascadas'] },
      ],
      editoriais: [
        { titulo: 'Mesa abundante', corpo: 'Desayuno y cena preparados en los alojamientos, menú abundante que varía cada día. En las caminatas, picnic equilibrado. El desayuno del 1º día no está incluido — tomalo en Lençóis antes de salir.' },
        { titulo: 'Alojamiento', corpo: 'Alojamiento en casas de nativos, habitaciones compartidas. ¿Necesitás habitación privada? Avisanos en la reserva y verificamos disponibilidad.' },
      ],
      outrasVersoes: 'El valle también existe en 4 y 5 días.',
      explorar: 'Explorar esta versión',
      relacionados: [
        { titulo: 'Valle del Pati · 4 Días', nivel: 'Moderado / Avanzado', href: '/es/aventuras/valle-del-pati-4-dias' },
        { titulo: 'Valle del Pati · 5 Días', nivel: 'Avanzado', href: '/es/aventuras/valle-del-pati-5-dias' },
      ],
    },
    itinerary: {
      titulo: 'El itinerario de la travesía.',
      dias: [
        {
          day: 'Día 1', level: 'Moderado', lead: '6h salida',
          body: ' de Lençóis → 8h Vila do Guiné (2h en auto) → 3h de sendero (1h de subida empinada + 2h de llano) hasta el Mirante da Rampa → +1h30 hasta las cascadas Funis, Altina y Bananeiras → 17h alojamiento → 19h cena.',
          note: 'La subida empinada es lo primero que el Pati te cobra.',
        },
        {
          day: 'Día 2', level: 'Alto', lead: '8h salida',
          body: ' → Morro do Castelo, subida de +250 m hasta 1.200 m de altitud (60–80 min) → 2 miradores en la cima + la Gruta da Lapinha, una de las grutas más raras del mundo → regreso por el mismo camino → cascada cercana, si hay tiempo.',
          note: 'El día más exigente de la travesía.', alert: 'Día más exigente',
        },
        {
          day: 'Día 3', level: 'Moderado', lead: '8h despedida',
          body: ' del Pati → 3h hasta el Mirante do Cachoeirão (+280 m; en época de lluvias, hasta 16 cascadas alrededor del valle) → merienda → Gerais do Rio Preto → Bajada de los Aleixos → transfer de 80 km → ~19h en Lençóis.',
        },
      ],
    },
    landmarks: {
      titulo: 'Los puntos más emblemáticos del valle.',
      itens: [
        { titulo: '4 puntos de baño', apoio: 'A lo largo del recorrido' },
        { titulo: 'Gerais do Rio Preto', apoio: '' },
        { titulo: 'Mirante da Rampa', apoio: 'Entrada del valle' },
        { titulo: 'Mirante do Cachoeirão', apoio: '280 m · hasta 16 cascadas' },
        { titulo: 'Morro do Castelo', apoio: '1.200 m de altitud' },
        { titulo: 'Gruta da Lapinha', apoio: 'Una de las más raras del mundo' },
        { titulo: 'Cascadas Funis, Altina y Bananeiras', apoio: '' },
        { titulo: 'Bajada de los Aleixos', apoio: '' },
      ],
    },
    pricing: {
      titulo: 'Elegí el formato ideal para tu grupo.',
      formatos: [
        { titulo: 'Paquete privado', nota: 'Mínimo 2 personas. Solo tu grupo en el sendero.' },
        { titulo: 'En grupo', nota: 'Mínimo 2 personas. Te sumás a un grupo abierto.' },
      ],
      porPessoa: 'por persona',
      nota: {
        antes: 'Efectivo, transferencia o boleto. ',
        destaque: 'Tarjeta: +5%, hasta en 12 cuotas (PagSeguro). Reserva confirmada con 50% de seña:',
        depois: ' el resto en el check-in. Transferencia internacional o grupo mayor: consultá con atención.',
      },
      cta: 'Reservar por WhatsApp',
    },
    trust: {
      badge: 'Reseñas verificadas · TripAdvisor',
      titulo: { antes: 'Quienes ya caminaron con nosotros', destaque: '¡confían!' },
      selos: [
        { titulo: 'Guías certificados', corpo: 'APH y CMC (ABNT), algunos con WAFA' },
        { titulo: 'Comunicación satelital', corpo: 'SPOT X con botón de S.O.S.' },
        { titulo: 'Seguro de aventura', corpo: 'Kit de primeros auxilios incluido' },
        { titulo: 'Certificado de excelencia', corpo: 'Reseñas verificadas en TripAdvisor' },
      ],
      cta: 'Reservar por WhatsApp',
      ctaTripadvisor: 'Conocé nuestro TripAdvisor',
    },
    faqTitulo: {
      titulo: 'Todo lo que necesitás saber.',
      lead: 'Los detalles de operación para sacarte las dudas antes de embarcarte en esta aventura con la manada Mamut.',
    },
    finalCta: {
      titulo: ['Tu sendero empieza', 'con un mensaje.'],
      corpo: 'Hablá con nosotros por WhatsApp. Descubrí cuál es tu recorrido ideal para conocer la Chapada Diamantina y cómo prepararte.',
      cta: 'Sumate a la manada',
      fotoAlt: 'Morro do Castelo rodeado de flores en el Valle del Pati',
    },
    booking: {
      dockApoio: 'Elegí el formato ideal para tu grupo',
      reservar: 'Reservar',
      whatsapp: 'Hablar por WhatsApp',
      fechar: 'Cerrar reserva',
      titulo: 'Reservá tu sendero',
      data: 'Fecha',
      viajantes: 'Viajeros',
      remover: 'Quitar viajero',
      adicionar: 'Agregar viajero',
      idioma: 'Idioma',
      valor: 'Valor estimado',
      porPessoa: '/ persona',
      verificar: 'Verificar disponibilidad',
      nota: 'Confirmamos todo con vos por WhatsApp — sin compromiso.',
      calendario: 'Elegí la fecha',
      voltar: 'Volver a la reserva',
      mesAnterior: 'Mes anterior',
      proximoMes: 'Mes siguiente',
      escolherDia: 'Elegir día',
      semana: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      intl: 'es-AR',
      diasSemana: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      mensagem: { antes: '¡Hola! Quiero verificar el Valle del Pati en 3 días para', viajante: 'viajero', viajantes: 'viajeros', idioma: 'idioma' },
    },
  },
};
