import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { SOSSEGO_ASSETS, SOSSEGO_CONTENT } from '@/components/adventure/sossego-content';

const IMG = SOSSEGO_ASSETS.hero.src;
const CONTENT = SOSSEGO_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-sossego', en: '/en/adventures/sossego-waterfall', es: '/es/aventuras/cascada-do-sossego' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function SossegoRoute() {
  return <DayTourExperience locale="pt" content={SOSSEGO_CONTENT} assets={SOSSEGO_ASSETS} />;
}
