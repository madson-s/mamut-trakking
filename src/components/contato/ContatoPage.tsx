import { Container, Section, SectionHeading } from '@/components/ui';
import { SITE, type Locale } from '@/lib/site';
import { ContatoChannels } from './ContatoChannels';
import { ContatoForm } from './ContatoForm';
import { CONTATO_CONTENT } from './contato-content';

// Sem hero, como /dicas e o formulário do participante: a página abre no
// título, e o respiro de 80px do topo fica só no container.
export function ContatoPage({ locale }: { locale: Locale }) {
  const c = CONTATO_CONTENT[locale];

  return (
    <Section padding="none" container={false} labelledBy="contato-title" className="pb-12">
      <Container className="flex flex-col gap-12 pt-20">
        <SectionHeading
          as="h1"
          titleId="contato-title"
          align="center"
          maxWidth="max-w-[820px]"
          className="mx-auto"
          title={
            <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
              {c.titulo.antes} <span className="text-brand-strong">{c.titulo.destaque}</span>
            </span>
          }
          lead={`${SITE.location}. ${c.lead}`}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:items-start">
          <ContatoChannels locale={locale} />
          <ContatoForm locale={locale} />
        </div>
      </Container>
    </Section>
  );
}
