import { Pill } from '@/components/ui/Pill';
import { StarIcon } from '@/components/ui/icons';
import { ScrollFeedbackStack } from '@/components/home/ScrollFeedbackStack';

// home_session-05 — avaliações verificadas (TripAdvisor).
export function ReviewsSection() {
  return (
    <section className="relative w-full overflow-clip border-y border-gray-200 bg-gray-100 px-6 py-24">
      {/* line-art de fundo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/session-05_backgroud-people-01.svg"
        alt=""
        className="pointer-events-none absolute bottom-0 left-1/2 hidden w-[1052px] max-w-none -translate-x-1/3 opacity-40 lg:block"
      />

      <div className="relative mx-auto flex w-full max-w-[1216px] flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
        {/* Texto + stats */}
        <div className="flex max-w-[585px] flex-col gap-12">
          <div className="flex flex-col gap-6">
            <span className="self-start rounded-full border border-gray-950 px-5 py-2.5 font-body text-lg text-gray-950">
              Avaliações verificadas · TripAdvisor
            </span>
            <h2 className="font-display text-4xl leading-[1.1] text-gray-950 sm:text-6xl lg:text-[72px]">
              O que nosso bando
              <br />
              diz das aventuras.
            </h2>

            <div className="flex flex-wrap items-stretch gap-4">
              <StatChip value="140 +" label="Avaliações" />
              <StatChip
                value={
                  <span className="flex items-center gap-1">
                    <StarIcon className="h-[17px] w-[17px] text-warning-500" />
                    5.0
                  </span>
                }
                label="Média de nota geral"
              />
              <StatChip value="#4 no Raking" label="de atividades ao ar livre em Lençois" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Pill href="/pt/aventuras">Escolha a sua trilha</Pill>
            <Pill href="#" variant="outline" arrow={false}>
              Conheça o nosso TripAdvisor
            </Pill>
          </div>
        </div>

        <ScrollFeedbackStack />
      </div>
    </section>
  );
}

function StatChip({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col justify-center rounded-[20px] border border-gray-500 bg-gray-200 px-4 py-2.5 text-gray-950">
      <span className="font-display text-2xl leading-tight">{value}</span>
      <span className="font-body text-sm leading-snug">{label}</span>
    </div>
  );
}
