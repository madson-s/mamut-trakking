import type { Metadata } from 'next';
import { AboutCta } from '@/components/about/AboutCta';
import { StatsBar } from '@/components/home/StatsBar';
import { ManifestoCreed } from '@/components/manifesto/ManifestoCreed';
import { ManifestoHero } from '@/components/manifesto/ManifestoHero';

export const metadata: Metadata = {
  title: 'Manifesto',
  description:
    'Somos mais do que uma agência de ecoturismo. Somos defensores da Serra do Sincorá, das tradições locais e dos nossos ancestrais.',
  alternates: { canonical: '/pt/manifesto' },
  openGraph: {
    title: 'Manifesto da Mamut Trekking',
    description:
      'Nascemos para caminhar e caminhamos para viver, honrando a teia da vida que une todos no Universo.',
    url: '/pt/manifesto',
    images: ['/img/session-02_saqure-text_no-crop.webp'],
  },
};

// Sequência enxuta a partir de /pt/sobre: hero baixo → faixa de números → o
// manifesto de mamut.agency/manifesto na íntegra → CTA.
export default function ManifestoPage() {
  return (
    <>
      <ManifestoHero />
      <StatsBar />
      <ManifestoCreed />
      <AboutCta />
    </>
  );
}
