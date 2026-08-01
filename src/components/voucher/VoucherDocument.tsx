/* eslint-disable jsx-a11y/alt-text -- <Image> aqui é do @react-pdf/renderer
   (elemento de PDF, não <img> do DOM): não existe prop `alt`. */

// Documento PDF do voucher (@react-pdf/renderer). Reproduz o layout dos
// vouchers-modelo: cabeçalho/rodapé fixos em todas as páginas, página 1
// dinâmica e as páginas seguintes com o texto legal.
//
// O idioma (`data.locale`) define os rótulos, o rodapé e a ORDEM dos blocos
// legais — nos modelos da operadora o documento traz o idioma do cliente
// primeiro e o complementar depois. Importado apenas em chunks client-only.
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import {
  AGENCY,
  formatBRL,
  statusColor,
  type Participant,
  type VoucherData,
} from '@/lib/voucher';
import {
  LABELS,
  LEGAL,
  LEGAL_ORDER,
  type LegalSection,
  type VoucherLabels,
  type VoucherLocale,
} from '@/lib/voucher-content';
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
  footerRight: { alignItems: 'flex-end', width: 110 },
  footerTagline: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: INK, textAlign: 'right' },

  bold: { fontFamily: 'Helvetica-Bold' },
  italic: { fontFamily: 'Helvetica-Oblique' },
  missing: { color: RED, fontFamily: 'Helvetica-Bold' },

  ruleTop: { borderTopWidth: 1.2, borderTopColor: LINE },
  ruleBottom: { borderBottomWidth: 1.2, borderBottomColor: LINE },
  ruleThin: { borderBottomWidth: 0.6, borderBottomColor: print.lineThin },
  ruleThinTop: { borderTopWidth: 0.6, borderTopColor: print.lineThin },

  row: { flexDirection: 'row' },

  // Bloco do participante
  block: { paddingVertical: 5 },

  // Tabela de clientes: nome · idade · e-mail
  cName: { flex: 1.4, paddingRight: 8 },
  cAge: { width: 42, paddingRight: 8 },
  cEmail: { flex: 1.6 },

  // Faixa de contato/datas — larguras proporcionais ao tamanho do rótulo,
  // senão "Data de Pagamento: dd/mm/aaaa" quebra em duas linhas.
  iPhone: { flex: 1.05, paddingRight: 8 },
  iPayment: { flex: 1.25, paddingRight: 8 },
  iDate: { flex: 0.85, paddingRight: 8 },

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

function Header({
  voucherNumber,
  labels,
  logo,
}: {
  voucherNumber: string;
  labels: VoucherLabels;
  logo: string;
}) {
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
        <Text style={s.voucherNumber}>
          {labels.voucher} {voucherNumber || '—'}
        </Text>
      </View>
    </View>
  );
}

function Footer({ labels, logo }: { labels: VoucherLabels; logo: string }) {
  return (
    <View style={s.footer} fixed>
      <Image style={s.footerLogo} src={logo} />
      <View style={s.footerCenter}>
        <Text style={s.footerLink}>{AGENCY.site}</Text>
        <Text style={s.footerLink}>{AGENCY.instagram}</Text>
      </View>
      <View style={s.footerRight}>
        <Text style={s.footerTagline}>{labels.tagline}</Text>
      </View>
    </View>
  );
}

