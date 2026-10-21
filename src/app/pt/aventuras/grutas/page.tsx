import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { GRUTAS_ASSETS, GRUTAS_CONTENT } from '@/components/adventure/grutas-content';

// O bloco de próximas saídas vem do calendário; como ele, regera a cada hora
// para uma saída que já começou não seguir anunciada.
export const revalidate = 3600;

const IMG = GRUTAS_ASSETS.hero.src;
const CONTENT = GRUTAS_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/grutas', en: '/en/adventures/caves-tour', es: '/es/aventuras/grutas', fr: '/fr/aventures/grottes', nl: '/nl/avonturen/grotten', de: '/de/abenteuer/hoehlen' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function GrutasPtRoute() {
  return <DayTourExperience locale="pt" content={GRUTAS_CONTENT} assets={GRUTAS_ASSETS} />;
}
