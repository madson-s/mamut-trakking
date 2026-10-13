import type { Metadata } from 'next';
import { CalendarGroupsExperience } from '@/components/calendar/CalendarGroupsExperience';
import { CALENDAR_CONTENT, CALENDAR_HREF } from '@/components/calendar/calendar-content';

const CONTENT = CALENDAR_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: CALENDAR_HREF },
};

export default function CalendarAndGroupsPage() {
  return <CalendarGroupsExperience locale="en" />;
}
