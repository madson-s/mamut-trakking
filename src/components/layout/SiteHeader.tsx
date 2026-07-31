import Link from 'next/link';
import { Container } from './Container';
import { LocaleSwitcher } from './LocaleSwitcher';
import { SITE, type Locale } from '@/lib/site';

export type NavItem = { label: string; href: string };

// Cabeçalho burro: recebe a marca, os itens de navegação (já no idioma da
// página) e o locale atual. Cada layout de idioma monta o `nav` inline.
export function SiteHeader({
  locale,
  brandHref,
  nav,
}: {
  locale: Locale;
  brandHref: string;
  nav: NavItem[];
}) {
  return (
    <header className="border-b border-black/5">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href={brandHref} className="font-display text-lg tracking-tight">
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-mamut-stone sm:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-mamut-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher locale={locale} />
      </Container>
    </header>
  );
}
