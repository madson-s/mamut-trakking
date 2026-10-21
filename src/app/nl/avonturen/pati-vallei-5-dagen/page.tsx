import type { Metadata } from 'next';
import { PatiExperience } from '@/components/adventure/PatiThreeDayExperience';
import { PATI5_ASSETS, PATI5_CONTENT } from '@/components/adventure/pati-5-content';
import { PATI5_FAQS } from '@/components/adventure/pati-5-content';

// O bloco de próximas saídas vem do calendário; como ele, regera a cada hora
// para uma saída que já começou não seguir anunciada.
export const revalidate = 3600;

const CONTENT = PATI5_CONTENT.nl;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/vale-do-pati-05-dias', en: '/en/adventures/pati-valley-5-days', es: '/es/aventuras/valle-del-pati-5-dias', fr: '/fr/aventures/vallee-du-pati-5-jours', nl: '/nl/avonturen/pati-vallei-5-dagen', de: '/de/abenteuer/pati-tal-5-tage' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.ogDescription,
    images: [PATI5_ASSETS.ogImage],
    type: 'article',
  },
};

export default function Pati5NlRoute() {
  return (
    <PatiExperience
      locale="nl"
      content={CONTENT}
      assets={PATI5_ASSETS}
      faqs={PATI5_FAQS.nl}
    />
  );
}
