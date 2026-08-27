import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { MARIMBUS_ASSETS, MARIMBUS_CONTENT } from '@/components/adventure/marimbus-content';

const IMG = MARIMBUS_ASSETS.hero.src;
const CONTENT = MARIMBUS_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/pantanal-marimbus', en: '/en/adventures/marimbus-swamp', es: '/es/aventuras/pantanal-marimbus' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function MarimbusEsRoute() {
  return <DayTourExperience locale="es" content={MARIMBUS_CONTENT} assets={MARIMBUS_ASSETS} />;
}
