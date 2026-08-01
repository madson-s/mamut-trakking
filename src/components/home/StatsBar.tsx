import { Section, Stat } from '@/components/ui';

const STATS = [
  { value: '+500', label: 'aventureiros guiados' },
  { value: 'Guias', label: 'brigadistas e nativos' },
  { value: 'Cadastur', label: 'regularizado' },
  { value: 'TripAdvisor', label: 'Certificado de Excelência' },
  { value: 'Reserva', label: 'online garantida' },
];

// sessão_autoridade — barra de números logo abaixo do hero.
// Figma: 1440 × 108 full-bleed com conteúdo em pl:121 / pr:120 (~1216 grid).
// A altura fixa de 108 no desktop mora no container (layout), não no `padding`
// da Section — duas utilidades de padding na mesma classe brigariam.
export function StatsBar() {
  return (
    <Section
      surface="muted"
      bordered
      padding="none"
      className="mt-7"
      containerClassName="grid grid-cols-1 place-items-center gap-7 py-10 text-center sm:grid-cols-2 lg:h-[108px] lg:grid-cols-5 lg:gap-4 lg:py-0"
    >
      {STATS.map((stat) => (
        <Stat key={stat.value} value={stat.value} label={stat.label} />
      ))}
    </Section>
  );
}
