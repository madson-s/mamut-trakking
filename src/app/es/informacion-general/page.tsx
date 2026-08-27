import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { InformacoesGerais } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.es.paginas['informacoes-gerais'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/es/informacion-general',
    languages: { pt: '/pt/informacoes-gerais', en: '/en/general-information', es: '/es/informacion-general' },
  },
};

export default function InformacoesGeraisRoute() {
  return (
    <DicasLayout locale="es" pagina="informacoes-gerais">
      <InformacoesGerais locale="es" />
    </DicasLayout>
  );
}
