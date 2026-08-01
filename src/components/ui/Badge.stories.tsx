import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './Badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Informational chip: duration, level, distance, seal, role label. ' +
          'Use `outlineOnMedia` for chips sitting on a photo — that white is theme-invariant and ' +
          'must not be swapped for `text-content`. Default radius is the pill; `radius="chip"` ' +
          '(20px) is the stat chip of the reviews block.',
      },
    },
  },
  args: { children: 'Moderado', variant: 'outline', size: 'sm' },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['outline', 'outlineOnMedia', 'brand', 'solid', 'soft'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">Moderado</Badge>
        <Badge variant="brand">Guia &amp; Fundador</Badge>
        <Badge variant="solid">Novo</Badge>
        <Badge variant="soft">Cadastur</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-2 rounded-panel bg-surface-inverse p-8">
        <Badge variant="outlineOnMedia">5 Dias</Badge>
        <Badge variant="outlineOnMedia">Médio</Badge>
        <Badge variant="outlineOnMedia">78km</Badge>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-6">
      <Badge size="sm">sm · card chip</Badge>
      <Badge size="md">md</Badge>
      <Badge size="lg">lg · Avaliações verificadas · TripAdvisor</Badge>
    </div>
  ),
};
