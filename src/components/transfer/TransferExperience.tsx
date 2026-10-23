import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  Check,
} from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  MediaCard,
  Section,
  Text,
} from '@/components/ui';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { AssetIcon } from '@/components/adventure/AssetIcon';
import { whatsappLink } from '@/lib/whatsapp';
import { TransferBookingModal } from './TransferBookingModal';
import { TransferBookingTrigger } from './TransferBookingTrigger';
import { TransferHeroSearch } from './TransferHeroSearch';
import { TransferCompactForm } from './TransferCompactForm';
import { TransferQuoteCard } from './TransferQuoteCard';
import { TransferStopsCarousel } from './TransferStopsCarousel';
import { TransferRouteExplorer } from './TransferRouteExplorer';
import { TransferFaqList } from './TransferFaqList';
import { TransferMobileBookingDock } from './TransferMobileBookingDock';

const TRUST_ITEMS = [
  'Motoristas locais e experientes',
  'Veículos revisados e segurados',
  'Transfer porta a porta',
  'Opção de aventura no caminho',
] as const;

const PROCESS = [
  {
    title: 'Você reserva',
    body: 'Escolha o trajeto, a data e quantas pessoas vão — aqui no site ou pelo WhatsApp.',
    icon: '/svg/_icons/icon_05_search.svg',
  },
  {
    title: 'A gente confirma',
    body: 'Você recebe o valor final e os detalhes do embarque diretamente no atendimento.',
    icon: '/svg/_icons/icon_07_text.svg',
  },
  {
    title: 'Você garante com 50%',
    body: 'O sinal confirma a reserva. O restante é combinado para o dia do embarque.',
    icon: '/svg/_icons/icon_11_calendar.svg',
  },
  {
    title: 'O bando te leva',
    body: 'Buscamos no endereço e no horário combinados. É só embarcar.',
    icon: '/svg/_icons/icon_08_send.svg',
  },
] as const;

const BENEFITS = [
  {
    icon: '/svg/figma/pati-3/trust-guide.svg',
    title: 'Motoristas locais',
    body: 'Conhecem cada trecho da estrada e cada curva da serra. É gente da Chapada conduzindo você.',
  },
  {
    icon: '/svg/figma/pati-3/trust-insurance.svg',
    title: 'Veículos seguros',
    body: 'Frota revisada, com seguro e conforto para asfalto e estrada de terra.',
  },
  {
    icon: '/svg/_icons/icon_10_home.svg',
    title: 'Porta a porta',
    body: 'Buscamos e deixamos no endereço combinado, sem caminhada com bagagem.',
  },
  {
    icon: '/svg/_icons/icon_11_calendar.svg',
    title: 'Flexibilidade real',
    body: 'O horário acompanha seu voo, seu ônibus ou o ritmo do seu grupo.',
  },
] as const;

const FAQS = [
  {
    question: 'Quantas pessoas cabem no transfer?',
    answer:
      'A composição depende da rota e da disponibilidade da frota. Informe o tamanho do grupo no pedido e a equipe indica o veículo adequado.',
  },
  {
    question: 'Vocês buscam no aeroporto ou na rodoviária?',
    answer:
      'Sim. O embarque pode ser combinado no Aeroporto de Salvador, rodoviárias, hotéis ou outro endereço dentro da área atendida.',
  },
  {
    question: 'Posso levar bagagem extra ou equipamento?',
    answer:
      'Pode, desde que seja informado antes. Mochilas grandes, instrumentos ou equipamentos especiais entram no dimensionamento do veículo.',
  },
  {
    question: 'E se meu voo ou ônibus atrasar?',
    answer:
      'Avise assim que souber. A equipe avalia o novo horário e reorganiza o embarque conforme a disponibilidade do motorista.',
  },
  {
    question: 'Como funciona o transfer com aventura?',
    answer:
      'A Mamut combina o deslocamento com uma parada guiada compatível com a rota, o clima e o tempo disponível do grupo.',
  },
  {
    question: 'Como pago?',
    answer:
      'O sinal de 50% confirma a reserva. O atendimento informa as formas de pagamento e combina o restante antes do embarque.',
  },
] as const;

const WHATSAPP = whatsappLink('pt');

export function TransferExperience() {
  return (
    <article className="transfer-page relative isolate overflow-x-clip bg-surface text-content">
      {/* Design direction: Mamut road service — editorial landscape imagery,
          route-line geometry, semantic theme tokens, and one focused booking sheet. */}
      <TransferBookingModal />
      <TransferMobileBookingDock />
      <TransferHero />
      <Process />
      <TransferFormats />
      <CareAndBooking />
      <RouteExplorer />
      <GroupFormat />
      <Stops />
      <Faq />
      <MessageCta />
      <ReviewsSection locale="pt" showTripadvisorCta={false} />
    </article>
  );
}

