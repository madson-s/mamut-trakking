/**
 * Mensagem de WhatsApp do sheet de reserva (`PatiMobileBooking`) nos três
 * idiomas que a equipe atende. A mensagem sai no idioma escolhido para o guia
 * — PT BR, EN ou FR —, não no da página: quem lê do outro lado é a equipe que
 * vai montar o passeio naquele idioma.
 */

import type { MessageLocale } from '@/lib/message-locale';
import { PATI3_CONTENT } from './pati-3-content';

export type BookingMessage = {
  /** Abertura, até antes da data: "Olá! Quero verificar … para". */
  intro: string;
  /** Dias da semana por extenso, de domingo a sábado. */
  diasSemana: readonly string[];
  viajante: string;
  viajantes: string;
  idioma: string;
};

export type BookingMessages = Record<MessageLocale, BookingMessage>;

/** Monta as três versões; só a abertura muda de um roteiro para outro. */
export function bookingMessages(intro: (locale: MessageLocale) => string): BookingMessages {
  const message = (locale: MessageLocale): BookingMessage => {
    const { diasSemana, mensagem } = PATI3_CONTENT[locale].booking;
    return { intro: intro(locale), diasSemana, viajante: mensagem.viajante, viajantes: mensagem.viajantes, idioma: mensagem.idioma };
  };
  return { pt: message('pt'), en: message('en'), fr: message('fr') };
}

/** Abertura das travessias do Pati, a partir do nome do roteiro em cada idioma. */
export function patiBookingMessages(nome: Record<MessageLocale, string>): BookingMessages {
  const intro: Record<MessageLocale, (n: string) => string> = {
    pt: (n) => `Olá! Quero verificar ${n} para`,
    en: (n) => `Hi! I want to check ${n} for`,
    fr: (n) => `Bonjour ! Je souhaite vérifier ${n} pour`,
  };
  return bookingMessages((locale) => intro[locale](nome[locale]));
}
