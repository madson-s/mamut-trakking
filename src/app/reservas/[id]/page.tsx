import Link from 'next/link';
import { Badge, Button, Card, Heading, Section, SectionHeading, Text } from '@/components/ui';
import {
  getReservationDetail,
  type ReservationField,
  type ReservationValuePart,
} from '@/lib/notion';
import { editedAtFormat, ErrorNotice } from '../shared';

// Detalhe vivo do Notion: renderiza a cada request, nada de cache de build.
export const dynamic = 'force-dynamic';

// Ordem de exibição das colunas da base, agrupadas por assunto.
// Campo que não estiver aqui cai no grupo "Outros campos".
const FIELD_GROUPS: { title: string; names: string[] }[] = [
  {
    title: 'Reserva',
    names: [
      '🔐 Código da Reserva',
      'Status',
      'DATA RESERVA',
      'Data Início',
      'Data Final',
      'Confirmação Hospedagem',
    ],
  },
  {
    title: 'Passeio e grupo',
    names: ['Passeio', 'Qtd. Pessoas', 'Clientes', 'Grupo', 'Guia', 'Guia Auxiliar'],
  },
  {
    title: 'Valores',
    names: [
      'Valor por Pessoa',
      'Valor Total 🔒',
      'Pago 1 (data)',
      'Pago 1 (valor)',
      'Pago 2 (data)',
      'Pago 2 (valor)',
      'Total Pago 🔒',
      'Saldo a receber 🔒',
      'Comissão Plataforma',
    ],
  },
  { title: 'Operação', names: ['Observações internas', 'Checklist completo'] },
];

function groupFields(fields: ReservationField[]) {
  const byName = new Map(fields.map((f) => [f.name, f]));
  const groups = FIELD_GROUPS.map(({ title, names }) => ({
    title,
    fields: names.flatMap((name) => byName.get(name) ?? []),
  })).filter((g) => g.fields.length > 0);

  const known = new Set(FIELD_GROUPS.flatMap((g) => g.names));
  const leftovers = fields.filter((f) => !known.has(f.name));
  if (leftovers.length > 0) groups.push({ title: 'Outros campos', fields: leftovers });
  return groups;
}

function FieldValue({ parts }: { parts: ReservationValuePart[] }) {
  if (parts.length === 0) {
    return (
      <Text as="span" tone="muted">
        —
      </Text>
    );
  }
  return (
    <span className="flex flex-wrap gap-x-3 gap-y-1">
      {parts.map((part, i) =>
        part.url ? (
          <a
            key={i}
            href={part.url}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors ease-brand hover:text-brand-strong"
          >
            <Text as="span" tone="inherit">
              {part.text}
            </Text>
          </a>
        ) : (
          <Text as="span" key={i}>
            {part.text}
          </Text>
        ),
      )}
    </span>
  );
}

function FieldGroup({ title, fields }: { title: string; fields: ReservationField[] }) {
  return (
    <Card as="section" padding="none">
      <div className="px-6 py-4">
        <Heading as="h2" size="label">
          {title}
        </Heading>
      </div>
      <dl className="divide-y divide-line border-t border-line">
        {fields.map((field) => (
          <div
            key={field.name}
            className="grid gap-x-6 gap-y-1 px-6 py-3 sm:grid-cols-[240px_minmax(0,1fr)]"
          >
            <dt>
              <Text as="span" size="sm" tone="muted">
                {field.name}
              </Text>
            </dt>
            <dd>
              <FieldValue parts={field.parts} />
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

export default async function ReservaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = await getReservationDetail(id);

  return (
    <main>
      <Section padding="default" container="prose" containerClassName="flex flex-col gap-10">
        {result.status === 'ok' ? (
          <>
            <SectionHeading
              as="h1"
              size="card"
              eyebrow={
                <Link href="/reservas" className="transition-colors ease-brand hover:text-brand-strong">
                  <Text as="span" size="sm" tone="secondary">
                    ← Reservas
                  </Text>
                </Link>
              }
              title={result.reservation.title}
              lead={`Editada em ${editedAtFormat.format(new Date(result.reservation.editedAt))}.`}
              actions={
                <>
                  {(() => {
                    const status = result.reservation.fields.find((f) => f.name === 'Status')
                      ?.parts[0]?.text;
                    return status ? (
                      <Badge variant="brand" size="md">
                        {status}
                      </Badge>
                    ) : null;
                  })()}
                  <Button href={result.reservation.url} variant="outline" size="sm">
                    Abrir no Notion
                  </Button>
                </>
              }
            />
            <div className="flex flex-col gap-6">
              {groupFields(result.reservation.fields).map((group) => (
                <FieldGroup key={group.title} title={group.title} fields={group.fields} />
              ))}
            </div>
          </>
        ) : (
          <>
            <SectionHeading
              as="h1"
              size="card"
              eyebrow={
                <Link href="/reservas" className="transition-colors ease-brand hover:text-brand-strong">
                  <Text as="span" size="sm" tone="secondary">
                    ← Reservas
                  </Text>
                </Link>
              }
              title="Reserva"
            />
            {result.status === 'not-found' && (
              <ErrorNotice title="Reserva não encontrada">
                Essa página não existe no Notion ou a integração não tem acesso a ela. Volte para a
                lista e abra a reserva de novo.
              </ErrorNotice>
            )}
            {result.status === 'missing-token' && (
              <ErrorNotice title="Token do Notion não configurado">
                Defina <code>NOTION_TOKEN</code> no arquivo <code>.env</code> na raiz do projeto e
                reinicie o servidor.
              </ErrorNotice>
            )}
            {result.status === 'error' && (
              <ErrorNotice title="O Notion respondeu com um erro">{result.message}</ErrorNotice>
            )}
          </>
        )}
      </Section>
    </main>
  );
}
