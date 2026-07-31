import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Checkbox with an optional label. `struck` keeps the item visible but crossed out — ' +
          'used by the voucher checklist for gear that is not needed on a given trip.',
      },
    },
  },
  args: { label: 'Water (1,5lt per person)', defaultChecked: true },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-2 p-6">
      <Checkbox label="Marcado" defaultChecked />
      <Checkbox label="Desmarcado" />
      <Checkbox label="Riscado (não necessário nesta viagem)" struck />
      <Checkbox label="Desabilitado" disabled />
      <Checkbox aria-label="Sem rótulo" defaultChecked />
    </div>
  ),
};
