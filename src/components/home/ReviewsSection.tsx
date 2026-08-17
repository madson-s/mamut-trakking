import Image from 'next/image';
import { Badge, Button, Container, Heading, Section, StarIcon, Stat } from '@/components/ui';
import {
  HOME_TESTIMONIALS,
  ScrollFeedbackStack,
} from '@/components/home/ScrollFeedbackStack';

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com.br/Attraction_Review-g635725-d23344029-Reviews-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html';

export function ReviewsSection() {
  return (
    <Section
      surface="muted"
      bordered
      container={false}
      padding="none"
      className="relative z-10 overflow-x-clip max-lg:pt-12 lg:pt-10"
    >
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="relative flex max-w-146.25 flex-col gap-8 max-lg:contents lg:sticky lg:top-24 lg:gap-12 lg:pb-75">
          <div className="flex flex-col gap-5 max-lg:order-1 lg:gap-6">
            <Badge
              size="lg"
              className="self-start max-lg:min-h-8 max-lg:px-3 max-lg:py-1 max-lg:text-sm"
            >
              Avaliações verificadas · TripAdvisor
            </Badge>

            <Heading size="hero">
              O que nosso bando
              <br />
              diz das aventuras.
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
                label="de atividades ao ar livre em Lençois"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 max-lg:order-3 max-lg:flex-col max-lg:items-stretch max-lg:gap-3">
            <Button href="/pt/aventuras" arrow className="max-lg:w-full">
              Escolha a sua trilha
            </Button>
            <Button href={TRIPADVISOR_URL} variant="outline" className="max-lg:w-full">
              Conheça o nosso TripAdvisor
            </Button>
          </div>

          <div className="w-full absolute flex justify-start bottom-0 left-70"> 
            <Image
              src="/svg/session-05_backgroud-people-01.svg"
              alt=""
              width={1052}
              height={522}
              unoptimized
              className="pointer-events-none hidden bottom-0 max-w-304 origin-top-right opacity-40 lg:block"
            />
          </div>            
        </div>

        <div className="max-lg:order-2 lg:contents">
          <ScrollFeedbackStack testimonials={HOME_TESTIMONIALS} />
        </div>
      </Container>
    </Section>
  );
}
