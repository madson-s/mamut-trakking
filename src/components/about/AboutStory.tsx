import Image from 'next/image';
import {
  Card,
  Container,
  Heading,
  MediaCard,
  Section,
  SectionHeading,
  Text,
} from '@/components/ui';
import type { Locale } from '@/lib/site';
import { ABOUT_CONTENT } from './about-content';

// Só os ícones ficam aqui; título e texto de cada selo vêm do idioma.
const AUTHORITY_ICONS = [
  '/svg/_icons/icon_09_location.svg',
  '/svg/_icons/icon_04_care.svg',
  '/svg/_icons/icon_03_montain.svg',
  '/svg/_icons/icon_10_home.svg',
] as const;

export function AboutStory({ locale = 'pt' }: { locale?: Locale }) {
  const c = ABOUT_CONTENT[locale].story;
  const selos = c.selos.map((selo, i) => ({ ...selo, icon: AUTHORITY_ICONS[i] }));
  return (
    <Section
      id="manifesto"
      padding="none"
      container={false}
      className="relative overflow-hidden border-b border-line py-16 lg:pt-12 lg:pb-[108px]"
      labelledBy="about-story-title"
    >
      <Image
        src="/svg/about/story-landscape-line.svg"
        alt=""
        width={1440}
        height={804}
        unoptimized
        className="about-story-backdrop pointer-events-none absolute inset-x-0 top-52 bottom-0 w-full object-cover object-bottom opacity-45 lg:top-115"
      />

      <Container className="relative flex flex-col items-center gap-16">
        <SectionHeading
          titleId="about-story-title"
          align="center"
          size="hero"
          maxWidth="max-w-[820px]"
          title={
            <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
              {c.titulo.l1}
              <br />
              {c.titulo.l2} <span className="text-brand-strong">{c.titulo.l3}</span>
              <br />
              <span className="text-brand-strong">{c.titulo.l4}</span>{' '}
              <Image
                src="/img/about/mamut-landscape.webp"
                alt=""
                width={203}
                height={114}
                sizes="(min-width: 640px) 120px, 82px"
                className="inline-block h-[0.8em] w-[1.42em] object-contain align-middle"
              />{' '}
              <span className="text-brand-strong">{c.titulo.l5}</span>
            </span>
          }
        />

        <div className="grid w-full gap-6 lg:grid-cols-[426px_1fr_1fr] lg:items-stretch">
          <MediaCard
            as="article"
            overlay="none"
            radius="panelLg"
            backdrop="media"
            image={{
              src: '/img/about/story-sunset.webp',
              alt: c.fotoAlt,
              sizes: '(min-width: 1024px) 426px, 100vw',
              position: '9% 50%',
            }}
            className="min-h-[494px] shadow-image-outline"
            contentLayer="fill"
          >
            <div aria-hidden className="absolute inset-0 bg-black/40" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-[57px] bg-brand" />

            <Text
              size="xl"
              weight="light"
              tone="onMediaMuted"
              className="absolute left-[33px] top-[156px] z-10 w-[224px] text-[25.31px] leading-[42.476px]"
            >
              <span className="block whitespace-nowrap">
                Uma <span className="font-display text-[35.397px]">jornada</span> de
              </span>
              <span className="block whitespace-nowrap">resgate das práticas</span>
              <span className="block font-display text-[35.397px]">primitivas</span>
            </Text>
            <Image
              src="/svg/about/story-walkers.svg"
              alt=""
              width={290}
              height={114}
              unoptimized
              className="pointer-events-none absolute bottom-4 right-4 z-10 h-auto w-[250px]"
            />
          </MediaCard>

          {c.cards.map((card) => (
            <StoryCard key={card.titulo} title={card.titulo}>
              {card.paragrafos.map((paragrafo) => (
                <Text key={paragrafo} size="lg" weight="light" tone="secondary" leading="relaxed" pretty>
                  {paragrafo}
                </Text>
              ))}
            </StoryCard>
          ))}
        </div>

        <Card
          surface="muted"
          radius="panelLg"
          padding="none"
          className="grid w-full grid-cols-1 gap-10 overflow-hidden p-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:p-8.25"
        >
          {selos.map((item) => (
            <div key={item.titulo} className="flex flex-col gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand">
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="size-5 brightness-0 invert"
                />
              </span>
              <Text weight="semibold">{item.titulo}</Text>
              <Text size="sm" tone="muted" pretty>
                {item.texto}
              </Text>
            </div>
          ))}
        </Card>
      </Container>
    </Section>
  );
}

function StoryCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card
      as="article"
      surface="muted"
      radius="panelLg"
      padding="none"
      className="gap-5 px-8 py-10 sm:px-12 sm:py-12 lg:min-h-[494px] lg:px-14"
    >
      <Heading as="h3" size="card" tone="brand" balance>
        {title}
      </Heading>
      {children}
    </Card>
  );
}
