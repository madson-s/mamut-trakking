/**
 * Conteúdo da página de dicas por idioma.
 *
 * PT é transcrição de mamut.agency/dicas e EN de mamut.agency/en/tips.
 *
 * ⚠️ ES é tradução feita neste repositório — a operadora não publica versão em
 * espanhol (`/es/consejos` responde 404).
 *
 * Os telefones ficam num único lugar: o número não muda com o idioma, e
 * duplicá-lo por locale faria uma correção virar três. Só o `nome` traduz, e
 * mesmo assim apenas onde não é nome próprio — daí o fallback para `pt`.
 */

import type { Locale } from '@/lib/site';

/* ------------------------------------------------------------------ */
/* Telefones — dado compartilhado                                     */
/* ------------------------------------------------------------------ */

type Nome = { pt: string; en?: string; es?: string };
export type Contato = { nome: Nome; numeros: string[] };
export type GrupoId = 'brigadas' | 'emergencia' | 'atrativos' | 'instituicoes';

export const TELEFONES: Record<GrupoId, Contato[]> = {
  brigadas: [
    { nome: { pt: 'ICMBio — Instituto Chico Mendes' }, numeros: ['(75) 3332-2418', '(75) 3332-2310'] },
    { nome: { pt: 'ACVIB — Ibicoara' }, numeros: ['(77) 3413-2385'] },
    { nome: { pt: 'Bicho do Mato — Ibicoara' }, numeros: ['(77) 99121-6439'] },
    { nome: { pt: 'BVL — Brigada Voluntária de Lençóis' }, numeros: ['(75) 99871-2860'] },
    { nome: { pt: 'GAP — Palmeiras' }, numeros: ['(75) 3332-2202'] },
    { nome: { pt: 'ACVVC — Vale do Capão' }, numeros: ['(75) 3344-1087'] },
    { nome: { pt: 'Brigada Altitude Ambiental — Piatã' }, numeros: ['(77) 99107-1701'] },
    { nome: { pt: 'BVCIF — Barra da Estiva' }, numeros: ['(77) 99828-8514'] },
    { nome: { pt: 'Brigada de Ruy Barbosa' }, numeros: ['(75) 99815-5539'] },
  ],
  emergencia: [
    {
      nome: { pt: 'Corpo de Bombeiros', en: 'Fire Department', es: 'Bomberos' },
      numeros: ['193'],
    },
    {
      nome: { pt: 'Polícia Militar', en: 'Military Police', es: 'Policía Militar' },
      numeros: ['190'],
    },
    {
      nome: {
        pt: 'Hospital Regional de Seabra',
        en: 'Regional Hospital of Seabra',
        es: 'Hospital Regional de Seabra',
      },
      numeros: ['(75) 3331-9400'],
    },
    {
      nome: {
        pt: 'Hospital Regional de Irecê',
        en: 'Regional Hospital of Irecê',
        es: 'Hospital Regional de Irecê',
      },
      numeros: ['(74) 3688-7700'],
    },
    {
      nome: {
        pt: 'CIPPA — Polícia Ambiental, Lençóis',
        en: 'CIPPA — Lençóis Environmental Police',
        es: 'CIPPA — Policía Ambiental, Lençóis',
      },
      numeros: ['(75) 3334-1493'],
    },
  ],
  atrativos: [
    { nome: { pt: 'Cachoeira da Fumaça — Vale do Capão' }, numeros: ['(75) 3344-1087'] },
    { nome: { pt: 'Cachoeira do Mosquito — Lençóis' }, numeros: ['(75) 3334-1231', '(75) 99905-5651'] },
    { nome: { pt: 'Cachoeira do Riachinho — Vale do Capão' }, numeros: ['(75) 3344-1087'] },
    { nome: { pt: 'Gruta da Fumaça — Iraquara' }, numeros: ['(75) 3334-1397'] },
    { nome: { pt: 'Gruta da Torrinha — Iraquara' }, numeros: ['(75) 99814-5806'] },
    { nome: { pt: 'Gruta Lapa Doce — Iraquara' }, numeros: ['(71) 99612-1377', '(75) 99822-3228'] },
    { nome: { pt: 'Marimbus Remanso — Lençóis' }, numeros: ['(75) 3334-1302'] },
    { nome: { pt: 'Marimbus — Andaraí' }, numeros: ['(75) 3335-2210', '(75) 98136-7471'] },
    { nome: { pt: 'Morro do Pai Inácio — Palmeiras' }, numeros: ['(75) 99125-5163'] },
    {
      nome: {
        pt: 'Parque Natural Municipal do Espalhado — Ibicoara',
        en: 'Espalhado Municipal Natural Park — Ibicoara',
        es: 'Parque Natural Municipal do Espalhado — Ibicoara',
      },
      numeros: ['(77) 3413-2374'],
    },
    {
      nome: {
        pt: 'Parque Sempre-Viva — Mucugê',
        en: 'Sempre-Viva Park — Mucugê',
        es: 'Parque Sempre-Viva — Mucugê',
      },
      numeros: ['(75) 3338-2143'],
    },
    { nome: { pt: 'Poço Azul — Nova Redenção' }, numeros: ['(75) 99274-3369'] },
    { nome: { pt: 'Poço Encantado — Itaetê' }, numeros: ['(75) 3361-4043', '(75) 99202-2973'] },
    { nome: { pt: 'Pratinha — Iraquara' }, numeros: ['(75) 99814-5806'] },
  ],
  instituicoes: [
    {
      nome: {
        pt: 'Abeta — Ecoturismo e Turismo de Aventura',
        en: 'Abeta — Ecotourism and Adventure Travel',
        es: 'Abeta — Ecoturismo y Turismo de Aventura',
      },
      numeros: ['(11) 2371-5336'],
    },
    { nome: { pt: 'Bahiatursa' }, numeros: ['(71) 3116-6814'] },
    { nome: { pt: 'Casa Afrânio Peixoto — Lençóis' }, numeros: ['(75) 3334-1728'] },
    {
      nome: {
        pt: 'Disque Bahia Turismo',
        en: 'Bahia Tourism hotline',
        es: 'Línea de Turismo de Bahía',
      },
      numeros: ['(71) 3103-3103'],
    },
    { nome: { pt: 'Ibama' }, numeros: ['0800 61 8080'] },
    { nome: { pt: 'Inema' }, numeros: ['0800 071 1400'] },
    {
      nome: {
        pt: 'Iphan — Escritório Lençóis',
        en: 'Iphan — Lençóis office',
        es: 'Iphan — Oficina Lençóis',
      },
      numeros: ['(75) 3334-1123'],
    },
  ],
};

