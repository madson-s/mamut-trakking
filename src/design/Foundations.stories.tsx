import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge, Button, Card, Heading, Text } from '@/components/ui';
import { Block, Mono, Page, Rule, Rules, SpecTable, ThemePair } from './specimens';

/**
 * Entry point of the theme documentation: how the token layers fit together
 * and the two rules that keep light/dark working. Colour, type, space, shape,
 * motion and brand assets each have their own section in `Theme/*`.
 */
const meta = {
  title: 'Theme/Foundations',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Three layers: Figma primitives → semantic tokens in `src/app/globals.css` → typed ' +
          'presets in `src/design/tokens.ts`, consumed by the primitives in ' +
          '`src/components/ui`. Components name the semantic layer only — a raw ramp step ' +
          'mirrors between themes and flips meaning. Switch light/dark in the toolbar ' +
          '(paintbrush) on any story to check both.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const LAYERS = [
  {
    name: '1 · primitives',
    value: '--gray-500, --primary-500',
    note: 'Figma ramps, declared in globals.css. Mirror around 500 in [data-theme="dark"].',
  },
  {
    name: '2 · semantic',
    value: '--surface, --content, --brand',
    note: 'What components mean. Exposed as Tailwind utilities through @theme inline.',
  },
  {
    name: '3 · presets',
    value: 'src/design/tokens.ts',
    note: 'Typed variant maps (tone, displaySize, radius, elevation, motion) used by props.',
  },
  {
    name: 'components',
    value: 'src/components/ui',
    note: 'Section, Heading, Text, Button, Card… the only layer a page touches.',
  },
  {
    name: 'print mirror',
    value: 'src/design/print.ts',
    note: 'Literal light-mode values for outputs that cannot read CSS (the voucher PDF).',
  },
];

export const TokenLayers: Story = {
  name: 'Token layers',
  render: () => (
    <Page>
      <Block
        title="Where a value lives"
        hint="A new page picks a component; a new component picks a preset; a new preset picks a semantic token. Only globals.css knows the hex values."
      >
        <SpecTable rows={LAYERS} />
      </Block>

      <Block title="The two rules">
        <Rules>
          <Rule tone="do">
            Name the semantic layer: <Mono>bg-surface</Mono>, <Mono>text-content-muted</Mono>,{' '}
            <Mono>bg-brand</Mono>, <Mono>border-line</Mono>, <Mono>rounded-panel</Mono>,{' '}
            <Mono>shadow-card</Mono>, <Mono>ease-brand</Mono>.
          </Rule>
          <Rule tone="dont">
            Never style a surface or a text colour from a raw ramp step (<Mono>gray-900</Mono>,{' '}
            <Mono>primary-500</Mono>): the ramp mirrors, so the step means the opposite thing in
            the other theme. Raw steps are for one-off accents only.
          </Rule>
          <Rule tone="do">
            <Mono>className</Mono> is for layout — position, size, spacing. A missing colour or
            position gets a new prop on the component, not an override that races the CSS order.
          </Rule>
          <Rule tone="dont">
            Never swap the theme-invariant whites (<Mono>text-on-media</Mono>,{' '}
            <Mono>border-on-media</Mono>) for <Mono>text-content</Mono>: white on a photograph and
            white on the green fill stay white in both themes.
          </Rule>
        </Rules>
      </Block>
    </Page>
  ),
};

/**
 * `--gray-900` is `#1f1f1f` in light and `#f4f4f4` in dark. A panel built from
 * the raw step is therefore dark in light mode and white in dark mode; the same
 * panel built from `bg-surface-inverse` stays a contrast block in both.
 */
export const RawStepTrap: Story = {
  name: 'Raw step trap',
  render: () => (
    <Page>
      <Block
        title="Same intent, two spellings"
        hint="Both panels below ask for “maximum contrast block”. Only the semantic one keeps that meaning when the theme flips."
      >
        <ThemePair>
          <div className="rounded-card bg-gray-900 px-5 py-4">
            <Mono className="text-gray-0">bg-gray-900 · raw step</Mono>
          </div>
          <div className="rounded-card bg-surface-inverse px-5 py-4">
            <Mono className="text-surface">bg-surface-inverse · semantic</Mono>
          </div>
        </ThemePair>
      </Block>

      <Block
        title="Components inherit the fix"
        hint="Because every primitive reads the semantic layer, a themed subtree recomputes on its own — a light panel inside a dark page needs no extra props."
      >
        <ThemePair>
          <Card padding="lg" className="gap-4">
            <Heading as="h3" size="quote">
              Vale do Pati (05 dias)
            </Heading>
            <Text size="sm" tone="muted">
              Guias nativos · Chapada Diamantina · Lençóis, Bahia
            </Text>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>5 Dias</Badge>
              <Badge variant="brand">Moderado</Badge>
            </div>
            <Button size="sm" arrow>
              Escolha a sua trilha
            </Button>
          </Card>
        </ThemePair>
      </Block>
    </Page>
  ),
};
