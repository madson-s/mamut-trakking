import Link from 'next/link';
import { SITE } from '@/lib/site';
import { ArrowRightIcon, InstagramIcon, FacebookIcon } from '@/components/ui/icons';
import { Theme } from '@/components/ui/theme';

const COLUMNS = [
  {
    title: 'AVENTURAS',
    links: ['Roteiros', 'Datas disponíveis', 'Como se preparar', 'Dicas de trilha'],
  },
  { title: 'SOBRE', links: ['Quem Somos', 'Manifesto', 'Guias Nativos'] },
  { title: 'CONTATO', links: ['WhatsApp', 'TripAdvisor', 'Instagram'] },
];

export function HomeFooter() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-100">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-12 px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-xs flex-col gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/mamut-logo-branco.svg" alt={SITE.name} className="theme-logo h-11 w-auto self-start" />
            <p className="font-body text-sm leading-snug text-gray-500">
              Trekkings guiados por quem é
              <br />
              filho da Chapada Diamantina.
            </p>
            <p className="font-body text-xs font-semibold tracking-wide text-gray-600">
              LENÇÓIS · BAHIA · BRASIL
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5">
                <p className="font-body text-xs font-semibold text-gray-950">{col.title}</p>
                {col.links.map((label) => (
                  <Link
                    key={label}
                    href="#"
                    className="font-body text-sm text-gray-600 transition-colors hover:text-gray-950"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gray-200" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-gray-600">© 2025 {SITE.name}</p>
          <p className="hidden font-body text-xs text-gray-600 md:block">
            Todos os direitos reservados · {SITE.name} ©
          </p>
          <div className="flex items-center gap-4">
            <Theme variant="switch" size="sm" />
            <div className="flex items-center gap-2 text-gray-600">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-gray-950">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-gray-950">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-[178px] items-center justify-center gap-1.5 rounded-full bg-primary-500 pl-5 pr-[18px] font-body text-sm font-medium text-white transition-[background-color,scale] duration-150 ease-out hover:bg-primary-filled-hover active:scale-[0.96]"
            >
              Falar no WhatsApp
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
