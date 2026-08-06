import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { StatsBar } from '@/components/home/StatsBar';
import { ManifestoSection } from '@/components/home/ManifestoSection';
import { PathsSection } from '@/components/home/PathsSection';
import { EntrelinhasBand } from '@/components/home/EntrelinhasBand';
import { GuidesSection } from '@/components/home/GuidesSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FinalCta } from '@/components/home/FinalCta';

// Home PT — reformulada a partir do Figma (node 572:680, tema dark).
export const metadata: Metadata = {
  alternates: { canonical: '/pt', languages: { pt: '/pt', en: '/en', es: '/es' } },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ManifestoSection />
      <PathsSection />
      <EntrelinhasBand overlap />
      <GuidesSection />
      <ReviewsSection />
      <FinalCta />
    </>
  );
}
