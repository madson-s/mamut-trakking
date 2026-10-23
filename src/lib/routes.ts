import { ADVENTURE_SEGMENT, LOCALES, type Locale } from './site';
import { DICAS_PATHS, DICAS_SEGMENT } from '@/components/dicas/dicas-rotas';

// Manifesto estrutural de URLs (apenas slugs, sem conteúdo) usado para gerar o
// sitemap e os hreflang. Cada aventura tem um id estável e um slug por idioma.
// As páginas em si são estáticas e independentes — este arquivo só existe para
// que o sitemap não precise varrer o sistema de arquivos.

export type AdventureRoute = { id: string } & Record<Locale, string>;

export const ADVENTURE_ROUTES: AdventureRoute[] = [
  { id: 'palmital', pt: 'cachoeira-do-palmital', en: 'palmital-waterfall', es: 'cascada-del-palmital', fr: 'cascade-du-palmital', nl: 'waterval-palmital', de: 'wasserfall-palmital' },
  { id: 'aguas-claras', pt: 'trilha-aguas-claras-2-dias', en: 'aguas-claras-trail', es: 'sendero-aguas-claras', fr: 'sentier-aguas-claras', nl: 'wandelpad-aguas-claras', de: 'wanderweg-aguas-claras' },
  { id: 'mosquito-pai-inacio', pt: 'mosquito-pai-inacio', en: 'mosquito-waterfall-pai-inacio-hill', es: 'cascada-del-mosquito-morro-do-pai-inacio', fr: 'cascade-du-mosquito-morro-do-pai-inacio', nl: 'waterval-mosquito-morro-do-pai-inacio', de: 'wasserfall-mosquito-morro-do-pai-inacio' },
  { id: 'mixila', pt: 'cachoeira-do-mixila', en: 'cachoeira-do-mixila-2-days', es: 'cascada-del-mixila', fr: 'cascade-du-mixila', nl: 'waterval-mixila', de: 'wasserfall-mixila' },
  { id: 'vale-do-pati-3', pt: 'vale-do-pati-03-dias', en: 'pati-valley-3-days', es: 'valle-del-pati-3-dias', fr: 'vallee-du-pati-3-jours', nl: 'pati-vallei-3-dagen', de: 'pati-tal-3-tage' },
  { id: 'vale-do-pati-4', pt: 'vale-do-pati-4-dias', en: 'pati-valley-4-days', es: 'valle-del-pati-4-dias', fr: 'vallee-du-pati-4-jours', nl: 'pati-vallei-4-dagen', de: 'pati-tal-4-tage' },
  { id: 'vale-do-pati-5', pt: 'vale-do-pati-05-dias', en: 'pati-valley-5-days', es: 'valle-del-pati-5-dias', fr: 'vallee-du-pati-5-jours', nl: 'pati-vallei-5-dagen', de: 'pati-tal-5-tage' },
  { id: 'pacote-3', pt: 'pacote-3-dias', en: 'package-3-days', es: 'paquete-3-dias', fr: 'forfait-3-jours', nl: 'pakket-3-dagen', de: 'paket-3-tage' },
  { id: 'pacote-4', pt: 'pacote-4-dias', en: 'package-4-days', es: 'paquete-4-dias', fr: 'forfait-4-jours', nl: 'pakket-4-dagen', de: 'paket-4-tage' },
  { id: 'pacote-6', pt: 'pacote-6-dias', en: 'package-6-days', es: 'paquete-6-dias', fr: 'forfait-6-jours', nl: 'pakket-6-dagen', de: 'paket-6-tage' },
  { id: 'mosquito', pt: 'cachoeira-do-mosquito', en: 'mosquito-waterfall', es: 'cascada-del-mosquito', fr: 'cascade-du-mosquito', nl: 'waterval-mosquito', de: 'wasserfall-mosquito' },
  { id: 'sossego', pt: 'cachoeira-do-sossego', en: 'sossego-waterfall', es: 'cascada-do-sossego', fr: 'cascade-du-sossego', nl: 'waterval-sossego', de: 'wasserfall-sossego' },
  { id: 'pai-inacio', pt: 'morro-do-pai-inacio', en: 'pai-inacio-hill', es: 'morro-do-pai-inacio', fr: 'morro-do-pai-inacio', nl: 'morro-do-pai-inacio', de: 'morro-do-pai-inacio' },
  { id: 'fumaca', pt: 'cachoeira-da-fumaca', en: 'fumaca-waterfall', es: 'cascada-da-fumaca', fr: 'cascade-da-fumaca', nl: 'waterval-fumaca', de: 'wasserfall-fumaca' },
  { id: 'fumacinha', pt: 'cachoeira-da-fumacinha', en: 'fumacinha-waterfall', es: 'cascada-da-fumacinha', fr: 'cascade-da-fumacinha', nl: 'waterval-fumacinha', de: 'wasserfall-fumacinha' },
  { id: 'marimbus', pt: 'pantanal-marimbus', en: 'marimbus-swamp', es: 'pantanal-marimbus', fr: 'marais-de-marimbus', nl: 'moeras-van-marimbus', de: 'sumpfgebiet-marimbus' },
  { id: 'buracao', pt: 'cachoeira-do-buracao', en: 'buracao-waterfall', es: 'cascada-do-buracao', fr: 'cascade-du-buracao', nl: 'waterval-buracao', de: 'wasserfall-buracao' },
  { id: 'herculano', pt: 'cachoeira-do-herculano', en: 'herculano-waterfall', es: 'cascada-do-herculano', fr: 'cascade-du-herculano', nl: 'waterval-herculano', de: 'wasserfall-herculano' },
  { id: 'ferradura', pt: 'cachoeira-da-ferradura', en: 'ferradura-waterfall', es: 'cascada-da-ferradura', fr: 'cascade-da-ferradura', nl: 'waterval-ferradura', de: 'wasserfall-ferradura' },
  { id: 'ribeirao', pt: 'ribeirao-do-meio', en: 'ribeirao-do-meio-natural-pool', es: 'ribeirao-do-meio', fr: 'ribeirao-do-meio', nl: 'ribeirao-do-meio', de: 'ribeirao-do-meio' },
  { id: 'mirante-pati', pt: 'mirante-do-pati', en: 'pati-viewpoint-1-day', es: 'mirador-del-pati', fr: 'belvedere-du-pati', nl: 'uitzichtpunt-pati', de: 'aussichtspunkt-pati' },
  { id: 'cachoeirao', pt: 'mirante-do-cachoeirao', en: 'cachoeirao-viewpoint', es: 'mirador-do-cachoeirao', fr: 'belvedere-du-cachoeirao', nl: 'uitzichtpunt-cachoeirao', de: 'aussichtspunkt-cachoeirao' },
  { id: 'grutas', pt: 'grutas', en: 'caves-tour', es: 'grutas', fr: 'grottes', nl: 'grotten', de: 'hoehlen' },
  { id: 'pati-4-capao', pt: 'vale-do-pati-4-dias-via-capao', en: 'pati-valley-4-days-capao-way', es: 'valle-del-pati-4-dias-via-capao', fr: 'vallee-du-pati-4-jours-par-capao', nl: 'pati-vallei-4-dagen-via-capao', de: 'pati-tal-4-tage-ueber-capao' },
  { id: 'pati-5-capao', pt: 'vale-do-pati-5-dias-capao', en: 'pati-valley-5-days-capao-way', es: 'valle-del-pati-5-dias-via-capao', fr: 'vallee-du-pati-5-jours-par-capao', nl: 'pati-vallei-5-dagen-via-capao', de: 'pati-tal-5-tage-ueber-capao' },
  { id: 'fumaca-baixo', pt: 'cachoeira-da-fumaca-por-baixo', en: 'fumaca-waterfall-from-bellow', es: 'cascada-da-fumaca-por-abajo', fr: 'cascade-da-fumaca-par-le-bas', nl: 'waterval-fumaca-van-onderen', de: 'wasserfall-fumaca-von-unten' },
  { id: 'fumaca-360', pt: 'cachoeira-da-fumaca-360', en: 'fumaca-waterfall-360', es: 'cascada-da-fumaca-360', fr: 'cascade-da-fumaca-360', nl: 'waterval-fumaca-360', de: 'wasserfall-fumaca-360' },
  { id: 'fundao', pt: 'cachoeira-do-fundao-vinte-e-um', en: 'fundao-vinte-e-um-waterfalls', es: 'cascadas-do-fundao-vinte-e-um', fr: 'cascades-du-fundao-vinte-e-um', nl: 'watervallen-fundao-vinte-e-um', de: 'wasserfaelle-fundao-vinte-e-um' },
  { id: 'muritiba', pt: 'parque-da-muritiba', en: 'muritiba-park', es: 'parque-da-muritiba', fr: 'parc-de-la-muritiba', nl: 'park-muritiba', de: 'park-muritiba' },
  { id: 'aguas-claras-1d', pt: 'aguas-claras', en: 'aguas-claras-trail-1-day', es: 'sendero-aguas-claras-1-dia', fr: 'sentier-aguas-claras-1-jour', nl: 'wandelpad-aguas-claras-1-dag', de: 'wanderweg-aguas-claras-1-tag' },
  { id: 'pratinha', pt: 'fazenda-pratinha', en: 'pratinha-farm-blue-cave', es: 'fazenda-pratinha', fr: 'fazenda-pratinha', nl: 'fazenda-pratinha', de: 'fazenda-pratinha' },
  { id: 'city-tour-lencois', pt: 'city-tour-em-lencois-ba', en: 'lencois-city-tour', es: 'city-tour-lencois', fr: 'visite-de-lencois', nl: 'stadstour-lencois', de: 'stadtfuehrung-lencois' },
  { id: 'reveillon', pt: 'reveillon-na-chapada', en: 'new-years-eve-chapada', es: 'ano-nuevo-en-la-chapada', fr: 'reveillon-dans-la-chapada', nl: 'oudejaarsavond-in-de-chapada', de: 'silvester-in-der-chapada' },
];

