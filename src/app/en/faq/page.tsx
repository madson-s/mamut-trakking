import type { Metadata } from 'next';
import { FaqPage } from '@/components/faq/FaqPage';
import { FAQ_CONTENT, FAQ_HREF } from '@/components/faq/faq-content';

const CONTENT = FAQ_CONTENT.en;

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
  alternates: { canonical: CONTENT.meta.canonical, languages: FAQ_HREF },
  openGraph: {
    title: CONTENT.meta.ogTitle,
    description: CONTENT.meta.ogDescription,
    url: CONTENT.meta.canonical,
    images: ['/img/about/cta-pai-inacio.webp'],
  },
};

export default function FaqEnRoute() {
  return <FaqPage locale="en" />;
}
