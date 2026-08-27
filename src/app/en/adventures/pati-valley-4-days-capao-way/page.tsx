import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PATI_4_CAPAO_ASSETS, PATI_4_CAPAO_CONTENT } from '@/components/adventure/pati-4-capao-content';

const IMG = PATI_4_CAPAO_ASSETS.hero.src;
const CONTENT = PATI_4_CAPAO_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/vale-do-pati-4-dias-via-capao', en: '/en/adventures/pati-valley-4-days-capao-way', es: '/es/aventuras/valle-del-pati-4-dias-via-capao' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function Pati4CapaoEnRoute() {
  return <DayTourExperience locale="en" content={PATI_4_CAPAO_CONTENT} assets={PATI_4_CAPAO_ASSETS} />;
}
