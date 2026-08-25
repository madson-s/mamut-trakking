import type { ReactNode } from 'react';
import Image from 'next/image';
import { Container, Section, SectionHeading, Text } from '@/components/ui';
import type { Locale } from '@/lib/site';
import { MANIFESTO_CONTENT } from './manifesto-content';

// O texto é o manifesto publicado em mamut.agency/manifesto — na íntegra e na
// ordem original. Os trechos em `Mark` são os que o original destaca em negrito.
function Mark({ children }: { children: ReactNode }) {
  return <strong className="font-normal text-content">{children}</strong>;
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <Text size="lg" weight="light" tone="secondary" leading="relaxed" pretty>
      {children}
    </Text>
  );
}

export function ManifestoCreed({ locale = 'pt' }: { locale?: Locale }) {
  const c = MANIFESTO_CONTENT[locale];
  return (
    <Section
      id="manifesto"
      padding="none"
      container={false}
      className="relative overflow-hidden border-b border-line pb-16 lg:pb-[108px]"
      labelledBy="manifesto-creed-title"
    >
      <Image
        src="/svg/about/story-landscape-line.svg"
        alt=""
        width={1440}
        height={804}
        unoptimized
        className="manifesto-creed-backdrop pointer-events-none absolute inset-x-0 top-52 bottom-0 w-full object-cover object-bottom opacity-45 lg:top-115"
      />

      <Container className="relative flex flex-col items-center gap-16 pt-20">
        <SectionHeading
          as="h1"
          titleId="manifesto-creed-title"
          align="center"
          size="hero"
          maxWidth="max-w-[820px]"
          title={
            <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
              {c.titulo.antes}
              <br />
              <span className="text-brand-strong">{c.titulo.destaque}</span>
            </span>
          }
        />

        <div className="flex w-full max-w-[820px] flex-col gap-6">
          {c.paragrafos.map((paragrafo, i) => (
            <Paragraph key={i}>
              {paragrafo.map((trecho, j) =>
                typeof trecho === 'string' ? (
                  trecho
                ) : (
                  <Mark key={j}>{trecho.mark}</Mark>
                ),
              )}
            </Paragraph>
          ))}
        </div>
      </Container>
    </Section>
  );
}
