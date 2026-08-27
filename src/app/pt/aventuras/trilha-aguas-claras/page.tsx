import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { AGUAS_CLARAS_ASSETS, AGUAS_CLARAS_CONTENT } from '@/components/adventure/aguas-claras-content';

const IMG = AGUAS_CLARAS_ASSETS.hero.src;
const CONTENT = AGUAS_CLARAS_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/trilha-aguas-claras', en: '/en/adventures/aguas-claras-trail', es: '/es/aventuras/sendero-aguas-claras' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function AguasClarasPtRoute() {
  return <DayTourExperience locale="pt" content={AGUAS_CLARAS_CONTENT} assets={AGUAS_CLARAS_ASSETS} />;
}
