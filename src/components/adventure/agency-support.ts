/**
 * O que a agência oferece em volta do passeio, igual em todo roteiro:
 * as comodidades da sede em Lençóis e o "antes / depois" das travessias.
 *
 * - `AGENCY_FACILITIES` aparece em toda página de passeio (`AgencyFacilities`).
 * - `tripLogistics()` monta os dois blocos que ficam abaixo do itinerário das
 *   atividades de 2 dias ou mais (`TripLogistics`). O "antes" é o mesmo para
 *   todas; o "depois" muda só a hora de chegada em Lençóis — declare-a nos
 *   assets do roteiro como `returnTime` (`DayTourAssets` / `PatiAssets`).
 *   Sem `returnTime`, a seção não aparece.
 */

import type { Locale } from '@/lib/site';

export type AgencyFacility = { titulo: string; apoio: string };
export type TripLogisticsBlock = { titulo: string; itens: string[] };

/**
 * Chegada de volta a Lençóis. `byRoad: false` quando o último trecho é a pé
 * (a trilha termina no centro): aí o atraso possível é só o ritmo do grupo.
 */
export type ReturnTime = {
  time: `${number}:${number}`;
  /** Fim da janela, quando a chegada é uma faixa ("entre 16h00 e 17h00"). */
  until?: `${number}:${number}`;
  byRoad?: boolean;
};

/** Na ordem dos ícones de `AgencyFacilities`: sala de espera, guarda-volumes, chuveiro. */
export const AGENCY_FACILITIES: Record<Locale, AgencyFacility[]> = {
  pt: [
    { titulo: 'Sala de espera', apoio: 'Antes e depois das atividades' },
    { titulo: 'Guarda-volumes', apoio: 'Para a bagagem extra' },
    { titulo: 'Chuveiro', apoio: 'Antes e depois das atividades' },
  ],
  en: [
    { titulo: 'Waiting room', apoio: 'Before and after the activities' },
    { titulo: 'Luggage storage', apoio: 'Keep your extra luggage safe' },
    { titulo: 'Shower', apoio: 'Before and after the activities' },
  ],
  es: [
    { titulo: 'Sala de espera', apoio: 'Antes y después de las actividades' },
    { titulo: 'Guardaequipaje', apoio: 'Para el equipaje extra' },
    { titulo: 'Ducha', apoio: 'Antes y después de las actividades' },
  ],
  fr: [
    { titulo: 'Salle d’attente', apoio: 'Avant et après les activités' },
    { titulo: 'Consigne à bagages', apoio: 'Pour vos bagages en plus' },
    { titulo: 'Douche', apoio: 'Avant et après les activités' },
  ],
  nl: [
    { titulo: 'Wachtruimte', apoio: 'Voor en na de activiteiten' },
    { titulo: 'Bagageopslag', apoio: 'Voor je extra bagage' },
    { titulo: 'Douche', apoio: 'Voor en na de activiteiten' },
  ],
};

/**
 * Quarto item das comodidades, só nos passeios com acampamento
 * (`DayTourAssets.campingGear`): o equipamento que vai incluso no pacote.
 */
export const CAMPING_GEAR: Record<Locale, AgencyFacility> = {
  pt: { titulo: 'Equipamento de camping', apoio: 'Incluso: saco de dormir, isolante térmico simples e barraca para 2 pessoas' },
  en: { titulo: 'Camping gear', apoio: 'Included: sleeping bag, basic sleeping pad and 2-person tent' },
  es: { titulo: 'Equipo de camping', apoio: 'Incluido: bolsa de dormir, aislante térmico simple y carpa para 2 personas' },
  fr: { titulo: 'Matériel de camping', apoio: 'Inclus : sac de couchage, matelas isolant simple et tente 2 places' },
  nl: { titulo: 'Kampeeruitrusting', apoio: 'Inbegrepen: slaapzak, eenvoudig isolatiematje en tent voor 2 personen' },
};

/** "19:00" no formato de hora de cada idioma — o mesmo usado no resto do copy. */
function formatTime(time: string, locale: Locale): string {
  const [h, m] = time.split(':').map(Number);
  const mm = String(m).padStart(2, '0');
  switch (locale) {
    case 'pt': return `${h}h${mm}`;
    case 'en': return `${h % 12 || 12}:${mm} ${h < 12 ? 'am' : 'pm'}`;
    case 'es': return `${h}:${mm}`;
    case 'fr': return m ? `${h} h ${mm}` : `${h} h`;
    case 'nl': return `${h}.${mm} uur`;
  }
}

