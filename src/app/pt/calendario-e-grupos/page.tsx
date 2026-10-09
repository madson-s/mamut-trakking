import type { Metadata } from 'next';
import { CalendarGroupsExperience } from '@/components/calendar/CalendarGroupsExperience';

export const metadata: Metadata = {
  title: 'Calendário e grupos de trekking',
  description:
    'Confira as próximas saídas em grupo para o Vale do Pati e reserve sua vaga com guias nativos da Chapada Diamantina.',
  alternates: {
    canonical: '/pt/calendario-e-grupos',
  },
};

export default function CalendarioEGruposPage() {
  return <CalendarGroupsExperience />;
}
