import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, Badge, Heading, Text } from '@/components/ui';
import { focus, motion, press } from '@/design/tokens';
import { cn } from '@/lib/cn';
import { ADVENTURE_SEGMENT, formatPrice, type Locale } from '@/lib/site';
import { ADVENTURE_ROUTES } from '@/lib/routes';
import { ADVENTURES } from './adventures-data';
import { ADVENTURES_CONTENT, type AdventuresContent } from './adventures-content';

// O card e o resolvedor moram fora do `AdventuresHub` porque ele é
// `'use client'` — os filtros precisam de estado, o card não. Assim a seção
// "outras aventuras" das páginas de roteiro reaproveita o mesmo cartão sem
// arrastar drawer, ícones e listeners para o bundle de cada página.

/** Junta a parte neutra da aventura com o texto e o link do idioma. */
export function aventurasDoIdioma(locale: Locale) {
  const c = ADVENTURES_CONTENT[locale];
  const seg = ADVENTURE_SEGMENT[locale];
  const contato = '/pt/contato';

  return ADVENTURES.map((base) => {
    const rota = base.route && ADVENTURE_ROUTES.find((r) => r.id === base.route);
    return {
      ...base,
      ...c.roteiros[base.id],
      href: rota ? `/${locale}/${seg}/${rota[locale]}` : contato,
    };
  });
}

export type Adventure = ReturnType<typeof aventurasDoIdioma>[number];

export function AdventureCard({
  adventure,
  content,
  locale,
  featured = false,
}: {
  adventure: Adventure;
  content: AdventuresContent;
  locale: Locale;
  featured?: boolean;
}) {
  const difficultyEmoji = adventure.difficultyGroup === 'Fácil' ? '🟢' : adventure.difficultyGroup === 'Moderado' ? '🟡' : '🔴';

  return (
    <Link
      href={adventure.href}
      className={cn(
        'group relative flex min-h-132 flex-col overflow-hidden rounded-card-lg border border-line-strong bg-surface-raised text-content shadow-card',
        'transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-float',
        featured && 'min-h-144',
        motion.base,
        press,
        focus.onSurface,
      )}
      aria-label={`${content.card.conhecer} ${adventure.title}`}
    >
      <div className={cn('relative aspect-[1.28] overflow-hidden bg-media-backdrop', featured && 'aspect-[1.18]')}>
        <Image
          src={adventure.image}
          alt={`Paisagem de ${adventure.title}`}
          fill
          priority={adventure.title === 'Cachoeira do Palmital 2 Dias'}
          sizes="(min-width: 1024px) 390px, (min-width: 768px) 50vw, 100vw"
          className="object-cover shadow-image-outline transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/5" />
        <Badge variant="outlineOnMedia" size="sm" className="absolute left-5 top-5 z-10 bg-black/12 font-medium backdrop-blur-sm">
          {adventure.duration} {adventure.duration === 1 ? content.card.dia : content.card.dias}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <Heading as="h3" size="card" balance className="min-h-[2lh]">{adventure.title}</Heading>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" size="sm">
            <span aria-hidden>{difficultyEmoji}</span>
            {adventure.difficulty}
          </Badge>
          <Badge variant="outline" size="sm">{adventure.distance}</Badge>
          <Badge variant="outline" size="sm">{adventure.location}</Badge>
        </div>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-5">
          <div>
            <Text size="xs" weight="light" tone="secondary">{content.card.apartirDe}</Text>
            <Text size="xl" weight="semibold" className="tabular-nums">{formatPrice(adventure.price, locale)}</Text>
          </div>
          <span className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-pill bg-brand px-4 font-body text-sm font-semibold whitespace-nowrap text-brand-contrast transition-[background-color,transform] duration-300 ease-out group-hover:bg-brand-hover">
            <span>{content.card.explorar}</span>
            <ArrowRightIcon aria-hidden className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
