// Configuração global do site (não é tradução de conteúdo — são constantes
// de marca, contato e formatação usadas pelos componentes e pelo SEO).

export const LOCALES = ['pt', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt';

/**
 * Endereço público do site — base de canonical, hreflang, sitemap, robots,
 * Open Graph e JSON-LD. Vem de NEXT_PUBLIC_SITE_URL (para testar numa prévia
 * com o endereço dela); sem a variável, é o domínio definitivo. O WordPress
 * antigo segue em mamut.agency, que na virada passa a só redirecionar para cá.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mamuttrakking.com').replace(/\/+$/, '');

export const SITE = {
  name: 'Mamut Trekking',
  url: SITE_URL,
  location: 'Lençóis, Chapada Diamantina — Bahia',
  email: 'contato@mamut.agency',
  whatsapp: '+55 75 99935-9150',
  whatsappUrl: 'https://wa.me/5575999359150',
  cadastur: '43500583000122',
  social: {
    instagram: 'https://www.instagram.com/mamut.trekking/',
    facebook: 'https://www.facebook.com/mamut.trekking/',
    tripadvisor:
      'https://www.tripadvisor.com.br/Attraction_Review-g635725-d23344029-Reviews-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html',
  },
} as const;

// Segmento da seção de aventuras por idioma (usado nas URLs e no sitemap).
export const ADVENTURE_SEGMENT: Record<Locale, string> = {
  pt: 'aventuras',
  en: 'adventures',
  es: 'aventuras',
};

// Locale BCP-47 para Intl.NumberFormat (formatação de preço em BRL).
// O espanhol usa o padrão brasileiro de propósito: nenhum locale es-* escreve
// "R$ 1.350" — o es-ES dá "1350 BRL" (sem separador de milhar até 4 dígitos) e
// o es-AR/es-419 dão "BRL 1.350". O valor é cobrado em reais, e as páginas de
// roteiro em espanhol já trazem "R$ 1.500" escrito à mão.
const INTL_LOCALE: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'pt-BR',
};

export function formatPrice(value: number, locale: Locale): string {
  return value.toLocaleString(INTL_LOCALE[locale], {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
}
