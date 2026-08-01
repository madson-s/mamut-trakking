import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { focus, motion } from '@/design/tokens';
import { Container } from '@/components/ui';
import { SITE, type Locale } from '@/lib/site';
import { LocaleSwitcher } from './LocaleSwitcher';

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
    <header className="w-full border-b border-line">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href={brandHref} aria-label={SITE.name} className={cn('shrink-0', focus.onSurface)}>
          <Image
            src="/svg/mamut-logo-branco.svg"
            alt={SITE.name}
            width={458}
            height={264}
            unoptimized
            loading="eager"
            className="theme-logo h-7 w-auto sm:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-6 font-body text-sm font-light text-content sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('transition-colors hover:text-brand-strong', motion.fast)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LocaleSwitcher locale={locale} />
      </Container>
    </header>
  );
}
