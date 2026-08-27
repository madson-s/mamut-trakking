import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { InformacoesGerais } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.pt.paginas['informacoes-gerais'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/pt/informacoes-gerais',
    languages: { pt: '/pt/informacoes-gerais', en: '/en/general-information', es: '/es/informacion-general' },
  },
};

export default function InformacoesGeraisRoute() {
  return (
    <DicasLayout locale="pt" pagina="informacoes-gerais">
      <InformacoesGerais locale="pt" />
    </DicasLayout>
  );
}
