import Image from 'next/image';
import { Button, Heading, MediaCard, Section, Text } from '@/components/ui';
import { SITE } from '@/lib/site';

export function AboutCta() {
  return (
    <Section padding="tall" containerClassName="relative">
      <MediaCard
        as="section"
        overlay="left"
        radius="panelLg"
        backdrop="media"
        image={{
          src: '/img/about/cta-pai-inacio.webp',
          alt: 'Trilha diante do Morro do Pai Inácio',
          sizes: '(min-width: 1280px) 1216px, 100vw',
          position: '50% 55%',
        }}
        className="min-h-[520px] shadow-image-outline lg:h-[466px] lg:min-h-0"
        contentLayer="fill"
        contentClassName="flex items-center px-8 py-12 sm:px-14 lg:px-[89px]"
      >
        <div className="relative z-10 flex max-w-[620px] flex-col gap-6">
          <Heading as="h2" size="hero" tone="onMedia" balance>
            Sua trilha começa
            <br />
            com uma mensagem.
          </Heading>
          <Text size="xl" weight="light" tone="onMediaSoft" pretty className="max-w-[526px]">
            Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a
            Chapada Diamantina e como se preparar.
          </Text>
          <Button href={SITE.whatsappUrl} arrow className="self-start">
            Entrar para o bando
          </Button>
        </div>

        <Image
          src="/svg/about/story-walkers.svg"
          alt=""
          width={290}
          height={114}
          unoptimized
          className="pointer-events-none absolute bottom-0 right-6 hidden h-auto w-[42%] max-w-[500px] lg:block xl:right-10"
        />
      </MediaCard>
    </Section>
  );
}
