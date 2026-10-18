import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { PACOTE_6_ASSETS, PACOTE_6_CONTENT } from '@/components/adventure/pacotes-content';

const CONTENT = PACOTE_6_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: { pt: '/pt/aventuras/pacote-6-dias', en: '/en/adventures/package-6-days', es: '/es/aventuras/paquete-6-dias', fr: '/fr/aventures/forfait-6-jours' },
  },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [PACOTE_6_ASSETS.hero.src],
    type: 'article',
  },
};

export default function Page() {
  return <DayTourExperience locale="pt" content={PACOTE_6_CONTENT} assets={PACOTE_6_ASSETS} />;
}
