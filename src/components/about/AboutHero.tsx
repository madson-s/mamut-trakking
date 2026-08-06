import Image from 'next/image';
import { Button, Container, Emphasis, Heading, MediaCard, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';
import { GUIDES } from './about-data';

const HERO_FACES = GUIDES.slice(0, 6);

export function AboutHero() {
  return (
    <MediaCard
      as="section"
      radius="none"
      overlay="soft"
      backdrop="media"
      image={{
        src: '/img/about/hero-lencois.webp',
        alt: 'Centro histórico de Lençóis ao pôr do sol',
        sizes: '100vw',
        preload: true,
        position: '50% 71%',
      }}
      className="about-hero -mt-20 min-h-160 lg:min-h-203.75"
      contentLayer="fill"
      contentClassName="pt-20"
    >
      <Container className="relative flex h-full min-h-140 flex-col items-start justify-center pt-14 pb-16 text-left lg:min-h-183.75 lg:items-center lg:pt-20 lg:pb-44 lg:text-center">
        <div className="flex max-w-190 flex-col items-start gap-6 lg:items-center lg:gap-7">
          <Heading
            as="h1"
            size="hero"
            tone="onMedia"
            balance
            className="max-lg:text-[clamp(30px,9vw,40px)]"
          >
            <span className="flex flex-wrap items-center gap-x-3 gap-y-2 lg:justify-center">
              <span>Nascidos</span>
              <span className="flex -space-x-4 sm:-space-x-5" aria-hidden>
                {HERO_FACES.map((guide, index) => (
                  <Image
                    key={guide.name}
                    src={guide.photo}
                    alt=""
                    width={62}
                    height={62}
                    sizes="(min-width: 640px) 62px, 42px"
                    className={cn(
                      'relative size-11 rounded-full object-cover shadow-image-outline transition-[transform,box-shadow] duration-500 ease-brand hover:z-10 hover:scale-[1.18] hover:shadow-float motion-reduce:transition-none motion-reduce:hover:scale-100 sm:size-15.5',
                      index >= 3 && 'max-lg:hidden',
                    )}
                    style={guide.position ? { objectPosition: guide.position } : undefined}
                  />
                ))}
              </span>
              <span aria-hidden className="text-content-muted lg:hidden">
                …
              </span>
              <span className="max-lg:hidden">aqui.</span>
            </span>
            <span className="block lg:hidden">aqui formados pela Chapada.</span>
            <span className="hidden lg:block">Formados pela Chapada.</span>
          </Heading>

          <Text
            size="sm"
            weight="light"
            tone="onMediaSoft"
            pretty
            className="max-w-148.75 lg:text-lg"
          >
            <span className="lg:hidden">
              Trekkings guiados por quem é filho da Chapada Diamantina. Cada trilha é uma jornada
              de volta ao que você é.
            </span>
            <span className="max-lg:hidden">
              Trekkings guiados por quem é filho da Chapada Diamantina — cada trilha é uma jornada
              de volta ao que você é.
            </span>
          </Text>

          <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:justify-center">
            <Button href="#guias" arrow className="max-lg:w-full">
              Conheça o bando
            </Button>
            <Button href={SITE.whatsappUrl} variant="outlineOnMedia" className="max-lg:w-full">
              Falar com guia
            </Button>
          </div>

          <div className="flex items-center gap-2.5 self-center lg:hidden">
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

        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden w-[min(92vw,630px)] -translate-x-1/2 items-end justify-between lg:flex">
          <Image
            src="/svg/about/humans-yellow.svg"
            alt=""
            width={769}
            height={246}
            unoptimized
            className="h-auto w-[46%]"
          />
          <Image
            src="/svg/about/mamut-yellow.svg"
            alt=""
            width={273}
            height={157}
            unoptimized
            className="h-auto w-[43%]"
          />
        </div>
      </Container>
    </MediaCard>
  );
}
