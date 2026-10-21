import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { FUMACA_BAIXO_ASSETS, FUMACA_BAIXO_CONTENT } from '@/components/adventure/fumaca-baixo-content';

// O bloco de próximas saídas vem do calendário; como ele, regera a cada hora
// para uma saída que já começou não seguir anunciada.
export const revalidate = 3600;

const IMG = FUMACA_BAIXO_ASSETS.hero.src;
const CONTENT = FUMACA_BAIXO_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-da-fumaca-por-baixo', en: '/en/adventures/fumaca-waterfall-from-bellow', es: '/es/aventuras/cascada-da-fumaca-por-abajo', fr: '/fr/aventures/cascade-da-fumaca-par-le-bas', nl: '/nl/avonturen/waterval-fumaca-van-onderen', de: '/de/abenteuer/wasserfall-fumaca-von-unten' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function FumacaBaixoEsRoute() {
  return <DayTourExperience locale="es" content={FUMACA_BAIXO_CONTENT} assets={FUMACA_BAIXO_ASSETS} />;
}
