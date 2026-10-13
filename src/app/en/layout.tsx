import type { Metadata } from 'next';
import { LocaleShell } from '@/components/layout/LocaleShell';
import { SITE } from '@/lib/site';
import { ROBOTS_META } from '@/lib/indexing';

// Root layout do idioma EN. Desde que a home foi redesenhada, todo o
// idioma usa a casca da identidade nova (LocaleShell) — o SiteHeader antigo
// saiu de cena.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Mamut Trekking · Chapada Diamantina',
    template: '%s · Mamut Trekking',
  },
  description: 'A specialist operator for treks and adventures in Chapada Diamantina, Bahia.',
  openGraph: { siteName: SITE.name, locale: 'en_US', type: 'website' },
  robots: ROBOTS_META,
  appleWebApp: { title: 'Mamut' },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="en">{children}</LocaleShell>;
}
