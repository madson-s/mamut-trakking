import { cn } from '@/lib/cn';
import { motion } from '@/design/tokens';
import { Container, Divider, Heading, Text } from '@/components/ui';
import { SITE } from '@/lib/site';

const linkClasses = cn('transition-colors hover:text-content', motion.fast);

// Rodapé burro: dados de contato vêm das constantes do site; os rótulos
// (idioma da página) vêm por props.
export function SiteFooter({
  tagline,
  contactLabel,
  rightsLabel,
}: {
  tagline: string;
  contactLabel: string;
  rightsLabel: string;
}) {
  return (
    <footer className="mt-24 w-full border-t border-line bg-surface-muted">
      <Container className="flex flex-col gap-10 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Heading as="p" size="label">
              {SITE.name}
            </Heading>
            <Text size="sm" tone="muted" className="max-w-sm">
              {tagline}
            </Text>
            <Text size="sm" tone="muted">
              {SITE.location}
            </Text>
          </div>

          <div className="flex flex-col gap-2">
            <Text size="sm" weight="medium">
              {contactLabel}
            </Text>
            <ul className="flex flex-col gap-1">
              <Text as="li" size="sm" tone="muted">
                <a href={SITE.whatsappUrl} className={linkClasses}>
                  WhatsApp {SITE.whatsapp}
                </a>
              </Text>
              <Text as="li" size="sm" tone="muted">
                <a href={`mailto:${SITE.email}`} className={linkClasses}>
                  {SITE.email}
                </a>
              </Text>
              <Text as="li" size="sm" tone="muted">
                Cadastur {SITE.cadastur}
              </Text>
            </ul>
          </div>
        </div>

        <Divider />

        <Text size="xs" tone="muted">
          © {SITE.name}. {rightsLabel}
        </Text>
      </Container>
    </footer>
  );
}
