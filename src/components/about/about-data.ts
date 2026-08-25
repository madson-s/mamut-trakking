/**
 * Parte neutra dos guias: nome e fotos. Função e biografia — o texto — ficam
 * em `about-content.ts`, indexados pelo `id`.
 */

export type Guide = {
  id: string;
  name: string;
  photo: string;
  photoBw: string;
  position?: string;
};

export const GUIDES: Guide[] = [
  { id: 'marcelo-cabral', name: 'Marcelo Cabral', photo: '/img/about/guides/marcelo-cabral.webp', photoBw: '/img/about/guides/marcelo-cabral-bw.webp' },
  { id: 'felipe-ribeiro', name: 'Felipe Ribeiro', photo: '/img/about/guides/felipe-ribeiro.webp', photoBw: '/img/about/guides/felipe-ribeiro-bw.webp' },
  { id: 'salomao-andrade', name: 'Salomão Andrade', photo: '/img/about/guides/salomao-andrade.webp', photoBw: '/img/about/guides/salomao-andrade-bw.webp', position: '50% 72%' },
  { id: 'aman-duart', name: 'Aman Duart', photo: '/img/about/guides/aman-duart.webp', photoBw: '/img/about/guides/aman-duart-bw.webp' },
  { id: 'luiz-henrique', name: 'Luiz Henrique', photo: '/img/about/guides/luiz-henrique.webp', photoBw: '/img/about/guides/luiz-henrique-bw.webp' },
  { id: 'rodolfo-anjos', name: 'Rodolfo Anjos', photo: '/img/about/guides/rodolfo-anjos.webp', photoBw: '/img/about/guides/rodolfo-anjos-bw.webp' },
  { id: 'jair-dalcin', name: 'Jair Dalcin', photo: '/img/about/guides/jair-dalcin.webp', photoBw: '/img/about/guides/jair-dalcin-bw.webp' },
];
