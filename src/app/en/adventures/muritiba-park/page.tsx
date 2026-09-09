import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { MURITIBA_ASSETS, MURITIBA_CONTENT } from '@/components/adventure/muritiba-content';

const IMG = MURITIBA_ASSETS.hero.src;
const CONTENT = MURITIBA_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/parque-da-muritiba', en: '/en/adventures/muritiba-park', es: '/es/aventuras/parque-da-muritiba' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function MuritibaEnRoute() {
  return <DayTourExperience locale="en" content={MURITIBA_CONTENT} assets={MURITIBA_ASSETS} />;
}
