import type { Metadata } from 'next';
import { PatiExperience } from '@/components/adventure/PatiThreeDayExperience';
import { PATI4_ASSETS, PATI4_CONTENT } from '@/components/adventure/pati-4-content';
import { PATI4_FAQS } from '@/components/adventure/pati-4-content';

const CONTENT = PATI4_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/vale-do-pati-4-dias', en: '/en/adventures/pati-valley-4-days', es: '/es/aventuras/valle-del-pati-4-dias' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.ogDescription,
    images: [PATI4_ASSETS.ogImage],
    type: 'article',
  },
};

export default function Pati4EnRoute() {
  return (
    <PatiExperience
      content={CONTENT}
      assets={PATI4_ASSETS}
      faqs={PATI4_FAQS.en}
    />
  );
}
