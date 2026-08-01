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
    links: ['Roteiros', 'Datas disponíveis', 'Como se preparar', 'Dicas de trilha'],
  },
  { title: 'SOBRE', links: ['Quem Somos', 'Manifesto', 'Guias Nativos'] },
  { title: 'CONTATO', links: ['WhatsApp', 'TripAdvisor', 'Instagram'] },
];

const linkClasses = cn('transition-colors hover:text-content', motion.fast);

export function HomeFooter() {
  return (
    <footer className="w-full border-t border-line bg-surface-muted">
      <Container className="flex flex-col gap-12 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-xs flex-col gap-4">
            <Image
              src="/svg/mamut-logo-branco.svg"
              alt={SITE.name}
              width={458}
              height={264}
              unoptimized
              className="theme-logo h-11 w-auto self-start"
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

          <div className="flex flex-wrap gap-12">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3.5">
                <Text as="span" size="xs" weight="semibold">
                  {col.title}
                </Text>
                {col.links.map((label) => (
                  <Text key={label} as="span" size="sm" tone="secondary">
                    <Link href="#" className={linkClasses}>
                      {label}
                    </Link>
                  </Text>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Text size="xs" tone="secondary">
            © 2025 {SITE.name}
          </Text>
          <Text size="xs" tone="secondary" className="hidden md:block">
            Todos os direitos reservados · {SITE.name} ©
          </Text>
          <div className="flex items-center gap-4">
            <Theme variant="switch" size="sm" />
            <div className="flex items-center gap-2 text-content-secondary">
              <a href="#" aria-label="Instagram" className={linkClasses}>
                <InstagramIcon className="size-6" />
              </a>
              <a href="#" aria-label="Facebook" className={linkClasses}>
                <FacebookIcon className="size-6" />
              </a>
            </div>
            <Button href={SITE.whatsappUrl} size="sm" arrow className="w-[178px]">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
