import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { StatsBar } from '@/components/home/StatsBar';
import { ManifestoSection } from '@/components/home/ManifestoSection';
import { PathsSection } from '@/components/home/PathsSection';
import { EntrelinhasBand } from '@/components/home/EntrelinhasBand';
import { GuidesSection } from '@/components/home/GuidesSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FinalCta } from '@/components/home/FinalCta';
import { HOME_CONTENT, HOME_HREFLANG } from '@/components/home/home-content';

const CONTENT = HOME_CONTENT.fr;

export const metadata: Metadata = {
  description: CONTENT.meta.description,
  alternates: { canonical: '/fr', languages: HOME_HREFLANG },
};

// Mesma composição da home em português — o idioma só troca o texto.
export default function FrHomePage() {
  return (
    <>
      <Hero locale="fr" />
      <StatsBar locale="fr" />
      <ManifestoSection locale="fr" />
      <PathsSection locale="fr" />
      <EntrelinhasBand overlap locale="fr" />
      <GuidesSection locale="fr" />
      <ReviewsSection locale="fr" />
      <FinalCta locale="fr" />
    </>
  );
}
