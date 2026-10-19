'use client';

import { Button } from '@/components/ui';
import type { BookingMessages } from './booking-messages';
import type { GuidePriceTiers, PriceColumn } from './guide-pricing';
import type { Pati3Content } from './pati-3-content';
import { PatiMobileBooking } from './PatiMobileBooking';

export function TrekBookingButton({
  content,
  eventName,
  label,
  messages,
  price,
  tiers,
  column,
  sheetId,
  variant,
}: {
  content: Pati3Content['booking'];
  eventName: string;
  label: string;
  messages: BookingMessages;
  price: number;
  tiers?: GuidePriceTiers;
  column?: PriceColumn;
  sheetId: string;
  variant: 'outline' | 'primary';
}) {
  return (
    <>
      <Button
        arrow
        block
        size="lg"
        variant={variant}
        className="whitespace-normal text-center"
        onClick={() => window.dispatchEvent(new CustomEvent(eventName))}
      >
        {label}
      </Button>
      <PatiMobileBooking
        content={content}
        fromPrice={price}
        tiers={tiers}
        column={column}
        messages={messages}
        openEvent={eventName}
        sheetId={sheetId}
        showDock={false}
      />
    </>
  );
}
