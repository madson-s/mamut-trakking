import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Container } from './Container';
import { Text } from './Text';

const meta = {
  title: 'UI/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Centres and caps the content width. `grid` is the 1216px / 12-column grid of the ' +
          'design and the default of the site; `Section` already wraps its children in one, so a ' +
          'page only reaches for `Container` inside a full-bleed band (`Section container={false}`).',
      },
    },
  },
  // `children` entra no nível do meta para que as stories que só definem
  // `render` não precisem repetir os args obrigatórios do componente.
  args: {
    size: 'grid',
    padded: true,
    children: (
      <div className="rounded-card border border-line bg-surface-muted px-5 py-4">
        <Text size="sm" tone="muted">
          Resize the canvas: the box stops growing at the chosen width.
        </Text>
      </div>
    ),
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['grid', 'wide', 'prose', 'full'] },
    padded: { control: 'boolean' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** The four widths, stacked so the difference is visible. */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 py-8">
      {(['grid', 'wide', 'prose', 'full'] as const).map((size) => (
        <Container key={size} size={size}>
          <div className="rounded-card border border-line bg-surface-muted px-5 py-4">
            <Text size="sm" tone="muted" className="font-mono">
              size=&quot;{size}&quot;
            </Text>
          </div>
        </Container>
      ))}
    </div>
  ),
};

/**
 * `padded={false}` removes the 24px gutter — for bands that already control
 * their own side spacing, such as a full-bleed photographic card.
 */
export const WithoutGutter: Story = {
  render: () => (
    <div className="flex flex-col gap-3 py-8">
      {[true, false].map((padded) => (
        <Container key={String(padded)} padded={padded}>
          <div className="rounded-card bg-brand-soft px-5 py-4">
            <Text size="sm" className="font-mono text-brand-ink">
              padded={String(padded)}
            </Text>
          </div>
        </Container>
      ))}
    </div>
  ),
};
