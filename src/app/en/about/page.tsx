import type { Metadata } from 'next';
import { AboutCta } from '@/components/about/AboutCta';
import { AboutGuides } from '@/components/about/AboutGuides';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutReviews } from '@/components/about/AboutReviews';
import { AboutStory } from '@/components/about/AboutStory';
import { ABOUT_CONTENT } from '@/components/about/about-content';
import { EntrelinhasBand } from '@/components/home/EntrelinhasBand';
import { StatsBar } from '@/components/home/StatsBar';

const CONTENT = ABOUT_CONTENT.en;

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

export default function AboutPage() {
  return (
    <>
      <AboutHero locale="en" />
      <StatsBar locale="en" />
      <AboutStory locale="en" />
      <EntrelinhasBand overlap locale="en" />
      <AboutGuides locale="en" />
      <AboutReviews locale="en" />
      <AboutCta locale="en" />
    </>
  );
}
