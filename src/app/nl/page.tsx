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

const CONTENT = HOME_CONTENT.nl;

export const metadata: Metadata = {
  description: CONTENT.meta.description,
  alternates: { canonical: '/nl', languages: HOME_HREFLANG },
};

// Mesma composição da home em português — o idioma só troca o texto.
export default function NlHomePage() {
  return (
    <>
      <Hero locale="nl" />
      <StatsBar locale="nl" />
      <ManifestoSection locale="nl" />
      <PathsSection locale="nl" />
      <EntrelinhasBand overlap locale="nl" />
      <GuidesSection locale="nl" />
      <ReviewsSection locale="nl" />
      <FinalCta locale="nl" />
    </>
  );
}
