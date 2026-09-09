import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { FUMACA_360_ASSETS, FUMACA_360_CONTENT } from '@/components/adventure/fumaca-360-content';

const IMG = FUMACA_360_ASSETS.hero.src;
const CONTENT = FUMACA_360_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-da-fumaca-360', en: '/en/adventures/fumaca-waterfall-360', es: '/es/aventuras/cascada-da-fumaca-360' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function Fumaca360PtRoute() {
  return <DayTourExperience locale="pt" content={FUMACA_360_CONTENT} assets={FUMACA_360_ASSETS} />;
}
