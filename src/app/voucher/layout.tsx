import type { Metadata } from 'next';
import '../globals.css';
import { fontBody, fontDisplay } from '@/lib/fonts';
import { ThemeProvider } from '@/components/ui/theme-provider';

// Root layout próprio da ferramenta de voucher — fora do site público
// (não há app/layout.tsx: cada pasta de topo é uma raiz).
// Não indexável: é uma ferramenta interna.
export const metadata: Metadata = {
  title: 'Gerador de Voucher · Mamut Trekking',
  description: 'Ferramenta interna para emissão de vouchers.',
  robots: { index: false, follow: false },
};

export default function VoucherLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      data-theme="dark"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
