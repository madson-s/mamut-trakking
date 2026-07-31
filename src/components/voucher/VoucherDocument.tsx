/* eslint-disable jsx-a11y/alt-text -- <Image> aqui é do @react-pdf/renderer
   (elemento de PDF, não <img> do DOM): não existe prop `alt`. */

// Documento PDF do voucher (@react-pdf/renderer). Reproduz o layout do modelo:
// cabeçalho/rodapé fixos em todas as páginas, página 1 dinâmica e páginas 2–4
// com o texto legal estático. Importado apenas em chunks client-only.
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import {
  AGENCY,
  ADDITIONAL_INFO_INTRO,
  CANCELLATION_POLICY_EN,
  RESPONSIBILITY_TERM_EN,
  CANCELLATION_POLICY_PT,
  RESPONSIBILITY_TERM_PT,
  ADVENTURE_INSURANCE_PT,
  MISSING,
  statusColor,
  formatBRL,
  type VoucherData,
} from '@/lib/voucher';
import { print } from '@/design/print';

// Cores do documento = espelho dos tokens semânticos para papel (`print`).
const INK = print.ink;
const RED = print.error;
const LABEL = print.brandStrong;
const LINE = print.ink;
const MUTED = print.muted;
const LINK = print.brand;

const s = StyleSheet.create({
  page: {
    paddingTop: 96,
    paddingBottom: 64,
    paddingHorizontal: 36,
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: INK,
    lineHeight: 1.4,
  },

  // Cabeçalho fixo
  header: {
    position: 'absolute',
    top: 22,
    left: 36,
    right: 36,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLogo: { width: 92 },
  headerCenter: { flex: 1, alignItems: 'center', paddingHorizontal: 8 },
  headerCenterText: { fontSize: 7.5, color: INK, textAlign: 'center' },
  headerRight: { width: 92, alignItems: 'flex-end' },
  voucherNumber: { fontSize: 9, color: INK },

  // Rodapé fixo
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 36,
    right: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLogo: { width: 58 },
  footerCenter: { alignItems: 'center' },
  footerLink: { fontSize: 8, color: LINK },
  footerRight: { alignItems: 'flex-end', width: 92 },
  footerTagline: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: INK },

  bold: { fontFamily: 'Helvetica-Bold' },
  italic: { fontFamily: 'Helvetica-Oblique' },
  missing: { color: RED, fontFamily: 'Helvetica-Bold' },

  ruleTop: { borderTopWidth: 1.2, borderTopColor: LINE },
  ruleBottom: { borderBottomWidth: 1.2, borderBottomColor: LINE },
  ruleThin: { borderBottomWidth: 0.6, borderBottomColor: print.lineThin },

  row: { flexDirection: 'row' },

  // Bloco do participante
  block: { paddingVertical: 5 },
  col3: { flex: 1, paddingRight: 8 },

  // Tabela de serviços / pagamentos
  th: { fontFamily: 'Helvetica-Bold', fontSize: 9 },

  // Includes / Not includes
  sectionLabel: { fontFamily: 'Helvetica-Bold', color: LABEL, marginBottom: 3 },

  // Checklist
  checkItem: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 2 },
  checkBox: {
    width: 6,
    height: 6,
    marginTop: 2.5,
    marginRight: 4,
    borderWidth: 0.8,
    borderColor: INK,
  },
  checkBoxOff: { borderColor: MUTED },
  checkStruck: { textDecoration: 'line-through', color: MUTED },

  // Texto legal
  legalTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 8,
  },
  legalSubtitle: { fontFamily: 'Helvetica-Bold', textAlign: 'center', marginBottom: 6 },
  legalSubtitleLeft: { fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  para: { marginBottom: 6, textAlign: 'justify' },
  sigLine: { marginTop: 18, fontFamily: 'Helvetica-Bold' },
});

export const LOGO = '/img/mamut-logo-black.png';

function Header({ voucherNumber, logo }: { voucherNumber: string; logo: string }) {
  return (
    <View style={s.header} fixed>
      <Image style={s.headerLogo} src={logo} />
      <View style={s.headerCenter}>
        <Text style={s.headerCenterText}>{AGENCY.cadastur}</Text>
        {AGENCY.addressLines.map((l) => (
          <Text key={l} style={s.headerCenterText}>
            {l}
          </Text>
        ))}
        <Text style={s.headerCenterText}>{AGENCY.whatsapp}</Text>
        <Text style={s.headerCenterText}>{AGENCY.email}</Text>
      </View>
      <View style={s.headerRight}>
        <Text style={s.voucherNumber}>VOUCHER {voucherNumber || '—'}</Text>
      </View>
    </View>
  );
}

function Footer({ logo }: { logo: string }) {
  return (
    <View style={s.footer} fixed>
      <Image style={s.footerLogo} src={logo} />
      <View style={s.footerCenter}>
        <Text style={s.footerLink}>{AGENCY.site}</Text>
        <Text style={s.footerLink}>{AGENCY.instagram}</Text>
      </View>
      <View style={s.footerRight}>
        <Text style={s.footerTagline}>{AGENCY.tagline}</Text>
      </View>
    </View>
  );
}

