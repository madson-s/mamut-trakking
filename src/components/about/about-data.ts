export type Guide = {
  name: string;
  role: string;
  photo: string;
  photoBw: string;
  bio: string;
  position?: string;
};

export const GUIDES: Guide[] = [
  {
    name: 'Marcelo Cabral',
    role: 'Guia & Fundador',
    photo: '/img/about/guides/marcelo-cabral.webp',
    photoBw: '/img/about/guides/marcelo-cabral-bw.webp',
    bio: '13 anos em Lençóis. Cuida da operação inteira — do primeiro contato ao último passo na trilha. Introduz a Chapada a brasileiros e estrangeiros com a mesma autoridade de quem escolheu essa terra para chamar de lar.',
  },
  {
    name: 'Felipe Ribeiro',
    role: 'PT · EN',
    photo: '/img/about/guides/felipe-ribeiro.webp',
    photoBw: '/img/about/guides/felipe-ribeiro-bw.webp',
    bio: 'Nascido em Salvador, criado em Lençóis desde a infância. Conhece a grande maioria das trilhas ao redor do Parque Nacional. Lembrado pela simpatia e pelas habilidades na cozinha. Desenha as rotas e operações de cada grupo e conduz em inglês.',
  },
  {
    name: 'Salomão Andrade',
    role: 'Brigadista',
    photo: '/img/about/guides/salomao-andrade.webp',
    photoBw: '/img/about/guides/salomao-andrade-bw.webp',
    bio: 'Nascido e criado na Chapada, especialista nos trekkings selvagens do Parque Nacional. Conduz o público estrangeiro.',
    position: '50% 72%',
  },
  {
    name: 'Aman Duart',
    role: 'Bombeiro civil',
    photo: '/img/about/guides/aman-duart.webp',
    photoBw: '/img/about/guides/aman-duart-bw.webp',
    bio: 'Neto de garimpeiros e nativo de Lençóis. Possui vasto conhecimento sobre as plantas medicinais da Chapada Diamantina, formação como bombeiro civil e ótima companhia para qualquer passeio.',
  },
  {
    name: 'Luiz Henrique',
    role: 'Certificação WFA',
    photo: '/img/about/guides/luiz-henrique.webp',
    photoBw: '/img/about/guides/luiz-henrique-bw.webp',
    bio: 'Nascido e criado na Chapada, com disposição infinita para subir a serra. Domina os trekkings mais tradicionais no entorno do Parque. Escalador amador e estudante de Análise e Desenvolvimento de Sistemas.',
  },
  {
    name: 'Rodolfo Anjos',
    role: 'Brigadista',
    photo: '/img/about/guides/rodolfo-anjos.webp',
    photoBw: '/img/about/guides/rodolfo-anjos-bw.webp',
    bio: 'Nascido em Lençóis, mentor do time. Condutor de turismo com vasta experiência e ótimo motorista, com enorme bagagem sobre a Chapada. Guia em francês.',
  },
  {
    name: 'Jair Dalcin',
    role: 'Principal motorista',
    photo: '/img/about/guides/jair-dalcin.webp',
    photoBw: '/img/about/guides/jair-dalcin-bw.webp',
    bio: 'Integrante mais recente e “pai” do time. Nascido no Paraná, morador de Lençóis há mais de 15 anos. Conduz sempre com bom humor e simpatia.',
  },
];
