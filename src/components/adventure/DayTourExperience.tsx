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
import { cn } from '@/lib/cn';
import { SITE, type Locale } from '@/lib/site';
import { AssetIcon } from './AssetIcon';
import { PatiFaqList } from './PatiFaqList';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { AdventureCard, aventurasDoIdioma } from '@/components/adventures/AdventureCard';
import { ADVENTURES_CONTENT } from '@/components/adventures/adventures-content';

/**
 * Página de passeio de um dia — hero, faixa de números, sobre + galeria,
 * itinerário, preços, FAQs e fecho.
 *
 * Serve qualquer roteiro que caiba nessa anatomia: o texto vem por prop, e as
 * fotos e números por `assets`. Hoje: Morro do Pai Inácio e Cachoeira do
 * Sossego.
 */
export function DayTourExperience({
  locale,
  content,
  assets,
}: {
  locale: Locale;
  content: Record<Locale, DayTourContent>;
  assets: DayTourAssets;
}) {
  const c = content[locale];
  const stats = assets.stats.map(([value, icon], i) => ({ value, icon, label: c.stats[i] }));

  return (
    <article>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: c.meta.title,
          description: c.meta.description,
          image: `${SITE.url}${assets.hero.src}`,
          provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.url },
          offers: {
            '@type': 'Offer',
            price: assets.fromPrice,
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
          },
        }}
      />

      <MediaCard
        as="section"
        radius="none"
        overlay="soft"
        backdrop="media"
        image={{
          src: assets.hero.src,
          alt: c.meta.title,
          sizes: '100vw',
          preload: true,
          position: assets.hero.position,
        }}
        className="-mt-20 min-h-115 lg:min-h-140"
        contentLayer="fill"
        contentClassName="pt-20"
      >
        <Container className="flex h-full flex-col justify-end gap-6 pb-14 lg:pb-20">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="outlineOnMedia" size="sm">{c.hero.nivel}</Badge>
            <Badge variant="outlineOnMedia" size="sm">{c.hero.duracao}</Badge>
            <Badge variant="outlineOnMedia" size="sm">{c.hero.origem}</Badge>
          </div>
          <Heading as="h1" size="hero" tone="onMedia" balance className="max-w-218.5 max-lg:text-display-lg">
            {c.hero.titulo}
          </Heading>
          <Text size="sm" weight="light" tone="onMediaSoft" pretty className="max-w-131.5 lg:text-lg">
            {c.hero.lead}
          </Text>
          <div className="flex flex-wrap items-center gap-4">
            <Button href={SITE.whatsappUrl} size="lg" arrow className="max-sm:w-full">
              {c.hero.reservar}
            </Button>
            <Text size="sm" weight="light" tone="onMediaSoft">
              {c.hero.apartirDe}{' '}
              <strong className="font-display text-xl">R$ {assets.fromPrice}</strong>{' '}
              {c.hero.porPessoa}
            </Text>
          </div>
        </Container>
      </MediaCard>

      <Section padding="default" container={false}>
        <Container>
          <dl
            className={cn(
              'grid w-full overflow-hidden rounded-panel-lg border border-line bg-surface-muted sm:grid-cols-3',
              assets.stats.length === 6 ? 'lg:grid-cols-6' : 'lg:grid-cols-5',
            )}
          >
            {stats.map(({ value, label, icon }) => (
              <div
                key={label}
                className="flex min-h-32 flex-col items-center justify-center gap-1.5 border-line px-4 py-6 text-center max-sm:border-b sm:border-r sm:last:border-r-0"
              >
                <AssetIcon src={icon} className="size-5.5" />
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-xl">{value}</dd>
                <Text as="div" size="xs" weight="light" tone="secondary">{label}</Text>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section padding="default" container={false} labelledBy="sobre-heading">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Heading id="sobre-heading" as="h2" size="section" balance>{c.sobre.titulo}</Heading>
            {c.sobre.paragrafos.map((paragrafo) => (
              <Text key={paragrafo} size="lg" weight="light" tone="secondary" leading="relaxed" pretty>
                {paragrafo}
              </Text>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {assets.galeria.map((foto) => (
              <Image
                key={foto.src}
                src={foto.src}
                alt=""
                width={foto.width}
                height={foto.height}
                sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
                className="h-56 w-full rounded-card object-cover"
              />
            ))}
          </div>
        </Container>
      </Section>

      {c.estadia ? (
        <Section padding="default" containerClassName="flex flex-col gap-8" labelledBy="estadia-heading">
          <Heading id="estadia-heading" as="h2" size="section" className="text-center">{c.estadia.titulo}</Heading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.estadia.itens.map((item) => (
              <Card key={item.titulo} as="article" surface="muted" padding="none" className="gap-0 overflow-hidden border border-line-strong">
                <div className="relative aspect-[1.4] overflow-hidden bg-media-backdrop">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 390px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2.5 p-6">
                  <Heading as="h3" size="quote">{item.titulo}</Heading>
                  <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{item.corpo}</Text>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      <Section padding="default" container="prose" containerClassName="flex flex-col gap-6" labelledBy="itinerario-heading">
        <Heading id="itinerario-heading" as="h2" size="section">{c.itinerario.titulo}</Heading>
        {c.itinerario.corpo.map((paragrafo) => (
          <Text key={paragrafo} size="base" weight="light" tone="secondary" leading="relaxed" pretty>
            {paragrafo}
          </Text>
        ))}
        {c.itinerario.dias?.map((dia) => (
          <Card key={dia.rotulo} as="article" surface="muted" padding="none" className="gap-3 border border-line-strong p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <Badge variant="solid" size="sm">{dia.rotulo}</Badge>
              <Heading as="h3" size="quote">{dia.titulo}</Heading>
            </div>
            <Text size="base" weight="light" tone="secondary" leading="relaxed" pretty>{dia.corpo}</Text>
            <div className="mt-1 flex flex-wrap gap-2">
              <Badge variant="outline" size="sm">{dia.distancia}</Badge>
              <Badge variant="outline" size="sm">{dia.esforco}</Badge>
            </div>
          </Card>
        ))}
        <div className="rounded-control border-l-4 border-brand bg-surface-sunken px-5 py-4">
          <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{c.itinerario.aviso}</Text>
        </div>
      </Section>

      <Section padding="default" container="prose" containerClassName="flex flex-col items-center gap-8 text-center" labelledBy="precos-heading">
        <Heading id="precos-heading" as="h2" size="section" className="text-display-sm!">{c.precos.titulo}</Heading>
        <div className="grid w-full gap-5 sm:grid-cols-2">
          {c.precos.formatos.map((formato, i) => (
            <Card
              key={formato.titulo}
              as="article"
              surface="muted"
              padding="none"
              className={cn('items-center gap-3 border p-8 text-center', i === 1 ? 'border-brand' : 'border-line-strong')}
            >
              <Heading as="h3" size="quote">{formato.titulo}</Heading>
              <p className={cn('font-display text-display-md', i === 1 && 'text-brand-strong')}>{formato.preco}</p>
              <Text size="sm" weight="light" tone="secondary">{c.hero.porPessoa}</Text>
              <Text size="sm" weight="light" tone="muted" pretty className="mt-1">{formato.nota}</Text>
            </Card>
          ))}
        </div>
        <Text size="sm" weight="light" tone="secondary" pretty>{c.precos.nota}</Text>
        <Button href={SITE.whatsappUrl} arrow>{c.hero.reservar}</Button>
      </Section>

      <Section padding="default" container="prose" containerClassName="flex flex-col gap-8" labelledBy="faq-heading">
        <Heading id="faq-heading" as="h2" size="section" className="text-center">{c.faqTitulo}</Heading>
        <PatiFaqList faqs={c.faqs} />
      </Section>

      {c.relacionados ? <Relacionados locale={locale} relacionados={c.relacionados} /> : null}

      <Section padding="default" containerClassName="flex flex-col items-center gap-8 text-center">
        <Heading as="h2" size="hero" balance className="max-lg:text-[clamp(28px,8.4vw,36px)]">
          {c.cta.titulo[0]}
          <br />
          {c.cta.titulo[1]}
        </Heading>
        <Text size="sm" tone="muted" pretty className="max-w-131.5 sm:text-lg">{c.cta.corpo}</Text>
        <Button href={SITE.whatsappUrl} arrow className="max-lg:w-full">{c.cta.botao}</Button>
      </Section>
    </article>
  );
}

/** Os mesmos cartões do hub, filtrados pelos ids que a página declara. */
function Relacionados({
  locale,
  relacionados,
}: {
  locale: Locale;
  relacionados: NonNullable<DayTourContent['relacionados']>;
}) {
  const catalogo = aventurasDoIdioma(locale);
  // `map` sobre os ids, e não `filter` sobre o catálogo: assim a ordem é a que
  // a página pediu, e não a do arquivo de dados.
  const escolhidas = relacionados.ids
    .map((id) => catalogo.find((a) => a.id === id))
    .filter((a) => a !== undefined);

  if (escolhidas.length === 0) return null;

  return (
    <Section padding="default" containerClassName="flex flex-col gap-8" labelledBy="relacionados-heading">
      <Heading id="relacionados-heading" as="h2" size="section" className="text-center">
        {relacionados.titulo}
      </Heading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {escolhidas.map((aventura) => (
          <AdventureCard
            key={aventura.id}
            adventure={aventura}
            content={ADVENTURES_CONTENT[locale]}
            locale={locale}
          />
        ))}
      </div>
    </Section>
  );
}
