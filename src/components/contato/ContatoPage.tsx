import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Button, Card, Container, Heading, Section, Text } from '@/components/ui';
import { ADVENTURE_SEGMENT, SITE, type Locale } from '@/lib/site';
import { ContatoChannels } from './ContatoChannels';
import { ContatoForm } from './ContatoForm';
import { CONTATO_CONTENT, CONTATO_EDITORIAL } from './contato-content';
import { AdventureCard, aventurasDoIdioma } from '@/components/adventures/AdventureCard';
import { ADVENTURES_CONTENT } from '@/components/adventures/adventures-content';

export function ContatoPage({ locale }: { locale: Locale }) {
  const c = CONTATO_CONTENT[locale];
  const editorial = CONTATO_EDITORIAL[locale];
  const suggestions = aventurasDoIdioma(locale).filter(({ route }) => route === 'palmital' || route === 'aguas-claras');

  return (
    <>
      <Section padding="none" container={false} labelledBy="contato-title" className="relative isolate">
        <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-20 h-150 w-240 max-w-none bg-content opacity-[0.045] [mask-image:url('/svg/session-05_backgroud-people-01.svg')] [mask-repeat:no-repeat] [mask-size:contain]" />
        <Container className="relative pb-16 pt-12 sm:pb-20 sm:pt-20">
          <div className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-16">
            <Heading as="h1" id="contato-title" size="hero" balance>
              {c.titulo.antes}{' '}
              <span className="text-brand-strong">{c.titulo.destaque}</span>
            </Heading>
            <div className="flex flex-col gap-4 lg:pb-2">
              <Text size="base" tone="secondary" pretty>{c.lead}</Text>
              <div className="flex items-center gap-2 text-brand-strong">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                <Text size="sm" tone="inherit">{SITE.location}</Text>
              </div>
            </div>
          </div>

          <div className="grid items-start gap-5 lg:grid-cols-[1.65fr_1fr] lg:gap-6">
            <ContatoForm locale={locale} />
            <aside className="relative isolate flex min-h-140 flex-col overflow-hidden rounded-panel-lg p-7 sm:p-10 lg:sticky lg:top-8 lg:h-132 lg:min-h-0">
              {/* Foto panorâmica em um recorte vertical alto: usar a fonte integral
                  evita que o otimizador amplie uma versão de apenas 460px. */}
              <Image src="/img/home_backgroud/home_hero_background_1_5x.webp" alt={editorial.photoAlt} fill
                unoptimized className="object-cover object-[58%_center]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/10" />
              <span className="relative self-start rounded-pill border border-white/60 px-4 py-2 font-body text-sm text-on-media">
                Chapada Diamantina
              </span>
              <div className="relative mt-7 flex flex-col gap-5">
                <Heading as="h2" size="section" tone="onMedia" balance>{editorial.photoTitle}</Heading>
                <Text tone="onMediaSoft" pretty>{editorial.photoLead}</Text>
              </div>
              <div className="relative mt-auto shrink-0 pt-10">
                <Image src="/svg/about/story-walkers.svg" alt="" width={290} height={114} className="h-auto w-full" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/10" />
            </aside>
          </div>

          <div className="mt-12 sm:mt-16"><ContatoChannels locale={locale} /></div>
        </Container>
      </Section>

      <Section padding="none" className="pb-16 sm:pb-24" labelledBy="contato-explore-title">
        <Card surface="muted" radius="panelLg" padding="none" className="overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-10">
            <div className="flex flex-col items-start gap-6">
              <Heading id="contato-explore-title" size="section" balance>{editorial.exploreTitle}</Heading>
              <Text tone="secondary" pretty className="max-w-md">{editorial.exploreLead}</Text>
              <Button href={`/${locale}/${ADVENTURE_SEGMENT[locale]}`} arrow>{editorial.exploreCta}</Button>
            </div>
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              {suggestions.map((adventure) => (
                <AdventureCard key={adventure.id} adventure={adventure} content={ADVENTURES_CONTENT[locale]} locale={locale} compact />
              ))}
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
