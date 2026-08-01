import Image from 'next/image';
import { Badge, Button, Heading, Section, Text } from '@/components/ui';
import { focus, motion } from '@/design/tokens';
import { cn } from '@/lib/cn';

// 4 colunas no grid de 1216 com gap 32 → 280px por card; 2 colunas em sm.
const GUIDE_CARD_SIZES = '(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw';

const GUIDE = {
  name: 'Marcelo Cabral',
  role: 'Guia & Fundador',
  photo: '/img/session_04_cabral_foto_01.webp',
  bio: '13 anos em Lençóis. Cuida da operação inteira — do primeiro contato ao último passo na trilha. Introduz a Chapada a brasileiros e estrangeiros com a mesma autoridade de quem escolheu essa terra para chamar de lar.',
};

// A foto colorida faz crossfade para a gêmea em preto e branco no hover — o P&B
// é estado de interação, não tratamento base.
const CROSSFADE = cn(
  'object-cover transition-[opacity,transform] duration-500 ease-brand',
  'group-hover/guide:scale-[1.025] group-focus-visible/guide:scale-[1.025]',
);

// home_session-04 — "Nascidos aqui. Formados pela Chapada." + cards dos guias.
export function GuidesSection() {
  const guides = Array.from({ length: 4 });

  return (
    <Section containerClassName="flex flex-col items-center gap-16">
      <Heading size="hero" className="text-center">
        Nascidos aqui.
        <br />
        <span className="inline-flex flex-wrap items-center justify-center gap-x-4">
          Formados pela
          <Image
            src="/img/home_square_right_morro_1_1_5x.webp"
            alt=""
            width={183}
            height={186}
            sizes="128px"
            className="inline-block h-[0.7em] w-[1.7em] rounded-[0.2em] object-cover align-middle"
          />
          Chapada.
        </span>
      </Heading>

      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((_, i) => (
          <article
            key={i}
            tabIndex={0}
            aria-label={`${GUIDE.name}, ${GUIDE.role}`}
            className={cn(
              'group/guide flex flex-col gap-3 rounded-card',
              focus.onSurface,
              'focus-visible:ring-offset-4',
            )}
          >
            <div className="relative h-[386px] w-full overflow-hidden rounded-card bg-surface-sunken shadow-image-outline">
              <Image
                src={GUIDE.photo}
                alt={GUIDE.name}
                fill
                sizes={GUIDE_CARD_SIZES}
                className={cn(CROSSFADE, 'group-hover/guide:opacity-0 group-focus-visible/guide:opacity-0')}
              />
              <Image
                src="/img/session_04_cabral_foto_01_bw.webp"
                alt=""
                fill
                sizes={GUIDE_CARD_SIZES}
                className={cn(
                  CROSSFADE,
                  'scale-[1.01] opacity-0 group-hover/guide:opacity-100 group-focus-visible/guide:opacity-100',
                )}
              />
              <Image
                src="/svg/figma/guides/marcelo-hover-line.svg"
                alt=""
                width={288}
                height={163}
                unoptimized
                className={cn(
                  'pointer-events-none absolute -bottom-px -left-[1.5%] h-[42.25%] w-[103%] translate-y-3 opacity-0 blur-xs',
                  'transition-[opacity,filter,transform] ease-brand',
                  motion.slow,
                  'group-hover/guide:translate-y-0 group-hover/guide:opacity-100 group-hover/guide:blur-0',
                  'group-focus-visible/guide:translate-y-0 group-focus-visible/guide:opacity-100 group-focus-visible/guide:blur-0',
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <Text as="p" size="xl" weight="semibold">
                  {GUIDE.name}
                </Text>
                <Badge variant="brand" size="md" radius="panelLg">
                  {GUIDE.role}
                </Badge>
              </div>
              <Text size="xs" leading="snug">
                {GUIDE.bio}
              </Text>
            </div>
          </article>
        ))}
      </div>

      <Button href="/pt/quem-somos" arrow>
        Conheça quem guia o bando
      </Button>
    </Section>
  );
}
