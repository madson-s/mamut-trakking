import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { MediaCard } from '@/components/ui/MediaCard';
import { Emphasis, Text } from '@/components/ui/Text';
import { HeroDestinations } from './HeroDestinations';

const HERO_BACKGROUND = '/img/home_backgroud/home_hero_background_1_5x.webp';

export function Hero() {
  return (
    <section className="home-hero -mt-20 w-full pt-0 sm:mt-0 sm:pt-2">
      <div className="w-full px-0 sm:px-[max(24px,1.667vw)]">
        <MediaCard
          overlay="left"
          radius="none"
          backdrop="media"
          className="mx-auto min-h-160 sm:min-h-140 sm:rounded-panel lg:h-176.75 2xl:rounded-panel-lg"
          contentLayer="fill"
          media={
            <Image
              src={HERO_BACKGROUND}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          }
        >
          <div className="relative mx-auto flex h-full max-w-304 flex-col justify-end px-6 pb-8 lg:block lg:px-0 lg:pb-0">
            <div className="flex w-full flex-col gap-5 lg:absolute lg:bottom-25 lg:left-6 lg:w-155 lg:gap-6">
              <Text size="sm" weight="light" tone="onMediaSoft" className="sm:text-lg">
                Guias nativos · Chapada Diamantina
                <span className="hidden sm:inline"> · Lençóis, Bahia</span>
              </Text>

              <Heading as="h1" size="hero" tone="onMedia" className="relative">
                <span className="inline">MAMUT</span>
                <Image
                  src="/svg/about/story-walkers.svg"
                  alt=""
                  width={290}
                  height={114}
                  unoptimized
                  className="pointer-events-none mx-1.5 inline-block h-[0.7em] w-auto align-middle lg:hidden"
                />
                <span aria-hidden className="hidden lg:inline-block" style={{ width: '172px' }} />{' '}
                <span className="inline">GUIA.</span>
                <br />
                VOCÊ SÓ PRECISA
                <br />
                APROVEITAR.
                <Image
                  src="/svg/about/story-walkers.svg"
                  alt=""
                  width={290}
                  height={114}
                  unoptimized
                  className="pointer-events-none absolute hidden lg:block"
                  style={{ left: '236px', top: '4px', width: '172px', height: '66px' }}
                />
              </Heading>

              <div className="flex max-w-113.75 flex-col gap-6 lg:gap-8">
                <Text size="sm" weight="light" tone="onMediaSoft" className="sm:text-lg">
                  Trekkings guiados por quem é filho da Chapada Diamantina.
                  <br className="hidden sm:inline" /> Cada trilha é uma jornada de volta ao que você
                  é.
                </Text>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button href="/pt/aventuras" arrow className="w-full sm:w-auto">
                    Escolha a sua trilha
                  </Button>
                  <Button href="#" variant="outlineOnMedia" className="w-full sm:w-auto">
                    Falar com guia
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2.5 lg:hidden">
                <Image
                  src="/svg/_icons/icon_03_montain.svg"
                  alt=""
                  width={244}
                  height={157}
                  unoptimized
                  className="h-4 w-6.25 shrink-0 brightness-0 invert"
                />
                <Text size="xs" weight="light" tone="onMediaMuted" leading="tight">
                  Uma <Emphasis size="xs">jornada</Emphasis> de resgate das práticas{' '}
                  <Emphasis size="xs">primitivas</Emphasis>
                </Text>
              </div>
            </div>

            <div className="absolute right-6 bottom-25 hidden w-fit flex-col gap-6 lg:flex">
              <div className="flex items-center gap-3">
                <Image
                  src="/svg/_icons/icon_03_montain.svg"
                  alt=""
                  width={244}
                  height={157}
                  unoptimized
                  className="h-5 w-7.75 shrink-0 brightness-0 invert"
                />
                <Text
                  size="base"
                  weight="light"
                  tone="onMediaMuted"
                  leading="tight"
                  className="whitespace-nowrap"
                >
                  Uma <Emphasis size="sm">jornada</Emphasis> de resgate das práticas{' '}
                  <Emphasis size="sm">primitivas</Emphasis>
                </Text>
              </div>

              <HeroDestinations />
            </div>
          </div>
        </MediaCard>
      </div>
    </section>
  );
}
