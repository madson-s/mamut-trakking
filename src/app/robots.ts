import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const BASE = SITE.url;

// User-agents de crawlers de IA liberados explicitamente.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'PerplexityBot',
  'Google-Extended',
  'CCBot',
];

// Ferramentas internas: fora do índice (o layout da rota também manda noindex).
const PRIVATE_PATHS = ['/voucher'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE_PATHS },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: PRIVATE_PATHS })),
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
