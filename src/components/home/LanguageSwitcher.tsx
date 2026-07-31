'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LANGUAGES = [
  { code: 'pt', shortLabel: 'PT-BR', label: 'Português' },
  { code: 'es', shortLabel: 'ES', label: 'Español' },
  { code: 'en', shortLabel: 'EN', label: 'English' },
] as const;

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentCode = LANGUAGES.find(({ code }) => pathname === `/${code}` || pathname.startsWith(`/${code}/`))?.code ?? 'pt';
  const currentLanguage = LANGUAGES.find(({ code }) => code === currentCode) ?? LANGUAGES[0];

  return (
    <details className="group relative shrink-0 font-body font-light text-gray-950">
      <summary className="group/trigger flex h-10 w-10 cursor-pointer list-none items-center justify-center gap-1.5 rounded-full bg-transparent text-gray-950 ring-1 ring-inset ring-gray-300 transition-[background-color,color,box-shadow,scale] duration-150 ease-out hover:bg-primary-500 hover:text-white hover:ring-primary-500 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 sm:w-auto sm:justify-start sm:px-3 [&::-webkit-details-marker]:hidden">
        <GlobeIcon className="size-3.5" />
        <span className="hidden text-xs sm:inline">{currentLanguage.shortLabel}</span>
        <ChevronIcon className="hidden size-3 text-gray-600 transition-[color,transform] duration-200 ease-out group-hover/trigger:text-white group-open:rotate-180 sm:block" />
        <span className="sr-only">Selecionar idioma</span>
      </summary>

      <div className="absolute right-0 top-[calc(100%+8px)] z-50 flex w-40 flex-col gap-2 overflow-hidden rounded-xl bg-gray-50 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-gray-200">
        {LANGUAGES.map(({ code, shortLabel, label }) => {
          const isCurrent = code === currentCode;

          return (
            <Link
              key={code}
              href={`/${code}`}
              aria-current={isCurrent ? 'page' : undefined}
              className={`group/option flex min-h-10 items-center justify-between rounded-lg px-3 text-sm transition-[background-color,border-color,color] duration-150 ease-out ${isCurrent ? 'border border-primary-500 bg-transparent text-primary-700' : 'border border-transparent text-gray-700 hover:bg-primary-600 hover:text-white'}`}
            >
              <span>{label}</span>
              <span
                className={`text-[10px] transition-colors duration-150 ${isCurrent ? 'text-primary-700/70' : 'text-gray-500 group-hover/option:text-white/75'}`}
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
      <path d="M3.8 12h16.4M12 3.5c2.1 2.2 3.2 5 3.2 8.5S14.1 18.3 12 20.5C9.9 18.3 8.8 15.5 8.8 12S9.9 5.7 12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
