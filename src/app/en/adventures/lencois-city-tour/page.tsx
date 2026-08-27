import type { Metadata } from 'next';
import { DayTourExperience } from '@/components/adventure/DayTourExperience';
import { CITY_TOUR_ASSETS, CITY_TOUR_CONTENT } from '@/components/adventure/city-tour-content';

const IMG = CITY_TOUR_ASSETS.hero.src;
const CONTENT = CITY_TOUR_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/aventuras/city-tour-lencois', en: '/en/adventures/lencois-city-tour', es: '/es/aventuras/city-tour-lencois' } },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [IMG],
    type: 'article',
  },
};

export default function CityTourEnRoute() {
  return <DayTourExperience locale="en" content={CITY_TOUR_CONTENT} assets={CITY_TOUR_ASSETS} />;
}
