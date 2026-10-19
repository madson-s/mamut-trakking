import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { CACHOEIRAO_ASSETS, CACHOEIRAO_CONTENT } from '@/components/adventure/cachoeirao-content';

const IMG = CACHOEIRAO_ASSETS.hero.src;
const CONTENT = CACHOEIRAO_CONTENT.nl;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/mirante-do-cachoeirao', en: '/en/adventures/cachoeirao-viewpoint', es: '/es/aventuras/mirador-do-cachoeirao', fr: '/fr/aventures/belvedere-du-cachoeirao', nl: '/nl/avonturen/uitzichtpunt-cachoeirao', de: '/de/abenteuer/aussichtspunkt-cachoeirao' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function CachoeiraoNlRoute() {
  return <DayTourExperience locale="nl" content={CACHOEIRAO_CONTENT} assets={CACHOEIRAO_ASSETS} />;
}
