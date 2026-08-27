import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { FERRADURA_ASSETS, FERRADURA_CONTENT } from '@/components/adventure/ferradura-content';

const IMG = FERRADURA_ASSETS.hero.src;
const CONTENT = FERRADURA_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-da-ferradura', en: '/en/adventures/ferradura-waterfall', es: '/es/aventuras/cascada-da-ferradura' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function FerraduraEsRoute() {
  return <DayTourExperience locale="es" content={FERRADURA_CONTENT} assets={FERRADURA_ASSETS} />;
}
