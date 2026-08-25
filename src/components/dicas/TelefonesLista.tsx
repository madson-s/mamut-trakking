import { Text } from '@/components/ui';
import type { Locale } from '@/lib/site';
import { TELEFONES, nomeDoContato, type GrupoId } from './dicas-conteudo';

/** Dígitos do número, para o href do `tel:`. */
const paraDiscagem = (numero: string) => numero.replace(/[^\d]/g, '');

export function TelefonesLista({
  grupo,
  titulo,
  locale,
}: {
  grupo: GrupoId;
  titulo: string;
  locale: Locale;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Text as="span" size="xs" weight="semibold" tone="muted" className="tracking-[0.14em] uppercase">
        {titulo}
      </Text>

      <dl className="overflow-hidden rounded-control border border-line">
        {TELEFONES[grupo].map((contato) => (
          <div
            key={nomeDoContato(contato, locale)}
            className="flex flex-col gap-1 border-b border-line px-4 py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5 sm:px-5"
          >
            <dt className="font-body text-sm font-light text-content-secondary">
              {nomeDoContato(contato, locale)}
            </dt>
            <dd className="flex shrink-0 flex-wrap gap-x-3 gap-y-1">
              {contato.numeros.map((numero) => (
                <a
                  key={numero}
                  href={`tel:${paraDiscagem(numero)}`}
                  className="font-body text-sm font-semibold text-content tabular-nums underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-brand-strong focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  {numero}
                </a>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
