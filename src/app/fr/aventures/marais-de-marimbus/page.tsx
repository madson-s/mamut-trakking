import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { MARIMBUS_ASSETS, MARIMBUS_CONTENT } from '@/components/adventure/marimbus-content';

const IMG = MARIMBUS_ASSETS.hero.src;
const CONTENT = MARIMBUS_CONTENT.fr;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/pantanal-marimbus', en: '/en/adventures/marimbus-swamp', es: '/es/aventuras/pantanal-marimbus', fr: '/fr/aventures/marais-de-marimbus' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function MarimbusFrRoute() {
  return <DayTourExperience locale="fr" content={MARIMBUS_CONTENT} assets={MARIMBUS_ASSETS} />;
}
