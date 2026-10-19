import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { BURACAO_ASSETS, BURACAO_CONTENT } from '@/components/adventure/buracao-content';

const IMG = BURACAO_ASSETS.hero.src;
const CONTENT = BURACAO_CONTENT.de;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-buracao', en: '/en/adventures/buracao-waterfall', es: '/es/aventuras/cascada-do-buracao', fr: '/fr/aventures/cascade-du-buracao', nl: '/nl/avonturen/waterval-buracao', de: '/de/abenteuer/wasserfall-buracao' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function BuracaoDeRoute() {
  return <DayTourExperience locale="de" content={BURACAO_CONTENT} assets={BURACAO_ASSETS} />;
}
