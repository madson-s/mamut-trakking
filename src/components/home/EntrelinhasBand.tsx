import Image from 'next/image';
import { ArrowRightIcon, Section } from '@/components/ui';
import { cn } from '@/lib/cn';

const LABEL = 'text-center font-display text-[clamp(11px,3vw,24px)]';

export function EntrelinhasBand({ overlap = false }: { overlap?: boolean }) {
  return (
    <Section
      padding={overlap ? 'none' : 'compact'}
      container={false}
      className={overlap ? 'hidden h-15.25 px-6 lg:block' : 'hidden px-6 lg:block'}
      aria-label="Um bando que reune o mundo inteiro"
    >
      <div
        className={cn(
          'relative mx-auto aspect-801/122 w-full max-w-200.25',
          overlap && '-translate-y-1/2',
        )}
      >
        <span
          className={`absolute top-[1.45%] left-0 z-10 flex h-[97.1%] w-[22.43%] items-center justify-center rounded-pill bg-surface-raised px-2 text-content ${LABEL}`}
        >
          Um bando
        </span>

        <span className="absolute top-0 left-[20.47%] z-20 flex h-full w-[22.43%] items-center justify-center">
          <Image
            src="/img/entre_session_foto_01_1_5x.webp"
            alt=""
            fill
            sizes="(min-width: 849px) 180px, 23vw"
            className="object-fill"
          />
          <span className={`relative z-10 px-1 text-on-media ${LABEL}`}>que reune</span>
        </span>

        <span className="absolute top-[1.45%] left-[40.2%] z-30 flex h-[97.1%] w-[25.64%] items-center justify-center rounded-pill bg-brand text-brand-contrast">
          <ArrowRightIcon className="size-[clamp(24px,6vw,56px)]" />
        </span>

        <span className="absolute top-0 right-0 z-40 flex h-full w-[37.47%] items-center justify-center">
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
