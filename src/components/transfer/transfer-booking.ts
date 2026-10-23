export const TRANSFER_BOOKING_OPEN_EVENT = 'transfer:open-booking';
export const TRANSFER_SELECTION_EVENT = 'transfer:selection';

export const TRANSFER_LOCATIONS = [
  { value: 'lencois', label: 'Lençóis', group: 'Chapada Diamantina' },
  { value: 'capao', label: 'Vale do Capão', group: 'Chapada Diamantina' },
  { value: 'mucuge', label: 'Mucugê', group: 'Chapada Diamantina' },
  { value: 'andarai', label: 'Andaraí / Igatu', group: 'Chapada Diamantina' },
  { value: 'poco-azul', label: 'Poço Encantado / Azul', group: 'Chapada Diamantina' },
  { value: 'salvador', label: 'Salvador (centro)', group: 'Salvador e conexões' },
  { value: 'airport', label: 'Aeroporto de Salvador', group: 'Salvador e conexões' },
  { value: 'feira', label: 'Feira de Santana', group: 'Salvador e conexões' },
] as const;

export type TransferLocationValue = (typeof TRANSFER_LOCATIONS)[number]['value'];
export type TransferFormat = 'group' | 'private';
export type TransferModalView = 'booking' | 'origin' | 'destination';

export type TransferBookingDetail = {
  view?: TransferModalView;
  origin?: TransferLocationValue;
  destination?: TransferLocationValue;
  format?: TransferFormat;
  adventure?: boolean;
};

export type TransferSelectionDetail = {
  origin: TransferLocationValue;
  destination: TransferLocationValue;
};

export type TransferRoute = {
  origin: TransferLocationValue;
  destination: TransferLocationValue;
  duration: string;
  price: number;
};

export const TRANSFER_ROUTES: readonly TransferRoute[] = [
  { origin: 'lencois', destination: 'airport', duration: '~6h', price: 280 },
  { origin: 'lencois', destination: 'salvador', duration: '~6h', price: 250 },
  { origin: 'lencois', destination: 'feira', duration: '~4h', price: 200 },
  { origin: 'lencois', destination: 'capao', duration: '~2h', price: 120 },
  { origin: 'lencois', destination: 'mucuge', duration: '~2h30', price: 130 },
  { origin: 'lencois', destination: 'andarai', duration: '~1h30', price: 110 },
  { origin: 'lencois', destination: 'poco-azul', duration: '~2h', price: 180 },
] as const;

export function transferLocationLabel(value: TransferLocationValue) {
  return TRANSFER_LOCATIONS.find((location) => location.value === value)?.label ?? value;
}

export function findTransferRoute(
  origin: TransferLocationValue,
  destination: TransferLocationValue,
) {
  return TRANSFER_ROUTES.find(
    (route) =>
      (route.origin === origin && route.destination === destination) ||
      (route.origin === destination && route.destination === origin),
  );
}
