import { Button, Section, SectionHeading, Text } from '@/components/ui';

export function FinalCta() {
  return (
    <Section
      padding="none"
      containerClassName="flex flex-col items-center gap-8 pt-16 pb-16 lg:gap-12 lg:pt-44 lg:pb-24"
    >
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
          <Text size="sm" tone="muted" pretty className="max-w-131.5 sm:text-xl">
            Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a
            Chapada Diamantina e como se preparar.
          </Text>
        }
      />
      <Button href="/pt/contato" arrow className="max-lg:w-full">
        Entrar para o bando
      </Button>
    </Section>
  );
}
