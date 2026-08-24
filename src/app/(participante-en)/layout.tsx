import type { Metadata } from 'next';
import { ParticipanteShell } from '@/components/formulario/ParticipanteShell';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ParticipanteShell locale="en">{children}</ParticipanteShell>;
}
