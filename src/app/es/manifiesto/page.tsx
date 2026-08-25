import type { Metadata } from 'next';
import { AboutCta } from '@/components/about/AboutCta';
import { ManifestoCreed } from '@/components/manifesto/ManifestoCreed';
import { MANIFESTO_CONTENT } from '@/components/manifesto/manifesto-content';

const CONTENT = MANIFESTO_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/manifesto', en: '/en/manifesto', es: '/es/manifiesto' } },
  openGraph: {
    title: CONTENT.meta.ogTitle,
    description: CONTENT.meta.ogDescription,
    url: CONTENT.meta.canonical,
    images: ['/img/session-02_saqure-text_no-crop.webp'],
  },
};

// Sem hero: o manifesto abre a página, e fecha com o CTA de /sobre.
export default function ManifiestoRoute() {
  return (
    <>
      <ManifestoCreed locale="es" />
      <AboutCta locale="es" />
    </>
  );
}
