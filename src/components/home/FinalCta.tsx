import { Button, Section, SectionHeading, Text } from '@/components/ui';

// home_session-06 — CTA final.
export function FinalCta() {
  return (
    <Section containerClassName="flex flex-col items-center gap-12">
      <SectionHeading
        align="center"
        size="hero"
        title={
          <>
            Sua trilha começa
            <br />
            com uma mensagem.
          </>
        }
        lead={
          <Text size="lg" tone="muted" pretty className="max-w-[526px] sm:text-xl">
            Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a
            Chapada Diamantina e como se preparar.
          </Text>
        }
      />
      <Button href="/pt/contato" arrow>
        Entrar para o bando
      </Button>
    </Section>
  );
}
