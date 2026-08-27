import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { RIBEIRAO_ASSETS, RIBEIRAO_CONTENT } from '@/components/adventure/ribeirao-content';

const IMG = RIBEIRAO_ASSETS.hero.src;
const CONTENT = RIBEIRAO_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/ribeirao-do-meio', en: '/en/adventures/ribeirao-do-meio-natural-pool', es: '/es/aventuras/ribeirao-do-meio' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function RibeiraoEnRoute() {
  return <DayTourExperience locale="en" content={RIBEIRAO_CONTENT} assets={RIBEIRAO_ASSETS} />;
}