/** Valor que, em branco, vira o placeholder do idioma (em vermelho). */
function Value({ value, fallback }: { value: string; fallback: string }) {
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

/**
 * Bloco de clientes: uma linha por pessoa, tabulada em nome · idade · e-mail.
 * Abre a página 1 sozinho — telefone, pagamento e datas vêm na faixa seguinte.
 */
function ParticipantsBlock({
  participants,
  extraPeople,
  labels,
}: {
  participants: Participant[];
  extraPeople: string;
  labels: VoucherLabels;
}) {
  const listed = participants.filter((p) => p.name.trim() || p.age.trim() || p.email.trim());
  const rows = listed.length > 0 ? listed : [{ name: '', age: '', email: '' }];
  const extra = parseInt(extraPeople, 10);

  return (
    <View>
      <View style={[s.row, s.ruleThin, { paddingBottom: 2 }]}>
        <Text style={[s.th, s.cName]}>{labels.participantName}</Text>
        <Text style={[s.th, s.cAge]}>{labels.participantAge}</Text>
        <Text style={[s.th, s.cEmail]}>{labels.participantEmail}</Text>
      </View>

      {rows.map((p, i) => (
        <View key={i} style={[s.row, { paddingTop: 2 }]}>
          <View style={s.cName}>
            <Value value={p.name} fallback={labels.missing} />
          </View>
          <View style={s.cAge}>
            <Text>{p.age.trim() || '—'}</Text>
          </View>
          <View style={s.cEmail}>
            <Value value={p.email} fallback={labels.missing} />
          </View>
        </View>
      ))}

      {Number.isFinite(extra) && extra > 0 ? (
        <Text style={{ marginTop: 2 }}>{labels.extraPeople(extra)}</Text>
      ) : null}
    </View>
  );
}

/** Título + subtítulos + parágrafos de um bloco legal. */
function LegalSectionView({ section }: { section: LegalSection }) {
  return (
    <>
      <Text style={s.legalTitle}>{section.title}</Text>
      {section.subtitle && <Text style={s.legalSubtitle}>{section.subtitle}</Text>}
      {section.subtitleLeft && <Text style={s.legalSubtitleLeft}>{section.subtitleLeft}</Text>}
      {section.paragraphs.map((p, i) => (
        <Para key={i}>{p}</Para>
      ))}
    </>
  );
}

/**
 * Uma página de texto legal. `locale` é o idioma do TEXTO; `labels` é sempre do
 * idioma do documento — nos modelos o cabeçalho/rodapé (inclusive o "Gigantes
 * por Natureza") é o mesmo em todas as páginas, mesmo nas do idioma
 * complementar.
 */
function LegalPage({
  locale,
  data,
  logo,
  labels,
}: {
  locale: VoucherLocale;
  data: VoucherData;
  logo: string;
  labels: VoucherLabels;
}) {
  const legal = LEGAL[locale];

  return (
    <Page size="A4" style={s.page}>
      <Header voucherNumber={data.voucherNumber} labels={labels} logo={logo} />
      <Footer labels={labels} logo={logo} />

      <LegalSectionView section={legal.cancellation} />
      <LegalSectionView section={legal.responsibility} />
      {legal.insurance && <LegalSectionView section={legal.insurance} />}

      <Text style={{ marginTop: 6 }}>{legal.sincerely(data.signatoryName)}</Text>
      <Text style={s.sigLine}>{legal.signatureLine}</Text>
      {legal.operatorSignatureLine && (
        <Text style={[s.sigLine, { marginTop: 12 }]}>{legal.operatorSignatureLine}</Text>
      )}
    </Page>
  );
}

// Builder que retorna o elemento <Document> já tipado como ReactElement<DocumentProps>,
// aceito diretamente por pdf() e <PDFViewer> (um componente wrapper não satisfaz o tipo).
export function buildVoucherDocument(data: VoucherData, logo: string = LOGO) {
  const labels = LABELS[data.locale];
  const legal = LEGAL[data.locale];
  const checklistCols = chunkIntoColumns(data.checklist, 3);

  return (
    <Document
      title={`Voucher ${data.voucherNumber} — Mamut Trekking`}
      author="Mamut Trekking"
      language={data.locale}
    >
      {/* ---------- Página 1: dados dinâmicos ---------- */}
      <Page size="A4" style={s.page}>
        <Header voucherNumber={data.voucherNumber} labels={labels} logo={logo} />
        <Footer labels={labels} logo={logo} />

        {/* Bloco dos clientes */}
        <View style={[s.ruleTop, s.ruleBottom, s.block]}>
          <ParticipantsBlock
            participants={data.participants}
            extraPeople={data.extraPeople}
            labels={labels}
          />
          <View style={[s.row, s.ruleThinTop, { marginTop: 5, paddingTop: 5 }]}>
            <View style={s.iPhone}>
              <Text>
                <Text style={s.bold}>{labels.phone} </Text>
                {data.phone}
              </Text>
            </View>
            <View style={s.iPayment}>
              <Text>
                <Text style={s.bold}>{labels.paymentDate} </Text>
                <Value value={data.paymentDate} fallback={labels.missing} />
              </Text>
            </View>
            <View style={s.iDate}>
              <Text>
                <Text style={[s.bold, s.italic]}>{labels.checkIn} </Text>
                {data.checkIn}
              </Text>
            </View>
            <View style={s.iDate}>
              <Text>
                <Text style={[s.bold, s.italic]}>{labels.checkOut} </Text>
                {data.checkOut}
              </Text>
            </View>
          </View>
        </View>

        {/* Tabela de serviços */}
        <View style={{ marginTop: 8 }}>
          <View style={[s.row, s.ruleBottom, { paddingBottom: 3 }]}>
            <Text style={[s.th, { flex: 1 }]}>{labels.serviceDescription}</Text>
            <Text style={[s.th, { width: 60 }]}>{labels.total}</Text>
            <Text style={[s.th, { width: 80 }]}>{labels.status}</Text>
          </View>
          <View style={s.ruleBottom}>
            {data.services.map((row, i) => (
              <View key={i} style={[s.row, { paddingVertical: 2 }]}>
                <Text style={{ flex: 1, paddingRight: 6 }}>
                  {row.date} {row.time} <Text style={s.bold}>{row.description}</Text>
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
            <Text style={s.sectionLabel}>{labels.includes}</Text>
            {data.includes.map((item, i) => (
              <Text key={i}>{item};</Text>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.sectionLabel}>{labels.notIncludes}</Text>
            {data.notIncludes.map((item, i) => (
              <Text key={i}>{item};</Text>
            ))}
          </View>
        </View>

        {/* Operação */}
        <View style={{ marginTop: 10, marginBottom: 4 }}>
          <Text>
            <Text style={s.bold}>{labels.operation} </Text>
            {data.operation}
          </Text>
        </View>

        {/* Tabela de pagamentos */}
        <View style={[s.row, s.ruleTop, s.ruleBottom, { paddingVertical: 3 }]}>
          <Text style={[s.th, { flex: 1 }]}>{labels.paymentData}</Text>
          <Text style={[s.th, { width: 80 }]}>{labels.date}</Text>
          <Text style={[s.th, { width: 60 }]}>{labels.price}</Text>
          <Text style={[s.th, { width: 90 }]}>{labels.paymentForm}</Text>
          <Text style={[s.th, { width: 70 }]}>{labels.status}</Text>
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
          <Text style={s.bold}>{labels.emergencyData}</Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text>
            <Text style={s.bold}>{labels.emergencyContact}</Text>:{' '}
            <Value value={data.emergencyName} fallback={labels.missing} /> –{' '}
            <Value value={data.emergencyRelation} fallback={labels.missing} /> –{' '}
            <Value value={data.emergencyPhone} fallback="+0000000" />
          </Text>
        </View>

        {/* Checklist geral */}
        <View style={{ marginTop: 10 }}>
          <Text style={[s.bold, { marginBottom: 4 }]}>{labels.checklist}</Text>
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

        {/* Informações adicionais — o modelo traz o texto em PT e, quando o
            cliente não é brasileiro, a versão no idioma dele em itálico. */}
        <View style={{ marginTop: 12 }}>
          <Text style={s.bold}>{legal.additionalInfo.title}</Text>
          <Text style={{ marginTop: 4 }}>{LEGAL.pt.additionalInfo.body}</Text>
          {data.locale !== 'pt' && (
            <Text style={s.italic}>{legal.additionalInfo.body}</Text>
          )}
        </View>
      </Page>

      {/* ---------- Páginas seguintes: texto legal ----------
          Idioma do cliente primeiro, complementar depois (LEGAL_ORDER). */}
      {LEGAL_ORDER[data.locale].map((locale) => (
        <LegalPage key={locale} locale={locale} data={data} logo={logo} labels={labels} />
      ))}
    </Document>
  );
}
