import Image from 'next/image';
import { Card, StarRating, Text } from '@/components/ui';

/**
 * Pilha de depoimentos em `position: sticky` — sem JS, sem observer, sem
 * timeline. Cada cartão gruda `PEEK` px abaixo do anterior, então o de cima
 * sobra como uma faixa visível enquanto o seguinte o cobre. A ordem do DOM já
 * resolve o empilhamento (irmão posterior pinta por cima), por isso aqui não
 * existe z-index: colocar um inverteria a pilha.
 *
 * Como o efeito é layout e não animação, o conteúdo nasce visível no HTML
 * (importa para os crawlers de IA) e `prefers-reduced-motion` não tem o que
 * desligar. O sticky vale só no `lg`: no mobile isto é uma lista vertical.
 */

/** Distância do topo da viewport onde o primeiro cartão gruda. */
const STACK_TOP = 96;
/**
 * Faixa de cada cartão que segue à mostra sob o cartão seguinte. Acima do
 * `--radius-card-lg` (28px) de propósito: abaixo disso o espião cai inteiro
 * dentro da curva e a pilha deixa de ser legível.
 */
const PEEK = 32;

const QUOTE =
  '“Nosso guia Átila tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati. Sempre nos preparava para o que esperar de cada trecho — e ainda compartilhava histórias locais.”';

// A pilha precisa de três cartões, mas só um depoimento veio do handoff. Até as
// outras avaliações do TripAdvisor chegarem, a mesma entrada se repete: review
// de cliente é conteúdo real e não se inventa (mesma regra do `Placeholder`).
const TESTIMONIALS = [
  {
    name: 'Paola Bertoncello',
    title: 'Marau, RS — Casal',
    rating: '5.0',
    avatar: '/img/about/paola-bertoncello.png',
    quote: QUOTE,
  },
  {
    name: 'Paola Bertoncello',
    title: 'Marau, RS — Casal',
    rating: '5.0',
    avatar: '/img/about/paola-bertoncello.png',
    quote: QUOTE,
  },
  {
    name: 'Paola Bertoncello',
    title: 'Marau, RS — Casal',
    rating: '5.0',
    avatar: '/img/about/paola-bertoncello.png',
    quote: QUOTE,
  },
];

export function ScrollFeedbackStack() {
  return (
    <div className="flex w-full max-w-122.5 flex-col gap-6 lg:gap-8">
      {TESTIMONIALS.map((testimonial, index) => (
        <div
          key={index}
          // `top` só age onde o cartão é sticky (lg+); no mobile ele é estático
          // e a propriedade é ignorada, sem precisar de media query.
          style={{ top: `${STACK_TOP + index * PEEK}px` }}
          className="lg:sticky"
        >
          <Card
            as="article"
            radius="cardLg"
            surface="raised"
            elevation="card"
            padding="none"
            className="gap-4 px-8 py-6 max-lg:gap-3 max-lg:px-5.5 max-lg:py-4"
          >
            <div className="flex items-center gap-4 max-lg:gap-3">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={64}
                height={64}
                className="size-16 shrink-0 rounded-chip object-cover shadow-image-outline max-lg:size-11"
              />
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

      {/* Pista de rolagem. Um sticky só fica preso enquanto o pai está na tela,
          então esta sobra no fim do container é o tempo em que a pilha montada
          fica parada — sem ela o último cartão gruda e sai de cena no mesmo
          quadro. Precisa ser um elemento em fluxo: `padding-bottom` no pai não
          conta, porque o sticky se limita ao content box. */}
      <div aria-hidden className="hidden lg:block lg:h-64" />
    </div>
  );
}
