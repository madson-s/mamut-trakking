import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button, CaretDownIcon, Heading, IconButton, MediaCard, Text } from '@/components/ui';
import { Block, Mono, Page, Rule, Rules, SpecTable } from './specimens';

/**
 * Movement is short and always on named properties. Hover states darken or
 * fill, they never lighten; pressed is a 4% squeeze; focus-visible mirrors
 * hover and adds the brand ring.
 */
const meta = {
  title: 'Theme/Motion',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Durations and easings come from `motion` in `src/design/tokens.ts`; `ease-brand` is ' +
          '`cubic-bezier(.2, 0, 0, 1)`. Every hover affordance in this section is also reachable ' +
          'by keyboard — press Tab through the canvas to see the ring.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const DURATIONS = [
  { name: 'motion.fast', value: 'duration-150 ease-out', note: 'icon hover, toggle, input border' },
  { name: 'motion.base', value: 'duration-300 ease-out', note: 'buttons, links, arrow nudge' },
  { name: 'motion.slow', value: 'duration-500 ease-brand', note: 'content reveal, card expansion' },
  { name: 'motion.reveal', value: 'duration-700 ease-brand', note: 'image zoom and parallax' },
  { name: 'theme change', value: '200ms ease-out', note: 'background and text colour on <body>' },
  { name: 'press', value: 'active:scale-[0.96]', note: 'everything clickable' },
];

export const Durations: Story = {
  render: () => (
    <Page>
      <Block
        title="The four presets"
        hint="Pick by what moves: colour is fast, layout is slow, imagery is slowest."
      >
        <SpecTable rows={DURATIONS} />
        <Rules>
          <Rule tone="do">
            List the properties that animate:{' '}
            <Mono>transition-[background-color,border-color,color,transform]</Mono>.
          </Rule>
          <Rule tone="dont">
            Never <Mono>transition: all</Mono> — it animates layout by accident and costs frames.
          </Rule>
        </Rules>
      </Block>

      <Block
        title="ease-brand"
        hint="The contextual easing: quick out, long settle. Hover the square."
      >
        <span className="inline-block size-24 rounded-card bg-brand transition-transform duration-500 ease-brand hover:scale-110" />
      </Block>
    </Page>
  ),
};

/** Hover, press and focus on the real controls. */
export const States: Story = {
  render: () => (
    <Page>
      <Block
        title="Hover"
        hint="The filled CTA darkens; the outline CTA fills green and flips its label white; the arrow nudges 2px along its axis."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button arrow>Escolha a sua trilha</Button>
          <Button variant="outline" arrow>
            Leia nosso manifesto
          </Button>
          <Button variant="ghost" arrow>
            Conheça quem guia o bando
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-panel bg-surface-inverse p-8">
          <Button variant="outlineOnMedia" arrow>
            Explorar a trilha
          </Button>
          <IconButton label="Mostrar roteiro anterior" variant="outlineOnMedia">
            <CaretDownIcon className="size-4 rotate-90" />
          </IconButton>
          <IconButton label="Mostrar próximo roteiro" variant="solidOnMedia">
            <CaretDownIcon className="size-4 -rotate-90" />
          </IconButton>
        </div>
        <Rules>
          <Rule tone="do">
            Focus mirrors hover and adds a 2px brand ring — over a photo the ring offset goes dark
            instead of light.
          </Rule>
          <Rule tone="dont">
            A filled green CTA never lightens on hover, and selection is never signalled by colour
            alone.
          </Rule>
        </Rules>
      </Block>

      <Block
        title="Reveal"
        hint="Opacity 0 → 1, scale .25 → 1, blur 4px → 0, in 300ms with ease-brand. Hover the panel."
      >
        <div className="group grid h-40 w-full max-w-md place-items-center rounded-panel border border-dashed border-line-strong">
          <Heading
            as="p"
            size="quote"
            className="scale-[0.25] opacity-0 blur-xs transition-[opacity,filter,transform] duration-300 ease-brand group-hover:scale-100 group-hover:opacity-100 group-hover:blur-0"
          >
            É dessa memória que nascemos.
          </Heading>
        </div>
      </Block>
    </Page>
  ),
};

/**
 * Two zoom amounts, both restrained: the small hero destination tiles go to
 * 1.12, editorial imagery to 1.025. The crop never distorts.
 */
export const ImageZoom: Story = {
  name: 'Image zoom',
  render: () => (
    <Page>
      <Block title="1.12 · hero destination tile">
        <div className="group h-45 w-64 overflow-hidden rounded-card bg-surface-sunken">
          <span
            aria-hidden
            className="block h-full w-full bg-cover bg-center transition-transform duration-700 ease-brand group-hover:scale-[1.12]"
            style={{ backgroundImage: 'url(/img/home_square_right_morro_3_1_5x.webp)' }}
          />
        </div>
      </Block>

      <Block
        title="1.025 · editorial"
        hint="`MediaCard zoomOnHover` — the amount is in the component, so no page can zoom harder."
      >
        <MediaCard
          image={{ src: '/img/entre_session_foto_01_1_5x.webp', alt: '' }}
          overlay="bottom"
          radius="panel"
          zoomOnHover
          className="h-72 max-w-lg"
          contentLayer="fill"
          contentClassName="flex items-end p-7"
        >
          <Text tone="onMedia" weight="medium">
            Guias nativos · Chapada Diamantina
          </Text>
        </MediaCard>
      </Block>

      <Block title="Reduced motion">
        <Rules>
          <Rule tone="do">
            Scroll-driven movement collapses to its finished state under{' '}
            <Mono>prefers-reduced-motion</Mono> — the reviews stack renders open instead of
            animating.
          </Rule>
          <Rule tone="dont">
            Do not gate content on an animation: if the movement is skipped, the content is still
            there.
          </Rule>
        </Rules>
      </Block>
    </Page>
  ),
};
