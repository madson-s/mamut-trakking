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
        'No cartão há acréscimo de 6%, parcelado em até 12 vezes, conforme as taxas do PagSeguro, Mercado Pago e similares.',
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
    {
      type: 'payment',
      title: 'Política de repasse de passeios',
      paragraphs: [
        'Trabalhamos com uma rede de parceiros. Em caso de repasse do passeio para outra operadora, os valores praticados podem variar conforme a quantidade de participantes, o tipo de passeio e a estrutura necessária — podendo ser equivalentes ao valor de balcão, ou ajustados para mais ou para menos.',
        'Ao contratar conosco, você concorda que, havendo repasse, a execução do serviço fica sob responsabilidade da operadora designada. Nossa função é intermediar e garantir o cumprimento do que foi contratado; não nos responsabilizamos por diferenças de preço identificadas depois da contratação.',
      ],
    },
  ],
  en: [
    {
      type: 'payment',
      title: 'Ways to pay',
      paragraphs: [
        'A 50% deposit confirms the booking, by transfer, deposit or boleto. The remaining 50% at check-in in cash, or by deposit up to 2 business days before.',
        'Card payments carry a 6% surcharge and can be split into up to 12 instalments, according to the rates charged by PagSeguro, Mercado Pago and similar providers.',
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
    {
      type: 'payment',
      title: 'Tour transfer policy',
      paragraphs: [
        'We work with a network of partners. If a tour is passed on to another operator, the prices charged may vary with the number of participants, the type of tour and the logistics required — they may match our counter price, or be adjusted up or down.',
        'By booking with us, you agree that where a tour is passed on, delivery of the service becomes the responsibility of the designated operator. Our role is to broker the booking and ensure that what was contracted is delivered; we are not liable for price differences identified after booking.',
      ],
    },
  ],
  es: [
    {
      type: 'payment',
      title: 'Formas de pago',
      paragraphs: [
        'Seña del 50% para confirmar la reserva, por transferencia, depósito o boleto. El 50% restante en el check-in en efectivo, o por depósito hasta 2 días hábiles antes.',
        'Con tarjeta hay un recargo del 6%, en hasta 12 cuotas, según las tasas de PagSeguro, Mercado Pago y similares.',
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
    {
      type: 'payment',
      title: 'Política de traspaso de paseos',
      paragraphs: [
        'Trabajamos con una red de socios. En caso de traspaso del paseo a otra operadora, los valores practicados pueden variar según la cantidad de participantes, el tipo de paseo y la estructura necesaria — pudiendo ser equivalentes al valor de mostrador, o ajustados para más o para menos.',
        'Al contratar con nosotros, aceptás que, habiendo traspaso, la ejecución del servicio queda bajo responsabilidad de la operadora designada. Nuestra función es intermediar y garantizar el cumplimiento de lo contratado; no nos responsabilizamos por diferencias de precio identificadas después de la contratación.',
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

const SAFETY_COPY: Record<
  Locale,
  {
    title: string;
    lead: string;
    body: string;
    footer: string;
    riskLabel: string;
    disclaimer: readonly string[];
    gear: readonly { img: string; alt: string; legenda: string }[];
  }
> = {
  pt: {
    title: 'Segurança',
    lead: 'O mamute protege o bando. Sempre.',
    body: 'Condutores de trekking locais, formados em APH (atendimento pré-hospitalar) e CMC (competências mínimas de condução, pela ABNT), alguns com certificação WAFA — consulte a disponibilidade. Todos levam kit de primeiros socorros para áreas remotas. Os protocolos começam antes do passeio, no formulário de consulta que cada participante preenche.',
    riskLabel: 'Riscos e limitações — leia com atenção',
    disclaimer: [
      'Esta não é uma atividade 100% segura. Mesmo com todos os cuidados, imprevistos e acidentes podem ocorrer — como em praticamente toda atividade de aventura em ambiente natural: animais peçonhentos, quedas com fraturas e escoriações, tempestades, inundações. Quebras mecânicas no transporte também podem atrasar ou alterar o roteiro.',
      'A atividade acontece em área selvagem, onde o resgate pode ser demorado: o socorro pode levar mais de 5 horas para começar, e o custo do resgate é do participante — não está incluso na reserva.',
      'Durante a atividade, siga rigorosamente as orientações da equipe. Levar todos os itens obrigatórios do checklist é indispensável: a falta de qualquer um deles impossibilita a participação.',
    ],
    footer: 'Em operação usamos radiocomunicadores portáteis e o comunicador bilateral via satélite SPOT X, com botão de S.O.S. para situações extremas.',
    gear: [
      { img: '/img/adventures/comum/spot-x.jpg', alt: 'Comunicador via satélite SPOT X', legenda: 'SPOT X via satélite, com botão de S.O.S.' },
      { img: '/img/adventures/comum/radio.jpg', alt: 'Radiocomunicador portátil', legenda: 'Radiocomunicador portátil' },
    ],
  },
  en: {
    title: 'Safety',
    lead: 'The mammoth protects the herd. Always.',
    body: 'Local trekking guides, trained in pre-hospital first aid (APH) and in minimum guiding competencies (CMC, to Brazilian ABNT standards), some with WAFA certification — ask us about availability. All carry a remote-area first-aid kit. The protocols start before the tour, in the intake form every participant fills in.',
    riskLabel: 'Risks and limitations — please read',
    disclaimer: [
      'This is not a 100% safe activity. Even with every precaution, mishaps and accidents can happen — as in virtually any adventure activity in a natural environment: venomous animals, falls causing fractures and grazes, storms, flooding. Mechanical failures in the transport can also delay or alter the itinerary.',
      'The activity takes place in wilderness, where rescue can be slow: help may take more than 5 hours to arrive, and the cost of the rescue falls to the participant — it is not included in the booking.',
      'During the activity, follow the team’s instructions strictly. Carrying every mandatory item on the checklist is essential: missing any one of them makes participation impossible.',
    ],
    footer: 'In operation we carry portable radios and the two-way SPOT X satellite communicator, with an S.O.S. button for extreme situations.',
    gear: [
      { img: '/img/adventures/comum/spot-x.jpg', alt: 'SPOT X satellite communicator', legenda: 'SPOT X satellite communicator, with an S.O.S. button' },
      { img: '/img/adventures/comum/radio.jpg', alt: 'Portable two-way radio', legenda: 'Portable two-way radio' },
    ],
  },
  es: {
    title: 'Seguridad',
    lead: 'El mamut protege a la manada. Siempre.',
    body: 'Conductores de trekking locales, formados en APH (atención prehospitalaria) y CMC (competencias mínimas de conducción, por la ABNT brasileña), algunos con certificación WAFA — consultá la disponibilidad. Todos llevan botiquín de primeros auxilios para áreas remotas. Los protocolos empiezan antes del paseo, en el formulario de consulta que completa cada participante.',
    riskLabel: 'Riesgos y limitaciones — leé con atención',
    disclaimer: [
      'Esta no es una actividad 100% segura. Aun con todos los cuidados, imprevistos y accidentes pueden ocurrir — como en prácticamente toda actividad de aventura en ambiente natural: animales ponzoñosos, caídas con fracturas y escoriaciones, tormentas, inundaciones. Roturas mecánicas en el transporte también pueden atrasar o alterar el recorrido.',
      'La actividad ocurre en área salvaje, donde el rescate puede demorar: el socorro puede tardar más de 5 horas en empezar, y el costo del rescate corre por cuenta del participante — no está incluido en la reserva.',
      'Durante la actividad, seguí rigurosamente las orientaciones del equipo. Llevar todos los ítems obligatorios del checklist es indispensable: la falta de cualquiera de ellos impide la participación.',
    ],
    footer: 'En operación usamos radios portátiles y el comunicador bilateral satelital SPOT X, con botón de S.O.S. para situaciones extremas.',
    gear: [
      { img: '/img/adventures/comum/spot-x.jpg', alt: 'Comunicador satelital SPOT X', legenda: 'SPOT X satelital, con botón de S.O.S.' },
      { img: '/img/adventures/comum/radio.jpg', alt: 'Radio portátil', legenda: 'Radio portátil' },
    ],
  },
};
