import { Button, Card, Container, Heading, Section, SectionHeading, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { SITE, type Locale } from '@/lib/site';
import { TelefonesLista } from './TelefonesLista';
import { DICAS_CONTENT, GRUPOS_ORDEM } from './dicas-conteudo';

// Sem hero: a página abre direto no conteúdo. Como nada passa por baixo do
// header, ele fica sobre a superfície da página e segue as cores do tema.
// O respiro de 80px do topo fica só no container (padding="none" na seção),
// em vez de somar com o py-12 que o padding "default" traria.
export function DicasPage({ locale }: { locale: Locale }) {
  const c = DICAS_CONTENT[locale];

  return (
    <>
      <Section padding="none" container={false} labelledBy="chegar-title" className="pb-12">
        <Container className="flex flex-col gap-12 pt-20">
          <SectionHeading
            as="h1"
            titleId="chegar-title"
            align="center"
            maxWidth="max-w-[820px]"
            className="mx-auto"
            title={
              <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
                {c.chegada.titulo.antes}{' '}
                <span className="text-brand-strong">{c.chegada.titulo.destaque}</span>
              </span>
            }
            lead={c.chegada.lead}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {c.chegada.opcoes.map((opcao) => (
              <Card
                key={opcao.titulo}
                as="article"
                surface="muted"
                padding="none"
                className={cn(
                  'gap-4 border p-6 sm:p-8',
                  opcao.destaque ? 'border-brand' : 'border-line-strong',
                )}
              >
                <div className="flex flex-col gap-2">
                  <Heading as="h3" size="quote">{opcao.titulo}</Heading>
                  <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>
                    {opcao.texto}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="default" container={false} labelledBy="estadia-title">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            titleId="estadia-title"
            align="center"
            maxWidth="max-w-[820px]"
            className="mx-auto"
            title={
              <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
                {c.estadia.titulo.antes}{' '}
                <span className="text-brand-strong">{c.estadia.titulo.destaque}</span>
              </span>
            }
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {c.estadia.assuntos.map((assunto) => (
              <Card
                key={assunto.titulo}
                as="article"
                surface="muted"
                radius="panelLg"
                padding="none"
                className="gap-5 px-6 py-8 sm:px-8"
              >
                <Heading as="h3" size="card">{assunto.titulo}</Heading>
                <div className="flex flex-col gap-3">
                  {assunto.paragrafos.map((paragrafo) => (
                    <Text key={paragrafo} size="sm" weight="light" tone="secondary" leading="relaxed" pretty>
                      {paragrafo}
                    </Text>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {c.estadia.listas.map((lista) => (
              <div key={lista.titulo} className="flex flex-col gap-4">
                <Text as="span" size="xs" weight="semibold" tone="muted" className="tracking-[0.14em] uppercase">
                  {lista.titulo}
                </Text>
                {lista.nota && (
                  <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>
                    {lista.nota}
                  </Text>
                )}
                <ul className="flex flex-col gap-2.5">
                  {lista.itens.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="shrink-0 font-semibold text-brand-strong">—</span>
                      <Text size="sm" weight="light" tone="secondary">{item}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="default" container={false} labelledBy="telefones-title">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            titleId="telefones-title"
            align="center"
            maxWidth="max-w-[820px]"
            className="mx-auto"
            title={
              <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
                {c.telefones.titulo.antes}{' '}
                <span className="text-brand-strong">{c.telefones.titulo.destaque}</span>
              </span>
            }
            lead={c.telefones.lead}
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-12">
            {GRUPOS_ORDEM.map((grupo) => (
              <TelefonesLista
                key={grupo}
                grupo={grupo}
                titulo={c.telefones.grupos[grupo]}
                locale={locale}
              />
            ))}
          </div>

          <Card
            as="section"
            surface="muted"
            radius="panelLg"
            padding="none"
            className="items-center gap-6 border border-line-strong px-6 py-10 text-center sm:px-10 sm:py-12"
          >
            <div className="flex max-w-[560px] flex-col gap-3">
              <Heading as="h2" size="card" balance>
                {c.cta.titulo.antes} <span className="text-brand-strong">{c.cta.titulo.destaque}</span>
              </Heading>
              <Text size="lg" weight="light" tone="secondary" pretty>
                {c.cta.texto}
              </Text>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={SITE.whatsappUrl} size="lg" arrow>{c.cta.whatsapp}</Button>
              <Button href={c.cta.contatoHref} size="lg" variant="outline">{c.cta.contato}</Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
