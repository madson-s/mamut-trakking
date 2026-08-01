import Image from 'next/image';
import { Badge, Button, Container, Heading, Section, StarIcon, Stat } from '@/components/ui';
import { ScrollFeedbackStack } from '@/components/home/ScrollFeedbackStack';

/**
 * home_session-05 — avaliações verificadas (TripAdvisor).
 *
 * `container={false}` porque o line-art de fundo é irmão do container: ele se
 * posiciona pela faixa inteira, não pelo grid. O bloco de texto não usa
 * `SectionHeading` porque o que vem abaixo do título é uma fileira de chips de
 * número, não um parágrafo de apoio.
 */
export function ReviewsSection() {
  return (
    <Section surface="muted" bordered container={false} className="relative overflow-clip">
      <Image
        src="/svg/session-05_backgroud-people-01.svg"
        alt=""
        width={1052}
        height={522}
        unoptimized
        className="pointer-events-none absolute bottom-0 left-1/2 hidden w-[1052px] max-w-none -translate-x-1/3 opacity-40 lg:block"
      />

      <Container className="relative flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-[585px] flex-col gap-12">
          <div className="flex flex-col gap-6">
            <Badge size="lg" className="self-start">
              Avaliações verificadas · TripAdvisor
            </Badge>

            <Heading size="hero">
              O que nosso bando
              <br />
              diz das aventuras.
            </Heading>

            <div className="flex flex-wrap items-stretch gap-4">
              <Stat variant="chip" value="140 +" label="Avaliações" />
              <Stat
                variant="chip"
                value={
                  <span className="flex items-center gap-1">
                    <StarIcon className="size-[17px] text-warning-500" />
                    5.0
                  </span>
                }
                label="Média de nota geral"
              />
              <Stat
                variant="chip"
                value="#4 no Raking"
                label="de atividades ao ar livre em Lençois"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/pt/aventuras" arrow>
              Escolha a sua trilha
            </Button>
            <Button href="#" variant="outline">
              Conheça o nosso TripAdvisor
            </Button>
          </div>
        </div>

        <ScrollFeedbackStack />
      </Container>
    </Section>
  );
}
