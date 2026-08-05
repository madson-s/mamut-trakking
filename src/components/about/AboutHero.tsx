import Image from 'next/image';
import { Button, Container, Heading, MediaCard, Text } from '@/components/ui';
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
      className="about-hero -mt-20 min-h-[760px] lg:min-h-[815px]"
      contentLayer="fill"
      contentClassName="pt-20"
    >
      <Container className="relative flex h-full min-h-[680px] flex-col items-center justify-center pb-40 pt-14 text-center lg:min-h-[735px] lg:pb-44 lg:pt-20">
        <div className="flex max-w-[760px] flex-col items-center gap-7">
          <Heading as="h1" size="hero" tone="onMedia" balance>
            <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span>Nascidos</span>
              <span className="flex -space-x-4 sm:-space-x-5" aria-hidden>
                {HERO_FACES.map((guide) => (
                  <Image
                    key={guide.name}
                    src={guide.photo}
                    alt=""
                    width={62}
                    height={62}
                    sizes="(min-width: 640px) 62px, 42px"
                    className="relative size-11 rounded-full object-cover shadow-image-outline transition-[transform,box-shadow] duration-500 ease-brand hover:z-10 hover:scale-[1.18] hover:shadow-float motion-reduce:transition-none motion-reduce:hover:scale-100 sm:size-[62px]"
                    style={guide.position ? { objectPosition: guide.position } : undefined}
                  />
                ))}
              </span>
              <span>aqui.</span>
            </span>
            <span className="block">Formados pela Chapada.</span>
          </Heading>

          <Text size="lg" weight="light" tone="onMediaSoft" pretty className="max-w-[595px]">
            Trekkings guiados por quem é filho da Chapada Diamantina — cada trilha é uma
            jornada de volta ao que você é.
          </Text>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#guias" arrow>
              Conheça o bando
            </Button>
            <Button href={SITE.whatsappUrl} variant="outlineOnMedia">
              Falar com guia
            </Button>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 flex w-[min(92vw,630px)] -translate-x-1/2 items-end justify-between">
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
