import type { ReactNode } from 'react';
import Image from 'next/image';
import { Container, Section, SectionHeading, Text } from '@/components/ui';

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

export function ManifestoCreed() {
  return (
    <Section
      id="manifesto"
      padding="none"
      container={false}
      className="relative overflow-hidden border-b border-line py-16 lg:pt-12 lg:pb-[108px]"
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

      <Container className="relative flex flex-col items-center gap-16">
        <SectionHeading
          titleId="manifesto-creed-title"
          align="center"
          size="hero"
          maxWidth="max-w-[820px]"
          title={
            <span className="max-lg:text-[clamp(26px,7.6vw,34px)]">
              É dessa memória
              <br />
              <span className="text-brand-strong">que nascemos.</span>
            </span>
          }
        />

        <div className="flex w-full max-w-[820px] flex-col gap-6">
          <Paragraph>
            Na imensidão dos mega continentes, os mamutes caminharam por longas distâncias e em
            grandes grupos, <Mark>marcando sua existência para sempre</Mark> no planeta.
            Naturalmente, somos <Mark>um bando que reúne o mundo inteiro</Mark>, no que um dia foi
            o “miolo” da terra, a Chapada Diamantina.
          </Paragraph>

          <Paragraph>
            Somos mais do que uma agência de ecoturismo. Somos defensores da Serra do Sincorá, das
            tradições locais e dos nossos ancestrais. Construímos{' '}
            <Mark>pontes entre a humanidade e o mundo natural</Mark> (que precisam ser
            reconstruídas com muita urgência). Assim como os antigos mamutes,{' '}
            <Mark>caminhamos por amor, solidariedade, respeito, resistência…</Mark>{' '}
            <Mark>Nascemos para caminhar e caminhamos para viver</Mark>, assim honrando a teia da
            vida que une todos no Universo.
          </Paragraph>

          <Paragraph>
            Nossa força não reside apenas em nossa imponência, mas também em nossa{' '}
            <Mark>memória e inteligência</Mark>. Que nunca nos permite esquecer de onde viemos na
            mesma medida em que sabemos muito bem para onde queremos ir. Além de toda perspicácia
            para admirar o presente que ganhamos todos os dias, a beleza dos caminhos e dos
            processos.
          </Paragraph>

          <Paragraph>
            Assim como os mamutes protegiam os membros de seu bando, estamos aqui para garantir a
            segurança e o bem-estar de nossos viajantes. Além dos protocolos rigorosos que refletem
            em experiências seguras e inesquecíveis,{' '}
            <Mark>prezamos profundamente pela experiência de quem cruza o nosso caminho.</Mark>
          </Paragraph>

          <Paragraph>
            <Mark>Junte-se ao nosso bando.</Mark> Juntos, vamos explorar, aprender e celebrar
            a beleza e a diversidade do mundo, lembrando sempre que{' '}
            <Mark>somos parte de algo maior</Mark>, algo digno de proteção e admiração.
          </Paragraph>

          <Paragraph>
            Sejam bem-vindos à Chapada Diamantina e à Mamut, onde a natureza é nossa casa e a
            comunidade é nossa família, onde acreditamos em um mundo mais solidário e consciente
            para todos. Juntos, somos mais fortes. Juntos, somos imponentes. Juntos, deixaremos
            marcados o respeito, compromisso e amor pela terra que chamamos de casa.
          </Paragraph>
        </div>
      </Container>
    </Section>
  );
}
