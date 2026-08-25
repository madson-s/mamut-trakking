import type { Metadata, Viewport } from 'next';
import { PatiThreeDayExperience } from '@/components/adventure/PatiThreeDayExperience';
import { PATI3_CONTENT } from '@/components/adventure/pati-3-content';

const IMG = '/img/vale-do-pati/vale-do-pati-04.webp';
const CONTENT = PATI3_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: {
      pt: '/pt/aventuras/vale-do-pati-3-dias',
      en: '/en/adventures/pati-valley-3-days',
      es: '/es/aventuras/valle-del-pati-3-dias'
    },
  },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.ogDescription,
    images: [IMG],
    type: 'article',
  },
};

export const viewport: Viewport = { themeColor: '#1f1f1f' };

export default function VallePati3Route() {
  return <PatiThreeDayExperience locale="es" />;
}
