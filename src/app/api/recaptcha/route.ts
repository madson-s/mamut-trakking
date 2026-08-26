import { RECAPTCHA_ACOES, type RecaptchaAcao } from '@/lib/recaptcha';
import { verificarRecaptcha } from '@/lib/recaptcha-server';

export const dynamic = 'force-dynamic';

const ACOES: string[] = Object.values(RECAPTCHA_ACOES);

function erro(mensagem: string, status: number) {
  return Response.json({ ok: false, error: mensagem }, { status });
}

export async function POST(request: Request) {
  let corpo: { token?: string; acao?: string };
  try {
    corpo = (await request.json()) as { token?: string; acao?: string };
  } catch {
    return erro('Corpo da requisição inválido.', 400);
  }

  if (!corpo.acao || !ACOES.includes(corpo.acao)) {
    return erro('Ação inválida.', 400);
  }

  const resultado = await verificarRecaptcha(corpo.token, corpo.acao as RecaptchaAcao);
  if (!resultado.ok) return erro(resultado.motivo, 400);

  return Response.json({ ok: true });
}

export function GET() {
  return erro('Use POST.', 405);
}
