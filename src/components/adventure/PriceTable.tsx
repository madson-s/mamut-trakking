import { Heading, Text } from '@/components/ui';
import { cn } from '@/lib/cn';

export type PriceTableRow = { people: string; prices: readonly [string, string] };

export type PriceTableLabels = {
  titulo: string;
  colunaPessoas: string;
  /** Sufixo da faixa: "1 pessoa" e "4+ pessoas". */
  pessoa: string;
  pessoas: string;
  nota: string;
};

/**
 * Tabela completa por faixa de grupo — o equivalente ao `#tabela-pagamento` de
 * mamut.agency, para onde a âncora do site antigo aponta. É uma `<table>` de
 * verdade (não um grid): são dados tabulares, e leitores de tela anunciam a
 * linha e a coluna de cada valor.
 *
 * No mobile as três colunas não cabem, e rolagem horizontal escondia justamente
 * o preço em grupo. Então a mesma `<table>` vira lista empilhada via CSS
 * (`block` até sm): cada faixa é um bloco e cada preço ganha o rótulo do
 * formato ao lado, vindo de `data-formato`.
 *
 * Usado pelas duas famílias de página de roteiro: `PatiThreeDayExperience` e
 * `DayTourExperience`.
 */
export function PriceTable({
  labels,
  formatos,
  rows,
  highlightIndex = 1,
}: {
  labels: PriceTableLabels;
  /** Nome de cada formato, na ordem das colunas (privado, em grupo). */
  formatos: readonly string[];
  rows: readonly PriceTableRow[];
  /** Coluna destacada em verde — por padrão a segunda, "em grupo". */
  highlightIndex?: number;
}) {
  return (
    <div id="tabela-pagamento" className="flex w-full scroll-mt-24 flex-col gap-4">
      <Heading as="h3" size="quote">{labels.titulo}</Heading>

      <div className="rounded-card border border-line-strong">
        <table className="w-full border-collapse text-left max-sm:block">
          {/* cabeçalho some no empilhado: cada preço carrega o próprio rótulo */}
          <thead className="max-sm:hidden">
            <tr className="border-b border-line-strong bg-surface-muted">
              <th scope="col" className="px-5 py-3.5 font-body text-sm font-normal text-content-muted">
                {labels.colunaPessoas}
              </th>
              {formatos.map((formato, i) => (
                <th
                  key={formato}
                  scope="col"
                  className={cn(
                    'px-5 py-3.5 text-right font-body text-sm font-normal',
                    i === highlightIndex ? 'text-brand-strong' : 'text-content-muted',
                  )}
                >
                  {formato}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line max-sm:block">
            {rows.map((row) => (
              <tr key={row.people} className="max-sm:block max-sm:px-5 max-sm:py-4">
                <th
                  scope="row"
                  className="px-5 py-3.5 font-body text-base font-light text-content-secondary max-sm:block max-sm:px-0 max-sm:py-0 max-sm:font-normal max-sm:text-content"
                >
                  {row.people === '1' ? `1 ${labels.pessoa}` : `${row.people} ${labels.pessoas}`}
                </th>
                {row.prices.map((price, i) => (
                  <td
                    key={price + i}
                    data-formato={formatos[i]}
                    className={cn(
                      'px-5 py-3.5 text-right font-display text-lg tabular-nums',
                      'max-sm:flex max-sm:items-baseline max-sm:justify-between max-sm:px-0 max-sm:pt-2 max-sm:pb-0 max-sm:text-left',
                      'max-sm:before:font-body max-sm:before:text-sm max-sm:before:font-light max-sm:before:text-content-muted max-sm:before:content-[attr(data-formato)]',
                      i === highlightIndex ? 'text-brand-strong' : 'text-content',
                    )}
                  >
                    {price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Text size="sm" weight="light" tone="muted" pretty>{labels.nota}</Text>
    </div>
  );
}
