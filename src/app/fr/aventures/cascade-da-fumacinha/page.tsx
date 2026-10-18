import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { FUMACINHA_ASSETS, FUMACINHA_CONTENT } from '@/components/adventure/fumacinha-content';

const IMG = FUMACINHA_ASSETS.hero.src;
const CONTENT = FUMACINHA_CONTENT.fr;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-da-fumacinha', en: '/en/adventures/fumacinha-waterfall', es: '/es/aventuras/cascada-da-fumacinha', fr: '/fr/aventures/cascade-da-fumacinha' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function FumacinhaFrRoute() {
  return <DayTourExperience locale="fr" content={FUMACINHA_CONTENT} assets={FUMACINHA_ASSETS} />;
}
