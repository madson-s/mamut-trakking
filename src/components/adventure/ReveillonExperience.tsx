import Image from 'next/image';
import { BedDouble, CalendarDays, MapPin, ShieldCheck, TicketCheck, UsersRound } from 'lucide-react';
import { Badge, Button, Container, Heading, JsonLd, MediaCard, Section, Text } from '@/components/ui';
import { SITE } from '@/lib/site';
import { PatiFaqList } from './PatiFaqList';
import { ReveillonBookingTrigger } from './ReveillonBookingTrigger';
import { ReveillonPackageExplorer } from './ReveillonPackageExplorer';
import { REVEILLON_FAQS, REVEILLON_META, REVEILLON_PACKAGES } from './reveillon-content';

const INCLUSIONS = [
  { icon: TicketCheck, label: 'Acessos', detail: 'Taxas de entrada previstas no roteiro' },
  { icon: UsersRound, label: 'Guias locais', detail: 'Condução especializada em todas as atividades' },
  { icon: BedDouble, label: 'Hospedagem', detail: 'Pernoites conforme o pacote escolhido' },
  { icon: MapPin, label: 'Traslados', detail: 'Deslocamentos para os atrativos do roteiro' },
] as const;

export function ReveillonExperience() {
  return (
    <article className="overflow-x-clip">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: REVEILLON_META.title,
          description: REVEILLON_META.description,
          image: `${SITE.url}${REVEILLON_META.image}`,
          touristType: 'Trekking e ecoturismo',
          provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.url },
          offers: REVEILLON_PACKAGES.map((item) => ({
            '@type': 'Offer',
            name: `Réveillon na Chapada — ${item.days}`,
            price: item.price,
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
          })),
        }}
      />

      <Hero />
      <Story />
      <Section id="pacotes" padding="tall" containerClassName="relative">
        <ReveillonPackageExplorer />
      </Section>
      <IncludedBand />
      <PracticalInformation />
      <FinalCta />
    </article>
  );
}

function Hero() {
  return (
    <Section
      padding="none"
      container={false}
      className="hero-under-header relative isolate -mt-20 flex min-h-[46rem] items-end overflow-hidden bg-media-backdrop pt-28 pb-10 sm:min-h-[48rem] sm:pb-14 lg:min-h-[52rem] lg:pb-16"
    >
      <Image
        src={REVEILLON_META.image}
        alt="Montanhas da Chapada Diamantina vistas ao fim da tarde"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-r from-black/88 via-black/56 to-black/10" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />

      <Container className="relative z-10">
        <div>
          <header className="max-w-205">
            <Badge variant="outlineOnMedia" size="md" icon={<CalendarDays aria-hidden className="size-4" />}>
              28 dez 2026 — 2 jan 2027
            </Badge>
            <Heading as="h1" size="hero" tone="onMedia" balance className="mt-5 max-w-205 text-[clamp(3.2rem,9.4vw,7.7rem)]! leading-[.88]! tracking-[-.045em]">
              Vire o ano no coração da Chapada.
            </Heading>
            <Text weight="light" tone="onMediaSoft" pretty className="mt-6 max-w-155 text-lg sm:text-xl">
              Troque a contagem regressiva pela trilha: cachoeiras, vales e paisagens para começar 2027 em movimento.
            </Text>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#pacotes" size="lg" arrow className="max-sm:w-full">Ver os pacotes</Button>
              <ReveillonBookingTrigger label="Falar com a equipe" variant="outlineOnMedia" className="max-sm:w-full" />
            </div>
          </header>
        </div>
      </Container>
    </Section>
  );
}

