import Image from 'next/image';
import { Card, Placeholder, StarRating, Text } from '@/components/ui';

const STACK_TOP = 96;
const PEEK = 32;

const QUOTE =
  '"Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais."';

type Testimonial = {
  name: string;
  title: string;
  rating: string;
  quote: string;
  avatarSrc?: string;
  reviewUrl?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
];

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Paola Bertoncello',
    title: 'Marau, RS — Casal',
    rating: '5.0',
    quote:
      '“Desde o primeiro contato até o final da viagem, a agência demonstrou profissionalismo e organização.”',
    avatarSrc: '/img/home/reviews/paola-bertoncello.jpg',
    reviewUrl:
      'https://www.tripadvisor.com.br/ShowUserReviews-g635725-d23344029-r1005878181-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html',
  },
  {
    name: 'Matt D',
    title: 'Amigos — Vale do Pati',
    rating: '5.0',
    quote:
      '“Os pontos turísticos eram deslumbrantes, as cachoeiras eram épicas, e a aventura era incrível.”',
    avatarSrc: '/img/home/reviews/matt-d.jpg',
    reviewUrl:
      'https://www.tripadvisor.com.br/ShowUserReviews-g635725-d32713900-r1047732360-Vale_do_Pati_3_Days_Private_by_Mamut-Lencois_State_of_Bahia.html',
  },
  {
    name: 'Laura C',
    title: 'Antuérpia, Bélgica',
    rating: '5.0',
    quote:
      '“Nosso guia foi muito amigável, cuidadoso e adaptado a todas as nossas necessidades. Seu conhecimento sobre o parque nacional é enorme.”',
    avatarSrc: '/img/home/reviews/laura-c.jpg',
    reviewUrl:
      'https://www.tripadvisor.com.br/ShowUserReviews-g635725-d32713900-r1030959653-Vale_do_Pati_3_Days_Private_by_Mamut-Lencois_State_of_Bahia.html',
  },
];

export function ScrollFeedbackStack({
  avatarSrc,
  testimonials = DEFAULT_TESTIMONIALS,
  trailing = true,
}: {
  avatarSrc?: string;
  testimonials?: Testimonial[];
  /** Respiro abaixo da pilha — é o curso em que os cards ficam presos. */
  trailing?: boolean;
} = {}) {
  return (
    <div className={`flex w-full max-w-122.5 flex-col gap-6 lg:gap-8 ${trailing ? 'lg:pb-75' : 'lg:pb-16'}`}>
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.reviewUrl ?? `${testimonial.name}-${index}`}
          style={{ top: `${STACK_TOP + index * PEEK}px` }}
          className="lg:sticky"
        >
          <Card
            radius="cardLg"
            surface="raised"
            padding="none"
            className="gap-4 px-8 py-6 max-lg:gap-3 max-lg:px-5.5 max-lg:py-4"
          >
            <div className="flex items-center gap-4 max-lg:gap-3">
              {avatarSrc || testimonial.avatarSrc ? (
                <Image
                  src={avatarSrc ?? testimonial.avatarSrc!}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="size-16 shrink-0 rounded-chip object-cover shadow-image-outline max-lg:size-11"
                />
              ) : (
                <Placeholder label="foto" className="size-16 shrink-0 rounded-chip max-lg:size-11" />
              )}
              <div className="flex flex-col justify-center gap-1">
                <Text size="xl" weight="semibold" className="max-lg:text-base">
                  {testimonial.name}
                </Text>
                <Text className="max-lg:text-xs">{testimonial.title}</Text>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <StarRating variant="dot" />
              <Text as="span" size="xl" weight="semibold" className="max-lg:text-base">
                {testimonial.rating}
              </Text>
            </div>

            {testimonial.reviewUrl ? (
              <a
                href={testimonial.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ler a avaliação de ${testimonial.name} no Tripadvisor`}
                className="rounded-sm transition-colors duration-300 hover:text-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                <Text leading="relaxed" pretty className="max-lg:text-xs">
                  {testimonial.quote}
                </Text>
              </a>
            ) : (
              <Text leading="relaxed" pretty className="max-lg:text-xs">
                {testimonial.quote}
              </Text>
            )}
          </Card>
        </div>
      ))}

      <div aria-hidden className="hidden lg:block lg:h-64" />
    </div>
  );
}
