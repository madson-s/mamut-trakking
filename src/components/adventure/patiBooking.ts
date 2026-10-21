export const PATI_BOOKING_OPEN_EVENT = 'pati:open-booking';

/**
 * Evento que abre o sheet de reserva de um formato (0 = privado, 1 = em grupo)
 * nas páginas de roteiro (`TrekJourney`, `DayTourExperience`). Os cards de
 * preço montam um sheet por formato; os demais botões "Reservar" da página só
 * disparam o evento do formato certo.
 */
export const trekBookingEvent = (format: number) => `trek:open-booking:${format}`;
