'use client';

import { Button } from '@/components/ui';
import { PATI_BOOKING_OPEN_EVENT } from './patiBooking';

export function PatiBookingTrigger() {
  return (
    <Button block arrow onClick={() => window.dispatchEvent(new CustomEvent(PATI_BOOKING_OPEN_EVENT))}>
      Reservar essa aventura
    </Button>
  );
}
