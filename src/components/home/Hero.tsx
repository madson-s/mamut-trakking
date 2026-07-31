import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { MediaCard } from '@/components/ui/MediaCard';
import { Emphasis, Text } from '@/components/ui/Text';
import { HeroDestinations } from './HeroDestinations';

/**
 * home_session-01 — HERO.
 *
 * Fidelidade Figma (nodes 896:4150 desktop-1440 e 896:4620 desktop-1920):
 *   • Card do background: altura fixa 707. Largura = 100% do viewport menos
 *     margem lateral proporcional (1.667vw, com piso 24px). Isso dá 1392 @ 1440
 *     e 1856 @ 1920, exatamente como o Figma. Radius também escala.
 *   • Grid de conteúdo: **fixo em 1216** (12 col × 72 + 11 gap × 32),
 *     centralizado dentro do card. Quanto maior o viewport, maior o respiro
 *     entre o grid e a borda do card — não o grid.
 *   • Coluna esquerda 580 (bottom-aligned, bottom:100 do card).
 *   • Coluna direita 414, alinhada pela base com os CTAs (bottom:100).
 *   • Humanos-amarelos 155×60 absolutos dentro do H1.
 *
 * Abaixo de `lg`, todo o layout absoluto vira flex-col empilhado. A coluna
 * direita esconde (não cabe em telas estreitas).
 *
 * A caixa/véu/foto vêm do `MediaCard`; tipografia e CTAs, dos primitivos de
 * `@/components/ui`. Só o posicionamento absoluto do Figma mora aqui.
 */
export function Hero() {
  return (
    <section className="w-full pt-2">
      {/* Card wrapper — margem lateral proporcional ao viewport */}
      <div className="w-full px-[max(24px,1.667vw)]">
        <MediaCard
          overlay="left"
          radius="panel"
          backdrop="media"
          className="mx-auto min-h-[560px] lg:h-[707px] 2xl:max-w-[1562px] 2xl:rounded-panel-lg"
          contentLayer="fill"
          media={
            <picture className="contents">
              <source
                media="(min-width: 1536px)"
                srcSet="/img/home_backgroud/home_backgroud_01_no_crop_1x.webp"
              />
              <img
                src="/img/home_backgroud/home_backgroud_crop_01_1x.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center 2xl:inset-auto 2xl:top-[-101px] 2xl:left-[clamp(-11px,calc(6.4706%-101.06px),0px)] 2xl:h-[850px] 2xl:w-[1562px] 2xl:max-w-none"
              />
            </picture>
          }
        >
          {/* Grid de conteúdo — 1216 fixo, centralizado no card.
              Abaixo de lg: flex-col justify-end (empilhado no fundo).
              A partir de lg: block com posicionamento absoluto. */}
          <div className="relative mx-auto flex h-full max-w-[1216px] flex-col justify-end px-6 pb-8 lg:block lg:px-0 lg:pb-0">
            {/* ---- LEFT (text-main) ---- */}
            <div className="flex w-full flex-col gap-6 lg:absolute lg:bottom-[100px] lg:left-0 lg:w-[620px]">
              <Text size="lg" weight="light" tone="onMediaSoft">
                Guias nativos · Chapada Diamantina · Lençóis, Bahia
              </Text>

              {/* H1 — 72px Mergo com humanos-amarelos absolutos entre MAMUT e GUIA. */}
              <Heading as="h1" size="hero" tone="onMedia" className="relative">
                <span className="inline">MAMUT</span>
                {/* Espaço reservado no fluxo para caber o asset absoluto (só no lg+) */}
                <span aria-hidden className="hidden lg:inline-block" style={{ width: '172px' }} />{' '}
                <span className="inline">GUIA.</span>
                <br />
                VOCÊ SÓ PRECISA
                <br />
                APROVEITAR.
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/humans-assets-yellow.svg"
                  alt=""
                  className="pointer-events-none absolute hidden lg:block"
                  style={{ left: '236px', top: '4px', width: '172px', height: '66px' }}
                />
              </Heading>

              {/* Sub-bloco (455px no Figma) */}
              <div className="flex max-w-[455px] flex-col gap-8">
                <Text size="lg" weight="light" tone="onMediaSoft">
                  Trekkings guiados por quem é filho da Chapada Diamantina.
                  <br />
                  Cada trilha é uma jornada de volta ao que você é.
                </Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button href="/pt/aventuras" arrow>
                    Escolha a sua trilha
                  </Button>
                  <Button href="#" variant="outlineOnMedia">
                    Falar com guia
                  </Button>
                </div>
              </div>
            </div>

            {/* ---- RIGHT (right-assets) ----
                Absoluta a partir de lg. right:0 = alinha à borda direita do
                grid 1216; bottom:100 alinha a base com os CTAs. */}
            <div className="absolute right-0 bottom-[100px] hidden w-[414px] flex-col gap-6 lg:flex">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/_icons/icon_03_montain.svg"
                  alt=""
                  className="h-5 w-[31px] shrink-0 brightness-0 invert"
                />
                <Text
                  size="base"
                  weight="light"
                  tone="onMediaMuted"
                  leading="tight"
                  className="w-[188px]"
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
