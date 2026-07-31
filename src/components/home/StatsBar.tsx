const STATS = [
  { value: '+500', label: 'aventureiros guiados' },
  { value: 'Guias', label: 'brigadistas e nativos' },
  { value: 'Cadastur', label: 'regularizado' },
  { value: 'TripAdvisor', label: 'Certificado de Excelência' },
  { value: 'Reserva', label: 'online garantida' },
];

// sessão_autoridade — barra de números logo abaixo do hero.
// Figma: 1440 × 108 full-bleed com conteúdo em pl:121 / pr:120 (~1216 grid).
export function StatsBar() {
  return (
    <section className="mt-7 w-full border-y border-gray-200 bg-gray-100">
      <div className="mx-auto grid w-full max-w-[1216px] grid-cols-1 place-items-center gap-7 px-6 py-10 text-center sm:grid-cols-2 lg:h-[108px] lg:grid-cols-5 lg:gap-4 lg:py-0">
        {STATS.map((s) => (
          <div key={s.value} className="flex w-full flex-col items-center justify-center">
            <p className="font-body text-[18px] font-medium leading-[1.5] text-gray-950 lg:text-[20px]">
              {s.value}
            </p>
            <p className="mt-1 font-body text-[14px] leading-[1.5] text-gray-400 lg:text-[16px]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
