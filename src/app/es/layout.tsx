import type { Metadata } from 'next';
import { LocaleShell } from '@/components/layout/LocaleShell';
import { SITE } from '@/lib/site';

// Root layout do idioma ES. Desde que a home foi redesenhada, todo o
// idioma usa a casca da identidade nova (LocaleShell) — o SiteHeader antigo
// saiu de cena.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Mamut Trekking · Chapada Diamantina',
    template: '%s · Mamut Trekking',
  },
  description: 'Operadora especializada en trekkings y aventuras en la Chapada Diamantina, Bahía.',
  openGraph: { siteName: SITE.name, locale: 'es_ES', type: 'website' },
  robots: { index: true, follow: true },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="es">{children}</LocaleShell>;
}
