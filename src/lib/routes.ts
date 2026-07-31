import type { Locale } from './site';

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
  { id: 'city-tour-lencois', pt: 'city-tour-lencois', en: 'lencois-city-tour', es: 'city-tour-lencois' },
  { id: 'reveillon', pt: 'reveillon-na-chapada', en: 'new-years-eve-chapada', es: 'ano-nuevo-en-la-chapada' },
];
