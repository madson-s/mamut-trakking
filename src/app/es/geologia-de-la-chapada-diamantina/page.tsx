import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { Geologia } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.es.paginas['geologia'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/es/geologia-de-la-chapada-diamantina',
    languages: { pt: '/pt/geologia-da-chapada-diamantina', en: '/en/geology-of-chapada-diamantina', es: '/es/geologia-de-la-chapada-diamantina' },
  },
};

export default function GeologiaRoute() {
  return (
    <DicasLayout locale="es" pagina="geologia">
      <Geologia locale="es" />
    </DicasLayout>
  );
}