function TransferHero() {
  return (
    <section
      id="transfer-hero"
      data-scroll-reveal="off"
      className="relative isolate overflow-hidden px-6 pt-12 pb-12 sm:pt-16 sm:pb-14 lg:pt-14 lg:pb-16"
    >
      <Image
        src="/svg/transfer/hero-route-line.svg"
        alt=""
        width={2651}
        height={851}
        preload
        unoptimized
        className="transfer-route-art pointer-events-none absolute top-72 left-1/2 -z-10 w-[1850px] max-w-none -translate-x-1/2 opacity-35"
      />
      <Container padded={false} className="relative">
        <div className="mx-auto flex max-w-220 flex-col items-center text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <Badge variant="soft">Transfer privativo</Badge>
            <Badge variant="soft">Chapada Diamantina</Badge>
            <Badge variant="soft">Origem: Lençóis</Badge>
          </div>

          <Heading as="h1" size="hero" balance className="max-w-220">
            A estrada também é
            <br />
            parte da jornada <span className="text-[var(--headline-accent)]">3 Dias.</span>
          </Heading>
          <Text
            size="lg"
            weight="light"
            tone="secondary"
            pretty
            className="mt-6 max-w-176"
          >
            Transfer seguro pela Chapada Diamantina, Salvador e região, conduzido por
            quem conhece cada curva do caminho. Só o trajeto ou com uma aventura no meio.
          </Text>
          <div className="mt-8 w-full">
            <TransferHeroSearch />
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-264 pt-24 sm:mt-14 sm:pt-28 lg:mt-12 lg:pt-42">
          <Image
            src="/img/transfer/hero-jeep.png"
            alt="Jeep preto da Mamut preparado para o transfer"
            width={1536}
            height={881}
            preload
            sizes="(min-width: 1024px) 720px, 94vw"
            className="pointer-events-none absolute top-0 left-1/2 z-20 h-auto w-[min(98vw,720px)] -translate-x-1/2 drop-shadow-[0_30px_32px_rgba(0,0,0,0.28)]"
          />

          <div className="relative overflow-hidden rounded-panel-lg bg-brand-black px-5 pt-42 pb-7 text-on-media shadow-float sm:px-8 sm:pt-68 lg:px-12 lg:pt-64 lg:pb-12">
            <Image
              src="/svg/transfer/hero-card-line.svg"
              alt=""
              width={911}
              height={452}
              unoptimized
              className="pointer-events-none absolute right-0 bottom-0 h-auto w-[78%] opacity-20"
            />

            <div className="relative z-10 flex flex-wrap justify-center gap-x-5 gap-y-3 rounded-card bg-black/35 px-4 py-3.5 lg:justify-between">
              {TRUST_ITEMS.map((label) => (
                <span key={label} className="flex items-center gap-2 text-xs text-on-media-soft sm:text-sm">
                  <span className="flex size-5 items-center justify-center rounded-full bg-brand text-brand-contrast">
                    <Check aria-hidden className="size-3" strokeWidth={2.4} />
                  </span>
                  {label}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-7 grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
              <div className="grid h-74 grid-cols-5 grid-rows-4 gap-2 overflow-hidden rounded-card lg:h-70">
                <div className="relative col-span-5 row-span-3 overflow-hidden rounded-card">
                  <Image
                    src="/img/transfer/jeep-road.png"
                    alt="Jeep da Mamut em uma estrada da Chapada"
                    fill
                    sizes="(min-width:1024px) 520px, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative col-span-3 overflow-hidden rounded-xl">
                  <Image
                    src="/img/transfer/chapada-road.png"
                    alt="Estrada entre montanhas da Chapada Diamantina"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <div className="relative col-span-2 overflow-hidden rounded-xl">
                  <Image
                    src="/img/transfer/group-arrival.png"
                    alt="Grupo chegando ao destino na Chapada"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex flex-wrap items-center gap-2">
                  <Text size="sm" weight="light" tone="onMediaMuted">A partir de</Text>
                  <Badge variant="outlineOnMedia">estimativa inicial</Badge>
                </div>
                <p className="mt-2 font-display text-[clamp(54px,8vw,74px)] leading-none text-accent tabular-nums">
                  R$ 90
                  <span className="ml-2 text-xl text-on-media">/ pessoa</span>
                </p>
                <Text size="sm" weight="light" tone="onMediaMuted" className="mt-3">
                  Trecho em grupo compartilhado. O valor varia conforme rota, data e grupo.
                </Text>
                <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
                  <TransferBookingTrigger size="lg" className="max-sm:w-full">
                    Reservar meu transfer
                  </TransferBookingTrigger>
                  <Button href={WHATSAPP} variant="outlineOnMedia" size="lg" className="max-sm:w-full">
                    Falar com a Mamut
                  </Button>
                </div>
                <Text size="xs" weight="light" tone="onMediaMuted" className="mt-5">
                  Atendimento em português, inglês e espanhol.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Process() {
  return (
    <Section padding="none" className="py-14 lg:py-18" labelledBy="transfer-process-title">
      <Heading id="transfer-process-title" as="h2" size="section">
        Do pedido à poltrona.
      </Heading>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map(({ title, body, icon }) => (
          <Card
            key={title}
            as="article"
            surface="muted"
            padding="none"
            className="group min-h-58 p-6 transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-surface-raised"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-accent/12 text-accent transition-colors group-hover:bg-brand group-hover:text-brand-contrast">
              <AssetIcon src={icon} className="size-5" colorClassName="bg-current" />
            </span>
            <Heading as="h3" size="quote" className="mt-8">{title}</Heading>
            <Text size="sm" weight="light" tone="secondary" pretty className="mt-3">{body}</Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function TransferFormats() {
  return (
    <Section padding="tall" surface="muted" bordered labelledBy="transfer-formats-title">
      <Heading id="transfer-formats-title" as="h2" size="hero" balance className="mx-auto max-w-190 text-center">
        Dois jeitos de pegar a estrada com o bando.
      </Heading>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <FormatCard
          label="Somente trajeto"
          title={<>Do ponto A ao<br />ponto B. Direto.</>}
          body="Você escolhe a origem, o destino, a data e quantas pessoas vão. A gente cuida do resto — sem rodízio, sem espera e sem complicação."
          image="/img/transfer/only-transfer.png"
          alt="Vale cercado por montanhas da Chapada Diamantina"
          cta="Reservar só o transfer"
        />
        <FormatCard
          label="Trajeto + aventuras"
          title={<>Transforme o caminho<br />em experiência.</>}
          body="Combine o transfer com um passeio guiado: uma cachoeira na estrada, um mirante no caminho ou um day tour no destino."
          image="/img/transfer/transfer-adventure.png"
          alt="Viajante contemplando o Vale do Pati"
          cta="Montar transfer + aventura"
          adventure
        />
      </div>
    </Section>
  );
}

function FormatCard({
  label,
  title,
  body,
  image,
  alt,
  cta,
  adventure = false,
}: {
  label: string;
  title: ReactNode;
  body: string;
  image: string;
  alt: string;
  cta: string;
  adventure?: boolean;
}) {
  return (
    <MediaCard
      as="article"
      image={{ src: image, alt, sizes: '(min-width:1024px) 598px, 100vw' }}
      overlay="tint"
      radius="panelLg"
      zoomOnHover
      className="min-h-145 shadow-image-outline [&>img]:grayscale [&>img]:contrast-110 sm:min-h-155"
      contentLayer="fill"
      contentClassName="p-7 sm:p-9"
    >
      <div
        aria-hidden
        className={`absolute inset-0 transition-colors duration-500 ${
          adventure
            ? 'bg-black/48 group-hover/media:bg-black/58'
            : 'bg-black/28 group-hover/media:bg-black/38'
        }`}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <Badge variant="outlineOnMedia" size="md">{label}</Badge>
          <span className="h-px flex-1 bg-white/35" />
          <span className="size-2.5 rounded-full bg-accent shadow-[0_0_0_5px_color-mix(in_srgb,var(--highlight)_16%,transparent)]" />
        </div>
        <div className="max-w-130">
          <Heading as="h3" size="section" tone="onMedia">{title}</Heading>
          <Text size="base" weight="light" tone="onMediaSoft" pretty className="mt-4">{body}</Text>
          <TransferBookingTrigger
            detail={{ adventure }}
            size="lg"
            className="mt-6 max-sm:w-full"
          >
            {cta}
          </TransferBookingTrigger>
        </div>
      </div>
    </MediaCard>
  );
}

function CareAndBooking() {
  return (
    <Section padding="tall" surface="muted" bordered labelledBy="transfer-care-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.02fr] lg:items-start">
        <div>
          <Heading id="transfer-care-title" as="h2" size="hero" balance className="max-w-130">
            O mesmo cuidado da trilha, agora na estrada.
          </Heading>
          <div className="mt-10 divide-y divide-line">
            {BENEFITS.map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4 py-5 first:pt-0">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
                  <AssetIcon src={icon} className="size-5" colorClassName="bg-current" />
                </span>
                <div>
                  <Heading as="h3" size="quote">{title}</Heading>
                  <Text size="sm" weight="light" tone="secondary" pretty className="mt-1">{body}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TransferQuoteCard />
      </div>
    </Section>
  );
}

function RouteExplorer() {
  return (
    <Section padding="tall" labelledBy="transfer-routes-title">
      <header className="mx-auto max-w-170 text-center">
        <Heading id="transfer-routes-title" as="h2" size="section">
          Para onde o bando te leva.
        </Heading>
        <Text size="base" weight="light" tone="secondary" pretty className="mt-4">
          Rotas entre Lençóis, cidades da Chapada e as principais conexões da Bahia.
        </Text>
        <Text size="xs" weight="medium" tone="muted" className="mt-5 tracking-wide">
          Dentro da Chapada <span aria-hidden className="mx-2 text-accent">•</span> Salvador e conexões
        </Text>
      </header>

      <TransferRouteExplorer />
      <Text size="xs" weight="light" tone="muted" pretty className="mt-5 text-center">
        Valores iniciais para grupo compartilhado. Transfer privativo e rotas personalizadas sob consulta.
      </Text>
    </Section>
  );
}

function GroupFormat() {
  return (
    <Section padding="compact">
      <MediaCard
        as="section"
        media={(
          <Image
            src="/img/transfer/pai-inacio.png"
            alt="Paredões da Chapada vistos da estrada"
            fill
            sizes="(min-width:1024px) 1216px, 100vw"
            className="absolute inset-0 size-full object-cover grayscale contrast-110"
          />
        )}
        overlay="none"
        radius="panelLg"
        className="bg-media-backdrop shadow-image-outline"
        contentLayer="flow"
        contentClassName="p-5 sm:p-8 lg:p-12"
      >
        <div aria-hidden className="absolute inset-0 bg-black/58 lg:bg-linear-to-r lg:from-black/82 lg:via-black/58 lg:to-black/32" />
        <div className="relative z-10 grid items-center gap-7 sm:gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] lg:gap-10">
          <div className="max-w-150 self-center">
            <Heading as="h2" size="hero" tone="onMedia" balance>
              Seu transfer começa com três escolhas simples.
            </Heading>
            <Text size="lg" weight="light" tone="onMediaSoft" pretty className="mt-5 max-w-140">
              Conte de onde sai, para onde vai e como prefere viajar. A equipe Mamut confirma o melhor veículo, o horário e o valor com você.
            </Text>
            <Text size="sm" weight="light" tone="onMediaMuted" className="mt-6 max-w-120 border-t border-white/28 pt-5">
              Sem pagamento nesta etapa. Seu pedido segue direto para o atendimento.
            </Text>
          </div>
          <TransferCompactForm />
        </div>
      </MediaCard>
    </Section>
  );
}

function Stops() {
  return (
    <Section padding="tall" labelledBy="transfer-stops-title">
      <div className="max-w-190">
        <Heading id="transfer-stops-title" as="h2" size="section">
          Já que você vai passar por aqui.
        </Heading>
        <Text size="base" weight="light" tone="secondary" pretty className="mt-4 max-w-190">
          Alguns dos lugares mais bonitos da Chapada ficam no caminho entre as cidades.
          Adicione uma parada ao transfer e a gente ajusta trajeto e horário.
        </Text>
      </div>
      <TransferStopsCarousel />
    </Section>
  );
}

function Faq() {
  return (
    <Section padding="tall" surface="muted" bordered labelledBy="transfer-faq-title">
      <Heading id="transfer-faq-title" as="h2" size="section">
        Tudo que você precisa saber.
      </Heading>
      <div className="mt-8">
        <TransferFaqList faqs={FAQS} />
      </div>
    </Section>
  );
}

function MessageCta() {
  return (
    <Section padding="none" surface="muted" bordered className="py-14 text-center sm:py-16 lg:py-18">
      <div className="mx-auto flex max-w-180 flex-col items-center px-4">
        <Heading as="h2" size="section" balance>
          Sua viagem começa com uma mensagem.
        </Heading>
        <Text size="base" weight="light" tone="secondary" pretty className="mt-4">
          Fale com a gente pelo WhatsApp ou monte o pedido agora. A Mamut cuida do caminho — você só precisa chegar.
        </Text>
        <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <TransferBookingTrigger size="lg">Reservar meu transfer</TransferBookingTrigger>
          <Button href={WHATSAPP} variant="outline" size="lg">Falar no WhatsApp</Button>
        </div>
      </div>
    </Section>
  );
}
