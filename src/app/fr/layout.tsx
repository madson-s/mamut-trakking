import type { Metadata } from 'next';
import { LocaleShell } from '@/components/layout/LocaleShell';
import { SITE } from '@/lib/site';
import { ROBOTS_META } from '@/lib/indexing';

// Root layout do idioma FR — mesma casca (LocaleShell) de pt/en/es.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Mamut Trekking · Chapada Diamantina',
    template: '%s · Mamut Trekking',
  },
  description: 'Agence spécialisée dans les treks et les aventures dans la Chapada Diamantina, à Bahia (Brésil).',
  openGraph: { siteName: SITE.name, locale: 'fr_FR', type: 'website' },
  robots: ROBOTS_META,
  appleWebApp: { title: 'Mamut' },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="fr">{children}</LocaleShell>;
}
