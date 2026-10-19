import type { Metadata } from 'next';
import { LocaleShell } from '@/components/layout/LocaleShell';
import { SITE } from '@/lib/site';
import { ROBOTS_META } from '@/lib/indexing';

// Root layout do idioma DE — mesma casca (LocaleShell) de pt/en/es/fr/nl.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Mamut Trekking · Chapada Diamantina',
    template: '%s · Mamut Trekking',
  },
  description: 'Spezialisierter Veranstalter für Trekkingtouren und Abenteuer in der Chapada Diamantina, in Bahia (Brasilien).',
  openGraph: { siteName: SITE.name, locale: 'de_DE', type: 'website' },
  robots: ROBOTS_META,
  appleWebApp: { title: 'Mamut' },
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="de">{children}</LocaleShell>;
}
