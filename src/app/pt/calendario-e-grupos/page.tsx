import type { Metadata } from 'next';
import { CalendarGroupsExperience } from '@/components/calendar/CalendarGroupsExperience';
import { CALENDAR_CONTENT, CALENDAR_HREF } from '@/components/calendar/calendar-content';
import { upcomingDepartures } from '@/components/calendar/calendar-data';

const CONTENT = CALENDAR_CONTENT.pt;

// A página é estática, mas as saídas expiram: regera a cada hora, para uma
// saída que já começou não seguir anunciada como "próxima".
export const revalidate = 3600;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: CALENDAR_HREF },
};

export default function CalendarioEGruposPage() {
  return <CalendarGroupsExperience locale="pt" departures={upcomingDepartures()} />;
}
