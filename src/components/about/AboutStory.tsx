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

const AUTHORITY = [
  {
    icon: '/svg/_icons/icon_09_location.svg',
    title: 'Guias 100% locais',
    text: 'Nascidos e criados em Lençóis e no entorno da Chapada.',
  },
  {
    icon: '/svg/_icons/icon_04_care.svg',
    title: 'CMC, APH e WFA',
    text: 'Condutores certificados e brigadistas florestais.',
  },
  {
    icon: '/svg/_icons/icon_03_montain.svg',
    title: 'Flora, fauna e geologia',
    text: 'Conhecimento vivo da Serra do Sincorá.',
  },
  {
    icon: '/svg/_icons/icon_10_home.svg',
    title: 'Cadastur regularizado',
    text: 'CNPJ 43.500.583/0001-22 · Ministério do Turismo.',
  },
] as const;

export function AboutStory() {
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
              Não somos uma agência
              <br />
              de turismo. <span className="text-brand-strong">Somos o bando</span>
              <br />
              <span className="text-brand-strong">que guia a</span>{' '}
              <Image
                src="/img/about/mamut-landscape.webp"
                alt=""
                width={203}
                height={114}
                sizes="(min-width: 640px) 120px, 82px"
                className="inline-block h-[0.8em] w-[1.42em] object-contain align-middle"
              />{' '}
              <span className="text-brand-strong">sua tribo.</span>
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
              alt: 'Chapada Diamantina ao pôr do sol',
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

          <StoryCard title="É dessa memória que nascemos.">
            <Text size="lg" weight="light" tone="secondary" leading="relaxed" pretty>
              Na imensidão dos mega continentes, os mamutes caminhavam em grandes grupos —
              marcando sua existência para sempre.
            </Text>
            <Text size="lg" weight="light" tone="secondary" leading="relaxed" pretty>
              Na Chapada Diamantina, resgatamos essa conexão. Cada trilha é uma jornada de volta
              às suas raízes: sentir o chão, ouvir o vento, pertencer a algo maior.
            </Text>
          </StoryCard>

          <StoryCard title="Formados pela Serra do Sincorá.">
            <Text size="lg" weight="light" tone="secondary" leading="relaxed" pretty>
              Todos os nossos guias são locais — brigadistas florestais, condutores certificados
              (CMC, APH, WFA) e conhecedores da flora, fauna e geologia da Serra do Sincorá.
            </Text>
            <Text size="lg" weight="light" tone="secondary" leading="relaxed" pretty>
              É o que nos permite entrar nas travessias mais remotas do Parque Nacional sem abrir
              mão do cuidado com quem caminha e com o território.
            </Text>
          </StoryCard>
        </div>

        <Card
          surface="muted"
          radius="panelLg"
          padding="none"
          bordered={false}
          className="grid w-full grid-cols-1 gap-10 overflow-hidden p-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:border lg:border-line-strong lg:p-8.25"
        >
          {AUTHORITY.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
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
              <Text weight="semibold">{item.title}</Text>
              <Text size="sm" tone="muted" pretty>
                {item.text}
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
      className="min-h-[494px] gap-5 px-8 py-10 sm:px-12 sm:py-12 lg:px-14"
    >
      <Heading as="h3" size="card" tone="brand" balance>
        {title}
      </Heading>
      {children}
    </Card>
  );
}