function Story() {
  return (
    <Section padding="tall" container={false} className="relative isolate overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 right-[-14rem] z-0 h-[44rem] w-[58rem] bg-content opacity-[.045]"
        style={{
          maskImage: 'url("/svg/screen_destinos_vale-do-pati-session-03_backgroud.svg")',
          WebkitMaskImage: 'url("/svg/screen_destinos_vale-do-pati-session-03_backgroud.svg")',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-20">
          <div>
            <Badge variant="brand" size="sm">Réveillon 2027</Badge>
            <Heading as="h2" size="hero" balance className="mt-5 max-lg:text-display-lg">
              A virada acontece lá fora.
            </Heading>
            <div className="mt-6 flex max-w-158 flex-col gap-4 text-lg font-light leading-relaxed text-content-secondary">
              <p className="text-pretty">
                Este é um Réveillon para quem prefere o som da água, o silêncio do vale e a sensação de chegar caminhando a um lugar extraordinário.
              </p>
              <p className="text-pretty">
                Os roteiros combinam trilhas, cachoeiras, paisagens e hospedagem em viagens de quatro a seis dias. Você escolhe a intensidade; a Mamut organiza o caminho.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 border-l-2 border-brand pl-5">
              <ShieldCheck aria-hidden className="size-6 shrink-0 text-brand-strong" />
              <Text size="sm" weight="light" tone="secondary" pretty>
                Grupos pequenos, guias locais e possibilidade de personalizar o pacote.
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-[1.12fr_.88fr] gap-3 sm:gap-5">
            <figure className="relative min-h-115 overflow-hidden rounded-panel-lg bg-media-backdrop shadow-image-outline sm:min-h-145">
              <Image
                src="/img/adventures/buracao/hero.jpeg"
                alt="Cachoeira do Buracão vista entre os paredões do cânion"
                fill
                sizes="(min-width: 1024px) 36vw, 56vw"
                className="object-cover"
              />
            </figure>
            <div className="grid gap-3 sm:gap-5">
              <figure className="relative min-h-56 overflow-hidden rounded-panel bg-media-backdrop shadow-image-outline sm:min-h-70">
                <Image
                  src="/img/home_backgroud/home_backgroud_03_no_crop_1x.webp"
                  alt="Rua histórica de Lençóis na Chapada Diamantina"
                  fill
                  sizes="(min-width: 1024px) 26vw, 42vw"
                  className="object-cover"
                />
              </figure>
              <div className="flex min-h-56 flex-col justify-between rounded-panel bg-brand p-5 text-brand-contrast sm:min-h-70 sm:p-7">
                <MapPin aria-hidden className="size-6" />
                <div>
                  <p className="font-display text-4xl leading-none sm:text-6xl">Chapada</p>
                  <p className="mt-2 text-xs font-light opacity-75 sm:text-sm">Lençóis · Pati · Ibicoara · Mucugê</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function IncludedBand() {
  return (
    <Section padding="none" surface="muted" bordered container={false} aria-label="Itens incluídos nos pacotes">
      <Container>
        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)]">
          <div className="flex items-center border-line py-8 lg:border-r lg:pr-10">
            <Heading as="h2" size="quote" balance>Todo pacote já organiza o essencial.</Heading>
          </div>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
            {INCLUSIONS.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex gap-4 border-line py-6 sm:p-7 sm:odd:border-r lg:border-r lg:last:border-r-0">
                <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-strong" />
                <div>
                  <dt className="font-semibold text-content">{label}</dt>
                  <dd className="mt-1 text-xs font-light leading-relaxed text-content-secondary">{detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}

function PracticalInformation() {
  return (
    <Section id="informacoes" padding="tall" containerClassName="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Badge variant="brand" size="sm">Antes de reservar</Badge>
        <Heading as="h2" size="section" balance className="mt-4">Tudo claro antes do primeiro passo.</Heading>
        <Text weight="light" tone="secondary" leading="relaxed" pretty className="mt-5">
          Consulte equipamentos, condições de pagamento, cancelamento e cuidados de segurança. As informações ficam aqui para você decidir com tranquilidade.
        </Text>
        <Image
          src="/svg/about/story-walkers.svg"
          alt=""
          width={290}
          height={114}
          unoptimized
          className="mt-10 hidden h-auto w-64 opacity-85 lg:block"
        />
      </div>
      <PatiFaqList faqs={REVEILLON_FAQS} />
    </Section>
  );
}

function FinalCta() {
  return (
    <Section padding="none" className="pb-20 lg:pb-28">
      <MediaCard
        as="section"
        overlay="none"
        radius="panelLg"
        backdrop="none"
        className="min-h-120 bg-media-backdrop shadow-image-outline lg:h-132"
        contentLayer="flow"
        contentClassName="flex min-h-120 items-center px-7 py-14 sm:px-14 lg:h-full lg:min-h-0 lg:px-20"
        media={
          <>
            <Image
              src="/img/home_backgroud/home_backgroud_02_no_crop_1x.webp"
              alt="Trilha em direção às montanhas da Chapada Diamantina"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-r from-black/86 via-black/56 to-black/16" />
          </>
        }
      >
        <div className="relative z-10 max-w-174">
          <Badge variant="outlineOnMedia" size="sm">Comece 2027 em movimento</Badge>
          <Heading as="h2" size="hero" tone="onMedia" balance className="mt-5 max-lg:text-display-lg">
            Seu próximo ano pode começar por uma trilha.
          </Heading>
          <Text weight="light" tone="onMediaSoft" pretty className="mt-5 max-w-135 sm:text-lg">
            Conte para a Mamut quantos dias você tem e como gosta de viajar. A equipe ajuda a escolher — ou adaptar — o roteiro certo.
          </Text>
          <ReveillonBookingTrigger label="Planejar meu Réveillon" className="mt-8 max-sm:w-full" />
        </div>
        <Image
          src="/svg/humans-assets-yellow.svg"
          alt=""
          width={784}
          height={246}
          unoptimized
          className="pointer-events-none absolute right-4 bottom-0 hidden h-auto w-[42%] max-w-125 lg:block"
        />
      </MediaCard>
    </Section>
  );
}
