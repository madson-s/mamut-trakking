import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { MOSQUITO_PAI_INACIO_ASSETS, MOSQUITO_PAI_INACIO_CONTENT } from '@/components/adventure/mosquito-pai-inacio-content';

const IMG = MOSQUITO_PAI_INACIO_ASSETS.hero.src;
const CONTENT = MOSQUITO_PAI_INACIO_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-mosquito-morro-do-pai-inacio', en: '/en/adventures/mosquito-waterfall-pai-inacio', es: '/es/aventuras/cascada-del-mosquito-morro-do-pai-inacio' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function MosquitoPaiInacioEnRoute() {
  return <DayTourExperience locale="en" content={MOSQUITO_PAI_INACIO_CONTENT} assets={MOSQUITO_PAI_INACIO_ASSETS} />;
}
