import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PAI_INACIO_ASSETS, PAI_INACIO_CONTENT } from '@/components/adventure/pai-inacio-content';

const IMG = '/img/adventures/pai-inacio/2-1.jpeg';
const CONTENT = PAI_INACIO_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/morro-do-pai-inacio', en: '/en/adventures/pai-inacio-hill', es: '/es/aventuras/morro-do-pai-inacio' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function PaiInacioRoute() {
  return <DayTourExperience locale="en" content={PAI_INACIO_CONTENT} assets={PAI_INACIO_ASSETS} />;
}
