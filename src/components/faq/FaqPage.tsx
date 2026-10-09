import Link from 'next/link';
import { Button, Container, Heading, JsonLd, Section, Text } from '@/components/ui';
import { PatiFaqList, type PatiFaqItem } from '@/components/adventure/PatiFaqList';
import { DAY_TOUR_LEGAL, safetyFaq } from '@/components/adventure/day-tour-legal';
import { DICAS_CONTENT } from '@/components/dicas/dicas-conteudo';
import { SITE, type Locale } from '@/lib/site';
import { FAQ_CONTENT } from './faq-content';

/** "Antes de vir": as perguntas de Informações gerais, no formato do acordeão. */
function perguntasGerais(locale: Locale): PatiFaqItem[] {
  return DICAS_CONTENT[locale].paginas['informacoes-gerais'].perguntas.map((item) => ({
    type: 'payment' as const, // título + parágrafos; o tipo só define a forma
    title: item.pergunta,
    paragraphs: [item.resposta],
  }));
}

/** Texto corrido de um item, para o JSON-LD (que só aceita texto). */
function respostaEmTexto(item: PatiFaqItem): string | null {
  switch (item.type) {
    case 'payment':
      return item.paragraphs.join(' ');
    case 'cancellation':
      return [item.intro, item.refunds.map(([quando, regra]) => `${quando}: ${regra}`).join('; '), ...item.paragraphs].join(' ');
    case 'safety':
      return [item.lead, item.body, ...(item.disclaimer ?? [])].join(' ');
    default:
      return null;
  }
}

function FaqSection({
  id,
  titulo,
  lead,
  faqs,
}: {
  id: string;
  titulo: string;
  lead: string;
  faqs: readonly PatiFaqItem[];
}) {
  return (
    <Section
      id={id}
      labelledBy={`${id}-heading`}
      containerClassName="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-14"
    >
      <div className="flex flex-col gap-5 lg:sticky lg:top-24">
        <Heading as="h2" id={`${id}-heading`} size="section" balance>{titulo}</Heading>
        <Text size="sm" tone="secondary" leading="relaxed" pretty>{lead}</Text>
        <div aria-hidden className="h-1 w-16 rounded-pill bg-brand" />
      </div>
      <div className="min-w-0"><PatiFaqList faqs={faqs} /></div>
    </Section>
  );
}

export function FaqPage({ locale }: { locale: Locale }) {
  const c = FAQ_CONTENT[locale];
  const antes = perguntasGerais(locale);
  const reserva = DAY_TOUR_LEGAL[locale];
  const seguranca = [safetyFaq(locale, c.avisoSeguranca)];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: [...antes, ...reserva, ...seguranca].flatMap((item) => {
      const texto = respostaEmTexto(item);
      return texto
        ? [{ '@type': 'Question', name: item.title, acceptedAnswer: { '@type': 'Answer', text: texto } }]
        : [];
    }),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Section padding="none" container={false} labelledBy="faq-title" className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-20 h-150 w-240 max-w-none bg-content opacity-[0.045] [mask-image:url('/svg/session-05_backgroud-people-01.svg')] [mask-repeat:no-repeat] [mask-size:contain]"
        />
        <Container className="relative pb-6 pt-12 sm:pb-10 sm:pt-20">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-16">
            <Heading as="h1" id="faq-title" size="hero" balance>
              {c.titulo.antes}{' '}
              <span className="text-brand-strong">{c.titulo.destaque}</span>
            </Heading>
            <Text size="base" tone="secondary" pretty className="lg:pb-2">{c.lead}</Text>
          </div>

          {/* Atalho para as três seções — a página é longa no mobile. */}
          <nav aria-label={c.titulo.antes + ' ' + c.titulo.destaque} className="mt-10 flex flex-wrap gap-2">
            {(
              [
                ['antes', c.secoes.antes],
                ['reserva', c.secoes.reserva],
                ['seguranca', c.secoes.seguranca],
              ] as const
            ).map(([id, rotulo]) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex min-h-10 items-center rounded-pill border border-line-contrast px-4 font-body text-sm text-content-secondary transition-colors ease-brand hover:border-brand hover:bg-brand hover:text-brand-contrast"
              >
                {rotulo}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      <FaqSection id="antes" titulo={c.secoes.antes} lead={c.leads.antes} faqs={antes} />
      <FaqSection id="reserva" titulo={c.secoes.reserva} lead={c.leads.reserva} faqs={reserva} />
      <FaqSection id="seguranca" titulo={c.secoes.seguranca} lead={c.leads.seguranca} faqs={seguranca} />

      <Section padding="tall" labelledBy="faq-fechamento" containerClassName="flex flex-col items-center gap-6 text-center">
        <Heading as="h2" id="faq-fechamento" size="section" balance>{c.fechamento.titulo}</Heading>
        <Text tone="secondary" pretty className="max-w-130">{c.fechamento.texto}</Text>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href={SITE.whatsappUrl} arrow>{c.fechamento.whatsapp}</Button>
          <Link
            href={c.fechamento.contatoHref}
            className="font-body text-base text-content underline underline-offset-4 transition-colors ease-brand hover:text-brand-strong"
          >
            {c.fechamento.contato}
          </Link>
        </div>
      </Section>
    </>
  );
}
