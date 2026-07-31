import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Heading } from './Heading';
import { Text } from './Text';

const meta = {
  title: 'UI/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '`as` sets the semantic tag and `size` the visual scale — always separate, so a page ' +
          'can keep a single `h1` without giving up the size from Figma.',
      },
    },
  },
  args: { children: 'Somos o bando que guia a sua tribo.', size: 'section', tone: 'default' },
  argTypes: {
    as: { control: 'inline-radio', options: ['h1', 'h2', 'h3', 'p', 'span'] },
    size: { control: 'inline-radio', options: ['hero', 'section', 'card', 'quote'] },
    tone: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'brand', 'onMedia', 'onMediaMuted'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      {(['hero', 'section', 'card', 'quote'] as const).map((size) => (
        <div key={size} className="flex flex-col gap-1">
          <Text size="xs" tone="muted">
            size=&quot;{size}&quot;
          </Text>
          <Heading size={size}>Vale do Pati em cinco dias</Heading>
        </div>
      ))}
    </div>
  ),
};

export const OverPhoto: Story = {
  render: () => (
    <div className="rounded-panel bg-surface-inverse p-10">
      <Heading size="hero" tone="onMedia">
        MAMUT GUIA. VOCÊ SÓ PRECISA APROVEITAR.
      </Heading>
    </div>
  ),
};
