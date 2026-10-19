import type { Metadata } from 'next';
import { LocaleShell } from '@/components/layout/LocaleShell';
import { SITE } from '@/lib/site';
import { ROBOTS_META } from '@/lib/indexing';

// Root layout do idioma NL — mesma casca (LocaleShell) de pt/en/es/fr.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Mamut Trekking · Chapada Diamantina',
    template: '%s · Mamut Trekking',
  },
  description: 'Gespecialiseerde organisatie voor trektochten en avonturen in de Chapada Diamantina, in Bahia (Brazilië).',
  openGraph: { siteName: SITE.name, locale: 'nl_NL', type: 'website' },
  robots: ROBOTS_META,
  appleWebApp: { title: 'Mamut' },
};

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="nl">{children}</LocaleShell>;
}
