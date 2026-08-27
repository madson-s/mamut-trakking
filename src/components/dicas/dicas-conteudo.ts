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

export type Nivel = { nome: string; texto: string };
export type Pergunta = { pergunta: string; resposta: string };
export type Figura = { src: string; alt: string; legenda: string; width: number; height: number };
export type Referencia = { texto: string; href?: string };
export type BlocoTexto = {
  titulo: string;
  paragrafos: string[];
  itens?: { titulo: string; texto: string }[];
  figuras?: Figura[];
};

/** Rótulos e conteúdo das quatro páginas da seção. */
export type DicasSecao = {
  /** Rótulo no menu lateral e no select do mobile. */
  nav: string;
  meta: { title: string; description: string };
  titulo: { antes: string; destaque: string };
  lead?: string;
};

export type DicasContent = {
  meta: { title: string; description: string; canonical: string; ogDescription: string };
  chegada: { titulo: Titulo; lead: string; opcoes: Bloco[] };
  estadia: { titulo: Titulo; assuntos: Assunto[]; listas: Lista[] };
  telefones: { titulo: Titulo; lead: string; grupos: Record<GrupoId, string> };
  cta: { titulo: Titulo; texto: string; whatsapp: string; contato: string; contatoHref: string };

  /** Chrome da seção: título do menu e rótulo do select do mobile. */
  secao: { titulo: string; selectLabel: string };
  paginas: {
    'como-chegar': DicasSecao;
    /** Bancos e lavanderias continuam em `estadia.listas` — esta página os reusa. */
    'informacoes-gerais': DicasSecao & { perguntas: Pergunta[] };
    'classificacao-de-nivel': DicasSecao & {
      aviso: string;
      esforco: { titulo: string; niveis: Nivel[] };
      tecnico: { titulo: string; niveis: Nivel[] };
    };
    geologia: DicasSecao & {
      blocos: BlocoTexto[];
      referenciasTitulo: string;
      referencias: Referencia[];
      complementaresTitulo: string;
      complementares: Referencia[];
    };
  };
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
    secao: { titulo: 'Dicas', selectLabel: 'Escolha o assunto' },
    paginas: {
      'como-chegar': {
        nav: 'Como chegar',
        meta: {
          title: 'Como chegar na Chapada Diamantina',
          description:
            'Avião, ônibus, carro ou transfer privado — os quatro caminhos até Lençóis, mais onde se hospedar e onde comer na Chapada Diamantina.',
        },
        titulo: { antes: 'Como chegar na', destaque: 'Chapada Diamantina?' },
        lead: 'Lençóis é a porta de entrada. São quatro caminhos, e o melhor depende de quanto tempo você tem.',
      },
      'informacoes-gerais': {
        nav: 'Informações gerais',
        meta: {
          title: 'Informações gerais',
          description:
            'Segurança em Lençóis, quantos dias reservar, melhor época do ano, bancos, lavanderias e os telefones úteis da Chapada Diamantina.',
        },
        titulo: { antes: 'O que perguntam', destaque: 'antes de vir.' },
        lead: 'As dúvidas que mais chegam ao nosso atendimento — e os serviços que valem anotar antes de subir a serra.',
        perguntas: [
          { pergunta: 'Lençóis é uma cidade segura?', resposta: 'Sim, e especialmente para turistas. Quem chega encontra um povo hospitaleiro e solícito. A cidade tem batalhão de polícia militar independente, companhia independente da polícia ambiental, guarda municipal e delegacia de polícia civil, com índices baixos de roubo e furto.' },
          { pergunta: 'Quantos dias preciso para a Chapada Diamantina?', resposta: 'O ideal são pelo menos 7 dias. Em 3 dá para conhecer os atrativos mais próximos de Lençóis. Lembre que a Chapada reúne cerca de 24 cidades, com atrativos distribuídos entre elas — escolha bem onde visitar e onde se hospedar.' },
          { pergunta: 'Quantos dias preciso para o Vale do Pati?', resposta: 'O Vale é grande o bastante para passar de 8 dias de caminhada, se quiser conhecê-lo inteiro. Os roteiros mais procurados são o de 3 dias e a travessia de 5. É um trekking versátil, acessível por vilas e cidades diferentes.' },
          { pergunta: 'Como se preparar para o Vale do Pati?', resposta: 'No condicionamento: praticar atividade física pelo menos 3 vezes por semana, com foco em aeróbico e cardiovascular. No equipamento: calçado fechado, mochila de 40L ou mais, chapéu ou boné, camisetas UV50+ de manga longa, roupa de banho, chinelo e roupa para dormir.' },
          { pergunta: 'Qual a melhor época para conhecer a Chapada?', resposta: 'Depende do que você procura. Para ver as quedas d’água no volume máximo, venha no verão ou no outono — as trilhas ficam bem mais difíceis e técnicas, e o guia local passa a ser imprescindível. Para caminhar sem desafio extra, entre o inverno e a primavera.' },
          { pergunta: 'Quais os lugares mais bonitos da Chapada?', resposta: 'É opinião muito particular. A nossa: Cachoeira do Mixila, Cachoeira da Fumaça por Baixo, Cachoeira da Fumacinha e Vale do Pati.' },
        ],
      },
      'classificacao-de-nivel': {
        nav: 'Classificação de nível',
        meta: {
          title: 'Classificação de nível',
          description:
            'Como a Mamut classifica o esforço e a dificuldade técnica de cada roteiro na Chapada Diamantina — de leve a pesado, de fácil a difícil.',
        },
        titulo: { antes: 'Até onde', destaque: 'você vai.' },
        lead: 'Cada roteiro carrega dois níveis: um de esforço, um técnico. Estes são os critérios.',
        aviso: 'A classificação é relativa: cada pessoa tem seu contexto e suas limitações. Ela varia conforme o seu preparo físico atual e a sua experiência prévia em atividades ao ar livre. Nossas atividades não são recomendadas para pessoas sedentárias.',
        esforco: {
          titulo: 'Nível de esforço',
          niveis: [
            { nome: 'Leve', texto: 'Capacidade para caminhar até 3 horas com uma mochila leve em terreno irregular. É preciso boa forma física geral.' },
            { nome: 'Leve / Moderado', texto: 'Capacidade para caminhar de 3 a 5 horas, com mochila de ataque ou cargueira, em terreno irregular.' },
            { nome: 'Moderado', texto: 'Capacidade para caminhar de 5 a 7 horas, com mochila de ataque ou cargueira, em terreno irregular.' },
            { nome: 'Moderado / Pesado', texto: 'Capacidade para caminhar de 7 a 9 horas, com mochila de ataque ou cargueira, em terreno irregular.' },
            { nome: 'Pesado', texto: 'Capacidade para caminhar de 7 a 9 horas, ou mais, com mochila cargueira em terreno irregular.' },
          ],
        },
        tecnico: {
          titulo: 'Nível técnico',
          niveis: [
            { nome: 'Fácil', texto: 'Nenhuma exposição. Pode haver trechos de terreno escorregadio — acidentado e/ou com barro.' },
            { nome: 'Fácil / Moderado', texto: 'Poucas subidas e descidas fáceis, ou nenhuma, com trechos de terreno escorregadio.' },
            { nome: 'Moderado', texto: 'Subidas e descidas pouco expostas, trechos de terreno escorregadio e rampas de pedra.' },
            { nome: 'Moderado / Difícil', texto: 'Algumas escalaminhadas expostas. É necessário o uso de equipamento de segurança.' },
            { nome: 'Difícil', texto: 'Escalaminhadas expostas. É necessário o uso de equipamento de segurança, e é desejável conhecimento de técnicas verticais.' },
          ],
        },
      },
      geologia: {
        nav: 'Geologia da Chapada',
        meta: {
          title: 'Geologia da Chapada Diamantina',
          description:
            'O Supergrupo Espinhaço, a bacia de 1,7 bilhão de anos e o soerguimento que desenhou a Chapada Diamantina — e onde ver cada formação.',
        },
        titulo: { antes: '4,5 bilhões de anos', destaque: 'sob os seus pés.' },
        lead: 'A Chapada é um dos melhores lugares do mundo para ler a evolução do planeta na própria paisagem.',
        blocos: [
          {
            titulo: 'O que é a Chapada Diamantina?',
            paragrafos: [
              'O Parque Nacional da Chapada Diamantina fica na região central da Bahia, entre quatro cidades: Andaraí, Lençóis, Mucugê e Palmeiras. Sua região identitária, porém, engloba cerca de 24 cidades em torno do Parque — podem ser mais, a depender dos aspectos geográficos considerados.',
              'Num mapa da Bahia vê-se uma espécie de espinha, como uma coluna, de norte a sul. Afastando a vista, essa espinha se estende até a região central de Minas Gerais, com uma pequena falha na divisa entre os estados. Essa formação é o Supergrupo Espinhaço, a nossa mini cordilheira brasileira — mais de 1.000 km de extensão.',
              'É o resultado de 4,5 bilhões de anos de mudanças na forma e no relevo da Terra. Aqui está um dos melhores lugares para observar essa evolução, pela idade das formações e pelos fósseis, pinturas rupestres e toda a história que afetou a paisagem. Hoje a região é feita de serras, conglomerados de rochas sedimentares e cavernas.',
            ],
            figuras: [
              { src: '/img/dicas/espinhaco-porcao-norte.png', alt: 'Mapa da porção norte do Supergrupo Espinhaço', legenda: 'Porção norte do Supergrupo Espinhaço: Cordilheira do Sincorá, bacias do Rio Paraguaçu, Rio de Contas e Rio Una.', width: 855, height: 531 },
              { src: '/img/dicas/supergrupo-espinhaco.png', alt: 'Extensão do Supergrupo Espinhaço no mapa do Brasil', legenda: 'Supergrupo Espinhaço, considerada a única cordilheira do Brasil.', width: 597, height: 530 },
            ],
          },
          {
            titulo: 'Como se formou a Chapada Diamantina?',
            paragrafos: [
              'Há cerca de 1,7 bilhão de anos, a região do Supergrupo Espinhaço era uma imensa bacia de aproximadamente 60.000 km² — uma depressão parecida com uma tigela, no centro do supercontinente Columbia. Muitos rios convergiam ali, e por vezes o próprio oceano adentrava. Sedimentos foram depositados nessa depressão por cerca de 700 milhões de anos. Só no fim desse processo a vida multicelular começou a se proliferar, com a abundância de oxigênio na atmosfera.',
              'O biólogo Roy Funch, em Um Guia Para a Chapada Diamantina, descreve o movimento como a montagem de um bolo de várias camadas que preenche a bacia inteira. Durante esse tempo o supercontinente se separa e volta a se juntar mais duas vezes, o que deixa o bolo disforme e quebrado.',
              'Entre os choques de placas e continentes, o soerguimento foi o acidente geológico mais determinante para a paisagem. Imagine dois continentes se chocando: durante o impacto — que pode durar milhões de anos — uma porção de terra desce e outra é elevada. Foi o que aconteceu quando a Índia se incorporou à Ásia, criando o Himalaia; no nosso caso, quando a América se juntou ao continente africano.',
              'Depois disso a erosão fez o seu trabalho de abrir vales, cavernas e grunas, redesenhando a paisagem até hoje. A água penetra lentamente entre as rochas e extrai pequenos sedimentos, que seguirão para rios e oceanos e formarão as montanhas do futuro, daqui a milhões de anos, quando os continentes se chocarem de novo.',
            ],
            itens: [
              { titulo: 'Rochas calcárias e salitres', texto: 'Principalmente entre Irecê e Iraquara, e também ao sul, perto de Andaraí e Nova Redenção, nos arredores do Rio Una — afluente do Paraguaçu. Potencialmente o último grupo a se formar. Chamam atenção pela quantidade de cavernas e grutas, e há relatos de fósseis no interior do Poço Azul.' },
              { titulo: 'Conglomerados de arenito', texto: 'As formações mais antigas da Chapada. Rochas sedimentares de diversos tipos e origens que, após o soerguimento, formaram planaltos, vales e serras. Encontradas em todo o Parque Nacional e arredores — são as mais comuns.' },
            ],
          },
          {
            titulo: 'Onde ver as principais formações?',
            paragrafos: [
              'Nossa principal sugestão é o Parque da Muritiba. Além dos grandes conglomerados maciços de arenito nas Piscinas Naturais do Serrano, dá para perceber o intemperismo nas rochas do Salão de Areias Coloridas, que se esfarelam ao toque, e as raríssimas rochas ígneas do Poço Halley, resultado de atividade vulcânica na área.',
              'No caminho para a Cachoeira do Sossego há dobras geológicas que mostram a força do impacto que soergueu a Chapada, além da infinidade de camadas sedimentares que formam uma paisagem rústica e singular. Vale conhecer também a grandiosidade do Vale do Pati, no coração do Parque Nacional.',
            ],
          },
        ],
        referenciasTitulo: 'Referências',
        referencias: [
          { texto: 'Roy Funch — Um Guia Para a Chapada Diamantina' },
          { texto: 'Info Escola — Chapada Diamantina', href: 'https://www.infoescola.com/geografia/chapada-diamantina/' },
        ],
        complementaresTitulo: 'Informações complementares',
        complementares: [
          { texto: 'Augusto José de C. L. Pedreira da Silva — O Supergrupo Espinhaço na Chapada Diamantina centro-oriental, Bahia: sedimentologia, estratigrafia e tectônica', href: 'https://rigeo.cprm.gov.br/jspui/bitstream/doc/147/1/tese_augusto_pedreira.pdf' },
        ],
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
    secao: { titulo: 'Tips', selectLabel: 'Choose a topic' },
    paginas: {
      'como-chegar': {
        nav: 'How to get there',
        meta: {
          title: 'How to get to the Chapada Diamantina',
          description:
            'Plane, bus, car or private transfer — the four ways into Lençóis, plus where to stay and where to eat in the Chapada Diamantina.',
        },
        titulo: { antes: 'How to get to the', destaque: 'Chapada Diamantina?' },
        lead: 'Lençóis is the gateway. There are four ways in, and the best one depends on how much time you have.',
      },
      'informacoes-gerais': {
        nav: 'General information',
        meta: {
          title: 'General information',
          description:
            'Safety in Lençóis, how many days to set aside, the best time of year, banks, laundries and the useful phone numbers of the Chapada Diamantina.',
        },
        titulo: { antes: 'What people ask', destaque: 'before coming.' },
        lead: 'The questions our team hears most — and the services worth noting before heading up the range.',
        perguntas: [
          { pergunta: 'Is Lençóis a safe town?', resposta: 'Yes, and especially so for visitors. Whoever arrives finds welcoming, helpful people. The town has an independent military police battalion, an independent environmental police company, a municipal guard and a civil police station, with low rates of theft and robbery.' },
          { pergunta: 'How many days do I need for the Chapada Diamantina?', resposta: 'Ideally at least 7 days. In 3 you can see the attractions closest to Lençóis. Remember the Chapada gathers around 24 towns with attractions spread among them — choose carefully where to visit and where to stay.' },
          { pergunta: 'How many days do I need for the Pati Valley?', resposta: 'The valley is large enough to take more than 8 days of walking if you want to see all of it. The most sought-after itineraries are the 3-day one and the 5-day traverse. It is a versatile trek, reachable through different villages and towns.' },
          { pergunta: 'How do I get ready for the Pati Valley?', resposta: 'On fitness: exercise at least 3 times a week, focusing on aerobic and cardiovascular work. On gear: closed shoes, a backpack of 40 L or more, a cap or hat, long-sleeved UV50+ shirts, swimwear, flip-flops and something to sleep in.' },
          { pergunta: 'When is the best time to visit the Chapada?', resposta: 'It depends on what you are after. To see the waterfalls at maximum volume, come in summer or autumn — the trails become considerably harder and more technical, and a local guide becomes essential. To walk without the extra challenge, come between winter and spring.' },
          { pergunta: 'Which are the most beautiful places in the Chapada?', resposta: 'A very personal opinion. Ours: Mixila Waterfall, Fumaça Waterfall from Below, Fumacinha Waterfall and the Pati Valley.' },
        ],
      },
      'classificacao-de-nivel': {
        nav: 'Level classification',
        meta: {
          title: 'Level classification',
          description:
            'How Mamut grades the effort and the technical difficulty of each itinerary in the Chapada Diamantina — from light to heavy, from easy to hard.',
        },
        titulo: { antes: 'How far', destaque: 'you go.' },
        lead: 'Every itinerary carries two grades: one for effort, one technical. These are the criteria.',
        aviso: 'The classification is relative: everyone has their own context and limits. It varies with your current fitness and your previous experience in outdoor activities. Our activities are not recommended for sedentary people.',
        esforco: {
          titulo: 'Effort level',
          niveis: [
            { nome: 'Light', texto: 'Able to walk up to 3 hours with a light backpack over uneven terrain. General good fitness is required.' },
            { nome: 'Light / Moderate', texto: 'Able to walk 3 to 5 hours, with a day pack or a full pack, over uneven terrain.' },
            { nome: 'Moderate', texto: 'Able to walk 5 to 7 hours, with a day pack or a full pack, over uneven terrain.' },
            { nome: 'Moderate / Heavy', texto: 'Able to walk 7 to 9 hours, with a day pack or a full pack, over uneven terrain.' },
            { nome: 'Heavy', texto: 'Able to walk 7 to 9 hours, or more, with a full pack over uneven terrain.' },
          ],
        },
        tecnico: {
          titulo: 'Technical level',
          niveis: [
            { nome: 'Easy', texto: 'No exposure. There may be stretches of slippery terrain — rough and/or muddy.' },
            { nome: 'Easy / Moderate', texto: 'Few easy ascents and descents, or none, with stretches of slippery terrain.' },
            { nome: 'Moderate', texto: 'Slightly exposed ascents and descents, stretches of slippery terrain and rock ramps.' },
            { nome: 'Moderate / Hard', texto: 'Some exposed scrambling. Safety equipment is required.' },
            { nome: 'Hard', texto: 'Exposed scrambling. Safety equipment is required, and knowledge of vertical techniques is desirable.' },
          ],
        },
      },
      geologia: {
        nav: 'Geology of the Chapada',
        meta: {
          title: 'Geology of the Chapada Diamantina',
          description:
            'The Espinhaço Supergroup, the 1.7-billion-year-old basin and the uplift that shaped the Chapada Diamantina — and where to see each formation.',
        },
        titulo: { antes: '4.5 billion years', destaque: 'under your feet.' },
        lead: 'The Chapada is one of the best places in the world to read the evolution of the planet in the landscape itself.',
        blocos: [
          {
            titulo: 'What is the Chapada Diamantina?',
            paragrafos: [
              'The Chapada Diamantina National Park is in the central region of Bahia, between four towns: Andaraí, Lençóis, Mucugê and Palmeiras. Its wider identity region, though, takes in around 24 towns around the Park — possibly more, depending on which geographic aspects you consider.',
              'On a map of Bahia you see a kind of ridge, like a column, running north to south. Zoom out and that ridge extends to the central region of Minas Gerais, with a small gap at the border between the states. That formation is the Espinhaço Supergroup, our Brazilian mini mountain range — over 1,000 km long.',
              'It is the result of 4.5 billion years of change in the shape and relief of the Earth. This is one of the best places to observe that evolution, because of the age of the formations and because of the fossils, rock paintings and the whole history that shaped the landscape. Today the region is made of mountains, conglomerates of sedimentary rock and caves.',
            ],
            figuras: [
              { src: '/img/dicas/espinhaco-porcao-norte.png', alt: 'Map of the northern portion of the Espinhaço Supergroup', legenda: 'Northern portion of the Espinhaço Supergroup: the Sincorá Range and the Paraguaçu, Contas and Una river basins.', width: 855, height: 531 },
              { src: '/img/dicas/supergrupo-espinhaco.png', alt: 'The extent of the Espinhaço Supergroup on a map of Brazil', legenda: 'The Espinhaço Supergroup, considered the only mountain range in Brazil.', width: 597, height: 530 },
            ],
          },
          {
            titulo: 'How was the Chapada Diamantina formed?',
            paragrafos: [
              'About 1.7 billion years ago the region of the Espinhaço Supergroup was a vast basin of roughly 60,000 km² — a large depression resembling a bowl, at the centre of the supercontinent Columbia. Many rivers converged there, and at times the ocean itself came in. Sediments were deposited in that depression over an estimated 700 million years. Only at the end of that process did multicellular life begin to proliferate massively, with the abundance of oxygen in the atmosphere.',
              'The biologist Roy Funch, in A Guide to the Chapada Diamantina, describes the movement as assembling a layered cake that fills the entire basin. During that time the supercontinent breaks apart and comes back together twice more, which leaves the cake misshapen and broken.',
              'Among the collisions of plates and continents, uplift was the geological event that most defined the landscape. Picture two continents colliding: during the impact — which can last millions of years — one portion of land drops and another is raised. It is what happened when India joined Asia, creating the Himalayas; in our case, when America joined the African continent.',
              'After that, erosion did its work of opening valleys, caves and gorges, redrawing the landscape into what we know today. Water slowly penetrates between the rocks and extracts small sediments, which will flow into rivers and oceans and form the mountains of the future, millions of years from now, when the continents collide again.',
            ],
            itens: [
              { titulo: 'Limestone and Salitre rocks', texto: 'Mainly between Irecê and Iraquara, and also to the south, near Andaraí and Nova Redenção, around the course of the Una River — a tributary of the Paraguaçu. Potentially the last group to form. They draw attention for the number of caves and grottos, and there are reports of fossils inside the Poço Azul.' },
              { titulo: 'Sandstone conglomerates', texto: 'The oldest formations in the Chapada. Sedimentary rocks of various types and origins which, after the uplift, formed plateaus, valleys and mountains. Found throughout the National Park and its surroundings — the most common of all.' },
            ],
          },
          {
            titulo: 'Where to see the main formations?',
            paragrafos: [
              'Our main suggestion is the Muritiba Park. Beyond the great massive sandstone conglomerates at the Serrano Natural Pools, you can see weathering in the rocks of the Salão de Areias Coloridas, which crumble at the touch, and the very rare igneous rocks of the Poço Halley, the result of volcanic activity in the area.',
              'On the way to the Sossego Waterfall there are geological folds that show the force of the impact that uplifted the Chapada, plus the endless sedimentary layers that make for a rugged, singular landscape. The grandeur of the Pati Valley, at the heart of the National Park, is also worth seeing.',
            ],
          },
        ],
        referenciasTitulo: 'References',
        referencias: [
          { texto: 'Roy Funch — Um Guia Para a Chapada Diamantina' },
          { texto: 'Info Escola — Chapada Diamantina', href: 'https://www.infoescola.com/geografia/chapada-diamantina/' },
        ],
        complementaresTitulo: 'Further reading',
        complementares: [
          { texto: 'Augusto José de C. L. Pedreira da Silva — O Supergrupo Espinhaço na Chapada Diamantina centro-oriental, Bahia: sedimentologia, estratigrafia e tectônica', href: 'https://rigeo.cprm.gov.br/jspui/bitstream/doc/147/1/tese_augusto_pedreira.pdf' },
        ],
      },
    },
    cta: {
      titulo: { antes: 'Still have', destaque: 'questions?' },
      texto: 'Get in touch — we answer with the right itinerary for your group.',
      whatsapp: 'Talk on WhatsApp',
      contato: 'Contact page',
      contatoHref: '/en/contact',
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
    secao: { titulo: 'Consejos', selectLabel: 'Elegí el tema' },
    paginas: {
      'como-chegar': {
        nav: 'Cómo llegar',
        meta: {
          title: 'Cómo llegar a la Chapada Diamantina',
          description:
            'Avión, ómnibus, auto o transfer privado — los cuatro caminos hasta Lençóis, y dónde alojarse y dónde comer en la Chapada Diamantina.',
        },
        titulo: { antes: '¿Cómo llegar a la', destaque: 'Chapada Diamantina?' },
        lead: 'Lençóis es la puerta de entrada. Hay cuatro caminos, y el mejor depende del tiempo que tengas.',
      },
      'informacoes-gerais': {
        nav: 'Información general',
        meta: {
          title: 'Información general',
          description:
            'Seguridad en Lençóis, cuántos días reservar, la mejor época del año, bancos, lavanderías y los teléfonos útiles de la Chapada Diamantina.',
        },
        titulo: { antes: 'Lo que preguntan', destaque: 'antes de venir.' },
        lead: 'Las dudas que más llegan a nuestra atención — y los servicios que conviene anotar antes de subir a la sierra.',
        perguntas: [
          { pergunta: '¿Lençóis es una ciudad segura?', resposta: 'Sí, y especialmente para turistas. Quien llega encuentra gente hospitalaria y solícita. La ciudad tiene batallón de policía militar independiente, compañía independiente de policía ambiental, guardia municipal y comisaría de policía civil, con índices bajos de robo y hurto.' },
          { pergunta: '¿Cuántos días necesito para la Chapada Diamantina?', resposta: 'Lo ideal son al menos 7 días. En 3 se pueden conocer los atractivos más cercanos a Lençóis. Recordá que la Chapada reúne unas 24 ciudades, con atractivos repartidos entre ellas — elegí bien dónde visitar y dónde alojarte.' },
          { pergunta: '¿Cuántos días necesito para el Valle del Pati?', resposta: 'El valle es lo bastante grande como para superar los 8 días de caminata si querés conocerlo entero. Los recorridos más buscados son el de 3 días y la travesía de 5. Es un trekking versátil, accesible desde distintas villas y ciudades.' },
          { pergunta: '¿Cómo prepararse para el Valle del Pati?', resposta: 'En cuanto a la condición física: practicar actividad al menos 3 veces por semana, sobre todo aeróbica y cardiovascular. En cuanto al equipo: calzado cerrado, mochila de 40 L o más, sombrero o gorra, remeras UV50+ de manga larga, ropa de baño, ojotas y ropa para dormir.' },
          { pergunta: '¿Cuál es la mejor época para conocer la Chapada?', resposta: 'Depende de lo que busques. Para ver las caídas de agua con el máximo volumen, vení en verano u otoño — los senderos se ponen bastante más difíciles y técnicos, y el guía local pasa a ser imprescindible. Para caminar sin desafío extra, entre el invierno y la primavera.' },
          { pergunta: '¿Cuáles son los lugares más lindos de la Chapada?', resposta: 'Es una opinión muy personal. La nuestra: Cascada del Mixila, Cascada da Fumaça por Abajo, Cascada da Fumacinha y el Valle del Pati.' },
        ],
      },
      'classificacao-de-nivel': {
        nav: 'Clasificación de nivel',
        meta: {
          title: 'Clasificación de nivel',
          description:
            'Cómo Mamut clasifica el esfuerzo y la dificultad técnica de cada recorrido en la Chapada Diamantina — de liviano a pesado, de fácil a difícil.',
        },
        titulo: { antes: 'Hasta dónde', destaque: 'vas a llegar.' },
        lead: 'Cada recorrido lleva dos niveles: uno de esfuerzo y uno técnico. Estos son los criterios.',
        aviso: 'La clasificación es relativa: cada persona tiene su contexto y sus límites. Varía según tu preparación física actual y tu experiencia previa en actividades al aire libre. Nuestras actividades no son recomendadas para personas sedentarias.',
        esforco: {
          titulo: 'Nivel de esfuerzo',
          niveis: [
            { nome: 'Liviano', texto: 'Capacidad para caminar hasta 3 horas con una mochila liviana en terreno irregular. Hace falta buena forma física general.' },
            { nome: 'Liviano / Moderado', texto: 'Capacidad para caminar de 3 a 5 horas, con mochila de ataque o carguera, en terreno irregular.' },
            { nome: 'Moderado', texto: 'Capacidad para caminar de 5 a 7 horas, con mochila de ataque o carguera, en terreno irregular.' },
            { nome: 'Moderado / Pesado', texto: 'Capacidad para caminar de 7 a 9 horas, con mochila de ataque o carguera, en terreno irregular.' },
            { nome: 'Pesado', texto: 'Capacidad para caminar de 7 a 9 horas, o más, con mochila carguera en terreno irregular.' },
          ],
        },
        tecnico: {
          titulo: 'Nivel técnico',
          niveis: [
            { nome: 'Fácil', texto: 'Ninguna exposición. Puede haber tramos de terreno resbaladizo — accidentado y/o con barro.' },
            { nome: 'Fácil / Moderado', texto: 'Pocas subidas y bajadas fáciles, o ninguna, con tramos de terreno resbaladizo.' },
            { nome: 'Moderado', texto: 'Subidas y bajadas poco expuestas, tramos de terreno resbaladizo y rampas de piedra.' },
            { nome: 'Moderado / Difícil', texto: 'Algunas trepadas expuestas. Es necesario el uso de equipo de seguridad.' },
            { nome: 'Difícil', texto: 'Trepadas expuestas. Es necesario el uso de equipo de seguridad, y es deseable conocer técnicas verticales.' },
          ],
        },
      },
      geologia: {
        nav: 'Geología de la Chapada',
        meta: {
          title: 'Geología de la Chapada Diamantina',
          description:
            'El Supergrupo Espinhaço, la cuenca de 1.700 millones de años y el levantamiento que dibujó la Chapada Diamantina — y dónde ver cada formación.',
        },
        titulo: { antes: '4.500 millones de años', destaque: 'bajo tus pies.' },
        lead: 'La Chapada es uno de los mejores lugares del mundo para leer la evolución del planeta en el propio paisaje.',
        blocos: [
          {
            titulo: '¿Qué es la Chapada Diamantina?',
            paragrafos: [
              'El Parque Nacional da Chapada Diamantina está en la región central de Bahía, entre cuatro ciudades: Andaraí, Lençóis, Mucugê y Palmeiras. Su región identitaria, sin embargo, abarca unas 24 ciudades alrededor del Parque — pueden ser más, según los aspectos geográficos que se consideren.',
              'En un mapa de Bahía se ve una especie de espina, como una columna, de norte a sur. Al alejar la vista, esa espina se extiende hasta la región central de Minas Gerais, con una pequeña falla en el límite entre los estados. Esa formación es el Supergrupo Espinhaço, nuestra mini cordillera brasileña — más de 1.000 km de extensión.',
              'Es el resultado de 4.500 millones de años de cambios en la forma y el relieve de la Tierra. Acá está uno de los mejores lugares para observar esa evolución, por la edad de las formaciones y por los fósiles, las pinturas rupestres y toda la historia que afectó el paisaje. Hoy la región está hecha de sierras, conglomerados de rocas sedimentarias y cavernas.',
            ],
            figuras: [
              { src: '/img/dicas/espinhaco-porcao-norte.png', alt: 'Mapa de la porción norte del Supergrupo Espinhaço', legenda: 'Porción norte del Supergrupo Espinhaço: Cordillera del Sincorá y las cuencas de los ríos Paraguaçu, Contas y Una.', width: 855, height: 531 },
              { src: '/img/dicas/supergrupo-espinhaco.png', alt: 'La extensión del Supergrupo Espinhaço en el mapa de Brasil', legenda: 'Supergrupo Espinhaço, considerada la única cordillera de Brasil.', width: 597, height: 530 },
            ],
          },
          {
            titulo: '¿Cómo se formó la Chapada Diamantina?',
            paragrafos: [
              'Hace unos 1.700 millones de años, la región del Supergrupo Espinhaço era una inmensa cuenca de aproximadamente 60.000 km² — una gran depresión parecida a un tazón, en el centro del supercontinente Columbia. Muchos ríos convergían allí, y a veces el propio océano entraba. Los sedimentos se depositaron en esa depresión durante unos 700 millones de años. Recién al final de ese proceso la vida multicelular empezó a proliferar masivamente, con la abundancia de oxígeno en la atmósfera.',
              'El biólogo Roy Funch, en Um Guia Para a Chapada Diamantina, describe el movimiento como el armado de una torta de varias capas que llena toda la cuenca. Durante ese tiempo el supercontinente se separa y vuelve a juntarse dos veces más, lo que deja la torta deforme y quebrada.',
              'Entre los choques de placas y continentes, el levantamiento fue el accidente geológico más determinante para el paisaje. Imaginá dos continentes chocando: durante el impacto — que puede durar millones de años — una porción de tierra baja y otra es elevada. Es lo que pasó cuando la India se incorporó a Asia, creando el Himalaya; en nuestro caso, cuando América se unió al continente africano.',
              'Después de eso la erosión hizo su trabajo de abrir valles, cavernas y grutas, redibujando el paisaje hasta hoy. El agua penetra lentamente entre las rocas y extrae pequeños sedimentos, que irán a ríos y océanos y formarán las montañas del futuro, dentro de millones de años, cuando los continentes vuelvan a chocar.',
            ],
            itens: [
              { titulo: 'Rocas calcáreas y salitres', texto: 'Principalmente entre Irecê e Iraquara, y también al sur, cerca de Andaraí y Nova Redenção, en torno al curso del Río Una — afluente del Paraguaçu. Potencialmente el último grupo en formarse. Llaman la atención por la cantidad de cavernas y grutas, y hay relatos de fósiles en el interior del Poço Azul.' },
              { titulo: 'Conglomerados de arenisca', texto: 'Las formaciones más antiguas de la Chapada. Rocas sedimentarias de diversos tipos y orígenes que, tras el levantamiento, formaron mesetas, valles y sierras. Se encuentran en todo el Parque Nacional y sus alrededores — son las más comunes.' },
            ],
          },
          {
            titulo: '¿Dónde ver las principales formaciones?',
            paragrafos: [
              'Nuestra principal sugerencia es el Parque da Muritiba. Además de los grandes conglomerados macizos de arenisca en las Piscinas Naturales del Serrano, se percibe el intemperismo en las rocas del Salão de Areias Coloridas, que se desmoronan al tacto, y las rarísimas rocas ígneas del Poço Halley, resultado de actividad volcánica en la zona.',
              'En el camino a la Cascada do Sossego hay pliegues geológicos que muestran la fuerza del impacto que levantó la Chapada, además de la infinidad de capas sedimentarias que forman un paisaje rústico y singular. Vale conocer también la grandiosidad del Valle del Pati, en el corazón del Parque Nacional.',
            ],
          },
        ],
        referenciasTitulo: 'Referencias',
        referencias: [
          { texto: 'Roy Funch — Um Guia Para a Chapada Diamantina' },
          { texto: 'Info Escola — Chapada Diamantina', href: 'https://www.infoescola.com/geografia/chapada-diamantina/' },
        ],
        complementaresTitulo: 'Información complementaria',
        complementares: [
          { texto: 'Augusto José de C. L. Pedreira da Silva — O Supergrupo Espinhaço na Chapada Diamantina centro-oriental, Bahia: sedimentologia, estratigrafia e tectônica', href: 'https://rigeo.cprm.gov.br/jspui/bitstream/doc/147/1/tese_augusto_pedreira.pdf' },
        ],
      },
    },
    cta: {
      titulo: { antes: '¿Todavía tenés', destaque: 'dudas?' },
      texto: 'Hablá con nosotros — respondemos con el recorrido justo para tu grupo.',
      whatsapp: 'Hablar por WhatsApp',
      contato: 'Página de contacto',
      contatoHref: '/es/contacto',
    },
  },
};
