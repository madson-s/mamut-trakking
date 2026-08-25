/**
 * Contrato entre o formulário do participante e a rota que envia o e-mail.
 *
 * A montagem do documento vive aqui, e não no componente, porque os dois
 * canais precisam dela: o WhatsApp monta no cliente, o e-mail monta no
 * servidor. Assim o texto que a operadora recebe é o mesmo nos dois caminhos.
 */

import { PARTICIPANTE_CONTENT } from '@/components/formulario/participante-conteudo';
import { LOCALES, type Locale } from './site';

export type ParticipantePayload = {
  locale: Locale;
  dados: Record<string, string>;
  medicas: Record<string, string>;
  sabeNadar: string;
  gravidez: string;
  aceite: boolean;
  /** Campo-isca: humano nunca preenche. Ver a rota de envio. */
  website?: string;
};

const CAMPO_VAZIO = '—';

function formatarData(iso: string) {
  if (!iso) return CAMPO_VAZIO;
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/** O documento em texto, na ordem em que o formulário pergunta. */
export function montarDocumento(payload: ParticipantePayload): string {
  const c = PARTICIPANTE_CONTENT[payload.locale];
  const { dados, medicas } = payload;

  const linha = (campo: keyof typeof c.campos, valor?: string) =>
    `${c.campos[campo].label}: ${valor || dados[campo] || CAMPO_VAZIO}`;

  return [
    c.documento.titulo,
    '',
    `— ${c.documento.pessoais} —`,
    linha('nome'),
    linha('nascimento', formatarData(dados.nascimento)),
    linha('documento'),
    linha('idade'),
    linha('nacionalidade'),
    linha('profissao'),
    linha('telefone'),
    linha('email'),
    linha('altura'),
    linha('peso'),
    linha('endereco'),
    linha('cidade'),
    '',
    `— ${c.documento.passeio} —`,
    linha('inicio', formatarData(dados.inicio)),
    linha('pagamento'),
    linha('hospedagem'),
    '',
    `— ${c.documento.medicas} —`,
    `${c.sabeNadar} ${payload.sabeNadar}`,
    ...c.perguntasMedicas.map((p) => `${p.label} ${medicas[p.id] || CAMPO_VAZIO}`),
    `${c.gravidez} ${payload.gravidez}`,
    '',
    `— ${c.documento.emergencia} —`,
    linha('emergenciaNome'),
    linha('emergenciaTelefone'),
    linha('emergenciaParentesco'),
    '',
    `— ${c.documento.termos} —`,
    payload.aceite ? c.documento.aceitos : c.documento.naoAceitos,
  ].join('\n');
}

export function assuntoDoEmail(payload: ParticipantePayload): string {
  const c = PARTICIPANTE_CONTENT[payload.locale];
  return `${c.documento.assunto} — ${payload.dados.nome || c.documento.semNome}`;
}

/** Versão HTML: o mesmo texto, só preservando as quebras de linha. */
export function documentoEmHtml(texto: string): string {
  const escapar = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return [
    '<div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;line-height:1.6;white-space:pre-wrap">',
    escapar(texto),
    '</div>',
  ].join('');
}
