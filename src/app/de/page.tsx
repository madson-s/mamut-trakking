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

const CONTENT = HOME_CONTENT.de;

export const metadata: Metadata = {
  description: CONTENT.meta.description,
  alternates: { canonical: '/de', languages: HOME_HREFLANG },
};

// Mesma composição da home em português — o idioma só troca o texto.
export default function DeHomePage() {
  return (
    <>
      <Hero locale="de" />
      <StatsBar locale="de" />
      <ManifestoSection locale="de" />
      <PathsSection locale="de" />
      <EntrelinhasBand overlap locale="de" />
      <GuidesSection locale="de" />
      <ReviewsSection locale="de" />
      <FinalCta locale="de" />
    </>
  );
}
