import Image from 'next/image';
import { Button, Heading, MediaCard, Section, Text } from '@/components/ui';
import { SITE } from '@/lib/site';

export function AboutCta() {
  return (
    <Section padding="tall" containerClassName="relative">
      <MediaCard
        as="section"
        overlay="none"
        radius="panelLg"
        backdrop="none"
        className="max-lg:rounded-none lg:h-116.5 lg:bg-media-backdrop lg:shadow-image-outline"
        contentLayer="flow"
        contentClassName="flex items-center max-lg:justify-center max-lg:text-center sm:px-14 lg:h-full lg:px-22.25"
        media={
          <>
            <Image
              src="/img/about/cta-pai-inacio.webp"
              alt="Trilha diante do Morro do Pai Inácio"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              style={{ objectPosition: '50% 55%' }}
              className="hidden object-cover lg:block"
            />
            <div
              aria-hidden
              className="absolute inset-0 hidden bg-linear-to-r from-black/70 via-black/40 to-black/10 lg:block"
            />
          </>
        }
      >
        <div className="relative z-10 flex max-w-154 flex-col gap-6 max-lg:items-center">
          <div className="flex flex-col gap-3">
            <Heading
              as="h2"
              size="hero"
              tone="onMedia"
              balance
              className="max-lg:text-[clamp(28px,8.4vw,36px)]"
            >
              Sua trilha começa
              <br />
              com uma mensagem.
            </Heading>
            <Text
              size="sm"
              weight="light"
              tone="onMediaSoft"
              pretty
              className="max-w-131.5 lg:text-xl"
            >
              Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a
              Chapada Diamantina e como se preparar.
            </Text>
          </div>
          <Button href={SITE.whatsappUrl} arrow className="max-lg:w-full lg:self-start">
            Entrar para o bando
          </Button>
        </div>

        <Image
          src="/svg/about/story-walkers.svg"
          alt=""
          width={290}
          height={114}
          unoptimized
          className="pointer-events-none absolute right-6 bottom-0 hidden h-auto w-[42%] max-w-125 lg:block xl:right-10"
        />
      </MediaCard>
    </Section>
  );
}
