import type { ReactNode } from 'react';
import Image from 'next/image';
import { Info, Route, Tent, Users, UserRound } from 'lucide-react';
import { Badge, Button, Card, Heading, MediaCard, Section, Text } from '@/components/ui';
import { SITE } from '@/lib/site';
import type { Locale } from '@/lib/site';
import { PatiFaqList } from './PatiFaqList';
import type { DayTourAssets, DayTourContent } from './day-tour';
import { PATI3_CONTENT } from './pati-3-content';
import { TrekBookingButton } from './TrekBookingButton';

/** Layout opt-in: mantém a fonte de conteúdo e a composição superior do roteiro. */
export function TrekJourney({
  content: c,
  assets,
  locale,
  children,
}: {
  content: DayTourContent;
  assets: DayTourAssets;
  locale: Locale;
  children?: ReactNode;
}) {
  const hasStructuredDays = Boolean(c.itinerario.dias?.length);
  const journeyDays = hasStructuredDays
    ? c.itinerario.dias!.map((day) => ({
        ...day,
        paragraphs: readingParagraphs(day.corpo),
      }))
    : [
        {
          rotulo: c.hero.duracao,
          titulo: c.hero.titulo,
          distancia: assets.stats[0]?.[0] ?? '',
          esforco: c.hero.nivel,
          paragraphs: c.itinerario.corpo,
        },
      ];

  return (
    <>
      <Section id="itinerario" labelledBy="itinerario-heading" containerClassName="flex flex-col gap-10 lg:gap-14">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-8">
          <Heading id="itinerario-heading" as="h2" size="section" balance>{c.itinerario.titulo}</Heading>
          <div className="flex shrink-0 items-center gap-2 text-brand-strong">
            <Tent aria-hidden className="size-5" strokeWidth={1.5} />
            <Badge variant="outline" size="sm">{c.hero.duracao}</Badge>
          </div>
        </div>

        {hasStructuredDays
          ? c.itinerario.corpo.map((paragraph) => (
              <Text key={paragraph} tone="secondary" leading="relaxed" className="max-w-prose">{paragraph}</Text>
            ))
          : null}

        <ol className="flex flex-col gap-12 lg:gap-16">
          {journeyDays.map((day, index) => {
            const photo = assets.galeria[index];
            return (
              <li key={day.rotulo} className="grid gap-6 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-8">
                <div className="flex items-center gap-4 lg:flex-col lg:items-center">
                  <span aria-hidden className="flex size-14 shrink-0 items-center justify-center rounded-full border border-line-strong font-display text-display-xs text-brand-strong lg:size-16">
                    {index + 1}
                  </span>
                  <span aria-hidden className="hidden w-px flex-1 bg-line lg:block" />
                </div>

                <article className="grid items-start gap-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
                  {photo ? (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-surface-muted md:sticky md:top-8">
                      <Image src={photo.src} alt="" fill sizes="(min-width: 1280px) 430px, (min-width: 768px) 38vw, 100vw" className="object-cover" />
                    </div>
                  ) : null}
                  <div className="flex min-w-0 flex-col gap-6 md:py-2">
                    <div className="flex flex-col gap-2">
                      <Text as="p" size="sm" weight="semibold" tone="brand" className="tracking-[0.08em]">{day.rotulo}</Text>
                      <Heading as="h3" size="card" balance>{day.titulo}</Heading>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" size="sm"><Route aria-hidden className="mr-1 size-3.5" />{day.distancia}</Badge>
                      <Badge variant="outline" size="sm">{day.esforco}</Badge>
                    </div>
                    <div className="flex max-w-prose flex-col gap-4">
                      {day.paragraphs.map((paragraph) => (
                        <Text key={paragraph} tone="secondary" weight="light" leading="relaxed">{paragraph}</Text>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <aside className="flex items-start gap-4 rounded-card border border-line bg-surface-muted p-6 lg:ml-28 lg:p-8">
          <Info aria-hidden className="mt-1 size-5 shrink-0 text-brand-strong" strokeWidth={1.5} />
          <Text size="sm" tone="secondary" leading="relaxed" pretty>{c.itinerario.aviso}</Text>
        </aside>
      </Section>

      <Section id="reserva" surface="muted" labelledBy="precos-heading" containerClassName="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-14">
        <div className="flex flex-col gap-6 lg:py-6">
          <Heading id="precos-heading" as="h2" size="section" balance>{c.precos.titulo}</Heading>
          <Text size="sm" tone="secondary" leading="relaxed" pretty>{c.precos.nota}</Text>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {c.precos.formatos.map((format, index) => {
            const Icon = index === 0 ? UserRound : Users;
            const price = Number(format.preco.replace(/\D/g, ''));
            const eventName = `trek:open-booking:${index}`;
            const sheetId = `trek-booking-sheet-${index}`;
            return (
              <Card key={format.titulo} as="article" surface="raised" padding="none" className="gap-6 p-6 lg:p-8">
                <div className="flex size-12 items-center justify-center rounded-full border border-line-strong text-brand-strong">
                  <Icon aria-hidden className="size-5" strokeWidth={1.5} />
                </div>
                <Heading as="h3" size="quote" balance>{format.titulo}</Heading>
                <div className="flex flex-col gap-1 border-y border-line py-6">
                  <Heading as="p" size="section" tone="brand" className="whitespace-nowrap">{format.preco}</Heading>
                  <Text size="sm" tone="secondary">{c.hero.porPessoa}</Text>
                </div>
                <Text size="sm" tone="secondary" leading="relaxed" pretty className="flex-1">{format.nota}</Text>
                <TrekBookingButton
                  content={PATI3_CONTENT[locale].booking}
                  eventName={eventName}
                  label={c.hero.reservar}
                  messageIntro={bookingMessageIntro(locale, c.hero.titulo, format.titulo)}
                  price={price}
                  sheetId={sheetId}
                  variant={index === 0 ? 'outline' : 'primary'}
                />
              </Card>
            );
          })}
        </div>
      </Section>

      <Section id="duvidas" labelledBy="faq-heading" containerClassName="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-14">
        <div className="flex flex-col gap-8 lg:sticky lg:top-8">
          <Heading id="faq-heading" as="h2" size="section" balance>{c.faqTitulo}</Heading>
          <div aria-hidden className="h-1 w-16 rounded-pill bg-brand" />
        </div>
        <div className="min-w-0"><PatiFaqList faqs={c.faqs} /></div>
      </Section>

      {children}

      <Section labelledBy="journey-cta-heading">
        <MediaCard image={{ src: assets.hero.src, position: assets.hero.position, sizes: '(min-width: 1280px) 1200px, 100vw' }} overlay="left" radius="panel" contentClassName="flex flex-col items-start gap-6 px-6 py-12 sm:p-12 lg:px-16 lg:py-20">
          <Heading id="journey-cta-heading" as="h2" size="hero" tone="onMedia" balance className="max-w-3xl">
            {c.cta.titulo[0]}<br />{c.cta.titulo[1]}
          </Heading>
          <Text tone="onMediaSoft" size="lg" leading="relaxed" pretty className="max-w-xl">{c.cta.corpo}</Text>
          <Button href={SITE.whatsappUrl} size="lg" arrow className="mt-2 max-sm:w-full">{c.cta.botao}</Button>
        </MediaCard>
      </Section>
    </>
  );
}

function bookingMessageIntro(locale: Locale, adventure: string, format: string) {
  const messages: Record<Locale, string> = {
    pt: `Olá! Quero verificar disponibilidade para ${adventure} — ${format} em`,
    en: `Hi! I want to check availability for ${adventure} — ${format} on`,
    es: `¡Hola! Quiero consultar disponibilidad para ${adventure} — ${format} el`,
  };
  return messages[locale];
}

/** Só introduz respiro entre frases completas; não reescreve a narrativa. */
function readingParagraphs(text: string): string[] {
  if (text.length < 500) return [text];
  const sentences = text.split(/(?<=[.!?])\s+/);
  const middle = Math.ceil(sentences.length / 2);
  return [sentences.slice(0, middle).join(' '), sentences.slice(middle).join(' ')].filter(Boolean);
}
