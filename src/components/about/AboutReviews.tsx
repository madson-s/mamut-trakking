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
import { ScrollFeedbackStack, homeTestimonials } from '@/components/home/ScrollFeedbackStack';
import type { Locale } from '@/lib/site';
import { ABOUT_CONTENT } from './about-content';
import { SITE } from '@/lib/site';

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com.br/Attraction_Review-g635725-d23344029-Reviews-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html';

export function AboutReviews({ locale = 'pt' }: { locale?: Locale }) {
  const c = ABOUT_CONTENT[locale].reviews;
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
                  {c.badge}
                </Badge>
                <Heading
                  as="h2"
                  id="about-reviews-title"
                  size="hero"
                  balance
                  className="max-lg:text-[clamp(28px,8.4vw,36px)]"
                >
                  <span className="lg:hidden">
                    {c.titulo.mobile[0]}
                    <br />
                    {c.titulo.mobile[1]}
                  </span>
                  <span className="max-lg:hidden">
                    {c.titulo.desktop[0]}
                    <br />
                    {c.titulo.desktop[1]}
                    <br />
                    <span className="text-brand-strong">{c.titulo.desktop[2]}</span>
                  </span>
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
                  label="{c.mediaLabel}"
                />
                <Stat
                  variant="chip"
                  value={c.ranking}
                  label="{c.rankingLabel}"
                />
              </div>

              <div className="flex flex-wrap gap-3 max-lg:order-3 max-lg:flex-col max-lg:items-stretch">
                <Button href="/pt/aventuras" arrow className="w-full lg:hidden">
                  {c.ctaTrilha}
                </Button>
                <Button href={SITE.whatsappUrl} arrow className="max-lg:hidden">
                  {c.ctaWhatsapp}
                </Button>
                <Button
                  href={TRIPADVISOR_URL}
                  variant="outline"
                  className="max-lg:w-full"
                >
                  <span className="lg:hidden">{c.ctaTripadvisor}</span>
                  <span className="max-lg:hidden">{c.ctaTripadvisor}</span>
                </Button>
              </div>
            </div>

            <div className="max-lg:order-2 lg:contents">
              <ScrollFeedbackStack testimonials={homeTestimonials(c.depoimentos)} />
            </div>
          </Container>
    </Section>
  );
}
