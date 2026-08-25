import type { MetadataRoute } from 'next';
import { LOCALES, ADVENTURE_SEGMENT, SITE, type Locale } from '@/lib/site';
import { ADVENTURE_ROUTES } from '@/lib/routes';

const BASE = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const homeLangs = langMap((l) => `${BASE}/${l}`);
  const hubLangs = langMap((l) => `${BASE}/${l}/${ADVENTURE_SEGMENT[l]}`);

  // Home + hub de aventuras, em cada idioma, com hreflang entre as versões.
  for (const locale of LOCALES) {
    entries.push({ url: `${BASE}/${locale}`, alternates: { languages: homeLangs } });
    entries.push({
      url: `${BASE}/${locale}/${ADVENTURE_SEGMENT[locale]}`,
      alternates: { languages: hubLangs },
    });
  }

  // Página institucional já redesenhada em português. EN/ES permanecem fora
  // até receberem conteúdo equivalente, conforme a arquitetura atual do repo.
  entries.push({ url: `${BASE}/pt/sobre` });
  entries.push({ url: `${BASE}/pt/manifesto` });
  entries.push({ url: `${BASE}/pt/contato` });
  entries.push({ url: `${BASE}/pt/dicas` });

  // Cada roteiro, em cada idioma.
  for (const locale of LOCALES) {
    for (const adv of ADVENTURE_ROUTES) {
      entries.push({
        url: `${BASE}/${locale}/${ADVENTURE_SEGMENT[locale]}/${adv[locale]}`,
        alternates: {
          languages: langMap((l) => `${BASE}/${l}/${ADVENTURE_SEGMENT[l]}/${adv[l]}`),
        },
      });
    }
  }

  return entries;
}

function langMap(build: (locale: Locale) => string) {
  const map: Record<string, string> = {};
  for (const l of LOCALES) map[l] = build(l);
  return map;
}
