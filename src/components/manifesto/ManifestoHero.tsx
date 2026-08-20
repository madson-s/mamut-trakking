import { PageHero } from '@/components/ui';

// A página é de leitura: hero baixo, só título e a abertura do manifesto.
export function ManifestoHero() {
  return (
    <PageHero
      image={{
        src: '/img/session-02_saqure-text_no-crop.webp',
        alt: 'Vale da Chapada Diamantina iluminado pelo sol da manhã',
        position: '50% 62%',
      }}
      title={
        <>
          Manifesto da
          <br />
          Mamut Trekking
        </>
      }
      lead="Na imensidão dos mega continentes, os mamutes caminharam por longas distâncias e em grandes grupos, marcando sua existência para sempre no planeta."
    />
  );
}
