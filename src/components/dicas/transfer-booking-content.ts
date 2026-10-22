import type { MessageLocale } from '@/lib/message-locale';
import type { Locale } from '@/lib/site';

/**
 * Painel de reserva do transfer (`TransferBooking`): rótulos do formulário nos
 * seis idiomas e a mensagem de WhatsApp nos três da equipe (`MESSAGE_LOCALE`).
 */

export type CarroId = 'economico' | 'suv' | 'indiferente';

/** Internet Starlink durante o transfer: adicional por trecho, em reais. */
export const STARLINK_ADICIONAL = 250;

export type TransferBookingLabels = {
  titulo: string;
  fechar: string;
  origem: string;
  destino: string;
  /** Placeholder de origem e destino, que são texto livre. */
  lugarHint: string;
  data: string;
  horario: string;
  idaEVolta: string;
  dataVolta: string;
  viajantes: string;
  malas: string;
  carro: string;
  carros: Record<CarroId, string>;
  grupoGrande: string;
  starlink: string;
  starlinkPreco: string;
  /** Linha do valor estimado quando o Starlink está marcado. */
  comStarlink: string;
  estimativa: string;
  paraAte: string;
  semEstimativa: string;
  enviar: string;
  nota: string;
  mesmoLugar: string;
};

export const TRANSFER_BOOKING_LABELS: Record<Locale, TransferBookingLabels> = {
  pt: {
    titulo: 'Reserve seu transfer',
    fechar: 'Fechar',
    origem: 'Origem',
    destino: 'Destino',
    lugarHint: 'Digite a cidade ou o endereço',
    data: 'Data',
    horario: 'Horário (opcional)',
    idaEVolta: 'Ida e volta',
    dataVolta: 'Data da volta',
    viajantes: 'Viajantes',
    malas: 'Malas (opcional)',
    carro: 'Tipo de carro',
    carros: { economico: 'Econômico', suv: 'SUV', indiferente: 'Tanto faz' },
    grupoGrande: 'Acima de 4 pessoas, a equipe indica o veículo certo para o grupo.',
    starlink: 'Internet Starlink no carro',
    starlinkPreco: '+ R$ 250 por trecho',
    comStarlink: 'Inclui internet Starlink',
    estimativa: 'Valor estimado',
    paraAte: 'por trecho, para até 4 pessoas',
    semEstimativa: 'A equipe confirma o valor deste trajeto pelo WhatsApp.',
    enviar: 'Enviar pelo WhatsApp',
    nota: 'Valores sujeitos a confirmação. 5% de desconto à vista e 10% em ida e volta.',
    mesmoLugar: 'Origem e destino precisam ser diferentes.',
  },
  en: {
    titulo: 'Book your transfer',
    fechar: 'Close',
    origem: 'From',
    destino: 'To',
    lugarHint: 'Type a town or an address',
    data: 'Date',
    horario: 'Time (optional)',
    idaEVolta: 'Round trip',
    dataVolta: 'Return date',
    viajantes: 'Travellers',
    malas: 'Bags (optional)',
    carro: 'Car type',
    carros: { economico: 'Economy', suv: 'SUV', indiferente: 'No preference' },
    grupoGrande: 'For more than 4 people, our team will suggest the right vehicle for the group.',
    starlink: 'Starlink internet in the car',
    starlinkPreco: '+ R$ 250 per leg',
    comStarlink: 'Includes Starlink internet',
    estimativa: 'Estimated price',
    paraAte: 'per leg, for up to 4 people',
    semEstimativa: 'Our team will confirm the price of this route on WhatsApp.',
    enviar: 'Send via WhatsApp',
    nota: 'Prices subject to confirmation. 5% off for upfront payment and 10% off for a round trip.',
    mesmoLugar: 'From and to must be different.',
  },
  es: {
    titulo: 'Reservá tu transfer',
    fechar: 'Cerrar',
    origem: 'Origen',
    destino: 'Destino',
    lugarHint: 'Escribí la ciudad o la dirección',
    data: 'Fecha',
    horario: 'Horario (opcional)',
    idaEVolta: 'Ida y vuelta',
    dataVolta: 'Fecha de vuelta',
    viajantes: 'Viajeros',
    malas: 'Valijas (opcional)',
    carro: 'Tipo de auto',
    carros: { economico: 'Económico', suv: 'SUV', indiferente: 'Me da igual' },
    grupoGrande: 'Con más de 4 personas, el equipo indica el vehículo adecuado para el grupo.',
    starlink: 'Internet Starlink en el auto',
    starlinkPreco: '+ R$ 250 por tramo',
    comStarlink: 'Incluye internet Starlink',
    estimativa: 'Valor estimado',
    paraAte: 'por tramo, hasta 4 personas',
    semEstimativa: 'El equipo confirma el valor de este trayecto por WhatsApp.',
    enviar: 'Enviar por WhatsApp',
    nota: 'Valores sujetos a confirmación. 5% de descuento al contado y 10% en ida y vuelta.',
    mesmoLugar: 'El origen y el destino tienen que ser distintos.',
  },
  fr: {
    titulo: 'Réservez votre transfert',
    fechar: 'Fermer',
    origem: 'Départ',
    destino: 'Arrivée',
    lugarHint: 'Saisissez la ville ou l’adresse',
    data: 'Date',
    horario: 'Heure (facultatif)',
    idaEVolta: 'Aller-retour',
    dataVolta: 'Date du retour',
    viajantes: 'Voyageurs',
    malas: 'Bagages (facultatif)',
    carro: 'Type de voiture',
    carros: { economico: 'Économique', suv: 'SUV', indiferente: 'Peu importe' },
    grupoGrande: 'Au-delà de 4 personnes, l’équipe vous indique le véhicule adapté au groupe.',
    starlink: 'Internet Starlink dans la voiture',
    starlinkPreco: '+ R$ 250 par trajet',
    comStarlink: 'Internet Starlink inclus',
    estimativa: 'Prix estimé',
    paraAte: 'par trajet, jusqu’à 4 personnes',
    semEstimativa: 'L’équipe confirme le prix de ce trajet sur WhatsApp.',
    enviar: 'Envoyer par WhatsApp',
    nota: 'Prix sous réserve de confirmation. 5 % de remise au comptant et 10 % pour un aller-retour.',
    mesmoLugar: 'Le départ et l’arrivée doivent être différents.',
  },
  nl: {
    titulo: 'Boek je transfer',
    fechar: 'Sluiten',
    origem: 'Van',
    destino: 'Naar',
    lugarHint: 'Typ een plaats of een adres',
    data: 'Datum',
    horario: 'Tijd (optioneel)',
    idaEVolta: 'Heen en terug',
    dataVolta: 'Datum terugreis',
    viajantes: 'Reizigers',
    malas: 'Bagage (optioneel)',
    carro: 'Type auto',
    carros: { economico: 'Voordelig', suv: 'SUV', indiferente: 'Maakt niet uit' },
    grupoGrande: 'Met meer dan 4 personen stelt het team het juiste voertuig voor de groep voor.',
    starlink: 'Starlink-internet in de auto',
    starlinkPreco: '+ R$ 250 per rit',
    comStarlink: 'Inclusief Starlink-internet',
    estimativa: 'Geschatte prijs',
    paraAte: 'per rit, tot 4 personen',
    semEstimativa: 'Het team bevestigt de prijs van deze route via WhatsApp.',
    enviar: 'Versturen via WhatsApp',
    nota: 'Prijzen onder voorbehoud. 5% korting bij vooruitbetaling en 10% bij heen en terug.',
    mesmoLugar: 'Vertrek en bestemming moeten verschillen.',
  },
  de: {
    titulo: 'Buche deinen Transfer',
    fechar: 'Schließen',
    origem: 'Von',
    destino: 'Nach',
    lugarHint: 'Ort oder Adresse eingeben',
    data: 'Datum',
    horario: 'Uhrzeit (optional)',
    idaEVolta: 'Hin und zurück',
    dataVolta: 'Rückfahrdatum',
    viajantes: 'Reisende',
    malas: 'Gepäckstücke (optional)',
    carro: 'Fahrzeugtyp',
    carros: { economico: 'Economy', suv: 'SUV', indiferente: 'Egal' },
    grupoGrande: 'Ab 5 Personen schlägt dir das Team das passende Fahrzeug für die Gruppe vor.',
    starlink: 'Starlink-Internet im Auto',
    starlinkPreco: '+ R$ 250 pro Strecke',
    comStarlink: 'Inklusive Starlink-Internet',
    estimativa: 'Geschätzter Preis',
    paraAte: 'pro Strecke, bis 4 Personen',
    semEstimativa: 'Das Team bestätigt den Preis dieser Strecke per WhatsApp.',
    enviar: 'Per WhatsApp senden',
    nota: 'Preise unter Vorbehalt. 5 % Rabatt bei Vorauszahlung und 10 % bei Hin- und Rückfahrt.',
    mesmoLugar: 'Start und Ziel müssen sich unterscheiden.',
  },
};

