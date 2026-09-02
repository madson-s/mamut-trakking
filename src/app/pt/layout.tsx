import type { Metadata } from 'next';
import '../globals.css';
import { HomeHeader } from '@/components/home/HomeHeader';
import { HomeFooter } from '@/components/home/HomeFooter';
import { SITE } from '@/lib/site';
import { fontBody, fontDisplay } from '@/lib/fonts';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ScrollExperience } from '@/components/layout/ScrollExperience';

// Root layout do idioma PT (não há app/layout.tsx — cada idioma é uma raiz).
// PT já roda na identidade nova (tema dark do Figma). EN/ES seguem no tema
// antigo até serem refeitos.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Mamut Trekking · Chapada Diamantina',
    template: '%s · Mamut Trekking',
  },
  description: 'Operadora especializada em trekkings e aventuras na Chapada Diamantina, Bahia.',
  openGraph: { siteName: SITE.name, locale: 'pt_BR', type: 'website' },
  robots: { index: true, follow: true },
  appleWebApp: { title: 'Mamut' },
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      data-theme="dark"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <ScrollExperience />
          <HomeHeader />
          <main className="flex-1">{children}</main>
          <HomeFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
