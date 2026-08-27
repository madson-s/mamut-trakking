import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { CACHOEIRAO_ASSETS, CACHOEIRAO_CONTENT } from '@/components/adventure/cachoeirao-content';

const IMG = CACHOEIRAO_ASSETS.hero.src;
const CONTENT = CACHOEIRAO_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/mirante-do-cachoeirao', en: '/en/adventures/cachoeirao-viewpoint', es: '/es/aventuras/mirador-do-cachoeirao' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function CachoeiraoEsRoute() {
  return <DayTourExperience locale="es" content={CACHOEIRAO_CONTENT} assets={CACHOEIRAO_ASSETS} />;
}
