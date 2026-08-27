import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { MIRANTE_PATI_ASSETS, MIRANTE_PATI_CONTENT } from '@/components/adventure/mirante-pati-content';

const IMG = MIRANTE_PATI_ASSETS.hero.src;
const CONTENT = MIRANTE_PATI_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/mirante-do-pati', en: '/en/adventures/pati-viewpoint-1-day', es: '/es/aventuras/mirador-del-pati' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function MirantePatiEnRoute() {
  return <DayTourExperience locale="en" content={MIRANTE_PATI_CONTENT} assets={MIRANTE_PATI_ASSETS} />;
}
