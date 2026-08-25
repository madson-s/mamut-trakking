import Image from 'next/image';
import { Badge, Button, Container, Heading, Section, StarIcon, Stat } from '@/components/ui';
import { ScrollFeedbackStack, homeTestimonials } from '@/components/home/ScrollFeedbackStack';
import type { Locale } from '@/lib/site';
import { HOME_CONTENT } from './home-content';

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com.br/Attraction_Review-g635725-d23344029-Reviews-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html';

export function ReviewsSection({ locale = 'pt' }: { locale?: Locale }) {
  const c = HOME_CONTENT[locale].reviews;

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
              {c.badge}
            </Badge>

            <Heading size="hero">
              {c.titulo.antes}
              <br />
              {c.titulo.destaque}
            </Heading>

            <div className="flex flex-wrap items-center gap-2 lg:hidden">
              <Badge variant="soft" size="sm">
                {c.avaliacoes}
              </Badge>
              <Badge
                variant="soft"
                size="sm"
                icon={<StarIcon className="size-3.5 text-warning-500" />}
              >
                {c.mediaChip}
              </Badge>
              <Badge variant="soft" size="sm">
                {c.rankingChip}
              </Badge>
            </div>

            <div className="hidden flex-wrap items-stretch gap-4 lg:flex">
              <Stat variant="chip" value="145" label={c.avaliacoesLabel} />
              <Stat
                variant="chip"
                value={
                  <span className="flex items-center gap-1">
                    <StarIcon className="size-4.25 text-warning-500" />
                    5.0
                  </span>
                }
                label={c.mediaLabel}
              />
              <Stat
                variant="chip"
                value={c.ranking}
                label={c.rankingLabel}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 max-lg:order-3 max-lg:flex-col max-lg:items-stretch max-lg:gap-3">
            <Button href={c.ctaTrilhaHref} arrow className="max-lg:w-full">
              {c.ctaTrilha}
            </Button>
            <Button href={TRIPADVISOR_URL} variant="outline" className="max-lg:w-full">
              {c.ctaTripadvisor}
            </Button>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-70 flex w-full justify-start">
            <Image
              src="/svg/session-05_backgroud-people-01.svg"
              alt=""
              width={1052}
              height={522}
              unoptimized
              className="hidden bottom-0 max-w-304 origin-top-right opacity-40 lg:block"
            />
          </div>            
        </div>

        <div className="max-lg:order-2 lg:contents">
          <ScrollFeedbackStack testimonials={homeTestimonials(c.depoimentos)} />
        </div>
      </Container>
    </Section>
  );
}
