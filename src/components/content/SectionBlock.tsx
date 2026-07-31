import type { ReactNode } from 'react';
import { Container } from '../layout/Container';

// LEGADO (páginas en/es no tema antigo). Seção genérica com título/intro opcionais. Usada para compor páginas.
export function SectionBlock({
  title,
  intro,
  children,
  className = '',
}: {
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <Container>
        {title && <h2 className="font-display text-3xl">{title}</h2>}
        {intro && <p className="mt-3 max-w-2xl text-mamut-stone">{intro}</p>}
        <div className={title || intro ? 'mt-8' : ''}>{children}</div>
      </Container>
    </section>
  );
}
