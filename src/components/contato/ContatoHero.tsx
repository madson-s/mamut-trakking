import { PageHero, Text } from '@/components/ui';
import { SITE } from '@/lib/site';

const linkClasses =
  'font-body text-lg text-on-media underline-offset-4 transition-colors ease-brand hover:text-brand-strong hover:underline lg:text-xl';

export function ContatoHero() {
  return (
    <PageHero
      image={{
        src: '/img/about/cta-pai-inacio.webp',
        alt: 'Trilha em direção ao Morro do Pai Inácio',
        position: '50% 58%',
      }}
      title="Contato"
      lead={
        <Text size="sm" weight="light" tone="onMediaSoft" pretty className="lg:text-lg">
          Faça contato conosco.
        </Text>
      }
    >
      <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-4">
        <a href={`tel:${SITE.whatsapp.replace(/[^+\d]/g, '')}`} className={linkClasses}>
          {SITE.whatsapp}
        </a>
        <span aria-hidden className="hidden text-on-media/40 lg:inline">
          —
        </span>
        <a href={`mailto:${SITE.email}`} className={linkClasses}>
          {SITE.email}
        </a>
      </div>
    </PageHero>
  );
}
