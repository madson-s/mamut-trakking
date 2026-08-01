import Image, { getImageProps } from 'next/image';
import { Button, Heading, MediaCard, Section, SectionHeading, Text } from '@/components/ui';

// Foto do card em duas molduras (art direction): a partir de sm entra a versão
// recortada na altura do card; abaixo, a foto inteira. Dimensões = arquivos.
const CARD_WIDE = { src: '/img/session_02_saqure_text_crop.webp', width: 1217, height: 284 };
const CARD_TALL = { src: '/img/session-02_saqure-text_no-crop.webp', width: 2000, height: 1600 };

// home_session-02 — "Somos o bando que guia a sua tribo" + card do manifesto.
export function ManifestoSection() {
  // Mesma técnica do hero: `<source media>` não existe no `<Image>`, então as
  // duas molduras vêm do otimizador por `getImageProps`. Card fora da primeira
  // dobra, então segue lazy (default).
  const cardCommon = { alt: '', sizes: '100vw' } as const;
  const {
    props: { srcSet: cardWideSrcSet },
  } = getImageProps({ ...cardCommon, ...CARD_WIDE });
  const { props: cardTallProps } = getImageProps({ ...cardCommon, ...CARD_TALL });

  return (
    <Section containerClassName="flex flex-col items-center gap-12">
      <SectionHeading
        align="center"
        size="hero"
        spacing="loose"
        maxWidth="max-w-[672px]"
        eyebrow={
          <Text size="xl" weight="light">
            Inspirados pelos nossos antepassados nômades
          </Text>
        }
        title={
          <>
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:flex-nowrap sm:gap-x-4">
              Somos o
              <Image
                src="/img/mamut_logo_pren_morro-1.webp"
                alt=""
                width={1175}
                height={665}
                sizes="(min-width: 1024px) 145px, (min-width: 640px) 116px, 81px"
                className="inline-block h-[46px] w-[81px] shrink-0 object-contain align-middle sm:h-[66px] sm:w-[116px] lg:h-[82px] lg:w-[145px]"
              />
              bando
            </span>
            <br />
            que guia a sua tribo.
          </>
        }
      />

      <MediaCard
        overlay="tint"
        radius="panel"
        backdrop="media"
        className="min-h-[520px] w-full sm:min-h-[420px] sm:rounded-panel-lg lg:h-[284px] lg:min-h-0"
        contentLayer="fill"
        contentClassName="flex flex-col items-start px-8 py-10 sm:px-12 sm:py-11 lg:px-20 lg:py-[42px]"
        media={
          <picture className="contents">
            <source media="(min-width: 640px)" srcSet={cardWideSrcSet} />
            {/* Fallback do `<picture>` com o srcSet otimizado de `getImageProps`. */}
            <img
              {...cardTallProps}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </picture>
        }
      >
        <div className="flex max-w-[428px] flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Text size="lg" weight="light" tone="onMedia" leading="relaxed" pretty className="sm:text-xl">
              Na imensidão dos mega continentes, os mamutes caminhavam em grandes grupos — marcando
              sua existência para sempre.
            </Text>
            <Heading as="p" size="quote" tone="onMedia">
              É dessa memória que nascemos.
            </Heading>
          </div>
          <Button href="/pt/manifesto" variant="outlineOnMedia" arrow>
            Leia nosso manifesto
          </Button>
        </div>

        {/* Figuras caminhando (yellow line-art), ancoradas à borda inferior do
            card. Absoluta resolve contra a padding box da camada de conteúdo,
            que cobre o card inteiro — o padding do texto não a desloca. */}
        <Image
          src="/svg/humans-assets-yellow.svg"
          alt=""
          width={784}
          height={246}
          unoptimized
          className="pointer-events-none absolute bottom-0 right-[-12%] h-auto w-[min(112vw,485px)] max-w-none sm:right-[-3%] sm:w-[420px] lg:right-0 lg:h-[192px] lg:w-[485px]"
        />
      </MediaCard>
    </Section>
  );
}
