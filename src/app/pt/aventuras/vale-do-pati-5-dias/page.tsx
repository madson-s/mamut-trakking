import type { Metadata } from 'next';
import { PatiExperience } from '@/components/adventure/PatiThreeDayExperience';
import { PATI5_ASSETS, PATI5_CONTENT } from '@/components/adventure/pati-5-content';
import { PATI5_FAQS } from '@/components/adventure/pati-5-content';

const CONTENT = PATI5_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/vale-do-pati-5-dias', en: '/en/adventures/pati-valley-5-days', es: '/es/aventuras/valle-del-pati-5-dias' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.ogDescription,
    images: [PATI5_ASSETS.ogImage],
    type: 'article',
  },
};

export default function Pati5PtRoute() {
  return (
    <PatiExperience
      content={CONTENT}
      assets={PATI5_ASSETS}
      faqs={PATI5_FAQS.pt}
    />
  );
}
