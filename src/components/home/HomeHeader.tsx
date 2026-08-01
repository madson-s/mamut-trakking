import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focus, motion } from '@/design/tokens';
import { Button, Container, Text } from '@/components/ui';
import { SITE } from '@/lib/site';
import { LanguageSwitcher } from './LanguageSwitcher';

const NAV = [
  { label: 'Aventuras', href: '/pt/aventuras' },
  { label: 'Quem Somos', href: '/pt/quem-somos' },
  { label: 'Manifesto', href: '/pt/manifesto' },
  { label: 'Dicas', href: '/pt/dicas' },
  { label: 'Contato', href: '/pt/contato' },
];

// Header de 80px do Figma. O gutter é mais estreito que o padrão (16 no mobile)
// para caber logo + idioma + CTA, então o Container entra sem padding próprio.
export function HomeHeader() {
  return (
    <header className="relative z-20 w-full">
      <Container
        padded={false}
        className="flex h-20 items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6"
      >
        <Link href="/pt" aria-label={SITE.name} className={cn('shrink-0', focus.onSurface)}>
          {/* Marca acima da dobra: `eager` (o `preload` fica reservado ao LCP, a foto do hero). */}
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
          <LanguageSwitcher />

          {/* O Figma usa 12px no mobile; aqui fica no `sm` do design system
              (14px) para não brigar com a variante do Button por `className`. */}
          <Button href={SITE.whatsappUrl} size="sm" arrow>
            <span className="hidden sm:inline">Falar no </span>WhatsApp
          </Button>
        </div>
      </Container>
    </header>
  );
}
