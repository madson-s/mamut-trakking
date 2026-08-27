import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { GRUTAS_ASSETS, GRUTAS_CONTENT } from '@/components/adventure/grutas-content';

const IMG = GRUTAS_ASSETS.hero.src;
const CONTENT = GRUTAS_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/grutas', en: '/en/adventures/caves-tour', es: '/es/aventuras/grutas' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function GrutasEnRoute() {
  return <DayTourExperience locale="en" content={GRUTAS_CONTENT} assets={GRUTAS_ASSETS} />;
}
