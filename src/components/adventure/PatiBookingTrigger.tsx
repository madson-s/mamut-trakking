'use client';

import type { ComponentProps } from 'react';
import { Button } from '@/components/ui';
import { PATI_BOOKING_OPEN_EVENT } from './patiBooking';

/**
 * Botão "Reservar" que abre o sheet de reserva (`PatiMobileBooking`) em vez de
 * sair para o WhatsApp — o sheet já termina no WhatsApp, com data, grupo,
 * idioma e valor estimado na mensagem. `eventName` escolhe qual sheet abre
 * (nas páginas de roteiro há um por formato: `trekBookingEvent`).
 */
export function PatiBookingTrigger({
  label,
  eventName = PATI_BOOKING_OPEN_EVENT,
  block = true,
  size,
  variant,
  className,
}: {
  label: string;
  eventName?: string;
  block?: boolean;
  size?: ComponentProps<typeof Button>['size'];
  variant?: ComponentProps<typeof Button>['variant'];
  className?: string;
}) {
  return (
    <Button
      block={block}
      arrow
      size={size}
      variant={variant}
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(eventName))}
    >
      {label}
    </Button>
  );
}
