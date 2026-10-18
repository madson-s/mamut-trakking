import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PACOTE_3_ASSETS, PACOTE_3_CONTENT } from '@/components/adventure/pacotes-content';

const CONTENT = PACOTE_3_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: { pt: '/pt/aventuras/pacote-3-dias', en: '/en/adventures/package-3-days', es: '/es/aventuras/paquete-3-dias', fr: '/fr/aventures/forfait-3-jours' },
  },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [PACOTE_3_ASSETS.hero.src],
    type: 'article',
  },
};

export default function Page() {
  return <DayTourExperience locale="es" content={PACOTE_3_CONTENT} assets={PACOTE_3_ASSETS} />;
}
