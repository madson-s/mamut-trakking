import Image from 'next/image';
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  JsonLd,
  MediaCard,
  Section,
  Text,
} from '@/components/ui';
import {
  HOME_TESTIMONIALS,
  ScrollFeedbackStack,
} from '@/components/home/ScrollFeedbackStack';
import { cn } from '@/lib/cn';
import { SITE, type Locale } from '@/lib/site';
import { PatiFaqList } from './PatiFaqList';
import { PATI3_CONTENT, type Pati3Content } from './pati-3-content';
import { PATI3_FAQS } from './pati-3-faqs';
import { PatiBookingTrigger } from './PatiBookingTrigger';
import { PatiHeroGallery } from './PatiHeroGallery';
import { PatiMobileBooking } from './PatiMobileBooking';
import { PatiItinerary } from './PatiItinerary';
import { AssetIcon } from './AssetIcon';

// Ícones, números e imagens não mudam com o idioma; o texto vem de
// `pati-3-content.ts` e `pati-3-faqs.ts`, na mesma ordem destes arrays.
const STAT_VALUES = [
  ['43 km', '/svg/_icons/icon_03_montain.svg'],
  ['3 dias / 2 noites', '/svg/_icons/icon_11_calendar.svg'],
  ['1.350m', '/svg/_icons/icon_09_location.svg'],
  ['+1.050m', '/svg/_icons/icon_01_3-bars.svg'],
  ['6h00', '/svg/_icons/icon_11_calendar.svg'],
  ['~19h00', '/svg/_icons/icon_11_calendar.svg'],
  ['PT · EN · ES', '/svg/_icons/icon_16_internet.svg'],
  ['Moderado', '/svg/_icons/icon_03_montain.svg'],
] as const;

const ITINERARY_META = [
  { icon: '/svg/_icons/icon_09_location.svg', distance: '12 km' },
  { icon: '/svg/_icons/icon_03_montain.svg', distance: '8 km' },
  { icon: '/svg/_icons/icon_08_send.svg', distance: '23 km' },
] as const;

const LANDMARK_META = [
  ['/svg/figma/pati-3/landmark-water.svg', 'lg:w-[281px]'],
  ['/svg/figma/pati-3/landmark-river.svg', 'lg:w-[188px]'],
  ['/svg/figma/pati-3/landmark-view.svg', 'lg:w-[292px]'],
  ['/svg/figma/pati-3/landmark-waterfall.svg', 'lg:w-[280px]'],
  ['/svg/figma/pati-3/landmark-mountain.svg', 'lg:w-[280px]'],
  ['/svg/figma/pati-3/landmark-cave.svg', 'lg:w-[280px]'],
  ['/svg/figma/pati-3/landmark-waterfall.svg', 'lg:w-[280px]'],
  ['/svg/figma/pati-3/landmark-descent.svg', 'lg:w-[188px]'],
] as const;

// Preços de mamut.agency/en/aventuras/pati-valley-3-days: dois formatos, por
// pessoa, com mínimo de 2 pessoas. O destaque é o de grupo, o mais procurado.
/** Menor preço da tabela — o que o hero e o JSON-LD anunciam. */
export const PATI3_FROM_PRICE = 2100;

const PRICE_TIERS = [
  { price: 'R$ 2.300', highlight: false },
  { price: 'R$ 2.100', highlight: true },
] as const;

const RELATED_IMAGES = [
  '/img/vale-do-pati/vale-do-pati-14.webp',
  '/img/vale-do-pati/vale-do-pati-20.webp',
] as const;

const TRUST_ICONS = [
  '/svg/figma/pati-3/trust-guide.svg',
  '/svg/figma/pati-3/trust-satellite.svg',
  '/svg/figma/pati-3/trust-insurance.svg',
  '/svg/figma/pati-3/trust-certificate.svg',
] as const;

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com.br/Attraction_Review-g635725-d23344029-Reviews-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html';

