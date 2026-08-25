import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { StatsBar } from '@/components/home/StatsBar';
import { ManifestoSection } from '@/components/home/ManifestoSection';
import { PathsSection } from '@/components/home/PathsSection';
import { EntrelinhasBand } from '@/components/home/EntrelinhasBand';
import { GuidesSection } from '@/components/home/GuidesSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FinalCta } from '@/components/home/FinalCta';
import { HOME_CONTENT } from '@/components/home/home-content';

const CONTENT = HOME_CONTENT.en;

export const metadata: Metadata = {
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/en',
    languages: { pt: '/pt', en: '/en', es: '/es' },
  },
};

// Mesma composição da home em português — o idioma só troca o texto.
export default function EnHomePage() {
  return (
    <>
      <Hero locale="en" />
      <StatsBar locale="en" />
      <ManifestoSection locale="en" />
      <PathsSection locale="en" />
      <EntrelinhasBand overlap locale="en" />
      <GuidesSection locale="en" />
      <ReviewsSection locale="en" />
      <FinalCta locale="en" />
    </>
  );
}
