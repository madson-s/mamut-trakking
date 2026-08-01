import { print } from '@/design/print';
import { CONTENT, LABELS, VOUCHER_LOCALES, type VoucherLocale } from './voucher-content';

// Modelo de dados do gerador de voucher da Mamut Trekking.
// Ferramenta interna, fora do escopo do site público (rota /voucher).
// A página 1 é totalmente dinâmica (preenchida no formulário); o texto legal
// das páginas 2–4 é fixo e vive em `voucher-content.ts`, por idioma.

export type { VoucherLocale };

export type ServiceRow = {
  date: string;
  time: string;
  description: string;
  total: string; // valor em número, ex.: "5200" — renderizado como "R$5200"
  status: string; // ex.: "BOOKED" | "RESERVADO"
};

export type PaymentRow = {
  label: string; // ex.: "1° Payment:"
  date: string;
  price: string;
  form: string; // ex.: "DONE" | "PIX"
  status: string; // ex.: "BOOKED"
};

export type ChecklistItem = {
  label: string;
  active: boolean; // false => item riscado (não necessário nesta viagem)
};

/** Um cliente do voucher. `age` e `email` são opcionais no papel. */
export type Participant = {
  name: string;
  age: string;
  email: string;
};

export type VoucherData = {
  /** Idioma do documento gerado (rótulos + ordem dos blocos legais). */
  locale: VoucherLocale;

  voucherNumber: string;

  /** Lista nominal de clientes — nome, idade e e-mail de cada um. */
  participants: Participant[];
  /** Grupo maior do que a lista nominal: "+ N PESSOAS". Vazio/0 => oculto. */
  extraPeople: string;
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

  signatoryName: string; // "Atenciosamente, {nome}." no termo de responsabilidade
};

/**
 * Voucher em branco no idioma escolhido. As listas (inclui/não inclui,
 * checklist, status) vêm de `CONTENT`, então trocar o idioma aqui já traz o
 * conteúdo-modelo traduzido; o resto o operador ajusta por reserva.
 */
export function defaultVoucherData(locale: VoucherLocale = 'pt'): VoucherData {
  const content = CONTENT[locale];
  const [booked, notBooked] = content.serviceStatus;
  const [paid, pending] = content.paymentStatus;

  return {
    locale,
    voucherNumber: '250102',

    participants: [{ name: '', age: '', email: '' }],
    extraPeople: '',
    paymentDate: '',
    phone: '',
    checkIn: '',
    checkOut: '',

    services: [{ date: '', time: '', description: '', total: '', status: notBooked }],

    includes: [...content.includes],
    notIncludes: [...content.notIncludes],
    operation: content.operation,

    payments: [
      { label: '1° Payment:', date: '', price: '', form: paid, status: booked },
      { label: '2° Payment:', date: '', price: '', form: pending, status: '' },
    ],

    emergencyName: '',
    emergencyRelation: '',
    emergencyPhone: '',

    checklist: content.checklist.map((label) => ({ label, active: true })),

    signatoryName: 'Marcelo Cabral',
  };
}

/**
 * Normaliza o rascunho salvo no navegador. Rascunhos de versões anteriores
 * (um participante em `participantName`/`email`, sem `locale`) são migrados
 * para o modelo atual em vez de descartados.
 */
export function hydrateVoucherDraft(raw: unknown): VoucherData {
  const draft = (raw ?? {}) as Partial<VoucherData> & {
    participantName?: string;
    email?: string;
  };
  const locale = VOUCHER_LOCALES.includes(draft.locale as VoucherLocale)
    ? (draft.locale as VoucherLocale)
    : 'pt';
  const base = defaultVoucherData(locale);

  const participants = Array.isArray(draft.participants)
    ? draft.participants
    : draft.participantName !== undefined
      ? [{ name: draft.participantName, age: '', email: draft.email ?? '' }]
      : base.participants;

  return { ...base, ...draft, locale, participants };
}

