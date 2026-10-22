import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { Transfer } from '@/components/dicas/paginas';
import { DICAS_PATHS } from '@/components/dicas/dicas-rotas';
import { TRANSFER_CONTENT, TRANSFER_DADOS } from '@/components/dicas/transfer-conteudo';
import { LOCALES } from '@/lib/site';

const CONTENT = TRANSFER_CONTENT.es.secao;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: DICAS_PATHS.es.transfer,
    languages: Object.fromEntries(LOCALES.map((l) => [l, DICAS_PATHS[l].transfer])),
  },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    url: DICAS_PATHS.es.transfer,
    images: [{ url: TRANSFER_DADOS.imagem, width: TRANSFER_DADOS.imagemLargura, height: TRANSFER_DADOS.imagemAltura, alt: TRANSFER_CONTENT.es.imagemAlt }],
  },
};

export default function TransferRoute() {
  return (
    <DicasLayout locale="es" pagina="transfer">
      <Transfer locale="es" />
    </DicasLayout>
  );
}
