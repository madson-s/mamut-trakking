import type { Metadata } from 'next';
import '../globals.css';
import { SiteHeader, type NavItem } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SITE } from '@/lib/site';
import { fontBody, fontDisplay } from '@/lib/fonts';

// Root layout do idioma EN.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Mamut Trekking · Chapada Diamantina',
    template: '%s · Mamut Trekking',
  },
  description: 'A specialist operator for treks and adventures in Chapada Diamantina, Bahia.',
  openGraph: { siteName: SITE.name, locale: 'en_US', type: 'website' },
  robots: { index: true, follow: true },
};

const NAV: NavItem[] = [{ label: 'Adventures', href: '/en/adventures' }];

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontDisplay.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader locale="en" brandHref="/en" nav={NAV} />
        <main className="flex-1">{children}</main>
        <SiteFooter
          tagline="Hikes, traverses and guided tours with local guides and low-impact tourism."
          contactLabel="Contact"
          rightsLabel="All rights reserved."
        />
      </body>
    </html>
  );
}
