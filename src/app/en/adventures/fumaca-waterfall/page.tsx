import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { FUMACA_ASSETS, FUMACA_CONTENT } from '@/components/adventure/fumaca-content';

const IMG = FUMACA_ASSETS.hero.src;
const CONTENT = FUMACA_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-da-fumaca', en: '/en/adventures/fumaca-waterfall', es: '/es/aventuras/cascada-da-fumaca' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function FumacaEnRoute() {
  return <DayTourExperience locale="en" content={FUMACA_CONTENT} assets={FUMACA_ASSETS} />;
}
