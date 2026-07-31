import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import type { DisplaySize, Tone } from '@/design/tokens';
import { Heading } from './Heading';
import { Text } from './Text';

export type SectionHeadingProps = {
  /** Título. String simples ou JSX (para quebras e destaques inline). */
  title: ReactNode;
  /** Linha curta acima do título — string vira `Text`; JSX passa direto. */
  eyebrow?: ReactNode;
  /** Parágrafo de apoio abaixo do título. */
  lead?: ReactNode;
  /** Botões/links à direita (`layout="inline"`) ou abaixo (`stack`). */
  actions?: ReactNode;
  align?: 'left' | 'center';
  /** `inline` põe título e ações na mesma linha (padrão do hub de roteiros). */
  layout?: 'stack' | 'inline';
  size?: DisplaySize;
  tone?: Tone;
  as?: 'h1' | 'h2' | 'h3';
  /** id do título — passe o mesmo valor em `Section labelledBy`. */
  titleId?: string;
  /** Largura máxima do bloco de texto. */
  maxWidth?: string;
  className?: string;
};

/**
 * Cabeçalho de seção: eyebrow + título + lead + ações.
 * Concentra o espaçamento e os tons para que toda seção comece igual.
 */
export function SectionHeading({
  title,
  eyebrow,
  lead,
  actions,
  align = 'left',
  layout = 'stack',
  size = 'section',
  tone = 'default',
  as = 'h2',
  titleId,
  maxWidth,
  className,
}: SectionHeadingProps) {
  const onMedia = tone === 'onMedia' || tone === 'onMediaMuted';
  const centered = align === 'center';

  const eyebrowNode =
    typeof eyebrow === 'string' ? (
      <Text size="xl" weight="light" tone={onMedia ? 'onMediaMuted' : 'secondary'}>
        {eyebrow}
      </Text>
    ) : (
      eyebrow
    );

  const leadNode =
    typeof lead === 'string' ? (
      <Text size="xl" weight="light" tone={onMedia ? 'onMediaMuted' : 'muted'} pretty>
        {lead}
      </Text>
    ) : (
      lead
    );

  const heading = (
    <Heading as={as} id={titleId} size={size} tone={tone} balance>
      {title}
    </Heading>
  );

  if (layout === 'inline') {
    return (
      <div
        className={cn(
          'flex flex-wrap items-center gap-x-7 gap-y-5',
          centered && 'justify-center text-center',
          className,
        )}
      >
        {eyebrowNode}
        {heading}
        {actions}
        {leadNode}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-6',
        centered && 'items-center text-center',
        maxWidth,
        className,
      )}
    >
      {eyebrowNode}
      {heading}
      {leadNode}
      {actions && (
        <div className={cn('flex flex-wrap items-center gap-4', centered && 'justify-center')}>
          {actions}
        </div>
      )}
    </div>
  );
}
