import type { Metadata } from 'next';
import { LocaleShell } from '@/components/layout/LocaleShell';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="en">{children}</LocaleShell>;
}
