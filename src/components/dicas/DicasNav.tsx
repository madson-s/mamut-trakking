'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CaretDownIcon, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { focus, motion } from '@/design/tokens';
import type { Locale } from '@/lib/site';
import { DICAS_PAGES, dicasHref, type DicasPageId } from './dicas-rotas';
import { DICAS_CONTENT } from './dicas-conteudo';

/**
 * Navegação da seção de dicas: lista lateral no desktop, `select` no mobile.
 *
 * O `select` é um `<select>` nativo de propósito — é uma navegação, e o
 * controle nativo já traz teclado, rolagem e o picker do sistema operacional
 * de graça. Um menu customizado aqui só teria custo.
 */
export function DicasNav({ locale, atual }: { locale: Locale; atual: DicasPageId }) {
  const c = DICAS_CONTENT[locale];
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {/* Mobile: um select que navega ao escolher. */}
      <label className="flex flex-col gap-2 lg:hidden">
        <Text as="span" size="xs" weight="semibold" tone="muted" className="tracking-[0.14em] uppercase">
          {c.secao.selectLabel}
        </Text>
        {/* O `appearance-none` tira o caret nativo; este entra à esquerda, e o
            `pl-10` do select abre o espaço para ele. `pointer-events-none`
            para o clique no ícone continuar abrindo o select. */}
        <div className="relative">
          <CaretDownIcon
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-content-secondary"
          />
          <select
            value={dicasHref(locale, atual)}
            onChange={(event) => router.push(event.target.value)}
            className={cn(
              'w-full appearance-none rounded-control border border-line-strong bg-surface py-2.5 pr-3.5 pl-10',
              'font-body text-base text-content',
              focus.control,
            )}
          >
            {DICAS_PAGES.map((page) => (
              <option key={page} value={dicasHref(locale, page)}>
                {c.paginas[page].nav}
              </option>
            ))}
          </select>
        </div>
      </label>

      {/* Desktop: a lista lateral. */}
      <nav
        aria-label={c.secao.titulo}
        className="hidden flex-col gap-1 rounded-panel-lg border border-line-strong bg-surface-muted px-4 py-6 lg:flex"
      >
        {/* Mesmo tratamento dos títulos de coluna do rodapé. */}
        <Text
          as="span"
          size="xs"
          weight="semibold"
          className="mb-3 text-center tracking-[0.14em] uppercase"
        >
          {c.secao.titulo}
        </Text>
        {DICAS_PAGES.map((page) => {
          const href = dicasHref(locale, page);
          const ativo = pathname === href;

          return (
            <Link
              key={page}
              href={href}
              aria-current={ativo ? 'page' : undefined}
              className={cn(
                'rounded-control px-3 py-2.5 font-body text-sm transition-colors',
                motion.fast,
                ativo
                  ? 'bg-surface-raised font-semibold text-content'
                  : 'font-light text-content-secondary hover:text-content',
                focus.onSurface,
              )}
            >
              {c.paginas[page].nav}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
