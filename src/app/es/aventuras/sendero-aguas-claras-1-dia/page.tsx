import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { AGUAS_CLARAS_1D_ASSETS, AGUAS_CLARAS_1D_CONTENT } from '@/components/adventure/aguas-claras-1d-content';

const IMG = AGUAS_CLARAS_1D_ASSETS.hero.src;
const CONTENT = AGUAS_CLARAS_1D_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/trilha-aguas-claras-1-dia', en: '/en/adventures/aguas-claras-trail-1-day', es: '/es/aventuras/sendero-aguas-claras-1-dia' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function AguasClaras1dEsRoute() {
  return <DayTourExperience locale="es" content={AGUAS_CLARAS_1D_CONTENT} assets={AGUAS_CLARAS_1D_ASSETS} />;
}
