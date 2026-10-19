import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { HERCULANO_ASSETS, HERCULANO_CONTENT } from '@/components/adventure/herculano-content';

const IMG = HERCULANO_ASSETS.hero.src;
const CONTENT = HERCULANO_CONTENT.de;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-herculano', en: '/en/adventures/herculano-waterfall', es: '/es/aventuras/cascada-do-herculano', fr: '/fr/aventures/cascade-du-herculano', nl: '/nl/avonturen/waterval-herculano', de: '/de/abenteuer/wasserfall-herculano' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function HerculanoDeRoute() {
  return <DayTourExperience locale="de" content={HERCULANO_CONTENT} assets={HERCULANO_ASSETS} />;
}
