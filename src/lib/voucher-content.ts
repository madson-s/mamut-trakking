/**
 * Conteúdo do voucher por idioma: rótulos dos campos, texto legal fixo e as
 * listas que servem de ponto de partida (includes, checklist, status).
 *
 * PT e EN são transcrições dos vouchers-modelo da operadora
 * (Andreea Ciobotaru · 05-06/02/2026 e Giulia Marcone · Vale do Pati 3 Days).
 * Nos dois modelos o documento traz **os dois** blocos legais: primeiro o
 * idioma do cliente, depois o outro — é o que `LEGAL_ORDER` reproduz.
 *
 * ⚠️ ES é tradução feita neste repositório, sem voucher-modelo de referência.
 * Os rótulos são seguros, mas o texto legal (política de cancelamento e termo
 * de responsabilidade) precisa de revisão da operadora antes de ir para
 * cliente. Enquanto isso, o voucher em ES também carrega o bloco em PT, que é
 * o texto que cita a deliberação da Embratur.
 */

export const VOUCHER_LOCALES = ['pt', 'en', 'es'] as const;
export type VoucherLocale = (typeof VOUCHER_LOCALES)[number];

export const VOUCHER_LOCALE_NAMES: Record<VoucherLocale, { short: string; name: string }> = {
  pt: { short: 'PT', name: 'Português' },
  en: { short: 'EN', name: 'English' },
  es: { short: 'ES', name: 'Español' },
};

/** Ordem dos blocos legais: idioma do cliente primeiro, depois o complementar. */
export const LEGAL_ORDER: Record<VoucherLocale, VoucherLocale[]> = {
  pt: ['pt', 'en'],
  en: ['en', 'pt'],
  es: ['es', 'pt'],
};

/* ------------------------------------------------------------------ */
/* Rótulos da página 1                                                */
/* ------------------------------------------------------------------ */

export type VoucherLabels = {
  voucher: string;
  /** Cabeçalhos da tabela de clientes — ela abre a página 1, sem legenda acima. */
  participantName: string;
  participantAge: string;
  participantEmail: string;
  paymentDate: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  /** Linha "+ N PESSOAS" quando o grupo é maior do que a lista nominal. */
  extraPeople: (count: number) => string;
  serviceDescription: string;
  total: string;
  status: string;
  includes: string;
  notIncludes: string;
  operation: string;
  paymentData: string;
  date: string;
  price: string;
  paymentForm: string;
  emergencyData: string;
  emergencyContact: string;
  checklist: string;
  /** Assinatura da marca no rodapé. */
  tagline: string;
  /** Placeholder vermelho de campo obrigatório em branco. */
  missing: string;
};