const COPY: Record<Locale, {
  antes: string;
  depois: string;
  itensAntes: string[];
  /** `quando` já vem pronto: "por volta das 19h00" ou "entre 16h00 e 17h00". */
  quando: (hora: string, ate?: string) => string;
  chegada: (quando: string, byRoad: boolean) => string;
  /** Chegada a partir das 18h: banho e bagagem durante o jantar, antes do ônibus. */
  banho: string;
  /** Chegada mais cedo: sem jantar no meio — só até a hora do ônibus. */
  banhoCedo: string;
}> = {
  pt: {
    antes: 'Antes da atividade',
    depois: 'Depois da atividade',
    itensAntes: [
      'Confira o checklist nesta página. O mais importante: camisa de manga longa (o sol é forte), bota de trilha ou similar, capa de chuva e uma boa mochila.',
      'Você pode chegar um dia antes da trilha. Sugerimos reservar hospedagem sem café da manhã, porque as pousadas servem tarde. Em Lençóis, perto do nosso escritório, há bons lugares para tomar café a partir das 6h00.',
      'Também dá para chegar no mesmo dia da atividade: pegue o ônibus noturno de Salvador para Lençóis, que chega por volta das 6h00. As poltronas do andar de baixo são um pouco mais caras e bem confortáveis — mas ainda é ônibus.',
      'Durante a atividade, você pode deixar a bagagem extra no nosso escritório, sem custo adicional.',
    ],
    quando: (hora, ate) => (ate ? `entre ${hora} e ${ate}` : `por volta das ${hora}`),
    chegada: (quando, byRoad) =>
      `A chegada em Lençóis é ${quando}. Pode haver atraso ${byRoad ? 'pelo trânsito na estrada ou pelo ritmo do grupo' : 'conforme o ritmo do grupo'}.`,
    banho: 'Na agência você pode tomar banho e deixar a bagagem enquanto janta, antes do ônibus, se precisar.',
    banhoCedo: 'Na agência você pode tomar banho e deixar a bagagem até a hora do seu ônibus, se precisar.',
  },
  en: {
    antes: 'Before the activity',
    depois: 'After the activity',
    itensAntes: [
      'Check the checklist on this page. The most important items are a long-sleeve shirt (there is a lot of sun), hiking boots or similar, a raincoat and a good backpack.',
      'You can arrive the day before the trek. We suggest booking accommodation without breakfast, because the guesthouses serve it quite late. In Lençóis, near our office, there are good spots for breakfast from 6:00 am.',
      'You can also arrive on the day of the activity: take the overnight bus from Salvador to Lençóis, which arrives around 6:00 am. The seats on the lower deck are a little more expensive and very comfortable — but it is still a bus.',
      'During the activity, you can leave your extra luggage at our office, at no extra cost.',
    ],
    quando: (hora, ate) => (ate ? `between ${hora} and ${ate}` : `around ${hora}`),
    chegada: (quando, byRoad) =>
      `You should arrive in Lençóis ${quando}. Delays can happen due to ${byRoad ? 'highway traffic and the group’s pace' : 'the group’s pace'}.`,
    banho: 'At the agency you can take a shower and leave your luggage while you have dinner before your bus, if you need to.',
    banhoCedo: 'At the agency you can take a shower and leave your luggage until your bus leaves, if you need to.',
  },
  es: {
    antes: 'Antes de la actividad',
    depois: 'Después de la actividad',
    itensAntes: [
      'Revisá el checklist en esta página. Lo más importante: remera de manga larga (el sol es fuerte), botas de trekking o similares, campera de lluvia y una buena mochila.',
      'Podés llegar un día antes del trekking. Te sugerimos reservar alojamiento sin desayuno, porque las posadas lo sirven tarde. En Lençóis, cerca de nuestra oficina, hay buenos lugares para desayunar desde las 6:00.',
      'También podés llegar el mismo día de la actividad: tomá el bus nocturno de Salvador a Lençóis, que llega alrededor de las 6:00. Los asientos de la planta baja son un poco más caros y muy cómodos — pero sigue siendo un bus.',
      'Durante la actividad podés dejar el equipaje extra en nuestra oficina, sin costo adicional.',
    ],
    quando: (hora, ate) => (ate ? `entre las ${hora} y las ${ate}` : `alrededor de las ${hora}`),
    chegada: (quando, byRoad) =>
      `La llegada a Lençóis es ${quando}. Puede haber demoras ${byRoad ? 'por el tránsito en la ruta o por el ritmo del grupo' : 'según el ritmo del grupo'}.`,
    banho: 'En la agencia podés ducharte y dejar el equipaje mientras cenás, antes del bus, si lo necesitás.',
    banhoCedo: 'En la agencia podés ducharte y dejar el equipaje hasta la hora de tu bus, si lo necesitás.',
  },
  fr: {
    antes: 'Avant l’activité',
    depois: 'Après l’activité',
    itensAntes: [
      'Consultez la checklist sur cette page. Le plus important : un t-shirt à manches longues (le soleil est fort), des chaussures de randonnée ou équivalent, un imperméable et un bon sac à dos.',
      'Vous pouvez arriver la veille du trek. Nous conseillons de réserver un hébergement sans petit-déjeuner, car les pousadas le servent tard. À Lençóis, près de notre bureau, il y a de bonnes adresses pour prendre le petit-déjeuner dès 6 h.',
      'Vous pouvez aussi arriver le jour même : prenez le bus de nuit Salvador–Lençóis, qui arrive vers 6 h. Les sièges du niveau inférieur sont un peu plus chers et très confortables — mais cela reste un bus.',
      'Pendant l’activité, vous pouvez laisser vos bagages en plus à notre bureau, sans frais.',
    ],
    quando: (hora, ate) => (ate ? `entre ${hora} et ${ate}` : `vers ${hora}`),
    chegada: (quando, byRoad) =>
      `L’arrivée à Lençóis est prévue ${quando}. Des retards sont possibles selon ${byRoad ? 'la circulation sur la route et le rythme du groupe' : 'le rythme du groupe'}.`,
    banho: 'À l’agence, vous pouvez prendre une douche et laisser vos bagages pendant le dîner, avant votre bus, si besoin.',
    banhoCedo: 'À l’agence, vous pouvez prendre une douche et laisser vos bagages jusqu’au départ de votre bus, si besoin.',
  },
  nl: {
    antes: 'Voor de activiteit',
    depois: 'Na de activiteit',
    itensAntes: [
      'Bekijk de checklist op deze pagina. Het belangrijkste: een shirt met lange mouwen (er is veel zon), wandelschoenen of iets vergelijkbaars, een regenjas en een goede rugzak.',
      'Je kunt een dag voor de tocht aankomen. We raden aan accommodatie zonder ontbijt te boeken, want de pousadas serveren het pas laat. In Lençóis, vlak bij ons kantoor, zijn goede plekken om vanaf 6.00 uur te ontbijten.',
      'Je kunt ook op de dag zelf aankomen: neem de nachtbus van Salvador naar Lençóis, die rond 6.00 uur aankomt. De stoelen op de benedenverdieping zijn iets duurder en heel comfortabel — maar het blijft een bus.',
      'Tijdens de activiteit kun je je extra bagage gratis bij ons kantoor achterlaten.',
    ],
    quando: (hora, ate) => (ate ? `tussen ${hora} en ${ate}` : `rond ${hora}`),
    chegada: (quando, byRoad) =>
      `Je komt ${quando} aan in Lençóis. Vertraging kan ontstaan door ${byRoad ? 'verkeer op de snelweg en door het tempo van de groep' : 'het tempo van de groep'}.`,
    banho: 'Bij het kantoor kun je douchen en je bagage laten staan terwijl je eet, voordat je bus vertrekt, als dat nodig is.',
    banhoCedo: 'Bij het kantoor kun je douchen en je bagage laten staan tot je bus vertrekt, als dat nodig is.',
  },
};

export function tripLogistics(locale: Locale, { time, until, byRoad = true }: ReturnTime): TripLogisticsBlock[] {
  const t = COPY[locale];
  const quando = t.quando(formatTime(time, locale), until ? formatTime(until, locale) : undefined);
  return [
    { titulo: t.antes, itens: t.itensAntes },
    { titulo: t.depois, itens: [t.chegada(quando, byRoad), Number(time.split(':')[0]) >= 18 ? t.banho : t.banhoCedo] },
  ];
}
