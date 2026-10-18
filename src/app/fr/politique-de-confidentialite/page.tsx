import type { Metadata } from 'next';
import { PrivacidadePage } from '@/components/privacidade/PrivacidadePage';
import { PRIVACIDADE_CONTENT, PRIVACIDADE_HREF } from '@/components/privacidade/privacidade-content';

const CONTENT = PRIVACIDADE_CONTENT.fr;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: PRIVACIDADE_HREF },
  openGraph: {
    title: CONTENT.meta.title,
    description: CONTENT.meta.description,
    url: CONTENT.meta.canonical,
  },
};

export default function PrivacidadeFrRoute() {
  return <PrivacidadePage locale="fr" />;
}
