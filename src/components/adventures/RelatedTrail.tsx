import Image from 'next/image';
import { Badge, Button, Heading } from '@/components/ui';
import { cn } from '@/lib/cn';

/**
 * Cartão compacto de "outras aventuras": foto pequena à esquerda, nível,
 * título e CTA à direita. Metade da altura do cartão do hub — serve para
 * sugerir roteiros no fim de uma página sem competir com o conteúdo dela.
 *
 * Nasceu na página do Vale do Pati ("O Vale também existe em 4 e 5 dias") e
 * vive aqui para que as páginas de roteiro usem o mesmo desenho.
 */
export function RelatedTrail({
  href,
  image,
  level,
  title,
  cta,
  difficultyGroup,
  stretch,
}: {
  href: string;
  image: string;
  level: string;
  title: string;
  cta: string;
  /** Quando vem do catálogo, decide o emoji; sem ele, cai na leitura do texto. */
  difficultyGroup?: 'Fácil' | 'Moderado' | 'Desafiador';
  /**
   * Ocupa a coluna inteira em vez da largura fixa de 382px. Use quando os
   * cards estão numa grade — três lado a lado não cabem na largura fixa, e o
   * título passa a quebrar em duas linhas em vez de vazar.
   */
  stretch?: boolean;
}) {
  const emoji = difficultyGroup
    ? { 'Fácil': '🟢', 'Moderado': '🟡', 'Desafiador': '🔴' }[difficultyGroup]
    // A versão de 5 dias é a mais dura; nos três idiomas ela é a segunda da lista.
    : /^(Avançado|Advanced|Avanzado)/.test(level) ? '🔴' : '🟡';

  return (
    <article
      className={cn(
        'grid h-40 w-full grid-cols-1 items-center gap-5 overflow-hidden rounded-card-lg border border-line bg-surface-muted px-5 sm:px-0 sm:pr-5',
        stretch ? 'sm:grid-cols-[140px_minmax(0,1fr)]' : 'sm:w-95.5 sm:grid-cols-[140px_202px]',
      )}
    >
      <div className="relative hidden h-40 w-35 shrink-0 overflow-hidden rounded-card-lg sm:block"><Image src={image} alt="" fill sizes="140px" className="object-cover" /></div>
      <div className="flex h-30 min-w-0 flex-col items-start justify-center gap-2.5">
        <Badge variant="soft" size="sm"><span aria-hidden>{emoji}</span> {level}</Badge>
        <Heading as="h4" size="quote" className={cn('text-xl/[27px]!', stretch ? 'line-clamp-2 text-balance' : 'whitespace-nowrap')}>{title}</Heading>
        <Button href={href} size="sm" arrow className="min-h-11 w-full">{cta}</Button>
      </div>
    </article>
  );
}
