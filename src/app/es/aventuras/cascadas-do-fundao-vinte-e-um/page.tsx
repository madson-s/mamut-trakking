import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { FUNDAO_ASSETS, FUNDAO_CONTENT } from '@/components/adventure/fundao-content';

const IMG = FUNDAO_ASSETS.hero.src;
const CONTENT = FUNDAO_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-do-fundao-vinte-e-um', en: '/en/adventures/fundao-vinte-e-um-waterfalls', es: '/es/aventuras/cascadas-do-fundao-vinte-e-um' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function FundaoEsRoute() {
  return <DayTourExperience locale="es" content={FUNDAO_CONTENT} assets={FUNDAO_ASSETS} />;
}
