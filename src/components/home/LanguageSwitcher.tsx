'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { focus, motion, press } from '@/design/tokens';
import { CaretDownIcon } from '@/components/ui';

const LANGUAGES = [
  { code: 'pt', shortLabel: 'PT-BR', label: 'Português' },
  { code: 'es', shortLabel: 'ES', label: 'Español' },
  { code: 'en', shortLabel: 'EN', label: 'English' },
] as const;

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentCode =
    LANGUAGES.find(({ code }) => pathname === `/${code}` || pathname.startsWith(`/${code}/`))
      ?.code ?? 'pt';
  const currentLanguage = LANGUAGES.find(({ code }) => code === currentCode) ?? LANGUAGES[0];

  return (
    <details className="group relative shrink-0 font-body font-light text-content">
      <summary
        className={cn(
          'group/trigger flex h-10 w-10 cursor-pointer list-none items-center justify-center gap-1.5',
          'rounded-pill bg-surface-muted text-content shadow-chip ring-1 ring-line-strong ring-inset',
          'transition-[background-color,color,box-shadow,scale]',
          motion.fast,
          press,
          focus.onSurface,
          'hover:bg-brand hover:text-brand-contrast hover:ring-brand',
          'lg:w-auto lg:justify-start lg:bg-transparent lg:px-3 lg:shadow-none',
          '[&::-webkit-details-marker]:hidden',
        )}
      >
        <GlobeIcon className="size-3.5" />
        <span className="hidden text-xs lg:inline">{currentLanguage.shortLabel}</span>
        <span className="hidden lg:block">
          <CaretDownIcon
            className={cn(
              'size-3 text-content-secondary transition-[color,transform] group-open:rotate-180 group-hover/trigger:text-brand-contrast',
              motion.fast,
            )}
          />
        </span>
        <span className="sr-only">Selecionar idioma</span>
      </summary>

      <div className="absolute top-[calc(100%+8px)] right-0 z-50 flex w-40 flex-col gap-2 overflow-hidden rounded-control bg-surface p-1.5 shadow-popover ring-1 ring-line ring-inset">
        {LANGUAGES.map(({ code, shortLabel, label }) => {
          const isCurrent = code === currentCode;

          return (
            <Link
              key={code}
              href={`/${code}`}
              aria-current={isCurrent ? 'page' : undefined}
              className={cn(
                'group/option flex min-h-10 items-center justify-between rounded-control border px-3 text-sm',
                'transition-[background-color,border-color,color]',
                motion.fast,
                isCurrent
                  ? 'border-brand bg-transparent text-brand-strong'
                  : 'border-transparent text-content-secondary hover:bg-brand hover:text-brand-contrast',
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
            </Link>
          );
        })}
      </div>
    </details>
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
