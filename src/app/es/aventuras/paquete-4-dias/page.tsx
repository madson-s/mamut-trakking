import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PACOTE_4_ASSETS, PACOTE_4_CONTENT } from '@/components/adventure/pacotes-content';

const CONTENT = PACOTE_4_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: { pt: '/pt/aventuras/pacote-4-dias', en: '/en/adventures/package-4-days', es: '/es/aventuras/paquete-4-dias', fr: '/fr/aventures/forfait-4-jours', nl: '/nl/avonturen/pakket-4-dagen', de: '/de/abenteuer/paket-4-tage' },
  },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [PACOTE_4_ASSETS.hero.src],
    type: 'article',
  },
};

export default function Page() {
  return <DayTourExperience locale="es" content={PACOTE_4_CONTENT} assets={PACOTE_4_ASSETS} />;
}
