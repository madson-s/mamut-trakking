import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focus, motion } from '@/design/tokens';
import { formatPrice, type Locale } from '@/lib/site';
import { Badge } from './Badge';
import { Heading } from './Heading';
import { MediaCard } from './MediaCard';
import { Text } from './Text';
import { ArrowRightIcon } from './icons';

/**
 * Card de roteiro (hub e destaques da home) — é o card de trilha do design:
 * foto de fundo, chips de nível/distância no topo, título e resumo sobre o véu.
 * Recebe tudo por props; nenhum dado é buscado aqui.
 *
 * O card inteiro é o link, então a seta do rodapé é decorativa: não cabe um
 * segundo elemento interativo dentro de um `<a>`.
 */
export function AdventureCard({
  href,
  image,
  title,
  level,
  distance,
  summary,
  price,
  fromLabel,
  locale,
}: {
  href: string;
  image: string;
  title: string;
  level: string;
  distance?: string;
  summary: string;
  price?: number;
  fromLabel?: string;
  locale: Locale;
}) {
  return (
    <Link href={href} className={cn('group block rounded-card-lg', focus.onSurface)}>
      <MediaCard
        as="article"
        image={{
          src: image,
          alt: title,
          sizes: '(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw',
        }}
        overlay="bottom"
        radius="cardLg"
        backdrop="media"
        zoomOnHover
        className="h-[437px]"
        contentLayer="fill"
        contentClassName="flex flex-col justify-between p-7"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outlineOnMedia">{level}</Badge>
          {distance && <Badge variant="outlineOnMedia">{distance}</Badge>}
        </div>

        <div className="flex flex-col gap-3">
          <Heading as="h3" size="card" tone="onMedia">
            {title}
          </Heading>
          <Text size="xs" weight="light" tone="onMedia" className="line-clamp-3 max-w-[320px]">
            {summary}
          </Text>
          {price != null && fromLabel && (
            <span className="flex items-center gap-2">
              <Text as="span" size="sm" weight="medium" tone="onMedia">
                {fromLabel} {formatPrice(price, locale)}
              </Text>
              <ArrowRightIcon
                className={cn(
                  'size-4 shrink-0 text-on-media transition-transform group-hover:translate-x-0.5',
                  motion.base,
                )}
              />
            </span>
          )}
        </div>
      </MediaCard>
    </Link>
  );
}
