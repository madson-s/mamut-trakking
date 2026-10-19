import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { SOSSEGO_ASSETS, SOSSEGO_CONTENT } from '@/components/adventure/sossego-content';

const IMG = SOSSEGO_ASSETS.hero.src;
const CONTENT = SOSSEGO_CONTENT.nl;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-sossego', en: '/en/adventures/sossego-waterfall', es: '/es/aventuras/cascada-do-sossego', fr: '/fr/aventures/cascade-du-sossego', nl: '/nl/avonturen/waterval-sossego' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function SossegoRoute() {
  return <DayTourExperience locale="nl" content={SOSSEGO_CONTENT} assets={SOSSEGO_ASSETS} />;
}