const DIRECTION_CONTRACT = `<!--
THESIS: Uma travessia documental conduzida por quem pertence ao Vale; recusa o catálogo turístico genérico.
OWN-WORLD: Pedra noturna, verde-mata funcional, amarelo ancestral, Mergo editorial, Brutal Milk operacional, fotografia ampla e line art do bando.
STORY: O visitante reconhece o Pati, entende esforço, roteiro, segurança e preço, e conversa com a equipe pelo WhatsApp.
FIRST VIEWPORT: Wordmark, chips, título monumental, galeria assimétrica e card de reserva com caminhantes sobrepostos; CTA permanece visível sem competir com a paisagem.
FORM: Frame Figma aprovado pelo usuário, decisão fixada acima do roll; seed b6829298.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export function PatiThreeDayExperience({ locale = 'pt' }: { locale?: Locale }) {
  const c = PATI3_CONTENT[locale];
  return (
    <article className="pati-three-day-page overflow-x-clip pb-[calc(104px+env(safe-area-inset-bottom))] lg:pb-0">
      <span hidden aria-hidden data-design-seed="b6829298" dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: `${c.hero.titulo.antes} ${c.hero.titulo.destaque}`,
        description: c.meta.ogDescription,
        image: `${SITE.url}/img/vale-do-pati/vale-do-pati-04.webp`,
        touristType: 'Trekking / ecoturismo',
        provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.url },
        offers: { '@type': 'Offer', price: PATI3_FROM_PRICE, priceCurrency: 'BRL', availability: 'https://schema.org/InStock' },
      }} />
      <Hero c={c} />
      <Story c={c} />
      <Itinerary c={c} />
      <Landmarks c={c} />
      <Pricing c={c} />
      <TrustAndReviews c={c} />
      <Faq c={c} locale={locale} />
      <FinalCta c={c} />
      <PatiMobileBooking locale={locale} />
    </article>
  );
}

function Hero({ c }: { c: Pati3Content }) {
  const stats = STAT_VALUES.map(([value, icon], i) => ({ value, icon, label: c.stats[i] }));

  return (
    <Section padding="none" container={false} className="relative isolate overflow-hidden pt-20 pb-20 lg:pb-24">
      <Image src="/svg/screen_destinos_vale-do-pati-session-01_backgroud.svg" alt="" width={1920} height={880} unoptimized priority className="pati-hero-background pointer-events-none absolute top-55.5 left-1/2 z-0 h-auto w-[1920px] max-w-none -translate-x-1/2 opacity-30" />
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_316px] lg:items-end">
        <div className="flex min-w-0 flex-col gap-8">
          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <InfoChip><span aria-hidden className="size-3 rounded-full bg-accent-line-art" />{c.hero.nivel}</InfoChip>
              <InfoChip>{STAT_VALUES[0][0]}</InfoChip>
              <InfoChip>{c.hero.origem}</InfoChip>
              <InfoChip>{c.hero.grupo}</InfoChip>
            </div>
            <Heading as="h1" size="hero" balance className="max-w-218.5 max-lg:text-display-lg lg:text-display-xl!">
              {c.hero.titulo.antes} <span className="text-brand-strong">{c.hero.titulo.destaque}</span>
            </Heading>
            <Heading as="p" size="card" balance className="max-w-180">
              {c.hero.lead.antes} <span className="text-brand-strong">{c.hero.lead.destaque}</span>
            </Heading>
          </header>
          <PatiHeroGallery />
        </div>
        <BookingCard c={c} />
        </div>

        <div className="mt-12 flex flex-col items-center gap-8">
        <Heading as="p" size="quote" balance className="text-center">
          {c.hero.apoio}
        </Heading>
        <div className="flex w-full flex-col gap-5">
          <dl className="grid w-full overflow-hidden rounded-panel-lg border border-line bg-surface-muted sm:grid-cols-2 lg:grid-cols-4">
            {stats.slice(0, 4).map(({ value, label, icon }) => (
              <div key={label} className="flex min-h-32 flex-col items-center justify-center gap-1.5 border-line px-4 py-6 text-center max-sm:border-b sm:odd:border-r lg:border-r lg:last:border-r-0">
                <AssetIcon src={icon} className="size-5.5" />
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-xl">{value}</dd>
                <Text as="div" size="xs" weight="light" tone="secondary">{label}</Text>
              </div>
            ))}
          </dl>
          <dl className="grid w-full overflow-hidden rounded-panel-lg border border-line bg-surface-muted sm:grid-cols-2 lg:grid-cols-4">
            {stats.slice(4, 8).map(({ value, label, icon }) => (
              <div key={label} className="flex min-h-32 flex-col items-center justify-center gap-1.5 border-line px-4 py-6 text-center max-sm:border-b sm:odd:border-r lg:border-r lg:last:border-r-0">
                <AssetIcon src={icon} className="size-5.5" />
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-xl">{value}</dd>
                <Text as="div" size="xs" weight="light" tone="secondary">{label}</Text>
              </div>
            ))}
          </dl>
        </div>
        </div>
      </Container>
    </Section>
  );
}

function InfoChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Badge
      variant="outline"
      size="sm"
      className={cn('min-h-8.5 gap-2 bg-surface-muted px-3.5! py-1.75! text-sm!', className)}
    >
      {children}
    </Badge>
  );
}


function BookingCard({ c }: { c: Pati3Content }) {
  return (
    <div className="relative">
      <Image src="/svg/about/story-walkers.svg" alt="" width={290} height={114} unoptimized className="pointer-events-none absolute left-1/2 -top-23 hidden h-26 w-65.75 -translate-x-1/2 object-contain lg:block" />
      <aside id="pati-booking-card" className="relative rounded-panel-lg border border-line-strong bg-surface-muted p-6">
      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-2 border-b border-line-strong pb-6">
          <Text size="sm" weight="light" tone="secondary">{c.hero.apartirDe}</Text>
          <div className="flex flex-wrap items-end gap-2">
            <Heading as="p" size="section">R$ {PATI3_FROM_PRICE.toLocaleString('pt-BR')}</Heading>
            <Text size="sm" weight="light" tone="secondary" className="pb-1">/ pessoa</Text>
          </div>
        </div>
        <ul className="flex flex-col gap-2.5 text-sm font-light text-content-secondary">
          <li>{c.hero.saida}</li>
          <li>{c.hero.tripadvisor}</li>
          <li>{c.hero.sinal}</li>
        </ul>
        <PatiBookingTrigger />
        <div className="flex flex-col gap-3 border-t border-line-strong pt-6 text-center">
          <Text size="sm" weight="light" tone="muted">{c.hero.paraGrupos} <strong className="font-semibold">{c.hero.pessoas}</strong> ou mais:</Text>
          <Button href="#preco" variant="outline" block>{c.hero.verPrecos}</Button>
          <Text size="xs" weight="light" tone="subtle">{c.hero.resposta}<br />PT · EN · ES</Text>
        </div>
      </div>
      </aside>
    </div>
  );
}

function Story({ c }: { c: Pati3Content }) {
  return (
    <Section padding="tall" container={false} className="relative isolate overflow-hidden border-t border-line">
      <Image src="/svg/screen_destinos_vale-do-pati-session-03_backgroud.svg" alt="" width={962} height={915} unoptimized className="pati-story-background pointer-events-none absolute top-0 left-1/2 z-0 h-auto w-240.5 max-w-none opacity-12" />
      <Container className="relative z-10 flex flex-col gap-16 lg:gap-20">
      <div className="max-w-3xl">
        <Heading as="h2" size="hero" balance className="max-lg:text-display-lg lg:text-display-xl!">{c.story.titulo[0]}<br />{c.story.titulo[1]}</Heading>
        <div className="mt-4 flex flex-col gap-4 text-lg font-light leading-relaxed text-content-secondary">
          <p>O Vale do Pati fica a mil metros de altitude e entrega uma diversidade de paisagens rara no Brasil: remanescentes de Mata Atlântica, campos rupestres e os Gerais do Rio Preto. Uma região que abrigou camponeses há dois séculos e ainda guarda, em 14 casas vivas, a memória de quem nunca saiu daqui.</p>
          <p>O terreno é real: sol, chuva, lama, subidas íngremes, travessia de rio. Não é passeio. É travessia — o Pati cobra de quem quer atravessá-lo. Nosso roteiro faz a volta completa pelos pontos mais emblemáticos do Vale.</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Heading as="h3" size="quote">{c.story.quando}</Heading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {c.story.estacoes.map((estacao) => (
            <SeasonCard key={estacao.titulo} title={estacao.titulo} months={estacao.meses} points={estacao.pontos} />
          ))}
          {c.story.editoriais.map((item) => (
            <EditorialCard key={item.titulo} title={item.titulo} body={item.corpo} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Heading as="h3" size="quote" tone="brand">{c.story.outrasVersoes}</Heading>
        <div className="flex flex-wrap gap-5">
          {c.story.relacionados.map((trilha, i) => (
            <RelatedTrail
              key={trilha.href}
              href={trilha.href}
              image={RELATED_IMAGES[i]}
              level={trilha.nivel}
              title={trilha.titulo}
              cta={c.story.explorar}
            />
          ))}
        </div>
      </div>
      </Container>
    </Section>
  );
}

function SeasonCard({ title, months, points }: { title: string; months: string; points: readonly string[] }) {
  return (
    <article className="flex min-h-60 flex-col gap-3 rounded-card border border-line-strong bg-surface-muted p-6">
      <div className="flex items-start justify-between gap-3"><Heading as="h4" size="quote">{title}</Heading><Badge variant="outline" size="sm">{months}</Badge></div>
      <ul className="mt-auto flex flex-col gap-2 text-sm font-light text-content-secondary">
        {points.map((point) => <li key={point} className="flex gap-2"><span aria-hidden className="text-brand-strong">→</span><span>{point}</span></li>)}
      </ul>
    </article>
  );
}

function EditorialCard({ title, body }: { title: string; body: string }) {
  return <article className="flex min-h-60 flex-col justify-center gap-2 rounded-card bg-surface-muted p-6"><Heading as="h4" size="quote">{title}</Heading><Text size="sm" weight="light" tone="secondary" pretty>{body}</Text></article>;
}

function RelatedTrail({ href, image, level, title, cta }: { href: string; image: string; level: string; title: string; cta: string }) {
  // A versão de 5 dias é a mais dura; nos três idiomas ela é a segunda da lista.
  const difficultyEmoji = /^(Avançado|Advanced|Avanzado)/.test(level) ? '🔴' : '🟡';
  return (
    <article className="grid h-40 w-full grid-cols-1 items-center gap-5 overflow-hidden rounded-card-lg border border-line bg-surface-muted px-5 sm:w-95.5 sm:grid-cols-[140px_202px] sm:px-0 sm:pr-5">
      <div className="relative hidden h-40 w-35 shrink-0 overflow-hidden rounded-card-lg sm:block"><Image src={image} alt="" fill sizes="140px" className="object-cover" /></div>
      <div className="flex h-30 min-w-0 flex-col items-start justify-center gap-2.5"><Badge variant="soft" size="sm"><span aria-hidden>{difficultyEmoji}</span> {level}</Badge><Heading as="h4" size="quote" className="text-xl/[27px]! whitespace-nowrap">{title}</Heading><Button href={href} size="sm" arrow className="min-h-11 w-full">{cta}</Button></div>
    </article>
  );
}

function Itinerary({ c }: { c: Pati3Content }) {
  return (
    <Section id="itinerario" padding="tall" containerClassName="flex flex-col gap-8" labelledBy="itinerary-heading">
      <Heading id="itinerary-heading" as="h2" size="section">{c.itinerary.titulo}</Heading>
      <PatiItinerary items={c.itinerary.dias.map((dia, i) => ({ ...dia, ...ITINERARY_META[i] }))} />
    </Section>
  );
}

function Landmarks({ c }: { c: Pati3Content }) {
  return (
    <Section padding="tall" container={false} className="relative isolate overflow-hidden">
      <Image
        src="/svg/figma/pati-3/landmarks-background.svg"
        alt=""
        width={1312}
        height={618}
        unoptimized
        className="pati-landmarks-background pointer-events-none absolute right-0 bottom-0 z-0 hidden h-auto w-[72%] max-w-none opacity-75 lg:block"
      />
      <Container className="relative z-10">
        <div className="flex max-w-220.25 flex-col gap-6">
          <Heading as="h2" size="section">{c.landmarks.titulo}</Heading>
          <div className="grid gap-5 sm:grid-cols-2 lg:flex lg:flex-wrap">
            {c.landmarks.itens.map(({ titulo: title, apoio: label }, i) => {
            const [icon, width] = LANDMARK_META[i];
            return (
              <Card
                key={title}
                as="article"
                surface="muted"
                padding="none"
                className={`group/landmark min-h-38 gap-2.5 p-6 transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-brand-ink hover:shadow-card focus-within:-translate-y-1 focus-within:border-brand focus-within:bg-brand focus-within:text-brand-ink motion-reduce:transform-none ${width}`}
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 group-hover/landmark:border-brand-ink group-focus-within/landmark:border-brand-ink">
                  <AssetIcon
                    src={icon}
                    className="size-5"
                    colorClassName="bg-content-muted transition-colors duration-300 group-hover/landmark:bg-brand-ink"
                  />
                </span>
                <div className="mt-auto">
                  <Heading as="h3" size="quote" className="text-inherit">{title}</Heading>
                  {label ? <Text size="sm" weight="light" tone="inherit" className="opacity-65">{label}</Text> : null}
                </div>
              </Card>
            );
          })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Pricing({ c }: { c: Pati3Content }) {
  return (
    <Section id="preco" padding="tall" container="prose" containerClassName="flex !max-w-[1009px] flex-col items-center gap-8 text-center" labelledBy="pricing-heading">
      <Heading id="pricing-heading" as="h2" size="section" className="text-display-sm!">{c.pricing.titulo}</Heading>

      <div className="grid w-full gap-5 sm:grid-cols-2">
        {PRICE_TIERS.map((tier, i) => {
          const formato = c.pricing.formatos[i];
          const destaque = tier.highlight;

          return (
            <Card
              key={formato.titulo}
              as="article"
              surface="muted"
              padding="none"
              className={cn(
                'items-center gap-3 border p-8 text-center',
                destaque ? 'border-brand' : 'border-line-strong',
              )}
            >
              <Heading as="h3" size="quote">{formato.titulo}</Heading>
              <p className={cn('font-display text-display-md', destaque && 'text-brand-strong')}>
                {tier.price}
              </p>
              <Text size="sm" weight="light" tone="secondary">{c.pricing.porPessoa}</Text>
              <Text size="sm" weight="light" tone="muted" pretty className="mt-1">
                {formato.nota}
              </Text>
            </Card>
          );
        })}
      </div>

      <Text size="sm" weight="light" tone="secondary" pretty>{c.pricing.nota.antes}<strong className="font-semibold text-content">{c.pricing.nota.destaque}</strong>{c.pricing.nota.depois}</Text>
      <Button href={SITE.whatsappUrl} arrow>{c.pricing.cta}</Button>
    </Section>
  );
}

function TrustAndReviews({ c }: { c: Pati3Content }) {
  return (
    <Section id="informacoes" padding="none" container={false} className="relative isolate overflow-x-clip border-y border-line max-lg:py-12 lg:pt-10">
      <Image
        src="/svg/screen_destinos_vale-do-pati-session-05_backgroud.svg"
        alt=""
        width={1312}
        height={618}
        unoptimized
        className="pati-trust-background pointer-events-none absolute top-[17%] left-[20%] z-0 h-auto w-[80.6%] max-w-none opacity-20"
      />
      <Container className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="relative flex max-w-146.25 flex-col gap-12 lg:sticky lg:top-24 lg:pb-16">
          <div className="flex flex-col items-start gap-6">
            <Badge variant="outline" size="sm">{c.trust.badge}</Badge>
            <Heading as="h2" size="hero" balance className="max-lg:text-display-lg">
              {c.trust.titulo.antes} <span className="text-brand-strong">{c.trust.titulo.destaque}</span>
            </Heading>
          </div>

          <div className="grid max-w-96 grid-cols-1 gap-5 sm:grid-cols-2">
            {c.trust.selos.map(({ titulo: title, corpo: body }, i) => {
              const icon = TRUST_ICONS[i];
              return (
              <Card
                key={title}
                as="article"
                surface="muted"
                padding="none"
                className="min-h-0 gap-3 p-6 sm:min-h-51"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-brand">
                  <AssetIcon src={icon} className="size-5" />
                </span>
                <div className="mt-auto">
                  <Heading as="h3" size="quote">{title}</Heading>
                  <Text size="sm" weight="light" tone="secondary" pretty>{body}</Text>
                </div>
              </Card>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href={SITE.whatsappUrl} arrow>{c.trust.cta}</Button>
            <Button href={TRIPADVISOR_URL} variant="outline">{c.trust.ctaTripadvisor}</Button>
          </div>
        </div>

        <ScrollFeedbackStack testimonials={HOME_TESTIMONIALS} trailing={false} />
      </Container>
    </Section>
  );
}

function Faq({ c, locale }: { c: Pati3Content; locale: Locale }) {
  return (
    <Section id="duvidas" padding="default" container="prose" containerClassName="flex flex-col gap-8" labelledBy="faq-heading">
      <header className="flex flex-col items-center gap-4 text-center"><Heading id="faq-heading" as="h2" size="section">{c.faqTitulo.titulo}</Heading><Text size="sm" weight="light" tone="secondary" pretty className="max-w-170">{c.faqTitulo.lead}</Text></header>
      <PatiFaqList faqs={PATI3_FAQS[locale]} />
    </Section>
  );
}

function FinalCta({ c }: { c: Pati3Content }) {
  return (
    <Section padding="none" className="pb-20 lg:pb-27">
      <MediaCard
        as="section"
        overlay="none"
        radius="panelLg"
        backdrop="none"
        className="min-h-100 max-lg:rounded-panel lg:h-116.5 lg:bg-media-backdrop lg:shadow-image-outline"
        contentLayer="flow"
        contentClassName="flex min-h-100 items-center px-7 py-12 sm:px-14 lg:h-full lg:min-h-0 lg:px-22.25 lg:py-0"
        media={
          <>
            <Image
              src="/img/figma/destinations/vale-do-pati-3/cta-morro-do-castelo.png"
              alt={c.finalCta.fotoAlt}
              fill
              sizes="(min-width:1280px) 1216px, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-r from-black/75 via-black/48 to-black/15" />
          </>
        }
      >
        <div className="relative z-10 flex max-w-154 flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Heading as="h2" size="hero" tone="onMedia" balance className="max-lg:text-[clamp(28px,8.4vw,36px)]">
              {c.finalCta.titulo[0]}<br />{c.finalCta.titulo[1]}
            </Heading>
            <Text size="sm" weight="light" tone="onMediaSoft" pretty className="max-w-131.5 lg:text-xl">
              {c.finalCta.corpo}
            </Text>
          </div>
          <Button href={SITE.whatsappUrl} arrow className="self-start max-sm:w-full">{c.finalCta.cta}</Button>
        </div>

        <Image
          src="/svg/humans-assets-yellow.svg"
          alt=""
          width={784}
          height={246}
          unoptimized
          className="pointer-events-none absolute right-6 bottom-0 hidden h-auto w-[42%] max-w-125 lg:block xl:right-10"
        />
      </MediaCard>
    </Section>
  );
}
