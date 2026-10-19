import { MESSAGE_LOCALE, type MessageLocale } from './message-locale';
import { SITE, type Locale } from './site';

/**
 * Links de WhatsApp com mensagem pronta. Todo botão do site que abre o
 * WhatsApp passa por aqui: a mensagem sai em português, inglês ou francês —
 * os idiomas da equipe —, e nos demais idiomas do site em inglês
 * (`MESSAGE_LOCALE`).
 */

export const whatsappText = (text: string) => `${SITE.whatsappUrl}?text=${encodeURIComponent(text)}`;

const OLA: Record<MessageLocale, string> = {
  pt: 'Olá! Vim pelo site da Mamut e gostaria de mais informações.',
  en: 'Hi! I came from the Mamut website and would like more information.',
  fr: 'Bonjour ! Je viens du site de Mamut et j’aimerais avoir plus d’informations.',
};

const SOBRE: Record<MessageLocale, (roteiro: string) => string> = {
  pt: (roteiro) => `Olá! Vim pelo site da Mamut e quero saber mais sobre ${roteiro}.`,
  en: (roteiro) => `Hi! I came from the Mamut website and would like to know more about ${roteiro}.`,
  fr: (roteiro) => `Bonjour ! Je viens du site de Mamut et j’aimerais en savoir plus sur ${roteiro}.`,
};

/** Como o roteiro entra na frase quando só se tem o título: "o roteiro X". */
export const ROTEIRO: Record<MessageLocale, (titulo: string) => string> = {
  pt: (titulo) => `o roteiro ${titulo}`,
  en: (titulo) => `the ${titulo} itinerary`,
  fr: (titulo) => `l’itinéraire ${titulo}`,
};

/** Tira o ponto final de um título, para ele caber no meio da frase. */
export const semPonto = (titulo: string) => titulo.trim().replace(/[.!]+$/, '');

/** Botão genérico de WhatsApp (header, rodapé, páginas institucionais). */
export const whatsappLink = (locale: Locale) => whatsappText(OLA[MESSAGE_LOCALE[locale]]);

/** Botão de WhatsApp de um roteiro: `roteiro` recebe o idioma da mensagem e devolve o nome nele. */
export function whatsappSobre(locale: Locale, roteiro: (locale: MessageLocale) => string) {
  const ml = MESSAGE_LOCALE[locale];
  // Os títulos das páginas terminam em ponto ("Cachoeira do Buracão.").
  return whatsappText(SOBRE[ml](semPonto(roteiro(ml))));
}
