import { Card, Container, Heading, Section, Text } from '@/components/ui';
import { SITE, type Locale } from '@/lib/site';
import {
  PRIVACIDADE_ATUALIZADA_EM,
  PRIVACIDADE_CONTENT,
  type PrivacidadeBloco,
} from './privacidade-content';

const DATA_LOCALE: Record<Locale, string> = { pt: 'pt-BR', en: 'en-GB', es: 'es', fr: 'fr-FR', nl: 'nl-NL' };

const linkClasses =
  'text-brand-strong underline underline-offset-2 transition-colors ease-brand hover:text-content';

function dataPorExtenso(locale: Locale): string {
  // Meio-dia UTC: a data não "volta um dia" em nenhum fuso das Américas.
  return new Intl.DateTimeFormat(DATA_LOCALE[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${PRIVACIDADE_ATUALIZADA_EM}T12:00:00Z`),
  );
}

function Bloco({ bloco }: { bloco: PrivacidadeBloco }) {
  switch (bloco.tipo) {
    case 'p':
      return (
        <Text tone="secondary" leading="relaxed" pretty>
          {bloco.texto}
        </Text>
      );
    case 'lista':
      return (
        <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-brand-strong">
          {bloco.itens.map((item) => (
            <Text key={item} as="li" tone="secondary" leading="relaxed" pretty>
              {item}
            </Text>
          ))}
        </ul>
      );
    case 'itens':
      return (
        <ul className="flex flex-col gap-5">
          {bloco.itens.map(([termo, descricao]) => (
            <Text key={termo} as="li" tone="secondary" leading="relaxed" pretty>
              <strong className="font-medium text-content">{termo}</strong> {descricao}
            </Text>
          ))}
        </ul>
      );
  }
}

export function PrivacidadePage({ locale }: { locale: Locale }) {
  const c = PRIVACIDADE_CONTENT[locale];

  return (
    <>
      <Section padding="none" container={false} labelledBy="privacidade-titulo" className="relative isolate overflow-x-clip">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-20 h-150 w-240 max-w-none bg-content opacity-[0.045] [mask-image:url('/svg/session-05_backgroud-people-01.svg')] [mask-repeat:no-repeat] [mask-size:contain]"
        />
        <Container className="relative pb-6 pt-12 sm:pb-10 sm:pt-20">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-16">
            <Heading as="h1" id="privacidade-titulo" size="hero" balance>
              {c.titulo.antes}{' '}
              <span className="text-brand-strong">{c.titulo.destaque}</span>
            </Heading>
            <div className="flex flex-col gap-3 lg:pb-2">
              <Text size="base" tone="secondary" pretty>{c.lead}</Text>
              <Text size="sm" tone="muted">
                {c.atualizado}:{' '}
                <time dateTime={PRIVACIDADE_ATUALIZADA_EM}>{dataPorExtenso(locale)}</time>
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        padding="tall"
        labelledBy="privacidade-controlador"
        containerClassName="grid items-start gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16"
      >
        {/* Índice: a página é longa, e quem chega aqui costuma procurar um ponto só. */}
        <nav aria-label={c.indice} className="flex flex-col gap-4 max-lg:hidden lg:sticky lg:top-24">
          <Text as="span" size="xs" weight="semibold" tone="muted" className="tracking-[0.14em] uppercase">
            {c.indice}
          </Text>
          <ol className="flex flex-col gap-2 border-l border-line pl-4">
            {c.secoes.map((secao) => (
              <Text key={secao.id} as="li" size="sm" tone="secondary">
                <a href={`#${secao.id}`} className="transition-colors ease-brand hover:text-brand-strong">
                  {secao.titulo}
                </a>
              </Text>
            ))}
          </ol>
        </nav>

        <div className="flex min-w-0 max-w-180 flex-col gap-14">
          <Card surface="muted" padding="lg" as="section" className="flex flex-col gap-3">
            <Heading as="h2" id="privacidade-controlador" size="quote">
              {c.controlador.titulo}
            </Heading>
            <Text tone="secondary" leading="relaxed">
              <strong className="font-medium text-content">{c.controlador.nome}</strong>
              <br />
              {c.controlador.cnpj}
              <br />
              {c.controlador.endereco}
            </Text>
            <Text tone="secondary" leading="relaxed" pretty>
              {c.controlador.contato}{' '}
              <a href={`mailto:${SITE.email}`} className={linkClasses}>{SITE.email}</a>
              {' · '}
              <a href={SITE.whatsappUrl} className={linkClasses}>WhatsApp {SITE.whatsapp}</a>
            </Text>
          </Card>

          {c.secoes.map((secao) => (
            <section key={secao.id} id={secao.id} aria-labelledby={`${secao.id}-titulo`} className="flex scroll-mt-24 flex-col gap-5">
              <Heading as="h2" id={`${secao.id}-titulo`} size="quote">
                {secao.titulo}
              </Heading>
              {secao.blocos.map((bloco, i) => (
                <Bloco key={i} bloco={bloco} />
              ))}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
