import { Card, Container, Section, SectionHeading, Text } from '@/components/ui';
import type { Locale } from '@/lib/site';
import { ParticipanteForm } from './ParticipanteForm';
import { PARTICIPANTE_CONTENT } from './participante-conteudo';

// Sem hero: a página abre direto no formulário. Como nada passa por baixo do
// header, ele fica sobre a superfície da página e segue as cores do tema.
// O respiro de 80px do topo fica só no container (padding="none" na seção),
// em vez de somar com o py-12 que o padding "default" traria.
export function ParticipantePage({ locale }: { locale: Locale }) {
  const c = PARTICIPANTE_CONTENT[locale];

  return (
    <Section padding="none" container={false} labelledBy="formulario-title" className="pb-12">
      <Container className="flex flex-col gap-12 pt-20">
        <SectionHeading
          as="h1"
          titleId="formulario-title"
          align="center"
          maxWidth="max-w-[820px]"
          className="mx-auto"
          title={
            <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
              {c.titulo.antes} <span className="text-brand-strong">{c.titulo.destaque}</span>
            </span>
          }
          lead={c.lead}
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.5fr] lg:items-start">
          <Card
            as="div"
            surface="muted"
            radius="panelLg"
            padding="none"
            className="gap-5 px-6 py-8 sm:px-8 lg:sticky lg:top-8"
          >
            <Text as="span" size="xs" weight="semibold" tone="muted" className="tracking-[0.14em] uppercase">
              {c.observacoesLabel}
            </Text>
            <ul className="flex flex-col gap-4">
              {c.observacoes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="shrink-0 font-semibold text-brand-strong">—</span>
                  <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </Card>

          <ParticipanteForm locale={locale} />
        </div>
      </Container>
    </Section>
  );
}
