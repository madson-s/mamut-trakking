import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { MOSQUITO_ASSETS, MOSQUITO_CONTENT } from '@/components/adventure/mosquito-content';

const CONTENT = MOSQUITO_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-mosquito', en: '/en/adventures/mosquito-waterfall', es: '/es/aventuras/cascada-del-mosquito' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [MOSQUITO_ASSETS.hero.src],
    type: 'article',
  },
};

export default function MosquitoRoute() {
  return <DayTourExperience locale="en" content={MOSQUITO_CONTENT} assets={MOSQUITO_ASSETS} />;
}
