import type { Metadata } from 'next';
import { AboutCta } from '@/components/about/AboutCta';
import { ManifestoCreed } from '@/components/manifesto/ManifestoCreed';
import { MANIFESTO_CONTENT } from '@/components/manifesto/manifesto-content';

const CONTENT = MANIFESTO_CONTENT.fr;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/manifesto', en: '/en/manifesto', es: '/es/manifiesto', fr: '/fr/manifeste', nl: '/nl/manifest', de: '/de/manifest' } },
  openGraph: {
    title: CONTENT.meta.ogTitle,
    description: CONTENT.meta.ogDescription,
    url: CONTENT.meta.canonical,
    images: ['/img/session-02_saqure-text_no-crop.webp'],
  },
};

// Sem hero: o manifesto abre a página, e fecha com o CTA de /sobre.
export default function ManifestoRoute() {
  return (
    <>
      <ManifestoCreed locale="fr" />
      <AboutCta locale="fr" />
    </>
  );
}
