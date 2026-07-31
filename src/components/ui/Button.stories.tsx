import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';
import { Text } from './Text';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Renders a `<button>`, a `<Link>` (internal route) or an `<a target="_blank">` ' +
          '(absolute URL) depending on the props. Use `outlineOnMedia` over photo or video.',
      },
    },
  },
  args: { children: 'Escolha a sua trilha', variant: 'primary', size: 'md', arrow: true },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'outline', 'outlineOnMedia', 'ghost'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    justify: { control: 'inline-radio', options: ['center', 'between'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex flex-wrap items-center gap-4">
        <Button {...args} variant="primary" />
        <Button {...args} variant="outline" />
        <Button {...args} variant="ghost" />
      </div>
      <div className="flex flex-wrap items-center gap-4 rounded-panel bg-surface-inverse p-8">
        <Button {...args} variant="primary" />
        <Button {...args} variant="outlineOnMedia" />
      </div>
      <Text size="xs" tone="muted">
        The second row stands in for a block over a photo — that is where `outlineOnMedia` belongs.
      </Text>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <Button {...args} size="sm">
        WhatsApp
      </Button>
      <Button {...args} size="md">
        Escolha a sua trilha
      </Button>
      <Button {...args} size="lg">
        Explorar a trilha
      </Button>
    </div>
  ),
};

export const AsLink: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <Button href="/pt/aventuras" arrow>
        Internal route (Link)
      </Button>
      <Button href="https://wa.me/5575999359150" variant="outline" arrow>
        Absolute URL (new tab)
      </Button>
    </div>
  ),
};

/** Card CTA: full width with the arrow pushed to the edge. */
export const BlockInCard: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div className="max-w-[406px] rounded-card-lg bg-surface-inverse p-7">
      <Button {...args} variant="outlineOnMedia" size="lg" block justify="between">
        Explorar a trilha
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};
