'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';
import { Button, Divider, Text, XIcon } from '@/components/ui';
import { SITE } from '@/lib/site';

export type MobileNavItem = { label: string; mobileLabel?: string; href: string };

const LANGUAGES = [
  { code: 'pt', shortLabel: 'PT-BR' },
  { code: 'en', shortLabel: 'EN' },
  { code: 'es', shortLabel: 'ES' },
] as const;

export function MobileMenu({ nav }: { nav: MobileNavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentCode =
    LANGUAGES.find(({ code }) => pathname === `/${code}` || pathname.startsWith(`/${code}/`))
      ?.code ?? 'pt';

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={cn(
          'inline-flex h-10 shrink-0 items-center justify-center rounded-pill px-4 lg:hidden',
          'bg-surface-muted font-body text-sm font-light text-content',
          'shadow-chip ring-1 ring-line-strong ring-inset',
          'transition-[background-color,color,box-shadow,scale]',
          motion.fast,
          press,
          focus.onSurface,
          'hover:bg-surface-raised hover:text-content',
        )}
      >
        Menu
      </button>

      <div
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden',
          motion.slow,
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={cn(
          'fixed inset-x-4 top-4 z-50 flex max-h-[calc(100vh-2rem)] flex-col gap-8 overflow-y-auto',
          'rounded-panel-lg bg-surface-raised p-6 shadow-popover',
          'origin-top transition-[opacity,transform,filter]',
          motion.slow,
          open
            ? 'translate-y-0 scale-100 opacity-100 blur-none'
            : 'pointer-events-none -translate-y-2 scale-98 opacity-0 blur-xs',
          'lg:hidden',
        )}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/svg/mamut-logo-branco.svg"
            alt={SITE.name}
            width={458}
            height={264}
            unoptimized
            className="theme-logo h-7 w-auto"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className={cn(
              'flex size-9 items-center justify-center rounded-pill bg-surface-sunken text-content',
              'transition-[background-color,color,scale]',
              motion.fast,
              press,
              focus.onSurface,
              'hover:bg-brand hover:text-brand-contrast',
            )}
          >
            <XIcon className="size-4" />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <Text
            as="span"
            size="xs"
            weight="semibold"
            tone="brand"
            className="tracking-[0.2em] uppercase"
          >
            Menu
          </Text>

          <nav className="flex flex-col">
            {nav.map((item, i) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-baseline gap-4 py-4 transition-colors',
                    motion.fast,
                    'hover:text-brand-strong',
                  )}
                >
                  <Text as="span" size="xs" tone="muted">
                    {String(i + 1).padStart(2, '0')}
                  </Text>
                  <Text as="span" size="xl">
                    {item.mobileLabel ?? item.label}
                  </Text>
                </Link>
                {i < nav.length - 1 && <Divider />}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <Text size="sm" tone="muted">
            Cada caminho começa com uma conversa.
          </Text>
          <Button href={SITE.whatsappUrl} arrow>
            Falar no WhatsApp
          </Button>
        </div>

        <Divider />

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Text as="span" size="xs" tone="muted" className="tracking-wide uppercase">
              Idioma
            </Text>
            {LANGUAGES.map(({ code, shortLabel }, i) => (
              <span key={code} className="flex items-center gap-2">
                {i > 0 && (
                  <Text as="span" size="xs" tone="muted" aria-hidden>
                    ·
                  </Text>
                )}
                <Link href={`/${code}`} onClick={() => setOpen(false)}>
                  <Text
                    as="span"
                    size="xs"
                    weight={code === currentCode ? 'semibold' : 'light'}
                    tone={code === currentCode ? 'default' : 'muted'}
                  >
                    {shortLabel}
                  </Text>
                </Link>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#" className="transition-colors hover:text-brand-strong">
              <Text as="span" size="xs" tone="secondary">
                Instagram
              </Text>
            </a>
            <Text as="span" size="xs" tone="muted" aria-hidden>
              ·
            </Text>
            <a href="#" className="transition-colors hover:text-brand-strong">
              <Text as="span" size="xs" tone="secondary">
                Facebook
              </Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
