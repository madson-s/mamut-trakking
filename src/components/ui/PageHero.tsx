import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';
import { Heading } from './Heading';
import { MediaCard } from './MediaCard';
import { Text } from './Text';

export type PageHeroSize = 'compact' | 'tall';

export type PageHeroProps = {
  /** Foto de fundo. É sempre o LCP da página, então entra com `preload`. */
  image: { src: string; alt: string; position?: string };
  /** Conteúdo da `h1` — string simples ou JSX (quebras e destaques inline). */
  title: ReactNode;
  /** Parágrafo de apoio: string vira `Text`, JSX passa direto. */
  lead?: ReactNode;
  /** Largura máxima do lead — o hero de Sobre limita a linha. */
  leadClassName?: string;
  /** Botões abaixo do lead. */
  actions?: ReactNode;
  /** Extras no fim da pilha central (linhas de contato, selos). */
  children?: ReactNode;
  /** Arte ancorada nas bordas do hero, fora da pilha central. */
  decoration?: ReactNode;
  /** `compact` para páginas de leitura; `tall` para a de Sobre. */
  size?: PageHeroSize;
};

// Alturas e respiro por tamanho — o resto da moldura é igual nos dois.
const frame: Record<PageHeroSize, { outer: string; inner: string }> = {
  compact: { outer: 'min-h-105 lg:min-h-125', inner: 'min-h-85 pb-12 lg:min-h-105 lg:pb-16' },
  tall: { outer: 'min-h-160 lg:min-h-203.75', inner: 'min-h-140 pb-16 lg:min-h-183.75 lg:pb-44' },
};

/**
 * Hero das páginas institucionais: foto full-bleed que passa POR BAIXO do
 * header (daí o `-mt-20` e a classe `hero-under-header`, que deixa a barra do
 * header em branco sobre a foto nos dois temas — ver `globals.css`).
 */
export function PageHero({
  image,
  title,
  lead,
  leadClassName,
  actions,
  children,
  decoration,
  size = 'compact',
}: PageHeroProps) {
  return (
    <MediaCard
      as="section"
      radius="none"
      overlay="soft"
      backdrop="media"
      image={{ ...image, sizes: '100vw', preload: true }}
      className={cn('hero-under-header -mt-20', frame[size].outer)}
      contentLayer="fill"
      contentClassName="pt-20"
    >
      <Container
        className={cn(
          'relative flex h-full flex-col items-start justify-center pt-14 text-left lg:items-center lg:pt-20 lg:text-center',
          frame[size].inner,
        )}
      >
        <div className="flex max-w-190 flex-col items-start gap-6 lg:items-center lg:gap-7">
          <Heading
            as="h1"
            size="hero"
            tone="onMedia"
            balance
            className="max-lg:text-[clamp(30px,9vw,40px)]"
          >
            {title}
          </Heading>

          {typeof lead === 'string' ? (
            <Text
              size="sm"
              weight="light"
              tone="onMediaSoft"
              pretty
              className={cn('lg:text-lg', leadClassName)}
            >
              {lead}
            </Text>
          ) : (
            lead
          )}

          {actions && (
            <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:justify-center">
              {actions}
            </div>
          )}

          {children}
        </div>

        {decoration}
      </Container>
    </MediaCard>
  );
}
