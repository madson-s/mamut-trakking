import type { ReactNode } from 'react';
import Image from 'next/image';
import { MetaList } from './MetaList';
import { Prose } from './Prose';
import { JsonLd } from './JsonLd';
import { SITE, formatPrice, type Locale } from '@/lib/site';

export type AdventureDetailLabels = {
  level: string;
  distance: string;
  origin: string;
  from: string;
};

// Layout completo da página de detalhe de um roteiro: metadados, <h1>, resumo,
// imagem, corpo (children) e JSON-LD TouristTrip. A página passa só o conteúdo.
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

  return (
    <article>
      <JsonLd data={jsonLd} />
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <MetaList
          items={[
            `${labels.level}: ${level}`,
            `${labels.distance}: ${distance}`,
            `${labels.origin}: ${origin}`,
          ]}
        />
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-mamut-stone">{summary}</p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <Prose>{children}</Prose>
        <p className="mt-10 text-lg font-medium">
          {labels.from} {formatPrice(price, locale)}
        </p>
      </div>
    </article>
  );
}
