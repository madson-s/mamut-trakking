import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

/**
 * Manifesto do app, na convenção de arquivo do Next — o `<link rel="manifest">`
 * entra sozinho nas três raízes de idioma.
 *
 * As cores acompanham o tema escuro em que o site nasce (o `data-theme="dark"`
 * do layout raiz). O gerador sugeriu branco nos dois campos, o que faria a tela
 * de abertura piscar claro antes de carregar a página escura.
 *
 * Os ícones são declarados como `any` **e** `maskable`: só com `maskable`, os
 * contextos que não aplicam máscara desenham o ícone com folga demais.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Mamut',
    description: 'Operadora especializada em trekkings e aventuras na Chapada Diamantina, Bahia.',
    start_url: '/pt',
    display: 'standalone',
    background_color: '#1f1f1f',
    theme_color: '#1f1f1f',
    icons: [
      { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
