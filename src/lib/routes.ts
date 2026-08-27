import { ADVENTURE_SEGMENT, LOCALES, type Locale } from './site';
import { DICAS_PATHS, DICAS_SEGMENT } from '@/components/dicas/dicas-rotas';

// Manifesto estrutural de URLs (apenas slugs, sem conteúdo) usado para gerar o
// sitemap e os hreflang. Cada aventura tem um id estável e um slug por idioma.
// As páginas em si são estáticas e independentes — este arquivo só existe para
// que o sitemap não precise varrer o sistema de arquivos.

export type AdventureRoute = { id: string } & Record<Locale, string>;

export const ADVENTURE_ROUTES: AdventureRoute[] = [
  { id: 'palmital', pt: 'cachoeira-do-palmital', en: 'palmital-waterfall', es: 'cascada-del-palmital' },
  { id: 'aguas-claras', pt: 'trilha-aguas-claras', en: 'aguas-claras-trail', es: 'sendero-aguas-claras' },
  { id: 'mosquito-pai-inacio', pt: 'cachoeira-do-mosquito-morro-do-pai-inacio', en: 'mosquito-waterfall-pai-inacio', es: 'cascada-del-mosquito-morro-do-pai-inacio' },
  { id: 'mixila', pt: 'cachoeira-do-mixila', en: 'mixila-waterfall', es: 'cascada-del-mixila' },
  { id: 'vale-do-pati-3', pt: 'vale-do-pati-3-dias', en: 'pati-valley-3-days', es: 'valle-del-pati-3-dias' },
  { id: 'vale-do-pati-4', pt: 'vale-do-pati-4-dias', en: 'pati-valley-4-days', es: 'valle-del-pati-4-dias' },
  { id: 'vale-do-pati-5', pt: 'vale-do-pati-5-dias', en: 'pati-valley-5-days', es: 'valle-del-pati-5-dias' },
  { id: 'pacote-3', pt: 'pacote-3-dias', en: 'package-3-days', es: 'paquete-3-dias' },
  { id: 'pacote-4', pt: 'pacote-4-dias', en: 'package-4-days', es: 'paquete-4-dias' },
  { id: 'pacote-6', pt: 'pacote-6-dias', en: 'package-6-days', es: 'paquete-6-dias' },
  { id: 'mosquito', pt: 'cachoeira-do-mosquito', en: 'mosquito-waterfall', es: 'cascada-del-mosquito' },
  { id: 'sossego', pt: 'cachoeira-do-sossego', en: 'sossego-waterfall', es: 'cascada-do-sossego' },
  { id: 'pai-inacio', pt: 'morro-do-pai-inacio', en: 'pai-inacio-hill', es: 'morro-do-pai-inacio' },
  { id: 'fumaca', pt: 'cachoeira-da-fumaca', en: 'fumaca-waterfall', es: 'cascada-da-fumaca' },
  { id: 'fumacinha', pt: 'cachoeira-da-fumacinha', en: 'fumacinha-waterfall', es: 'cascada-da-fumacinha' },
  { id: 'marimbus', pt: 'pantanal-marimbus', en: 'marimbus-swamp', es: 'pantanal-marimbus' },
  { id: 'buracao', pt: 'cachoeira-do-buracao', en: 'buracao-waterfall', es: 'cascada-do-buracao' },
  { id: 'herculano', pt: 'cachoeira-do-herculano', en: 'herculano-waterfall', es: 'cascada-do-herculano' },
  { id: 'ferradura', pt: 'cachoeira-da-ferradura', en: 'ferradura-waterfall', es: 'cascada-da-ferradura' },
  { id: 'ribeirao', pt: 'ribeirao-do-meio', en: 'ribeirao-do-meio-natural-pool', es: 'ribeirao-do-meio' },
  { id: 'mirante-pati', pt: 'mirante-do-pati', en: 'pati-viewpoint-1-day', es: 'mirador-del-pati' },
  { id: 'cachoeirao', pt: 'mirante-do-cachoeirao', en: 'cachoeirao-viewpoint', es: 'mirador-do-cachoeirao' },
  { id: 'grutas', pt: 'grutas', en: 'caves-tour', es: 'grutas' },
  { id: 'pati-4-capao', pt: 'vale-do-pati-4-dias-via-capao', en: 'pati-valley-4-days-capao-way', es: 'valle-del-pati-4-dias-via-capao' },
  { id: 'pati-5-capao', pt: 'vale-do-pati-5-dias-via-capao', en: 'pati-valley-5-days-capao-way', es: 'valle-del-pati-5-dias-via-capao' },
  { id: 'fumaca-baixo', pt: 'cachoeira-da-fumaca-por-baixo', en: 'fumaca-waterfall-from-bellow', es: 'cascada-da-fumaca-por-abajo' },
  { id: 'city-tour-lencois', pt: 'city-tour-lencois', en: 'lencois-city-tour', es: 'city-tour-lencois' },
  { id: 'reveillon', pt: 'reveillon-na-chapada', en: 'new-years-eve-chapada', es: 'ano-nuevo-en-la-chapada' },
];

/**
 * Páginas fora da seção de aventuras, por idioma. Ausência de chave significa
 * "ainda não traduzida" — o seletor de idioma cai na home nesse caso.
 */
const PAGE_ROUTES: Partial<Record<Locale, string>>[] = [
  { pt: 'formulario-participante', en: 'participant-form', es: 'formulario-participante' },
  { pt: 'dicas', en: 'tips', es: 'consejos' },
  { pt: 'informacoes-gerais', en: 'general-information', es: 'informacion-general' },
  { pt: 'classificacao-de-nivel', en: 'level-classification', es: 'clasificacion-de-nivel' },
  { pt: 'geologia-da-chapada-diamantina', en: 'geology-of-chapada-diamantina', es: 'geologia-de-la-chapada-diamantina' },
  { pt: 'sobre', en: 'about', es: 'quienes-somos' },
  { pt: 'manifesto', en: 'manifesto', es: 'manifiesto' },
  { pt: 'contato', en: 'contact', es: 'contacto' },
];

function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (LOCALES as readonly string[]).includes(value);
}

/**
 * Caminho equivalente a `pathname` no idioma `target`.
 *
 * Cai na home do idioma alvo quando a página não existe lá — é o caso de Quem
 * Somos, Manifesto e Contato, que só têm versão em português. Sub-rotas (a
 * galeria do Pati) voltam para a página-mãe pelo mesmo motivo.
 */
export function localizePath(pathname: string, target: Locale): string {
  const [, first, second, third] = pathname.split('/');
  if (!isLocale(first)) return `/${target}`;
  if (first === target) return pathname;
  if (!second) return `/${target}`;

  // A página da seção de dicas é "como chegar"; as outras três estão na raiz do
  // idioma e entram em PAGE_ROUTES, abaixo.
  if (second === DICAS_SEGMENT[first]) return DICAS_PATHS[target]['como-chegar'];

  if (second === ADVENTURE_SEGMENT[first]) {
    const hub = `/${target}/${ADVENTURE_SEGMENT[target]}`;
    if (!third) return hub;
    const adventure = ADVENTURE_ROUTES.find((route) => route[first] === third);
    return adventure ? `${hub}/${adventure[target]}` : hub;
  }

  const page = PAGE_ROUTES.find((route) => route[first] === second);
  const slug = page?.[target];
  return slug ? `/${target}/${slug}` : `/${target}`;
}