/** Rótulos da mensagem de WhatsApp, nos idiomas da equipe. */
export const TRANSFER_MENSAGEM: Record<
  MessageLocale,
  {
    ola: string;
    origem: string;
    destino: string;
    data: string;
    horario: string;
    volta: string;
    soIda: string;
    viajantes: string;
    malas: string;
    carro: string;
    carros: Record<CarroId, string>;
    starlink: string;
    estimativa: string;
  }
> = {
  pt: {
    ola: 'Olá! Vim pelo site da Mamut e quero reservar um transfer.',
    origem: 'Origem', destino: 'Destino', data: 'Data', horario: 'Horário', volta: 'Volta', soIda: 'só ida',
    viajantes: 'Viajantes', malas: 'Malas', carro: 'Carro',
    carros: { economico: 'Econômico', suv: 'SUV', indiferente: 'tanto faz' },
    starlink: 'Internet Starlink no carro (+ R$ 250 por trecho)', estimativa: 'Valor estimado no site',
  },
  en: {
    ola: 'Hi! I came from the Mamut website and would like to book a transfer.',
    origem: 'From', destino: 'To', data: 'Date', horario: 'Time', volta: 'Return', soIda: 'one way',
    viajantes: 'Travellers', malas: 'Bags', carro: 'Car',
    carros: { economico: 'Economy', suv: 'SUV', indiferente: 'no preference' },
    starlink: 'Starlink internet in the car (+ R$ 250 per leg)', estimativa: 'Estimate on the website',
  },
  fr: {
    ola: 'Bonjour ! Je viens du site de Mamut et je voudrais réserver un transfert.',
    origem: 'Départ', destino: 'Arrivée', data: 'Date', horario: 'Heure', volta: 'Retour', soIda: 'aller simple',
    viajantes: 'Voyageurs', malas: 'Bagages', carro: 'Voiture',
    carros: { economico: 'Économique', suv: 'SUV', indiferente: 'peu importe' },
    starlink: 'Internet Starlink dans la voiture (+ R$ 250 par trajet)', estimativa: 'Estimation sur le site',
  },
};
