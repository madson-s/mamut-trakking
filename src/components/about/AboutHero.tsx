import Image from 'next/image';
import { Button, Emphasis, PageHero, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';
import { GUIDES } from './about-data';

const HERO_FACES = GUIDES.slice(0, 6);

export function AboutHero() {
  return (
    <PageHero
      size="tall"
      image={{
        src: '/img/about/hero-lencois.webp',
        alt: 'Centro histórico de Lençóis ao pôr do sol',
        position: '50% 71%',
      }}
      title={
        <>
          <span className="flex flex-wrap items-center gap-x-3 gap-y-2 lg:justify-center">
            <span>Nascidos</span>
            <span className="flex -space-x-4 sm:-space-x-5" aria-hidden>
              {HERO_FACES.map((guide, index) => (
                <Image
                  key={guide.name}
                  src={guide.photo}
                  alt=""
                  width={62}
                  height={62}
                  sizes="(min-width: 640px) 62px, 42px"
                  className={cn(
                    'relative size-11 rounded-full object-cover shadow-image-outline sm:size-15.5',
                    'transition-[translate,scale,box-shadow] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]',
                    'hover:z-10 hover:-translate-y-1 hover:scale-[1.14] hover:shadow-float',
                    'motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100',
                    index >= 3 && 'max-lg:hidden',
                  )}
                  style={guide.position ? { objectPosition: guide.position } : undefined}
                />
              ))}
            </span>
            <span className="max-lg:hidden">aqui.</span>
          </span>
          <span className="block lg:hidden">aqui formados pela Chapada.</span>
          <span className="hidden lg:block">Formados pela Chapada.</span>
        </>
      }
      lead={
        <Text
          size="sm"
          weight="light"
          tone="onMediaSoft"
          pretty
          className="max-w-148.75 lg:text-lg"
        >
          <span className="lg:hidden">
            Trekkings guiados por quem é filho da Chapada Diamantina. Cada trilha é uma jornada de
            volta ao que você é.
          </span>
          <span className="max-lg:hidden">
            Trekkings guiados por quem é filho da Chapada Diamantina — cada trilha é uma jornada de
            volta ao que você é.
          </span>
        </Text>
      }
      actions={
        <>
          <Button href="#guias" arrow className="max-lg:w-full">
            Conheça o bando
          </Button>
          <Button href={SITE.whatsappUrl} variant="outlineOnMedia" className="max-lg:w-full">
            Falar com guia
          </Button>
        </>
      }
      decoration={
        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden w-[min(92vw,630px)] -translate-x-1/2 items-end justify-between lg:flex">
          <Image
            src="/svg/about/humans-yellow.svg"
            alt=""
            width={769}
            height={246}
            unoptimized
            className="h-auto w-[46%]"
          />
          <span
            aria-hidden
            className="aspect-[273/157] w-[43%] bg-[#FBBF24]"
            style={{
              WebkitMask: "url('/svg/mamut-logo-branco.svg') center bottom / contain no-repeat",
              mask: "url('/svg/mamut-logo-branco.svg') center bottom / contain no-repeat",
            }}
          />
        </div>
      }
    >
      <div className="flex items-center gap-2.5 self-center lg:hidden">
        <Image
          src="/svg/_icons/icon_03_montain.svg"
          alt=""
          width={244}
          height={157}
          unoptimized
          className="h-4 w-6.25 shrink-0 brightness-0 invert"
        />
        <Text size="xs" weight="light" tone="onMediaMuted" leading="tight">
          Uma <Emphasis size="xs">jornada</Emphasis> de resgate das práticas{' '}
          <Emphasis size="xs">primitivas</Emphasis>
        </Text>
      </div>
    </PageHero>
  );
}
