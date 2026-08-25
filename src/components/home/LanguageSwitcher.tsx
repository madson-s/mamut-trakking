'use client';

import { usePathname } from 'next/navigation';
import { localizePath } from '@/lib/routes';
import type { Locale } from '@/lib/site';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/motion/select';

const LANGUAGES = [
  { code: 'pt', shortLabel: 'PT-BR', label: 'Português' },
  { code: 'es', shortLabel: 'ES', label: 'Español' },
  { code: 'en', shortLabel: 'EN', label: 'English' },
] as const;

// Mesmo visual do switcher original (globo em pílula; código + caret no lg),
// mas a mecânica é o Select do beui — painel com spring + stagger em vez do
// toggle seco do <details>. Troca de idioma segue sendo full reload: cada
// idioma é uma raiz estática independente — e leva para a MESMA página no
// idioma escolhido, via `localizePath`.
export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentCode =
    LANGUAGES.find(({ code }) => pathname === `/${code}` || pathname.startsWith(`/${code}/`))
      ?.code ?? 'pt';
  const currentLanguage = LANGUAGES.find(({ code }) => code === currentCode) ?? LANGUAGES[0];

  return (
    <Select
      value={currentCode}
      onValueChange={(next) => {
        if (next !== currentCode) {
          window.location.assign(localizePath(pathname, next as Locale));
        }
      }}
      className="shrink-0 font-body font-light text-content"
    >
      <SelectTrigger
        gooey={false}
        aria-label="Selecionar idioma"
        chevronClassName={cn(
          'hidden lg:block [&>svg]:size-3 text-content-secondary group-hover:text-brand-contrast transition-colors',
          motion.fast,
        )}
        className={cn(
          'locale-switcher group h-10 w-10 justify-center gap-2 border-0 p-0',
          'rounded-pill bg-surface-muted text-content shadow-chip ring-1 ring-line-strong ring-inset',
          'transition-[background-color,color,box-shadow,scale]',
          motion.fast,
          press,
          focus.onSurface,
          'hover:bg-brand hover:text-brand-contrast hover:ring-brand',
          'lg:w-auto lg:justify-start lg:bg-transparent lg:px-3 lg:shadow-none',
        )}
      >
        <GlobeIcon className="size-3.5" />
        <span className="hidden text-xs lg:inline">{currentLanguage.shortLabel}</span>
      </SelectTrigger>

      <SelectContent
        className="left-auto z-50 w-40 border-0 ring-1 ring-line ring-inset"
        innerClassName="flex flex-col gap-2 p-2"
      >
        {LANGUAGES.map(({ code, shortLabel, label }) => {
          const isCurrent = code === currentCode;

          return (
            <SelectItem
              key={code}
              value={code}
              showCheck={false}
              className={cn(
                'group/option min-h-10 rounded-control border px-3 text-sm',
                'transition-[background-color,border-color,color]',
                motion.fast,
                isCurrent
                  ? 'border-brand bg-transparent text-brand-strong'
                  : 'border-transparent text-content-secondary hover:bg-brand hover:text-brand-contrast focus-visible:bg-brand focus-visible:text-brand-contrast',
              )}
            >
              <span>{label}</span>
              <span
                className={cn(
                  'text-[10px] transition-colors',
                  motion.fast,
                  isCurrent
                    ? 'text-brand-strong/70'
                    : 'text-content-muted group-hover/option:text-brand-contrast/75',
                )}
              >
                {shortLabel}
              </span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.8 12h16.4M12 3.5c2.1 2.2 3.2 5 3.2 8.5S14.1 18.3 12 20.5C9.9 18.3 8.8 15.5 8.8 12S9.9 5.7 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
