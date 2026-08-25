/**
 * Texto da página Sobre por idioma.
 *
 * ⚠️ EN e ES são tradução feita neste repositório. A operadora não publica
 * versão traduzida: `mamut.agency/en/quem-somos` serve a página em português.
 *
 * As biografias falam de pessoas reais — nomes, certificações e o idioma que
 * cada um conduz são fato. Vale a operadora revisar antes de publicar.
 */

import type { Locale } from '@/lib/site';

export type GuideText = { role: string; bio: string };

export type AboutContent = {
  meta: { title: string; description: string; canonical: string; ogTitle: string; ogDescription: string };
  hero: {
    /** `antes` [fotos] `aqui` — e a segunda linha muda entre mobile e desktop. */
    titulo: { antes: string; aqui: string; mobile: string; desktop: string };
    leadDesktop: string;
    leadMobile: string;
    ctaBando: string;
    ctaGuia: string;
    fotoAlt: string;
  };
  story: {
    /** `l1` / `l2` **`l3`** / **`l4`** [foto] **`l5`** — a arte entra na frase. */
    titulo: { l1: string; l2: string; l3: string; l4: string; l5: string };
    /** Os dois cards: título e dois parágrafos cada. */
    cards: { titulo: string; paragrafos: [string, string] }[];
    selos: { titulo: string; texto: string }[];
    fotoAlt: string;
  };
  guides: {
    badge: string;
    titulo: string;
    lead: string;
    pagina: string;
    ctaTitulo: { linha1: string; linha2: string };
    ctaTexto: string;
    cta: string;
  };
  reviews: {
    badge: string;
    /** mobile: duas linhas; desktop: três, com destaque na última. */
    titulo: { mobile: [string, string]; desktop: [string, string, string] };
    avaliacoes: string;
    avaliacoesLabel: string;
    mediaChip: string;
    mediaLabel: string;
    rankingChip: string;
    ranking: string;
    rankingLabel: string;
    ctaTrilha: string;
    ctaTrilhaHref: string;
    ctaWhatsapp: string;
    ctaTripadvisor: string;
    depoimentos: string[];
  };
  cta: { titulo: [string, string]; corpo: string; botao: string; botaoHref: string; fotoAlt: string };
  guiaTexto: Record<string, GuideText>;
};

