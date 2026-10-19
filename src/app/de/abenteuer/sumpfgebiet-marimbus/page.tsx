import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { MARIMBUS_ASSETS, MARIMBUS_CONTENT } from '@/components/adventure/marimbus-content';

const IMG = MARIMBUS_ASSETS.hero.src;
const CONTENT = MARIMBUS_CONTENT.de;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/pantanal-marimbus', en: '/en/adventures/marimbus-swamp', es: '/es/aventuras/pantanal-marimbus', fr: '/fr/aventures/marais-de-marimbus', nl: '/nl/avonturen/moeras-van-marimbus', de: '/de/abenteuer/sumpfgebiet-marimbus' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function MarimbusDeRoute() {
  return <DayTourExperience locale="de" content={MARIMBUS_CONTENT} assets={MARIMBUS_ASSETS} />;
}
