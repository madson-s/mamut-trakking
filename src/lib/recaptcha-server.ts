import { RECAPTCHA_SITE_KEY, type RecaptchaAcao } from './recaptcha';

const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const TIMEOUT_MS = 8000;

function notaMinima() {
  const bruta = Number(process.env.RECAPTCHA_MIN_SCORE);
  return Number.isFinite(bruta) ? bruta : 0.5;
}

type Siteverify = {
  success?: boolean;
  score?: number;
  action?: string;
  'error-codes'?: string[];
};

export type RecaptchaResultado = { ok: true } | { ok: false; motivo: string };

export async function verificarRecaptcha(
  token: string | undefined,
  acao: RecaptchaAcao,
): Promise<RecaptchaResultado> {
  const segredo = process.env.RECAPTCHA_SECRET_KEY;

  if (!segredo || !RECAPTCHA_SITE_KEY) {
    console.warn('[recaptcha] chaves ausentes — verificação ignorada.');
    return { ok: true };
  }

  if (!token) return { ok: false, motivo: 'Verificação de segurança ausente.' };

  let corpo: Siteverify;
  try {
    const resposta = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: segredo, response: token }).toString(),
      cache: 'no-store',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    corpo = (await resposta.json()) as Siteverify;
  } catch (causa) {
    console.error('[recaptcha]', causa);
    return { ok: false, motivo: 'Não foi possível validar a verificação de segurança.' };
  }

  if (!corpo.success) {
    console.warn('[recaptcha] recusado:', corpo['error-codes']);
    return { ok: false, motivo: 'Verificação de segurança recusada.' };
  }

  if (corpo.action && corpo.action !== acao) {
    console.warn('[recaptcha] ação inesperada:', corpo.action);
    return { ok: false, motivo: 'Verificação de segurança recusada.' };
  }

  if (typeof corpo.score === 'number' && corpo.score < notaMinima()) {
    console.warn('[recaptcha] score baixo:', corpo.score);
    return { ok: false, motivo: 'Verificação de segurança recusada.' };
  }

  return { ok: true };
}
