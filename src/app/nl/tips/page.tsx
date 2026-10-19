import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { ComoChegar } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.nl.paginas['como-chegar'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/nl/tips',
    languages: { pt: '/pt/dicas', en: '/en/tips', es: '/es/consejos', fr: '/fr/conseils', nl: '/nl/tips' },
  },
};

export default function ComoChegarRoute() {
  return (
    <DicasLayout locale="nl" pagina="como-chegar">
      <ComoChegar locale="nl" />
    </DicasLayout>
  );
}
