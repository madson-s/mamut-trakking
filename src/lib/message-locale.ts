import type { Locale } from './site';

/**
 * Idioma das mensagens automáticas de WhatsApp. A equipe conduz e atende em
 * português, inglês e francês; nos demais idiomas do site a mensagem sai em
 * inglês, para quem recebe entender.
 */
export const MESSAGE_LOCALES = ['pt', 'en', 'fr'] as const;
export type MessageLocale = (typeof MESSAGE_LOCALES)[number];

export const MESSAGE_LOCALE: Record<Locale, MessageLocale> = {
  pt: 'pt',
  en: 'en',
  es: 'en',
  fr: 'fr',
  nl: 'en',
  de: 'en',
};
