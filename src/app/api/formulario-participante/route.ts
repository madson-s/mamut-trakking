import { Resend } from 'resend';
import { PARTICIPANTE_CONTENT } from '@/components/formulario/participante-conteudo';
import {
  assuntoDoEmail,
  documentoEmHtml,
  isLocale,
  montarDocumento,
  type ParticipantePayload,
} from '@/lib/participante-envio';
import { RECAPTCHA_ACOES } from '@/lib/recaptcha';
import { verificarRecaptcha } from '@/lib/recaptcha-server';
import { SITE } from '@/lib/site';

// A rota roda a cada request: não há o que pré-renderizar num POST.
export const dynamic = 'force-dynamic';

/**
 * Endereço remetente. Precisa ser de um domínio verificado na Resend — o
 * `onboarding@resend.dev` só entrega para o dono da conta, então serve para
 * teste, não para produção.
 */
const FROM = process.env.RESEND_FROM ?? 'Mamut Trekking <onboarding@resend.dev>';
const TO = process.env.PARTICIPANTE_TO ?? SITE.email;

function erro(mensagem: string, status: number) {
  return Response.json({ ok: false, error: mensagem }, { status });
}

export async function POST(request: Request) {
  let payload: ParticipantePayload;
  try {
    payload = (await request.json()) as ParticipantePayload;
  } catch {
    return erro('Corpo da requisição inválido.', 400);
  }

  // Campo-isca: fica escondido no formulário, então só robô preenche. Responde
  // 200 de propósito — negar avisaria o robô de que a isca foi detectada.
  if (payload.website) return Response.json({ ok: true });

  if (!isLocale(payload.locale)) return erro('Idioma inválido.', 400);

  const dados = payload.dados ?? {};
  if (!dados.nome?.trim() || !dados.email?.trim()) {
    return erro('Nome e e-mail são obrigatórios.', 400);
  }
  if (!payload.aceite) {
    return erro('É preciso aceitar os termos.', 400);
  }

  const recaptcha = await verificarRecaptcha(
    payload.recaptchaToken,
    RECAPTCHA_ACOES.participante,
  );
  if (!recaptcha.ok) return erro(recaptcha.motivo, 400);

  // A checagem da chave vem depois da validação: assim um payload inválido
  // responde 400 com ou sem configuração, e a isca acima nunca chega a 500.
  const chave = process.env.RESEND_API_KEY;
  if (!chave) return erro('RESEND_API_KEY não configurada no servidor.', 500);

  const texto = montarDocumento(payload);

  try {
    const resend = new Resend(chave);
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      // Responder no cliente de e-mail vai direto para o participante.
      replyTo: dados.email,
      subject: assuntoDoEmail(payload),
      text: texto,
      html: documentoEmHtml(texto),
    });

    if (error) {
      console.error('[formulario-participante] resend:', error);
      return erro('Não foi possível enviar o e-mail.', 502);
    }

    return Response.json({ ok: true, id: data?.id });
  } catch (causa) {
    console.error('[formulario-participante]', causa);
    return erro('Não foi possível enviar o e-mail.', 502);
  }
}

/** Só POST — o GET existe para deixar o erro claro em vez de 405 mudo. */
export function GET() {
  return erro(`Use POST. Formulário em ${PARTICIPANTE_CONTENT.pt.meta.canonical}.`, 405);
}
