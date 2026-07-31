import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Stat } from './Stat';
import { StarIcon } from './icons';

const meta = {
  title: 'UI/Stat',
  component: Stat,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Value + label pair. `plain` is the authority bar under the hero; `chip` is the ' +
          'bordered box used in the reviews section.',
      },
    },
  },
  args: { value: '+500', label: 'aventureiros guiados', variant: 'plain' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['plain', 'chip'] },
    align: { control: 'inline-radio', options: ['left', 'center'] },
  },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Chips: Story = {
  render: () => (
    <div className="flex flex-wrap items-stretch gap-4 p-6">
      <Stat variant="chip" value="140 +" label="Avaliações" />
      <Stat
        variant="chip"
        value={
          <span className="flex items-center gap-1">
            <StarIcon className="size-[17px] text-warning-500" />
            5.0
          </span>
        }
        label="Média de nota geral"
      />
      <Stat variant="chip" value="#4 no Ranking" label="de atividades ao ar livre em Lençóis" />
    </div>
  ),
};
