import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PALMITAL_ASSETS, PALMITAL_CONTENT } from '@/components/adventure/palmital-content';

const IMG = PALMITAL_ASSETS.hero.src;
const CONTENT = PALMITAL_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-palmital', en: '/en/adventures/palmital-waterfall', es: '/es/aventuras/cascada-del-palmital' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function PalmitalEnRoute() {
  return <DayTourExperience locale="en" content={PALMITAL_CONTENT} assets={PALMITAL_ASSETS} />;
}
