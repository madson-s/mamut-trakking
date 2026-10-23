// Configuração global do site (não é tradução de conteúdo — são constantes
// de marca, contato e formatação usadas pelos componentes e pelo SEO).

export const LOCALES = ['pt', 'en', 'es', 'fr', 'nl', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt';

/**
 * Endereço público do site — base de canonical, hreflang, sitemap, robots,
 * Open Graph e JSON-LD. Vem de NEXT_PUBLIC_SITE_URL (para testar numa prévia
 * com o endereço dela); sem a variável, é o domínio definitivo. O WordPress
 * antigo segue em mamut.agency, que na virada passa a só redirecionar para cá.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mamuttrekking.com').replace(/\/+$/, '');

export const SITE = {
  name: 'Mamut Trekking',
  url: SITE_URL,
  location: 'Lençóis, Chapada Diamantina — Bahia',
  email: 'contato@mamut.agency',
  whatsapp: '+55 75 99935-9150',
  whatsappUrl: 'https://wa.me/5575999359150',
  cadastur: '43500583000122',
  /** Ficha da agência no Google Maps e as coordenadas dela (mesmo ponto). */
  mapsUrl:
    'https://www.google.com/maps/place/Mamut+Trekking+-+Chapada+Diamantina+Agency/@-12.56228,-41.3900628,19.25z/data=!4m6!3m5!1s0x2abb67af2875fe9d:0x63d6c232de10e60a!8m2!3d-12.5623349!4d-41.3903231!16s%2Fg%2F11p77f4kts',
  geo: { latitude: -12.5623349, longitude: -41.3903231 },
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
  fr: 'aventures',
  nl: 'avonturen',
  de: 'abenteuer',
};

// Locale BCP-47 para Intl.NumberFormat (formatação de preço em BRL).
// O espanhol usa o padrão brasileiro de propósito: nenhum locale es-* escreve
// "R$ 1.350" — o es-ES dá "1350 BRL" (sem separador de milhar até 4 dígitos) e
// o es-AR/es-419 dão "BRL 1.350". O valor é cobrado em reais, e as páginas de
// roteiro em espanhol já trazem "R$ 1.500" escrito à mão. O francês segue o
// mesmo padrão (o fr-FR daria "1 350 R$"), para o preço ter uma forma só fora
// do inglês — e é assim que ele aparece escrito nas páginas em francês. O
// holandês usa o próprio nl-NL, que já escreve "R$ 1.350". O alemão volta ao
// padrão brasileiro: o de-DE daria "1.350 R$", com o símbolo no fim.
const INTL_LOCALE: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'pt-BR',
  fr: 'pt-BR',
  nl: 'nl-NL',
  de: 'pt-BR',
};

export function formatPrice(value: number, locale: Locale): string {
  return value.toLocaleString(INTL_LOCALE[locale], {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
}
