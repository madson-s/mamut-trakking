import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PRATINHA_ASSETS, PRATINHA_CONTENT } from '@/components/adventure/pratinha-content';

const IMG = PRATINHA_ASSETS.hero.src;
const CONTENT = PRATINHA_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/fazenda-pratinha', en: '/en/adventures/pratinha-farm', es: '/es/aventuras/fazenda-pratinha' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function PratinhaEnRoute() {
  return <DayTourExperience locale="en" content={PRATINHA_CONTENT} assets={PRATINHA_ASSETS} />;
}
