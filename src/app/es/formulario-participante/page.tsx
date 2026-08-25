import type { Metadata } from 'next';
import { ParticipantePage } from '@/components/formulario/ParticipantePage';
import { PARTICIPANTE_CONTENT } from '@/components/formulario/participante-conteudo';

const CONTENT = PARTICIPANTE_CONTENT.es;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: { pt: '/pt/formulario-participante', en: '/en/participant-form', es: '/es/formulario-participante' },
  },
  // Página de serviço, preenchida depois da reserva: não é porta de entrada de
  // busca e por isso também não entra no sitemap.
  robots: { index: false, follow: true },
};

export default function FormularioParticipantePage() {
  return <ParticipantePage locale="es" />;
}
