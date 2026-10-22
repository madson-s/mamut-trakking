import { SITE_INDEXABLE } from '@/lib/indexing';
import type { Locale } from '@/lib/site';
import { ConsentAnalytics } from './ConsentAnalytics';

/**
 * Rastreamento do site — o MESMO do site antigo (mamut.agency): o contêiner
 * do Google Tag Manager GTM-WTJ39TDZ, que dispara o GA4 G-C5F2EQWV32, o
 * remarketing do Google Ads (AW-10818756615) e o Pixel da Meta. Assim o
 * histórico e os públicos de anúncio seguem contínuos depois da migração.
 * O que o contêiner faz está em migracao/rastreamento-site-antigo.md.
 *
 * Só existe com a porta aberta (`SITE_INDEXABLE=true`, o deploy de produção):
 * dev local e prévias da Vercel não entram nos números. Quem decide se o
 * contêiner carrega — e mostra o aviso de cookies para a Europa — é
 * `ConsentAnalytics`.
 *
 * Vai em todos os layouts públicos (pt/en/es/fr/nl/de e a 404), não nas
 * ferramentas internas (/voucher, /reservas). Está descrito na política de
 * privacidade, seção "estatísticas" — mudar as tags exige atualizar lá.
 */
export const GTM_ID = 'GTM-WTJ39TDZ';
export const GA4_ID = 'G-C5F2EQWV32';

export function GoogleAnalytics({ locale }: { locale: Locale }) {
  if (!SITE_INDEXABLE) return null;
  return <ConsentAnalytics locale={locale} gtmId={GTM_ID} ga4Id={GA4_ID} />;
}
