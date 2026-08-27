import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { ComoChegar } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.pt.paginas['como-chegar'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/pt/dicas',
    languages: { pt: '/pt/dicas', en: '/en/tips', es: '/es/consejos' },
  },
};

export default function ComoChegarRoute() {
  return (
    <DicasLayout locale="pt" pagina="como-chegar">
      <ComoChegar locale="pt" />
    </DicasLayout>
  );
}
