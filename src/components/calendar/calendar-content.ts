import type { Locale } from '@/lib/site';
import type { HolidayId } from './calendar-data';

/**
 * Textos da página de calendário e grupos, por idioma.
 *
 * Só a moldura mora aqui. Nome, rota, preço, distância e dificuldade de cada
 * roteiro vêm do hub de aventuras (`aventurasDoIdioma`), que já é a fonte de
 * verdade em pt/en/es — assim o calendário nunca anuncia um preço diferente do
 * da página do roteiro.
 */
export type CalendarContent = {
  meta: { title: string; description: string; canonical: string };
  /** `Intl` das datas por extenso (mensagem de reserva). */
  intl: string;
  semana: readonly string[];
  meses: readonly string[];
  feriados: Record<HolidayId, string>;
  hero: {
    titulo: { antes: string; meio: string; depois: string };
    texto: string;
    cta: string;
    explorar: string;
    pilhaRotulo: string;
    verSaidasDe: (titulo: string) => string;
  };
  saida: (n: number) => string;
  dias: (n: number) => string;
  aPartirDe: string;
  /** Rótulo do preço de uma saída — o valor é o daquela data, não um "a partir de". */
  porPessoa: string;
  saidaDe: (origem: string) => string;
  partida: {
    rotulo: (titulo: string, periodo: string, ano: number) => string;
    feriado: string;
    linhaDoTempo: string;
    dia: (n: number) => string;
    status: { feriado: string; saida: string; retorno: string };
    reservar: string;
    reservarRotulo: (titulo: string, periodo: string) => string;
    mensagem: (roteiro: string, inicio: string, fim: string) => string;
  };
  calendarioRotulo: string;
  grupo: {
    /** `duracao` já vem formatada (`dias`); `distancia` falta nos roteiros sem página. */
    resumo: (duracao: string, distancia: string | undefined, origem: string, preco: string) => string;
    verRoteiro: string;
    verRoteiroRotulo: (nome: string) => string;
    /** Roteiro sem página própria: o botão do grupo abre o WhatsApp. */
    falar: string;
    mensagem: (nome: string) => string;
    fotoAlt: (nome: string) => string;
  };
  verao: { titulo: string; abrirCalendario: string; cta: string; mensagem: string };
  relacionados: {
    titulo: string;
    verTodas: string;
    fotoAlt: (nome: string) => string;
    verSaidas: string;
    pedirData: string;
  };
  novaData: { geral: string; roteiro: (nome: string) => string };
  contato: { titulo: string; texto: string; cta: string };
};

export const CALENDAR_HREF: Record<Locale, string> = {
  pt: '/pt/calendario-e-grupos',
  en: '/en/calendar-and-groups',
  es: '/es/calendario-y-grupos',
  fr: '/fr/calendrier-et-groupes',
  nl: '/nl/kalender-en-groepen',
};

