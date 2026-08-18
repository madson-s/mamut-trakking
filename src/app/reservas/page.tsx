import Link from 'next/link';
import { Badge, Card, Section, SectionHeading, Text } from '@/components/ui';
import { getReservations, type Reservation } from '@/lib/notion';
import { editedAtFormat, ErrorNotice } from './shared';

// Lista viva do Notion: renderiza a cada request, nada de cache de build.
export const dynamic = 'force-dynamic';

function ReservationList({ reservations }: { reservations: Reservation[] }) {
  if (reservations.length === 0) {
    return (
      <Card surface="muted">
        <Text tone="muted">Nenhuma reserva encontrada na base.</Text>
      </Card>
    );
  }

  return (
    <Card padding="none">
      <ul className="divide-y divide-line">
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <Link
              href={`/reservas/${reservation.id}`}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 py-4 transition-colors ease-brand hover:bg-surface-muted"
            >
              <Text as="span" weight="medium">
                {reservation.title}
              </Text>
              <Text as="span" size="sm" tone="muted">
                editada em {editedAtFormat.format(new Date(reservation.editedAt))}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default async function ReservasPage() {
  const result = await getReservations();

  return (
    <main>
      <Section padding="default" container="prose" containerClassName="flex flex-col gap-10">
        <SectionHeading
          as="h1"
          title="Reservas"
          eyebrow="📊 Sistema Operacional – Mamut Trekking"
          lead="Títulos da base Reservas, direto do Notion."
          actions={
            result.status === 'ok' ? (
              <Badge variant="soft">
                {result.reservations.length === 1
                  ? '1 reserva'
                  : `${result.reservations.length} reservas`}
              </Badge>
            ) : undefined
          }
        />

        {result.status === 'ok' && <ReservationList reservations={result.reservations} />}

        {result.status === 'missing-token' && (
          <ErrorNotice title="Token do Notion não configurado">
            Defina <code>NOTION_TOKEN</code> no arquivo <code>.env</code> na raiz do projeto e
            reinicie o servidor.
          </ErrorNotice>
        )}

        {result.status === 'database-not-found' && (
          <ErrorNotice title="A base “Reservas” não está visível para a integração">
            No Notion, abra a página “📊 Sistema Operacional – Mamut Trekking”, clique em ⋯ →
            Conexões e adicione a integração do token. Depois recarregue esta tela.
          </ErrorNotice>
        )}

        {result.status === 'error' && (
          <ErrorNotice title="O Notion respondeu com um erro">{result.message}</ErrorNotice>
        )}
      </Section>
    </main>
  );
}
