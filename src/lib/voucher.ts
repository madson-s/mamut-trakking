import { print } from '@/design/print';

// Modelo de dados + conteúdo estático do gerador de voucher da Mamut Trekking.
// Ferramenta interna, fora do escopo do site público (rota /voucher).
// A página 1 do voucher é totalmente dinâmica (preenchida no formulário);
// as páginas 2–4 são texto legal fixo, transcrito do PDF modelo.

export type ServiceRow = {
  date: string;
  time: string;
  description: string;
  total: string; // valor em número, ex.: "5200" — renderizado como "R$5200"
  status: string; // ex.: "BOOKED" | "NOT BOOKED"
};

export type PaymentRow = {
  label: string; // ex.: "1° Payment:"
  date: string;
  price: string;
  form: string; // ex.: "DONE" | "PENDING"
  status: string; // ex.: "BOOKED"
};

export type ChecklistItem = {
  label: string;
  active: boolean; // false => item riscado (não necessário nesta viagem)
};

export type VoucherData = {
  voucherNumber: string;

  participantName: string;
  extraPeople: string; // "9" => renderiza "+ 9 PEOPLE"; vazio/0 => oculto
  email: string;
  paymentDate: string;
  phone: string;
  checkIn: string;
  checkOut: string;

  services: ServiceRow[];
  includes: string[];
  notIncludes: string[];
  operation: string;

  payments: PaymentRow[];

  emergencyName: string;
  emergencyRelation: string;
  emergencyPhone: string;

  checklist: ChecklistItem[];

  signatoryName: string; // "Sincerely, {nome}." no termo de responsabilidade
};

// Placeholder mostrado (em vermelho) quando um campo obrigatório fica em branco.
export const MISSING = 'MISSING';

// Valores default espelham o voucher modelo (grupo da Francesca) para facilitar
// a demonstração; o operador ajusta cada campo por reserva.
export const defaultVoucherData: VoucherData = {
  voucherNumber: '250102',

  participantName: 'Francesca',
  extraPeople: '9',
  email: '',
  paymentDate: '',
  phone: '+39 348 748 9103',
  checkIn: '16/08/2026',
  checkOut: '19/08/2026',

  services: [
    {
      date: '16/08/2026',
      time: '5:00AM',
      description: 'TRANSFER SSA X LEC + TOURS [PRIVATE] (Check-in HOTEL)',
      total: '5200',
      status: 'NOT BOOKED',
    },
    {
      date: '18/08/2026',
      time: '8:30AM',
      description: 'CAVES TOUR (LAPA DOCE+PRATINHA+INACIO) [PRIVATE]',
      total: '4300',
      status: 'NOT BOOKED',
    },
    {
      date: '16/08/2026',
      time: '5:00AM',
      description: 'TRANSFER LEX X SSA [PRIVATE] (Check-in HOTEL)',
      total: '4000',
      status: 'NOT BOOKED',
    },
  ],

  includes: [
    'PRIVATE ACTIVITY',
    'Transfers in-out (from Lençóis 1120km)',
    'Local Guide Speaking English',
    'Entrance fees 18th Aug',
  ],
  notIncludes: [
    'Everything is not on Includes',
    'Medical Evacuation or similar',
    'Personal equipment (clothes, hygien etc)',
    'Guesthouse before/after activities',
    'Tips',
  ],
  operation: 'Mamut Trekking.',

  payments: [
    { label: '1° Payment:', date: '14/07/2026', price: '4950', form: 'DONE', status: 'BOOKED' },
    { label: '2° Payment:', date: '16/08/2026', price: '4950', form: 'PENDING', status: '' },
  ],

  emergencyName: '',
  emergencyRelation: '',
  emergencyPhone: '',

  checklist: [
    { label: 'Water (1,5lt per person)', active: true },
    { label: 'Tenis/boot to hike', active: true },
    { label: 'Extra socks', active: true },
    { label: 'Two light clothes to hike (longsleeves)', active: true },
    { label: 'Swimwear', active: true },
    { label: 'Sleepwear (can get as low as 15°C)', active: true },
    { label: 'Hat/Cap', active: true },
    { label: 'Sunscreen', active: true },
    { label: 'Personal medication', active: true },
    { label: 'Indetification Documents', active: true },
    { label: 'Backpack 40L+', active: true },
    { label: 'Atack Bag 10l+', active: true },
    { label: 'Repelent', active: true },
    { label: 'Thin towel', active: true },
    { label: 'Hand Stick (optional)', active: true },
    { label: 'Raincoat', active: true },
    { label: 'Snacks or fruits to eat outside of meal times', active: true },
    { label: 'Cash for extra drinks or services', active: true },
    { label: 'Headlamp', active: true },
  ],

  signatoryName: 'Marcelo Cabral',
};

// Cor semântica de um status/forma de pagamento (verde = concluído/confirmado,
// vermelho = pendente/ausente). Comparação case-insensitive.
// As cores vêm de `print` — espelho dos tokens semânticos para o PDF.
const GREEN = new Set(['booked', 'done', 'paid', 'confirmed', 'pago', 'confirmado', 'ok']);
const RED = new Set([
  'not booked',
  'pending',
  'missing',
  'cancelled',
  'canceled',
  'pendente',
  'cancelado',
]);

