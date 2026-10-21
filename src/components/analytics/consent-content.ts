import type { Locale } from '@/lib/site';

/**
 * Aviso de cookies do Google Analytics — só para quem acessa da Europa.
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
    titulo: 'Cookies e estatísticas',
    texto:
      'Usamos o Google Analytics para entender como o site é usado. Ele só é ativado se você aceitar, e você pode mudar a escolha quando quiser em "Cookies", no rodapé.',
    aceitar: 'Aceitar',
    recusar: 'Recusar',
    politica: 'Política de privacidade',
  },
  en: {
    titulo: 'Cookies and statistics',
    texto:
      'We use Google Analytics to understand how the site is used. It is only switched on if you accept, and you can change your choice at any time under "Cookies" in the footer.',
    aceitar: 'Accept',
    recusar: 'Decline',
    politica: 'Privacy policy',
  },
  es: {
    titulo: 'Cookies y estadísticas',
    texto:
      'Usamos Google Analytics para entender cómo se usa el sitio. Solo se activa si aceptás, y podés cambiar tu elección cuando quieras en "Cookies", al pie de la página.',
    aceitar: 'Aceptar',
    recusar: 'Rechazar',
    politica: 'Política de privacidad',
  },
  fr: {
    titulo: 'Cookies et statistiques',
    texto:
      'Nous utilisons Google Analytics pour comprendre comment le site est utilisé. Il n’est activé que si vous l’acceptez, et vous pouvez modifier votre choix à tout moment via « Cookies », en bas de page.',
    aceitar: 'Accepter',
    recusar: 'Refuser',
    politica: 'Politique de confidentialité',
  },
  nl: {
    titulo: 'Cookies en statistieken',
    texto:
      'We gebruiken Google Analytics om te begrijpen hoe de site wordt gebruikt. Het wordt alleen ingeschakeld als je akkoord gaat, en je kunt je keuze altijd wijzigen via "Cookies" onderaan de pagina.',
    aceitar: 'Accepteren',
    recusar: 'Weigeren',
    politica: 'Privacybeleid',
  },
  de: {
    titulo: 'Cookies und Statistiken',
    texto:
      'Wir nutzen Google Analytics, um zu verstehen, wie die Website genutzt wird. Es wird nur aktiviert, wenn du zustimmst, und du kannst deine Wahl jederzeit unter „Cookies“ in der Fußzeile ändern.',
    aceitar: 'Akzeptieren',
    recusar: 'Ablehnen',
    politica: 'Datenschutzerklärung',
  },
};
