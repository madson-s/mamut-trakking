/**
 * As perguntas da página do Vale do Pati em 3 dias, por idioma.
 *
 * Ficam separadas de `pati-3-content.ts` pelo volume: são o maior bloco de
 * texto da página, e o único com regra jurídica dentro (política de
 * cancelamento e termo de responsabilidade).
 *
 * ⚠️ A política de cancelamento cita a deliberação normativa nº 161/1985 da
 * EMBRATUR — norma brasileira. As versões EN e ES são tradução feita aqui e
 * precisam de revisão da operadora antes de valer como termo contratual.
 */

import type { Locale } from '@/lib/site';
import { SITE } from '@/lib/site';
import type { PatiFaqItem } from './PatiFaqList';

export const PATI3_FAQS: Record<Locale, readonly PatiFaqItem[]> = {
  pt: [
    {
      type: 'checklist',
      title: 'Checklist — o que levar',
      intro:
        'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório impossibilita a participação — conferimos na reserva e no check-in.',
      requiredColumns: [
        ['Água (1,5L/pessoa)', 'Roupas leves', 'Boné/chapéu', 'Mochila 35L+', 'Protetor solar', 'Higiene pessoal', 'Mochila de ataque'],
        ['Tênis/bota de caminhada', 'Roupas de banho', 'Lanche/fruta extra', 'Capa de chuva (corpo + mochila)', 'Remédios pessoais', 'Documentos', 'Lanterna de cabeça'],
      ],
      recommendedColumns: [['Meias extras', 'Bastão'], ['Toalha de secagem rápida', 'Power bank']],
      note: 'Não quer carregar peso? Há carregadores pessoais (custo adicional).',
    },
    {
      type: 'included',
      title: 'O que está incluso / não incluso',
      included: ['Guia de Montanha APH e bilíngue', 'Rastreador SPOT X via satélite', 'Transfer Lençóis ↔ Guiné (160km ida/volta)', 'Hospedagem 2 noites', 'Seguro aventura', 'Alimentação completa', 'Kit de primeiros socorros', 'Guarda-volumes durante a atividade', 'Banho antes/após', 'Sala de espera'],
      excluded: ['Qualquer item não listado', 'Transfer Salvador ↔ Lençóis (opcional)', 'Café do 1º dia', 'Bebidas extras', 'Equipamento pessoal', 'Evacuação médica', 'Carregadores/mulas (opcional)', 'Hotéis/refeições antes/após (opcional)', 'Gorjetas'],
    },
    {
      type: 'safety',
      title: 'Segurança detalhada e riscos',
      lead: 'O mamute protege o bando. Sempre.',
      body: 'Todos os guias são condutores locais com certificação APH (Atendimento Pré-Hospitalar) e CMC (Competências Mínimas de Condução) conforme ABNT; alguns com WAFA. Todos portam kit de primeiros socorros para áreas remotas. Em operação: radiocomunicadores VHF/UHF + comunicador satélite SPOT X com S.O.S.',
      warning: 'Atividades em ambiente natural envolvem riscos inerentes — terreno irregular, animais peçonhentos, clima. O Vale do Pati é área remota: um resgate pode levar mais de 5 horas para iniciar. Evacuação médica NÃO está inclusa. Há estrutura limitada de remoção por mula (limite 110kg) — consulte o atendimento.',
      footer: 'Seguir as orientações dos guias e portar os itens obrigatórios do checklist é condição para participar.',
    },
    {
      type: 'payment',
      title: 'Formas de pagamento',
      paragraphs: [
        'Sinal de 50% para confirmar a reserva, via transferência, depósito ou boleto. Os 50% restantes no check-in em dinheiro (ou depósito até 2 dias úteis antes).',
        'Envie o comprovante com: data confirmada, nome completo e CPF de cada participante.',
        'Cartão: +5%, em até 12x (PagSeguro). Internacional: consulte o atendimento.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Política de cancelamento',
      intro: 'Cancelamento pelo passageiro segue a deliberação normativa nº 161/1985 da EMBRATUR:',
      refunds: [['30+ dias antes', 'devolve 90%'], ['21–29 dias', 'devolve 80%'], ['7–20 dias', 'devolve 50%'], ['Menos de 7 dias', 'sem devolução'], ['Durante o pacote', 'sem reembolso']],
      paragraphs: [
        'Antes de cancelar: você pode indicar um substituto ou deixar o valor em crédito. Taxa de reserva: 10% em caráter de multa se cancelar após a confirmação.',
        'No-show: não comparecer implica perda total do valor. A Mamut pode alterar o roteiro quando o clima comprometer a segurança; a atividade acontece mesmo em dia de chuva, salvo força maior.',
      ],
    },
    {
      type: 'technical',
      title: 'Ficha técnica completa e documentos',
      facts: [['Categoria', 'Trekking com pernoite'], ['Origem', 'Lençóis'], ['Percurso de carro', '160 km'], ['Idade mínima', '18 anos (menores c/ responsável)']],
      requirements: ['Condicionamento para subidas/descidas em terreno acidentado', 'Atravessar rios', 'Caminhar longas distâncias por vários dias', 'Informar restrições alimentares e necessidade de quarto privativo na reserva', 'Reservas confirmadas não têm reajuste'],
      documents: [['Termo de Responsabilidade (PDF)', SITE.whatsappUrl], ['Classificação de Nível das Atividades', SITE.whatsappUrl]],
    },
  ],

  en: [
    {
      type: 'checklist',
      title: 'Checklist — what to bring',
      intro:
        'Items marked with * are mandatory. Missing any mandatory item makes participation impossible — we check at booking and at check-in.',
      requiredColumns: [
        ['Water (1.5 L/person)', 'Light clothing', 'Cap/hat', 'Backpack 35 L+', 'Sunscreen', 'Toiletries', 'Day pack'],
        ['Hiking shoes/boots', 'Swimwear', 'Extra snack/fruit', 'Rain gear (body + backpack)', 'Personal medication', 'Documents', 'Head torch'],
      ],
      recommendedColumns: [['Spare socks', 'Trekking pole'], ['Quick-dry towel', 'Power bank']],
      note: 'Rather not carry the weight? Personal porters are available (extra cost).',
    },
    {
      type: 'included',
      title: 'What is included / not included',
      included: ['APH-certified bilingual mountain guide', 'SPOT X satellite tracker', 'Transfer Lençóis ↔ Guiné (160 km round trip)', 'Lodging for 2 nights', 'Adventure insurance', 'All main meals', 'First-aid kit', 'Luggage storage during the activity', 'Shower before/after', 'Waiting room'],
      excluded: ['Anything not listed above', 'Transfer Salvador ↔ Lençóis (optional)', 'Breakfast on day 1', 'Extra drinks', 'Personal equipment', 'Medical evacuation', 'Porters/mules (optional)', 'Hotels/meals before or after (optional)', 'Tips'],
    },
    {
      type: 'safety',
      title: 'Safety in detail, and the risks',
      lead: 'The mammoth protects the herd. Always.',
      body: 'All guides are local, certified in APH (pre-hospital care) and CMC (minimum guiding competencies) under the Brazilian ABNT standard; some hold WAFA. All carry a first-aid kit for remote areas. In operation: VHF/UHF radios + a SPOT X satellite communicator with S.O.S.',
      warning: 'Activities in a natural environment carry inherent risks — uneven terrain, venomous animals, weather. The Pati Valley is a remote area: a rescue can take more than 5 hours to begin. Medical evacuation is NOT included. There is limited capacity for evacuation by mule (110 kg limit) — ask our team.',
      footer: 'Following the guides’ instructions and carrying the mandatory checklist items are conditions for taking part.',
    },
    {
      type: 'payment',
      title: 'Ways to pay',
      paragraphs: [
        'A 50% deposit confirms the booking, by transfer, deposit or boleto. The remaining 50% at check-in in cash (or by deposit up to 2 business days before).',
        'Send the receipt with: the confirmed date, and the full name and ID number of each participant.',
        'Card: +5%, up to 12 instalments (PagSeguro). International: ask our team.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Cancellation policy',
      intro: 'Cancellation by the traveller follows Brazilian EMBRATUR normative resolution no. 161/1985:',
      refunds: [['30+ days before', '90% refunded'], ['21–29 days', '80% refunded'], ['7–20 days', '50% refunded'], ['Fewer than 7 days', 'no refund'], ['During the package', 'no refund']],
      paragraphs: [
        'Before cancelling: you can name a replacement or keep the amount as credit. Booking fee: 10% as a penalty if you cancel after confirmation.',
        'No-show: failing to appear means losing the full amount. Mamut may change the itinerary when the weather compromises safety; the activity runs even on a rainy day, except in cases of force majeure.',
      ],
    },
    {
      type: 'technical',
      title: 'Full technical sheet and documents',
      facts: [['Category', 'Trekking with overnight stays'], ['Starts in', 'Lençóis'], ['Road section', '160 km'], ['Minimum age', '18 (minors with a legal guardian)']],
      requirements: ['Fitness for ascents and descents on rough terrain', 'Crossing rivers', 'Walking long distances over several days', 'Declaring dietary restrictions and the need for a private room at booking', 'Confirmed bookings are not subject to price adjustments'],
      documents: [['Liability waiver (PDF)', SITE.whatsappUrl], ['Activity difficulty classification', SITE.whatsappUrl]],
    },
  ],

  es: [
    {
      type: 'checklist',
      title: 'Checklist — qué llevar',
      intro:
        'Los ítems marcados con * son obligatorios. La falta de cualquier obligatorio impide la participación — lo verificamos en la reserva y en el check-in.',
      requiredColumns: [
        ['Agua (1,5 L/persona)', 'Ropa liviana', 'Gorra/sombrero', 'Mochila 35 L+', 'Protector solar', 'Higiene personal', 'Mochila de ataque'],
        ['Zapatillas/botas de trekking', 'Ropa de baño', 'Merienda/fruta extra', 'Piloto de lluvia (cuerpo + mochila)', 'Medicamentos personales', 'Documentos', 'Linterna frontal'],
      ],
      recommendedColumns: [['Medias extra', 'Bastón'], ['Toalla de secado rápido', 'Power bank']],
      note: '¿No querés cargar peso? Hay porteadores personales (costo adicional).',
    },
    {
      type: 'included',
      title: 'Qué está incluido / no incluido',
      included: ['Guía de montaña con APH y bilingüe', 'Rastreador satelital SPOT X', 'Transfer Lençóis ↔ Guiné (160 km ida y vuelta)', 'Alojamiento 2 noches', 'Seguro de aventura', 'Alimentación completa', 'Kit de primeros auxilios', 'Guardaequipaje durante la actividad', 'Ducha antes/después', 'Sala de espera'],
      excluded: ['Cualquier ítem no listado', 'Transfer Salvador ↔ Lençóis (opcional)', 'Desayuno del 1º día', 'Bebidas extra', 'Equipo personal', 'Evacuación médica', 'Porteadores/mulas (opcional)', 'Hoteles/comidas antes o después (opcional)', 'Propinas'],
    },
    {
      type: 'safety',
      title: 'Seguridad en detalle y riesgos',
      lead: 'El mamut protege a la manada. Siempre.',
      body: 'Todos los guías son conductores locales con certificación APH (Atención Prehospitalaria) y CMC (Competencias Mínimas de Conducción) según la norma brasileña ABNT; algunos con WAFA. Todos llevan kit de primeros auxilios para áreas remotas. En operación: radios VHF/UHF + comunicador satelital SPOT X con S.O.S.',
      warning: 'Las actividades en ambiente natural implican riesgos inherentes — terreno irregular, animales ponzoñosos, clima. El Valle del Pati es área remota: un rescate puede tardar más de 5 horas en iniciarse. La evacuación médica NO está incluida. Hay estructura limitada de traslado en mula (límite 110 kg) — consultá con atención.',
      footer: 'Seguir las indicaciones de los guías y llevar los ítems obligatorios del checklist es condición para participar.',
    },
    {
      type: 'payment',
      title: 'Formas de pago',
      paragraphs: [
        'Seña del 50% para confirmar la reserva, por transferencia, depósito o boleto. El 50% restante en el check-in en efectivo (o por depósito hasta 2 días hábiles antes).',
        'Enviá el comprobante con: fecha confirmada, nombre completo y documento de cada participante.',
        'Tarjeta: +5%, hasta en 12 cuotas (PagSeguro). Internacional: consultá con atención.',
      ],
    },
    {
      type: 'cancellation',
      title: 'Política de cancelación',
      intro: 'La cancelación por parte del pasajero sigue la deliberación normativa nº 161/1985 de EMBRATUR (Brasil):',
      refunds: [['30+ días antes', 'devuelve 90%'], ['21–29 días', 'devuelve 80%'], ['7–20 días', 'devuelve 50%'], ['Menos de 7 días', 'sin devolución'], ['Durante el paquete', 'sin reembolso']],
      paragraphs: [
        'Antes de cancelar: podés indicar un reemplazo o dejar el valor como crédito. Tasa de reserva: 10% en carácter de multa si cancelás después de la confirmación.',
        'No-show: no presentarse implica la pérdida total del valor. Mamut puede alterar el recorrido cuando el clima comprometa la seguridad; la actividad se realiza incluso en día de lluvia, salvo fuerza mayor.',
      ],
    },
    {
      type: 'technical',
      title: 'Ficha técnica completa y documentos',
      facts: [['Categoría', 'Trekking con pernocte'], ['Origen', 'Lençóis'], ['Tramo en auto', '160 km'], ['Edad mínima', '18 años (menores con responsable)']],
      requirements: ['Condición física para subidas y bajadas en terreno accidentado', 'Cruzar ríos', 'Caminar largas distancias durante varios días', 'Informar restricciones alimentarias y necesidad de habitación privada en la reserva', 'Las reservas confirmadas no sufren reajuste'],
      documents: [['Término de Responsabilidad (PDF)', SITE.whatsappUrl], ['Clasificación de Nivel de las Actividades', SITE.whatsappUrl]],
    },
  ],
};
