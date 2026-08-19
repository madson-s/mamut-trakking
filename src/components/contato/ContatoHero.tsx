import { Container, Heading, MediaCard, Text } from '@/components/ui';
import { SITE } from '@/lib/site';

// Hero baixo, no mesmo molde do /pt/manifesto: foto full-bleed sob o header,
// título e os dois canais diretos já clicáveis.
export function ContatoHero() {
  return (
    <MediaCard
      as="section"
      radius="none"
      overlay="soft"
      backdrop="media"
      image={{
        src: '/img/about/cta-pai-inacio.webp',
        alt: 'Trilha em direção ao Morro do Pai Inácio',
        sizes: '100vw',
        preload: true,
        position: '50% 58%',
      }}
      className="-mt-20 min-h-105 lg:min-h-125"
      contentLayer="fill"
      contentClassName="pt-20"
    >
      <Container className="relative flex h-full min-h-85 flex-col items-start justify-center pt-14 pb-12 text-left lg:min-h-105 lg:items-center lg:pt-20 lg:pb-16 lg:text-center">
        <div className="flex max-w-190 flex-col items-start gap-6 lg:items-center lg:gap-7">
          <Heading
            as="h1"
            size="hero"
            tone="onMedia"
            balance
            className="max-lg:text-[clamp(30px,9vw,40px)]"
          >
            Contato
          </Heading>

          <Text size="sm" weight="light" tone="onMediaSoft" pretty className="lg:text-lg">
            Faça contato conosco.
          </Text>

          <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-4">
            <a
              href={`tel:${SITE.whatsapp.replace(/[^+\d]/g, '')}`}
              className="font-body text-lg text-on-media underline-offset-4 transition-colors ease-brand hover:text-brand-strong hover:underline lg:text-xl"
            >
              {SITE.whatsapp}
            </a>
            <span aria-hidden className="hidden text-on-media/40 lg:inline">
              —
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="font-body text-lg text-on-media underline-offset-4 transition-colors ease-brand hover:text-brand-strong hover:underline lg:text-xl"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </Container>
    </MediaCard>
  );
}
