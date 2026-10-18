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
  /** Rótulo curto do roteiro nos cartões ("Vale do Pati 3 Dias"). */
  tituloCurto: (dias: number) => string;
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
    resumo: (dias: number, distancia: string, origem: string, preco: string) => string;
    verRoteiro: string;
    verRoteiroRotulo: (nome: string) => string;
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
};

export const CALENDAR_CONTENT: Record<Locale, CalendarContent> = {
  pt: {
    meta: {
      title: 'Calendário e grupos de trekking',
      description:
        'Confira as próximas saídas em grupo para o Vale do Pati e reserve sua vaga com guias nativos da Chapada Diamantina.',
      canonical: CALENDAR_HREF.pt,
    },
    tituloCurto: (dias) => `Vale do Pati ${dias} Dias`,
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
    dias: (n) => `${n} dias`,
    aPartirDe: 'A partir de',
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
      resumo: (dias, distancia, origem, preco) => `${dias} dias · ${distancia} · Saída de ${origem} · A partir de ${preco}`,
      verRoteiro: 'Ver roteiro completo',
      verRoteiroRotulo: (nome) => `Ver roteiro completo: ${nome}`,
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
    tituloCurto: (dias) => `Pati Valley ${dias} Days`,
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
    dias: (n) => `${n} days`,
    aPartirDe: 'From',
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
      resumo: (dias, distancia, origem, preco) => `${dias} days · ${distancia} · Departs from ${origem} · From ${preco}`,
      verRoteiro: 'See full itinerary',
      verRoteiroRotulo: (nome) => `See full itinerary: ${nome}`,
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
    tituloCurto: (dias) => `Valle del Pati ${dias} Días`,
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
    dias: (n) => `${n} días`,
    aPartirDe: 'Desde',
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
      resumo: (dias, distancia, origem, preco) => `${dias} días · ${distancia} · Salida de ${origem} · Desde ${preco}`,
      verRoteiro: 'Ver itinerario completo',
      verRoteiroRotulo: (nome) => `Ver itinerario completo: ${nome}`,
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
    tituloCurto: (dias) => `Vallée du Pati ${dias} Jours`,
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
    dias: (n) => `${n} jours`,
    aPartirDe: 'À partir de',
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
      resumo: (dias, distancia, origem, preco) => `${dias} jours · ${distancia} · Départ de ${origem} · À partir de ${preco}`,
      verRoteiro: 'Voir l’itinéraire complet',
      verRoteiroRotulo: (nome) => `Voir l’itinéraire complet : ${nome}`,
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
};
