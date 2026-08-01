import Image from 'next/image';
import { ArrowRightIcon, Section } from '@/components/ui';

// home_entrelinhas — faixa decorativa "Um bando que reune o mundo inteiro!".
// Toda a geometria é proporcional (aspect-ratio + % do Figma), então os pedaços
// continuam sendo spans posicionados; só a cor vem do tema.
const LABEL = 'text-center font-display text-[clamp(11px,3vw,24px)]';

export function EntrelinhasBand() {
  return (
    <Section
      padding="compact"
      container={false}
      className="px-6"
      aria-label="Um bando que reune o mundo inteiro"
    >
      <div className="relative mx-auto aspect-[801/122] w-full max-w-[801px]">
        <span
          className={`absolute left-0 top-[1.45%] z-10 flex h-[97.1%] w-[22.43%] items-center justify-center rounded-pill bg-surface-raised px-2 text-content ${LABEL}`}
        >
          Um bando
        </span>

        <span className="absolute left-[20.47%] top-0 z-20 flex h-full w-[22.43%] items-center justify-center">
          <Image
            src="/img/entre_session_foto_01_1_5x.webp"
            alt=""
            fill
            sizes="(min-width: 849px) 180px, 23vw"
            className="object-fill"
          />
          <span className={`relative z-10 px-1 text-on-media ${LABEL}`}>que reune</span>
        </span>

        <span className="absolute left-[40.2%] top-[1.45%] z-30 flex h-[97.1%] w-[25.64%] items-center justify-center rounded-pill bg-brand text-brand-contrast">
          <ArrowRightIcon className="size-[clamp(24px,6vw,56px)]" />
        </span>

        <span className="absolute right-0 top-0 z-40 flex h-full w-[37.47%] items-center justify-center">
          <Image
            src="/img/entre_session_foto_02_1_5x.webp"
            alt=""
            fill
            sizes="(min-width: 849px) 300px, 38vw"
            className="object-fill"
          />
          <span className={`relative z-10 px-2 text-on-media ${LABEL}`}>o mundo inteiro!</span>
        </span>
      </div>
    </Section>
  );
}