export const LABELS: Record<VoucherLocale, VoucherLabels> = {
  pt: {
    voucher: 'VOUCHER',
    participantName: 'Cliente',
    participantAge: 'Idade',
    participantEmail: 'E-mail',
    paymentDate: 'Data de Pagamento:',
    phone: 'Telefone:',
    checkIn: 'Check-in:',
    checkOut: 'Checkout:',
    extraPeople: (count) => `+ ${count} PESSOAS`,
    serviceDescription: 'Descrição do Serviço',
    total: 'Valor Total',
    status: 'Status',
    includes: 'Inclui:',
    notIncludes: 'Não Inclui:',
    operation: 'Operação:',
    paymentData: 'Dados de Pagamento',
    date: 'Data',
    price: 'Valor',
    paymentForm: 'Forma de Pagamento',
    emergencyData: 'Dados de Emergência',
    emergencyContact: 'Contato em caso de emergência',
    checklist: 'Checklist Geral:',
    tagline: 'Gigantes por Natureza',
    missing: 'FALTANDO',
  },
  en: {
    voucher: 'VOUCHER',
    participantName: 'Participant',
    participantAge: 'Age',
    participantEmail: 'E-mail',
    paymentDate: 'Payment Date:',
    phone: 'Phone:',
    checkIn: 'Check-in:',
    checkOut: 'Checkout:',
    extraPeople: (count) => `+ ${count} PEOPLE`,
    serviceDescription: 'Service Description',
    total: 'Total',
    status: 'Status',
    includes: 'Includes:',
    notIncludes: 'Not Includes:',
    operation: 'Operation:',
    paymentData: 'Payment Data',
    date: 'Date',
    price: 'Price',
    paymentForm: 'Payment Form',
    emergencyData: 'Emergency Data',
    emergencyContact: 'Emergency contact',
    checklist: 'General Checklist:',
    tagline: 'Giants by Nature',
    missing: 'MISSING',
  },
  es: {
    voucher: 'VOUCHER',
    participantName: 'Cliente',
    participantAge: 'Edad',
    participantEmail: 'Correo',
    paymentDate: 'Fecha de Pago:',
    phone: 'Teléfono:',
    checkIn: 'Check-in:',
    checkOut: 'Checkout:',
    extraPeople: (count) => `+ ${count} PERSONAS`,
    serviceDescription: 'Descripción del Servicio',
    total: 'Valor Total',
    status: 'Estado',
    includes: 'Incluye:',
    notIncludes: 'No Incluye:',
    operation: 'Operación:',
    paymentData: 'Datos de Pago',
    date: 'Fecha',
    price: 'Valor',
    paymentForm: 'Forma de Pago',
    emergencyData: 'Datos de Emergencia',
    emergencyContact: 'Contacto en caso de emergencia',
    checklist: 'Checklist General:',
    tagline: 'Gigantes por Naturaleza',
    missing: 'FALTA',
  },
};

/* ------------------------------------------------------------------ */
/* Conteúdo editável — ponto de partida por idioma                    */
/* ------------------------------------------------------------------ */

export type VoucherContent = {
  includes: string[];
  notIncludes: string[];
  operation: string;
  checklist: string[];
  /** Sugestões do campo Status dos serviços (datalist). */
  serviceStatus: string[];
  /** Sugestões de forma/status de pagamento (datalist). */
  paymentStatus: string[];
};

export const CONTENT: Record<VoucherLocale, VoucherContent> = {
  pt: {
    includes: [
      'SERVIÇO EM GRUPO',
      'Taxas de acesso',
      'Todos os transfers',
      'Seguro aventura pessoal',
      'Guias locais',
    ],
    notIncludes: [
      'Tudo que não estiver listado na aba Inclui',
      'Hospedagem antes ou após a atividade e em dias não listados',
      'Evacuação médica',
      'Carregador pessoal',
      'Equipamento pessoal',
    ],
    operation: 'Mamut Trekking.',
    checklist: [
      'Água (1,5lt por pessoa)',
      'Tênis/Bota para caminhada',
      'Meias extras',
      'Duas roupas leves para caminhar',
      'Roupa de banho',
      'Roupa de dormir (pode fazer até 15°C)',
      'Boné/Chapéu',
      'Protetor solar',
      'Remédios pessoais',
      'Documentos de identificação',
      'Mochila para pertences 40l+',
      'Mochila de ataque 10l+',
      'Repelente',
      'Toalha fina',
      'Bastão de caminhada (opcional)',
      'Capa de chuva',
      'Lanche ou fruta para comer fora da refeição',
      'Dinheiro em espécie',
      'Lanterna',
    ],
    serviceStatus: ['RESERVADO', 'NÃO RESERVADO'],
    paymentStatus: ['PAGO', 'PENDENTE', 'RESERVADO', 'PIX', 'Dinheiro'],
  },
  en: {
    includes: [
      'Transfers in-out (from Lençóis)',
      'Local Guide Speaking English',
      'All main meals',
      'Entrance fees',
    ],
    notIncludes: [
      'Everything is not on Includes',
      'Medical Evacuation or similar',
      'Personal equipment (clothes, hygien etc)',
      'Hosting before/after trekking',
      'Tips',
    ],
    operation: 'Mamut Trekking.',
    checklist: [
      'Water (1,5lt per person)',
      'Tenis/boot to hike',
      'Extra socks',
      'Two light clothes to hike (longsleeves)',
      'Swimwear',
      'Sleepwear (can get as low as 15°C)',
      'Hat/Cap',
      'Sunscreen',
      'Personal medication',
      'Indetification Documents',
      'Backpack 40L+',
      'Atack Bag 10l+',
      'Repelent',
      'Thin towel',
      'Hand Stick (optional)',
      'Raincoat',
      'Snacks or fruits to eat outside of meal times',
      'Cash for extra drinks or services',
      'Headlamp',
    ],
    serviceStatus: ['BOOKED', 'NOT BOOKED'],
    paymentStatus: ['DONE', 'PENDING', 'BOOKED', 'WISE'],
  },
  es: {
    includes: [
      'SERVICIO EN GRUPO',
      'Tasas de acceso',
      'Todos los traslados',
      'Seguro de aventura personal',
      'Guías locales',
    ],
    notIncludes: [
      'Todo lo que no esté listado en Incluye',
      'Alojamiento antes o después de la actividad y en días no listados',
      'Evacuación médica',
      'Portador personal',
      'Equipo personal',
    ],
    operation: 'Mamut Trekking.',
    checklist: [
      'Agua (1,5lt por persona)',
      'Zapatillas/Botas para caminar',
      'Calcetines extra',
      'Dos conjuntos livianos para caminar',
      'Traje de baño',
      'Ropa para dormir (puede bajar a 15°C)',
      'Gorra/Sombrero',
      'Protector solar',
      'Medicamentos personales',
      'Documentos de identificación',
      'Mochila para pertenencias 40l+',
      'Mochila de ataque 10l+',
      'Repelente',
      'Toalla fina',
      'Bastón de caminata (opcional)',
      'Impermeable',
      'Snacks o frutas para comer fuera de las comidas',
      'Efectivo para gastos extra',
      'Linterna frontal',
    ],
    serviceStatus: ['RESERVADO', 'NO RESERVADO'],
    paymentStatus: ['PAGADO', 'PENDIENTE', 'RESERVADO', 'Efectivo'],
  },
};

