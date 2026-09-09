'use client';

import { Button } from '@/components/ui';
import type { Pati3Content } from './pati-3-content';
import { PatiMobileBooking } from './PatiMobileBooking';

export function TrekBookingButton({
  content,
  eventName,
  label,
  messageIntro,
  price,
  sheetId,
  variant,
}: {
  content: Pati3Content['booking'];
  eventName: string;
  label: string;
  messageIntro: string;
  price: number;
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
        messageIntro={messageIntro}
        openEvent={eventName}
        sheetId={sheetId}
        showDock={false}
      />
    </>
  );
}