/**
 * Páginas fora da seção de aventuras, por idioma. Ausência de chave significa
 * "ainda não traduzida" — o seletor de idioma cai na home nesse caso.
 */
const PAGE_ROUTES: Partial<Record<Locale, string>>[] = [
  { pt: 'calendario-e-grupos', en: 'calendar-and-groups', es: 'calendario-y-grupos', fr: 'calendrier-et-groupes', nl: 'kalender-en-groepen', de: 'kalender-und-gruppen' },
  { pt: 'torus-festival-chapada-diamantina-2026' },
  { pt: 'formulario-participante', en: 'participant-form', es: 'formulario-participante', fr: 'formulaire-participant', nl: 'deelnemersformulier', de: 'teilnehmerformular' },
  { pt: 'dicas', en: 'tips', es: 'consejos', fr: 'conseils', nl: 'tips', de: 'tipps' },
  { pt: 'informacoes-gerais', en: 'general-information', es: 'informacion-general', fr: 'informations-generales', nl: 'algemene-informatie', de: 'allgemeine-informationen' },
  { pt: 'classificacao-de-nivel', en: 'level-classification', es: 'clasificacion-de-nivel', fr: 'classification-des-niveaux', nl: 'niveauclassificatie', de: 'schwierigkeitsgrade' },
  { pt: 'geologia-da-chapada-diamantina', en: 'geology-of-chapada-diamantina', es: 'geologia-de-la-chapada-diamantina', fr: 'geologie-de-la-chapada-diamantina', nl: 'geologie-van-de-chapada-diamantina', de: 'geologie-der-chapada-diamantina' },
  { pt: 'transfer-salvador-para-lencois-chapada-diamantina', en: 'transfer-salvador-to-lencois-chapada-diamantina', es: 'traslado-salvador-lencois-chapada-diamantina', fr: 'transfert-salvador-lencois-chapada-diamantina', nl: 'transfer-salvador-lencois-chapada-diamantina', de: 'transfer-salvador-lencois-chapada-diamantina' },
  { pt: 'sobre', en: 'about', es: 'quienes-somos', fr: 'a-propos', nl: 'over-ons', de: 'ueber-uns' },
  { pt: 'manifesto', en: 'manifesto', es: 'manifiesto', fr: 'manifeste', nl: 'manifest', de: 'manifest' },
  { pt: 'contato', en: 'contact', es: 'contacto', fr: 'contact', nl: 'contact', de: 'kontakt' },
  { pt: 'perguntas-frequentes', en: 'faq', es: 'preguntas-frecuentes', fr: 'questions-frequentes', nl: 'veelgestelde-vragen', de: 'haeufige-fragen' },
  { pt: 'politica-de-privacidade', en: 'privacy-policy', es: 'politica-de-privacidad', fr: 'politique-de-confidentialite', nl: 'privacybeleid', de: 'datenschutz' },
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
