import Image from 'next/image';
import { BedDouble, CalendarDays, MapPin, ShieldCheck, TicketCheck, UsersRound } from 'lucide-react';
import { Badge, Button, Container, Heading, JsonLd, MediaCard, Section, Text } from '@/components/ui';
import { SITE, type Locale } from '@/lib/site';
import { PatiFaqList } from './PatiFaqList';
import { AgencyFacilities } from './AgencySupport';
import { ReveillonBookingTrigger } from './ReveillonBookingTrigger';
import { ReveillonPackageExplorer } from './ReveillonPackageExplorer';
import { REVEILLON_CONTENT, REVEILLON_IMAGE, REVEILLON_PACKAGES, type ReveillonContent } from './reveillon-content';

// Ícones na ordem de `REVEILLON_CONTENT[locale].inclusos.itens`.
const INCLUSION_ICONS = [TicketCheck, UsersRound, BedDouble, MapPin] as const;

export function ReveillonExperience({ locale }: { locale: Locale }) {
  const c = REVEILLON_CONTENT[locale];
  return (
    <article className="overflow-x-clip">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: c.meta.title,
          description: c.meta.description,
          image: `${SITE.url}${REVEILLON_IMAGE}`,
          touristType: c.jsonLd.touristType,
          provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.url },
          offers: REVEILLON_PACKAGES.map((item) => ({
            '@type': 'Offer',
            name: c.jsonLd.offerName(c.pacotes[item.key].days),
            price: item.price,
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
          })),
        }}
      />

      <Hero c={c} />
      <Story c={c} />
      <Section id="pacotes" padding="tall" containerClassName="relative">
        <ReveillonPackageExplorer locale={locale} />
      </Section>
      <IncludedBand c={c} />
      <Section padding="default">
        <AgencyFacilities locale={locale} />
      </Section>
      <PracticalInformation c={c} />
      <FinalCta c={c} />
    </article>
  );
}

function Hero({ c }: { c: ReveillonContent }) {
  return (
    <Section
      padding="none"
      container={false}
      className="hero-under-header relative isolate -mt-20 flex min-h-[46rem] items-end overflow-hidden bg-media-backdrop pt-28 pb-10 sm:min-h-[48rem] sm:pb-14 lg:min-h-[52rem] lg:pb-16"
    >
      <Image
        src={REVEILLON_IMAGE}
        alt={c.hero.fotoAlt}
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
              {c.hero.dates}
            </Badge>
            <Heading as="h1" size="hero" tone="onMedia" balance className="mt-5 max-w-205 text-[clamp(3.2rem,9.4vw,7.7rem)]! leading-[.88]! tracking-[-.045em]">
              {c.hero.titulo}
            </Heading>
            <Text weight="light" tone="onMediaSoft" pretty className="mt-6 max-w-155 text-lg sm:text-xl">
              {c.hero.lead}
            </Text>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#pacotes" size="lg" arrow className="max-sm:w-full">{c.hero.verPacotes}</Button>
              <ReveillonBookingTrigger label={c.hero.falar} variant="outlineOnMedia" className="max-sm:w-full" />
            </div>
          </header>
        </div>
      </Container>
    </Section>
  );
}

function Story({ c }: { c: ReveillonContent }) {
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
            <Badge variant="brand" size="sm">{c.story.badge}</Badge>
            <Heading as="h2" size="hero" balance className="mt-5 max-lg:text-display-lg">
              {c.story.titulo}
            </Heading>
            <div className="mt-6 flex max-w-158 flex-col gap-4 text-lg font-light leading-relaxed text-content-secondary">
              {c.story.paragrafos.map((paragrafo) => (
                <p key={paragrafo} className="text-pretty">{paragrafo}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4 border-l-2 border-brand pl-5">
              <ShieldCheck aria-hidden className="size-6 shrink-0 text-brand-strong" />
              <Text size="sm" weight="light" tone="secondary" pretty>
                {c.story.selo}
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-[1.12fr_.88fr] gap-3 sm:gap-5">
            <figure className="relative min-h-115 overflow-hidden rounded-panel-lg bg-media-backdrop shadow-image-outline sm:min-h-145">
              <Image
                src="/img/adventures/buracao/hero.jpeg"
                alt={c.story.fotos.buracao}
                fill
                sizes="(min-width: 1024px) 36vw, 56vw"
                className="object-cover"
              />
            </figure>
            <div className="grid gap-3 sm:gap-5">
              <figure className="relative min-h-56 overflow-hidden rounded-panel bg-media-backdrop shadow-image-outline sm:min-h-70">
                <Image
                  src="/img/home_backgroud/home_backgroud_03_no_crop_1x.webp"
                  alt={c.story.fotos.lencois}
                  fill
                  sizes="(min-width: 1024px) 26vw, 42vw"
                  className="object-cover"
                />
              </figure>
              <div className="flex min-h-56 flex-col justify-between rounded-panel bg-brand p-5 text-brand-contrast sm:min-h-70 sm:p-7">
                <MapPin aria-hidden className="size-6" />
                <div>
                  <p className="font-display text-4xl leading-none sm:text-6xl">Chapada</p>
                  <p className="mt-2 text-xs font-light opacity-75 sm:text-sm">{c.story.regioes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function IncludedBand({ c }: { c: ReveillonContent }) {
  return (
    <Section padding="none" surface="muted" bordered container={false} aria-label={c.inclusos.ariaLabel}>
      <Container>
        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)]">
          <div className="flex items-center border-line py-8 lg:border-r lg:pr-10">
            <Heading as="h2" size="quote" balance>{c.inclusos.titulo}</Heading>
          </div>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
            {c.inclusos.itens.map(({ label, detail }, i) => {
              const Icon = INCLUSION_ICONS[i];
              return (
                <div key={label} className="flex gap-4 border-line py-6 sm:p-7 sm:odd:border-r lg:border-r lg:last:border-r-0">
                  <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-strong" />
                  <div>
                    <dt className="font-semibold text-content">{label}</dt>
                    <dd className="mt-1 text-xs font-light leading-relaxed text-content-secondary">{detail}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </Container>
    </Section>
  );
}

function PracticalInformation({ c }: { c: ReveillonContent }) {
  return (
    <Section id="informacoes" padding="tall" containerClassName="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Badge variant="brand" size="sm">{c.info.badge}</Badge>
        <Heading as="h2" size="section" balance className="mt-4">{c.info.titulo}</Heading>
        <Text weight="light" tone="secondary" leading="relaxed" pretty className="mt-5">
          {c.info.corpo}
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
      <PatiFaqList faqs={c.faqs} />
    </Section>
  );
}

function FinalCta({ c }: { c: ReveillonContent }) {
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
              alt={c.finalCta.fotoAlt}
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-r from-black/86 via-black/56 to-black/16" />
          </>
        }
      >
        <div className="relative z-10 max-w-174">
          <Badge variant="outlineOnMedia" size="sm">{c.finalCta.badge}</Badge>
          <Heading as="h2" size="hero" tone="onMedia" balance className="mt-5 max-lg:text-display-lg">
            {c.finalCta.titulo}
          </Heading>
          <Text weight="light" tone="onMediaSoft" pretty className="mt-5 max-w-135 sm:text-lg">
            {c.finalCta.corpo}
          </Text>
          <ReveillonBookingTrigger label={c.finalCta.cta} className="mt-8 max-sm:w-full" />
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
