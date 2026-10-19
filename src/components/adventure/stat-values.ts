import type { Locale } from '@/lib/site';

/**
 * Tradução dos valores da faixa de números dos roteiros ("2 dias / 1 noite",
 * "Barraca", "Moderado / Alto"…).
 *
 * Os valores moram nos `*_ASSETS.stats` de cada roteiro, que são comuns aos
 * idiomas (só o rótulo embaixo é traduzido, em `content.stats`). Por isso a
 * faixa saía em português em en/es/fr/nl. Em vez de duplicar a faixa em cada
 * idioma de cada roteiro, o valor em português é a chave deste dicionário.
 *
 * O que não está aqui passa direto: distâncias, altitudes e horários
 * ("22 km", "6h00"), nomes próprios ("Andaraí") e "PT · EN · ES". Valor novo
 * com palavra (ou número com separador decimal/milhar) entra aqui.
 */
const STAT_VALUES: Record<string, Record<Exclude<Locale, 'pt'>, string>> = {
  '+250m no Castelo': { en: '+250 m at Castelo', es: '+250 m en el Castelo', fr: '+250 m au Castelo', nl: '+250 m op de Castelo' },
  '1 dia': { en: '1 day', es: '1 día', fr: '1 jour', nl: '1 dag' },
  '1 hora': { en: '1 hour', es: '1 hora', fr: '1 heure', nl: '1 uur' },
  '1.200 m': { en: '1,200 m', es: '1.200 m', fr: '1 200 m', nl: '1.200 m' },
  '1.200m': { en: '1,200 m', es: '1.200 m', fr: '1 200 m', nl: '1.200 m' },
  '13 pontos': { en: '13 stops', es: '13 puntos', fr: '13 étapes', nl: '13 stops' },
  '2 cachoeiras': { en: '2 waterfalls', es: '2 cascadas', fr: '2 cascades', nl: '2 watervallen' },
  '2 dias / 1 noite': { en: '2 days / 1 night', es: '2 días / 1 noche', fr: '2 jours / 1 nuit', nl: '2 dagen / 1 nacht' },
  '2 ou 3 dias': { en: '2 or 3 days', es: '2 o 3 días', fr: '2 ou 3 jours', nl: '2 of 3 dagen' },
  '3 atrativos': { en: '3 sights', es: '3 atractivos', fr: '3 sites', nl: '3 bezienswaardigheden' },
  '3 cachoeiras': { en: '3 waterfalls', es: '3 cascadas', fr: '3 cascades', nl: '3 watervallen' },
  '3 dias / 2 noites': { en: '3 days / 2 nights', es: '3 días / 2 noches', fr: '3 jours / 2 nuits', nl: '3 dagen / 2 nachten' },
  '4 a 5 horas': { en: '4 to 5 hours', es: '4 a 5 horas', fr: '4 à 5 heures', nl: '4 à 5 uur' },
  '4 atrativos': { en: '4 sights', es: '4 atractivos', fr: '4 sites', nl: '4 bezienswaardigheden' },
  '4 dias / 3 noites': { en: '4 days / 3 nights', es: '4 días / 3 noches', fr: '4 jours / 3 nuits', nl: '4 dagen / 3 nachten' },
  '4 ângulos': { en: '4 angles', es: '4 ángulos', fr: '4 angles', nl: '4 invalshoeken' },
  '4,5 km': { en: '4.5 km', es: '4,5 km', fr: '4,5 km', nl: '4,5 km' },
  '5 dias / 4 noites': { en: '5 days / 4 nights', es: '5 días / 4 noches', fr: '5 jours / 4 nuits', nl: '5 dagen / 4 nachten' },
  '7 atrativos': { en: '7 sights', es: '7 atractivos', fr: '7 sites', nl: '7 bezienswaardigheden' },
  '8h às 14h': { en: '8:00 to 14:00', es: '8h a 14h', fr: '8h à 14h', nl: '8.00 tot 14.00 uur' },
  '8h às 9h': { en: '8:00 to 9:00', es: '8h a 9h', fr: '8h à 9h', nl: '8.00 tot 9.00 uur' },
  '9 km até a cachoeira': { en: '9 km to the waterfall', es: '9 km hasta la cascada', fr: '9 km jusqu’à la cascade', nl: '9 km tot de waterval' },
  Barraca: { en: 'Tent', es: 'Carpa', fr: 'Tente', nl: 'Tent' },
  'Casas de nativos': { en: 'Local homes', es: 'Casas de nativos', fr: 'Chez l’habitant', nl: 'Bij lokale families' },
  Leve: { en: 'Easy', es: 'Suave', fr: 'Facile', nl: 'Licht' },
  'Leve / Moderado': { en: 'Easy / Moderate', es: 'Suave / Moderado', fr: 'Facile / Modéré', nl: 'Licht / Gemiddeld' },
  'Meio dia': { en: 'Half day', es: 'Medio día', fr: 'Demi-journée', nl: 'Halve dag' },
  Moderado: { en: 'Moderate', es: 'Moderado', fr: 'Modéré', nl: 'Gemiddeld' },
  'Moderado / Alto': { en: 'Moderate / High', es: 'Moderado / Alto', fr: 'Modéré / Élevé', nl: 'Gemiddeld / Zwaar' },
  'Moderado / Difícil': { en: 'Moderate / Hard', es: 'Moderado / Difícil', fr: 'Modéré / Difficile', nl: 'Gemiddeld / Moeilijk' },
  'Moderado / Pesado': { en: 'Moderate / Strenuous', es: 'Moderado / Exigente', fr: 'Modéré / Difficile', nl: 'Gemiddeld / Zwaar' },
};

/** Valor da faixa no idioma da página (português passa direto). */
export function statValue(value: string, locale: Locale): string {
  if (locale === 'pt') return value;
  return STAT_VALUES[value]?.[locale] ?? value;
}
