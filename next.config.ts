import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Imagens ainda vêm do WordPress atual enquanto o conteúdo é migrado.
  images: { remotePatterns: [{ protocol: 'https', hostname: 'mamut.agency' }] },

  // Não há página em "/". Cada idioma é uma pasta estática (pt/en/es), então
  // a raiz apenas redireciona para o idioma padrão.
  async redirects() {
    return [{ source: '/', destination: '/pt', permanent: false }];
  },
};

export default nextConfig;
