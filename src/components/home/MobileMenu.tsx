'use client';

import { Fragment, useEffect, useState } from 'react';
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
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-surface p-6',
          'transition-[opacity,transform] duration-300 ease-brand',
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
          'lg:hidden',
        )}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/svg/Mamut treeking-logo-branco.svg"
            alt={SITE.name}
            width={1046}
            height={264}
            unoptimized
            className="theme-logo h-8 w-auto"
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

        <div className="mt-16.5 flex flex-col gap-1">
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
                <Divider />
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-11.75 flex w-89.5 flex-col gap-7">
          <Text size="sm" tone="muted">
            Cada caminho começa com uma conversa.
          </Text>
          <Button href={SITE.whatsappUrl} arrow className="h-11 w-47">
            Falar no WhatsApp
          </Button>
        </div>

        <div className="mt-auto flex flex-col gap-5.75">
          <Divider />

          <div className="flex flex-wrap items-baseline gap-2">
            <Text as="span" size="xs" tone="muted" className="tracking-wide uppercase">
              Idioma
            </Text>
            {LANGUAGES.map(({ code, shortLabel }, i) => (
              <Fragment key={code}>
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
              </Fragment>
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
