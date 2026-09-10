'use client';

import { Button } from '@/components/ui';
import { REVEILLON_BOOKING_OPEN_EVENT } from './reveillonBooking';

export function ReveillonBookingTrigger({
  label,
  variant = 'primary',
  className,
}: {
  label: string;
  variant?: 'primary' | 'outlineOnMedia';
  className?: string;
}) {
  return (
    <Button
      size="lg"
      arrow
      variant={variant}
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(REVEILLON_BOOKING_OPEN_EVENT))}
    >
      {label}
    </Button>
  );
}