export function statusColor(value: string): string | undefined {
  const v = value.trim().toLowerCase();
  if (!v) return undefined;
  if (GREEN.has(v)) return print.success;
  if (RED.has(v)) return print.error;
  return undefined;
}

export function formatBRL(value: string): string {
  const raw = value.trim();
  if (!raw) return '';
  if (raw.toUpperCase().startsWith('R$')) return raw;
  return `R$${raw}`;
}

// ---------------------------------------------------------------------------
// Conteúdo legal estático (páginas 2–4). Transcrito do PDF modelo.
// ---------------------------------------------------------------------------

export const CANCELLATION_POLICY_EN = {
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
};

export const RESPONSIBILITY_TERM_EN = {
  title: 'RESPONSABILITY TERM',
  subtitle: 'MAMUT TREKKING CHAPADA DIAMANTINA',
  paragraphs: [
    "Your safety and enjoyment are our priorities. In the vast majority of nature adventure activities, there's an element of risk (venomous animals, falls, storms, floods, accidents...). The trip you've chosen takes place in a wilderness area where rescue procedures can be time-consuming (taking many hours). Mechanical failures of the transport vehicle may delay or alter the trip. Hiking on trails and mountain walks can be dangerous, even though we adhere to national ecotourism standards and have validated internal protocols. If you don't feel comfortable participating knowing this, you're free to withdraw. We're here to ensure your safety and to ensure you're fully aware of the type of activity you're choosing. Throughout the trip, please follow the recommendations of the Mamut Trekking guides and operators, who will provide all safety instructions. We reserve the right to cancel or change the trip depending on road conditions, weather, or any other factor that may compromise the safety of visitors. Remember, you're part of a unique type of tourism where the \"team spirit\" is essential. It's a tourism without stardom, without spotlights, where only you and your group matter.",
    'I, __________________________________________________ declare for all purposes that I am participating on the date below in a trip in a wilderness environment and potentially dangerous, and I am aware of the risks involved. I also declare that I am in good health and able to participate in all activities of the tour. I release Mamut Trekking from any responsibilities for any damages to my integrity or personal belongings during the trip.',
  ],
};

export const CANCELLATION_POLICY_PT = {
  title: 'Política de Cancelamento',
  subtitle: 'Condições de Cancelamento:',
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
};

export const RESPONSIBILITY_TERM_PT = {
  title: 'TERMO DE RESPONSABILIDADE MAMUT TREKKING CHAPADA DIAMANTINA',
  paragraphs: [
    'Sua segurança e diversão são nossas prioridades. Na grande maioria das atividades de aventura na natureza existe um elemento de risco (animais peçonhentos, quedas, tempestades, inundações, acidentes...). A viagem de sua escolha acontece em um local selvagem, onde todos os procedimentos de resgate são demorados (podem levar muitas horas). Quebras mecânicas do veículo de transporte podem atrasar ou alterar a viagem. Passeios nas trilhas e caminhadas em montanhas podem ser perigoso, mesmo que seguimos normas nacionais do ecoturismo e temos protocolos internos validados. Se você não se sentir muito confortável em participar sabendo disto, pode desistir fique à vontade. Estamos aqui para garantir sua segurança, como também para que você tenha total consciência do tipo de atividade que está optando. Durante toda a viagem siga a recomendação dos guias e operacional da Mamut Trekking, que vão dar todas as orientações sobre os procedimentos de segurança. Reservamos o direito de cancelar ou alterar a viagem dependendo das condições da estrada, do clima ou de qualquer outro fator que possa comprometer a segurança dos visitantes. Lembre-se que você está inserido em um tipo diferenciado de turismo, no qual o "espírito de equipe" é fundamental. Um turismo sem estrelismo, sem holofotes, onde só você e seu grupo importam.',
  ],
};

export const ADVENTURE_INSURANCE_PT = {
  title: 'Seguro Aventura:',
  paragraphs: [
    'Está incluso nos passeios o seguro viagem ROCA Day Use',
    'MA (Morte Acidental) ou IPA (Invalidez Permanente) - R$ 30.000,00DMH - R$ 3.000,00 para casos de acidentes que envolvam invalidez ou óbito.',
  ],
};

export const ADDITIONAL_INFO_INTRO = {
  title: 'Saiba todas informações sobre seu serviço (Additional Information)',
  pt: 'Desejamos compartilhar nossas políticas, visando assegurar total transparência e proporcionar a melhor experiência a todos os nossos estimados clientes.',
  en: 'We wish to share our policies, ensure complete transparency and provide the best experience to all our valued customers.',
};

// Cabeçalho/rodapé fixos (dados da agência).
export const AGENCY = {
  cadastur: 'CNPJ/Cadastur: 43.500.583/0001-22',
  addressLines: ['Endereço: Rua Miguel Calmon, 108,', 'Centro, Lençóis - BA – 4696000.0'],
  whatsapp: 'Whatsapp: 75 9.9935-9150',
  email: 'Email: contato@mamut.agency',
  site: 'www.mamut.agency',
  instagram: 'www.instagram.com/mamut.trekking',
  tagline: 'Giants by Nature',
};
