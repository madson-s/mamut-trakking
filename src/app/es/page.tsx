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

const CONTENT = HOME_CONTENT.es;

export const metadata: Metadata = {
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/es',
    languages: { pt: '/pt', en: '/en', es: '/es' },
  },
};

// Mesma composição da home em português — o idioma só troca o texto.
export default function EsHomePage() {
  return (
    <>
      <Hero locale="es" />
      <StatsBar locale="es" />
      <ManifestoSection locale="es" />
      <PathsSection locale="es" />
      <EntrelinhasBand overlap locale="es" />
      <GuidesSection locale="es" />
      <ReviewsSection locale="es" />
      <FinalCta locale="es" />
    </>
  );
}
