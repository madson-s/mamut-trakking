import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Image from 'next/image';
import { Button, Heading, MediaCard, Text } from '@/components/ui';
import { Block, Mono, Page, Ramp, Rule, Rules, SpecTable, Swatch, SwatchGrid } from './specimens';

/**
 * Deep neutrals + white + moss green as the only functional colour. Orange is
 * warmth and support; the ancestral yellow belongs to line art. Dark is the
 * default theme and the ramps mirror around 500, so one token set serves both.
 */
const meta = {
  title: 'Theme/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`--primary-500 #4e7847` is the only action colour and a filled CTA **darkens** on ' +
          'hover (`--brand-hover #3e6138`) — never lightens. Orange never competes on a CTA, and ' +
          'the yellow appears in line art and small details only.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const SURFACES = [
  { name: 'bg-surface', className: 'bg-surface', note: 'page background · --gray-50' },
  { name: 'bg-surface-muted', className: 'bg-surface-muted', note: 'alternating band · --gray-100' },
  {
    name: 'bg-surface-raised',
    className: 'bg-surface-raised',
    note: 'cards and chips · --gray-200',
  },
  {
    name: 'bg-surface-sunken',
    className: 'bg-surface-sunken',
    note: 'media placeholder · --gray-300',
  },
  {
    name: 'bg-surface-inverse',
    className: 'bg-surface-inverse',
    note: 'maximum contrast · --gray-1000',
  },
];

const LINES = [
  { name: 'border-line', className: 'border-4 border-line', note: 'section and card hairline' },
  { name: 'border-line-strong', className: 'border-4 border-line-strong', note: 'data cards, inputs' },
  { name: 'border-line-contrast', className: 'border-4 border-line-contrast', note: 'outline button' },
];

const BRAND = [
  { name: 'bg-brand', className: 'bg-brand', note: 'the CTA · --primary-500' },
  { name: 'bg-brand-hover', className: 'bg-brand-hover', note: 'CTA hover, darker · #3e6138' },
  { name: 'bg-brand-soft', className: 'bg-brand-soft', note: 'soft background · --primary-100' },
  { name: 'bg-brand-strong', className: 'bg-brand-strong', note: 'icon and link · --primary-700' },
  { name: 'bg-brand-ink', className: 'bg-brand-ink', note: 'text over soft green · --primary-950' },
  { name: 'bg-accent', className: 'bg-accent', note: 'earth orange, support · --secondary-500' },
  {
    name: 'bg-accent-line-art',
    className: 'bg-accent-line-art',
    note: 'ancestral yellow · #f7cd45 · illustration only',
  },
];

const STATUS = [
  { name: 'bg-success-500', className: 'bg-success-500' },
  { name: 'bg-warning-500', className: 'bg-warning-500' },
  { name: 'bg-error-500', className: 'bg-error-500' },
  { name: 'bg-info-500', className: 'bg-info-500' },
];

const LEGACY = [
  { name: 'bg-mamut-ink', className: 'bg-mamut-ink' },
  { name: 'bg-mamut-stone', className: 'bg-mamut-stone' },
  { name: 'bg-mamut-sand', className: 'bg-mamut-sand' },
  { name: 'bg-mamut-moss', className: 'bg-mamut-moss' },
  { name: 'bg-mamut-clay', className: 'bg-mamut-clay' },
];

export const Semantic: Story = {
  render: () => (
    <Page>
      <Block
        title="Surfaces"
        hint="Five steps, from the page background to the maximum-contrast block. Sections alternate page / muted; cards sit on raised."
      >
        <SwatchGrid>
          {SURFACES.map((item) => (
            <Swatch key={item.name} {...item} />
          ))}
        </SwatchGrid>
      </Block>

      <Block title="Text">
        <div className="flex flex-col gap-2">
          <Text tone="default">text-content — primary copy · --gray-950</Text>
          <Text tone="secondary">text-content-secondary — labels and eyebrows · --gray-700</Text>
          <Text tone="muted">text-content-muted — supporting paragraph · --gray-500</Text>
          <Text tone="subtle">text-content-subtle — caption and stat label · --gray-400</Text>
          <Text tone="brand">text-brand-strong — link and highlight · --primary-700</Text>
        </div>
      </Block>

      <Block title="Lines">
        <SwatchGrid>
          {LINES.map((item) => (
            <Swatch key={item.name} {...item} />
          ))}
        </SwatchGrid>
      </Block>

      <Block title="Brand">
        <SwatchGrid>
          {BRAND.map((item) => (
            <Swatch key={item.name} {...item} />
          ))}
        </SwatchGrid>
        <Rules>
          <Rule tone="do">
            Hover on the filled CTA goes <em>darker</em> — <Mono>bg-brand</Mono> →{' '}
            <Mono>bg-brand-hover</Mono>. Hover the button below to check.
          </Rule>
          <Rule tone="dont">
            Orange never carries an action, and the yellow is never a fill: they are warmth and
            illustration.
          </Rule>
        </Rules>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Escolha a sua trilha</Button>
          <Button variant="outline">Falar com guia</Button>
        </div>
      </Block>

      <Block
        title="Status"
        hint="Feedback only — form errors, hints, the handoff placeholder marker. Never brand colour."
      >
        <SwatchGrid>
          {STATUS.map((item) => (
            <Swatch key={item.name} {...item} />
          ))}
        </SwatchGrid>
      </Block>
    </Page>
  ),
};

