import type { Metadata, Viewport } from 'next';
import { TransferExperience } from '@/components/transfer/TransferExperience';

const TITLE = 'Transfer na Chapada Diamantina';
const DESCRIPTION =
  'Transfer privativo ou compartilhado entre Lençóis, Chapada Diamantina, Salvador e região, com opção de aventura guiada no caminho.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/pt/transfer' },
  // Fora do menu e do sitemap por enquanto: página acessível só por link direto.
  robots: { index: false, follow: true },
  openGraph: {
    title: `${TITLE} · Mamut Trekking`,
    description: DESCRIPTION,
    type: 'website',
    images: ['/img/transfer/jeep-road.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1c1c' },
  ],
};

export default function TransferPage() {
  return <TransferExperience />;
}
