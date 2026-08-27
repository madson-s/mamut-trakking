import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PATI_5_CAPAO_ASSETS, PATI_5_CAPAO_CONTENT } from '@/components/adventure/pati-5-capao-content';

const IMG = PATI_5_CAPAO_ASSETS.hero.src;
const CONTENT = PATI_5_CAPAO_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/vale-do-pati-5-dias-via-capao', en: '/en/adventures/pati-valley-5-days-capao-way', es: '/es/aventuras/valle-del-pati-5-dias-via-capao' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function Pati5CapaoPtRoute() {
  return <DayTourExperience locale="pt" content={PATI_5_CAPAO_CONTENT} assets={PATI_5_CAPAO_ASSETS} />;
}
