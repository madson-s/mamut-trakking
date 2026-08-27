/**
 * As travessias do Vale do Pati de 4 e 5 dias, derivadas da de 3 dias.
 *
 * As três percorrem o mesmo vale, hospedam nas mesmas casas, comem a mesma
 * comida e cobram o mesmo sinal. O que muda é o número de dias, o itinerário,
 * os marcos e o preço — e é só isso que cada variante declara aqui. Sazonais,
 * editoriais, selos de confiança, FAQ de pagamento e o sheet de reserva vêm
 * inteiros de `pati-3-content`, então não há como divergirem por descuido.
 *
 * Fonte: mamut.agency/aventuras/vale-do-pati-{4-dias,05-dias} e as versões
 * inglesas. ES é tradução feita aqui.
 */

import type { Locale } from '@/lib/site';
import { PATI3_CONTENT, type Pati3Content } from './pati-3-content';
import { PATI3_FAQS } from './pati-3-faqs';
import type { PatiFaqItem } from './PatiFaqList';

/** O que uma variante precisa dizer por conta própria. */
export type PatiVariant = {
  meta: Pati3Content['meta'];
  hero: Pick<Pati3Content['hero'], 'nivel' | 'origem' | 'titulo' | 'lead' | 'apoio' | 'saida'>;
  story: Pick<Pati3Content['story'], 'titulo' | 'paragrafos' | 'outrasVersoes' | 'relacionados'>;
  dias: Pati3Content['itinerary']['dias'];
  landmarks: Pati3Content['landmarks']['itens'];
  /** Substitui o "o que está incluso" do 3 dias — muda o número de noites. */
  included: { title: string; included: readonly string[]; excluded: readonly string[] };
  /** Risco específico desta travessia, no lugar do aviso do 3 dias. */
  safetyWarning: string;
};

export function buildPatiContent(locale: Locale, v: PatiVariant): Pati3Content {
  const base = PATI3_CONTENT[locale];
  return {
    ...base,
    meta: v.meta,
    hero: { ...base.hero, ...v.hero },
    story: { ...base.story, ...v.story },
    itinerary: { ...base.itinerary, dias: v.dias },
    landmarks: { ...base.landmarks, itens: v.landmarks },
  };
}

export function buildPatiFaqs(locale: Locale, v: PatiVariant): readonly PatiFaqItem[] {
  return PATI3_FAQS[locale].map((faq) => {
    if (faq.type === 'included') return { type: 'included', ...v.included };
    if (faq.type === 'safety') return { ...faq, warning: v.safetyWarning };
    return faq;
  });
}
