import type { Metadata } from 'next';
import { DicasLayout } from '@/components/dicas/DicasLayout';
import { ComoChegar } from '@/components/dicas/paginas';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';

const CONTENT = DICAS_CONTENT.fr.paginas['como-chegar'];

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: '/fr/conseils',
    languages: { pt: '/pt/dicas', en: '/en/tips', es: '/es/consejos', fr: '/fr/conseils' },
  },
};

export default function ComoChegarRoute() {
  return (
    <DicasLayout locale="fr" pagina="como-chegar">
      <ComoChegar locale="fr" />
    </DicasLayout>
  );
}
