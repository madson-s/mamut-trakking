import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { FUNDAO_ASSETS, FUNDAO_CONTENT } from '@/components/adventure/fundao-content';

const IMG = FUNDAO_ASSETS.hero.src;
const CONTENT = FUNDAO_CONTENT.fr;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-fundao-vinte-e-um', en: '/en/adventures/fundao-vinte-e-um-waterfalls', es: '/es/aventuras/cascadas-do-fundao-vinte-e-um', fr: '/fr/aventures/cascades-du-fundao-vinte-e-um', nl: '/nl/avonturen/watervallen-fundao-vinte-e-um', de: '/de/abenteuer/wasserfaelle-fundao-vinte-e-um' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function FundaoFrRoute() {
  return <DayTourExperience locale="fr" content={FUNDAO_CONTENT} assets={FUNDAO_ASSETS} />;
}
