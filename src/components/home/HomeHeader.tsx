import Link from 'next/link';
import { SITE } from '@/lib/site';
import { ArrowRightIcon } from '@/components/ui/icons';
import { LanguageSwitcher } from './LanguageSwitcher';

const NAV = [
  { label: 'Aventuras', href: '/pt/aventuras' },
  { label: 'Quem Somos', href: '/pt/quem-somos' },
  { label: 'Manifesto', href: '/pt/manifesto' },
  { label: 'Dicas', href: '/pt/dicas' },
  { label: 'Contato', href: '/pt/contato' },
];

export function HomeHeader() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex h-20 w-full max-w-[1216px] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
        <Link href="/pt" className="shrink-0" aria-label={SITE.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/svg/mamut-logo-branco.svg" alt={SITE.name} className="theme-logo h-7 w-auto sm:h-8" />
        </Link>

        <nav className="hidden items-center gap-2 font-body text-sm font-light text-gray-950 lg:flex">
          {NAV.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-500">·</span>}
              <Link href={item.href} className="transition-colors hover:text-primary-700">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <LanguageSwitcher />

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-primary-500 pl-3.5 pr-3 font-body text-xs font-medium text-white transition-[background-color,scale] duration-150 ease-out hover:bg-primary-filled-hover active:scale-[0.96] sm:pl-5 sm:pr-[18px] sm:text-sm"
          >
            <span className="hidden sm:inline">Falar no </span>WhatsApp
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
