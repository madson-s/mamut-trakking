'use client';

import type { ReactNode } from 'react';
import { Button } from '@/components/ui';
import type { ButtonSize, ButtonVariant } from '@/components/ui';
import {
  TRANSFER_BOOKING_OPEN_EVENT,
  type TransferBookingDetail,
} from './transfer-booking';

export function openTransferBooking(detail: TransferBookingDetail = {}) {
  window.dispatchEvent(new CustomEvent(TRANSFER_BOOKING_OPEN_EVENT, { detail }));
}

export function TransferBookingTrigger({
  children,
  className,
  detail,
  variant = 'primary',
  size = 'md',
  block = false,
  arrow = true,
}: {
  children: ReactNode;
  className?: string;
  detail?: TransferBookingDetail;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  arrow?: boolean;
}) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      block={block}
      arrow={arrow}
      className={className}
      onClick={() => openTransferBooking(detail)}
    >
      {children}
    </Button>
  );
}
