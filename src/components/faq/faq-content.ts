import type { Locale } from '@/lib/site';

/**
 * Perguntas frequentes — a página-hub de dúvidas.
 *
 * Este arquivo guarda só a moldura da página (títulos, chamadas, metadados).
 * As respostas NÃO moram aqui: vêm das fontes que já respondem a essas dúvidas
 * no resto do site, para não haver duas versões da mesma regra —
 *   • "Antes de vir": as perguntas de Informações gerais (`DICAS_CONTENT`)
 *   • "Reserva e pagamento": pagamento, cancelamento e repasse (`DAY_TOUR_LEGAL`)
 *   • "Segurança": o bloco comum de segurança e riscos (`safetyFaq`)
 * Uma mudança de política feita lá aparece aqui sem retrabalho.
 *
 * A página equivalente em mamut.agency (/perguntas-frequentes) só tinha o
 * título e a frase "Não encontrou o que procura?…" — sem perguntas. Essa
 * frase volta aqui, no fechamento.
 */
export type FaqContent = {
  meta: { title: string; description: string; canonical: string; ogTitle: string; ogDescription: string };
  titulo: { antes: string; destaque: string };
  lead: string;
  secoes: { antes: string; reserva: string; seguranca: string };
  /** Leads curtos sob o título de cada seção. */
  leads: { antes: string; reserva: string; seguranca: string };
  /**
   * O bloco de segurança mostra em destaque o risco próprio da trilha. Aqui,
   * fora de um roteiro, o destaque aponta para onde esse risco está descrito.
   */
  avisoSeguranca: string;
  fechamento: { titulo: string; texto: string; whatsapp: string; contato: string; contatoHref: string };
};

export const FAQ_HREF: Record<Locale, string> = {
  pt: '/pt/perguntas-frequentes',
  en: '/en/faq',
  es: '/es/preguntas-frecuentes',
};

export const FAQ_CONTENT: Record<Locale, FaqContent> = {
  pt: {
    meta: {
      title: 'Perguntas frequentes',
      description:
        'Dúvidas sobre viajar para a Chapada Diamantina com a Mamut Trekking: quantos dias reservar, melhor época, preparo, pagamento, cancelamento e segurança.',
      canonical: FAQ_HREF.pt,
      ogTitle: 'Perguntas frequentes · Mamut Trekking',
      ogDescription: 'O que perguntam antes de vir para a Chapada — e as regras da reserva.',
    },
    titulo: { antes: 'Perguntas', destaque: 'frequentes.' },
    lead: 'Antes de vir, na hora de reservar e durante a trilha. Se a sua dúvida não estiver aqui, a gente responde pelo WhatsApp.',
    secoes: { antes: 'Antes de vir', reserva: 'Reserva e pagamento', seguranca: 'Segurança' },
    leads: {
      antes: 'Cidade, tempo de viagem, preparo e a melhor época para cada tipo de passeio.',
      reserva: 'Como pagar, o que acontece se precisar cancelar e como funcionam os repasses.',
      seguranca: 'Quem conduz, que equipamento levamos e o que nenhuma operadora consegue eliminar.',
    },
    avisoSeguranca:
      'Cada trilha tem riscos próprios — trecho técnico, travessia de rio, exposição ao sol. Eles estão descritos na página de cada roteiro, no mesmo bloco de segurança.',
    fechamento: {
      titulo: 'Não encontrou o que procura?',
      texto: 'Entre em contato com o nosso atendimento. Respondemos em português, inglês e espanhol.',
      whatsapp: 'Falar no WhatsApp',
      contato: 'Outras formas de contato',
      contatoHref: '/pt/contato',
    },
  },
  en: {
    meta: {
      title: 'Frequently asked questions',
      description:
        'Questions about travelling to Chapada Diamantina with Mamut Trekking: how many days to plan, best season, preparation, payment, cancellation and safety.',
      canonical: FAQ_HREF.en,
      ogTitle: 'FAQ · Mamut Trekking',
      ogDescription: 'What people ask before coming to Chapada — and the booking rules.',
    },
    titulo: { antes: 'Frequently asked', destaque: 'questions.' },
    lead: 'Before you come, when you book and out on the trail. If your question is not here, we answer on WhatsApp.',
    secoes: { antes: 'Before you come', reserva: 'Booking and payment', seguranca: 'Safety' },
    leads: {
      antes: 'The town, how long to stay, how to prepare and the best season for each kind of trip.',
      reserva: 'How to pay, what happens if you need to cancel and how tour transfers work.',
      seguranca: 'Who leads, what gear we carry and what no operator can rule out.',
    },
    avisoSeguranca:
      'Every trail has its own risks — technical stretches, river crossings, sun exposure. They are described on each itinerary page, in the same safety block.',
    fechamento: {
      titulo: 'Didn’t find what you were looking for?',
      texto: 'Get in touch with our team. We answer in Portuguese, English and Spanish.',
      whatsapp: 'Chat on WhatsApp',
      contato: 'Other ways to reach us',
      contatoHref: '/en/contact',
    },
  },
  es: {
    meta: {
      title: 'Preguntas frecuentes',
      description:
        'Dudas sobre viajar a la Chapada Diamantina con Mamut Trekking: cuántos días reservar, mejor época, preparación, pago, cancelación y seguridad.',
      canonical: FAQ_HREF.es,
      ogTitle: 'Preguntas frecuentes · Mamut Trekking',
      ogDescription: 'Lo que preguntan antes de venir a la Chapada — y las reglas de la reserva.',
    },
    titulo: { antes: 'Preguntas', destaque: 'frecuentes.' },
    lead: 'Antes de venir, al reservar y durante el sendero. Si tu duda no está aquí, te respondemos por WhatsApp.',
    secoes: { antes: 'Antes de venir', reserva: 'Reserva y pago', seguranca: 'Seguridad' },
    leads: {
      antes: 'La ciudad, cuánto tiempo quedarse, cómo prepararse y la mejor época para cada tipo de paseo.',
      reserva: 'Cómo pagar, qué pasa si necesitas cancelar y cómo funcionan los traspasos.',
      seguranca: 'Quién conduce, qué equipo llevamos y lo que ninguna operadora puede eliminar.',
    },
    avisoSeguranca:
      'Cada sendero tiene riesgos propios — tramos técnicos, cruces de río, exposición al sol. Están descritos en la página de cada itinerario, en el mismo bloque de seguridad.',
    fechamento: {
      titulo: '¿No encontraste lo que buscabas?',
      texto: 'Ponte en contacto con nuestro equipo. Respondemos en portugués, inglés y español.',
      whatsapp: 'Hablar por WhatsApp',
      contato: 'Otras formas de contacto',
      contatoHref: '/es/contacto',
    },
  },
};
