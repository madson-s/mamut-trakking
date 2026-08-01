import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Divider } from './Divider';
import { Text } from './Text';

const meta = {
  title: 'UI/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '1px rule in the theme line colour. It is a `role="separator"` span rather than an ' +
          '`<hr>`, so it can sit inside a flex row as a vertical rule. For the hairline between ' +
          'page bands use `Section bordered` instead — that one belongs to the section.',
      },
    },
  },
  args: { orientation: 'horizontal' },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-4 p-6">
      <Text size="sm">Cachoeira do Palmital · 2 dias</Text>
      <Divider />
      <Text size="sm">Vale do Pati · 5 dias</Text>
      <Divider />
      <Text size="sm">City Tour em Lençóis · 1 dia</Text>
    </div>
  ),
};

/** Vertical needs a height from the row — here `items-center` plus `h-4`. */
export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <Text size="sm" tone="muted">
        Guias nativos
      </Text>
      <Divider orientation="vertical" className="h-4" />
      <Text size="sm" tone="muted">
        Chapada Diamantina
      </Text>
      <Divider orientation="vertical" className="h-4" />
      <Text size="sm" tone="muted">
        Lençóis, Bahia
      </Text>
    </div>
  ),
};
