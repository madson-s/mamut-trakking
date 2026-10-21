/**
 * País do visitante, para o aviso de cookies saber se precisa aparecer.
 *
 * As páginas são estáticas (o mesmo HTML para todo mundo), então o país não
 * pode vir no HTML: o cliente pergunta aqui uma vez e guarda a resposta. A
 * Vercel preenche `x-vercel-ip-country` em toda requisição; fora dela (dev
 * local) o cabeçalho não existe e a resposta é `country: null`.
 *
 * Não guarda nem registra nada — só devolve o país (ISO-3166 alfa-2).
 */
export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase() || null;
  return Response.json(
    { country },
    // Depende de quem pergunta: não pode ser cacheado na CDN.
    { headers: { 'Cache-Control': 'private, no-store' } },
  );
}
