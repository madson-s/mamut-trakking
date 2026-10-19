import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { CITY_TOUR_ASSETS, CITY_TOUR_CONTENT } from '@/components/adventure/city-tour-content';

const IMG = CITY_TOUR_ASSETS.hero.src;
const CONTENT = CITY_TOUR_CONTENT.fr;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/city-tour-em-lencois-ba', en: '/en/adventures/lencois-city-tour', es: '/es/aventuras/city-tour-lencois', fr: '/fr/aventures/visite-de-lencois', nl: '/nl/avonturen/stadstour-lencois' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function CityTourFrRoute() {
  return <DayTourExperience locale="fr" content={CITY_TOUR_CONTENT} assets={CITY_TOUR_ASSETS} />;
}
