import type { Metadata } from 'next';
import { DicasPage } from '@/components/dicas/DicasPage';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.pt;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: { pt: '/pt/dicas', en: '/en/tips', es: '/es/consejos' },
  },
  openGraph: {
    title: `${CONTENT.meta.title} · Mamut Trekking`,
    description: CONTENT.meta.ogDescription,
    url: CONTENT.meta.canonical,
    images: ['/img/about/hero-lencois.webp'],
  },
};

export default function DicasRoute() {
  return <DicasPage locale="pt" />;
}
