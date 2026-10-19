import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { Geologia } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.nl.paginas['geologia'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/nl/geologie-van-de-chapada-diamantina',
    languages: { pt: '/pt/geologia-da-chapada-diamantina', en: '/en/geology-of-chapada-diamantina', es: '/es/geologia-de-la-chapada-diamantina', fr: '/fr/geologie-de-la-chapada-diamantina', nl: '/nl/geologie-van-de-chapada-diamantina', de: '/de/geologie-der-chapada-diamantina' },
  },
};

export default function GeologiaRoute() {
  return (
    <DicasLayout locale="nl" pagina="geologia">
      <Geologia locale="nl" />
    </DicasLayout>
  );
}
