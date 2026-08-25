import type { Metadata } from 'next';
import { AboutCta } from '@/components/about/AboutCta';
import { AboutGuides } from '@/components/about/AboutGuides';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutReviews } from '@/components/about/AboutReviews';
import { AboutStory } from '@/components/about/AboutStory';
import { ABOUT_CONTENT } from '@/components/about/about-content';
import { EntrelinhasBand } from '@/components/home/EntrelinhasBand';
import { StatsBar } from '@/components/home/StatsBar';

const CONTENT = ABOUT_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: { pt: '/pt/sobre', en: '/en/about', es: '/es/quienes-somos' },
  },
  openGraph: {
    title: CONTENT.meta.ogTitle,
    description: CONTENT.meta.ogDescription,
    url: CONTENT.meta.canonical,
    images: ['/img/about/hero-lencois.webp'],
  },
};

export default function QuienesSomosPage() {
  return (
    <>
      <AboutHero locale="es" />
      <StatsBar locale="es" />
      <AboutStory locale="es" />
      <EntrelinhasBand overlap locale="es" />
      <AboutGuides locale="es" />
      <AboutReviews locale="es" />
      <AboutCta locale="es" />
    </>
  );
}