export const CALENDAR_CONTENT: Record<Locale, CalendarContent> = {
  pt: {
    meta: {
      title: 'Calendário e grupos de trekking',
      description:
        'Confira as próximas saídas em grupo para o Vale do Pati e reserve sua vaga com guias nativos da Chapada Diamantina.',
      canonical: CALENDAR_HREF.pt,
    },
    intl: 'pt-BR',
    semana: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    meses: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    feriados: { aparecida: 'Nossa Senhora Aparecida', republica: 'Proclamação da República' },
    hero: {
      titulo: { antes: 'Próximos', meio: 'trekkings', depois: 'da Mamut' },
      texto: 'Caso não encontre sua data, entre em contato conosco que abriremos uma nova data para você.',
      cta: 'Falar com o guia',
      explorar: 'Explore todas as saídas',
      pilhaRotulo: 'Explore as próximas travessias',
      verSaidasDe: (titulo) => `Ver as próximas saídas de ${titulo}`,
    },
    saida: (n) => `${n} ${n === 1 ? 'saída' : 'saídas'}`,
    dias: (n) => `${n} ${n === 1 ? 'dia' : 'dias'}`,
    aPartirDe: 'A partir de',
    porPessoa: 'por pessoa',
    saidaDe: (origem) => `Saída de ${origem}`,
    partida: {
      rotulo: (titulo, periodo, ano) => `${titulo}, ${periodo} de ${ano}`,
      feriado: 'Feriado',
      linhaDoTempo: 'Dias da travessia',
      dia: (n) => `Dia ${n}`,
      status: { feriado: 'Feriado', saida: 'Saída', retorno: 'Retorno' },
      reservar: 'Reservar vaga',
      reservarRotulo: (titulo, periodo) => `Reservar ${titulo}, ${periodo}`,
      mensagem: (roteiro, inicio, fim) => `Olá! Quero reservar uma vaga no ${roteiro}, de ${inicio} a ${fim}.`,
    },
    calendarioRotulo: 'Calendário de saídas',
    grupo: {
      resumo: (duracao, distancia, origem, preco) => [duracao, distancia, `Saída de ${origem}`, `A partir de ${preco}`].filter(Boolean).join(' · '),
      verRoteiro: 'Ver roteiro completo',
      verRoteiroRotulo: (nome) => `Ver roteiro completo: ${nome}`,
      falar: 'Falar no WhatsApp',
      mensagem: (nome) => `Olá! Quero saber mais sobre o roteiro ${nome}.`,
      fotoAlt: (nome) => `Paisagem da travessia ${nome}`,
    },
    verao: {
      titulo: 'Grupos para o verão já disponíveis no nosso atendimento.',
      abrirCalendario: 'Abrir calendário completo',
      cta: 'Consultar datas de verão',
      mensagem: 'Olá! Quero saber dos grupos de verão.',
    },
    relacionados: {
      titulo: 'Não achou sua data? A gente abre uma.',
      verTodas: 'Ver todas as aventuras',
      fotoAlt: (nome) => `Paisagem de ${nome}`,
      verSaidas: 'Ver próximas saídas',
      pedirData: 'Pedir nova data',
    },
    novaData: {
      geral: 'Olá! Quero abrir uma nova data de saída.',
      roteiro: (nome) => `Olá! Quero abrir uma nova data para o roteiro ${nome}.`,
    },
    contato: {
      titulo: 'Sua data não está aqui?',
      texto: 'Conte quando você chega na Chapada e o roteiro que quer fazer. Abrimos uma nova saída para você.',
      cta: 'Falar com guia',
    },
  },
  en: {
    meta: {
      title: 'Trekking calendar and groups',
      description:
        'See the upcoming group departures to the Pati Valley and book your place with native guides from Chapada Diamantina.',
      canonical: CALENDAR_HREF.en,
    },
    intl: 'en-US',
    semana: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    meses: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    feriados: { aparecida: 'Our Lady of Aparecida', republica: 'Proclamation of the Republic' },
    hero: {
      titulo: { antes: 'Upcoming', meio: 'treks', depois: 'with Mamut' },
      texto: 'If you can’t find your date, get in touch and we’ll open a new departure for you.',
      cta: 'Talk to a guide',
      explorar: 'Explore all departures',
      pilhaRotulo: 'Explore the upcoming treks',
      verSaidasDe: (titulo) => `See the upcoming departures for ${titulo}`,
    },
    saida: (n) => `${n} ${n === 1 ? 'departure' : 'departures'}`,
    dias: (n) => `${n} ${n === 1 ? 'day' : 'days'}`,
    aPartirDe: 'From',
    porPessoa: 'per person',
    saidaDe: (origem) => `Departs from ${origem}`,
    partida: {
      rotulo: (titulo, periodo, ano) => `${titulo}, ${periodo} ${ano}`,
      feriado: 'Holiday',
      linhaDoTempo: 'Trek days',
      dia: (n) => `Day ${n}`,
      status: { feriado: 'Holiday', saida: 'Start', retorno: 'Return' },
      reservar: 'Book your place',
      reservarRotulo: (titulo, periodo) => `Book ${titulo}, ${periodo}`,
      mensagem: (roteiro, inicio, fim) => `Hi! I'd like to book a place on the ${roteiro}, from ${inicio} to ${fim}.`,
    },
    calendarioRotulo: 'Departure calendar',
    grupo: {
      resumo: (duracao, distancia, origem, preco) => [duracao, distancia, `Departs from ${origem}`, `From ${preco}`].filter(Boolean).join(' · '),
      verRoteiro: 'See full itinerary',
      verRoteiroRotulo: (nome) => `See full itinerary: ${nome}`,
      falar: 'Talk on WhatsApp',
      mensagem: (nome) => `Hi! I’d like to know more about the ${nome} itinerary.`,
      fotoAlt: (nome) => `Landscape on the ${nome} trek`,
    },
    // "Summer" sozinho seria o de quem lê do hemisfério norte: o mês evita a dúvida.
    verao: {
      titulo: 'Groups for the Brazilian summer (December to March) are already open — just ask our team.',
      abrirCalendario: 'Open the full calendar',
      cta: 'Ask about summer dates',
      mensagem: 'Hi! I’d like to know about the summer groups.',
    },
    relacionados: {
      titulo: 'Didn’t find your date? We’ll open one.',
      verTodas: 'See all adventures',
      fotoAlt: (nome) => `Landscape of ${nome}`,
      verSaidas: 'See upcoming departures',
      pedirData: 'Ask for a new date',
    },
    novaData: {
      geral: 'Hi! I’d like to open a new departure date.',
      roteiro: (nome) => `Hi! I'd like to open a new date for the ${nome} itinerary.`,
    },
    contato: {
      titulo: 'Your date isn’t here?',
      texto: 'Tell us when you arrive in Chapada and which trek you want to do. We’ll open a new departure for you.',
      cta: 'Talk to a guide',
    },
  },
  es: {
    meta: {
      title: 'Calendario y grupos de trekking',
      description:
        'Consulta las próximas salidas en grupo al Valle del Pati y reserva tu lugar con guías nativos de la Chapada Diamantina.',
      canonical: CALENDAR_HREF.es,
    },
    intl: 'es-ES',
    semana: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    meses: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    feriados: { aparecida: 'Nuestra Señora Aparecida', republica: 'Proclamación de la República' },
    hero: {
      titulo: { antes: 'Próximos', meio: 'trekkings', depois: 'de Mamut' },
      texto: 'Si no encuentras tu fecha, contáctanos y abriremos una nueva salida para ti.',
      cta: 'Hablar con el guía',
      explorar: 'Explora todas las salidas',
      pilhaRotulo: 'Explora las próximas travesías',
      verSaidasDe: (titulo) => `Ver las próximas salidas de ${titulo}`,
    },
    saida: (n) => `${n} ${n === 1 ? 'salida' : 'salidas'}`,
    dias: (n) => `${n} ${n === 1 ? 'día' : 'días'}`,
    aPartirDe: 'Desde',
    porPessoa: 'por persona',
    saidaDe: (origem) => `Salida de ${origem}`,
    partida: {
      rotulo: (titulo, periodo, ano) => `${titulo}, ${periodo} de ${ano}`,
      feriado: 'Feriado',
      linhaDoTempo: 'Días de la travesía',
      dia: (n) => `Día ${n}`,
      status: { feriado: 'Feriado', saida: 'Salida', retorno: 'Regreso' },
      reservar: 'Reservar lugar',
      reservarRotulo: (titulo, periodo) => `Reservar ${titulo}, ${periodo}`,
      mensagem: (roteiro, inicio, fim) => `¡Hola! Quiero reservar un lugar en el ${roteiro}, del ${inicio} al ${fim}.`,
    },
    calendarioRotulo: 'Calendario de salidas',
    grupo: {
      resumo: (duracao, distancia, origem, preco) => [duracao, distancia, `Salida de ${origem}`, `Desde ${preco}`].filter(Boolean).join(' · '),
      verRoteiro: 'Ver itinerario completo',
      verRoteiroRotulo: (nome) => `Ver itinerario completo: ${nome}`,
      falar: 'Hablar por WhatsApp',
      mensagem: (nome) => `¡Hola! Quiero saber más sobre el recorrido ${nome}.`,
      fotoAlt: (nome) => `Paisaje de la travesía ${nome}`,
    },
    verao: {
      titulo: 'Los grupos para el verano brasileño (diciembre a marzo) ya están disponibles con nuestro equipo.',
      abrirCalendario: 'Abrir el calendario completo',
      cta: 'Consultar fechas de verano',
      mensagem: '¡Hola! Quiero saber sobre los grupos de verano.',
    },
    relacionados: {
      titulo: '¿No encontraste tu fecha? Abrimos una.',
      verTodas: 'Ver todas las aventuras',
      fotoAlt: (nome) => `Paisaje de ${nome}`,
      verSaidas: 'Ver próximas salidas',
      pedirData: 'Pedir nueva fecha',
    },
    novaData: {
      geral: '¡Hola! Quiero abrir una nueva fecha de salida.',
      roteiro: (nome) => `¡Hola! Quiero abrir una nueva fecha para el itinerario ${nome}.`,
    },
    contato: {
      titulo: '¿Tu fecha no está aquí?',
      texto: 'Cuéntanos cuándo llegas a la Chapada y qué itinerario quieres hacer. Abrimos una nueva salida para ti.',
      cta: 'Hablar con un guía',
    },
  },
  fr: {
    meta: {
      title: 'Calendrier et groupes de trek',
      description:
        'Consultez les prochains départs en groupe vers la vallée du Pati et réservez votre place avec des guides natifs de la Chapada Diamantina.',
      canonical: CALENDAR_HREF.fr,
    },
    intl: 'fr-FR',
    semana: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
    meses: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
    feriados: { aparecida: 'Notre-Dame d’Aparecida', republica: 'Proclamation de la République' },
    hero: {
      titulo: { antes: 'Les prochains', meio: 'treks', depois: 'de Mamut' },
      texto: 'Si vous ne trouvez pas votre date, contactez-nous : nous ouvrirons un nouveau départ pour vous.',
      cta: 'Parler à un guide',
      explorar: 'Découvrez tous les départs',
      pilhaRotulo: 'Découvrez les prochaines traversées',
      verSaidasDe: (titulo) => `Voir les prochains départs pour ${titulo}`,
    },
    saida: (n) => `${n} ${n === 1 ? 'départ' : 'départs'}`,
    dias: (n) => `${n} ${n === 1 ? 'jour' : 'jours'}`,
    aPartirDe: 'À partir de',
    porPessoa: 'par personne',
    saidaDe: (origem) => `Départ de ${origem}`,
    partida: {
      rotulo: (titulo, periodo, ano) => `${titulo}, ${periodo} ${ano}`,
      feriado: 'Jour férié',
      linhaDoTempo: 'Jours de la traversée',
      dia: (n) => `Jour ${n}`,
      status: { feriado: 'Férié', saida: 'Départ', retorno: 'Retour' },
      reservar: 'Réserver ma place',
      reservarRotulo: (titulo, periodo) => `Réserver ${titulo}, ${periodo}`,
      mensagem: (roteiro, inicio, fim) =>
        `Bonjour ! Je souhaite réserver une place pour l’itinéraire ${roteiro}, du ${inicio} au ${fim}.`,
    },
    calendarioRotulo: 'Calendrier des départs',
    grupo: {
      resumo: (duracao, distancia, origem, preco) => [duracao, distancia, `Départ de ${origem}`, `À partir de ${preco}`].filter(Boolean).join(' · '),
      verRoteiro: 'Voir l’itinéraire complet',
      verRoteiroRotulo: (nome) => `Voir l’itinéraire complet : ${nome}`,
      falar: 'Écrire sur WhatsApp',
      mensagem: (nome) => `Bonjour ! J’aimerais en savoir plus sur l’itinéraire ${nome}.`,
      fotoAlt: (nome) => `Paysage de la traversée ${nome}`,
    },
    // Comme en EN/ES : « l’été » d’un lecteur de l’hémisphère nord n’est pas
    // celui de la Chapada — les mois lèvent le doute.
    verao: {
      titulo: 'Les groupes pour l’été brésilien (décembre à mars) sont déjà ouverts — demandez à notre équipe.',
      abrirCalendario: 'Ouvrir le calendrier complet',
      cta: 'Demander les dates d’été',
      mensagem: 'Bonjour ! J’aimerais avoir des informations sur les groupes d’été.',
    },
    relacionados: {
      titulo: 'Vous n’avez pas trouvé votre date ? Nous en ouvrons une.',
      verTodas: 'Voir toutes les aventures',
      fotoAlt: (nome) => `Paysage de ${nome}`,
      verSaidas: 'Voir les prochains départs',
      pedirData: 'Demander une nouvelle date',
    },
    novaData: {
      geral: 'Bonjour ! J’aimerais ouvrir une nouvelle date de départ.',
      roteiro: (nome) => `Bonjour ! J’aimerais ouvrir une nouvelle date pour l’itinéraire ${nome}.`,
    },
    contato: {
      titulo: 'Votre date n’est pas ici ?',
      texto: 'Dites-nous quand vous arrivez dans la Chapada et quel itinéraire vous souhaitez faire. Nous ouvrons un nouveau départ pour vous.',
      cta: 'Parler à un guide',
    },
  },
  nl: {
    meta: {
      title: 'Kalender en groepen voor trektochten',
      description:
        'Bekijk de komende groepsvertrekken naar de Vale do Pati en reserveer je plek bij lokale gidsen uit de Chapada Diamantina.',
      canonical: CALENDAR_HREF.nl,
    },
    intl: 'nl-NL',
    semana: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    meses: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    feriados: { aparecida: 'Onze-Lieve-Vrouw van Aparecida', republica: 'Uitroeping van de Republiek' },
    hero: {
      titulo: { antes: 'Komende', meio: 'trektochten', depois: 'met Mamut' },
      texto: 'Vind je jouw datum niet? Neem contact op, dan openen we een nieuwe vertrekdatum voor je.',
      cta: 'Praat met een gids',
      explorar: 'Bekijk alle vertrekdata',
      pilhaRotulo: 'Bekijk de komende doorsteken',
      verSaidasDe: (titulo) => `Bekijk de komende vertrekdata van ${titulo}`,
    },
    saida: (n) => `${n} ${n === 1 ? 'vertrek' : 'vertrekken'}`,
    dias: (n) => `${n} ${n === 1 ? 'dag' : 'dagen'}`,
    aPartirDe: 'Vanaf',
    porPessoa: 'per persoon',
    saidaDe: (origem) => `Vertrek vanuit ${origem}`,
    partida: {
      rotulo: (titulo, periodo, ano) => `${titulo}, ${periodo} ${ano}`,
      feriado: 'Feestdag',
      linhaDoTempo: 'Dagen van de doorsteek',
      dia: (n) => `Dag ${n}`,
      status: { feriado: 'Feestdag', saida: 'Vertrek', retorno: 'Terugkeer' },
      reservar: 'Reserveer je plek',
      reservarRotulo: (titulo, periodo) => `Reserveer ${titulo}, ${periodo}`,
      mensagem: (roteiro, inicio, fim) => `Hallo! Ik wil graag een plek reserveren voor de ${roteiro}, van ${inicio} tot ${fim}.`,
    },
    calendarioRotulo: 'Kalender met vertrekdata',
    grupo: {
      resumo: (duracao, distancia, origem, preco) => [duracao, distancia, `Vertrek vanuit ${origem}`, `Vanaf ${preco}`].filter(Boolean).join(' · '),
      verRoteiro: 'Bekijk de volledige route',
      verRoteiroRotulo: (nome) => `Bekijk de volledige route: ${nome}`,
      falar: 'Praat via WhatsApp',
      mensagem: (nome) => `Hallo! Ik wil graag meer weten over de route ${nome}.`,
      fotoAlt: (nome) => `Landschap van de doorsteek ${nome}`,
    },
    // Net als in EN: de Braziliaanse zomer valt in de Europese winter, dus de maanden staan erbij.
    verao: {
      titulo: 'Groepen voor de Braziliaanse zomer (december tot maart) zijn al te boeken — vraag het ons team.',
      abrirCalendario: 'Open de volledige kalender',
      cta: 'Vraag naar de zomerdata',
      mensagem: 'Hallo! Ik wil graag meer weten over de zomergroepen.',
    },
    relacionados: {
      titulo: 'Je datum niet gevonden? Dan openen we er een.',
      verTodas: 'Bekijk alle avonturen',
      fotoAlt: (nome) => `Landschap van ${nome}`,
      verSaidas: 'Bekijk komende vertrekdata',
      pedirData: 'Vraag een nieuwe datum aan',
    },
    novaData: {
      geral: 'Hallo! Ik wil graag een nieuwe vertrekdatum openen.',
      roteiro: (nome) => `Hallo! Ik wil graag een nieuwe datum openen voor de route ${nome}.`,
    },
    contato: {
      titulo: 'Staat jouw datum er niet bij?',
      texto: 'Vertel ons wanneer je in de Chapada aankomt en welke trektocht je wilt doen. Dan openen we een nieuw vertrek voor je.',
      cta: 'Praat met een gids',
    },
  },
};
