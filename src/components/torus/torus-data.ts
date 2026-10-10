export type TorusPackageKey = 'transfer' | 'passeios';

export type TorusPackage = {
  key: TorusPackageKey;
  name: string;
  fullName: string;
  price: number;
  included: readonly string[];
  excluded: readonly string[];
};

export type TorusDay = {
  date: string;
  weekday: string;
  title?: string;
  facts?: readonly string[];
  description?: string;
  festival?: boolean;
  label?: string;
};

export const TORUS_PACKAGES: readonly TorusPackage[] = [
  {
    key: 'transfer',
    name: 'Transfer',
    fullName: 'Transfer Torus Festival | Chapada Diamantina (Réveillon 2026)',
    price: 1500,
    included: ['SSA x Iramaia ida e volta', 'Motorista', 'Carro privado'],
    excluded: ['Alimentação', 'Serviços extras', 'Hospedagem', 'Passeios', 'Equipamentos de camping'],
  },
  {
    key: 'passeios',
    name: 'Transfer + Passeios',
    fullName: 'Transfer Torus Festival + Passeios | Chapada Diamantina (Réveillon 2026)',
    price: 3500,
    included: ['SSA x Iramaia', 'Motorista', 'Carro privado', 'Equipamento de camping', 'Passeios'],
    excluded: ['Alimentação', 'Serviços extras', 'Hospedagem'],
  },
] as const;

export const TORUS_DAYS: readonly TorusDay[] = [
  {
    date: '28/12',
    weekday: 'Domingo · 2025',
    title: 'Check-in Salvador + transfer SSA x Iramaia + Poço Azul + check-in Iramaia',
    facts: ['504 km de carro', 'Passeio'],
    description:
      'Saímos de Salvador a partir das 8h em direção à Chapada Diamantina. Serão 504 km de estrada até a cidade de Iramaia. No caminho, vamos conhecer o Poço Azul, no município de Nova Redenção, bem próximo a Iramaia.',
  },
  {
    date: '29/12',
    weekday: 'Segunda',
    title: 'Check-out Iramaia + transfer Iramaia x Festival Torus',
    facts: ['8 km de carro', 'Saída 8h'],
  },
  { date: '30/12', weekday: 'Terça', festival: true },
  { date: '31/12', weekday: 'Quarta', festival: true, label: 'Virada do ano' },
  {
    date: '01/01',
    weekday: 'Quinta · 2026',
    title: 'Cachoeira do Buracão + transfer Festival Torus',
    facts: ['220 km de carro', 'Passeio'],
  },
  { date: '02/01', weekday: 'Sexta', festival: true },
  { date: '03/01', weekday: 'Sábado', festival: true },
  {
    date: '04/01',
    weekday: 'Domingo',
    title: 'Check-out Festival Torus + Cachoeira do Mosquito + Lençóis ou Salvador',
    facts: ['Passeio'],
  },
] as const;
