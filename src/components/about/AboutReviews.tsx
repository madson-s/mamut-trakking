import Image from 'next/image';
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Section,
  StarIcon,
  StarRating,
  Stat,
  Text,
} from '@/components/ui';
import { SITE } from '@/lib/site';

const QUOTE =
  '“Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais.”';

export function AboutReviews() {
  return (
    <Section
      surface="muted"
      bordered
      container={false}
      padding="tall"
      className="relative overflow-hidden"
      labelledBy="about-reviews-title"
    >
      <Image
        src="/svg/about/reviews-walkers-line.svg"
        alt=""
        width={1150}
        height={570}
        unoptimized
        className="pointer-events-none absolute bottom-0 left-[18%] hidden w-[60%] max-w-none opacity-35 lg:block"
      />

      <Container className="relative grid gap-16 lg:grid-cols-[minmax(0,620px)_490px] lg:justify-between">
        <div className="flex flex-col gap-12 lg:pt-4">
          <div className="flex flex-col gap-6">
            <Badge size="lg" className="self-start">
              Avaliações verificadas · TripAdvisor
            </Badge>
            <Heading as="h2" id="about-reviews-title" size="hero" balance>
              Cada review é uma
              <br />
              trilha que já fizemos
              <br />
              <span className="text-brand-strong">juntos.</span>
            </Heading>
          </div>

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
            <Stat variant="chip" value="#4 no Raking" label="de atividades ao ar livre em Lençóis" />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href={SITE.whatsappUrl} arrow>
              Reservar pelo WhatsApp
            </Button>
            <Button href="https://www.tripadvisor.com.br/" variant="outline">
              Conheça o nosso TripAdvisor
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4" aria-label="Avaliações de viajantes">
          {Array.from({ length: 4 }, (_, index) => (
            <ReviewCard key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
function ReviewCard() {
  return (
    <Card
      as="article"
      surface="muted"
      radius="panelLg"
      elevation="card"
      padding="none"
      className="gap-4 px-6 py-5 sm:px-8 sm:py-6"
    >
      <div className="flex items-center gap-4">
        <Image
          src="/img/about/paola-bertoncello.png"
          alt="Paola Bertoncello"
          width={64}
          height={64}
          className="size-16 rounded-chip object-cover shadow-image-outline"
        />
        <div className="flex flex-col gap-0.5">
          <Text size="xl" weight="semibold">
            Paola Bertoncello
          </Text>
          <Text>Marau, RS — Casal</Text>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <StarRating />
        <Text as="span" size="xl" weight="semibold">
          5.0
        </Text>
      </div>
      <Text leading="relaxed" pretty>
        {QUOTE}
      </Text>
    </Card>
  );
}
