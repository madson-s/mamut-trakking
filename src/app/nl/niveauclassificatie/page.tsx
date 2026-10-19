import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { ClassificacaoDeNivel } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.nl.paginas['classificacao-de-nivel'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/nl/niveauclassificatie',
    languages: { pt: '/pt/classificacao-de-nivel', en: '/en/level-classification', es: '/es/clasificacion-de-nivel', fr: '/fr/classification-des-niveaux', nl: '/nl/niveauclassificatie' },
  },
};

export default function ClassificacaoRoute() {
  return (
    <DicasLayout locale="nl" pagina="classificacao-de-nivel">
      <ClassificacaoDeNivel locale="nl" />
    </DicasLayout>
  );
}