/** Iguais na ordem — usado para saber se uma lista ainda é a do modelo. */
function sameList(a: readonly string[], b: readonly string[]): boolean {
  return a.length === b.length && a.every((value, i) => value === b[i]);
}

/** Traduz um termo do vocabulário (status, forma de pagamento) ou devolve como está. */
function translateWord(value: string, from: readonly string[], to: readonly string[]): string {
  const i = from.findIndex((word) => word.toLowerCase() === value.trim().toLowerCase());
  return i >= 0 && to[i] !== undefined ? to[i] : value;
}

/**
 * Traduz uma lista editável. Se ela ainda é o modelo inteiro, troca pelo modelo
 * do outro idioma (que pode ter outro número de itens); se foi mexida, traduz
 * item por item, preservando as linhas que o operador escreveu.
 */
function translateList(
  list: readonly string[],
  from: readonly string[],
  to: readonly string[],
): string[] {
  if (sameList(list, from)) return [...to];
  return list.map((value, i) => (value === from[i] ? (to[i] ?? value) : value));
}

/**
 * Troca o idioma do voucher preservando tudo que o operador digitou.
 *
 * Rótulos e texto legal são fixos e seguem o idioma na hora. Nas listas
 * editáveis (inclui / não inclui / checklist) e no vocabulário de status, só o
 * que ainda é igual ao modelo do idioma anterior é traduzido — cada linha que o
 * operador escreveu fica intacta. No checklist, os itens desmarcados continuam
 * desmarcados.
 */
export function switchVoucherLocale(data: VoucherData, next: VoucherLocale): VoucherData {
  if (data.locale === next) return data;

  const before = CONTENT[data.locale];
  const after = CONTENT[next];

  const checklistLabels = translateList(
    data.checklist.map((item) => item.label),
    before.checklist,
    after.checklist,
  );

  return {
    ...data,
    locale: next,
    includes: translateList(data.includes, before.includes, after.includes),
    notIncludes: translateList(data.notIncludes, before.notIncludes, after.notIncludes),
    operation: data.operation === before.operation ? after.operation : data.operation,
    checklist: checklistLabels.map((label, i) => ({
      label,
      active: data.checklist[i]?.active ?? true,
    })),
    services: data.services.map((row) => ({
      ...row,
      status: translateWord(row.status, before.serviceStatus, after.serviceStatus),
    })),
    payments: data.payments.map((row) => ({
      ...row,
      form: translateWord(row.form, before.paymentStatus, after.paymentStatus),
      status: translateWord(row.status, before.serviceStatus, after.serviceStatus),
    })),
  };
}

// Cor semântica de um status/forma de pagamento (verde = concluído/confirmado,
// vermelho = pendente/ausente). Comparação case-insensitive.
// As cores vêm de `print` — espelho dos tokens semânticos para o PDF.
const GREEN = new Set([
  'booked',
  'done',
  'paid',
  'confirmed',
  'reservado',
  'pago',
  'pagado',
  'confirmado',
  'ok',
]);
const RED = new Set([
  'not booked',
  'pending',
  'missing',
  'cancelled',
  'canceled',
  'não reservado',
  'nao reservado',
  'no reservado',
  'pendente',
  'pendiente',
  'faltando',
  'falta',
  'cancelado',
  'cancelada',
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

// Cabeçalho/rodapé fixos (dados da agência). O `tagline` é por idioma —
// ver LABELS em voucher-content.ts.
export const AGENCY = {
  cadastur: 'CNPJ/Cadastur: 43.500.583/0001-22',
  addressLines: ['Endereço: Rua Miguel Calmon, 108,', 'Centro, Lençóis - BA – 4696000.0'],
  whatsapp: 'Whatsapp: 75 9.9935-9150',
  email: 'Email: contato@mamut.agency',
  site: 'www.mamut.agency',
  instagram: 'www.instagram.com/mamut.trekking',
} as const;

export { LABELS, CONTENT, VOUCHER_LOCALES };
