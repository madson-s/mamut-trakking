import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { MIXILA_ASSETS, MIXILA_CONTENT } from '@/components/adventure/mixila-content';

const IMG = MIXILA_ASSETS.hero.src;
const CONTENT = MIXILA_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-mixila', en: '/en/adventures/mixila-waterfall', es: '/es/aventuras/cascada-del-mixila' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function MixilaEsRoute() {
  return <DayTourExperience locale="es" content={MIXILA_CONTENT} assets={MIXILA_ASSETS} />;
}
