import { Section, Stat } from '@/components/ui';

const STATS = [
  { value: '+500', label: 'aventureiros guiados', cell: 'col-span-3' },
  { value: 'Guias', label: 'brigadistas e nativos', cell: 'col-span-3' },
  { value: 'Cadastur', label: 'regularizado', cell: 'col-span-2' },
  {
    value: 'TripAdvisor',
    label: 'Certificado de Excelência',
    cell: 'order-5 col-span-2 lg:order-none',
  },
  { value: 'Reserva', label: 'online garantida', cell: 'order-4 col-span-2 lg:order-none' },
];

export function StatsBar() {
  return (
    <Section
      surface="muted"
      bordered
      padding="none"
      className="mt-0 sm:mt-7"
      containerClassName="grid grid-cols-6 items-start gap-x-4 gap-y-6 py-8 text-left sm:gap-x-8 lg:flex lg:h-27 lg:items-center lg:justify-between lg:gap-x-10 lg:py-0"
    >
      {STATS.map((stat) => (
        <Stat
          key={stat.value}
          value={stat.value}
          label={stat.label}
          align="left"
          fill={false}
          className={stat.cell}
        />
      ))}
    </Section>
  );
}
