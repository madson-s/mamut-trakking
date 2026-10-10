import type { Metadata } from 'next';
import { TorusFestivalExperience } from '@/components/torus/TorusFestivalExperience';

export const metadata: Metadata = {
  title: 'Torus Festival Chapada Diamantina 2026',
  description:
    'Transfer privado saindo de Salvador e pacote com passeios para o Torus Festival em Iramaia, na Chapada Diamantina.',
  alternates: {
    canonical: '/pt/torus-festival-chapada-diamantina-2026',
  },
  openGraph: {
    title: 'Torus Festival Chapada Diamantina 2026',
    description:
      'Escolha seu pacote para o Torus Festival: transfer privado ou transfer com passeios pela Chapada Diamantina.',
    images: ['/img/torus/torus-flyers.avif'],
    type: 'article',
  },
};

export default function TorusFestivalPage() {
  return <TorusFestivalExperience />;
}
