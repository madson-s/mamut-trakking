import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { FUMACA_BAIXO_ASSETS, FUMACA_BAIXO_CONTENT } from '@/components/adventure/fumaca-baixo-content';

const IMG = FUMACA_BAIXO_ASSETS.hero.src;
const CONTENT = FUMACA_BAIXO_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/cachoeira-da-fumaca-por-baixo', en: '/en/adventures/fumaca-waterfall-from-bellow', es: '/es/aventuras/cascada-da-fumaca-por-abajo' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function FumacaBaixoPtRoute() {
  return <DayTourExperience locale="pt" content={FUMACA_BAIXO_CONTENT} assets={FUMACA_BAIXO_ASSETS} />;
}