/**
 * Mensagem pronta do botão "Abrir WhatsApp" — segue o idioma do voucher, já
 * que é o idioma do cliente. Não vai no PDF.
 */
export const WHATSAPP_MESSAGE: Record<
  VoucherLocale,
  (args: { name: string; voucherNumber: string }) => string
> = {
  pt: ({ name, voucherNumber }) =>
    `Olá${name ? ` ${name}` : ''}! Segue o seu voucher da Mamut Trekking${
      voucherNumber ? ` (nº ${voucherNumber})` : ''
    }. Qualquer dúvida, estamos à disposição.`,
  en: ({ name, voucherNumber }) =>
    `Hello${name ? ` ${name}` : ''}! Here is your Mamut Trekking voucher${
      voucherNumber ? ` (no. ${voucherNumber})` : ''
    }. If you have any questions, we're here to help.`,
  es: ({ name, voucherNumber }) =>
    `¡Hola${name ? ` ${name}` : ''}! Aquí está su voucher de Mamut Trekking${
      voucherNumber ? ` (nº ${voucherNumber})` : ''
    }. Cualquier duda, estamos a disposición.`,
};

/* ------------------------------------------------------------------ */
/* Texto legal fixo (páginas 2–4)                                     */
/* ------------------------------------------------------------------ */

export type LegalSection = {
  title: string;
  /** Subtítulo centralizado (abaixo do título). */
  subtitle?: string;
  /** Subtítulo alinhado à esquerda. */
  subtitleLeft?: string;
  paragraphs: string[];
};

export type VoucherLegal = {
  cancellation: LegalSection;
  responsibility: LegalSection;
  /** Bloco de seguro — só existe no modelo em português. */
  insurance?: LegalSection;
  /** "Sincerely, {nome}." ao fim do termo. */
  sincerely: (signatory: string) => string;
  signatureLine: string;
  operatorSignatureLine?: string;
  /** Intro de "Additional Information" (página 1). */
  additionalInfo: { title: string; body: string };
};

