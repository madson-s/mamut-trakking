import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

/**
 * Living reference for the Mamut theme. Switch light/dark in the toolbar
 * (paintbrush icon) to watch the tokens mirror.
 */
const meta = {
  title: 'Theme/Foundations',
  parameters: {
    docs: {
      description: {
        component:
          'Semantic tokens declared in `src/app/globals.css` and typed in `src/design/tokens.ts`. ' +
          'Components always use these names — never raw `gray-500` / `primary-500`, ' +
          'otherwise the light/dark mirror breaks.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <Heading as="h2" size="card">
        {title}
      </Heading>
      {children}
    </section>
  );
}

function Swatch({
  name,
  swatchClass,
  note,
}: {
  name: string;
  swatchClass: string;
  note?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`size-14 shrink-0 rounded-card border border-line-strong ${swatchClass}`}
        aria-hidden
      />
      <span className="flex flex-col">
        <Text as="span" size="sm" weight="medium">
          {name}
        </Text>
        {note && (
          <Text as="span" size="xs" tone="muted">
            {note}
          </Text>
        )}
      </span>
    </div>
  );
}

const SURFACES = [
  { name: 'bg-surface', swatchClass: 'bg-surface', note: 'page background' },
  { name: 'bg-surface-muted', swatchClass: 'bg-surface-muted', note: 'alternating band' },
  { name: 'bg-surface-raised', swatchClass: 'bg-surface-raised', note: 'cards and chips' },
  { name: 'bg-surface-sunken', swatchClass: 'bg-surface-sunken', note: 'media placeholder' },
  { name: 'bg-surface-inverse', swatchClass: 'bg-surface-inverse', note: 'maximum contrast' },
];

const BRAND = [
  { name: 'bg-brand', swatchClass: 'bg-brand', note: 'primary CTA' },
  { name: 'bg-brand-hover', swatchClass: 'bg-brand-hover', note: 'CTA hover' },
  { name: 'bg-brand-soft', swatchClass: 'bg-brand-soft', note: 'soft background' },
  { name: 'bg-brand-strong', swatchClass: 'bg-brand-strong', note: 'border and icon' },
  { name: 'bg-brand-ink', swatchClass: 'bg-brand-ink', note: 'text over light green' },
  { name: 'bg-accent', swatchClass: 'bg-accent', note: 'earth orange (secondary)' },
];

const LINES = [
  { name: 'border-line', swatchClass: 'border-4 border-line bg-transparent', note: 'default' },
  {
    name: 'border-line-strong',
    swatchClass: 'border-4 border-line-strong bg-transparent',
    note: 'chips and cards',
  },
  {
    name: 'border-line-contrast',
    swatchClass: 'border-4 border-line-contrast bg-transparent',
    note: 'outline button',
  },
];

const RADII = [
  { name: 'rounded-chip', cls: 'rounded-chip', px: '20px' },
  { name: 'rounded-card', cls: 'rounded-card', px: '24px' },
  { name: 'rounded-card-lg', cls: 'rounded-card-lg', px: '28px' },
  { name: 'rounded-panel', cls: 'rounded-panel', px: '32px' },
  { name: 'rounded-panel-lg', cls: 'rounded-panel-lg', px: '40px' },
  { name: 'rounded-pill', cls: 'rounded-pill', px: 'full' },
];

const SHADOWS = [
  { name: 'shadow-chip', cls: 'shadow-chip' },
  { name: 'shadow-card', cls: 'shadow-card' },
  { name: 'shadow-float', cls: 'shadow-float' },
  { name: 'shadow-popover', cls: 'shadow-popover' },
];

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-12 p-10">
      <Block title="Surfaces">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SURFACES.map((item) => (
            <Swatch key={item.name} {...item} />
          ))}
        </div>
      </Block>

      <Block title="Brand">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRAND.map((item) => (
            <Swatch key={item.name} {...item} />
          ))}
        </div>
      </Block>

      <Block title="Lines">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LINES.map((item) => (
            <Swatch key={item.name} {...item} />
          ))}
        </div>
      </Block>

      <Block title="Text">
        <div className="flex flex-col gap-2">
          <Text tone="default">text-content — primary text</Text>
          <Text tone="secondary">text-content-secondary — supporting</Text>
          <Text tone="muted">text-content-muted — secondary paragraph</Text>
          <Text tone="subtle">text-content-subtle — caption</Text>
          <Text tone="brand">text-brand-strong — link / highlight</Text>
        </div>
        <div className="flex flex-col gap-2 rounded-card bg-surface-inverse p-6">
          <Text tone="onMedia">text-on-media — heading over a photo (never mirrors)</Text>
          <Text tone="onMediaSoft">text-on-media-soft — paragraph over a photo</Text>
          <Text tone="onMediaMuted">text-on-media-muted — supporting over a photo</Text>
        </div>
      </Block>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="flex flex-col gap-12 p-10">
      <Block title="Display · Mergo">
        <div className="flex flex-col gap-6">
          <div>
            <Text size="xs" tone="muted">
              size=&quot;hero&quot; · 40 → 60 → 72
            </Text>
            <Heading size="hero">Sua trilha começa aqui</Heading>
          </div>
          <div>
            <Text size="xs" tone="muted">
              size=&quot;section&quot; · 40 → 48
            </Text>
            <Heading size="section">Escolha seu caminho</Heading>
          </div>
          <div>
            <Text size="xs" tone="muted">
              size=&quot;card&quot; · 30
            </Text>
            <Heading size="card">Vale do Pati (05 dias)</Heading>
          </div>
          <div>
            <Text size="xs" tone="muted">
              size=&quot;quote&quot; · 24
            </Text>
            <Heading size="quote">É dessa memória que nascemos.</Heading>
          </div>
        </div>
      </Block>

      <Block title="Body · Brutal Milk No 2">
        <div className="flex flex-col gap-4">
          {(['xl', 'lg', 'base', 'sm', 'xs'] as const).map((size) => (
            <div key={size}>
              <Text size="xs" tone="muted">
                size=&quot;{size}&quot;
              </Text>
              <Text size={size}>Trekkings guiados por quem é filho da Chapada Diamantina.</Text>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-6">
          {(['light', 'normal', 'medium', 'semibold'] as const).map((weight) => (
            <Text key={weight} weight={weight}>
              {weight}
            </Text>
          ))}
        </div>
      </Block>
    </div>
  ),
};

export const ShapeAndElevation: Story = {
  name: 'Shape & elevation',
  render: () => (
    <div className="flex flex-col gap-12 p-10">
      <Block title="Radii">
        <div className="flex flex-wrap gap-6">
          {RADII.map(({ name, cls, px }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <span className={`size-24 border border-line-strong bg-surface-raised ${cls}`} />
              <Text size="xs" weight="medium">
                {name}
              </Text>
              <Text size="xs" tone="muted">
                {px}
              </Text>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Elevation">
        <div className="flex flex-wrap gap-8">
          {SHADOWS.map(({ name, cls }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <span className={`size-24 rounded-card bg-surface-raised ${cls}`} />
              <Text size="xs" weight="medium">
                {name}
              </Text>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Motion">
        <Text size="sm" tone="muted">
          <code>ease-brand</code> = cubic-bezier(.2, 0, 0, 1) · durations in{' '}
          <code>motion.fast | base | slow | reveal</code>
        </Text>
        <div className="flex flex-wrap items-center gap-4">
          <span className="size-24 rounded-card bg-brand transition-transform duration-500 ease-brand hover:scale-110" />
          <Text size="xs" tone="muted">
            hover me
          </Text>
        </div>
      </Block>
    </div>
  ),
};
