import Image from 'next/image';
import { Badge, Button, Card, Heading, Section, SectionHeading, Text } from '@/components/ui';
import { focus, motion } from '@/design/tokens';
import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';
import { GUIDES, type Guide } from './about-data';

const GUIDE_IMAGE_SIZES =
  '(min-width: 1280px) 377px, (min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw';

const GUIDE_CROSSFADE = cn(
  'object-cover transition-[opacity,transform] duration-500 ease-brand',
  'group-hover/guide:scale-[1.025] group-focus-visible/guide:scale-[1.025]',
  'motion-reduce:transition-none motion-reduce:transform-none',
);

export function AboutGuides() {
  return (
    <Section
      id="guias"
      padding="tall"
      containerClassName="relative flex flex-col items-center gap-16"
      className="scroll-mt-20 overflow-hidden"
      labelledBy="about-guides-title"
    >
      <Image
        src="/svg/about/guides-landscape-line.svg"
        alt=""
        width={861}
        height={537}
        unoptimized
        className="pointer-events-none absolute bottom-0 right-[-12%] hidden w-[78%] max-w-none opacity-30 lg:block"
      />

      <SectionHeading
        titleId="about-guides-title"
        align="center"
        size="hero"
        maxWidth="max-w-[864px]"
        title="Quem guia o nosso bando."
        lead={
          <Text size="lg" weight="light" tone="muted" pretty className="max-w-[864px]">
            Sete guias nativos, formados pela Chapada. Cada um com uma especialidade — juntos,
            cobrem o Parque Nacional inteiro.
          </Text>
        }
      />

      <div className="relative grid w-full gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((guide) => (
          <GuideCard key={guide.name} guide={guide} />
        ))}
        <JoinTeamCard />
      </div>
    </Section>
  );
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article
      tabIndex={0}
      aria-label={`${guide.name}, ${guide.role}`}
      className={cn(
        'group/guide flex min-w-0 flex-col gap-3 rounded-panel-lg',
        focus.onSurface,
        'focus-visible:ring-offset-4',
      )}
    >
      <div className="relative aspect-[377/402] w-full overflow-hidden rounded-panel-lg bg-surface-sunken shadow-image-outline">
        <Image
          src={guide.photo}
          alt={guide.name}
          fill
          sizes={GUIDE_IMAGE_SIZES}
          className={cn(
            GUIDE_CROSSFADE,
            'group-hover/guide:opacity-0 group-focus-visible/guide:opacity-0',
          )}
          style={guide.position ? { objectPosition: guide.position } : undefined}
        />
        <Image
          src={guide.photoBw}
          alt=""
          fill
          sizes={GUIDE_IMAGE_SIZES}
          className={cn(
            GUIDE_CROSSFADE,
            'scale-[1.01] opacity-0 group-hover/guide:opacity-100 group-focus-visible/guide:opacity-100',
            'motion-reduce:scale-100',
          )}
          style={guide.position ? { objectPosition: guide.position } : undefined}
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
            // `blur-none`, não `blur-0`: no Tailwind 4 só o primeiro existe — o
            // segundo não gera regra e o traço ficava embaçado no hover.
            'group-hover/guide:translate-y-0 group-hover/guide:opacity-100 group-hover/guide:blur-none',
            'group-focus-visible/guide:translate-y-0 group-focus-visible/guide:opacity-100 group-focus-visible/guide:blur-none',
            'motion-reduce:translate-y-0 motion-reduce:transition-none',
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <Text as="p" size="xl" weight="semibold">
            {guide.name}
          </Text>
          <Badge variant="brand" size="sm" radius="panelLg">
            {guide.role}
          </Badge>
        </div>
        <Text size="xs" weight="light" leading="snug" pretty>
          {guide.bio}
        </Text>
      </div>
    </article>
  );
}

function JoinTeamCard() {
  return (
    <Card
      as="article"
      surface="outline"
      radius="panelLg"
      padding="none"
      className="min-h-[488px] overflow-hidden px-8 pb-10 pt-10 sm:px-10"
    >
      <div className="flex items-end gap-5">
        <Image
          src="/svg/about/walking-group.svg"
          alt=""
          width={461}
          height={245}
          unoptimized
          className="h-auto w-[47%]"
        />
        <Image
          src="/svg/about/mamut-yellow.svg"
          alt=""
          width={117}
          height={67}
          unoptimized
          className="about-theme-art h-auto w-[43%] brightness-0 invert"
        />
      </div>

      <div className="mt-auto flex flex-col gap-6">
        <Heading as="h3" size="section" balance>
          Quer caminhar
          <br />
          com a gente?
        </Heading>
        <Text size="sm" weight="light" pretty>
          Fale com um guia nativo pelo WhatsApp. Escolhemos juntos o ritmo, o roteiro e a data.
        </Text>
        <Button href={SITE.whatsappUrl} block arrow>
          Entrar para o bando
        </Button>
      </div>
    </Card>
  );
}
