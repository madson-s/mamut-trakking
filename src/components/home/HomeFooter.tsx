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
import { SITE, type Locale } from '@/lib/site';
import { CHROME } from './chrome-content';

const linkClasses = cn('transition-colors hover:text-content', motion.fast);

export function HomeFooter({ locale = 'pt' }: { locale?: Locale }) {
  const { tagline, place, columns, rights, whatsapp } = CHROME[locale].footer;

  return (
    <footer className="w-full border-t border-line bg-surface-muted">
      <Container className="flex flex-col gap-8 py-12 lg:gap-12 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="flex max-w-xs flex-col gap-4">
            <Image
              src="/svg/Mamut treeking-logo-branco.svg"
              alt={SITE.name}
              width={1046}
              height={264}
              unoptimized
              className="theme-logo h-9 w-auto self-start lg:h-11"
            />
            <Text size="sm" tone="muted" leading="snug">
              {tagline[0]}
              <br />
              {tagline[1]}
            </Text>
            <Text size="xs" weight="semibold" tone="secondary" className="tracking-wide">
              {place}
            </Text>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:flex lg:gap-10">
            {columns.map((col) => (
              <nav
                key={col.title}
                aria-label={col.title}
                className={cn(
                  'flex flex-col gap-2 lg:w-27 lg:gap-4',
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
            {rights} · {SITE.name} ©
          </Text>

          <Button href={SITE.whatsappUrl} size="sm" arrow className="lg:hidden">
            {whatsapp}
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

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 text-content-secondary">
              <a href="#" aria-label="Instagram" className={linkClasses}>
                <InstagramIcon className="size-6" />
              </a>
              <a href="#" aria-label="Facebook" className={linkClasses}>
                <FacebookIcon className="size-6" />
              </a>
            </div>
            <Button href={SITE.whatsappUrl} size="sm" arrow className="w-40.25">
              {whatsapp}
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
