import type { Locale } from '@/lib/site';

/**
 * Aviso de cookies do rastreamento (GTM: Google Analytics, Google Ads e Pixel
 * da Meta) — só para quem acessa da Europa.
 *
 * Lá (GDPR + diretiva ePrivacy) cookie que não é essencial só pode ser gravado
 * depois do "aceitar"; no Brasil o Analytics segue com base no interesse
 * legítimo (LGPD), descrito na política de privacidade. O país vem de
 * `/api/geo`. O link "Cookies" do rodapé reabre o aviso em qualquer país.
 */

/** Espaço Econômico Europeu (UE + Islândia, Liechtenstein, Noruega), Reino Unido e Suíça. */
export const CONSENT_COUNTRIES: ReadonlySet<string> = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE',
  'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'IS', 'LI', 'NO',
  'GB', 'CH',
]);

/** Escolha da pessoa (localStorage) e país já consultado (sessionStorage). */
export const CONSENT_STORAGE_KEY = 'mamut-analytics-consent';
export const GEO_STORAGE_KEY = 'mamut-geo-country';

/** Evento que o link "Cookies" do rodapé dispara para reabrir o aviso. */
export const OPEN_CONSENT_EVENT = 'mamut:open-cookie-consent';

/**
 * Para conferir o aviso de fora da Europa: `?cookies=eu` em qualquer página
 * trata a visita como europeia (não grava nada).
 */
export const CONSENT_PREVIEW_PARAM = 'cookies';

export type ConsentContent = {
  titulo: string;
  texto: string;
  aceitar: string;
  recusar: string;
  politica: string;
};

export const CONSENT_CONTENT: Record<Locale, ConsentContent> = {
  pt: {
    titulo: 'Cookies, estatísticas e anúncios',
    texto:
      'Usamos cookies do Google (Analytics e Ads) e da Meta para medir as visitas e mostrar nossos anúncios a quem já conhece a Mamut. Eles só são ativados se você aceitar, e você pode mudar a escolha quando quiser em "Cookies", no rodapé.',
    aceitar: 'Aceitar',
    recusar: 'Recusar',
    politica: 'Política de privacidade',
  },
  en: {
    titulo: 'Cookies, statistics and ads',
    texto:
      'We use cookies from Google (Analytics and Ads) and Meta to measure visits and show our ads to people who already know Mamut. They are only switched on if you accept, and you can change your choice at any time under "Cookies" in the footer.',
    aceitar: 'Accept',
    recusar: 'Decline',
    politica: 'Privacy policy',
  },
  es: {
    titulo: 'Cookies, estadísticas y anuncios',
    texto:
      'Usamos cookies de Google (Analytics y Ads) y de Meta para medir las visitas y mostrar nuestros anuncios a quien ya conoce Mamut. Solo se activan si aceptás, y podés cambiar tu elección cuando quieras en "Cookies", al pie de la página.',
    aceitar: 'Aceptar',
    recusar: 'Rechazar',
    politica: 'Política de privacidad',
  },
  fr: {
    titulo: 'Cookies, statistiques et publicité',
    texto:
      'Nous utilisons des cookies de Google (Analytics et Ads) et de Meta pour mesurer les visites et montrer nos annonces aux personnes qui connaissent déjà Mamut. Ils ne sont activés que si vous l’acceptez, et vous pouvez modifier votre choix à tout moment via « Cookies », en bas de page.',
    aceitar: 'Accepter',
    recusar: 'Refuser',
    politica: 'Politique de confidentialité',
  },
  nl: {
    titulo: 'Cookies, statistieken en advertenties',
    texto:
      'We gebruiken cookies van Google (Analytics en Ads) en Meta om bezoeken te meten en onze advertenties te tonen aan mensen die Mamut al kennen. Ze worden alleen ingeschakeld als je akkoord gaat, en je kunt je keuze altijd wijzigen via "Cookies" onderaan de pagina.',
    aceitar: 'Accepteren',
    recusar: 'Weigeren',
    politica: 'Privacybeleid',
  },
  de: {
    titulo: 'Cookies, Statistiken und Anzeigen',
    texto:
      'Wir nutzen Cookies von Google (Analytics und Ads) und Meta, um Besuche zu messen und unsere Anzeigen Menschen zu zeigen, die Mamut schon kennen. Sie werden nur aktiviert, wenn du zustimmst, und du kannst deine Wahl jederzeit unter „Cookies“ in der Fußzeile ändern.',
    aceitar: 'Akzeptieren',
    recusar: 'Ablehnen',
    politica: 'Datenschutzerklärung',
  },
};
