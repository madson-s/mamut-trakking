import Image from 'next/image';
import {
  Badge,
  Button,
  Container,
  Heading,
  Section,
  StarIcon,
  Stat,
} from '@/components/ui';
import {
  HOME_TESTIMONIALS,
  ScrollFeedbackStack,
} from '@/components/home/ScrollFeedbackStack';
import { SITE } from '@/lib/site';

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com.br/Attraction_Review-g635725-d23344029-Reviews-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html';

export function AboutReviews() {
  return (
    <Section
      surface="muted"
      bordered
      container={false}
      padding="none"
      className="relative overflow-x-clip max-lg:py-16 lg:py-10"
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

      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,620px)_490px] lg:justify-between lg:gap-16">
            <div className="flex flex-col gap-8 max-lg:contents lg:sticky lg:top-24 lg:gap-12 lg:self-start lg:pb-75 lg:pt-4">
              <div className="flex flex-col gap-5 max-lg:order-1 lg:gap-6">
                <Badge
                  size="lg"
                  className="self-start max-lg:min-h-8 max-lg:px-3 max-lg:py-1 max-lg:text-sm"
                >
                  Avaliações verificadas · TripAdvisor
                </Badge>
                <Heading
                  as="h2"
                  id="about-reviews-title"
                  size="hero"
                  balance
                  className="max-lg:text-[clamp(28px,8.4vw,36px)]"
                >
                  <span className="lg:hidden">
                    O que nosso bando
                    <br />
                    diz das aventuras.
                  </span>
                  <span className="max-lg:hidden">
                    Cada review é uma
                    <br />
                    trilha que já fizemos
                    <br />
                    <span className="text-brand-strong">juntos.</span>
                  </span>
                </Heading>

                <div className="flex flex-wrap items-center gap-2 lg:hidden">
                  <Badge variant="soft" size="sm">
                    145 avaliações
                  </Badge>
                  <Badge
                    variant="soft"
                    size="sm"
                    icon={<StarIcon className="size-3.5 text-warning-500" />}
                  >
                    5.0 geral
                  </Badge>
                  <Badge variant="soft" size="sm">
                    #5 em Lençóis
                  </Badge>
                </div>
              </div>

              <div className="hidden flex-wrap items-stretch gap-4 lg:flex">
                <Stat variant="chip" value="145" label="Avaliações" />
                <Stat
                  variant="chip"
                  value={
                    <span className="flex items-center gap-1">
                      <StarIcon className="size-4.25 text-warning-500" />
                      5.0
                    </span>
                  }
                  label="Média de nota geral"
                />
                <Stat
                  variant="chip"
                  value="#5 no ranking"
                  label="de atividades ao ar livre em Lençóis"
                />
              </div>

              <div className="flex flex-wrap gap-3 max-lg:order-3 max-lg:flex-col max-lg:items-stretch">
                <Button href="/pt/aventuras" arrow className="w-full lg:hidden">
                  Escolha a sua trilha
                </Button>
                <Button href={SITE.whatsappUrl} arrow className="max-lg:hidden">
                  Reservar pelo WhatsApp
                </Button>
                <Button
                  href={TRIPADVISOR_URL}
                  variant="outline"
                  className="max-lg:w-full"
                >
                  <span className="lg:hidden">Conheça nosso TripAdvisor</span>
                  <span className="max-lg:hidden">Conheça o nosso TripAdvisor</span>
                </Button>
              </div>
            </div>

            <div className="max-lg:order-2 lg:contents">
              <ScrollFeedbackStack testimonials={HOME_TESTIMONIALS} />
            </div>
          </Container>
    </Section>
  );
}
