import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { BURACAO_ASSETS, BURACAO_CONTENT } from '@/components/adventure/buracao-content';

const IMG = BURACAO_ASSETS.hero.src;
const CONTENT = BURACAO_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-buracao', en: '/en/adventures/buracao-waterfall', es: '/es/aventuras/cascada-do-buracao' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function BuracaoEnRoute() {
  return <DayTourExperience locale="en" content={BURACAO_CONTENT} assets={BURACAO_ASSETS} />;
}
