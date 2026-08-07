import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focus, motion } from '@/design/tokens';
import { Button, Container, Text } from '@/components/ui';
import { Theme } from '@/components/ui/theme';
import { SITE } from '@/lib/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu, type MobileNavItem } from './MobileMenu';

const NAV: MobileNavItem[] = [
  { label: 'Aventuras', href: '/pt/aventuras' },
  { label: 'Quem Somos', mobileLabel: 'Quem somos', href: '/pt/sobre' },
  { label: 'Manifesto', href: '/pt/manifesto' },
  { label: 'Dicas', mobileLabel: 'Dicas de trilha', href: '/pt/dicas' },
  { label: 'Contato', href: '/pt/contato' },
];

export function HomeHeader() {
  return (
    <header className="site-header relative z-20 w-full">
      <Container
        padded={false}
        className="flex h-20 items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6"
      >
        <Link href="/pt" aria-label={SITE.name} className={cn('shrink-0', focus.onSurface)}>
          <Image
            src="/svg/Mamut treeking-logo-branco.svg"
            alt={SITE.name}
            width={1046}
            height={264}
            unoptimized
            loading="eager"
            className="theme-logo h-7 w-auto lg:hidden"
          />
          <Image
            src="/svg/mamut-logo-branco.svg"
            alt=""
            width={458}
            height={264}
            unoptimized
            loading="eager"
            className="theme-logo hidden h-8 w-auto lg:block"
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {NAV.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 && (
                <Text as="span" size="sm" weight="light" tone="muted" aria-hidden>
                  ·
                </Text>
              )}
              <Text as="span" size="sm" weight="light">
                <Link
                  href={item.href}
                  className={cn('transition-colors hover:text-brand-strong', motion.fast)}
                >
                  {item.label}
                </Link>
              </Text>
            </span>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <Theme variant="toggle" className="lg:hidden" />
          <LanguageSwitcher />
          <MobileMenu nav={NAV} />

          <div className="hidden items-center gap-2.5 lg:flex">
            <Button href={SITE.whatsappUrl} size="sm" arrow>
              Falar no WhatsApp
            </Button>
            <Theme variant="toggle" />
          </div>
        </div>
      </Container>
    </header>
  );
}
