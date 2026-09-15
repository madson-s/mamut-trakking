import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PRATINHA_ASSETS, PRATINHA_CONTENT } from '@/components/adventure/pratinha-content';

const IMG = PRATINHA_ASSETS.hero.src;
const CONTENT = PRATINHA_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/fazenda-pratinha', en: '/en/adventures/pratinha-farm-blue-cave', es: '/es/aventuras/fazenda-pratinha' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function PratinhaEsRoute() {
  return <DayTourExperience locale="es" content={PRATINHA_CONTENT} assets={PRATINHA_ASSETS} />;
}
