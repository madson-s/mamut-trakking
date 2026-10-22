import localFont from 'next/font/local';

// Display: Mergo (usada em headings e Display/*). Só há um estilo disponível
// no handoff (Regular). O Figma marca todos os tamanhos como weight 400.
export const fontDisplay = localFont({
  src: [
    { path: '../../public/fonts/mergo/Mergo.woff2', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-mergo',
});

// Body: Brutal Milk No 2 (usada em Text/*). O handoff traz 9 pesos, mas o site só
// usa 300/400/500/600 — e o next/font pré-carrega TODOS os pesos declarados em
// toda página, disputando banda com a imagem do hero (LCP). Em WOFF2 com subset
// latino (pt/en/es/fr/nl/de); os OTF originais seguem em public/fonts.
// Peso sem arquivo cai no mais próximo (ex.: <strong> em 700 renderiza o 600).
export const fontBody = localFont({
  src: [
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Light.woff2',    weight: '300', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Regular.woff2',  weight: '400', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Medium.woff2',   weight: '500', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Semibold.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-brutal',
});
