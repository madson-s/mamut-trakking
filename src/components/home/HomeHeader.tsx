import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focus, motion } from '@/design/tokens';
import { Button, CaretDownIcon, Container, Text } from '@/components/ui';
import { Theme } from '@/components/ui/theme';
import { SITE, type Locale } from '@/lib/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu, type MobileNavItem } from './MobileMenu';
import { HeaderShell } from './HeaderShell';
import { CHROME } from './chrome-content';

export function HomeHeader({ locale = 'pt' }: { locale?: Locale }) {
  const chrome = CHROME[locale];

  return (
    <HeaderShell>
      <header className="site-header relative z-20 w-full">
        <Container
          padded={false}
          className="flex h-20 items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6"
        >
          <Link href={chrome.home} aria-label={SITE.name} className={cn('shrink-0', focus.onSurface)}>
            <Image
              src="/svg/Mamut treeking-logo-branco.svg"
              alt={SITE.name}
              width={1046}
              height={264}
              unoptimized
              loading="eager"
              className="theme-logo pati-wordmark-mobile h-7 w-auto lg:hidden"
            />
            <Image
              src="/svg/mamut-logo-branco.svg"
              alt=""
              width={458}
              height={264}
              unoptimized
              loading="eager"
              className="theme-logo pati-symbol hidden h-8 w-auto lg:block"
            />
            <Image
              src="/svg/Mamut treeking-logo-branco.svg"
              alt=""
              width={1046}
              height={264}
              unoptimized
              loading="eager"
              className="theme-logo pati-wordmark-desktop hidden h-8 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {chrome.nav.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 && (
                  <Text as="span" size="sm" weight="light" tone="muted" aria-hidden>
                    ·
                  </Text>
                )}
                {item.children ? (
                  <NavDropdown item={item} />
                ) : (
                  <Text as="span" size="sm" weight="light">
                    <Link
                      href={item.href}
                      className={cn('transition-colors hover:text-brand-strong', motion.fast)}
                    >
                      {item.label}
                    </Link>
                  </Text>
                )}
              </span>
            ))}
          </nav>

          <div className="site-header-controls flex shrink-0 items-center gap-2.5">
            <Theme variant="toggle" size="lg" className="lg:hidden" />
            <LanguageSwitcher />
            <MobileMenu nav={chrome.nav} content={chrome.menu} />

            <div className="hidden items-center gap-2.5 lg:flex">
              <Button href={SITE.whatsappUrl} size="sm" arrow>
                {chrome.whatsapp}
              </Button>
              <Theme variant="toggle" size="lg" />
            </div>
          </div>
        </Container>
      </header>
    </HeaderShell>
  );
}

/**
 * Item do menu com submenu. Só CSS: abre no hover e no foco (`group-focus-within`),
 * então o Tab chega aos subitens — o painel `invisible` sai da ordem de foco, e
 * o foco no item pai é o que o torna visível. O próprio rótulo continua sendo
 * link para a página da seção.
 *
 * O painel começa colado no item (`top-full` + `pt-3` dentro dele): o vão é
 * área do próprio painel, e o hover não se perde no caminho do mouse até lá.
 * Ele é superfície do tema, não foto — `.site-header-dropdown` entra na lista
 * que recalcula os aliases no globals.css, como o painel do MobileMenu.
 */
function NavDropdown({ item }: { item: MobileNavItem }) {
  return (
    <span className="group/nav relative flex items-center">
      <Text as="span" size="sm" weight="light">
        <Link
          href={item.href}
          aria-haspopup="true"
          className={cn('flex items-center gap-1 transition-colors hover:text-brand-strong', motion.fast)}
        >
          {item.label}
          <CaretDownIcon
            className={cn(
              'size-3 transition-transform group-hover/nav:rotate-180 group-focus-within/nav:rotate-180',
              motion.base,
            )}
          />
        </Link>
      </Text>

      <div
        className={cn(
          'site-header-dropdown invisible absolute top-full left-1/2 z-30 -translate-x-1/2 translate-y-1 pt-3 opacity-0',
          'transition-[opacity,translate,visibility] duration-200 ease-brand',
          'group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100',
          'group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100',
          'motion-reduce:transition-none',
        )}
      >
        <ul className="flex min-w-48 flex-col gap-1 rounded-card border border-line bg-surface-muted p-2 text-content shadow-popover">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={cn(
                  'block rounded-control px-3 py-2 text-sm whitespace-nowrap transition-colors',
                  motion.fast,
                  'hover:bg-surface-raised hover:text-brand-strong focus-visible:bg-surface-raised',
                  focus.onSurface,
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </span>
  );
}

