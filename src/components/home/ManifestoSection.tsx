import Image, { getImageProps } from 'next/image';
import { Button, Heading, MediaCard, Section, Text } from '@/components/ui';

const CARD_WIDE = { src: '/img/session_02_saqure_text_crop.webp', width: 1217, height: 284 };
const CARD_TALL = { src: '/img/session-02_saqure-text_no-crop.webp', width: 2000, height: 1600 };
const WALKERS = { src: '/svg/humans-assets-yellow.svg', width: 784, height: 246 };

export function ManifestoSection() {
  const cardCommon = { alt: '', sizes: '100vw' } as const;
  const {
    props: { srcSet: cardWideSrcSet },
  } = getImageProps({ ...cardCommon, ...CARD_WIDE });
  const { props: cardTallProps } = getImageProps({ ...cardCommon, ...CARD_TALL });

  return (
    <Section containerClassName="flex flex-col items-center gap-12 lg:gap-10.5">
      <div className="flex max-w-2xl flex-col items-center gap-8 text-center sm:gap-12">
        <Text size="sm" weight="light" className="sm:text-xl">
          Inspirados pelos nossos antepassados nômades
        </Text>

        <Heading size="hero" className="max-sm:text-[clamp(30px,9vw,36px)]">
          <span className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:flex-nowrap sm:gap-x-4">
            Somos o
            <Image
              src="/img/mamut_logo_pren_morro-1.webp"
              alt=""
              width={1175}
              height={665}
              sizes="(min-width: 1024px) 145px, (min-width: 640px) 116px, 92px"
              className="inline-block h-13 w-23 shrink-0 object-contain align-middle sm:h-16.5 sm:w-29 lg:h-20.5 lg:w-36.25"
            />
            bando
          </span>
          <br />
          que guia a sua tribo.
        </Heading>
      </div>

      <div className="relative w-full">
        <MediaCard
          overlay="tint"
          radius="card"
          backdrop="media"
          className="min-h-57.25 w-full sm:min-h-105 sm:rounded-panel-lg lg:h-71 lg:min-h-0"
          contentLayer="fill"
          contentClassName="flex flex-col items-center justify-center px-3 py-6 text-center sm:px-12 sm:py-11 lg:items-start lg:justify-start lg:px-20 lg:py-[42px] lg:text-left"
          media={
            <picture className="contents">
              <source media="(min-width: 640px)" srcSet={cardWideSrcSet} />
              <img
                {...cardTallProps}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </picture>
          }
        >
          <div className="flex max-w-107 flex-col items-center gap-5 sm:gap-6 lg:items-start">
            <div className="flex flex-col gap-3">
              <Text size="base" weight="light" tone="onMedia" leading="relaxed" pretty className="sm:text-xl">
                Na imensidão dos mega continentes, os mamutes caminhavam em grandes grupos — marcando
                sua existência para sempre.
              </Text>
              <Heading
                as="p"
                size="quote"
                tone="onMedia"
                className="max-sm:text-[clamp(18px,6.1vw,24px)] max-sm:whitespace-nowrap"
              >
                É dessa memória que nascemos.
              </Heading>
            </div>
            <Button href="/pt/manifesto" variant="outlineOnMedia" arrow>
              Leia nosso manifesto
            </Button>
          </div>
        </MediaCard>

        <Image
          {...WALKERS}
          alt=""
          unoptimized
          className="pointer-events-none mx-auto mt-10 h-auto w-[min(80vw,340px)] max-w-none lg:hidden"
        />

        <Image
          {...WALKERS}
          alt=""
          unoptimized
          className="pointer-events-none absolute right-6 bottom-0 hidden h-auto w-[min(70vw,300px)] max-w-none translate-y-[40%] sm:right-10 sm:w-105 lg:right-16 lg:block lg:w-121.25"
        />
      </div>
    </Section>
  );
}
