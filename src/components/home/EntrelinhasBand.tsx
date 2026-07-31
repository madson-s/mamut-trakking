import { ArrowRightIcon } from '@/components/ui/icons';

// home_entrelinhas — faixa decorativa "Um bando que reune o mundo inteiro!".
export function EntrelinhasBand() {
  return (
    <section className="w-full px-6 py-16">
      <div className="relative mx-auto aspect-[801/122] w-full max-w-[801px]">
        <span className="absolute left-0 top-[1.45%] z-10 flex h-[97.1%] w-[22.43%] items-center justify-center rounded-full bg-gray-200 px-2 text-center font-display text-[clamp(11px,3vw,24px)] text-gray-950">
          Um bando
        </span>

        <span className="absolute left-[20.47%] top-0 z-20 flex h-full w-[22.43%] items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/entre_session_foto_01_1_5x.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />
          <span className="relative z-10 px-1 text-center font-display text-[clamp(11px,3vw,24px)] text-white">
            que reune
          </span>
        </span>

        <span className="absolute left-[40.2%] top-[1.45%] z-30 flex h-[97.1%] w-[25.64%] items-center justify-center rounded-full bg-primary-500 text-white">
          <ArrowRightIcon className="size-[clamp(24px,6vw,56px)]" />
        </span>

        <span className="absolute right-0 top-0 z-40 flex h-full w-[37.47%] items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/entre_session_foto_02_1_5x.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />
          <span className="relative z-10 px-2 text-center font-display text-[clamp(11px,3vw,24px)] text-white">
            o mundo inteiro!
          </span>
        </span>
      </div>
    </section>
  );
}