// Valor que, em branco, vira "MISSING" em vermelho.
function Value({ value, fallback = MISSING }: { value: string; fallback?: string }) {
  const v = value.trim();
  if (v) return <Text>{v}</Text>;
  return <Text style={s.missing}>{fallback}</Text>;
}

function StatusText({ value }: { value: string }) {
  const v = value.trim();
  if (!v) return <Text> </Text>;
  const color = statusColor(v);
  return <Text style={[s.bold, color ? { color } : {}]}>{v}</Text>;
}

function Para({ children }: { children: React.ReactNode }) {
  return <Text style={s.para}>{children}</Text>;
}

function chunkIntoColumns<T>(items: T[], columns: number): T[][] {
  const per = Math.ceil(items.length / columns);
  const out: T[][] = [];
  for (let i = 0; i < columns; i++) out.push(items.slice(i * per, (i + 1) * per));
  return out;
}

// Builder que retorna o elemento <Document> já tipado como ReactElement<DocumentProps>,
// aceito diretamente por pdf() e <PDFViewer> (um componente wrapper não satisfaz o tipo).
export function buildVoucherDocument(data: VoucherData, logo: string = LOGO) {
  const extra = parseInt(data.extraPeople, 10);
  const checklistCols = chunkIntoColumns(data.checklist, 3);

  return (
    <Document
      title={`Voucher ${data.voucherNumber} — Mamut Trekking`}
      author="Mamut Trekking"
    >
      {/* ---------- Página 1: dados dinâmicos ---------- */}
      <Page size="A4" style={s.page}>
        <Header voucherNumber={data.voucherNumber} logo={logo} />
        <Footer logo={logo} />

        {/* Bloco do participante */}
        <View style={[s.ruleTop, s.ruleBottom, s.block]}>
          <View style={s.row}>
            <View style={s.col3}>
              <Text>
                <Text style={s.bold}>Participants: </Text>
                {data.participantName}
              </Text>
              {Number.isFinite(extra) && extra > 0 ? (
                <Text>+ {extra} PEOPLE</Text>
              ) : null}
            </View>
            <View style={s.col3}>
              <Text>
                <Text style={s.bold}>E-mail: </Text>
                <Value value={data.email} />
              </Text>
            </View>
            <View style={s.col3}>
              <Text>
                <Text style={s.bold}>Payment Date: </Text>
                <Value value={data.paymentDate} />
              </Text>
            </View>
          </View>
          <View style={[s.row, s.ruleThin, { marginTop: 4, paddingTop: 4 }]}>
            <View style={s.col3}>
              <Text>
                <Text style={s.bold}>Phone: </Text>
                {data.phone}
              </Text>
            </View>
            <View style={s.col3}>
              <Text>
                <Text style={[s.bold, s.italic]}>Check-in: </Text>
                {data.checkIn}
              </Text>
            </View>
            <View style={s.col3}>
              <Text>
                <Text style={[s.bold, s.italic]}>Checkout: </Text>
                {data.checkOut}
              </Text>
            </View>
          </View>
        </View>

        {/* Tabela de serviços */}
        <View style={{ marginTop: 8 }}>
          <View style={[s.row, s.ruleBottom, { paddingBottom: 3 }]}>
            <Text style={[s.th, { flex: 1 }]}>Service Description</Text>
            <Text style={[s.th, { width: 60 }]}>Total</Text>
            <Text style={[s.th, { width: 80 }]}>Status</Text>
          </View>
          <View style={s.ruleBottom}>
            {data.services.map((row, i) => (
              <View key={i} style={[s.row, { paddingVertical: 2 }]}>
                <Text style={{ flex: 1, paddingRight: 6 }}>
                  {row.date} {row.time}{' '}
                  <Text style={s.bold}>{row.description}</Text>
                </Text>
                <Text style={{ width: 60 }}>{formatBRL(row.total)}</Text>
                <View style={{ width: 80 }}>
                  <StatusText value={row.status} />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Includes / Not includes */}
        <View style={[s.row, { marginTop: 10 }]}>
          <View style={{ flex: 1, paddingRight: 12 }}>
            <Text style={s.sectionLabel}>Includes:</Text>
            {data.includes.map((item, i) => (
              <Text key={i}>{item};</Text>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.sectionLabel}>Not Includes:</Text>
            {data.notIncludes.map((item, i) => (
              <Text key={i}>{item};</Text>
            ))}
          </View>
        </View>

        {/* Operação */}
        <View style={{ marginTop: 10, marginBottom: 4 }}>
          <Text>
            <Text style={s.bold}>Operation: </Text>
            {data.operation}
          </Text>
        </View>

        {/* Tabela de pagamentos */}
        <View style={[s.row, s.ruleTop, s.ruleBottom, { paddingVertical: 3 }]}>
          <Text style={[s.th, { flex: 1 }]}>Payment Data</Text>
          <Text style={[s.th, { width: 80 }]}>Date</Text>
          <Text style={[s.th, { width: 60 }]}>Price</Text>
          <Text style={[s.th, { width: 90 }]}>Payment Form</Text>
          <Text style={[s.th, { width: 70 }]}>Status</Text>
        </View>
        <View style={s.ruleBottom}>
          {data.payments.map((p, i) => (
            <View key={i} style={[s.row, { paddingVertical: 3 }]}>
              <Text style={[s.bold, { flex: 1 }]}>{p.label}</Text>
              <Text style={{ width: 80 }}>{p.date}</Text>
              <Text style={{ width: 60 }}>{formatBRL(p.price)}</Text>
              <View style={{ width: 90 }}>
                <StatusText value={p.form} />
              </View>
              <View style={{ width: 70 }}>
                <StatusText value={p.status} />
              </View>
            </View>
          ))}
        </View>

        {/* Contato de emergência */}
        <View style={[s.ruleBottom, { paddingVertical: 4 }]}>
          <Text style={s.bold}>Emergency Data</Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text>
            <Text style={s.bold}>Emergency contact</Text>:{' '}
            <Value value={data.emergencyName} /> – <Value value={data.emergencyRelation} /> –{' '}
            <Value value={data.emergencyPhone} fallback="+0000000" />
          </Text>
        </View>

        {/* Checklist geral */}
        <View style={{ marginTop: 10 }}>
          <Text style={[s.bold, { marginBottom: 4 }]}>General Checklist:</Text>
          <View style={s.row}>
            {checklistCols.map((col, ci) => (
              <View key={ci} style={{ flex: 1, paddingRight: 8 }}>
                {col.map((item, ii) => (
                  <View key={ii} style={s.checkItem}>
                    <View style={[s.checkBox, item.active ? {} : s.checkBoxOff]} />
                    <Text style={[{ flex: 1 }, item.active ? {} : s.checkStruck]}>
                      {item.label};
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Informações adicionais (intro) */}
        <View style={{ marginTop: 12 }}>
          <Text style={s.bold}>{ADDITIONAL_INFO_INTRO.title}</Text>
          <Text style={{ marginTop: 4 }}>{ADDITIONAL_INFO_INTRO.pt}</Text>
          <Text style={s.italic}>{ADDITIONAL_INFO_INTRO.en}</Text>
        </View>
      </Page>

      {/* ---------- Páginas 2–3: políticas (EN) ---------- */}
      <Page size="A4" style={s.page}>
        <Header voucherNumber={data.voucherNumber} logo={logo} />
        <Footer logo={logo} />

        <Text style={s.legalTitle}>{CANCELLATION_POLICY_EN.title}</Text>
        {CANCELLATION_POLICY_EN.paragraphs.map((p, i) => (
          <Para key={i}>{p}</Para>
        ))}

        <Text style={[s.legalTitle, { marginTop: 10 }]}>{RESPONSIBILITY_TERM_EN.title}</Text>
        <Text style={s.legalSubtitle}>{RESPONSIBILITY_TERM_EN.subtitle}</Text>
        {RESPONSIBILITY_TERM_EN.paragraphs.map((p, i) => (
          <Para key={i}>{p}</Para>
        ))}
        <Text style={{ marginTop: 6 }}>Sincerely, {data.signatoryName}.</Text>
        <Text style={s.sigLine}>
          Signature:_____________ Place:______________ Date:_____________ Mamut
          Signature:__________________
        </Text>
      </Page>

      {/* ---------- Página 3–4: políticas (PT) ---------- */}
      <Page size="A4" style={s.page}>
        <Header voucherNumber={data.voucherNumber} logo={logo} />
        <Footer logo={logo} />

        <Text style={s.legalTitle}>{CANCELLATION_POLICY_PT.title}</Text>
        <Text style={s.legalSubtitleLeft}>{CANCELLATION_POLICY_PT.subtitle}</Text>
        {CANCELLATION_POLICY_PT.paragraphs.map((p, i) => (
          <Para key={i}>{p}</Para>
        ))}

        <Text style={[s.legalTitle, { marginTop: 10 }]}>{RESPONSIBILITY_TERM_PT.title}</Text>
        {RESPONSIBILITY_TERM_PT.paragraphs.map((p, i) => (
          <Para key={i}>{p}</Para>
        ))}
      </Page>

      {/* ---------- Página 4: seguro ---------- */}
      <Page size="A4" style={s.page}>
        <Header voucherNumber={data.voucherNumber} logo={logo} />
        <Footer logo={logo} />

        <Text style={s.legalSubtitleLeft}>{ADVENTURE_INSURANCE_PT.title}</Text>
        {ADVENTURE_INSURANCE_PT.paragraphs.map((p, i) => (
          <Para key={i}>{p}</Para>
        ))}
        <Text style={s.sigLine}>
          Assinatura:_________________ Local:______________ Data:_________________
        </Text>
        <Text style={[s.sigLine, { marginTop: 12 }]}>
          Assinatura Operadora:___________________
        </Text>
      </Page>
    </Document>
  );
}