export const ABOUT_CONTENT: Record<Locale, AboutContent> = {
  pt: {
    meta: {
      title: 'Sobre nós',
      description:
        'Conheça a história e os guias nativos da Mamut Trekking, formados pela Chapada Diamantina.',
      canonical: '/pt/sobre',
      ogTitle: 'Sobre a Mamut Trekking',
      ogDescription:
        'Sete guias nativos, formados pela Chapada. Juntos, cobrem o Parque Nacional inteiro.',
    },
    hero: {
      titulo: { antes: 'Nascidos', aqui: 'aqui.', mobile: 'aqui formados pela Chapada.', desktop: 'Formados pela Chapada.' },
      leadDesktop:
        'Trekkings guiados por quem é filho da Chapada Diamantina. Cada trilha é uma jornada de volta ao que você é.',
      leadMobile:
        'Trekkings guiados por quem é filho da Chapada Diamantina — cada trilha é uma jornada de volta ao que você é.',
      ctaBando: 'Conheça o bando',
      ctaGuia: 'Falar com guia',
      fotoAlt: 'Centro histórico de Lençóis ao pôr do sol',
    },
    story: {
      titulo: { l1: 'Não somos uma agência', l2: 'de turismo.', l3: 'Somos o bando', l4: 'que guia a', l5: 'sua tribo.' },
      cards: [
        {
          titulo: 'É dessa memória que nascemos.',
          paragrafos: [
            'Na imensidão dos mega continentes, os mamutes caminhavam em grandes grupos — marcando sua existência para sempre.',
            'Na Chapada Diamantina, resgatamos essa conexão. Cada trilha é uma jornada de volta às suas raízes: sentir o chão, ouvir o vento, pertencer a algo maior.',
          ],
        },
        {
          titulo: 'Formados pela Serra do Sincorá.',
          paragrafos: [
            'Todos os nossos guias são locais — brigadistas florestais, condutores certificados (CMC, APH, WFA) e conhecedores da flora, fauna e geologia da Serra do Sincorá.',
            'É o que nos permite entrar nas travessias mais remotas do Parque Nacional sem abrir mão do cuidado com quem caminha e com o território.',
          ],
        },
      ],
      selos: [
        { titulo: 'Guias 100% locais', texto: 'Nascidos e criados em Lençóis e no entorno da Chapada.' },
        { titulo: 'CMC, APH e WFA', texto: 'Condutores certificados e brigadistas florestais.' },
        { titulo: 'Flora, fauna e geologia', texto: 'Conhecimento vivo da Serra do Sincorá.' },
        { titulo: 'Cadastur regularizado', texto: 'CNPJ 43.500.583/0001-22 · Ministério do Turismo.' },
      ],
      fotoAlt: 'Chapada Diamantina ao pôr do sol',
    },
    guides: {
      badge: 'Conheça quem guia o nosso bando!',
      titulo: 'Quem guia o nosso bando.',
      lead: 'Sete guias nativos, formados pela Chapada. Cada um com uma especialidade — juntos, cobrem o Parque Nacional inteiro.',
      pagina: 'Página dos guias',
      ctaTitulo: { linha1: 'Quer caminhar', linha2: 'com a gente?' },
      ctaTexto: 'Fale com um guia nativo pelo WhatsApp. Escolhemos juntos o ritmo, o roteiro e a data.',
      cta: 'Entrar para o bando',
    },
    reviews: {
      badge: 'Avaliações verificadas · TripAdvisor',
      titulo: { mobile: ['O que nosso bando', 'diz das aventuras.'], desktop: ['Cada review é uma', 'trilha que já fizemos', 'juntos.'] },
      avaliacoes: '145 avaliações',
      avaliacoesLabel: 'Avaliações',
      mediaChip: '5.0 geral',
      mediaLabel: 'Média de nota geral',
      rankingChip: '#5 em Lençóis',
      ranking: '#5 no ranking',
      rankingLabel: 'de atividades ao ar livre em Lençóis',
      ctaTrilha: 'Escolha a sua trilha',
      ctaTrilhaHref: '/pt/aventuras',
      ctaWhatsapp: 'Reservar pelo WhatsApp',
      ctaTripadvisor: 'Conheça o nosso TripAdvisor',
      depoimentos: [
        '“Desde o primeiro contato até o final da viagem, a agência demonstrou profissionalismo e organização.”',
        '“Os pontos turísticos eram deslumbrantes, as cachoeiras eram épicas, e a aventura era incrível.”',
        '“Nosso guia foi muito amigável, cuidadoso e adaptado a todas as nossas necessidades. Seu conhecimento sobre o parque nacional é enorme.”',
      ],
    },
    cta: {
      titulo: ['Sua trilha começa', 'com uma mensagem.'],
      corpo:
        'Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a Chapada Diamantina e como se preparar.',
      botao: 'Entrar para o bando',
      botaoHref: '/pt/contato',
      fotoAlt: 'Trilha diante do Morro do Pai Inácio',
    },
    guiaTexto: {
      'marcelo-cabral': {
        role: 'Guia & Fundador',
        bio: '13 anos em Lençóis. Cuida da operação inteira — do primeiro contato ao último passo na trilha. Introduz a Chapada a brasileiros e estrangeiros com a mesma autoridade de quem escolheu essa terra para chamar de lar.',
      },
      'felipe-ribeiro': {
        role: 'PT · EN',
        bio: 'Nascido em Salvador, criado em Lençóis desde a infância. Conhece a grande maioria das trilhas ao redor do Parque Nacional. Lembrado pela simpatia e pelas habilidades na cozinha. Desenha as rotas e operações de cada grupo e conduz em inglês.',
      },
      'salomao-andrade': {
        role: 'Brigadista',
        bio: 'Nascido e criado na Chapada, especialista nos trekkings selvagens do Parque Nacional. Conduz o público estrangeiro.',
      },
      'aman-duart': {
        role: 'Bombeiro civil',
        bio: 'Neto de garimpeiros e nativo de Lençóis. Possui vasto conhecimento sobre as plantas medicinais da Chapada Diamantina, formação como bombeiro civil e ótima companhia para qualquer passeio.',
      },
      'luiz-henrique': {
        role: 'Certificação WFA',
        bio: 'Nascido e criado na Chapada, com disposição infinita para subir a serra. Domina os trekkings mais tradicionais no entorno do Parque. Escalador amador e estudante de Análise e Desenvolvimento de Sistemas.',
      },
      'rodolfo-anjos': {
        role: 'Brigadista',
        bio: 'Nascido em Lençóis, mentor do time. Condutor de turismo com vasta experiência e ótimo motorista, com enorme bagagem sobre a Chapada. Guia em francês.',
      },
      'jair-dalcin': {
        role: 'Principal motorista',
        bio: 'Integrante mais recente e “pai” do time. Nascido no Paraná, morador de Lençóis há mais de 15 anos. Conduz sempre com bom humor e simpatia.',
      },
    },
  },

  en: {
    meta: {
      title: 'About us',
      description:
        'Meet the story and the local guides of Mamut Trekking, shaped by the Chapada Diamantina.',
      canonical: '/en/about',
      ogTitle: 'About Mamut Trekking',
      ogDescription:
        'Seven local guides, shaped by the Chapada. Together they cover the whole National Park.',
    },
    hero: {
      titulo: { antes: 'Born', aqui: 'here.', mobile: 'here, shaped by the Chapada.', desktop: 'Shaped by the Chapada.' },
      leadDesktop:
        'Treks guided by those born and raised in the Chapada Diamantina. Every trail is a journey back to who you are.',
      leadMobile:
        'Treks guided by those born and raised in the Chapada Diamantina — every trail is a journey back to who you are.',
      ctaBando: 'Meet the herd',
      ctaGuia: 'Talk to a guide',
      fotoAlt: 'The historic centre of Lençóis at sunset',
    },
    story: {
      titulo: { l1: 'We are not a travel', l2: 'agency.', l3: 'We are the herd', l4: 'that guides', l5: 'your tribe.' },
      cards: [
        {
          titulo: 'That memory is where we come from.',
          paragrafos: [
            'Across the vastness of the mega continents, mammoths walked in great herds — leaving their mark forever.',
            'In the Chapada Diamantina we reclaim that connection. Every trail is a journey back to your roots: feeling the ground, hearing the wind, belonging to something larger.',
          ],
        },
        {
          titulo: 'Shaped by the Serra do Sincorá.',
          paragrafos: [
            'All of our guides are local — forest fire brigade members, certified mountain guides (CMC, APH, WFA) and keepers of the flora, fauna and geology of the Serra do Sincorá.',
            'That is what lets us reach the most remote crossings of the National Park without compromising the care we owe to those who walk and to the territory itself.',
          ],
        },
      ],
      selos: [
        { titulo: '100% local guides', texto: 'Born and raised in Lençóis and around the Chapada.' },
        { titulo: 'CMC, APH and WFA', texto: 'Certified mountain guides and forest fire brigade members.' },
        { titulo: 'Flora, fauna and geology', texto: 'Living knowledge of the Serra do Sincorá.' },
        { titulo: 'Licensed with Cadastur', texto: 'CNPJ 43.500.583/0001-22 · Brazilian Ministry of Tourism.' },
      ],
      fotoAlt: 'The Chapada Diamantina at sunset',
    },
    guides: {
      badge: 'Meet the people who guide our herd',
      titulo: 'The people who guide our herd.',
      lead: 'Seven local guides, shaped by the Chapada. Each with a speciality — together, they cover the whole National Park.',
      pagina: 'Guides page',
      ctaTitulo: { linha1: 'Want to walk', linha2: 'with us?' },
      ctaTexto: 'Talk to a local guide on WhatsApp. We choose the pace, the route and the date together.',
      cta: 'Join the herd',
    },
    reviews: {
      badge: 'Verified reviews · TripAdvisor',
      titulo: { mobile: ['What our herd', 'says about the trips.'], desktop: ['Every review is a', 'trail we have walked', 'together.'] },
      avaliacoes: '145 reviews',
      avaliacoesLabel: 'Reviews',
      mediaChip: '5.0 overall',
      mediaLabel: 'Overall rating',
      rankingChip: '#5 in Lençóis',
      ranking: '#5 ranked',
      rankingLabel: 'of outdoor activities in Lençóis',
      ctaTrilha: 'Choose your trail',
      ctaTrilhaHref: '/en/adventures',
      ctaWhatsapp: 'Book on WhatsApp',
      ctaTripadvisor: 'See our TripAdvisor',
      depoimentos: [
        '“From the first contact to the end of the trip, the agency showed professionalism and organisation.”',
        '“The sights were stunning, the waterfalls were epic, and the adventure was incredible.”',
        '“Our guide was very friendly, careful and adapted to all of our needs. His knowledge of the national park is enormous.”',
      ],
    },
    cta: {
      titulo: ['Your trail starts', 'with a message.'],
      corpo:
        'Talk to us on WhatsApp. Find out which trip suits you best in the Chapada Diamantina, and how to get ready for it.',
      botao: 'Join the herd',
      botaoHref: '/en/contact',
      fotoAlt: 'A trail facing the Morro do Pai Inácio',
    },
    guiaTexto: {
      'marcelo-cabral': {
        role: 'Guide & Founder',
        bio: '13 years in Lençóis. He looks after the whole operation — from the first message to the last step on the trail. He introduces the Chapada to Brazilians and foreigners alike, with the authority of someone who chose this land to call home.',
      },
      'felipe-ribeiro': {
        role: 'PT · EN',
        bio: 'Born in Salvador, raised in Lençóis since childhood. He knows the vast majority of the trails around the National Park. Remembered for his warmth and his cooking. He designs the routes and the logistics for each group, and guides in English.',
      },
      'salomao-andrade': {
        role: 'Fire brigade',
        bio: 'Born and raised in the Chapada, a specialist in the wild treks of the National Park. He guides international groups.',
      },
      'aman-duart': {
        role: 'Civil firefighter',
        bio: 'Grandson of prospectors and a native of Lençóis. He has a deep knowledge of the medicinal plants of the Chapada Diamantina, training as a civil firefighter, and is fine company on any trip.',
      },
      'luiz-henrique': {
        role: 'WFA certified',
        bio: 'Born and raised in the Chapada, with endless appetite for climbing the range. He masters the most traditional treks around the Park. Amateur climber and a systems analysis student.',
      },
      'rodolfo-anjos': {
        role: 'Fire brigade',
        bio: 'Born in Lençóis, the team’s mentor. A tourism guide with vast experience and an excellent driver, with enormous knowledge of the Chapada. He guides in French.',
      },
      'jair-dalcin': {
        role: 'Lead driver',
        bio: 'The newest member and the “dad” of the team. Born in Paraná, a resident of Lençóis for over 15 years. He always drives with good humour and warmth.',
      },
    },
  },

  es: {
    meta: {
      title: 'Quiénes somos',
      description:
        'Conocé la historia y los guías nativos de Mamut Trekking, formados por la Chapada Diamantina.',
      canonical: '/es/quienes-somos',
      ogTitle: 'Sobre Mamut Trekking',
      ogDescription:
        'Siete guías nativos, formados por la Chapada. Juntos cubren todo el Parque Nacional.',
    },
    hero: {
      titulo: { antes: 'Nacidos', aqui: 'acá.', mobile: 'acá, formados por la Chapada.', desktop: 'Formados por la Chapada.' },
      leadDesktop:
        'Trekkings guiados por quienes nacieron en la Chapada Diamantina. Cada sendero es un viaje de vuelta a lo que sos.',
      leadMobile:
        'Trekkings guiados por quienes nacieron en la Chapada Diamantina — cada sendero es un viaje de vuelta a lo que sos.',
      ctaBando: 'Conocé la manada',
      ctaGuia: 'Hablar con un guía',
      fotoAlt: 'El centro histórico de Lençóis al atardecer',
    },
    story: {
      titulo: { l1: 'No somos una agencia', l2: 'de turismo.', l3: 'Somos la manada', l4: 'que guía a', l5: 'tu tribu.' },
      cards: [
        {
          titulo: 'De esa memoria nacimos.',
          paragrafos: [
            'En la inmensidad de los megacontinentes, los mamuts caminaban en grandes grupos — marcando su existencia para siempre.',
            'En la Chapada Diamantina rescatamos esa conexión. Cada sendero es un viaje de vuelta a tus raíces: sentir el suelo, escuchar el viento, pertenecer a algo mayor.',
          ],
        },
        {
          titulo: 'Formados por la Serra do Sincorá.',
          paragrafos: [
            'Todos nuestros guías son locales — brigadistas forestales, conductores certificados (CMC, APH, WFA) y conocedores de la flora, la fauna y la geología de la Serra do Sincorá.',
            'Es lo que nos permite entrar en las travesías más remotas del Parque Nacional sin renunciar al cuidado de quien camina y del territorio.',
          ],
        },
      ],
      selos: [
        { titulo: 'Guías 100% locales', texto: 'Nacidos y criados en Lençóis y en el entorno de la Chapada.' },
        { titulo: 'CMC, APH y WFA', texto: 'Conductores certificados y brigadistas forestales.' },
        { titulo: 'Flora, fauna y geología', texto: 'Conocimiento vivo de la Serra do Sincorá.' },
        { titulo: 'Cadastur habilitado', texto: 'CNPJ 43.500.583/0001-22 · Ministerio de Turismo de Brasil.' },
      ],
      fotoAlt: 'La Chapada Diamantina al atardecer',
    },
    guides: {
      badge: '¡Conocé a quienes guían nuestra manada!',
      titulo: 'Quiénes guían nuestra manada.',
      lead: 'Siete guías nativos, formados por la Chapada. Cada uno con una especialidad — juntos cubren todo el Parque Nacional.',
      pagina: 'Página de los guías',
      ctaTitulo: { linha1: '¿Querés caminar', linha2: 'con nosotros?' },
      ctaTexto: 'Hablá con un guía nativo por WhatsApp. Elegimos juntos el ritmo, el recorrido y la fecha.',
      cta: 'Sumate a la manada',
    },
    reviews: {
      badge: 'Reseñas verificadas · TripAdvisor',
      titulo: { mobile: ['Lo que nuestra manada', 'dice de las aventuras.'], desktop: ['Cada reseña es un', 'sendero que hicimos', 'juntos.'] },
      avaliacoes: '145 reseñas',
      avaliacoesLabel: 'Reseñas',
      mediaChip: '5.0 general',
      mediaLabel: 'Promedio general',
      rankingChip: '#5 en Lençóis',
      ranking: '#5 en el ranking',
      rankingLabel: 'de actividades al aire libre en Lençóis',
      ctaTrilha: 'Elegí tu sendero',
      ctaTrilhaHref: '/es/aventuras',
      ctaWhatsapp: 'Reservar por WhatsApp',
      ctaTripadvisor: 'Conocé nuestro TripAdvisor',
      depoimentos: [
        '“Desde el primer contacto hasta el final del viaje, la agencia demostró profesionalismo y organización.”',
        '“Los paisajes eran deslumbrantes, las cascadas épicas y la aventura increíble.”',
        '“Nuestro guía fue muy amable, cuidadoso y se adaptó a todas nuestras necesidades. Su conocimiento del parque nacional es enorme.”',
      ],
    },
    cta: {
      titulo: ['Tu sendero empieza', 'con un mensaje.'],
      corpo:
        'Hablá con nosotros por WhatsApp. Descubrí cuál es tu recorrido ideal para conocer la Chapada Diamantina y cómo prepararte.',
      botao: 'Sumate a la manada',
      botaoHref: '/es/contacto',
      fotoAlt: 'Sendero frente al Morro do Pai Inácio',
    },
    guiaTexto: {
      'marcelo-cabral': {
        role: 'Guía y fundador',
        bio: '13 años en Lençóis. Cuida de toda la operación — del primer contacto al último paso en el sendero. Presenta la Chapada a brasileños y extranjeros con la autoridad de quien eligió esta tierra para llamarla casa.',
      },
      'felipe-ribeiro': {
        role: 'PT · EN',
        bio: 'Nacido en Salvador, criado en Lençóis desde la infancia. Conoce la gran mayoría de los senderos alrededor del Parque Nacional. Recordado por su simpatía y por sus habilidades en la cocina. Diseña las rutas y la operación de cada grupo y guía en inglés.',
      },
      'salomao-andrade': {
        role: 'Brigadista',
        bio: 'Nacido y criado en la Chapada, especialista en los trekkings salvajes del Parque Nacional. Guía al público extranjero.',
      },
      'aman-duart': {
        role: 'Bombero civil',
        bio: 'Nieto de mineros y nativo de Lençóis. Tiene un vasto conocimiento sobre las plantas medicinales de la Chapada Diamantina, formación como bombero civil y es excelente compañía en cualquier paseo.',
      },
      'luiz-henrique': {
        role: 'Certificación WFA',
        bio: 'Nacido y criado en la Chapada, con disposición infinita para subir la sierra. Domina los trekkings más tradicionales del entorno del Parque. Escalador amateur y estudiante de Análisis y Desarrollo de Sistemas.',
      },
      'rodolfo-anjos': {
        role: 'Brigadista',
        bio: 'Nacido en Lençóis, mentor del equipo. Conductor de turismo con vasta experiencia y excelente chofer, con enorme bagaje sobre la Chapada. Guía en francés.',
      },
      'jair-dalcin': {
        role: 'Chofer principal',
        bio: 'El integrante más reciente y el “papá” del equipo. Nacido en Paraná, vecino de Lençóis desde hace más de 15 años. Conduce siempre con buen humor y simpatía.',
      },
    },
  },
};