export const LEGAL: Record<VoucherLocale, VoucherLegal> = {
  en: {
    cancellation: {
      title: 'Cancellation Policy',
      paragraphs: [
        'Cancellation Conditions: In the event of passenger-initiated cancellation, in accordance with Embratur Normative Deliberation No. 161 of August 9, 1985, MAMUT TREKKING will make refunds according to the conditions below:',
        'We reserve the right to change the planned itinerary whenever weather conditions are unfavorable for the safety of participants.',
        'There will be no cancellation due to bad weather, and the tour will be conducted even in the case of rain or cloudy weather, except in the event of force majeure.',
        'In the case of cancellation by the consumer, refunds will be made according to Embratur Normative Deliberation No. 161 of August 9, 1985, under the following conditions:',
        'The customer can provide a substitute.',
        'The customer can keep the amount as credit to participate on another date.',
        'If neither of the above options is viable, the following percentage deductions will be applied to the total paid:',
        'Cancellation with 30 days or more in advance: 90% of the total amount paid.',
        'Cancellation with 21 to 29 days in advance: 80% of the total amount paid.',
        'Cancellation with 7 to 20 days in advance: 50% of the total amount paid.',
        'Cancellation with less than 7 days in advance: No refund.',
        'Cancellations during packages: No reimbursement.',
        'Change in Itinerary: Verify with the agency the conditions.',
        'Participation and Reservation Fee: Once the reservation is confirmed, a penalty of 10% of the value of this itinerary will be charged in the event of a no-show. No-Show is defined as not showing up on the date, time, and location specified for boarding, resulting in the total loss of the amount paid. Passengers who, of their own free will, disengage from the group during the trip or change the contracted accommodation will assume any and all expenses resulting from this decision, with no right to reimbursement.',
        'No-Show: Failure to appear on the date, time, and location specified for boarding will be considered a no-show, resulting in the total loss of the amount paid. Passengers who, of their own free will, disengage from the group during the trip or change the contracted accommodation will assume any and all expenses resulting from this decision, with no right to reimbursement.',
      ],
    },
    responsibility: {
      title: 'RESPONSABILITY TERM',
      subtitle: 'MAMUT TREKKING CHAPADA DIAMANTINA',
      paragraphs: [
        "Your safety and enjoyment are our priorities. In the vast majority of nature adventure activities, there's an element of risk (venomous animals, falls, storms, floods, accidents...). The trip you've chosen takes place in a wilderness area where rescue procedures can be time-consuming (taking many hours). Mechanical failures of the transport vehicle may delay or alter the trip. Hiking on trails and mountain walks can be dangerous, even though we adhere to national ecotourism standards and have validated internal protocols. If you don't feel comfortable participating knowing this, you're free to withdraw. We're here to ensure your safety and to ensure you're fully aware of the type of activity you're choosing. Throughout the trip, please follow the recommendations of the Mamut Trekking guides and operators, who will provide all safety instructions. We reserve the right to cancel or change the trip depending on road conditions, weather, or any other factor that may compromise the safety of visitors. Remember, you're part of a unique type of tourism where the \"team spirit\" is essential. It's a tourism without stardom, without spotlights, where only you and your group matter.",
        'I, __________________________________________________ declare for all purposes that I am participating on the date below in a trip in a wilderness environment and potentially dangerous, and I am aware of the risks involved. I also declare that I am in good health and able to participate in all activities of the tour. I release Mamut Trekking from any responsibilities for any damages to my integrity or personal belongings during the trip.',
      ],
    },
    sincerely: (signatory) => `Sincerely, ${signatory}.`,
    signatureLine:
      'Signature:_____________ Place:______________ Date:_____________ Mamut Signature:__________________',
    additionalInfo: {
      title: 'Saiba todas informações sobre seu serviço (Additional Information)',
      body: 'We wish to share our policies, ensure complete transparency and provide the best experience to all our valued customers.',
    },
  },

  pt: {
    cancellation: {
      title: 'Política de Cancelamento',
      subtitleLeft: 'Condições de Cancelamento:',
      paragraphs: [
        'Nós reservamos o direito de mudarmos o roteiro previsto, sempre que a condição do tempo não for favorável à segurança dos participantes.',
        'Não haverá cancelamento por mau tempo, de forma que o passeio será realizado mesmo com chuva e/ou tempo nublado, salvo em caso de força maior.',
        'Em caso de cancelamento por parte do consumidor haverá devolução conforme deliberação normativa nº 161, de 9 de agosto de 1985 da Embratur, nas condições abaixo:',
        'O cliente providenciar substituto',
        'O cliente poderá deixar o valor em crédito, para participar em outra data.',
        'Não sendo viável a aplicação das hipóteses anteriores, serão aplicados os seguintes percentuais sobre o valor pago:',
        'Cancelamento com 30 dias de antecedência: 90% do total pago.',
        'Cancelamento com 21 a 29 dias de antecedência: 80% do total pago.',
        'Cancelamento de 7 a 20 dias de antecedência: 50% do total pago.',
        'Cancelamento com menos de 7 dias de antecedência: Sem devolução.',
        'Cancelamentos durante pacotes: Sem reembolso.',
        '>>Alteração de roteiro: conferir com a agência as condições. <<',
        'Taxa de participação e reserva: Uma vez confirmada à reserva, é cobrado 10% do valor referente a este roteiro em caráter de multa caso haja cancelamento No-Show: O não comparecimento na data, hora e local de apresentação determinados para o embarque será considerado no-show, implicando na perda total do valor pago. O passageiro que, por livre e espontânea vontade, se desligar do grupo durante a viagem ou trocar a hospedagem contratada, assumirá toda e qualquer despesa decorrente dessa atitude, sem o direito a reembolso.',
      ],
    },
    responsibility: {
      title: 'TERMO DE RESPONSABILIDADE MAMUT TREKKING CHAPADA DIAMANTINA',
      paragraphs: [
        'Sua segurança e diversão são nossas prioridades. Na grande maioria das atividades de aventura na natureza existe um elemento de risco (animais peçonhentos, quedas, tempestades, inundações, acidentes...). A viagem de sua escolha acontece em um local selvagem, onde todos os procedimentos de resgate são demorados (podem levar muitas horas). Quebras mecânicas do veículo de transporte podem atrasar ou alterar a viagem. Passeios nas trilhas e caminhadas em montanhas podem ser perigoso, mesmo que seguimos normas nacionais do ecoturismo e temos protocolos internos validados. Se você não se sentir muito confortável em participar sabendo disto, pode desistir fique à vontade. Estamos aqui para garantir sua segurança, como também para que você tenha total consciência do tipo de atividade que está optando. Durante toda a viagem siga a recomendação dos guias e operacional da Mamut Trekking, que vão dar todas as orientações sobre os procedimentos de segurança. Reservamos o direito de cancelar ou alterar a viagem dependendo das condições da estrada, do clima ou de qualquer outro fator que possa comprometer a segurança dos visitantes. Lembre-se que você está inserido em um tipo diferenciado de turismo, no qual o "espírito de equipe" é fundamental. Um turismo sem estrelismo, sem holofotes, onde só você e seu grupo importam.',
      ],
    },
    insurance: {
      title: 'Seguro Aventura:',
      paragraphs: [
        'Está incluso nos passeios o seguro viagem ROCA Day Use',
        'MA (Morte Acidental) ou IPA (Invalidez Permanente) - R$ 30.000,00DMH - R$ 3.000,00 para casos de acidentes que envolvam invalidez ou óbito.',
      ],
    },
    sincerely: (signatory) => `Atenciosamente, ${signatory}.`,
    signatureLine: 'Assinatura:_________________ Local:______________ Data:_________________',
    operatorSignatureLine: 'Assinatura Operadora:___________________',
    additionalInfo: {
      title: 'Saiba todas informações sobre seu serviço (Additional Information)',
      body: 'Desejamos compartilhar nossas políticas, visando assegurar total transparência e proporcionar a melhor experiência a todos os nossos estimados clientes.',
    },
  },

  // ⚠️ Tradução deste repositório — revisar com a operadora (ver topo do arquivo).
  es: {
    cancellation: {
      title: 'Política de Cancelación',
      subtitleLeft: 'Condiciones de Cancelación:',
      paragraphs: [
        'Nos reservamos el derecho de cambiar el itinerario previsto siempre que las condiciones climáticas no sean favorables para la seguridad de los participantes.',
        'No habrá cancelación por mal tiempo: la excursión se realizará incluso con lluvia y/o tiempo nublado, salvo en caso de fuerza mayor.',
        'En caso de cancelación por parte del consumidor habrá devolución conforme a la deliberación normativa nº 161, del 9 de agosto de 1985, de Embratur, en las condiciones siguientes:',
        'El cliente puede proporcionar un sustituto.',
        'El cliente puede dejar el valor como crédito para participar en otra fecha.',
        'Si no es viable ninguna de las opciones anteriores, se aplicarán los siguientes porcentajes sobre el valor pagado:',
        'Cancelación con 30 días o más de anticipación: 90% del total pagado.',
        'Cancelación con 21 a 29 días de anticipación: 80% del total pagado.',
        'Cancelación con 7 a 20 días de anticipación: 50% del total pagado.',
        'Cancelación con menos de 7 días de anticipación: Sin devolución.',
        'Cancelaciones durante paquetes: Sin reembolso.',
        'Cambio de itinerario: consultar las condiciones con la agencia.',
        'Tasa de participación y reserva: una vez confirmada la reserva, se cobra el 10% del valor de este itinerario como multa en caso de cancelación. No-Show: la no presentación en la fecha, hora y lugar determinados para el embarque será considerada no-show, lo que implica la pérdida total del valor pagado. El pasajero que, por su propia voluntad, se separe del grupo durante el viaje o cambie el alojamiento contratado asumirá todos los gastos derivados de esa decisión, sin derecho a reembolso.',
      ],
    },
    responsibility: {
      title: 'TÉRMINO DE RESPONSABILIDAD MAMUT TREKKING CHAPADA DIAMANTINA',
      paragraphs: [
        'Su seguridad y su disfrute son nuestras prioridades. En la gran mayoría de las actividades de aventura en la naturaleza existe un elemento de riesgo (animales venenosos, caídas, tormentas, inundaciones, accidentes...). El viaje que eligió ocurre en un lugar silvestre, donde todos los procedimientos de rescate son lentos (pueden llevar muchas horas). Fallas mecánicas del vehículo de transporte pueden retrasar o alterar el viaje. Las caminatas por senderos y montañas pueden ser peligrosas, aunque sigamos las normas nacionales de ecoturismo y tengamos protocolos internos validados. Si no se siente cómodo participando sabiendo esto, puede desistir con total libertad. Estamos aquí para garantizar su seguridad y también para que tenga plena conciencia del tipo de actividad que está eligiendo. Durante todo el viaje siga las recomendaciones de los guías y del equipo operativo de Mamut Trekking, que darán todas las orientaciones sobre los procedimientos de seguridad. Nos reservamos el derecho de cancelar o alterar el viaje según las condiciones del camino, del clima o de cualquier otro factor que pueda comprometer la seguridad de los visitantes. Recuerde que forma parte de un tipo diferente de turismo, en el que el "espíritu de equipo" es fundamental. Un turismo sin estrellismo, sin reflectores, donde solo usted y su grupo importan.',
        'Yo, __________________________________________________ declaro a todos los efectos que participo en la fecha indicada abajo en un viaje en ambiente silvestre y potencialmente peligroso, y que conozco los riesgos involucrados. Declaro también que estoy en buenas condiciones de salud y apto para participar en todas las actividades del itinerario. Libero a Mamut Trekking de cualquier responsabilidad por daños a mi integridad o a mis pertenencias personales durante el viaje.',
      ],
    },
    sincerely: (signatory) => `Atentamente, ${signatory}.`,
    signatureLine: 'Firma:_________________ Lugar:______________ Fecha:_________________',
    operatorSignatureLine: 'Firma de la Operadora:___________________',
    additionalInfo: {
      title: 'Conozca toda la información sobre su servicio (Additional Information)',
      body: 'Queremos compartir nuestras políticas para asegurar total transparencia y brindar la mejor experiencia a todos nuestros estimados clientes.',
    },
  },
};
