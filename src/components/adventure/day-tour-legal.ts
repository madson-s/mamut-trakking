/**
 * Pagamento e cancelamento — idênticos em todos os passeios de um dia.
 *
 * Ficam aqui e não em cada roteiro porque são regra da operadora, não do
 * roteiro: a política cita a deliberação normativa nº 161/1985 da EMBRATUR, e
 * uma mudança nela vale para todos de uma vez.
 *
 * ⚠️ As versões EN e ES são tradução feita neste repositório e precisam de
 * revisão antes de valerem como termo contratual.
 */

import type { Locale } from '@/lib/site';
import type { PatiFaqItem } from './PatiFaqList';

export const DAY_TOUR_LEGAL: Record<Locale, readonly PatiFaqItem[]> = {
  pt: [
    {
      type: 'payment',
      title: 'Formas de pagamento',
      paragraphs: [
        'Sinal de 50% para confirmar a reserva, via transferência, depósito ou boleto. Os 50% restantes no check-in em dinheiro, ou por depósito até 2 dias úteis antes.',
        'Envie o comprovante com a data confirmada, nome completo e CPF de cada participante.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Política de cancelamento',
      intro: 'Cancelamento pelo passageiro segue a deliberação normativa nº 161/1985 da EMBRATUR:',
      refunds: [['30+ dias antes', 'devolve 90%'], ['21–29 dias', 'devolve 80%'], ['7–20 dias', 'devolve 50%'], ['Menos de 7 dias', 'sem devolução'], ['Durante o pacote', 'sem reembolso']],
      paragraphs: [
        'Antes de cancelar: você pode indicar um substituto ou deixar o valor em crédito para outra data. Taxa de reserva: 10% em caráter de multa se cancelar após a confirmação.',
        'No-show: não comparecer implica perda total do valor. A Mamut pode alterar o roteiro quando o clima comprometer a segurança; o passeio acontece mesmo com chuva, salvo força maior.',
      ],
    },
  ],
  en: [
    {
      type: 'payment',
      title: 'Ways to pay',
      paragraphs: [
        'A 50% deposit confirms the booking, by transfer, deposit or boleto. The remaining 50% at check-in in cash, or by deposit up to 2 business days before.',
        'Send the receipt with the confirmed date, and the full name and ID number of each participant.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Cancellation policy',
      intro: 'Cancellation by the traveller follows Brazilian EMBRATUR normative resolution no. 161/1985:',
      refunds: [['30+ days before', '90% refunded'], ['21–29 days', '80% refunded'], ['7–20 days', '50% refunded'], ['Fewer than 7 days', 'no refund'], ['During the package', 'no refund']],
      paragraphs: [
        'Before cancelling: you can name a replacement or keep the amount as credit for another date. Booking fee: 10% as a penalty if you cancel after confirmation.',
        'No-show: failing to appear means losing the full amount. Mamut may change the itinerary when the weather compromises safety; the tour runs even in rain, except in cases of force majeure.',
      ],
    },
  ],
  es: [
    {
      type: 'payment',
      title: 'Formas de pago',
      paragraphs: [
        'Seña del 50% para confirmar la reserva, por transferencia, depósito o boleto. El 50% restante en el check-in en efectivo, o por depósito hasta 2 días hábiles antes.',
        'Enviá el comprobante con la fecha confirmada, nombre completo y documento de cada participante.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Política de cancelación',
      intro: 'La cancelación por parte del pasajero sigue la deliberación normativa nº 161/1985 de EMBRATUR (Brasil):',
      refunds: [['30+ días antes', 'devuelve 90%'], ['21–29 días', 'devuelve 80%'], ['7–20 días', 'devuelve 50%'], ['Menos de 7 días', 'sin devolución'], ['Durante el paquete', 'sin reembolso']],
      paragraphs: [
        'Antes de cancelar: podés indicar un reemplazo o dejar el valor como crédito para otra fecha. Tasa de reserva: 10% en carácter de multa si cancelás después de la confirmación.',
        'No-show: no presentarse implica la pérdida total del valor. Mamut puede alterar el recorrido cuando el clima comprometa la seguridad; el paseo se realiza incluso con lluvia, salvo fuerza mayor.',
      ],
    },
  ],
};

/**
 * Bloco de segurança. Só o `warning` muda de roteiro para roteiro — é o risco
 * específico daquela trilha —, então ele entra por parâmetro.
 */
export function safetyFaq(locale: Locale, warning: string): PatiFaqItem {
  return { type: 'safety', ...SAFETY_COPY[locale], warning };
}

const SAFETY_COPY: Record<Locale, { title: string; lead: string; body: string; footer: string }> = {
  pt: {
    title: 'Segurança',
    lead: 'O mamute protege o bando. Sempre.',
    body: 'Condutores de trekking locais, com experiência de cursos e de anos de andança na Chapada Diamantina. Os protocolos começam antes do passeio, no formulário de consulta que cada participante preenche.',
    footer: 'Em operação usamos radiocomunicadores portáteis e o comunicador bilateral via satélite SPOT X, com botão de S.O.S. para situações extremas.',
  },
  en: {
    title: 'Safety',
    lead: 'The mammoth protects the herd. Always.',
    body: 'Local trekking guides, with experience from formal courses and years of walking the Chapada Diamantina. The protocols start before the tour, in the intake form every participant fills in.',
    footer: 'In operation we carry portable radios and the two-way SPOT X satellite communicator, with an S.O.S. button for extreme situations.',
  },
  es: {
    title: 'Seguridad',
    lead: 'El mamut protege a la manada. Siempre.',
    body: 'Conductores de trekking locales, con experiencia de cursos y de años caminando la Chapada Diamantina. Los protocolos empiezan antes del paseo, en el formulario de consulta que completa cada participante.',
    footer: 'En operación usamos radios portátiles y el comunicador bilateral satelital SPOT X, con botón de S.O.S. para situaciones extremas.',
  },
};
