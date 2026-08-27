import type { ReactNode } from 'react';
import { Container, Section, SectionHeading } from '@/components/ui';
import type { Locale } from '@/lib/site';
import { DicasNav } from './DicasNav';
import { DICAS_CONTENT } from './dicas-conteudo';
import type { DicasPageId } from './dicas-rotas';

/**
 * Moldura das páginas de dicas: menu da seção à esquerda (select no mobile) e
 * o conteúdo à direita. Mesma proporção do formulário do participante, e o
 * mesmo respiro de 80px no topo do container.
 */
export function DicasLayout({
  locale,
  pagina,
  children,
}: {
  locale: Locale;
  pagina: DicasPageId;
  children: ReactNode;
}) {
  const c = DICAS_CONTENT[locale].paginas[pagina];

  return (
    <Section padding="none" container={false} labelledBy="dicas-title" className="pb-12">
      <Container className="grid gap-10 pt-20 lg:grid-cols-[minmax(0,232px)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <DicasNav locale={locale} atual={pagina} />
        </div>

        <div className="flex min-w-0 flex-col gap-12">
          <SectionHeading
            as="h1"
            titleId="dicas-title"
            maxWidth="max-w-[720px]"
            title={
              <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
                {c.titulo.antes} <span className="text-brand-strong">{c.titulo.destaque}</span>
              </span>
            }
            lead={c.lead}
          />
          {children}
        </div>
      </Container>
    </Section>
  );
}
