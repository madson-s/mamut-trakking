import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { Container } from '@/components/ui';
import { NotFoundMessage } from '@/components/not-found/NotFoundMessage';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { fontBody, fontDisplay } from '@/lib/fonts';
import { SITE } from '@/lib/site';

// 404 do site inteiro. Não há app/layout.tsx — cada idioma (e cada ferramenta
// interna) é uma raiz própria —, então não existe um layout comum de onde
// compor um not-found.js. O global-not-found é a convenção do Next 16 para
// esse caso (flag `experimental.globalNotFound` no next.config): ele pula o
// render normal e devolve esta página direto, com status 404.
//
// Por isso este arquivo traz o próprio <html>, os estilos globais, as fontes e
// o provider de tema. Ele não sabe de que idioma veio a URL (não recebe props
// nem pathname), então a mensagem gira entre os três idiomas — ver
// NotFoundMessage.
export const metadata: Metadata = {
  title: 'Página não encontrada · Mamut Trekking',
  description: 'Esta página não existe ou mudou de endereço.',
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="pt"
      data-theme="dark"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-surface antialiased">
        <ThemeProvider>
          <header className="w-full border-b border-line">
            <Container className="flex h-20 items-center">
              <Link href="/pt" aria-label={SITE.name}>
                <Image
                  src="/svg/mamut-logo-branco.svg"
                  alt={SITE.name}
                  width={458}
                  height={264}
                  unoptimized
                  className="theme-logo h-7 w-auto sm:h-8"
                />
              </Link>
            </Container>
          </header>

          <main className="relative isolate flex flex-1 items-center overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 bottom-0 h-120 w-200 max-w-none bg-content opacity-[0.045] [mask-image:url('/svg/session-05_backgroud-people-01.svg')] [mask-position:bottom_right] [mask-repeat:no-repeat] [mask-size:contain]"
            />
            <Container className="relative py-20 sm:py-28">
              <NotFoundMessage />
            </Container>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
