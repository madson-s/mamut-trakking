import type { Metadata } from 'next';
import '../globals.css';
import { SiteHeader, type NavItem } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SITE } from '@/lib/site';
import { fontBody, fontDisplay } from '@/lib/fonts';
import { ScrollExperience } from '@/components/layout/ScrollExperience';

// Root layout del idioma ES.
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

const NAV: NavItem[] = [{ label: 'Aventuras', href: '/es/aventuras' }];

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fontBody.variable} ${fontDisplay.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <ScrollExperience />
        <SiteHeader locale="es" brandHref="/es" nav={NAV} />
        <main className="flex-1">{children}</main>
        <SiteFooter
          tagline="Senderos, travesías y excursiones guiadas con guías locales y turismo de bajo impacto."
          contactLabel="Contacto"
          rightsLabel="Todos los derechos reservados."
        />
      </body>
    </html>
  );
}
