import { Card, Text } from '@/components/ui';

// Mobília compartilhada entre a lista e o detalhe de reservas.

export const editedAtFormat = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'America/Bahia',
});

export function ErrorNotice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card surface="muted">
      <div className="flex flex-col gap-2">
        <Text weight="medium">{title}</Text>
        <Text tone="muted" pretty>
          {children}
        </Text>
      </div>
    </Card>
  );
}
