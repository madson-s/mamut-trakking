import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 404 global (app/global-not-found.tsx): sem app/layout.tsx não há layout
  // comum de onde compor um not-found.js — cada idioma é uma raiz própria.
  experimental: { globalNotFound: true },

  // Nenhuma imagem vem mais do WordPress (as duas últimas foram para public/),
  // então não há origem remota liberada.
  images: {
    qualities: [75, 92],
  },

  // Porta fechada (ver src/lib/indexing.ts): enquanto SITE_INDEXABLE não for
  // "true", toda resposta leva noindex — inclusive PDFs e imagens, que não têm
  // meta tag. É o mesmo valor que os layouts usam, lido no build.
  async headers() {
    if (process.env.SITE_INDEXABLE === 'true') return [];
    return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },

  // Não há página em "/". Cada idioma é uma pasta estática (pt/en/es), então
  // a raiz apenas redireciona para o idioma padrão.
  async redirects() {
    return [{ source: '/', destination: '/pt', permanent: false }];
  },
};

export default nextConfig;
