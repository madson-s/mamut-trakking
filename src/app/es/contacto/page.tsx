import type { Metadata } from 'next';
import { ContatoPage } from '@/components/contato/ContatoPage';
import { CONTATO_CONTENT } from '@/components/contato/contato-content';

const CONTENT = CONTATO_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: { pt: '/pt/contato', en: '/en/contact', es: '/es/contacto' } },
  openGraph: {
    title: CONTENT.meta.ogTitle,
    description: CONTENT.meta.ogDescription,
    url: CONTENT.meta.canonical,
    images: ['/img/about/cta-pai-inacio.webp'],
  },
};

export default function ContactoRoute() {
  return <ContatoPage locale="es" />;
}
