import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArrowRightIcon, Button, Container, IconButton, Section, Text } from '@/components/ui';
import { Block, Mono, Page, Rule, Rules, SpecTable } from './specimens';

/**
 * One grid: 1216px, 12 columns of 72px, 11 gutters of 32px. Sections breathe
 * 96px vertically; the header is 80px and the authority bar 108px.
 */
const meta = {
  title: 'Theme/Space & grid',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Spacing is the default Tailwind 4px scale, which matches the Figma steps 1:1. ' +
          '`Container` centres the grid and `Section` owns the vertical rhythm — a new page ' +
          'should not need a new max-width or a new `py-*`.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const STEPS = [
  { utility: '1', px: 4 },
  { utility: '2', px: 8 },
  { utility: '3', px: 12 },
  { utility: '4', px: 16 },
  { utility: '5', px: 20 },
  { utility: '6', px: 24 },
  { utility: '8', px: 32 },
  { utility: '12', px: 48 },
  { utility: '16', px: 64 },
  { utility: '24', px: 96 },
];

export const Scale: Story = {
  render: () => (
    <Page>
      <Block
        title="Steps in use"
        hint="Tailwind's 4px scale. These ten steps cover the whole design — reach for a bracket value only when matching a Figma measurement that is not on the scale."
      >
        <div className="flex flex-col gap-2">
          {STEPS.map(({ utility, px }) => (
            <div key={utility} className="flex items-center gap-4">
              <Mono className="w-24 shrink-0 text-content-muted">
                gap-{utility} / p-{utility}
              </Mono>
              <span aria-hidden className="h-4 rounded-sm bg-brand" style={{ width: px }} />
              <Mono className="text-content-muted">{px}px</Mono>
            </div>
          ))}
        </div>
      </Block>

      <Block
        title="Interactive targets"
        hint="Minimum 40 × 40px for anything clickable, so touch and keyboard both land."
      >
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col items-start gap-2">
            <Button size="sm">size=&quot;sm&quot; · 40px</Button>
            <Button size="md">size=&quot;md&quot; · 40px</Button>
            <Button size="lg">size=&quot;lg&quot; · 48px</Button>
          </div>
          <div className="flex items-end gap-3">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <IconButton label={`Exemplo ${size}`} size={size} variant="outline">
                  <ArrowRightIcon className="size-4" />
                </IconButton>
                <Mono className="text-content-muted">{size}</Mono>
              </div>
            ))}
          </div>
        </div>
        <Rules>
          <Rule tone="do">
            <Mono>Button</Mono> sm and md are both 40px tall — the difference is padding, not hit
            area.
          </Rule>
          <Rule tone="dont">
            <Mono>IconButton size=&quot;sm&quot;</Mono> is 32px, below the minimum. It is only safe
            inside a larger padded control (the theme switch); anything standalone uses{' '}
            <Mono>md</Mono>.
          </Rule>
        </Rules>
      </Block>
    </Page>
  ),
};

export const Grid: Story = {
  render: () => (
    <Page>
      <Block
        title="1216 · 12 × 72 · 11 × 32"
        hint="The columns below are the real grid. Resize the canvas: the gutters hold at 32px and the container stops growing at 1216px."
      >
        <Container>
          <div className="grid grid-cols-12 gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                aria-hidden
                className="h-24 rounded-control bg-brand-soft ring-1 ring-inset ring-brand-strong/30"
              />
            ))}
          </div>
        </Container>
        <SpecTable
          rows={[
            { name: 'Container size="grid"', value: 'max-w-[1216px]', note: 'default of the site' },
            {
              name: 'Container size="wide"',
              value: 'max-w-[1562px]',
              note: 'full-bleed photographic bands',
            },
            { name: 'Container size="prose"', value: 'max-w-3xl', note: 'long reading copy' },
            { name: 'gutter', value: 'gap-8 · 32px', note: '11 gutters between the 12 columns' },
            {
              name: 'side padding',
              value: 'px-6 · 24px',
              note: 'the design also specifies 40px at mid widths — not implemented yet',
            },
          ]}
        />
      </Block>

      <Block
        title="Content widths"
        hint="Same copy in the three widths, so the difference is visible rather than described."
      >
        <div className="flex flex-col gap-4">
          {(['grid', 'wide', 'prose'] as const).map((size) => (
            <Container key={size} size={size} padded={false}>
              <div className="rounded-card border border-line bg-surface-muted px-5 py-3">
                <Mono className="text-content-muted">size=&quot;{size}&quot;</Mono>
              </div>
            </Container>
          ))}
        </div>
      </Block>
    </Page>
  ),
};

export const Rhythm: Story = {
  render: () => (
    <>
      <Page className="pb-0">
        <Block
          title="Vertical rhythm"
          hint="`Section padding` presets. The bands below are live sections — the hairlines mark where one ends and the next begins."
        >
          <SpecTable
            rows={[
              { name: 'padding="band"', value: 'py-10 · 40px', note: 'authority bar, thin strips' },
              { name: 'padding="compact"', value: 'py-16 · 64px', note: 'dense sections' },
              {
                name: 'padding="default"',
                value: 'py-24 · 96px',
                note: 'the section rhythm of the design',
              },
              {
                name: 'padding="tall"',
                value: 'py-20 → 108px',
                note: 'bands that need to breathe on desktop',
              },
            ]}
          />
        </Block>
      </Page>

      {(['band', 'compact', 'default', 'tall'] as const).map((padding, index) => (
        <Section
          key={padding}
          padding={padding}
          surface={index % 2 === 0 ? 'muted' : 'page'}
          bordered
        >
          <Text size="sm" tone="muted">
            <Mono>padding=&quot;{padding}&quot;</Mono>
          </Text>
        </Section>
      ))}
    </>
  ),
};