/**
 * Raw steps, for reference only. The dark theme mirrors the ramp around 500:
 * `--gray-900` is `#1f1f1f` in light and `#f4f4f4` in dark, which is why a
 * component that names a step renders inverted in the other theme.
 */
export const Ramps: Story = {
  render: () => (
    <Page>
      <Block
        title="Mirrored ramps"
        hint="Switch the toolbar theme and watch the same step change ends. --primary-500 is the axis and stays put."
      >
        <div className="flex flex-col gap-6">
          <Ramp
            name="--primary-*"
            prefix="bg-primary"
            steps={['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']}
          />
          <Ramp
            name="--secondary-*"
            prefix="bg-secondary"
            steps={['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']}
          />
          <Ramp
            name="--gray-*"
            prefix="bg-gray"
            steps={[
              '0',
              '50',
              '100',
              '200',
              '300',
              '400',
              '500',
              '600',
              '700',
              '800',
              '900',
              '950',
              '1000',
              '1100',
            ]}
          />
        </div>
      </Block>

      <Block
        title="Legacy palette"
        hint="The old --mamut-* brand, still used by the EN and ES routes and the older adventure components. Do not use it for new work."
      >
        <SwatchGrid>
          {LEGACY.map((item) => (
            <Swatch key={item.name} {...item} />
          ))}
        </SwatchGrid>
      </Block>
    </Page>
  ),
};

/**
 * Two whites are theme-invariant: content on a photograph and content on the
 * green fill. They have their own tokens and must not be swapped for
 * `text-content`, which mirrors.
 */
export const OverMedia: Story = {
  name: 'Over media',
  render: () => (
    <Page>
      <Block
        title="Three levels over a photograph"
        hint="Title in pure white, paragraph in the warm off-white, supporting copy dimmer still. Flip the theme: nothing here moves."
      >
        <MediaCard
          image={{
            src: '/img/home_backgroud/home_backgroud_crop_01_1x.webp',
            alt: '',
            sizes: '100vw',
            position: 'center 40%',
          }}
          overlay="left"
          radius="panel"
          backdrop="media"
          className="h-90"
          contentLayer="fill"
          contentClassName="flex flex-col justify-end gap-2 p-8"
        >
          <Heading size="card" tone="onMedia">
            text-on-media · #ffffff
          </Heading>
          <Text tone="onMediaSoft">text-on-media-soft · #f8f5f0 — paragraph over a photo</Text>
          <Text size="sm" tone="onMediaMuted">
            text-on-media-muted · #e2dfdc — supporting line
          </Text>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button variant="outlineOnMedia" arrow>
              Explorar a trilha
            </Button>
          </div>
        </MediaCard>
      </Block>

      <Block title="Inks behind and over the image">
        <SpecTable
          rows={[
            {
              name: 'bg-media-backdrop',
              value: '#101716',
              note: 'sits behind the photo — visible while it loads and at the crop edges',
            },
            {
              name: 'bg-media-tint',
              value: 'rgba(29,29,29,.68)',
              note: 'the flat ink of the manifesto card (overlay="tint")',
            },
            {
              name: 'border-on-media',
              value: '#ffffff',
              note: 'outline button and chip borders over a photo',
            },
          ]}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {(['bottom', 'left', 'tint'] as const).map((overlay) => (
            <MediaCard
              key={overlay}
              image={{ src: '/img/home_square_right_morro_1_1_5x.webp', alt: '' }}
              overlay={overlay}
              radius="card"
              className="h-45"
              contentLayer="fill"
              contentClassName="flex items-end p-4"
            >
              <Mono className="text-on-media">overlay=&quot;{overlay}&quot;</Mono>
            </MediaCard>
          ))}
        </div>
        <Rules>
          <Rule tone="do">
            Gradients exist to make text legible — a left-to-right ramp on the hero, a bottom-up
            ramp on cards, one flat ink on the manifesto.
          </Rule>
          <Rule tone="dont">
            No decorative gradients, no patterns, no noise, no frosted glass.
          </Rule>
        </Rules>
      </Block>

      <Block
        title="Brand artwork on a light surface"
        hint="The logo files are white. `.theme-logo` darkens them wherever the surface is light instead of shipping a second file."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {(['light', 'dark'] as const).map((theme) => (
            <div
              key={theme}
              data-theme={theme}
              className="flex items-center gap-6 rounded-panel border border-line bg-surface p-6"
            >
              <Image
                src="/svg/mamut-logo-branco.svg"
                alt="Mamut Trekking"
                width={132}
                height={28}
                unoptimized
                className="theme-logo h-7 w-auto"
              />
              <Mono className="text-content-muted">data-theme=&quot;{theme}&quot;</Mono>
            </div>
          ))}
        </div>
      </Block>
    </Page>
  ),
};
