import localFont from 'next/font/local';

// Display: Mergo (usada em headings e Display/*). Só há um estilo disponível
// no handoff (Regular). O Figma marca todos os tamanhos como weight 400.
export const fontDisplay = localFont({
  src: [
    { path: '../../public/fonts/mergo/Mergo.ttf', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-mergo',
});

// Body: Brutal Milk No 2 (usada em Text/*). Handoff traz 9 pesos.
export const fontBody = localFont({
  src: [
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Thin.otf',       weight: '100', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Extralight.otf', weight: '200', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Light.otf',      weight: '300', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Regular.otf',    weight: '400', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Medium.otf',     weight: '500', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Semibold.otf',   weight: '600', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Bold.otf',       weight: '700', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Extrabold.otf',  weight: '800', style: 'normal' },
    { path: '../../public/fonts/brutal-milk-no-2/BrutalMilkNo2-Black.otf',      weight: '900', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-brutal',
});
