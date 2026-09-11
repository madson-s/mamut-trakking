import type { Metadata } from 'next';
import { ReveillonExperience } from '@/components/adventure/ReveillonExperience';
import { REVEILLON_META } from '@/components/adventure/reveillon-content';

export const metadata: Metadata = {
  title: REVEILLON_META.title,
  description: REVEILLON_META.description,
  alternates: {
    canonical: '/pt/aventuras/reveillon-na-chapada',
    languages: {
      pt: '/pt/aventuras/reveillon-na-chapada',
      en: '/en/adventures/new-years-eve-chapada',
      es: '/es/aventuras/ano-nuevo-en-la-chapada',
    },
  },
  openGraph: {
    title: REVEILLON_META.title,
    description: REVEILLON_META.description,
    images: [REVEILLON_META.image],
    type: 'article',
  },
};

export default function Page() {
  return <ReveillonExperience />;
}
