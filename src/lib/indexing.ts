/**
 * "Porta fechada" da migração: enquanto o site novo não estiver no ar no lugar
 * do antigo, ele não pode entrar no índice do Google — os dois no ar com o
 * mesmo conteúdo seriam tratados como duplicados, e o Google escolheria sozinho
 * qual mostrar.
 *
 * Fechado é o padrão. Só abre com SITE_INDEXABLE=true, que se liga no deploy
 * do dia da virada. Fechado, o site:
 *   • manda `noindex, nofollow` em toda resposta (cabeçalho X-Robots-Tag, no
 *     next.config) e na meta robots de cada idioma;
 *   • NÃO bloqueia o rastreamento no robots.txt — de propósito: com o
 *     rastreamento bloqueado o Google não chega a ler o noindex, e ainda pode
 *     indexar a URL por links de fora (sem descrição). O noindex só funciona
 *     se o robô puder ver a página.
 *
 * É lido no build: trocar o valor exige novo build/deploy.
 * Complementa — não substitui — a senha no servidor (Basic Auth) do plano.
 */
export const SITE_INDEXABLE = process.env.SITE_INDEXABLE === 'true';

/** Meta robots dos layouts de idioma. */
export const ROBOTS_META = SITE_INDEXABLE
  ? { index: true, follow: true }
  : { index: false, follow: false };
