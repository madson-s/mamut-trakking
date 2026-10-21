import { SITE_INDEXABLE } from '@/lib/indexing';
import type { Locale } from '@/lib/site';
import { ConsentAnalytics } from './ConsentAnalytics';

/**
 * Google Analytics 4 — a mesma propriedade/fluxo do site antigo (mamut.agency),
 * para o histórico seguir contínuo depois da migração.
 *
 * Só existe com a porta aberta (`SITE_INDEXABLE=true`, o deploy de produção):
 * dev local e prévias da Vercel não entram nos números. Quem decide se a tag
 * carrega — e mostra o aviso de cookies para a Europa — é `ConsentAnalytics`.
 * Navegação entre páginas (pushState do Next) é contada pela medição otimizada
 * do GA4, e os cliques para o WhatsApp entram como "cliques de saída".
 *
 * Vai em todos os layouts públicos (pt/en/es/fr/nl/de e a 404), não nas
 * ferramentas internas (/voucher, /reservas). Está descrito na política de
 * privacidade, seção "estatísticas" — mudar a ferramenta exige atualizar lá.
 */
export const GA_MEASUREMENT_ID = 'G-8B6ZE20HW1';

export function GoogleAnalytics({ locale }: { locale: Locale }) {
  if (!SITE_INDEXABLE) return null;
  return <ConsentAnalytics locale={locale} measurementId={GA_MEASUREMENT_ID} />;
}
