/**
 * Conteúdo da página de dicas por idioma.
 *
 * PT é transcrição de mamut.agency/dicas e EN de mamut.agency/en/tips.
 *
 * ⚠️ ES, FR e NL são traduções feitas neste repositório — a operadora não publica
 * versão em espanhol, francês nem holandês (`/es/consejos` responde 404).
 *
 * Os telefones ficam num único lugar: o número não muda com o idioma, e
 * duplicá-lo por locale faria uma correção virar três. Só o `nome` traduz, e
 * mesmo assim apenas onde não é nome próprio — daí o fallback para `pt`.
 */

import type { Locale } from '@/lib/site';
import { TRANSFER_CONTENT } from './transfer-conteudo';
import { DICAS_PATHS } from './dicas-rotas';

/* ------------------------------------------------------------------ */
/* Telefones — dado compartilhado                                     */
/* ------------------------------------------------------------------ */

type Nome = { pt: string; en?: string; es?: string; fr?: string; nl?: string; de?: string };
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
      nome: { pt: 'Corpo de Bombeiros', en: 'Fire Department', es: 'Bomberos', fr: 'Pompiers', nl: 'Brandweer', de: 'Feuerwehr' },
      numeros: ['193'],
    },
    {
      nome: { pt: 'Polícia Militar', en: 'Military Police', es: 'Policía Militar', fr: 'Police militaire', nl: 'Militaire politie', de: 'Militärpolizei' },
      numeros: ['190'],
    },
    {
      nome: {
        pt: 'Hospital Regional de Seabra',
        en: 'Regional Hospital of Seabra',
        es: 'Hospital Regional de Seabra',
        fr: 'Hôpital régional de Seabra',
        nl: 'Regionaal ziekenhuis van Seabra',
        de: 'Regionalkrankenhaus Seabra',
      },
      numeros: ['(75) 3331-9400'],
    },
    {
      nome: {
        pt: 'Hospital Regional de Irecê',
        en: 'Regional Hospital of Irecê',
        es: 'Hospital Regional de Irecê',
        fr: 'Hôpital régional d’Irecê',
        nl: 'Regionaal ziekenhuis van Irecê',
        de: 'Regionalkrankenhaus Irecê',
      },
      numeros: ['(74) 3688-7700'],
    },
    {
      nome: {
        pt: 'CIPPA — Polícia Ambiental, Lençóis',
        en: 'CIPPA — Lençóis Environmental Police',
        es: 'CIPPA — Policía Ambiental, Lençóis',
        fr: 'CIPPA — Police environnementale, Lençóis',
        nl: 'CIPPA — Milieupolitie, Lençóis',
        de: 'CIPPA — Umweltpolizei, Lençóis',
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
        fr: 'Parc naturel municipal do Espalhado — Ibicoara',
        nl: 'Parque Natural Municipal do Espalhado — Ibicoara',
        de: 'Parque Natural Municipal do Espalhado — Ibicoara',
      },
      numeros: ['(77) 3413-2374'],
    },
    {
      nome: {
        pt: 'Parque Sempre-Viva — Mucugê',
        en: 'Sempre-Viva Park — Mucugê',
        es: 'Parque Sempre-Viva — Mucugê',
        fr: 'Parc Sempre-Viva — Mucugê',
        nl: 'Parque Sempre-Viva — Mucugê',
        de: 'Parque Sempre-Viva — Mucugê',
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
        fr: 'Abeta — Écotourisme et tourisme d’aventure',
        nl: 'Abeta — Ecotoerisme en avonturentoerisme',
        de: 'Abeta — Ökotourismus und Abenteuertourismus',
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
        fr: 'Ligne d’information touristique de Bahia',
        nl: 'Toeristische informatielijn van Bahia',
        de: 'Touristische Infoline von Bahia',
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
        fr: 'Iphan — Bureau de Lençóis',
        nl: 'Iphan — Kantoor Lençóis',
        de: 'Iphan — Büro Lençóis',
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
export type Bloco = { titulo: string; texto: string; destaque?: boolean; link?: { href: string; label: string } };
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
    /** O conteúdo da página mora em `transfer-conteudo.ts`; aqui só o que o menu e a moldura leem. */
    transfer: DicasSecao;
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
          link: { href: DICAS_PATHS.pt.transfer, label: 'Ver preços e destinos' },
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
      transfer: TRANSFER_CONTENT.pt.secao,
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
          link: { href: DICAS_PATHS.en.transfer, label: 'See prices and destinations' },
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
      transfer: TRANSFER_CONTENT.en.secao,
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
          link: { href: DICAS_PATHS.es.transfer, label: 'Ver precios y destinos' },
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
      transfer: TRANSFER_CONTENT.es.secao,
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

  fr: {
    meta: {
      title: 'Conseils',
      description:
        'Comment rejoindre la Chapada Diamantina, où loger à Lençóis, où manger, les banques et les numéros utiles — ce qu’il faut savoir avant de monter dans la serra.',
      ogDescription: 'Comment venir, où loger, où manger et les numéros utiles de la Chapada Diamantina.',
      canonical: '/fr/conseils',
    },
    chegada: {
      titulo: { antes: 'Comment rejoindre la', destaque: 'Chapada Diamantina ?' },
      lead: 'Lençóis est la porte d’entrée. Il existe quatre façons d’y arriver, et la meilleure dépend du temps dont vous disposez.',
      opcoes: [
        {
          titulo: 'En avion',
          texto:
            'Le moyen le plus rapide de rejoindre Lençóis est l’avion avec Azul (Confins × Lençóis) ; de temps à autre, Voepass annonce des vols entre Salvador et Lençóis. Vous pouvez aussi atterrir à Vitória da Conquista et continuer en transfert jusqu’à Lençóis ou Mucugê.',
        },
        {
          titulo: 'En bus',
          texto:
            'Salvador × Lençóis avec Rápido Federal (Guanabara). Les sièges sont pour la plupart confortables et il existe un service couchette. Comptez environ 6 heures de trajet.',
        },
        {
          titulo: 'En voiture',
          texto:
            'La BR-242 est la principale voie d’accès à la Chapada Diamantina. Les villes qui entourent la région sont Feira de Santana, Vitória da Conquista, Irecê et Barreiras.',
        },
        {
          titulo: 'Transfert avec Mamut',
          texto:
            'Le moyen le plus rapide et le plus direct : un transfert privé avec nous, avec flexibilité, confort et sécurité tout au long du voyage vers l’intérieur de Bahia.',
          link: { href: DICAS_PATHS.fr.transfer, label: 'Voir les tarifs et les destinations' },
          destaque: true,
        },
      ],
    },
    estadia: {
      titulo: { antes: 'Où dormir et', destaque: 'où manger.' },
      assuntos: [
        {
          titulo: 'Où loger à Lençóis',
          paragrafos: [
            'Lençóis dispose d’infrastructures pour tous les publics : pousadas, hôtels, maisons de charme, locations saisonnières, auberges de jeunesse et campings.',
            'N’oubliez pas que de nombreux sites de la Chapada sont éloignés de Lençóis, ce qui amène souvent à passer la nuit dans des villes différentes. Découvrir d’autres villages — Vale do Capão, Igatu et Mucugê — en vaut généralement la peine.',
          ],
        },
        {
          titulo: 'Où manger',
          paragrafos: [
            'Les villages de Lençóis et du Vale do Capão offrent la plus grande variété et la meilleure qualité en la matière : maisons de pâtes, restaurants asiatiques, arabes et méditerranéens, cafés, pâtisseries et options véganes.',
            'On y trouve aussi des cuisines expérimentales et des menus dégustation de haute gastronomie.',
          ],
        },
      ],
      listas: [
        {
          titulo: 'Banques',
          nota: 'Ayez toujours de l’argent liquide sur vous — les distributeurs manquent souvent de billets, surtout en haute saison.',
          itens: [
            'Banco do Brasil — Lençóis et Seabra',
            'Bradesco — Lençóis, Palmeiras et Seabra',
            'Caixa — Seabra',
          ],
        },
        { titulo: 'Laverie', itens: ['Banho de Cheiro — Lençóis', 'Capricho — Lençóis'] },
      ],
    },
    telefones: {
      titulo: { antes: 'Des numéros à garder', destaque: 'dans la poche.' },
      lead: 'Le réseau mobile est rare dans la serra. Enregistrez ce qui vous sera utile avant de quitter Lençóis.',
      grupos: {
        brigadas: 'Brigades volontaires de lutte contre les feux de forêt',
        emergencia: 'Hôpitaux et urgences',
        atrativos: 'Sites naturels et aires protégées',
        instituicoes: 'Institutions et organismes publics',
      },
    },
    secao: { titulo: 'Conseils', selectLabel: 'Choisissez un sujet' },
    paginas: {
      transfer: TRANSFER_CONTENT.fr.secao,
      'como-chegar': {
        nav: 'Comment venir',
        meta: {
          title: 'Comment rejoindre la Chapada Diamantina',
          description:
            'Avion, bus, voiture ou transfert privé — les quatre façons de rejoindre Lençóis, et aussi où loger et où manger dans la Chapada Diamantina.',
        },
        titulo: { antes: 'Comment rejoindre la', destaque: 'Chapada Diamantina ?' },
        lead: 'Lençóis est la porte d’entrée. Il existe quatre façons d’y arriver, et la meilleure dépend du temps dont vous disposez.',
      },
      'informacoes-gerais': {
        nav: 'Informations générales',
        meta: {
          title: 'Informations générales',
          description:
            'Sécurité à Lençóis, combien de jours prévoir, la meilleure période de l’année, banques, laveries et numéros utiles de la Chapada Diamantina.',
        },
        titulo: { antes: 'Ce que l’on nous demande', destaque: 'avant de venir.' },
        lead: 'Les questions qui reviennent le plus souvent à notre équipe — et les services à noter avant de monter dans la serra.',
        perguntas: [
          { pergunta: 'Lençóis est-elle une ville sûre ?', resposta: 'Oui, et tout particulièrement pour les visiteurs. Ceux qui arrivent y trouvent des habitants accueillants et serviables. La ville dispose d’un bataillon indépendant de police militaire, d’une compagnie indépendante de police environnementale, d’une garde municipale et d’un commissariat de police civile, avec de faibles taux de vols et de cambriolages.' },
          { pergunta: 'Combien de jours faut-il pour la Chapada Diamantina ?', resposta: 'L’idéal est d’au moins 7 jours. En 3 jours, vous pouvez découvrir les sites les plus proches de Lençóis. Gardez à l’esprit que la Chapada regroupe environ 24 villes, avec des sites répartis entre elles — choisissez bien où aller et où loger.' },
          { pergunta: 'Combien de jours faut-il pour la vallée du Pati ?', resposta: 'La vallée est assez grande pour dépasser 8 jours de marche si vous voulez la parcourir entièrement. Les itinéraires les plus demandés sont celui de 3 jours et la traversée de 5 jours. C’est un trek polyvalent, accessible depuis différents villages et villes.' },
          { pergunta: 'Comment se préparer pour la vallée du Pati ?', resposta: 'Côté condition physique : pratiquer une activité physique au moins 3 fois par semaine, en privilégiant l’endurance et le cardio. Côté équipement : chaussures fermées, sac à dos de 40 L ou plus, chapeau ou casquette, t-shirts anti-UV 50+ à manches longues, maillot de bain, tongs et tenue pour dormir.' },
          { pergunta: 'Quelle est la meilleure période pour découvrir la Chapada ?', resposta: 'Cela dépend de ce que vous recherchez. Pour voir les chutes d’eau à leur débit maximal, venez en été ou en automne (de décembre à juin, au Brésil) — les sentiers deviennent nettement plus difficiles et techniques, et le guide local devient indispensable. Pour marcher sans difficulté supplémentaire, venez entre l’hiver et le printemps (de juin à décembre).' },
          { pergunta: 'Quels sont les plus beaux endroits de la Chapada ?', resposta: 'C’est une affaire très personnelle. Notre avis : la cascade du Mixila, la cascade da Fumaça par le bas, la cascade da Fumacinha et la vallée du Pati.' },
        ],
      },
      'classificacao-de-nivel': {
        nav: 'Classification des niveaux',
        meta: {
          title: 'Classification des niveaux',
          description:
            'Comment Mamut évalue l’effort et la difficulté technique de chaque itinéraire dans la Chapada Diamantina — de léger à soutenu, de facile à difficile.',
        },
        titulo: { antes: 'Jusqu’où', destaque: 'vous irez.' },
        lead: 'Chaque itinéraire porte deux niveaux : un d’effort, un technique. Voici les critères.',
        aviso: 'La classification est relative : chacun a son contexte et ses limites. Elle varie selon votre condition physique actuelle et votre expérience préalable des activités de plein air. Nos activités ne sont pas recommandées aux personnes sédentaires.',
        esforco: {
          titulo: 'Niveau d’effort',
          niveis: [
            { nome: 'Léger', texto: 'Capacité à marcher jusqu’à 3 heures avec un sac à dos léger sur terrain irrégulier. Une bonne condition physique générale est nécessaire.' },
            { nome: 'Léger / Modéré', texto: 'Capacité à marcher de 3 à 5 heures, avec un sac de randonnée à la journée ou un sac de trek, sur terrain irrégulier.' },
            { nome: 'Modéré', texto: 'Capacité à marcher de 5 à 7 heures, avec un sac de randonnée à la journée ou un sac de trek, sur terrain irrégulier.' },
            { nome: 'Modéré / Soutenu', texto: 'Capacité à marcher de 7 à 9 heures, avec un sac de randonnée à la journée ou un sac de trek, sur terrain irrégulier.' },
            { nome: 'Soutenu', texto: 'Capacité à marcher de 7 à 9 heures, voire plus, avec un sac de trek sur terrain irrégulier.' },
          ],
        },
        tecnico: {
          titulo: 'Niveau technique',
          niveis: [
            { nome: 'Facile', texto: 'Aucune exposition. Il peut y avoir des passages de terrain glissant — accidenté et/ou boueux.' },
            { nome: 'Facile / Modéré', texto: 'Peu de montées et de descentes faciles, voire aucune, avec des passages de terrain glissant.' },
            { nome: 'Modéré', texto: 'Montées et descentes peu exposées, passages de terrain glissant et dalles rocheuses.' },
            { nome: 'Modéré / Difficile', texto: 'Quelques passages exposés de désescalade et d’escalade facile. L’utilisation d’équipement de sécurité est nécessaire.' },
            { nome: 'Difficile', texto: 'Passages exposés de désescalade et d’escalade facile. L’utilisation d’équipement de sécurité est nécessaire, et la connaissance des techniques verticales est souhaitable.' },
          ],
        },
      },
      geologia: {
        nav: 'Géologie de la Chapada',
        meta: {
          title: 'Géologie de la Chapada Diamantina',
          description:
            'Le Supergroupe d’Espinhaço, le bassin vieux de 1,7 milliard d’années et le soulèvement qui a dessiné la Chapada Diamantina — et où observer chaque formation.',
        },
        titulo: { antes: '4,5 milliards d’années', destaque: 'sous vos pieds.' },
        lead: 'La Chapada est l’un des meilleurs endroits au monde pour lire l’évolution de la planète dans le paysage lui-même.',
        blocos: [
          {
            titulo: 'Qu’est-ce que la Chapada Diamantina ?',
            paragrafos: [
              'Le parc national de la Chapada Diamantina se trouve dans la région centrale de Bahia, entre quatre villes : Andaraí, Lençóis, Mucugê et Palmeiras. Sa région identitaire, en revanche, englobe environ 24 villes autour du Parc — peut-être davantage, selon les critères géographiques retenus.',
              'Sur une carte de Bahia, on distingue une sorte d’échine, comme une colonne vertébrale, du nord au sud. En prenant du recul, on voit que cette échine se prolonge jusqu’à la région centrale du Minas Gerais, avec une petite interruption à la frontière entre les deux États. Cette formation, c’est le Supergroupe d’Espinhaço, notre mini-cordillère brésilienne — plus de 1 000 km de long.',
              'Elle est le fruit de 4,5 milliards d’années de transformations de la forme et du relief de la Terre. C’est l’un des meilleurs endroits pour observer cette évolution, par l’âge des formations comme par les fossiles, les peintures rupestres et toute l’histoire qui a façonné le paysage. Aujourd’hui, la région est faite de serras, de conglomérats de roches sédimentaires et de grottes.',
            ],
            figuras: [
              { src: '/img/dicas/espinhaco-porcao-norte.png', alt: 'Carte de la partie nord du Supergroupe d’Espinhaço', legenda: 'Partie nord du Supergroupe d’Espinhaço : la cordillère du Sincorá et les bassins du Rio Paraguaçu, du Rio de Contas et du Rio Una.', width: 855, height: 531 },
              { src: '/img/dicas/supergrupo-espinhaco.png', alt: 'Étendue du Supergroupe d’Espinhaço sur la carte du Brésil', legenda: 'Le Supergroupe d’Espinhaço, considéré comme la seule cordillère du Brésil.', width: 597, height: 530 },
            ],
          },
          {
            titulo: 'Comment s’est formée la Chapada Diamantina ?',
            paragrafos: [
              'Il y a environ 1,7 milliard d’années, la région du Supergroupe d’Espinhaço était un immense bassin d’environ 60 000 km² — une dépression semblable à un bol, au centre du supercontinent Columbia. De nombreux fleuves y convergeaient, et parfois l’océan lui-même y pénétrait. Des sédiments se sont déposés dans cette dépression pendant environ 700 millions d’années. Ce n’est qu’à la fin de ce processus que la vie multicellulaire a commencé à proliférer, grâce à l’abondance d’oxygène dans l’atmosphère.',
              'Le biologiste Roy Funch, dans Um Guia Para a Chapada Diamantina, compare ce mouvement à l’assemblage d’un gâteau à plusieurs étages qui remplit tout le bassin. Pendant cette période, le supercontinent se sépare puis se reforme encore deux fois, ce qui laisse le gâteau déformé et brisé.',
              'Parmi les collisions de plaques et de continents, le soulèvement a été l’accident géologique le plus déterminant pour le paysage. Imaginez deux continents qui se heurtent : pendant l’impact — qui peut durer des millions d’années — une portion de terre s’enfonce et une autre s’élève. C’est ce qui s’est produit lorsque l’Inde s’est soudée à l’Asie, créant l’Himalaya ; dans notre cas, lorsque l’Amérique s’est jointe au continent africain.',
              'Ensuite, l’érosion a fait son œuvre en creusant vallées, grottes et gouffres, redessinant le paysage jusqu’à aujourd’hui. L’eau s’infiltre lentement entre les roches et en arrache de petits sédiments, qui rejoindront fleuves et océans et formeront les montagnes du futur, dans des millions d’années, quand les continents se heurteront à nouveau.',
            ],
            itens: [
              { titulo: 'Roches calcaires et salitres', texto: 'Principalement entre Irecê et Iraquara, et aussi au sud, près d’Andaraí et de Nova Redenção, aux abords du Rio Una — affluent du Paraguaçu. Probablement le dernier groupe à s’être formé. Elles frappent par le nombre de grottes et de cavernes, et des fossiles auraient été observés à l’intérieur du Poço Azul.' },
              { titulo: 'Conglomérats de grès', texto: 'Les formations les plus anciennes de la Chapada. Des roches sédimentaires de types et d’origines variés qui, après le soulèvement, ont formé plateaux, vallées et serras. On les trouve dans tout le parc national et ses environs — ce sont les plus courantes.' },
            ],
          },
          {
            titulo: 'Où observer les principales formations ?',
            paragrafos: [
              'Notre principale suggestion est le parc de la Muritiba. Outre les grands conglomérats massifs de grès des piscines naturelles du Serrano, on y observe l’altération des roches du Salão de Areias Coloridas, qui s’effritent au toucher, et les très rares roches ignées du Poço Halley, fruit d’une activité volcanique dans la zone.',
              'Sur le chemin de la cascade du Sossego, des plis géologiques montrent la force de l’impact qui a soulevé la Chapada, ainsi que l’infinité de couches sédimentaires qui composent un paysage rude et singulier. La grandeur de la vallée du Pati, au cœur du parc national, mérite aussi le détour.',
            ],
          },
        ],
        referenciasTitulo: 'Références',
        referencias: [
          { texto: 'Roy Funch — Um Guia Para a Chapada Diamantina' },
          { texto: 'Info Escola — Chapada Diamantina', href: 'https://www.infoescola.com/geografia/chapada-diamantina/' },
        ],
        complementaresTitulo: 'Pour aller plus loin',
        complementares: [
          { texto: 'Augusto José de C. L. Pedreira da Silva — O Supergrupo Espinhaço na Chapada Diamantina centro-oriental, Bahia: sedimentologia, estratigrafia e tectônica', href: 'https://rigeo.cprm.gov.br/jspui/bitstream/doc/147/1/tese_augusto_pedreira.pdf' },
        ],
      },
    },
    cta: {
      titulo: { antes: 'Encore des', destaque: 'questions ?' },
      texto: 'Écrivez-nous — nous vous répondons avec l’itinéraire adapté à votre groupe.',
      whatsapp: 'Écrire sur WhatsApp',
      contato: 'Page de contact',
      contatoHref: '/fr/contact',
    },
  },
  nl: {
    meta: {
      title: 'Tips',
      description:
        'Hoe je in de Chapada Diamantina komt, waar je slaapt in Lençóis, eten, banken en handige telefoonnummers — wat je moet weten voordat je de bergen in gaat.',
      ogDescription: 'Hoe je er komt, waar je slaapt, waar je eet en de handige nummers voor de Chapada Diamantina.',
      canonical: '/nl/tips',
    },
    chegada: {
      titulo: { antes: 'Hoe kom je in de', destaque: 'Chapada Diamantina?' },
      lead: 'Lençóis is de toegangspoort. Er zijn vier manieren om er te komen, en welke het best is hangt af van hoeveel tijd je hebt.',
      opcoes: [
        {
          titulo: 'Met het vliegtuig',
          texto:
            'De snelste manier om Lençóis te bereiken is met het vliegtuig van Azul (Confins × Lençóis); af en toe kondigt Voepass vluchten aan tussen Salvador en Lençóis. Je kunt ook landen op het vliegveld van Vitória da Conquista en een transfer nemen naar Lençóis of Mucugê.',
        },
        {
          titulo: 'Met de bus',
          texto:
            'Salvador × Lençóis met Rápido Federal (Guanabara). De stoelen zijn meestal comfortabel en er is een slaapbus. De reis duurt ongeveer 6 uur.',
        },
        {
          titulo: 'Met de auto',
          texto:
            'De BR-242 is de belangrijkste toegangsweg tot de Chapada Diamantina. De grotere steden rond de regio zijn Feira de Santana, Vitória da Conquista, Irecê en Barreiras.',
        },
        {
          titulo: 'Transfer met Mamut',
          texto:
            'De snelste en meest directe manier: een privétransfer met ons, met flexibiliteit, comfort en veiligheid tijdens je hele reis naar het binnenland van Bahia.',
          link: { href: DICAS_PATHS.nl.transfer, label: 'Bekijk prijzen en bestemmingen' },
          destaque: true,
        },
      ],
    },
    estadia: {
      titulo: { antes: 'Waar je slaapt en', destaque: 'waar je eet.' },
      assuntos: [
        {
          titulo: 'Overnachten in Lençóis',
          paragrafos: [
            'Lençóis heeft voorzieningen voor elk soort bezoeker: pensions, hotels, sfeervolle huizen, vakantiewoningen, hostels en campings.',
            'Houd er rekening mee dat veel bezienswaardigheden in de Chapada Diamantina ver van Lençóis liggen, waardoor je vaak nachten in verschillende plaatsen doorbrengt. Andere dorpen verkennen — de Vale do Capão, Igatu en Mucugê — loont meestal de moeite.',
          ],
        },
        {
          titulo: 'Eten en drinken',
          paragrafos: [
            'De dorpen Lençóis en Vale do Capão bieden hier de meeste keuze en kwaliteit: pastarestaurants, oosterse, Arabische en mediterrane restaurants, cafés, banketbakkers en veganistische opties.',
            'Er zijn ook experimentele keukens en proeverijmenu’s van hoog niveau.',
          ],
        },
      ],
      listas: [
        {
          titulo: 'Banken',
          nota: 'Heb altijd contant geld bij je — geldautomaten raken vaak leeg, vooral in het hoogseizoen.',
          itens: [
            'Banco do Brasil — Lençóis en Seabra',
            'Bradesco — Lençóis, Palmeiras en Seabra',
            'Caixa — Seabra',
          ],
        },
        { titulo: 'Wasserettes', itens: ['Banho de Cheiro — Lençóis', 'Capricho — Lençóis'] },
      ],
    },
    telefones: {
      titulo: { antes: 'Nummers die je', destaque: 'op zak wilt hebben.' },
      lead: 'In de bergen is er weinig bereik. Sla op wat handig is voordat je uit Lençóis vertrekt.',
      grupos: {
        brigadas: 'Vrijwillige bosbrandweer',
        emergencia: 'Ziekenhuizen en noodnummers',
        atrativos: 'Natuurlijke bezienswaardigheden en beschermde gebieden',
        instituicoes: 'Instellingen en overheidsdiensten',
      },
    },
    secao: { titulo: 'Tips', selectLabel: 'Kies een onderwerp' },
    paginas: {
      transfer: TRANSFER_CONTENT.nl.secao,
      'como-chegar': {
        nav: 'Hoe kom je er',
        meta: {
          title: 'Hoe kom je in de Chapada Diamantina',
          description:
            'Vliegtuig, bus, auto of privétransfer — de vier manieren om in Lençóis te komen, plus waar je slaapt en waar je eet in de Chapada Diamantina.',
        },
        titulo: { antes: 'Hoe kom je in de', destaque: 'Chapada Diamantina?' },
        lead: 'Lençóis is de toegangspoort. Er zijn vier manieren om er te komen, en welke het best is hangt af van hoeveel tijd je hebt.',
      },
      'informacoes-gerais': {
        nav: 'Algemene informatie',
        meta: {
          title: 'Algemene informatie',
          description:
            'Veiligheid in Lençóis, hoeveel dagen je moet uittrekken, de beste tijd van het jaar, banken, wasserettes en de handige telefoonnummers van de Chapada Diamantina.',
        },
        titulo: { antes: 'Wat mensen vragen', destaque: 'voordat ze komen.' },
        lead: 'De vragen die ons team het vaakst hoort — en de voorzieningen die je moet kennen voordat je de bergen in gaat.',
        perguntas: [
          { pergunta: 'Is Lençóis een veilig stadje?', resposta: 'Ja, en vooral voor bezoekers. Wie er aankomt, treft gastvrije, behulpzame mensen. Het stadje heeft een eigen bataljon van de militaire politie, een eigen eenheid van de milieupolitie, een gemeentelijke wacht en een politiebureau, met weinig diefstal en beroving.' },
          { pergunta: 'Hoeveel dagen heb ik nodig voor de Chapada Diamantina?', resposta: 'Het liefst minstens 7 dagen. In 3 dagen zie je de bezienswaardigheden het dichtst bij Lençóis. Bedenk dat de Chapada zo’n 24 gemeenten omvat met bezienswaardigheden die daartussen verspreid liggen — kies zorgvuldig wat je bezoekt en waar je overnacht.' },
          { pergunta: 'Hoeveel dagen heb ik nodig voor de Vale do Pati?', resposta: 'Het dal is groot genoeg om er meer dan 8 dagen te lopen als je alles wilt zien. De meest gevraagde routes zijn die van 3 dagen en de doorsteek van 5 dagen. Het is een veelzijdige trektocht, bereikbaar via verschillende dorpen en plaatsen.' },
          { pergunta: 'Hoe bereid ik me voor op de Vale do Pati?', resposta: 'Qua conditie: sport minstens 3 keer per week, met de nadruk op aerobe training en uithoudingsvermogen. Qua uitrusting: dichte schoenen, een rugzak van 40 L of meer, een pet of hoed, shirts met lange mouwen en UV50+, zwemkleding, slippers en iets om in te slapen.' },
          { pergunta: 'Wat is de beste tijd om de Chapada te bezoeken?', resposta: 'Dat hangt af van wat je zoekt. Wil je de watervallen op hun volst zien, kom dan in de zomer of de herfst — de paden worden dan een stuk zwaarder en technischer, en een lokale gids wordt onmisbaar. Wil je lopen zonder die extra uitdaging, kom dan tussen winter en lente.' },
          { pergunta: 'Wat zijn de mooiste plekken in de Chapada?', resposta: 'Een heel persoonlijke mening. De onze: de Waterval Mixila, de Waterval Fumaça van onderen, de Waterval Fumacinha en de Vale do Pati.' },
        ],
      },
      'classificacao-de-nivel': {
        nav: 'Niveauclassificatie',
        meta: {
          title: 'Niveauclassificatie',
          description:
            'Hoe Mamut de inspanning en de technische moeilijkheid van elke route in de Chapada Diamantina beoordeelt — van licht tot zwaar, van makkelijk tot moeilijk.',
        },
        titulo: { antes: 'Hoe ver', destaque: 'je gaat.' },
        lead: 'Elke route heeft twee beoordelingen: een voor de inspanning en een technische. Dit zijn de criteria.',
        aviso: 'De classificatie is relatief: iedereen heeft zijn eigen context en grenzen. Ze hangt af van je huidige conditie en je eerdere ervaring met outdooractiviteiten. Onze activiteiten worden niet aangeraden voor mensen die weinig bewegen.',
        esforco: {
          titulo: 'Inspanningsniveau',
          niveis: [
            { nome: 'Licht', texto: 'In staat om tot 3 uur te lopen met een lichte rugzak over oneffen terrein. Een algemeen goede conditie is vereist.' },
            { nome: 'Licht / Gemiddeld', texto: 'In staat om 3 tot 5 uur te lopen, met een dagrugzak of een volle rugzak, over oneffen terrein.' },
            { nome: 'Gemiddeld', texto: 'In staat om 5 tot 7 uur te lopen, met een dagrugzak of een volle rugzak, over oneffen terrein.' },
            { nome: 'Gemiddeld / Zwaar', texto: 'In staat om 7 tot 9 uur te lopen, met een dagrugzak of een volle rugzak, over oneffen terrein.' },
            { nome: 'Zwaar', texto: 'In staat om 7 tot 9 uur of langer te lopen, met een volle rugzak, over oneffen terrein.' },
          ],
        },
        tecnico: {
          titulo: 'Technisch niveau',
          niveis: [
            { nome: 'Makkelijk', texto: 'Geen blootstelling. Er kunnen stukken glad terrein zijn — ruw en/of modderig.' },
            { nome: 'Makkelijk / Gemiddeld', texto: 'Weinig of geen makkelijke klimmen en afdalingen, met stukken glad terrein.' },
            { nome: 'Gemiddeld', texto: 'Licht blootgestelde klimmen en afdalingen, stukken glad terrein en rotshellingen.' },
            { nome: 'Gemiddeld / Moeilijk', texto: 'Enig blootgesteld klauterwerk. Veiligheidsuitrusting is vereist.' },
            { nome: 'Moeilijk', texto: 'Blootgesteld klauterwerk. Veiligheidsuitrusting is vereist, en kennis van verticale technieken is wenselijk.' },
          ],
        },
      },
      geologia: {
        nav: 'Geologie van de Chapada',
        meta: {
          title: 'Geologie van de Chapada Diamantina',
          description:
            'De Supergroep Espinhaço, het bekken van 1,7 miljard jaar oud en de opheffing die de Chapada Diamantina vormde — en waar je elke formatie kunt zien.',
        },
        titulo: { antes: '4,5 miljard jaar', destaque: 'onder je voeten.' },
        lead: 'De Chapada is een van de beste plekken ter wereld om de evolutie van de planeet in het landschap zelf te lezen.',
        blocos: [
          {
            titulo: 'Wat is de Chapada Diamantina?',
            paragrafos: [
              'Het Nationaal Park Chapada Diamantina ligt in het midden van Bahia, tussen vier gemeenten: Andaraí, Lençóis, Mucugê en Palmeiras. De bredere regio die zich ermee identificeert, omvat echter zo’n 24 gemeenten rond het Park — misschien meer, afhankelijk van welke geografische aspecten je meetelt.',
              'Op een kaart van Bahia zie je een soort bergrug, als een zuil, die van noord naar zuid loopt. Zoom je uit, dan loopt die rug door tot in het midden van Minas Gerais, met een kleine onderbreking op de grens tussen de staten. Die formatie is de Supergroep Espinhaço, ons Braziliaanse minigebergte — meer dan 1.000 km lang.',
              'Ze is het resultaat van 4,5 miljard jaar veranderingen in de vorm en het reliëf van de aarde. Dit is een van de beste plekken om die evolutie te zien, vanwege de ouderdom van de formaties en vanwege de fossielen, de rotsschilderingen en de hele geschiedenis die het landschap heeft gevormd. Nu bestaat de regio uit bergen, conglomeraten van sedimentgesteente en grotten.',
            ],
            figuras: [
              { src: '/img/dicas/espinhaco-porcao-norte.png', alt: 'Kaart van het noordelijke deel van de Supergroep Espinhaço', legenda: 'Noordelijk deel van de Supergroep Espinhaço: de Serra do Sincorá en de stroomgebieden van de rivieren Paraguaçu, Contas en Una.', width: 855, height: 531 },
              { src: '/img/dicas/supergrupo-espinhaco.png', alt: 'De omvang van de Supergroep Espinhaço op een kaart van Brazilië', legenda: 'De Supergroep Espinhaço, beschouwd als het enige gebergte van Brazilië.', width: 597, height: 530 },
            ],
          },
          {
            titulo: 'Hoe is de Chapada Diamantina ontstaan?',
            paragrafos: [
              'Zo’n 1,7 miljard jaar geleden was het gebied van de Supergroep Espinhaço een enorm bekken van ongeveer 60.000 km² — een grote kom, midden op het supercontinent Columbia. Veel rivieren kwamen daar samen, en soms drong de oceaan zelf binnen. In die laagte werden naar schatting 700 miljoen jaar lang sedimenten afgezet. Pas aan het eind van dat proces begon meercellig leven zich massaal te vermenigvuldigen, dankzij de overvloed aan zuurstof in de atmosfeer.',
              'De bioloog Roy Funch beschrijft het in Um Guia Para a Chapada Diamantina als het opbouwen van een gelaagde taart die het hele bekken vult. In die tijd valt het supercontinent uiteen en komt het nog twee keer weer samen, waardoor de taart vervormd en gebroken raakt.',
              'Van alle botsingen tussen platen en continenten was de opheffing de geologische gebeurtenis die het landschap het meest heeft bepaald. Stel je twee continenten voor die op elkaar botsen: tijdens de botsing — die miljoenen jaren kan duren — zakt het ene stuk land en wordt het andere omhooggeduwd. Dat gebeurde toen India tegen Azië aan schoof en de Himalaya ontstond; in ons geval toen Amerika zich bij het Afrikaanse continent voegde.',
              'Daarna deed de erosie haar werk: ze opende dalen, grotten en kloven en tekende het landschap opnieuw tot wat we nu kennen. Water dringt langzaam tussen de rotsen en haalt er kleine sedimenten uit, die naar rivieren en oceanen stromen en over miljoenen jaren, als de continenten weer botsen, de bergen van de toekomst zullen vormen.',
            ],
            itens: [
              { titulo: 'Kalksteen en de rotsen van de Salitre', texto: 'Vooral tussen Irecê en Iraquara, en ook in het zuiden, bij Andaraí en Nova Redenção, rond de loop van de rivier de Una — een zijrivier van de Paraguaçu. Waarschijnlijk de laatste groep die is ontstaan. Ze vallen op door het grote aantal grotten, en er zijn meldingen van fossielen in de Poço Azul.' },
              { titulo: 'Zandsteenconglomeraten', texto: 'De oudste formaties van de Chapada. Sedimentgesteenten van allerlei soorten en herkomst die na de opheffing plateaus, dalen en bergen vormden. Je vindt ze overal in het Nationaal Park en eromheen — de meest voorkomende van allemaal.' },
            ],
          },
          {
            titulo: 'Waar zie je de belangrijkste formaties?',
            paragrafos: [
              'Onze belangrijkste tip is het Parque da Muritiba. Naast de grote, massieve zandsteenconglomeraten bij de natuurlijke baden van de Serrano zie je de verwering in de rotsen van de Salão de Areias Coloridas, die bij aanraking uiteenvallen, en de zeer zeldzame stollingsgesteenten van de Poço Halley, het resultaat van vulkanische activiteit in het gebied.',
              'Op weg naar de Waterval Sossego zie je geologische plooien die laten zien hoe hard de botsing was die de Chapada omhoogduwde, plus de eindeloze sedimentlagen die zorgen voor een ruig, uniek landschap. Ook de grootsheid van de Vale do Pati, in het hart van het Nationaal Park, is het zien waard.',
            ],
          },
        ],
        referenciasTitulo: 'Bronnen',
        referencias: [
          { texto: 'Roy Funch — Um Guia Para a Chapada Diamantina' },
          { texto: 'Info Escola — Chapada Diamantina', href: 'https://www.infoescola.com/geografia/chapada-diamantina/' },
        ],
        complementaresTitulo: 'Verder lezen',
        complementares: [
          { texto: 'Augusto José de C. L. Pedreira da Silva — O Supergrupo Espinhaço na Chapada Diamantina centro-oriental, Bahia: sedimentologia, estratigrafia e tectônica', href: 'https://rigeo.cprm.gov.br/jspui/bitstream/doc/147/1/tese_augusto_pedreira.pdf' },
        ],
      },
    },
    cta: {
      titulo: { antes: 'Nog', destaque: 'vragen?' },
      texto: 'Neem contact op — we antwoorden met de juiste route voor je groep.',
      whatsapp: 'Praat via WhatsApp',
      contato: 'Contactpagina',
      contatoHref: '/nl/contact',
    },
  },
  de: {
    meta: {
      title: 'Tipps',
      description:
        'Wie du in die Chapada Diamantina kommst, wo du in Lençóis schläfst, Essen, Banken und nützliche Telefonnummern — was du wissen solltest, bevor du in die Berge gehst.',
      ogDescription: 'Wie du hinkommst, wo du schläfst, wo du isst und die nützlichen Nummern für die Chapada Diamantina.',
      canonical: '/de/tipps',
    },
    chegada: {
      titulo: { antes: 'Wie kommst du in die', destaque: 'Chapada Diamantina?' },
      lead: 'Lençóis ist das Tor. Es gibt vier Wege dorthin, und welcher am besten ist, hängt davon ab, wie viel Zeit du hast.',
      opcoes: [
        {
          titulo: 'Mit dem Flugzeug',
          texto:
            'Am schnellsten erreichst du Lençóis mit dem Flugzeug von Azul (Confins × Lençóis); gelegentlich kündigt Voepass Flüge zwischen Salvador und Lençóis an. Du kannst auch am Flughafen von Vitória da Conquista landen und einen Transfer nach Lençóis oder Mucugê nehmen.',
        },
        {
          titulo: 'Mit dem Bus',
          texto:
            'Salvador × Lençóis mit Rápido Federal (Guanabara). Die Sitze sind meist bequem, und es gibt einen Schlafbus. Die Fahrt dauert etwa 6 Stunden.',
        },
        {
          titulo: 'Mit dem Auto',
          texto:
            'Die BR-242 ist die wichtigste Zufahrtsstraße zur Chapada Diamantina. Die größeren Städte rund um die Region sind Feira de Santana, Vitória da Conquista, Irecê und Barreiras.',
        },
        {
          titulo: 'Transfer mit Mamut',
          texto:
            'Der schnellste und direkteste Weg: ein privater Transfer mit uns, mit Flexibilität, Komfort und Sicherheit auf deiner ganzen Reise ins Hinterland Bahias.',
          link: { href: DICAS_PATHS.de.transfer, label: 'Preise und Ziele ansehen' },
          destaque: true,
        },
      ],
    },
    estadia: {
      titulo: { antes: 'Wo du schläfst und', destaque: 'wo du isst.' },
      assuntos: [
        {
          titulo: 'Übernachten in Lençóis',
          paragrafos: [
            'Lençóis hat Angebote für jede Art von Gast: Pousadas, Hotels, charmante Häuser, Ferienwohnungen, Hostels und Campingplätze.',
            'Denk daran, dass viele Sehenswürdigkeiten der Chapada Diamantina weit von Lençóis entfernt liegen, sodass du oft Nächte an verschiedenen Orten verbringst. Andere Dörfer zu erkunden — das Vale do Capão, Igatu und Mucugê — lohnt sich meistens.',
          ],
        },
        {
          titulo: 'Essen und Trinken',
          paragrafos: [
            'Die Dörfer Lençóis und Vale do Capão bieten hier die meiste Auswahl und Qualität: Pasta-Restaurants, orientalische, arabische und mediterrane Küche, Cafés, Konditoreien und vegane Optionen.',
            'Es gibt auch experimentelle Küchen und Degustationsmenüs auf hohem Niveau.',
          ],
        },
      ],
      listas: [
        {
          titulo: 'Banken',
          nota: 'Hab immer Bargeld dabei — Geldautomaten sind oft leer, besonders in der Hochsaison.',
          itens: [
            'Banco do Brasil — Lençóis und Seabra',
            'Bradesco — Lençóis, Palmeiras und Seabra',
            'Caixa — Seabra',
          ],
        },
        { titulo: 'Wäschereien', itens: ['Banho de Cheiro — Lençóis', 'Capricho — Lençóis'] },
      ],
    },
    telefones: {
      titulo: { antes: 'Nummern, die du', destaque: 'dabeihaben solltest.' },
      lead: 'In den Bergen gibt es wenig Empfang. Speichere das Wichtigste, bevor du aus Lençóis aufbrichst.',
      grupos: {
        brigadas: 'Freiwillige Waldbrand-Feuerwehr',
        emergencia: 'Krankenhäuser und Notrufnummern',
        atrativos: 'Natursehenswürdigkeiten und Schutzgebiete',
        instituicoes: 'Institutionen und Behörden',
      },
    },
    secao: { titulo: 'Tipps', selectLabel: 'Wähle ein Thema' },
    paginas: {
      transfer: TRANSFER_CONTENT.de.secao,
      'como-chegar': {
        nav: 'Anreise',
        meta: {
          title: 'Anreise in die Chapada Diamantina',
          description:
            'Flugzeug, Bus, Auto oder privater Transfer — die vier Wege nach Lençóis, dazu, wo du in der Chapada Diamantina schläfst und isst.',
        },
        titulo: { antes: 'Wie kommst du in die', destaque: 'Chapada Diamantina?' },
        lead: 'Lençóis ist das Tor. Es gibt vier Wege dorthin, und welcher am besten ist, hängt davon ab, wie viel Zeit du hast.',
      },
      'informacoes-gerais': {
        nav: 'Allgemeine Informationen',
        meta: {
          title: 'Allgemeine Informationen',
          description:
            'Sicherheit in Lençóis, wie viele Tage du einplanen solltest, die beste Jahreszeit, Banken, Wäschereien und die nützlichen Telefonnummern der Chapada Diamantina.',
        },
        titulo: { antes: 'Was Menschen fragen,', destaque: 'bevor sie kommen.' },
        lead: 'Die Fragen, die unser Team am häufigsten hört — und die Angebote, die du kennen solltest, bevor du in die Berge gehst.',
        perguntas: [
          { pergunta: 'Ist Lençóis ein sicheres Städtchen?', resposta: 'Ja, und besonders für Gäste. Wer ankommt, trifft auf gastfreundliche, hilfsbereite Menschen. Das Städtchen hat ein eigenes Bataillon der Militärpolizei, eine eigene Einheit der Umweltpolizei, eine Stadtwache und eine Polizeiwache, mit wenig Diebstahl und Raub.' },
          { pergunta: 'Wie viele Tage brauche ich für die Chapada Diamantina?', resposta: 'Am besten mindestens 7 Tage. In 3 Tagen siehst du die Sehenswürdigkeiten, die Lençóis am nächsten liegen. Denk daran, dass die Chapada rund 24 Gemeinden umfasst, mit Sehenswürdigkeiten, die dazwischen verteilt sind — wähle sorgfältig, was du besuchst und wo du übernachtest.' },
          { pergunta: 'Wie viele Tage brauche ich für das Vale do Pati?', resposta: 'Das Tal ist groß genug, um mehr als 8 Tage darin zu wandern, wenn du alles sehen willst. Die gefragtesten Routen sind die über 3 Tage und die Durchquerung über 5 Tage. Es ist eine vielseitige Tour, erreichbar über verschiedene Dörfer und Orte.' },
          { pergunta: 'Wie bereite ich mich auf das Vale do Pati vor?', resposta: 'Körperlich: Treib mindestens 3-mal pro Woche Sport, mit Schwerpunkt auf Ausdauer. Bei der Ausrüstung: geschlossene Schuhe, ein Rucksack ab 40 L, Kappe oder Hut, langärmelige Shirts mit UV50+, Badesachen, Flip-Flops und etwas zum Schlafen.' },
          { pergunta: 'Wann ist die beste Zeit, die Chapada zu besuchen?', resposta: 'Das hängt davon ab, was du suchst. Willst du die Wasserfälle in voller Pracht sehen, komm im Sommer oder Herbst — die Wege werden dann deutlich anspruchsvoller und technischer, und ein lokaler Guide wird unverzichtbar. Willst du ohne diese zusätzliche Herausforderung wandern, komm zwischen Winter und Frühling.' },
          { pergunta: 'Was sind die schönsten Orte der Chapada?', resposta: 'Eine sehr persönliche Meinung. Unsere: der Mixila-Wasserfall, der Fumaça-Wasserfall von unten, der Fumacinha-Wasserfall und das Vale do Pati.' },
        ],
      },
      'classificacao-de-nivel': {
        nav: 'Schwierigkeitsgrade',
        meta: {
          title: 'Schwierigkeitsgrade',
          description:
            'Wie Mamut die Anstrengung und die technische Schwierigkeit jeder Route in der Chapada Diamantina einstuft — von leicht bis schwer, von einfach bis schwierig.',
        },
        titulo: { antes: 'Wie weit', destaque: 'du gehst.' },
        lead: 'Jede Route hat zwei Einstufungen: eine für die Anstrengung und eine technische. Das sind die Kriterien.',
        aviso: 'Die Einstufung ist relativ: Jeder Mensch hat seinen eigenen Kontext und seine eigenen Grenzen. Sie hängt von deiner aktuellen Kondition und deiner bisherigen Erfahrung mit Outdoor-Aktivitäten ab. Unsere Aktivitäten werden Menschen, die sich wenig bewegen, nicht empfohlen.',
        esforco: {
          titulo: 'Anstrengungsniveau',
          niveis: [
            { nome: 'Leicht', texto: 'In der Lage, bis zu 3 Stunden mit leichtem Rucksack über unebenes Gelände zu gehen. Eine allgemein gute Kondition ist erforderlich.' },
            { nome: 'Leicht / Mittel', texto: 'In der Lage, 3 bis 5 Stunden mit Tagesrucksack oder vollem Rucksack über unebenes Gelände zu gehen.' },
            { nome: 'Mittel', texto: 'In der Lage, 5 bis 7 Stunden mit Tagesrucksack oder vollem Rucksack über unebenes Gelände zu gehen.' },
            { nome: 'Mittel / Schwer', texto: 'In der Lage, 7 bis 9 Stunden mit Tagesrucksack oder vollem Rucksack über unebenes Gelände zu gehen.' },
            { nome: 'Schwer', texto: 'In der Lage, 7 bis 9 Stunden oder länger mit vollem Rucksack über unebenes Gelände zu gehen.' },
          ],
        },
        tecnico: {
          titulo: 'Technisches Niveau',
          niveis: [
            { nome: 'Einfach', texto: 'Keine Ausgesetztheit. Es kann rutschige Abschnitte geben — rau und/oder schlammig.' },
            { nome: 'Einfach / Mittel', texto: 'Wenige oder keine leichten Auf- und Abstiege, mit rutschigen Abschnitten.' },
            { nome: 'Mittel', texto: 'Leicht ausgesetzte Auf- und Abstiege, rutschige Abschnitte und Felshänge.' },
            { nome: 'Mittel / Schwierig', texto: 'Etwas ausgesetzte Kletterpassagen. Sicherheitsausrüstung ist erforderlich.' },
            { nome: 'Schwierig', texto: 'Ausgesetzte Kletterpassagen. Sicherheitsausrüstung ist erforderlich, Kenntnisse in Seiltechnik sind wünschenswert.' },
          ],
        },
      },
      geologia: {
        nav: 'Geologie der Chapada',
        meta: {
          title: 'Geologie der Chapada Diamantina',
          description:
            'Die Espinhaço-Supergruppe, das 1,7 Milliarden Jahre alte Becken und die Hebung, die die Chapada Diamantina formte — und wo du jede Formation sehen kannst.',
        },
        titulo: { antes: '4,5 Milliarden Jahre', destaque: 'unter deinen Füßen.' },
        lead: 'Die Chapada ist einer der besten Orte der Welt, um die Entwicklung des Planeten direkt in der Landschaft zu lesen.',
        blocos: [
          {
            titulo: 'Was ist die Chapada Diamantina?',
            paragrafos: [
              'Der Nationalpark Chapada Diamantina liegt in der Mitte Bahias, zwischen vier Gemeinden: Andaraí, Lençóis, Mucugê und Palmeiras. Die größere Region, die sich mit ihm identifiziert, umfasst jedoch rund 24 Gemeinden rund um den Park — vielleicht mehr, je nachdem, welche geografischen Aspekte man mitzählt.',
              'Auf einer Karte Bahias siehst du eine Art Bergrücken, wie eine Säule, der von Norden nach Süden verläuft. Zoomst du heraus, setzt sich dieser Rücken bis in die Mitte von Minas Gerais fort, mit einer kleinen Unterbrechung an der Grenze zwischen den Bundesstaaten. Diese Formation ist die Espinhaço-Supergruppe, unser brasilianisches Mini-Gebirge — über 1.000 km lang.',
              'Sie ist das Ergebnis von 4,5 Milliarden Jahren Veränderungen in Form und Relief der Erde. Dies ist einer der besten Orte, um diese Entwicklung zu sehen, wegen des Alters der Formationen und wegen der Fossilien, der Felsmalereien und der ganzen Geschichte, die die Landschaft geformt hat. Heute besteht die Region aus Bergen, Konglomeraten aus Sedimentgestein und Höhlen.',
            ],
            figuras: [
              { src: '/img/dicas/espinhaco-porcao-norte.png', alt: 'Karte des nördlichen Teils der Espinhaço-Supergruppe', legenda: 'Nördlicher Teil der Espinhaço-Supergruppe: die Serra do Sincorá und die Einzugsgebiete der Flüsse Paraguaçu, Contas und Una.', width: 855, height: 531 },
              { src: '/img/dicas/supergrupo-espinhaco.png', alt: 'Die Ausdehnung der Espinhaço-Supergruppe auf einer Karte Brasiliens', legenda: 'Die Espinhaço-Supergruppe, die als einziges Gebirge Brasiliens gilt.', width: 597, height: 530 },
            ],
          },
          {
            titulo: 'Wie ist die Chapada Diamantina entstanden?',
            paragrafos: [
              'Vor rund 1,7 Milliarden Jahren war das Gebiet der Espinhaço-Supergruppe ein riesiges Becken von etwa 60.000 km² — eine große Schüssel mitten auf dem Superkontinent Columbia. Viele Flüsse liefen dort zusammen, und manchmal drang der Ozean selbst ein. In dieser Senke lagerten sich schätzungsweise 700 Millionen Jahre lang Sedimente ab. Erst gegen Ende dieses Prozesses begann sich vielzelliges Leben massenhaft zu vermehren, dank des Überflusses an Sauerstoff in der Atmosphäre.',
              'Der Biologe Roy Funch beschreibt es in Um Guia Para a Chapada Diamantina wie das Schichten einer Torte, die das ganze Becken füllt. In dieser Zeit zerbricht der Superkontinent und setzt sich noch zweimal neu zusammen, wodurch die Torte verformt und zerbrochen wird.',
              'Von allen Kollisionen zwischen Platten und Kontinenten war die Hebung das geologische Ereignis, das die Landschaft am stärksten geprägt hat. Stell dir zwei Kontinente vor, die aufeinanderprallen: Während der Kollision — die Millionen von Jahren dauern kann — sinkt das eine Stück Land ab und das andere wird nach oben gedrückt. Das geschah, als Indien gegen Asien stieß und der Himalaya entstand; in unserem Fall, als Amerika sich mit dem afrikanischen Kontinent verband.',
              'Danach tat die Erosion ihre Arbeit: Sie öffnete Täler, Höhlen und Schluchten und zeichnete die Landschaft neu zu dem, was wir heute kennen. Wasser dringt langsam zwischen die Felsen und löst kleine Sedimente heraus, die in Flüsse und Ozeane gelangen und über Millionen von Jahren, wenn die Kontinente wieder kollidieren, die Berge der Zukunft bilden werden.',
            ],
            itens: [
              { titulo: 'Kalkstein und die Gesteine der Salitre', texto: 'Vor allem zwischen Irecê und Iraquara und auch im Süden, bei Andaraí und Nova Redenção, rund um den Lauf des Flusses Una — eines Nebenflusses des Paraguaçu. Wahrscheinlich die zuletzt entstandene Gruppe. Sie fallen durch die große Zahl an Höhlen auf, und es gibt Berichte über Fossilien im Poço Azul.' },
              { titulo: 'Sandsteinkonglomerate', texto: 'Die ältesten Formationen der Chapada. Sedimentgesteine aller Art und Herkunft, die nach der Hebung Plateaus, Täler und Berge bildeten. Du findest sie überall im Nationalpark und drumherum — die häufigsten von allen.' },
            ],
          },
          {
            titulo: 'Wo siehst du die wichtigsten Formationen?',
            paragrafos: [
              'Unser wichtigster Tipp ist der Parque da Muritiba. Neben den großen, massiven Sandsteinkonglomeraten an den Naturbecken des Serrano siehst du die Verwitterung in den Felsen des Salão de Areias Coloridas, die bei Berührung zerfallen, und die sehr seltenen magmatischen Gesteine des Poço Halley, das Ergebnis vulkanischer Aktivität im Gebiet.',
              'Auf dem Weg zum Sossego-Wasserfall siehst du geologische Falten, die zeigen, wie heftig die Kollision war, die die Chapada nach oben drückte, dazu die endlosen Sedimentschichten, die für eine raue, einzigartige Landschaft sorgen. Auch die Größe des Vale do Pati, im Herzen des Nationalparks, ist sehenswert.',
            ],
          },
        ],
        referenciasTitulo: 'Quellen',
        referencias: [
          { texto: 'Roy Funch — Um Guia Para a Chapada Diamantina' },
          { texto: 'Info Escola — Chapada Diamantina', href: 'https://www.infoescola.com/geografia/chapada-diamantina/' },
        ],
        complementaresTitulo: 'Weiterlesen',
        complementares: [
          { texto: 'Augusto José de C. L. Pedreira da Silva — O Supergrupo Espinhaço na Chapada Diamantina centro-oriental, Bahia: sedimentologia, estratigrafia e tectônica', href: 'https://rigeo.cprm.gov.br/jspui/bitstream/doc/147/1/tese_augusto_pedreira.pdf' },
        ],
      },
    },
    cta: {
      titulo: { antes: 'Noch', destaque: 'Fragen?' },
      texto: 'Melde dich — wir antworten mit der passenden Route für deine Gruppe.',
      whatsapp: 'Per WhatsApp schreiben',
      contato: 'Kontaktseite',
      contatoHref: '/de/kontakt',
    },
  },
};
