import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge, Card, MediaCard, Text } from '@/components/ui';
import { Block, Mono, Page, Rule, Rules, SpecTable } from './specimens';

/**
 * Generous radii and pill shapes; four shadows and nothing else. Photography
 * carries a 1px optical outline instead of a shadow.
 */
const meta = {
  title: 'Theme/Shape & elevation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Each radius has a job — the bigger the surface, the rounder it gets. Elevation is ' +
          'reserved: a floating menu, an active card, a review card and a compact control. ' +
          'Anything else is flat with a hairline.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const RADII = [
  { name: 'rounded-control', px: '12px', note: 'inputs, selects, the language menu' },
  { name: 'rounded-chip', px: '20px', note: 'stat chips' },
  { name: 'rounded-card', px: '24px', note: 'guide, itinerary and season cards' },
  { name: 'rounded-card-lg', px: '28px', note: 'destination and trail cards' },
  { name: 'rounded-panel', px: '32px', note: 'large photographic cards, mobile' },
  { name: 'rounded-panel-lg', px: '40px', note: 'large photographic and review cards, desktop' },
  { name: 'rounded-pill', px: '9999px', note: 'buttons, chips, every circular control' },
];

const SHADOWS = [
  { name: 'shadow-popover', value: '0 8px 24px /18%', note: 'floating menu' },
  { name: 'shadow-float', value: '0 18px 48px /18%', note: 'active trail card' },
  { name: 'shadow-card', value: '0 18px 48px /8%', note: 'review card' },
  { name: 'shadow-chip', value: '0 1px 2px /8%', note: 'compact control' },
  {
    name: 'shadow-image-outline',
    value: '0 0 0 1px /10%',
    note: 'optical outline on photography — black in light, white in dark',
  },
];

export const Radii: Story = {
  render: () => (
    <Page>
      <Block
        title="Radius by surface"
        hint="Pick by what the box is, not by taste: a chip is 20, a trail card 28, a photographic panel 32 on mobile and 40 on desktop."
      >
        <div className="flex flex-wrap gap-6">
          {RADII.map(({ name, px, note }) => (
            <div key={name} className="flex w-40 flex-col items-center gap-2 text-center">
              <span
                aria-hidden
                className={`size-24 border border-line-strong bg-surface-raised ${name}`}
              />
              <Mono>{name}</Mono>
              <Mono className="text-content-muted">{px}</Mono>
              <Text as="span" size="xs" tone="muted">
                {note}
              </Text>
            </div>
          ))}
        </div>
        <Rules>
          <Rule tone="do">
            Cards take the radius through the <Mono>radius</Mono> prop, so a page never writes{' '}
            <Mono>rounded-[28px]</Mono>.
          </Rule>
          <Rule tone="dont">
            The design also specifies 16px for bottom-sheet fields — there is no sheet in this repo
            yet, so no token for it either. Add one when the sheet lands instead of using{' '}
            <Mono>rounded-2xl</Mono>.
          </Rule>
        </Rules>
      </Block>
    </Page>
  ),
};

export const Elevation: Story = {
  render: () => (
    <Page>
      <Block
        title="Four shadows"
        hint="Surfaces are flat with a 1px hairline by default. A shadow means the element floats above the page or is the active one in a set."
      >
        <div className="flex flex-wrap gap-8">
          {SHADOWS.slice(0, 4).map(({ name, note }) => (
            <div key={name} className="flex w-44 flex-col items-center gap-3 text-center">
              <span aria-hidden className={`size-24 rounded-card bg-surface-raised ${name}`} />
              <Mono>{name}</Mono>
              <Text as="span" size="xs" tone="muted">
                {note}
              </Text>
            </div>
          ))}
        </div>
        <SpecTable rows={SHADOWS} />
      </Block>

      <Block
        title="Photography outline"
        hint="A hairline that keeps the crop from bleeding into the surface. It mirrors: black 10% in light, white 10% in dark."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {(['light', 'dark'] as const).map((theme) => (
            <div
              key={theme}
              data-theme={theme}
              className="flex flex-col gap-3 rounded-panel bg-surface p-6"
            >
              <Mono className="text-content-muted">data-theme=&quot;{theme}&quot;</Mono>
              <MediaCard
                image={{ src: '/img/home_square_right_morro_2_1_5x.webp', alt: '' }}
                overlay="none"
                radius="card"
                className="h-45 shadow-image-outline"
              />
            </div>
          ))}
        </div>
      </Block>

      <Block
        title="In place"
        hint="The review card is the one flat surface that carries a shadow; the chip is the compact control."
      >
        <div className="flex flex-wrap items-start gap-6">
          <Card elevation="card" radius="panelLg" padding="lg" className="max-w-96 gap-3">
            <Text size="sm" tone="muted">
              Avaliações verificadas · TripAdvisor
            </Text>
            <Text size="lg" weight="light" pretty>
              Fizemos a travessia do Vale do Pati em cinco dias e voltamos outra pessoa.
            </Text>
          </Card>
          <Badge variant="soft" radius="chip" size="md" className="shadow-chip">
            Cadastur regularizado
          </Badge>
        </div>
      </Block>
    </Page>
  ),
};