export const nomeDoContato = (contato: Contato, locale: Locale) =>
  contato.nome[locale] ?? contato.nome.pt;

export const GRUPOS_ORDEM: GrupoId[] = ['brigadas', 'emergencia', 'atrativos', 'instituicoes'];

/* ------------------------------------------------------------------ */
/* Texto por idioma                                                   */
/* ------------------------------------------------------------------ */

export type Titulo = { antes: string; destaque: string };
export type Bloco = { titulo: string; texto: string; destaque?: boolean };
export type Assunto = { titulo: string; paragrafos: string[] };
export type Lista = { titulo: string; nota?: string; itens: string[] };

export type DicasContent = {
  meta: { title: string; description: string; canonical: string; ogDescription: string };
  chegada: { titulo: Titulo; lead: string; opcoes: Bloco[] };
  estadia: { titulo: Titulo; assuntos: Assunto[]; listas: Lista[] };
  telefones: { titulo: Titulo; lead: string; grupos: Record<GrupoId, string> };
  cta: { titulo: Titulo; texto: string; whatsapp: string; contato: string; contatoHref: string };
};

export const DICAS_CONTENT: Record<Locale, DicasContent> = {
  pt: {
    meta: {
      title: 'Dicas',
      description:
        'Como chegar à Chapada Diamantina, onde se hospedar em Lençóis, alimentação, bancos e telefones úteis — o que saber antes de subir a serra.',
      ogDescription: 'Como chegar, onde ficar, onde comer e os telefones úteis da Chapada Diamantina.',
      canonical: '/pt/dicas',
    },
    chegada: {
      titulo: { antes: 'Como chegar na', destaque: 'Chapada Diamantina?' },
      lead: 'Lençóis é a porta de entrada. São quatro caminhos, e o melhor depende de quanto tempo você tem.',
      opcoes: [
        {
          titulo: 'De avião',
          texto:
            'A maneira mais rápida de chegar a Lençóis é pela Azul (Confins × Lençóis); de tempos em tempos a Voepass anuncia voos entre Salvador e Lençóis. Também dá para desembarcar em Vitória da Conquista e seguir de transfer até Lençóis ou Mucugê.',
        },
        {
          titulo: 'De ônibus',
          texto:
            'Salvador × Lençóis pela Rápido Federal (Guanabara). As poltronas são em boa parte confortáveis e há serviço de leito. São cerca de 6 horas de viagem.',
        },
        {
          titulo: 'De carro',
          texto:
            'A BR-242 é a principal via de acesso à Chapada Diamantina. As cidades que circundam a região são Feira de Santana, Vitória da Conquista, Irecê e Barreiras.',
        },
        {
          titulo: 'Transfer com a Mamut',
          texto:
            'A maneira mais rápida e direta: um transfer privado com a gente, com flexibilidade, conforto e segurança durante a viagem para o interior da Bahia.',
          destaque: true,
        },
      ],
    },
    estadia: {
      titulo: { antes: 'Onde dormir e', destaque: 'onde comer.' },
      assuntos: [
        {
          titulo: 'Onde se hospedar em Lençóis',
          paragrafos: [
            'Lençóis tem infraestrutura para os mais variados públicos: pousadas, hotéis, casas de charme, casas de temporada, hostels e campings.',
            'Vale lembrar que muitos atrativos da Chapada ficam longe de Lençóis, o que faz pernoitar em cidades diferentes. Conhecer outras vilas — Vale do Capão, Igatu e Mucugê — costuma render.',
          ],
        },
        {
          titulo: 'Alimentação',
          paragrafos: [
            'As vilas de Lençóis e do Vale do Capão reúnem a maior variedade e qualidade nesse quesito: casas de massas, restaurantes orientais, árabes e mediterrâneos, cafeterias, docerias e opções veganas.',
            'Há ainda cozinhas experimentais e menus de degustação de alto padrão gastronômico.',
          ],
        },
      ],
      listas: [
        {
          titulo: 'Bancos',
          nota: 'Ande sempre com dinheiro em espécie — é comum faltar cédula nos caixas eletrônicos, principalmente na alta temporada.',
          itens: [
            'Banco do Brasil — Lençóis e Seabra',
            'Bradesco — Lençóis, Palmeiras e Seabra',
            'Caixa — Seabra',
          ],
        },
        { titulo: 'Lavanderia', itens: ['Banho de Cheiro — Lençóis', 'Capricho — Lençóis'] },
      ],
    },
    telefones: {
      titulo: { antes: 'Telefones que valem', destaque: 'estar no bolso.' },
      lead: 'Sinal de celular é escasso na serra. Salve o que for útil antes de sair de Lençóis.',
      grupos: {
        brigadas: 'Brigadas voluntárias de combate a incêndios florestais',
        emergencia: 'Hospitais e emergências',
        atrativos: 'Atrativos naturais e áreas de proteção',
        instituicoes: 'Instituições e órgãos públicos',
      },
    },
    cta: {
      titulo: { antes: 'Ainda tem', destaque: 'dúvidas?' },
      texto: 'Fale com a gente — respondemos com o roteiro certo para o seu grupo.',
      whatsapp: 'Falar no WhatsApp',
      contato: 'Página de contato',
      contatoHref: '/pt/contato',
    },
  },

  en: {
    meta: {
      title: 'Tips',
      description:
        'How to get to Chapada Diamantina, where to stay in Lençóis, food, banks and useful phone numbers — what to know before heading up the range.',
      ogDescription: 'How to get there, where to stay, where to eat and the useful numbers for Chapada Diamantina.',
      canonical: '/en/tips',
    },
    chegada: {
      titulo: { antes: 'How to get to', destaque: 'Chapada Diamantina?' },
      lead: 'Lençóis is the gateway. There are four ways in, and the best one depends on how much time you have.',
      opcoes: [
        {
          titulo: 'By plane',
          texto:
            'The fastest way to reach Lençóis is by plane with Azul (Confins × Lençóis); every so often Voepass announces flights between Salvador and Lençóis. You can also land at Vitória da Conquista airport and take a transfer to Lençóis or Mucugê.',
        },
        {
          titulo: 'By bus',
          texto:
            'Salvador × Lençóis with Rápido Federal (Guanabara). The seats are mostly comfortable and there is a sleeper service. It is about a 6-hour journey.',
        },
        {
          titulo: 'By car',
          texto:
            'The BR-242 is the main access route to Chapada Diamantina. The larger cities surrounding the region are Feira de Santana, Vitória da Conquista, Irecê and Barreiras.',
        },
        {
          titulo: 'Transfer with Mamut',
          texto:
            'The fastest and most direct way: a private transfer with us, offering flexibility, comfort and safety throughout your trip into the interior of Bahia.',
          destaque: true,
        },
      ],
    },
    estadia: {
      titulo: { antes: 'Where to sleep and', destaque: 'where to eat.' },
      assuntos: [
        {
          titulo: 'Where to stay in Lençóis',
          paragrafos: [
            'Lençóis has infrastructure for every kind of visitor: guesthouses, hotels, charming houses, vacation homes, hostels and campsites.',
            'Keep in mind that many attractions in Chapada Diamantina are far from Lençóis, which often means spending nights in different towns. Exploring other villages — Vale do Capão, Igatu and Mucugê — usually pays off.',
          ],
        },
        {
          titulo: 'Gastronomy',
          paragrafos: [
            'The villages of Lençóis and Vale do Capão offer the greatest variety and quality here: pasta houses, oriental, Arabian and Mediterranean restaurants, cafés, pastry shops and vegan options.',
            'There are also experimental kitchens and high-standard tasting menus.',
          ],
        },
      ],
      listas: [
        {
          titulo: 'Banks',
          nota: 'Always carry cash — ATMs commonly run out of money, especially during peak season.',
          itens: [
            'Banco do Brasil — Lençóis and Seabra',
            'Bradesco — Lençóis, Palmeiras and Seabra',
            'Caixa — Seabra',
          ],
        },
        { titulo: 'Laundry', itens: ['Banho de Cheiro — Lençóis', 'Capricho — Lençóis'] },
      ],
    },
    telefones: {
      titulo: { antes: 'Numbers worth keeping', destaque: 'in your pocket.' },
      lead: 'Phone signal is scarce up in the range. Save whatever is useful before leaving Lençóis.',
      grupos: {
        brigadas: 'Volunteer forest fire brigades',
        emergencia: 'Hospitals and emergency numbers',
        atrativos: 'Natural attractions and protected areas',
        instituicoes: 'Institutions and public bodies',
      },
    },
    cta: {
      titulo: { antes: 'Still have', destaque: 'questions?' },
      texto: 'Get in touch — we answer with the right itinerary for your group.',
      whatsapp: 'Talk on WhatsApp',
      contato: 'Contact page',
      contatoHref: '/pt/contato',
    },
  },

  es: {
    meta: {
      title: 'Consejos',
      description:
        'Cómo llegar a la Chapada Diamantina, dónde alojarse en Lençóis, comida, bancos y teléfonos útiles — lo que hay que saber antes de subir a la sierra.',
      ogDescription: 'Cómo llegar, dónde quedarse, dónde comer y los teléfonos útiles de la Chapada Diamantina.',
      canonical: '/es/consejos',
    },
    chegada: {
      titulo: { antes: '¿Cómo llegar a la', destaque: 'Chapada Diamantina?' },
      lead: 'Lençóis es la puerta de entrada. Hay cuatro caminos, y el mejor depende del tiempo que tengas.',
      opcoes: [
        {
          titulo: 'En avión',
          texto:
            'La manera más rápida de llegar a Lençóis es con Azul (Confins × Lençóis); de tanto en tanto Voepass anuncia vuelos entre Salvador y Lençóis. También se puede aterrizar en Vitória da Conquista y seguir en transfer hasta Lençóis o Mucugê.',
        },
        {
          titulo: 'En ómnibus',
          texto:
            'Salvador × Lençóis con Rápido Federal (Guanabara). Los asientos son en su mayoría cómodos y hay servicio cama. Son unas 6 horas de viaje.',
        },
        {
          titulo: 'En auto',
          texto:
            'La BR-242 es la principal vía de acceso a la Chapada Diamantina. Las ciudades que rodean la región son Feira de Santana, Vitória da Conquista, Irecê y Barreiras.',
        },
        {
          titulo: 'Transfer con Mamut',
          texto:
            'La manera más rápida y directa: un transfer privado con nosotros, con flexibilidad, comodidad y seguridad durante el viaje al interior de Bahía.',
          destaque: true,
        },
      ],
    },
    estadia: {
      titulo: { antes: 'Dónde dormir y', destaque: 'dónde comer.' },
      assuntos: [
        {
          titulo: 'Dónde alojarse en Lençóis',
          paragrafos: [
            'Lençóis tiene infraestructura para los más variados públicos: posadas, hoteles, casas de encanto, casas de temporada, hostels y camping.',
            'Vale recordar que muchos atractivos de la Chapada quedan lejos de Lençóis, lo que lleva a pernoctar en ciudades distintas. Conocer otras villas — Vale do Capão, Igatu y Mucugê — suele valer la pena.',
          ],
        },
        {
          titulo: 'Gastronomía',
          paragrafos: [
            'Las villas de Lençóis y del Vale do Capão reúnen la mayor variedad y calidad en este rubro: casas de pastas, restaurantes orientales, árabes y mediterráneos, cafeterías, pastelerías y opciones veganas.',
            'Hay además cocinas experimentales y menús de degustación de alto nivel gastronómico.',
          ],
        },
      ],
      listas: [
        {
          titulo: 'Bancos',
          nota: 'Anda siempre con dinero en efectivo — es común que falte plata en los cajeros, sobre todo en temporada alta.',
          itens: [
            'Banco do Brasil — Lençóis y Seabra',
            'Bradesco — Lençóis, Palmeiras y Seabra',
            'Caixa — Seabra',
          ],
        },
        { titulo: 'Lavandería', itens: ['Banho de Cheiro — Lençóis', 'Capricho — Lençóis'] },
      ],
    },
    telefones: {
      titulo: { antes: 'Teléfonos que conviene', destaque: 'tener a mano.' },
      lead: 'La señal de celular es escasa en la sierra. Guardá lo que sirva antes de salir de Lençóis.',
      grupos: {
        brigadas: 'Brigadas voluntarias contra incendios forestales',
        emergencia: 'Hospitales y emergencias',
        atrativos: 'Atractivos naturales y áreas protegidas',
        instituicoes: 'Instituciones y organismos públicos',
      },
    },
    cta: {
      titulo: { antes: '¿Todavía tenés', destaque: 'dudas?' },
      texto: 'Hablá con nosotros — respondemos con el recorrido justo para tu grupo.',
      whatsapp: 'Hablar por WhatsApp',
      contato: 'Página de contacto',
      contatoHref: '/pt/contato',
    },
  },
};
