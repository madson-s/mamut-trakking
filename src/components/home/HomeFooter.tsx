import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { motion } from '@/design/tokens';
import {
  Button,
  Container,
  Divider,
  FacebookIcon,
  InstagramIcon,
  Text,
} from '@/components/ui';
import { Theme } from '@/components/ui/theme';
import { SITE } from '@/lib/site';

const COLUMNS = [
  {
    title: 'AVENTURAS',
    onMobile: true,
    links: [
      { label: 'Roteiros', href: '/pt/aventuras' },
      { label: 'Datas disponíveis', href: '/pt/aventuras' },
      { label: 'Como se preparar', href: '/pt/dicas' },
      { label: 'Dicas de trilha', href: '/pt/dicas' },
    ],
  },
  {
    title: 'SOBRE',
    onMobile: true,
    links: [
      { label: 'Quem Somos', href: '/pt/sobre' },
      { label: 'Manifesto', href: '/pt/sobre#manifesto' },
      { label: 'Guias Nativos', href: '/pt/sobre#guias' },
    ],
  },
  {
    title: 'CONTATO',
    onMobile: false,
    links: [
      { label: 'WhatsApp', href: SITE.whatsappUrl },
      { label: 'TripAdvisor', href: 'https://www.tripadvisor.com.br/' },
      { label: 'Instagram', href: 'https://www.instagram.com/' },
    ],
  },
];

const linkClasses = cn('transition-colors hover:text-content', motion.fast);

export function HomeFooter() {
  return (
    <footer className="w-full border-t border-line bg-surface-muted">
      <Container className="flex flex-col gap-8 py-12 lg:gap-12 lg:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row lg:gap-10">
          <div className="flex max-w-xs flex-col gap-4">
            <Image
              src="/svg/Mamut treeking-logo-branco.svg"
              alt={SITE.name}
              width={1046}
              height={264}
              unoptimized
              className="theme-logo h-9 w-auto self-start lg:hidden"
            />
            <Image
              src="/svg/mamut-logo-branco.svg"
              alt=""
              width={458}
              height={264}
              unoptimized
              className="theme-logo hidden h-11 w-auto self-start lg:block"
            />
            <Text size="sm" tone="muted" leading="snug">
              Trekkings guiados por quem é
              <br />
              filho da Chapada Diamantina.
            </Text>
            <Text size="xs" weight="semibold" tone="secondary" className="tracking-wide">
              LENÇÓIS · BAHIA · BRASIL
            </Text>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:flex lg:flex-wrap lg:gap-12">
            {COLUMNS.map((col) => (
              <nav
                key={col.title}
                aria-label={col.title}
                className={cn(
                  'flex flex-col gap-2 lg:gap-3.5',
                  !col.onMobile && 'max-lg:hidden',
                )}
              >
                <Text as="span" size="xs" weight="semibold">
                  {col.title}
                </Text>
                {col.links.map((link) => (
                  <Text key={link.label} as="span" size="sm" tone="secondary">
                    <Link href={link.href} className={linkClasses}>
                      {link.label}
                    </Link>
                  </Text>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <Text size="xs" tone="secondary" className="max-lg:hidden">
            © 2025 {SITE.name}
          </Text>
          <Text size="xs" tone="secondary">
            Todos os direitos reservados · {SITE.name} ©
          </Text>

          <Button href={SITE.whatsappUrl} size="sm" arrow className="lg:hidden">
            Falar no WhatsApp
          </Button>

          <div className="flex items-center gap-2 lg:hidden">
            <a href="#" className={linkClasses}>
              <Text as="span" size="xs" tone="secondary">
                Instagram
              </Text>
            </a>
            <Text as="span" size="xs" tone="muted" aria-hidden>
              ·
            </Text>
            <a href="#" className={linkClasses}>
              <Text as="span" size="xs" tone="secondary">
                Facebook
              </Text>
            </a>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Theme variant="switch" size="sm" />
            <div className="flex items-center gap-2 text-content-secondary">
              <a href="#" aria-label="Instagram" className={linkClasses}>
                <InstagramIcon className="size-6" />
              </a>
              <a href="#" aria-label="Facebook" className={linkClasses}>
                <FacebookIcon className="size-6" />
              </a>
            </div>
            <Button href={SITE.whatsappUrl} size="sm" arrow className="w-44.5">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
