import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PALMITAL_ASSETS, PALMITAL_CONTENT } from '@/components/adventure/palmital-content';

const IMG = PALMITAL_ASSETS.hero.src;
const CONTENT = PALMITAL_CONTENT.fr;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-palmital', en: '/en/adventures/palmital-waterfall', es: '/es/aventuras/cascada-del-palmital', fr: '/fr/aventures/cascade-du-palmital', nl: '/nl/avonturen/waterval-palmital', de: '/de/abenteuer/wasserfall-palmital' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function PalmitalFrRoute() {
  return <DayTourExperience locale="fr" content={PALMITAL_CONTENT} assets={PALMITAL_ASSETS} />;
}
