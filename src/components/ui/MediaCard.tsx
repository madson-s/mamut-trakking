import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import {
  motion,
  overlay as overlayMap,
  radius as radiusMap,
  type Overlay,
  type Radius,
} from '@/design/tokens';

export type MediaCardProps = {
  /** Conteúdo por cima da mídia. Use `tone="onMedia"` nos textos. */
  children?: ReactNode;
  /** Atalho para `next/image` com `fill`. */
  image?: {
    src: string;
    alt?: string;
    sizes?: string;
    priority?: boolean;
    /** `object-position` — enquadra a foto sem recortar o arquivo. */
    position?: string;
  };
  /** Slot para art direction (`<picture>`, vídeo, duas imagens em hover). */
  media?: ReactNode;
  overlay?: Overlay;
  radius?: Radius;
  /**
   * Cor atrás da foto (aparece enquanto ela carrega e nas bordas).
   * `sunken` = cinza do tema; `media` = verde-quase-preto do hero.
   */
  backdrop?: 'sunken' | 'media' | 'none';
  /** Zoom suave da foto no hover do card. */
  zoomOnHover?: boolean;
  /** Tag renderizada — `article` em listas, `div` em blocos soltos. */
  as?: 'div' | 'article' | 'section';
  className?: string;
  /**
   * Como o conteúdo se posiciona sobre a mídia:
   * `flow` (default) empilha no fluxo e a altura do card acompanha;
   * `fill` cria uma camada absoluta que cobre o card (layouts do Figma com
   * elementos ancorados nas bordas, como o hero).
   */
  contentLayer?: 'flow' | 'fill';
  /** Classes extras do wrapper de conteúdo — layout, não posicionamento. */
  contentClassName?: string;
};

/**
 * Card com foto de fundo + véu + conteúdo — a forma mais repetida do site
 * (hero, manifesto, roteiro). A altura fica por conta de `className`.
 */
export function MediaCard({
  children,
  image,
  media,
  overlay = 'bottom',
  radius = 'panel',
  backdrop = 'sunken',
  zoomOnHover = false,
  as: Tag = 'div',
  className,
  contentLayer = 'flow',
  contentClassName,
}: MediaCardProps) {
  const backdrops = {
    sunken: 'bg-surface-sunken',
    media: 'bg-media-backdrop',
    none: '',
  } as const;

  return (
    <Tag
      className={cn(
        'group/media relative isolate overflow-hidden',
        backdrops[backdrop],
        radiusMap[radius],
        className,
      )}
    >
      {media}

      {image && (
        <Image
          src={image.src}
          alt={image.alt ?? ''}
          fill
          priority={image.priority}
          sizes={image.sizes ?? '100vw'}
          style={image.position ? { objectPosition: image.position } : undefined}
          className={cn(
            'absolute inset-0 h-full w-full object-cover',
            zoomOnHover &&
              cn('transition-transform group-hover/media:scale-[1.025]', motion.reveal),
          )}
        />
      )}

      {overlay !== 'none' && (
        <div aria-hidden className={cn('absolute inset-0', overlayMap[overlay])} />
      )}

      {children && (
        <div
          className={cn(
            contentLayer === 'fill' ? 'absolute inset-0 z-10' : 'relative z-10',
            contentClassName,
          )}
        >
          {children}
        </div>
      )}
    </Tag>
  );
}
