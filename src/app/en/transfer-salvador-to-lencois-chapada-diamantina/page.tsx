import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { Transfer } from '@/components/dicas/paginas';
import { DICAS_PATHS } from '@/components/dicas/dicas-rotas';
import { TRANSFER_CONTENT, TRANSFER_DADOS } from '@/components/dicas/transfer-conteudo';
import { LOCALES } from '@/lib/site';

const CONTENT = TRANSFER_CONTENT.en.secao;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: DICAS_PATHS.en.transfer,
    languages: Object.fromEntries(LOCALES.map((l) => [l, DICAS_PATHS[l].transfer])),
  },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    url: DICAS_PATHS.en.transfer,
    images: [TRANSFER_DADOS.imagem],
  },
};

export default function TransferRoute() {
  return (
    <DicasLayout locale="en" pagina="transfer">
      <Transfer locale="en" />
    </DicasLayout>
  );
}
