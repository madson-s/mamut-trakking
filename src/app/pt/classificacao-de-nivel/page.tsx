import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { ClassificacaoDeNivel } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.pt.paginas['classificacao-de-nivel'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/pt/classificacao-de-nivel',
    languages: { pt: '/pt/classificacao-de-nivel', en: '/en/level-classification', es: '/es/clasificacion-de-nivel' },
  },
};

export default function ClassificacaoRoute() {
  return (
    <DicasLayout locale="pt" pagina="classificacao-de-nivel">
      <ClassificacaoDeNivel locale="pt" />
    </DicasLayout>
  );
}
