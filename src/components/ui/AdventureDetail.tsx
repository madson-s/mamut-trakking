import type { ReactNode } from 'react';
import { SITE, formatPrice, type Locale } from '@/lib/site';
import { Badge } from './Badge';
import { Container } from './Container';
import { JsonLd } from './JsonLd';
import { MediaCard } from './MediaCard';
import { Prose } from './Prose';
import { Section } from './Section';
import { SectionHeading } from './SectionHeading';

export type AdventureDetailLabels = {
  level: string;
  distance: string;
  origin: string;
  from: string;
};

/**
 * Página de detalhe de um roteiro: capa fotográfica com os chips de nível,
 * distância e saída, `<h1>` + resumo sobre o véu, corpo em largura de leitura,
 * preço e JSON-LD `TouristTrip`. A página passa só o conteúdo.
 *
 * A capa é o LCP da página, por isso `preload`.
 */
export function AdventureDetail({
  locale,
  title,
  summary,
  level,
  distance,
  origin,
  price,
  image,
  labels,
  children,
}: {
  locale: Locale;
  title: string;
  summary: string;
  level: string;
  distance: string;
  origin: string;
  price: number;
  image: string;
  labels: AdventureDetailLabels;
  children: ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: title,
    description: summary,
    image,
    touristType: 'Trekking / ecoturismo',
    provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.url },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
  };

  const meta = [
    { label: labels.level, value: level },
    { label: labels.distance, value: distance },
    { label: labels.origin, value: origin },
  ];

  return (
    <article>
      <JsonLd data={jsonLd} />
      <Section padding="compact" containerClassName="flex flex-col gap-12">
        <MediaCard
          image={{
            src: image,
            alt: title,
            sizes: '(min-width: 1264px) 1216px, 100vw',
            preload: true,
          }}
          overlay="bottom"
          radius="panel"
          backdrop="media"
          className="min-h-[420px] lg:h-[520px] lg:rounded-panel-lg"
          contentLayer="fill"
          contentClassName="flex flex-col justify-end gap-6 p-8 lg:p-12"
        >
          <div className="flex flex-wrap items-center gap-2">
            {meta.map((item) => (
              <Badge key={item.label} variant="outlineOnMedia">
                {item.label}: {item.value}
              </Badge>
            ))}
          </div>
          <SectionHeading
            as="h1"
            size="section"
            tone="onMedia"
            title={title}
            lead={summary}
            maxWidth="max-w-[760px]"
          />
        </MediaCard>

        <Container size="prose" padded={false} className="flex flex-col gap-10">
          <Prose>{children}</Prose>
          <Badge variant="soft" size="lg" radius="chip" className="self-start">
            {labels.from} {formatPrice(price, locale)}
          </Badge>
        </Container>
      </Section>
    </article>
  );
}
