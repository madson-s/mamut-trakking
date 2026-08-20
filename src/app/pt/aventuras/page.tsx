import type { Metadata } from 'next';
import { AdventuresHub } from '@/components/adventures/AdventuresHub';

export const metadata: Metadata = {
  title: "Aventuras",
  description: "Escolha entre trekkings, day tours, pacotes e a travessia do Vale do Pati.",
  alternates: {
    canonical: "/pt/aventuras",
    languages: { pt: '/pt/aventuras', en: '/en/adventures', es: '/es/aventuras' },
  },
};

export default function AdventuresHubPage() {
  return <AdventuresHub />;
}
