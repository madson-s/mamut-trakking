import { SITE_INDEXABLE } from '@/lib/indexing';
import type { Locale } from '@/lib/site';
import { ConsentAnalytics } from './ConsentAnalytics';

export const GTM_ID = 'GTM-WTJ39TDZ';
export const GA4_ID = 'G-C5F2EQWV32';

export function GoogleAnalytics({ locale }: { locale: Locale }) {
  if (!SITE_INDEXABLE) return null;
  return <ConsentAnalytics locale={locale} gtmId={GTM_ID} ga4Id={GA4_ID} />;
}
