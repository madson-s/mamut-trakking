import '@/app/globals.css';
import { HomeHeader } from '@/components/home/HomeHeader';
import { HomeFooter } from '@/components/home/HomeFooter';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ScrollExperience } from '@/components/layout/ScrollExperience';
import { fontBody, fontDisplay } from '@/lib/fonts';
import type { Locale } from '@/lib/site';

/**
 * Casca do formulário do participante em EN e ES — a mesma do /pt, com o header
 * e o footer da identidade nova.
 *
 * As raízes /en e /es ainda rodam no tema antigo (`SiteHeader`), e o header vem
 * do root layout de cada idioma. Por isso estas duas rotas vivem em route
 * groups próprios, com root layout próprio: é o mecanismo do App Router para
 * duas cascas diferentes no mesmo domínio.
 */
export function ParticipanteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
      data-theme="dark"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <ScrollExperience />
          <HomeHeader locale={locale} />
          <main className="flex-1">{children}</main>
          <HomeFooter locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
