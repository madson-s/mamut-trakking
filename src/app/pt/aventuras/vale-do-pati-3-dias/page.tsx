import type { Metadata, Viewport } from 'next';
import { PatiThreeDayExperience } from '@/components/adventure/PatiThreeDayExperience';

const IMG = '/img/vale-do-pati/vale-do-pati-04.webp';

export const metadata: Metadata = {
  title: 'Vale do Pati em 3 Dias',
  description:
    'Travessia guiada de 45 km pelo Vale do Pati, com hospedagem em casas de nativos, cachoeiras e os mirantes mais emblemáticos do vale.',
  alternates: {
    canonical: '/pt/aventuras/vale-do-pati-3-dias',
    languages: {
      pt: '/pt/aventuras/vale-do-pati-3-dias',
      en: '/en/adventures/pati-valley-3-days',
      es: '/es/aventuras/valle-del-pati-3-dias',
    },
  },
  openGraph: {
    title: 'Vale do Pati em 3 Dias',
    description: 'A travessia que reorganiza o que você chama de natureza.',
    images: [IMG],
    type: 'article',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function Page() {
  return <PatiThreeDayExperience />;
}
