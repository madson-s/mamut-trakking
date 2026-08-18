import { Container, Heading, MediaCard, Text } from '@/components/ui';

// Hero do manifesto — mesma moldura do hero de /pt/sobre (foto full-bleed sob
// o header transparente), porém baixo e só com título e lead: a página é de
// leitura, o CTA fica no fim.
export function ManifestoHero() {
  return (
    <MediaCard
      as="section"
      radius="none"
      overlay="soft"
      backdrop="media"
      image={{
        src: '/img/session-02_saqure-text_no-crop.webp',
        alt: 'Vale da Chapada Diamantina iluminado pelo sol da manhã',
        sizes: '100vw',
        preload: true,
        position: '50% 62%',
      }}
      className="-mt-20 min-h-105 lg:min-h-125"
      contentLayer="fill"
      contentClassName="pt-20"
    >
      <Container className="relative flex h-full min-h-85 flex-col items-start justify-center pt-14 pb-12 text-left lg:min-h-105 lg:items-center lg:pt-20 lg:pb-16 lg:text-center">
        <div className="flex max-w-190 flex-col items-start gap-6 lg:items-center lg:gap-7">
          <Heading
            as="h1"
            size="hero"
            tone="onMedia"
            balance
            className="max-lg:text-[clamp(30px,9vw,40px)]"
          >
            Manifesto da
            <br />
            Mamut Trekking
          </Heading>

          <Text
            size="sm"
            weight="light"
            tone="onMediaSoft"
            pretty
            className="max-w-148.75 lg:text-lg"
          >
            Na imensidão dos mega continentes, os mamutes caminharam por longas distâncias e em
            grandes grupos, marcando sua existência para sempre no planeta.
          </Text>
        </div>
      </Container>
    </MediaCard>
  );
}
