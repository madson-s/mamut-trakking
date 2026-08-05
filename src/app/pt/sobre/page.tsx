import type { Metadata } from 'next';
import { AboutCta } from '@/components/about/AboutCta';
import { AboutGuides } from '@/components/about/AboutGuides';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutReviews } from '@/components/about/AboutReviews';
import { AboutStory } from '@/components/about/AboutStory';
import { EntrelinhasBand } from '@/components/home/EntrelinhasBand';
import { StatsBar } from '@/components/home/StatsBar';

export const metadata: Metadata = {
  title: 'Sobre nós',
  description:
    'Conheça a história e os guias nativos da Mamut Trekking, formados pela Chapada Diamantina.',
  alternates: { canonical: '/pt/sobre' },
  openGraph: {
    title: 'Sobre a Mamut Trekking',
    description:
      'Sete guias nativos, formados pela Chapada. Juntos, cobrem o Parque Nacional inteiro.',
    url: '/pt/sobre',
    images: ['/img/about/hero-lencois.webp'],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBar />
      <AboutStory />
      <EntrelinhasBand />
      <AboutGuides />
      <AboutReviews />
      <AboutCta />
    </>
  );
}
