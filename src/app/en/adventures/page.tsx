import type { Metadata } from 'next';
import { AdventuresHub } from '@/components/adventures/AdventuresHub';
import { ADVENTURES_CONTENT } from '@/components/adventures/adventures-content';

const CONTENT = ADVENTURES_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: {
    canonical: CONTENT.meta.canonical,
    languages: { pt: '/pt/aventuras', en: '/en/adventures', es: '/es/aventuras' },
  },
};

export default function AdventuresPage() {
  return <AdventuresHub locale="en" />;
}
