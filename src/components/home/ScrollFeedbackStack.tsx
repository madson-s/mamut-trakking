import Image from 'next/image';
import { Card, Placeholder, StarRating, Text } from '@/components/ui';

const STACK_TOP = 96;
const PEEK = 32;

const QUOTE =
  '"Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais."';

const TESTIMONIALS = [
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
  { name: 'Paola Bertoncello', title: 'Marau, RS — Casal', rating: '5.0', quote: QUOTE },
];

export function ScrollFeedbackStack({ avatarSrc }: { avatarSrc?: string } = {}) {
  return (
    <div className="flex w-full max-w-122.5 flex-col gap-6 lg:gap-8 lg:pb-75">
      {TESTIMONIALS.map((testimonial, index) => (
        <div
          key={index}
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
              {avatarSrc ? (
                <Image
                  src={avatarSrc}
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

            <Text leading="relaxed" className="max-lg:text-xs">
              {testimonial.quote}
            </Text>
          </Card>
        </div>
      ))}

      <div aria-hidden className="hidden lg:block lg:h-64" />
    </div>
  );
}
