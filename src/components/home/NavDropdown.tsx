'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion as m, useReducedMotion, type Transition, type Variants } from 'motion/react';
import { CaretDownIcon, Text } from '@/components/ui';
import { focus, motion } from '@/design/tokens';
import { cn } from '@/lib/cn';
import { EASE_OUT } from '@/lib/ease';
import type { MobileNavItem } from './MobileMenu';

/**
 * Item do menu com submenu, no formato do dropdown de idioma
 * (`LanguageSwitcher` → `components/motion/select`): painel `bg-surface` com
 * contorno fino, altura que cresce numa mola, itens em pílula que entram em
 * cascata com blur, hover verde e o item da página atual em verde (sem a
 * borda do item atual do Select).
 *
 * Diferenças de propósito em relação ao Select: abre no hover (e no foco, para
 * o teclado), não no clique — o próprio rótulo continua sendo link para a
 * seção. Os links ficam sempre no HTML (o painel fechado é `inert`), então os
 * crawlers os enxergam sem JavaScript.
 *
 * O painel é superfície do tema, não foto: `.site-header-dropdown` entra na
 * lista que recalcula os aliases no globals.css, como o painel do MobileMenu.
 */

const LIST_VARIANTS: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.05 } },
};
const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -6, filter: 'blur(3px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

/** Folga para o mouse atravessar o vão até o painel sem fechá-lo. */
const CLOSE_DELAY = 120;

export function NavDropdown({ item }: { item: MobileNavItem }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const rootRef = useRef<HTMLSpanElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  // O Esc devolve o foco ao rótulo; esse foco não pode reabrir o painel.
  const skipFocusOpen = useRef(false);

  useLayoutEffect(() => {
    const node = listRef.current;
    if (!node) return;
    const measure = () => setHeight(node.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = (delay = CLOSE_DELAY) => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), delay);
  };

  const panelTransition: Transition = reduce
    ? { duration: 0.12 }
    : {
        opacity: open ? { duration: 0.18 } : { duration: 0.16, delay: 0.12 },
        height: open
          ? { type: 'spring', duration: 0.42, bounce: 0.14 }
          : { duration: 0.26, ease: EASE_OUT, delay: 0.14 },
      };

  return (
    <span
      ref={rootRef}
      className="relative flex items-center"
      onPointerEnter={show}
      onPointerLeave={() => hide()}
      onFocus={() => {
        if (skipFocusOpen.current) {
          skipFocusOpen.current = false;
          return;
        }
        show();
      }}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) hide(0);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false);
          skipFocusOpen.current = true;
          rootRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
        }
      }}
    >
      <Text as="span" size="sm" weight="light">
        <Link
          href={item.href}
          aria-haspopup="true"
          aria-expanded={open}
          className={cn('flex items-center gap-1 transition-colors hover:text-brand-strong', motion.fast)}
        >
          {item.label}
          <CaretDownIcon
            className={cn('size-3 transition-transform', motion.base, open && 'rotate-180')}
          />
        </Link>
      </Text>

      {/* O pt-2 é a ponte do hover: área do painel entre o item e a caixa. */}
      <div
        className="site-header-dropdown absolute top-full left-1/2 z-30 -translate-x-1/2 pt-2"
        style={{ pointerEvents: open ? 'auto' : 'none' }}
      >
        <m.div
          aria-hidden={!open}
          inert={!open}
          initial={false}
          animate={{ opacity: open ? 1 : 0, height: open ? height : 0 }}
          transition={panelTransition}
          style={{ overflow: 'hidden' }}
          className="w-48 rounded-control bg-surface shadow-popover ring-1 ring-line ring-inset"
        >
          <m.ul
            ref={listRef}
            variants={reduce ? undefined : LIST_VARIANTS}
            initial={false}
            animate={open ? 'show' : 'hidden'}
            className="flex flex-col gap-2 p-2"
          >
            {item.children?.map((child) => {
              const isCurrent = pathname === child.href || pathname.startsWith(`${child.href}/`);

              return (
                <m.li key={child.href} variants={reduce ? undefined : ITEM_VARIANTS}>
                  <Link
                    href={child.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex min-h-10 items-center rounded-control px-3 text-sm whitespace-nowrap',
                      'transition-[background-color,color]',
                      motion.fast,
                      focus.onSurface,
                      isCurrent
                        ? 'text-brand-strong'
                        : 'text-content-secondary hover:bg-brand hover:text-brand-contrast focus-visible:bg-brand focus-visible:text-brand-contrast',
                    )}
                  >
                    {child.label}
                  </Link>
                </m.li>
              );
            })}
          </m.ul>
        </m.div>
      </div>
    </span>
  );
}
