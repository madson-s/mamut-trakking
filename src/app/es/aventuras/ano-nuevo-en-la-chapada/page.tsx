import type { Metadata } from 'next';
import { ReveillonExperience } from '@/components/adventure/ReveillonExperience';
import { REVEILLON_CONTENT, REVEILLON_IMAGE } from '@/components/adventure/reveillon-content';

const CONTENT = REVEILLON_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: {
      pt: '/pt/aventuras/reveillon-na-chapada',
      en: '/en/adventures/new-years-eve-chapada',
      es: '/es/aventuras/ano-nuevo-en-la-chapada', fr: '/fr/aventures/reveillon-dans-la-chapada', nl: '/nl/avonturen/oudejaarsavond-in-de-chapada', de: '/de/abenteuer/silvester-in-der-chapada',
    },
  },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    images: [REVEILLON_IMAGE],
    type: 'article',
  },
};

export default function Page() {
  return <ReveillonExperience locale="es" />;
}
