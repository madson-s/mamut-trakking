// Configuração global do site (não é tradução de conteúdo — são constantes
// de marca, contato e formatação usadas pelos componentes e pelo SEO).

export const LOCALES = ['pt', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt';

export const SITE = {
  name: 'Mamut Trekking',
  url: 'https://mamut.agency',
  location: 'Lençóis, Chapada Diamantina — Bahia',
  email: 'contato@mamut.agency',
  whatsapp: '+55 75 99935-9150',
  whatsappUrl: 'https://wa.me/5575999359150',
  cadastur: '43500583000122',
} as const;

// Segmento da seção de aventuras por idioma (usado nas URLs e no sitemap).
export const ADVENTURE_SEGMENT: Record<Locale, string> = {
  pt: 'aventuras',
  en: 'adventures',
  es: 'aventuras',
};

// Locale BCP-47 para Intl.NumberFormat (formatação de preço em BRL).
const INTL_LOCALE: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
};

export function formatPrice(value: number, locale: Locale): string {
  return value.toLocaleString(INTL_LOCALE[locale], {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
}
