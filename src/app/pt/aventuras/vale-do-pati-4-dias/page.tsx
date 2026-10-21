import type { Metadata } from 'next';
import { PatiExperience } from '@/components/adventure/PatiThreeDayExperience';
import { PATI4_ASSETS, PATI4_CONTENT } from '@/components/adventure/pati-4-content';
import { PATI4_FAQS } from '@/components/adventure/pati-4-content';

// O bloco de próximas saídas vem do calendário; como ele, regera a cada hora
// para uma saída que já começou não seguir anunciada.
export const revalidate = 3600;

const CONTENT = PATI4_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/vale-do-pati-4-dias', en: '/en/adventures/pati-valley-4-days', es: '/es/aventuras/valle-del-pati-4-dias', fr: '/fr/aventures/vallee-du-pati-4-jours', nl: '/nl/avonturen/pati-vallei-4-dagen', de: '/de/abenteuer/pati-tal-4-tage' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.ogDescription,
    images: [PATI4_ASSETS.ogImage],
    type: 'article',
  },
};

export default function Pati4PtRoute() {
  return (
    <PatiExperience
      locale="pt"
      content={CONTENT}
      assets={PATI4_ASSETS}
      faqs={PATI4_FAQS.pt}
    />
  );
}
